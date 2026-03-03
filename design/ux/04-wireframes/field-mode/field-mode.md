# Field Mode Wireframes

## Purpose

Field mode is the highest-risk UX in the system. A volunteer on a low-end Android phone with intermittent connectivity, walking door-to-door, possibly in poor lighting, one-handed. Large touch targets, minimal navigation decisions, zero distraction. This document wireframes every screen in the field mode flow.

Field mode is a **full-screen takeover** — no sidebar, no tabs, no notifications. The volunteer's world is the walk list until the shift ends.

---

## Shift Start Flow

### Screen 1: Shift Selection

Before entering field mode, the volunteer selects which shift to start. This screen is in the normal mobile shell.

```
┌──────────────────────────────┐
│  ≡  My Shifts         🔍  ●  │
├──────────────────────────────┤
│                              │
│  Ready to Start              │
│  ┌──────────────────────────┐│
│  │  📋 Northside Canvass    ││
│  │  Today, 2:00 PM          ││
│  │  47 doors assigned       ││
│  │  Turf: Calle Sol area    ││
│  │                          ││
│  │  ┌────────────────────┐  ││
│  │  │   ▶  Start Shift   │  ││
│  │  └────────────────────┘  ││
│  └──────────────────────────┘│
│                              │
│  Upcoming                    │
│  ┌──────────────────────────┐│
│  │  📞 Phone Bank Wave 3    ││
│  │  Sat, March 8, 10:00 AM  ││
│  │  25 calls assigned       ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  📋      📅      💬    [▶ GO]│
│ Shifts  Events  Msgs  Start  │
└──────────────────────────────┘
```

### Screen 2: Pre-Shift Check

After tapping "Start Shift," the app prepares for field mode. This is the transition screen.

```
┌──────────────────────────────┐
│                              │
│  Preparing Your Shift        │
│  ─────────────────────       │
│                              │
│  Northside Canvass           │
│  47 doors · Calle Sol area   │
│                              │
│  ✓ Walk list downloaded      │
│  ✓ Map tiles cached          │
│  ✓ Script loaded             │
│  ↻ Syncing latest data...    │
│                              │
│  ─────────────────────       │
│                              │
│  Reminders:                  │
│  • Introduce yourself first  │
│  • Respect "No Soliciting"   │
│  • Mark "Not Home" if no     │
│    answer after 30 seconds   │
│  • Use the 🔒 lock button   │
│    if you feel unsafe        │
│                              │
│                              │
│  ┌──────────────────────────┐│
│  │   ▶  Enter Field Mode    ││
│  └──────────────────────────┘│
│                              │
│  [Cancel — back to shifts]   │
│                              │
└──────────────────────────────┘
```

**Behavior:**
- Walk list, map tiles, and script download in parallel
- Each checkmark appears as the download completes
- "Enter Field Mode" button is disabled until all required data is ready
- If offline: shows cached data age ("Walk list from 2 hours ago") with warning
- Cancel returns to the normal shifts screen

---

## Walk List View

The primary navigation view in field mode. Shows all assigned doors in order.

### Default — List View

```
┌──────────────────────────────┐
│  ● Synced 30s ago     ●REC 0:12│
├──────────────────────────────┤
│                              │
│  Northside Canvass           │
│  0 of 47 complete            │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                              │
│  ┌──────────────────────────┐│
│  │  1. Ana Martínez     →   ││
│  │     742 Calle Sol, Apt 3 ││
│  │     ◦ Not yet visited    ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  2. Carlos Rivera    →   ││
│  │     744 Calle Sol        ││
│  │     ◦ Not yet visited    ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  3. Elena Torres     →   ││
│  │     748 Calle Sol, Apt 1 ││
│  │     ◦ Not yet visited    ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  4. José Delgado     →   ││
│  │     750 Calle Sol        ││
│  │     ◦ Not yet visited    ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  5. María Santos     →   ││
│  │     752 Calle Sol        ││
│  │     ◦ Not yet visited    ││
│  └──────────────────────────┘│
│          ↓ scroll             │
│                              │
├──────────────────────────────┤
│  [📍 Map View]    [End Shift]│
│                         [🔒] │
└──────────────────────────────┘
```

