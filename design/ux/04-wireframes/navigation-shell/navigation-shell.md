# Navigation Shell Wireframes

## Purpose

These wireframes define the persistent UI frame around all application content — the header bar, sidebar, bottom tabs, and field mode chrome. Every screen in the platform lives inside one of these shells. Getting the shell right is prerequisite to every other wireframe.

## Desktop Shell — Sidebar Expanded

The default desktop experience for all staff personas. Sidebar at 240px, collapsible.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 Partido Verde          🔍 Search...                    ● ↻  🔔3  [PD ▾]  │
├──────────────┬──────────────────────────────────────────────────────────────────┤
│              │                                                                  │
│  OVERVIEW    │  Dashboard  ›  Field Operations                                  │
│  ◉ Dashboard │  ─────────────────────────────────────────────────────────────   │
│    Activity  │                                                                  │
│              │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  PEOPLE      │  │ Doors: 1,247│  │ Contacts: 891│  │ Rate: 71.4% │              │
│    Contacts  │  │     ↑ 12%   │  │     ↑ 8%    │  │     ↑ 2.1%  │              │
│    Segments  │  └─────────────┘  └─────────────┘  └─────────────┘              │
│              │                                                                  │
│  FIELD     ▾ │  ┌──────────────────────────────────────────────────┐            │
│  ◦ Canvassing│  │                                                  │            │
│    Phone Bank│  │            Doors Knocked (30 days)               │            │
│    Voter Reg │  │            ~~~~~~~~~~~~~~~~~~~~~~~~~~~           │            │
│    Turfs     │  │  400 ┤    /\                                     │            │
│              │  │  300 ┤   /  \      /\                            │            │
│  FUNDRAISING │  │  200 ┤  /    \    /  \    /\                     │            │
│    Donations │  │  100 ┤ /      \  /    \  /  \___                 │            │
│    Forms     │  │    0 ┤/        \/      \/                        │            │
│    Campaigns │  │       ├──┬──┬──┬──┬──┬──┬──┬──┤                  │            │
│    Compliance│  │       W1 W2 W3 W4 W5 W6 W7 W8                   │            │
│              │  └──────────────────────────────────────────────────┘            │
│  COMMS       │                                                                  │
│    Email     │  ┌──────────────────────────────────────────────────┐            │
│    SMS/WA    │  │  Active Campaigns                                │            │
│    Social    │  ├──────────────────────────────────────────────────┤            │
│    Templates │  │  Northside Canvass     142/200 doors   In Prog   │            │
│              │  │  Westside Follow-up     87/150 doors   In Prog   │            │
│  EVENTS      │  │  Phone Bank Wave 3     312/500 calls   In Prog   │            │
│    Events    │  │  Eastside Registration   45/100 voters  Planned  │            │
│    Check-in  │  └──────────────────────────────────────────────────┘            │
│              │                                                                  │
│  MESSAGING   │                                                                  │
│    Messages  │                                                                  │
│              │                                                                  │
│──────────────│                                                                  │
│  ? Help      │                                                                  │
│  🌐 Español  │                                                                  │
│  ⚙ Settings  │                                                                  │
└──────────────┴──────────────────────────────────────────────────────────────────┘
```

### Header Bar Anatomy

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  [1]              [2]                                    [3] [4]  [5]    [6]    │
└─────────────────────────────────────────────────────────────────────────────────┘

[1] Tenant identity     Logo + name. Links to home screen.
                        In alliance context: alliance name + tenant switcher dropdown.

[2] Global search       Text input. Cmd+K shortcut opens command palette overlay.
                        Type-ahead results grouped by type (people, events, campaigns).

[3] Sync indicator      Green dot = connected. Amber = stale. Grey = offline.
                        Tapping opens sync detail panel.

[4] Sync action         Only visible when syncing (animated) or when there's an error.

[5] Notifications       Bell icon + unread badge count. Tapping opens notification drawer.

[6] User avatar         Initials or photo. Dropdown: profile, preferences, language,
                        security, tenant switcher (if multi-tenant), log out.
```

### Header Bar States

**Connected (normal):**
```
│  🌿 Partido Verde          🔍 Search...                       ●    🔔3  [PD ▾]  │
```

