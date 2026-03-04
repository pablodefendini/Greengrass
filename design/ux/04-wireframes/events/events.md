# Events Wireframes

## Purpose

Events are the campaign's in-person and virtual touchpoints — rallies, town halls, fundraisers, trainings, canvass launches, phone banks, and virtual meetings. These wireframes cover the full event lifecycle: creation, promotion, RSVP management, day-of check-in, and post-event follow-up.

The core UX challenge: events serve wildly different personas. The Volunteer Coordinator creates and manages events on desktop. Supporters RSVP on their phones through a public page. Team Leads check people in at a venue with spotty wifi. The check-in tool must work offline, on a cheap phone, held in one hand while greeting someone with the other.

Public-facing event pages (EVT-006, EVT-007) and supporter event history (SUP-008) are wireframed in `supporter/supporter-portal.md`. This document covers admin-side screens plus the check-in tool.

## Scope

| ID | Screen | Personas | Offline | Mobile | Section |
|----|--------|----------|---------|--------|---------|
| EVT-001 | Event List | OA, VC, V, TL, S | No | Yes | Events |
| EVT-002 | Event Create/Edit | OA, VC | No | Desktop | Events |
| EVT-003 | Event Detail | OA, VC, V, TL, S | No | Yes | Events |
| EVT-004 | Event RSVP Management | OA, VC | No | Yes | RSVPs |
| EVT-005 | Event Check-in Tool | OA, VC, TL | Yes | Primary | Check-in |
| EVT-006 | Event RSVP Form (Public) | S, Public | No | Primary | Public (cross-ref) |
| EVT-007 | Event Page (Public) | Public | No | Primary | Public (cross-ref) |
| EVT-008 | Event Metrics | OA, VC | No | Desktop | Analytics |
| EVT-009 | Virtual Event Setup | OA, VC | No | Desktop | Events |
| EVT-010 | Post-Event Survey Builder | OA, VC | No | Desktop | Post-Event |

## Events Navigation Context

```
EVENTS (Volunteer Coordinator sidebar)
  Events              → EVT-001
  Check-in            → EVT-005 (selection)
  Post-Event          → EVT-010 (selection)

EVENTS (Volunteer / Team Lead sidebar)
  Events              → EVT-001 (view-only, filtered to their RSVPs)
```

---

## EVT-001: Event List

Browse upcoming and past events. Persona-adaptive — the Volunteer Coordinator sees all events with management actions; Volunteers see events they've RSVP'd to or can attend.

### Desktop — Admin View (OA, VC)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Events                                                    [+ New Event]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  [Upcoming]  [Past]  [Draft]  [All]                                         │
│                                                                              │
│  🔍 Search events...                                                        │
│  Filters: [Type ▾]  [Date Range ▾]  [Status ▾]                             │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                                                                      │   │
│  │  Rally at Plaza del Mercado                                          │   │
│  │  📅 Mar 5, 2026 · 6:00 PM — 9:00 PM                                 │   │
│  │  📍 Plaza del Mercado, San Juan                                      │   │
│  │  Type: Rally                                                         │   │
│  │  👥 142 RSVPs · Capacity: 500 · ☑ Public                            │   │
│  │                                                              [Edit]  │   │
│  │                                                                      │   │
│  ├──────────────────────────────────────────────────────────────────────┤   │
│  │                                                                      │   │
│  │  Town Hall: Healthcare Access                                        │   │
│  │  📅 Mar 12, 2026 · 7:00 PM — 9:00 PM                                │   │
│  │  📍 Centro Comunal, Bayamón                                          │   │
│  │  Type: Town Hall                                                     │   │
│  │  👥 67 RSVPs · Capacity: 150 · ☑ Public                             │   │
│  │                                                              [Edit]  │   │
│  │                                                                      │   │
│  ├──────────────────────────────────────────────────────────────────────┤   │
│  │                                                                      │   │
│  │  Volunteer Training — March                                          │   │
│  │  📅 Mar 8, 2026 · 10:00 AM — 12:00 PM                               │   │
│  │  🖥 Virtual (Zoom)                                                   │   │
│  │  Type: Training                                                      │   │
│  │  👥 28 RSVPs · Capacity: 50 · 🔒 Invite-only                       │   │
│  │                                                              [Edit]  │   │
│  │                                                                      │   │
│  ├──────────────────────────────────────────────────────────────────────┤   │
│  │                                                                      │   │
│  │  Spring Fundraiser Dinner                                    ✎ Draft │   │
│  │  📅 Apr 10, 2026 · 7:00 PM — 10:00 PM                               │   │
│  │  📍 Hotel El Convento, San Juan                                      │   │
│  │  Type: Fundraiser                                                    │   │
│  │  👥 0 RSVPs · Capacity: 200                                         │   │
│  │                                                              [Edit]  │   │
│  │                                                                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Showing 1-4 of 12                                                           │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile — Volunteer/Supporter View

