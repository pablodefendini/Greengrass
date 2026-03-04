# Wireframe Audit Report

## Purpose

This document presents findings from a structural audit of all 21 wireframe documents completed during Phase 4 of UX design. The audit was conducted after all wireframes were complete to normalize structure, close coverage gaps, and consolidate cross-cutting concerns.

---

## Executive Summary

| Metric | Value | Notes |
|--------|-------|-------|
| Total wireframe documents | 21 | All feature areas covered |
| Total screens in inventory | 236 | From `screen-inventory.md` |
| Screens with full wireframes | 196 | Under a screen ID heading with wireframe content |
| Screens covered but without ID headings | 25 | Content exists but not under standard `## ID: Name` heading |
| Truly missing screens | 15 | No wireframe content exists |
| Structural consistency | 12 of 21 | Follow standard 8-section template |
| Design system token references | 0 | No wireframe doc references token names |
| Open questions across all docs | ~89 | 34 from early batch + 55 from later batch |
| Design decisions documented | ~72+ | Primarily in later-batch docs |

**Bottom line:** Coverage is strong at 83%. The primary issues are structural inconsistency in the 9 early-batch documents and the complete absence of design token references. Both are addressable without rewriting content.

---

## Standard Document Structure

The 12 later-batch documents established a de facto standard structure:

1. **Purpose** — What the feature area does, who it serves
2. **Scope** — Table mapping screen IDs to screen names, personas, offline status, mobile context, and in-document section
3. **Navigation Context** — How the feature appears in the sidebar/tabs for its primary persona
4. **Screen wireframes** — One `## ID: Screen Name` section per screen, each with Desktop/Mobile wireframes, Interaction Specs, and Design Notes
5. **Empty States Summary** — Consolidated empty/zero-data states
6. **Accessibility Notes** — Feature-specific accessibility considerations
7. **Design Decisions** — Table of key decisions with choice and rationale
8. **Open Questions** — Unresolved questions for future phases

---

## Per-Document Gap Analysis

### Early Batch (9 docs — need normalization)

| Document | Screen IDs | Scope Table | Nav Context | Empty States | Design Decisions | Accessibility | Open Qs |
|----------|:----------:|:-----------:|:-----------:|:------------:|:----------------:|:-------------:|:-------:|
| navigation-shell.md | — | Missing | — | Missing | Missing | `## Accessibility Notes` | 3 |
| dashboards.md | DASH-001–011 | Missing | Missing | Yes | Partial (4× inline) | Missing | 5 |
| field-mode.md | Missing (14) | Missing | — | Missing | Missing | `## Accessibility in Field Mode` | 3 |
| onboarding.md | Missing (3) | Missing | Missing | — | Partial (`## Wizard Design Notes`) | Missing | 3 |
| messaging.md | Missing (14) | Missing | Missing | Missing | Missing | `## Accessibility` | 3 |
| supporter-portal.md | Missing (4) | Missing | Missing | Missing | `## Design Notes` | `### Accessibility` (nested) | 3 |
| alliance.md | ALLY-001–008 | Missing | — | Yes (3 variants) | Yes (6× inline) | `## Accessibility Notes` | 5 |
| crm.md | CRM-001–015 | Missing | Missing | Yes (3 variants) | Yes (10× inline) | `## Accessibility Notes` | 5 |
| field-ops.md | CANV/PHONE/VREG | Missing | Missing | Yes (3 variants) | Yes (8× inline) | `## Accessibility Notes` | 5 |

**Notes:**
- "—" means section not applicable (navigation-shell has no persona-specific nav; alliance has its own nav context section; field-mode runs outside the nav shell)
- "Partial" means design decisions exist but scattered inline, not in a consolidated table
- Screen IDs "Missing (N)" means N screens have wireframe content but no `## ID: Name` heading

### Later Batch (12 docs — structurally consistent)

