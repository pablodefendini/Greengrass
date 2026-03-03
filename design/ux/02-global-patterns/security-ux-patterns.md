# Security UX Patterns

## Purpose

This document defines the UX patterns for GreenGrass's security features — duress mode, BYOK key management, session handling, the panic button, and authentication flows. These features protect users in politically sensitive contexts where the wrong data in the wrong hands can be dangerous.

The design constraint: security must be invisible during normal operation and unambiguous during a threat. A volunteer canvassing in a hostile area should never think about encryption. But if they need to lock the app, the panic button must be instantly accessible and unmistakable.

## Duress Mode

### What It Is

Duress mode activates when a user logs in with a duress passkey (a separate passkey enrolled specifically for this purpose). The platform shows a sanitized version of the real interface — the navigation looks identical, but content is scrubbed to remove politically sensitive data.

**DECIDED (from navigation-model.md): Sanitized real structure.** The duress view presents the real navigation with plausible but scrubbed data.

### Enrollment

During security setup, users in the Aggressive security tier are prompted to enroll a duress passkey:

```
┌──────────────────────────────────────────────────────┐
│  Duress Passkey Setup                                 │
├──────────────────────────────────────────────────────┤
│                                                       │
│  A duress passkey lets you log in under coercion      │
│  and see a safe version of the platform.              │
│                                                       │
│  When you use this passkey:                           │
│  • The platform looks and works normally              │
│  • All sensitive data is hidden                       │
│  • Your real data is not affected                     │
│  • A silent alert is sent to your org admin           │
│                                                       │
│  Important: Use a different finger or device          │
│  for your duress passkey than your regular one.       │
│                                                       │
│  [Enroll Duress Passkey]                              │
│  [Skip for Now]                                       │
│                                                       │
└──────────────────────────────────────────────────────┘
```

**The duress passkey enrollment is never forced** — it's offered during security setup and available in personal security settings, but optional.

### Sanitization Rules

When duress mode is active, every feature area shows plausible but safe data:

| Feature Area | Normal View | Duress View |
|-------------|-------------|-------------|
| **Contacts** | Full CRM with support scores, voter ID data | 15-20 innocuous contacts. No support scores, no voter ID data. Names are common, not identifiable as activists. |
| **Dashboards** | Real metrics | Plausible low numbers. "47 contacts, 3 events, 12 volunteers." No trend lines, no goal thermometers. |
| **Canvassing** | Active campaigns, turfs, walk lists | No campaigns. Empty state: "Create your first campaign." |
| **Fundraising** | Donation history, forms, compliance | A few small donations. No compliance flags. No large donors. |
| **Messages** | Real conversations | 2-3 innocuous conversations. "Team meeting tomorrow," "Thanks for the update." No political content. |
| **Events** | Full event list with RSVPs | 1-2 past public events. No upcoming events. |
| **Press** | Media contacts, releases, endorsements | Empty. "No press activity yet." |
| **GOTV** | Election day operations | Empty. Not in election mode. |
| **Settings** | Full configuration | Reduced settings. No security tier indicators, no encryption key management. |
| **Audit trail** | Full activity log | Limited to the sanitized data's activity. |

**Key principles:**
- **Plausible, not empty.** A completely empty account would be suspicious. The duress view shows a small, low-activity but real-looking account.
- **No political markers.** Contact names, event titles, and message content contain no political parties, candidates, or policy issues.
- **Consistent across sessions.** The duress data is the same every time the duress passkey is used — it doesn't change between logins. (Otherwise, an observer who forces two logins would see different data and know something is wrong.)
- **No breadcrumbs.** The duress view leaves no trace that the real account has more data. No "hidden items" indicators, no mismatched counts, no leaked metadata.
- **Silent alert.** When a duress login occurs, a silent notification is sent to the Org Admin (to their email, not to in-app notifications — in case the Org Admin is also under duress).

### Duress Mode Indicators

**For the user in duress mode:** There is NO indicator that duress mode is active. The entire point is that an observer cannot distinguish the duress view from a real session. The user knows they used their duress passkey — that's the only signal.

**For the Org Admin:** The silent alert includes the user's identity, time, device info, and location (if available). The Org Admin can then take appropriate action (notify trusted contacts, activate organizational safety protocols).

---

## BYOK Key Management

### Key Generation Ceremony

