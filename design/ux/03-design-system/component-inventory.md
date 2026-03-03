# Component Inventory

## Purpose

This document catalogs the component categories, naming conventions, and state definitions for the GreenGrass design system. It bridges the gap between the design foundations (tokens, spacing, color) and the actual UI elements built from them.

This is not a component library — it's an inventory of what needs to be built. Implementation details (Svelte component APIs, prop definitions) come during development. This document ensures the design system covers every pattern identified in the pattern catalog (pattern-catalog.md) with a consistent component vocabulary.

## Naming Conventions

### Component Names

Components use PascalCase, prefixed by category:

```
Category/ComponentName
```

Examples: `Button/Primary`, `Form/TextInput`, `Layout/Sidebar`, `Data/Table`.

### Variant Naming

Variants use descriptive suffixes:

```
Button/Primary
Button/Secondary
Button/Ghost
Button/Danger
```

### State Naming

States follow a standard vocabulary:

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `hover` | Mouse over (desktop only) |
| `focus` | Keyboard focus (visible focus ring) |
| `active` | Being pressed/clicked |
| `disabled` | Non-interactive, greyed out |
| `loading` | Waiting for async operation |
| `error` | Validation failure or error state |
| `selected` | Currently selected (in a list, toggle, etc.) |
| `expanded` | Collapsible element is open |
| `collapsed` | Collapsible element is closed |
| `offline` | Feature unavailable due to connectivity |
| `empty` | No data to display |

---

## Component Categories

### 1. Primitives

The lowest-level building blocks. Used inside other components, rarely used directly in page layouts.

| Component | Description | States |
|-----------|-------------|--------|
| `Icon` | Renders Lucide icons at standard sizes. Handles RTL mirroring for directional icons. | default |
| `Badge` | Small label for counts, statuses, tags. | default, variants: status (success/warning/error/info), count, tag |
| `Avatar` | User/org photo or initials. Circular. | default, sizes: sm/md/lg/xl |
| `Divider` | Horizontal or vertical separator line. | default, with-label |
| `Spinner` | Loading indicator. Respects reduced-motion. | default |
| `Skeleton` | Placeholder for loading content. | text, circle, rectangle |
| `Tooltip` | Contextual text on hover/tap. | default |
| `VisuallyHidden` | Screen-reader-only text. | default |

### 2. Typography

Text rendering components with built-in semantic HTML and token application.

| Component | Description | Variants |
|-----------|-------------|----------|
| `Heading` | h1-h6 with appropriate token sizing. | level: 1-6 |
| `Text` | Body text with size/weight/color variants. | size: xs/sm/base/lg, weight: normal/medium/semibold |
| `Label` | Form field labels. Associates with input via `for`. | default, required |
| `HelpText` | Below-field explanatory text. | default, error |
| `Link` | Anchor text with appropriate color and underline behavior. | default, external |
| `Code` | Inline or block code with monospace font. | inline, block |
| `Timestamp` | Relative time display ("2 min ago"). Auto-updates. | default |

### 3. Buttons

Interactive elements that trigger actions.

| Component | Description | States |
|-----------|-------------|--------|
| `Button/Primary` | Main CTA. Filled background with primary color. | default, hover, focus, active, disabled, loading |
| `Button/Secondary` | Secondary action. Outlined style. | same |
| `Button/Ghost` | Tertiary action. Text-only, no background. | same |
| `Button/Danger` | Destructive action. Red styling. Requires confirmation for critical actions. | same |
| `Button/Icon` | Icon-only button. Requires aria-label. | same |
| `Button/Group` | Horizontal group of related buttons. | default |
| `Button/FloatingAction` | Mobile FAB for primary actions. | default, expanded (with sub-actions) |
| `Button/FieldAction` | Large touch target button for field mode. Minimum 48px height. | default, active, disabled |

### 4. Forms

Data input components.