| Document | Screen IDs | Scope | Nav Context | Empty States | Design Decisions | Accessibility | Open Qs |
|----------|:----------:|:-----:|:-----------:|:------------:|:----------------:|:-------------:|:-------:|
| fundraising.md | FUND-001–020 | Yes | Yes | Yes | Yes (7) | Yes | 5 |
| communications.md | COMM-001–010 | Yes | Yes | Yes | Yes (6) | Yes | 5 |
| social-media.md | SOCIAL-001–006 | Yes | Yes | Yes | Yes (5) | Yes | 4 |
| events.md | EVT-001–010 | Yes | Yes | Yes | Yes (6) | Yes | 5 |
| activism.md | ACT-001–009 | Yes | Yes | Yes | Yes (7) | Yes | 5 |
| press.md | PRESS-001–016 | Yes | Yes | Yes | Yes (6) | Yes | 5 |
| gotv.md | 15 of 23 | Yes | Yes | Yes | Yes (6) | Yes | 5 |
| settings.md | SET-001–022 | Yes | Yes | Yes | Yes (6) | Yes | 5 |
| auth.md | AUTH-001–007 | Yes | Yes | Yes (edge cases) | Yes (6) | Yes | 4 |
| profile.md | PROF-001–005 | Yes | Yes | Yes | Yes (5) | Yes | 3 |
| help.md | HELP-001–008 | Yes | Yes | Yes | Yes (6) | Yes | 4 |
| public.md | PUB-001–008 | Yes | Yes | Yes | Yes (6) | Yes | 4 |

All 12 later-batch documents follow the standard 8-section structure consistently.

---

## Missing Wireframes

15 screens from `screen-inventory.md` have no wireframe content in any document.

### Priority 1 — Supporter-Facing (5 screens)

These are the public donor experience. Missing wireframes leave gaps in a critical conversion funnel.

| ID | Screen | Target Doc | Complexity |
|----|--------|-----------|------------|
| SUP-003 | Donation Receipt View | supporter-portal.md | Low |
| SUP-005 | Payment Method Update | supporter-portal.md | Medium |
| SUP-006 | Supporter Profile | supporter-portal.md | Low |
| SUP-007 | Communication Preferences | supporter-portal.md | Medium |
| SUP-009 | Year-End Statement Download | supporter-portal.md | Low |

### Priority 2 — Election Day Operations (5 screens)

Operational screens used during the highest-stakes moment. Missing wireframes create implementation ambiguity.

| ID | Screen | Target Doc | Complexity |
|----|--------|-----------|------------|
| GOTV-010 | Chase Call Interface | gotv.md | Medium |
| GOTV-011 | Ride Request Form | gotv.md | Low |
| GOTV-013 | Ride Driver View | gotv.md | Medium |
| GOTV-014 | Poll Watcher Check-in | gotv.md | Low |
| GOTV-015 | Poll Watcher Issue Report Form | gotv.md | Medium |

### Priority 3 — Onboarding Wizards (5 screens)

Wizard screens that follow an established shell pattern. Lower risk because the doc already states these mirror their settings-screen counterparts.

| ID | Screen | Target Doc | Complexity |
|----|--------|-----------|------------|
| WIZ-002 | Payment Processor Wizard | onboarding.md | Low |
| WIZ-004 | Compliance Configuration Wizard | onboarding.md | Low |
| WIZ-005 | WhatsApp Business Setup Wizard | onboarding.md | Low |
| WIZ-006 | SMS Number Setup Wizard | onboarding.md | Low |
| WIZ-007 | Voter File Import Wizard | onboarding.md | Low |

---

## Design System Token Integration

### Current State

No wireframe document references design tokens by name. Raw values are used throughout:
- Colors: `"green dot"`, `"red icon"`, `"amber"` — never `--color-success`, `--color-error`, `--color-warning`
- Spacing: `"16px padding"`, `"24px gap"` — never `--space-4`, `--space-6`
- Typography: `"14px"`, `"bold"` — never `--text-sm`, `--font-weight-bold`

### Assessment

| Category | Grade | Detail |
|----------|-------|--------|
| Color tokens | F | Zero references. Colors described by visual appearance or hex values |
| Spacing tokens | C | Consistent use of 8px-multiple values but never by token name |
| Typography tokens | C | Sizes follow the type scale but never reference token names |
| Touch targets | B+ | field-mode.md specifies 48px/56px targets — correct values per foundations.md |
| Overall | C- | Token values are implicitly followed but never explicitly referenced |

### Recommendation

**Annotate tokens only where load-bearing — not globally.** A global search-and-replace of pixel values with token names across 21 docs adds noise without improving wireframe clarity. Token references are most valuable where:

1. **Touch targets in field mode** — `--touch-target-min: 48px` and `--touch-target-field: 56px` are safety-critical
2. **Spacing that deviates from defaults** — where a wireframe intentionally uses non-standard spacing
3. **Color semantics** — where the meaning (success/error/warning) matters more than the appearance

