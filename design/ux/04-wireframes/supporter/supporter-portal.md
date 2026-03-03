# Supporter Portal Wireframes

## Purpose

The supporter portal is the public-facing personal space for donors and supporters. It's visually branded with the tenant's colors and logo, uses simplified navigation (no sidebar), and handles donation history, recurring management, event RSVPs, and profile/preferences. Mobile-first.

The portal exists at `/portal/*` routes and uses the `(portal)` layout group — separate from the main app shell.

---

## Public Donation Page (Pre-Auth)

The first touchpoint. Tenant-branded. No login required to donate.

### Desktop

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  🌿 Partido Verde de Puerto Rico                         [Log In]  [Español ▾] │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────────────┐   │
│  │                                                                          │   │
│  │                  Support Partido Verde                                   │   │
│  │                  ─────────────────────                                   │   │
│  │                                                                          │   │
│  │      Your contribution powers our campaign for a                         │   │
│  │      greener, more equitable Puerto Rico.                                │   │
│  │                                                                          │   │
│  └──────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────┐                   │
│  │                                                          │                   │
│  │  Choose an amount:                                       │                   │
│  │                                                          │                   │
│  │  ┌───────┐  ┌───────┐  ┌───────┐  ┌───────┐            │                   │
│  │  │  $25  │  │  $50  │  │ [$100]│  │ $250  │            │                   │
│  │  └───────┘  └───────┘  └───────┘  └───────┘            │                   │
│  │                                                          │                   │
│  │  ┌───────┐  ┌───────┐                                   │                   │
│  │  │ $500  │  │ Other │                                   │                   │
│  │  └───────┘  └───────┘                                   │                   │
│  │                                                          │                   │
│  │  ☐ Make this a monthly donation                          │                   │
│  │                                                          │                   │
│  │  ─────────────────────────────────────────               │                   │
│  │                                                          │                   │
│  │  Your Information                                        │                   │
│  │                                                          │                   │
│  │  First Name *              Last Name *                   │                   │
│  │  ┌─────────────────┐      ┌─────────────────┐          │                   │
│  │  │                 │      │                 │          │                   │
│  │  └─────────────────┘      └─────────────────┘          │                   │
│  │                                                          │                   │
│  │  Email *                                                 │                   │
│  │  ┌──────────────────────────────────────────┐           │                   │
│  │  │                                          │           │                   │
│  │  └──────────────────────────────────────────┘           │                   │
│  │                                                          │                   │
│  │  Address *                                               │                   │
│  │  ┌──────────────────────────────────────────┐           │                   │
│  │  │                                          │           │                   │
│  │  └──────────────────────────────────────────┘           │                   │
│  │                                                          │                   │
│  │  City *                State *        ZIP *              │                   │
│  │  ┌──────────┐        ┌────────┐      ┌──────┐          │                   │
│  │  │          │        │  PR ▾  │      │      │          │                   │
│  │  └──────────┘        └────────┘      └──────┘          │                   │
│  │                                                          │                   │
│  │  Employer *                Occupation *                   │                   │
│  │  ┌─────────────────┐      ┌─────────────────┐          │                   │
│  │  │                 │      │                 │          │                   │
│  │  └─────────────────┘      └─────────────────┘          │                   │
│  │  ⓘ Required by campaign finance law.                    │                   │
│  │                                                          │                   │
│  │  ─────────────────────────────────────────               │                   │
│  │                                                          │                   │
│  │  Payment                                                 │                   │
│  │  ┌──────────────────────────────────────────┐           │                   │
│  │  │  Card Number                              │           │                   │
│  │  │  ┌────────────────────────────────────┐   │           │                   │
│  │  │  │ 4242 4242 4242 4242               │   │           │                   │
│  │  │  └────────────────────────────────────┘   │           │                   │
│  │  │  Exp          CVC                         │           │                   │
│  │  │  ┌──────────┐ ┌──────────┐                │           │                   │
│  │  │  │ 12/27    │ │ 123      │                │           │                   │
│  │  │  └──────────┘ └──────────┘                │           │                   │
│  │  └──────────────────────────────────────────┘           │                   │
│  │                                                          │                   │
│  │  ┌──────────────────────────────────────────────────┐   │                   │
│  │  │  💰  Donate $100                                  │   │                   │
│  │  └──────────────────────────────────────────────────┘   │                   │
│  │                                                          │                   │
│  │  ☐ Subscribe to email updates from Partido Verde        │                   │
│  │                                                          │                   │
│  └──────────────────────────────────────────────────────────┘                   │
│                                                                                 │
│  ┌──────────────────────────────────────────────────────────────────────────┐   │
│  │  Paid for by Partido Verde de Puerto Rico.                               │   │
│  │  Contributions are not tax-deductible. Federal law requires us           │   │
│  │  to use our best efforts to collect and report the name, mailing         │   │
│  │  address, occupation, and name of employer of individuals whose          │   │
│  │  contributions exceed $200 in an election cycle.                         │   │
│  └──────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  Partido Verde de Puerto Rico · Privacy Policy · Terms of Service              │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Mobile Donation Page

