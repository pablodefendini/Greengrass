# Pattern Catalog

## Purpose

This document inventories the recurring UI patterns used across GreenGrass. Each pattern is a reusable interaction model that appears in multiple screens and feature areas. Defining them here ensures consistency — the same pattern should look and behave the same way everywhere it appears.

This catalog is the reference for component design (Phase 3) and wireframing (Phase 4). Individual patterns that require deep specification (offline/sync, notifications, search, security) have their own documents in this directory.

## Pattern Summary

| # | Pattern | Screen Count | Offline | Mobile-Primary | Key Personas |
|---|---------|-------------|---------|----------------|-------------|
| 1 | List View | ~23 | Partial | Some | All staff |
| 2 | Detail View | ~14 | Partial | Some | All staff |
| 3 | Create/Edit Form | ~29 | No | Few | Staff creators |
| 4 | Builder Interface | ~8 | No | No | Staff creators |
| 5 | Wizard Flow | 8 | No | 2 | OA, V |
| 6 | Dashboard | ~21 | No | Some | All staff, C |
| 7 | Map Interface | 6 | 1 | 1 | OA, FiD, V, TL |
| 8 | Calendar/Schedule | ~4 | No | Some | OA, VC, CD |
| 9 | Composer | ~5 | No | Some | OA, CD, FiD |
| 10 | Approval Queue | ~3 | No | 1 | C, CD, FD |
| 11 | Review Queue | ~5 | Partial | 1 | OA, DM, FiD |
| 12 | Check-in Tool | 4 | Yes | All | VC, TL, V |
| 13 | Pipeline/Kanban | 1 | No | No | OA, CD |
| 14 | Import/Export Flow | 5 | No | No | OA, DM |
| 15 | Configuration Panel | ~16 | No | No | OA |
| 16 | Side-by-Side Comparison | ~3 | No | No | OA, DM |
| 17 | Split View / Detail Panel | ~6 | Partial | No | All staff |
| 18 | Field Mode (Full-Screen) | ~16 | Yes | All | V, TL |
| 19 | Real-Time Dashboard | ~3 | No | Some | OA, FiD |
| 20 | Contextual Thread | ~4 | Partial | Yes | All staff |

---

## 1. List View

The most common pattern in the platform. A filterable, sortable, searchable collection of records.

### Where It Appears

Contacts (CRM-001), Segments (CRM-005), Import History (CRM-012), Canvassing Campaigns (CANV-001), Walk Lists (CANV-006), Phone Bank Campaigns (PHONE-001), Voter Reg Drives (VREG-001), Donations (FUND-001), Fundraising Campaigns (FUND-018), Email Campaigns (COMM-001), Email Templates (COMM-004), Events (EVT-001), Activism Campaigns (ACT-001), Media Contacts (PRESS-001), Media Lists (PRESS-003), Coverage Log (PRESS-010), Talking Points (PRESS-014), Message Inbox (MSG-001), Staff List (SET-004), Alliance Members (ALLY-002), Poll Watcher Issues (GOTV-016).

### Anatomy

```
┌──────────────────────────────────────────────────────┐
│  [Search...]          [Filter ▾]  [Sort ▾]  [+ New]  │  ← Action bar
├──────────────────────────────────────────────────────┤
│  ☐  Name            Status      Date        Actions  │  ← Column headers
├──────────────────────────────────────────────────────┤
│  ☐  Record 1        Active      Jan 15      ⋯       │
│  ☐  Record 2        Draft       Jan 14      ⋯       │
│  ☐  Record 3        Active      Jan 13      ⋯       │
│  ...                                                  │
├──────────────────────────────────────────────────────┤
│  ◀  Page 1 of 12  ▶          Showing 1-25 of 287    │  ← Pagination
└──────────────────────────────────────────────────────┘
```

### Behaviors