**Stale (>5 min since sync):**
```
│  🌿 Partido Verde          🔍 Search...           ● Last sync: 8 min  🔔3  [PD ▾]  │
```

**Syncing:**
```
│  🌿 Partido Verde          🔍 Search...                      ↻    🔔3  [PD ▾]  │
```

**Offline:**
```
│  🌿 Partido Verde          🔍 Search...          ◌ Offline          🔔3  [PD ▾]  │
```

**Sync error:**
```
│  🌿 Partido Verde          🔍 Search...       ⚠ Sync failed · Retry  🔔3  [PD ▾]  │
```

### Sidebar Anatomy

```
┌──────────────┐
│              │  240px wide (expanded)
│  SECTION   ▾ │  ← Collapsible section header (uppercase, muted text, chevron)
│  ◉ Active    │  ← Active item: filled dot, primary color text, subtle bg highlight
│  ◦ Item      │  ← Inactive item: hollow dot, default text
│  ◦ Item  🔴3 │  ← Item with badge (unread count, pending count)
│  ◦ Item  ◌   │  ← Offline-unavailable item: greyed text, offline badge
│              │
│  SECTION   ▸ │  ← Collapsed section (right-pointing chevron)
│              │
│──────────────│  ← Divider before footer
│  ? Help      │
│  🌐 Language │
│  ⚙ Settings  │
└──────────────┘
```

---

## Desktop Shell — Sidebar Collapsed

User preference (persisted). Icon-only sidebar at 64px. Hovering an icon shows a tooltip with the item name.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 Partido Verde          🔍 Search...                    ●    🔔3  [PD ▾]   │
├────────┬────────────────────────────────────────────────────────────────────────┤
│        │                                                                        │
│  📊    │  Dashboard  ›  Field Operations                                        │
│  👥    │  ─────────────────────────────────────────────────────────────────      │
│  🏠    │                                                                        │
│  💰    │                    (wider content area)                                 │
│  📧    │                                                                        │
│  📅    │                                                                        │
│  💬    │                                                                        │
│        │                                                                        │
│        │                                                                        │
│        │                                                                        │
│        │                                                                        │
│────────│                                                                        │
│  ?     │                                                                        │
│  🌐    │                                                                        │
│  ⚙     │                                                                        │
└────────┴────────────────────────────────────────────────────────────────────────┘
```

### Collapse/Expand Behavior

- Toggle: Click the collapse button at the top of the sidebar (hamburger icon or «/» chevrons)
- Preference persisted to local storage
- Collapsed sidebar shows: section dividers (thin lines), icon per item, tooltip on hover
- Active item: icon highlighted with primary color background circle
- Hovering a collapsed section shows a flyout with the full section items

---

## Desktop Shell — With Detail Panel

When viewing a record in split-view mode (e.g., clicking a contact in a list):

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 Partido Verde          🔍 Search...                    ●    🔔3  [PD ▾]   │
├──────────────┬────────────────────────────────────┬─────────────────────────────┤
│              │                                    │                             │
│  OVERVIEW    │  Contacts                          │  Ana Martínez           ✕  │
│  ◉ Dashboard │  ────────────────────────          │  ────────────────────────  │
│    Activity  │                                    │                             │
│              │  🔍 Search   [Filter▾] [+New]      │  📷  Ana Martínez           │
│  PEOPLE    ▾ │                                    │      ana@email.com          │
│  ◉ Contacts  │  ☐  Ana Martínez     Supporter  → │      +1 787-555-0147        │
│    Segments  │  ☐  Carlos Rivera    Volunteer     │      San Juan, PR           │
│              │  ☐  Elena Torres     Donor         │                             │
│  FIELD       │  ☐  José Delgado    Vol. Lead     │  [Overview] [Activity] [Notes]│
│    Canvassing│  ☐  María Santos     Supporter     │  ──────────────────────     │
│    Phone Bank│  ☐  Pedro Colón      Volunteer     │  Status: Active Supporter   │
│    Voter Reg │  ☐  Rosa Figueroa    Donor         │  Support Score: 4 (Strong)  │
│    Turfs     │  ...                               │  Last Contact: Jan 15       │
│              │                                    │  Source: Door Canvass       │
│  FUNDRAISING │  ◀ 1 of 12 ▶  Showing 1-25 of 287│  Tags: Northside, Vol-Int   │
│    Donations │                                    │                             │
│    ...       │                                    │  [Edit]  [Log Interaction]  │
│              │                                    │                             │
└──────────────┴────────────────────────────────────┴─────────────────────────────┘
```