### Walk List — In Progress

```
┌──────────────────────────────┐
│  ● Synced 2m ago      ●REC 1:23│
├──────────────────────────────┤
│                              │
│  Northside Canvass           │
│  12 of 47 complete           │
│  ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░  │
│                              │
│  ┌──────────────────────────┐│
│  │  ✓ 12. Pedro Colón      ││
│  │     738 Calle Sol        ││
│  │     Score: 2 · 3 min ago ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ ▶ 13. Ana Martínez  →   ││
│  │     742 Calle Sol, Apt 3 ││
│  │     ◦ Next up            ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  14. Carlos Rivera   →   ││
│  │     744 Calle Sol        ││
│  │     ◦ Not yet visited    ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  15. Elena Torres    →   ││
│  │     748 Calle Sol, Apt 1 ││
│  │     ◦ Not yet visited    ││
│  └──────────────────────────┘│
│          ↓ scroll             │
│                              │
├──────────────────────────────┤
│  [📍 Map View]    [End Shift]│
│                         [🔒] │
└──────────────────────────────┘

Status indicators:
  ✓  = Completed (green, with score and timestamp)
  ▶  = Next up (highlighted, primary color left border)
  ◦  = Not yet visited (neutral)
  ✕  = Skipped / Not home (grey, with reason)
  ●  = Currently at (if navigated to door card)
```

### Walk List — With Stale Data Warning

```
┌──────────────────────────────┐
│  ● Synced 12 min ago  ●REC 1:23│  ← amber, growing urgency
├──────────────────────────────┤
│  ┌──────────────────────────┐│
│  │  ⚠ Data may be outdated. ││
│  │  Another volunteer may   ││
│  │  have visited some doors.││
│  │  [Sync now]              ││
│  └──────────────────────────┘│
│                              │
│  Northside Canvass           │
│  12 of 47 complete           │
│  ...                         │
```

---

## Door Card — Canvassing

The core interaction screen. One door at a time.

### Door Card — Initial View

```
┌──────────────────────────────┐
│  ● Synced 2m ago      ●REC 1:23│
├──────────────────────────────┤
│                              │
│  Ana Martínez                │
│  742 Calle Sol, Apt 3       │
│  ─────────────────────       │
│                              │
│  Age: 34 · F                 │
│  Registered: ✓ (PNP)        │
│  Previous: Canvassed Jan 12  │
│  Last Score: 3 (Lean Supp.)  │
│                              │
│  ┌──────────────────────────┐│
│  │  Script                  ││
│  │  ─────                   ││
│  │  "Hi, I'm [your name]   ││
│  │  with Partido Verde.     ││
│  │  Do you plan to support  ││
│  │  us in the upcoming      ││
│  │  election?"              ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │    1 — Strong Support    ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │    2 — Lean Support      ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │    3 — Undecided         ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │    4 — Lean Oppose       ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │    5 — Strong Oppose     ││
│  └──────────────────────────┘│
│                              │
│  ─────────────────────       │
│  ┌──────────────────────────┐│
│  │    ✕ Not Home            ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │    ⊘ Refused             ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │    ⟳ Come Back Later     ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  [◀ Prev]   13 of 47  [Next ▶]│
├──────────────────────────────┤
│  [End Shift]            [🔒] │
└──────────────────────────────┘
```

### Door Card — Response Selected (Follow-up Questions)

After the volunteer taps a support score, follow-up questions appear:

