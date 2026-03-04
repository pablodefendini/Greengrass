# User Profile Wireframes

## Purpose

Profile screens are the user's personal control panel — name, avatar, language, notification preferences, and security settings. Unlike Settings (SET-*, OA-only), profile screens are accessible to every authenticated user and affect only their own experience.

The core UX challenge: these screens serve 10 different personas with very different needs. A volunteer needs language preference and notification toggle. An Org Admin needs device management and trusted contact configuration. The profile must be simple for the simple case and deep for the complex case.

## Scope

| ID | Screen | Personas | Offline | Mobile | URL |
|----|--------|----------|---------|--------|-----|
| PROF-001 | Personal Profile | All authenticated | No | Yes | `/profile` |
| PROF-002 | Notification Preferences | All authenticated | No | Yes | `/profile/notifications` |
| PROF-003 | Security Settings (Personal) | All authenticated | No | Yes | `/profile/security` |
| PROF-004 | Language Preference | All authenticated | No | Yes | `/profile/language` |
| PROF-005 | Tenant Switcher | Multi-tenant users | No | Yes | `/profile/switch-tenant` |

## Profile Navigation Context

Profile screens are accessed from the user menu (avatar/name dropdown in the top bar).

```
User Menu (top-right dropdown)
  My Profile      → PROF-001
  Notifications   → PROF-002
  Security        → PROF-003
  Language        → PROF-004
  Switch Org      → PROF-005 (if multi-tenant)
  ─────────────
  Sign Out
```

---

## PROF-001: Personal Profile

User's own profile and account information.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  My Profile                                                      [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Profile ───────────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  ┌──────────┐  Name *                                                 │ │
│  │  │          │  ┌──────────────────────────────────────────────────┐    │ │
│  │  │ [avatar] │  │ Ana López                                       │    │ │
│  │  │          │  └──────────────────────────────────────────────────┘    │ │
│  │  │  [Edit]  │                                                         │ │
│  │  └──────────┘  Email                                                  │ │
│  │                ana@partido.org  (managed by your admin)               │ │
│  │                                                                        │ │
│  │  Phone (optional)                                                      │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐  │ │
│  │  │ +1 (787) 555-0198                                              │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Preferences ───────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Display Language              Timezone                                │ │
│  │  [Español (PR) ▾]             [America/Puerto_Rico (AST) ▾]           │ │
│  │  [Change Language →]                                                   │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Account ───────────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Role: Field Director                                                  │ │
│  │  Organization: Partido Verde de Puerto Rico                            │ │
│  │  Member since: Jan 15, 2026                                            │ │
│  │                                                                        │ │
│  │  Last login: Mar 3, 2:30 PM from Chrome on macOS                      │ │
│  │  This device: Chrome on macOS (current)                                │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────   │
│  [Save]                                                                      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile

Same sections stacked vertically. Avatar centered at top.

### Interaction

- **Avatar upload**: crop to square, supports camera capture or gallery. Resized to 120×120px
- **Email**: read-only — managed by Org Admin. User cannot change their email
- **Phone**: optional. Used for SMS login fallback and notifications
- **Language link**: navigates to PROF-004 for full language selection
- **Role/Org**: read-only informational. Shows the user's current role and organization
- **Last login**: security awareness — helps users notice if someone else has accessed their account

---

## PROF-002: Notification Preferences

Per-channel, per-feature notification configuration.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Notification Preferences                                        [Save]      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Delivery Channels ────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Notification Type       In-App   Push    Email    SMS                │ │
│  │  ─────────────────────   ──────   ──────  ──────   ────               │ │
│  │                                                                        │ │
│  │  ▾ Messages                                                            │ │
│  │  Direct messages         ☑        ☑       □        □                  │ │
│  │  Group messages          ☑        □       □        □                  │ │
│  │  Mentions (@you)         ☑        ☑       ☑        □                  │ │
│  │                                                                        │ │
│  │  ▾ Approvals                                                           │ │
│  │  Approval requests       ☑        ☑       ☑        □                  │ │
│  │  Approval decisions      ☑        □       ☑        □                  │ │
│  │                                                                        │ │
│  │  ▾ Assignments                                                         │ │
│  │  New shift assigned      ☑        ☑       ☑        ☑                  │ │
│  │  Shift reminder          ☑        ☑       □        ☑                  │ │
│  │  Event reminder          ☑        ☑       ☑        □                  │ │
│  │                                                                        │ │
│  │  ▸ Compliance (collapsed)                                              │ │
│  │  ▸ System (collapsed)                                                  │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Quiet Hours ───────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  ☑ Enable quiet hours (suppress push + SMS notifications)             │ │
│  │                                                                        │ │
│  │  From: [10:00 PM ▾]     To: [7:00 AM ▾]                              │ │
│  │                                                                        │ │
│  │  ⓘ In-app notifications still accumulate silently.                     │ │
│  │    Election day (GOTV) notifications override quiet hours.             │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Email Digest ──────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  ○ Real-time (each notification sends an email immediately)            │ │
│  │  ● Daily digest (one summary email per day at 8:00 AM)                │ │
│  │  ○ Weekly digest (one summary email per week on Monday)                │ │
│  │  ○ No email notifications                                             │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  [Test Notification]                                             [Save]      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile

Same matrix but only shows In-App and Push columns (most relevant for mobile). SMS and Email accessible via expand.

### Interaction

- **Channel × Type matrix**: checkboxes for each combination. In-App is always on (can't disable)
- **Collapsible sections**: feature areas expand/collapse. Most relevant sections expanded by default based on the user's role
- **Quiet hours**: suppresses push and SMS during configured window. In-app notifications still accumulate. GOTV overrides quiet hours (election day)
- **Email digest**: controls email notification batching. Daily digest reduces email volume
- **[Test Notification]**: sends a test notification through all enabled channels — confirms everything is connected
- **Persona-adaptive**: Volunteer sees fewer notification types (messages, shifts, events). Org Admin sees everything

---

## PROF-003: Security Settings (Personal)

Personal device management, passkey review, and trusted contact configuration.

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Security Settings                                                           │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─ Your Devices ──────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Device                  Last Active       Status                     │ │
│  │  ─────────────────────   ──────────────    ──────                     │ │
│  │  Chrome on macOS         Now               ● This device              │ │
│  │  Safari on iPhone        Mar 3, 10:15 AM   ● Active     [Remove]     │ │
│  │  Chrome on Android       Feb 28, 4:00 PM   ● Active     [Remove]     │ │
│  │                                                                        │ │
│  │  [+ Add Device]                                                        │ │
│  │                                                                        │ │
│  │  ⓘ Removing a device revokes its passkey. The device will need to      │ │
│  │    be re-authorized to access your account.                            │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Trusted Contacts ─────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  These people can help you recover your account if you lose            │ │
│  │  access to all your devices.                                           │ │
│  │                                                                        │ │
│  │  1. Jorge Rivera · jorge@partido.org               [Remove]            │ │
│  │  2. Carlos Méndez · carlos@partido.org             [Remove]            │ │
│  │                                                                        │ │
│  │  [+ Add Contact]                                                       │ │
│  │                                                                        │ │
│  │  Recovery requires 2 of your trusted contacts to approve.              │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─ Security Summary ─────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  Authentication: Passkey (biometric)                     ✓             │ │
│  │  Connection: Encrypted (TLS 1.3)                         ✓             │ │
│  │  Data: Encrypted at rest                                 ✓             │ │
│  │  Trusted contacts: 2 configured                          ✓             │ │
│  │  Duress passkey: Not configured                          ○             │ │
│  │                                                                        │ │
│  │  [Set Up Duress Passkey]  (Maximum security tier only)                │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Interaction

- **Device removal**: requires re-authentication (AUTH-007 re-auth variant). Confirmation: "Remove Chrome on Android? This device will be signed out immediately."
- **[+ Add Device]**: navigates to AUTH-006 (Device Authorization)
- **Trusted contacts**: same interface as AUTH-005, accessible for ongoing management
- **Security summary**: at-a-glance view of the user's security posture. ✓ = configured, ○ = not configured
- **Duress passkey**: only shown for Maximum security tier tenants. Links to a setup flow where the user creates an alternative passkey that triggers sanitized data mode
- **Sensitive actions**: all actions on this screen (device removal, trusted contact changes) require re-authentication

---

## PROF-004: Language Preference

Simple language switcher.

### Mobile

```
┌────────────────────────────┐
│                            │
│  ← Profile                │
│                            │
│  Language / Idioma          │
│                            │
│  Select your display       │
│  language.                 │
│                            │
│  ● Español (Puerto Rico)   │
│  ○ English (US)            │
│                            │
│                            │
│  ⓘ Available languages are │
│  configured by your        │
│  organization. Content     │
│  (help articles, training) │
│  may not be fully          │
│  translated in all         │
│  languages.                │
│                            │
│                            │
└────────────────────────────┘
```

### Interaction

- **Instant apply**: selecting a language applies it immediately — no save button needed. The entire UI re-renders in the selected language (SvelteKit reactivity)
- **RTL auto-flip**: selecting an RTL language (Arabic, Hebrew) flips the entire layout direction via CSS logical properties
- **Tenant-controlled**: only languages enabled by the Org Admin (SET-001) appear. Users can't add languages
- **Persistent**: saved to user profile server-side. Follows the user across devices
- **Bilingual header**: title shown in both the current language and the selected language ("Language / Idioma") to ensure the user can find this screen regardless of the current language setting

---

## PROF-005: Tenant Switcher

For users who belong to multiple organizations (e.g., alliance staff, consultants).

### Mobile

```
┌────────────────────────────┐
│                            │
│  ← Profile                │
│                            │
│  Switch Organization       │
│                            │
│  ┌────────────────────────┐│
│  │ [logo]                 ││
│  │ Partido Verde de PR    ││
│  │ Role: Field Director   ││
│  │ Last active: Now       ││
│  │             ● Current  ││
│  └────────────────────────┘│
│                            │
│  ┌────────────────────────┐│
│  │ [logo]                 ││
│  │ Alianza Verde Nacional ││
│  │ Role: Alliance Coord.  ││
│  │ Last active: Mar 1     ││
│  │             [Switch]   ││
│  └────────────────────────┘│
│                            │
│  ┌────────────────────────┐│
│  │ [logo]                 ││
│  │ Verde Bayamón          ││
│  │ Role: Consultant       ││
│  │ Last active: Feb 15    ││
│  │             [Switch]   ││
│  └────────────────────────┘│
│                            │
│  ─────────────────────     │
│                            │
│  [+ Join Another Org]      │
│                            │
└────────────────────────────┘
```

### Interaction

- **Switch**: navigates to the home screen of the selected organization. Full context switch — sidebar, data, branding all change to the new org
- **Current**: indicated with ● badge. Can't switch to the org you're already in
- **Role per org**: user may have different roles in different organizations. Displayed for awareness
- **[+ Join Another Org]**: opens a flow to request membership in another org (sends an affiliation request). Uncommon — most multi-tenant users are added by OA invitation
- **Visual separation**: each org card shows the org's own logo and branding, previewing what the user will see after switching

---

## Empty States Summary

| Screen | Empty Message | Action |
|--------|--------------|--------|
| PROF-002 (no notification options) | Your organization hasn't configured notification channels yet. | — |
| PROF-003 (no devices) | No other devices are connected to your account. | + Add Device |
| PROF-003 (no trusted contacts) | Set up trusted contacts so you can recover your account if you lose your device. | + Add Contact |
| PROF-005 (single org) | You're a member of one organization. This screen is for users with multiple org memberships. | — |

---

## Accessibility Notes

- Avatar upload includes alt text auto-generated from user name
- Notification matrix uses labeled checkboxes (not toggle-only)
- Language selection applies immediately with aria-live announcement
- Device list has keyboard-accessible remove buttons with confirmation
- Trusted contact removal has explicit confirmation dialog
- Security summary uses text labels alongside ✓/○ indicators

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Email not user-editable | Managed by Org Admin only | Email is the account identifier and is used for dedup, invitations, and audit. Changing it has security and compliance implications |
| Instant language switch | No save/confirm — applies immediately | Users should experience the language before committing. Undo is trivial (select another language) |
| Quiet hours with GOTV override | Election day notifications bypass quiet hours | GOTV operations are time-critical. A missed notification on election day could mean lost votes |
| Security summary as checklist | Green check / empty circle visual | Quick scan to see if anything needs attention. More approachable than a dense security settings form |
| Tenant switcher in profile | Not a top-level nav element | Multi-tenant is uncommon. Making it prominent would add complexity for the 95% of users with one org |

## Open Questions

1. **Profile photo privacy** — should the user's avatar be visible to supporters (e.g., in public event pages, press releases)? Or is it internal-only? Political campaign staff may have safety concerns about public visibility
2. **Notification sound** — should users be able to choose notification sounds, or is the default OS sound sufficient? Custom sounds could help differentiate GreenGrass notifications from other apps
3. **Multi-tenant notifications** — when a user belongs to multiple orgs, should notifications from non-active orgs be shown? Or only the currently active org? Cross-org notification routing is complex
