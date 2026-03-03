# Dashboard Wireframes

## Purpose

Every persona has a dashboard as their home screen. Dashboards are read-heavy, action-light — they answer "how is everything going?" and surface items needing attention. This document wireframes the key dashboard variants.

## Dashboard Layout Principles

- **Widget grid:** 3-4 columns on desktop, 2 on tablet, 1 on mobile
- **Metric cards first:** Top row is always KPI summary cards (the at-a-glance numbers)
- **Charts second:** Trend data below the metrics
- **Alerts/action items third:** Things needing human attention
- **Activity feed last:** Recent events (least urgent, most contextual)
- **Date range filter:** Top-right, defaults vary per dashboard (7 days for field, 30 days for fundraising)
- **Drill-down:** Every metric and chart is clickable — navigates to the underlying data list
- **Auto-refresh:** War Room refreshes every 30s. All others manual refresh with "Last updated" timestamp.

---

## DASH-001: Campaign Overview Dashboard (Org Admin)

The Org Admin's home. The single view of everything.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Campaign Overview                              Last updated: 2 min ago  ↻  │
│  ───────────────────────────────────────────── Date range: [Last 30 days ▾] │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  💰 Raised    │  │  🚪 Doors     │  │  👥 Volunteers│  │  📧 Emails   │    │
│  │  $47,320      │  │  1,247        │  │  34 active    │  │  12,450 sent │    │
│  │  ↑ 12% vs prev│  │  ↑ 8%        │  │  ↑ 15%       │  │  42% open    │    │
│  │  Goal: $100K  │  │  Goal: 5,000  │  │  Goal: 50    │  │  ↑ 3.2%     │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Fundraising Trend (30 days)    │  │  Field Progress                  │   │
│  │  ────────────────────────       │  │  ────────────────────────        │   │
│  │                                 │  │                                   │   │
│  │  $3K ┤         /\  /\          │  │  Northside    ▓▓▓▓▓▓▓░░░  71%   │   │
│  │  $2K ┤    /\  /  \/  \        │  │  Westside     ▓▓▓▓░░░░░░  42%   │   │
│  │  $1K ┤   /  \/        \___    │  │  Eastside     ▓▓░░░░░░░░  22%   │   │
│  │   $0 ┤──/                      │  │  Phone Bank 3 ▓▓▓▓▓▓░░░░  58%   │   │
│  │       W1 W2 W3 W4              │  │  Voter Reg    ▓▓▓▓▓▓▓▓░░  83%   │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  ⚠ Needs Attention (4)          │  │  Recent Activity                 │   │
│  │  ────────────────────────       │  │  ────────────────────────        │   │
│  │                                 │  │                                   │   │
│  │  🔴 Compliance: José Delgado   │  │  2 min ago                       │   │
│  │     contribution over limit     │  │  Ana M. donated $100             │   │
│  │     [Review →]                  │  │                                   │   │
│  │                                 │  │  15 min ago                      │   │
│  │  🟡 Sync: Turf 7 hasn't       │  │  Carlos R. completed 8 doors     │   │
│  │     synced in 2 hours           │  │                                   │   │
│  │     [Investigate →]             │  │  1 hour ago                      │   │
│  │                                 │  │  Email "Rally Invite" sent       │   │
│  │  🟡 Form builder: draft        │  │  (12,450 recipients)             │   │
│  │     expires in 3 days           │  │                                   │   │
│  │     [Edit →]                    │  │  2 hours ago                     │   │
│  │                                 │  │  3 new volunteers signed up      │   │
│  │  🔵 Training: 8 volunteers     │  │                                   │   │
│  │     have incomplete modules     │  │  [View all activity →]           │   │
│  │     [View →]                    │  │                                   │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Upcoming Events                                                      │   │
│  │  ────────────────────────                                             │   │
│  │  Mar 5   Rally at Plaza    142 RSVPs / 200 cap    [Manage →]         │   │
│  │  Mar 8   Phone Bank Wave   18/25 slots filled     [Manage →]         │   │
│  │  Mar 12  Town Hall         67 RSVPs               [Manage →]         │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile

```
┌──────────────────────────────┐
│  ≡  Dashboard        🔍  ↻  │
├──────────────────────────────┤
│  Last 30 days ▾              │
│                              │
│  ┌──────────────────────────┐│
│  │  💰 Raised               ││
│  │  $47,320     ↑ 12%       ││
│  │  ▓▓▓▓▓▓▓░░░  47% of goal││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  🚪 Doors Knocked        ││
│  │  1,247       ↑ 8%        ││
│  │  ▓▓▓░░░░░░░  25% of goal││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  👥 Active Volunteers    ││
│  │  34          ↑ 15%       ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  ⚠ Needs Attention (4)   ││
│  │  🔴 Compliance flag      ││
│  │  🟡 Sync issue           ││
│  │  🟡 Draft expiring       ││
│  │  [View all →]            ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  Recent Activity          ││
│  │  Ana M. donated $100     ││
│  │  Carlos R. 8 doors       ││
│  │  [View all →]            ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│ 📊      👥      💰     💬   ⋯│
│ Dash  Contacts Donate  Msgs More│
└──────────────────────────────┘
```

### Mobile Differences
- Metric cards stack vertically (single column)
- Charts omitted on mobile — replaced by progress bars and simplified numbers
- Alerts show top 3 with "View all" link
- Activity feed shows last 3 items
- Pull-to-refresh triggers data reload
- No date range selector on mobile (defaults to 30 days; accessible via filter icon)

---

## DASH-002: Field Operations Dashboard (Field Director)

Focused on the ground game. Where are we, what's working, who's in the field.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Field Operations                               Last updated: 1 min ago  ↻  │
│  ───────────────────────────────────────────── Date range: [Last 7 days  ▾] │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  🚪 Doors     │  │  📞 Calls     │  │  📋 Contact % │  │  👥 In Field  │    │
│  │  1,247/5,000  │  │  312/500      │  │  71.4%        │  │  12 active   │    │
│  │  ↑ 8% vs prev │  │  ↑ 22%       │  │  ↑ 2.1%      │  │  3 shifts    │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Campaign Progress                                                    │   │
│  │  ──────────────                                                       │   │
│  │  Northside Canvass     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░  71%    142/200 doors  │   │
│  │    Teams: A (34/50) B (28/50) C (42/50) D (38/50)                    │   │
│  │                                                                       │   │
│  │  Westside Follow-up    ▓▓▓▓▓▓▓▓░░░░░░░░░░░░  42%     87/200 doors  │   │
│  │    Teams: E (45/100) F (42/100)                                       │   │
│  │                                                                       │   │
│  │  Phone Bank Wave 3     ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░  58%    312/500 calls  │   │
│  │    Sessions: 3 active, 2 scheduled                                    │   │
│  │                                                                       │   │
│  │  Voter Reg Drive       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░  83%     45/54 voters  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Support Score Distribution     │  │  Active Shifts                   │   │
│  │  ─────────────────────          │  │  ────────────────                │   │
│  │                                 │  │                                   │   │
│  │  Strong Support  ▓▓▓▓▓▓  24%   │  │  ● Carlos R.  Northside  2:15   │   │
│  │  Lean Support    ▓▓▓▓▓▓▓ 31%   │  │  ● María S.   Northside  1:42   │   │
│  │  Undecided       ▓▓▓▓    18%   │  │  ● Pedro C.   Westside   0:58   │   │
│  │  Lean Oppose     ▓▓      9%    │  │  ● Elena T.   Phone Bank 1:30   │   │
│  │  Strong Oppose   ▓       5%    │  │  ...                             │   │
│  │  Not Home        ▓▓▓    13%    │  │                                   │   │
│  │                                 │  │  [View all shifts →]             │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Performance by Volunteer       │  │  Turf Map                        │   │
│  │  ───────────────────────        │  │  ────────────                    │   │
│  │                                 │  │                                   │   │
│  │  Name         Doors  Rate  Avg  │  │  ┌───────────────────────┐       │   │
│  │  Carlos R.    42     78%   4.2m │  │  │                       │       │   │
│  │  María S.     38     82%   3.8m │  │  │  [Map showing turfs   │       │   │
│  │  Pedro C.     31     68%   5.1m │  │  │   with color coding   │       │   │
│  │  Elena T.     28     74%   4.5m │  │  │   by completion %]    │       │   │
│  │  ...                            │  │  │                       │       │   │
│  │                                 │  │  └───────────────────────┘       │   │
│  │  [View full report →]           │  │  🟢 >70%  🟡 30-70%  🔴 <30%   │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## DASH-003: Fundraising Dashboard (Finance Director)