Record this as a UX decision. Defer comprehensive token annotation to the visual design phase.

---

## Offline Coverage

Per-screen offline behavior is declared in the Scope table of later-batch documents. Early-batch documents lack this declaration entirely.

### Grading

| Document | Grade | Notes |
|----------|-------|-------|
| field-mode.md | A+ | Offline behavior deeply specified throughout. Best-in-class. |
| messaging.md | B | Offline messaging section exists with detail, but no per-screen scope table |
| alliance.md | C | Has an `## Offline Behavior` section but brief |
| crm.md | C | Screen inventory says CRM-002 is Partial offline — not called out in doc |
| navigation-shell.md | C | Describes offline nav degradation but not per-variant |
| supporter-portal.md | D | No offline mention; all screens are online-only but should declare it |
| dashboards.md | F | No offline mention. All dashboards are online-only — needs explicit declaration |
| onboarding.md | F | No offline mention. Wizards are online-only — needs explicit declaration |
| fundraising.md | A | Scope table declares offline per screen. FUND-010 (cash) is Partial. |
| communications.md | A | Scope table declares all screens No. Correct — all online-only. |
| social-media.md | A | Scope table declares all screens No. |
| events.md | A | Scope table declares EVT-005 (check-in) Yes. |
| activism.md | A | Scope table declares ACT-009 Partial. |
| press.md | A | Scope table declares all No. |
| gotv.md | A | Scope table present. GOTV field mode screens are offline. |
| settings.md | B | Scope table present but no Offline column. Purpose section states all online-only. |
| auth.md | A | Scope table declares all No. |
| profile.md | A | Scope table declares all No. |
| help.md | A | Scope table with partial offline for training content. |
| public.md | A | Scope table declares all No. |

**Key finding:** Most admin screens are genuinely online-only. The fix is not redesigning them for offline — it's explicitly declaring `Offline: No` in a Scope table so implementers don't have to guess.

---

## Terminology Audit

### Conflicts Found

| Term Cluster | Used In | Issue |
|--------------|---------|-------|
| supporter / donor / contact | supporter-portal, fundraising, crm | "Supporter" is the portal persona. "Donor" appears in fundraising context. "Contact" is the CRM entity. All three can refer to the same person. |
| staff / team member / user | settings, onboarding, messaging | "Staff" is the standard term in settings. "Team member" appears in some onboarding copy. "User" is generic. |
| campaign | fundraising, field-ops, communications, activism, GOTV | Overloaded: fundraising campaign, canvassing campaign, email campaign, activism campaign, GOTV campaign. Context usually disambiguates. |

### Assessment

The terminology conflicts are mostly benign — context disambiguates in each case. The one exception is **supporter vs. donor vs. contact**: these need canonical definitions because they appear in the same feature areas (fundraising crosses supporter portal and CRM).

### Recommended Canonical Terms

| Canonical Term | Definition | Use Context |
|----------------|-----------|-------------|
| **Contact** | Any person in the CRM database | CRM, data import, segments |
| **Supporter** | A person who has taken a public action (donated, signed, RSVPed) | Supporter portal, public pages, activism |
| **Donor** | A supporter who has made a financial contribution | Fundraising reports, compliance, receipts |
| **Staff** | An authenticated user with an organizational role | Settings, permissions, onboarding |

"Donor" is a subset of "Supporter" which is a subset of "Contact." Use the most specific applicable term.

---

## Recommendations

### Priority 1 — Required before visual design

1. **Normalize 9 early-batch docs** — Add Scope tables, Navigation Context, Design Decisions tables, and standardized Accessibility sections. Add screen ID headings where missing.
2. **Add 15 missing wireframes** — Supporter portal (5), GOTV (5), onboarding wizards (5).
3. **Declare offline behavior** in all Scope tables — even if the answer is "No" for every screen.

### Priority 2 — Required before implementation

4. **Consolidate open questions** — Extract ~89 questions, categorize, deduplicate, flag contradictions.
5. **Consolidate design decisions** — Merge all decisions into a single index. Flag any contradictions.
6. **Record UX decisions** — Document structural conventions, token approach, offline requirements, terminology in `decisions/ux-decisions.md`.

### Priority 3 — Deferred to visual design phase

7. **Design token annotation** — Add token references where load-bearing (touch targets, spacing deviations, color semantics). Do not annotate globally.
8. **Terminology normalization** — Apply canonical terms during the sections being actively modified. No global search-and-replace.

