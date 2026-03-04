# Settings & Admin Wireframes

## Purpose

Settings is the control plane for the organization — branding, roles, compliance, integrations, security, and billing. Every screen in this section is Org Admin–only and desktop-preferred. These are low-frequency, high-impact screens: most settings are configured once during onboarding and rarely revisited, but getting them wrong has cascading consequences (wrong compliance rules, broken integrations, misconfigured permissions).

The core UX challenge: settings screens must balance comprehensiveness with approachability. A new Org Admin setting up their first campaign needs guided setup. An experienced admin making a quick adjustment needs to find the right toggle without wading through tutorials. The solution: organized categories, in-context help text on every setting, and progressive disclosure for advanced options.

All settings screens share a common pattern: three-tier settings hierarchy (org → feature → personal), change tracking ("Last modified by X on date"), unsaved changes warning on navigation, and per-field validation.

## Scope

| ID | Screen | Category | URL |
|----|--------|----------|-----|
| SET-001 | Org Profile & Branding | Organization | `/settings/org` |
| SET-002 | Role Template Editor | Roles & Permissions | `/settings/roles` |
| SET-003 | Permission Override Panel | Roles & Permissions | `/settings/roles/[id]/permissions` |
| SET-004 | Staff Management List | Staff | `/settings/staff` |
| SET-005 | Staff Invite Flow | Staff | `/settings/staff/invite` |
| SET-006 | Geographic Scope Configuration | Campaign | `/settings/geography` |
| SET-007 | Campaign Period Configuration | Campaign | `/settings/campaign-period` |
| SET-008 | Compliance Configuration | Compliance | `/settings/compliance` |
| SET-009 | Contribution Limits Configuration | Compliance | `/settings/contribution-limits` |
| SET-010 | Disclaimer Text Configuration | Compliance | `/settings/disclaimers` |
| SET-011 | Data Retention Policy | Compliance | `/settings/data-retention` |
| SET-012 | Integration Settings Hub | Integrations | `/settings/integrations` |
| SET-013 | WhatsApp Business Setup | Integrations | `/settings/integrations/whatsapp` |
| SET-014 | SMS Provider Configuration | Integrations | `/settings/integrations/sms` |
| SET-015 | Email Domain Configuration | Integrations | `/settings/integrations/email` |
| SET-016 | Social Media Account Connections | Integrations | `/settings/integrations/social` |
| SET-017 | Billing & Subscription | Financial | `/settings/billing` |
| SET-018 | Audit Trail Viewer | Security | `/settings/audit-trail` |
| SET-019 | Security Settings | Security | `/settings/security` |
| SET-020 | Encryption Key Management | Security | `/settings/encryption` |
| SET-021 | API Key Management | Developer | `/settings/api-keys` |
| SET-022 | Webhook Configuration | Developer | `/settings/webhooks` |

All screens: OA only, No offline, Desktop-preferred.

## Settings Navigation Context

```
SETTINGS (sidebar section — OA only)

  Organization
    Org Profile & Branding  → SET-001

  Team
    Staff Management        → SET-004
    Role Templates          → SET-002

  Campaign
    Geographic Scope        → SET-006
    Campaign Period          → SET-007

  Compliance
    Compliance Config       → SET-008
    Contribution Limits     → SET-009
    Disclaimers             → SET-010
    Data Retention          → SET-011

  Integrations
    Overview                → SET-012
    WhatsApp                → SET-013
    SMS                     → SET-014
    Email Domain            → SET-015
    Social Accounts         → SET-016

  Security
    Security Settings       → SET-019
    Encryption Keys         → SET-020
    Audit Trail             → SET-018

  Developer
    API Keys                → SET-021
    Webhooks                → SET-022

  Billing
    Plan & Billing          → SET-017
```

---

## SET-001: Org Profile & Branding

