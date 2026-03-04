# Field Operations (Admin) Wireframes

## Purpose

This document wireframes the admin-side screens for the three field operation types: canvassing, phone banking, and voter registration. These are the planning, configuration, and review screens used by the Field Director and Org Admin — the setup work that precedes the volunteer-facing field mode (wireframed in `field-mode/field-mode.md`).

The core challenge: field operations have the most complex setup-to-execution pipeline in the platform. A canvassing campaign flows from campaign creation → script building → turf cutting → walk list generation → volunteer assignment → field execution → results review. The admin UX must make this pipeline feel like a sequence of clear steps, not an overwhelming control panel.

## Scope

| ID | Screen | Personas | Offline | Mobile | Section |
|----|--------|----------|---------|--------|---------|
| CANV-001 | Canvassing Campaign List | OA, FiD | No | Yes | Canvassing |
| CANV-002 | Canvassing Campaign Create/Edit | OA, FiD | No | Desktop | Canvassing |
| CANV-003 | Script Builder | OA, FiD | No | Desktop | Canvassing |
| CANV-004 | Turf Management Map | OA, FiD | No | Desktop | Canvassing |
| CANV-005 | Turf Auto-Generation | OA, FiD | No | Desktop | Canvassing |
| CANV-006 | Walk List Management | OA, FiD | No | Desktop | Canvassing |
| CANV-013 | Canvassing Results Review | OA, FiD | No | Yes | Canvassing |
| CANV-014 | Canvassing Progress Map | OA, FiD | No | Desktop | Canvassing |
| PHONE-001 | Phone Bank Campaign List | OA, FiD | No | Yes | Phone Banking |
| PHONE-002 | Phone Bank Campaign Create/Edit | OA, FiD | No | Desktop | Phone Banking |
| PHONE-003 | Phone Bank Script Builder | OA, FiD | No | Desktop | Phone Banking |
| PHONE-007 | Phone Bank Progress Dashboard | OA, FiD | No | Yes | Phone Banking |
| VREG-001 | Voter Reg Drive List | OA, FiD | No | Yes | Voter Registration |
| VREG-002 | Voter Reg Drive Create/Edit | OA, FiD | No | Desktop | Voter Registration |
| VREG-003 | Voter Reg Jurisdiction Template Selector | OA, FiD | No | Desktop | Voter Registration |
| VREG-006 | Voter Reg Results Review | OA, FiD | No | Yes | Voter Registration |

Field mode screens (CANV-007 through CANV-012, PHONE-004 through PHONE-006, VREG-004, VREG-005) are wireframed in `field-mode/field-mode.md`.

## Field Director Navigation Context

The Field Director's sidebar organizes field operations by type:

```
OVERVIEW
  Dashboard           → DASH-002 (Field Operations)

CANVASSING
  Campaigns           → CANV-001
  Scripts             → CANV-003
  Turfs               → CANV-004
  Walk Lists          → CANV-006
  Results             → CANV-013
  Progress Map        → CANV-014

PHONE BANKING
  Campaigns           → PHONE-001
  Scripts             → PHONE-003
  Progress            → PHONE-007

VOTER REGISTRATION
  Drives              → VREG-001
  Results             → VREG-006

PEOPLE
  Contacts            → CRM-001
  Segments            → CRM-005

MESSAGING
  Messages            → messaging screens
```

---

## Shared Patterns

These three feature areas share common patterns:

- **Campaign list → Campaign detail → Create/Edit** — standard list/detail/form pattern
- **Script builder** — canvassing and phone banking both need configurable scripts with branching questions
- **Results review** — all three have post-operation review screens with similar metrics
- **Geographic components** — canvassing and voter registration involve map-based turf management

---

## Canvassing

### CANV-001: Canvassing Campaign List

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Canvassing Campaigns                                                   8    │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  [🔍 Search campaigns...]              [Filter ▾]  [+ New Campaign]         │
│                                                                              │
│  Active filters: Status: Active  ·  [Clear all]                             │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Campaign             Type          Progress     Shifts    Status   │   │
│  │  ─────────────────────────────────────────────────────────────────  │   │
│  │  Northside Canvas     Voter ID      71%          12/15     Active   │   │
│  │  4 turfs · 200 doors remaining · 8 volunteers today                 │   │
│  │                                                                      │   │
│  │  Westside Follow-up   Persuasion    42%           8/20     Active   │   │
│  │  2 turfs · 116 doors remaining · 3 volunteers today                 │   │
│  │                                                                      │   │
│  │  Eastside Voter ID    Voter ID      22%           4/12     Active   │   │
│  │  3 turfs · 390 doors remaining · 0 volunteers today                 │   │
│  │                                                                      │   │
│  │  Phone Bank Wave 3    —             —             0/8      Draft    │   │
│  │  ⚠ Missing script · 500 contacts in list                           │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  [Active]  [Draft]  [Completed]  [All]                                      │
│                                                                              │
│  ◀  Page 1 of 1  ▶                               Showing 1–8 of 8          │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Mobile

```
┌──────────────────────────────┐
│  ≡  Canvassing       🔍  +  │
├──────────────────────────────┤
│  Active · 3 campaigns        │
│                              │
│  ┌──────────────────────────┐│
│  │  Northside Canvas        ││
│  │  Voter ID · 71%         ││
│  │  ▓▓▓▓▓▓▓░░░             ││
│  │  12/15 shifts · 8 today ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  Westside Follow-up      ││
│  │  Persuasion · 42%       ││
│  │  ▓▓▓▓░░░░░░             ││
│  │  8/20 shifts · 3 today  ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │  Eastside Voter ID       ││
│  │  Voter ID · 22%         ││
│  │  ▓▓░░░░░░░░             ││
│  │  4/12 shifts · 0 today  ││
│  └──────────────────────────┘│
│  ...                         │
│                              │
├──────────────────────────────┤
│ 📊     🚪     🗺     💬    ⋯│
│ Dash  Canvas  Turfs  Msgs More│
└──────────────────────────────┘
```