- **Search** — debounced text search across key fields (name, email, title). Server-side.
- **Filters** — contextual to the list type. Filters shown as chips above the list when active. "Clear all" to reset.
- **Sort** — click column header to sort. Ascending/descending toggle. Default sort varies by list (most recent first for activity, alphabetical for contacts).
- **Bulk actions** — select multiple rows via checkboxes. Bulk action bar appears at top (delete, export, tag, assign). Limited to safe operations.
- **Row actions** — overflow menu (⋯) on each row for quick actions (edit, duplicate, delete, archive).
- **Row click** — navigates to detail view. On desktop with detail panel, opens in the right panel. On mobile, navigates to a full-screen detail view.
- **Empty state** — when the list has no records, show a persona-specific prompt ("Create your first canvassing campaign" for a Field Director, "Import your voter file" for a Data Manager).
- **Loading** — skeleton rows (not spinner) while data loads.
- **Pagination** — server-side pagination. 25 rows default. User can change to 50 or 100. Infinite scroll on mobile.

### Mobile Variant

On mobile, the list view becomes a vertical card list:
- No table columns — each record is a card with key info stacked vertically
- Search and filter accessible via top bar icons
- Swipe actions on cards (archive, delete) where appropriate
- Pull-to-refresh
- Infinite scroll instead of pagination

### Offline Variant

Most lists require connectivity. Exception: the message inbox (MSG-001) shows cached conversations when offline, with a banner indicating the list may not be current.

---

## 2. Detail View

A comprehensive view of a single record, showing all fields, related records, history, and available actions.

### Where It Appears

Contact Detail (CRM-002), Donation Detail (FUND-002), Event Detail (EVT-003), Media Contact Detail (PRESS-002), Endorsement Detail (PRESS-013), Conversation View (MSG-002/003), Supporter Profile (SUP-006), Canvassing Results (CANV-013).

### Anatomy

```
┌──────────────────────────────────────────────────────┐
│  ← Back    Record Name                [Edit] [⋯]    │  ← Header
├──────────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌────────────────────────┐ │
│  │ Key info             │  │ Status / tags          │ │
│  │ (name, type, date)   │  │ (active, flagged, etc) │ │
│  └─────────────────────┘  └────────────────────────┘ │
├──────────────────────────────────────────────────────┤
│  [Overview] [Activity] [Related] [Notes]             │  ← Tabs
├──────────────────────────────────────────────────────┤
│                                                       │
│  Tab content (fields, timeline, linked records, etc)  │
│                                                       │
└──────────────────────────────────────────────────────┘
```

### Behaviors