```
┌────────────────────────────┐
│  Events                    │
├────────────────────────────┤
│                            │
│  [Upcoming] [My RSVPs]     │
│                            │
│  THIS WEEK                 │
│                            │
│  ┌──────────────────────┐  │
│  │ Rally at Plaza del   │  │
│  │ Mercado              │  │
│  │ 📅 Mar 5 · 6:00 PM   │  │
│  │ 📍 San Juan           │  │
│  │ 👥 142 going          │  │
│  │ ✓ You're going       │  │
│  ├──────────────────────┤  │
│  │ Volunteer Training   │  │
│  │ 📅 Mar 8 · 10:00 AM  │  │
│  │ 🖥 Virtual (Zoom)    │  │
│  │ 👥 28 going           │  │
│  │ [RSVP]               │  │
│  └──────────────────────┘  │
│                            │
│  NEXT WEEK                 │
│                            │
│  ┌──────────────────────┐  │
│  │ Town Hall: Health..  │  │
│  │ 📅 Mar 12 · 7:00 PM  │  │
│  │ 📍 Bayamón            │  │
│  │ 👥 67 going           │  │
│  │ [RSVP]               │  │
│  └──────────────────────┘  │
│                            │
└────────────────────────────┘
```

### Event Types

| Type | Icon | Typical context |
|------|------|----------------|
| Rally | 📢 | Large public gathering, outdoor |
| Town Hall | 🏛 | Public policy discussion, Q&A |
| Fundraiser | 💰 | Dinner, gala, fundraising event |
| Training | 📚 | Volunteer training, onboarding |
| Canvass Launch | 🚶 | Starting point for canvassing shift |
| Phone Bank | 📞 | Group phone bank session |
| Virtual | 🖥 | Online meeting via external provider |
| Other | 📌 | General event |

### Interaction

- **Row click** → opens EVT-003 Event Detail
- **"+ New Event"** → opens EVT-002 Create
- **Status tabs**: Upcoming (future + today), Past (ended), Draft (not published), All
- **Volunteer/Supporter view**: no Edit buttons, no Draft tab, "My RSVPs" tab filters to events they've RSVP'd to, inline RSVP button on cards
- **Capacity indicator**: when near capacity (>80%), shows amber "Filling up" badge. When full: "Waitlist" badge

### States

- **Empty (Admin)**: "No events yet. Events help you organize rallies, trainings, fundraisers, and more." [Create Event]
- **Empty (Volunteer)**: "No upcoming events. Check back soon for new events in your area."

---

## EVT-002: Event Create/Edit

Create or edit an event. Sections expand progressively — required fields first, optional details below.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Events    New Event                            [Save Draft]  [Publish]   │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  DETAILS                                                                     │
│  ───────                                                                     │
│                                                                              │
│  Event name *                                                                │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ Rally at Plaza del Mercado                                          │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Event type *                                                                │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ Rally                                                          [▾]  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Date *                         Start time *        End time *               │
│  ┌────────────────────┐        ┌──────────┐        ┌──────────┐            │
│  │ Mar 5, 2026        │        │ 6:00 PM  │        │ 9:00 PM  │            │
│  └────────────────────┘        └──────────┘        └──────────┘            │
│                                                                              │
│  ☐ Multi-day event                                                           │
│                                                                              │
│  Description *                                                               │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ Join us for a community rally featuring live music, speakers,       │   │
│  │ food vendors, and a celebration of our campaign progress.           │   │
│  │                                                                      │   │
│  │ Featured speakers:                                                   │   │
│  │ • Ana Martínez, Candidate for District 5                            │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  Rich text editor (bold, italic, lists, links)                               │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  LOCATION                                                                    │
│  ────────                                                                    │
│                                                                              │
│  ● In-person   ○ Virtual   ○ Hybrid                                         │
│                                                                              │
│  Venue name *                                                                │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ Plaza del Mercado                                                   │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Address *                                                                   │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ Calle Dos Hermanos, San Juan, PR 00907                              │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  [Map preview showing pin at venue address]                         │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  ▸ RSVP SETTINGS                                                             │
│  ▸ PROMOTION                                                                 │
│  ▸ STAFF & ROLES                                                             │
│  ▸ MEDIA                                                                     │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Collapsed Sections

**RSVP SETTINGS:**
```
│  RSVP type                                                                   │
│  ● Open (anyone can RSVP)                                                    │
│  ○ Invite-only (only invited contacts can RSVP)                              │
│  ○ Approval-required (RSVPs go to review queue)                              │
│                                                                              │
│  Capacity                                                                    │
│  ┌──────────┐  ☐ Enable waitlist when full                                  │
│  │ 500      │                                                                │
│  └──────────┘                                                                │
│                                                                              │
│  RSVP fields (in addition to name and email):                                │
│  ☐ Phone number                                                              │
│  ☐ Number of guests (max: [ 4 ])                                            │
│  ☐ Dietary restrictions (text field)                                         │
│  ☐ Custom question: ┌──────────────────────────────────┐                    │
│                      │                                  │                    │
│                      └──────────────────────────────────┘                    │
│                                                                              │
│  Reminders                                                                   │
│  ☑ 24 hours before (Email)                                                   │
│  ☑ 2 hours before (SMS, if phone provided)                                   │
│  ☐ 1 week before                                                             │
```

