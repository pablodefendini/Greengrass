# Get Out The Vote & Election Day Operations

## Purpose

This document specifies GreenGrass's GOTV and election day capabilities. Election day is the single most operationally intense day of any campaign — everything the platform has done (canvassing, voter registration, fundraising, communications, training) converges into a few hours of high-stakes execution.

GOTV operations are distinct from regular canvassing (workflows.md) in several ways:

- **Time pressure.** Polls close at a fixed time. Every minute matters.
- **Real-time coordination.** The campaign needs a live picture of who has voted and who hasn't, updated continuously.
- **Multiple simultaneous operations.** Door knocking, phone banking, rides to polls, poll watching, and war room coordination all happen in parallel.
- **Higher stakes for failure.** A sync delay during canvassing means a follow-up happens tomorrow. A sync delay on election day means a voter doesn't get contacted before polls close.

This spec builds on: workflows.md (canvassing, phone banking, shift lifecycle), integrations.md (mapping, SMS, telephony), users.md (roles, permissions, geographic scoping), and system.md (real-time analytics, offline sync, event sourcing).

## GOTV Philosophy

1. **Every contact is a turnout contact.** On election day, the only question is "have you voted yet?" Everything else — persuasion, registration, issue education — is over.
2. **Real-time or useless.** Stale data on election day is worse than no data. The system must prioritize sync speed and freshness.
3. **Offline-capable but online-optimized.** Election day operations benefit enormously from connectivity (live turnout tracking, dynamic reassignment). Offline capability is the safety net, not the default mode.
4. **Scalable to chaos.** Election day generates peak load — every volunteer is active, every voter is being tracked, every operation is running simultaneously. The system must handle this gracefully.

## Pre-Election Day Preparation

### GOTV Universe Definition

Before election day, the campaign defines its GOTV universe — the list of voters to target for turnout.

- **Universe criteria:** based on canvassing data, support scores, voter history, demographics, geographic targeting
- **Typical GOTV universe:** voters identified as supporters (through canvassing or other voter ID) who haven't yet voted (where early voting data is available)
- **Universe segments:** campaigns typically prioritize contacts — strong supporters first, then lean supporters, then uncontacted but likely supporters

**DECIDED: Automated universe builder.** The platform generates the GOTV universe automatically based on configurable criteria (support score thresholds, voting history filters, geographic filters). Campaign staff review, adjust, add/remove segments, and finalize. Reduces manual work and ensures consistency while preserving staff control over the final universe.

### Early Voting & Absentee Tracking

Many jurisdictions allow voting before election day. The platform must track who has already voted to avoid wasting GOTV resources on people who don't need a reminder.

**DECIDED: Both — API feed where available, manual upload as universal fallback.** Real-time or daily feeds from jurisdictions that provide them (some US states), with automatic removal of early/absentee voters from the GOTV universe. Manual upload of early voting lists as the universal fallback. Consistent with the voter file import strategy (integrations.md) and the API-ready but manual-first pattern.

### Volunteer Staging

Election day requires large numbers of volunteers deployed simultaneously. The platform must support staging logistics.

- **Staging locations** — physical locations where volunteers gather before deploying to their assignments (campaign offices, community centers, churches, etc.)
- **Staging location management:** create locations with address, capacity, contact person, hours of operation
- **Volunteer assignment to staging locations** — each volunteer knows where to report
- **Check-in at staging location** — Team Lead checks in volunteers, verifies they have the app and their assignments are loaded
- **Supply tracking** — optional tracking of supplies distributed at staging (literature, signs, water, etc.)

### GOTV Turf Cutting

Election day turfs are different from canvassing turfs:

- **Smaller and tighter** — election day turfs are designed to be completed in 1-2 hours, not a full shift
- **Density-optimized** — prioritized by supporter density, not geographic coverage
- **Dynamic** — turfs may be re-cut during the day based on turnout data (see Real-Time Operations below)
- **Multiple passes** — the same turf may be assigned to different volunteers for morning, afternoon, and evening passes