#### Interaction Specs

| Element | Action | Result |
|---------|--------|--------|
| Campaign row | Click | Navigate to campaign detail (progress, turfs, shifts, results) |
| + New Campaign | Click | Navigate to CANV-002 |
| Draft with warning | Click warning | Navigate to the incomplete step (e.g., script builder) |
| Status tabs | Click | Filter by status |

---

### CANV-002: Canvassing Campaign Create / Edit

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Campaigns    New Canvassing Campaign                 [Cancel]  [Save]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Campaign Details                                                            │
│  ────────────────                                                            │
│                                                                              │
│  Campaign name *     [                                          ]           │
│                                                                              │
│  Campaign type *     [Voter Identification              ▾]                  │
│                      Options: Voter ID, Persuasion, GOTV, Voter Reg,        │
│                      Issue Advocacy, Follow-up                               │
│                                                                              │
│  Description         [                                          ]           │
│                      [                                          ]           │
│                                                                              │
│  Schedule                                                                    │
│  ────────────────                                                            │
│                                                                              │
│  Start date *        [March 1, 2024         ]                               │
│  End date            [April 30, 2024        ]                               │
│  Shift times         [+ Add shift time]                                     │
│                      Sat 9:00 AM – 12:00 PM  [✕]                           │
│                      Sat 1:00 PM – 4:00 PM   [✕]                           │
│                      Sun 10:00 AM – 1:00 PM  [✕]                           │
│                                                                              │
│  Target                                                                      │
│  ────────────────                                                            │
│                                                                              │
│  Target segment *    [Select segment...                 ▾]                  │
│                      Or: [All voters in selected turfs]                      │
│  Goal                [5,000     ] doors                                     │
│                                                                              │
│  Script                                                          [▾]       │
│  ────────────────                                                            │
│                                                                              │
│  ◉ Create new script      [Open Script Builder →]                          │
│  ○ Use existing script    [Select script...              ▾]                 │
│  ○ No script (notes only)                                                   │
│                                                                              │
│  Turfs                                                           [▾]       │
│  ────────────────                                                            │
│                                                                              │
│  ◉ Select existing turfs  [Select turfs on map →]                          │
│  ○ Auto-generate turfs    [Configure auto-generation →]                    │
│  ○ Assign later                                                             │
│                                                                              │
│  Advanced                                                        [▸]       │
│  ────────────────                                                            │
│  Data download scope, offline data limits, shift auto-close rules           │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  [Cancel]                                    [Save as Draft]  [Activate →]  │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Design Notes
- **Two save actions:** "Save as Draft" preserves incomplete campaigns. "Activate" validates all required fields (script, turfs, at least one shift) and makes the campaign available for volunteer signup.
- **Script and Turfs are inline launch points** — the user can jump to the Script Builder or Turf Map from this form and return
- **Shift times are repeating slots** — the Field Director defines the available time windows, volunteers sign up for specific dates within those windows
- **Desktop only** (per screen inventory) — campaign creation is planning work

---

### CANV-003: Script Builder

A structured editor for creating canvassing scripts with branching questions and response options.

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Campaign    Script Builder                           [Cancel]  [Save]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Script name *     [Northside Voter ID Script                    ]          │
│                                                                              │
│  ┌──────────────────────────────┬────────────────────────────────────────┐  │
│  │  Script Structure            │  Preview                               │  │
│  │  ────────────────            │  ─────────                             │  │
│  │                              │                                        │  │
│  │  1. ☰ Introduction           │  ┌────────────────────────────────┐   │  │
│  │     "Hi, my name is..."      │  │  Hi, my name is {volunteer}    │   │  │
│  │                              │  │  and I'm with Partido Verde.   │   │  │
│  │  2. ☰ Support Question       │  │  We're talking to voters in    │   │  │
│  │     "How do you feel..."    │  │  the neighborhood about the     │   │  │
│  │     ◻ Strong Support        │  │  upcoming election.             │   │  │
│  │     ◻ Lean Support          │  │                                  │   │  │
│  │     ◻ Undecided             │  │  How do you feel about the      │   │  │
│  │     ◻ Lean Oppose           │  │  candidates running for         │   │  │
│  │     ◻ Strong Oppose         │  │  mayor?                         │   │  │
│  │     ◻ Refused               │  │                                  │   │  │
│  │                              │  │  ○ Strong Support               │   │  │
│  │  3. ☰ Key Issues             │  │  ○ Lean Support                 │   │  │
│  │     "What issues matter..."  │  │  ○ Undecided                    │   │  │
│  │     ☑ Multiple select       │  │  ○ Lean Oppose                  │   │  │
│  │     ◻ Education             │  │  ○ Strong Oppose                │   │  │
│  │     ◻ Environment           │  │  ○ Refused                      │   │  │
│  │     ◻ Economy               │  │                                  │   │  │
│  │     ◻ Healthcare            │  │                                  │   │  │
│  │     ◻ Public Safety         │  │                                  │   │  │
│  │                              │  │                                  │   │  │
│  │  4. ☰ Volunteer Ask          │  │                                  │   │  │
│  │     "Would you like..."     │  │                                  │   │  │
│  │     ◻ Yes                   │  │                                  │   │  │
│  │     ◻ Maybe later           │  │                                  │   │  │
│  │     ◻ No                    │  │                                  │   │  │
│  │                              │  │                                  │   │  │
│  │  5. ☰ Closing                │  │                                  │   │  │
│  │     "Thank you for..."      │  │                                  │   │  │
│  │                              │  └────────────────────────────────┘   │  │
│  │  [+ Add Step]               │                                        │  │
│  │                              │                                        │  │
│  └──────────────────────────────┴────────────────────────────────────────┘  │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  [Cancel]                                                          [Save]   │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Step Editor (expanded)

