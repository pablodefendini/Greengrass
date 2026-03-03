# Entry 3: Information Architecture

*Covering: UX Phase 1 — navigation model, screen inventory, persona views, URL structure*

## The Transition to UX

Moving from specs to UX design felt like a gear shift. Spec work is about *what* — what the platform does, what the rules are, what the edge cases look like. UX work is about *how* — how people navigate, how information is organized, how 236 screens fit into a coherent experience for 10 different personas.

The first question was format. Should the UX work be markdown specs? Visual wireframes? Both? We went with both — markdown for the structural decisions (information architecture, patterns, design system foundations) and visual wireframes for the key screens. The markdown comes first because you can't wireframe a screen if you don't know where it lives in the navigation, who can see it, and whether it needs to work offline.

## The Core UX Challenge

GreenGrass has a UX problem that most platforms don't face: 10 distinct personas sharing one application, across radically different contexts.

Consider the extremes:

- **Org Admin on desktop in Puerto Rico.** Full-featured platform with compliance configuration, role management, encryption key ceremony, alliance coordination. Complex settings, data tables, drag-and-drop builders. Reliable internet. Large screen.

- **Volunteer on a low-end Android in rural India.** Walking door-to-door, phone in one hand, knocking with the other. Needs to see voter info, record a conversation response, move to the next door. Intermittent connectivity. Small screen. Maybe poor lighting. Maybe rain.

These two users share one codebase. One SvelteKit + Capacitor app. The information architecture has to serve both without compromise — without the volunteer feeling the weight of the admin's complexity, and without the admin being limited by the volunteer's constraints.

## Five Decisions That Define the Navigation

The navigation model is the single most important IA document. We resolved five decision points:

### 1. Desktop Navigation: Hybrid Top Bar + Sidebar

The desktop shell splits responsibilities: the top bar handles *context* (where am I — tenant, sync status, notifications, user profile), and the sidebar handles *navigation* (what can I do — role-specific feature areas). This separation is clean and scalable — as features are added, the sidebar grows without crowding the context bar.

The sidebar is collapsible (persists user preference) and role-adaptive — it shows different items based on the user's active role template.

### 2. Role Stacking: Grouped Sections with Collapsible Headers