---

## Appendix A: Consolidated Open Questions

Open questions extracted from all 21 wireframe documents, categorized by theme and deduplicated.

### Navigation & Layout (5)

1. **Sidebar section collapse persistence** — Should collapsed/expanded state of sidebar sections persist across sessions or reset on login? *(navigation-shell.md)*
2. **Detail panel memory** — When navigating away and back, should the detail panel remember what was open or reset to closed? *(navigation-shell.md)*
3. **Notification drawer count cap** — Should the notification count badge cap at 99+, or show the actual number? *(navigation-shell.md)*
4. **Dashboard personalization** — Should users be able to rearrange dashboard cards or hide sections? *(dashboards.md)*
5. **Dashboard refresh interval** — What's the appropriate auto-refresh interval for each dashboard type? *(dashboards.md)*

### Field Operations (8)

6. **Walk list sorting** — Should walk lists sort by geographic proximity (efficient routing) or by priority score (highest-value contacts first)? *(field-mode.md)*
7. **Door card skip reasons** — How many "not home" attempts before the contact is deprioritized? *(field-mode.md)*
8. **Map offline tile size** — How much map area should be pre-cached for offline use? *(field-mode.md)*
9. **Script versioning in-field** — If a script is updated while volunteers are in the field, when do they see the new version? *(field-ops.md)*
10. **Cross-campaign script reuse** — Should scripts be shareable across campaigns? *(field-ops.md)*
11. **Turf auto-generation constraints** — What are the practical limits (max contacts per turf, max walk time)? *(field-ops.md)*
12. **Walk list reassignment** — Can walk lists be reassigned mid-shift? *(field-ops.md)*
13. **Canvassing results data retention** — How long are individual interaction records retained? *(field-ops.md)*

### Messaging & Communications (10)

14. **Message retention** — How long are messages stored? Is there a configurable retention policy? *(messaging.md)*
15. **Message search** — Should full-text search be available for messages, and how does this interact with E2E encryption? *(messaging.md)*
16. **Read receipts** — Should read receipts be visible to senders? Opt-in or opt-out? *(messaging.md)*
17. **Email builder complexity** — Should the template builder support conditional content blocks in v1? *(communications.md)*
18. **WhatsApp template approval** — Should approval status be visible in the composer? *(communications.md)*
19. **SMS A/B testing** — Is message body A/B testing feasible given lower SMS volumes? *(communications.md)*
20. **Drip sequence builder** — Visual flow builder or simple trigger + delay + send rules for v1? *(communications.md)*
21. **Cross-channel orchestration** — Should the system prevent same-topic messages across channels on the same day? *(communications.md)*
22. **Approval workflow for social posts** — All posts or only above certain sensitivity? *(social-media.md)*
23. **Content library** — Shared asset library or file upload for v1? *(social-media.md)*

### Social Media (2)

24. **Cross-posting analytics** — Show as 1 post with 4 platform results, or 4 separate posts? *(social-media.md)*
25. **TikTok video creation** — In-platform editing or external only? *(social-media.md)*

### Events (5)

26. **Multi-day events** — Single event with multiple dates or linked events? *(events.md)*
27. **Paid tickets** — Should events support ticket pricing? Overlaps with fundraising. *(events.md)*
28. **Recurring events** — Auto-create instances or manual duplication? *(events.md)*
29. **In-event broadcast** — Should attendee messaging be available during events? *(events.md)*
30. **Multi-staff offline check-in** — How are conflicts resolved when multiple staff check in attendees offline? *(events.md)*

### Fundraising (6)

31. **Refund time limits** — Maximum age for refundable donations? Processor policies vary. *(fundraising.md)*
32. **Pledge reminder channels** — All channels (email, SMS, WhatsApp) or just email? *(fundraising.md)*
33. **Cash photo requirements** — Required above certain amount? Balances audit vs. field friction. *(fundraising.md)*
34. **A/B test variant count** — Support more than 2 variants? *(fundraising.md)*
35. **Alliance split dispute resolution** — Formal process beyond approval flow? *(fundraising.md)*
36. **Dashboard data freshness for fundraising** — How current should fundraising metrics be? *(dashboards.md)*

### Activism (5)

