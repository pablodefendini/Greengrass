# Settings & Help Patterns

## Purpose

This document defines the UX patterns for platform settings, contextual help, the knowledge base, language switching, and onboarding flows. These are the support structures that help users configure the platform and find answers when they're stuck.

## Settings Architecture

### Settings Hierarchy

Settings are organized in three tiers:

| Tier | Scope | Who Configures | Where |
|------|-------|----------------|-------|
| **Organization** | Applies to all users in the tenant | Org Admin | `/settings/*` |
| **Feature** | Applies to a specific feature area | Feature-area owner | Within the feature area |
| **Personal** | Applies to the individual user | Each user | `/profile/*` |

### Organization Settings

Accessed via the Settings section in the sidebar (Org Admin only). Organized in collapsible groups:

```
Settings
├── Org Profile & Branding        # Name, logo, languages, branding
├── Roles & Permissions            # Role templates, permission overrides
│   ├── Role Template Editor
│   └── Staff Management
├── Campaign                       # Campaign period, geographic scope
│   ├── Campaign Period
│   └── Geographic Scope
├── Compliance                     # Contribution limits, disclaimers, retention
│   ├── Contribution Limits
│   ├── Disclaimers
│   └── Data Retention
├── Integrations                   # Third-party connections
│   ├── WhatsApp Business
│   ├── SMS Provider
│   ├── Email Domain
│   ├── Social Media Accounts
│   └── Webhooks
├── Payments                       # Payment processor configuration
├── Security                       # Encryption, security tier, audit trail
│   ├── Encryption Key Management
│   ├── Security Settings
│   └── Audit Trail
├── Developer                      # API keys, webhooks
│   ├── API Keys
│   └── Webhook Configuration
└── Billing                        # Subscription, payment method
```

### Feature Settings

Settings scoped to a specific feature area are accessed within that feature, not in the global settings:

- **Communication preferences** (consent management, unsubscribe rules) → within Communications
- **Fundraising form defaults** (suggested amounts, recurring options) → within Fundraising
- **Field scripts** (default scripts, response options) → within Field
- **Social media accounts** → within Social Media (also accessible from Settings > Integrations)

This avoids a monolithic settings page. Feature settings live where the feature lives.

### Personal Settings

Accessed via the user profile menu (available to all users):

```
Profile
├── Personal Profile              # Name, avatar, contact info
├── Notification Preferences      # Per-source notification configuration
├── Security                      # Passkey management, trusted contacts
├── Language                      # UI language preference
└── Tenant Switcher               # For multi-tenant users
```

### Settings UX Pattern

All settings screens share a consistent layout:

```
┌──────────────────────────────────────────────────────┐
│  Settings > [Section Name]                            │
├──────────────────────────────────────────────────────┤
│                                                       │
│  ▾ [Group Name]                                       │
│    ┌─────────────────────────────────────────────┐    │
│    │ Setting Label             [value / control]  │    │
│    │ Help text explaining what this setting does  │    │
│    │                                              │    │
│    │ Setting Label *           [value / control]  │    │
│    │ Help text (required setting)                 │    │
│    └─────────────────────────────────────────────┘    │
│                                                       │
│  ▸ [Another Group]                                    │
│                                                       │
├──────────────────────────────────────────────────────┤
│  Last modified: Jan 15, 2026 by admin@org.org        │
│  [Cancel]                                     [Save]  │
└──────────────────────────────────────────────────────┘
```

**Behaviors:**
- Collapsible groups — one expanded at a time (accordion pattern)
- Help text on every setting — brief explanation of what it does and why
- Change tracking — "Last modified by X on Y" footer
- Unsaved changes warning — confirmation dialog if navigating away with changes
- Validation — inline, per-field, with clear error messages
- Smart defaults — pre-filled where possible, clearly labeled as defaults

---

## Help & Support System

### Help Access Points