The existing turf management tools (integrations.md — drawing, auto-generation, assignment, walk list optimization, coverage visualization) apply here with election-day-specific parameters.

### Poll Watcher Preparation

Poll watchers (election observers) monitor voting locations for irregularities. This is a legally defined role in most jurisdictions.

- **Poll watcher registration** — many jurisdictions require pre-registration of poll watchers with electoral authorities. Platform tracks which watchers are registered for which locations.
- **Poll watcher training** — jurisdiction-specific training on what watchers can and cannot do, what to look for, how to report issues. Delivered through the training module (workflows.md).
- **Polling location assignment** — assign watchers to specific polling locations, with backup assignments in case of no-shows.
- **Credential management** — track poll watcher credentials/certificates issued by electoral authorities.

### Election Day Communication Plan

Pre-configure the election day communication sequence:

- **Morning reminder** — "Today is election day. Polls are open [hours]. Your polling location is [location]." Sent to the full GOTV universe via configured channels (SMS, WhatsApp, email).
- **Midday follow-up** — sent to voters who haven't been confirmed as voted yet. "Have you voted yet? Polls close at [time]."
- **Afternoon push** — more urgent messaging to remaining unvoted supporters. "Polls close in [X] hours."
- **Final push** — last-chance messaging. "Polls close in 1 hour. If you need a ride, [contact info]."

**DECIDED: Configurable per wave.** Campaign chooses fully automated or manual-trigger per communication wave. Morning reminder might be fully automated, while the final push might require manual trigger after reviewing real-time turnout data. Each wave in the sequence is independently configured as auto-send or manual-trigger.

## Election Day Operations

### GOTV Canvassing (Door Knocking)

Election day door knocking uses the same canvassing infrastructure (workflows.md) with key differences:

- **Script is simpler** — "Have you voted today? Do you need a ride to the polls?" No persuasion, no issue discussion.
- **Outcomes are binary** — voted, hasn't voted yet (needs follow-up), not home, can't/won't vote
- **Speed matters** — shorter interactions, faster movement between doors
- **Dynamic walk lists** — as turnout data comes in, voters confirmed as having voted are removed from active walk lists

#### GOTV Walk List Refresh

**DECIDED: Hybrid — push when connected, pull as fallback.** Server pushes walk list updates to devices in real-time when connected. Volunteers can pull-to-refresh as a fallback for intermittent connectivity. Stale entries are marked visually with a freshness indicator showing time since last sync. Consistent with the platform's offline-capable-but-online-optimized philosophy.

### Chase Calls (Phone Banking)

Election day phone banking targets voters who haven't voted yet, using the same phone banking infrastructure (workflows.md, integrations.md) with election-day modifications:

- **Script:** "Hi, this is [name] with [campaign]. Have you voted today? Polls are open until [time] at [location]. Can we help with anything — a ride, directions?"
- **Call list:** drawn from GOTV universe, filtered to remove voters already confirmed as voted
- **Call list refresh:** same dynamic updating as walk lists — voters confirmed as voted are removed
- **Outcome tracking:** voted, will vote later (schedule callback), needs ride (trigger ride request), not voting, no answer
- **Ride trigger:** if a voter needs a ride, the phone banker can create a ride request directly from the call interface (see Rides to Polls below)

### Rides to Polls

Transportation to polling locations is a critical GOTV service, especially in areas with limited public transit, for elderly voters, and for voters with disabilities.

#### Ride Request Flow