### Detail Panel Behavior

- **Width:** ~380px default, resizable by dragging the left edge
- **Dismiss:** Click ✕ or press Escape
- **Pin:** User can pin the detail panel open (persisted preference)
- **Content:** Loads the detail view of the selected record
- **Navigation:** Clicking a different list item updates the detail panel content
- **Small desktops (1024-1280px):** Detail panel opens as a full-screen overlay instead of inline split
- **Transition:** Slide in from right (or left in RTL), 200ms ease-out

---

## Desktop Shell — Notification Drawer

Triggered by clicking the notification bell:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 Partido Verde          🔍 Search...                    ●    🔔3  [PD ▾]   │
├──────────────┬──────────────────────────────────────┬───────────────────────────┤
│              │                                      │                           │
│  OVERVIEW    │         (main content dimmed)        │  Notifications        ✕  │
│  ◉ Dashboard │                                      │  ─────────────────────   │
│    Activity  │                                      │  [All] [Unread] [@ Me]   │
│              │                                      │                           │
│  PEOPLE      │                                      │  TODAY                    │
│    Contacts  │                                      │  ┌───────────────────┐   │
│    Segments  │                                      │  │ 🔔 New shift      │   │
│              │                                      │  │ Northside Canvass │   │
│  FIELD       │                                      │  │ assigned to you   │   │
│    Canvassing│                                      │  │ 2 min ago         │   │
│    Phone Bank│                                      │  └───────────────────┘   │
│              │                                      │  ┌───────────────────┐   │
│              │                                      │  │ 💬 María Santos   │   │
│              │                                      │  │ sent you a message│   │
│              │                                      │  │ 15 min ago        │   │
│              │                                      │  └───────────────────┘   │
│              │                                      │  ┌───────────────────┐   │
│              │                                      │  │ 💰 $250 donation  │   │
│              │                                      │  │ from Pedro Colón  │   │
│              │                                      │  │ 1 hour ago        │   │
│              │                                      │  └───────────────────┘   │
│              │                                      │                           │
│              │                                      │  YESTERDAY                │
│              │                                      │  ...                      │
│              │                                      │                           │
│              │                                      │  [Mark all read]          │
│              │                                      │  [Notification settings]  │
└──────────────┴──────────────────────────────────────┴───────────────────────────┘
```

### Notification Drawer Behavior

- **Width:** ~380px, slides from right (left in RTL)
- **Filter tabs:** All, Unread, @ Me (mentions/direct assignments)
- **Grouping:** By day (Today, Yesterday, This Week, Older)
- **Dismiss:** Click ✕, click outside, or press Escape
- **Click notification:** Navigates to relevant screen, closes drawer
- **Mark read:** Individual (click) or bulk ("Mark all read")
- **Badge clears:** When drawer is opened, badge count resets after 2s viewing

---

## Desktop Shell — RTL Layout

Arabic or Hebrew UI language. Everything mirrors via CSS logical properties.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  [PD ▾]  3🔔  ↻ ●                    ...Search 🔍          حزب أخضر  🌿       │
├──────────────────────────────────────────────────────────────┬──────────────────┤
│                                                              │                  │
│                              نظرة عامة على الحملة            │    نظرة عامة     │
│  ───────────────────────────────────────────────────────     │  لوحة المعلومات ◉│
│                                                              │    النشاط        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │                  │
│  │ 71.4% :معدل │  │ 891 :اتصالات│  │ 1,247 :أبواب│          │  ▾ الأشخاص      │
│  │   ↑ 2.1%    │  │     ↑ 8%    │  │     ↑ 12%   │          │    جهات الاتصال  │
│  └─────────────┘  └─────────────┘  └─────────────┘          │    الشرائح       │
│                                                              │                  │
│              (content mirrors — charts, tables, etc.)        │  الميدان         │
│                                                              │    التجول        │
│                                                              │    بنك الهاتف    │
│                                                              │                  │
│                                                              │  المراسلة        │
│                                                              │    الرسائل       │
│                                                              │                  │
│                                                              │──────────────────│
│                                                              │       مساعدة ?   │
│                                                              │       العربية 🌐 │
│                                                              │       إعدادات ⚙  │
└──────────────────────────────────────────────────────────────┴──────────────────┘
```