| Component | Description | States |
|-----------|-------------|--------|
| `Form/TextInput` | Single-line text input. | default, focus, error, disabled, with-icon, with-clear |
| `Form/TextArea` | Multi-line text input. Auto-grows. | default, focus, error, disabled |
| `Form/Select` | Single-selection dropdown. | default, focus, error, disabled, open |
| `Form/MultiSelect` | Multi-selection with chips. | same |
| `Form/Checkbox` | Boolean toggle (checked/unchecked). | default, checked, indeterminate, disabled |
| `Form/Radio` | Single selection from options. | default, selected, disabled |
| `Form/Toggle` | On/off switch. | default, on, disabled |
| `Form/DatePicker` | Date selection (calendar popup). | default, focus, error, range |
| `Form/TimePicker` | Time selection. | default, focus, error |
| `Form/NumberInput` | Numeric input with increment/decrement. | default, focus, error, disabled |
| `Form/CurrencyInput` | Currency-formatted input with symbol. | default, focus, error |
| `Form/PhoneInput` | Phone number with country code selector. | default, focus, error |
| `Form/FileUpload` | File selection with drag-and-drop. | default, dragging, uploading, complete, error |
| `Form/ColorPicker` | Color selection (for brand customization). | default, open |
| `Form/SearchInput` | Text input with search icon and clear button. | default, focus, loading, with-results |
| `Form/FieldGroup` | Groups related form fields with a label. Collapsible. | default, expanded, collapsed |

### 5. Layout

Structural components that organize page content.

| Component | Description | Notes |
|-----------|-------------|-------|
| `Layout/Shell` | The top-level app shell (header + sidebar + content). | Role-adaptive sidebar. See navigation-model.md. |
| `Layout/FieldShell` | Field mode shell (field header + task content + actions). | Full-screen takeover. |
| `Layout/PortalShell` | Supporter portal shell (minimal header + content). | Simplified navigation. |
| `Layout/WizardShell` | Wizard shell (progress header + step content + nav). | Replaces sidebar with steps. |
| `Layout/Page` | Page wrapper with title, breadcrumbs, and action area. | |
| `Layout/Section` | Content section with optional heading and divider. | |
| `Layout/Card` | Raised content container. | elevation-1, hover: elevation-2 |
| `Layout/Grid` | CSS grid wrapper with responsive column count. | 4/8/12 columns |
| `Layout/Stack` | Vertical stack with consistent gap. | gap: space-2 through space-8 |
| `Layout/Cluster` | Horizontal flex with wrapping and consistent gap. | |
| `Layout/SplitView` | Two-pane resizable layout (list + detail). | Desktop only. |
| `Layout/DetailPanel` | Slide-out right panel for contextual detail. | Dismissable, resizable. |

### 6. Navigation

Components that help users move through the application.

| Component | Description | Notes |
|-----------|-------------|-------|
| `Nav/Sidebar` | Desktop sidebar with role-adaptive sections. | Collapsible, grouped items. |
| `Nav/SidebarItem` | Individual navigation item in sidebar. | default, active, with-badge, disabled (offline) |
| `Nav/SidebarSection` | Collapsible group header in sidebar. | expanded, collapsed |
| `Nav/BottomTabBar` | Mobile bottom navigation. Role-adaptive tabs. | |
| `Nav/BottomTab` | Individual tab in the bottom bar. | default, active, with-badge |
| `Nav/Breadcrumb` | Breadcrumb trail for deep navigation. | |
| `Nav/Pagination` | Page navigation for lists. | |
| `Nav/StepIndicator` | Wizard/process step indicator. | pending, active, complete, error |
| `Nav/Tabs` | Horizontal tab bar for content sections. | |
| `Nav/Tab` | Individual tab. | default, active, disabled |

### 7. Data Display

Components for presenting data.

| Component | Description | States |
|-----------|-------------|--------|
| `Data/Table` | Full-featured data table with sorting, selection, and actions. | default, loading, empty, error |
| `Data/TableRow` | Table row. | default, selected, hover, expanded (detail row) |
| `Data/List` | Vertical list of items (mobile-friendly alternative to table). | default, loading, empty |
| `Data/ListItem` | Individual list item. Tappable. | default, selected, with-actions |
| `Data/CardGrid` | Grid of cards (dashboard widgets, search results). | default, loading, empty |
| `Data/MetricCard` | Single KPI display (value + label + trend). | default, loading, positive-trend, negative-trend |
| `Data/Thermometer` | Goal progress bar. | default, with-label, complete |
| `Data/Chart` | Wrapper for chart components (line, bar, pie). | default, loading, empty, error |
| `Data/Timeline` | Chronological event list (activity feeds). | default, loading |
| `Data/TimelineItem` | Individual timeline entry. | default |
| `Data/EmptyState` | No-data placeholder with message and CTA. | per-context content |
| `Data/KeyValue` | Label-value pair for detail views. | default, inline, stacked |

