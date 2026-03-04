# CRM / People Wireframes

## Purpose

The CRM is the data backbone of the platform. Every canvassing interaction, donation, event RSVP, and communication links back to a contact record. This document wireframes the 15 CRM screens (CRM-001 through CRM-015): contact management, segmentation, deduplication, data import/export, data quality, and tag management.

The core CRM challenge: a single person may be a voter, donor, volunteer, and event attendee simultaneously. The record must unify all facets without overwhelming the user who only cares about one. A Finance Director looking at a donor doesn't need canvassing history in their face. A Field Director looking at a voter doesn't need donation compliance fields. The detail view adapts by persona.

## Scope

| ID | Screen | Personas | Offline | Mobile | Section |
|----|--------|----------|---------|--------|---------|
| CRM-001 | Contact List | OA, CD, FD, FiD, VC, DM | No | Yes | Contact Management |
| CRM-002 | Contact Detail | OA, CD, FD, FiD, VC, DM | Partial | Yes | Contact Management |
| CRM-003 | Contact Create/Edit | OA, CD, FD, FiD, VC, DM | No | Yes | Contact Management |
| CRM-004 | Segment Builder | OA, CD, FD, FiD, DM | No | Desktop | Segmentation |
| CRM-005 | Segment List | OA, CD, FD, FiD, DM | No | Yes | Segmentation |
| CRM-006 | Dedup Review Queue | OA, DM | No | Desktop | Deduplication |
| CRM-007 | Dedup Side-by-Side Comparison | OA, DM | No | Desktop | Deduplication |
| CRM-008 | Data Import Wizard — File Upload | OA, DM | No | Desktop | Data Import |
| CRM-009 | Data Import Wizard — Column Mapping | OA, DM | No | Desktop | Data Import |
| CRM-010 | Data Import Wizard — Dedup Preview | OA, DM | No | Desktop | Data Import |
| CRM-011 | Data Import Wizard — Confirmation | OA, DM | No | Desktop | Data Import |
| CRM-012 | Data Import History | OA, DM | No | Desktop | Import & Export |
| CRM-013 | Data Export | OA, DM | No | Desktop | Import & Export |
| CRM-014 | Data Quality Report | OA, DM | No | Desktop | Data Quality |
| CRM-015 | Tag Management | OA, DM | No | Desktop | Tags |

## Data Manager Navigation Context

The Data Manager's sidebar organizes CRM into functional groups:

```
OVERVIEW
  Dashboard           → DASH-006 (Data Quality)

PEOPLE
  All Contacts        → CRM-001
  Segments            → CRM-005

DATA
  Import              → CRM-008
  Import History      → CRM-012
  Export              → CRM-013
  Data Quality        → CRM-014
  Dedup Queue         → CRM-006
  Tags                → CRM-015

MESSAGING
  Messages            → messaging screens
```

The Org Admin and other personas (CD, FD, FiD, VC) see a simplified CRM section under "People" in their respective sidebars, with Contacts and Segments only. Data import/export, dedup, and tag management appear only for OA and DM.

---

## Contact Management

### CRM-001: Contact List

The most-used screen in the platform. Filterable, sortable, searchable list of all people in the CRM.

#### Personas
- OA, CD, FD, FiD, VC, DM

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Contacts                                                         24,830    │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  [🔍 Search contacts...]       [Filter ▾]  [Sort ▾]  [+ New Contact]       │
│                                                                              │
│  Active filters: Type: Voter  ·  Precinct: San Juan  ·  [Clear all]        │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  ☐  Name              Type       Precinct     Phone        Score    │   │
│  │  ─────────────────────────────────────────────────────────────────  │   │
│  │  ☐  Ana Martínez      Voter/Donor  San Juan   +1 787-555-0101  4   │   │
│  │  ☐  Carlos Rivera     Voter        San Juan   +1 787-555-0102  3   │   │
│  │  ☐  Elena Torres      Voter/Vol    San Juan   +1 787-555-0103  5   │   │
│  │  ☐  José Delgado      Donor        San Juan   +1 787-555-0104  —   │   │
│  │  ☐  María Santos      Voter        San Juan   +1 787-555-0105  2   │   │
│  │  ☐  Pedro Colón       Voter        San Juan   +1 787-555-0106  4   │   │
│  │  ☐  Rosa Figueroa     Voter/Donor  San Juan   +1 787-555-0107  5   │   │
│  │  ☐  Luis García       Voter        San Juan   +1 787-555-0108  1   │   │
│  │  ☐  Carmen Díaz       Voter/Vol    San Juan   +1 787-555-0109  3   │   │
│  │  ☐  Marco Rodríguez   Voter        San Juan   +1 787-555-0110  —   │   │
│  │  ...                                                                │   │
│  │  ─────────────────────────────────────────────────────────────────  │   │
│  │  ☐ Select all on page                                               │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ◀  Page 1 of 248  ▶                           Showing 1–25 of 6,194       │
│                                                                              │
│  Bulk actions (when selected): [Tag ▾]  [Add to Segment]  [Export]  [⋯]    │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Filter Panel (expanded)

```
┌────────────────────────────────┐
│  Filters                    ✕  │
│  ────────                      │
│                                │
│  Type                          │
│  ☑ Voter  ☑ Donor  ☐ Vol     │
│  ☐ Supporter  ☐ Contact      │
│                                │
│  Precinct / District           │
│  [San Juan               ▾]   │
│                                │
│  Support Score                 │
│  [Any ▾]  to  [Any ▾]        │
│                                │
│  Tags                          │
│  [Search tags...          ]    │
│  ☐ Canvassed  ☐ Phone banked │
│  ☐ Event attendee  ☐ VIP     │
│                                │
│  Last Contact                  │
│  [Any time ▾]                 │
│                                │
│  Segment                       │
│  [Select segment...      ▾]   │
│                                │
│  Registration Status           │
│  [Any ▾]                      │
│                                │
│  [Clear All]       [Apply]    │
└────────────────────────────────┘
```

#### Mobile