All about the money. Revenue, trends, compliance, recurring health.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Fundraising                                    Last updated: 5 min ago  ↻  │
│  ───────────────────────────────────────────── Date range: [Last 30 days ▾] │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  💰 Total     │  │  👤 Donors    │  │  🔄 Recurring │  │  📊 Average  │    │
│  │  $47,320      │  │  342          │  │  $8,400/mo    │  │  $138.36    │    │
│  │  ↑ 12%       │  │  89 new       │  │  112 active   │  │  ↑ 7%      │    │
│  │  Goal: $100K  │  │  253 returning│  │  94% healthy  │  │            │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌──────────────────────────────────────────┐                                │
│  │  Goal Progress                            │                                │
│  │  ────────────                             │                                │
│  │  ▓▓▓▓▓▓▓▓▓░░░░░░░░░░░  $47,320 / $100,000  (47%)                       │
│  │  At current pace, goal reached by: ~May 15                                │
│  └──────────────────────────────────────────┘                                │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Revenue Trend                  │  │  Donation Sources                │   │
│  │  ────────────────               │  │  ─────────────────              │   │
│  │                                 │  │                                   │   │
│  │  $5K ┤            /\           │  │  Online Forms   ▓▓▓▓▓▓▓▓  62%   │   │
│  │  $4K ┤         __/  \         │  │  Email Appeals  ▓▓▓▓      22%   │   │
│  │  $3K ┤    /\  /      \        │  │  Events         ▓▓         11%   │   │
│  │  $2K ┤   /  \/        \_      │  │  Direct/Other   ▓           5%   │   │
│  │  $1K ┤──/                      │  │                                   │   │
│  │       W1 W2 W3 W4              │  │                                   │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  ⚠ Compliance Alerts (2)        │  │  Recent Donations                │   │
│  │  ───────────────────             │  │  ─────────────────              │   │
│  │                                 │  │                                   │   │
│  │  🔴 José Delgado               │  │  $100   Ana Martínez    2m ago   │   │
│  │     $5,200 total — exceeds      │  │  $50    Pedro Colón   15m ago   │   │
│  │     $5,000 individual limit     │  │  $250   María Santos   1h ago   │   │
│  │     [Review donation →]         │  │  $75    Carlos Rivera  2h ago   │   │
│  │                                 │  │  $500   Elena Torres   3h ago   │   │
│  │  🟡 Foreign address flag        │  │                                   │   │
│  │     Kim Park — needs residency  │  │  [View all donations →]          │   │
│  │     verification                │  │                                   │   │
│  │     [Review →]                  │  │                                   │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Recurring Health               │  │  Upcoming Deadlines              │   │
│  │  ──────────────                 │  │  ───────────────                 │   │
│  │                                 │  │                                   │   │
│  │  Active:    112  (94%)          │  │  Mar 15  Quarterly FEC filing    │   │
│  │  Failing:     5  (4%)           │  │  Mar 31  Q1 close               │   │
│  │  Cancelled:   3  (2%)           │  │  Apr 15  Annual compliance rpt  │   │
│  │                                 │  │                                   │   │
│  │  MRR:     $8,400               │  │                                   │   │
│  │  Churn:   2.7% (improving)      │  │                                   │   │
│  │                                 │  │                                   │   │
│  │  [View recurring details →]     │  │                                   │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## DASH-008: GOTV War Room Dashboard

The election day command center. Auto-refreshes every 30s. Dark mode default. Full-width (no sidebar on desktop — it collapses to icon-only to maximize screen space).

