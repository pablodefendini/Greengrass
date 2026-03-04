# Social Media Wireframes

## Purpose

Social media is the campaign's public voice — publishing content across platforms, scheduling posts, and tracking engagement. These wireframes cover the admin screens used by the Communications Director and Org Admin to compose, schedule, publish, and analyze social media posts.

The core UX challenge: each platform has different constraints (character limits, media formats, content styles) but the Communications Director thinks in terms of "what do I want to say today?" not "which platform adapter do I configure?" The composer must handle cross-platform publishing while making platform-specific adjustments easy, not mandatory.

Scope boundary: the platform handles post scheduling, publishing, and analytics. Comment management, DM handling, and in-platform engagement are out of scope for v1 — users link out to native platform tools for those.

## Scope

| ID | Screen | Personas | Offline | Mobile | Section |
|----|--------|----------|---------|--------|---------|
| SOCIAL-001 | Social Media Dashboard | OA, CD | No | Yes | Dashboard |
| SOCIAL-002 | Post Composer (Multi-platform) | OA, CD | No | Desktop | Composer |
| SOCIAL-003 | Post Calendar / Schedule | OA, CD | No | Desktop | Calendar |
| SOCIAL-004 | Post Analytics | OA, CD | No | Desktop | Analytics |
| SOCIAL-005 | Social Account Connection | OA | No | Desktop | Settings |
| SOCIAL-006 | Platform-Specific Preview | OA, CD | No | Desktop | Composer |

## Social Media Navigation Context

```
SOCIAL MEDIA (within Communications Director sidebar)
  Dashboard           → SOCIAL-001
  Post Composer       → SOCIAL-002
  Calendar            → SOCIAL-003
  Analytics           → SOCIAL-004
  Account Connections → SOCIAL-005
```

---

## SOCIAL-001: Social Media Dashboard

At-a-glance overview of recent and upcoming social activity. Answers "what did we post, what's scheduled, how's it performing?"

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Social Media                                         [+ New Post]          │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Connected Accounts                                                          │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────────────┐      │
│  │ 𝕏      │  │ 📘 FB  │  │ 📸 IG  │  │ 🎵 TT  │  │ [+ Connect ▾]  │      │
│  │ 12.4K  │  │ 8.7K   │  │ 15.2K  │  │ 3.1K   │  │                │      │
│  │ follow  │  │ follow │  │ follow │  │ follow │  │                │      │
│  └────────┘  └────────┘  └────────┘  └────────┘  └────────────────┘      │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  This Week's Performance                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ Posts        │  │ Impressions  │  │ Engagements  │  │ Link Clicks  │   │
│  │ 14           │  │ 42.3K        │  │ 2,840        │  │ 312          │   │
│  │ ↑ 3 vs last │  │ ↑ 12%        │  │ ↑ 8%         │  │ ↓ 5%         │   │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Upcoming Scheduled                                                          │
│  ──────────────────                                                          │
│                                                                              │
│  Today                                                                       │
│  · 2:00 PM  "Join us this Saturday for..."  [📘 📸]     [Edit]             │
│  · 5:30 PM  "Meet our candidate: María..."  [𝕏 📘 📸]  [Edit]             │
│                                                                              │
│  Tomorrow                                                                    │
│  · 9:00 AM  "Volunteer spotlight: Carlos..." [📸]        [Edit]             │
│  · 12:00 PM "New policy brief on water..."   [𝕏 📘]     [Edit]             │
│                                                                              │
│  [View Full Calendar →]                                                      │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Recent Posts                                                                │
│  ────────────                                                                │
│                                                                              │
│  ┌─────────┐  Yesterday, 3:15 PM  [𝕏 📘 📸]                               │
│  │  [img]  │  "Our spring campaign has raised over $30K!                    │
│  │         │   Thank you to all our donors..."                              │
│  └─────────┘  ♡ 342  ↻ 89  💬 24  👁 8.2K                                  │
│                                                                              │
│  ┌─────────┐  Yesterday, 10:00 AM  [📸]                                    │
│  │  [img]  │  "Behind the scenes at our office — getting ready              │
│  │         │   for the spring drive kickoff 🌿"                             │
│  └─────────┘  ♡ 512  💬 31  👁 12.1K                                        │
│                                                                              │
│  ┌─────────┐  Mar 1, 4:00 PM  [𝕏 📘]                                      │
│  │  [img]  │  "Policy update: Our clean water initiative..."                │
│  │         │                                                                │
│  └─────────┘  ♡ 187  ↻ 45  💬 12  👁 5.4K                                  │
│                                                                              │
│  [View All Posts →]                                                          │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile

```
┌────────────────────────────┐
│  Social Media         [+]  │
├────────────────────────────┤
│                            │
│  [𝕏 12.4K] [📘 8.7K]      │
│  [📸 15.2K] [🎵 3.1K]     │
│                            │
│  This Week                 │
│  14 posts · 42.3K impr     │
│  2,840 eng · 312 clicks    │
│                            │
│  ─────────────────────     │
│                            │
│  Upcoming                  │
│  2:00 PM  "Join us..."    │
│  [📘 📸]                   │
│  5:30 PM  "Meet our..."   │
│  [𝕏 📘 📸]                 │
│                            │
│  ─────────────────────     │
│                            │
│  Recent                    │
│  ┌──────────────────────┐  │
│  │ [img] "Our spring    │  │
│  │ campaign has raised   │  │
│  │ over $30K!..."        │  │
│  │ ♡ 342 ↻ 89 💬 24     │  │
│  └──────────────────────┘  │
│                            │
└────────────────────────────┘
```

### Interaction

- **Connected accounts**: each platform chip shows follower count. Click → opens SOCIAL-005
- **"+ Connect"**: opens SOCIAL-005 Account Connection
- **Scheduled post "Edit"**: opens SOCIAL-002 for that post
- **Recent post click**: opens SOCIAL-004 detail for that post
- **Platform badges** ([𝕏] [📘] [📸] [🎵]): indicate which platforms a post was published to
- **Metrics**: engagement numbers are aggregated across all platforms for that post

### States

- **No accounts**: "Connect your social media accounts to start publishing and tracking posts." [Connect Account]
- **No posts**: accounts connected but no posts yet. "You're connected! Create your first post." [Create Post]

---

## SOCIAL-002: Post Composer (Multi-platform)

Create a post for one or more social platforms. Uses the Composer pattern with multi-platform adaptation.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Social Media    New Post                           [Save Draft] [Post ▾] │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PLATFORMS                                                                   │
│  ─────────                                                                   │
│                                                                              │
│  Select platforms:                                                           │
│  ☑ 𝕏 Twitter/X      ☑ 📘 Facebook     ☑ 📸 Instagram     ☐ 🎵 TikTok     │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  CONTENT                                                                     │
│  ───────                                                                     │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ Our spring campaign has raised over $30,000! 🌿                      │   │
│  │                                                                      │   │
│  │ Thank you to the 412 donors who believe in a greener, more           │   │
│  │ equitable Puerto Rico.                                               │   │
│  │                                                                      │   │
│  │ There's still time to contribute:                                    │   │
│  │ partidoverde.org/donate                                              │   │
│  │                                                                      │   │
│  │ #PartidoVerde #PuertoRico #GreenCampaign                            │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  𝕏: 218 / 280 characters                                                   │
│  ⚠ Instagram: Caption will be used. Link in bio recommended (no clickable  │
│    links in captions).                                                       │
│                                                                              │
│  Media                                                                       │
│  ┌────────────────┐  ┌────────────────┐  ┌──────────────┐                  │
│  │                │  │                │  │              │                  │
│  │  [campaign     │  │    + Add       │  │              │                  │
│  │   photo.jpg]   │  │    Media       │  │              │                  │
│  │  1200×628      │  │                │  │              │                  │
│  │  ✓ All platforms│ │                │  │              │                  │
│  │  [✗ Remove]    │  │                │  │              │                  │
│  └────────────────┘  └────────────────┘  └──────────────┘                  │
│  📸 Instagram: image will be cropped to 1:1 (1080×1080)                     │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  ▸ PLATFORM OVERRIDES                                                        │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  COMPLIANCE                                                                  │
│  ──────────                                                                  │
│  ☑ Add "Paid for by Partido Verde" disclaimer                                │
│  ⓘ Required by election law for political advertising.                       │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  SCHEDULE                                                                    │
│  ────────                                                                    │
│                                                                              │
│  ● Post now                                                                  │
│  ○ Schedule for   ┌────────────────┐  ┌────────────┐                       │
│                    │ Mar 5, 2026    │  │ 2:00 PM ▾  │                       │
│                    └────────────────┘  └────────────┘                       │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  PREVIEW                                               [See All Previews →] │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  [𝕏]  [📘]  [📸]                                                      │ │
│  │                                                                        │ │
│  │  ┌────────────────────────────────────────────────────────┐           │ │
│  │  │  🌿 Partido Verde PR  @partidoverde · now              │           │ │
│  │  │                                                        │           │ │
│  │  │  Our spring campaign has raised over $30,000! 🌿        │           │ │
│  │  │                                                        │           │ │
│  │  │  Thank you to the 412 donors who believe in a greener, │           │ │
│  │  │  more equitable Puerto Rico.                           │           │ │
│  │  │                                                        │           │ │
│  │  │  There's still time to contribute:                     │           │ │
│  │  │  partidoverde.org/donate                               │           │ │
│  │  │                                                        │           │ │
│  │  │  ┌──────────────────────────────────────────────┐     │           │ │
│  │  │  │  [campaign photo]                             │     │           │ │
│  │  │  └──────────────────────────────────────────────┘     │           │ │
│  │  │                                                        │           │ │
│  │  │  #PartidoVerde #PuertoRico #GreenCampaign             │           │ │
│  │  │                                                        │           │ │
│  │  │  Paid for by Partido Verde de Puerto Rico              │           │ │
│  │  │                                                        │           │ │
│  │  │  ♡  ↻  💬  📤                                         │           │ │
│  │  └────────────────────────────────────────────────────────┘           │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Platform Overrides (expanded)