### 8. Feedback

Components that communicate system status and user feedback.

| Component | Description | Notes |
|-----------|-------------|-------|
| `Feedback/Toast` | Transient notification at bottom (desktop) or top (mobile). | success, error, warning, info |
| `Feedback/Alert` | Persistent inline alert banner. | success, error, warning, info, dismissable |
| `Feedback/ProgressBar` | Determinate or indeterminate progress. | default, indeterminate |
| `Feedback/SyncIndicator` | Connectivity/sync status display. | connected, stale, syncing, offline, error |
| `Feedback/FieldSyncIndicator` | Enlarged sync display for field mode. | same states, larger |
| `Feedback/OfflineBadge` | Small badge indicating a feature is offline-unavailable. | default |
| `Feedback/FreshnessIndicator` | Data age display ("Last updated: 2 hours ago"). | current, stale, warning |

### 9. Overlays

Components that appear above the main content layer.

| Component | Description | Notes |
|-----------|-------------|-------|
| `Overlay/Modal` | Centered dialog. Focus-trapped. | sizes: sm/md/lg |
| `Overlay/Drawer` | Slide-out panel from edge. | direction: left/right, sizes: sm/md/lg |
| `Overlay/BottomSheet` | Mobile bottom sheet (slides up). | sizes: half/full |
| `Overlay/Dropdown` | Positioned below trigger element. | with-search option |
| `Overlay/Popover` | Positioned near trigger with arrow. | |
| `Overlay/ConfirmDialog` | Modal with confirm/cancel for destructive actions. | default, danger |
| `Overlay/NotificationDrawer` | Notification center slide-out. | |
| `Overlay/CommandPalette` | Search-everything overlay (Cmd+K). | |

### 10. Messaging

Components specific to the messaging system.

| Component | Description | Notes |
|-----------|-------------|-------|
| `Messaging/ConversationList` | List of conversations with preview. | default, filtered |
| `Messaging/ConversationItem` | Single conversation in the list. | default, unread, selected, muted |
| `Messaging/MessageBubble` | Individual message in a thread. | sent, received, system |
| `Messaging/MessageComposer` | Text input with send button and attachments. | default, with-attachments |
| `Messaging/ThreadIndicator` | Inline indicator that a message has a thread. | default, with-count |
| `Messaging/EncryptionBadge` | E2E encryption status indicator. | encrypted, unencrypted |
| `Messaging/VoiceMessage` | Voice message player (field contexts only). | default, playing |

### 11. Field Mode

Components specific to the field mode interface.

| Component | Description | Notes |
|-----------|-------------|-------|
| `Field/ShiftHeader` | Field mode header bar (sync, timer, recording indicator). | |
| `Field/TaskNav` | Previous/Next navigation with position counter. | |
| `Field/DoorCard` | Voter information card for canvassing. | default, visited, skipped |
| `Field/ResponseForm` | Script-driven response capture. | single-select, multi-select, text |
| `Field/ResponseOption` | Large tappable button for response options. | default, selected |
| `Field/MapView` | Offline-capable map for walk list visualization. | |
| `Field/WalkListItem` | Item in the walk list. | pending, complete, skipped, not-home |
| `Field/PanicButton` | Lock/panic button. Always accessible. | default |
| `Field/ShiftTimer` | Elapsed shift time display. | running, paused |
| `Field/EndShiftButton` | End shift action with confirmation. | default |

### 12. Dashboard

Components for dashboard widgets and metrics.

| Component | Description | Notes |
|-----------|-------------|-------|
| `Dashboard/WidgetGrid` | Responsive grid container for dashboard widgets. | |
| `Dashboard/Widget` | Base widget wrapper (title, content, action area). | default, loading, error, empty |
| `Dashboard/AlertWidget` | Widget showing items needing attention. | with-count, priority-sorted |
| `Dashboard/ActivityFeed` | Recent activity stream widget. | |
| `Dashboard/GoalProgress` | Fundraising/field goal thermometer widget. | |
| `Dashboard/MapWidget` | Embedded map visualization widget. | |
| `Dashboard/ElectionDayBanner` | "Election Day Active" persistent banner. | active, countdown |

