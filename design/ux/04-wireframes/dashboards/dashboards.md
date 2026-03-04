# Dashboard Wireframes

## Purpose

Every persona has a dashboard as their home screen. Dashboards are read-heavy, action-light — they answer "how is everything going?" and surface items needing attention. This document wireframes the key dashboard variants.

## Scope

| ID | Screen | Personas | Offline | Mobile | Section |
|----|--------|----------|---------|--------|---------|
| DASH-001 | Campaign Overview Dashboard | OA, C | No | Yes | Campaign Overview |
| DASH-002 | Field Operations Dashboard | OA, FiD | No | Yes | Field Operations |
| DASH-003 | Fundraising Dashboard | OA, FD | No | Yes | Fundraising |
| DASH-004 | Communications Dashboard | OA, CD | No | Yes | Communications |
| DASH-005 | Volunteer Dashboard | OA, VC | No | Yes | Volunteer |
| DASH-006 | Data Quality Dashboard | OA, DM | No | Desktop | Data Quality |
| DASH-007 | Compliance Dashboard | OA, FD | No | Desktop | Compliance |
| DASH-008 | GOTV War Room Dashboard | OA, FiD | No | Yes | GOTV War Room |
| DASH-009 | Team Lead Dashboard | TL | No | Primary | Team Lead |
| DASH-010 | Candidate Dashboard | C | No | Yes | Candidate |
| DASH-011 | Alliance Dashboard | OA | No | Yes | Cross-ref → alliance.md |

All dashboards are online-only. Dashboards require server data to render — when offline, the dashboard shows the last-cached version with a "Last updated: [timestamp]" indicator and a "Data may be outdated" banner.

## Dashboard Navigation Context

Each persona's dashboard is their home screen — the first screen after login. The sidebar shows "Dashboard" as the first item in the "OVERVIEW" section for every persona. Each persona sees only their own dashboard:

- **Org Admin** → DASH-001 (Campaign Overview)
- **Field Director** → DASH-002 (Field Operations)
- **Finance Director** → DASH-003 (Fundraising)
- **Communications Director** → DASH-004 (Communications)
- **Volunteer Coordinator** → DASH-005 (Volunteer)
- **Data Manager** → DASH-006 (Data Quality)
- **Team Lead** → DASH-009 (Team Lead)
- **Candidate** → DASH-010 (Candidate)

The GOTV War Room Dashboard (DASH-008) replaces the Field Director's dashboard during GOTV activation and is also accessible to the Org Admin.

---

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

## DASH-004: Communications Dashboard (Communications Director)