### RTL Specifics

- Sidebar moves to the **right** side
- Detail panel moves to the **left** side
- Header bar items reverse order (avatar far left, logo far right)
- Search input: text entry is RTL, but search icons stay in place
- Chevrons point left for "expand/forward" (opposite of LTR)
- Breadcrumb direction reverses (right → left)
- Tab bar order reverses
- Numbers (currency, counts, dates) remain LTR within their containers
- All achieved with `dir="rtl"` on `<html>` + CSS logical properties — zero RTL-specific CSS

---

## Mobile Shell — Standard App

The mobile experience for all personas. Bottom tab bar with 4-5 role-adaptive tabs.

### Org Admin Mobile

```
┌──────────────────────────────┐
│  ≡  Dashboard         🔍  ●  │  ← Top bar
├──────────────────────────────┤
│                              │
│  ┌──────────────────────────┐│
│  │  Total Raised            ││
│  │  $47,320     ↑ 12%       ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  Doors Knocked           ││
│  │  1,247        ↑ 8%       ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  Active Volunteers       ││
│  │  34           ↑ 15%      ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  ⚠ Alerts (3)            ││
│  │  Compliance flag: José D.││
│  │  Sync issue: Turf 7      ││
│  │  Form builder draft exp. ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│ 📊      👥      💰     💬   ⋯│
│ Dash  Contacts Donate  Msgs More│
└──────────────────────────────┘
```

### Volunteer Mobile

```
┌──────────────────────────────┐
│  ≡  My Shifts         🔍  ●  │
├──────────────────────────────┤
│                              │
│  ┌──────────────────────────┐│
│  │  UPCOMING                ││
│  ├──────────────────────────┤│
│  │  📋 Northside Canvass    ││
│  │  Tomorrow, 2:00 PM       ││
│  │  47 doors assigned       ││
│  │                 [Details] ││
│  ├──────────────────────────┤│
│  │  📞 Phone Bank Wave 3    ││
│  │  Sat, March 8, 10:00 AM  ││
│  │  25 calls assigned       ││
│  │                 [Details] ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  RECENT                  ││
│  ├──────────────────────────┤│
│  │  ✓ Westside Canvass      ││
│  │  Yesterday · 32/40 doors ││
│  ├──────────────────────────┤│
│  │  ✓ Voter Reg Drive       ││
│  │  Feb 28 · 12 registered  ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  📋      📅      💬    [▶ GO]│
│ Shifts  Events  Msgs  Start  │
└──────────────────────────────┘
```

### Mobile Top Bar Anatomy

**Root level (top of navigation):**
```
┌──────────────────────────────┐
│  ≡  [Screen Title]    [Actions]│
└──────────────────────────────┘

≡ = Hamburger menu → opens slide-out with full nav sections
    (same content as desktop sidebar, presented as full-screen list)

[Actions] = Contextual. Examples:
  Search icon (🔍) — global search overlay
  Sync indicator (● / ◌) — tappable for sync detail
  Filter icon — opens filter bottom sheet
  Compose icon — new message, new record
  More icon (⋯) — additional actions bottom sheet
```

**Navigated deep (detail screens):**
```
┌──────────────────────────────┐
│  ←  Ana Martínez      [Edit] ⋯│
└──────────────────────────────┘

← = Back arrow. Returns to previous screen.
    In RTL: arrow points right (→)
```

### Bottom Tab Bar Anatomy

```
┌──────────────────────────────┐
│  [icon]  [icon]  [icon]  [icon] [icon]│
│  Label   Label   Label   Label  Label │
└──────────────────────────────┘

- 4-5 items max per role
- Active tab: primary color fill on icon, primary color label
- Inactive: muted color icon and label
- Badge: red dot with count (top-right of icon)
- "Start Shift" tab: visually distinct — filled/primary color background, contrasts with other tabs

Touch targets: 48px minimum height. Tab bar height: 56px + safe area inset bottom.
```

### Per-Persona Mobile Tabs

