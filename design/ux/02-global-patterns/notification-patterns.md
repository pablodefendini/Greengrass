# Notification Patterns

## Purpose

This document defines how the platform delivers notifications to users — the notification center, delivery channels, priority levels, grouping, and persona-specific behavior. Notifications are the connective tissue of the platform — they tell users what happened, what needs attention, and what's coming up.

The design constraint: notifications must be useful without being overwhelming. A Volunteer Coordinator during a busy event weekend might receive 50 notifications in an hour (volunteer signups, shift cancellations, check-in confirmations). An Org Admin during election day might receive 200. The system must surface what matters and suppress what doesn't.

## Notification Anatomy

Every notification has a consistent structure:

```
┌──────────────────────────────────────────────────────┐
│  [Icon]  Source · Time                      [⋯]     │
│                                                      │
│  Title (bold, concise — what happened)               │
│  Body (1-2 lines — context and detail)               │
│                                                      │
│  [Primary Action]  [Secondary Action]                │
└──────────────────────────────────────────────────────┘
```

### Fields

| Field | Purpose | Example |
|-------|---------|---------|
| **Icon** | Visual identifier for the notification source | 💬 Messages, 🚨 Compliance, 📋 Shifts |
| **Source** | Feature area that generated the notification | "Fundraising," "GOTV," "Messaging" |
| **Time** | Relative timestamp | "2 min ago," "1 hour ago," "Yesterday" |
| **Title** | What happened — concise, actionable | "New donation: $250 from Ana Martínez" |
| **Body** | Context — enough to decide whether to act now | "Recurring · First donation in this campaign" |
| **Primary action** | The most likely action | "View Donation" |
| **Secondary action** | Alternative action | "Dismiss" |

---

## Notification Center

### Access

- **Desktop:** Bell icon in the header bar. Badge count shows unread notifications. Click opens a drawer from the right edge.
- **Mobile:** Bell icon in the top bar. Tap opens a full-screen notification view.

### Layout

```
┌──────────────────────────────────────────────────────┐
│  Notifications (12 unread)        [Mark all read]    │
├──────────────────────────────────────────────────────┤
│  [All]  [Messages]  [Shifts]  [Alerts]  [Other]     │  ← Filter tabs
├──────────────────────────────────────────────────────┤
│                                                       │
│  TODAY                                                │
│  ┌────────────────────────────────────────────────┐   │
│  │  🚨 Compliance · 15 min ago                    │   │
│  │  Contribution limit approaching                │   │
│  │  John Smith: $2,700 of $2,900 limit used       │   │
│  │  [Review]  [Dismiss]                           │   │
│  └────────────────────────────────────────────────┘   │
│  ┌────────────────────────────────────────────────┐   │
│  │  📋 Shifts · 1 hour ago                        │   │
│  │  Shift cancellation: Maria Lopez               │   │
│  │  Tomorrow 2pm-6pm · Turf 12 · No replacement   │   │
│  │  [Find Replacement]  [Dismiss]                 │   │
│  └────────────────────────────────────────────────┘   │
│                                                       │
│  YESTERDAY                                            │
│  ...                                                  │
│                                                       │
│  [Notification Preferences]                           │
└──────────────────────────────────────────────────────┘
```

### Grouping

Notifications are grouped by time (Today, Yesterday, This Week, Older) and can be filtered by source category:

| Filter | Includes |
|--------|----------|
| All | Everything |
| Messages | DMs, group messages, broadcasts, contextual threads |
| Shifts | Shift assignments, cancellations, reminders, check-in alerts |
| Alerts | Compliance flags, security alerts, sync errors, system issues |
| Other | Event RSVPs, donation notifications, training completions, etc. |

### Behaviors

- **Unread indicator** — unread notifications have a colored left border or background tint. Read notifications are visually muted.
- **Mark as read** — clicking a notification marks it as read. "Mark all read" button at the top.
- **Dismiss** — removes the notification from the center. Does not affect the underlying event.
- **Deep link** — tapping a notification navigates to the relevant screen (the donation detail, the shift management page, the conversation, etc.).
- **Persistent critical notifications** — notifications marked as critical (compliance deadlines, security alerts) cannot be dismissed, only resolved by acting on them.
- **Badge count** — shows on the bell icon. On mobile, also appears on the relevant bottom tab (Messages tab shows unread message count, Shifts tab shows pending shift notifications).

---

## Priority Levels

### Definitions

| Priority | Visual Treatment | Persistence | Sound/Vibration | Examples |
|----------|-----------------|-------------|-----------------|----------|
| **Critical** | Red accent, cannot dismiss | Until resolved | Yes (unless muted) | Security breach, payment processor down, compliance violation |
| **High** | Amber accent, prominent | 7 days | Yes (unless muted) | Compliance flag, shift cancellation with no replacement, GOTV escalation |
| **Normal** | Standard | 30 days | Push notification (configurable) | New donation, volunteer signup, message received, event RSVP |
| **Low** | Subtle, may be grouped | 7 days | None | Training completion, data import finished, weekly summary |

### User-Configurable Priority

