# ADR-005: Offline-First & Sync

**Status:** Accepted
**Date:** 2026-03-03
**Sources:** `design/architecture/system.md`, `spec/workflows.md`, `design/ux/02-global-patterns/offline-sync-patterns.md`

## Context

GreenGrass's core field operations — canvassing, voter registration, event check-in, GOTV door knocking — happen in locations with poor or no connectivity: rural areas, outdoor events, dense urban neighborhoods with spotty coverage. These are also the platform's most time-sensitive workflows. A volunteer standing at a door cannot wait for a network request. A voter registration drive at a rural market cannot pause for connectivity. The platform must work reliably without any network connection for these critical paths.

At the same time, data captured offline must eventually sync to the server, and multiple devices capturing data about the same records offline creates conflicts that must be resolved without data loss.

## Decision

### Offline-first for field operations

Canvassing, voter registration, event check-in, and GOTV door knocking work fully offline. Data is captured locally on the device, encrypted in SQLCipher, and synced to the server when connectivity is available. Walk lists, map tiles, canvassing scripts, and voter registration forms are pre-downloaded at shift start. Volunteers can complete an entire field shift without ever connecting to the network.

Non-field workflows (dashboards, communications, fundraising, reporting) require connectivity and degrade gracefully when offline — features are greyed out with offline badges, never hidden.

**Alternatives considered:** Online-first with caching was rejected because it fails completely when connectivity drops during a field operation, which is the norm in target environments. Full offline for all features was rejected as unnecessary scope — administrative workflows don't benefit from offline capability and would significantly increase complexity.

### Event sourcing for sync protocol

The sync protocol is based on event sourcing — every data change is captured as an immutable event (who changed what, when, from which device). Events are stored locally and replayed to the server when connected. This provides three capabilities simultaneously:

1. **Offline sync** — events accumulate locally and batch-sync when connected
2. **Audit trail** — the event log is the audit trail, not a separate system
3. **Conflict detection** — events from different devices can be compared to identify conflicts

Events are synced in chronological order with idempotency guarantees — replaying the same event twice has no effect. The sync protocol handles interrupted connections gracefully.

**Alternatives considered:** CRDT-based sync was considered but rejected as overengineered for this domain — most campaign data fields don't benefit from automatic conflict resolution, and the audit trail requirement means we want explicit event records anyway. Simple last-write-wins was rejected because it silently discards data.

### Hybrid push + pull walk list refresh

During GOTV operations, the server pushes walk list updates to connected devices in real-time (removing voters confirmed as having voted). Volunteers can pull-to-refresh as a fallback for intermittent connectivity. Stale entries are marked visually with a freshness indicator showing time since last sync.

This balances the need for up-to-date walk lists on election day (where stale data wastes time on voters who've already voted) with the reality that connectivity is unreliable in the field.

### Five connectivity states with field-mode-specific treatment

The platform distinguishes five connectivity states: Connected, Stale, Syncing, Offline, and Error. Each state has distinct UI treatment that varies by context:

- **Standard app:** "Connected" needs no annotation; issues surface progressively
- **Field mode:** Sync timestamps are always visible because stale data is operationally dangerous. Warnings grow urgency as offline time increases (amber at 12+ minutes)

Data freshness indicators show when records were last synced: records >1 hour stale get subtle timestamps, >24 hours get amber warnings, >7 days get prominent "sync required" warnings. Pending local changes display their sync status: pending, uploading, synced, conflict, or failed.

Battery-aware sync adapts frequency to battery level (normal >50%, reduced 20-50%, minimal <20%) without user visibility.

## Consequences

**Benefits:**
- Field volunteers can work reliably regardless of connectivity — no workflow interruption
- Event sourcing unifies sync, audit, and conflict detection into a single mechanism
- Push + pull walk list refresh keeps GOTV data as fresh as connectivity allows
- Five-state connectivity model prevents volunteers from unknowingly working with dangerously stale data
- Battery-aware sync extends device life during long field shifts

**Costs:**
- Offline-first significantly increases client-side complexity (local database, encryption, sync engine, conflict UI)
- Event sourcing generates more storage than traditional CRUD — every change is an event, not a mutation
- Pre-downloading walk lists, map tiles, and scripts at shift start requires meaningful bandwidth and device storage (bounded at ~200MB for map tiles)
- Conflict resolution, even with automatic rules for non-contentious fields, requires Data Manager capacity for flagged conflicts

**Constraints:**
- Local storage must be encrypted (SQLCipher) and wiped at session end
- Sync must be idempotent — interrupted syncs must resume safely
- Map tile caching must work within storage limits of low-end Android phones
- Election day sync must prioritize voter status updates over all other event types

**Related ADRs:** [ADR-002](002-security-threat-model.md) (on-device encryption, data minimization), [ADR-004](004-data-model-integrity.md) (merge-and-flag conflict resolution, event sourcing as audit trail), [ADR-006](006-field-operations-gotv.md) (GOTV walk list refresh, election day sync priority)