All outreach channels in one view. Email, SMS/WhatsApp, social media, and press coverage.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Communications                                    Last updated: 3 min ago  ↻│
│  ───────────────────────────────────────────── Date range: [Last 30 days ▾] │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  📧 Emails    │  │  💬 SMS/WA    │  │  📱 Social    │  │  📰 Coverage │    │
│  │  12,450 sent  │  │  3,200 sent   │  │  42 posts     │  │  7 mentions  │    │
│  │  42% open     │  │  94% delivrd  │  │  18.4K reach  │  │  5 positive  │    │
│  │  8.3% click   │  │  12% response │  │  ↑ 22%       │  │  2 neutral   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Email Performance (30 days)    │  │  Audience Growth                 │   │
│  │  ───────────────────────        │  │  ──────────────                  │   │
│  │                                 │  │                                   │   │
│  │  50%┤     __                    │  │  14K┤              ___/          │   │
│  │  40%┤ ___/  \___     ___       │  │  12K┤         ____/              │   │
│  │  30%┤/          \___/   \      │  │  10K┤    ____/                   │   │
│  │  20%┤                    \_    │  │   8K┤___/                        │   │
│  │  10%┤                          │  │   6K┤                             │   │
│  │      W1  W2  W3  W4            │  │      W1  W2  W3  W4              │   │
│  │                                 │  │                                   │   │
│  │  ── Open rate  ── Click rate    │  │  ── Email  ── SMS  ── Social    │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Recent Sends                   │  │  Social Media by Platform        │   │
│  │  ────────────                   │  │  ─────────────────────           │   │
│  │                                 │  │                                   │   │
│  │  📧 "Rally Invite"      2h ago │  │  Facebook   ▓▓▓▓▓▓▓▓▓▓  8.2K   │   │
│  │     12,450 sent · 42% open     │  │  Instagram  ▓▓▓▓▓▓▓▓    6.1K   │   │
│  │     8.3% click                  │  │  Twitter/X  ▓▓▓▓▓       3.4K   │   │
│  │                                 │  │  TikTok     ▓▓          0.7K   │   │
│  │  💬 "Event Reminder"    1d ago │  │                                   │   │
│  │     1,800 sent · 94% delivered  │  │  Total reach: 18.4K             │   │
│  │     12% response                │  │  ↑ 22% vs previous 30 days     │   │
│  │                                 │  │                                   │   │
│  │  📧 "Donor Thank You"   3d ago │  │                                   │   │
│  │     342 sent · 68% open         │  │                                   │   │
│  │     15.2% click                 │  │                                   │   │
│  │                                 │  │                                   │   │
│  │  [View all sends →]            │  │  [View social analytics →]       │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Scheduled Sends (3)            │  │  Channel Effectiveness           │   │
│  │  ─────────────────              │  │  ─────────────────────           │   │
│  │                                 │  │                                   │   │
│  │  Mar 5, 2:00 PM                │  │  Metric        Email  SMS   Social│   │
│  │  📧 "Rally Final Reminder"     │  │  ─────────────────────────────── │   │
│  │     Audience: 12,450            │  │  Reach         12.4K  3.2K  18.4K│   │
│  │     [Edit] [Pause]             │  │  Engagement     8.3%  12%   4.2% │   │
│  │                                 │  │  Conversions    312    48    27  │   │
│  │  Mar 8, 10:00 AM               │  │  Cost/contact  $0.02  $0.04  $0 │   │
│  │  💬 "Phone Bank Signup"        │  │                                   │   │
│  │     Audience: 847 volunteers    │  │  Best channel for donations:     │   │
│  │     [Edit] [Pause]             │  │  📧 Email (78% of online gifts)  │   │
│  │                                 │  │                                   │   │
│  │  Mar 10, 6:00 PM               │  │  Best channel for volunteer      │   │
│  │  📧 "Weekly Update"            │  │  signup: 💬 SMS (62% of signups) │   │
│  │     Audience: 14,200            │  │                                   │   │
│  │     [Edit] [Pause]             │  │                                   │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile

```
┌──────────────────────────────┐
│  ≡  Communications    🔍  ↻  │
├──────────────────────────────┤
│  Last 30 days ▾              │
│                              │
│  ┌──────────────────────────┐│
│  │  📧 Emails Sent          ││
│  │  12,450      42% open    ││
│  │              8.3% click  ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  💬 SMS/WhatsApp         ││
│  │  3,200 sent  94% delivrd ││
│  │              12% response││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  📱 Social Reach         ││
│  │  18.4K       ↑ 22%      ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  Scheduled (3)           ││
│  │  📧 Rally Reminder  Mar 5││
│  │  💬 Phone Bank     Mar 8 ││
│  │  📧 Weekly Update  Mar 10││
│  │  [View all →]            ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │  Recent Sends            ││
│  │  📧 Rally Invite   42%  ││
│  │  💬 Event Remind   94%  ││
│  │  📧 Donor Thanks   68%  ││
│  │  [View all →]            ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│ 📊      📧      📱     💬   ⋯│
│ Dash   Email  Social  Msgs More│
└──────────────────────────────┘
```

### Mobile Differences
- Charts omitted — replaced by headline metrics per channel
- Scheduled sends show compact list (name + date)
- Channel effectiveness table omitted — accessible via "Social Analytics"
- Press coverage metric card omitted — accessible from More > Press
- Pull-to-refresh triggers data reload