When a user has multiple role templates (e.g., an Org Admin who's also a Volunteer Coordinator), their sidebar shows grouped sections with collapsible headers — "Communications," "Volunteers," "Fundraising." Each section can be collapsed independently. This gives users a clear mental model ("I'm doing comms work now, let me collapse the fundraising section") without forcing them to switch between role modes.

### 3. Alliance Navigation: Dedicated Sidebar Section

Rather than a context switch or a separate "alliance mode," alliance features appear as another collapsible section in the sidebar — consistent with the role-based grouping pattern. The alliance is part of the user's workspace, not a separate world.

### 4. Duress Mode: Sanitized Real Structure

This was the most security-sensitive navigation decision. When a user logs in with a duress passkey (under coercion), what do they see?

We chose "sanitized real structure" — the navigation looks identical to a normal session, but all content is scrubbed. Contact lists show a few innocuous contacts. Dashboards show plausibly low numbers. Voter ID scores and canvassing data are absent. An observer sees what looks like a low-activity but real campaign account.

This is the hardest option to implement (you need sanitization rules for every feature area) but the most convincing. A decoy that looks different from the real app would immediately raise suspicion.

### 5. Offline Degradation: Grey Out with Badge

When the device is offline, features requiring connectivity stay in the navigation but appear greyed out with a small offline badge. Tapping a greyed-out item shows "Requires connection." The navigation structure stays stable — no items appearing or disappearing as connectivity fluctuates.

This was a deliberate choice against the alternative of hiding offline-unavailable features. Stability matters for muscle memory. If the "Donations" item disappears when you're offline and reappears when you're online, the sidebar is constantly shifting. Users build spatial memory for where things are — that memory has to be reliable.

## Field Mode: A Different App

The most unusual navigation pattern is field mode — the full-screen takeover that replaces the normal navigation shell when a volunteer starts a canvassing shift.

In field mode, there's no sidebar, no bottom tabs, no notification bell. The volunteer's entire world is: the current door, the script, the response form, and "Next." Plus sync status (is my data current?) and a panic button (lock the app immediately).

This is intentionally radical. Field mode has a fundamentally different mental model from the rest of the app. The volunteer is walking, one-handed, possibly in poor lighting, on a low-end phone with limited battery. They need large touch targets, minimal navigation decisions, and zero distraction. The normal app shell (sidebar, tabs, notifications) would be noise.

The transition in and out of field mode is deliberate:
- **Entry:** Tap "Start Shift" → download walk list data → confirm readiness → full-screen takeover
- **Exit:** Tap "End Shift" → sync remaining data → debrief prompt → log hours → return to normal shell
- **Crash recovery:** If the app crashes or the device dies, the shift resumes exactly where it left off (position in walk list saved locally after each interaction)

## 236 Screens

The screen inventory cataloged every distinct screen in the platform across 21 feature areas. The final count: 236 screens.

Some numbers that tell the story:
- **24 screens work offline.** Mostly field mode (canvassing, voter registration, GOTV) plus event check-in and cached messages.
- **53 screens are mobile-primary.** Designed for phone first — field mode screens, check-in tools, supporter portal, volunteer self-service.
- **The rest (~160 screens) are desktop-preferred.** Builders, configuration panels, data management, analytics. They work on mobile but are designed for a large screen.

Each screen has a stable ID (format: `AREA-NNN`) for cross-referencing as the project grows. When a wireframe references "CANV-010" (Field Mode — Door Card), everyone knows exactly which screen it means.

## The URL Structure

Mapping 236 screens to SvelteKit routes forced a clear organizational structure. The app uses six layout groups, each with a distinct navigation shell:

- **`(public)`** — public pages, no auth (donation forms, event pages, candidate profiles)
- **`(auth)`** — login, registration, recovery
- **`(app)`** — the main authenticated application
- **`(field-mode)`** — field mode full-screen takeover
- **`(portal)`** — supporter self-service portal
- **`(wizard)`** — onboarding wizard flows

Each group wraps a different `+layout.svelte`, so the navigation shell changes completely based on the user's context. A volunteer in field mode sees a completely different chrome than an Org Admin in the settings panel.

A few URL decisions worth noting:

- **Public profile prefixes are short:** `/p/maria-santos` and `/o/partido-verde` — clean URLs for sharing on social media, print materials, and SMS in regions where every character counts.
- **Field mode URLs contain the shift ID:** `/field-mode/canvass/abc123/door/voter456` — if the app crashes, the URL alone is enough to resume the exact position.
- **Unauthorized routes return 404, not 403:** If a Volunteer navigates to `/settings/compliance` (which they can't access), they get a 404. The page doesn't exist for them. Restricted features are invisible, not forbidden.

## UX Principles That Emerged

Writing the IA documents crystallized eight UX principles that weren't explicitly stated before but were implicit in every decision:

1. **The volunteer in the field comes first.** Every design decision is pressure-tested against the hardest user.
2. **Invisible complexity.** 10 personas share one app, but no user should feel the weight of the others.
3. **Offline is not an error state.** It's a first-class operating condition.
4. **Stability over dynamism in navigation.** Items don't appear and disappear. Muscle memory is reliable.
5. **Security is invisible until it matters.** Login is one tap. Encryption is automatic. Until there's a threat.
6. **Respect the device.** Mobile is not a shrunken desktop.
7. **RTL is structural, not decorative.** Built into every layout decision from day one.
8. **Election day is a different app.** The platform transforms when GOTV activates.

## Reflections

Information architecture is the most underappreciated phase of product design. No one ever says "wow, great URL structure." But every frustrating product experience — can't find the feature, navigation is confusing, the app feels different every time I use it — traces back to IA decisions.

The IA phase also revealed the value of having complete specs *before* designing the UX. When we cataloged 236 screens, every single one traced back to a specific section in a specific spec document. Nothing was invented during IA — the screens are consequences of the specified workflows, features, and personas. The IA organized what already existed; it didn't invent.

The hardest UX challenge ahead: wireframing field mode. The IA defines what field mode *is* (full-screen takeover, linear progression, large touch targets, offline-first). The wireframes need to show what it *looks like* — and it needs to look right on a 5-inch screen in direct sunlight with one hand.

Next: global UX patterns — the recurring interaction models that make 236 screens feel like one coherent platform.
