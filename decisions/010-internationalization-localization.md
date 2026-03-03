# ADR-010: Internationalization & Localization

**Status:** Accepted
**Date:** 2026-03-03
**Sources:** `spec/geography.md`, `design/architecture/system.md`, `design/ux/03-design-system/theming-strategy.md`, `spec/integrations.md`

## Context

GreenGrass must support seven languages across five countries spanning three scripts (Latin, Thai, Devanagari) and two text directions (LTR and RTL for Arabic). The language surface expands with each pilot: Spanish/English for alpha, Portuguese for Brazil, Thai for Thailand, Hindi + regional languages for India, Arabic/French/English for Lebanon. RTL support is not needed until Pilot 4 (Lebanon), but retrofitting RTL into a mature LTR UI is significantly more expensive than building bidirectional support from the start.

Electoral boundary data — districts, precincts, constituencies — is foundational for canvassing and GOTV but fragmented and hard to access in the global south. Each country has a completely different administrative geography and data availability.

## Decision

### RTL and multilingual from day one

Bidirectional text support is built into the UI framework from the start, even though Arabic isn't needed until Pilot 4. Every component, every layout, every interaction pattern is designed for both LTR and RTL rendering.

**Alternatives considered:** Adding RTL when needed (Pilot 4) was rejected because retrofitting RTL into a mature application is significantly more expensive than building it from the start. Separate RTL builds were considered but rejected as unmaintainable.

### RTL via CSS logical properties

A single stylesheet handles both text directions using CSS logical properties (`inline-start`/`inline-end`, `text-align: start`). No duplicate stylesheets, no direction-specific CSS files. The `dir` attribute on the HTML root controls the entire layout direction.

Specific elements are exempted from RTL flipping: phone numbers, email addresses, URLs, currency amounts, code snippets, map interfaces, media playback controls, and checkmarks — these always render LTR regardless of UI direction. Directional icons (arrows, navigation chevrons) mirror automatically in RTL.

**Alternatives considered:** Duplicate LTR/RTL stylesheets were rejected because they double maintenance cost and introduce drift. JavaScript-based RTL transformation was rejected as fragile and slow.

### AI-assisted localization with human review

AI generates initial translations across all supported languages. Human reviewers approve translations before they go live. Critical flows — security prompts, legal text, donation forms, consent language — require human sign-off. Local campaign teams can contribute corrections through an in-platform review interface. Translation memory accumulates reviewed translations to improve consistency over time.

Both UI localization (buttons, labels, navigation, system messages) and content localization (email templates, canvassing scripts, donation form text) are supported. Content objects store multiple language variants, and the AI-assisted pipeline helps staff generate translations of their campaign content.

**Alternatives considered:** Professional translation services only were rejected as too slow and expensive for the breadth of languages needed. AI-only without human review was rejected because security prompts, legal text, and consent language are too high-stakes for unreviewed machine translation.

### Hybrid GreenGrass-maintained + tenant-imported electoral boundary data

GreenGrass acquires, cleans, and maintains curated electoral boundary datasets for all five target countries, updated each election cycle. Tenants in other countries import their own data using platform import tools (GeoJSON, Shapefile, KML). Community contribution model lets tenants share imported datasets back to GreenGrass for inclusion in the curated library.

Internal storage format is GeoJSON (standard, well-supported, human-readable). WGS 84 coordinate system (standard GPS coordinates, universal).

**Alternatives considered:** Tenant-import-only was rejected because acquiring and cleaning electoral boundary data requires GIS expertise most campaigns don't have, and fragmented data across tenants means duplicated effort. GreenGrass-maintained-only was rejected because it doesn't scale to countries beyond the initial five.

## Consequences

**Benefits:**
- RTL from day one means Arabic support in Pilot 4 is a content task, not an engineering project
- Single stylesheet via logical properties eliminates maintenance overhead of direction-specific CSS
- AI-assisted translation with human review balances speed/cost across seven languages with quality assurance for critical flows
- Curated electoral boundary data removes a major adoption barrier for campaigns in the global south where this data is hard to access

**Costs:**
- RTL-first design adds complexity to every UI component, even before Arabic is needed
- AI translation requires infrastructure (model hosting or API costs) and ongoing human review capacity
- Maintaining electoral boundary datasets for five countries is ongoing geographic data work, updated per election cycle
- Content localization means every content-authoring surface needs multi-language variant support

**Constraints:**
- Every UI component must be tested in both LTR and RTL modes
- Translation quality for legal/security/consent text must meet the same standard as professionally translated content
- Electoral boundary data imports must handle the variety of source formats and coordinate systems found in the global south
- Content language selection cascades: recipient preference → volunteer setting → browser/device language → manual override

**Related ADRs:** [ADR-011](011-design-system-ux.md) (system font stack for script coverage, CSS logical properties), [ADR-006](006-field-operations-gotv.md) (electoral boundary data for turf management), [ADR-009](009-compliance-legal.md) (localized consent notices, jurisdiction-specific legal text)