```
┌──────────────────────────────┐
│  🌿 Partido Verde   [Español]│
├──────────────────────────────┤
│                              │
│  Support Partido Verde       │
│  ─────────────────────       │
│                              │
│  Your contribution powers    │
│  our campaign.               │
│                              │
│  ┌──────┐ ┌──────┐ ┌──────┐│
│  │ $25  │ │ $50  │ │[$100]││
│  └──────┘ └──────┘ └──────┘│
│  ┌──────┐ ┌──────┐ ┌──────┐│
│  │ $250 │ │ $500 │ │Other ││
│  └──────┘ └──────┘ └──────┘│
│                              │
│  ☐ Make this monthly         │
│                              │
│  ─────────────────────       │
│                              │
│  First Name *                │
│  ┌──────────────────────────┐│
│  │                          ││
│  └──────────────────────────┘│
│  Last Name *                 │
│  ┌──────────────────────────┐│
│  │                          ││
│  └──────────────────────────┘│
│  Email *                     │
│  ┌──────────────────────────┐│
│  │                          ││
│  └──────────────────────────┘│
│         ↓ scroll             │
│  (Address, employer fields)  │
│  (Payment card fields)       │
│                              │
│  ┌──────────────────────────┐│
│  │  💰  Donate $100         ││
│  └──────────────────────────┘│
│                              │
│  Compliance disclaimer...    │
│                              │
│  Privacy · Terms             │
└──────────────────────────────┘
```

### Donation Confirmation

```
┌──────────────────────────────┐
│  🌿 Partido Verde            │
├──────────────────────────────┤
│                              │
│           ✓                  │
│                              │
│  Thank you!                  │
│  ─────────────────────       │
│                              │
│  Your $100 donation to       │
│  Partido Verde has been      │
│  processed successfully.     │
│                              │
│  A receipt has been sent     │
│  to ana@email.com.           │
│                              │
│  Transaction: #GG-2026-4521 │
│  Date: March 3, 2026        │
│                              │
│  ─────────────────────       │
│                              │
│  ┌──────────────────────────┐│
│  │  Create an Account       ││
│  │  View your history,      ││
│  │  manage recurring, get   ││
│  │  receipts.               ││
│  └──────────────────────────┘│
│                              │
│  [Return to Partido Verde]   │
│                              │
│  Privacy · Terms             │
└──────────────────────────────┘
```

---

## Supporter Portal (Logged In)

