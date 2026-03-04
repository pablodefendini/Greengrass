# Onboarding Wireframes

## Purpose

First impressions. These wizards are the first screens new users see. They must be clear, confidence-building, and completable in one session. This document wireframes the two most critical onboarding flows: Org Setup (Org Admin's first experience) and Volunteer Onboarding (the highest-volume user type).

The other 6 wizards (Payment Processor, BYOK Key Generation, Compliance Configuration, WhatsApp Setup, SMS Setup, Voter File Import) follow the same shell and interaction patterns — they differ in content, not structure.

## Scope

| ID | Screen | Personas | Offline | Mobile | Section |
|----|--------|----------|---------|--------|---------|
| WIZ-001 | Org Setup Wizard | OA | No | Yes | Org Setup Wizard |
| WIZ-002 | Payment Processor Wizard | OA | No | Desktop | Payment Processor Wizard |
| WIZ-003 | BYOK Key Generation Wizard | OA | No | Desktop | BYOK Key Generation |
| WIZ-004 | Compliance Configuration Wizard | OA | No | Desktop | Compliance Configuration Wizard |
| WIZ-005 | WhatsApp Business Setup Wizard | OA | No | Desktop | WhatsApp Business Setup Wizard |
| WIZ-006 | SMS Number Setup Wizard | OA | No | Desktop | SMS Number Setup Wizard |
| WIZ-007 | Voter File Import Wizard | OA, DM | No | Desktop | Voter File Import Wizard |
| WIZ-008 | Volunteer Onboarding Wizard | V | No | Primary | Volunteer Onboarding |

All wizards are online-only. They require server connectivity for account creation, configuration saves, and integration setup.

## Onboarding Navigation Context

Wizards use the wizard shell (defined in `navigation-shell.md`) and are not part of the standard sidebar navigation. Users reach wizards through:

- **WIZ-001 (Org Setup):** Automatically triggered on first login after tenant provisioning
- **WIZ-008 (Volunteer Onboarding):** Triggered on first login after invitation acceptance
- **WIZ-002 through WIZ-007:** Accessible from the "Getting Started" checklist on the dashboard, or from the corresponding Settings screen via a "Run setup wizard" link

---

## Wizard Shell Reference

All wizards share the shell defined in `navigation-shell.md`. Key elements:
- Header: Logo + "Step N of M" + [Save & Exit]
- Progress bar: filled circles for complete, active circle for current, empty for future
- Content: step-specific
- Footer: [← Back] + [Next →]
- Mobile: compressed progress bar, step labels hidden (just dots)

---

## Org Setup Wizard

Triggered on first login after tenant provisioning. 5 steps. ~10 minutes.

### Step 1: Welcome & Authentication

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 GreenGrass                                              [Save & Exit]      │
├─────────────────────────────────────────────────────────────────────────────────┤
│  ●─── ○─── ○─── ○─── ○                                                        │
│  Auth    Org    Team   Config  Review                                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Welcome to GreenGrass                                                          │
│  ─────────────────────                                                          │
│                                                                                 │
│  Let's set up your organization. This takes about 10 minutes.                   │
│  You can save and come back at any time.                                        │
│                                                                                 │
│  First, let's secure your account.                                              │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────┐                   │
│  │                                                          │                   │
│  │  Create a Passkey                                        │                   │
│  │  ──────────────────                                      │                   │
│  │                                                          │                   │
│  │  A passkey is the most secure way to log in. It uses     │                   │
│  │  your device's fingerprint, face, or PIN — no password   │                   │
│  │  to remember or type.                                    │                   │
│  │                                                          │                   │
│  │  ┌────────────────────────────────────┐                  │                   │
│  │  │  🔐  Create Passkey               │                  │                   │
│  │  └────────────────────────────────────┘                  │                   │
│  │                                                          │                   │
│  │  Your device will prompt you for biometric confirmation. │                   │
│  │                                                          │                   │
│  └──────────────────────────────────────────────────────────┘                   │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────┐                   │
│  │  Set Up Recovery                                         │                   │
│  │  ──────────────                                          │                   │
│  │                                                          │                   │
│  │  If you lose access to your device, a trusted contact    │                   │
│  │  can help you recover your account.                      │                   │
│  │                                                          │                   │
│  │  Trusted Contact Name *                                  │                   │
│  │  ┌──────────────────────────────────────┐                │                   │
│  │  │                                      │                │                   │
│  │  └──────────────────────────────────────┘                │                   │
│  │                                                          │                   │
│  │  Trusted Contact Email *                                 │                   │
│  │  ┌──────────────────────────────────────┐                │                   │
│  │  │                                      │                │                   │
│  │  └──────────────────────────────────────┘                │                   │
│  │                                                          │                   │
│  │  ⓘ This person won't have access to your account.       │                   │
│  │  They can only initiate a recovery process that you      │                   │
│  │  must complete from a trusted device.                    │                   │
│  │                                                          │                   │
│  └──────────────────────────────────────────────────────────┘                   │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                        [Next →] │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Step 2: Organization Profile

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 GreenGrass                                              [Save & Exit]      │
├─────────────────────────────────────────────────────────────────────────────────┤
│  ✓─── ●─── ○─── ○─── ○                                                        │
│  Auth    Org    Team   Config  Review                                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Tell Us About Your Organization                                                │
│  ───────────────────────────────                                                │
│                                                                                 │
│  Organization Name *                                                            │
│  ┌────────────────────────────────────────────────────┐                         │
│  │ Partido Verde de Puerto Rico                       │                         │
│  └────────────────────────────────────────────────────┘                         │
│                                                                                 │
│  Type *                                                                         │
│  ┌────────────────────────────────────────────────────┐                         │
│  │ Political Party                                 ▾  │                         │
│  └────────────────────────────────────────────────────┘                         │
│  Options: Political Party, Campaign Committee, PAC/527, Nonprofit, Coalition    │
│                                                                                 │
│  Country/Jurisdiction *                                                         │
│  ┌────────────────────────────────────────────────────┐                         │
│  │ Puerto Rico (US)                                ▾  │                         │
│  └────────────────────────────────────────────────────┘                         │
│  ⓘ This determines your compliance templates, currency, and default language.  │
│                                                                                 │
│  Logo                                                                           │
│  ┌────────────────────────────────────────────────────┐                         │
│  │  [Drag logo here or click to browse]                │                         │
│  │  SVG or PNG. Max 2MB. Square or horizontal.        │                         │
│  └────────────────────────────────────────────────────┘                         │
│                                                                                 │
│  Languages *                                                                    │
│  ☑ Español                                                                      │
│  ☑ English                                                                      │
│  ☐ Add more...                                                                  │
│  ⓘ Your platform will be available in these languages. You can add more later.  │
│                                                                                 │
│  Website (optional)                                                             │
│  ┌────────────────────────────────────────────────────┐                         │
│  │ https://                                           │                         │
│  └────────────────────────────────────────────────────┘                         │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  [← Back]                                                          [Next →]    │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Step 3: Invite Your Team

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 GreenGrass                                              [Save & Exit]      │
├─────────────────────────────────────────────────────────────────────────────────┤
│  ✓─── ✓─── ●─── ○─── ○                                                        │
│  Auth    Org    Team   Config  Review                                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Invite Your Team                                                               │
│  ────────────────                                                               │
│                                                                                 │
│  Invite the staff who will help run your campaign. You can always               │
│  add more people later.                                                         │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐           │
│  │  Email *                         Role *                          │           │
│  │  ┌──────────────────────┐       ┌────────────────────┐          │           │
│  │  │ maria@partido.pr     │       │ Comms Director  ▾  │          │           │
│  │  └──────────────────────┘       └────────────────────┘          │           │
│  │                                                                  │           │
│  │  ┌──────────────────────┐       ┌────────────────────┐          │           │
│  │  │ carlos@partido.pr    │       │ Field Director  ▾  │          │           │
│  │  └──────────────────────┘       └────────────────────┘          │           │
│  │                                                                  │           │
│  │  ┌──────────────────────┐       ┌────────────────────┐          │           │
│  │  │ elena@partido.pr     │       │ Finance Director▾  │          │           │
│  │  └──────────────────────┘       └────────────────────┘          │           │
│  │                                                                  │           │
│  │  [+ Add another person]                                          │           │
│  └──────────────────────────────────────────────────────────────────┘           │
│                                                                                 │
│  ⓘ Each person will receive an email invitation to set up their account.       │
│  They'll create a passkey and configure their own recovery contact.             │
│                                                                                 │
│  Available roles:                                                               │
│  • **Org Admin** — full access to everything                                    │
│  • **Communications Director** — email, SMS, social media, press               │
│  • **Finance Director** — donations, compliance, payment processors            │
│  • **Field Director** — canvassing, phone banking, GOTV                        │
│  • **Volunteer Coordinator** — volunteer roster, shifts, events                │
│  • **Data Manager** — contacts, imports, dedup, data quality                   │
│                                                                                 │
│  [Skip — I'll invite later]                                                    │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  [← Back]                                                          [Next →]    │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Step 4: Initial Configuration

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 GreenGrass                                              [Save & Exit]      │
├─────────────────────────────────────────────────────────────────────────────────┤
│  ✓─── ✓─── ✓─── ●─── ○                                                        │
│  Auth    Org    Team   Config  Review                                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Configure Your Platform                                                        │
│  ───────────────────────                                                        │
│                                                                                 │
│  Based on your jurisdiction (Puerto Rico), we've pre-configured                 │
│  recommended settings. Review and adjust as needed.                             │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐           │
│  │  Data Security                                                   │           │
│  │  ──────────────                                                  │           │
│  │                                                                  │           │
│  │  ☉ Platform-managed encryption (Recommended)                     │           │
│  │    GreenGrass manages your encryption keys. Simpler setup.       │           │
│  │    You can switch to BYOK later.                                 │           │
│  │                                                                  │           │
│  │  ○ Bring Your Own Key (BYOK)                                     │           │
│  │    You generate and manage your own encryption keys.             │           │
│  │    Maximum security. Requires careful key management.            │           │
│  │    [Learn more about BYOK →]                                     │           │
│  └──────────────────────────────────────────────────────────────────┘           │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐           │
│  │  Compliance (Pre-configured for Puerto Rico)          [Edit ▾]  │           │
│  │  ──────────────────────────────────────                          │           │
│  │                                                                  │           │
│  │  Individual contribution limit:    $5,800                        │           │
│  │  PAC contribution limit:           $5,000                        │           │
│  │  Campaign period enforcement:      Hard (recommended)            │           │
│  │  Foreign donor blocking:           Enabled                       │           │
│  │  Audit retention:                  10 years                      │           │
│  │                                                                  │           │
│  │  ⓘ These are based on Puerto Rico election law. You can fine-   │           │
│  │  tune these in Settings > Compliance after setup.                │           │
│  └──────────────────────────────────────────────────────────────────┘           │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐           │
│  │  Payment Processing                                              │           │
│  │  ──────────────────                                              │           │
│  │                                                                  │           │
│  │  ☉ Set up now → launches Payment Processor wizard after review   │           │
│  │  ○ Skip for now — set up later in Settings                       │           │
│  └──────────────────────────────────────────────────────────────────┘           │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  [← Back]                                                          [Next →]    │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Step 5: Review & Launch

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 GreenGrass                                              [Save & Exit]      │
├─────────────────────────────────────────────────────────────────────────────────┤
│  ✓─── ✓─── ✓─── ✓─── ●                                                        │
│  Auth    Org    Team   Config  Review                                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Review & Launch                                                                │
│  ──────────────                                                                 │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐           │
│  │  Organization                                           [Edit]  │           │
│  │  ────────────                                                    │           │
│  │  Name: Partido Verde de Puerto Rico                              │           │
│  │  Type: Political Party                                           │           │
│  │  Jurisdiction: Puerto Rico (US)                                  │           │
│  │  Languages: Español, English                                     │           │
│  └──────────────────────────────────────────────────────────────────┘           │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐           │
│  │  Team                                                   [Edit]  │           │
│  │  ────                                                            │           │
│  │  3 invitations ready to send:                                    │           │
│  │  • maria@partido.pr — Communications Director                   │           │
│  │  • carlos@partido.pr — Field Director                           │           │
│  │  • elena@partido.pr — Finance Director                          │           │
│  └──────────────────────────────────────────────────────────────────┘           │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐           │
│  │  Configuration                                          [Edit]  │           │
│  │  ─────────────                                                   │           │
│  │  Encryption: Platform-managed                                    │           │
│  │  Compliance: Puerto Rico defaults                                │           │
│  │  Payment: Set up after launch                                    │           │
│  └──────────────────────────────────────────────────────────────────┘           │
│                                                                                 │
│                                                                                 │
│  ┌────────────────────────────────────────────────────────────────┐             │
│  │                                                                │             │
│  │  🚀  Launch Your Platform                                      │             │
│  │                                                                │             │
│  │  This will:                                                    │             │
│  │  • Create your organization workspace                         │             │
│  │  • Send invitations to your team                              │             │
│  │  • Apply compliance and security settings                     │             │
│  │                                                                │             │
│  │  ┌──────────────────────────────────────────┐                  │             │
│  │  │  ▶  Launch Partido Verde                 │                  │             │
│  │  └──────────────────────────────────────────┘                  │             │
│  │                                                                │             │
│  └────────────────────────────────────────────────────────────────┘             │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  [← Back]                                                                      │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Post-Launch: Getting Started Checklist

After the wizard completes, the Org Admin lands on their dashboard with a "Getting Started" card:

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Campaign Overview                                                           │
│  ─────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Getting Started                                          [Dismiss] │   │
│  │  ────────────────                                                    │   │
│  │                                                                      │   │
│  │  ✓ Create your organization                                          │   │
│  │  ✓ Invite your team                                                  │   │
│  │  ○ Set up a donation form → [Get started]                            │   │
│  │  ○ Import your contacts → [Get started]                              │   │
│  │  ○ Create your first canvassing campaign → [Get started]             │   │
│  │  ○ Upload your brand assets (logo, colors) → [Get started]           │   │
│  │                                                                      │   │
│  │  4 of 6 remaining                                                    │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  (rest of dashboard — mostly empty states at this point)                     │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## Volunteer Onboarding

Triggered on a volunteer's first login after accepting an invitation. 4 steps. ~5 minutes. Mobile-first.

### Step 1: Secure Your Account

```
┌──────────────────────────────┐
│  🌿     Step 1 of 4  [Save] │
├──────────────────────────────┤
│  ●━━━━━○━━━━━○━━━━━○        │
├──────────────────────────────┤
│                              │
│  Welcome!                    │
│  ──────────                  │
│                              │
│  Thanks for joining          │
│  Partido Verde.              │
│                              │
│  Let's set up your account   │
│  so you can get started.     │
│                              │
│  ─────────────────────       │
│                              │
│  Create a Passkey            │
│                              │
│  Use your fingerprint or     │
│  face to log in — no         │
│  password needed.            │
│                              │
│  ┌──────────────────────────┐│
│  │  🔐  Create Passkey      ││
│  └──────────────────────────┘│
│                              │
│  ─────────────────────       │
│                              │
│  Recovery Contact            │
│                              │
│  Someone who can help you    │
│  get back in if you lose     │
│  your phone.                 │
│                              │
│  Name *                      │
│  ┌──────────────────────────┐│
│  │                          ││
│  └──────────────────────────┘│
│  Email *                     │
│  ┌──────────────────────────┐│
│  │                          ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│                     [Next →]  │
└──────────────────────────────┘
```

### Step 2: Quick Tour

```
┌──────────────────────────────┐
│  🌿     Step 2 of 4  [Save] │
├──────────────────────────────┤
│  ✓━━━━━●━━━━━○━━━━━○        │
├──────────────────────────────┤
│                              │
│  Here's How It Works         │
│  ─────────────────           │
│                              │
│  ┌──────────────────────────┐│
│  │                          ││
│  │  ┌────────────────────┐  ││
│  │  │  📋 My Shifts      │  ││
│  │  │  See your upcoming │  ││
│  │  │  canvassing and    │  ││
│  │  │  phone bank shifts │  ││
│  │  └────────────────────┘  ││
│  │                          ││
│  │  ● ○ ○ ○                 ││
│  └──────────────────────────┘│
│                              │
│  Your Shifts tab shows       │
│  everything assigned to you. │
│  Tap "Start Shift" when      │
│  you arrive at your turf.    │
│                              │
│  ─────────────────────       │
│                              │
│  ┌─────────┐ ┌─────────┐    │
│  │ ← Prev  │ │ Next →  │    │
│  └─────────┘ └─────────┘    │
│                              │
│  4 quick slides:             │
│  1. My Shifts                │
│  2. Field Mode               │
│  3. Messages                 │
│  4. Events                   │
│                              │
├──────────────────────────────┤
│                     [Next →]  │
└──────────────────────────────┘
```

### Step 3: Required Training

```
┌──────────────────────────────┐
│  🌿     Step 3 of 4  [Save] │
├──────────────────────────────┤
│  ✓━━━━━✓━━━━━●━━━━━○        │
├──────────────────────────────┤
│                              │
│  Complete Your Training      │
│  ──────────────────          │
│                              │
│  Your organization requires  │
│  these modules before your   │
│  first shift.                │
│                              │
│  ┌──────────────────────────┐│
│  │  ✓ Canvassing 101       ││
│  │    12 min · Complete     ││
│  ├──────────────────────────┤│
│  │  ▶ Safety Protocol       ││
│  │    8 min · Start →       ││
│  ├──────────────────────────┤│
│  │  ◌ Data Privacy          ││
│  │    5 min · Locked        ││
│  │    (complete Safety first)││
│  └──────────────────────────┘│
│                              │
│  Each module has a short     │
│  quiz at the end. You need   │
│  80% to pass.                │
│                              │
│  ─────────────────────       │
│                              │
│  Progress: 1 of 3 complete   │
│  ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░  │
│                              │
│  ⓘ Can't finish now? Save   │
│  and come back later. Your   │
│  progress is saved.          │
│                              │
├──────────────────────────────┤
│  [← Back]            [Next →] │
│  (Next requires all modules) │
└──────────────────────────────┘
```

### Step 4: Ready to Go

```
┌──────────────────────────────┐
│  🌿     Step 4 of 4         │
├──────────────────────────────┤
│  ✓━━━━━✓━━━━━✓━━━━━●        │
├──────────────────────────────┤
│                              │
│  You're All Set!             │
│  ──────────────              │
│                              │
│        ✓                     │
│                              │
│  Account secured             │
│  Training complete           │
│  Ready for your first shift  │
│                              │
│  ─────────────────────       │
│                              │
│  Your first shift:           │
│  ┌──────────────────────────┐│
│  │  📋 Northside Canvass    ││
│  │  Tomorrow, 2:00 PM       ││
│  │  47 doors assigned       ││
│  │  Turf: Calle Sol area    ││
│  └──────────────────────────┘│
│                              │
│  Tips:                       │
│  • Arrive at staging 10 min  │
│    early                     │
│  • Make sure your phone is   │
│    charged                   │
│  • Download maps before you  │
│    leave (tap "Start Shift"  │
│    with Wi-Fi)               │
│                              │
│  ┌──────────────────────────┐│
│  │  ▶ Go to My Shifts       ││
│  └──────────────────────────┘│
│                              │
│  [Explore the app first]     │
│                              │
└──────────────────────────────┘
```

---

## BYOK Key Generation Wizard

The highest-stakes wizard. Generates cryptographic keys that can never be recovered if lost. 5 steps.

### Step 1: Understand the Stakes

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 GreenGrass                                              [Save & Exit]      │
├─────────────────────────────────────────────────────────────────────────────────┤
│  ●─── ○─── ○─── ○─── ○                                                        │
│  Understand  Generate  Backup  Verify  Complete                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Bring Your Own Key (BYOK)                                                      │
│  ─────────────────────────                                                      │
│                                                                                 │
│  ⚠ Please read this carefully.                                                 │
│                                                                                 │
│  BYOK means your organization controls its own encryption keys.                │
│  GreenGrass cannot access your data without your key.                          │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐           │
│  │                                                                  │           │
│  │  What this means:                                                │           │
│  │                                                                  │           │
│  │  ✓  Maximum data sovereignty — even GreenGrass can't read       │           │
│  │     your encrypted data                                          │           │
│  │                                                                  │           │
│  │  ✓  Protection against compelled disclosure — GreenGrass        │           │
│  │     can truthfully say it cannot decrypt your data               │           │
│  │                                                                  │           │
│  │  ⚠  If you lose your key, your data is permanently              │           │
│  │     unrecoverable. GreenGrass cannot help.                       │           │
│  │                                                                  │           │
│  │  ⚠  You are responsible for backing up and protecting            │           │
│  │     your key material                                            │           │
│  │                                                                  │           │
│  └──────────────────────────────────────────────────────────────────┘           │
│                                                                                 │
│  ☐ I understand that losing my key means permanent data loss                   │
│  ☐ I understand that GreenGrass cannot recover my key                          │
│  ☐ I have a plan for securely storing backup material                          │
│                                                                                 │
│  All three acknowledgments required to proceed.                                │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                        [Next →] │
│                                                  (disabled until all checked)   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Step 3: Secure Backup (Most Critical Step)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 GreenGrass                                              [Save & Exit]      │
├─────────────────────────────────────────────────────────────────────────────────┤
│  ✓─── ✓─── ●─── ○─── ○                                                        │
│  Understand  Generate  Backup  Verify  Complete                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Back Up Your Key                                                               │
│  ────────────────                                                               │
│                                                                                 │
│  Your key has been generated. Now you must back it up securely.                │
│  Choose your backup method:                                                    │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐           │
│  │  ☉ Shamir's Secret Sharing (Recommended)                        │           │
│  │  ──────────────────────────────────                              │           │
│  │  Your key is split into multiple parts. Any 3 of 5 parts        │           │
│  │  can reconstruct it. Give parts to trusted people — no single    │           │
│  │  person (including you) has the full key.                        │           │
│  │                                                                  │           │
│  │  Number of shares: [5 ▾]                                         │           │
│  │  Required to reconstruct: [3 ▾]                                  │           │
│  │                                                                  │           │
│  │  Share holders:                                                  │           │
│  │  1. [You (Org Admin)          ] — kept by you                   │           │
│  │  2. [María Santos             ] — board member                  │           │
│  │  3. [Carlos Rivera            ] — legal counsel                 │           │
│  │  4. [Elena Torres             ] — co-founder                    │           │
│  │  5. [Secure safe deposit box  ] — physical storage              │           │
│  └──────────────────────────────────────────────────────────────────┘           │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐           │
│  │  ○ Download encrypted backup file                                │           │
│  │  Single file, protected by a passphrase you choose.              │           │
│  │  Store offline (USB drive, printed paper).                       │           │
│  └──────────────────────────────────────────────────────────────────┘           │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐           │
│  │  ○ Manual key export                                             │           │
│  │  Copy the raw key material. For advanced users who have their    │           │
│  │  own key management infrastructure.                              │           │
│  └──────────────────────────────────────────────────────────────────┘           │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  [← Back]                                                          [Next →]    │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## WIZ-002: Payment Processor Wizard

Guides the Org Admin through connecting a payment processor for the first time. Accessed from the post-setup "Getting Started" checklist or from Settings → Payment Processors → "Run setup wizard."

### Wizard Structure

3 steps. ~5 minutes. Desktop-preferred.

| Step | Title | Content |
|------|-------|---------|
| 1 | Choose Processor | Selection cards for supported payment processors (Stripe, PayPal, local processors). Each card shows: supported currencies, supported payment methods, fee structure, and geographic availability. |
| 2 | Connect Account | Processor-specific OAuth flow or API credential entry. For Stripe: "Connect with Stripe" button opens Stripe Connect. For manual processors: API key + secret fields. Test connection button with success/failure indicator. |
| 3 | Configure & Test | Default currency selection, donation form currency options, receipt email sender configuration. "Send test transaction" button (processes and immediately refunds $1.00). Success screen with processor status confirmed. |

### Relationship to SET-017

This wizard wraps the same configuration as SET-017 (Payment Processor Configuration) in a guided flow. Differences:
- Wizard explains *why* each setting matters (first-time context)
- Wizard includes the test transaction step (skippable in settings)
- Settings screen allows editing existing configuration; wizard creates new

### Design Notes
- Test transaction is the confidence moment — the Org Admin sees real money flow through the system
- Processor selection shows geographic relevance: processors available in the org's configured jurisdiction are highlighted
- OAuth flows open in a popup window; wizard polls for completion

---

## WIZ-004: Compliance Configuration Wizard

Guides the Org Admin through jurisdiction-specific compliance setup. Accessed from the "Getting Started" checklist or from Settings → Compliance → "Run setup wizard."

### Wizard Structure

4 steps. ~10 minutes. Desktop-preferred.

| Step | Title | Content |
|------|-------|---------|
| 1 | Select Jurisdiction | Country and sub-jurisdiction selection (e.g., Puerto Rico → Municipal race). This determines which compliance rules are available and which are mandatory. |
| 2 | Campaign Finance Rules | Contribution limits per donor type, reporting period, and election date. Jurisdiction-required rules are pre-checked and locked. Optional rules can be toggled. Enforcement behavior selection per rule: Block (prevent the donation) / Warn (allow but flag) / Flag (log for review). |
| 3 | Data Protection | Data retention policies, consent requirements, data subject request handling. Framework selection if multiple apply (e.g., GDPR + local law). |
| 4 | Review & Activate | Summary of all configured rules with counts: "12 rules active, 3 blocked, 5 flagged, 4 warn-only." [Activate Compliance Engine] button. |

### Relationship to SET-008 / SET-009

This wizard combines SET-008 (Compliance Configuration) and SET-009 (Contribution Limits) into a guided flow. Differences:
- Wizard explains what each rule does in plain language (not just toggle labels)
- Wizard enforces a review step before activation
- Settings screens allow individual rule changes; wizard sets the baseline

### Design Notes
- Jurisdiction-required rules shown with a lock icon and "Required by [jurisdiction]" label — cannot be unchecked
- Plain-language descriptions are critical: "Individual donors cannot give more than $5,000 per election cycle" instead of "LIMIT_INDIVIDUAL_PER_CYCLE = 5000"
- The wizard is the most common path to compliance setup; settings is for ongoing adjustments

---

## WIZ-005: WhatsApp Business Setup Wizard

Guides the Org Admin through connecting WhatsApp Business API. Accessed from the "Getting Started" checklist or from Settings → WhatsApp → "Run setup wizard."

### Wizard Structure

3 steps. ~15 minutes (includes Meta verification). Desktop-preferred.

| Step | Title | Content |
|------|-------|---------|
| 1 | Prerequisites | Checklist of requirements: verified Meta Business account, phone number not registered with personal WhatsApp, business display name. Links to Meta's verification process if not complete. "I've completed these steps" checkbox to proceed. |
| 2 | Connect Account | Phone number entry, API token from Meta Business Manager, business display name. Test connection button. If connection fails: specific error message with resolution steps. |
| 3 | Configure Templates | Create or import message templates for approval. Template categories: transactional (event reminders, donation receipts), marketing (campaign updates). Preview of how templates render on WhatsApp. Submit templates for Meta approval. Status tracking: Pending / Approved / Rejected. |

### Relationship to SET-013

This wizard wraps SET-013 (WhatsApp Business Setup) in a guided flow. Differences:
- Wizard includes the prerequisites checklist (settings assumes you're already verified)
- Wizard guides template creation with examples relevant to political campaigns
- Settings screen allows ongoing template management; wizard creates initial set

### Design Notes
- Meta verification can take days — the wizard saves progress and shows "Return when your Meta account is verified"
- Template approval status is tracked with auto-refresh; the wizard can be revisited to check
- Example templates provided: event reminder, donation thank you, GOTV reminder

---

## WIZ-006: SMS Number Setup Wizard

Guides the Org Admin through configuring SMS messaging capability. Accessed from the "Getting Started" checklist or from Settings → SMS → "Run setup wizard."

### Wizard Structure

3 steps. ~5 minutes. Desktop-preferred.

| Step | Title | Content |
|------|-------|---------|
| 1 | Choose Provider | Selection cards for supported SMS providers (Twilio, Vonage, local carriers). Each card shows: supported countries, pricing model, features (MMS support, delivery receipts). |
| 2 | Connect & Verify | Provider API credentials, phone number selection or porting. Test SMS button: sends a verification code to the Org Admin's phone. Enter code to confirm the number works. |
| 3 | Configure Defaults | Default sender name/number, opt-out keyword handling (STOP/UNSUBSCRIBE), quiet hours configuration, rate limiting. Preview of how messages appear on recipient's phone. |

### Relationship to SET-014

This wizard wraps SET-014 (SMS Provider Configuration) in a guided flow. Differences:
- Wizard includes provider comparison and selection
- Wizard tests the number with a real SMS to the admin's phone
- Settings screen allows changing credentials and configuration; wizard sets up from scratch

### Design Notes
- Phone number selection: show available numbers with area code matching the org's geographic scope
- Opt-out compliance: wizard requires configuring STOP keyword handling before proceeding (legal requirement in many jurisdictions)
- Test SMS provides immediate validation that the configuration works

---

## WIZ-007: Voter File Import Wizard

Guides the Org Admin or Data Manager through importing their first voter file. Accessed from the "Getting Started" checklist or from CRM → Import.

### Wizard Structure

5 steps. ~15–30 minutes (depends on file size). Desktop-preferred.

| Step | Title | Content |
|------|-------|---------|
| 1 | Prepare Your File | File format requirements (CSV, Excel), column expectations, sample file download. Drag-and-drop upload zone. File validation: row count, detected columns, encoding check. |
| 2 | Map Columns | Two-column mapping: source columns (left) → GreenGrass fields (right). Auto-detection of common column names. Unmapped columns shown with "Skip" option. Required fields highlighted if unmapped. |
| 3 | Configure Matching | Duplicate detection settings: match key selection (Voter ID preferred, name + DOB fallback). Match sensitivity slider (strict to loose). Preview of estimated matches. |
| 4 | Preview & Validate | Data quality preview: N records parsed, N valid, N with issues. Sample of problematic rows with specific errors. Option to download error report. "Proceed with valid records" or "Fix and re-upload." |
| 5 | Import & Confirm | Import progress bar (for large files). Results summary: created, updated, skipped, errors. Link to dedup queue if potential duplicates found. [Go to Contacts →] button. |

### Relationship to CRM-008 through CRM-011

This wizard closely mirrors the 4-step Data Import Wizard (CRM-008 through CRM-011) with two additions:
- Step 1 includes "Prepare Your File" guidance (the Data Import Wizard assumes you know the format)
- The wizard provides more hand-holding text explaining what each step does and why

For subsequent imports, users should use the standard Data Import flow (CRM-008) directly — the wizard is for the first-time experience.

### Design Notes
- Auto-detection of column names is the key usability feature — reduces manual mapping for well-formatted files
- Progress bar during import is essential for large voter files (10K+ rows can take minutes)
- Error preview must be actionable: show the exact row and field that failed, not just a count

---

## Wizard Design Notes

### Mobile Adaptation

All wizard steps adapt to mobile by:
- Removing the step label text (just dots in progress bar)
- Single-column layout
- Bottom sheet for dropdowns/selects
- "Save & Exit" shortened to [Save]
- Full-width buttons
- Content scrolls; progress bar and navigation are fixed

### Error Handling

- **Validation errors:** Inline, below the field, red text. Field border turns red. Error icon appears.
- **Server errors:** Full-width alert banner at top of content area: "Something went wrong. Your progress is saved — try again."
- **Network errors:** "You appear to be offline. Your progress is saved locally and will sync when you reconnect."

### Skip Behavior

- Steps that can be skipped have an explicit "Skip" or "Skip for now" link
- Skipped steps show as "⊘ Skipped" in the progress indicator (not ✓)
- Skipped steps can be returned to from the review screen or later from Settings
- Required steps (auth, compliance acknowledgments) cannot be skipped

---

## Accessibility Notes

- Wizard progress indicator announces current step to screen readers: "Step 2 of 5: Organization Profile"
- All form fields have associated `<label>` elements (not just placeholder text)
- Error messages are linked to their fields via `aria-describedby`
- Focus moves to the first field of each step when advancing
- "Save & Exit" is always reachable via keyboard (not hidden behind scroll)
- BYOK key generation uses large, clear text for security-critical information
- Shamir share display uses monospace font at 16px minimum for readability
- Skip links are visible and focusable (not hidden from keyboard users)

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Wizard shell (not inline settings) | Dedicated wizard layout with progress bar | Focused experience for first-time setup; prevents distraction |
| BYOK as separate wizard | Not part of org setup | Security ceremony deserves focused, undistracted attention |
| Post-wizard checklist | Persistent "Getting Started" on dashboard | Guides first-time setup without blocking platform access |
| Skippable steps with visual indicator | "⊘ Skipped" shown in progress bar | Users can defer without losing track of what's incomplete |
| Volunteer onboarding mobile-first | Primary mobile, adapted up | Most volunteers onboard from their phones |
| Error preservation on network loss | Progress saved locally, syncs on reconnect | Prevents data loss in low-connectivity environments |
| 5-step org setup | Grouped by concern: auth → profile → team → config → review | Manageable chunks; each step has a clear outcome |

## Open Questions

1. **Org setup wizard length.** 5 steps may feel short for the amount of configuration needed, or too long if the Org Admin wants to explore. Should additional configuration (branding, communication channels, donor portal) be in the wizard or deferred to the "Getting Started" checklist?

2. **Volunteer training enforcement.** Should the volunteer onboarding wizard hard-block first shift access until training is complete, or allow the Volunteer Coordinator to override ("they'll finish training later")? Hard block is safer; override is more practical for last-minute volunteers.

3. **Wizard analytics.** Should the platform track where users abandon wizards (step-by-step completion rates)? Useful for UX optimization but adds tracking infrastructure.