Configure organization identity and visual branding applied across public pages and internal interface.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Organization                                                     │
│                                                                  [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Organization Identity ─────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Organization Name *                                                   │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐  │ │
│  │  │ Partido Verde de Puerto Rico                                    │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  │  Short Name (for nav, mobile)                                          │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐  │ │
│  │  │ Partido Verde                                                   │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  │  Logo                                                                  │ │
│  │  ┌──────────┐                                                         │ │
│  │  │  [logo]  │  [Change Logo]  [Remove]                                │ │
│  │  │  120×120 │  PNG or SVG, min 120×120px                              │ │
│  │  └──────────┘                                                         │ │
│  │                                                                        │ │
│  │  Default Language *                  Additional Languages              │ │
│  │  [Español (Puerto Rico) ▾]          [+ Add Language]                  │ │
│  │                                      · English (US) [×]               │ │
│  │                                                                        │ │
│  │  Timezone *                                                            │ │
│  │  [America/Puerto_Rico (AST) ▾]                                        │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Branding ──────────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Primary Color             Accent Color                                │ │
│  │  ┌────┐ ┌──────────────┐   ┌────┐ ┌──────────────┐                   │ │
│  │  │ ██ │ │ #2E7D32      │   │ ██ │ │ #1B5E20      │                   │ │
│  │  └────┘ └──────────────┘   └────┘ └──────────────┘                   │ │
│  │                                                                        │ │
│  │  ⓘ Colors are used on public pages (donation forms, event pages,      │ │
│  │    supporter portal) and the login screen. The internal staff          │ │
│  │    interface uses system colors with your primary as an accent.        │ │
│  │                                                                        │ │
│  │  Preview                                                               │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐  │ │
│  │  │  [Logo]  Partido Verde de Puerto Rico                           │  │ │
│  │  │  ──────────────────────────────────────                         │  │ │
│  │  │  [████████ Donate Now ████████]                                 │  │ │
│  │  │                                                                  │  │ │
│  │  │  Public page preview with your brand colors                     │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ▸ Contact Information (collapsed)                                           │
│  ▸ Public Website & Social Links (collapsed)                                 │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│  Last modified by Jorge Rivera on Feb 15, 2026                               │
│  [Save]                                                                      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Interaction

- **Color picker**: swatch + hex input. Live preview updates as colors change
- **Logo upload**: validates dimensions and format. Shows how logo appears at different sizes (nav, login, public)
- **Language**: default determines the UI language for new users. Additional languages enable content translation
- **Unsaved changes**: navigating away with changes shows "You have unsaved changes. Save before leaving?"
- **Change tracking**: footer shows who last modified and when

---

## SET-002: Role Template Editor

Create and edit role templates that define what each persona can see and do.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Role Templates                              [+ Create Template]  │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ Template              Based On    Members   Last Modified             │  │
│  │ ────────────────────  ─────────   ────────  ──────────────            │  │
│  │ Org Admin             (system)    2         System default            │  │
│  │ Communications Dir.   (system)    1         System default            │  │
│  │ Finance Director      (system)    1         Feb 20, 2026             │  │
│  │ Field Director         (system)    1         System default            │  │
│  │ Volunteer Coordinator (system)    2         System default            │  │
│  │ Data Manager          (system)    1         System default            │  │
│  │ Volunteer             (system)    48        System default            │  │
│  │ Team Lead             (system)    6         System default            │  │
│  │ Candidate             (system)    1         System default            │  │
│  │ Regional Coordinator  Custom      3         Mar 1, 2026  ✎           │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ⓘ System templates can be customized but not deleted. Custom templates      │
│    are created by cloning a system template and adjusting permissions.        │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Template Detail (on click)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Role Templates              Field Director                                │
│                                                                  [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Template Name: Field Director                                               │
│  Based on: System default                                                    │
│  Members: 1 (Ana López)                                                      │
│                                                                              │
│  ┌─ Permissions ───────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Feature Area        View    Create   Edit    Delete   Export   Admin  │ │
│  │  ─────────────────   ──────  ──────   ──────  ──────   ──────  ─────  │ │
│  │                                                                        │ │
│  │  ▾ Field Operations                                                    │ │
│  │  Canvassing          ☑       ☑        ☑       ☑        ☑       ☑      │ │
│  │  Phone Banking       ☑       ☑        ☑       ☑        ☑       ☑      │ │
│  │  Voter Registration  ☑       ☑        ☑       ☑        ☑       ☑      │ │
│  │  Turfs               ☑       ☑        ☑       ☑        —       ☑      │ │
│  │                                                                        │ │
│  │  ▾ GOTV                                                                │ │
│  │  Universe            ☑       ☑        ☑       —        ☑       ☑      │ │
│  │  Turfs               ☑       ☑        ☑       ☑        —       ☑      │ │
│  │  Staging             ☑       ☑        ☑       ☑        —       —      │ │
│  │  War Room            ☑       —        —       —        —       —      │ │
│  │                                                                        │ │
│  │  ▾ People / CRM                                                        │ │
│  │  Contacts            ☑       —        ☑       —        ☑       —      │ │
│  │  Segments            ☑       ☑        ☑       —        ☑       —      │ │
│  │  Tags                ☑       ☑        ☑       —        —       —      │ │
│  │                                                                        │ │
│  │  ▸ Communications (collapsed)                                          │ │
│  │  ▸ Fundraising (collapsed)                                             │ │
│  │  ▸ Events (collapsed)                                                  │ │
│  │  ▸ Messaging (collapsed)                                               │ │
│  │  ▸ Alliance (collapsed)                                                │ │
│  │  ▸ Settings (collapsed)                                                │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│  [Clone Template]  [Reset to Default]                            [Save]      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Interaction

- **Permission matrix**: feature areas as rows, actions as columns. Checkboxes toggle individual permissions
- **Collapsible sections**: feature areas expand/collapse. Only the most relevant areas for the role are expanded by default
- **[Clone Template]**: creates a custom template based on this one — useful for creating variants (e.g., "Regional Coordinator" based on "Field Director")
- **[Reset to Default]**: restores system defaults for system templates. Confirmation required
- **Member count**: shows how many users have this role. Clicking opens the staff list filtered to that role
- **Modified indicator**: custom permissions show a dot indicator next to changed checkboxes vs. the system default

---

## SET-003: Permission Override Panel

Apply per-user permission exceptions beyond their role template.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Staff > Ana López                    Permission Overrides                 │
│                                                                  [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Role Template: Field Director                                               │
│  Overrides: 2 active                                                         │
│                                                                              │
│  ┌─ Override List ─────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  ✚ Fundraising > Donations > Export    Added by Jorge R. on Feb 20    │ │
│  │    Reason: Needs to export donor lists for field targeting             │ │
│  │    [Remove Override]                                                   │ │
│  │                                                                        │ │
│  │  ✚ Communications > Email > View       Added by Jorge R. on Mar 1     │ │
│  │    Reason: Monitor outreach campaign results                          │ │
│  │    [Remove Override]                                                   │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  [+ Add Override]                                                            │
│                                                                              │
│  ⓘ Overrides grant additional permissions beyond the role template.          │
│    To restrict permissions, create a more limited custom role template.       │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Add Override Modal

```
┌─ Add Permission Override ──────────────────────┐
│                                                 │
│  Feature Area                                   │
│  [Fundraising ▾]                               │
│                                                 │
│  Sub-Area                                       │
│  [Donations ▾]                                 │
│                                                 │
│  Permission                                     │
│  [Export ▾]                                    │
│                                                 │
│  Reason *                                       │
│  ┌─────────────────────────────────────────┐   │
│  │ Needs donor lists for field targeting   │   │
│  └─────────────────────────────────────────┘   │
│  Required for audit trail.                     │
│                                                 │
│  [Cancel]                       [Add Override]  │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Interaction

- **Additive only**: overrides can only grant additional permissions, not revoke. To restrict, use a different role template
- **Reason required**: every override must have a documented reason — creates audit trail for security reviews
- **Per-user**: overrides apply to one user only, not the role template
- **Audit trail**: who added the override and when is always visible

---

## SET-004: Staff Management List

View and manage all staff members.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Staff Management                              [+ Invite Staff]   │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  [Search staff...]   Role: [All ▾]   Status: [All ▾]                        │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ Name              Email                    Role           Status      │  │
│  │ ────────────────  ──────────────────────   ─────────────  ──────      │  │
│  │ Jorge Rivera      jorge@partido.org        Org Admin      ● Active   │  │
│  │ Ana López         ana@partido.org          Field Director  ● Active   │  │
│  │ Carlos Méndez     carlos@partido.org       Comms Director  ● Active   │  │
│  │ María Santos      maria@partido.org        Vol. Coord.    ● Active   │  │
│  │ Luisa Fernández   luisa@partido.org        Data Manager   ● Active   │  │
│  │ Pedro Ríos        pedro@partido.org        Finance Dir.   ● Active   │  │
│  │ Carmen Vega       carmen@partido.org       Candidate      ● Active   │  │
│  │ Luis Ortiz        luis@partido.org         Reg. Coord.    ● Active   │  │
│  │ Rosa Delgado      rosa@partido.org         Vol. Coord.    ◐ Invited  │  │
│  │ Miguel Torres     miguel@partido.org       Team Lead      ● Active   │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  Showing 10 of 10 staff members                                              │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                      │
│  │ Total Staff  │  │ Active       │  │ Pending      │                      │
│  │ 10           │  │ 9            │  │ 1            │                      │
│  └──────────────┘  └──────────────┘  └──────────────┘                      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Row Actions (click row → detail panel or modal)

- **Edit**: change role, geographic scope
- **Resend Invite**: for pending invitations
- **Reset Passkey**: trigger passkey reset for the user
- **Deactivate**: disable account (reversible). Confirmation: "This will immediately revoke [name]'s access to all GreenGrass features."
- **View Overrides**: go to SET-003 for this user
- **View Activity**: shows recent login and action history for this user

### Interaction

- **Status badges**: ● Active, ◐ Invited (pending acceptance), ○ Deactivated
- **Filter by role**: dropdown shows all role templates with member counts
- **Last activity**: optional column showing when each user last logged in — helps identify inactive accounts
- **Bulk actions**: select multiple → Resend Invites, Deactivate

---

## SET-005: Staff Invite Flow

Invite new staff members with role and scope assignment.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Staff Management                      Invite Staff Member                 │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Step 1: Contact ───────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Email Address *                                                       │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐  │ │
│  │  │ rosa@partido.org                                                │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  │  Name *                                                                │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐  │ │
│  │  │ Rosa Delgado                                                    │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Step 2: Role ──────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Role Template *                                                       │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐  │ │
│  │  │ [Volunteer Coordinator ▾]                                       │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  │  This role can:                                                        │ │
│  │  · View and manage volunteers                                          │ │
│  │  · Create and manage events                                            │ │
│  │  · Assign volunteers to shifts                                         │ │
│  │  · View field operation results                                        │ │
│  │  · Access messaging                                                    │ │
│  │                                                                        │ │
│  │  This role cannot:                                                      │ │
│  │  · Access fundraising or financial data                                │ │
│  │  · Modify settings or integrations                                     │ │
│  │  · View or edit security settings                                      │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Step 3: Scope (optional) ──────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Geographic Scope                                                      │ │
│  │  ○ Full access (all regions)                                           │ │
│  │  ● Restricted to specific regions:                                     │ │
│  │    ☑ San Juan North                                                    │ │
│  │    ☑ Bayamón                                                           │ │
│  │    □ Caguas                                                            │ │
│  │    □ Carolina                                                          │ │
│  │    □ Ponce                                                             │ │
│  │                                                                        │ │
│  │  ⓘ Scoped users only see contacts, turfs, and events within their     │ │
│  │    assigned regions.                                                    │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│  [Cancel]                                                 [Send Invitation]  │
│                                                                              │
│  ⓘ An invitation email will be sent with a link to set up their account      │
│    and register a passkey. Invitations expire after 7 days.                  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Interaction

- **Role summary**: plain-language "can / cannot" summary — not the raw permission matrix. Helps OA confirm they're assigning the right role
- **Geographic scope**: optional restriction. Useful for regional coordinators who should only see their area
- **Invitation email**: system-sent with setup link. 7-day expiry, resendable from SET-004
- **Duplicate check**: warns if email is already registered or has a pending invitation

---

## SET-006: Geographic Scope Configuration

Define the campaign's geographic boundaries and regions.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Geographic Scope                                     [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────────────────────────┐  ┌────────────────────────────────────┐│
│  │                                  │  │ Regions                            ││
│  │     [Map showing campaign area]  │  │ ────────                           ││
│  │                                  │  │                                    ││
│  │     Shaded regions visible       │  │ ☑ San Juan North       4,450 ctct ││
│  │                                  │  │ ☑ Bayamón              3,440 ctct ││
│  │                                  │  │ ☑ Caguas               2,710 ctct ││
│  │                                  │  │ ☑ Carolina             2,170 ctct ││
│  │                                  │  │ ☑ Ponce                2,062 ctct ││
│  │                                  │  │                                    ││
│  │                                  │  │ Total: 14,832 contacts             ││
│  │                                  │  │                                    ││
│  │                                  │  │ [+ Add Region]                     ││
│  │                                  │  │                                    ││
│  └──────────────────────────────────┘  └────────────────────────────────────┘│
│                                                                              │
│  ┌─ Scope Type ────────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Jurisdiction Level *                                                  │ │
│  │  ○ Country       ○ State/Province    ● District/Municipality           │ │
│  │  ○ County/Parish ○ Precinct          ○ Custom boundaries               │ │
│  │                                                                        │ │
│  │  Country: [Puerto Rico ▾]                                              │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ⓘ Geographic scope determines which contacts, turfs, and polling locations  │
│    appear in the platform. Staff with regional scope restrictions will only   │
│    see data within their assigned regions.                                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SET-007: Campaign Period Configuration

Set the official campaign period for compliance calculations.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Campaign Period                                      [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Current Campaign Period ───────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Campaign Name *                                                       │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐  │ │
│  │  │ 2026 General Election                                           │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  │  Start Date *                         End Date *                       │ │
│  │  ┌────────────────────────────┐      ┌────────────────────────────┐   │ │
│  │  │ 2026-01-15  📅             │      │ 2026-11-03  📅             │   │ │
│  │  └────────────────────────────┘      └────────────────────────────┘   │ │
│  │                                                                        │ │
│  │  Election Date *                                                       │ │
│  │  ┌────────────────────────────┐                                       │ │
│  │  │ 2026-11-03  📅             │                                       │ │
│  │  └────────────────────────────┘                                       │ │
│  │                                                                        │ │
│  │  Status: ● Active (Day 48 of 293)                                     │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ⓘ The campaign period determines when contribution limits are enforced,     │
│    when compliance reports are generated, and when GOTV features activate.   │
│    Changing dates after contributions have been recorded may require          │
│    compliance review.                                                        │
│                                                                              │
│  ▸ Previous Campaign Periods (collapsed — archive of past campaigns)         │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SET-008: Compliance Configuration

Set the jurisdiction and compliance framework.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Compliance                                           [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Compliance Framework ──────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Jurisdiction *                                                        │ │
│  │  [Puerto Rico ▾]                                                       │ │
│  │                                                                        │ │
│  │  Framework *                                                           │ │
│  │  [Puerto Rico Election Code (Ley Electoral) ▾]                         │ │
│  │                                                                        │ │
│  │  Campaign Type *                                                       │ │
│  │  ○ Gubernatorial    ○ Legislative    ○ Municipal                       │ │
│  │  ○ Federal           ○ Referendum     ● Other                          │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Enforced Rules ────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Based on your jurisdiction and framework:                             │ │
│  │                                                                        │ │
│  │  ☑ Individual contribution limits                                      │ │
│  │  ☑ Corporate/organizational contribution limits                        │ │
│  │  ☑ Donor identity verification                                         │ │
│  │  ☑ Disclosure requirements (public donor reporting)                    │ │
│  │  ☑ Communication disclaimers ("Paid for by...")                        │ │
│  │  □ Foreign contribution prohibition                                    │ │
│  │  □ In-kind contribution tracking                                       │ │
│  │                                                                        │ │
│  │  ⓘ Rules are pre-configured based on jurisdiction. You can enable      │ │
│  │    additional rules but cannot disable jurisdiction-required ones.      │ │
│  │    Required rules are locked ☑.                                        │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Enforcement Behavior ──────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  When a compliance violation is detected:                              │ │
│  │  ● Block the action and require review                                 │ │
│  │  ○ Allow with warning and flag for review                              │ │
│  │  ○ Allow with automatic flag (no blocking)                             │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SET-009: Contribution Limits Configuration

Define per-donor contribution limits.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Contribution Limits                                  [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Per-Cycle Limits ──────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Donor Type           Per Donation    Per Cycle     Aggregation        │ │
│  │  ─────────────────    ────────────    ─────────     ────────────       │ │
│  │  Individual           No limit        $2,900        Per election       │ │
│  │  Corporation/Org      No limit        $5,000        Per election       │ │
│  │  PAC                  No limit        $5,000        Per election       │ │
│  │  Self-Funding         No limit        No limit      —                  │ │
│  │                                                                        │ │
│  │  [Edit Limits]                                                         │ │
│  │                                                                        │ │
│  │  Currency: [USD ▾]                                                     │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Aggregate Tracking ────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  How are contributions aggregated?                                     │ │
│  │  ● Per election cycle (defined in Campaign Period)                     │ │
│  │  ○ Per calendar year                                                   │ │
│  │  ○ Rolling 12 months                                                   │ │
│  │                                                                        │ │
│  │  Include in-kind contributions in aggregate?                           │ │
│  │  ○ Yes    ● No                                                        │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Over-Limit Behavior ───────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  When a donor exceeds their limit:                                     │ │
│  │  ● Block the donation and show an explanation to the donor             │ │
│  │  ○ Accept and flag for Finance Director review                         │ │
│  │  ○ Accept the maximum allowed amount and refund the excess             │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SET-010: Disclaimer Text Configuration

Configure legal disclaimers for public-facing content.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Disclaimers                                          [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Primary Disclaimer ───────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Text *                                                                │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐  │ │
│  │  │ Paid for by Partido Verde de Puerto Rico. Not authorized by     │  │ │
│  │  │ any candidate or candidate's committee.                         │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  │  Applied to: ☑ Donation forms  ☑ Email campaigns  ☑ SMS               │ │
│  │              ☑ Social posts    ☑ Public pages     ☑ Print materials   │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Additional Disclaimers ────────────────────────────────────────── [+] ┐ │
│  │                                                                        │ │
│  │  Fundraising Disclaimer                                                │ │
│  │  "Contributions are not tax-deductible for federal income tax..."     │ │
│  │  Applied to: Donation forms, Donation confirmations                   │ │
│  │  [Edit] [×]                                                            │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Translations ─────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Language         Primary Disclaimer     Status                       │ │
│  │  ──────────────   ──────────────────     ──────                       │ │
│  │  Español (PR)     "Pagado por Partido    ✓ Set                       │ │
│  │                    Verde de PR..."                                     │ │
│  │  English (US)     "Paid for by Partido   ✓ Set                       │ │
│  │                    Verde de PR..."                                     │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SET-011: Data Retention Policy

Configure automatic data deletion rules.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Data Retention                                       [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Retention Rules ───────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Data Type               Retain For     After Expiry    Status        │ │
│  │  ─────────────────────   ────────────   ────────────   ──────         │ │
│  │  Contact PII             Until deleted  Manual only     ● Active      │ │
│  │  Canvassing responses    2 years        Auto-delete     ● Active      │ │
│  │  Message content         1 year         Auto-delete     ● Active      │ │
│  │  Donation records        7 years        Archive only    ● Active      │ │
│  │  Audit logs              5 years        Archive only    ● Active      │ │
│  │  Session data            90 days        Auto-delete     ● Active      │ │
│  │                                                                        │ │
│  │  [Edit Rules]                                                          │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Post-Campaign Cleanup ─────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  After the campaign period ends:                                       │ │
│  │  ○ Retain all data (manual cleanup later)                              │ │
│  │  ● Apply retention rules from the table above                         │ │
│  │  ○ Prompt for bulk cleanup review                                      │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ⚠ Donation records have a minimum 7-year retention period for compliance.   │
│    This cannot be shortened.                                                 │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SET-012: Integration Settings Hub

Central overview of all third-party integrations.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Integrations                                                     │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Communications ────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐     │ │
│  │  │ 📧 Email         │  │ 💬 SMS           │  │ 📱 WhatsApp      │     │ │
│  │  │ ● Connected      │  │ ● Connected      │  │ ○ Not set up     │     │ │
│  │  │ sendgrid.com     │  │ Twilio           │  │                  │     │ │
│  │  │ Last sync: 2m    │  │ Last sync: 5m    │  │                  │     │ │
│  │  │ [Configure →]    │  │ [Configure →]    │  │ [Set Up →]       │     │ │
│  │  └──────────────────┘  └──────────────────┘  └──────────────────┘     │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Social Media ──────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐     │ │
│  │  │ 𝕏 Twitter/X     │  │ 📘 Facebook      │  │ 📸 Instagram     │     │ │
│  │  │ ● Connected      │  │ ● Connected      │  │ ● Connected      │     │ │
│  │  │ @partido_verde   │  │ Partido Verde    │  │ via Facebook     │     │ │
│  │  │ [Configure →]    │  │ [Configure →]    │  │ [Configure →]    │     │ │
│  │  └──────────────────┘  └──────────────────┘  └──────────────────┘     │ │
│  │                                                                        │ │
│  │  ┌──────────────────┐                                                  │ │
│  │  │ 🎵 TikTok       │                                                  │ │
│  │  │ ● Connected      │                                                  │ │
│  │  │ @partido_verde   │                                                  │ │
│  │  │ [Configure →]    │                                                  │ │
│  │  └──────────────────┘                                                  │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Payments ──────────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  ┌──────────────────┐                                                  │ │
│  │  │ 💳 Stripe        │                                                  │ │
│  │  │ ● Connected      │                                                  │ │
│  │  │ Test mode: OFF   │                                                  │ │
│  │  │ [Configure →]    │  (links to FUND-019)                             │ │
│  │  └──────────────────┘                                                  │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ▸ Maps & Geolocation (collapsed)                                            │
│  ▸ Video Conferencing (collapsed)                                            │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Interaction

- **Status cards**: each integration shows connection status, provider name, and last sync time
- **[Configure →]**: navigates to the detailed setup screen (SET-013, SET-014, SET-015, SET-016)
- **[Set Up →]**: for unconfigured integrations — starts the setup flow
- **Categories**: Communications, Social Media, Payments, Maps, Video — grouped by function

---

## SET-013 – SET-016: Integration Detail Screens

All integration detail screens follow the same pattern. Showing WhatsApp (SET-013) as representative.

### SET-013: WhatsApp Business Setup

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Integrations                WhatsApp Business Setup                       │
│                                                                  [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Status: ○ Not Connected                                                     │
│                                                                              │
│  ┌─ Connection ────────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  To connect WhatsApp Business:                                         │ │
│  │  1. Create a WhatsApp Business account at business.whatsapp.com        │ │
│  │  2. Generate an API token                                              │ │
│  │  3. Enter the token below                                              │ │
│  │                                                                        │ │
│  │  Phone Number *                                                        │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐  │ │
│  │  │ +1 (787) 555-0100                                              │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  │  API Token *                                                           │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐  │ │
│  │  │ ••••••••••••••••••••••••                                        │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  │  [Test Connection]                         [Connect]                   │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Message Templates ── (shown after connection) ─────────────────── [+] ┐ │
│  │                                                                        │ │
│  │  WhatsApp requires pre-approved templates for outbound messages.       │ │
│  │                                                                        │ │
│  │  Template Name           Status        Last Used                      │ │
│  │  ─────────────────────   ──────────    ──────────                     │ │
│  │  election_reminder       ● Approved    Mar 2, 2026                    │ │
│  │  donation_thank_you      ● Approved    Feb 28, 2026                   │ │
│  │  event_invitation        ◐ Pending     —                              │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ▸ Webhook Configuration (collapsed)                                         │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

**SET-014 (SMS)**: same pattern — provider selection (Twilio/AWS SNS/other), API credentials, phone number configuration, test message, delivery logs.

**SET-015 (Email Domain)**: cross-references COMM-010. DNS record generation (SPF/DKIM/DMARC), verification status, auto-polling.

**SET-016 (Social Accounts)**: cross-references SOCIAL-005. OAuth connection per platform, token status, permissions display.

---

## SET-017: Billing & Subscription

Manage the organization's subscription plan and billing.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Billing & Subscription                                           │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Current Plan ──────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Plan: Campaign Pro                                                    │ │
│  │  Price: $149/month                                                     │ │
│  │  Billing cycle: Monthly                                                │ │
│  │  Next renewal: April 1, 2026                                           │ │
│  │                                                                        │ │
│  │  Includes:                                                             │ │
│  │  · Up to 25 staff users (using 10)                                     │ │
│  │  · Up to 50,000 contacts (using 14,832)                                │ │
│  │  · All features except Alliance                                        │ │
│  │  · Standard support                                                    │ │
│  │                                                                        │ │
│  │  [Change Plan]   [Switch to Annual (save 20%)]                        │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Payment Method ────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  💳 Visa ending in 4242                    Expires 09/2027             │ │
│  │  [Update Payment Method]                                               │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Billing History ───────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Date          Amount    Status     Invoice                           │ │
│  │  ──────────    ────────  ──────     ───────                           │ │
│  │  Mar 1, 2026   $149.00   Paid       [Download PDF]                    │ │
│  │  Feb 1, 2026   $149.00   Paid       [Download PDF]                    │ │
│  │  Jan 1, 2026   $149.00   Paid       [Download PDF]                    │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Billing Contact ───────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Name: Pedro Ríos (Finance Director)                                   │ │
│  │  Email: pedro@partido.org                                              │ │
│  │  [Update Contact]                                                      │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SET-018: Audit Trail Viewer

Searchable log of all user actions for compliance and security monitoring.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Audit Trail                                      [Export CSV]     │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  [Search...]  User: [All ▾]  Action: [All ▾]  Date: [Last 7 days ▾]        │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ Timestamp            User             Action           Detail         │  │
│  │ ────────────────     ──────────────   ──────────────   ────────────   │  │
│  │ Mar 3, 2:46 PM      Jorge Rivera     Data Export      Contacts CSV   │  │
│  │ Mar 3, 2:30 PM      Ana López        Setting Change   Turf re-cut    │  │
│  │ Mar 3, 1:15 PM      Carlos Méndez    Email Sent       Campaign: ...  │  │
│  │ Mar 3, 12:00 PM     Jorge Rivera     Login            Passkey auth   │  │
│  │ Mar 3, 11:45 AM     Pedro Ríos       Refund           #DON-1247      │  │
│  │ Mar 3, 10:30 AM     María Santos     Staff Invite     Rosa Delgado   │  │
│  │ Mar 2, 5:00 PM      Jorge Rivera     Permission Chg   Ana +Export    │  │
│  │ Mar 2, 3:15 PM      Luisa Fernández  Data Import      2,847 rows     │  │
│  │ Mar 2, 2:00 PM      Jorge Rivera     Setting Change   Compliance     │  │
│  │ Mar 2, 1:30 PM      Ana López        Login            Passkey auth   │  │
│  │                                                                       │  │
│  │ [Load more...]                                                        │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  Action Types: Login, Logout, Data Export, Data Import, Setting Change,      │
│  Permission Change, Staff Invite, Staff Deactivation, Refund, Email Sent,    │
│  SMS Sent, Contact Delete, Bulk Action, API Key Created, Key Rotation        │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Interaction

- **Searchable**: full-text search across all fields
- **Filterable**: by user, action type, date range
- **Non-deletable**: audit logs cannot be modified or deleted — tamper-proof
- **Export**: CSV or JSON for compliance reporting
- **Row click**: expands to show full detail (IP address, user agent, affected records)

---

## SET-019: Security Settings

Configure organization-wide security posture.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Security                                             [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Security Tier ─────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  ○ Standard — Passkey authentication, encrypted data at rest           │ │
│  │  ● Enhanced — Standard + MFA required, session timeout, IP logging     │ │
│  │  ○ Maximum — Enhanced + BYOK encryption, IP allowlist, device auth    │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Authentication ────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  ☑ Require passkey for all staff                                       │ │
│  │  ☑ Require MFA for Org Admin role                                      │ │
│  │  □ Require MFA for all staff roles                                     │ │
│  │                                                                        │ │
│  │  Session Timeout                                                       │ │
│  │  [4 hours ▾]  (staff must re-authenticate after this period)           │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Access Controls ───────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  IP Allowlist                                                          │ │
│  │  ○ Disabled (any IP)                                                   │ │
│  │  ● Enabled — staff can only log in from these IPs/ranges:             │ │
│  │    ┌──────────────────────────────────────────────────────────┐        │ │
│  │    │ 203.0.113.0/24  (Office network)               [×]     │        │ │
│  │    │ 198.51.100.42   (Jorge home)                    [×]     │        │ │
│  │    │ [+ Add IP/Range]                                        │        │ │
│  │    └──────────────────────────────────────────────────────────┘        │ │
│  │                                                                        │ │
│  │  ⓘ IP allowlist does not apply to field mode (volunteers need          │ │
│  │    mobile access from any network).                                    │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Incident Response ─────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Security Contact Email *                                              │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐  │ │
│  │  │ security@partido.org                                            │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  │  ☑ Send email alert on: suspicious login attempts                     │ │
│  │  ☑ Send email alert on: data exports                                  │ │
│  │  ☑ Send email alert on: permission changes                            │ │
│  │  □ Send email alert on: all logins                                    │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ▸ Duress Mode Configuration (collapsed — see Security UX Patterns)          │
│  ▸ Trusted Contact Recovery (collapsed)                                      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SET-020: Encryption Key Management

BYOK key management for tenants using Maximum security tier.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Encryption Key Management                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Current Key ───────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Key ID: gg-key-2026-001                                               │ │
│  │  Created: Jan 15, 2026                                                 │ │
│  │  Algorithm: AES-256-GCM                                                │ │
│  │  Status: ● Active                                                      │ │
│  │                                                                        │ │
│  │  Key Shares: 3 of 5 (Shamir's Secret Sharing)                          │ │
│  │  Share holders:                                                        │ │
│  │  · Jorge Rivera (OA) — share 1                                         │ │
│  │  · Pedro Ríos (FD) — share 2                                           │ │
│  │  · Ana López (FiD) — share 3                                           │ │
│  │  · Carmen Vega (Candidate) — share 4                                   │ │
│  │  · External counsel — share 5                                           │ │
│  │                                                                        │ │
│  │  [Rotate Key]  [Export Key Backup]                                     │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Key History ───────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Key ID               Created         Status      Rotated By          │ │
│  │  ────────────────     ──────────      ──────      ──────────          │ │
│  │  gg-key-2026-001      Jan 15, 2026    ● Active    —                   │ │
│  │  gg-key-2025-003      Sep 1, 2025     ○ Retired   Jorge Rivera       │ │
│  │  gg-key-2025-002      Jun 1, 2025     ○ Retired   Jorge Rivera       │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ⚠ Key rotation requires 3 of 5 share holders present. Schedule a key       │
│    rotation ceremony when planning to rotate. See the BYOK Key Generation    │
│    wizard in Onboarding for the initial key setup process.                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Interaction

- **Maximum tier only**: this screen is only visible/accessible for tenants on the Maximum security tier
- **[Rotate Key]**: initiates key rotation ceremony — requires 3 of 5 share holders to be present. Links to a wizard flow similar to the initial BYOK generation (ONB-005)
- **[Export Key Backup]**: encrypted backup of the key, downloadable. Requires 3-of-5 share holder authentication
- **Key history**: all previous keys listed with creation date, retirement date, and who initiated rotation
- **Share holders**: the 5 people who hold key shares. Changing share holders requires a full key rotation

---

## SET-021: API Key Management

Generate and manage API keys for external integrations.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > API Keys                                      [+ Generate Key]   │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ Name              Scope            Created      Last Used    Status   │  │
│  │ ────────────────  ──────────────   ──────────   ──────────   ──────   │  │
│  │ CRM Sync          Contacts (R/W)   Feb 1, 2026  Mar 3, 2026  Active  │  │
│  │                   Segments (R)                                        │  │
│  │                                                                       │  │
│  │ Analytics Export   Contacts (R)     Jan 15, 2026 Feb 28, 2026 Active  │  │
│  │                   Donations (R)                                       │  │
│  │                   Events (R)                                          │  │
│  │                                                                       │  │
│  │ Test Key           All (R)          Mar 1, 2026  Mar 1, 2026  Active  │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ⓘ API keys grant programmatic access to your organization's data. Treat     │
│    them like passwords — never share them in code repositories or messages.  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Generate Key Modal

Fields: Name, Scope (checkboxes for each feature area + read/write), IP restrictions (optional), Expiration (optional). Key shown once after generation — must copy immediately.

---

## SET-022: Webhook Configuration

Register webhooks for system events.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Settings > Webhooks                                      [+ Add Webhook]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ Name            URL                         Events     Status         │  │
│  │ ──────────────  ──────────────────────────   ────────   ──────         │  │
│  │ CRM Sync        https://crm.example.com/wh  3 events   ● Active      │  │
│  │                 contact.created, contact.updated, contact.deleted     │  │
│  │                 Success rate: 99.2% (last 30 days)                    │  │
│  │                                                                       │  │
│  │ Donation Alert  https://slack.example.com/wh 1 event    ● Active      │  │
│  │                 donation.received                                     │  │
│  │                 Success rate: 100% (last 30 days)                     │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Add/Edit Webhook Modal

Fields: Name, URL, Secret (auto-generated, for signature verification), Events (checkboxes: contact.created/updated/deleted, donation.received/refunded, event.created, shift.completed, etc.), Retry policy (1/3/5 retries with exponential backoff). [Test Webhook] sends a test payload.

### Webhook Detail (click row)

Shows delivery log: timestamp, event type, response code, response time. Failed deliveries highlighted with retry status.

---

## Empty States Summary

| Screen | Empty Message | Action |
|--------|--------------|--------|
| SET-002 (no custom roles) | System role templates are pre-configured. Create a custom template to define specialized roles. | + Create Template |
| SET-004 (no staff) | Invite your team to start using GreenGrass. | + Invite Staff |
| SET-012 (no integrations) | Connect your communication tools, social accounts, and payment processors. | (cards show "Set Up" for each) |
| SET-018 (no activity) | Audit trail records all significant actions. Activity will appear here once staff start using the platform. | — |
| SET-021 (no API keys) | Generate API keys to connect external tools and services to GreenGrass. | + Generate Key |
| SET-022 (no webhooks) | Webhooks send real-time notifications to your external services when events happen in GreenGrass. | + Add Webhook |

---

## Accessibility Notes

- All settings forms use visible labels (no placeholder-only)
- Permission matrix checkboxes have row + column header associations for screen readers
- Color picker includes hex text input (not color-only interaction)
- Audit trail table is keyboard-navigable with row expansion
- Security tier descriptions use text, not just visual emphasis
- IP allowlist input validates format with helpful error messages

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| All settings OA-only | No delegation of settings access | Settings affect the entire organization. A single point of responsibility reduces misconfiguration risk |
| Three-tier security | Standard / Enhanced / Maximum | Organizations have different risk profiles. A low-risk local campaign doesn't need BYOK encryption. A national campaign in a hostile environment does |
| Additive-only permission overrides | Overrides can only grant, not revoke | Restricting permissions should be done through role templates, not per-user exceptions. This prevents a "Swiss cheese" permission model |
| Integration hub as card grid | Visual status cards, not a settings form | Integrations are independent services. Card layout makes connection status scannable at a glance |
| Audit trail non-deletable | No delete/edit capability for audit entries | Tamper-proof audit trail is a compliance requirement. Even OA cannot modify logs |
| Separate screens per integration | Individual setup screens (SET-013-016) | Each integration has unique configuration requirements (OAuth vs API key, templates, DNS records). A combined form would be overwhelming |

## Open Questions

1. **Settings delegation** — should specific settings categories be delegatable to non-OA roles? E.g., Communications Director managing email domain settings, Finance Director managing billing. Current design is OA-only for simplicity but may not scale
2. **Setting change approval** — should critical settings changes (security tier, compliance framework, key rotation) require a second OA to approve? Prevents a single compromised OA account from weakening security
3. **Settings import/export** — should organizations be able to export their settings configuration and import it into a new tenant? Useful for alliance members who want consistent configuration
4. **API rate limits** — what rate limits apply to API keys? Should these be configurable per key, or set at the plan level?
5. **Integration health monitoring** — should the platform proactively alert when an integration is failing (e.g., email delivery rate drops, WhatsApp token expires)? Currently passive — staff must check the integration hub