```
│  PLATFORM OVERRIDES                                                          │
│  ──────────────────                                                          │
│                                                                              │
│  Override content per platform when the same message doesn't fit:            │
│                                                                              │
│  𝕏 Twitter/X                                        [Use shared content]    │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ Our spring campaign just crossed $30K! 🌿 Thank you to 412 donors   │   │
│  │ who believe in a greener PR. Contribute: partidoverde.org/donate    │   │
│  │ #PartidoVerde                                                       │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  178 / 280 characters  ✓                                                    │
│                                                                              │
│  📸 Instagram                                        [Use shared content]   │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ (Using shared content — no override)                                │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  No character limit · Link in bio recommended                                │
```

### Interaction

- **Platform checkboxes**: enable/disable platforms for this post. Only connected platforms are available. Disconnected platforms show as disabled with "Connect" link
- **Character counter**: shows per-platform count. 𝕏 (280), Facebook (no practical limit), Instagram (2,200), TikTok (2,200). Color changes at threshold
- **Platform warnings**: contextual tips (Instagram: no clickable links; TikTok: vertical video preferred)
- **Platform overrides**: expand to write per-platform content when shared content doesn't fit. "Use shared content" resets to the main text
- **Media**: upload images/video. Shows per-platform compatibility notes (crop ratios, file size limits)
- **Compliance checkbox**: auto-checked if tenant settings require political advertising disclaimers. Can't be unchecked if required
- **Preview tabs**: switch between platform-specific previews (SOCIAL-006 inline). Shows how the post will look on each platform
- **"See All Previews →"**: opens SOCIAL-006 full-screen with all platform previews side by side
- **Post dropdown**: "Post Now" (confirmation), "Schedule" (date/time picker), "Save Draft"
- **Approval routing**: if approval is required (configurable per org), Post button changes to "Submit for Approval" and routes to approval queue

### States

- **No platforms selected**: Post button disabled. "Select at least one platform to publish."

---

## SOCIAL-003: Post Calendar / Schedule

