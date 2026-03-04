# Authentication Wireframes

## Purpose

Authentication is the gateway to the platform — and the first line of defense for election integrity data. GreenGrass uses passkey-first authentication: no passwords, no password resets, no password-based attacks. The primary flow is biometric passkey (face/fingerprint), completing login in under 3 seconds.

The core UX challenge: passkeys are unfamiliar to many users, especially volunteers in the global south using older Android devices. The auth flow must guide users who've never seen passkey enrollment while remaining instant for experienced users. Fallbacks (magic link, SMS OTP) must exist but never become the default path.

Security-specific flows (account recovery via trusted contacts, duress passkey, device authorization) are rare but high-stakes — the UX must be clear under stress.

## Scope

| ID | Screen | Personas | Offline | Mobile | URL |
|----|--------|----------|---------|--------|-----|
| AUTH-001 | Login (Passkey) | All | No | Primary | `/login` |
| AUTH-002 | Login Fallback (Magic Link / SMS OTP) | All | No | Primary | `/login/fallback` |
| AUTH-003 | Account Recovery (Trusted Contact) | All | No | Primary | `/recover` |
| AUTH-004 | Passkey Registration | All | No | Primary | `/register` |
| AUTH-005 | Trusted Contact Setup | All | No | Yes | `/register/trusted-contacts` |
| AUTH-006 | Device Authorization | All | No | Yes | `/authorize-device` |
| AUTH-007 | Session Expired / Re-authenticate | All | No | Primary | `/session-expired` |

## Auth Navigation Context

Auth screens live in the `(auth)` layout group — no sidebar, no navigation chrome. Minimal branding (tenant logo + name). Centered card layout.

---

## AUTH-001: Login (Passkey)

The primary login screen. Passkey-first with a single CTA. Designed to complete login in under 3 seconds for returning users.

### Mobile (Primary)

```
┌────────────────────────────┐
│                            │
│                            │
│                            │
│        [Org Logo]          │
│                            │
│     Partido Verde de       │
│     Puerto Rico            │
│                            │
│                            │
│                            │
│  ┌────────────────────────┐│
│  │                        ││
│  │   Sign In with         ││
│  │   Passkey              ││
│  │                        ││
│  └────────────────────────┘│
│    48px tall, full-width   │
│    Primary color button    │
│                            │
│                            │
│                            │
│  Use a different method    │
│                            │
│                            │
│                            │
│                            │
│                            │
│                            │
│                            │
│                            │
│                            │
│  Having trouble signing in?│
│  Contact your admin.       │
│                            │
└────────────────────────────┘
```

### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                                                                              │
│                     ┌──────────────────────────────┐                         │
│                     │                              │                         │
│                     │        [Org Logo]             │                         │
│                     │                              │                         │
│                     │   Partido Verde de            │                         │
│                     │   Puerto Rico                 │                         │
│                     │                              │                         │
│                     │                              │                         │
│                     │  ┌──────────────────────────┐│                         │
│                     │  │                          ││                         │
│                     │  │  Sign In with Passkey    ││                         │
│                     │  │                          ││                         │
│                     │  └──────────────────────────┘│                         │
│                     │                              │                         │
│                     │  Use a different method      │                         │
│                     │                              │                         │
│                     │                              │                         │
│                     │  Having trouble signing in?  │                         │
│                     │  Contact your admin.         │                         │
│                     │                              │                         │
│                     └──────────────────────────────┘                         │
│                                                                              │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

Centered card on a neutral background. Tenant branding (logo + colors) applied to the card and button.

### Flow

1. User opens app or navigates to platform URL
2. If existing session → skip to app (no login screen)
3. If no session → AUTH-001 appears
4. User taps "Sign In with Passkey"
5. Device biometric prompt appears (face/fingerprint)
6. On success → redirect to home screen (persona-appropriate dashboard)
7. On biometric failure → device shows retry. After 3 failures, show "Use a different method"

