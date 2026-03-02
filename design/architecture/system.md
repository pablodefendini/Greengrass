# System Architecture

## Overview

GreenGrass is a single-tenant, federated platform for grassroots political campaign management. This document defines the system architecture — how the components fit together, how data flows, and how the infrastructure supports the product requirements defined in the spec documents.

### Architectural Drivers

These product decisions (from the specs) have the strongest influence on architecture:

1. **Single-tenant isolation** with tiered security levels (container → cluster → cloud account → self-hosted)
2. **Federation model** — sovereign entities connected by affiliation, not a monolithic multi-tenant system
3. **BYOK by default** — the platform cannot read tenant data unless the tenant opts into managed keys
4. **Per-country data residency** — tenant data stays in a country the tenant chooses
5. **Offline-first for field operations** — canvassing, voter registration, and event check-in must work without connectivity
6. **Mobile-first** — the primary interface is a phone, not a desktop
7. **RTL and multilingual from day one** — architecture must support bidirectional text and content localization
8. **Full audit trail** — every data mutation is logged
9. **Federated identity** — one platform identity, per-tenant profiles
10. **Real-time analytics for active operations** — field day and election day dashboards update live

---

## System Topology

```
┌─────────────────────────────────────────────────────────┐
│                   PLATFORM LAYER                         │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │   Identity    │  │  Provisioning │  │   Platform    │  │
│  │   Service     │  │  Service      │  │   Admin       │  │
│  └──────┬───────┘  └──────┬───────┘  └───────────────┘  │
│         │                 │                               │
│  ┌──────┴─────────────────┴──────────────────────────┐   │
│  │              Federation / Alliance Layer            │   │
│  │     (cross-tenant coordination, sharing rules,      │   │
│  │      dedup, don't-re-knock, joint campaigns)        │   │
│  └──────┬─────────────────┬──────────────────────────┘   │
└─────────┼─────────────────┼──────────────────────────────┘
          │                 │
    ┌─────┴─────┐     ┌────┴──────┐
    │  TENANT A  │     │  TENANT B  │    ... (one per org/candidate)
    │            │     │            │
    │  ┌──────┐  │     │  ┌──────┐  │
    │  │ App  │  │     │  │ App  │  │
    │  │Server│  │     │  │Server│  │
    │  ├──────┤  │     │  ├──────┤  │
    │  │  DB  │  │     │  │  DB  │  │
    │  ├──────┤  │     │  ├──────┤  │
    │  │Cache │  │     │  │Cache │  │
    │  ├──────┤  │     │  ├──────┤  │
    │  │Queue │  │     │  │Queue │  │
    │  └──────┘  │     │  └──────┘  │
    │            │     │            │
    └────────────┘     └────────────┘
```

### Three-layer architecture:

1. **Platform layer** — shared services that exist outside any tenant: identity, provisioning, platform admin, billing. This is the only layer that sees across tenants.

2. **Federation layer** — mediates cross-tenant interactions: alliance coordination, shared resource management, dedup across orgs, joint campaign orchestration. Operates on explicit sharing rules, never has blanket access to tenant data.

3. **Tenant layer** — one complete, isolated application instance per sovereign entity (party, org, or candidate). Each tenant has its own application server, database, cache, and job queue. No tenant can see another tenant's data except through the federation layer's sharing rules.

---

## Tenant Architecture

### What's inside a tenant

Each tenant is a self-contained application deployment:

| Component | Purpose |
|-----------|---------|
| Application server | API, business logic, server-side rendering |
| Primary database | CRM, voter data, donations, events, comms history, audit log |
| Cache layer | Session management, hot data, rate limiting |
| Job queue | Async tasks: email sends, SMS dispatch, data imports, sync processing |
| Object storage | File uploads, media, export files, backup snapshots |
| Search index | Full-text search across CRM records, comms, notes |

### Isolation tiers

(Decided in security.md)

| Tier | Implementation | Boundary |
|------|---------------|----------|
| Standard | Dedicated containers on shared Kubernetes cluster | Container + namespace isolation. Separate DB instance per tenant. Shared compute nodes. |
| Enhanced | Dedicated node pool within a cluster | Tenant containers run on dedicated hardware. No shared compute with other tenants. Separate DB instance. |
| Maximum | Separate cloud account | Entire infrastructure stack isolated at the cloud provider level. No shared resources whatsoever. |
| Self-hosted | Tenant's own infrastructure | GreenGrass provides the application package. Tenant manages everything. |

**DECIDED:** Kubernetes with cloud-agnostic tooling. No Google Cloud dependency.

K8s is CNCF-governed open source, runs on any infrastructure. GreenGrass uses Kubernetes across countries with a cloud-agnostic management layer (Rancher or Crossplane) to abstract across different providers per country. Managed K8s offerings (EKS, non-Google alternatives, or local providers) used where available to reduce operational burden; self-managed K8s (k3s or similar lightweight distributions) where managed options aren't available. No GKE.

### Tenant provisioning pipeline

(Decided in workflows.md — fully automated, self-serve)

```
Signup request
  → Validate org info and select country/tier
  → Generate tenant ID and encryption keys (BYOK flow or managed)
  → Select target infrastructure (country-specific cluster or cloud account)
  → Provision database (create, apply schema, seed defaults)
  → Provision application instance (deploy container, configure networking)
  → Configure DNS (tenant subdomain or custom domain)
  → Configure object storage bucket
  → Configure job queue
  → Run health checks
  → Deliver onboarding credentials to Org Admin
  → Tenant is live
```

**DECIDED:** Subdomain as default, custom domain supported.