Per the decision in `messaging.md`, users can configure notification priority for each source. The platform provides sensible defaults per persona, and users can adjust:

```
┌──────────────────────────────────────────────────────┐
│  Notification Preferences                             │
├──────────────────────────────────────────────────────┤
│                                                       │
│  Messages                                             │
│    Direct messages    [● High  ▾]  [Push ✓] [Email ✓]│
│    Group messages     [● Normal ▾] [Push ✓] [Email ☐]│
│    Broadcasts         [● Normal ▾] [Push ☐] [Email ✓]│
│                                                       │
│  Shifts                                               │
│    Shift reminders    [● High  ▾]  [Push ✓] [Email ✓]│
│    Cancellations      [● High  ▾]  [Push ✓] [Email ✓]│
│    New assignments    [● Normal ▾] [Push ✓] [Email ☐]│
│                                                       │
│  Fundraising                                          │
│    New donations      [● Normal ▾] [Push ☐] [Email ✓]│
│    Compliance flags   [● Critical] [Push ✓] [Email ✓]│  ← Cannot change
│    ...                                                │
│                                                       │
│  [Reset to Defaults]                                  │
└──────────────────────────────────────────────────────┘
```

**Non-configurable:** Some notifications are always critical and cannot be downgraded: security alerts, compliance violations, system errors. These are marked "Cannot change" in the preferences.

---

## Delivery Channels

Notifications reach users through multiple channels. Which channels are available depends on the notification source and user preferences.

### Channel Matrix

| Channel | Latency | Use Case | Available To |
|---------|---------|----------|-------------|
| **In-app** | Immediate | All notifications | All users |
| **Push** | Immediate | Time-sensitive notifications | Mobile users with app installed |
| **Email** | Minutes | Summaries, detailed content, receipts | All users with email |
| **SMS** | Immediate | Critical-only alerts for users without app | Opt-in only, critical events |

### Channel Selection Logic

1. **In-app** — always delivered. This is the canonical notification.
2. **Push** — delivered if the user has push enabled and the notification priority is >= their configured threshold for that source.
3. **Email** — delivered if the user has email notifications enabled for that source. Emails may be batched (see Digests below).
4. **SMS** — delivered only for critical notifications when the user has opted in to SMS alerts. Used as a last-resort channel for users who may not have the app open (e.g., Org Admin during a security incident).

### Duplicate Prevention

If a user sees a notification via push and then opens the app, the in-app notification should already be marked as "seen" (not necessarily "read" — they saw the push but may not have acted on it). This prevents the notification center from showing notifications the user already dismissed via push.

---

## Persona-Specific Defaults

Each persona has notification defaults tuned to their role and typical usage pattern.

### Org Admin

Sees the broadest set of notifications — system health, compliance, and cross-functional alerts.

| Source | Default Priority | Default Channels |
|--------|-----------------|-----------------|
| Security alerts | Critical | In-app, Push, Email, SMS |
| Compliance flags | Critical | In-app, Push, Email |
| System issues (sync, integrations) | High | In-app, Push, Email |
| Billing | High | In-app, Email |
| Staff activity (new hires, role changes) | Normal | In-app, Email |
| Alliance requests | Normal | In-app, Email |

### Communications Director

Focused on content delivery and engagement.

| Source | Default Priority | Default Channels |
|--------|-----------------|-----------------|
| Email delivery failures | High | In-app, Push, Email |
| Content approval responses | High | In-app, Push |
| Campaign performance alerts | Normal | In-app, Email |
| Press coverage | Normal | In-app |

### Finance Director

Focused on money and compliance.

| Source | Default Priority | Default Channels |
|--------|-----------------|-----------------|
| Compliance flags | Critical | In-app, Push, Email |
| Payment processor issues | Critical | In-app, Push, Email |
| Large donations (above threshold) | High | In-app, Push |
| Recurring donation failures | High | In-app, Email |
| Daily donation summary | Low | Email |

### Field Director

Focused on operations and GOTV.

| Source | Default Priority | Default Channels |
|--------|-----------------|-----------------|
| GOTV escalations | Critical | In-app, Push |
| Active operation alerts | High | In-app, Push |
| Canvassing progress milestones | Normal | In-app |
| Poll watcher issues | High | In-app, Push |

### Volunteer Coordinator

Focused on people.

| Source | Default Priority | Default Channels |
|--------|-----------------|-----------------|
| Shift cancellations | High | In-app, Push, Email |
| New volunteer signups | Normal | In-app, Push |
| No-show alerts | High | In-app, Push |
| Training completions | Low | In-app |
| Event check-in milestones | Normal | In-app |

### Data Manager

Focused on data operations.

| Source | Default Priority | Default Channels |
|--------|-----------------|-----------------|
| Import completion | Normal | In-app, Email |
| Dedup queue updates | Normal | In-app |
| Data quality alerts | High | In-app, Email |

### Volunteer

Minimal, action-oriented notifications.

| Source | Default Priority | Default Channels |
|--------|-----------------|-----------------|
| Shift reminders | High | In-app, Push |
| Assignment changes | High | In-app, Push |
| Messages from Team Lead | High | In-app, Push |
| Training assignments | Normal | In-app, Push |
| Event reminders | Normal | In-app, Push |