### Communications Dashboard — Design Notes
- **Four-channel view:** Email, SMS/WhatsApp, Social, and Press coverage all in one place — the Comms Director shouldn't need to switch views to understand their outreach posture
- **Scheduled sends are actionable:** Edit and Pause buttons directly on the dashboard — urgent changes shouldn't require navigating to the campaign detail
- **Channel effectiveness table** answers the strategic question: "where should I invest my next hour of work?"
- **Press coverage is lightweight here** — just a count and sentiment. Detailed coverage analysis lives in the Press section
- **Audience growth chart** tracks list health over time — a declining line is an early warning

---

## DASH-006: Data Quality Dashboard (Data Manager)

The Data Manager's command center. Data health, import quality, dedup queue, and record hygiene.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Data Quality                                      Last updated: 1 min ago  ↻│
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  📋 Records   │  │  ⚠ Quality   │  │  🔄 Dedup     │  │  📥 Imports  │    │
│  │  24,830       │  │  Score: 87%   │  │  Queue: 42    │  │  3 this week │    │
│  │  total        │  │  ↑ from 82%   │  │  pending      │  │  1 in prog.  │    │
│  │  +342 this wk │  │  review       │  │  ~120 merged  │  │  12,400 rows │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Records by Type                                                      │   │
│  │  ──────────────                                                       │   │
│  │                                                                       │   │
│  │  Type          Total     Complete    Incomplete   Stale (>90d)        │   │
│  │  ─────────────────────────────────────────────────────────────────    │   │
│  │  Voters        18,450    16,200 88%   1,450 8%      800 4%           │   │
│  │  Donors         3,240     3,100 96%      84 3%       56 2%           │   │
│  │  Volunteers       847       812 96%      22 3%       13 2%           │   │
│  │  Supporters     2,293     1,980 86%     213 9%      100 4%           │   │
│  │  ─────────────────────────────────────────────────────────────────    │   │
│  │  All           24,830    22,092 89%   1,769 7%      969 4%           │   │
│  │                                                                       │   │
│  │  [View incomplete records →]  [View stale records →]                  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Data Quality Flags (38)        │  │  Dedup Queue                     │   │
│  │  ─────────────────              │  │  ──────────                      │   │
│  │                                 │  │                                   │   │
│  │  By category:                   │  │  42 potential duplicates          │   │
│  │  Missing email     14  [Fix →]  │  │  awaiting review                 │   │
│  │  Missing phone     11  [Fix →]  │  │                                   │   │
│  │  Invalid address    8  [Fix →]  │  │  Confidence:                     │   │
│  │  Missing name       3  [Fix →]  │  │  High (>90%)    12  [Review →]  │   │
│  │  Bad phone format   2  [Fix →]  │  │  Medium (70-90%) 18  [Review →]  │   │
│  │                                 │  │  Low (<70%)      12  [Review →]  │   │
│  │  Trend: ↓ 15% fewer flags      │  │                                   │   │
│  │  vs. last month                 │  │  Auto-merged this month: 78      │   │
│  │                                 │  │  Manual merges this month: 42    │   │
│  │                                 │  │                                   │   │
│  │  [View all flags →]            │  │  [Open dedup queue →]            │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Recent Imports                 │  │  Recent Exports                  │   │
│  │  ──────────────                 │  │  ──────────────                  │   │
│  │                                 │  │                                   │   │
│  │  ● In Progress                  │  │  Mar 1 · 10:42 AM               │   │
│  │  Voter file — Western district  │  │  Donor export (CSV)              │   │
│  │  12,400 rows · Mapping step     │  │  3,240 records · by Ana R.      │   │
│  │  Started by: Carlos M. · 15m ago│  │                                   │   │
│  │  [View progress →]             │  │  Feb 28 · 4:15 PM               │   │
│  │                                 │  │  Volunteer roster (CSV)          │   │
│  │  ✓ Completed                    │  │  847 records · by Carlos M.     │   │
│  │  Phone bank list — Call Wave 3  │  │                                   │   │
│  │  500 rows · 12 dupes merged     │  │  Feb 25 · 9:00 AM               │   │
│  │  Quality score: 94%             │  │  Segment: "Likely Supporters"   │   │
│  │  Completed: Yesterday           │  │  4,200 records · by Elena T.    │   │
│  │                                 │  │                                   │   │
│  │  ✓ Completed                    │  │                                   │   │
│  │  Event attendees — Town Hall    │  │                                   │   │
│  │  67 rows · 3 dupes merged       │  │                                   │   │
│  │  Quality score: 98%             │  │                                   │   │
│  │  Completed: 3 days ago          │  │                                   │   │
│  │                                 │  │                                   │   │
│  │  [View import history →]       │  │  [View export history →]         │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Data Quality Dashboard — Design Notes
- **Desktop only** (per screen inventory) — data operations are desktop work
- **Quality score** (87%) is a composite: weighted average of completeness (required fields filled), freshness (records updated within 90 days), and validity (well-formed emails, phones, addresses). The Data Manager can click through to see the breakdown.
- **Records by Type table** is the most information-dense widget — answers "where are my data problems?" at a glance. Percentages are colored: green (>90%), amber (70-90%), red (<70%).
- **Data quality flags** are categorized and actionable — each "Fix" link opens a filtered list of affected records
- **Dedup queue** groups by confidence level — high-confidence dupes can be bulk-merged with less review friction
- **Import in progress** is shown prominently — the Data Manager needs to know when a colleague started a large import
- **No charts** — this dashboard is table-heavy by design. The Data Manager cares about specific numbers and lists, not trends. The one trend indicator ("15% fewer flags vs last month") is inline text, not a chart.