37. **Multi-target campaigns** — Single letter campaign with multiple targets? *(activism.md)*
38. **AI model choice** — Speed, multilingual capability, and cost tradeoffs? *(activism.md)*
39. **Printable letters** — Generate PDF letters in addition to email? *(activism.md)*
40. **Comment submission verification** — How to verify regulatory body email accepts comments? *(activism.md)*
41. **Supporter identity verification** — Constituency validation vs. friction? *(activism.md)*

### Press & Media (5)

42. **Embargo enforcement** — Technical enforcement or trust-based tracking? *(press.md)*
43. **Crisis communications mode** — Dedicated mode or urgent flag sufficient? *(press.md)*
44. **Coverage sentiment** — Auto-suggest from headline analysis or manual only? *(press.md)*
45. **Public endorsement display** — Where exactly do public endorsements surface? *(press.md)*
46. **Multi-language press releases** — Simultaneous or separate releases? *(press.md)*

### GOTV & Election Day (5)

47. **Official election data feeds** — Can the platform integrate with electoral authority APIs? *(gotv.md)*
48. **Alliance ride sharing** — Cross-org driver pools on election day? *(gotv.md)*
49. **Reallocation algorithm** — Simple rule-based vs. predictive model? *(gotv.md)*
50. **Results entry security** — Preventing fraudulent results entries? *(gotv.md)*
51. **Post-election data retention** — How long is GOTV operational data retained? *(gotv.md)*

### Settings & Administration (5)

52. **Settings delegation** — Can specific settings categories be delegated to non-OA roles? *(settings.md)*
53. **Two-OA approval** — Should critical settings changes require a second OA? *(settings.md)*
54. **Settings import/export** — Export/import configuration between tenants? *(settings.md)*
55. **API rate limits** — Configurable per key or plan level? *(settings.md)*
56. **Integration health monitoring** — Proactive alerting for failing integrations? *(settings.md)*

### Authentication & Security (4)

57. **Passkey sync** — Allow cloud-synced passkeys or require device-bound only? *(auth.md)*
58. **TOTP fallback** — Add app-based codes as additional fallback for low-connectivity areas? *(auth.md)*
59. **OA recovery** — How does recovery work when the only OA has no trusted contacts? *(auth.md)*
60. **Low-end device passkey support** — Minimum device/OS requirement for WebAuthn? *(auth.md)*

### User Profile (3)

61. **Profile photo privacy** — Visible to supporters or internal-only? *(profile.md)*
62. **Notification sounds** — Custom sounds or default OS? *(profile.md)*
63. **Multi-tenant notifications** — Show notifications from non-active orgs? *(profile.md)*

### Support & Help (4)

64. **AI concierge language** — Use configured language or detect from question? *(help.md)*
65. **Training completion gating** — Block shifts until required training is complete? *(help.md)*
66. **External content** — Allow external resource links in knowledge base? *(help.md)*
67. **AI hallucination prevention** — Ground concierge in KB only or allow broader reasoning? *(help.md)*

### Public Pages (4)

68. **Custom domains** — Support custom domains for public pages? *(public.md)*
69. **Page analytics** — Built-in or external tools? *(public.md)*
70. **Volunteer signup A/B testing** — Test variations on PUB-007? *(public.md)*
71. **Open Graph images** — Auto-generated or manually uploaded? *(public.md)*

### Onboarding (3)

72. **Wizard skip behavior** — Can optional wizard steps be skipped? What's the minimum viable path? *(onboarding.md)*
73. **Wizard resume** — If a wizard is abandoned mid-way, does it save progress? *(onboarding.md)*
74. **Post-wizard checklist** — Is the "Getting Started" checklist dismissible or persistent until complete? *(onboarding.md)*

### Supporter Portal (3)

75. **Authentication tiers** — Should supporters need full accounts or just magic link access? *(supporter-portal.md)*
76. **Portal branding** — How much branding customization is available for the supporter portal? *(supporter-portal.md)*
77. **Mobile portal** — Is the portal a separate mobile experience or responsive web? *(supporter-portal.md)*

### Alliance (5)

78. **Cross-alliance data visibility** — What contact data is shared vs. kept private? *(alliance.md)*
79. **Alliance hierarchy** — Is the alliance flat or can there be sub-alliances? *(alliance.md)*
80. **Joint campaign ownership** — When a joint campaign ends, who owns the data? *(alliance.md)*
81. **Alliance dashboard permissions** — Can member org admins see other members' metrics? *(alliance.md)*
82. **Affiliation request SLA** — Is there a timeout for unanswered affiliation requests? *(alliance.md)*