| Persona | Tab 1 | Tab 2 | Tab 3 | Tab 4 | Tab 5 |
|---------|-------|-------|-------|-------|-------|
| **Org Admin** | Dashboard | Contacts | Donations | Messages | More |
| **Comms Director** | Dashboard | Email | Social | Messages | More |
| **Finance Director** | Dashboard | Donations | Compliance | Messages | More |
| **Field Director** | Dashboard | Canvassing | Turfs | Messages | More |
| **Vol. Coordinator** | Dashboard | Roster | Shifts | Messages | More |
| **Data Manager** | Contacts | Import | Dedup | Messages | More |
| **Volunteer** | Shifts | Events | Messages | **Start Shift** | — |
| **Team Lead** | Shifts | Events | Messages | **Start Shift** | — |
| **Candidate** | Dashboard | Profile | Approvals | Messages | — |
| **Supporter** | Profile | Donations | Events | — | — |

### Mobile "More" Menu

Tapping "More" opens a bottom sheet with all remaining nav items:

```
                              ┌──────────────────────────────┐
                              │  ─── (drag handle)           │
                              │                              │
                              │  FIELD                       │
                              │  ◦ Canvassing                │
                              │  ◦ Phone Banking             │
                              │  ◦ Voter Registration        │
                              │  ◦ Turfs                     │
                              │                              │
                              │  COMMUNICATIONS              │
                              │  ◦ Email                     │
                              │  ◦ SMS/WhatsApp              │
                              │  ◦ Social Media              │
                              │                              │
                              │  EVENTS                      │
                              │  ◦ Events                    │
                              │  ◦ Check-in                  │
                              │                              │
                              │  ───────────────             │
                              │  ⚙ Settings                  │
                              │  ? Help                      │
                              │  🌐 Language                  │
                              └──────────────────────────────┘
```

### Mobile Hamburger Menu

Tapping ≡ at root level. Full-screen overlay with the same section structure as the desktop sidebar:

```
┌──────────────────────────────┐
│  ✕                    [PD]   │
│                              │
│  Pablo Defendini             │
│  Org Admin · Partido Verde   │
│                              │
│  ─────────────────────────── │
│                              │
│  OVERVIEW                    │
│  ◉ Dashboard                 │
│    Activity Feed             │
│                              │
│  PEOPLE                      │
│    Contacts                  │
│    Segments                  │
│                              │
│  FIELD                       │
│    Canvassing                │
│    Phone Banking             │
│    Voter Registration        │
│    Turfs                     │
│                              │
│  FUNDRAISING                 │
│    Donations                 │
│    Forms                     │
│    ...                       │
│                              │
│  ─────────────────────────── │
│  ⚙ Settings                  │
│  ? Help                      │
│  🌐 Language                  │
│  🚪 Log Out                  │
└──────────────────────────────┘
```

---

## Field Mode Shell — Mobile Only

Full-screen takeover. Replaces all normal navigation. This is the volunteer's world during a shift.

### Field Mode — Walk List View

```
┌──────────────────────────────┐
│  ● Synced 30s ago     ●REC  2:34│  ← Field header
├──────────────────────────────┤
│                              │
│  Northside Canvass           │
│  12 of 47 complete           │
│  ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░  │
│                              │
│  ┌──────────────────────────┐│
│  │  13. Ana Martínez        ││
│  │  742 Calle Sol, Apt 3    ││
│  │  ◦ Not yet visited       ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  14. Carlos Rivera       ││
│  │  744 Calle Sol           ││
│  │  ◦ Not yet visited       ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  15. Elena Torres        ││
│  │  748 Calle Sol, Apt 1    ││
│  │  ◦ Not yet visited       ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  16. José Delgado        ││
│  │  750 Calle Sol           ││
│  │  ◦ Not yet visited       ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  [📍 Map]         [End Shift]│
│                        [🔒]  │
└──────────────────────────────┘
```

### Field Mode — Door Card (Active Interaction)

```
┌──────────────────────────────┐
│  ● Synced 2m ago      ●REC  2:41│
├──────────────────────────────┤
│                              │
│  Ana Martínez                │
│  742 Calle Sol, Apt 3       │
│  Age: 34 · F · Registered ✓ │
│                              │
│  Previous: Canvassed Jan 12  │
│  Support: 3 (Lean Support)   │
│                              │
│  ─────────────────────────── │
│                              │
│  "Do you plan to support     │
│   Partido Verde in the       │
│   upcoming election?"        │
│                              │
│  ┌──────────────────────────┐│
│  │    1 — Strong Support     ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │    2 — Lean Support       ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │    3 — Undecided          ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │    4 — Lean Oppose        ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │    5 — Strong Oppose      ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │    ✕ — Not Home           ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  [◀ Prev]   13 of 47  [Next ▶]│
├──────────────────────────────┤
│  [End Shift]            [🔒] │
└──────────────────────────────┘
```