- **Default:** `orgname.greengrass.app`. Provisioned automatically during tenant setup. Wildcard DNS and TLS via Let's Encrypt.
- **Custom domain:** Tenants can configure their own domain (e.g., `organize.campaign.org`). Requires the tenant to update their DNS records (CNAME). The platform handles TLS certificate provisioning automatically once DNS is configured.
- **Both can coexist.** The subdomain always works as a fallback even if a custom domain is configured.

---

## Data Model

### Platform-level entities (shared across tenants)

```
PlatformIdentity
├── id (UUID)
├── primary_phone (E.164, encrypted)
├── primary_email (encrypted)
├── name
├── language_preference
├── communication_preferences (per-channel, per-purpose consent)
├── passkey_credentials[]
├── trusted_contacts[] → PlatformIdentity
├── tenant_memberships[] → TenantProfile
├── created_at
└── updated_at

TenantRegistration
├── id (UUID)
├── entity_type (alliance | party_org | candidate)
├── tenant_type (lightweight | full)
├── name
├── country
├── hosting_tier (standard | enhanced | maximum | self_hosted)
├── encryption_model (byok | managed)
├── encryption_key_reference (vault path or tenant-held)
├── affiliations[] → TenantRegistration (with affiliation_type)
├── billing_info
├── status (provisioning | active | suspended | decommissioned)
├── created_at
└── updated_at

Affiliation
├── id (UUID)
├── parent_tenant → TenantRegistration (alliance or party)
├── child_tenant → TenantRegistration (party, org, or candidate)
├── affiliation_type (alliance_member | party_candidate)
├── sharing_rules (per-resource opt-in flags)
├── status (pending | active | revoked)
├── created_at
└── updated_at
```

### Tenant-level entities (per-tenant database)

```
Person (the omni-list record)
├── id (UUID)
├── platform_identity_id → PlatformIdentity (nullable — not everyone has a login)
├── name, address, phone, email (some encrypted at application level)
├── record_types[] (voter | donor | volunteer | supporter | contact | candidate | staff)
├── voter_data
│   ├── precinct / electoral_district
│   ├── registration_status
│   ├── voting_history[] (elections participated)
│   ├── support_score
│   └── demographics (age, language)
├── donor_data
│   ├── donation_history[] → Donation
│   ├── recurring_status
│   └── compliance_info (employer, occupation — encrypted)
├── volunteer_data
│   ├── role_templates[] → RoleTemplate
│   ├── scopes[] → Scope
│   ├── team_assignment → Team
│   ├── shift_history[] → Shift
│   ├── hours_logged
│   └── training_completion[]
├── tags[]
├── segments[]
├── communication_history[] → CommunicationEvent
├── household → Household
├── notes[] (encrypted at application level)
├── created_at
├── updated_at
└── merged_from[] (audit trail of dedup merges)

Campaign
├── id (UUID)
├── name
├── type (electoral | advocacy | voter_registration | fundraising | gotv)
├── status (planning | active | completed | archived)
├── geographic_scope → GeographicArea
├── date_range
└── parent_entity (party/org/candidate/alliance that owns this campaign)

GeographicArea (hierarchical)
├── id (UUID)
├── name
├── level (country | region | state | district | precinct | turf)
├── parent → GeographicArea
├── boundary_data (GeoJSON)
└── metadata (population, voter count, etc.)

Turf (canvassing assignment unit)
├── id (UUID)
├── geographic_area → GeographicArea
├── walk_list[] → Person (ordered address sequence)
├── campaign → Campaign
├── assigned_to → Person (volunteer)
├── status (unassigned | assigned | in_progress | complete)
└── stats (doors_total, doors_knocked, contact_rate)

CanvassingInteraction
├── id (UUID)
├── person → Person (the voter contacted)
├── canvasser → Person (the volunteer)
├── turf → Turf
├── campaign → Campaign
├── contact_result (spoke | not_home | refused | moved | etc.)
├── script_responses[] (question_id, response)
├── notes (encrypted at application level)
├── recorded_at (device timestamp)
├── synced_at (server timestamp)
├── device_id
└── location (lat/lng, optional)

Donation
├── id (UUID)
├── donor → Person
├── campaign → Campaign (optional)
├── amount
├── currency
├── type (one_time | recurring)
├── method (card | pix | upi | promptpay | cash | etc.)
├── payment_processor_reference
├── covers_fees (boolean)
├── compliance_data (encrypted)
├── receipt_sent (boolean)
├── created_at
└── audit_trail

Event
├── id (UUID)
├── name, description
├── type (rally | town_hall | fundraiser | training | canvass_launch | phone_bank | virtual)
├── location (physical address or virtual platform reference)
├── date_range
├── capacity
├── rsvp_settings (open | invite_only | approval_required)
├── rsvps[] → RSVP
├── attendance[] → AttendanceRecord
├── campaign → Campaign (optional)
└── follow_up_status

Communication
├── id (UUID)
├── channel (email | sms | whatsapp)
├── purpose (transactional | event | fundraising | gotv | activism | newsletter)
├── template → MessageTemplate
├── audience_segment → Segment
├── status (draft | scheduled | sending | sent | failed)
├── stats (sent, delivered, opened, clicked, bounced, unsubscribed)
├── scheduled_at
├── sent_at
└── campaign → Campaign (optional)

AuditEntry
├── id (UUID)
├── actor → Person or PlatformAdmin
├── action (create | update | delete | export | login | permission_change | etc.)
├── entity_type
├── entity_id
├── changes (before/after diff, encrypted)
├── ip_address
├── device_info
├── timestamp
└── tenant_id
```

### Geographic data model

(Deferred from users.md — resolving here)

The geographic model is hierarchical and flexible enough to represent different countries' political geography:

```
Country
└── Region / State / Province
    └── District / Municipality
        └── Precinct / Ward / Voting Station
            └── Turf (canvassing assignment unit — defined by campaign staff)
```

**Key design decisions:**

- **Levels are configurable per country.** Puerto Rico has municipalities and precincts. India has states, parliamentary constituencies, assembly constituencies, and polling stations. The hierarchy depth and naming are tenant-configurable.
- **Boundary data stored as GeoJSON.** Enables map-based turf cutting, canvassing progress visualization, and geographic scoping for permissions.
- **Turfs are campaign-defined, not administrative.** A turf is a walk list — a set of addresses assigned to a canvasser. It may span parts of multiple precincts or be a subset of one. Turfs are created by Field Directors, not imported from electoral data.

**DECIDED:** Both — pre-loaded for target countries, import capability for everything else.

- **Pre-loaded:** GreenGrass ships official electoral boundaries (districts, precincts, voting stations) for target countries on the rollout roadmap. A campaign in Puerto Rico selects their municipality and precincts are already there, ready for turf cutting.
- **Import:** Orgs in countries without pre-loaded data can import their own geographic boundaries (GeoJSON, shapefiles). The import process validates, previews, and confirms before applying.
- **Community contribution:** Orgs that import geographic data for a new jurisdiction can submit it back to GreenGrass as a candidate data set for other orgs in the same country.
- **Maintenance:** Electoral boundaries change. Pre-loaded data is versioned and updated per election cycle for active countries.
- **User-friendliness:** Data entry, import, and export across the platform should be as frictionless as possible — this applies to geographic data, voter files, and all other data types.

---

## Identity & Authentication Architecture

### Platform identity service

The identity service is a shared platform component, separate from any tenant:

```
┌─────────────────────────────────────┐
│         Identity Service             │
│                                      │
│  ┌─────────────┐ ┌───────────────┐  │
│  │  Credential  │ │   Profile     │  │
│  │  Store       │ │   Federation  │  │
│  │  (passkeys,  │ │   (tenant     │  │
│  │   OTP, etc.) │ │   memberships)│  │
│  └─────────────┘ └───────────────┘  │
│  ┌─────────────┐ ┌───────────────┐  │
│  │  Session     │ │   Recovery    │  │
│  │  Manager     │ │   Service     │  │
│  └─────────────┘ └───────────────┘  │
└─────────────────────────────────────┘
```

**Credential store:** Passkey public keys, email/password hashes (argon2id), magic link tokens, OTP seeds. Never stores plaintext credentials. Separate from tenant databases.

**Profile federation:** Maps a platform identity to its per-tenant profiles. When a user logs in, the identity service determines which tenants they belong to and which tenant to route them to (or presents a tenant selector if multiple).

**Session manager:** Issues and validates session tokens. Enforces role-based session duration (decided in users.md). Handles remote revocation — when a Volunteer Coordinator revokes a session, the session manager invalidates the token immediately.

**Recovery service:** Manages trusted contact recovery flow. Routes recovery requests to designated contacts. Issues new credential setup flows after approved recovery.

**DECIDED:** Centralized primary in the incorporation jurisdiction with read replicas per country.

- **Primary:** Authoritative identity data lives in the incorporation jurisdiction (Estonia/Switzerland). All writes (account creation, credential changes, recovery) go to the primary. Protected by the strongest legal framework available.
- **Read replicas:** Each country with tenant infrastructure gets a local replica for low-latency auth validation and session checks. Replication is eventual-consistency with short lag (seconds).
- **Failover:** If the primary is unreachable, read replicas can continue to validate existing sessions (cached tokens). New account creation and credential changes queue until the primary recovers.

### Authentication flow

```
1. User navigates to app (tenant subdomain or login page)
2. Identity service presents auth options (passkey, magic link, OTP, password)
3. User authenticates:
   a. Passkey: WebAuthn challenge → device biometric → signed response → verified
   b. Magic link: email sent → user clicks → token verified
   c. OTP: SMS sent → user enters code → verified
   d. Password: submitted → argon2id hash compared → verified
4. Identity service issues session token:
   a. Access token (short-lived, JWT or opaque)
   b. Refresh token (longer-lived, stored server-side)
   c. Token includes: platform_identity_id, tenant_id, role_template_ids, scope_ids
5. User routed to tenant application
6. Tenant application validates token with identity service on each request
```

### Field mode authentication

For canvassing and field operations:

```
1. Volunteer enters field mode before going offline
2. System issues a field session token with extended duration (shift-length)
3. Walk list data downloaded and encrypted on device
4. While offline: field session token validated locally (device holds a signed token)
5. When connectivity returns: token re-validated with identity service, data synced
6. At shift end: token expires, data wiped from device
```

---

## Encryption Architecture

### Key hierarchy

```
Platform Master Key (held by GreenGrass, HSM-backed)
├── Identity Service Encryption Key (encrypts platform identity data)
├── Federation Layer Key (encrypts cross-tenant coordination data)
└── Per-Tenant Keys
    ├── BYOK: Tenant Master Key (generated and held by tenant)
    │   ├── Data Encryption Keys (DEKs — per-table or per-field)
    │   └── Messaging Keys (E2E encryption keys for internal comms)
    └── Managed: Tenant Master Key (held by GreenGrass in Vault)
        ├── Data Encryption Keys (DEKs)
        └── Messaging Keys
```

### Envelope encryption

All tenant data is encrypted using envelope encryption:

1. Data is encrypted with a **Data Encryption Key (DEK)** — a symmetric key unique to a table, field, or record class.
2. The DEK is encrypted with the **Tenant Master Key (TMK)**.
3. The encrypted DEK is stored alongside the encrypted data.
4. To decrypt: retrieve the TMK (from tenant's key store for BYOK, or from Vault for managed), decrypt the DEK, decrypt the data.

**For BYOK tenants:** The TMK never touches GreenGrass infrastructure. It's held by the tenant (in their own key management system, or generated on their admin's device and backed up via Shamir's secret sharing across multiple Org Admins).

### Application-level encryption

(Decided in security.md — high-sensitivity fields get application-level encryption on top of storage-level)

**Encrypted fields:** Political sentiment scores, canvassing notes, donor identity and compliance data, candidate private communications, national ID / voter ID numbers.

**Implementation:** These fields are encrypted/decrypted at the application layer using field-specific DEKs before being written to / read from the database. The database sees only ciphertext.

**Searchability tradeoff:** Encrypted fields cannot be searched or indexed directly. Options:
- **Blind index:** Hash the field value with a tenant-specific key to create a searchable index that reveals nothing about the plaintext. Supports exact match only.
- **Deterministic encryption:** Same plaintext always produces same ciphertext, enabling equality search. Weaker security (reveals duplicates).
- **Decrypt-on-read:** No search capability. Must load and decrypt to filter. Acceptable for rarely-searched fields like notes.

**DECIDED:** Field-specific searchable encryption approach.

| Field | Approach | Rationale |
|-------|----------|-----------|
| Phone number, email, national ID | Blind index | Need exact-match lookup for dedup. Index hashed with tenant-specific key. |
| Canvassing notes, compliance data | Decrypt-on-read | Searched rarely, security is the priority. Must load and decrypt to filter. |
| Sentiment scores | Decrypt-on-read | Aggregated in analytics pipelines, not searched individually. |

### E2E messaging encryption

(Decided in security.md — E2E by default, opt-in key escrow)

```
Sender device                                    Recipient device
┌───────────┐                                    ┌───────────┐
│ Generate   │                                    │ Decrypt    │
│ message    │                                    │ message    │
│ key (MK)   │                                    │ with MK    │
│            │      ┌──────────────────┐          │            │
│ Encrypt    │─────→│ Server stores:   │─────────→│ Decrypt MK │
│ message    │      │ - encrypted msg  │          │ with       │
│ with MK    │      │ - MK encrypted   │          │ recipient's│
│            │      │   per-recipient  │          │ private key│
│ Encrypt MK │      │   public key     │          │            │
│ per-recipt │      └──────────────────┘          └───────────┘
│ public key │
└───────────┘
```

**Key management for E2E:**
- Each user generates a public/private key pair on their device during onboarding.
- Public keys are registered with the identity service.
- Private keys never leave the device.
- Multi-device: when a user adds a new device, the existing device must authorize it (transfer the private key encrypted with a device-specific key, or re-encrypt message history for the new device).

**Key escrow mode (opt-in per tenant):**
- If the tenant enables key escrow, message encryption keys are additionally encrypted with the tenant's master key and stored server-side.
- The server can decrypt messages if needed (search, compliance, recovery).
- The UI clearly indicates when escrow is active.

### BYOK key management UX

(Deferred from security.md — resolving here)

**Key generation:**
1. During tenant onboarding, Org Admin generates a Tenant Master Key on their device.
2. The key is never transmitted to GreenGrass servers.

**Key backup via Shamir's Secret Sharing:**
1. The TMK is split into N shares with a threshold of K (e.g., 5 shares, 3 required to reconstruct).
2. Shares are distributed to designated key holders (Org Admin, Deputies, trusted board members).
3. Each share is displayed as a QR code or printable recovery card.
4. No single person holds enough shares to reconstruct the key alone.
5. Key reconstruction requires K holders to physically (or digitally, through a secure ceremony) combine their shares.

**Key rotation:**
- Periodic key rotation is recommended but not forced.
- Rotation re-encrypts all DEKs with a new TMK. Data itself is not re-encrypted (envelope encryption allows this).
- Rotation requires current TMK access (existing key holders must participate).

**DECIDED:** Tenant decides with strong guidance.

- The platform does not enforce a rotation schedule. The org chooses when to rotate.
- **Strong guidance:** The platform actively recommends rotation on security events — key holder leaves the org, device compromise, post-breach, major staff turnover. Surfaced as in-app prompts, not just documentation.
- **Easy to execute:** Key rotation is a guided, low-friction process in the admin UI. Re-encrypts DEKs with the new TMK. Org Admin initiates, key holders participate.
- **Reminders:** If no rotation has occurred in 12+ months, the platform surfaces a non-blocking reminder to the Org Admin.

---

## Offline Architecture

### Sync engine

The offline sync engine is the most architecturally complex component. It must handle:

- **Download:** Walk lists, voter records (operational subset), canvassing scripts, team rosters — cached on device for offline use.
- **Upload:** Canvassing interactions, voter registration data, shift completion events — queued on device, synced when connectivity returns.
- **Conflict resolution:** Merge-and-flag (decided in workflows.md) — conflicting records are preserved and flagged for human review.

```
┌─────────────┐          ┌──────────────┐         ┌──────────────┐
│   Device     │          │  Sync Server  │         │   Tenant DB   │
│              │          │              │         │              │
│ Local DB     │◄────────►│ Sync Queue   │────────►│ Primary DB   │
│ (encrypted)  │  sync    │ Conflict     │  apply  │              │
│              │  when    │ Detection    │         │ Audit Log    │
│ Pending      │  online  │ Merge & Flag │         │              │
│ Changes Queue│          │              │         │              │
└─────────────┘          └──────────────┘         └──────────────┘
```

### On-device storage

- **Database:** SQLite (encrypted with SQLCipher) on the device. Stores downloaded walk list data and pending interactions.
- **Encryption:** Device database encrypted with a key derived from the field session token. When the session expires or is revoked, the key is destroyed and the data becomes unreadable.
- **Data scope:** Operational data only (decided in workflows.md) — name, address, age, prior contact result, script. No full voter records.
- **Capacity:** Walk lists are typically 50-200 addresses. On-device storage requirements are modest.

### Sync protocol

```
1. PRE-SHIFT (online):
   a. Volunteer enters field mode
   b. Device downloads assigned walk list + script + team roster
   c. Data encrypted and stored locally
   d. Sync checkpoint recorded (server knows what the device has)

2. DURING SHIFT (offline or intermittent):
   a. Volunteer records interactions → stored in local pending queue
   b. Each record has: device_id, local_timestamp, entity_id, change_type, payload
   c. When connectivity detected:
      - Push pending changes to sync server
      - Pull any updates (turf reassignments, new walk list additions)
      - Update sync checkpoint

3. END OF SHIFT (online):
   a. Final sync: push all remaining pending changes
   b. Sync server confirms receipt
   c. Shift lifecycle event fires
   d. Local database wiped (encryption key destroyed)

4. CONFLICT HANDLING:
   a. Sync server detects conflicting writes (same entity_id, different device_ids)
   b. Both versions stored with conflict flag
   c. Data Manager sees conflicts in review queue
   d. Manual resolution: pick one, merge fields, or create separate records
```

**DECIDED:** Event sourcing.

All data mutations — online and offline — are stored as an immutable event log. State is reconstructed by replaying events.

**Why this fits:**
- The full audit trail requirement means we're already storing every change. Event sourcing makes the audit trail the source of truth rather than a secondary log.
- Offline interactions are naturally events (door knocked, response recorded, registration completed) generated on a device and replayed on the server when connectivity returns.
- Conflicts are two event streams for the same entity from different devices. Both streams are preserved; the merge-and-flag process (decided in workflows.md) is a human reviewing competing event histories.
- Enables temporal queries ("what did the data look like at 3pm on canvassing day") for debugging, dispute resolution, and compliance.

**Sync flow:**
- Device generates events locally with device_id and local timestamps.
- On sync, events are pushed to the server and appended to the tenant's event log.
- Server detects conflicts (overlapping events for the same entity from different devices) and flags them.
- Current state is a materialized view of the event log, rebuilt by event replay or maintained incrementally.

---

## Communication Infrastructure

### Email

```
Tenant App → Message Queue → Email Renderer → Sending Service → Recipient
                                                    │
                                              Feedback Loop
                                         (bounces, complaints,
                                          opens, clicks)
                                                    │
                                              Engagement DB
                                                    │
                                              CRM Update
```

**Deliverability architecture:**
- **Per-tenant sending domains** — each tenant configures SPF, DKIM, and DMARC on their own domain (or a GreenGrass subdomain). Isolates sender reputation per tenant.
- **IP warm-up** — new tenants start on shared IP pools, graduate to dedicated IPs as volume and reputation build.
- **Bounce and complaint processing** — automatic suppression of hard bounces, complaint-driven unsubscribes.
- **Rate limiting** — per-tenant send rate limits to protect deliverability.

**DECIDED:** Self-hosted, per-country.

Email infrastructure is self-hosted in each country's deployment. Email content is tenant data — it doesn't leave the country through a third-party service.

- **MTA:** Self-hosted (Haraka or Postfix) deployed within each country's K8s cluster.
- **Per-tenant sending domains:** Each tenant configures SPF, DKIM, DMARC on their own domain. Isolates sender reputation.
- **IP management:** Dedicated IP pools per country. New tenants warm up gradually.
- **Deliverability monitoring:** Automated bounce/complaint processing, reputation tracking, deliverability dashboards.
- **Operational cost:** This is significant — email infrastructure requires ongoing attention. Deliverability expertise should be part of the GreenGrass ops team.

<!-- REVISIT: For the alpha phase in Puerto Rico, a managed transactional service (Postmark, SES) may be pragmatic while the self-hosted infrastructure is built out. The architecture supports swapping the email adapter per country. -->

### SMS / WhatsApp

```
Tenant App → Message Queue → Channel Router → Provider Adapter → SMS Gateway / WhatsApp API
                                                    │
                                              Delivery Reports
                                              Reply Routing
```

**Channel architecture:**
- **Provider-agnostic adapter layer** — abstract SMS and WhatsApp behind a common interface with per-country provider adapters (Twilio, Vonage, local providers).
- **WhatsApp Business API** — requires business verification, has template-based messaging rules, per-message pricing. Messages must use pre-approved templates for outbound; free-form messaging only within 24-hour reply windows.
- **Consent enforcement** — the channel router checks consent status (per-channel + per-purpose, decided in workflows.md) before dispatching any message.

### Social media

```
Tenant App → Post Scheduler → Platform Adapter → Social Media API
                                     │
                              Analytics Collector → Dashboard
```

**Modular adapter pattern:**
- One adapter per platform (Facebook, Instagram, Twitter/X, TikTok, etc.)
- Common interface: publish(post), schedule(post, time), getAnalytics(post_id)
- Adapters handle platform-specific quirks (character limits, media formats, API rate limits)
- New platforms added by writing new adapters, no core changes

---

## Payment Architecture

(Driven by geography.md — each country has fundamentally different payment infrastructure)

```
Donation Form → Payment Router → Provider Adapter → Payment Processor
                    │                                       │
              Currency                              Transaction Result
              Conversion                                    │
              (if needed)                              Donation Record
                                                            │
                                                       CRM Update
                                                       Receipt
                                                       Compliance Log
```

### Payment adapter pattern

Same modular pattern as communications — a common interface with per-provider adapters:

| Adapter | Countries | Type |
|---------|-----------|------|
| Stripe | Global (fallback) | Cards, some local methods |
| ATH Movil | Puerto Rico | Mobile payment |
| PIX | Brazil | Instant payment (Central Bank) |
| PromptPay | Thailand | Instant payment |
| UPI | India | Instant payment ecosystem |
| OMT | Lebanon | Money transfer |
| Cash | All | In-person recording (no external processor) |

**Common interface:**
```
PaymentAdapter {
  createPaymentIntent(amount, currency, donor_info) → PaymentIntent
  processPayment(payment_intent) → TransactionResult
  refund(transaction_id, amount) → RefundResult
  getTransactionStatus(transaction_id) → Status
  listTransactions(filters) → Transaction[]
  generateComplianceReport(date_range) → Report
}
```

**Multi-currency:** Donations are recorded in the currency they were made in. Reporting can display in the tenant's preferred currency with conversion rates logged at transaction time.

**Alliance donation splitting:** When a donation comes through a joint fundraising page, the payment router applies the split rules (configured per campaign, decided in workflows.md), records the full donation, and attributes the split portions to each member org's financial records.

---

## Analytics Architecture

(Decided in workflows.md — hybrid real-time/batch)

```
┌────────────┐     ┌──────────────┐     ┌──────────────┐
│ Tenant App  │────→│ Event Stream  │────→│ Real-time    │
│ (events)    │     │ (Kafka/NATS)  │     │ Aggregator   │──→ Live Dashboards
└────────────┘     └──────┬───────┘     └──────────────┘
                          │
                          ▼
                   ┌──────────────┐     ┌──────────────┐
                   │ Event Store   │────→│ Batch        │
                   │ (append-only) │     │ Processor    │──→ Historical Reports
                   └──────────────┘     └──────────────┘
```

### Real-time pipeline (active operations)

- Events emitted by the tenant app (door knocked, call made, donation received, volunteer checked in) flow into an event stream.
- A real-time aggregator maintains running counters and pushes updates to dashboards via WebSocket.
- Used during: canvassing days, phone banks, election day, live fundraising appeals.

### Batch pipeline (historical analysis)

- Events are durably stored in an append-only event store.
- Batch processors run on a schedule (hourly for recent data, daily for older data) to compute aggregates, trends, and reports.
- Used for: fundraising trends, volunteer growth, engagement analysis, compliance reports.

**DECIDED:** NATS JetStream.

Lightweight, durable event streaming. Simpler to operate than Kafka, sufficient for per-tenant event volumes (thousands of events per day, not millions per second). Single binary, easy to deploy per-tenant or as a shared service within a country cluster. Supports durable subscriptions for the real-time analytics pipeline and event replay for the event sourcing architecture.

---

## Localization Architecture

### I18n framework

- **RTL support designed in from day one.** All layout must use logical properties (start/end) not physical (left/right). No RTL as an afterthought.
- **String externalization:** All UI strings in locale files, never hardcoded. ICU MessageFormat for pluralization, gender, and complex formatting.
- **Locale negotiation:** User's platform identity language preference → tenant default language → browser language → English fallback.

### Content localization data model

(Deferred from geography.md — resolving here)

Content objects (email templates, canvassing scripts, donation form text, event descriptions, action page copy) store multiple language variants:

```
ContentItem
├── id (UUID)
├── content_type (email_template | script | form_text | event_description | action_page)
├── variants[]
│   ├── language (BCP 47 tag: es, pt-BR, th, hi, ar, fr, en)
│   ├── body (the content)
│   ├── status (draft | ai_generated | human_reviewed | published)
│   ├── reviewed_by → Person (nullable)
│   └── reviewed_at
├── source_language (the language it was originally authored in)
├── created_by → Person
└── created_at
```

**AI translation integration:**
- When staff creates content in one language, the platform can generate translations for the tenant's other configured languages.
- AI-generated translations are marked `ai_generated` and must be reviewed before being published (decided in geography.md).
- Translation memory: reviewed translations are stored and used to improve future AI translations for consistency.

---

## AI Integration

### Activism message generation

(Decided in workflows.md — AI generates unique messages per supporter, approved before send)

```
Campaign talking points + Supporter context
         │
         ▼
┌──────────────────┐
│  Message          │
│  Generation       │
│  Service          │
│                   │
│  - Talking points │
│  - Supporter info │
│  - Target info    │
│  - Tone/style     │
│  - Guardrails     │
└────────┬─────────┘
         │
         ▼
  Generated message
  (presented to supporter for review/edit/approve)
```

**Guardrails:**
- Message must stay on-topic with campaign talking points.
- No fabricated facts, statistics, or claims not in the source material.
- Language and tone appropriate for the target (elected official, regulator).
- Personally identifiable information used only as the supporter provides it.

### Translation service

```
Source content → Translation Service → AI-generated draft
                                            │
                                     Human review queue
                                            │
                                     Published translation
```

**DECIDED:** Hybrid — external API for managed-key tenants, self-hosted for BYOK tenants.

- **Managed-key tenants:** External AI API (Claude, GPT, or best-available) for message generation and translation. These tenants already trust GreenGrass with their encryption keys, so using an external AI with appropriate data processing agreements is consistent with the trust model. Highest quality, especially for multilingual output.
- **BYOK tenants:** Self-hosted open models (Llama, Mistral, or best-available open model) running within the tenant's infrastructure boundary. Data never leaves the trust perimeter. Quality may be lower for some languages (Thai, Arabic) — this is a known tradeoff of the BYOK sovereignty model.
- **Common interface:** The AI service abstracted behind an adapter, same as payments and comms. The tenant's encryption model determines which backend is used. Swappable as open models improve.

<!-- REVISIT: GPU infrastructure costs for self-hosted models per country. May need shared GPU pools within a country cluster rather than per-tenant GPU allocation. Also, open model quality for Thai and Arabic should be evaluated during pilot. -->

---

## Integration Architecture

### External system integrations

```
┌─────────────┐     ┌──────────────────┐     ┌──────────────┐
│ Tenant App   │◄───►│ Integration Hub   │◄───►│ External     │
│              │     │                   │     │ Systems      │
│              │     │ ┌──────────────┐ │     │              │
│              │     │ │ Adapter:     │ │     │ - Electoral  │
│              │     │ │ Electoral    │ │     │   commission │
│              │     │ │ Commission   │ │     │ - SMS gateway│
│              │     │ ├──────────────┤ │     │ - Payment    │
│              │     │ │ Adapter:     │ │     │   processor  │
│              │     │ │ Mapping/GIS  │ │     │ - Map data   │
│              │     │ ├──────────────┤ │     │ - Video      │
│              │     │ │ Adapter:     │ │     │   platform   │
│              │     │ │ Video        │ │     │ - Social     │
│              │     │ │ Platform     │ │     │   media APIs │
│              │     │ └──────────────┘ │     └──────────────┘
│              │     └──────────────────┘
└─────────────┘
```

**Integration hub pattern:**
- All external integrations go through a common adapter layer.
- Each adapter handles auth, rate limiting, error handling, and data mapping for one external system.
- Adapters are per-tenant (each tenant configures their own API keys, accounts, etc.).
- Data flowing through integrations is logged in the audit trail.

### Public API

**DECIDED:** REST + webhooks. Public API from day one.

- **REST API:** Documented, versioned, OAuth2-authenticated. Full CRUD on tenant resources (contacts, donations, events, campaigns, etc.) scoped by the caller's role and permissions.
- **Webhooks:** Real-time event notifications — donation received, volunteer signed up, canvassing interaction recorded, event RSVP, etc. Tenants configure webhook endpoints and select which events to subscribe to.
- **Rate limiting:** Per-tenant, per-API-key. Prevents abuse without limiting legitimate integration.
- **Not an afterthought:** The public API is the same API the GreenGrass frontend consumes. No private backdoors that the public API can't access. Tenants can build anything on top of GreenGrass that GreenGrass itself can build.

This is a core commitment to the sovereignty model — tenants who can build on top of the platform aren't locked into it.

---

## Technology Stack

<!-- DECISION NEEDED: Core technology choices.

These are the highest-impact decisions for development velocity, hiring, and long-term maintenance.

### Backend
Options:
- Node.js (TypeScript) — large ecosystem, async I/O suits web apps, TypeScript adds safety. Most hires know JS.
- Go — excellent concurrency, compiles to single binary (good for self-hosted), fast. Smaller ecosystem for web apps.
- Rust — maximum performance and safety, steep learning curve, slower development velocity.
- Python (Django/FastAPI) — rapid development, huge ecosystem, good for data/AI integration. Performance limits at scale.
- Elixir (Phoenix) — excellent concurrency model, real-time features built in (LiveView), smaller talent pool.

### Frontend
Options:
- React / Next.js — dominant ecosystem, huge community, SSR support. Bundle size concerns for mobile-first.
- SvelteKit — smaller bundles, better performance on low-end devices, less ecosystem.
- Progressive Web App (PWA) — web-based, installable, works offline. Avoids app store gatekeeping.
- React Native / Flutter — native mobile apps. Better performance, but two codebases (or cross-platform framework overhead).

### Database
Options:
- PostgreSQL — feature-rich, excellent for structured data, JSON support, PostGIS for geographic data. Industry standard.
- SQLite (tenant DB) + PostgreSQL (platform) — SQLite per tenant is lightweight and file-based, natural for single-tenant isolation. But limited concurrency.
- CockroachDB — distributed PostgreSQL-compatible, built-in replication. More complex, may be overkill per tenant.

### Mobile / Offline
Options:
- PWA with service workers + IndexedDB — web-based offline, no app store. Limited native API access.
- PWA with SQLite (via WASM or capacitor) — web-based with robust offline DB.
- Native app (React Native / Flutter) with SQLite — best offline experience, requires app store distribution.
- Capacitor (web → native wrapper) — write web code, package as native app. Access to native APIs, single codebase.

These choices are deeply interrelated. The recommendation section below proposes a coherent stack. -->

### Decided stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Backend | TypeScript (Node.js) with a framework TBD | Large talent pool, shared language with frontend, strong typing, good async I/O. Suitable for the integration-heavy workload. |
| Frontend | SvelteKit | Smaller bundles critical for low-end devices and low-bandwidth. SSR for progressive enhancement. Less ecosystem than React but better performance profile for the target context. |
| Mobile | Capacitor (SvelteKit → native wrapper) | Single codebase for launch. Web-first with native API access when needed (camera for QR check-in, biometrics for passkeys, offline storage). |
| Database | PostgreSQL (per-tenant) | Feature-rich, PostGIS for geographic data, excellent JSON support, proven at scale. One instance per tenant. |
| Offline DB | SQLite (SQLCipher) via Capacitor | Encrypted offline storage on device. Lightweight, proven, no server dependency. |
| Cache | Redis | Session management, rate limiting, real-time counters. Per-tenant instance or namespace. |
| Job queue | BullMQ (Redis-backed) or PostgreSQL-based (Graphile Worker) | Async task processing: email sends, SMS dispatch, data imports, sync. |
| Event stream | NATS JetStream | Lightweight, durable event streaming for real-time analytics. Simpler to operate per-tenant than Kafka. |
| Search | Meilisearch or PostgreSQL full-text | Meilisearch for fast, typo-tolerant search. PostgreSQL FTS as a simpler alternative that avoids an extra service. |
| Object storage | S3-compatible (MinIO for self-hosted) | File uploads, media, exports, backups. MinIO provides S3 API on any infrastructure. |
| Secrets management | HashiCorp Vault | Per-tenant encryption keys, API credentials, secrets rotation. |
| Container orchestration | Kubernetes (cloud-agnostic) | Per-tenant container deployment across countries. Managed K8s where available, self-managed where needed. No GKE. |
| IaC | Terraform / OpenTofu | Infrastructure as code for provisioning tenant infrastructure across providers and countries. |

### Native iOS roadmap

The Capacitor-wrapped SvelteKit app is the launch strategy, but the architecture must support a future native Swift iOS app without requiring backend changes.

**Design constraints to preserve this option:**
- **API-first architecture:** The backend exposes all functionality through the public REST API + webhooks. The SvelteKit frontend and Capacitor app are API consumers, not privileged clients. A future Swift app is just another API consumer.
- **No business logic in the frontend:** All authorization, validation, and data processing happens server-side. The frontend is a presentation layer. A native app can replicate the UX without reimplementing business rules.
- **Offline sync protocol is client-agnostic:** The event sourcing sync protocol (event push/pull, conflict detection) is defined at the API level, not coupled to a specific client implementation. A Swift app implements the same sync protocol against the same endpoints.
- **SQLCipher available on iOS natively:** The offline database choice (SQLite + SQLCipher) has first-class Swift support, so the offline architecture translates directly to a native app.
- **WebAuthn/passkeys are platform-native on iOS:** The passkey auth flow works natively on Apple devices — no Capacitor bridge needed for a Swift app.

---

## Deployment Architecture

### Per-country deployment

```
Country A (e.g., US/Puerto Rico)          Country B (e.g., Brazil)
┌──────────────────────────┐             ┌──────────────────────────┐
│  K8s Cluster              │             │  K8s Cluster              │
│  ┌────────┐ ┌────────┐   │             │  ┌────────┐ ┌────────┐   │
│  │Tenant 1│ │Tenant 2│   │             │  │Tenant 5│ │Tenant 6│   │
│  └────────┘ └────────┘   │             │  └────────┘ └────────┘   │
│  ┌────────┐               │             │  ┌────────┐               │
│  │Tenant 3│               │             │  │Tenant 7│               │
│  └────────┘               │             │  └────────┘               │
│                            │             │                            │
│  Platform Services (local) │             │  Platform Services (local) │
│  - Identity replica        │             │  - Identity replica        │
│  - Provisioning agent      │             │  - Provisioning agent      │
│  - Monitoring              │             │  - Monitoring              │
└──────────────────────────┘             └──────────────────────────┘
              │                                       │
              └───────────────┬───────────────────────┘
                              │
                   ┌──────────────────────┐
                   │  Central Platform     │
                   │  (incorporation       │
                   │   jurisdiction)       │
                   │                       │
                   │  - Identity primary   │
                   │  - Federation layer   │
                   │  - Platform Admin     │
                   │  - Billing            │
                   │  - Provisioning       │
                   │    orchestrator       │
                   └──────────────────────┘
```

### Self-hosted deployment

For self-hosted tenants, GreenGrass provides:

- **Application package:** Container images, Helm charts, configuration templates.
- **Installation documentation:** Step-by-step deployment guide.
- **Update mechanism:** Versioned releases, migration scripts, one-command update process.
- **Health check endpoint:** Self-hosted instances can optionally phone home for update notifications and health monitoring (opt-in, not required).
- **No telemetry by default.** Self-hosted tenants share nothing with GreenGrass unless they choose to.

**DECIDED:** Auto-update with rollback, with prominent notifications.

- **Auto-update by default:** Self-hosted instances check for updates and apply them automatically during a configurable maintenance window. Automatic rollback on failure — if health checks don't pass after the update, the system reverts to the previous version.
- **Prominent notifications:** Before, during, and after updates, the Org Admin receives clear, prominent notifications — what's being updated, when, what changed, and whether the update succeeded or rolled back. No silent updates.
- **Security updates are immediate:** Critical security patches bypass the maintenance window and apply as soon as possible, with notification.
- **Deferral option:** Org Admin can defer non-security updates for a limited window (e.g., up to 2 weeks) if timing is bad (mid-election). Security patches cannot be deferred.
- **Changelog transparency:** Every update includes a human-readable changelog. Open source application code means the tenant can inspect every change before or after it's applied.

---

## Open Questions — All Resolved

1. ~~Container orchestration~~ → Kubernetes, cloud-agnostic, no GKE
2. ~~Identity service location~~ → Centralized primary + per-country read replicas
3. ~~Geographic data~~ → Pre-loaded + import + community contribution
4. ~~Searchable encryption~~ → Blind index for identifiers, decrypt-on-read for notes/scores
5. ~~Key rotation~~ → Tenant decides with strong guidance
6. ~~Sync protocol~~ → Event sourcing
7. ~~Event streaming~~ → NATS JetStream
8. ~~Email infrastructure~~ → Self-hosted, per-country
9. ~~AI models~~ → Hybrid (external API for managed-key, self-hosted for BYOK)
10. ~~Public API~~ → REST + webhooks, day one
11. ~~Technology stack~~ → Validated (TypeScript/SvelteKit/Capacitor/PostgreSQL), native iOS path preserved
12. ~~Self-hosted updates~~ → Auto-update with rollback + prominent notifications
13. ~~Tenant URLs~~ → Subdomain default + custom domain support