Clicking a step in the structure panel expands its editor:

```
┌──────────────────────────────────────────────┐
│  Step 2: Support Question                 ✕  │
│  ────────────────────                        │
│                                              │
│  Step type:  [Question — Single Select  ▾]   │
│                                              │
│  Prompt text:                                │
│  [How do you feel about the candidates     ] │
│  [running for mayor?                       ] │
│                                              │
│  Talking points (shown to volunteer):        │
│  [If undecided: mention park restoration   ] │
│  [plan and community investment priorities ] │
│                                              │
│  Response options:                           │
│  [Strong Support    ]  Maps to: Score 5  ✕  │
│  [Lean Support      ]  Maps to: Score 4  ✕  │
│  [Undecided         ]  Maps to: Score 3  ✕  │
│  [Lean Oppose       ]  Maps to: Score 2  ✕  │
│  [Strong Oppose     ]  Maps to: Score 1  ✕  │
│  [Refused           ]  Maps to: —        ✕  │
│  [+ Add option]                              │
│                                              │
│  ☐ Required (volunteer must select before    │
│    proceeding)                                │
│                                              │
│  Branching:                                  │
│  If "Strong Support" → Skip to: Step 4       │
│  If "Strong Oppose"  → Skip to: Step 5       │
│  Otherwise           → Continue to next      │
│                                              │
│  [Done]                                      │
└──────────────────────────────────────────────┘
```

#### Step Types

| Type | Description | Use Case |
|------|-------------|----------|
| **Text** | Display-only talking points or instructions | Introduction, closing, transition prompts |
| **Question — Single Select** | One answer from a list | Support level, yes/no, candidate preference |
| **Question — Multiple Select** | Multiple answers from a list | Key issues, interests |
| **Question — Free Text** | Open-ended text input | Notes, specific concerns, follow-up details |
| **Question — Rating** | 1–5 scale | Issue importance, satisfaction |
| **Action** | Prompt for a physical action | "Hand the voter a flyer", "Offer yard sign" |

#### Design Notes
- **Split-pane layout** — structure/outline on left, live preview on right. The Field Director can see what the volunteer will see as they build.
- **Drag-to-reorder** — steps can be rearranged by dragging the ☰ handle
- **Branching** — simple skip logic: if a specific response is selected, jump to a different step. Covers 90% of branching needs without a full flowchart editor.
- **Score mapping** — response options map to support scores (1–5). This populates the contact record's support score automatically.
- **Talking points** — coaching text visible to the volunteer but not part of the recorded response. Helps volunteers handle common scenarios.
- **Desktop only** (per screen inventory) — script building needs the split-pane layout
- **Reusable scripts** — saved scripts can be used across multiple campaigns. Changes to a script after campaigns are active create a new version (active campaigns keep their version).

---

### CANV-004: Turf Management Map

Interactive map for drawing, editing, and assigning canvassing turfs.

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Turf Management                                   Campaign: Northside       │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  ┌───────────────────────────────────────────────┬──────────────────────┐   │
│  │                                               │  Turfs (4)           │   │
│  │                                               │  ──────────          │   │
│  │          [Map Interface]                      │                      │   │
│  │                                               │  ● Turf A            │   │
│  │    ┌─────────┐                                │    50 doors          │   │
│  │    │ Turf A  │  ┌─────────┐                   │    Assigned: Team 1  │   │
│  │    │  (blue) │  │ Turf B  │                   │    71% complete      │   │
│  │    │         │  │ (green) │                   │                      │   │
│  │    └─────────┘  │         │  ┌─────────┐      │  ● Turf B            │   │
│  │                 └─────────┘  │ Turf C  │      │    50 doors          │   │
│  │                              │(orange) │      │    Assigned: Team 2  │   │
│  │    ┌─────────────┐          └─────────┘      │    68% complete      │   │
│  │    │   Turf D    │                            │                      │   │
│  │    │   (purple)  │                            │  ● Turf C            │   │
│  │    │             │                            │    50 doors          │   │
│  │    └─────────────┘                            │    Assigned: —       │   │
│  │                                               │    0% complete       │   │
│  │    [Draw] [Select] [Zoom+] [Zoom-] [Layers]  │                      │   │
│  │                                               │  ● Turf D            │   │
│  │    🟢 >70%  🟡 30-70%  🔴 <30%  ⚪ Unstarted │    50 doors          │   │
│  │                                               │    Assigned: —       │   │
│  └───────────────────────────────────────────────┤    0% complete       │   │
│                                                   │                      │   │
│                                                   │  [+ Draw New Turf]   │   │
│                                                   │  [Auto-Generate →]   │   │
│                                                   │                      │   │
│                                                   │  Total: 200 doors   │   │
│                                                   │  Covered: 142 (71%) │   │
│                                                   └──────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Map Tools

| Tool | Description |
|------|-------------|
| **Draw** | Click to place polygon vertices on the map. Close the polygon to create a turf boundary. |
| **Select** | Click a turf on the map to select it. Shows turf details in the side panel. |
| **Zoom** | Standard map zoom controls |
| **Layers** | Toggle: voter density heatmap, precinct boundaries, completed doors, active volunteers |

#### Turf Side Panel (when selected)

