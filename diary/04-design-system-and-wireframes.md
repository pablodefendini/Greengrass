# Entry 4: The Design System and Wireframes

*March 2026*

## Building a visual language from nothing

GreenGrass doesn't have a brand yet. No logo, no colors, no typeface — just a product description and twelve specification documents. Normally you'd design a brand identity first, then build a design system to express it. We did it backwards: we built the design system as a theming *engine*, with placeholder values that any future brand can slot into.

The insight that made this work: design tokens. Every visual value in the system — every color, every spacing unit, every font size — is expressed as a CSS custom property. The components don't know what shade of blue they are. They know they're `--color-primary`. When a brand eventually exists, we change the token values. When a tenant customizes their campaign's look, they override a handful of tokens. Same components, different skin.

## The system font decision

One of the first concrete decisions: no custom fonts. Inter was the obvious choice (designed for screens, open source, excellent at small sizes), and we actually started with it. But then the performance math kicked in.

Our target user is a volunteer on a budget Android phone in rural Brazil or India, on a slow connection. Every kilobyte matters. A custom font means network requests, layout shift while it loads, invisible text (FOIT) or fallback swaps (FOUT). System fonts mean zero network cost and instant rendering. The device already has a perfectly good sans-serif — San Francisco on Apple, Roboto on Android, Segoe UI on Windows. They're optimized for their respective screens in ways a web font never can be.

The multi-script case sealed it. GreenGrass serves five countries across four scripts (Latin, Thai, Devanagari, Arabic). System font stacks handle this natively — `system-ui` on Android resolves to Noto Sans Thai for Thai text, Noto Sans Devanagari for Hindi. No font loading strategy, no subsetting, no extended character set lazy-loading. The OS just does it.

## The 8px grid and why it matters

Everything in the spatial system is a multiple of 8 pixels. This sounds like a minor detail, but it's the foundation of visual consistency. When every margin, padding, gap, and size snaps to 8px increments, components align naturally. You don't get 3px of mystery space between elements. Everything lines up.

The exception is the 4px half-step — used for tight inline spacing (icon-to-label gaps, badge padding). Small enough for precision, large enough to maintain the rhythm.

## Theming as a cascade

The most elegant part of the design system is how themes compose. It's a cascade:

1. Base tokens (the default GreenGrass palette)
2. Tenant brand override (their primary color)
3. Color mode (light or dark)
4. Accessibility overrides (high contrast, large text)
5. Context overrides (field mode density, war room dark)

Each layer only touches what it needs. A tenant using dark mode with high contrast gets: base tokens + their brand color + dark palette + high contrast adjustments. CSS specificity handles the layering naturally. No JavaScript theme switching, no conditional rendering. Just cascading custom properties.

## The wireframes told the real story

Writing specification documents is one thing. Drawing the screens is where the contradictions surface.

The navigation shell wireframe was humbling. On paper, "role-adaptive sidebar" sounds clean. In practice, the Org Admin's sidebar has twelve sections. The Volunteer's has five. The Supporter's has three. One component must serve all of them without looking empty for some and overwhelming for others. The collapsible sections pattern solved it — each section can be expanded or collapsed independently, and the sidebar remembers your preferences.

Field mode was the wireframe I was most anxious about. This is the UX that touches the most vulnerable users in the most stressful conditions: walking door-to-door, one-handed, on a cheap phone, possibly in poor lighting. Every pixel decision here has consequences. The response buttons are 56px tall (not the standard 44px) because the volunteer might be moving. The "Not Home" result auto-advances to the next door after 3 seconds because speed matters and most doors get that result. The lock button is always visible, always reachable, because safety isn't optional.

The War Room dashboard was the most fun to design. It's the only screen in the system that defaults to dark mode (easier on eyes during hours of monitoring). It auto-refreshes every 30 seconds. It has a live feed that scrolls automatically. It shows AI-generated reallocation suggestions that require human approval. It counts down to polls closing. It's the most "mission control" screen I've ever designed for a web app.

## What surprised me

**The supporter portal is surprisingly simple.** After the complexity of the internal app — 10 personas, 236 screens, field mode, war room — the supporter portal is just: donate, view history, manage recurring, RSVP to events, set preferences. Four pages. It was refreshing to wireframe something that straightforward. But the simplicity is load-bearing: the donation form has to handle multiple currencies, compliance disclaimers that vary by jurisdiction, employer/occupation disclosure requirements, and recurring donation setup. Simple surface, complex plumbing.

**Approval requests flowing through messages was a good decision.** The Candidate's world is mostly messaging — they're reviewing and approving content from their phone. Having approval requests appear as structured cards inside the message thread (with approve/reject/comment buttons) means the Candidate doesn't need to learn a separate approval workflow. It's just messages with action buttons.

**ASCII wireframes work surprisingly well.** I expected to need a visual design tool from the start, but the ASCII wireframes in markdown turned out to be remarkably effective for communicating layout, content hierarchy, and interaction patterns. They're version-controllable, diffable, reviewable in any text editor, and they don't tempt you into pixel-perfecting too early. The visual design layer will come later.

## The open questions pile

Each document ends with 2-3 open questions. They're accumulating — about 25 across the entire UX spec. Some are genuinely hard (should the War Room have a "TV mode" for projection? Should voice input be available in field mode? How deep does white-labeling go?). Others are things we'll only learn from real users (should dashboard widgets be rearrangeable? Which mobile tabs will each persona actually use most?).

The open questions are a feature, not a bug. They're the honest list of things we don't know yet. The answers will come from alpha users, not from specification documents.