```
┌──────────────────────────────┐
│  ≡  Contacts  🔍  [Filter]  │
├──────────────────────────────┤
│  24,830 contacts             │
│  Voter · San Juan            │  ← active filters as chips
│                              │
│  ┌──────────────────────────┐│
│  │  Ana Martínez            ││
│  │  Voter/Donor · Score: 4  ││
│  │  +1 787-555-0101         ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  Carlos Rivera           ││
│  │  Voter · Score: 3        ││
│  │  +1 787-555-0102         ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  Elena Torres            ││
│  │  Voter/Volunteer · Score: 5││
│  │  +1 787-555-0103         ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  José Delgado            ││
│  │  Donor                   ││
│  │  +1 787-555-0104         ││
│  └──────────────────────────┘│
│  ...                         │
│                              │
│  ↓ Loading more...           │  ← infinite scroll
│                              │
├──────────────────────────────┤
│ 📊      👥      💰     💬   ⋯│
│ Dash  Contacts Donate  Msgs More│
└──────────────────────────────┘
```

#### Mobile Differences
- Table becomes a card list — each contact is a stacked card
- Filters accessible via filter icon in header — opens a bottom sheet
- Infinite scroll replaces pagination
- No bulk select — bulk actions via long-press + multi-select mode
- Tap a card to navigate to full-screen detail view
- Pull-to-refresh

#### Interaction Specs

| Element | Action | Result |
|---------|--------|--------|
| Row / card | Click / tap | Open Contact Detail (CRM-002). Desktop: in detail panel (right). Mobile: full-screen. |
| + New Contact | Click | Navigate to Contact Create (CRM-003) |
| Filter | Apply | Re-query list with filter criteria. Active filters shown as chips above list. |
| Bulk checkbox | Select multiple | Bulk action bar appears: Tag, Add to Segment, Export, More (delete, merge) |
| Column header | Click | Sort ascending/descending. Current sort indicated by arrow. |
| Search | Type | Debounced server-side search across name, email, phone. Results update inline. |
| Row overflow (⋯) | Click | Menu: Edit, View Activity, Add Tag, Add to Segment, Delete |

#### Persona-Specific Columns

The visible columns adapt by persona:

| Persona | Columns |
|---------|---------|
| OA, DM | Name, Type, Precinct, Phone, Score, Tags |
| CD | Name, Email, Subscribed, Last Email, Tags |
| FD | Name, Type, Precinct, Phone, Donation Total |
| FiD | Name, Precinct, Score, Last Contact, Tags |
| VC | Name, Phone, Volunteer Status, Hours, Last Shift |

---

### CRM-002: Contact Detail

The unified view of a person — all their facets (voter, donor, volunteer, event attendee) in one record.

#### Personas
- OA, CD, FD, FiD, VC, DM
- Partial offline: cached contact data viewable, but activity and related records require connectivity

#### Desktop (in Detail Panel)

```
┌────────────────────────────────────────────────────────────────┐
│  ← Contacts    Ana Martínez                    [Edit]  [⋯]    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Voter · Donor                          Support Score: ████ 4  │
│  Precinct: San Juan 1                                          │
│  +1 787-555-0101 · ana.martinez@email.com                      │
│  Calle Sol 42, San Juan, PR 00901                              │
│                                                                │
│  Tags: Canvassed · Event Attendee · Recurring Donor            │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│  [Overview]  [Activity]  [Donations]  [Communications]  [Notes]│
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Registration                                                  │
│  ────────────                                                  │
│  Status: Active · Registered: Jan 15, 2020                     │
│  Party: Partido Verde                                          │
│  Voting history: 2020 General ✓ · 2022 Primary ✓ · 2024 Mun ✓│
│                                                                │
│  Household                                                     │
│  ────────────                                                  │
│  Carlos Martínez (spouse) · same address                       │
│  Voter · Score: 3                                              │
│                                                                │
│  Canvassing                                                    │
│  ────────────                                                  │
│  Last contact: Feb 20, 2024 · by Carlos R.                     │
│  Result: Strong Support                                        │
│  Notes: "Very enthusiastic about park restoration plan"         │
│  Attempts: 3 (2 contact, 1 not home)                           │
│                                                                │
│  Donation Summary                                              │
│  ────────────                                                  │
│  Total: $450 (3 donations)                                     │
│  Recurring: $25/month (active)                                 │
│  Last: $100 on Feb 15, 2024                                    │
│                                                                │
│  Events                                                        │
│  ────────────                                                  │
│  Rally at Plaza (Mar 5) — RSVP'd                               │
│  Town Hall (Feb 12) — Attended                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Activity Tab

```
├────────────────────────────────────────────────────────────────┤
│  [Overview]  [Activity]  [Donations]  [Communications]  [Notes]│
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ● Feb 28 · Donation                                           │
│    $100 online donation (Donor Thank You email triggered)      │
│                                                                │
│  ● Feb 20 · Canvass Contact                                   │
│    Contacted by Carlos R. · Strong Support · Northside turf    │
│                                                                │
│  ● Feb 15 · Email Opened                                       │
│    "Rally Invite" — opened 2x, clicked RSVP link              │
│                                                                │
│  ● Feb 12 · Event Attended                                     │
│    Town Hall at Centro Comunal · checked in at 6:12 PM         │
│                                                                │
│  ● Feb 1 · Recurring Donation                                  │
│    $25/month · auto-processed                                  │
│                                                                │
│  ● Jan 18 · Canvass Attempt                                   │
│    Not home · left door hanger · by María S.                   │
│                                                                │
│  ● Jan 10 · SMS Sent                                           │
│    "Volunteer signup" — no response                            │
│                                                                │
│  [Load more ↓]                                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Mobile (Full Screen)