### States

- **Default**: single button, ready to tap
- **Biometric prompt**: native OS overlay (Face ID, fingerprint, Windows Hello). GreenGrass UI dims behind it
- **Success**: brief checkmark animation → redirect
- **Error** (no passkey found): "No passkey found on this device. Set up a passkey or use a different method." [Set Up Passkey] [Use Different Method]
- **Error** (server): "Unable to connect. Check your internet connection and try again." [Try Again]

### Interaction

- **"Use a different method"**: navigates to AUTH-002 (magic link / SMS OTP)
- **"Having trouble?"**: link to admin contact — not a self-service password reset (there are no passwords)
- **Auto-detect**: if the device has no passkey registered for this tenant, skip the biometric and show the "No passkey found" state immediately
- **No email/password fields**: deliberate — passkey-first design eliminates phishing attack surface

---

## AUTH-002: Login Fallback (Magic Link / SMS OTP)

Alternative login for devices without passkey support or when the user prefers a different method.

### Mobile (Primary)

```
┌────────────────────────────┐
│                            │
│  ← Back                   │
│                            │
│        [Org Logo]          │
│                            │
│  Sign in with...           │
│                            │
│  ┌────────────────────────┐│
│  │ ✉ Magic Link          ││
│  │                        ││
│  │ We'll email you a      ││
│  │ one-time login link.   ││
│  └────────────────────────┘│
│                            │
│  ┌────────────────────────┐│
│  │ 📱 SMS Code            ││
│  │                        ││
│  │ We'll text you a       ││
│  │ one-time code.         ││
│  └────────────────────────┘│
│                            │
│                            │
│                            │
└────────────────────────────┘
```

### Magic Link Flow

```
┌────────────────────────────┐      ┌────────────────────────────┐
│                            │      │                            │
│  ← Back                   │      │                            │
│                            │      │  ✉ Check your email        │
│  ✉ Magic Link             │      │                            │
│                            │      │  We sent a login link to   │
│  Your Email                │      │  a****z@partido.org        │
│  ┌────────────────────────┐│      │                            │
│  │ ana@partido.org        ││      │  The link expires in       │
│  └────────────────────────┘│      │  15 minutes.               │
│                            │      │                            │
│  ┌────────────────────────┐│      │  Didn't receive it?        │
│  │    Send Login Link     ││      │  [Resend]  (available      │
│  └────────────────────────┘│      │   after 60 seconds)        │
│                            │      │                            │
│                            │      │  [Try a different method]  │
│                            │      │                            │
└────────────────────────────┘      └────────────────────────────┘
```

### SMS OTP Flow

```
┌────────────────────────────┐      ┌────────────────────────────┐
│                            │      │                            │
│  ← Back                   │      │  📱 Enter your code         │
│                            │      │                            │
│  📱 SMS Code               │      │  We sent a 6-digit code   │
│                            │      │  to +1 (787) ***-0198      │
│  Your Phone Number         │      │                            │
│  ┌────────────────────────┐│      │  ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐│
│  │ +1 (787) 555-0198     ││      │  │  │ │  │ │  │ │  │ │  │ │  ││
│  └────────────────────────┘│      │  └──┘ └──┘ └──┘ └──┘ └──┘ └──┘│
│                            │      │                            │
│  ┌────────────────────────┐│      │  Code expires in 10 min    │
│  │      Send Code         ││      │                            │
│  └────────────────────────┘│      │  [Resend Code]             │
│                            │      │  [Try a different method]  │
│                            │      │                            │
└────────────────────────────┘      └────────────────────────────┘
```

### Interaction

