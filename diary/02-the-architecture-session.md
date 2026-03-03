# Entry 2: The Architecture Session

*Covering: system architecture design*

## From Specs to Architecture

With 12 spec documents complete, the next step was system architecture — how does this thing actually work as software? The architecture document (`design/architecture/system.md`) was written in a single session, but it's informed by every decision in the specs.

The architectural drivers practically wrote themselves. When your specs say "BYOK encryption by default" and "offline-first field operations" and "per-country data residency" and "federation model between sovereign organizations," the architecture is already half-decided. The specs constrain the solution space dramatically — and that's a feature, not a bug.

## The Key Choices

**SvelteKit + Capacitor, not React Native.** This was the most pragmatic decision. Smaller bundles matter when your users are on low-end Android phones with 2G connections in rural India. SvelteKit's compiled output is significantly smaller than React's runtime. Capacitor wraps the web app as a native app while giving access to native APIs (camera for QR check-in, biometrics for passkeys, SQLite for offline storage). The trade-off is ecosystem — React has more libraries, more developers, more Stack Overflow answers. But performance in the target context wins.

We also preserved the path to a future native iOS app. The architecture is API-first — the SvelteKit frontend and Capacitor app are just API consumers, not privileged clients. A future Swift app is just another consumer. The sync protocol is client-agnostic. SQLCipher works natively on iOS. Passkeys are platform-native. Nothing in the architecture prevents a native app later; it just doesn't require one now.

**Event sourcing for sync.** The offline sync problem is the hardest technical challenge in the platform. Volunteers collect data in the field without connectivity, then sync when they get signal. Multiple volunteers might canvass overlapping areas. The sync protocol must handle conflicts gracefully without losing data.

The solution: event sourcing. Every data mutation is recorded as an immutable event. The event log is both the audit trail (required by compliance specs) and the sync mechanism. When a device comes online, it pushes its local events and pulls events it hasn't seen. Conflicts are resolved by the server using domain-specific rules (last-write-wins for most fields, but additive merge for interaction history — you never lose a canvassing conversation).

This was an elegant convergence — the compliance requirement (full audit trail) and the offline requirement (sync protocol) are solved by the same mechanism.

**Kubernetes, cloud-agnostic, no Google.** The platform needs to run in multiple countries with different infrastructure landscapes. Some countries have AWS. Some don't. Some have local cloud providers that are politically preferable. The architecture uses Kubernetes with a cloud-agnostic management layer (Rancher or Crossplane), so the same deployment tooling works whether the underlying infrastructure is EKS, a local provider, or bare metal.

The "no Google" constraint comes from a principled position about not building dependencies on companies whose incentives may not align with the platform's users. Not paranoia — pragmatism. When your platform handles politically sensitive data, you want to minimize the trust surface.

**NATS JetStream for event streaming.** Not Kafka. NATS JetStream is lighter-weight, easier to operate, and sufficient for the platform's scale. The political campaign world doesn't have the throughput of a social network — it has bursty traffic (election day surges) and the need for durability (every event must be persisted). JetStream handles both.

## The Trust Architecture

The most interesting architectural pattern isn't a technology choice — it's the trust model.

The platform is designed around a principle I think of as "minimum viable platform trust." The platform operator (us) should need to be trusted as little as possible:

- **BYOK encryption** means the platform literally cannot read tenant data. If compelled by a government to produce data, we can produce encrypted blobs we can't decrypt. The tenant holds the keys.
- **Envelope encryption with blind indexes** means we can look up records by identifier (to enable search and dedup) without being able to read the record contents. The blind index reveals "these two records have the same email address" without revealing what the email address is.
- **Per-country data residency** means tenant data stays in a country the tenant chooses. A Puerto Rican campaign's data is in US infrastructure. A Brazilian campaign's data is in Brazilian infrastructure. No accidental cross-border data transfer.
- **Self-hosted option** means a tenant can run the entire platform on their own infrastructure if they don't trust our infrastructure at all. We provide the software; they provide the metal.

This trust architecture has real UX implications that ripple into the design phase — the BYOK key generation ceremony needs to be understandable to a campaign manager who isn't a cryptographer, and the consequences of losing your keys need to be communicated clearly without being terrifying.

## What the Architecture Document Looks Like

The final document is about 15,000 words. It covers:

- System topology (platform layer, federation layer, tenant layer)
- Tenant architecture (what's inside each isolated deployment)
- Identity and authentication (federated identity, passkey auth, session management)
- Data model (contact graph, interaction events, voter data, financial records)
- Encryption architecture (envelope encryption, blind indexes, BYOK ceremony)
- Sync protocol (event sourcing, conflict resolution, offline storage)
- Communication infrastructure (email, SMS, WhatsApp)
- Analytics and real-time operations (dashboards, war room, election day)
- Technology stack decisions (with rationale)
- Deployment and operations

Every section references the spec decisions that drive it. The architecture isn't an independent document — it's the natural consequence of the product decisions.

## Reflections

Architecture is where the compounding value of having complete specs really shows. Every architectural decision could be evaluated against concrete requirements:

- "Does this sync protocol handle the canvassing workflow from `workflows.md`?"
- "Does this encryption model support the alliance sharing rules from `users.md`?"
- "Does this deployment topology satisfy the data residency requirements from `geography.md`?"

Without complete specs, architecture sessions become exercises in assumption-making. With them, they become exercises in design — choosing between known options against known constraints.

The architecture session also surfaced the one decision I find most intellectually satisfying: using event sourcing for both audit compliance and offline sync. Two hard requirements, one mechanism. That kind of convergence is rare, and it only emerged because both requirements were fully specified before the architecture session began.

Next: UX design — turning this architecture and these specs into something people can actually use.