Calendar view of scheduled, published, and draft posts. The planning tool for social media.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Post Calendar                          [+ New Post]  [◀ Mar 2026 ▶]  [⚙]  │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  [Month]  [Week]  [List]                                                    │
│                                                                              │
│  ┌─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐   │
│  │  Mon    │  Tue    │  Wed    │  Thu    │  Fri    │  Sat    │  Sun    │   │
│  ├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤   │
│  │ 2       │ 3       │ 4       │ 5       │ 6       │ 7       │ 8       │   │
│  │         │ ✓ 2:00  │         │ ◷ 9:00  │ ◷ 2:00  │         │         │   │
│  │         │ [📘📸]  │         │ [📸]    │ [𝕏📘📸] │         │         │   │
│  │         │ ✓ 5:30  │         │ ◷ 12:00 │         │         │         │   │
│  │         │ [𝕏📘📸] │         │ [𝕏📘]   │         │         │         │   │
│  ├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤   │
│  │ 9       │ 10      │ 11      │ 12      │ 13      │ 14      │ 15      │   │
│  │ ✎ draft │ ◷ 10:00 │         │ ◷ 3:00  │         │         │ ◷ 11:00 │   │
│  │ [𝕏]     │ [📘📸]  │         │ [𝕏📘]   │         │         │ [📸🎵]  │   │
│  │         │         │         │         │         │         │         │   │
│  ├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤   │
│  │ 16      │ 17      │ ...     │         │         │         │         │   │
│  │         │         │         │         │         │         │         │   │
│  └─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘   │
│                                                                              │
│  Legend:  ✓ Published  ◷ Scheduled  ✎ Draft  ⏸ Paused                       │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Day Detail: Mar 3                                                           │
│  ──────────────────                                                          │
│                                                                              │
│  2:00 PM  ✓ Published  [📘 📸]                                              │
│  "Join us this Saturday for our community cleanup at Parque..."              │
│  ♡ 187  💬 12  👁 3.2K                                                      │
│                                                                              │
│  5:30 PM  ✓ Published  [𝕏 📘 📸]                                            │
│  "Meet our candidate María Torres — this Saturday she'll share..."          │
│  ♡ 342  ↻ 89  💬 24  👁 8.2K                                                │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Week View

```
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │       Mon 3     Tue 4     Wed 5     Thu 6     Fri 7     Sat     Sun  │ │
│  │ 9am   │         │         │ [📸]    │         │         │       │    │ │
│  │ 10am  │         │         │ Volunt. │         │         │       │    │ │
│  │ 11am  │         │         │ spotl.  │         │         │       │    │ │
│  │ 12pm  │         │         │         │ [𝕏📘]   │         │       │    │ │
│  │ 1pm   │         │         │         │ Policy  │         │       │    │ │
│  │ 2pm   │ [📘📸]  │         │         │ brief   │ [𝕏📘📸] │       │    │ │
│  │       │ Join us │         │         │         │ Spring  │       │    │ │
│  │ 3pm   │         │         │         │         │ Drive   │       │    │ │
│  │ 4pm   │         │         │         │         │         │       │    │ │
│  │ 5pm   │ [𝕏📘📸] │         │         │         │         │       │    │ │
│  │ 5:30  │ Meet    │         │         │         │         │       │    │ │
│  │ 6pm   │ our...  │         │         │         │         │       │    │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
```

### Interaction

- **Month / Week / List toggle**: three views. Month shows compact post indicators, Week shows time slots, List shows a flat chronological list
- **Day click** (month view): shows day detail panel below the calendar
- **Post click**: opens SOCIAL-002 for editing (scheduled/draft) or SOCIAL-004 detail (published)
- **Drag-and-drop** (week view): drag scheduled posts to reschedule. Confirmation toast: "Rescheduled to Mar 6, 2:00 PM"
- **"+ New Post"**: opens SOCIAL-002. If clicked on a specific day, pre-fills the schedule date
- **Settings gear** (⚙): calendar preferences (week start day, default time slots)

### States

- **Empty**: "Your content calendar is empty. Schedule your first post to start planning your social media strategy." [Create Post]

---

## SOCIAL-004: Post Analytics

Detailed analytics for individual posts and aggregate performance.

