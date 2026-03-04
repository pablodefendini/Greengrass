# Entry 5: The Wireframe Audit

*March 2026*

## When 21 documents need to agree with each other

Twenty-one wireframe documents written across multiple sessions. Over 200 screens. Ten personas. The problem wasn't that any individual document was bad — it was that they'd been written at different times, with slightly different conventions, and nobody had checked whether they all told the same story.

The first nine wireframe documents (navigation shell, dashboards, field mode, onboarding, messaging, supporter portal, alliance, CRM, field ops) predated the structural conventions that the later twelve naturally converged on. The later batch had settled into an 8-section template: Purpose, Scope, Navigation Context, Screen Wireframes, Empty States, Accessibility Notes, Design Decisions, Open Questions. The early batch had most of the content but organized differently — missing scope tables, no navigation context sections, design decisions scattered through prose instead of tables.

## The audit

The audit read all 21 documents cover-to-cover and graded them across five dimensions: screen coverage, structural consistency, design system token usage, offline specifications, and terminology.

The results weren't surprising but they were useful:

- **Screen coverage: 83%.** 196 of 236 screens had wireframe content. 25 of those were covered but without screen ID headings — the content existed but couldn't be cross-referenced. 15 screens were genuinely missing.
- **Structural consistency: Partial.** 12 of 21 docs followed the standard template. 9 needed normalization.
- **Design tokens: C-.** No wireframe document referenced design token names. This turned out to be correct — wireframes should use raw pixel values, not token names. Token annotation belongs in the visual design phase.
- **Offline specs: C.** Field mode was A+ (exemplary offline specification). Dashboards, fundraising, GOTV, and settings had no offline declarations at all.
- **Terminology: Mostly OK.** "Supporter," "donor," and "contact" were used interchangeably in a few places. They have distinct meanings in the data model.

## The normalization

Normalizing nine documents to match a standard structure sounds mechanical. It mostly was — adding scope tables, navigation context sections, empty states summaries, design decisions tables. But the mechanical work surfaced real gaps.

Adding scope tables forced every document to enumerate its screens explicitly, with offline status, mobile context, and persona access for each. Several documents had screens that existed in the wireframes but weren't called out anywhere — they were just... there. The scope table made them visible.

Adding navigation context sections answered a question that had been implicit: when a user with a specific role opens the app, where does this feature appear in their sidebar? The answer was already in the navigation model and persona views documents, but restating it in each wireframe document created a direct link between "how the user finds this" and "what they see when they get there."

The design decisions tables were the most valuable addition. Every wireframe document contains decisions — why a list view instead of a card grid, why the filter panel is on the left instead of the top, why the mobile version drops a column instead of scrolling horizontally. In the early documents, these decisions were embedded in prose. Extracting them into tables made them scannable, comparable, and — importantly — auditable for contradictions.

## The missing fifteen

Fifteen screens across three feature areas had no wireframe content at all:

**Supporter portal** (5 screens): Donation receipt view, payment method update, supporter profile, communication preferences, year-end statement download. These are the mundane but essential screens of the donor experience. A supporter who can't download their tax receipt will call support. A supporter who can't update their expired credit card will stop their recurring donation. These screens are boring by design — clear, simple, functional.

**Onboarding wizards** (5 screens): Payment processor setup, compliance configuration, WhatsApp setup, SMS setup, voter file import. The document already described the wizard shell pattern and noted that each wizard wraps the corresponding settings screen. The wireframes just needed to show how each settings screen adapts to the wizard context — what's pre-filled, what's simplified, what's reordered for a first-time setup flow.

**GOTV election day** (5 screens): Chase call interface, ride request form, ride driver view, poll watcher check-in, poll watcher issue report form. These are operational screens used under pressure on election day. The chase call interface needs to present the voter's contact history and a script while being fast enough for a volunteer making 50 calls in an hour. The ride driver view needs to work like a simplified dispatch screen on a phone mounted to a dashboard. The poll watcher screens need to capture evidence (photos, timestamps, descriptions) quickly enough that a watcher isn't distracted from their primary job.

## What the audit decided

Five UX decisions came out of the audit, recorded formally in `decisions/ux-decisions.md`:

1. **Standard wireframe structure.** All 21 documents must follow the 8-section template, with documented exceptions for navigation shell (shell variants instead of scope), field mode (flow-based organization with screen IDs as annotations), and messaging (pattern-based organization).

2. **Design tokens: annotate only where load-bearing.** Don't globally annotate wireframes with token names. Reference tokens only where the specific value is critical — touch targets in field mode (`--touch-target-field: 56px`), spacing that intentionally deviates from defaults, color semantics where meaning matters more than appearance.

3. **Every screen declares its offline status.** Even "No" is a decision. Most admin screens are genuinely online-only — dashboards aggregate server data, settings configure shared state, imports require uploads. Declaring `Offline: No` is not a gap, it's a correct specification that implementers shouldn't have to guess.

4. **Terminology conventions.** Contact (any person in the CRM) ⊃ Supporter (has taken a public action) ⊃ Donor (has made a financial contribution). Use the most specific applicable term.

5. **Screen IDs are mandatory.** Every wireframed screen gets an ID from the screen inventory (`AREA-NNN`). The IDs are the cross-reference glue between wireframes, URL structure, and implementation.

## The cross-reference index

The final deliverable was a complete screen index in the wireframes README — all 236 screen IDs mapped to their wireframe location with status. This is the single lookup table that answers "where is this screen specified?" for any screen in the platform. After the audit, zero screens are listed as missing.

## What I learned

**Audits are more useful than they sound.** "Read all 21 documents and check consistency" sounds like busywork. But the structural normalization surfaced real gaps (missing offline declarations, missing navigation context, undocumented design decisions), and the missing wireframes were genuine coverage holes that would have been discovered much more painfully during implementation.

**Conventions emerge, then need enforcing.** The 8-section template wasn't designed upfront — it evolved organically as the later documents were written. The audit's job was to recognize the convention and apply it retroactively. This is a general pattern: the first pass through a large body of work creates implicit conventions. The audit makes them explicit.

**The open questions are getting sharper.** Entry 4 noted about 25 open questions. The audit consolidated 89 across all 21 documents — but many are duplicates or near-duplicates asking the same question from different feature perspectives. Deduplication brought the count down meaningfully. The remaining questions are better scoped and more answerable than the early ones. They're ready for user research, not just speculation.