### CRM & Data (5)

83. **Dedup confidence threshold** — What match confidence level triggers auto-merge vs. manual review? *(crm.md)*
84. **Import rollback** — Can a completed import be fully rolled back? *(crm.md)*
85. **Segment refresh** — How often are dynamic segments recalculated? *(crm.md)*
86. **Data export audit** — Should exports require a reason for the audit trail? *(crm.md)*
87. **Tag taxonomy** — Should tags be flat or hierarchical? *(crm.md)*

### Cross-Cutting (2)

88. **Dashboards — real-time vs. polling** — Should dashboards use WebSockets or polling? *(dashboards.md, gotv.md)*
89. **Dashboard widget library** — Should there be a standardized set of dashboard widgets? *(dashboards.md)*

**Total: 89 questions across 21 documents.**

### Contradictions and Overlaps

| Questions | Conflict |
|-----------|----------|
| #27 (paid tickets) + #31 (fundraising) | Paid events overlap with fundraising. Need to decide if ticket revenue flows through the donation pipeline or a separate system. |
| #14 (message retention) + #51 (GOTV data retention) + #84 (import rollback) | Three separate retention questions. Should be answered with a unified data retention policy. |
| #21 (cross-channel orchestration) + #32 (pledge reminder channels) | Both touch on cross-channel coordination. A unified frequency/orchestration policy would answer both. |

---

## Appendix B: Consolidated Design Decisions

Design decisions extracted from all 21 wireframe documents. The early-batch docs use inline "Design Notes" subsections; the later-batch docs use consolidated "Design Decisions" tables.

### Navigation & Shell

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Desktop nav paradigm | Hybrid top bar + sidebar | Context (top) + features (side) separation | navigation-model.md |
| Offline nav degradation | Grey out with badge, don't remove | Stable muscle memory | navigation-model.md |
| Duress mode nav | Sanitized real structure | Plausible deniability | navigation-model.md |

### Dashboards

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Candidate dashboard curated | Simplified view with only high-impact metrics | Candidates aren't operators — they need headlines, not data | dashboards.md |
| Communications dashboard | Cross-channel unified view | Prevents channel silo thinking | dashboards.md |
| Data Quality dashboard | Score-first with drill-down | Score is the headline; details on demand | dashboards.md |
| Compliance dashboard | Flag-driven with action queue | Compliance is reactive — surface what needs attention | dashboards.md |

### Field Mode

*(No consolidated decisions table — inline design notes throughout. Key patterns:)*

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Touch targets | 48px minimum, 56px in field mode | Gloved hands, outdoor glare, one-handed operation | field-mode.md |
| Crash recovery | Auto-save every interaction, resume on relaunch | Data loss during field shifts is unacceptable | field-mode.md |
| GOTV door card variant | Different from standard canvassing card | GOTV has binary goal (did they vote?) vs. canvassing (persuasion) | field-mode.md |

### Onboarding

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Wizard shell | Stepped progress bar, no sidebar | Focus on the task; prevent distraction | onboarding.md |
| BYOK as separate wizard | Not part of org setup | Security ceremony deserves focused attention | onboarding.md |
| Post-wizard checklist | Persistent until dismissed | Guides first-time setup without blocking | onboarding.md |

### Messaging

*(No consolidated decisions table. Key patterns from inline notes:)*

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Desktop split view | Conversation list + thread side-by-side | Standard messaging UX; no need to innovate | messaging.md |
| Candidate briefings | Structured format, not free-text | Candidates need scannable info, not chat | messaging.md |
| Encryption indicators | Lock icon on E2E messages | Trust signal without technical jargon | messaging.md |

### Supporter Portal

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Portal branding | Tenant-branded, not GreenGrass-branded | Supporters should feel they're interacting with their org | supporter-portal.md |
| Authentication tiers | Magic link for basic, full account for management | Low barrier for viewing; higher for changes | supporter-portal.md |

### CRM

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Unified contact record | Single record with persona-specific tabs | One person = one record, regardless of role | crm.md |
| Dedup side-by-side | Field-by-field comparison with merge preview | Manual merge needs full visibility | crm.md |
| Import wizard | 4-step: upload → map → dedup preview → confirm | Each step has a distinct purpose; can't be combined | crm.md |
| Segment builder | Visual query builder with live preview | Technical users need power; live preview provides confidence | crm.md |