### Portal Home

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  🌿 Partido Verde de Puerto Rico                   [Mi Perfil]  [Cerrar]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  [Mi Perfil]    [Donaciones]    [Eventos]    [Preferencias]                  │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Hola, Ana                                                                   │
│  ─────────                                                                   │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                       │
│  │  💰 Donated   │  │  🔄 Recurring │  │  📅 Events   │                       │
│  │  $1,250 total │  │  $100/month   │  │  2 upcoming  │                       │
│  │  8 donations  │  │  Next: Apr 1  │  │  next: Mar 5 │                       │
│  └──────────────┘  └──────────────┘  └──────────────┘                       │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Quick Actions                                                        │   │
│  │  ────────────────                                                     │   │
│  │  [💰 Donate Again]  [📅 View Events]  [⚙ Update Preferences]        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Recent Activity                                                      │   │
│  │  ────────────────                                                     │   │
│  │  Mar 1   $100 monthly donation processed                ✓ Receipt    │   │
│  │  Feb 28  RSVP'd to Rally at Plaza (Mar 5)                            │   │
│  │  Feb 1   $100 monthly donation processed                ✓ Receipt    │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  Partido Verde de Puerto Rico · Privacidad · Términos · Ayuda              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Donation History

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  🌿 Partido Verde de Puerto Rico                   [Mi Perfil]  [Cerrar]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  [Mi Perfil]    [◉ Donaciones]    [Eventos]    [Preferencias]               │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Historial de Donaciones                                                     │
│  ─────────────────────────                                                   │
│                                                                              │
│  Total donado: $1,250  ·  8 donaciones  ·  Desde enero 2025                 │
│                                                                              │
│  [💰 Donar Otra Vez]                                                        │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Date         Amount    Type       Status     Receipt               │   │
│  ├──────────────────────────────────────────────────────────────────────┤   │
│  │  Mar 1, 2026  $100.00   Mensual    ✓ Procesado  [↓ PDF]            │   │
│  │  Feb 1, 2026  $100.00   Mensual    ✓ Procesado  [↓ PDF]            │   │
│  │  Jan 15, 2026 $250.00   Única      ✓ Procesado  [↓ PDF]            │   │
│  │  Jan 1, 2026  $100.00   Mensual    ✓ Procesado  [↓ PDF]            │   │
│  │  Dec 1, 2025  $100.00   Mensual    ✓ Procesado  [↓ PDF]            │   │
│  │  Nov 1, 2025  $100.00   Mensual    ✓ Procesado  [↓ PDF]            │   │
│  │  Oct 1, 2025  $100.00   Mensual    ✓ Procesado  [↓ PDF]            │   │
│  │  Sep 1, 2025  $100.00   Mensual    ✓ Procesado  [↓ PDF]            │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ─────────────────────────                                                   │
│                                                                              │
│  Donación Recurrente                                                         │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                                                                      │   │
│  │  $100.00 / mes                                                       │   │
│  │  Próxima: April 1, 2026                                              │   │
│  │  Método: Visa ending 4242                                            │   │
│  │  Activa desde: September 1, 2025                                     │   │
│  │                                                                      │   │
│  │  [Cambiar Monto]  [Actualizar Tarjeta]  [Pausar]  [Cancelar]       │   │
│  │                                                                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ⓘ Necesitas un resumen anual de tus donaciones?                           │
│  [Generar Resumen Anual (2025) →]                                           │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  Partido Verde de Puerto Rico · Privacidad · Términos · Ayuda              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Events Page

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  🌿 Partido Verde de Puerto Rico                   [Mi Perfil]  [Cerrar]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  [Mi Perfil]    [Donaciones]    [◉ Eventos]    [Preferencias]               │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Próximos Eventos                                                            │
│  ────────────────                                                            │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                                                                      │   │
│  │  Rally at Plaza del Mercado                                          │   │
│  │  📅 March 5, 2026 · 6:00 PM                                         │   │
│  │  📍 Plaza del Mercado, San Juan                                      │   │
│  │  👥 142 attending                                                     │   │
│  │                                                                      │   │
│  │  Join us for a community rally featuring live music,                 │   │
│  │  speakers, and a celebration of our campaign progress.               │   │
│  │                                                                      │   │
│  │  ✓ You're going                            [Cancel RSVP]            │   │
│  │                                                                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                                                                      │   │
│  │  Town Hall: Healthcare Access                                        │   │
│  │  📅 March 12, 2026 · 7:00 PM                                        │   │
│  │  📍 Centro Comunal, Bayamón                                          │   │
│  │  👥 67 attending                                                      │   │
│  │                                                                      │   │
│  │  An open forum to discuss healthcare access and our                  │   │
│  │  party's policy proposals.                                           │   │
│  │                                                                      │   │
│  │  [RSVP — I'm Going]                                                 │   │
│  │                                                                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Past Events                                                                 │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Feb 22  Volunteer Appreciation Night  ✓ Attended                   │   │
│  │  Feb 8   Phone Bank Kickoff           ✓ Attended                   │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  Partido Verde de Puerto Rico · Privacidad · Términos · Ayuda              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Preferences

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  🌿 Partido Verde de Puerto Rico                   [Mi Perfil]  [Cerrar]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  [Mi Perfil]    [Donaciones]    [Eventos]    [◉ Preferencias]               │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Preferencias de Comunicación                                                │
│  ────────────────────────────                                                │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Email                                                               │   │
│  │  ────────                                                            │   │
│  │  ☑ Campaign updates and news                                         │   │
│  │  ☑ Event invitations                                                 │   │
│  │  ☑ Fundraising appeals                                               │   │
│  │  ☑ Donation receipts (cannot be disabled)                            │   │
│  │  ☐ Volunteer opportunities                                           │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  SMS / WhatsApp                                                      │   │
│  │  ────────────                                                        │   │
│  │  ☑ Event reminders                                                   │   │
│  │  ☐ Campaign updates                                                  │   │
│  │  ☐ Fundraising appeals                                               │   │
│  │                                                                      │   │
│  │  Phone: +1 787-555-0147   [Change]                                   │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Push Notifications (App)                                            │   │
│  │  ──────────────────────                                              │   │
│  │  ☑ Event reminders                                                   │   │
│  │  ☑ Donation receipts                                                 │   │
│  │  ☐ Campaign updates                                                  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ─────────────────────────────                                               │
│                                                                              │
│  Language: [Español ▾]                                                       │
│                                                                              │
│  ─────────────────────────────                                               │
│                                                                              │
│  [Unsubscribe from all communications]                                      │
│  ⓘ You will still receive donation receipts and account security notices.   │
│                                                                              │
│  ─────────────────────────────                                               │
│                                                                              │
│  Data & Privacy                                                              │
│  [Download my data]  [Delete my account]                                    │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  [Save Changes]                                                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  Partido Verde de Puerto Rico · Privacidad · Términos · Ayuda              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## Public Event Page (No Auth)

Accessible via shared link. Tenant-branded.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  🌿 Partido Verde de Puerto Rico                               [Español ▾] │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                                                                      │   │
│  │              [Event hero image or color block]                       │   │
│  │                                                                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Rally at Plaza del Mercado                                                  │
│  ═══════════════════════════                                                 │
│                                                                              │
│  📅  March 5, 2026 · 6:00 PM — 9:00 PM                                     │
│  📍  Plaza del Mercado, Calle Dos Hermanos, San Juan, PR                    │
│  👥  142 people going                                                        │
│                                                                              │
│  ─────────────────────────────                                               │
│                                                                              │
│  Join us for a community rally featuring live music, speakers,              │
│  food vendors, and a celebration of our campaign progress.                  │
│                                                                              │
│  Featured speakers:                                                          │
│  • Ana Martínez, Candidate for District 5                                   │
│  • Dr. Elena Torres, Healthcare Policy Director                             │
│  • Carlos Rivera, Community Organizer                                       │
│                                                                              │
│  ─────────────────────────────                                               │
│                                                                              │
│  ┌────────────────────────────────────────────────────────┐                  │
│  │                                                        │                  │
│  │  RSVP                                                  │                  │
│  │                                                        │                  │
│  │  Name *           ┌──────────────────────────┐        │                  │
│  │                    │                          │        │                  │
│  │                    └──────────────────────────┘        │                  │
│  │  Email *          ┌──────────────────────────┐        │                  │
│  │                    │                          │        │                  │
│  │                    └──────────────────────────┘        │                  │
│  │  Phone (optional) ┌──────────────────────────┐        │                  │
│  │                    │                          │        │                  │
│  │                    └──────────────────────────┘        │                  │
│  │                                                        │                  │
│  │  ┌──────────────────────────────────────────────┐     │                  │
│  │  │  ✓  RSVP — I'm Going                        │     │                  │
│  │  └──────────────────────────────────────────────┘     │                  │
│  │                                                        │                  │
│  └────────────────────────────────────────────────────────┘                  │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  [Map showing venue location]                                        │   │
│  │                                                                      │   │
│  │  [Get Directions →]                                                  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ─────────────────────────────                                               │
│  Share: [Facebook] [Twitter] [WhatsApp] [Copy Link]                         │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  Partido Verde de Puerto Rico · Privacidad · Términos                       │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## Design Notes

### Branding

- Portal uses the tenant's primary color for buttons, links, and accents
- Tenant logo in the header
- Compliance disclaimers remain in system font/style (not branded — legal requirement)
- Dark mode does NOT apply to public pages (always tenant's configured theme, typically light)

### Authentication

- **Magic link:** "View your donation history" → enter email → receive link → one-click access to portal
- **Full account:** Required for management actions (recurring changes, payment updates). Uses passkey or email + password.
- **Upgrade prompt:** Magic-link users see a subtle "Create full account for more control" prompt

### Mobile Portal

- Tab navigation replaces the desktop horizontal nav: [Perfil] [Donaciones] [Eventos]
- No bottom tab bar (not a native app experience — this is web)
- Full-width cards, larger touch targets
- Donation form: single column, amount buttons in 2x3 grid
- Simplified table → card list for donation history

### Accessibility

- All form fields properly labeled
- Amount selection buttons behave as radio group (`role="radiogroup"`)
- Donation form validation: inline errors, field-level announcements
- Receipt downloads: announced to screen reader
- RSVP buttons: clear state change ("RSVP — I'm Going" → "You're Going ✓")

---

## Open Questions

1. **Peer-to-peer fundraising pages.** Deferred feature, but the portal architecture should accommodate personal fundraising pages in the future (supporters creating their own pages to share).

2. **Donor wall / leaderboard.** Should the portal include an optional "Top Donors" or campaign progress page visible to all supporters? Motivates giving but may raise privacy concerns.

3. **Portal as PWA.** Should the supporter portal be installable as a PWA from the browser? Supporters don't need the full Capacitor app, but a home-screen shortcut with push notifications could increase engagement.