The BYOK key generation wizard (WIZ-003) guides the Org Admin through creating and securing their organization's encryption keys. This is one of the most security-critical UX flows in the platform.

```
Step 1: Understanding
┌──────────────────────────────────────────────────────┐
│  BYOK Key Generation          Step 1 of 5            │
├──────────────────────────────────────────────────────┤
│                                                       │
│  Your organization's data will be encrypted with      │
│  a key that only you control.                         │
│                                                       │
│  What this means:                                     │
│  ✓ GreenGrass cannot read your data                   │
│  ✓ Your data cannot be handed over without your key   │
│  ✓ You are responsible for backing up your key         │
│                                                       │
│  ⚠ If you lose your key and your backup,             │
│    your data is permanently inaccessible.              │
│    GreenGrass cannot recover it.                       │
│                                                       │
│  [I Understand → Next]                                │
│                                                       │
└──────────────────────────────────────────────────────┘

Step 2: Key Generation
┌──────────────────────────────────────────────────────┐
│  Generating your encryption key...                    │
│                                                       │
│  ████████████████████████  100%                       │
│                                                       │
│  ✓ Key generated on your device                       │
│  ✓ Key never leaves your device unencrypted           │
│                                                       │
│  [Next →]                                             │
└──────────────────────────────────────────────────────┘

Step 3: Backup
┌──────────────────────────────────────────────────────┐
│  Back up your key                                     │
│                                                       │
│  Choose one or more backup methods:                   │
│                                                       │
│  [Download Key File]                                  │
│  Save to a secure location (USB drive, safe)          │
│                                                       │
│  [Print Recovery Sheet]                               │
│  A printable sheet with your recovery phrase           │
│                                                       │
│  ⚠ Store your backup separately from your device.    │
│    If your device is compromised, your backup          │
│    should be in a different location.                  │
│                                                       │
│  [Next →]                                             │
└──────────────────────────────────────────────────────┘

Step 4: Verification
┌──────────────────────────────────────────────────────┐
│  Verify your backup                                   │
│                                                       │
│  Enter the 5th and 11th words of your recovery        │
│  phrase to confirm you saved it correctly:             │
│                                                       │
│  Word 5:  [________]                                  │
│  Word 11: [________]                                  │
│                                                       │
│  [Verify →]                                           │
└──────────────────────────────────────────────────────┘

Step 5: Complete
┌──────────────────────────────────────────────────────┐
│  ✓ Your encryption keys are set up                    │
│                                                       │
│  Your organization's data is now encrypted with       │
│  keys only you control.                               │
│                                                       │
│  Important reminders:                                 │
│  • Keep your backup secure                            │
│  • Consider rotating your keys periodically           │
│  • If you suspect compromise, rotate immediately      │
│                                                       │
│  [Go to Dashboard]                                    │
└──────────────────────────────────────────────────────┘
```

### Key Rotation

Key rotation is available in Settings > Security > Encryption Key Management:

```
┌──────────────────────────────────────────────────────┐
│  Encryption Key Management                            │
├──────────────────────────────────────────────────────┤
│                                                       │
│  Current key status: Active                           │
│  Created: January 15, 2026                            │
│  Last rotated: Never                                  │
│                                                       │
│  Recommended: Rotate keys after security events       │
│  (staff departure, suspected compromise, device loss) │
│                                                       │
│  [Rotate Key]                                         │
│                                                       │
│  Key rotation re-encrypts all data with a new key.    │
│  This process runs in the background and may take     │
│  several hours for large datasets.                    │
│                                                       │
│  Previous keys: 0 rotated keys retained               │
│                                                       │
└──────────────────────────────────────────────────────┘
```

**Key rotation triggers** (suggested, not forced):
- Staff member leaves the organization
- Device lost or stolen
- Suspected security incident
- Periodic rotation (recommended annually)

The platform prompts the Org Admin to consider key rotation after relevant events (e.g., "Maria López was removed from staff. Consider rotating your encryption keys.") but never forces rotation.

---

## Panic Button

### What It Does

The panic button immediately locks the app and requires re-authentication. It's the emergency stop for situations where a user needs to secure the app instantly.

### Placement

- **Field mode:** Visible in the field action bar at the bottom of the screen. Labeled with a lock icon. Always one tap away.
- **Standard app:** Not permanently visible. Accessible via a keyboard shortcut (`Cmd+Shift+L` on desktop) or a quick gesture (e.g., triple-tap the app icon on mobile).

