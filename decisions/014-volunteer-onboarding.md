# ADR-014: Volunteer & Onboarding

**Status:** Accepted
**Date:** 2026-03-03
**Sources:** `spec/workflows.md`, `spec/support.md`

## Context

Volunteers are the largest user group and the most variable in technical literacy and device capability. The journey from "I want to help" to "I'm ready to canvass" must be fast enough to retain volunteer enthusiasm while thorough enough to ensure volunteers can use the tools effectively and safely. Campaigns in high-threat environments also need training gates — a volunteer who hasn't completed canvassing training shouldn't be given a walk list with voter data.

The tenant support surface is broad: payment processor setup, WhatsApp Business verification, BYOK key management, compliance configuration, voter file import — tenants need guided help at every turn, and the platform must handle this at scale across five countries and seven languages.

## Decision

### Full onboarding module with training

The platform provides a built-in onboarding and training system, not just tooltips:

- **Platform walkthrough** — interactive tour of the tools the volunteer will use
- **Org-customizable content** — the org adds their own training materials (campaign messaging, local context, safety protocols)
- **Quizzes and checkpoints** — knowledge checks confirming the volunteer understands the tools and expectations
- **Certification gates** — orgs can require completion of specific training modules before access to field tools
- **Offline viewing** — training materials cached for offline access after initial download

The same onboarding infrastructure supports tenant admin onboarding (org setup wizard, payment processor configuration, BYOK key generation, compliance configuration) with step-by-step guided wizards for each complex setup task.

**Alternatives considered:** External training (documentation only, third-party LMS) was rejected because it fragments the experience and doesn't integrate with platform permissions (no certification gates). Minimal onboarding (just account creation) was rejected because volunteers in the global south may have varying digital literacy — the platform must actively teach its own use.

### Training completion gates before first shift

Orgs can configure which training modules are required before a volunteer can access field tools. A volunteer who hasn't completed canvassing training cannot be assigned a walk list. Gates are configurable per org — low-threat orgs may skip gates entirely, while security-sensitive campaigns may require safety protocol training before any field work.

**Alternatives considered:** No gates (training is optional) was rejected because in high-threat environments, an untrained volunteer with a walk list of voter data is a security risk. Mandatory gates for everyone was rejected because small, informal campaigns need flexibility to get volunteers working quickly.

### AI-first support concierge with human escalation

Tenant support for complex setup tasks (WhatsApp Business verification, BYOK key management, payment processor configuration, compliance setup, platform migration) uses an AI concierge as first contact — available 24/7, multilingual, handling standard questions and guided setup. When the AI can't resolve or the tenant requests it, it escalates to a human specialist. Humans focus on edge cases, complex jurisdictional questions, and high-stakes setup.

**Alternatives considered:** Human-only support was rejected because it doesn't scale across five countries and seven languages without massive headcount. AI-only was rejected because high-stakes tasks (BYOK key management where key loss means permanent data loss) require human verification.

## Consequences

**Benefits:**
- Built-in training reduces the barrier to volunteer participation and ensures consistent onboarding quality
- Certification gates protect sensitive data by ensuring volunteers are trained before accessing field tools
- Org-customizable training content lets campaigns add context specific to their political environment and safety requirements
- AI-first support concierge scales across countries and languages without linear headcount growth

**Costs:**
- Training module content management (authoring, organizing, versioning training content) is a product area that needs ongoing investment
- Certification gates add friction to volunteer onboarding — must be clearly justified to volunteers or it will reduce conversion
- AI concierge requires ongoing training data and updates as the platform evolves

**Constraints:**
- Training materials must be available in all supported languages for each tenant's configured languages
- Offline caching of training materials must work within device storage constraints
- Gate configuration must be simple for Org Admins — not a complex permission matrix

**Related ADRs:** [ADR-003](003-identity-access-organization.md) (configurable volunteer approval policy), [ADR-002](002-security-threat-model.md) (security training for high-threat environments), [ADR-010](010-internationalization-localization.md) (multilingual training content)