### Desktop (Dark Mode)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ████████████████  ELECTION DAY ACTIVE  ████████████████  Polls close: 4h 23m│
├──────────────────────────────────────────────────────────────────────────────┤
│  GOTV War Room                                    Auto-refresh: 30s  ↻  ●   │
│  ─────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  🗳 TURNOUT   │  │  🚪 KNOCKED  │  │  🚗 RIDES    │  │  ⚠ ISSUES    │    │
│  │  4,231        │  │  2,847/5,000 │  │  12 pending  │  │  3 open      │    │
│  │  of 12,450    │  │  57%         │  │  47 complete │  │  2 escalated │    │
│  │  34.0%        │  │  ↑ since 2pm │  │  ETA: 15 min │  │              │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Turnout by Precinct                                                  │   │
│  │  ──────────────────                                                   │   │
│  │  Precinct 1 (San Juan)   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░  41%  🟢 On track   │   │
│  │  Precinct 2 (Bayamón)    ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░  32%  🟡 Behind     │   │
│  │  Precinct 3 (Carolina)   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░  44%  🟢 On track   │   │
│  │  Precinct 4 (Ponce)      ▓▓▓▓▓▓░░░░░░░░░░░░░░  22%  🔴 Critical   │   │
│  │  Precinct 5 (Caguas)     ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░  37%  🟡 Behind     │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Live Feed                      │  │  Resource Status                 │   │
│  │  ────────────                   │  │  ─────────────                   │   │
│  │                                 │  │                                   │   │
│  │  ● 2:34 PM                      │  │  Volunteers                      │   │
│  │  Precinct 4 below target.       │  │  In field: 28 of 42             │   │
│  │  Suggest reallocation.          │  │  At staging: 8                   │   │
│  │  [Approve reallocation →]       │  │  Unaccounted: 6                 │   │
│  │                                 │  │                                   │   │
│  │  ● 2:31 PM                      │  │  Rides                          │   │
│  │  Rosa Figueroa confirmed        │  │  Drivers active: 5              │   │
│  │  voted (Precinct 1).            │  │  Requests pending: 12           │   │
│  │                                 │  │  Avg wait: 15 min               │   │
│  │  ● 2:28 PM                      │  │                                   │   │
│  │  ⚠ Poll watcher issue:          │  │  Poll Watchers                  │   │
│  │  Machine 3 at Precinct 2        │  │  Deployed: 8 of 10             │   │
│  │  showing error.                 │  │  Issues reported: 3             │   │
│  │  [View issue →]                 │  │  [Manage watchers →]            │   │
│  │                                 │  │                                   │   │
│  │  ● 2:25 PM                      │  │  Communications                 │   │
│  │  Wave 2 GOTV SMS sent           │  │  Wave 1: ✓ Sent (8:00 AM)      │   │
│  │  (3,400 recipients)             │  │  Wave 2: ✓ Sent (2:00 PM)      │   │
│  │                                 │  │  Wave 3: ○ Scheduled (5:00 PM) │   │
│  │  ...                            │  │  [Manage waves →]               │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Reallocation Suggestions                                             │   │
│  │  ─────────────────────                                                │   │
│  │                                                                       │   │
│  │  🟡 Move 4 volunteers from Precinct 3 (ahead) → Precinct 4 (behind)  │   │
│  │     Impact: +estimated 120 contacts in Precinct 4                     │   │
│  │     [Approve]  [Modify]  [Dismiss]                                    │   │
│  │                                                                       │   │
│  │  🟡 Reassign 2 drivers to Precinct 2 area (12 pending ride requests) │   │
│  │     [Approve]  [Modify]  [Dismiss]                                    │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

### War Room — Key Differences from Other Dashboards

- **Election Day banner:** Persistent at top, shows countdown to polls close
- **Auto-refresh:** Every 30s with visual refresh indicator
- **Dark mode default:** Easier on eyes during long monitoring sessions
- **Sidebar collapsed:** Icon-only to maximize screen real estate
- **Live feed:** Scrolling event stream (newest at top), auto-scrolls (pausable)
- **Reallocation suggestions:** AI-generated, require human approval
- **Color urgency:** 🟢 on track, 🟡 behind target, 🔴 critical (below 60% of target pace)

---

## DASH-010: Candidate Dashboard

Curated, simplified. High-level metrics without operational detail. The Candidate shouldn't feel overwhelmed.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Your Campaign                                                               │
│  ─────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                                                                       │   │
│  │  Fundraising                                                          │   │
│  │  ▓▓▓▓▓▓▓▓▓░░░░░░░░░░░  $47,320 of $100,000                         │   │
│  │                                         47% — on pace for goal       │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                       │
│  │  👥 Volunteers│  │  🚪 Voters    │  │  📅 Events   │                       │
│  │  34 active    │  │  64% contacted│  │  3 upcoming  │                       │
│  │  847 total    │  │  of target    │  │  next: Mar 5 │                       │
│  └──────────────┘  └──────────────┘  └──────────────┘                       │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  📋 Pending Approvals (3)       │  │  💬 Recent Messages              │   │
│  │  ────────────────────           │  │  ─────────────────              │   │
│  │                                 │  │                                   │   │
│  │  📰 Press Release               │  │  📌 Leadership Team              │   │
│  │  "Park Restoration Plan"        │  │  María: Updated talking points   │   │
│  │  From: Comms Dir · 2h ago       │  │  for tomorrow's rally            │   │
│  │  [Review →]                     │  │  30 min ago                      │   │
│  │                                 │  │                                   │   │
│  │  📱 Social Media Post           │  │  📌 Campaign Manager             │   │
│  │  Instagram campaign photo       │  │  Schedule change for Thursday    │   │
│  │  From: Comms Dir · 4h ago       │  │  2 hours ago                     │   │
│  │  [Review →]                     │  │                                   │   │
│  │                                 │  │  Elena Torres                    │   │
│  │  📧 Email Draft                  │  │  Great turnout yesterday!        │   │
│  │  "Thank you to our donors"      │  │  5 hours ago                     │   │
│  │  From: Comms Dir · Yesterday    │  │                                   │   │
│  │  [Review →]                     │  │  [Open messages →]               │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Upcoming Schedule                                                    │   │
│  │  ────────────────                                                     │   │
│  │  Mar 5, 6:00 PM   Rally at Plaza del Mercado    142 RSVPs            │   │
│  │  Mar 7, 10:00 AM  Press Conference (Park Plan)                       │   │
│  │  Mar 8, 2:00 PM   Town Hall at Centro Comunal   67 RSVPs            │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Candidate Dashboard — Design Notes