```
┌──────────────────────────────┐
│  ← Contacts   [Edit]  [⋯]   │
├──────────────────────────────┤
│                              │
│  Ana Martínez                │
│  Voter · Donor · Score: 4   │
│  Precinct: San Juan 1       │
│  📞 +1 787-555-0101         │
│  ✉ ana.martinez@email.com   │
│                              │
│  Canvassed · Event Attendee │
│  Recurring Donor             │
│                              │
├──────────────────────────────┤
│ Overview Activity Donations ▸│  ← scrollable tabs
├──────────────────────────────┤
│                              │
│  Registration                │
│  Active · PV · Voted 3x     │
│                              │
│  Last Contact                │
│  Feb 20 · Strong Support    │
│  by Carlos R.               │
│                              │
│  Donations                   │
│  $450 total · $25/mo recur  │
│                              │
│  Upcoming                    │
│  Rally at Plaza · Mar 5     │
│                              │
├──────────────────────────────┤
│ [📞 Call]  [✉ Email]  [💬]  │  ← quick actions
└──────────────────────────────┘
```

#### Persona-Specific Tab Visibility

| Persona | Visible Tabs |
|---------|-------------|
| OA | All tabs |
| CD | Overview, Communications, Notes |
| FD | Overview, Donations, Notes |
| FiD | Overview, Activity (canvass focus), Notes |
| VC | Overview, Activity (volunteer focus), Notes |
| DM | All tabs (data maintenance) |