**PROMOTION:**
```
│  Public event page                                                           │
│  ☑ Create a public event page (shareable link)                               │
│  URL: greengrass.io/partido-verde/events/rally-plaza-mercado                 │
│  [Copy Link]                                                                 │
│                                                                              │
│  Hero image                                                                  │
│  ┌─────────────────────────────────┐                                        │
│  │    📷 Upload Image              │                                        │
│  │    Recommended: 1200 × 628px    │                                        │
│  └─────────────────────────────────┘                                        │
│                                                                              │
│  Calendar export                                                             │
│  ☑ Show "Add to Calendar" button on event page (iCal, Google Calendar)       │
│                                                                              │
│  ▸ Send invitations (opens segment selector + channel picker)                │
│  ▸ Share on social media (opens SOCIAL-002 pre-filled)                       │
```

**STAFF & ROLES:**
```
│  Event manager *        ┌──────────────────────────────────────┐            │
│                         │ Ana Reyes (You)                 [▾]  │            │
│                         └──────────────────────────────────────┘            │
│                                                                              │
│  Check-in staff                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ Ana Reyes, Jorge Vega, + Search team members...                     │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  These staff can access the check-in tool (EVT-005) for this event.         │
│                                                                              │
│  Fundraising                                                                 │
│  ☐ Enable cash donation collection at this event                             │
│    Links to FUND-010 Cash Donation Recording                                 │
```

**MEDIA:**
```
│  Additional images (gallery)                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │ + Upload │  │          │  │          │  │          │                  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘                  │
│                                                                              │
│  Post-event photos (available after event)                                   │
│  ☐ Allow attendees to upload photos (via portal)                             │
```

### Virtual Location Variant

When "Virtual" is selected, the location section changes:

```
│  LOCATION                                                                    │
│  ────────                                                                    │
│                                                                              │
│  ○ In-person   ● Virtual   ○ Hybrid                                         │
│                                                                              │
│  Video platform *                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ Zoom                                                           [▾]  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  Options: Zoom, Google Meet, Jitsi, Microsoft Teams, Custom URL              │
│                                                                              │
│  Meeting link *                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ https://zoom.us/j/1234567890?pwd=abc123                             │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ☑ Generate unique link per registrant (enables attendance tracking)         │
│  ⓘ Each registrant receives a personalized link. When they join,             │
│    attendance is automatically recorded.                                     │
│                                                                              │
│  [Configure Virtual Event Settings →]  (→ EVT-009)                           │
```

### Interaction

- **Save Draft**: saves without publishing. Event not visible to attendees
- **Publish**: makes event live. If public page is enabled, page goes live. If invitations are configured, sends them
- **Edit published event**: changes apply immediately. If date/time changes, option to notify existing RSVPs
- **Delete** (overflow menu): confirmation dialog. If RSVPs exist, warning: "47 people have RSVP'd. They will be notified of cancellation." Option to send cancellation message
- **Map preview**: auto-generated from address. Validates address on blur

---

## EVT-003: Event Detail

The hub for a specific event. Shows all information, RSVPs, and actions. Persona-adaptive.

### Desktop — Admin View

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Events    Rally at Plaza del Mercado          [Edit]  [Check-in →]  [⋮]  │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  [Hero image]                                                        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  📅 March 5, 2026 · 6:00 PM — 9:00 PM                                      │
│  📍 Plaza del Mercado, Calle Dos Hermanos, San Juan PR                      │
│  Type: Rally · ☑ Public                                                     │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Join us for a community rally featuring live music, speakers,              │
│  food vendors, and a celebration of our campaign progress.                  │
│                                                                              │
│  Featured speakers:                                                          │
│  · Ana Martínez, Candidate for District 5                                   │
│  · Dr. Elena Torres, Healthcare Policy Director                             │
│  · Carlos Rivera, Community Organizer                                       │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  RSVPs                                                         [Manage →]   │
│  ─────                                                                       │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ RSVPs        │  │ Checked In   │  │ Capacity     │  │ Waitlisted   │   │
│  │ 142          │  │ —            │  │ 500          │  │ 0            │   │
│  │              │  │ (event not   │  │ 28% filled   │  │              │   │
│  │              │  │  started)    │  │              │  │              │   │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                                              │
│  Recent RSVPs:                                                               │
│  María García · Carlos Ruiz · Lucía Fernández · +139 more                   │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Staff                                                                       │
│  ─────                                                                       │
│  Manager: Ana Reyes                                                          │
│  Check-in: Ana Reyes, Jorge Vega                                            │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Links                                                                       │
│  ─────                                                                       │
│  Public page: greengrass.io/partido-verde/events/rally-plaza   [Copy]       │
│  RSVP form: greengrass.io/.../rally-plaza/rsvp                 [Copy]       │
│  [Add to Calendar]                                                           │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  ▸ Discussion (3 messages)                                                   │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  [Map showing venue location]                                        │   │
│  │  [Get Directions →]                                                  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile — Volunteer/Supporter View