- **Magic link**: email contains a one-time URL. Tapping the link logs the user in immediately. Link expires in 15 minutes. Resend available after 60 seconds
- **SMS OTP**: 6-digit numeric code. Auto-focuses first digit field. Auto-submits when all 6 digits entered. Expires in 10 minutes
- **Rate limiting**: max 3 magic link/OTP requests per 15-minute window. After limit: "Too many attempts. Please wait 15 minutes or contact your admin."
- **Email masking**: shows partial email (a****z@partido.org) for privacy on shared devices
- **Phone masking**: shows last 4 digits only
- **After successful fallback login**: prompt to register a passkey ("Set up passkey for faster login next time?") — nudges toward the primary auth method

---

## AUTH-003: Account Recovery (Trusted Contact)

Recovery flow when a user loses all device access. Their trusted contacts verify their identity and approve recovery.

### Mobile (Primary)

```
┌────────────────────────────┐
│                            │
│        [Org Logo]          │
│                            │
│  Account Recovery          │
│                            │
│  Lost access to your       │
│  device? Your trusted      │
│  contacts can help you     │
│  recover your account.     │
│                            │
│  Your Email                │
│  ┌────────────────────────┐│
│  │ ana@partido.org        ││
│  └────────────────────────┘│
│                            │
│  ┌────────────────────────┐│
│  │  Start Recovery        ││
│  └────────────────────────┘│
│                            │
│  ─────────────────────     │
│                            │
│  How it works:             │
│  1. We notify your trusted │
│     contacts               │
│  2. They verify it's you   │
│  3. After approval, you    │
│     can set up a new       │
│     passkey                │
│                            │
│  This takes at least       │
│  24 hours for security.    │
│                            │
└────────────────────────────┘
```

### Recovery Status Screen

```
┌────────────────────────────┐
│                            │
│  Recovery In Progress      │
│                            │
│  We've notified your       │
│  trusted contacts.         │
│                            │
│  Approvals needed: 2 of 3  │
│                            │
│  Contact 1  ● Approved     │
│  Contact 2  ◐ Pending      │
│  Contact 3  ◐ Pending      │
│                            │
│  Cooling-off period:       │
│  23h 14m remaining         │
│                            │
│  ─────────────────────     │
│                            │
│  We'll email you at        │
│  a****z@partido.org when   │
│  recovery is approved.     │
│                            │
│  ⓘ The 24-hour wait        │
│  protects against          │
│  unauthorized recovery     │
│  attempts. Your trusted    │
│  contacts can cancel the   │
│  request if it wasn't you. │
│                            │
└────────────────────────────┘
```

### Trusted Contact Approval (what the contact sees)

```
┌────────────────────────────┐
│                            │
│  Recovery Request          │
│                            │
│  Ana López is trying to    │
│  recover their GreenGrass  │
│  account.                  │
│                            │
│  Request details:          │
│  · From: New device        │
│  · Location: San Juan, PR  │
│  · Time: Mar 3, 2:30 PM   │
│                            │
│  Do you confirm this is    │
│  Ana López?                │
│                            │
│  ┌────────────────────────┐│
│  │  Yes, Approve Recovery ││
│  └────────────────────────┘│
│                            │
│  ┌────────────────────────┐│
│  │  No, This Isn't Them   ││
│  └────────────────────────┘│
│                            │
│  ⓘ If you're unsure,       │
│  contact Ana directly      │
│  before approving.         │
│                            │
└────────────────────────────┘
```

### Interaction

- **24-hour cooling-off**: mandatory wait after request is submitted. Gives time for trusted contacts to verify and for the real account owner to notice an unauthorized attempt
- **2 of 3 approval**: configurable (N of M). Default is 2 of 3 trusted contacts must approve
- **After approval + cooling-off**: user receives email with a recovery link → navigates to AUTH-004 to register a new passkey
- **Old passkeys invalidated**: all previous passkeys are revoked on successful recovery
- **"No, This Isn't Them"**: cancels the recovery request immediately and alerts the Org Admin
- **Audit logged**: all recovery requests (successful and denied) are logged in the audit trail

---

## AUTH-004: Passkey Registration