```
┌──────────────────────┐
│  Turf A           ✕  │
│  ────────            │
│                      │
│  Doors: 50           │
│  Completed: 36 (72%) │
│  Remaining: 14       │
│                      │
│  Est. walk time: 45m │
│  Est. distance: 1.2km│
│                      │
│  Assignment           │
│  ─────────            │
│  Team: [Team 1    ▾] │
│  Shift: [Sat AM   ▾] │
│                      │
│  Walk List            │
│  ─────────            │
│  [View walk list →]  │
│  [Regenerate route]  │
│                      │
│  [Edit boundary]     │
│  [Delete turf]       │
└──────────────────────┘
```

#### Design Notes
- **Map + list split** — the map shows boundaries visually, the panel provides data and actions. Clicking a turf on the map or in the list selects it in both.
- **Color coding by completion** — immediate visual feedback on campaign progress
- **Voter density heatmap layer** — helps the Field Director draw turfs where voters actually are, not just geographic shapes
- **Walk time estimates** — based on the routing engine (OSRM). Helps size turfs for a realistic shift.
- **Desktop only** (per screen inventory) — map-heavy workflow needs screen real estate

---

### CANV-005: Turf Auto-Generation

Automated turf creation based on constraints. Reduces manual turf drawing for large campaigns.

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Turf Management    Auto-Generate Turfs                                    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Area                                                                        │
│  ────                                                                        │
│  Generate turfs within: [Northside — Campaign boundary      ▾]              │
│  Contains: 892 addresses with 1,247 voters                                   │
│                                                                              │
│  Constraints                                                                 │
│  ───────────                                                                 │
│                                                                              │
│  Target doors per turf:     [40] – [60]                                     │
│  Max walk time per turf:    [60] minutes                                    │
│  Respect precinct boundaries: ◉ Yes  ○ No                                  │
│  Optimize for:              ◉ Walk time  ○ Voter density  ○ Balanced       │
│                                                                              │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  Preview                                                                     │
│  ────────                                                                    │
│                                                                              │
│  ┌───────────────────────────────────────────────┐  Generated: 16 turfs    │
│  │                                               │  Avg: 48 doors/turf     │
│  │          [Map showing auto-generated          │  Avg walk time: 42 min  │
│  │           turf boundaries with                │  Total coverage: 892    │
│  │           color-coded polygons]                │  addresses (100%)       │
│  │                                               │                         │
│  │                                               │  Uncovered: 0           │
│  │                                               │                         │
│  └───────────────────────────────────────────────┘                          │
│                                                                              │
│  ⚠ 2 turfs exceed 60-minute walk estimate.                                  │
│  [Adjust constraints and regenerate]                                         │
│                                                                              │
│  [Cancel]                    [Regenerate]              [Accept & Save →]    │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Design Notes
- **Constraint-based** — the Field Director sets guardrails, the system optimizes within them
- **Live preview** — the map updates with generated turfs so the Field Director can evaluate before accepting
- **Warnings for constraint violations** — turfs that exceed limits are flagged
- **Regenerate** re-runs the algorithm (produces different results due to non-deterministic optimization)
- **After accepting**, turfs appear in the Turf Management Map (CANV-004) for manual adjustment
- **Desktop only**

---

### CANV-006: Walk List Management

Manage the generated walk lists (address sequences within turfs) and their assignments.

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Walk Lists                                        Campaign: Northside       │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  [🔍 Search...]              [Filter ▾]  [Sort ▾]  [+ Generate Lists]      │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Walk List       Turf     Doors   Assigned To     Status            │   │
│  │  ─────────────────────────────────────────────────────────────────  │   │
│  │  WL-001          Turf A   50      Carlos R.       Complete (72%)   │   │
│  │  WL-002          Turf A   50      María S.        In Progress      │   │
│  │  WL-003          Turf B   50      Pedro C.        In Progress      │   │
│  │  WL-004          Turf B   50      Elena T.        Complete (100%)  │   │
│  │  WL-005          Turf C   50      —               Unassigned       │   │
│  │  WL-006          Turf C   50      —               Unassigned       │   │
│  │  WL-007          Turf D   50      —               Unassigned       │   │
│  │  WL-008          Turf D   50      —               Unassigned       │   │
│  │  ...                                                                │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Bulk actions: [Assign ▾]  [Reassign ▾]  [Export]                          │
│                                                                              │
│  ◀  Page 1 of 1  ▶                              Showing 1–8 of 8           │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Walk List Detail (side panel)

```
┌──────────────────────────────┐
│  WL-001 · Turf A         ✕  │
│  ────────────                │
│                              │
│  Status: Complete (72%)      │
│  Assigned: Carlos R.         │
│  Shift: Sat Mar 2, 9AM-12PM │
│                              │
│  Addresses: 50               │
│  Contacted: 36               │
│  Not home: 8                 │
│  Refused: 4                  │
│  Remaining: 2                │
│                              │
│  Walk route:                 │
│  ┌──────────────────────┐   │
│  │  [Mini map showing   │   │
│  │   route with dots    │   │
│  │   for each address]  │   │
│  └──────────────────────┘   │
│                              │
│  [View results →]           │
│  [Reassign →]               │
│  [Regenerate route]         │
└──────────────────────────────┘
```