```
┌────────────────────────────┐
│  ← Events             [⋮]  │
├────────────────────────────┤
│                            │
│  ┌──────────────────────┐  │
│  │  [Hero image]        │  │
│  └──────────────────────┘  │
│                            │
│  Rally at Plaza del        │
│  Mercado                   │
│                            │
│  📅 Mar 5 · 6 – 9 PM      │
│  📍 Plaza del Mercado,     │
│     San Juan               │
│  👥 142 going               │
│                            │
│  ─────────────────────     │
│                            │
│  Join us for a community   │
│  rally featuring live      │
│  music, speakers...        │
│                            │
│  ─────────────────────     │
│                            │
│  ✓ You're going            │
│  [Cancel RSVP]             │
│                            │
│  ─────────────────────     │
│                            │
│  [Add to Calendar]         │
│  [Get Directions →]        │
│  [Share Event]             │
│                            │
│  ─────────────────────     │
│                            │
│  ┌──────────────────────┐  │
│  │  [Map]               │  │
│  └──────────────────────┘  │
│                            │
└────────────────────────────┘
```

### Post-Event Variant

After the event ends, the detail view shifts to show outcomes:

```
│  RSVPs & Attendance                                                          │
│  ──────────────────                                                          │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ RSVPs        │  │ Checked In   │  │ Walk-ins     │  │ Show Rate    │   │
│  │ 142          │  │ 118          │  │ 23           │  │ 83%          │   │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                                              │
│  [View Metrics →]  [Send Follow-up →]  [Survey Results →]                   │
```

### Interaction

- **"Check-in →"** (admin): opens EVT-005 for this event
- **"Manage →"** (RSVPs): opens EVT-004
- **Discussion**: collapsible thread (uses Contextual Thread pattern). Auto-includes event staff. Other attendees don't see this thread
- **Overflow menu** (⋮): Edit, Duplicate, Cancel Event, Export RSVPs, View Metrics
- **Volunteer/Supporter view**: no Edit, no Staff section, no Discussion. Shows RSVP status and action buttons
- **"Share Event"**: native share sheet on mobile (URL + event name)

---

## EVT-004: Event RSVP Management

Full RSVP list with management actions. Answers "who's coming, and who do I need to follow up with?"

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Rally at Plaza del Mercado    RSVPs (142)        [Export]  [+ Add RSVP]  │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  [All (142)]  [Confirmed (128)]  [Waitlisted (0)]  [Cancelled (14)]        │
│                                                                              │
│  🔍 Search by name or email...                                              │
│                                                                              │
│  ☐  Name                Email                  RSVP Date   Guests  Status   │
│  ─────────────────────────────────────────────────────────────────────────   │
│  ☐  María García        maria@email.com        Mar 1       +1      ✓ Conf   │
│  ☐  Carlos Ruiz         carlos@email.com       Mar 1       —       ✓ Conf   │
│  ☐  Lucía Fernández     lucia@email.com        Mar 2       +2      ✓ Conf   │
│  ☐  Pedro Martínez      pedro@email.com        Mar 2       —       ✓ Conf   │
│  ☐  Ana Vega            ana@email.com          Mar 3       —       ✗ Canc   │
│  ☐  Raj Patel           raj@email.com          Mar 3       +1      ✓ Conf   │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│  Total attending (including guests): 162                                     │
│                                                                              │
│  Bulk actions: [Send Message]  [Export Selected]  [Cancel RSVPs]            │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Approval-Required Variant

When the event uses approval-required RSVPs, an additional tab and workflow appears:

```
│  [All (142)]  [Pending (8)]  [Approved (128)]  [Declined (6)]              │
│                                                                              │
│  ─── Pending Approval ───                                                    │
│                                                                              │
│  ☐  Jorge Torres        jorge@email.com        Mar 3       —       ◷ Pend   │
│      [✓ Approve]  [✗ Decline]                                               │
│  ☐  Lisa Chen           lisa@email.com         Mar 3       +1      ◷ Pend   │
│      [✓ Approve]  [✗ Decline]                                               │
│                                                                              │
│  [Approve All Pending (8)]                                                   │
```

### Mobile

```
┌────────────────────────────┐
│  ← RSVPs (142)       [⋮]  │
├────────────────────────────┤
│                            │
│  [All] [Conf.] [Waitl.] ▾ │
│                            │
│  🔍 Search...              │
│                            │
│  ┌──────────────────────┐  │
│  │ María García    ✓    │  │
│  │ maria@email.com      │  │
│  │ Mar 1 · +1 guest     │  │
│  ├──────────────────────┤  │
│  │ Carlos Ruiz     ✓    │  │
│  │ carlos@email.com     │  │
│  │ Mar 1                │  │
│  ├──────────────────────┤  │
│  │ Ana Vega        ✗    │  │
│  │ ana@email.com        │  │
│  │ Mar 3 · Cancelled    │  │
│  └──────────────────────┘  │
│                            │
│  162 total (incl. guests)  │
│                            │
└────────────────────────────┘
```

