# GreenGrass

A platform for managing grassroots political elections in the global south.

GreenGrass combines a Constituent Relationship Manager (CRM), voter database, fundraising tools, communication suite, and data analytics into a single platform designed for resource-constrained environments, intermittent connectivity, multilingual populations, and decentralized organizing structures.

## Target Markets

Puerto Rico (alpha), Brazil, Thailand, India, and Lebanon — each with distinct electoral systems, languages, data protection laws, and infrastructure constraints.

## Project Status

**Current phase: Specification & Design**

All product specifications are complete. The project is moving into UX design.

## Working with This Project

This project is developed using [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Claude Code reads `CLAUDE.md` at the project root for context and conventions.

### Getting started

1. Clone the repo
2. Open the project directory in Claude Code: `cd Greengrass && claude`
3. Claude will automatically read `CLAUDE.md` for project context

### Project-specific commands

The project defines custom skills in `.claude/SKILLS.md`:

- `/spec` — Draft or refine a specification document
- `/ux` — Create or iterate on a UX artifact
- `/arch` — Draft or refine an architecture document
- `/adr` — Record an Architecture Decision Record
- `/review` — Review a spec or design document for completeness and gaps

### Reading order

If you're new to the project, read the specs in this order:

1. **[`spec/product.md`](spec/product.md)** — Start here. High-level product description, target users, core feature set.
2. **[`spec/users.md`](spec/users.md)** — User personas, roles, permissions model.
3. **[`spec/workflows.md`](spec/workflows.md)** — 12 core workflows: canvassing, voter registration, fundraising, events, communications, and more.
4. **[`spec/geography.md`](spec/geography.md)** — Target countries, localization strategy, rollout sequence.
5. **[`spec/security.md`](spec/security.md)** — Threat model, 5-tier security, encryption architecture, auth.
6. **[`spec/compliance.md`](spec/compliance.md)** — Election law, data protection, campaign finance across all 5 countries.
7. **[`spec/fundraising.md`](spec/fundraising.md)** — Payment processing, donation types, alliance fundraising, donor experience.
8. **[`spec/integrations.md`](spec/integrations.md)** — External systems: GIS/mapping, SMS, WhatsApp, telephony, observability.
9. **[`spec/support.md`](spec/support.md)** — Tenant support surface, onboarding wizards, knowledge base, concierge model.
10. **[`spec/gotv.md`](spec/gotv.md)** — Get Out The Vote and election day operations.
11. **[`spec/messaging.md`](spec/messaging.md)** — Internal communications, notifications, E2E encryption.
12. **[`spec/press.md`](spec/press.md)** — Press, media, social media, public profiles, endorsements.
13. **[`design/architecture/system.md`](design/architecture/system.md)** — System architecture, data model, infrastructure.
14. **[`decisions/`](decisions/)** — 15 Architecture Decision Records extracting and formalizing decisions from all spec and design documents.

## Project Structure

```
GreenGrass/
├── CLAUDE.md                      # Claude Code project instructions
├── .claude/
│   └── SKILLS.md                  # Project-specific Claude skills
├── spec/
│   ├── product.md                 # High-level product description
│   ├── users.md                   # User personas and roles
│   ├── workflows.md               # Core workflows
│   ├── geography.md               # Target geography and localization
│   ├── security.md                # Security and threat model
│   ├── compliance.md              # Compliance and legal framework
│   ├── fundraising.md             # Fundraising and payments
│   ├── integrations.md            # External integrations
│   ├── support.md                 # Tenant support and onboarding
│   ├── gotv.md                    # GOTV and election day operations
│   ├── messaging.md               # Internal communications
│   └── press.md                   # Press, media, public communications
├── design/
│   ├── ux/                        # UX design artifacts (next phase)
│   └── architecture/
│       └── system.md              # System architecture
└── decisions/                     # Architecture Decision Records (ADRs)
    ├── 001-platform-architecture.md
    ├── 002-security-threat-model.md
    ├── 003-identity-access-organization.md
    ├── 004-data-model-integrity.md
    ├── 005-offline-first-sync.md
    ├── 006-field-operations-gotv.md
    ├── 007-fundraising-payments.md
    ├── 008-communications-messaging.md
    ├── 009-compliance-legal.md
    ├── 010-internationalization-localization.md
    ├── 011-design-system-ux.md
    ├── 012-external-integrations.md
    ├── 013-analytics-ai.md
    ├── 014-volunteer-onboarding.md
    └── 015-product-scope.md
```

## Key Design Principles

- **Offline-first** — everything works without connectivity, syncs when connected
- **Sovereignty-first** — tenants own their data, BYOK encryption by default
- **Multilingual from day one** — RTL support, AI-assisted translation with human review
- **Security as a feature** — 5-tier threat model, E2E messaging, passkey auth
- **Compliance built in** — campaign finance rules, data protection, and consent are guardrails, not afterthoughts