### Alliance

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Alliance nav context | Dedicated sidebar section, not a separate app | Alliance is part of the platform, not a bolt-on | alliance.md |
| Sharing configuration | By category and by org views | Two mental models for the same data; both needed | alliance.md |
| Joint campaign governance | Three models: lead-org, committee, equal | Different alliance structures need different governance | alliance.md |

### Field Operations (Admin)

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Script builder | Split-pane with live preview | Immediate feedback on script changes | field-ops.md |
| Turf management | Map-first with list fallback | Turfs are inherently geographic | field-ops.md |
| Shared patterns across canvassing/phone/voter reg | Consistent list/create/results pattern | Reduces learning curve across field op types | field-ops.md |

### Fundraising

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Donation list summary bar | Inline metric cards above table | Finance Director checks totals frequently | fundraising.md |
| Flagged donations in main list | Warning row highlight + flag icon | Flags visible in normal workflow, not separate queue | fundraising.md |
| Cash recording mobile-first | Full-screen centered form, camera integration | Cash donations happen in the field | fundraising.md |
| Reconciliation two-column | Cash records left, bank deposits right | Mirrors bookkeeper's desk mental model | fundraising.md |
| A/B test separate screens | Setup ≠ Results | Different mental modes: configure vs. analyze | fundraising.md |
| Alliance split approval inline | Status on split card, not separate queue | Few and infrequent — dedicated queue usually empty | fundraising.md |
| Payment processor connect | Inline stepped expansion, not wizard | Only 3 steps; wizard overhead not warranted | fundraising.md |

### Communications

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Campaign builder single page | Scrollable sections with jump links | Email campaigns are iterative, not linear | communications.md |
| Template library card grid | Card with thumbnail preview | Visual preview critical for template selection | communications.md |
| SMS + WhatsApp in one screen | Channel toggle within single composer | Same audience, similar workflow | communications.md |
| Consent as matrix | Channel × purpose table | Correct mental model for consent management | communications.md |
| Frequency caps org-wide | Global caps, not per-campaign | Per-campaign too granular to manage | communications.md |
| Unsubscribe reasons | Structured selection on unsub page | Reasons diagnose communication quality | communications.md |

### Social Media

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Multi-platform composer | Single composer with platform overrides | "One message, multiple channels" mental model | social-media.md |
| Calendar as primary tool | Dedicated calendar view | Social media is rhythm-driven | social-media.md |
| Side-by-side preview | Full-page comparison | Catches cross-platform inconsistencies | social-media.md |
| Account connection OA-only | Org Admin exclusive | OAuth tokens grant publishing access — security-sensitive | social-media.md |
| Engagement deferred | Link out to native platforms | In-platform engagement is massive scope for v1 | social-media.md |

### Events

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Check-in full-screen | Dedicated check-in mode | High-focus task at busy venue | events.md |
| Check-in offline-first | RSVP list pre-downloaded | Events happen in unreliable connectivity | events.md |
| Walk-in separate flow | Distinct "Walk-in" button | Quick registration path | events.md |
| Survey lightweight builder | Simple question types | Post-event surveys should be 2-minute affairs | events.md |
| Virtual as extension | Virtual settings extend EVT-002 | Prevents duplicate event management | events.md |
| Metrics comparison | Auto-populated with same-type events | Trends help improvement | events.md |

### Activism

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| AI-generated messages | Each supporter gets unique message | Prevents "form letter" detection | activism.md |
| Explicit approval checkbox | Supporter must check "I've reviewed" | Legal and ethical requirement | activism.md |
| Personal connection optional | Supporter shares why issue matters | AI weaves personal stories in | activism.md |
| Talking points ordered | Staff controls priority | Order determines AI emphasis | activism.md |
| Real-time action counter | Total actions shown live | Social proof drives participation | activism.md |
| Petition signatures privacy | First name + last initial only | Protects supporters in sensitive contexts | activism.md |
| Regeneration limit | 3 per session | Prevents abuse while giving control | activism.md |

### Press & Media

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Media contacts as CRM extension | Press fields on standard Contact records | Journalists are contacts — separate DB fragments relationships | press.md |
| Endorsement pipeline Kanban | Visual pipeline with drag-and-drop | Inherently pipeline-shaped process | press.md |
| Statement builder streamlined | Minimal fields vs. press release builder | Statements are reactive and time-sensitive | press.md |
| Coverage logging manual | No automated media monitoring in v1 | Automated monitoring poorly covers global south media | press.md |
| Interview prep auto-assembled | System surfaces talking points + journalist history | Manual prep is error-prone | press.md |
| Talking points versioned | Full version history with diff | Positions evolve over time | press.md |