### Interaction

- **"+ Add RSVP"**: manually add a contact (search CRM or enter name + email). For walk-ins registered before the event
- **Export**: CSV with all RSVP data. Includes guest counts, custom question responses
- **"Send Message"**: compose a message to selected or all RSVPs (opens COMM-005 pre-filled with this audience)
- **Row click**: opens contact record (CRM-002) in detail panel
- **Guest count**: shows total attending including guest +N counts
- **Cancelled tab**: shows cancellations with date/time for tracking drop-off patterns

### States

- **Empty**: "No RSVPs yet. Share the event link to start collecting RSVPs." [Copy Event Link]

---

## EVT-005: Event Check-in Tool

Mobile-first check-in for event day. Works offline. Uses the Check-in Tool pattern.

### Mobile (Primary)

```
┌────────────────────────────┐
│  Check-in                  │
│  Rally at Plaza del Merc.  │
├────────────────────────────┤
│                            │
│  ┌──────────────────────┐  │
│  │  118 of 142 ✓        │  │
│  │  ████████████████░░░ │  │
│  │  83% checked in       │  │
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │
│  │ 🔍 Search name...    │  │
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │
│  │ ☐ Diallo, Amina      │  │
│  ├──────────────────────┤  │
│  │ ☐ Fernández, Lucía   │  │
│  │   +2 guests          │  │
│  ├──────────────────────┤  │
│  │ ✓ García, María      │  │
│  │   +1 guest  6:12 PM  │  │
│  ├──────────────────────┤  │
│  │ ✓ Martínez, Pedro    │  │
│  │   6:05 PM            │  │
│  ├──────────────────────┤  │
│  │ ☐ Patel, Raj         │  │
│  │   +1 guest           │  │
│  ├──────────────────────┤  │
│  │ ✓ Ruiz, Carlos       │  │
│  │   6:01 PM            │  │
│  └──────────────────────┘  │
│                            │
│  ─────────────────────     │
│                            │
│  [📷 Scan QR Code]        │
│                            │
│  [+ Walk-in]               │
│                            │
│  ─────────────────────     │
│  ◌ Offline — will sync     │
│    when connected          │
│                            │
└────────────────────────────┘
```

### QR Scan Mode

```
┌────────────────────────────┐
│  ← Check-in    118 of 142 │
├────────────────────────────┤
│                            │
│  ┌──────────────────────┐  │
│  │                      │  │
│  │                      │  │
│  │    [Camera view]     │  │
│  │                      │  │
│  │    ┌────────────┐    │  │
│  │    │            │    │  │
│  │    │  QR frame  │    │  │
│  │    │            │    │  │
│  │    └────────────┘    │  │
│  │                      │  │
│  │                      │  │
│  └──────────────────────┘  │
│                            │
│  Point camera at RSVP      │
│  QR code                   │
│                            │
│  ─────────────────────     │
│                            │
│  ┌──────────────────────┐  │
│  │  ✓ María García      │  │
│  │    Checked in 6:12 PM│  │
│  │                 [Undo]│  │
│  └──────────────────────┘  │
│                            │
│  [Switch to List View]     │
│                            │
└────────────────────────────┘
```

### Walk-in Registration

```
┌────────────────────────────┐
│  ← Check-in    Walk-in     │
├────────────────────────────┤
│                            │
│  Name *                    │
│  ┌──────────────────────┐  │
│  │                      │  │
│  └──────────────────────┘  │
│                            │
│  Email                     │
│  ┌──────────────────────┐  │
│  │                      │  │
│  └──────────────────────┘  │
│                            │
│  Phone                     │
│  ┌──────────────────────┐  │
│  │                      │  │
│  └──────────────────────┘  │
│                            │
│  ☐ Opt in to future        │
│    event notifications     │
│                            │
│  [Register & Check In]     │
│                            │
└────────────────────────────┘
```

### Interaction