1. **Request created** — by phone banker (from call), door knocker (from canvass), voter self-service (via campaign text line or web form), or staff (manually)
2. **Request contains:** voter name, pickup address, phone number, accessibility needs (wheelchair, walker, etc.), preferred time, polling location (auto-assigned based on voter's registered address)
3. **Request enters queue** — visible to Rides Coordinator (a staff role or Team Lead sub-assignment)
4. **Driver assigned** — from pool of volunteer drivers. Assignment considers: proximity, vehicle capacity, accessibility, time window.
5. **Driver notified** — receives pickup details via app or SMS
6. **Pickup confirmed** — driver confirms when voter is picked up
7. **Drop-off confirmed** — driver confirms when voter is dropped at polling location
8. **Voter marked** — voter's ride status updated in GOTV tracker

#### Driver Management

- **Driver registration** — volunteers sign up as drivers with: vehicle type, capacity, accessibility features, availability window, geographic area
- **Driver queue** — available drivers visible to Rides Coordinator, sorted by proximity to pending requests
- **Round-trip tracking** — system tracks driver availability (available, en route to pickup, transporting, returning)
- **Multi-passenger runs** — drivers can be assigned multiple pickups in sequence if addresses are clustered

**DECIDED: Both available — campaign chooses mode.** Dispatcher mode for campaigns that want full manual control (Rides Coordinator matches requests to drivers on a map). Auto-assignment with override for campaigns that want the platform to match based on proximity, vehicle compatibility, and time window, with Coordinator override. Campaign selects mode based on volunteer capacity and operational complexity.

### Poll Watching

Poll watchers monitor polling locations and report issues in real-time.

#### Watcher Check-In

- Watcher arrives at assigned polling location, checks in via app
- Platform confirms: correct location, watcher is registered for this location, credentials valid
- Watcher status: checked in, active, issue reported, shift ended

#### Issue Reporting

Watchers report issues through a structured form:

- **Issue categories:** long wait times, voter intimidation, machine malfunction, accessibility problems, electioneering within restricted zone, missing/incorrect voter rolls, poll worker conduct, other
- **Severity:** informational, concerning, urgent, emergency
- **Details:** free-text description, optional photo/video
- **Location:** automatically tagged to the watcher's assigned polling location
- **Timestamp:** automatic

#### Issue Escalation

**DECIDED: Configurable escalation rules.** Campaign defines escalation routing per issue severity and category. Small campaigns route everything to one person. Large campaigns use tiered escalation (routine issues to regional coordinators, urgent/emergency to war room and legal). Escalation rules are configured during election day preparation.

#### Election Protection Integration

For campaigns that participate in election protection efforts (nonpartisan voter protection hotlines, legal observer networks):

- **Hotline number display** — configurable election protection hotline number displayed prominently in the poll watcher interface and in GOTV messaging to voters
- **Issue forwarding** — option to forward poll watcher issue reports to external election protection organizations (with appropriate data sharing consent)
- **Legal team alerts** — urgent issues can trigger alerts to the campaign's legal team via the platform's notification system

### Real-Time Voter Turnout Tracking

The central nervous system of election day operations: a live view of which targeted voters have and haven't voted.

#### Data Sources for Turnout Tracking

Turnout data can come from multiple sources:

1. **Official early/absentee voting data** — uploaded or synced pre-election day
2. **Door knock confirmations** — canvassers report "voter says they already voted"
3. **Phone call confirmations** — phone bankers confirm voter has voted
4. **Poll watcher observations** — watchers at polling locations can confirm specific voters (where legal and practical)
5. **Official election day turnout data** — some jurisdictions release periodic turnout updates during the day
6. **Voter self-report** — voters responding to campaign texts/messages confirming they voted

**DECIDED: Confidence-weighted confirmations.** Different turnout data sources receive different confidence levels:
- **Confirmed** — official election data (early voting files, election day turnout feeds). Voter removed from GOTV contact lists.
- **Likely voted** — canvasser report, phone banker report, poll watcher observation, voter self-report. Voter deprioritized in contact lists (moved to bottom) but not fully removed.
Source is always tracked in the audit trail for post-election model validation.

#### Turnout Dashboard

The election day dashboard is the war room's primary interface:

- **Overall turnout** — percentage of GOTV universe that has voted, with real-time updates
- **Turnout by geography** — map view showing turnout rates by precinct/turf, color-coded (red = low turnout, green = high)
- **Turnout by segment** — breakdown by supporter strength, demographics, geography
- **Outstanding contacts** — count of supporters who haven't voted and haven't been contacted today
- **Operation status** — active door knockers, active phone bankers, pending ride requests, poll watcher coverage
- **Time remaining** — countdown to poll closing, with projected final turnout at current rate
- **Alerts** — poll watcher issues, sync delays, ride request backlog, communication delivery problems

### Dynamic Resource Reallocation

As the day progresses, the campaign needs to shift resources to where they're most needed.

- **Identify low-turnout areas** — dashboard highlights precincts/turfs where targeted supporters are below expected turnout
- **Reassign canvassers** — shift door knockers from high-turnout areas (where the work is done) to low-turnout areas
- **Redirect phone banking** — prioritize call lists for low-turnout precincts
- **Surge ride coordination** — if a geographic area has many ride requests, reassign drivers

**DECIDED: Automatic suggestions + human approval in war room.** The platform analyzes real-time turnout data and generates reallocation suggestions (e.g., "Precinct 7 is at 35% turnout with 3 hours left — consider shifting 2 canvassers from Precinct 12 which is at 78%"). Suggestions surface in the war room dashboard. War room staff approve, reject, or modify each suggestion. Data-driven decision support, human-controlled execution.

## Alliance GOTV Coordination

Alliances running joint GOTV operations (decided in workflows.md) need additional coordination:

- **Shared GOTV universe** — alliance-level universe combining member orgs' supporter data, deduped, with "don't re-knock" enforcement across orgs
- **Coordinated turf assignment** — no overlap between member orgs' canvassing turfs
- **Shared turnout dashboard** — alliance-level view of turnout across all member orgs' territories
- **Cross-org ride coordination** — ride requests from any member org's contacts can be fulfilled by any member org's drivers
- **Unified communications** — option for alliance-level election day messaging alongside org-level messages (with consent per compliance.md)

## Post-Election Day

### Immediate (Election Night)

- **Results tracking** — as official results come in, platform can display them alongside the campaign's internal data (turnout, support scores) for analysis
- **Results data entry** — for jurisdictions where results are posted physically at polling locations, poll watchers can enter results into the platform for faster campaign-internal tallying

**DECIDED: Full results dashboard with emphasis on poll watcher data entry.** Platform provides:
- **Poll watcher results entry** — structured form for the campaign's own poll watchers/staff to enter results from their assigned polling locations as they're posted. This is the primary data input — the campaign's own eyes on the ground.
- **Results aggregation dashboard** — real-time display of entered results alongside campaign internal data (turnout rates, support scores) for election night war room analysis.
- **Official results integration** — where official sources provide machine-readable results (election commission APIs, media feeds), the platform can ingest them. But poll watcher data entry provides the fastest, most trusted early picture.

### Post-Election Analysis (Days After)

- **Turnout analysis** — compare actual turnout against targets, by precinct, by segment
- **Operation effectiveness** — canvasser contact rates, phone bank conversion, ride completion rates
- **Model validation** — compare support scores against actual results to improve future voter ID
- **Volunteer performance** — shifts completed, contacts made, issues reported (for volunteer recognition, not punishment)
- **Resource allocation review** — where were resources over/under-deployed relative to need

### Data Cleanup

- **Voter file updates** — mark voters who moved, deceased, or otherwise need status updates based on election day data
- **Volunteer debrief data** — collect volunteer feedback on what worked and what didn't
- **Archive election day data** — election day operations data archived per audit retention policy (10 years, per compliance.md)

## Jurisdiction-Specific Considerations

### Puerto Rico (Alpha)

- US election law applies. GOTV operations are well-established in US political culture.
- CEE manages elections. Polling locations are public information.
- Early voting and absentee voting are available.
- Bilingual GOTV messaging (Spanish/English).

### Brazil (Pilot 1)

- Voting is mandatory in Brazil. GOTV focus shifts from "convince to vote" to "convince to vote for us" — turnout is already high.
- Electronic voting machines — results are fast.
- TSE restrictions on election day campaigning — platform must enforce campaign period rules.
- Section 16 of Electoral Code restricts certain GOTV activities on election day itself.

### Thailand (Pilot 2)

- Thai election law restricts campaign activities in the 24-48 hours before polling day ("quiet period"). Platform must enforce this.
- Alcohol sales banned during election period — not a platform concern but relevant for event planning.
- Military intervention history — GOTV operations must consider security tier (aggressive).

### India (Pilot 3)

- Massive scale — hundreds of millions of voters across multiple phases (Indian elections happen over weeks, not one day).
- Multi-phase elections mean GOTV happens repeatedly for different constituencies on different days.
- Booth-level management is critical — Indian campaigns organize at the polling booth level.
- ECI's Model Code of Conduct restricts election day activities.

### Lebanon (Pilot 4)

- Confessional seat system means GOTV targets specific communities.
- Transportation to polls is a major logistical challenge given infrastructure instability.
- Multiple security concerns — GOTV operations in different areas may face different threat levels.
- Cash-based economy means ride reimbursements may need cash tracking (per fundraising.md cash chain-of-custody).

## Technical Requirements

### Sync Priority on Election Day

The event sourcing sync protocol (system.md) must be tuned for election day:

- **Voter status updates have highest sync priority** — "voter has voted" events must propagate to all clients as fast as possible
- **Sync frequency increases** — during election day operations, sync interval drops from normal cadence to near-real-time (every 30 seconds when connected)
- **Conflict resolution favors recency** — if two sources report conflicting voter status, the most recent report wins
- **Bandwidth optimization** — sync payloads during GOTV should be minimal (status changes only, not full records)

### Load Handling

Election day represents peak platform load:

- Every active volunteer is using the app simultaneously
- Turnout dashboard is being refreshed continuously by war room staff
- Communications are being sent to the full GOTV universe in waves
- Ride requests are flowing in continuously
- Poll watcher reports are streaming in

The system must:
- Handle 10x normal concurrent user load
- Dashboard updates within 30 seconds of underlying data change
- Communication sends complete within configured time windows (not delayed by queue backlog)
- Sync lag under 2 minutes even at peak load

### Offline Resilience

If connectivity is lost during election day:

- Canvassers continue working from cached walk lists (same as regular canvassing)
- Phone bankers cannot operate (requires connectivity for calls)
- Ride requests queue locally and send when connected
- Poll watcher issue reports queue locally and send when connected
- **Critical difference from regular canvassing:** on election day, stale walk lists waste time on voters who've already voted. Volunteers should be strongly prompted to reconnect and refresh.

## Open Questions

1. **Ballot tracking** — some US jurisdictions support ballot tracking (voters can check if their mail ballot was received/counted). Should the platform integrate with ballot tracking systems?

2. **Exit polling** — should the platform support informal exit polling (asking voters leaving polling locations how they voted)? Legally complex in many jurisdictions.

3. **Multi-phase election support** — India's elections happen across weeks with different states voting on different days. The GOTV system needs to handle multiple election days for a single campaign. How does this affect universe management, volunteer scheduling, and turnout tracking?

4. **Gamification exception** — gamification is generally out of scope (per workflows.md), but election day volunteer motivation is uniquely important. Should the dashboard show volunteer leaderboards or completion progress for election day only?

<!-- REVISIT: Election day load testing methodology should be defined during implementation planning. The 10x load assumption needs validation against actual volunteer numbers for target campaign sizes. -->
<!-- REVISIT: Quiet period enforcement (Thailand, India MCC) needs integration with the campaign period enforcement system (compliance.md). Election day and quiet period are a subset of campaign period restrictions. -->
