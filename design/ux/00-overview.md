# UX Design Overview

## Purpose

This directory contains the UX design artifacts for GreenGrass — a platform for managing grassroots political elections in the global south. The UX design phase follows the completion of 12 product specifications and a system architecture document.

The core UX challenge: 10 distinct personas across radically different contexts share one application. A volunteer knocking doors on a low-end Android phone in rural India needs a completely different interface than an Org Admin configuring compliance settings on a desktop in Puerto Rico. The UX must serve both without compromise.

## Reading Order

### Phase 1: Information Architecture

Start here. The IA documents define the global structure everything else hangs off of.

1. **[Navigation Model](01-information-architecture/navigation-model.md)** — How the platform organizes its features into a navigable structure. Defines the desktop shell (hybrid top bar + sidebar), mobile layout (bottom tabs), and field mode (full-screen takeover). The most critical IA document.

2. **[Screen Inventory](01-information-architecture/screen-inventory.md)** — Comprehensive catalog of every screen in the platform (~236 screens across 21 feature areas). Each entry identifies personas, offline capability, and mobile optimization. The master reference for wireframing and implementation scoping.

3. **[Persona Views](01-information-architecture/persona-views.md)** — How the platform renders differently for each of the 10 personas. Defines home screens, sidebar sections, mobile tabs, and what each persona *doesn't* see. The "role-adaptive UX" specification.

4. **[URL Structure](01-information-architecture/url-structure.md)** — Maps the screen inventory to SvelteKit routes. Defines six layout groups (public, auth, app, field-mode, portal, wizard), routing patterns, auth guards, and offline-capable routes.

### Phase 2: Global Patterns

Recurring UI patterns that apply across the entire platform.

5. **[Pattern Catalog](02-global-patterns/pattern-catalog.md)** — 20 recurring UI patterns: list views, detail views, builders, forms, wizards, dashboards, maps, check-in tools, field mode, and more. Cross-cutting concerns: empty states, loading, error states, accessibility.

6. **[Offline & Sync Patterns](02-global-patterns/offline-sync-patterns.md)** — Five connectivity states, data freshness indicators, pending changes queue, conflict resolution, pre-loading strategy, battery and data usage awareness, shift sync lifecycle.

7. **[Notification Patterns](02-global-patterns/notification-patterns.md)** — Notification center, four priority levels, delivery channels (in-app, push, email, SMS), per-persona defaults, email digests, election day notification behavior, Do Not Disturb.

8. **[Search Patterns](02-global-patterns/search-patterns.md)** — Global search with type-ahead, contextual search per feature area, filter patterns, saved searches, encryption constraints on search (BYOK tenants).

9. **[Settings & Help Patterns](02-global-patterns/settings-help-patterns.md)** — Three-tier settings hierarchy (org/feature/personal), contextual help panels, knowledge base, AI concierge, language switching, onboarding flows, keyboard shortcuts.

10. **[Security UX Patterns](02-global-patterns/security-ux-patterns.md)** — Duress mode sanitization rules per feature area, BYOK key generation ceremony, panic button behavior, passkey auth flows, session management, trusted contact recovery, device authorization.

### Phase 3: Design System Foundations

The visual and component foundations.

11. **[Foundations](03-design-system/foundations.md)** — 8px spacing scale, semantic color token system, Inter type scale, 4/8/12-column grid, elevation layers, border radius, Lucide iconography, motion tokens, z-index scale, density modes.

12. **[Theming Strategy](03-design-system/theming-strategy.md)** — Per-tenant branding (color + logo), automatic derivative color generation, CSS custom property cascade, RTL via CSS logical properties, dark mode token mapping, high contrast mode, large text mode, reduced motion, theme composition layers.

13. **[Component Inventory](03-design-system/component-inventory.md)** — ~125 components across 13 categories: primitives, typography, buttons, forms, layout, navigation, data display, feedback, overlays, messaging, field mode, dashboard, specialized. Naming conventions, state definitions, composition patterns.

14. **[Responsive Strategy](03-design-system/responsive-strategy.md)** — Five breakpoints (640/768/1024/1280/1536px), mobile-first CSS, component adaptation tables, Capacitor native API usage, safe areas, performance budgets (150KB JS, 2s FCP on 3G), code splitting strategy, testing matrix.