#### Design Notes
- **Support score** displayed as a 1–5 filled bar (not just a number) — visual weight communicates at a glance
- **Type badges** (Voter, Donor, Volunteer) are additive — a person can be all three
- **Activity timeline** is the unified view — every interaction across every feature area appears in chronological order. Each entry links to its source record.
- **Quick action buttons** on mobile (Call, Email, Message) — the contact record is often a launching pad for outreach
- **Household grouping** — related contacts at the same address are linked, useful for canvassing (don't knock twice)
- **Offline (partial):** Cached contact data viewable. Activity timeline and related records require connectivity.

---

### CRM-003: Contact Create / Edit

#### Personas
- OA, CD, FD, FiD, VC, DM

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Contacts    New Contact                              [Cancel]  [Save]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Basic Information                                                           │
│  ────────────────                                                            │
│                                                                              │
│  First name *        [                              ]                       │
│  Last name *         [                              ]                       │
│  Phone *             [+1 (   )    -                 ]                       │
│  Email               [                              ]                       │
│                                                                              │
│  Type                                                                        │
│  ☑ Voter  ☐ Donor  ☐ Volunteer  ☐ Supporter  ☐ Contact                   │
│                                                                              │
│  Address                                                          [▾]       │
│  ────────────────                                                            │
│                                                                              │
│  Street              [                              ]                       │
│  City                [                              ]                       │
│  State / Province    [                         ▾]                           │
│  Postal code         [          ]                                           │
│                                                                              │
│  Electoral Info                                                   [▾]       │
│  ────────────────                                                            │
│                                                                              │
│  Precinct / District [                         ▾]                           │
│  Registration status [Active                   ▾]                           │
│  Party affiliation   [                         ▾]                           │
│  Voter ID            [                              ]                       │
│                                                                              │
│  Tags                                                             [▾]       │
│  ────────────────                                                            │
│                                                                              │
│  [Search or create tags...                    ]                             │
│  Applied: (none)                                                             │
│                                                                              │
│  Notes                                                            [▾]       │
│  ────────────────                                                            │
│                                                                              │
│  [                                                                 ]        │
│  [                                                                 ]        │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  [Cancel]                                                          [Save]   │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Design Notes
- **Progressive disclosure** — Address, Electoral Info, Tags, and Notes sections are collapsible. Basic Information always visible.
- **Phone is required** — consistent with the dedup strategy (mobile phone as primary identifier)
- **Type checkboxes are additive** — a person can be Voter + Donor + Volunteer simultaneously
- **Duplicate detection on save** — if the phone or email matches an existing record, a warning appears before save: "A contact with this phone number already exists: Ana Martínez. [View existing] [Save anyway] [Cancel]"
- **Edit mode** — same form, pre-populated. Title changes to "Edit Contact". A "View history" link shows field change history.
- **Auto-save** — drafts saved every 30 seconds for complex edits
- **Mobile** — same form, full-screen, sections stacked. Sticky save button at bottom.

---

## Segmentation

### CRM-004: Segment Builder

Visual query builder for creating audience segments. Used for targeting communications, field operations, and reporting.

#### Personas
- OA, CD, FD, FiD, DM

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Segments    New Segment                             [Cancel]  [Save]     │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Segment name *     [Likely Supporters — San Juan                  ]        │
│  Description        [Voters with score 3+ in San Juan precinct     ]        │
│                                                                              │
│  Rules                                                                       │
│  ─────                                                                       │
│                                                                              │
│  Match [all ▾] of the following:                                            │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  [Type          ▾]  [is            ▾]  [Voter              ▾]   ✕  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  AND                                                                         │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  [Support Score ▾]  [is at least   ▾]  [3                  ▾]   ✕  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  AND                                                                         │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  [Precinct      ▾]  [is            ▾]  [San Juan 1         ▾]   ✕  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  [+ Add rule]     [+ Add rule group (OR)]                                   │
│                                                                              │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  Preview                                                    Matches: 1,247  │
│  ────────                                                                    │
│                                                                              │
│  Ana Martínez         Voter/Donor    San Juan 1    Score: 4                 │
│  Carlos Rivera        Voter          San Juan 1    Score: 3                 │
│  Elena Torres         Voter/Vol      San Juan 1    Score: 5                 │
│  Rosa Figueroa        Voter/Donor    San Juan 1    Score: 5                 │
│  Pedro Colón          Voter          San Juan 1    Score: 4                 │
│  ...                                                                         │
│                                                                              │
│  Showing 5 of 1,247 matching contacts      [View all matches →]            │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  [Cancel]                                                          [Save]   │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Available Rule Fields

| Category | Fields |
|----------|--------|
| Demographics | Type, Precinct, City, State, Language, Age range |
| Engagement | Support score, Last contact date, Contact count, Last donation, Donation total |
| Status | Registration status, Party, Volunteer status, Subscription status |
| Tags | Has tag, Does not have tag |
| Events | Attended event, RSVP'd, Event type |
| Communications | Opened email, Clicked email, SMS responded, Unsubscribed |

#### Design Notes
- **Live preview** — the match count and sample records update as rules are added/modified (debounced)
- **AND/OR logic** — rules within a group are AND. Rule groups are OR. This covers most segmentation needs without requiring a full Boolean expression builder.
- **Desktop only** (per screen inventory) — segment building requires horizontal space for the rule builder
- **Saved segments are dynamic** — they re-evaluate on use (the count may change between creation and send)
- **Encryption constraint** — for BYOK tenants, some fields may not be searchable. The builder disables those fields with a tooltip: "This field is encrypted and cannot be used for segmentation."

---

### CRM-005: Segment List

#### Personas
- OA, CD, FD, FiD, DM

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Segments                                                              42    │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  [🔍 Search segments...]                     [Sort ▾]  [+ New Segment]     │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Name                    Contacts    Created      Last Used   ⋯     │   │
│  │  ─────────────────────────────────────────────────────────────────  │   │
│  │  Likely Supporters — SJ  1,247       Feb 15       Mar 1        ⋯    │   │
│  │  All Donors              3,240       Jan 10       Mar 3        ⋯    │   │
│  │  Lapsed Volunteers       23          Feb 20       Feb 28       ⋯    │   │
│  │  Event Attendees 2024    342         Jan 5        Feb 15       ⋯    │   │
│  │  Uncontacted Voters      4,830       Mar 1        —            ⋯    │   │
│  │  Phone Bank Targets      1,500       Feb 25       Mar 2        ⋯    │   │
│  │  Recurring Donors        112         Jan 12       Mar 3        ⋯    │   │
│  │  ...                                                                │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ◀  Page 1 of 2  ▶                              Showing 1–25 of 42         │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Row Actions (⋯)
- **Edit** — open in Segment Builder (CRM-004)
- **Duplicate** — create a copy for modification
- **View contacts** — navigate to Contact List (CRM-001) filtered to this segment
- **Export** — export segment contacts (navigates to CRM-013 pre-filtered)
- **Delete** — confirmation dialog noting any campaigns using this segment

#### Mobile
- Card list format (name + contact count per card)
- Tap to view contacts (CRM-001 filtered)
- Long-press for actions
- Infinite scroll

---

## Deduplication

### CRM-006: Dedup Review Queue

Potential duplicate records surfaced by the dedup engine, awaiting human review.

#### Personas
- OA, DM

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Dedup Queue                                                           42    │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  42 potential duplicates awaiting review                                     │
│  Auto-merged this month: 78 · Manual merges: 42                             │
│                                                                              │
│  [All]  [High Confidence]  [Medium]  [Low]                                  │
│  ──────────────────────────                                                  │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  🟢 High Confidence (92%)                                           │   │
│  │                                                                       │   │
│  │  A: Ana Martínez · +1 787-555-0101 · ana@email.com                  │   │
│  │  B: Ana M. Martinez · +1 787-555-0101 · anam@email.com              │   │
│  │                                                                       │   │
│  │  Matched on: Phone (exact) · Name (fuzzy, 94%)                      │   │
│  │  Source: A = Voter file import · B = Donation form                   │   │
│  │                                                                       │   │
│  │  [Review & Merge →]                              [Dismiss]           │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  🟢 High Confidence (90%)                                           │   │
│  │                                                                       │   │
│  │  A: Pedro Colón · +1 787-555-0106 · pedro@colon.pr                  │   │
│  │  B: Pedro R. Colón · +1 787-555-0106 · (no email)                   │   │
│  │                                                                       │   │
│  │  Matched on: Phone (exact) · Name (fuzzy, 91%)                      │   │
│  │  Source: A = Manual entry · B = Voter file import                    │   │
│  │                                                                       │   │
│  │  [Review & Merge →]                              [Dismiss]           │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  🟡 Medium Confidence (78%)                                          │   │
│  │                                                                       │   │
│  │  A: Carlos Rivera · +1 787-555-0102 · carlos@rivera.pr              │   │
│  │  B: Carlos A. Rivera · +1 787-555-0199 · carlos@rivera.pr           │   │
│  │                                                                       │   │
│  │  Matched on: Email (exact) · Name (fuzzy, 88%) · Phone (different)  │   │
│  │  Source: A = Voter file · B = Event signup                           │   │
│  │                                                                       │   │
│  │  [Review & Merge →]                              [Dismiss]           │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ...                                                                         │
│                                                                              │
│  ◀  Page 1 of 2  ▶                              Showing 1–25 of 42         │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Design Notes
- **Confidence color coding:** 🟢 High (>90%) — likely true dupes. 🟡 Medium (70–90%) — review carefully. 🔴 Low (<70%) — may be different people.
- **Matched-on fields** shown inline — the reviewer can immediately see why the system flagged these as potential dupes
- **Source attribution** — knowing where each record came from helps the reviewer judge quality
- **Dismiss** removes the pair from the queue without merging (logged in audit trail)
- **Desktop only** (per screen inventory)
- **Bulk merge** for high-confidence pairs: "Merge all High Confidence" button (with confirmation showing count and preview of first 3)

---

### CRM-007: Dedup Side-by-Side Comparison

The merge resolution screen. Two records side by side, field by field.

#### Personas
- OA, DM

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Dedup Queue    Merge Records                Confidence: 🟢 92%          │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│               Record A (Voter file)          Record B (Donation form)        │
│  ─────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  First name   ◉ Ana                          ○ Ana                          │
│  Last name    ◉ Martínez                     ○ Martinez          ← differs  │
│  Phone        ◉ +1 787-555-0101              ○ +1 787-555-0101              │
│  Email        ○ ana@email.com                ◉ anam@email.com    ← differs  │
│  Address      ◉ Calle Sol 42, San Juan       ○ (empty)                      │
│  Precinct     ◉ San Juan 1                   ○ (empty)                      │
│  Reg. status  ◉ Active                       ○ (empty)                      │
│  Party        ◉ Partido Verde                ○ (empty)                      │
│  Type         ◉ Voter                        ◉ Donor             ← both    │
│  Tags         ◉ Canvassed                    ◉ Event Attendee    ← both    │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  Related Data (will be combined)                                             │
│  ────────────────────────────────                                            │
│  Record A: 3 canvass interactions, 2 emails opened                          │
│  Record B: 3 donations ($450 total), 1 event RSVP                           │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  Merged Result Preview                                                       │
│  ─────────────────────                                                       │
│  Ana Martínez · +1 787-555-0101 · anam@email.com                            │
│  Calle Sol 42, San Juan, PR · San Juan 1 · Active · PV                      │
│  Voter / Donor · Tags: Canvassed, Event Attendee                            │
│  3 canvass interactions · 3 donations · 2 emails · 1 event                  │
│                                                                              │
│  [Cancel]                                              [Confirm Merge →]    │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Design Notes
- **Radio buttons per field** — reviewer picks which value to keep for each differing field. Pre-selected based on data source reliability and recency.
- **Differences highlighted** — rows where values differ have a visual highlight and a "differs" indicator
- **"Both" option for additive fields** — Type and Tags merge additively (keep all). Checkbox instead of radio for these.
- **Related data section** — shows what activity/history will be combined. This is the highest-risk area — merging wrong records combines donation history and canvass data irreversibly.
- **Merged result preview** — the reviewer sees exactly what the merged record will look like before confirming
- **Desktop only** — side-by-side comparison needs horizontal space
- **Audit trail** — merge action is logged with: who merged, when, which fields were resolved how, original record snapshots preserved

---

## Data Import

The import flow is a 4-step wizard (CRM-008 through CRM-011).

### CRM-008: Data Import Wizard — File Upload (Step 1)

#### Personas
- OA, DM

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Import Data                                                Step 1 of 4     │
│  ───────────────────────────────────────────────────────────────────────────  │
│  ● Upload  ○ Map Columns  ○ Review Duplicates  ○ Confirm                    │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                                                                       │   │
│  │                          📁                                          │   │
│  │                                                                       │   │
│  │              Drag and drop your file here                             │   │
│  │              or click to browse                                       │   │
│  │                                                                       │   │
│  │              Supported: CSV, Excel (.xlsx)                            │   │
│  │              Max file size: 50 MB                                     │   │
│  │                                                                       │   │
│  │              [Browse Files]                                           │   │
│  │                                                                       │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Import type                                                                 │
│  ────────────                                                                │
│                                                                              │
│  ◉ Voter file — official voter registration records                         │
│  ○ Donor list — donation records with amounts and dates                     │
│  ○ Volunteer roster — volunteer contact information                          │
│  ○ Event attendees — event participation records                            │
│  ○ General contacts — any contact list                                      │
│                                                                              │
│  [Cancel]                                                                    │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### After File Selected

```
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  ✓ voters_san_juan_2024.csv                                         │   │
│  │    12,400 rows · 18 columns · 2.3 MB                                │   │
│  │    Encoding: UTF-8 detected                                          │   │
│  │    [Remove file]                                                     │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  [Cancel]                                              [Continue →]         │
```

---

### CRM-009: Data Import Wizard — Column Mapping (Step 2)

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Import Data                                                Step 2 of 4     │
│  ───────────────────────────────────────────────────────────────────────────  │
│  ✓ Upload  ● Map Columns  ○ Review Duplicates  ○ Confirm                    │
│                                                                              │
│  voters_san_juan_2024.csv · 12,400 rows · 18 columns                        │
│  We've auto-detected mappings. Please review and adjust.                     │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Your Column         →  GreenGrass Field       Sample Data          │   │
│  │  ─────────────────────────────────────────────────────────────────  │   │
│  │  NOMBRE              →  [First Name        ▾]  Ana                  │   │
│  │  APELLIDO            →  [Last Name         ▾]  Martínez             │   │
│  │  TELEFONO            →  [Phone             ▾]  787-555-0101         │   │
│  │  EMAIL               →  [Email             ▾]  ana@email.com        │   │
│  │  DIRECCION           →  [Street Address    ▾]  Calle Sol 42         │   │
│  │  CIUDAD              →  [City              ▾]  San Juan             │   │
│  │  ESTADO              →  [State             ▾]  PR                   │   │
│  │  CODIGO_POSTAL       →  [Postal Code       ▾]  00901                │   │
│  │  PRECINTO            →  [Precinct          ▾]  San Juan 1           │   │
│  │  ESTADO_REG          →  [Reg. Status       ▾]  Activo               │   │
│  │  PARTIDO             →  [Party             ▾]  PV                   │   │
│  │  FECHA_NAC           →  [Date of Birth     ▾]  1985-03-12           │   │
│  │  NUM_VOTANTE         →  [Voter ID          ▾]  PR-2024-0001        │   │
│  │  SEXO                →  [— Skip column —   ▾]  F                    │   │
│  │  ...                                                                │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ⚠ 2 columns not mapped: SEXO, ZONA_ELECTORAL                              │
│  Unmapped columns will be skipped during import.                             │
│                                                                              │
│  Phone format: [Auto-detect ▾]  (will normalize to +1 format)              │
│  Date format:  [YYYY-MM-DD  ▾]                                             │
│                                                                              │
│  [← Back]                                              [Continue →]         │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Design Notes
- **Auto-detection** — the system guesses column mappings from headers (Spanish headers in this example). Correct guesses are pre-selected.
- **Sample data** column shows one row so the user can verify the mapping makes sense
- **Skip column** option for columns that don't map to any GreenGrass field
- **Format configuration** — phone and date formats can be specified when auto-detect is uncertain
- **Unmapped column warning** — clear but not blocking. Skipping columns is expected.

---

### CRM-010: Data Import Wizard — Dedup Preview (Step 3)

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Import Data                                                Step 3 of 4     │
│  ───────────────────────────────────────────────────────────────────────────  │
│  ✓ Upload  ✓ Map Columns  ● Review Duplicates  ○ Confirm                    │
│                                                                              │
│  Scanning 12,400 rows against 24,830 existing contacts...                   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Import Preview                                                       │   │
│  │  ──────────────                                                       │   │
│  │                                                                       │   │
│  │  New records:           10,840  (will be created)                     │   │
│  │  Existing matches:       1,240  (will be updated)                     │   │
│  │  Potential duplicates:     247  (need review)                         │   │
│  │  Skipped (invalid):         73  (missing required fields)             │   │
│  │                                                                       │   │
│  │  Total:                 12,400                                        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Potential Duplicates (247)                              [Review all →]      │
│  ─────────────────────────                                                   │
│  Showing first 5:                                                            │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Import: Ana M. Martinez, 787-555-0101, anam@email.com              │   │
│  │  Match:  Ana Martínez, 787-555-0101, ana@email.com                  │   │
│  │  Confidence: 92% · Matched on: Phone (exact), Name (fuzzy)          │   │
│  │  Action: [Update existing ▾]                                        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Import: Pedro R. Colón, 787-555-0106, (no email)                   │   │
│  │  Match:  Pedro Colón, 787-555-0106, pedro@colon.pr                  │   │
│  │  Confidence: 90% · Matched on: Phone (exact), Name (fuzzy)          │   │
│  │  Action: [Update existing ▾]                                        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ...                                                                         │
│                                                                              │
│  Bulk action for remaining 242 duplicates:                                   │
│  ◉ Update existing records (keep newer data)                                │
│  ○ Create as new records (review later in dedup queue)                      │
│  ○ Skip duplicates (don't import matched rows)                              │
│                                                                              │
│  Skipped Rows (73)                                       [View details →]   │
│  ────────────────                                                            │
│  Missing phone: 68 · Invalid email format: 5                                │
│                                                                              │
│  [← Back]                                              [Continue →]         │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Design Notes
- **Summary first** — the user immediately sees the breakdown: how many new, how many updates, how many need attention
- **Per-duplicate action dropdown** — for the first few displayed dupes, the user can choose individually (Update existing / Create new / Skip)
- **Bulk action for remainder** — reviewing 247 duplicates one by one isn't practical. The bulk option handles the rest.
- **Skipped rows** — transparent about what won't be imported and why
- **"Review all" link** — opens a full dedup review interface for users who want to check every match

---

### CRM-011: Data Import Wizard — Confirmation (Step 4)

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Import Data                                                Step 4 of 4     │
│  ───────────────────────────────────────────────────────────────────────────  │
│  ✓ Upload  ✓ Map Columns  ✓ Review Duplicates  ● Confirm                    │
│                                                                              │
│  Ready to Import                                                             │
│  ────────────────                                                            │
│                                                                              │
│  File:             voters_san_juan_2024.csv                                  │
│  Type:             Voter file                                                │
│  Mapped columns:   16 of 18                                                  │
│                                                                              │
│  Actions to be taken:                                                        │
│  ─────────────────────                                                       │
│  Create new records:       10,840                                            │
│  Update existing records:   1,487  (1,240 matched + 247 dupes → update)     │
│  Skipped:                      73  (invalid data)                            │
│                                                                              │
│  Total records processed:  12,327 of 12,400                                  │
│                                                                              │
│  ⚠ This import will be logged in the audit trail.                           │
│  ⚠ This action cannot be undone. To reverse, you would need                 │
│    to restore from a backup.                                                 │
│                                                                              │
│  [← Back]                                           [Import 12,327 →]      │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Import Progress (after clicking Import)

```
│                                                                              │
│  Importing...                                                                │
│  ────────────                                                                │
│                                                                              │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░  68%                         │
│  8,382 of 12,327 records processed                                           │
│                                                                              │
│  You can navigate away — the import will continue in the background.         │
│  You'll be notified when it's complete.                                      │
│                                                                              │
```

#### Import Complete

```
│                                                                              │
│  ✓ Import Complete                                                           │
│  ─────────────────                                                           │
│                                                                              │
│  Created:     10,840 new records                                             │
│  Updated:      1,482 existing records                                        │
│  Skipped:         73 (invalid data)                                          │
│  Errors:           5 (unexpected format in rows 4201, 4203, 4210, 4211, 4215)│
│                                                                              │
│  Quality score: 94%                                                          │
│  New potential duplicates added to dedup queue: 12                            │
│                                                                              │
│  [View error details]  [View import in history]  [Return to Contacts →]     │
│                                                                              │
```

---

## Import History & Export

### CRM-012: Data Import History

#### Personas
- OA, DM

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Import History                                                              │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  [🔍 Search imports...]                                   [+ New Import]    │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Date        File                    Type      Records  Quality  By │   │
│  │  ─────────────────────────────────────────────────────────────────  │   │
│  │  Mar 3       voters_san_juan_2024    Voter     12,327   94%     CM  │   │
│  │  Feb 28      phone_bank_wave3        Contacts     500   98%     CM  │   │
│  │  Feb 25      event_attendees_th      Events        67   98%     ET  │   │
│  │  Feb 20      donors_q4_2023          Donors       342   91%     AR  │   │
│  │  Feb 15      voter_reg_western       Voter      3,200   89%     CM  │   │
│  │  Feb 10      volunteers_new          Volunteers    45   100%    ET  │   │
│  │  ...                                                                │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ◀  Page 1 of 3  ▶                              Showing 1–25 of 58         │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Row Click → Import Detail

```
┌────────────────────────────────────────┐
│  voters_san_juan_2024.csv          ✕   │
│  ────────────────────                  │
│                                        │
│  Imported: Mar 3, 2024 at 2:15 PM     │
│  By: Carlos M.                         │
│  Type: Voter file                      │
│                                        │
│  Results                               │
│  ────────                              │
│  Created:  10,840                      │
│  Updated:   1,482                      │
│  Skipped:      73                      │
│  Errors:        5                      │
│  Quality:     94%                      │
│                                        │
│  Column Mapping                        │
│  ────────                              │
│  NOMBRE → First Name                  │
│  APELLIDO → Last Name                 │
│  TELEFONO → Phone                     │
│  ...                                   │
│                                        │
│  [View errors]  [Download source file] │
└────────────────────────────────────────┘
```

---

### CRM-013: Data Export

#### Personas
- OA, DM

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Export Data                                                                 │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  What to export                                                              │
│  ─────────────                                                               │
│                                                                              │
│  Record type:    [Contacts                 ▾]                               │
│                                                                              │
│  Filter by segment:  [All contacts         ▾]                               │
│  Filter by type:     [All types            ▾]                               │
│  Filter by tag:      [Any tag              ▾]                               │
│  Date range:         [All time             ▾]                               │
│                                                                              │
│  Matching records: 24,830                                                    │
│                                                                              │
│  Which fields                                                                │
│  ────────────                                                                │
│                                                                              │
│  ☑ Name (first, last)          ☑ Phone                                     │
│  ☑ Email                       ☑ Address                                    │
│  ☑ Type                        ☑ Precinct / District                       │
│  ☑ Registration status         ☑ Party                                     │
│  ☐ Voter ID                    ☐ Date of birth                             │
│  ☑ Support score               ☑ Tags                                      │
│  ☐ Donation history            ☐ Communication history                     │
│  ☐ Canvass interactions        ☐ Event attendance                          │
│                                                                              │
│  [Select all]  [Clear all]                                                  │
│                                                                              │
│  Format                                                                      │
│  ──────                                                                      │
│  ◉ CSV          ○ Excel (.xlsx)          ○ JSON                             │
│                                                                              │
│  ☐ Include relationship data (donation → contact links, event → RSVP links) │
│                                                                              │
│  ⚠ This export will be logged in the audit trail.                           │
│  ⚠ Sensitive fields (Voter ID, DOB) require Org Admin approval.            │
│                                                                              │
│  [Cancel]                                             [Export 24,830 →]     │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Export Progress

Exports run in the background. A notification appears when ready:

```
┌────────────────────────────────────────────────────┐
│  ✓ Export ready                                     │
│  contacts_all_2024-03-03.csv                        │
│  24,830 records · 4.2 MB                            │
│  [Download]    Link expires in 24 hours.            │
└────────────────────────────────────────────────────┘
```

#### Design Notes
- **Record count updates live** as filters are applied — the user knows exactly what they're exporting
- **Field selection** — checkboxes for granular control. Sensitive fields (Voter ID, DOB) require extra permission.
- **Relationship data opt-in** — including cross-references produces a richer but larger export. Not checked by default.
- **Audit trail** — every export is logged with who, what, when, and which fields were included
- **Desktop only** (per screen inventory)

---

## Data Quality & Tags

### CRM-014: Data Quality Report

Detailed view of data health metrics. Complements the Data Quality Dashboard (DASH-006) with drill-down capability.

#### Personas
- OA, DM

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Data Quality Report                                                         │
│  ───────────────────────────────────────────────────────────────────────────  │
│  Overall score: 87%  ↑ from 82% last month                                  │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Score Breakdown                                                      │   │
│  │  ──────────────                                                       │   │
│  │                                                                       │   │
│  │  Completeness (40% weight)                                            │   │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░  89%   22,092 of 24,830 records complete     │   │
│  │                                                                       │   │
│  │  Freshness (30% weight)                                               │   │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░  84%   20,857 updated within 90 days         │   │
│  │                                                                       │   │
│  │  Validity (30% weight)                                                │   │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░  88%   21,850 with valid contact fields      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Completeness by Field                                                │   │
│  │  ─────────────────────                                                │   │
│  │                                                                       │   │
│  │  Field             Filled      Missing     % Complete                 │   │
│  │  ───────────────────────────────────────────────────────              │   │
│  │  First name        24,830           0      100%         🟢           │   │
│  │  Last name         24,830           0      100%         🟢           │   │
│  │  Phone             24,412         418       98%         🟢           │   │
│  │  Email             19,280       5,550       78%         🟡           │   │
│  │  Address           21,450       3,380       86%         🟡           │   │
│  │  Precinct          18,450       6,380       74%         🟡           │   │
│  │  Reg. status       18,200       6,630       73%         🟡           │   │
│  │  Party             15,400       9,430       62%         🔴           │   │
│  │  Voter ID          12,300      12,530       50%         🔴           │   │
│  │                                                                       │   │
│  │  [Export incomplete records →]                                        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Validity Issues (2,980)        │  │  Quality Trend (6 months)        │   │
│  │  ─────────────────              │  │  ─────────────────               │   │
│  │                                 │  │                                   │   │
│  │  Invalid email format    1,200  │  │  90%┤              ___/          │   │
│  │  Invalid phone format      800  │  │  85%┤         ____/              │   │
│  │  Undeliverable email       580  │  │  80%┤    ____/                   │   │
│  │  Invalid postal code       400  │  │  75%┤___/                        │   │
│  │                                 │  │  70%┤                             │   │
│  │                                 │  │      Oct  Nov  Dec  Jan  Feb  Mar │   │
│  │  [View all issues →]           │  │                                   │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Stale Records (969)                                                  │   │
│  │  ───────────────────                                                  │   │
│  │                                                                       │   │
│  │  91–180 days since update:     520   [View →]                        │   │
│  │  181–365 days since update:    312   [View →]                        │   │
│  │  Over 1 year since update:     137   [View →]                        │   │
│  │                                                                       │   │
│  │  Recommendation: Records over 1 year old should be reverified         │   │
│  │  before use in active campaigns.                                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Design Notes
- **Score breakdown** makes the composite formula transparent — the Data Manager can see which dimension is dragging the score down
- **Completeness by field** is the most actionable table — it tells the Data Manager exactly which fields to prioritize in data enrichment efforts
- **Color coding on percentages:** 🟢 >90%, 🟡 70–90%, 🔴 <70%
- **Quality trend chart** — shows improvement over time, validating the Data Manager's work
- **Stale records** grouped by age — more aggressive action recommended for older records
- **Desktop only** (per screen inventory)

---

### CRM-015: Tag Management

Manage the taxonomy of tags applied across all contact records.

#### Personas
- OA, DM

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Tags                                                                  34    │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  [🔍 Search tags...]                                       [+ New Tag]      │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Tag                   Contacts    Created      Category    Actions  │   │
│  │  ─────────────────────────────────────────────────────────────────  │   │
│  │  Canvassed             4,830       Jan 10       Field         ⋯     │   │
│  │  Phone Banked          1,847       Jan 15       Field         ⋯     │   │
│  │  Event Attendee        2,340       Jan 5        Events        ⋯     │   │
│  │  Recurring Donor         112       Jan 12       Fundraising   ⋯     │   │
│  │  VIP                      28       Feb 1        General       ⋯     │   │
│  │  Lapsed Volunteer         23       Feb 20       Volunteers    ⋯     │   │
│  │  Do Not Contact           15       Jan 8        General       ⋯     │   │
│  │  Needs Follow-up         342       Feb 25       Field         ⋯     │   │
│  │  Spanish Preferred        890       Jan 10       General       ⋯     │   │
│  │  ...                                                                │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ◀  Page 1 of 2  ▶                              Showing 1–25 of 34         │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Create / Edit Tag Dialog

```
┌────────────────────────────────────────┐
│  New Tag                               │
│  ────────                              │
│                                        │
│  Tag name *     [                    ] │
│  Category       [General           ▾] │
│  Description    [                    ] │
│                                        │
│  Categories: General, Field,           │
│  Fundraising, Events, Volunteers,      │
│  Communications                        │
│                                        │
│  [Cancel]                     [Save]   │
└────────────────────────────────────────┘
```

#### Row Actions (⋯)
- **Edit** — modify name, category, description
- **View contacts** — navigate to Contact List (CRM-001) filtered to this tag
- **Merge with...** — combine two tags (reassigns all contacts from one tag to another)
- **Delete** — confirmation dialog showing how many contacts will be untagged

#### Design Notes
- **Contact count** per tag provides immediate utility assessment — tags with 0 contacts can be cleaned up
- **Categories** organize tags into functional groups. The category list is fixed (not user-configurable) to prevent taxonomy sprawl.
- **Merge** is important for cleaning up near-duplicate tags created by different team members
- **Desktop only** (per screen inventory)
- **System tags** (auto-applied by the platform, like "Canvassed") are shown with a lock icon and cannot be renamed or deleted

---

## Empty States

### Contact List — Empty

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Contacts                                                                    │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│                         👥                                                   │
│                                                                              │
│               No contacts yet                                                │
│                                                                              │
│     Your CRM is empty. Start by importing your voter                        │
│     file or adding contacts manually.                                        │
│                                                                              │
│     [Import Voter File →]    [Add Contact]                                  │
│                                                                              │
│     Need help? Read the data import guide.                                  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Dedup Queue — Empty

```
│                         ✓                                                    │
│                                                                              │
│               No duplicates to review                                        │
│                                                                              │
│     All potential duplicates have been resolved.                             │
│     New duplicates will appear here after imports                            │
│     or as new records are added.                                             │
```

### Segment List — Empty

```
│                         📊                                                   │
│                                                                              │
│               No segments yet                                                │
│                                                                              │
│     Segments let you group contacts for targeted                            │
│     communications and field operations.                                     │
│                                                                              │
│     [Create Your First Segment →]                                           │
```

---

## Accessibility Notes

- Contact List table has proper `<th>` scope attributes for screen readers
- Support score bar uses `aria-label="Support score: 4 out of 5"` — not just visual
- Dedup comparison uses field-level labels and radio groups with descriptive names
- Import wizard progress indicator announces current step: "Step 2 of 4: Map Columns"
- Tag management merge action requires explicit confirmation — no drag-and-drop for destructive operations
- All filter dropdowns are keyboard-navigable
- Contact cards on mobile have tap targets meeting 44px minimum

---

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Unified contact record | Single record with persona-specific tabs | One person = one record regardless of how they interact with the org |
| Contact detail persona adaptation | Tab visibility changes by viewer's role | Finance Director sees donation tab first; Field Director sees canvassing first |
| Dedup as confidence-grouped queue | High/Medium/Low confidence groups | Guides Data Manager to easiest wins first |
| Dedup side-by-side comparison | Field-by-field with radio buttons for each field | Manual merge needs full visibility and per-field choice |
| Import wizard 4 steps | Upload → Map → Dedup Preview → Confirm | Each step has a distinct purpose; can't be meaningfully combined |
| Segment builder as visual query | Drag-and-drop criteria with live count | Technical users need power; live count provides confidence |
| Data export as single page | All options on one screen with live record count | Export is a configure-and-go action, not a multi-step process |
| Tag categories fixed | Platform-defined categories, not user-configurable | Prevents taxonomy sprawl across team members |
| System tags locked | Cannot be renamed or deleted | Auto-applied tags must remain reliable for platform features |
| Contact cards on mobile | 44px+ tap targets | Mobile contact browsing must be comfortable |

## Open Questions

1. **Contact record merge undo.** The current design says merges are irreversible (original records preserved in audit trail). Should there be a time-limited undo (e.g., 24-hour window to unmerge)? Adds complexity but reduces merge anxiety.

2. **Segment sharing.** Can segments be shared across personas? A segment created by the Communications Director for email targeting — can the Field Director also use it? Currently implied yes (segments are org-wide), but visibility rules may apply.

3. **Smart segments.** Should the platform offer pre-built "smart segments" (e.g., "Lapsed donors — donated >6 months ago, not since", "Super volunteers — >20 hours this month")? Reduces the learning curve for segment building.

4. **Contact record ownership.** In an alliance context, who "owns" a contact record that was merged from two orgs' imports? The dedup engine merges them, but the originating org retains ownership. What does "ownership" mean in the detail view — is it visible?

5. **Import scheduling.** Should recurring imports be supported (e.g., auto-import voter file updates weekly from an FTP)? Useful for orgs that receive regular voter file updates from election authorities.
