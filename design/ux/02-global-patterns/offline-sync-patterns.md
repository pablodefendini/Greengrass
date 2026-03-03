# Offline & Sync Patterns

## Purpose

This document defines how the platform communicates connectivity status, data freshness, sync progress, and conflict resolution to users. Offline support is a first-class feature, not a degraded fallback — these patterns must make offline operation feel natural and trustworthy.

The design target: a volunteer canvassing door-to-door with intermittent connectivity should never wonder "is my data current?" or "did my work get saved?" The UI must answer both questions at a glance, every moment.

## Connectivity States

The platform recognizes five connectivity states. The UI treatment differs by context (standard app vs. field mode).

### State Definitions

| State | Condition | Duration |
|-------|-----------|----------|
| **Connected** | Real-time connection to server. Sync active. | Normal operation |
| **Connected (stale)** | Connection exists but last successful sync >5 min ago | Transitional — usually resolves quickly |
| **Syncing** | Actively syncing data (push or pull) | Brief — seconds to ~1 minute |
| **Offline** | No server connection. Local-only operation. | Minutes to hours |
| **Sync error** | Connection exists but sync is failing | Until resolved or retried |

### Standard App Indicator

In the header bar, a compact indicator shows current state:

```
Connected:       [●]                       (green dot, no text — unobtrusive default)
Stale:           [● Last sync: 8 min ago]  (amber dot + timestamp)
Syncing:         [↻]                       (animated sync icon, brief)
Offline:         [◌ Offline]               (grey dot + label, persistent)
Sync error:      [⚠ Sync failed · Retry]  (red icon + action link)
```

Tapping the indicator in any state opens a sync detail panel showing:
- Time of last successful sync
- Number of pending local changes (queued for upload)
- Current sync progress (if syncing)
- Error details (if error state)
- "Sync now" manual trigger

### Field Mode Indicator

In field mode, the sync indicator is larger and more prominent — stale data during canvassing is operationally dangerous (you might knock a door that was already knocked by another volunteer).

```
Connected:       [● Synced 30s ago]        (green, with timestamp always visible)
Stale:           [● Synced 12 min ago]     (amber, growing urgency as time passes)
Syncing:         [↻ Syncing...]            (animated, full-width bar)
Offline:         [◌ Offline · 47 min]      (grey, with elapsed offline time)
Sync error:      [⚠ Sync failed · Retry]  (red, full-width bar, impossible to miss)
```

**Why the timestamp is always visible in field mode:** In the standard app, "connected" needs no annotation — the user trusts that the app is live. In field mode, the volunteer needs to know *how* live. "Synced 30 seconds ago" vs. "synced 12 minutes ago" is the difference between a reliable walk list and one that might have stale assignments.

---

## Data Freshness

### Freshness Indicators on Records

When viewing records that may be stale (cached from a previous sync), the UI shows a freshness indicator:

```
┌────────────────────────────────────────┐
│  Ana Martínez                          │
│  Last updated: 2 hours ago  [↻ Refresh]│
│                                        │
│  Phone: (787) 555-0123                 │
│  Address: Calle Sol 45, San Juan       │
│  Support score: 4                      │
│  Last contact: Jan 15 (canvassing)     │
└────────────────────────────────────────┘
```

**Rules:**
- Records updated within the last sync cycle: no freshness indicator (current)
- Records >1 hour since last update: subtle timestamp ("Last updated: 2 hours ago")
- Records >24 hours since last update: amber indicator ("Data may be outdated")
- Records >7 days since last update: prominent warning ("Stale data — sync required")

### Freshness in Field Mode

Walk list records in field mode show freshness differently — assignment status matters more than record age:

- **Assigned to you, synced recently:** No indicator (trust the assignment)
- **Assigned to you, but another volunteer may have visited since last sync:** Amber badge ("May have been visited — check before knocking")
- **Re-assigned since your last sync:** Red badge ("Removed from your list — skip") — with the actual update applied on next sync

---

## Pending Changes Queue

When the user makes changes offline (recording a canvassing interaction, composing a message, updating a contact), changes are saved locally and queued for sync.

### Queue Indicator

The sync detail panel shows pending changes:

```
┌──────────────────────────────────────┐
│  Pending Changes (7)                 │
│                                      │
│  3 canvassing interactions           │
│  2 contact updates                   │
│  1 message (queued)                  │
│  1 event check-in                    │
│                                      │
│  These changes will upload when      │
│  you're back online.                 │
│                                      │
│  [Sync Now]  (greyed out if offline) │
└──────────────────────────────────────┘
```

### Change Status Icons

Each pending change shows its status:

| Icon | Status | Meaning |
|------|--------|---------|
| ◌ | Pending | Saved locally, waiting for connectivity |
| ↻ | Uploading | Currently being sent to server |
| ✓ | Synced | Successfully uploaded |
| ⚠ | Conflict | Server has a newer version — needs resolution |
| ✗ | Failed | Upload failed — will retry |

