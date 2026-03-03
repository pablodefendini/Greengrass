# Wireframes

## Contents

| Directory | Document | Description |
|-----------|----------|-------------|
| `navigation-shell/` | `navigation-shell.md` | Desktop shell (sidebar expanded/collapsed, detail panel, notification drawer), mobile shell (all persona tab bars, hamburger menu, "More" bottom sheet), field mode shell, wizard shell, supporter portal shell. RTL variants. Responsive transitions. |
| `dashboards/` | `dashboards.md` | Campaign Overview (Org Admin), Field Operations (Field Director), Fundraising (Finance Director), GOTV War Room, Candidate Dashboard, Volunteer Dashboard, Team Lead Dashboard. Empty and loading states. |
| `field-mode/` | `field-mode.md` | Complete shift lifecycle: start flow, walk list, door card (canvassing + GOTV), phone bank variant, voter registration, map view, end shift + debrief, crash recovery. Touch target specs. |
| `onboarding/` | `onboarding.md` | Org Setup wizard (5 steps), Volunteer Onboarding (4 steps), BYOK Key Generation wizard (critical security flow). Post-wizard checklist. |
| `messaging/` | `messaging.md` | Desktop split view, mobile conversation list + thread, compose flow, candidate briefings, approval requests, War Room channel (election day), offline messaging, encryption indicators. |
| `supporter/` | `supporter-portal.md` | Public donation page (pre-auth), donation confirmation, portal home, donation history + recurring management, events + RSVP, preferences, public event page. |

## Format

These wireframes are written as detailed ASCII specifications — implementation-ready screen descriptions with box-drawing wireframes, state definitions, interaction specs, and responsive behavior notes.

They serve as the bridge between the design system foundations (Phase 3) and visual design. Each document can be directly translated into high-fidelity mockups in Paper or Figma, or used as specs for component implementation.

## Reading Order

1. **Navigation shell first** — the global frame everything lives inside
2. **Dashboards** — each persona's home screen
3. **Field mode** — the highest-risk UX, most detailed wireframes
4. **Onboarding** — first impressions for new users
5. **Messaging** — internal coordination
6. **Supporter portal** — public-facing donor experience

## Cross-References

- Navigation structure: `01-information-architecture/navigation-model.md`
- Per-persona views: `01-information-architecture/persona-views.md`
- UI patterns: `02-global-patterns/pattern-catalog.md`
- Design tokens: `03-design-system/foundations.md`
- Component names: `03-design-system/component-inventory.md`
- Responsive behavior: `03-design-system/responsive-strategy.md`