### Behavior

```
User taps panic button:

1. Screen immediately goes blank (white or black, no content flash)
2. All in-memory data is cleared
3. App shows the login screen
4. No indication of what was being viewed before
5. Silent alert sent to Org Admin (if configured)

If user was in field mode:
- Shift data is saved locally before lock (no data loss)
- On re-authentication, shift resumes where it left off
- If duress passkey is used to re-authenticate: shift data is hidden
```

### Design Considerations

- **No confirmation dialog.** "Are you sure?" defeats the purpose. The panic button is for emergencies — it acts immediately.
- **No animation.** The screen goes blank instantly. No fade, no transition. Speed is a safety feature.
- **Silent.** No sound, no vibration. The lock should not draw attention.
- **Accessible but not accidental.** In field mode, the lock button is positioned where it won't be triggered by accidental touches (corner of the screen, requires deliberate tap). The triple-tap gesture on mobile requires three quick taps in succession.

---

## Authentication Patterns

### Login Flow

The primary login flow uses passkeys:

```
┌──────────────────────────────────────────────────────┐
│                                                       │
│  [GreenGrass Logo]                                    │
│                                                       │
│  [Sign in with Passkey]                               │
│                                                       │
│  ─────── or ───────                                   │
│                                                       │
│  [Sign in with Magic Link]                            │
│  [Sign in with SMS Code]                              │
│                                                       │
│  [Account Recovery →]                                 │
│                                                       │
└──────────────────────────────────────────────────────┘
```

**Passkey flow:**
1. User taps "Sign in with Passkey"
2. Device biometric prompt appears (fingerprint, face, PIN)
3. Authentication completes — user enters the app
4. Total time: ~2 seconds

**Fallback flows** (for devices without passkey support or user preference):
- **Magic link:** User enters email → receives a link → taps link → authenticated
- **SMS OTP:** User enters phone number → receives a code → enters code → authenticated

**No password flow.** The platform does not support passwords. This is a deliberate security decision — passwords are phishable, passkeys are not.

### Session Management

| Persona | Session Length | Re-auth Triggers |
|---------|--------------|-----------------|
| Org Admin | Short (hours) | Sensitive actions (key management, role changes, billing) |
| Staff (all) | Medium (workday) | Sensitive actions |
| Volunteer / Team Lead | Medium (workday) / shift-length (field) | After shift end, after re-entering from background (>30 min) |
| Candidate | Medium (workday) | Standard |
| Supporter | Long (weeks) | Payment changes, personal info updates |

### Re-Authentication

When a session requires re-authentication (for sensitive actions or expired sessions):

```
┌──────────────────────────────────────────────────────┐
│                                                       │
│  Verify your identity                                 │
│                                                       │
│  This action requires re-authentication.              │
│                                                       │
│  [Verify with Passkey]                                │
│                                                       │
│  [Use alternative method →]                           │
│                                                       │
└──────────────────────────────────────────────────────┘
```

Re-authentication is a single biometric check — it should take <3 seconds. The user stays on the same screen and can proceed with their action immediately after verification.

### Session Expiration

When a session expires:

```
┌──────────────────────────────────────────────────────┐
│                                                       │
│  Your session has expired                             │
│                                                       │
│  For your security, you've been signed out            │
│  after a period of inactivity.                        │
│                                                       │
│  [Sign In]                                            │
│                                                       │
│  Any unsaved changes have been preserved.             │
│                                                       │
└──────────────────────────────────────────────────────┘
```

**Behaviors:**
- **Unsaved data preservation.** If the user was filling out a form, the data is saved locally and restored after re-login.
- **Redirect after login.** After re-authenticating, the user returns to the exact screen they were on.
- **No data exposure.** The session expiration screen shows no information about what the user was doing.

---

## Trusted Contact Recovery

### Setup

During onboarding (or in personal security settings), users set up trusted contacts for account recovery:

```
┌──────────────────────────────────────────────────────┐
│  Trusted Contacts                                     │
├──────────────────────────────────────────────────────┤
│                                                       │
│  If you lose access to your account, trusted          │
│  contacts can help you recover it.                    │
│                                                       │
│  We recommend 2-3 trusted contacts who:               │
│  • You trust with access to your account              │
│  • Are not likely to be compromised at the same time  │
│  • Have their own GreenGrass accounts                 │
│                                                       │
│  Trusted Contacts:                                    │
│  ┌────────────────────────────────────────────────┐   │
│  │  1. Maria López (Campaign Manager)      [✗]   │   │
│  │  2. Carlos Reyes (Field Director)        [✗]   │   │
│  └────────────────────────────────────────────────┘   │
│                                                       │
│  [+ Add Trusted Contact]                              │
│                                                       │
└──────────────────────────────────────────────────────┘
```

### Recovery Flow

When a user needs account recovery:

1. User taps "Account Recovery" on the login screen
2. User enters their email/phone to identify their account
3. System contacts their trusted contacts: "Ana needs help recovering her account. If you trust this request, approve it in the app."
4. Trusted contacts receive an in-app notification with approve/deny
5. When the required number of trusted contacts approve (configurable, default 2 of 3), the user can enroll a new passkey
6. The user is authenticated with their new passkey

**Security considerations:**
- Recovery notifications include the requester's identity and approximate location (so trusted contacts can verify)
- A cooling-off period (configurable, default 24 hours) before recovery completes — to allow time to detect social engineering
- Failed recovery attempts are logged and visible to the Org Admin
- The old passkey is invalidated when recovery completes

---

## Device Authorization

### Multi-Device Management

Users can manage their authorized devices in personal security settings:

```
┌──────────────────────────────────────────────────────┐
│  Your Devices                                         │
├──────────────────────────────────────────────────────┤
│                                                       │
│  ● This device                                        │
│    iPhone 14 · Last active: now                       │
│                                                       │
│  ○ MacBook Pro                                        │
│    Last active: 2 hours ago                           │
│    [Remove]                                           │
│                                                       │
│  ○ iPad Air                                           │
│    Last active: 3 days ago                            │
│    [Remove]                                           │
│                                                       │
│  [+ Add Device]                                       │
│                                                       │
└──────────────────────────────────────────────────────┘
```

**Behaviors:**
- **Remove device** — immediately revokes the passkey on that device. If the device is currently logged in, the session is terminated.
- **Add device** — generates a time-limited QR code or link to enroll a new passkey on another device.
- **Device naming** — devices are auto-named from their user agent (can be manually renamed for clarity).

---

## Security Indicators

### Encryption Status

Visible in message threads (per messaging.md):

```
│  🔒 Messages are end-to-end encrypted               │
│  Only you and the members of this conversation       │
│  can read these messages.                             │
```

For BYOK tenants, an additional indicator in settings:

```
│  🔑 Your data is encrypted with your organization's  │
│     keys. GreenGrass cannot access your data.         │
```

### Session Security Indicator

In personal security settings, a summary of current session security:

```
┌──────────────────────────────────────────────────────┐
│  Session Security                                     │
├──────────────────────────────────────────────────────┤
│  ✓ Authenticated via passkey (biometric)              │
│  ✓ Connection encrypted (TLS 1.3)                     │
│  ✓ Data encrypted at rest (BYOK)                      │
│  ✓ 2 trusted contacts configured                      │
│  ○ Duress passkey not set up  [Set up →]              │
└──────────────────────────────────────────────────────┘
```

This is informational — the user doesn't need to act on it during normal operation. It's available for users who want to verify their security posture.

---

## Open Questions

1. **Duress mode plausibility testing.** How do we validate that the duress view is convincing? User testing with people who don't know about the duress feature — can they tell the difference between a low-activity real account and a duress account?

2. **Key escrow option.** For tenants in the Standard security tier who don't want BYOK responsibility, should there be a managed key option where GreenGrass holds the keys? This would mean GreenGrass *can* read their data, but some orgs may prefer convenience over sovereignty.

3. **Biometric lock for sensitive screens.** Beyond session-level re-auth, should individual screens (encryption settings, audit trail, compliance) require a biometric check every time they're accessed? This adds friction but increases security for shared devices.

4. **Security onboarding for volunteers.** Volunteers in high-risk contexts need to understand the panic button and duress features without being overwhelmed. How much security onboarding is appropriate for someone whose primary task is knocking on doors?

<!-- REVISIT: The duress data generation strategy (how the sanitized data is created and maintained) needs detailed specification during implementation. Static data? Procedurally generated? Maintained manually by the Org Admin? Each approach has different trade-offs for plausibility and maintenance burden. -->
