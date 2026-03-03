# ADR-008: Communications & Messaging

**Status:** Accepted
**Date:** 2026-03-03
**Sources:** `spec/messaging.md`, `spec/workflows.md`

## Context

Internal messaging in a political campaign carries sensitive strategic information — campaign plans, voter intelligence, candidate communications — that can cause real harm if exposed. At the same time, campaigns need fast, flat, contextual communication that feels more like Signal than Outlook. The messaging system must handle both security requirements (E2E encryption, no platform access to message content) and operational requirements (contextual messages attached to voters/events/shifts, broadcasts to hundreds of field volunteers, war room coordination on election day).

External communications (email campaigns, SMS, WhatsApp outreach to voters) require a different consent model — per-channel and per-purpose tracking to comply with data protection laws across all target jurisdictions.

## Decision

### E2E encryption for internal messages by default

All internal messaging (DMs, group conversations) is E2E encrypted using the Signal Protocol (Double Ratchet) or equivalent. GreenGrass cannot read message content and has nothing to hand over if compelled. Tenants can opt into server-side key escrow at the org level (not per-user), which enables server-side search and easier device recovery at the cost of GreenGrass being able to access content under valid legal process.

The choice is surfaced clearly: if escrow is enabled, the messaging UI indicates that messages are not E2E encrypted. Key escrow is an org-level decision by the Org Admin, not an individual user choice.

**Alternatives considered:** Server-side encryption only was rejected because it makes GreenGrass a target for data compulsion. E2E-only with no escrow option was rejected because some organizations prioritize searchability and easy device recovery over maximum security.

### Per-channel + per-purpose consent tracking

Consent for external communications is tracked per combination of channel (email, SMS, WhatsApp) and purpose (transactional, event-related, fundraising, GOTV, activism/advocacy, newsletter). Smart defaults infer reasonable initial consent based on opt-in context — giving a phone number for an event RSVP implies SMS transactional and event-related consent, but not fundraising.

Consent is revocable (one-click unsubscribe with immediate effect), auditable (grant/revoke timestamps logged), accessible (supporters manage preferences from their profile), and enforced (the comms system checks consent at send time — no message goes out without valid consent for that channel + purpose).

**Alternatives considered:** Simple global opt-in/opt-out was rejected because it's non-compliant with LGPD, PDPA, and TCPA which require granular consent. Per-message consent was rejected as impractically granular for both users and the system.

### Optional message threading

Messages appear in a flat chronological stream by default, but any message can be replied to as a thread. This balances campaign speed (flat chat for small teams) with scale (threading when groups get large during GOTV). Threads keep side conversations from cluttering the main stream.

### Broadcasts use server-side encryption

Broadcasts (one-to-many from staff to large groups: org-wide, role-based, geographic, shift-based) use server-side encryption with the tenant's envelope key, not E2E. Individual key exchange for broadcast recipients is impractical at scale. The broadcast encryption mode is disclosed in the UI. Recipients cannot reply to broadcasts — they can start a DM with the sender.

### Contextual messages inherit org encryption setting

Messages attached to platform objects (event comments, shift threads, donation flag discussions, poll watcher issue threads) follow the org's encryption mode. E2E orgs get E2E contextual messages (with the tradeoff that server-side search is unavailable). Escrow orgs get searchable contextual messages. This avoids creating a confusing mixed encryption model within a single org.

Alliance messages use an independently generated alliance group key, distributed to each member org encrypted with that org's public key. Key rotation occurs on every alliance membership change, ensuring forward secrecy and post-compromise security.

## Consequences

**Benefits:**
- E2E encryption by default means GreenGrass has nothing to disclose under compulsion for most tenants
- Per-channel + per-purpose consent tracking satisfies the strictest data protection requirements (LGPD, PDPA, TCPA)
- Optional threading scales communication from small campaign teams to hundreds of GOTV volunteers without forcing complexity on small groups
- Contextual messages keep communication attached to the data it concerns, reducing context-switching
- Alliance key rotation ensures departing members can't read future messages

**Costs:**
- E2E encryption eliminates server-side search — a meaningful UX loss for organizations that rely on message search
- Signal Protocol implementation requires careful security audit (recommended: use established libsignal library, not custom implementation)
- E2E encrypted media cannot be deduplicated server-side, increasing storage costs
- Alliance key rotation on membership changes adds cryptographic ceremony overhead

**Constraints:**
- No read receipts — delivery receipts only (sent to server, delivered to device), consistent with privacy-first philosophy
- No disappearing messages — all messages persist until manually deleted or retention policy expires, avoiding compliance issues
- Voice messages are scoped to field-related conversations (Team Lead channels, shift threads, GOTV war room) where typing isn't practical
- Security alerts and breach notifications cannot be muted by users — always delivered at critical priority

**Related ADRs:** [ADR-002](002-security-threat-model.md) (encryption architecture, E2E as security control), [ADR-003](003-identity-access-organization.md) (alliance communication, cross-org messaging), [ADR-009](009-compliance-legal.md) (consent enforcement, TSE messaging restrictions)
