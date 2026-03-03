# Onboarding Wireframes

## Purpose

First impressions. These wizards are the first screens new users see. They must be clear, confidence-building, and completable in one session. This document wireframes the two most critical onboarding flows: Org Setup (Org Admin's first experience) and Volunteer Onboarding (the highest-volume user type).

The other 6 wizards (Payment Processor, BYOK Key Generation, Compliance Configuration, WhatsApp Setup, SMS Setup, Voter File Import) follow the same shell and interaction patterns — they differ in content, not structure.

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

## Open Questions

1. **Org setup wizard length.** 5 steps may feel short for the amount of configuration needed, or too long if the Org Admin wants to explore. Should additional configuration (branding, communication channels, donor portal) be in the wizard or deferred to the "Getting Started" checklist?

2. **Volunteer training enforcement.** Should the volunteer onboarding wizard hard-block first shift access until training is complete, or allow the Volunteer Coordinator to override ("they'll finish training later")? Hard block is safer; override is more practical for last-minute volunteers.

3. **Wizard analytics.** Should the platform track where users abandon wizards (step-by-step completion rates)? Useful for UX optimization but adds tracking infrastructure.