### Team Lead

Everything a Volunteer gets, plus team management.

| Source | Default Priority | Default Channels |
|--------|-----------------|-----------------|
| Team member issues | High | In-app, Push |
| Team no-shows | High | In-app, Push |
| War room escalation requests (GOTV) | Critical | In-app, Push |

### Candidate

Curated, important-only.

| Source | Default Priority | Default Channels |
|--------|-----------------|-----------------|
| Approval requests | High | In-app, Push |
| Briefings from staff | High | In-app, Push |
| Key staff messages | Normal | In-app, Push |
| Campaign milestone summaries | Low | In-app |

### Supporter

Minimal, transactional.

| Source | Default Priority | Default Channels |
|--------|-----------------|-----------------|
| Donation receipts | Normal | Email |
| Recurring donation status changes | High | Email, Push (if opted in) |
| Event reminders | Normal | Email, Push (if opted in) |

---

## Email Digests

For notifications that don't require immediate attention, the platform offers email digests that batch notifications into periodic summaries.

### Digest Options

| Frequency | Content | Default Recipients |
|-----------|---------|-------------------|
| **Real-time** | Each notification sent immediately | Security alerts, compliance flags |
| **Hourly** | Summary of notifications from the past hour | Not default — user opt-in |
| **Daily** | End-of-day summary | Finance Director (donation summary), Volunteer Coordinator (daily volunteer activity) |
| **Weekly** | Weekly metrics and highlights | Candidate (campaign progress), Org Admin (weekly overview) |

Users configure their digest preferences in notification settings. Digest emails are well-formatted summaries, not just lists of notifications — they include context, trends, and direct links to the relevant screens.

---

## Election Day Notification Behavior

When GOTV/election day mode is activated, the notification system shifts:

### Changes

- **GOTV notifications elevated.** All GOTV-related notifications (turnout updates, escalations, resource reallocation suggestions, ride requests, poll watcher issues) are promoted to high priority regardless of user configuration.
- **Non-GOTV notifications suppressed.** Normal operational notifications (new volunteer signups, data imports, routine messages) are batched into a post-election digest. They don't disappear — they're deferred.
- **War room feed.** War room staff see a continuous notification feed integrated into the war room dashboard. This is a live feed, not the standard notification center — it auto-scrolls with new events.
- **Escalation notifications are modal.** Critical GOTV escalations (poll watcher safety issue, major turnout anomaly) appear as modal dialogs that require acknowledgment — they can't be missed by scrolling past.

### Post-Election

After election day mode deactivates, deferred notifications are delivered as a digest email ("Here's what happened while you were in election day mode"). The notification center returns to normal behavior.

---

## Notification-Related UI Elements

### Badge Counts

Badge counts appear on:
- **Bell icon** (header bar) — total unread count
- **Mobile bottom tabs** — per-tab counts where relevant:
  - Messages tab: unread message count
  - Shifts tab: pending shift notifications
  - Approvals tab (Candidate): pending approval count
- **Sidebar items** (desktop) — subtle count badges on relevant nav items

### Toast Notifications

Transient notifications for immediate feedback (not persisted in the notification center):

```
┌──────────────────────────────────────┐
│  ✓  Contact saved                    │  ← Success toast (3 seconds)
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  ⚠  Save failed · Retry             │  ← Error toast (persistent until action)
└──────────────────────────────────────┘
```

- **Success toasts** — appear briefly (3 seconds), auto-dismiss. Confirm that an action completed.
- **Error toasts** — persist until dismissed or retried. Include a retry action for recoverable errors.
- **Position** — bottom-center on desktop, top-center on mobile (avoid bottom tab bar conflict).

### Notification Sounds

- **Critical notifications** — system alert sound (respects device mute settings)
- **High notifications** — subtle notification sound
- **Normal/Low** — no sound (push vibration only, if enabled)
- **Field mode** — all sounds suppressed except critical (volunteer shouldn't be distracted while canvassing)

---

## Do Not Disturb

Users can enable Do Not Disturb mode:

- **Manual toggle** — accessible from the user menu
- **Scheduled** — set hours (e.g., 10pm-7am)
- **During shifts** — automatically enabled during active field mode shifts (only critical and shift-related notifications come through)

When DND is active:
- Push notifications are silenced
- In-app notifications still accumulate (visible when the user checks)
- Critical notifications break through DND (security, compliance)
- A "DND active" indicator appears subtly in the header

---

## Open Questions

1. **Notification lifespan.** How long should notifications persist in the notification center? Currently proposed: 30 days for normal, 7 days for low, until resolved for critical. Is 30 days too long?

2. **Cross-device notification sync.** If a user dismisses a notification on their phone, should it also be dismissed on their desktop? (Yes, probably — notifications should sync across devices.)

3. **Notification analytics.** Should the platform track notification engagement rates (what percentage of notifications are opened, acted on, dismissed)? This data could inform future priority defaults and digest timing.

<!-- REVISIT: The exact notification sources per persona will grow as features are implemented. This document defines the patterns and defaults; the implementation will add specific notification types as each feature is built. -->