---

## DASH-007: Compliance Dashboard (Finance Director / Org Admin)

Compliance health across campaign finance, data protection, and reporting obligations. Surfaces problems early so they can be fixed before they become violations.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Compliance                                        Last updated: 5 min ago  ↻│
│  ───────────────────────────────────────────────────────────────────────────  │
│  Jurisdiction: Puerto Rico (CEE) · Race: Municipal                           │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  ⚠ Alerts     │  │  📋 Consent   │  │  📅 Deadlines │  │  📨 Requests │    │
│  │  3 active     │  │  Health: 91%  │  │  Next: 12d   │  │  2 pending   │    │
│  │  1 critical   │  │  ↓ from 94%   │  │  Q1 filing   │  │  SLA: OK     │    │
│  │  2 warnings   │  │  47 expiring  │  │              │  │              │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Contribution Alerts                                                  │   │
│  │  ──────────────────                                                   │   │
│  │                                                                       │   │
│  │  🔴 CRITICAL                                                         │   │
│  │  José Delgado — $5,200 total contributions                            │   │
│  │  Exceeds $5,000 individual limit (PR municipal race)                  │   │
│  │  Last donation: $200 on Feb 28 · pushed over limit                    │   │
│  │  [Review & Resolve →]                                                 │   │
│  │                                                                       │   │
│  │  🟡 WARNING                                                           │   │
│  │  María Santos — $4,750 total contributions                            │   │
│  │  95% of $5,000 limit · will trigger with any donation >$250           │   │
│  │  [View donor profile →]                                               │   │
│  │                                                                       │   │
│  │  🟡 WARNING                                                           │   │
│  │  Kim Park — Foreign address flagged                                   │   │
│  │  Donated $100 on Feb 25 · needs residency verification                │   │
│  │  [Review & Verify →]                                                  │   │
│  │                                                                       │   │
│  │  No alerts resolved in the last 7 days.                               │   │
│  │  [View resolved alerts →]                                             │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Consent Health                 │  │  Reporting Deadlines             │   │
│  │  ──────────────                 │  │  ───────────────                 │   │
│  │                                 │  │                                   │   │
│  │  By channel:                    │  │  ┌──────────────────────────┐    │   │
│  │  Email      ▓▓▓▓▓▓▓▓▓░  94%   │  │  │  🟡 Mar 15               │    │   │
│  │  SMS        ▓▓▓▓▓▓▓▓░░  87%   │  │  │  Quarterly filing (CEE)  │    │   │
│  │  WhatsApp   ▓▓▓▓▓▓▓▓▓░  91%   │  │  │  Status: Data 78% ready │    │   │
│  │  Push       ▓▓▓▓▓▓▓▓▓▓  96%   │  │  │  [Prepare report →]     │    │   │
│  │                                 │  │  └──────────────────────────┘    │   │
│  │  Overall: 91% valid consent     │  │                                   │   │
│  │                                 │  │  ┌──────────────────────────┐    │   │
│  │  ⚠ 47 consents expiring in     │  │  │  ○ Mar 31                │    │   │
│  │    the next 30 days             │  │  │  Q1 close (books)       │    │   │
│  │    [Send renewal requests →]    │  │  │  Status: On track       │    │   │
│  │                                 │  │  └──────────────────────────┘    │   │
│  │  Unsubscribes (30d): 23        │  │                                   │   │
│  │  Bounced (30d): 8              │  │  ┌──────────────────────────┐    │   │
│  │                                 │  │  │  ○ Apr 15                │    │   │
│  │                                 │  │  │  Annual compliance rpt   │    │   │
│  │                                 │  │  │  Status: Not started     │    │   │
│  │                                 │  │  └──────────────────────────┘    │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Data Subject Requests          │  │  Automated Checks (Last Run)     │   │
│  │  ──────────────────             │  │  ─────────────────────           │   │
│  │                                 │  │                                   │   │
│  │  2 pending requests             │  │  Last run: Today, 6:00 AM        │   │
│  │                                 │  │                                   │   │
│  │  📨 Access Request              │  │  ✓ Contribution limits    0 new  │   │
│  │     From: Pedro Colón           │  │  ✓ Foreign donor screen   0 new  │   │
│  │     Received: Feb 27            │  │  ✓ Consent validation     3 new  │   │
│  │     SLA: 12 days remaining      │  │  ✓ Disclaimer check      0 new  │   │
│  │     [Process →]                 │  │  ✓ Data completeness      5 new  │   │
│  │                                 │  │  ✓ Retention policy       0 new  │   │
│  │  📨 Deletion Request            │  │                                   │   │
│  │     From: Ana Figueroa          │  │  Next scheduled run:             │   │
│  │     Received: Mar 1             │  │  Tomorrow, 6:00 AM               │   │
│  │     SLA: 27 days remaining      │  │                                   │   │
│  │     [Process →]                 │  │  [View check details →]          │   │
│  │                                 │  │  [Run checks now →]              │   │
│  │  Resolved (last 30d): 5        │  │                                   │   │
│  │  Avg resolution: 8 days        │  │                                   │   │
│  │                                 │  │                                   │   │
│  │  [View all requests →]         │  │                                   │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Audit Trail (Recent)                                                 │   │
│  │  ────────────────────                                                 │   │
│  │                                                                       │   │
│  │  Mar 3, 9:15 AM   Elena T. exported donor data (3,240 records)       │   │
│  │  Mar 2, 4:30 PM   System: Auto-flagged José Delgado over limit      │   │
│  │  Mar 1, 11:00 AM  Ana F. submitted data deletion request             │   │
│  │  Feb 28, 7:00 PM  System: Consent renewal batch sent (47 contacts)  │   │
│  │  Feb 28, 2:15 PM  Carlos M. resolved foreign address flag (Kim Park)│   │
│  │                                                                       │   │
│  │  [View full audit trail →]  [Export audit log →]                     │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Compliance Dashboard — Design Notes
- **Desktop only** (per screen inventory) — compliance review is desktop work. Mobile access via the Finance Director's mobile tabs (Dashboard, Donations, Compliance, Messages, More) shows only the metric cards and alerts, not the full dashboard.
- **Jurisdiction context line** under the title — the compliance rules are jurisdiction-specific, so the user always knows which rules are being applied
- **Contribution alerts are the highest-priority widget** — displayed full-width, ordered by severity (critical first). An over-limit donation is a potential legal violation and demands immediate attention.
- **Consent health** tracks per-channel opt-in validity. The "Send renewal requests" action lets the Comms Director (via delegation) send re-consent emails to contacts whose consent is expiring.
- **Reporting deadlines** use a timeline format with preparation status — "78% ready" tells the user they have work to do before the filing date, not just that the date is approaching.
- **Data subject requests** show SLA timers prominently — GDPR and similar regulations have hard deadlines for responding to access/deletion requests.
- **Automated checks** show the last batch run results — the compliance engine runs overnight and surfaces new issues. "Run checks now" allows on-demand re-evaluation.
- **Audit trail** is a compliance necessity — every data access, export, and configuration change is logged. The dashboard shows recent entries with a link to the full searchable trail.