### In-Context Indicators

Records with pending local changes show a subtle indicator in list and detail views:

```
│  Ana Martínez        ◌ Edited locally  │
```

This tells the user: "Your changes are saved on this device but haven't reached the server yet." It's informational, not alarming — local changes are the normal state during offline operation.

---

## Sync Behavior

### Automatic Sync

When connectivity is available, the app syncs automatically:
- **On app launch:** Full sync of any changes since last session
- **In background:** Incremental sync every 60 seconds (standard app) or 30 seconds (field mode)
- **On significant action:** Immediate sync attempt after creating/updating a record (if online)
- **On connectivity restore:** Full sync when transitioning from offline to online

### Manual Sync

A "Sync Now" action is available:
- In the sync detail panel (tap the sync indicator)
- In field mode, as a button in the field header
- Pull-to-refresh on list views triggers a sync

### Sync Progress

During a sync with significant data (initial sync, post-offline bulk sync), show progress:

```
┌──────────────────────────────────────┐
│  Syncing...                          │
│  ████████████░░░░░░  67%             │
│  Uploading 5 of 7 changes           │
│  Downloading updated walk list       │
└──────────────────────────────────────┘
```

For routine incremental syncs (small, fast), no progress indicator — just the brief animated sync icon in the header.

---

## Conflict Resolution

Conflicts occur when the same record is modified both locally and on the server before a sync. The event sourcing architecture (from system.md) handles most conflicts automatically, but some require user attention.

### Automatic Resolution