### Field Mode — After Response Selected

```
┌──────────────────────────────┐
│  ● Synced 2m ago      ●REC  2:43│
├──────────────────────────────┤
│                              │
│  Ana Martínez           ✓    │
│  742 Calle Sol, Apt 3       │
│                              │
│  Response: 2 — Lean Support  │
│                              │
│  ─────────────────────────── │
│                              │
│  "What issues are most       │
│   important to you?"         │
│                              │
│  ☑ Environment               │
│  ☐ Economy                   │
│  ☐ Education                 │
│  ☑ Healthcare                │
│  ☐ Housing                   │
│  ☐ Public Safety             │
│                              │
│  ─────────────────────────── │
│                              │
│  Notes (optional):           │
│  ┌──────────────────────────┐│
│  │ Has a yard sign from     ││
│  │ last election. Interested││
│  │ in volunteering.          ││
│  └──────────────────────────┘│
│                              │
│  [Save & Next →]             │
│                              │
├──────────────────────────────┤
│  [◀ Prev]   13 of 47  [Next ▶]│
├──────────────────────────────┤
│  [End Shift]            [🔒] │
└──────────────────────────────┘
```

### Field Mode — Map View

```
┌──────────────────────────────┐
│  ● Synced 30s ago     ●REC  2:50│
├──────────────────────────────┤
│                              │
│  ┌──────────────────────────┐│
│  │                          ││
│  │    🟢 ── 🟢              ││
│  │    |      |              ││
│  │    🟢    🔵 ←(you)       ││
│  │    |      |              ││
│  │    ⚪ ── ⚪              ││
│  │    |      |              ││
│  │    ⚪ ── ⚪              ││
│  │                          ││
│  │  🟢 = Visited            ││
│  │  🔵 = Current            ││
│  │  ⚪ = Remaining          ││
│  │                          ││
│  └──────────────────────────┘│
│                              │
│  Next: 14. Carlos Rivera     │
│  744 Calle Sol  ·  120m away │
│                              │
│  [← List View]   [Navigate]  │
│                              │
├──────────────────────────────┤
│  [End Shift]            [🔒] │
└──────────────────────────────┘
```

### Field Mode Header States

```
Connected:     │  ● Synced 30s ago       ●REC  2:34 │
Stale:         │  ● Synced 12 min ago    ●REC  2:34 │  (amber, larger)
Syncing:       │  ↻ Syncing...           ●REC  2:34 │  (full-width bar)
Offline:       │  ◌ Offline · 47 min     ●REC  2:34 │  (grey, elapsed time)
Sync error:    │  ⚠ Sync failed · Retry  ●REC  2:34 │  (red, full-width)
```

### Field Mode — End Shift Flow

```
Screen 1: Confirmation

┌──────────────────────────────┐
│  End Shift?                  │
├──────────────────────────────┤
│                              │
│  Northside Canvass           │
│  Duration: 2h 50m            │
│                              │
│  Completed: 32 of 47 doors   │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░  │
│                              │
│  Pending sync: 5 interactions│
│                              │
│  ⚠ 15 doors remaining.      │
│  They will be released back  │
│  to the assignment pool.     │
│                              │
│  ┌──────────────────────────┐│
│  │  End Shift & Sync        ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  Continue Canvassing     ││
│  └──────────────────────────┘│
│                              │
└──────────────────────────────┘

Screen 2: Debrief (after sync)

┌──────────────────────────────┐
│  Shift Complete  ✓           │
├──────────────────────────────┤
│                              │
│  Great work! Here's your     │
│  shift summary:              │
│                              │
│  Duration:    2h 50m         │
│  Doors:       32             │
│  Contacts:    24             │
│  Contact Rate: 75%           │
│  Strong Support: 8           │
│  Lean Support:  11           │
│  Undecided:     3            │
│  Not Home:      8            │
│                              │
│  How did it go? (optional)   │
│  ┌──────────────────────────┐│
│  │                          ││
│  │                          ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  Done                    ││
│  └──────────────────────────┘│
│                              │
└──────────────────────────────┘
```