### GOTV

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Human-in-the-loop reallocation | Platform suggests, staff approves | Election day too high-stakes for automation | gotv.md |
| Multi-pass turfs | Morning/afternoon/evening passes | Voters not home in morning reachable later | gotv.md |
| Confidence-weighted turnout | Different icons per data source | Prevents overconfidence | gotv.md |
| Separate map + segment views | GOTV-017 and GOTV-018 | "Where" vs. "who" — different mental models | gotv.md |
| Poll watcher separation | Registry (people) + Credentials (documents) | Different focus for each | gotv.md |
| Results entry mobile-first | Simple form, not spreadsheet | Poll watchers need fast, one-handed interface | gotv.md |

### Settings & Admin

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| All settings OA-only | No delegation | Single point of responsibility | settings.md |
| Three-tier security | Standard / Enhanced / Maximum | Organizations have different risk profiles | settings.md |
| Additive-only overrides | Overrides grant, never revoke | Prevents Swiss cheese permissions | settings.md |
| Integration hub card grid | Visual status cards | Scannable at a glance | settings.md |
| Audit trail non-deletable | No delete/edit | Tamper-proof compliance requirement | settings.md |
| Separate per-integration screens | SET-013 through SET-016 | Unique config requirements each | settings.md |

### Authentication

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Passkey-first (no passwords) | Single passkey button | Eliminates phishing, credential stuffing, password reuse | auth.md |
| 24-hour recovery cooling-off | Mandatory wait period | Real owner has time to notice unauthorized attempt | auth.md |
| Trusted contact recovery | Peer approval, not admin override | No single person can access another's account | auth.md |
| No "forgot password" | Passkey + trusted contacts only | No password to forget | auth.md |
| Data preservation on timeout | Local storage persists unsaved work | Volunteers may be mid-form on timeout | auth.md |
| Duress passkey optional | Maximum security tier only | Only orgs with genuine security threats | auth.md |

### User Profile

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Email not user-editable | OA-managed only | Email is account identifier for dedup, invites, audit | profile.md |
| Instant language switch | No save/confirm | Experience the language before committing | profile.md |
| Quiet hours with GOTV override | Election day bypasses quiet hours | GOTV operations are time-critical | profile.md |
| Security summary as checklist | Green check / empty circle | Quick scan for attention needed | profile.md |
| Tenant switcher in profile | Not top-level nav | Multi-tenant is uncommon (95% have one org) | profile.md |

### Support & Help

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Role-filtered help | Articles tagged by persona | Reduces noise for role-specific searches | help.md |
| AI concierge side panel (desktop) | Overlays current screen | Context preservation | help.md |
| Training offline caching | Text/images cached, video online-only | Low-connectivity training areas | help.md |
| Quiz as separate step | Dedicated screen after lessons | Clear learning vs. assessment separation | help.md |
| Certification expiration | Configurable per module | Safety training renewable; platform basics not | help.md |
| Article feedback | Simple thumbs up/down | Low-friction signal | help.md |

### Public Pages

| Decision | Choice | Rationale | Source |
|----------|--------|-----------|--------|
| Short URL slugs | `/p/`, `/o/` | Printable, memorable for physical media | public.md |
| Mobile-first | Designed for phone, adapted up | Majority traffic from social media on phones | public.md |
| Minimal form fields | Name and email only required | Every field reduces conversion | public.md |
| Gated media kit optional | OA-configurable public or gated | Some orgs track downloads; others want accessibility | public.md |
| Donation upsell on confirmation | Gentle CTA after volunteer signup | High-engagement moment | public.md |
| No auth on public pages | Completely open access | Login walls kill conversion | public.md |

### Contradictions Found

| Decision A | Decision B | Tension |
|------------|------------|---------|
| "All settings OA-only" (settings.md) | Open question #52: "Can settings be delegated?" | The decision says no, the question asks if it should change. Needs resolution. |
| "Frequency caps org-wide" (communications.md) | Open question #21: "Cross-channel orchestration" | Org-wide caps are per-channel; cross-channel may need different approach. |

No other contradictions found. Decisions are remarkably consistent across documents.
