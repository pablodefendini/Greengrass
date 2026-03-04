# Messaging Wireframes

## Purpose

Internal messaging is how the campaign coordinates. DMs between staff, group conversations for teams, briefings for the Candidate, and the War Room coordination channel on election day. This document wireframes the messaging screens across desktop and mobile.

Note: this document is organized by UI pattern (conversation list, thread anatomy, message types, special channels) rather than by individual screen, since messaging screens share significant structural overlap.

## Scope

| ID | Screen | Personas | Offline | Mobile | Section |
|----|--------|----------|---------|--------|---------|
| MSG-001 | Message List (Inbox) | All authenticated | Partial | Primary | Conversation List |
| MSG-002 | Conversation View (DM) | All authenticated | Partial | Primary | Thread Anatomy |
| MSG-003 | Conversation View (Group) | All authenticated | Partial | Primary | Thread Anatomy |
| MSG-004 | Thread View | All authenticated | Partial | Primary | Thread Anatomy |
| MSG-005 | Group Create/Edit | OA, CD, FD, FiD, VC | No | Yes | Group Conversation Info |
| MSG-006 | Broadcast Composer | OA, CD, FiD, VC | No | Desktop | New Conversation |
| MSG-007 | War Room Channel | OA, FiD, CD, VC | No | Yes | War Room Channel |
| MSG-008 | Contextual Thread (Event) | OA, VC, TL | Partial | Yes | Contextual Threads |
| MSG-009 | Contextual Thread (Shift) | OA, FiD, VC, TL | Partial | Yes | Contextual Threads |
| MSG-010 | Contextual Thread (Issue) | OA, FiD | No | Yes | Contextual Threads |
| MSG-011 | Contextual Thread (Donation Flag) | OA, FD | No | Desktop | Contextual Threads |
| MSG-012 | Candidate Briefing View | C | Partial | Primary | Candidate Briefing Message |
| MSG-013 | Candidate Approval Queue | C | No | Primary | Approval Request in Messages |
| MSG-014 | Alliance Channel | OA | No | Yes | Alliance Channel |

## Messaging Navigation Context

```
All personas see "Messages" in their sidebar. The messaging section is simple:

MESSAGING
  Inbox              → MSG-001
  New Message         → compose

War Room channel (MSG-007) appears in sidebar during GOTV activation only.
Alliance Channel (MSG-014) appears in the Alliance sidebar section.
Contextual threads (MSG-008 through MSG-011) are accessed from their parent context (event detail, shift view, issue queue, donation flag), not from the messaging sidebar.
```

---

<!-- MSG-001 -->
## Desktop — Conversation List + Thread (Split View)

The default messaging layout on desktop uses a split view: conversation list on the left, active thread on the right.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  🌿 Partido Verde          🔍 Search...                    ●    🔔3  [PD ▾] │
├──────────────┬─────────────────────────┬─────────────────────────────────────┤
│              │  Messages        🔍  ✏  │  María Santos                   ⋯  │
│  OVERVIEW    │  ─────────────────────  │  ──────────────────────────────     │
│    Dashboard │                         │                                     │
│              │  📌 Pinned               │  🔒 Encrypted                      │
│  MESSAGING   │  ┌─────────────────────┐│                                     │
│  ◉ Messages  │  │ 📌 Leadership Team  ││  María Santos           Feb 28     │
│              │  │ María: Updated talk.││  Hi Pablo, here are the updated    │
│  ...         │  │ 30 min ago      (3) ││  talking points for tomorrow's     │
│              │  └─────────────────────┘│  rally. I've highlighted the       │
│              │  ┌─────────────────────┐│  changes from last week:           │
│              │  │ 📌 Campaign Manager ││                                     │
│              │  │ Schedule change for ││  • Climate action plan (new)       │
│              │  │ 2 hours ago         ││  • Education funding (updated)     │
│              │  └─────────────────────┘│  • Healthcare access (unchanged)   │
│              │                         │                                     │
│              │  Recent                 │  ──────────────────────────────     │
│              │  ┌─────────────────────┐│                                     │
│              │  │ ◉ María Santos      ││  Pablo Defendini          Feb 28   │
│              │  │ Hi Pablo, here are  ││  Thanks María. The climate section │
│              │  │ the updated talk... ││  looks great. One question — are   │
│              │  │ 30 min ago          ││  we using the 2024 or 2025 data   │
│              │  └─────────────────────┘│  for the emissions targets?        │
│              │  ┌─────────────────────┐│                                     │
│              │  │  Elena Torres       ││  ──────────────────────────────     │
│              │  │  Great turnout      ││                                     │
│              │  │  yesterday!         ││  María Santos              now     │
│              │  │  5 hours ago        ││  2025 data. I'll add a footnote   │
│              │  └─────────────────────┘│  with the source.                  │
│              │  ┌─────────────────────┐│                                     │
│              │  │  Carlos Rivera      ││                                     │
│              │  │  Turf 7 is ready    ││                                     │
│              │  │  Yesterday          ││                                     │
│              │  └─────────────────────┘│                                     │
│              │  ┌─────────────────────┐│                                     │
│              │  │  Field Team         ││                                     │
│              │  │  Pedro: Can someone ││                                     │
│              │  │  cover my shift?    ││                                     │
│              │  │  Yesterday          ││  ┌────────────────────────────┐     │
│              │  └─────────────────────┘│  │  Type a message...     📎  │     │
│              │                         │  └────────────────────────────┘     │
│              │                         │  [Send]                             │
└──────────────┴─────────────────────────┴─────────────────────────────────────┘
```

### Conversation List Anatomy

```
┌─────────────────────────────┐
│  [Avatar]  Conversation Name│
│            Last message prev│
│            Time ago    (N)  │  ← unread count badge
└─────────────────────────────┘