### Desktop — Post Detail

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Analytics    Post: Mar 3, 5:30 PM                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  "Meet our candidate María Torres — this Saturday she'll share her          │
│   vision for a greener Puerto Rico..."                                       │
│                                                                              │
│  Published: Mar 3, 5:30 PM · Platforms: [𝕏] [📘] [📸]                      │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Aggregate Performance                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ Impressions  │  │ Engagements  │  │ Eng. Rate    │  │ Link Clicks  │   │
│  │ 8,200        │  │ 455          │  │ 5.5%         │  │ 89           │   │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                                              │
│  Per-Platform Breakdown                                                      │
│  ──────────────────────                                                      │
│                                                                              │
│  Platform    Impressions  Likes  Shares/RT  Comments  Clicks  Eng Rate      │
│  ─────────────────────────────────────────────────────────────────────────   │
│  𝕏           3,200        142    89         24        45      8.0%          │
│  📘 Facebook  2,800        128    34         18        32      6.5%          │
│  📸 Instagram 2,200        312    —          12        12      14.7%         │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Performance Over Time (48 hours)                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  300 ┤                                                               │   │
│  │      │  ╱╲                                                           │   │
│  │  200 ┤ ╱  ╲        ╱╲                                               │   │
│  │      │╱    ╲      ╱  ╲     ╱╲                                       │   │
│  │  100 ┤      ╲    ╱    ╲   ╱  ╲                                      │   │
│  │      │       ╲  ╱      ╲ ╱    ╲──────                               │   │
│  │    0 ┼────────╲╱────────╳──────────────                              │   │
│  │       5:30   9pm   6am   12pm  6pm   6am                            │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  ── Impressions  ── Engagements                                              │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Actions:  [Open on 𝕏 →]  [Open on 📘 →]  [Open on 📸 →]                  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Desktop — Aggregate Analytics (accessed from sidebar "Analytics")

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Social Media Analytics                         [Date Range ▾]  [Export ▾]  │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Period: Last 30 Days                                                        │
│                                                                              │
│  Overview                                                                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ Total Posts  │  │ Impressions  │  │ Engagements  │  │ Followers    │   │
│  │ 42           │  │ 142K         │  │ 8,400        │  │ +320 net     │   │
│  │ ↑ 8 vs prior │  │ ↑ 18%       │  │ ↑ 12%        │  │ 39.4K total  │   │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                                              │
│  Platform Comparison                                                         │
│  ───────────────────                                                         │
│                                                                              │
│  Platform    Posts  Impressions  Engagements  Eng Rate   Followers          │
│  ─────────────────────────────────────────────────────────────────────────   │
│  𝕏           38     52K          3,200        6.2%       12,400 (+80)       │
│  📘 Facebook  35     48K          2,800        5.8%       8,700 (+120)       │
│  📸 Instagram 28     32K          1,800        5.6%       15,200 (+95)       │
│  🎵 TikTok   8      10K          600          6.0%       3,100 (+25)        │
│                                                                              │
│  Top Performing Posts                                                        │
│  ─────────────────────                                                       │
│  1. "Meet our candidate María..."  8.2K imp  455 eng  5.5%  Mar 3          │
│  2. "Our spring campaign..."       6.1K imp  312 eng  5.1%  Mar 2          │
│  3. "Behind the scenes..."        12.1K imp  543 eng  4.5%  Mar 2          │
│                                                                              │
│  Engagement Trend                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  (Line chart: 30-day trend of impressions and engagements)          │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Best Posting Times                                                          │
│  ──────────────────                                                          │
│  Highest engagement windows (based on your last 90 days):                    │
│  · Weekdays 12:00–2:00 PM (lunch break)                                     │
│  · Weekdays 5:00–7:00 PM (evening commute)                                  │
│  · Saturdays 10:00 AM–12:00 PM                                              │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Interaction

- **Post detail**: reached by clicking a published post from dashboard or calendar
- **Aggregate analytics**: reached from sidebar "Analytics" link
- **"Open on [platform]"**: external link to the post on the native platform. Opens in new tab
- **Date range**: preset periods (Last 7/30/90 days, This year, Custom)
- **Export**: CSV (data tables) or PDF (formatted report)
- **Top performing posts**: click row → opens post detail
- **Best posting times**: data-driven suggestion based on historical engagement

### States

- **No data**: "Publish your first post to see analytics here." [Create Post]
- **Insufficient data for insights**: "Post more consistently to see best posting times (need 30+ posts over 90 days)."

---

## SOCIAL-005: Social Account Connection