- **Tap to check in**: tapping an unchecked name marks them as checked in with timestamp. Brief haptic feedback (on capable devices). Checkmark animates in
- **Undo**: checked-in names show "Undo" for 10 seconds after check-in. After that, undo requires long-press → confirmation
- **QR scan**: uses device camera (Capacitor Camera API). Scans attendee QR code (included in RSVP confirmation email). Auto-checks in on successful scan. Shows name confirmation briefly
- **Search**: type-ahead, first-letter jump. Essential for large events
- **Walk-in**: registers a new attendee not on the RSVP list. Creates or matches CRM contact. Checked in immediately
- **Guest check-in**: tapping a name with guests shows "+N guests" — tap again to confirm guest count arriving (may be fewer than RSVP'd)
- **Offline**: full RSVP list downloaded before event. All check-ins stored locally. Sync indicator shows status. Multiple staff can check in simultaneously — conflicts resolved by timestamp
- **Counter**: always visible. Updates in real time

### Touch Target Specs

- Name rows: 56px minimum height, full-width tap area
- Checkbox area: 48px × 48px minimum
- QR scan button: 56px height, full-width
- Walk-in button: 48px height

### States

- **Empty (no RSVPs)**: "No RSVPs for this event yet. You can still use Walk-in to register attendees."
- **All checked in**: "All 142 RSVPs checked in! 🎉" (counter shows 142 of 142)
- **Sync complete**: "All check-in data synced" (green indicator)

---

## EVT-006 & EVT-007: Public Event Pages

> **Cross-reference:** The public event RSVP form (EVT-006) and public event page (EVT-007) are wireframed in `supporter/supporter-portal.md`. They use the `(public)` layout group — no app shell, no login required, tenant-branded.

EVT-006 is the RSVP form embedded within or linked from the public event page. EVT-007 is the full public event page with description, location map, share buttons, and RSVP form.

---

## EVT-008: Event Metrics

Post-event analytics. Answers "how did the event go?" and "how does it compare to our other events?"

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Events    Rally at Plaza del Mercado — Metrics               [Export]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Event Summary                                                               │
│  ─────────────                                                               │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ RSVPs        │  │ Attended     │  │ Walk-ins     │  │ Show Rate    │   │
│  │ 142          │  │ 118          │  │ 23           │  │ 83%          │   │
│  │              │  │              │  │              │  │ (avg: 72%)   │   │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Attendance Breakdown                                                        │
│  ─────────────────────                                                       │
│                                                                              │
│  RSVP'd and attended:        118  (83%)                                      │
│  RSVP'd, did not attend:     24   (17%)                                      │
│  Walk-ins:                   23                                              │
│  Total attendance:           141                                             │
│  Total including guests:     162                                             │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  RSVP Source                                                                 │
│  ───────────                                                                 │
│                                                                              │
│  Source              RSVPs    % of Total                                      │
│  ─────────────────────────────────────────                                   │
│  Public event page   82       57.7%                                          │
│  Email invitation    38       26.8%                                          │
│  SMS invitation      12       8.5%                                           │
│  Social media link   7        4.9%                                           │
│  Direct / other      3        2.1%                                           │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Check-in Timeline                                                           │
│  ─────────────────                                                           │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  25 ┤              ╱╲                                                │   │
│  │     │            ╱    ╲                                              │   │
│  │  20 ┤          ╱        ╲                                            │   │
│  │     │        ╱            ╲                                          │   │
│  │  15 ┤      ╱                ╲                                        │   │
│  │     │    ╱                    ╲         ╱╲                           │   │
│  │  10 ┤  ╱                        ╲     ╱    ╲                         │   │
│  │     │╱                            ╲  ╱      ╲                       │   │
│  │   5 ┤                              ╲╱        ╲──                    │   │
│  │     │                                                                │   │
│  │   0 ┼──────────────────────────────────────────────                  │   │
│  │      5:30  6:00  6:30  7:00  7:30  8:00  8:30                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  Peak arrival: 6:00 – 6:15 PM (28 check-ins)                                │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Fundraising (if applicable)                                                 │
│  ───────────────────────────                                                 │
│  Cash collected at event: $480 (6 donations)                                 │
│  Online donations during event: $350 (4 donations)                           │
│  [View Donations →]                                                          │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  CRM Impact                                                                  │
│  ──────────                                                                  │
│  New contacts created (walk-ins):  18                                        │
│  Existing contacts updated:        123                                       │
│  Event attendance tagged:          141 contacts                              │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Post-Event Actions                                                          │
│  ──────────────────                                                          │
│  [Send Thank-You to Attendees]  [Send Follow-up to No-Shows]               │
│  [Send Survey]  [View Survey Results]                                        │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Comparison to Similar Events                                                │
│  ────────────────────────────                                                │
│  Event                   RSVPs  Attended  Show%   Walk-ins                   │
│  Rally — Plaza (this)    142    118       83%     23                          │
│  Rally — Bayamón Feb     98     72        73%     15                          │
│  Rally — Ponce Jan       120    89        74%     12                          │
│  Average (rallies)       120    93        72%     17                          │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Interaction

- **Export**: PDF report for stakeholder sharing. Includes all sections
- **"Send Thank-You"**: opens COMM-005 or COMM-002 pre-filled with attendee list
- **"Send Follow-up to No-Shows"**: sends to RSVPs who didn't check in. Pre-filled message template
- **"Send Survey"**: opens EVT-010 survey builder or sends previously configured survey
- **Check-in timeline chart**: shows arrival pattern. Useful for planning event start time and logistics
- **Comparison table**: auto-populated with events of the same type. Helps track trends

### States

- **Pre-event**: metrics screen shows RSVP data only. Attendance sections say "Available after event"
- **No survey**: "Send Survey" button instead of "View Survey Results"

---

## EVT-009: Virtual Event Setup

Additional configuration for virtual events. Extends EVT-002 with video platform integration details.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Edit Event    Virtual Event Settings                                     │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Video Platform                                                              │
│  ──────────────                                                              │
│                                                                              │
│  Platform *                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ Zoom                                                           [▾]  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  Options: Zoom, Google Meet, Jitsi, Microsoft Teams, Custom URL              │
│                                                                              │
│  Meeting link *                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ https://zoom.us/j/1234567890?pwd=abc123                             │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Meeting password (if separate from link)                                    │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ ••••••                                                              │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Attendance Tracking                                                         │
│  ────────────────────                                                        │
│                                                                              │
│  ☑ Generate unique join link per registrant                                  │
│  ⓘ Each registrant receives a personalized link in their RSVP confirmation. │
│    When they join, attendance is automatically recorded.                      │
│                                                                              │
│  ☐ Require registration before joining                                       │
│  ⓘ If enabled, the meeting link is hidden until the user RSVPs.             │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Reminder Settings                                                           │
│  ─────────────────                                                           │
│                                                                              │
│  ☑ Include join link in reminders                                            │
│  ☑ Send "starting now" notification at event time                            │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Recording                                                                   │
│  ─────────                                                                   │
│                                                                              │
│  ☐ Share recording link with attendees after event                           │
│  ☐ Share recording link with no-show RSVPs                                   │
│                                                                              │
│  Recording URL (add after event):                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                                                                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  [Save]                                                                      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Interaction

- Accessed from EVT-002's "Configure Virtual Event Settings →" link
- **Unique link generation**: when enabled, the system appends a tracking parameter to the meeting URL per registrant
- **Recording URL**: added post-event. When saved with recording checkboxes enabled, triggers automated follow-up emails with recording link
- **Platform selection**: determines which integration is used for attendance tracking

---

## EVT-010: Post-Event Survey Builder

Create surveys to send to attendees after an event. Simple form builder optimized for event feedback.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Event Metrics    Post-Event Survey                [Preview]  [Send ▾]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Event: Rally at Plaza del Mercado                                           │
│  Audience: 141 attendees (118 RSVP + 23 walk-ins)                           │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Survey Questions                                                            │
│  ────────────────                                                            │
│                                                                              │
│  1. How would you rate the event overall? *            [Rating ▾]           │
│     ☆ ☆ ☆ ☆ ☆ (1–5 stars)                                                  │
│     [✗ Remove]  [⇅ Drag to reorder]                                        │
│                                                                              │
│  2. What did you enjoy most?                           [Multi-select ▾]     │
│     ☐ Speakers    ☐ Music    ☐ Food                                         │
│     ☐ Networking  ☐ Information  ☐ Atmosphere                               │
│     [+ Add option]                                                           │
│     [✗ Remove]  [⇅]                                                        │
│                                                                              │
│  3. How likely are you to attend future events? *      [Rating ▾]           │
│     1 ──────●────── 10                                                       │
│     (1 = Not at all, 10 = Definitely)                                        │
│     [✗ Remove]  [⇅]                                                        │
│                                                                              │
│  4. Would you like to volunteer with us?               [Single select ▾]    │
│     ○ Yes, sign me up!                                                       │
│     ○ Maybe, tell me more                                                    │
│     ○ Not right now                                                          │
│     [✗ Remove]  [⇅]                                                        │
│                                                                              │
│  5. Any other feedback?                                [Free text ▾]        │
│     ┌──────────────────────────────────────────────────┐                    │
│     │ (Long text response area)                        │                    │
│     └──────────────────────────────────────────────────┘                    │
│     [✗ Remove]  [⇅]                                                        │
│                                                                              │
│  [+ Add Question]                                                            │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Question types: Rating (stars), Rating (scale), Single select,              │
│  Multi-select, Free text, Yes/No                                             │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Delivery                                                                    │
│  ────────                                                                    │
│  Send to: ● All attendees (141)  ○ RSVP attendees only (118)               │
│  Channel: ● Email  ○ SMS (link to survey)                                   │
│                                                                              │
│  Message:                                                                    │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ Thank you for attending Rally at Plaza del Mercado! We'd love       │   │
│  │ your feedback to help make future events even better.               │   │
│  │                                                                      │   │
│  │ [Take the Survey — 2 minutes]                                       │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Survey Results View

After responses come in, the survey shows aggregate results:

```
│  Survey Results — 47 responses (33% response rate)                           │
│  ──────────────                                                              │
│                                                                              │
│  1. Overall rating                    Avg: 4.3 / 5.0 ★                      │
│     ★★★★★  18 (38%)  ██████████████████████████████████████                │
│     ★★★★☆  21 (45%)  ████████████████████████████████████████████          │
│     ★★★☆☆   6 (13%)  █████████████                                         │
│     ★★☆☆☆   2 (4%)   ████                                                  │
│     ★☆☆☆☆   0 (0%)                                                         │
│                                                                              │
│  2. What did you enjoy most?                                                 │
│     Speakers         31 (66%)  ████████████████████████████████████          │
│     Atmosphere       28 (60%)  ██████████████████████████████████            │
│     Networking       22 (47%)  ██████████████████████████                    │
│     Music            19 (40%)  ██████████████████████                        │
│     Food             15 (32%)  █████████████████                             │
│     Information      12 (26%)  ██████████████                                │
│                                                                              │
│  3. Likelihood to attend future events    Avg: 8.2 / 10                     │
│     ███████████████████████████████████████████████████████████████████ 8.2  │
│                                                                              │
│  4. Would you like to volunteer?                                             │
│     Yes, sign me up!     12 (26%)  → [View contacts →]                      │
│     Maybe, tell me more  18 (38%)  → [View contacts →]                      │
│     Not right now        17 (36%)                                            │
│                                                                              │
│  5. Other feedback — 23 responses  [View All →]                              │
│     "Great energy! Would love to see more community..."                      │
│     "The speakers were inspiring. Please have more events..."               │
│     "Parking was difficult — consider a shuttle next time"                   │
│                                                                              │
│  [Export Results]                                                             │
```

### Interaction

- **Question types**: dropdown to change type. Each type renders appropriate input controls
- **Drag to reorder**: questions can be reordered via drag handle
- **"+ Add Question"**: appends a new question with type selector
- **Required toggle**: asterisk (*) marks required questions
- **Preview**: opens survey as respondent will see it (mobile-optimized)
- **Send dropdown**: "Send Now", "Schedule", "Save Draft"
- **Results**: "View contacts →" on volunteer-interest responses links to CRM-001 filtered to those contacts
- **Export**: CSV with all individual responses (anonymized option available)

### States

- **Empty (no questions)**: default template pre-loads 3 questions (overall rating, enjoyment, future attendance)
- **No responses yet**: "Survey sent to 141 attendees. No responses yet."

---

## Empty States Summary

| Screen | Empty Message | Action |
|--------|--------------|--------|
| EVT-001 (Admin) | No events yet. Events help you organize rallies, trainings, fundraisers, and more. | Create Event |
| EVT-001 (Volunteer) | No upcoming events. Check back soon for new events in your area. | — |
| EVT-004 RSVPs | No RSVPs for this event yet. Share the event link to start collecting RSVPs. | Copy Event Link |
| EVT-005 Check-in (no RSVPs) | No RSVPs for this event yet. You can still use Walk-in to register attendees. | — |

---

## Accessibility Notes

- Check-in tool uses 56px minimum row height for one-handed tap operation
- Check-in confirmation uses haptic feedback + visual checkmark + timestamp text (not just color change)
- QR scan mode has a manual fallback (name search) for accessibility
- Event cards use semantic structure: event name as heading, date/location as supporting text
- RSVP status communicated via icon + text (✓ Confirmed, ✗ Cancelled, ◷ Pending)
- Survey star ratings are keyboard-accessible with arrow keys

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Check-in as full-screen tool | Dedicated check-in mode, not embedded in event detail | Check-in is a high-focus task at a busy venue. The tool needs maximum screen real estate and minimal distractions |
| Check-in offline-first | RSVP list pre-downloaded, all check-ins local until sync | Events happen in parks, community centers, rural areas. Connectivity is unreliable. Data loss is unacceptable |
| Walk-in as separate flow | Distinct "Walk-in" button, not a modification of the RSVP list | Walk-ins need a quick registration form. Mixing them into the RSVP flow would slow check-in for pre-registered attendees |
| Survey as lightweight builder | Simple question-type builder, not a full form engine | Post-event surveys should be 2-minute affairs. A complex builder encourages over-long surveys that get low response rates |
| Virtual as extension, not separate | Virtual settings extend EVT-002, share the same event model | Hybrid events need both physical and virtual details. A unified model prevents duplicate event management |
| Metrics comparison table | Auto-populated with same-type events | Showing trends helps the VC improve over time. "Was this rally better than our last rally?" is a natural question |

## Open Questions

1. **Multi-day events** — should multi-day events be a single event with multiple date entries, or separate linked events? Single-event with date range is simpler but doesn't support per-day RSVPs
2. **Ticket types / pricing** — should events support paid tickets (e.g., fundraiser dinner at $100/seat)? This overlaps with fundraising and adds payment integration to the event flow
3. **Recurring events** — should there be a "recurring event" feature (e.g., weekly phone bank) that auto-creates event instances? Or is manual duplication sufficient for v1?
4. **Attendee messaging during event** — should there be an in-event broadcast capability (push notification to attendees: "Session starting in 5 minutes in Room B")? Could be useful for large multi-track events but adds complexity
5. **Check-in for multiple staff simultaneously** — when multiple staff check in attendees at the same event offline, how are conflicts resolved? Current plan: last-write-wins by timestamp, but dual-check-in of the same person should show a warning on sync
