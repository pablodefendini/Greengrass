# UX Decisions — Wireframe Phase

**Status:** Accepted
**Date:** 2026-03-03
**Sources:** `design/ux/04-wireframes/audit.md`, all 21 wireframe documents

## Purpose

This document records UX decisions made during the wireframing phase (Phase 4) and the subsequent audit. These decisions establish conventions for wireframe structure, design token usage, offline specification, and terminology. They complement the architectural decisions in `decisions/011-design-system-ux.md`.

---

## Decision 1: Wireframe Document Structure

### Standard 8-Section Template

All wireframe documents must follow this structure:

1. **Purpose** — What the feature area does, who it serves
2. **Scope** — Table mapping all screen IDs to screen names, personas, offline status, mobile context, and in-document section
3. **Navigation Context** — How the feature appears in the sidebar/tabs for its primary persona
4. **Screen Wireframes** — One `## ID: Screen Name` section per screen, each with Desktop/Mobile wireframes, Interaction Specs, and Design Notes
5. **Empty States Summary** — Consolidated empty/zero-data states for all screens
6. **Accessibility Notes** — Feature-specific accessibility considerations
7. **Design Decisions** — Table of key decisions with choice and rationale
8. **Open Questions** — Unresolved questions for future phases

### Exceptions

- **Navigation shell** uses "Shell Variants" instead of "Scope" (it has no screen IDs — it is the frame around all screens)
- **Field mode** preserves its flow-based organization (Shift Start → Walk List → Door Card → ...) with screen IDs added as HTML comment annotations rather than section headings
- **Messaging** organizes by UI pattern (split view, compose, briefings) with screen IDs as HTML comment annotations
- Documents where "Navigation Context" is not applicable (navigation-shell, field-mode, alliance) may omit or adapt this section

### Rationale

The 12 later-batch documents naturally converged on this structure. Normalizing the 9 early-batch documents to match ensures any document can be read with the same expectations. The structure also maps directly to implementation needs: Scope tables drive route planning, Navigation Context drives sidebar configuration, Design Decisions drive component specs.

---

## Decision 2: Design Token Integration Approach

### Annotate only where load-bearing — not globally

Wireframe documents should reference design token names only where the specific value is critical to the design's correctness:

1. **Touch targets in field mode** — `--touch-target-min: 48px` and `--touch-target-field: 56px` are safety-critical values. Reference by name.
2. **Spacing that deviates from defaults** — When a wireframe intentionally uses non-standard spacing, reference the token to signal intent.
3. **Color semantics** — Where the meaning (success/error/warning) matters more than the appearance, reference `--color-success`, `--color-error`, `--color-warning`.

Do **not** globally annotate all 21 wireframe documents with token names for every pixel value and color reference. This would add noise without improving wireframe clarity.

### Rationale

Wireframes serve as implementation-ready screen descriptions — they are read by designers and developers. Raw values (`16px`, `24px`) are more immediately understandable in a wireframe context than token names (`--space-4`, `--space-6`). Comprehensive token annotation belongs in the visual design phase (high-fidelity mockups) and the component implementation phase. The wireframes already follow the design system's spacing scale and color semantics implicitly.

---

## Decision 3: Offline Behavior Specification

### Every screen must declare its offline status

The Scope table in each wireframe document must include an "Offline" column declaring one of:

- **Yes** — Fully functional offline
- **Partial** — Some functionality available offline (specific behavior described in wireframe)
- **No** — Requires connectivity; shows cached data or offline indicator

### Even "No" is a decision

Most admin screens are genuinely online-only — they display server-aggregated data (dashboards), perform server-side operations (imports, exports), or configure shared state (settings). Declaring `Offline: No` is not a gap — it's a correct and intentional specification. Implementers should not have to guess.

### Offline-capable screens require explicit detail

Any screen marked `Yes` or `Partial` must describe:
- What data is pre-cached
- What actions are available offline
- How offline changes sync when connectivity returns
- What the UI looks like during sync

Field mode (`field-mode.md`) is the exemplar for offline specification. The offline sync patterns in `02-global-patterns/offline-sync-patterns.md` define the framework.

### Rationale

The wireframe audit found that early-batch documents did not declare offline status at all, creating ambiguity for implementers. Since offline-first is a core platform principle, every screen needs an explicit declaration — even if the answer is "this screen doesn't work offline."

---

## Decision 4: Terminology Conventions

### Canonical Terms

| Term | Definition | Use Context |
|------|-----------|-------------|
| **Contact** | Any person in the CRM database | CRM, data import, segments, any context referring to the data record |
| **Supporter** | A person who has taken a public action (donated, signed a petition, RSVPed, volunteered) | Supporter portal, public pages, activism, any user-facing context |
| **Donor** | A supporter who has made a financial contribution | Fundraising reports, compliance, receipts, tax statements |
| **Staff** | An authenticated user with an organizational role template | Settings, permissions, onboarding, audit trail |
| **Volunteer** | A staff member with the Volunteer role template | Field mode, shift management, training |

### Hierarchy

"Donor" ⊂ "Supporter" ⊂ "Contact"

Use the most specific applicable term. A person who donated is a "donor" in fundraising context, a "supporter" in the portal, and a "contact" in the CRM.

### Application

- Fix terminology only in sections actively being modified during structural normalization or when adding new wireframes
- No global search-and-replace across all 21 documents
- Record these canonical terms here as the reference; enforce during visual design and implementation

### Rationale

The audit found "supporter," "donor," and "contact" used interchangeably in some wireframe documents. While context usually disambiguates, the terms have distinct meanings in the data model (a Contact may have zero interactions; a Supporter has at least one; a Donor has at least one financial interaction). Establishing canonical definitions now prevents confusion during implementation.

---

## Decision 5: Screen ID Assignment

### Every wireframed screen must have a screen ID from `screen-inventory.md`

Screen IDs follow the format `AREA-NNN` (e.g., `CANV-007`, `FUND-001`, `AUTH-003`). They are:
- The primary cross-reference between wireframes, screen inventory, URL structure, and implementation
- Stable across document edits — once assigned, a screen ID does not change
- Used as `## ID: Screen Name` section headings in wireframe documents

### Exceptions

- **Navigation shell variants** (desktop expanded, collapsed, mobile, field mode, etc.) are structural frames, not individual screens. They do not receive screen IDs.
- **Documents organized by flow** (field-mode, messaging) may use HTML comment annotations (`<!-- CANV-007 -->`) instead of screen ID headings when the flow-based organization is more natural.

### Rationale

The audit found 25 screens with wireframe content but no screen ID headings. Screen IDs are the glue between documents — the cross-reference index in `README.md` depends on them. Adding IDs to all wireframed screens enables reliable traceability from spec to implementation.
