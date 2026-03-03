# Entry 1: From Description to Specification

*Covering: project inception through completion of all 12 spec documents*

## The Starting Point

GreenGrass started as a product description — a single document describing a platform for managing grassroots political elections in the global south. Not a brief. Not a PRD. A description, written by two people (Pablo Defendini and Giovanni Collazo) who understand what campaign technology lacks in places like Puerto Rico, Brazil, Thailand, India, and Lebanon.

The document was substantial — it described a CRM, voter database, fundraising suite, communication tools, field operations system, and analytics platform, all designed for contexts where connectivity is intermittent, devices are low-end, languages are many, and the political stakes are high. But it was a description, not a specification. The gap between "what this product does" and "how it works in enough detail to build it" is enormous.

The entire specification phase — 12 interconnected documents covering users, workflows, security, compliance, fundraising, integrations, support, GOTV, messaging, and press/media — was done through conversation with Claude Code. No design tools, no Figma, no Miro boards. Markdown files, written collaboratively in a terminal.

## How It Worked

The process was consistent across all 12 specs:

1. **Claude reads all existing context.** Before drafting anything, Claude reads every spec document that exists so far, plus the original product description. Cross-references accumulate. By spec #8, there's a rich web of decisions that constrain and inform the next document.

2. **Claude drafts the spec.** Based on the product description, existing specs, and domain knowledge, Claude produces a comprehensive first draft. The drafts are not timid — they make concrete recommendations, identify gaps in the source material, and surface decisions that need to be made.

3. **Decision points.** Every spec surfaces decision points — places where the product description is ambiguous, where multiple valid approaches exist, or where there's a tension between competing concerns. These are presented as numbered decisions with options, trade-offs, and a recommendation.

4. **We decide together.** Some decisions are fast ("configurable" is almost always the right answer for a multi-country platform). Some require deep exploration. The alliance message encryption decision — where I asked Claude to explain per-org key negotiation in detail, including what happens when the alliance membership changes — took several back-and-forth exchanges before I chose the approach that makes alliance membership "an event we can build user experience around."

5. **The spec is updated.** Decisions are written directly into the document. Each decision point is marked as DECIDED with the rationale. No separate decision log to maintain.

## What Surprised Me

**The cross-referencing is real.** By the time we wrote the GOTV spec (document #10), Claude was pulling in constraints from security (duress mode affects war room access), compliance (poll watcher credentials vary by jurisdiction), fundraising (election day donation surges need fraud detection), messaging (war room communication channels), and integrations (telephony for chase calls). These weren't prompted — they emerged naturally from having read all the existing specs.

**Decisions compound.** Early decisions about data sovereignty (BYOK encryption by default, per-country data residency) rippled through every subsequent spec. The messaging spec had to grapple with how E2E encryption works in alliance channels when each org holds its own keys. The press spec had to handle how public profiles work when the platform can't read tenant data. These weren't planned connections — they're consequences of principled early decisions.

**The format forces clarity.** Writing specs as markdown documents with explicit decision points creates a forcing function. You can't hand-wave. "We'll figure out the encryption later" doesn't survive a decision point that asks "How does alliance message encryption work?" with three concrete options and their trade-offs laid out.

**Claude flags strategic opportunities.** During the press spec, when I deferred media monitoring, Claude noted it but I was the one who flagged it as "a big, big market gap" for the global south. That kind of strategic observation — spotting where a deferred feature might actually be a market differentiator — is exactly the kind of thing that gets lost in traditional spec processes.

## The Decision Log

Across 12 spec documents, we resolved roughly 80 decision points. Some highlights:

- **Federation, not multi-tenancy.** Each organization is a sovereign entity with its own isolated infrastructure. They connect through explicit sharing rules, not shared databases. This is the foundational architectural decision — everything else follows from it.

- **Passkeys primary, no social login.** In contexts where political activity can be dangerous, tying campaign platform identity to Google or Facebook accounts is a security liability. Passkeys are phishing-resistant and don't require trusting a third party.

- **BYOK by default.** The platform cannot read tenant data unless the tenant explicitly opts into managed keys. This means the platform literally *cannot* be compelled to hand over data it can't decrypt. Cory Doctorow's "minimum viable trust" principle made architectural.

- **Per-org key negotiation for alliance messages.** Each alliance group gets its own encryption key, distributed via member orgs' public keys. When membership changes, the key rotates. This makes alliance formation and dissolution a visible, intentional event — not a background setting change.

- **No read receipts.** In political organizing, the pressure to respond immediately to every message creates a toxic dynamic. Delivery receipts (so you know the system is working) without read receipts (so you're not under surveillance by your own team).

- **Voice messages scoped to field staff only.** Voice messages are useful in field contexts (volunteer reports from the field, team lead instructions). But in general messaging, they tend to replace thoughtful written communication. So they're available where they add value and absent where they'd degrade the conversation.

## What 12 Specs Look Like

The final spec corpus is roughly 80,000 words across 12 documents plus a system architecture document. Every document:

- Is self-contained (you can read it independently)
- Cross-references related documents
- Has all decision points resolved and marked as DECIDED
- Covers the global south context explicitly (not just US campaign assumptions)
- Addresses offline, multilingual, low-bandwidth, and high-security scenarios

The reading order matters — `product.md` → `users.md` → `workflows.md` → `geography.md` → `security.md` → and so on. Each document builds on the previous ones.

## Reflections

Building specs through conversation with an AI is different from both writing them alone and writing them in a team. When writing alone, you skip over the hard parts. When writing in a team, you negotiate. With Claude, you *discover* — the AI surfaces implications and connections you haven't thought of, and you bring the vision, values, and strategic judgment the AI can't.

The result isn't an AI-written spec or a human-written spec. It's a collaboratively authored document where neither party could have produced the output alone. I couldn't have written the encryption key rotation implications for alliance messaging without Claude's technical depth. Claude couldn't have decided that alliance formation should be "an event we can build user experience around" without my product vision.

Next: taking these specs and designing the UX.