New passkey enrollment — either during initial account setup (from invitation) or after account recovery.

### Mobile (Primary)

```
┌────────────────────────────┐
│                            │
│        [Org Logo]          │
│                            │
│  Set Up Your Passkey       │
│                            │
│  A passkey lets you sign   │
│  in with your fingerprint  │
│  or face — no password     │
│  needed.                   │
│                            │
│  ┌────────────────────────┐│
│  │                        ││
│  │   [Illustration:       ││
│  │    fingerprint or      ││
│  │    face icon with      ││
│  │    phone]              ││
│  │                        ││
│  └────────────────────────┘│
│                            │
│  ┌────────────────────────┐│
│  │                        ││
│  │  Create Passkey        ││
│  │                        ││
│  └────────────────────────┘│
│    48px tall, full-width   │
│                            │
│  ─────────────────────     │
│                            │
│  What's a passkey?         │
│  Your passkey is stored    │
│  securely on this device.  │
│  Only your fingerprint or  │
│  face can use it. It can't │
│  be stolen or phished.     │
│                            │
└────────────────────────────┘
```

### After Passkey Created

```
┌────────────────────────────┐
│                            │
│         ✓                  │
│                            │
│  Passkey Created!          │
│                            │
│  You can now sign in with  │
│  your fingerprint or face. │
│                            │
│  ─────────────────────     │
│                            │
│  Next: Set up trusted      │
│  contacts so you can       │
│  recover your account if   │
│  you lose this device.     │
│                            │
│  ┌────────────────────────┐│
│  │  Set Up Trusted        ││
│  │  Contacts              ││
│  └────────────────────────┘│
│                            │
│  [Skip for now]            │
│  (You can do this later    │
│   in your profile)         │
│                            │
└────────────────────────────┘
```

### Interaction

- **"Create Passkey"**: triggers the device's native passkey/WebAuthn enrollment. OS handles the biometric capture
- **Guided explanation**: the "What's a passkey?" section demystifies the concept for users unfamiliar with passkeys
- **Post-creation**: prompts trusted contact setup (AUTH-005). Skip allowed but gently discouraged — "You can do this later" is smaller text
- **Duress passkey** (Maximum security tier): after regular passkey, an additional prompt: "Set up a safety passkey? This alternative login shows a sanitized version of the app if you're under duress." Optional, only shown for Maximum-tier tenants
- **Device compatibility**: if the device doesn't support passkeys (very old browser/OS), show a message explaining minimum requirements and offering magic link as a permanent alternative

---

## AUTH-005: Trusted Contact Setup

Add trusted contacts who can help recover the account if the user loses device access.

### Mobile

```
┌────────────────────────────┐
│                            │
│  Trusted Contacts          │
│                            │
│  If you lose your device,  │
│  these people can verify   │
│  your identity and help    │
│  you recover your account. │
│                            │
│  Choose 2-3 people you     │
│  trust who also use        │
│  GreenGrass.               │
│                            │
│  ─────────────────────     │
│                            │
│  ┌────────────────────────┐│
│  │ 1. Jorge Rivera        ││
│  │    Org Admin            ││
│  │    jorge@partido.org   ││
│  │                   [×]  ││
│  └────────────────────────┘│
│                            │
│  ┌────────────────────────┐│
│  │ 2. Carlos Méndez       ││
│  │    Comms Director       ││
│  │    carlos@partido.org  ││
│  │                   [×]  ││
│  └────────────────────────┘│
│                            │
│  [+ Add Contact]           │
│  Search by name or email   │
│                            │
│  ─────────────────────     │
│                            │
│  ⓘ Your contacts will be   │
│  notified that you've      │
│  added them. They can see  │
│  only that you trust them  │
│  for recovery — nothing    │
│  else about your account.  │
│                            │
│  ┌────────────────────────┐│
│  │       Save             ││
│  └────────────────────────┘│
│                            │
└────────────────────────────┘
```

