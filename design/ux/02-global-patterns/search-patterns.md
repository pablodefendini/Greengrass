# Search Patterns

## Purpose

This document defines how search works across the platform — global search, contextual search within feature areas, filtering, and saved searches. Search is how users find things in a platform with 236 screens and potentially millions of records.

## Global Search

### Access

- **Desktop:** Always-visible search bar in the header. Keyboard shortcut: `/` or `Cmd+K` to focus.
- **Mobile:** Search icon in the top bar. Tapping opens a full-screen search interface with auto-focused input.

### Search Scope

Global search queries across all record types the user has access to:

| Record Type | Searchable Fields | Available To |
|-------------|-------------------|-------------|
| Contacts | Name, email, phone, address, tags | OA, CD, FD, FiD, VC, DM |
| Donations | Donor name, amount, transaction ID | OA, FD |
| Events | Event name, location, description | OA, VC, V, TL, S |
| Email campaigns | Subject line, campaign name | OA, CD |
| Volunteers | Name, email, phone, team, skills | OA, VC, FiD |
| Media contacts | Name, outlet, beat | OA, CD |
| Press releases | Title, content | OA, CD |
| Messages | Message content, participant names | All authenticated |
| Endorsements | Endorser name, organization | OA, CD |
| Knowledge base | Article title, content | All authenticated |

**Role filtering:** Search results only include records the user has access to. A Volunteer searching for "Maria" sees only contacts they've interacted with, not the full CRM. A Finance Director sees donation records but not canvassing campaign details.

### Search Results

Results are grouped by record type, ranked by relevance:

```
┌──────────────────────────────────────────────────────┐
│  Search: "martinez"                            [✗]   │
├──────────────────────────────────────────────────────┤
│                                                       │
│  CONTACTS (3)                                         │
│  ┌────────────────────────────────────────────────┐   │
│  │  Ana Martínez · (787) 555-0123 · San Juan     │   │
│  │  Carlos Martínez · Volunteer · Team A          │   │
│  │  Sofía Martínez-Rivera · Donor · Recurring     │   │
│  └────────────────────────────────────────────────┘   │
│                                                       │
│  DONATIONS (1)                                        │
│  ┌────────────────────────────────────────────────┐   │
│  │  $250 from Ana Martínez · Jan 15, 2026         │   │
│  └────────────────────────────────────────────────┘   │
│                                                       │
│  MESSAGES (2)                                         │
│  ┌────────────────────────────────────────────────┐   │
│  │  Conversation with Ana Martínez · 3 days ago   │   │
│  │  "Team A" group · Mentions Martínez · 1 week   │   │
│  └────────────────────────────────────────────────┘   │
│                                                       │
│  [Show all results →]                                 │
└──────────────────────────────────────────────────────┘
```

### Behaviors

- **Type-ahead** — results appear as the user types (debounced, 300ms delay). Minimum 2 characters.
- **Recent searches** — when the search bar is focused but empty, show the 5 most recent searches.
- **No results** — "No results for 'xyz'. Try a different search term or check your spelling." Never a blank screen.
- **Click result** — navigates directly to the record's detail view. Search closes.
- **"Show all results"** — opens a full search results page with advanced filtering.
- **Keyboard navigation** — arrow keys to navigate results, Enter to select, Esc to close.
- **Search is server-side** — requires connectivity. In offline mode, search bar shows: "Search requires a connection. You can browse cached records."

### Offline Search

When offline, global search is unavailable (server-side). However:
- **Local search** in field mode: volunteers can search their walk list by name or address. This uses the locally cached walk list data.
- **Cached message search:** users can search through previously synced messages.
- **The search bar is not hidden** when offline — it's greyed out with an offline badge, consistent with the offline degradation pattern.

---

## Contextual Search

Within specific feature areas, search is scoped to that context with domain-specific filters.

### Contact List Search

```
┌──────────────────────────────────────────────────────┐
│  [Search contacts...]                                 │
│                                                       │
│  Filters:                                             │
│  [Tag ▾]  [Segment ▾]  [Status ▾]  [Location ▾]     │
│  [Support Score ▾]  [Last Contact ▾]  [+ More]       │
└──────────────────────────────────────────────────────┘
```

### Donation List Search

```
┌──────────────────────────────────────────────────────┐
│  [Search by donor name or transaction ID...]          │
│                                                       │
│  Filters:                                             │
│  [Amount ▾]  [Date Range ▾]  [Type ▾]  [Status ▾]   │
│  [Campaign ▾]  [Payment Method ▾]  [+ More]          │
└──────────────────────────────────────────────────────┘
```

### Event Search

```
┌──────────────────────────────────────────────────────┐
│  [Search events...]                                   │
│                                                       │
│  Filters:                                             │
│  [Date Range ▾]  [Type ▾]  [Status ▾]  [Location ▾] │
└──────────────────────────────────────────────────────┘
```

### Message Search

```
┌──────────────────────────────────────────────────────┐
│  [Search messages...]                                 │
│                                                       │
│  Filters:                                             │
│  [From ▾]  [Date Range ▾]  [In conversation ▾]      │
│  [Has attachments ☐]                                  │
└──────────────────────────────────────────────────────┘
```