States:
  ◉  = Unread (bold name, bold preview, badge count)
  📌 = Pinned (appears in "Pinned" section at top)
  🔇 = Muted (no badge count, greyed notification)
  👤 = DM (single avatar)
  👥 = Group (stacked avatars or group icon)
```

<!-- MSG-002, MSG-003, MSG-004 -->
### Thread Anatomy

```
┌─────────────────────────────────────────┐
│  [Name]                         [⋯]    │  ← Thread header
│  ────────────────────────────────       │     ⋯ = mute, pin, search, info
│                                         │
│  🔒 Encrypted                           │  ← E2E indicator (if applicable)
│                                         │
│  [Message bubbles — sender on left,     │
│   "you" on right, chronological]        │
│                                         │
│  [Date separator: "Today"]              │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [Type a message...]       📎   │    │  ← Composer
│  └─────────────────────────────────┘    │     📎 = attachments
│  [Send]                                 │
└─────────────────────────────────────────┘
```

### Message Bubble Types

```
Received (left-aligned):
┌─────────────────────────────┐
│  [Avatar]  Sender Name  Time│
│  Message text here that can │
│  wrap across multiple lines │
│  and includes formatting.   │
└─────────────────────────────┘

Sent (right-aligned):
          ┌─────────────────────────────┐
          │  Message text here.         │
          │                 Time  ✓✓    │
          └─────────────────────────────┘