Connect and manage social media platform accounts. OA-only.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Social Account Connections                                                  │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Connected Accounts                                                          │
│  ───────────────────                                                         │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  𝕏 Twitter/X                                          [⚙]  [✗]     │   │
│  │  @partidoverde · Connected Jan 15, 2024                             │   │
│  │  Status: ✓ Active                                                   │   │
│  │  Permissions: Read, Write, Media upload                             │   │
│  │  Last used: Mar 3, 2026                                             │   │
│  ├──────────────────────────────────────────────────────────────────────┤   │
│  │  📘 Facebook Page                                     [⚙]  [✗]     │   │
│  │  Partido Verde de Puerto Rico · Connected Feb 1, 2024               │   │
│  │  Status: ✓ Active                                                   │   │
│  │  Permissions: Pages publish, Read insights                          │   │
│  │  Last used: Mar 3, 2026                                             │   │
│  ├──────────────────────────────────────────────────────────────────────┤   │
│  │  📸 Instagram Business                                [⚙]  [✗]     │   │
│  │  @partidoverde_pr · Connected Feb 1, 2024                           │   │
│  │  Status: ✓ Active (via Facebook)                                    │   │
│  │  Permissions: Content publish, Read insights                        │   │
│  │  Last used: Mar 2, 2026                                             │   │
│  ├──────────────────────────────────────────────────────────────────────┤   │
│  │  🎵 TikTok                                            [⚙]  [✗]     │   │
│  │  @partidoverde · Connected Mar 1, 2026                              │   │
│  │  Status: ✓ Active                                                   │   │
│  │  Permissions: Video upload, Read insights                           │   │
│  │  Last used: Mar 1, 2026                                             │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│  Add Platform                                                                │
│  ────────────                                                                │
│                                                                              │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐                │
│  │  🔗 LinkedIn   │  │  📌 Pinterest  │  │  ▶ YouTube     │                │
│  │  [Connect →]   │  │  [Connect →]   │  │  [Connect →]   │                │
│  └────────────────┘  └────────────────┘  └────────────────┘                │
│                                                                              │
│  ⓘ Connection uses OAuth. GreenGrass never stores your platform password.   │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Interaction

- **Connect**: opens OAuth flow in popup/new tab. Returns to this screen on success with "Connected" toast
- **Settings gear** (⚙): re-authorize (if token expired), view posting history for this account
- **Disconnect** (✗): confirmation dialog: "Disconnect [Platform]? Scheduled posts for this platform will be paused." Removes OAuth token. Does not delete historical post data
- **Token expiry**: if a platform's OAuth token has expired, shows amber "Re-authorize" badge instead of "Active" status
- **Instagram via Facebook**: note that Instagram Business requires a connected Facebook Page (Meta Business Suite)

### States

- **No accounts**: "Connect your social media accounts to publish and track posts from GreenGrass. Your credentials are never stored — connections use secure OAuth." With all available platforms shown as "Connect" cards

---

## SOCIAL-006: Platform-Specific Preview