Help is accessible from multiple entry points, consistent with the universal chrome pattern:

1. **Sidebar footer** (desktop) — "Help" link opens the help panel
2. **User menu** (mobile) — "Help & Support" item
3. **"?" icon** — floating help icon on complex screens, opens contextual help
4. **Empty states** — "Learn more" links in empty state messages
5. **Setting help text** — "Why is this required?" expandable help on compliance settings
6. **Wizard steps** — inline help within each wizard step

### Contextual Help

When a user clicks "?" or the "Help" link on a specific screen, the system checks for contextual help content for that screen:

```
┌──────────────────────────────────────────────────────┐
│  Help: Segment Builder                    [✗ Close]  │
├──────────────────────────────────────────────────────┤
│                                                       │
│  Segments let you define groups of contacts           │
│  based on criteria. Use them to target                │
│  communications, filter reports, and assign           │
│  volunteers.                                          │
│                                                       │
│  Quick Start:                                         │
│  1. Choose a criteria field (e.g., "Support Score")   │
│  2. Set the condition (e.g., "greater than 3")        │
│  3. Click "Preview" to see matching contacts          │
│  4. Save your segment                                 │
│                                                       │
│  [📖 Full article: Building Segments →]               │
│  [💬 Ask AI Concierge →]                              │
│                                                       │
└──────────────────────────────────────────────────────┘
```