```
┌──────────────────────────────┐
│  ● Synced 2m ago      ●REC 1:25│
├──────────────────────────────┤
│                              │
│  Ana Martínez           ✓ 2  │
│  742 Calle Sol, Apt 3       │
│  ─────────────────────       │
│                              │
│  Response: 2 — Lean Support  │
│                              │
│  ─────────────────────       │
│                              │
│  Issues (select all that     │
│  apply):                     │
│                              │
│  ┌─────────┐ ┌─────────┐    │
│  │☑ Environ│ │☐ Economy│    │
│  └─────────┘ └─────────┘    │
│  ┌─────────┐ ┌─────────┐    │
│  │☐ Educ.  │ │☑ Health │    │
│  └─────────┘ └─────────┘    │
│  ┌─────────┐ ┌─────────┐    │
│  │☐ Housing│ │☐ Safety │    │
│  └─────────┘ └─────────┘    │
│                              │
│  ─────────────────────       │
│                              │
│  Volunteer interest?         │
│  ┌──────────────────────────┐│
│  │  ☉ Yes — interested      ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  ○ No                    ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  ○ Didn't ask            ││
│  └──────────────────────────┘│
│                              │
│  ─────────────────────       │
│                              │
│  Notes (optional):           │
│  ┌──────────────────────────┐│
│  │ Has a yard sign from     ││
│  │ last election. Very      ││
│  │ friendly.                ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  ✓ Save & Next →         ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  [◀ Prev]   13 of 47  [Next ▶]│
├──────────────────────────────┤
│  [End Shift]            [🔒] │
└──────────────────────────────┘
```

### Door Card — "Not Home" Quick Result

If "Not Home" is tapped, the interaction is minimal:

```
┌──────────────────────────────┐
│  ● Synced 2m ago      ●REC 1:26│
├──────────────────────────────┤
│                              │
│  Ana Martínez           ✕    │
│  742 Calle Sol, Apt 3       │
│  ─────────────────────       │
│                              │
│  Result: Not Home            │
│                              │
│  ┌──────────────────────────┐│
│  │  Leave literature?       ││
│  │  ☉ Yes  ○ No  ○ N/A     ││
│  └──────────────────────────┘│
│                              │
│  Saved. Moving to next door. │
│                              │
│  ─────── auto-advance 3s ── │
│                              │
├──────────────────────────────┤
│  [◀ Prev]   13 of 47  [Next ▶]│
├──────────────────────────────┤
│  [End Shift]            [🔒] │
└──────────────────────────────┘

Auto-advances to next door after 3 seconds.
Tapping anywhere cancels auto-advance (stays on this door).
```

---

## Map View

Toggle between list and map using the [📍 Map View] / [← List View] buttons.

```
┌──────────────────────────────┐
│  ● Synced 30s ago     ●REC 1:30│
├──────────────────────────────┤
│                              │
│  ┌──────────────────────────┐│
│  │                          ││
│  │  ┌───┐    ┌───┐         ││
│  │  │🟢│────│🟢│          ││
│  │  └───┘    └───┘         ││
│  │    │        │            ││
│  │  ┌───┐    ┌───┐         ││
│  │  │🟢│    │🔵│←(you)    ││
│  │  └───┘    └───┘         ││
│  │    │        │            ││
│  │  ┌───┐    ┌───┐         ││
│  │  │⚪│────│⚪│          ││
│  │  └───┘    └───┘         ││
│  │    │        │            ││
│  │  ┌───┐    ┌───┐         ││
│  │  │⚪│────│⚪│          ││
│  │  └───┘    └───┘         ││
│  │                          ││
│  └──────────────────────────┘│
│                              │
│  🟢 Completed  🔵 Current    │
│  ⚪ Remaining  🔴 Skipped    │
│                              │
│  Next: 14. Carlos Rivera     │
│  744 Calle Sol · ~120m       │
│                              │
│  [← List View]   [Navigate ▶]│
│                              │
├──────────────────────────────┤
│  [End Shift]            [🔒] │
└──────────────────────────────┘
```