### 13. Specialized

Components for specific features with unique interaction patterns.

| Component | Description | Notes |
|-----------|-------------|-------|
| `Special/CheckInTool` | Fast check-in interface with search and QR. | |
| `Special/CheckInItem` | Individual check-in list item. | pending, checked-in, absent |
| `Special/ApprovalCard` | Approval queue item with preview and actions. | pending, approved, rejected |
| `Special/ComparisonView` | Side-by-side record comparison (dedup). | |
| `Special/MergeControl` | Per-field merge decision (keep left/right/both). | |
| `Special/PipelineColumn` | Kanban column in pipeline views. | |
| `Special/PipelineCard` | Draggable card in pipeline views. | |
| `Special/ImportMapper` | Column mapping interface for data import. | |
| `Special/FilterBar` | Active filter display with chips and clear action. | |
| `Special/FilterPanel` | Full-screen filter configuration (mobile). | |
| `Special/SavedFilterSelector` | Dropdown for selecting saved filters. | |
| `Special/RideRequestCard` | GOTV ride request display. | pending, assigned, complete |
| `Special/IssueReportForm` | Poll watcher issue reporting (offline-capable). | |

---

## Component Composition Patterns

### Compound Components

Some UI patterns are composed of multiple components working together:

| Pattern | Components |
|---------|------------|
| **List View** | `Layout/Page` + `Special/FilterBar` + `Data/Table` (desktop) or `Data/List` (mobile) + `Nav/Pagination` + `Data/EmptyState` |
| **Detail View** | `Layout/Page` + `Layout/Card` + `Data/KeyValue` + `Nav/Tabs` + `Data/Timeline` |
| **Form Page** | `Layout/Page` + `Form/FieldGroup` (multiple) + `Button/Primary` + `Button/Secondary` |
| **Dashboard** | `Layout/Page` + `Dashboard/WidgetGrid` + `Dashboard/Widget` (multiple) |
| **Split View** | `Layout/SplitView` + `Data/List` (left) + `Layout/DetailPanel` (right) |
| **Wizard** | `Layout/WizardShell` + `Nav/StepIndicator` + step-specific content + `Button/Primary` + `Button/Secondary` |

### Slot Pattern

Components that accept child content use a slot pattern:

```
Layout/Card
  └── [slot: default] → any content
  └── [slot: header] → title + actions
  └── [slot: footer] → footer content
```

This composability means fewer specialized components and more flexible reuse.

---

## Component Count Summary

| Category | Count | Notes |
|----------|-------|-------|
| Primitives | 8 | Foundation elements |
| Typography | 7 | Text rendering |
| Buttons | 8 | Interactive triggers |
| Forms | 16 | Data input |
| Layout | 12 | Structure |
| Navigation | 10 | Movement |
| Data Display | 12 | Data presentation |
| Feedback | 7 | Status communication |
| Overlays | 8 | Layered elements |
| Messaging | 7 | Chat-specific |
| Field Mode | 10 | Field-specific |
| Dashboard | 7 | Dashboard-specific |
| Specialized | 13 | Feature-specific |
| **Total** | **~125** | |

Approximately **125 components** compose the entire design system. This is a moderately large system — comparable to mature design systems like Carbon (IBM) or Polaris (Shopify), reflecting the platform's breadth.

---

## Open Questions

1. **Component documentation.** Should each component have a dedicated documentation page (like Storybook stories) from day one, or document as components are built? Storybook-first ensures components are well-tested in isolation but adds development overhead.

2. **Animation components.** Should the design system include transition wrapper components (FadeIn, SlideUp) or handle all motion through CSS classes? Component-based transitions are more explicit but add to the component count.

3. **Chart library.** Which chart library should the `Data/Chart` component wrap? Options include Chart.js (lightweight, canvas-based), D3 (powerful, SVG-based, heavier), or a Svelte-native option like LayerCake. The choice affects bundle size and customization depth.

<!-- REVISIT: Component APIs (prop definitions, event signatures, slot contracts) are deferred to implementation. This inventory defines *what* exists; the implementation defines *how* each component works. -->