- **No drill-down** on fundraising (Candidate sees the thermometer, not individual donations)
- **No operational detail** on field (percentage contacted, not turf-by-turf breakdown)
- **Approvals prominent** — this is a primary action for the Candidate
- **Messages prominent** — pinned conversations from key staff at the top
- **Upcoming schedule** — the Candidate's personal calendar of campaign events
- **No date range filter** — the dashboard shows current state, not historical analysis
- **Tone:** Encouraging, not overwhelming. "On pace for goal" rather than raw numbers.

---

## DASH-005: Volunteer Dashboard (Volunteer Coordinator)

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Volunteer Operations                           Last updated: 3 min ago  ↻  │
│  ───────────────────────────────────────────── Date range: [This week   ▾] │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  👥 Active    │  │  ⏰ Hours     │  │  📋 Shifts    │  │  🆕 New       │    │
│  │  34           │  │  187 this wk  │  │  78% filled   │  │  8 signups   │    │
│  │  of 847 total │  │  ↑ 22%       │  │  ↓ from 85%   │  │  5 pending   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Shift Coverage (Next 7 Days)   │  │  ⚠ Needs Attention (6)          │   │
│  │  ────────────────────────       │  │  ────────────────────           │   │
│  │                                 │  │                                   │   │
│  │  Mon  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  100%  │  │  🟡 5 pending volunteer reviews │   │
│  │  Tue  ▓▓▓▓▓▓▓▓▓▓▓░░░░░   68%  │  │     [Review signups →]          │   │
│  │  Wed  ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░   82%  │  │                                   │   │
│  │  Thu  ▓▓▓▓▓▓░░░░░░░░░░   38%  │  │  🟡 Thu shifts need 8 more vols │   │
│  │  Fri  ▓▓▓▓▓▓▓▓▓▓▓▓░░░░   75%  │  │     [Manage shifts →]           │   │
│  │  Sat  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  100%  │  │                                   │   │
│  │  Sun  ▓▓▓▓▓▓▓▓▓▓░░░░░░   56%  │  │  🔵 3 vols haven't completed    │   │
│  │                                 │  │     required training             │   │
│  │  ⚠ Thu and Sun under 60%       │  │     [View training status →]     │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Training Completion            │  │  Upcoming Events                 │   │
│  │  ────────────────               │  │  ──────────────                  │   │
│  │                                 │  │                                   │   │
│  │  Canvassing 101  ▓▓▓▓▓▓▓░  87% │  │  Mar 5  Rally       142 RSVPs  │   │
│  │  Phone Banking   ▓▓▓▓▓▓░░  72% │  │         12 vol slots filled     │   │
│  │  Safety Protocol ▓▓▓▓▓▓▓▓  95% │  │                                   │   │
│  │  Data Privacy    ▓▓▓▓░░░░  52% │  │  Mar 8  Phone Bank   18/25 vol  │   │
│  │                                 │  │  Mar 12 Town Hall    8 vol slots│   │
│  │  [View all modules →]          │  │                                   │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## DASH-009: Team Lead Dashboard

The Team Lead's view — focused on their specific team, not the whole operation.

### Mobile (Primary Device)

