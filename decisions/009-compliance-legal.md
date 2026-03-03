# ADR-009: Compliance & Legal Framework

**Status:** Accepted
**Date:** 2026-03-03
**Sources:** `spec/compliance.md`, `spec/workflows.md`

## Context

GreenGrass operates at the intersection of political organizing, personal data processing, and financial transactions — three of the most heavily regulated domains in every target jurisdiction. The platform spans five countries (Puerto Rico/US, Brazil, Thailand, India, Lebanon) with fundamentally different election laws, data protection regimes, campaign finance rules, and enforcement approaches. Compliance cannot be an afterthought or a per-jurisdiction patch; it must be structural.

The tension is between building a single platform that works globally and respecting the wildly different legal requirements in each jurisdiction. Building to the weakest standard and retrofitting is insufficient; building five separate compliance systems is unsustainable.

## Decision

### Principled compliance philosophy

GreenGrass designs for the strictest jurisdiction first, then relaxes where local law permits. This means LGPD/GDPR-level data protection applied everywhere, even in jurisdictions with weaker laws (Lebanon, which has no comprehensive data protection law, gets GDPR-as-baseline as a contractual commitment). Architectural compliance is preferred over policy compliance — where possible, non-compliance is made technically impossible (BYOK means GreenGrass cannot hand over tenant data) rather than relying on promises.

**Alternatives considered:** Per-jurisdiction minimum compliance was rejected because it creates a patchwork of different protections that's harder to maintain and offers weaker guarantees to users. Strictest-everywhere without relaxation was rejected as unnecessarily restrictive in lower-risk jurisdictions.

### TSE-aware channel management for Brazil

During configured campaign periods in Brazil, the platform enforces TSE rules: message volume limits, content restrictions, no bulk WhatsApp sends. Outside campaign windows, broader use is permitted. The platform encodes TSE rules and enforces them contextually based on configured campaign period dates.

**Alternatives considered:** Disabling WhatsApp entirely for Brazilian tenants was rejected because WhatsApp is too important in Brazil — TSE restrictions are campaign-period-specific, not permanent. Ignoring TSE rules and leaving compliance to the tenant was rejected because non-compliance can result in candidacy annulment.

### Prominent warnings + tenant responsibility for Thailand

For Thai tenants, the platform displays clear, prominent warnings about lèse-majesté restrictions when content is created. No automated content filtering — it's technically unreliable and creates a chilling effect. The tenant/user bears responsibility for their content.

**Alternatives considered:** Automated content filtering for lèse-majesté was rejected because it's technically unreliable (the offense is broadly and politically defined), creates a chilling effect on political speech, and puts GreenGrass in the position of censoring political communication. Ignoring the risk entirely was rejected because lèse-majesté is a severe criminal offense — users must be aware.

### Jurisdiction-specific voter registration forms

Pre-built templates for target countries incorporating eligibility requirements, required fields, documentation rules, and submission procedures. Custom form builder for jurisdictions without templates. Community contribution model lets tenants share configurations back for inclusion in the curated library.

### Campaign period enforcement defaults to hard

Tenants choose hard or soft enforcement per jurisdiction. Hard enforcement (platform blocks restricted actions during configured campaign periods) is the default. Sophisticated tenants with their own legal counsel can switch to soft enforcement (warnings only).

### Two-tier foreign contribution screening

Obviously ineligible donors (non-citizen, non-resident, no qualifying connection) are blocked at payment in real-time. Edge cases (diaspora, dual citizens, incomplete information) are accepted but held in escrow, flagged for compliance review, and require manual approval before funds are released.

### Compliance reporting: built-in for priority jurisdictions, structured export everywhere

Jurisdiction-specific reporting modules are built as pilots launch (FEC first for alpha, TSE for Brazil, etc.), following the per-jurisdiction adapter pattern. Structured data export in clean formats is available from day one as a universal fallback — every tenant can generate compliant reports even before their jurisdiction's module is built.

### Corporate structure: single entity with subsidiary option

Start with one company in the incorporation jurisdiction (privacy-strong — Estonia or Switzerland candidates), operating globally through contracts. Local subsidiaries established when specific jurisdictions demand local presence (likely India due to FCRA scrutiny, possibly Brazil for TSE requirements).

## Consequences

**Benefits:**
- Design-for-strictest means every tenant gets strong protections regardless of local law
- Architectural compliance (BYOK) is stronger than policy compliance — it's technically impossible to violate
- TSE-aware channel management lets Brazilian campaigns use WhatsApp legally while protecting against inadvertent violations
- Two-tier foreign contribution screening balances security (blocking obvious violations) with fairness (not rejecting legitimate diaspora donors)
- Compliance as a product feature (reporting, consent management, audit trails) is a competitive advantage

**Costs:**
- Jurisdiction-specific compliance modules are significant engineering investment per country
- Hard enforcement as default may frustrate sophisticated tenants who understand the rules better than the platform's encoding
- Local subsidiaries add corporate structure complexity and tax implications
- Campaign period dates must be manually configured per-tenant and kept current

**Constraints:**
- Every country launch requires engagement with local legal counsel — no launching on assumptions alone
- FCRA positioning for India (technology vendor, not political service provider) requires formal legal opinion before pilot
- TSE registration for Brazil needs legal counsel determination
- Compliance templates must be maintained as election laws change — an ongoing cost

**Related ADRs:** [ADR-002](002-security-threat-model.md) (BYOK as compliance mechanism, encryption legality per jurisdiction), [ADR-004](004-data-model-integrity.md) (10-year audit retention), [ADR-007](007-fundraising-payments.md) (campaign finance reporting, foreign contribution blocking), [ADR-008](008-communications-messaging.md) (consent enforcement, TSE messaging rules)