### Phase 4: Wireframes

Detailed screen specifications with ASCII wireframes for key screens and flows. Implementation-ready.

15. **[Navigation Shell](04-wireframes/navigation-shell/navigation-shell.md)** — Desktop shell (sidebar expanded/collapsed, detail panel, notification drawer, RTL), mobile shell (per-persona tab bars, hamburger menu, "More" bottom sheet), field mode shell (walk list, door card, map, shift lifecycle), wizard shell, supporter portal shell. Responsive breakpoint transitions, interaction specs, accessibility notes.

16. **[Dashboards](04-wireframes/dashboards/dashboards.md)** — Campaign Overview (Org Admin), Field Operations (Field Director), Fundraising (Finance Director), GOTV War Room (election day, auto-refresh, dark mode), Candidate Dashboard (curated/simplified), Volunteer Dashboard, Team Lead Dashboard. Empty states, loading skeletons.

17. **[Field Mode](04-wireframes/field-mode/field-mode.md)** — Complete shift lifecycle: pre-shift check, walk list (list + map views), door card with script and response capture, follow-up questions, "Not Home" quick result. Phone banking variant, voter registration variant, GOTV door card, ride request flow. End shift confirmation, sync screen, debrief. Crash recovery. Touch target specifications.

18. **[Onboarding](04-wireframes/onboarding/onboarding.md)** — Org Setup wizard (5 steps: auth, org profile, team invites, configuration, review & launch), Volunteer Onboarding (4 steps: account, tour, training, ready), BYOK Key Generation wizard (5 steps with Shamir's Secret Sharing). Post-wizard "Getting Started" checklist.

19. **[Messaging](04-wireframes/messaging/messaging.md)** — Desktop split view (conversation list + thread), mobile full-screen flows, compose, candidate briefings (structured/formatted), approval requests (approve/reject/comment inline), War Room channel (election day, system alerts, issue reports), offline messaging, encryption indicators.

20. **[Supporter Portal](04-wireframes/supporter/supporter-portal.md)** — Public donation page (pre-auth, tenant-branded), donation confirmation, portal home, donation history with recurring management, events with RSVP, communication preferences, public event page. Magic link + full account authentication tiers.

## UX Principles

These principles guide all design decisions for GreenGrass.

### 1. The volunteer in the field comes first

Every design decision is pressure-tested against the hardest user: a volunteer on a low-end Android phone with intermittent connectivity, walking door-to-door in a rural area. If a pattern doesn't work for them, it doesn't ship. Desktop admin interfaces are important but must never compromise the field experience.

### 2. Invisible complexity

10 personas share one application, but no user should feel the weight of the others. Features outside a user's access are absent — not greyed out, not hidden behind permission dialogs, but truly invisible. The Volunteer sees a simple, focused app. The Org Admin sees a full-featured platform. Neither knows the other's view exists.

### 3. Offline is not an error state

Offline mode is a first-class operating condition, not a degraded fallback. The UI should communicate connectivity status clearly but never make the user feel that they're using a broken version of the app. Field operations work fully offline. Data syncs when it can.

### 4. Stability over dynamism in navigation

The navigation structure stays stable regardless of connectivity, context, or time of day. Items don't appear and disappear as conditions change. Offline-unavailable features are greyed out with a badge, not removed. Users build muscle memory for where things are — that memory must be reliable.

### 5. Security is invisible until it matters

The security architecture (5-tier model, BYOK encryption, passkey auth, duress mode) is substantial, but users shouldn't feel its weight during normal operation. Login should be one tap (passkey). Encryption should be automatic. Security surfaces (audit trail, key management, duress mode) are available but not prominent. The exception: when security *needs* attention (compromised passkey, key rotation, active threat), the UI must be unambiguous and direct.

### 6. Respect the device

Mobile is not a shrunken desktop. Mobile screens are designed for mobile — large touch targets, vertical scrolling, one-handed operation. Desktop screens use the space — data tables, side-by-side panels, drag-and-drop. The same feature may have significantly different interfaces on each platform, and that's correct.

### 7. RTL is structural, not decorative

Right-to-left support is built into every layout decision from day one, not retrofitted. Sidebar position, tab bar order, icon direction, text alignment, breadcrumb direction — all defined in terms of logical properties (`inline-start`/`inline-end`), not physical ones (`left`/`right`).

### 8. Election day is a different app

When GOTV operations activate, the platform transforms. Dashboards change, notification priorities shift, new screens appear, field mode switches to GOTV-specific flows. This transformation is designed, not improvised — it's part of the navigation model and persona views.

## Glossary

| Term | Definition |
|------|------------|
| **Field mode** | Full-screen mobile takeover for active shift work (canvassing, phone banking, voter registration, GOTV). Replaces the normal navigation shell entirely. |
| **Navigation shell** | The persistent UI frame around content: header bar, sidebar (desktop), bottom tab bar (mobile). |
| **Role template** | A named collection of permissions and navigation items assigned to a user. Determines what the user sees. |
| **Persona** | One of 10 archetypal users: Org Admin, Communications Director, Finance Director, Field Director, Volunteer Coordinator, Data Manager, Volunteer, Team Lead, Candidate, Supporter. |
| **Layout group** | A SvelteKit routing concept: routes grouped under a shared layout without affecting the URL. GreenGrass uses six: `(public)`, `(auth)`, `(app)`, `(field-mode)`, `(portal)`, `(wizard)`. |
| **Universal chrome** | UI elements present in all navigation contexts (except field mode): sync indicator, notification bell, user menu, language switcher, help access. |
| **Detail panel** | A contextual right panel on desktop that shows additional information without navigating away (e.g., viewing a contact while browsing a list). |
| **Duress mode** | A security feature where logging in with a special passkey shows a sanitized version of the platform with plausible but scrubbed data. |
| **War room** | The real-time GOTV operations center active on election day. Includes turnout tracking, resource reallocation, issue escalation, and communication coordination. |
| **Alliance** | A federation of sovereign organizations sharing resources, coordinating campaigns, and splitting fundraising through explicit sharing rules. |
| **GOTV** | Get Out The Vote — election day operations focused on ensuring identified supporters actually vote. |

## Cross-References to Specs

| UX Concept | Primary Spec | Key Sections |
|------------|-------------|--------------|
| Personas and roles | `spec/users.md` | All 10 personas, role templates, permissions |
| Core workflows | `spec/workflows.md` | 12 workflows: canvassing, fundraising, events, etc. |
| Security UX | `spec/security.md` | 5-tier model, duress mode, passkey auth, BYOK |
| Offline behavior | `design/architecture/system.md` | Sync protocol, offline DB, conflict resolution |
| Election day ops | `spec/gotv.md` | War room, turnout tracking, GOTV canvassing |
| Messaging | `spec/messaging.md` | DMs, groups, broadcasts, E2E encryption |
| Fundraising UX | `spec/fundraising.md` | Donation forms, donor portal, compliance |
| Communications | `spec/workflows.md` + `spec/press.md` | Email, SMS, social media, press |
| Localization | `spec/geography.md` | 5 target countries, RTL, multilingual |
| Support & help | `spec/support.md` | 8 onboarding wizards, knowledge base, concierge |
| Compliance | `spec/compliance.md` | Campaign finance, data protection, consent |
| System architecture | `design/architecture/system.md` | SvelteKit + Capacitor, API-first, tenant isolation |

## Design Decisions

UX-specific decisions are recorded in `decisions/ux-decisions.md` (to be created as decisions arise during Phases 2-4).

Key decisions already made during Phase 1 IA work:

| Decision | Choice | Document |
|----------|--------|----------|
| Desktop navigation paradigm | Hybrid: top bar (context) + sidebar (features) | navigation-model.md |
| Role stacking in navigation | Grouped sections with collapsible headers | navigation-model.md |
| Alliance navigation | Dedicated alliance section in sidebar | navigation-model.md |
| Duress mode navigation | Sanitized real structure with scrubbed data | navigation-model.md |
| Offline feature degradation | Grey out with offline badge (stable navigation) | navigation-model.md |