- **Header** — record name/title, primary status, edit button, overflow menu (delete, duplicate, merge, export).
- **Tabs** — organize related information without overwhelming. Common tabs: Overview (primary fields), Activity (timeline of interactions), Related (linked records — a contact's donations, events, communications), Notes (free-form notes).
- **Edit action** — navigates to the edit form (or enables inline editing for simple fields).
- **Related records** — shown as mini-lists within tabs. Clicking a related record navigates to its detail view.
- **Activity timeline** — chronological feed of all interactions with this record (emails sent, donations received, events attended, notes added, status changes). Each entry links to its source.

### Mobile Variant

- Full-screen view. Back button returns to list.
- Tabs become a horizontal scrollable tab bar or collapsible sections.
- Key info card is sticky at top when scrolling.

### Desktop with Detail Panel

On desktop, detail views can open in the right panel (split view) while the list remains visible on the left. The user can navigate between records in the list without losing the detail panel context. The panel can be dismissed or expanded to full-screen.

---

## 3. Create/Edit Form

Structured data entry for creating or modifying records. The most varied pattern — forms range from 3-field contact creation to 20+ field campaign configuration.

### Where It Appears

Contact Create/Edit (CRM-003), Campaign Create/Edit (CANV-002, PHONE-002, VREG-002, FUND-019), Event Create/Edit (EVT-002), Group Create/Edit (MSG-005), Refund Processing (FUND-009), Pledge Management (FUND-008), and many more — ~29 screens.

### Anatomy

```
┌──────────────────────────────────────────────────────┐
│  ← Back    Create [Record Type]      [Save] [Cancel] │  ← Header
├──────────────────────────────────────────────────────┤
│                                                       │
│  Section: Basic Information                    [▾]    │
│  ┌─────────────────────────────────────────────────┐  │
│  │ Field Label *              [input value      ]  │  │
│  │ Field Label                [input value      ]  │  │
│  │ Field Label *              [dropdown ▾       ]  │  │
│  └─────────────────────────────────────────────────┘  │
│                                                       │
│  Section: Additional Details                   [▸]    │  ← Collapsed
│                                                       │
│  Section: Settings                             [▸]    │  ← Collapsed
│                                                       │
├──────────────────────────────────────────────────────┤
│  [Cancel]                                     [Save]  │  ← Sticky footer
└──────────────────────────────────────────────────────┘
```

### Behaviors

- **Progressive disclosure** — organize fields in collapsible sections. Required fields visible by default; optional/advanced fields in collapsed sections. Reduces cognitive load for simple use cases.
- **Validation** — inline validation on blur (not keystroke). Error messages appear below the field. Required fields marked with asterisk. Form-level validation on submit if inline checks pass.
- **Auto-save** — for complex forms (campaign creation, event setup), auto-save drafts every 30 seconds. Drafts visible in the parent list with "Draft" status badge.
- **Sticky save/cancel** — action buttons stick to the bottom of the viewport so they're always accessible during long forms.
- **Dirty state** — if the user navigates away with unsaved changes, show a confirmation dialog ("You have unsaved changes. Discard?").
- **Help text** — brief explanatory text below complex fields. For compliance-sensitive fields, include "Why is this required?" expandable help.

### Mobile Variant

- Full-screen form. Sections stack vertically.
- Large input fields with appropriate mobile keyboards (numeric for phone, email for email).
- Sticky save button at bottom of screen.
- Collapsed sections show a preview of their content (first field value) when collapsed.

---

## 4. Builder Interface

Visual, interactive editors for composing complex structured content. These are the platform's power tools — complex enough to warrant desktop-only design.

### Sub-Types

#### Email Builder (COMM-002, COMM-003)

Block-based visual editor. Drag-and-drop content blocks (text, image, button, divider, columns). Personalization token insertion (`{{first_name}}`, `{{donation_amount}}`). Mobile preview toggle. Compliance disclaimer auto-inserted based on jurisdiction.

#### Script Builder (CANV-003, PHONE-003)

Branching logic editor. Question → response options → conditional next question. Visual flow diagram showing branches. Test mode to walk through the script as a volunteer would experience it.

#### Segment Builder (CRM-004)

Criteria-based query builder. Add criteria (field, operator, value), combine with AND/OR logic. Real-time count of matching records updates as criteria change. Save as reusable segment.

#### Donation Form Builder (FUND-003)

Form layout editor. Configure suggested amounts, payment methods, recurring options, custom fields, branding, compliance disclaimers. Live preview of the public donation form.

#### Survey Builder (EVT-010)

Question editor. Add questions (multiple choice, open-ended, rating scale, NPS). Drag-to-reorder. Conditional display rules. Preview mode.

### Common Behaviors

- **Live preview** — all builders show a real-time preview of the output. For email and donation forms, this includes a mobile preview toggle.
- **Template library** — start from a template or blank. Save current work as a new template.
- **Undo/redo** — essential for complex editing. Keyboard shortcuts (Ctrl+Z/Ctrl+Y).
- **Version history** — auto-saved versions. Can restore a previous version.
- **Desktop-only** — builders require full-width screens for the editing canvas + preview pane. Not available on mobile.

---

## 5. Wizard Flow

Guided multi-step processes for complex setup tasks. See also: `settings-help-patterns.md` for onboarding details.

### Where It Appears

Org Setup (WIZ-001), Payment Processor (WIZ-002), BYOK Key Generation (WIZ-003), Compliance Configuration (WIZ-004), WhatsApp Business Setup (WIZ-005), SMS Number Setup (WIZ-006), Voter File Import (WIZ-007), Volunteer Onboarding (WIZ-008).

### Anatomy

```
┌──────────────────────────────────────────────────────┐
│  [Logo]           Step 3 of 7            [Save & Exit]│  ← Wizard header
├──────────────────────────────────────────────────────┤
│                                                       │
│  ○───●───●───○───○───○───○                            │  ← Progress bar
│       Step 1  Step 2  Step 3                          │
│                                                       │
│  ┌─────────────────────────────────────────────────┐  │
│  │                                                 │  │
│  │  Step-specific content                          │  │
│  │  (form fields, instructions, confirmation)      │  │
│  │                                                 │  │
│  └─────────────────────────────────────────────────┘  │
│                                                       │
├──────────────────────────────────────────────────────┤
│  [← Back]                                  [Next →]   │  ← Step navigation
└──────────────────────────────────────────────────────┘
```

### Behaviors

- **Progress indicator** — shows completed, current, and remaining steps. Steps can be labeled or numbered.
- **Step validation** — each step validates before allowing progression. Back is always available.
- **Save & Exit** — persists wizard state. Returning to the wizard resumes at the last completed step.
- **Contextual help** — each step can have inline help text and links to knowledge base articles.
- **Completion state** — final step shows a summary of what was configured and suggests next actions.
- **Sidebar replaced** — during a wizard, the sidebar shows wizard step names instead of normal navigation (per navigation-model.md).

---

## 6. Dashboard

Visual summaries of key metrics organized in widget grids. Each persona has a different default dashboard.

### Where It Appears

Campaign Overview (DASH-001), Field Operations (DASH-002), Fundraising (DASH-003), Communications (DASH-004), Volunteer (DASH-005), Data Quality (DASH-006), Compliance (DASH-007), War Room (DASH-008), Team Lead (DASH-009), Candidate (DASH-010), Alliance (DASH-011).

### Widget Types

| Widget | Description | Example |
|--------|-------------|---------|
| Metric card | Single KPI with trend indicator | "Total Raised: $47,320 ↑12%" |
| Thermometer | Goal progress bar | Fundraising goal: 63% of $100K |
| Line chart | Trend over time | Daily donation totals, 30-day view |
| Bar chart | Comparison across categories | Doors knocked by turf |
| Map heatmap | Geographic distribution | Turnout by precinct |
| Distribution | Breakdown by category | Donors by amount tier |
| Alert list | Items needing attention | Compliance flags, sync errors |
| Activity feed | Recent actions | Latest donations, volunteer signups |

### Behaviors

- **Date range filter** — dashboards default to a relevant range (today for war room, this month for fundraising, this campaign for field). User can adjust.
- **Drill-down** — clicking a metric card or chart navigates to the underlying list or detail view. The metric card is a shortcut, not a dead end.
- **Refresh** — dashboards show "Last updated: X" timestamp. Manual refresh button. War room dashboard auto-refreshes on a 30-second interval.
- **Responsive grid** — widgets reflow based on viewport. Desktop: 2-4 columns. Tablet: 2 columns. Mobile: 1 column, stacked vertically.
- **Empty states** — when a metric has no data, the widget shows a contextual message ("No donations yet — set up your first donation form" with a link to the form builder).

### Mobile Variant

Widgets stack vertically in priority order (most important metric first). Charts simplify to essential elements (fewer axis labels, no legend on small charts). Metric cards become full-width.

---

## 7. Map Interface

Interactive geographic visualizations for spatial data — turfs, canvassing progress, voter distribution, turnout.

### Where It Appears

Turf Management (CANV-004), Turf Auto-Generation (CANV-005), Field Mode Map (CANV-009), Canvassing Progress (CANV-014), GOTV Turf Cutting (GOTV-004), Turnout Map (GOTV-017).

### Sub-Types

#### Management Map (desktop)

Full-featured map for creating and managing turfs. Drawing tools (polygon, rectangle), boundary layers (precincts, districts), data overlays (voter density, support scores). Used by Field Directors to plan operations.

#### Field Map (mobile, offline)

Simplified map for volunteers in the field. Shows current location, walk list route, doors visited vs. remaining. Pre-cached map tiles for offline use. Large touch targets for door selection. No drawing tools — view-only.

#### Analytics Map (desktop)

Heatmap overlays for understanding geographic patterns. Turnout by precinct, canvassing coverage, support score distribution. Color-coded legends. Zoom to specific areas.

### Common Behaviors

- **Base map** — street map by default. Satellite available for rural areas where street maps are sparse.
- **Layers** — toggle data layers on/off. Boundary layers (precincts, turfs), data layers (heatmaps, markers).
- **Search** — search by address to navigate to a specific location.
- **Zoom/pan** — standard map controls. Auto-fit to data bounds when loading.

---

## 8. Calendar / Schedule View

Time-based visualization for events, shifts, and scheduled content.

### Where It Appears

Post Calendar (SOCIAL-003), Interview Schedule (PRESS-015), Event scheduling (within EVT-002), Shift scheduling (within volunteer management).

### Behaviors

- **View modes** — month, week, day. Default varies by context (week for events, month for content calendar).
- **Color coding** — events colored by type, status, or assignment.
- **Click to create** — clicking an empty time slot opens a create form for that date/time.
- **Click to view** — clicking an existing item opens its detail view.
- **Drag to reschedule** — desktop only. Drag items to new time slots.

### Mobile Variant

Agenda view (vertical list sorted by date) replaces the calendar grid on mobile. Date picker for navigation. Each item is a tappable card.

---

## 9. Composer Interface

Real-time content composition with preview and compliance checking.

### Where It Appears

SMS/WhatsApp Composer (COMM-005), Post Composer (SOCIAL-002), Press Release Builder (PRESS-004), Media Advisory (PRESS-007), Statement Builder (PRESS-008).

### Common Behaviors

- **Character counter** — for SMS and social posts, show remaining characters with warning at thresholds.
- **Live preview** — real-time preview of the output as it will appear to recipients. For social media, platform-specific previews (how it looks on Twitter vs. Instagram).
- **Personalization tokens** — insert merge tags for recipient-specific content.
- **Compliance auto-insertion** — jurisdiction-specific disclaimers added automatically based on tenant configuration.
- **Media attachment** — image/file upload with preview.
- **Schedule or send** — choose immediate send, scheduled send (date/time picker), or save as draft.
- **Approval routing** — if the content type requires approval (Candidate-approved press releases, social posts), the compose flow routes to the approval queue instead of sending directly.

---

## 10. Approval Queue

Review and approve/reject content or actions that require authorization.

### Where It Appears

Candidate Approval Queue (MSG-013), Compliance Flag Review (FUND-012), press release approval workflows, social media post approval.

### Anatomy

```
┌──────────────────────────────────────────────────────┐
│  Pending Approvals (3)                    [Filters]   │
├──────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────┐   │
│  │  Press Release: "Statement on Education..."    │   │
│  │  Submitted by: Maria · 2 hours ago  · URGENT  │   │
│  │  [Preview]    [Approve]  [Reject]  [Comment]   │   │
│  └────────────────────────────────────────────────┘   │
│  ┌────────────────────────────────────────────────┐   │
│  │  Social Post: Instagram · Scheduled 3pm today  │   │
│  │  Submitted by: Carlos · 45 min ago             │   │
│  │  [Preview]    [Approve]  [Reject]  [Comment]   │   │
│  └────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────┘
```

### Behaviors

- **Preview** — full preview of the content as it will appear when published/sent.
- **Approve/Reject** — single-action buttons. Reject requires a reason (comment).
- **Comment** — add feedback without approving or rejecting. Triggers a notification to the submitter.
- **Priority** — urgent items visually distinguished (color, position, badge).
- **Badge count** — the approval queue count appears as a badge on the mobile tab and sidebar item.

---

## 11. Review Queue

Structured review for data quality, compliance, and operational decisions. Similar to approval queues but focused on data rather than content.

### Where It Appears

Dedup Review Queue (CRM-006), Dedup Comparison (CRM-007), Compliance Flag Review (FUND-012), Poll Watcher Issue Queue (GOTV-016), Poll Watcher Issue Report (GOTV-015).

### Behaviors

- **Side-by-side comparison** — for dedup, show two records side by side with differences highlighted. Merge controls for each field (keep left, keep right, keep both).
- **Categorization** — items categorized by type/severity. Filters by category.
- **Escalation** — items can be escalated to a higher authority (poll watcher issues to legal team, compliance flags to Org Admin).
- **Resolution** — each item requires a resolution action (merge, dismiss, flag, escalate). Resolution is logged in the audit trail.

---

## 12. Check-in Tool

Fast, mobile-first interfaces for confirming attendance at events and operations.

### Where It Appears

Event Check-in (EVT-005), Staging Location Check-in (GOTV-023), Poll Watcher Check-in (GOTV-014).

### Anatomy

```
┌──────────────────────────────────┐
│  Event Check-in    12 of 45 ✓   │
├──────────────────────────────────┤
│  [Search name...]                │
│                                  │
│  ┌────────────────────────────┐  │
│  │  Ana Martínez        [✓]  │  │
│  │  Carlos Reyes        [ ]  │  │
│  │  Diana Flores        [✓]  │  │
│  │  Eduardo Vega        [ ]  │  │
│  └────────────────────────────┘  │
│                                  │
│  [Scan QR Code]                  │
└──────────────────────────────────┘
```

### Behaviors

- **Quick search** — type-ahead search to find a specific person. First-letter jump.
- **QR scan** — camera-based QR code scanning for fast check-in (if volunteer has a QR code from their invitation).
- **Tap to check in** — large touch targets. Checkmark appears immediately with a brief haptic/visual confirmation.
- **Undo** — accidental check-in can be undone within 10 seconds.
- **Counter** — running count of checked-in vs. expected ("12 of 45 checked in").
- **Offline** — works fully offline. Check-in data stored locally, synced when connected. Clear sync status indicator.

---

## 13. Pipeline / Kanban View

Stage-based progression view for items moving through a process.

### Where It Appears

Endorsement Pipeline (PRESS-012): identified → approached → considering → committed → public.

### Behaviors

- **Columns** — one per stage. Cards within each column represent items.
- **Drag to advance** — drag a card from one column to the next to change its stage.
- **Card content** — key info visible on the card (name, date entered stage, urgency).
- **Click for detail** — clicking a card opens the full detail view.
- **Counts** — each column header shows the count of items in that stage.
- **Desktop only** — kanban boards require horizontal space. On mobile, show as a filterable list with stage as a dropdown.

---

## 14. Import/Export Flow

Data movement in and out of the platform.

### Where It Appears

Data Import Wizard (CRM-008 through CRM-011), Import History (CRM-012), Data Export (CRM-013), Early Voting Upload (GOTV-002).

### Import Flow

1. **Upload** — drag-and-drop or file picker. Validate format (CSV, Excel). Show file preview.
2. **Column mapping** — auto-detect column headers, let user confirm/adjust mappings. Show sample data for each mapped field.
3. **Preview** — show what will be created, updated, or skipped. Highlight potential duplicates.
4. **Confirm** — summary of actions. "Import X records" button.
5. **Progress** — progress bar during import. Don't block navigation — import runs in background with notification on completion.
6. **Report** — post-import summary: X created, Y updated, Z skipped, W errors. Link to review errors.

### Export Flow

1. **Select data** — choose record type, apply filters (segment, date range, tags).
2. **Choose fields** — select which fields to include in the export.
3. **Choose format** — CSV, Excel, JSON.
4. **Export** — runs in background. Notification with download link when ready.

---

## 15. Configuration Panel

Settings interfaces for platform, feature, and integration configuration.

### Where It Appears

Org Profile (SET-001), Role Templates (SET-002), Compliance Config (SET-008), Integration Settings (SET-012 through SET-016), Billing (SET-017), Security (SET-019), Encryption (SET-020).

### Anatomy

```
┌──────────────────────────────────────────────────────┐
│  Settings > Compliance                                │
├──────────────────────────────────────────────────────┤
│                                                       │
│  ▾ Contribution Limits                                │
│    Individual limit    [$2,900    ]                    │
│    PAC limit           [$5,000    ]                    │
│    ⓘ Based on your jurisdiction's requirements        │
│                                                       │
│  ▸ Campaign Period                                    │
│  ▸ Disclaimers                                        │
│  ▸ Data Retention                                     │
│                                                       │
├──────────────────────────────────────────────────────┤
│  Last modified: Jan 15, 2026 by admin@campaign.org   │
│  [Cancel]                                     [Save]  │
└──────────────────────────────────────────────────────┘
```

### Behaviors

- **Collapsible sections** — group related settings. Only one or two sections expanded at a time.
- **Smart defaults** — pre-filled based on jurisdiction/context. Clearly labeled as defaults.
- **Help text** — contextual explanations for each setting. Compliance settings include "Why is this required?" links.
- **Change tracking** — shows who last modified and when. Audit trail for all changes.
- **Test button** — for integrations, a "Test Connection" button validates the configuration works.
- **Desktop only** — configuration interfaces require full-width layouts for complex forms.

---

## 16. Side-by-Side Comparison

Dual-pane interface for comparing records, versions, or variants.

### Where It Appears

Dedup Comparison (CRM-007), A/B Test Results (FUND-014), talking points version comparison.

### Behaviors

- **Two-column layout** — record A on the left, record B on the right. Field-by-field alignment.
- **Difference highlighting** — fields that differ are highlighted (color-coded). Identical fields are dimmed.
- **Merge controls** — for dedup, each differing field has "Keep Left" / "Keep Right" / "Keep Both" controls.
- **Preview** — before confirming a merge, show the resulting merged record.
- **Desktop only** — requires horizontal space. On tablet, consider a stacked vertical comparison. Not available on phone.

---

## 17. Split View / Detail Panel

Two-pane layout with a list or parent view on one side and a detail view on the other. Defined in navigation-model.md as a core desktop interaction pattern.

### Where It Appears

Contact list + detail, message inbox + conversation, donation list + detail, event list + detail, issue queue + detail.

### Behaviors

- **Desktop only** — on mobile, list and detail are separate full-screen views.
- **Resizable** — user can drag the divider to adjust pane proportions. Preference persisted.
- **Dismissable** — close button on the detail panel returns to full-width list.
- **Navigation within panel** — prev/next arrows in the detail panel header to move through list items without closing the panel.
- **Small viewport fallback** — on narrow desktop viewports, the detail panel opens as an overlay instead of a side-by-side split.

---

## 18. Field Mode (Full-Screen Takeover)

The volunteer's canvassing, phone banking, voter registration, and GOTV interface. A completely different navigation paradigm from the rest of the app. Defined in detail in navigation-model.md.

### Where It Appears

Canvassing (CANV-007 through CANV-012), Phone Banking (PHONE-004 through PHONE-006), Voter Registration (VREG-004, VREG-005), GOTV (GOTV-008 through GOTV-010).

### Key Characteristics

- **Full-screen** — no sidebar, no bottom tabs, no standard navigation. Only the field header and task controls.
- **Linear progression** — move through items one at a time (next door, next call, next voter).
- **Large touch targets** — designed for one-handed use while standing, walking, or in poor lighting.
- **Offline-first** — all data is pre-loaded. Works without connectivity. Syncs when available.
- **Minimal decisions** — the interface guides the volunteer through each interaction with clear, simple options.
- **Crash recovery** — position in the walk/call list is persisted locally after each interaction. App restarts at the exact same position.

See also: `offline-sync-patterns.md` for sync behavior during field mode.

---

## 19. Real-Time Dashboard (War Room)

Live-updating operational dashboard for election day and active field operations.

### Where It Appears

War Room Dashboard (DASH-008), Turnout Dashboard (GOTV-017, GOTV-018), War Room Channel (MSG-007).

### Key Differences from Standard Dashboards

- **Auto-refresh** — data updates every 30 seconds (or via WebSocket where available). No manual refresh needed.
- **Alert prioritization** — urgent items (low turnout areas, escalated issues, resource gaps) surface prominently.
- **Action buttons** — dashboard widgets include inline action buttons (approve reallocation, send message wave, escalate issue). The war room is an action center, not just a display.
- **Communication integration** — the war room channel (MSG-007) is integrated into the dashboard view, showing real-time structured updates alongside the data.

---

## 20. Contextual Thread

Discussion threads attached to specific platform objects (events, shifts, issues, donations) for collaborative review and coordination.

### Where It Appears

Event Thread (MSG-008), Shift Thread (MSG-009), Issue Thread (MSG-010), Donation Flag Thread (MSG-011).

### Behaviors

- **Attached to parent** — the thread is accessed from the parent object's detail view (e.g., an "Discussion" tab on the event detail page), not from the messaging inbox.
- **Same conversation UI** — uses the same message composition and display components as DMs and groups.
- **Participants** — automatically includes people associated with the parent object (event organizers, shift volunteers, compliance reviewers).
- **Notifications** — new messages in contextual threads notify participants through the standard notification system.
- **Offline** — cached threads are readable offline. New messages queue for sync.

---

## Cross-Cutting Concerns

### Empty States

Every pattern has an empty state — what the user sees when there's no data yet. Empty states are persona-specific:
- They acknowledge the absence of data without making the user feel lost
- They suggest a clear next action ("Create your first event," "Import your voter file")
- They link directly to the action they suggest
- They're never just "No data found" — that's a system message, not a UX

### Loading States

- **Lists** — skeleton rows (grey blocks mimicking the layout of real rows)
- **Dashboards** — skeleton widgets
- **Detail views** — skeleton with the layout structure visible
- **Never a full-screen spinner** — the user should always see where they are, even while data loads

### Error States

- **Inline errors** — form validation errors appear below the specific field
- **Toast notifications** — transient errors (network timeout, save failed) appear as toasts with a retry action
- **Full-screen error** — only for unrecoverable errors (404, server down). Shows a clear message and a "Go home" link
- **Offline-specific errors** — "This feature requires a connection" with an explanation and a suggestion of what they can do offline

### Accessibility

All patterns must meet WCAG 2.1 AA:
- Keyboard navigable (tab order, focus indicators, keyboard shortcuts)
- Screen reader compatible (ARIA labels, roles, live regions for dynamic content)
- Color contrast ratios (4.5:1 for text, 3:1 for large text and UI components)
- Touch targets minimum 44x44px on mobile
- No information conveyed by color alone (always paired with text, icon, or pattern)

## Open Questions

1. **Drag-and-drop on mobile.** Several patterns use drag-and-drop on desktop (builders, kanban, calendar). What's the mobile equivalent? Long-press to reorder? Or replace with explicit move buttons?

2. **Keyboard shortcuts.** Should the platform support a keyboard shortcut layer for power users (e.g., `G then D` for Dashboard, `G then M` for Messages)? Low priority but high value for all-day staff users.

3. **Dark mode.** Some patterns (especially maps and dashboards) would benefit from a dark mode for election night/war room use. Should dark mode be user-selectable, automatic (time-based), or feature-specific (war room only)?

<!-- REVISIT: The exact component breakdown (which patterns become which components) is deferred to the component-inventory.md in Phase 3. This catalog defines the patterns; the component inventory defines the implementation units. -->