✓  = Sent (server received)
✓✓ = Delivered (recipient's device received)
No read receipts — by design (spec decision).

System message (centered, muted):
         ── María added Elena ──
         ── Feb 28, 2026 ──
```

### Thread Actions Menu (⋯)

```
┌──────────────────┐
│  🔍 Search thread │
│  📌 Pin / Unpin   │
│  🔇 Mute / Unmute │
│  ℹ  Thread info   │
│  🗑 Delete thread  │
└──────────────────┘

Thread info shows:
- Participants (with avatars)
- Encryption status
- Created date
- Shared files
- For groups: member list, add/remove members
```

---

## Mobile — Conversation List

```
┌──────────────────────────────┐
│  ≡  Messages        🔍   ✏  │
├──────────────────────────────┤
│                              │
│  📌 Pinned                   │
│  ┌──────────────────────────┐│
│  │ 👥 Leadership Team    →  ││
│  │ María: Updated talking   ││
│  │ points for tomorrow...   ││
│  │ 30 min ago           (3) ││
│  ├──────────────────────────┤│
│  │ 👤 Campaign Manager   →  ││
│  │ Schedule change for Thu  ││
│  │ 2 hours ago              ││
│  └──────────────────────────┘│
│                              │
│  Recent                      │
│  ┌──────────────────────────┐│
│  │ 👤 María Santos      →  ││
│  │ Hi Pablo, here are the   ││
│  │ updated talking points...││
│  │ 30 min ago               ││
│  ├──────────────────────────┤│
│  │ 👤 Elena Torres      →  ││
│  │ Great turnout yesterday! ││
│  │ 5 hours ago              ││
│  ├──────────────────────────┤│
│  │ 👤 Carlos Rivera     →  ││
│  │ Turf 7 is ready for     ││
│  │ assignment               ││
│  │ Yesterday                ││
│  ├──────────────────────────┤│
│  │ 👥 Field Team        →  ││
│  │ Pedro: Can someone cover ││
│  │ my shift Saturday?       ││
│  │ Yesterday                ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  📋      📅      💬     ⋯   │
│ Shifts  Events  Msgs   More  │
└──────────────────────────────┘
```

### Mobile — Thread View (Full Screen)

```
┌──────────────────────────────┐
│  ←  María Santos       ⋯    │
├──────────────────────────────┤
│  🔒 Encrypted                │
│                              │
│  María Santos      Feb 28   │
│  ┌──────────────────────────┐│
│  │ Hi Pablo, here are the   ││
│  │ updated talking points   ││
│  │ for tomorrow's rally.    ││
│  │ I've highlighted the     ││
│  │ changes from last week:  ││
│  │                          ││
│  │ • Climate action (new)   ││
│  │ • Education (updated)    ││
│  │ • Healthcare (unchanged) ││
│  └──────────────────────────┘│
│                              │
│        ┌────────────────────┐│
│        │ Thanks María. The  ││
│        │ climate section    ││
│        │ looks great.       ││
│        │         Feb 28  ✓✓ ││
│        └────────────────────┘│
│                              │
│  María Santos          now   │
│  ┌──────────────────────────┐│
│  │ 2025 data. I'll add a   ││
│  │ footnote with the source.││
│  └──────────────────────────┘│
│                              │
│                              │
├──────────────────────────────┤
│  ┌──────────────────────────┐│
│  │ Type a message...    📎  ││
│  └──────────────────────────┘│
│  [Send]                      │
└──────────────────────────────┘
```

---

<!-- MSG-006 -->
## New Conversation

### Desktop — Compose

```
┌─────────────────────────────────────────┐
│  New Message                        ✕   │
│  ────────────────────────────────       │
│                                         │
│  To: ┌──────────────────────────┐       │
│      │ Mar                      │       │
│      ├──────────────────────────┤       │
│      │ 👤 María Santos          │       │
│      │ 👤 Marco Rivera          │       │
│      │ 👥 Marketing Team        │       │
│      └──────────────────────────┘       │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  Type a message...          📎  │    │
│  └─────────────────────────────────┘    │
│  [Send]                                 │
└─────────────────────────────────────────┘

- Type-ahead search for contacts and groups
- Multiple recipients creates a group conversation
- Encryption badge appears after recipient selection
```

---

<!-- MSG-012 -->
## Candidate Briefing Message

Briefings are styled distinctly from casual messages — structured, formatted, actionable.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  María Santos (Communications Director)                          Feb 28    │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  📋 BRIEFING: Rally Talking Points — March 5                          │ │
│  │  ──────────────────────────────────────────                           │ │
│  │                                                                       │ │
│  │  Event: Rally at Plaza del Mercado                                    │ │
│  │  Date: March 5, 6:00 PM                                              │ │
│  │  Expected attendance: 142 confirmed, ~200 expected                    │ │
│  │                                                                       │ │
│  │  Key topics:                                                          │ │
│  │  1. Climate action plan (NEW — lead with this)                        │ │
│  │  2. Education funding reform (updated numbers)                        │ │
│  │  3. Healthcare access (unchanged from last week)                      │ │
│  │                                                                       │ │
│  │  Attachments:                                                         │ │
│  │  📄 talking-points-march5.pdf                                         │ │
│  │  📄 rally-schedule.pdf                                                │ │
│  │                                                                       │ │
│  │  ⚠ Note: Local media confirmed (Channel 4, El Nuevo Día).            │ │
│  │  Avoid commenting on the Martínez lawsuit.                            │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  [Acknowledge]  [Reply]                                                      │
└──────────────────────────────────────────────────────────────────────────────┘

Briefings are:
- Visually distinct: bordered card, different background color
- Labeled: "BRIEFING" header
- Structured: clear sections (event, topics, attachments, notes)
- Acknowledgeable: "Acknowledge" button confirms the candidate read it
```

---

<!-- MSG-013 -->
## Approval Request in Messages

When content needs the Candidate's approval, it arrives as a special message type:

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  María Santos (Communications Director)                          Mar 1     │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  📰 APPROVAL REQUEST: Press Release                                   │ │
│  │  ──────────────────────────────────                                   │ │
│  │                                                                       │ │
│  │  "Partido Verde Announces Park Restoration Plan"                      │ │
│  │                                                                       │ │
│  │  Preview:                                                             │ │
│  │  San Juan, PR — Partido Verde today announced a comprehensive         │ │
│  │  plan to restore three public parks in the San Juan metropolitan...   │ │
│  │  [Read full text →]                                                   │ │
│  │                                                                       │ │
│  │  Requested by: María Santos                                           │ │
│  │  Deadline: Mar 3, 9:00 AM (press conference)                          │ │
│  │                                                                       │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                       │
│  │  ✓ Approve    │  │  ✕ Reject    │  │  💬 Comment   │                       │
│  └──────────────┘  └──────────────┘  └──────────────┘                       │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

<!-- MSG-007 -->
## War Room Channel (Election Day)

During election day, a dedicated War Room conversation appears pinned at the top of everyone's messages with GOTV access.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ←  🚨 War Room                                                   ⋯        │
├──────────────────────────────────────────────────────────────────────────────┤
│  ████ ELECTION DAY ACTIVE ████                                               │
│                                                                              │
│  This is the live coordination channel. 28 participants.                     │
│                                                                              │
│  ─── 2:34 PM ───                                                             │
│                                                                              │
│  🤖 System                                               2:34 PM            │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │  ⚠ ALERT: Precinct 4 (Ponce) below 60% of target pace.               │  │
│  │  Suggested: Reallocate 4 volunteers from Precinct 3.                  │  │
│  │  [View in War Room Dashboard →]                                       │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  Carlos Rivera (Field Director)                            2:35 PM          │
│  Agreed. Reassigning Team C from Precinct 3 to Precinct 4.                  │
│  ETA 20 minutes.                                                             │
│                                                                              │
│  ─── 2:28 PM ───                                                             │
│                                                                              │
│  Rosa Figueroa (Poll Watcher)                              2:28 PM          │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │  🚨 ISSUE: Machine #3 at Precinct 2 showing error code E-401.        │  │
│  │  Voters being redirected to Machine #1. Line growing.                 │  │
│  │  [View Issue Report →]                                                │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  Pablo Defendini (Org Admin)                               2:30 PM          │
│  Contacting election board about Machine #3. Reminder:                       │
│  document everything — photos if possible.                                   │
│                                                                              │
│  ─── 2:15 PM ───                                                             │
│                                                                              │
│  🤖 System                                               2:15 PM            │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │  ✓ Wave 2 GOTV SMS sent successfully.                                 │  │
│  │  3,400 recipients · 98.2% delivered.                                  │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────────┐            │
│  │  Type a message...                                       📎  │            │
│  └──────────────────────────────────────────────────────────────┘            │
│  [🚨 Report Issue]  [Send]                                                   │
└──────────────────────────────────────────────────────────────────────────────┘

War Room specifics:
- System-generated alerts are styled distinctly (yellow/amber background)
- Issue reports from poll watchers are styled as red alerts
- "Report Issue" shortcut button in composer for quick issue filing
- Auto-scrolls to latest (pausable by scrolling up)
- High-priority — notifications always push, even in DND mode
```

---

<!-- MSG-005 -->
## Group Conversation Info

```
┌─────────────────────────────────────────┐
│  ←  Leadership Team               Edit  │
├─────────────────────────────────────────┤
│                                         │
│  👥  Leadership Team                    │
│  Created: Jan 15, 2026                  │
│  🔒 End-to-end encrypted               │
│                                         │
│  ─────────────────────                  │
│                                         │
│  Members (5)                            │
│  ┌─────────────────────────────────┐    │
│  │  [PD] Pablo Defendini  (Admin)  │    │
│  │  [MS] María Santos              │    │
│  │  [CR] Carlos Rivera             │    │
│  │  [ET] Elena Torres              │    │
│  │  [PC] Pedro Colón               │    │
│  └─────────────────────────────────┘    │
│                                         │
│  [+ Add member]                         │
│                                         │
│  ─────────────────────                  │
│                                         │
│  Shared Files (3)                       │
│  📄 talking-points-march5.pdf           │
│  📄 rally-schedule.pdf                  │
│  📄 Q1-fundraising-summary.pdf          │
│                                         │
│  ─────────────────────                  │
│                                         │
│  [🔇 Mute conversation]                │
│  [📌 Pin / Unpin]                       │
│  [🚪 Leave conversation]               │
│                                         │
└─────────────────────────────────────────┘
```

---

## Offline Messaging

When offline, messaging degrades gracefully:

```
Composing while offline:

├──────────────────────────────────────────────────────────────────────────────┤
│  ◌ Offline                                                                   │
│  ┌──────────────────────────────────────────────────────────────┐            │
│  │  Type a message...                                       📎  │            │
│  └──────────────────────────────────────────────────────────────┘            │
│  [Send]  ← message queued locally, sent on reconnect                        │
│                                                                              │
│  Queued messages show with ◌ indicator:                                      │
│                                                                              │
│        ┌────────────────────────┐                                            │
│        │ Sounds good, will do.  │                                            │
│        │           now  ◌      │  ← pending (not yet sent)                  │
│        └────────────────────────┘                                            │
└──────────────────────────────────────────────────────────────────────────────┘

When reconnected, ◌ changes to ✓ (sent) then ✓✓ (delivered).
```

---

## Encryption Indicators

```
Standard (platform-encrypted):
  No special indicator. Default behavior.

E2E encrypted (org-level or BYOK):
  🔒 badge in thread header: "End-to-end encrypted"
  Small lock icon on each message bubble.
  Tooltip: "This message is end-to-end encrypted. Only participants can read it."

Alliance messages (cross-org):
  🔒🔗 badge: "Encrypted · Cross-organization"
  Different key icon to indicate alliance-negotiated key.
```

---

## Empty States Summary

| Screen | Empty Message | Action |
|--------|--------------|--------|
| MSG-001 Inbox | No messages yet. Start a conversation with a team member or group. | New Message |
| MSG-001 Search/Filter | No conversations found matching your search. Try different keywords or clear filters. | Clear Search |
| MSG-007 War Room | The War Room is not active. This channel becomes available during GOTV activation on election day. | — |

---

## Accessibility Notes

- **Screen reader:** Messages announced as: "[Sender name], [timestamp]: [message content]"
- **Keyboard:** Arrow keys navigate between messages. Enter opens thread. Escape returns to list.
- **Focus:** When opening a thread, focus moves to the most recent message. Composer is Tab-accessible.
- **Contrast:** Message bubbles meet 4.5:1 contrast. Sent vs. received bubbles are distinguishable by position and subtle color difference (not color alone — also alignment).

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Desktop split view for messaging | Standard split view — conversation list on left, thread on right | Standard messaging UX that users already know. No need to innovate on a well-understood pattern |
| Candidate briefings as structured format | Bordered card with labeled sections (event, topics, attachments, notes) | Briefings need to be scannable — structured format lets the Candidate extract key info quickly, unlike a wall of chat text |
| Encryption indicators | Lock icon (🔒) in thread header for E2E encrypted messages | Users need clear, unambiguous visibility into whether a conversation is protected. Lock icon is universally understood |
| War Room as special channel | Dedicated channel type with system alerts, issue reports, and priority notifications | Election day coordination has unique needs — system alerts, priority override, structured issue reporting — that don't fit standard group chat |
| Contextual threads accessed from parent context | Event threads from event detail, shift threads from shift view, etc. — not from messaging sidebar | Reduces messaging clutter. Contextual threads are about the context (the event, the shift), not about "messaging" as an activity |
| Offline messaging with local queue | Messages composed offline are queued locally and sent automatically on reconnect | Field staff in low-connectivity areas need to communicate without waiting for signal. Queue-and-send is transparent and reliable |
| Mobile as full-screen conversation view | Conversation list and thread are separate full-screen views on mobile | Phone screens are too small for a split view. Full-screen per view is the standard mobile messaging pattern |

---

## Open Questions

1. **Message reactions.** Should messages support emoji reactions (like Slack/Teams)? Low-weight acknowledgment ("thumbs up") without a full reply. Adds social dimension but increases complexity.

2. **Message forwarding.** Should messages be forwardable to other conversations? Useful for information sharing but raises concerns about context loss and privacy.

3. **Voice messages in non-field contexts.** The spec limits voice messages to field contexts. Should casual voice messages be allowed in group conversations? Lower friction for mobile-primary users but increases storage and bandwidth.
