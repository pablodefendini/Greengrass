# Entry 7: Reconciling the Architecture

*March 2026*

## The architecture document didn't know what we'd decided

ADR-016 resolved all 89 open questions from the wireframe audit. It introduced BYOM for AI, tiered data retention, cross-channel orchestration, election day verification layers, two-OA approval flows, and a dozen other capabilities. But the system architecture document — the single source of truth for how the platform fits together — still described the world before those decisions existed.

The AI section still assumed a hybrid model where the platform chose the model based on the tenant's encryption tier. The data model had no ticket fields on donations. The identity section didn't mention TOTP fallbacks or the OA bootstrap recovery problem. There was no data retention section at all — just a reference to ADR-004's blanket "10-year retention."

Architecture documents rot when decisions happen elsewhere. ADR-016 was the right place to make the decisions, but the system architecture document is the right place for engineers to find them. If someone reads system.md to understand how AI works and finds a model that's been superseded, the document is actively harmful.

## Surgical, not rewrite

The temptation with a ~1,000-line architecture document is to rewrite it. Resist that. The existing structure was sound — it just needed to absorb new information. The approach was 22 changes: 2 new sections, 1 section rewrite, and 19 augmentations to existing sections.

The two new sections — Data Retention Architecture and Election Day Architecture — couldn't be folded into existing sections because they represent genuinely new architectural concerns that ADR-016 surfaced. Data retention needed its own section because the four-tier model (operational, compliance, audit trail, import rollback) is infrastructure-level policy, not a feature of any one subsystem. Election day needed its own section because the combination of election data ingestion, multi-layer results verification, and alliance ride sharing constitutes a distinct architectural surface.

The AI Integration section was the only full rewrite. The old section was organized around the managed-key vs. BYOK distinction — which model to use depended on the tenant's encryption tier. BYOM replaces that entire premise. The new section is organized around the abstraction layer pattern: the platform defines what it needs from a model, and the org plugs in their provider. The same adapter pattern used for payments and communications.

## The BYOK + BYOM tension

The most interesting architectural tension to document was the interaction between BYOK and BYOM. A tenant that uses BYOK (Bring Your Own Key) has committed to keeping their data within their encryption perimeter. If that same tenant configures an external BYOM provider, the data sent to the AI provider leaves that perimeter. The prompt text — which might include supporter names, campaign talking points, canvassing context — goes to a third party.

This isn't a bug; it's an informed tradeoff. The architecture documents it as the tenant's explicit choice: the platform surfaces a clear warning during BYOM configuration, and the OA must acknowledge it. Tenants at Maximum security tier who can't accept this tradeoff must self-host their AI model. The architecture doesn't prevent the tension — it makes the tension visible and the choice explicit.

## The ADR-004 reconciliation

ADR-004 said "10-year retention globally." ADR-016 says audit trail is indefinite (metadata-only), operational content is 2 years, compliance is 5-10 years. These aren't contradictory — ADR-016 is strictly stronger for what matters. The audit trail now exceeds 10 years because it's indefinite. The compliance tier covers the same financial records ADR-004 was protecting, for the same 5-10 year window. What ADR-016 changes is that *content* (message bodies, attachments, canvass responses) has a shorter, appropriate lifecycle rather than being kept forever by default.

The Data Retention section explicitly acknowledges and reconciles this, so no future reader has to wonder whether the two ADRs conflict.

## Verification found the gaps

After making all 22 planned changes, a verification pass caught 7 gaps — items from ADR-016's Consequences list that weren't reflected in the architecture. PDF letter generation for activism campaigns. Auto-generated Open Graph images. WhatsApp template approval status tracking. Training completion gating. Script template workflow. And two of the four v2 tentpole features (Shared Content Library and Public Page A/B Testing) had no forward references.

The gaps weren't controversial — they were just easy to miss when working through a long list of changes. The verification pass is the real deliverable of this kind of work. Making the changes is mechanical. Confirming that nothing was missed requires reading the source decision document against the target document, item by item.

## The document now

system.md went from ~999 lines to ~1,297. The section structure is:

1. Overview → 2. System Topology → 3. Tenant Architecture → 4. Data Model → 5. Identity & Authentication → 6. Encryption → 7. Offline → **8. Data Retention (NEW)** → 9. Communication Infrastructure → 10. Payment → 11. Analytics → **12. Election Day (NEW)** → 13. Localization → **14. AI Integration (REWRITTEN)** → 15. Integration → 16. Technology Stack → 17. Deployment → 18. Open Questions

Every ADR-016 consequence is now reflected. Every v2 tentpole has at least one forward reference. The data retention model is reconciled with ADR-004. The AI model decision is cleanly superseded. No internal contradictions remain.

The architecture is now a closed surface — aligned with every decision made to date. It'll rot again, of course, the next time decisions are made elsewhere. But for now, there's one document an engineer can read to understand how GreenGrass works.