**Note:** Message search in E2E encrypted conversations is limited. Only messages that have been decrypted on the client can be searched. Server-side search of encrypted messages is not possible by design.

### Common Contextual Search Behaviors

- **Filter chips** — active filters shown as dismissable chips above the results. "Clear all" to reset.
- **Filter persistence** — filters persist within a session (navigating away and back preserves filters). Not persisted across sessions.
- **Saved filters** — users can save a filter combination for reuse (e.g., "High-value donors in San Juan" = Amount > $500 + Location = San Juan).
- **Empty results** — contextual message with suggestions. "No contacts match these filters. Try removing the 'Tag: Volunteer' filter."

---

## Filter Patterns

### Filter Types

| Type | UI Element | Example |
|------|-----------|---------|
| **Text** | Search input | Name, email, address |
| **Select** | Dropdown menu | Status (Active/Inactive/All), Type |
| **Multi-select** | Checkbox dropdown | Tags, segments, teams |
| **Range** | Dual inputs or slider | Amount ($50-$500), Date range |
| **Date** | Date picker | Created after, Last contact before |
| **Boolean** | Toggle or checkbox | Has email, Is recurring, Has donated |
| **Geospatial** | Map selection or location input | Within turf, Within radius |

### Filter UI Patterns

**Desktop:** Filters shown as a horizontal bar above the list. Complex filters expand in a dropdown panel. Active filters shown as chips.

```
┌──────────────────────────────────────────────────────┐
│  [Search...]  [Tag: Volunteer ✗]  [Amount: $50+ ✗]   │
│  [Clear all filters]                    [Save filter] │
└──────────────────────────────────────────────────────┘
```

**Mobile:** Filters accessed via a "Filter" button that opens a full-screen filter panel. Active filter count shown on the button ("Filter (2)").

```
┌──────────────────────────────────────┐
│  [Search...]            [Filter (2)] │
└──────────────────────────────────────┘

Filter panel (full-screen on mobile):
┌──────────────────────────────────────┐
│  ← Filters                   [Reset]│
├──────────────────────────────────────┤
│  Tag                                 │
│  [✓ Volunteer] [☐ Donor] [☐ Staff]  │
│                                      │
│  Amount                              │
│  [Min: $50    ] — [Max:          ]   │
│                                      │
│  Date Range                          │
│  [Jan 1, 2026 ] — [Today        ]   │
│                                      │
├──────────────────────────────────────┤
│  [Apply Filters]                     │
└──────────────────────────────────────┘
```

---

## Saved Searches and Filters

### Saving

Users can save a search query + filter combination for reuse:

```
┌──────────────────────────────────────┐
│  Save this filter                    │
│                                      │
│  Name: [High-value donors, San Juan] │
│                                      │
│  Filters:                            │
│  • Amount > $500                     │
│  • Location = San Juan               │
│  • Status = Active                   │
│                                      │
│  [Cancel]                    [Save]  │
└──────────────────────────────────────┘
```

### Accessing Saved Filters

Saved filters appear as a dropdown at the top of the relevant list:

```
┌──────────────────────────────────────────────────────┐
│  Saved filters: [High-value donors ▾]  [Search...]   │
└──────────────────────────────────────────────────────┘
```

Saved filters are personal (not shared across users) unless explicitly shared by an Org Admin.

---

## Search Performance

### Response Time Targets

| Search Type | Target | Notes |
|-------------|--------|-------|
| Type-ahead (global) | <500ms | Debounced, server-side |
| Contextual list filter | <300ms | May be client-side for small lists |
| Full search results page | <1s | Server-side with pagination |
| Offline walk list search | <100ms | Local SQLite query |

### Large Result Sets

- **Pagination** — search results are paginated (25 per page). "Load more" for infinite scroll on mobile.
- **Result count** — always show total matching count ("Showing 1-25 of 1,247 results").
- **No full-table scans** — search queries use indexes. Search is implemented via the search index (system.md), not direct database queries.

---

## Encryption Constraints

For tenants with BYOK encryption:
- **Blind index search** — contacts can be found by identifier (email, phone) via blind indexes, but the search query and results transit encrypted. The search index contains blind hashes, not plaintext.
- **Full-text search limitations** — full-text search of notes, interaction history, and free-form fields is only possible on the client (after decryption). Server-side full-text search of encrypted content is not supported.
- **Implication for UX** — global search may return fewer results for BYOK tenants. The search bar should not overpromise. Help text: "Search across names, emails, and identifiers. Note content is searchable within individual records."

---

## Open Questions

1. **Search analytics.** Should the platform track what users search for (to improve search relevance and identify unmet needs)? This is useful for product development but has privacy implications — search queries could reveal political interests.

2. **Fuzzy matching.** Should search support fuzzy matching (finding "Martinez" when the user types "Martines")? Important for multilingual contexts where name spelling varies. Implementation complexity is moderate.

3. **Search across tenants in alliance context.** When an Org Admin has alliance access, should global search include shared records from alliance members? If so, how are results visually distinguished (own records vs. alliance records)?

<!-- REVISIT: The search index technology (ElasticSearch, Meilisearch, or PostgreSQL full-text) needs to be decided during implementation. The UX patterns are the same regardless of backend, but performance characteristics differ. -->