#### Design Notes
- Walk lists are the atomic unit of assignment — one volunteer gets one walk list for one shift
- **Assign dropdown** — select a volunteer from the signed-up volunteer roster for that shift
- **Reassign** — move a walk list from one volunteer to another (useful when someone doesn't show up)
- **Generate Lists** — creates walk lists from turfs that don't have them yet, optimizing walking route within each turf
- **Desktop only** (per screen inventory)

---

### CANV-013: Canvassing Results Review

Post-operation view of canvassing data. The Field Director's debrief tool.

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Canvassing Results                                Campaign: Northside       │
│  ───────────────────────────────────────────── Date range: [All time    ▾]  │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  🚪 Doors     │  │  📊 Contact % │  │  👍 Support   │  │  👥 Volunteers│    │
│  │  742/1,000    │  │  71.4%        │  │  55% positive │  │  18 deployed │    │
│  │  74% complete │  │  ↑ from 68%   │  │  (4 or 5)     │  │  142 hours   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Results by Turf                                                      │   │
│  │  ──────────────                                                       │   │
│  │                                                                       │   │
│  │  Turf     Doors   Contact%   Support    Not Home   Refused   Notes   │   │
│  │  ──────────────────────────────────────────────────────────────────   │   │
│  │  Turf A   50      78%        62%        14%        8%        3       │   │
│  │  Turf B   50      72%        58%        18%        10%       1       │   │
│  │  Turf C   50      68%        48%        22%        12%       5       │   │
│  │  Turf D   50      64%        52%        24%        12%       2       │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Support Score Distribution     │  │  Response: Key Issues            │   │
│  │  ─────────────────────          │  │  ─────────────────              │   │
│  │                                 │  │                                   │   │
│  │  Strong Support  ▓▓▓▓▓▓  24%   │  │  Environment   ▓▓▓▓▓▓▓▓▓  42%  │   │
│  │  Lean Support    ▓▓▓▓▓▓▓ 31%   │  │  Economy       ▓▓▓▓▓▓▓    33%  │   │
│  │  Undecided       ▓▓▓▓    18%   │  │  Healthcare    ▓▓▓▓▓▓     28%  │   │
│  │  Lean Oppose     ▓▓      9%    │  │  Education     ▓▓▓▓       19%  │   │
│  │  Strong Oppose   ▓       5%    │  │  Safety        ▓▓▓        14%  │   │
│  │  Refused         ▓▓▓    13%    │  │                                   │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Performance by Volunteer       │  │  ⚠ Flagged Interactions (5)      │   │
│  │  ───────────────────────        │  │  ──────────────────────          │   │
│  │                                 │  │                                   │   │
│  │  Name         Doors  Rate  Avg  │  │  🟡 "Voter asked about mail-in │   │
│  │  Carlos R.    42     78%   4.2m │  │     ballots — needs follow-up" │   │
│  │  María S.     38     82%   3.8m │  │     — Carlos R., Turf A        │   │
│  │  Pedro C.     31     68%   5.1m │  │     [View →]                    │   │
│  │  Elena T.     28     74%   4.5m │  │                                   │   │
│  │  ...                            │  │  🟡 "Refused aggressively —     │   │
│  │                                 │  │     possible hostile address"   │   │
│  │  [View full report →]           │  │     — María S., Turf B          │   │
│  │                                 │  │     [View →]                    │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Mobile
- Metric cards stacked vertically
- Turf-by-turf results as collapsible cards
- Charts replaced by inline bar summaries
- Flagged interactions as a scrollable list

---

### CANV-014: Canvassing Progress Map

Geographic visualization of canvassing coverage. The "big picture" view.

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Canvassing Progress                               Campaign: Northside       │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                                                                       │   │
│  │                                                                       │   │
│  │              [Full-width map showing turf polygons                    │   │
│  │               color-coded by completion percentage]                    │   │
│  │                                                                       │   │
│  │              Each turf shows:                                         │   │
│  │              - Boundary polygon (colored)                             │   │
│  │              - Completion percentage label                            │   │
│  │              - Dots for each door (green=complete, grey=remaining)    │   │
│  │              - Active volunteer location (if shift in progress)       │   │
│  │                                                                       │   │
│  │              Legend:                                                   │   │
│  │              🟢 >70%  🟡 30-70%  🔴 <30%  ⚪ Not started            │   │
│  │              🔵 Active volunteer                                      │   │
│  │                                                                       │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Summary: 4 turfs · 742/1,000 doors (74%) · 3 volunteers active now        │
│                                                                              │
│  Layers: [☑ Turfs] [☑ Doors] [☐ Heatmap] [☑ Active Vols] [☐ Precinct]   │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Design Notes
- **Full-width map** — the map is the content, not a sidebar widget
- **Active volunteer positions** — when volunteers are in the field, their location is shown (blue dot) with last-sync timestamp
- **Layer toggles** — the Field Director can show/hide data layers to focus on different aspects
- **Click a turf** to see drill-down stats (same data as CANV-013 but scoped to that turf)
- **Desktop only** (per screen inventory)

---

## Phone Banking

### PHONE-001: Phone Bank Campaign List

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Phone Banking                                                          5    │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  [🔍 Search campaigns...]              [Filter ▾]  [+ New Campaign]         │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Campaign             Target       Progress     Sessions   Status   │   │
│  │  ─────────────────────────────────────────────────────────────────  │   │
│  │  Wave 3 — Voter ID    1,500 calls  58%          3 active   Active   │   │
│  │  Script: Standard ID · 870/1,500 complete · 12% contact rate        │   │
│  │                                                                      │   │
│  │  Donor Thank You       342 calls   100%         0          Complete │   │
│  │  Script: Donor Thanks · 342/342 complete · 68% contact rate         │   │
│  │                                                                      │   │
│  │  GOTV Reminder         5,000 calls  0%          0          Scheduled│   │
│  │  Starts: Election Day · Script: GOTV Quick                          │   │
│  │                                                                      │   │
│  │  Event Invite          800 calls    34%         0          Paused   │   │
│  │  Script: Rally Invite · 272/800 complete · 22% contact rate         │   │
│  │                                                                      │   │
│  │  Persuasion Undecided  2,000 calls  0%          0          Draft    │   │
│  │  ⚠ Missing script                                                  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ◀  Page 1 of 1  ▶                               Showing 1–5 of 5          │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Mobile
- Same pattern as CANV-001 mobile: card list with name, progress bar, status

---

### PHONE-002: Phone Bank Campaign Create / Edit

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Phone Banking    New Phone Bank Campaign             [Cancel]  [Save]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Campaign Details                                                            │
│  ────────────────                                                            │
│                                                                              │
│  Campaign name *     [                                          ]           │
│                                                                              │
│  Campaign type *     [Voter Identification              ▾]                  │
│                      Options: Voter ID, Persuasion, GOTV, Fundraising,      │
│                      Event Invite, Thank You, Survey                         │
│                                                                              │
│  Description         [                                          ]           │
│                                                                              │
│  Call List                                                                   │
│  ────────────────                                                            │
│                                                                              │
│  Source:             [Select segment...                  ▾]                  │
│  Contacts in segment: 2,000                                                  │
│                                                                              │
│  Exclude:            ☑ Already contacted in this campaign                   │
│                      ☑ On Do Not Call list                                  │
│                      ☐ Contacted in last [7] days (any campaign)            │
│                                                                              │
│  Final call list:    1,847 contacts                                          │
│                                                                              │
│  Schedule                                                                    │
│  ────────────────                                                            │
│                                                                              │
│  Start date *        [March 1, 2024        ]                                │
│  End date            [March 15, 2024       ]                                │
│  Shift times         [+ Add shift time]                                     │
│                      Tue 6:00 PM – 8:00 PM  [✕]                            │
│                      Thu 6:00 PM – 8:00 PM  [✕]                            │
│                      Sat 10:00 AM – 12:00 PM [✕]                           │
│                                                                              │
│  Calling Mode                                                                │
│  ────────────────                                                            │
│                                                                              │
│  ◉ BYOP (Bring Your Own Phone)                                             │
│    Volunteers use their personal phones. Platform shows contact              │
│    info and script, volunteer dials manually.                                │
│                                                                              │
│  ○ Integrated Dialer                                                        │
│    Click-to-call from within the platform. Requires telephony               │
│    integration (Settings > Integrations).                                    │
│                                                                              │
│  Script                                                                      │
│  ────────────────                                                            │
│                                                                              │
│  ◉ Create new script      [Open Script Builder →]                          │
│  ○ Use existing script    [Select script...              ▾]                 │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  [Cancel]                                    [Save as Draft]  [Activate →]  │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Design Notes
- **Call list from segments** — reuses the segment system (CRM-004/005) for targeting. The "Final call list" count updates live after exclusions are applied.
- **Exclusions** — prevent re-calling and respect Do Not Call. Critical for legal compliance and voter goodwill.
- **BYOP vs Integrated** — BYOP is the default/simpler mode. Integrated dialer requires a configured telephony provider.
- **Desktop only** (per screen inventory)

---

### PHONE-003: Phone Bank Script Builder

Uses the same Script Builder interface as CANV-003, with phone-banking-specific step types:

| Additional Step Type | Description |
|---------------------|-------------|
| **Voicemail Script** | Text to read when leaving a voicemail |
| **Call Outcome** | Pre-built step: Answered, Voicemail, Busy, Wrong Number, Disconnected, Do Not Call |

The Call Outcome step is always the first step (system-generated, not editable) — before the volunteer reads any script, they record whether the call was answered.

---

### PHONE-007: Phone Bank Progress Dashboard

Real-time view of active phone bank sessions and campaign progress.

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Phone Bank: Wave 3 — Voter ID                     3 sessions active  ↻     │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  📞 Calls     │  │  📊 Contact % │  │  ⏱ Avg Call   │  │  👥 Callers  │    │
│  │  870/1,500    │  │  12.3%        │  │  3.2 min      │  │  8 active    │    │
│  │  58% complete │  │  ↑ from 10%   │  │  ↓ from 4.1   │  │  12 total    │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Call Outcomes                                                         │   │
│  │  ─────────────                                                        │   │
│  │                                                                       │   │
│  │  Answered      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  107 (12.3%) │   │
│  │  Voicemail     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  298 (34.3%) │   │
│  │  No Answer     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  252 (29.0%) │   │
│  │  Busy          ▓▓▓▓▓▓▓▓▓▓▓▓                              87 (10.0%) │   │
│  │  Wrong Number  ▓▓▓▓▓▓▓▓▓▓                                 74 (8.5%)  │   │
│  │  Disconnected  ▓▓▓▓▓▓                                      42 (4.8%)  │   │
│  │  Do Not Call   ▓▓                                           10 (1.1%)  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Active Callers                 │  │  Support Score (Answered)        │   │
│  │  ──────────────                 │  │  ─────────────────               │   │
│  │                                 │  │                                   │   │
│  │  ● Ana R.      12 calls  1:45  │  │  Strong Support  ▓▓▓▓    18%    │   │
│  │  ● Carlos M.   10 calls  1:30  │  │  Lean Support    ▓▓▓▓▓▓  28%    │   │
│  │  ● Elena T.     8 calls  1:15  │  │  Undecided       ▓▓▓▓▓▓▓ 32%    │   │
│  │  ● Marco D.    15 calls  1:42  │  │  Lean Oppose     ▓▓      10%    │   │
│  │  ● Rosa F.     11 calls  1:20  │  │  Strong Oppose   ▓        5%    │   │
│  │  ● Pedro C.     9 calls  1:10  │  │  Refused         ▓▓       7%    │   │
│  │  ● Carmen L.    7 calls  0:45  │  │                                   │   │
│  │  ● Luis G.      5 calls  0:30  │  │                                   │   │
│  │                                 │  │                                   │   │
│  │  Avg calls/hour: 7.2           │  │                                   │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Mobile
- Metric cards stacked
- Call outcomes as a compact list
- Active callers as a scrollable list

---

## Voter Registration

### VREG-001: Voter Reg Drive List

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Voter Registration Drives                                              4    │
│  ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  [🔍 Search drives...]                 [Filter ▾]  [+ New Drive]           │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Drive                Location          Progress     Dates     Status│   │
│  │  ─────────────────────────────────────────────────────────────────  │   │
│  │  Spring Registration  Westside plazas    68%         Mar 1–Apr 30  Active│
│  │  Jurisdiction: PR · 342/500 goal · 8 volunteers                     │   │
│  │                                                                      │   │
│  │  Campus Drive         UPR Río Piedras    83%         Feb 15–Mar 15 Active│
│  │  Jurisdiction: PR · 45/54 goal · 4 volunteers                       │   │
│  │                                                                      │   │
│  │  Market Saturdays     Mercado Santurce   34%         Mar–May       Active│
│  │  Jurisdiction: PR · 17/50 goal · 2 volunteers per session           │   │
│  │                                                                      │   │
│  │  Rural Outreach       Western munic.     0%          Apr 1–30      Draft│
│  │  Jurisdiction: PR · Goal: 200 · ⚠ No shifts created                │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ◀  Page 1 of 1  ▶                               Showing 1–4 of 4          │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Mobile
- Card list: drive name, progress bar, goal fraction, status

---

### VREG-002: Voter Reg Drive Create / Edit

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Voter Registration    New Registration Drive         [Cancel]  [Save]    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Drive Details                                                               │
│  ─────────────                                                               │
│                                                                              │
│  Drive name *        [                                          ]           │
│  Description         [                                          ]           │
│  Location(s)         [                                          ]           │
│                                                                              │
│  Jurisdiction *      [Puerto Rico                       ▾]                  │
│                      Determines: eligible fields, ID requirements,           │
│                      submission process                                      │
│                                                                              │
│  Registration Form                                                           │
│  ─────────────                                                               │
│                                                                              │
│  ◉ Use jurisdiction template                                                │
│    Puerto Rico (CEE) — standard voter registration form                      │
│    Required: Name, DOB, Address, ID number                                  │
│    [Preview template →]                                                     │
│                                                                              │
│  ○ Custom form                                                              │
│    Configure a custom registration form with validation rules               │
│    [Open Form Builder →]                                                    │
│                                                                              │
│  Schedule                                                                    │
│  ─────────────                                                               │
│                                                                              │
│  Start date *        [March 1, 2024         ]                               │
│  End date            [April 30, 2024        ]                               │
│  Shift times         [+ Add shift time]                                     │
│                      Sat 9:00 AM – 1:00 PM   [✕]                           │
│                                                                              │
│  Goal                [500     ] registrations                               │
│                                                                              │
│  Territory                                                       [▾]       │
│  ─────────────                                                               │
│                                                                              │
│  ◉ Specific locations (list addresses or areas)                             │
│  ○ Select turfs on map                                                      │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  [Cancel]                                    [Save as Draft]  [Activate →]  │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

### VREG-003: Jurisdiction Template Selector

Shown when setting up or changing the jurisdiction template for a voter registration drive.

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ← Drive Setup    Jurisdiction Template                                      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Select the jurisdiction for this registration drive.                        │
│  The template determines required fields, eligibility rules,                 │
│  and submission procedures.                                                  │
│                                                                              │
│  Country:  [Puerto Rico (US Territory)                 ▾]                   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Puerto Rico (CEE)                                      [Select →]   │   │
│  │  ──────────────────                                                   │   │
│  │  Comisión Estatal de Elecciones                                       │   │
│  │                                                                       │   │
│  │  Required fields:                                                     │   │
│  │  • Full legal name                                                    │   │
│  │  • Date of birth                                                      │   │
│  │  • Residential address in PR                                          │   │
│  │  • Social Security Number (last 4 digits)                             │   │
│  │                                                                       │   │
│  │  Eligibility:                                                         │   │
│  │  • US citizen                                                         │   │
│  │  • Resident of Puerto Rico                                            │   │
│  │  • At least 18 years old by election day                              │   │
│  │                                                                       │   │
│  │  Submission: Form submitted to local CEE office                       │   │
│  │  Last updated: January 2024                                           │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Available templates:                                                        │
│  ┌────────────────────────────────┐  ┌────────────────────────────────┐     │
│  │  🇺🇸 United States (FEC)       │  │  🇧🇷 Brazil (TSE)              │     │
│  │  State-specific templates      │  │  Tribunal Superior Eleitoral   │     │
│  │  50 state templates available  │  │  [Select →]                    │     │
│  │  [Select →]                    │  │                                │     │
│  └────────────────────────────────┘  └────────────────────────────────┘     │
│  ┌────────────────────────────────┐  ┌────────────────────────────────┐     │
│  │  🇮🇳 India (ECI)               │  │  🇱🇧 Lebanon (SCE)             │     │
│  │  Election Commission of India  │  │  Supervisory Commission       │     │
│  │  [Select →]                    │  │  [Select →]                    │     │
│  └────────────────────────────────┘  └────────────────────────────────┘     │
│                                                                              │
│  Don't see your jurisdiction? [Create custom form →]                        │
│                                                                              │
│  [Cancel]                                                   [Confirm →]     │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Design Notes
- **Jurisdiction selection drives the entire form** — the template determines required fields, eligibility checks, and submission workflow
- **Template details visible before selection** — the user can see what fields will be required before committing
- **Country-level selection first**, then specific templates within that country (e.g., US has 50 state-specific templates)
- **Custom form fallback** — for jurisdictions without a template, redirects to a form builder
- **Desktop only** (per screen inventory)

---

### VREG-006: Voter Registration Results Review

Post-drive review of registration data.

#### Personas
- OA, FiD

#### Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Voter Reg Results                                  Drive: Spring Registration│
│  ───────────────────────────────────────────── Date range: [All time    ▾]  │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  📋 Registered│  │  📊 Goal      │  │  👥 Volunteers│  │  ⚠ Issues    │    │
│  │  342          │  │  68% of 500   │  │  8 total      │  │  3 pending   │    │
│  │  new voters   │  │  ↑ pace: good │  │  42 hours     │  │  12 resolved │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Registration Progress                                                │   │
│  │  ─────────────────────                                                │   │
│  │                                                                       │   │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░  342/500 (68%)                               │   │
│  │  At current pace, goal reached by: April 12                           │   │
│  │                                                                       │   │
│  │  By week:                                                             │   │
│  │  Wk 1  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  98                                    │   │
│  │  Wk 2  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓     82                                    │   │
│  │  Wk 3  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 102                                   │   │
│  │  Wk 4  ▓▓▓▓▓▓▓▓▓▓▓▓         60 (in progress)                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Registrations by Location      │  │  ⚠ Data Issues (3)              │   │
│  │  ─────────────────────          │  │  ──────────────                  │   │
│  │                                 │  │                                   │   │
│  │  Plaza del Mercado     148      │  │  🟡 Incomplete address — 2      │   │
│  │  UPR Campus             98      │  │     registrations missing unit # │   │
│  │  Calle Loíza            56      │  │     [Review →]                  │   │
│  │  Door-to-door           40      │  │                                   │   │
│  │                                 │  │  🟡 Age verification — 1        │   │
│  │                                 │  │     registrant may be under 18  │   │
│  │                                 │  │     [Review →]                  │   │
│  │                                 │  │                                   │   │
│  │                                 │  │  Resolved this drive: 12        │   │
│  └─────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Follow-up Pipeline                                                   │   │
│  │  ──────────────────                                                   │   │
│  │                                                                       │   │
│  │  Confirmation pending:  198 (awaiting official processing)            │   │
│  │  Confirmed registered:  132                                           │   │
│  │  Issues with submission: 12 (need re-submission)                      │   │
│  │                                                                       │   │
│  │  [View all registrants →]  [Export for submission →]                  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Mobile
- Metric cards + progress bar stacked
- Data issues as a compact alert list
- Location breakdown as inline list

---

## Empty States

### Canvassing Campaign List — Empty

```
│                         🚪                                                   │
│                                                                              │
│               No canvassing campaigns yet                                    │
│                                                                              │
│     Create your first campaign to start organizing                          │
│     door-to-door voter outreach.                                            │
│                                                                              │
│     [Create Canvassing Campaign →]                                          │
│                                                                              │
│     Need help? Read the canvassing setup guide.                             │
```

### Phone Bank Campaign List — Empty

```
│                         📞                                                   │
│                                                                              │
│               No phone bank campaigns yet                                    │
│                                                                              │
│     Set up a phone bank campaign to reach voters by phone.                  │
│     You'll need a contact segment and a call script.                        │
│                                                                              │
│     [Create Phone Bank Campaign →]                                          │
```

### Voter Reg Drive List — Empty

```
│                         📋                                                   │
│                                                                              │
│               No voter registration drives yet                               │
│                                                                              │
│     Organize drives to register new voters in your                          │
│     community. Start by selecting your jurisdiction.                        │
│                                                                              │
│     [Create Registration Drive →]                                           │
```

---

## Accessibility Notes

- Turf map (CANV-004, CANV-014) uses color + pattern fills for turfs (not color alone) — accessible to colorblind users
- Script builder steps are keyboard-reorderable (not drag-only) via up/down arrow buttons
- Walk list assignment uses standard form controls, not drag-and-drop
- Progress percentages in campaign lists have `aria-label` descriptions
- Phone bank call outcomes have both color bars and numeric labels

---

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Shared patterns across all three op types | Consistent list/create/results pattern | Reduces learning curve — Field Director uses all three |
| Script builder as split-pane | Live preview alongside editor | Immediate feedback on script changes |
| Script branching as tree visualization | Visual decision tree with collapsible branches | Scripts are inherently branching; tree makes logic visible |
| Turf management as map-first | Full-width map with sidebar list as secondary | Turfs are geographic — map is the natural view |
| Auto-generation with preview | User sets constraints, system generates, user approves | Prevents bad auto-cuts; human judgment for edge cases |
| Walk list assignment as table | Volunteer rows with turf dropdown | Simple and clear for small-to-medium teams |
| Results review as metric cards + drill-down | Summary cards at top, detailed tables below | Quick overview with ability to investigate |
| Jurisdiction template for voter reg | Pre-built per-jurisdiction templates | Reduces error rate for jurisdiction-specific requirements |

## Open Questions

1. **Script versioning.** When a script is edited mid-campaign, do existing walk lists keep the old version or update? Current design: active campaigns keep their version, but should the Field Director be able to push an update to all in-progress walk lists?

2. **Turf drawing on tablet.** Turf Management Map (CANV-004) is marked desktop-only, but a Field Director in a staging area with an iPad is a realistic scenario. Should turf drawing be supported on tablets?

3. **Phone bank caller ID.** For the integrated dialer, should calls show the campaign's phone number or the volunteer's personal number? Campaign number is more professional; personal number may get better answer rates (familiar area code).

4. **Voter registration form offline editing.** If a jurisdiction template is updated while a volunteer is in the field (offline), what happens? The volunteer keeps the old template until sync. Should a warning appear on sync if the template changed mid-shift?

5. **Cross-campaign dedup for phone banking.** If a voter is in two active phone bank campaigns, should they be auto-excluded from the second to prevent over-calling? Currently this is a manual exclusion checkbox.