### Map Interactions

- **Tap a pin:** Shows that door's name and address in a tooltip. Tap again to jump to their door card.
- **Pinch to zoom:** Standard map zoom behavior.
- **"Navigate" button:** Opens the device's native maps app with walking directions to the next door.
- **Current location:** Blue dot showing the volunteer's GPS position (if permission granted).
- **Offline tiles:** Pre-cached. If zooming beyond cached area, shows grey placeholder with "Map not available offline" message.

---

## Phone Banking Variant

Phone banking uses the same field mode shell but with a call-specific card.

### Call Card

```
┌──────────────────────────────┐
│  ● Synced 1m ago      ●REC 0:45│
├──────────────────────────────┤
│                              │
│  Phone Bank Wave 3           │
│  8 of 25 complete            │
│  ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░  │
│                              │
│  ─────────────────────       │
│                              │
│  Carlos Rivera               │
│  📞 +1 787-555-0142         │
│                              │
│  Age: 42 · M                 │
│  Registered: ✓               │
│  Previous: Called Feb 15      │
│  Last Score: 3 (Undecided)   │
│                              │
│  ┌──────────────────────────┐│
│  │  📞 Call Now              ││
│  └──────────────────────────┘│
│                              │
│  ─────────────────────       │
│                              │
│  Script:                     │
│  "Hi Carlos, I'm calling     │
│  from Partido Verde..."      │
│                              │
│  ─────────────────────       │
│  After the call:             │
│                              │
│  ┌──────────────────────────┐│
│  │  ✓ Answered — Record     ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  ✕ No Answer             ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  📱 Voicemail            ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  ⊘ Wrong Number          ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  🚫 Do Not Call          ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  [◀ Prev]    9 of 25  [Next ▶]│
├──────────────────────────────┤
│  [End Session]          [🔒] │
└──────────────────────────────┘
```

### Phone Bank — After "Answered"

Same follow-up flow as canvassing (support score → issues → notes → save & next).

---

## Voter Registration Variant

```
┌──────────────────────────────┐
│  ● Synced 5m ago      ●REC 0:22│
├──────────────────────────────┤
│                              │
│  Voter Registration Drive    │
│  3 of ? registered today     │
│                              │
│  ─────────────────────       │
│                              │
│  New Registration            │
│                              │
│  First Name *                │
│  ┌──────────────────────────┐│
│  │ María                    ││
│  └──────────────────────────┘│
│                              │
│  Last Name *                 │
│  ┌──────────────────────────┐│
│  │ Fernández                ││
│  └──────────────────────────┘│
│                              │
│  Date of Birth *             │
│  ┌──────────────────────────┐│
│  │ 03/15/1990              ││
│  └──────────────────────────┘│
│                              │
│  Address *                   │
│  ┌──────────────────────────┐│
│  │ 156 Calle Luna           ││
│  └──────────────────────────┘│
│                              │
│  Municipality *              │
│  ┌──────────────────────────┐│
│  │ San Juan              ▾  ││
│  └──────────────────────────┘│
│                              │
│  ID Number *                 │
│  ┌──────────────────────────┐│
│  │                          ││
│  └──────────────────────────┘│
│                              │
│  ☐ Consent to contact       │
│                              │
│  ┌──────────────────────────┐│
│  │  ✓ Register & Next       ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  [End Session]          [🔒] │
└──────────────────────────────┘
```

### Eligibility Check (Pre-Form)

Some jurisdictions require an eligibility check before registration:

