# GreenGrass

## Project Overview

GreenGrass is a custom platform for managing grassroots political elections in the global south. It is designed around the realities of resource-constrained environments, intermittent connectivity, multilingual populations, and decentralized organizing structures.

## Project Phase

**Current phase: Specification & Design**

We are working top-down — starting from a high-level product description and progressively drilling down into:

1. **Product definition** — what it does, who it serves, core workflows
2. **UX design** — user journeys, interface patterns, accessibility constraints
3. **Architecture & engineering** — system design, data model, infrastructure decisions
4. **Software development** — implementation

No code is being written yet. All work is spec and design.

## Project Structure

```
GreenGrass/
├── CLAUDE.md                  # Project instructions (this file)
├── .claude/
│   └── SKILLS.md              # Project-specific skills
├── spec/
│   ├── product.md             # High-level product description
│   ├── users.md               # User personas and roles
│   ├── workflows.md           # Core workflows and user journeys
│   └── requirements.md        # Functional and non-functional requirements
├── design/
│   ├── ux/                    # UX design artifacts
│   └── architecture/          # System architecture and technical design
└── decisions/                 # Architecture Decision Records (ADRs)
```

## Conventions

- All spec documents are Markdown
- Use plain, direct language — avoid jargon where possible
- Design for offline-first, low-bandwidth, multilingual contexts
- Decisions are recorded as ADRs in `decisions/`
- Each spec document should be self-contained but cross-reference related docs

## Notes

- The target context is grassroots political elections in the global south
- Key constraints: intermittent connectivity, low-end devices, multilingual users, decentralized organizations, security sensitivity
- The platform must be trustworthy and transparent — election integrity is paramount