### Panic Button Behavior

The lock button (🔒) is always visible in field mode:

- **Position:** Bottom-right corner, always accessible
- **Tap behavior:** Immediate lock. No confirmation dialog. No animation. App locks instantly and shows the device lock screen.
- **Re-entry:** Requires re-authentication. If duress passkey is used, app enters duress mode with sanitized data.
- **Size:** 44px minimum touch target, slightly larger in field mode (48px)

---

## Wizard Shell

Replaces the sidebar with step indicators. Used for onboarding wizards and multi-step setup flows.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 GreenGrass                                             [Save & Exit]       │
├─────────────────────────────────────────────────────────────────────────────────┤
│  ○ Organization  ●─── Payment  ○─── Branding  ○─── Team  ○─── Review          │
│     Info            Processor       Setup         Setup       & Launch          │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Connect Payment Processor                                                      │
│  ─────────────────────────                                                      │
│                                                                                 │
│  Choose how your organization will accept donations.                            │
│                                                                                 │
│  ┌────────────────────────────────────────┐                                     │
│  │  ☉ Stripe                              │                                     │
│  │  Credit cards, ACH. Available in PR.   │                                     │
│  │  [Connect Stripe Account →]            │                                     │
│  └────────────────────────────────────────┘                                     │
│                                                                                 │
│  ┌────────────────────────────────────────┐                                     │
│  │  ○ Local Processor                     │                                     │
│  │  Country-specific payment methods.     │                                     │
│  │  Configure after initial setup.        │                                     │
│  └────────────────────────────────────────┘                                     │
│                                                                                 │
│  ┌────────────────────────────────────────┐                                     │
│  │  ○ Skip for Now                        │                                     │
│  │  Set up payments later in Settings.    │                                     │
│  └────────────────────────────────────────┘                                     │
│                                                                                 │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  [← Back]                                                          [Next →]    │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Wizard Shell — Mobile

```
┌──────────────────────────────┐
│  🌿     Step 2 of 5  [Save] │
├──────────────────────────────┤
│  ●━━━━━●━━━━━○━━━━━○━━━━━○  │
├──────────────────────────────┤
│                              │
│  Connect Payment Processor   │
│  ────────────────────────    │
│                              │
│  Choose how your org will    │
│  accept donations.           │
│                              │
│  ┌──────────────────────────┐│
│  │  ☉ Stripe                ││
│  │  Credit cards, ACH.      ││
│  │  [Connect →]             ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  ○ Local Processor       ││
│  │  Country-specific.       ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  ○ Skip for Now          ││
│  └──────────────────────────┘│
│                              │
│                              │
├──────────────────────────────┤
│  [← Back]          [Next →]  │
└──────────────────────────────┘
```

---

## Supporter Portal Shell

Minimal navigation. Tenant-branded. Public-facing.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 Partido Verde de Puerto Rico                      [Mi Perfil]  [Cerrar]    │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  [Mi Perfil]    [Donaciones]    [Eventos]    [Preferencias]                     │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Historial de Donaciones                                                        │
│  ─────────────────────────                                                      │
│                                                                                 │
│  Total donado: $1,250                                                           │
│  Donaciones: 8  ·  Desde: Enero 2025                                           │
│                                                                                 │
│  ┌────────────────────────────────────────────────────────────────┐             │
│  │  Mar 1, 2026    $100.00    Mensual    Recibo ↓               │             │
│  │  Feb 1, 2026    $100.00    Mensual    Recibo ↓               │             │
│  │  Jan 15, 2026   $250.00    Única      Recibo ↓               │             │
│  │  Jan 1, 2026    $100.00    Mensual    Recibo ↓               │             │
│  │  ...                                                          │             │
│  └────────────────────────────────────────────────────────────────┘             │
│                                                                                 │
│  Donación Recurrente                                                            │
│  ┌────────────────────────────────────────────────────────────────┐             │
│  │  $100.00/mes  ·  Próxima: Apr 1, 2026  ·  Visa ****4242     │             │
│  │  [Actualizar monto]  [Actualizar tarjeta]  [Cancelar]        │             │
│  └────────────────────────────────────────────────────────────────┘             │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  Partido Verde de Puerto Rico · Privacidad · Términos                          │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Supporter Portal — Mobile