```
┌──────────────────────────────┐
│  ● Synced 5m ago      ●REC 0:20│
├──────────────────────────────┤
│                              │
│  Eligibility Check           │
│  ─────────────────────       │
│                              │
│  Before registering, confirm:│
│                              │
│  ☑ Is the person 18 or older │
│    (or will be by election   │
│    day)?                     │
│                              │
│  ☑ Is the person a resident  │
│    of this municipality?     │
│                              │
│  ☐ Is the person a citizen   │
│    (where applicable)?       │
│                              │
│                              │
│  ┌──────────────────────────┐│
│  │  ✓ Eligible — Continue   ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  ✕ Not Eligible          ││
│  └──────────────────────────┘│
│                              │
│  "Not Eligible" records the  │
│  reason and skips the form.  │
│                              │
├──────────────────────────────┤
│  [End Session]          [🔒] │
└──────────────────────────────┘
```

---

## GOTV Door Card Variant

On election day, the door card is simplified — no lengthy surveys, just turnout confirmation.

```
┌──────────────────────────────┐
│  ● Synced 1m ago      ●REC 3:12│
├──────────────────────────────┤
│                              │
│  ████ ELECTION DAY ████      │
│                              │
│  Ana Martínez                │
│  742 Calle Sol, Apt 3       │
│  ─────────────────────       │
│                              │
│  Support: 2 (Lean Support)   │
│  Voting location: Esc. Muñoz │
│  Polls close: 4h 23m        │
│                              │
│  ─────────────────────       │
│                              │
│  Has this person voted?      │
│                              │
│  ┌──────────────────────────┐│
│  │  ✓ Confirmed Voted       ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  ~ Likely Voted          ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  ✕ Not Yet Voted         ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  ✕ Not Home              ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  🚗 Needs a Ride         ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  [◀ Prev]   27 of 85  [Next ▶]│
├──────────────────────────────┤
│  [End Shift]            [🔒] │
└──────────────────────────────┘
```

### GOTV — "Needs a Ride" Flow

```
┌──────────────────────────────┐
│  ● Synced 1m ago      ●REC 3:14│
├──────────────────────────────┤
│                              │
│  Ride Request                │
│  ─────────────────────       │
│                              │
│  For: Ana Martínez           │
│  From: 742 Calle Sol, Apt 3 │
│  To: Esc. Muñoz (poll site)  │
│                              │
│  When?                       │
│  ┌──────────────────────────┐│
│  │  ☉ Now (ASAP)            ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  ○ Scheduled: [time ▾]   ││
│  └──────────────────────────┘│
│                              │
│  Special needs?              │
│  ┌──────────────────────────┐│
│  │  ☐ Wheelchair accessible ││
│  │  ☐ Multiple passengers   ││
│  │  ☐ Other: __________     ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  ✓ Submit Ride Request   ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  ← Back to Door Card     ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  [End Shift]            [🔒] │
└──────────────────────────────┘
```

---

## Shift End Flow

### End Shift Confirmation

```
┌──────────────────────────────┐
│                              │
│  End Shift?                  │
│  ─────────────────────       │
│                              │
│  Northside Canvass           │
│  Duration: 2h 50m            │
│                              │
│  ┌──────────────────────────┐│
│  │  Summary                 ││
│  │  Completed:  32 of 47    ││
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░  ││
│  │                          ││
│  │  Contacts:   24          ││
│  │  Not Home:    8          ││
│  │  Remaining:  15          ││
│  └──────────────────────────┘│
│                              │
│  Pending sync: 5 interactions│
│                              │
│  ⚠ 15 doors remaining. They │
│  will be released back to    │
│  the assignment pool.        │
│                              │
│  ┌──────────────────────────┐│
│  │  End Shift & Sync        ││
│  └──────────────────────────┘│
│                              │
│  [Continue Canvassing]       │
│                              │
└──────────────────────────────┘
```

### Syncing Screen

```
┌──────────────────────────────┐
│                              │
│  Syncing Your Shift          │
│  ─────────────────────       │
│                              │
│  ↻  Uploading interactions   │
│     5 of 5                   │
│     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ │
│                              │
│  ✓  Walk list released       │
│  ✓  Hours logged (2h 50m)   │
│  ↻  Syncing...               │
│                              │
│                              │
│  Do not close the app.       │
│                              │
│                              │
└──────────────────────────────┘
```