Full-page side-by-side previews of a post across all selected platforms. Accessed from the composer's "See All Previews →" link.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Back to Composer    Post Previews                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐          │
│  │  𝕏 Twitter/X     │  │  📘 Facebook      │  │  📸 Instagram    │          │
│  │  ──────────────  │  │  ──────────────  │  │  ──────────────  │          │
│  │                  │  │                  │  │                  │          │
│  │  ┌────────────┐  │  │  ┌────────────┐  │  │  ┌────────────┐  │          │
│  │  │ 🌿 Partido │  │  │  │ 🌿 Partido │  │  │  │ 🌿 partido │  │          │
│  │  │ Verde PR   │  │  │  │ Verde de   │  │  │  │ verde_pr   │  │          │
│  │  │ @partido.. │  │  │  │ Puerto Rico│  │  │  │            │  │          │
│  │  │            │  │  │  │            │  │  │  │ ┌────────┐ │  │          │
│  │  │ Our spring │  │  │  │ Our spring │  │  │  │ │[photo] │ │  │          │
│  │  │ campaign.. │  │  │  │ campaign.. │  │  │  │ │ 1:1    │ │  │          │
│  │  │            │  │  │  │            │  │  │  │ └────────┘ │  │          │
│  │  │ ┌────────┐ │  │  │  │ ┌────────┐ │  │  │  │            │  │          │
│  │  │ │[photo] │ │  │  │  │ │[photo] │ │  │  │  │ ♡ 💬 📤   │  │          │
│  │  │ │16:9    │ │  │  │  │ │ link   │ │  │  │  │            │  │          │
│  │  │ └────────┘ │  │  │  │ │preview │ │  │  │  │ Our spring │  │          │
│  │  │            │  │  │  │ └────────┘ │  │  │  │ campaign.. │  │          │
│  │  │ #Partido.. │  │  │  │            │  │  │  │            │  │          │
│  │  │ Paid for.. │  │  │  │ 👍 💬 ↗   │  │  │  │ #Partido.. │  │          │
│  │  │            │  │  │  │            │  │  │  │            │  │          │
│  │  │ ♡ ↻ 💬 📤 │  │  │  │ Paid for.. │  │  │  │ Paid for.. │  │          │
│  │  └────────────┘  │  │  └────────────┘  │  │  └────────────┘  │          │
│  │                  │  │                  │  │                  │          │
│  │  218/280 chars   │  │  ✓ Within limits │  │  ✓ Within limits │          │
│  │  ✓               │  │                  │  │  ⚠ No link in    │          │
│  │                  │  │                  │  │    caption        │          │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘          │
│                                                                              │
│  [← Back to Composer]                                                        │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Interaction

- **Side-by-side comparison**: shows all selected platforms simultaneously
- **Per-platform warnings**: character count, media crop notes, feature limitations (no links in Instagram captions)
- **Read-only**: this screen is a preview. Editing happens in SOCIAL-002
- **Responsive**: if more than 3 platforms, previews scroll horizontally or stack in rows of 2

---

## Empty States Summary

| Screen | Empty Message | Action |
|--------|--------------|--------|
| SOCIAL-001 Dashboard (no accounts) | Connect your social media accounts to start publishing and tracking posts. | Connect Account |
| SOCIAL-001 Dashboard (no posts) | You're connected! Create your first post. | Create Post |
| SOCIAL-003 Calendar | Your content calendar is empty. Schedule your first post. | Create Post |
| SOCIAL-004 Analytics | Publish your first post to see analytics here. | Create Post |
| SOCIAL-005 Accounts | Connect your social media accounts to publish and track posts from GreenGrass. | (all as Connect cards) |

---

## Accessibility Notes

- Platform icons always accompanied by text labels (not icon-only)
- Engagement metrics use text alongside icons (♡ 342 reads as "342 likes")
- Character counter uses color + numeric value + progress indicator
- Calendar view has keyboard navigation between days and weeks
- Preview images have alt text derived from post content

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Multi-platform composer | Single composer with platform overrides | Users think "one message, multiple channels." Per-platform composers would mean duplicating the same content 4 times |
| Calendar as primary planning tool | Dedicated calendar view (not just a list) | Social media is rhythm-driven — the CD needs to see posting frequency and gaps visually |
| Side-by-side platform preview | Full-page comparison view (SOCIAL-006) | The inline preview in the composer shows one platform at a time; seeing all simultaneously catches inconsistencies |
| Account connection as OA-only | Only Org Admin can connect/disconnect | OAuth tokens grant publishing access — this is a security-sensitive operation |
| Engagement tools deferred | Link out to native platforms for comments/DMs | Building in-platform engagement tools for each social network is massive scope. Link-out is pragmatic for v1 |

## Open Questions

1. **Approval workflow for social posts** — should all posts require approval, or only posts above a certain sensitivity level? Some orgs want Communications Director autonomy, others want Candidate sign-off on everything
2. **Content library** — should there be a shared media/asset library (images, videos, branded graphics) accessible from the composer, or is file upload sufficient for v1?
3. **Cross-posting deduplication** — if the same post goes to all 4 platforms, should analytics show it as 1 post with 4 platform results, or 4 separate posts? Current wireframe shows aggregate + per-platform breakdown
4. **TikTok video creation** — TikTok is video-first. Should the composer support video editing/trimming, or assume videos are created externally and just uploaded? External creation is more realistic for v1