```
┌──────────────────────────────┐
│  ≡  My Team          🔍  ●   │
├──────────────────────────────┤
│                              │
│  Team Alpha · Northside      │
│  ─────────────────────       │
│                              │
│  ┌──────────────────────────┐│
│  │  Today's Progress        ││
│  │  34/50 doors  ▓▓▓▓▓▓▓░░ ││
│  │  68% · 16 remaining      ││
│  └──────────────────────────┘│
│                              │
│  Team Members                │
│  ┌──────────────────────────┐│
│  │  ● Carlos R.   In field  ││
│  │    18 doors · 2h 15m     ││
│  ├──────────────────────────┤│
│  │  ● María S.    In field  ││
│  │    12 doors · 1h 42m     ││
│  ├──────────────────────────┤│
│  │  ◌ Pedro C.    Not started││
│  │    Shift starts 3:00 PM  ││
│  ├──────────────────────────┤│
│  │  ✓ Elena T.    Complete  ││
│  │    4 doors · ended 1:30  ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  ⚠ Pedro hasn't checked ││
│  │  in. Shift starts in 30m.││
│  │  [Send reminder]         ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  📋      📅      💬    [▶ GO]│
│ Shifts  Events  Msgs  Start  │
└──────────────────────────────┘
```

---

## Dashboard Empty States

When a dashboard has no data (fresh tenant, new feature area):

### Campaign Overview — Empty

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Campaign Overview                                                           │
│  ─────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│                                                                              │
│                         📊                                                   │
│                                                                              │
│                  Welcome to GreenGrass                                        │
│                                                                              │
│         Your campaign dashboard will show fundraising,                       │
│         field operations, communications, and volunteer                      │
│         metrics once you start setting things up.                            │
│                                                                              │
│         ┌────────────────────────────────────┐                               │
│         │  Get started:                       │                               │
│         │                                     │                               │
│         │  1. Set up a donation form          │                               │
│         │  2. Create a canvassing campaign    │                               │
│         │  3. Import your contacts            │                               │
│         │  4. Invite your team                │                               │
│         └────────────────────────────────────┘                               │
│                                                                              │
│         [Set Up Donation Form →]                                             │
│                                                                              │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Empty State Principles

- **Persona-specific:** Each persona's empty state guides them toward their first relevant action
- **Numbered steps:** Give a sense of progression ("do this first, then this")
- **Single primary CTA:** One prominent action button for the most important first step
- **No dummy data:** Empty means empty — no sample metrics, no fake charts
- **Contextual help link:** "Need help getting started?" links to the persona-specific onboarding guide

---

## Dashboard Loading States

### Skeleton Loading (First Load)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Campaign Overview                                                           │
│  ─────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  ░░░░░░░░░░░ │  │  ░░░░░░░░░░░ │  │  ░░░░░░░░░░░ │  │  ░░░░░░░░░░░ │    │
│  │  ░░░░░░░     │  │  ░░░░░░░     │  │  ░░░░░░░     │  │  ░░░░░░░     │    │
│  │  ░░░░░░░░░   │  │  ░░░░░░░░░   │  │  ░░░░░░░░░   │  │  ░░░░░░░░░   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  ░░░░░░░░░░░                    │  │  ░░░░░░░░░░░░░░░░░             │   │
│  │                                 │  │  ░░░░░░░░░░░░░░               │   │
│  │  ░░░░░░░░░░░░░░░░░░░░░        │  │  ░░░░░░░░░░░░░░░░░             │   │
│  │  ░░░░░░░░░░░░░░░░░░░          │  │  ░░░░░░░░░░░                   │   │
│  │  ░░░░░░░░░░░░░░░░░            │  │  ░░░░░░░░░░░░░░                │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘

Skeleton blocks pulse subtly (reduced motion: static grey blocks).
Layout matches real widget positions so there's no layout shift on load.
```

### Partial Load (Some Widgets Ready)

```
Widgets render independently as data arrives.
First to render: metric cards (smallest data payload).
Last to render: charts and maps (largest data payload).
Each widget shows its own skeleton until its data arrives.
```

---

## Open Questions

1. **Dashboard customization.** Should staff be able to rearrange dashboard widgets or pin/hide specific ones? Adds flexibility but increases complexity. Consider for v2.

2. **War Room large-screen mode.** For projection on large screens in a physical war room, should there be a dedicated "TV mode" that optimizes for large displays at viewing distance (larger text, fewer widgets, darker theme)?

3. **Goal setting.** Where are fundraising and field goals configured? Currently shown on dashboards but the setting UX isn't defined. Likely in the relevant feature settings (Fundraising > Goals, Field > Campaign Goals).