### Debrief Screen

```
┌──────────────────────────────┐
│                              │
│  Shift Complete  ✓           │
│  ─────────────────────       │
│                              │
│  Great work! Here's your     │
│  shift summary:              │
│                              │
│  ┌──────────────────────────┐│
│  │  Duration     2h 50m     ││
│  │  Doors        32         ││
│  │  Contacts     24         ││
│  │  Contact Rate 75%        ││
│  │  ─────────────────       ││
│  │  Strong Supp.  8  (33%)  ││
│  │  Lean Supp.   11  (46%)  ││
│  │  Undecided     3  (13%)  ││
│  │  Lean Oppose   1   (4%)  ││
│  │  Strong Opp.   1   (4%)  ││
│  │  ─────────────────       ││
│  │  Not Home      8         ││
│  └──────────────────────────┘│
│                              │
│  How did it go? (optional)   │
│  ┌──────────────────────────┐│
│  │ Good area. Friendly      ││
│  │ neighborhood. One dog    ││
│  │ situation at #750.       ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  Done                    ││
│  └──────────────────────────┘│
│                              │
└──────────────────────────────┘

Tapping "Done" returns to the normal mobile shell (My Shifts screen).
```

---

## Crash Recovery

If the app crashes or the device dies during field mode:

```
┌──────────────────────────────┐
│                              │
│  Resume Shift?               │
│  ─────────────────────       │
│                              │
│  Your last session ended     │
│  unexpectedly.               │
│                              │
│  Northside Canvass           │
│  32 of 47 complete           │
│  Last door: #13 Ana Martínez │
│  Time: 2h 50m                │
│                              │
│  All completed interactions  │
│  were saved locally.         │
│                              │
│  ┌──────────────────────────┐│
│  │  ▶ Resume Shift          ││
│  └──────────────────────────┘│
│                              │
│  [End Shift Instead]         │
│                              │
└──────────────────────────────┘
```

---

## Touch Target Specifications

All interactive elements in field mode use larger targets than the standard app:

| Element | Standard App | Field Mode |
|---------|-------------|------------|
| Response buttons | 44px height | 56px height |
| Navigation (Prev/Next) | 44px | 48px |
| Issue checkboxes | 24px checkbox | 44px tap area |
| Notes text area | Standard | 120px minimum height |
| Lock button | 44px | 48px, always visible |
| "Save & Next" | 44px | 56px, full width |

### Why Larger

Field mode users are often:
- Walking (moving target)
- One-handed (other hand holding materials)
- In poor lighting (evening canvassing)
- Wearing gloves (cold weather canvassing)
- On low-end phones (smaller screens, less responsive touch)

---

## Accessibility in Field Mode

- **High contrast:** Field mode defaults to slightly higher contrast than the standard app (better outdoor visibility)
- **Large text:** All text is at minimum 16px. Voter names are 20px. Response buttons use 18px labels.
- **No gesture-only actions:** Every swipe action has a button alternative.
- **Screen reader:** Walk list items announce: "Door 13 of 47. Ana Martínez, 742 Calle Sol Apartment 3. Not yet visited."
- **Reduced motion:** Auto-advance after "Not Home" is disabled in reduced motion mode (manual advance only).

---

## Open Questions

1. **Voice input for notes.** Should field mode support voice-to-text for the notes field? Typing while standing is difficult. Voice input would be faster but adds Capacitor native dependency and may not work well in noisy environments.

2. **Photo capture.** Should field mode allow photo capture (e.g., photographing a "No Soliciting" sign, documenting a blocked address)? Adds evidence capability but raises privacy concerns.

3. **Skip behavior.** When a volunteer taps "Next" without recording a response, should the door be marked as "Skipped" automatically, or should a confirmation prompt appear? Auto-skip is faster but risks accidental data loss.