### Interaction

- **Contact search**: [+ Add Contact] opens a search that looks up existing GreenGrass users in the same org by name or email
- **Minimum 2, maximum 5**: recommended 2-3. Minimum of 2 required for the recovery protocol to work (2-of-3)
- **Notification**: contacts receive a brief notification: "Ana López added you as a trusted contact for account recovery." No action needed from them until a recovery is requested
- **Remove**: [×] removes a contact. Minimum enforcement — if removing would drop below 2, show warning
- **Also accessible from**: PROF-003 (Personal Security Settings) after initial setup

---

## AUTH-006: Device Authorization

Adding a new device to an existing account.

### Mobile

```
┌────────────────────────────┐
│                            │
│  Add This Device           │
│                            │
│  To add this device to     │
│  your account, scan the    │
│  QR code from a device     │
│  you're already signed     │
│  in on.                    │
│                            │
│  ┌────────────────────────┐│
│  │                        ││
│  │     [QR Code]          ││
│  │                        ││
│  │   Scan this from your  ││
│  │   other device         ││
│  │                        ││
│  └────────────────────────┘│
│                            │
│  Code expires in 5:00      │
│                            │
│  ─────────────────────     │
│                            │
│  Don't have your other     │
│  device?                   │
│                            │
│  [Use magic link instead]  │
│  [Recover your account]    │
│                            │
└────────────────────────────┘
```

### From Existing Device (initiating the add)

```
┌────────────────────────────┐
│                            │
│  Authorize New Device      │
│                            │
│  A new device is requesting│
│  access to your account:   │
│                            │
│  Device: Chrome on Android │
│  Location: San Juan, PR    │
│  Time: Mar 3, 2:45 PM      │
│                            │
│  Is this you?              │
│                            │
│  ┌────────────────────────┐│
│  │  Yes, Authorize        ││
│  └────────────────────────┘│
│                            │
│  ┌────────────────────────┐│
│  │  No, Deny              ││
│  └────────────────────────┘│
│                            │
│  ⓘ If you didn't request   │
│  this, deny and notify     │
│  your admin immediately.   │
│                            │
└────────────────────────────┘
```

### Interaction

- **QR code**: time-limited (5 minutes). New device displays QR, existing device scans it from within the GreenGrass app
- **Alternative**: if QR scanning isn't possible, a short alphanumeric code can be entered manually on the existing device
- **After authorization**: new device registers its own passkey (AUTH-004 flow). Existing passkeys remain valid
- **Device naming**: auto-generated from user agent ("Chrome on Android"), editable by user in PROF-003
- **Deny**: blocks the request, logs the attempt, optionally notifies the Org Admin

---

## AUTH-007: Session Expired / Re-authenticate

Shown when the session times out or when a sensitive action requires re-authentication.

### Mobile (Primary)

```
┌────────────────────────────┐
│                            │
│                            │
│                            │
│         🔒                 │
│                            │
│  Session Expired           │
│                            │
│  For your security, your   │
│  session has timed out.    │
│  Verify your identity to   │
│  continue.                 │
│                            │
│                            │
│  ┌────────────────────────┐│
│  │                        ││
│  │  Verify with Passkey   ││
│  │                        ││
│  └────────────────────────┘│
│    48px tall, full-width   │
│                            │
│  [Use a different method]  │
│                            │
│                            │
│  ⓘ Your work has been      │
│  saved locally. Nothing    │
│  is lost.                  │
│                            │
│                            │
│                            │
└────────────────────────────┘
```

### Re-auth for Sensitive Action Variant

```
┌────────────────────────────┐
│                            │
│         🔒                 │
│                            │
│  Confirm Your Identity     │
│                            │
│  This action requires      │
│  verification:             │
│                            │
│  "Export all contact data"  │
│                            │
│  ┌────────────────────────┐│
│  │  Verify with Passkey   ││
│  └────────────────────────┘│
│                            │
│  [Cancel]                  │
│                            │
└────────────────────────────┘
```