The server resolves most conflicts using domain-specific rules:
- **Last-write-wins** for simple fields (phone number, address, status)
- **Additive merge** for interaction history (canvassing responses are never lost — both versions are kept)
- **Server-wins** for assignment changes (if a turf is re-assigned, the server's assignment takes priority)
- **Client-wins** for in-progress field work (if a volunteer is mid-shift, their local data takes priority until the shift ends)

### User-Facing Conflicts

Rare, but possible. When automatic resolution isn't sufficient, the user sees a conflict notification:

```
┌──────────────────────────────────────┐
│  ⚠ Sync Conflict                    │
│                                      │
│  Contact: Ana Martínez               │
│  Phone number was updated by another │
│  user while you were offline.        │
│                                      │
│  Your version:  (787) 555-0123       │
│  Server version: (787) 555-0456      │
│                                      │
│  [Keep Mine]  [Keep Theirs]  [Both]  │
└──────────────────────────────────────┘
```

**Rules for conflict presentation:**
- Show only conflicts the user can meaningfully resolve (don't surface system-level conflicts)
- Default to the safer option (if in doubt, keep both versions and let a human sort it out)
- Conflicts queue in the notification system and persist until resolved
- Never block the user from continuing to work while conflicts are pending

---

## Offline-Available Features

### Feature Availability Matrix

| Feature | Online | Offline | Notes |
|---------|--------|---------|-------|
| Field mode (canvassing) | Full | Full | Walk list pre-downloaded on shift start |
| Field mode (voter registration) | Full | Full | Forms work locally, queue submission |
| Field mode (GOTV door knocking) | Full | Full | Same as canvassing |
| Event check-in | Full | Full | Attendee list pre-downloaded |
| Read messages | Full | Cached | Shows previously synced messages |
| Compose messages | Full | Queue | Composed locally, sent on sync |
| View contacts | Full | Cached | Read-only, previously synced contacts |
| View shifts | Full | Cached | Previously synced shift schedule |
| Training modules | Full | Cached | Previously viewed modules available |
| Ride request | Full | Queue | Request created locally, submitted on sync |
| Poll watcher issue report | Full | Queue | Report queued locally |
| Cash donation recording | Full | Queue | Recorded locally with receipt |
| Dashboards | Full | Unavailable | Requires server-side aggregation |
| Settings & config | Full | Unavailable | Requires server validation |
| Builders (email, form, etc.) | Full | Unavailable | Complex server-side dependencies |
| Search | Full | Limited | Can search cached local data only |
| Phone banking | Full | Unavailable | Requires call connectivity |
| Data import/export | Full | Unavailable | File handling requires server |
| Social media posting | Full | Unavailable | Requires API connectivity |

### Offline Feature Presentation

Per the navigation model (navigation-model.md), offline-unavailable features are **greyed out with an offline badge** — not hidden. Tapping a greyed-out item shows:

```
┌──────────────────────────────────────┐
│  ◌  This feature requires a          │
│     connection                        │
│                                      │
│  You're currently offline. This      │
│  feature will be available when       │
│  you reconnect.                       │
│                                      │
│  You can still:                       │
│  • View cached contacts              │
│  • Read synced messages              │
│  • Continue your canvassing shift     │
│                                      │
│  [Dismiss]                            │
└──────────────────────────────────────┘
```

The "You can still" section redirects attention to what's available — never leave the user at a dead end.

---

## Pre-Loading and Caching

### Shift Pre-Load

When a volunteer taps "Start Shift," the app downloads everything needed for the shift before entering field mode:

1. Walk list (voter records for assigned turf)
2. Map tiles for the turf area
3. Script and response options
4. Team roster (for team leads)

Progress shown as:

```
┌──────────────────────────────────────┐
│  Preparing your shift...             │
│                                      │
│  ✓ Walk list (47 doors)              │
│  ✓ Map tiles                         │
│  ↻ Script and forms...               │
│  ○ Team roster                       │
│                                      │
│  ████████████████░░░  82%            │
│                                      │
│  [Cancel]                             │
└──────────────────────────────────────┘
```

**If connectivity drops during pre-load:** The pre-load resumes when connectivity returns. If the volunteer can't wait, they can start the shift with whatever data has been downloaded (with a warning about incomplete data).

### Background Caching

The app proactively caches data the user is likely to need:
- **Messages:** Last 100 conversations, synced incrementally
- **Contacts:** Recently viewed contacts (last 50)
- **Shifts:** Upcoming 7 days of shift schedule
- **Training:** Previously started modules
- **Events:** Upcoming events the user has RSVP'd to

Cache is managed automatically — older cached data is evicted when storage limits are reached. The user never manages cache manually.

### Map Tile Caching

Map tiles for offline use are cached in two ways:
- **Automatic:** When a shift is pre-loaded, tiles for the turf area are downloaded
- **Proactive:** If the volunteer has Wi-Fi, tiles for all their upcoming turfs are pre-downloaded in the background

Tile cache size is bounded (configurable, default ~200MB) to avoid filling the device storage on low-end phones.

---

## Sync Timing and Battery

### Battery Awareness

On mobile, the sync frequency adapts to battery level:
- **>50% battery:** Normal sync interval (30s field mode, 60s standard)
- **20-50% battery:** Reduced sync interval (60s field mode, 120s standard)
- **<20% battery:** Minimal sync (manual only, or every 5 minutes for critical field mode data)

The user is never notified about battery-adaptive sync — it happens silently. The only visible effect is that the "Last synced" timestamp updates less frequently on low battery.

### Data Usage Awareness

For users on metered connections (common in the target geographies):
- Initial sync and shift pre-load show estimated data size ("This will use approximately 15 MB")
- Background sync uses minimal bandwidth (only diffs, compressed)
- Map tile downloads are optional and show size warnings on metered connections

---

## Shift Lifecycle and Sync

A canvassing shift has a specific sync lifecycle:

1. **Pre-shift:** Full download of walk list, map tiles, script. Sync status: "Ready."
2. **During shift:** Each completed interaction saved locally immediately. Background sync pushes completed interactions every 30 seconds when connected. If offline, interactions accumulate locally.
3. **Shift pause:** If the volunteer pauses (takes a break), sync continues in background. Resume picks up where they left off.
4. **Shift end:** Volunteer taps "End Shift." App attempts a final sync of all remaining data. If offline, shows: "You have X unsaved interactions. They'll upload when you're back online. You can close the app safely."
5. **Post-shift:** Debrief prompt (hours, notes, issues). Synced when possible. The shift is "closed" locally even if the debrief hasn't synced yet.
6. **Abnormal exit:** App crash or device off. On next launch, the shift resumes at the last saved position. No data loss — each interaction is persisted locally the moment it's recorded.

---

## Error Recovery

### Sync Retry Strategy

Failed syncs retry with exponential backoff:
- First retry: immediately
- Second retry: 30 seconds
- Third retry: 2 minutes
- Subsequent retries: every 5 minutes
- After 10 failures: stop auto-retry, show persistent error with manual "Retry" button

### Data Integrity Safeguards

- **Local data is never deleted until confirmed synced.** The app keeps local copies of all interactions until the server acknowledges receipt.
- **Sync receipts.** The server returns a receipt for each synced event. Only after receipt confirmation is the local copy marked as synced.
- **Idempotent sync.** If the same event is sent twice (e.g., after a timeout where the server received it but the client didn't get the acknowledgment), the server deduplicates. No double-counting of interactions.

---

## Open Questions

1. **Sync notification on reconnect.** When a user comes back online after extended offline use, should the app show a notification summarizing what synced? ("You're back online. 23 interactions uploaded, walk list updated with 3 changes.") This is useful but could be noisy.

2. **Conflict frequency monitoring.** Should the platform track conflict rates per turf/team to identify operational issues? High conflict rates might indicate overlapping assignments or stale data distribution — problems that need human intervention, not just UX patterns.

3. **Offline duration limits.** Should there be a maximum offline duration after which the walk list is considered too stale to use? If a volunteer hasn't synced in 24 hours, their walk list might be completely wrong. Should the app warn or block?

<!-- REVISIT: The exact data sizes for pre-loading (walk list + map tiles + script) need to be measured against real data volumes once the data model is implemented. The 200MB tile cache limit and the shift pre-load estimates are placeholder values. -->