---

## DASH-011: Alliance Dashboard

The Alliance Dashboard is documented in the Alliance wireframes: **[alliance/alliance.md](../alliance/alliance.md)** as ALLY-001.

---

## Accessibility Notes

- Dashboard metric cards use `aria-label` with full descriptions (e.g., "Contacts reached: 1,847 this week, up 12%")
- Charts include text summaries for screen readers (e.g., "Trend: increasing over 4 weeks from 30% to 42%")
- War Room dark mode maintains WCAG AA contrast ratios
- Auto-refresh announces updates via `aria-live="polite"` region — not disruptive to screen reader flow
- All "View →" drill-down links have descriptive labels (not just "View")
- Color-coded status indicators (🟢🟡🔴) always include text labels
- Skeleton loading states use `aria-busy="true"` on the widget container

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| One dashboard per persona | Each persona gets a dedicated home screen | Prevents information overload; focuses on role-relevant metrics |
| Metric cards first, charts second | KPI summary always visible without scrolling | At-a-glance answer to "how are things going?" |
| Every metric clickable | Drill-down to underlying data list | Dashboards surface signals; details live in feature screens |
| War Room dark mode | Dark background, high-contrast data | Reduce eye strain during long election day sessions |
| War Room 30s auto-refresh | Only the War Room auto-refreshes | Election day needs real-time; normal dashboards don't |
| Candidate dashboard curated | Simplified view with high-impact metrics only | Candidates aren't operators — headlines, not data |
| Data Quality dashboard table-heavy | No charts, all tables | Data Manager cares about specific numbers, not trends |
| Compliance alerts severity-ordered | Critical first, then warnings | Potential legal violations demand immediate attention |
| Alliance dashboard as cross-ref | Documented in alliance.md, not duplicated here | Single source of truth for alliance screens |

## Open Questions

1. **Dashboard customization.** Should staff be able to rearrange dashboard widgets or pin/hide specific ones? Adds flexibility but increases complexity. Consider for v2.

2. **War Room large-screen mode.** For projection on large screens in a physical war room, should there be a dedicated "TV mode" that optimizes for large displays at viewing distance (larger text, fewer widgets, darker theme)?

3. **Goal setting.** Where are fundraising and field goals configured? Currently shown on dashboards but the setting UX isn't defined. Likely in the relevant feature settings (Fundraising > Goals, Field > Campaign Goals).

4. **Data Quality score formula.** The composite quality score (87%) needs a defined formula. Proposed: 40% completeness (required fields), 30% freshness (updated within 90 days), 30% validity (well-formed contact fields). Should this be configurable per tenant?

5. **Compliance dashboard for multi-jurisdiction tenants.** Some alliances operate across jurisdictions. Should the compliance dashboard support a jurisdiction selector, or should it show a combined view with per-jurisdiction sections?