### Interaction

- **Data preservation**: any unsaved work is preserved in local storage. After re-auth, user returns to the exact screen they were on with their data intact
- **Quick re-auth**: biometric passkey verification takes ~2 seconds. Minimal disruption
- **Fallback**: "Use a different method" → AUTH-002 (magic link / SMS OTP)
- **Sensitive action trigger**: certain actions (data export, permission changes, passkey management) require re-auth regardless of session age. The action description is shown so the user understands why
- **No data on timeout screen**: the expired screen shows no org data — just the re-auth prompt. Protects against shoulder-surfing on shared/public devices

---

## Empty States Summary

Auth screens don't have traditional empty states, but error/edge case states are critical:

| Screen | Edge Case | Message |
|--------|-----------|---------|
| AUTH-001 (no passkey) | Device has no registered passkey | No passkey found on this device. Set up a passkey or use a different method. |
| AUTH-001 (no connection) | Offline | Unable to connect. Check your internet connection and try again. |
| AUTH-002 (rate limited) | Too many login attempts | Too many attempts. Please wait 15 minutes or contact your admin. |
| AUTH-003 (no trusted contacts) | User never set up trusted contacts | No trusted contacts configured. Contact your organization's admin for manual account recovery. |
| AUTH-004 (incompatible device) | Device doesn't support passkeys | This device doesn't support passkeys. You can use magic link or SMS to sign in. Minimum requirements: [browser versions]. |
| AUTH-006 (expired QR) | QR code timed out | This code has expired. Generate a new one to continue. |
| AUTH-007 (re-auth failed) | Biometric fails repeatedly | Unable to verify your identity. Use an alternative method or contact your admin. |

---

## Accessibility Notes

- Login button is the only interactive element on AUTH-001 — zero cognitive load
- Biometric prompts are handled by the OS (already accessible)
- OTP input fields support paste (users copying from SMS)
- QR code has text alternative (manual alphanumeric code)
- All error messages are descriptive (not just "authentication failed")
- Recovery status uses text labels alongside status icons (● Approved, ◐ Pending)
- Session expired screen has no auto-redirect timer — user controls when to re-auth

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Passkey-first (no passwords) | Single passkey button on login screen | Eliminates phishing, credential stuffing, and password reuse attacks. The most common attack vector in political campaigns is credential-based |
| 24-hour recovery cooling-off | Mandatory wait period before recovery completes | Gives the real account owner time to notice and cancel an unauthorized recovery attempt. Critical for election security |
| Trusted contacts (not admin recovery) | Recovery requires peer approval, not admin override | No single person can unilaterally access another user's account. Distributes trust. Admin-only recovery creates a target |
| No "forgot password" | Passkey + trusted contact recovery only | There is no password to forget. Recovery through trusted contacts is more secure than email-based password reset |
| Data preservation on timeout | Local storage persists unsaved work | Volunteers in the field may be mid-form when their session expires. Losing their work would be unacceptable |
| Duress passkey optional | Only shown for Maximum security tier | Duress mode is a complex concept. Only organizations with genuine security threats should be prompted to configure it |

## Open Questions

1. **Passkey cross-device sync** — should the platform support passkeys synced via iCloud Keychain / Google Password Manager, or require device-bound passkeys only? Synced passkeys are more convenient but reduce security isolation
2. **SMS OTP in low-connectivity areas** — SMS delivery can be unreliable in rural areas. Should the platform support TOTP (app-based codes) as an additional fallback?
3. **Account recovery for the Org Admin** — if the only OA loses device access and has no trusted contacts configured, how is recovery handled? Platform-level support intervention may be necessary
4. **Passkey enrollment for low-end devices** — some Android devices in the target regions may not support WebAuthn. What is the minimum device/OS requirement, and what is the permanent fallback for unsupported devices?