**Desktop:** Contextual help opens as a slide-out panel from the right (doesn't obscure the main content).
**Mobile:** Contextual help opens as a bottom sheet (half-screen) or full-screen article.

### Knowledge Base

Accessed at `/help`. A searchable library of help articles organized by feature area.

```
┌──────────────────────────────────────────────────────┐
│  Help Center                                          │
├──────────────────────────────────────────────────────┤
│  [Search help articles...]                            │
├──────────────────────────────────────────────────────┤
│                                                       │
│  Getting Started                                      │
│  ├── Setting up your organization                     │
│  ├── Inviting staff members                           │
│  ├── Configuring compliance settings                  │
│  └── Your first donation form                         │
│                                                       │
│  People & CRM                                         │
│  ├── Importing voter files                            │
│  ├── Building segments                                │
│  ├── Deduplication                                    │
│  └── Data quality                                     │
│                                                       │
│  Field Operations                                     │
│  ├── Creating canvassing campaigns                    │
│  ├── Cutting turfs                                    │
│  ├── Building scripts                                 │
│  └── Volunteer field mode guide                       │
│                                                       │
│  ... (more categories)                                │
│                                                       │
└──────────────────────────────────────────────────────┘
```

**Behaviors:**
- **Search** — full-text search across all help articles. Results ranked by relevance.
- **Categorized** — organized by feature area, matching the sidebar structure.
- **Role-filtered** — articles are tagged with relevant personas. A Volunteer sees volunteer-relevant articles first; an Org Admin sees admin-relevant articles.
- **Multilingual** — articles are available in the tenant's configured languages. Falls back to English if a translation doesn't exist.
- **Partially offline** — previously viewed articles are cached for offline reading.

### AI Concierge

Accessed at `/help/chat` or via the "Ask AI Concierge" link in help panels. A conversational AI assistant that can answer questions about the platform.

```
┌──────────────────────────────────────────────────────┐
│  AI Concierge                              [✗ Close] │
├──────────────────────────────────────────────────────┤
│                                                       │
│  How can I help?                                      │
│                                                       │
│  ┌────────────────────────────────────────────────┐   │
│  │  You: How do I set up contribution limits for  │   │
│  │       Puerto Rico?                             │   │
│  └────────────────────────────────────────────────┘   │
│                                                       │
│  ┌────────────────────────────────────────────────┐   │
│  │  Concierge: Puerto Rico contribution limits    │   │
│  │  are configured in Settings > Compliance >     │   │
│  │  Contribution Limits. For Puerto Rico,         │   │
│  │  individual limits are $2,900...               │   │
│  │                                                │   │
│  │  [Go to Contribution Limits →]                 │   │
│  │  [Read full article: PR Compliance →]          │   │
│  └────────────────────────────────────────────────┘   │
│                                                       │
│  [Type your question...]                    [Send]    │
└──────────────────────────────────────────────────────┘
```

**Behaviors:**
- **Context-aware** — the concierge knows which screen the user is currently on and can provide contextual guidance.
- **Links to actions** — responses include direct links to relevant screens and knowledge base articles.
- **Escalation** — if the concierge can't resolve the question, it offers to create a support ticket (for tenants with premium support).
- **Requires connectivity** — not available offline (AI inference needs server).
- **Conversation history** — previous conversations are saved and accessible in the chat interface.

---

## Language Switching

### Language Preference

Each user sets their preferred UI language. This affects:
- All UI text (labels, buttons, navigation, help text)
- System-generated messages (notifications, error messages)
- Knowledge base article language selection

It does **not** affect:
- User-generated content (notes, messages, canvassing responses stay in the language they were written in)
- Record data (a contact's name and address are stored as entered)
- Compliance disclaimers (these are configured per jurisdiction, not per user language)

### Language Switcher Location

- **Desktop:** Accessible from the sidebar footer and the user profile menu.
- **Mobile:** Accessible from the user profile menu.

### Switching Behavior

```
┌──────────────────────────────────────┐
│  Language                            │
│                                      │
│  ● English                           │
│  ○ Español                           │
│  ○ Português                         │
│  ○ ไทย                               │
│  ○ हिन्दी                              │
│  ○ العربية                           │
│                                      │
│  Available languages are configured  │
│  by your organization.               │
└──────────────────────────────────────┘
```

- **Immediate switch** — selecting a language updates the UI immediately (no page reload needed — SvelteKit reactivity handles this)
- **Persisted** — language preference is saved to the user's profile (server-side), so it persists across devices
- **Available languages** — determined by the tenant's configuration (not all languages are available for every tenant)
- **RTL handling** — selecting Arabic (`العربية`) flips the entire layout to RTL (sidebar moves right, text alignment flips, directional icons mirror)

---

## Onboarding Flows

### First-Run Experience

When a user logs in for the first time, they see a brief, role-specific welcome:

```
┌──────────────────────────────────────────────────────┐
│                                                       │
│  Welcome to GreenGrass, Maria!                        │
│                                                       │
│  You're set up as a Field Director.                   │
│  Here's where to start:                               │
│                                                       │
│  1. Set up your first canvassing campaign             │
│  2. Cut turfs for your volunteers                     │
│  3. Build a canvassing script                         │
│                                                       │
│  [Get Started]              [Explore on my own]       │
│                                                       │
└──────────────────────────────────────────────────────┘
```

**Persona-specific first actions:**

| Persona | First Actions |
|---------|--------------|
| Org Admin | Complete org setup wizard → configure compliance → invite staff |
| Communications Director | Connect email domain → create first email template → build a segment |
| Finance Director | Set up payment processor → configure contribution limits → create first donation form |
| Field Director | Create first canvassing campaign → cut turfs → build a script |
| Volunteer Coordinator | Set up training modules → create volunteer onboarding → create first event |
| Data Manager | Import voter file → review dedup queue → check data quality |
| Volunteer | Complete onboarding wizard → view first shift → start training |
| Team Lead | Same as Volunteer, plus: view your team |
| Candidate | Review dashboard → set up public profile → check pending approvals |
| Supporter | Review profile → check donation history → update preferences |

### Onboarding Wizard Flows

Detailed wizard flows are defined in the screen inventory (WIZ-001 through WIZ-008). Key UX patterns:

- **Wizard replaces sidebar** — during a wizard, the sidebar shows wizard step names instead of normal navigation
- **Progress indicator** — step N of M, with completed/current/remaining visual
- **Save & exit** — user can leave and resume later (progress saved server-side)
- **Step validation** — each step validates before allowing progression
- **Completion celebration** — final step shows a success message with clear next actions
- **Post-wizard checklist** — after completing a wizard, the dashboard shows a "Getting Started" checklist with remaining setup tasks

### Progressive Disclosure in Settings

For first-time setup, the platform uses progressive disclosure:

1. **Required settings first** — compliance-required settings (contribution limits, disclaimers) are presented in the wizard
2. **Recommended settings highlighted** — optional but recommended settings are highlighted in the settings panel with a "Recommended" badge
3. **Advanced settings hidden** — rarely-used settings (API keys, webhooks, audit trail retention) are in collapsed sections

---

## Tooltips and Inline Help

### Tooltip Pattern

Brief contextual help attached to specific UI elements:

```
┌─────────────────────────────────────┐
│  Support Score [?]   [4 ▾]          │
│                                     │
│  ┌─────────────────────────────┐    │
│  │ A score from 1-5 indicating │    │
│  │ this contact's likelihood   │    │
│  │ of supporting your          │    │
│  │ candidate/cause.            │    │
│  │                             │    │
│  │ 5 = Strong supporter        │    │
│  │ 1 = Strong opponent         │    │
│  │                             │    │
│  │ [Learn more →]              │    │
│  └─────────────────────────────┘    │
│                                     │
└─────────────────────────────────────┘
```

**Behaviors:**
- **Trigger** — hover (desktop) or tap (mobile) on the "?" icon
- **Dismiss** — click/tap outside, or move to another element
- **Link** — "Learn more" links to the relevant knowledge base article
- **Positioning** — tooltip appears above or below the element, never obscuring the field it describes
- **No tooltips on mobile for essential info** — if the information is essential, it should be visible inline on mobile (not hidden behind a tap target)

### Form Help Text

Static help text below complex form fields:

```
│  Contribution Limit *        [$2,900    ]  │
│  Maximum individual contribution per       │
│  election cycle for your jurisdiction.      │
│  [Why is this required? →]                 │
```

- Always visible (not on-hover)
- Brief — one line preferred, two maximum
- Links to detailed explanations where needed

---

## Keyboard Shortcuts

### Available Shortcuts

| Shortcut | Action | Context |
|----------|--------|---------|
| `/` or `Cmd+K` | Focus global search | Any screen |
| `Esc` | Close modal/panel/search | Any screen |
| `?` | Open keyboard shortcut reference | Any screen |
| `G then D` | Go to Dashboard | App shell |
| `G then M` | Go to Messages | App shell |
| `G then P` | Go to People | App shell |
| `G then S` | Go to Settings | App shell (Org Admin) |
| `N` | New (context-dependent: new contact, new event, etc.) | List views |
| `J` / `K` | Navigate up/down in lists | List views |
| `Enter` | Open selected item | List views |

### Shortcut Discovery

- **"?" key** — opens a shortcut reference overlay
- **First-time hint** — on first visit, a subtle hint appears: "Press ? for keyboard shortcuts"
- **Not critical** — shortcuts are power-user features. The platform is fully functional without them.

---

## Open Questions

1. **In-app announcements.** Should the platform have a mechanism for platform-level announcements (new features, maintenance windows, security advisories)? These would appear as a banner or notification, distinct from user-to-user notifications.

2. **Guided tours.** Beyond the first-run welcome, should the platform offer guided tours of specific features? ("New: Social Media Post Scheduling — take a quick tour?") These can be helpful but also annoying. Consider opt-in only.

3. **Help article feedback.** Should knowledge base articles have a "Was this helpful?" mechanism? Useful for improving documentation but adds UI complexity.

<!-- REVISIT: The knowledge base content itself needs to be written as features are built. This document defines the patterns for accessing and displaying help content, not the content itself. -->