```
┌──────────────────────────────┐
│  🌿 Partido Verde    [👤] [✕]│
├──────────────────────────────┤
│                              │
│  [Perfil] [Donaciones] [Eventos]│
│                              │
├──────────────────────────────┤
│                              │
│  Historial de Donaciones     │
│  ─────────────────────       │
│                              │
│  Total: $1,250               │
│                              │
│  ┌──────────────────────────┐│
│  │  Mar 1     $100   Mensual││
│  │                   Recibo ↓││
│  ├──────────────────────────┤│
│  │  Feb 1     $100   Mensual││
│  │                   Recibo ↓││
│  ├──────────────────────────┤│
│  │  Jan 15    $250   Única  ││
│  │                   Recibo ↓││
│  └──────────────────────────┘│
│                              │
│  Recurrente: $100/mes        │
│  Próxima: Apr 1              │
│  [Administrar]               │
│                              │
├──────────────────────────────┤
│  Privacidad · Términos       │
└──────────────────────────────┘
```

---

## Interaction Specifications

### Sidebar Collapse Animation
- Duration: 200ms
- Easing: ease-out
- Items fade out, then sidebar width animates
- Reduced motion: instant, no animation

### Detail Panel Slide
- Duration: 200ms
- Easing: ease-out
- Direction: from right (from left in RTL)
- Main content area width animates to accommodate
- Reduced motion: instant appear/disappear

### Mobile Tab Switch
- Active state: instant (no crossfade between content)
- Tab indicator: primary color underline slides to active tab, 150ms
- Reduced motion: instant highlight, no slide

### Bottom Sheet (Mobile)
- Enters: slide up from bottom, 250ms ease-out
- Exits: slide down, 200ms ease-in
- Backdrop: 50% black overlay, fades in 150ms
- Drag-to-dismiss: if dragged >40% of height, dismisses; otherwise snaps back
- Reduced motion: instant appear/disappear

### Notification Drawer
- Enters: slide from right, 200ms ease-out (from left in RTL)
- Exits: slide to right, 200ms ease-in
- Backdrop: 30% black overlay on main content
- Reduced motion: instant appear/disappear

---

## Responsive Breakpoint Transitions

| From | To | What Changes |
|------|-----|-------------|
| < 640px | 640px | No change (still mobile shell) |
| 767px → 768px | Mobile → Tablet | Bottom tabs → collapsed sidebar overlay. Top bar gains breadcrumbs. |
| 1023px → 1024px | Tablet → Desktop | Sidebar overlay → persistent sidebar. Split views available. |
| 1279px → 1280px | Small desktop → Desktop | Sidebar defaults to expanded (was collapsed). |

---

## Accessibility Notes

- **Focus management:** When sidebar collapses/expands, focus stays on the toggle button. When detail panel opens, focus moves to the panel heading. When detail panel closes, focus returns to the trigger element.
- **Skip navigation:** Hidden "Skip to content" link as first focusable element on the page.
- **Sidebar sections:** `role="navigation"` with `aria-label="Main navigation"`. Sections use `aria-expanded` on collapse/expand.
- **Notifications:** `aria-live="polite"` region for new notification count. Drawer uses `role="dialog"` with `aria-label="Notifications"`.
- **Field mode panic button:** `aria-label="Lock app"`. No tooltip delay — immediate action on any activation.
- **Bottom tabs:** `role="tablist"` with `role="tab"` per item. `aria-selected` on active tab.
- **High contrast mode:** All borders 2px, focus rings 3px with 2px offset, link underlines always visible.

---

## Open Questions

1. **Sidebar pinned sections.** Should users be able to pin specific sidebar sections open (so they don't collapse when another section expands)? Useful for users who work across multiple feature areas in a single session.

2. **Detail panel resize persistence.** Should the detail panel width be persisted per user, or reset to default each session? Persisting avoids repeated adjustment; resetting ensures consistent layout.

3. **Mobile hamburger vs. bottom sheet.** The hamburger menu opens a full-screen overlay. Should the "More" tab on mobile instead open a half-sheet (bottom sheet) for quicker access to secondary items? Full-screen feels heavier but is consistent.
