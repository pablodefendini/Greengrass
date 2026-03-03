# Responsive Strategy

## Purpose

This document defines how GreenGrass adapts to different screen sizes, devices, and platform capabilities. It covers breakpoints, device-specific behavior, the Capacitor native wrapper strategy, and how components transform across viewports.

## Breakpoints

### Definition

| Token | Width | Name | Target |
|-------|-------|------|--------|
| `--bp-sm` | 640px | Small | Large phones (landscape), small tablets |
| `--bp-md` | 768px | Medium | Tablets (portrait) |
| `--bp-lg` | 1024px | Large | Tablets (landscape), small laptops |
| `--bp-xl` | 1280px | Extra large | Laptops, desktop monitors |
| `--bp-2xl` | 1536px | 2x Extra large | Large desktop monitors |

### Viewport Ranges

| Range | Grid | Nav | Shell | Primary Target |
|-------|------|-----|-------|----------------|
| <640px | 4-col | Bottom tabs | Mobile shell | Phones |
| 640-767px | 4-col | Bottom tabs | Mobile shell | Large phones |
| 768-1023px | 8-col | Collapsed sidebar (overlay) | Tablet shell | Tablets |
| 1024-1279px | 12-col | Sidebar (collapsible) | Desktop shell | Small laptops |
| 1280px+ | 12-col | Sidebar (expanded default) | Desktop shell | Desktop |

### Usage

Breakpoints are used via CSS media queries with a mobile-first approach:

```css
/* Base styles apply to smallest viewport */
.component { /* mobile styles */ }

@media (min-width: 768px) { /* tablet adjustments */ }
@media (min-width: 1024px) { /* desktop adjustments */ }
```

Mobile-first means: the default (no media query) styles are for the smallest screen. Enhancements are added at wider breakpoints. This ensures that low-end phones with slow CSS processing get the simplest stylesheet.

---

## Device Categories

### Phone (< 768px)

The primary device for Volunteers, Team Leads, Supporters, and Candidates.

**Layout:**
- Full-screen content, no sidebar
- Bottom tab bar (4-5 role-adaptive tabs)
- Top bar: back/menu, title, contextual actions
- Lists are card-based (not table-based)
- Detail views are full-screen (tap to enter, back to exit)

**Behavior:**
- Touch interactions only (no hover states)
- Pull-to-refresh on lists
- Infinite scroll instead of pagination
- Swipe gestures on cards (dismiss, archive)
- Bottom sheet for filters and options (not dropdowns)
- Form inputs use native mobile keyboards (numeric, email, phone)

**Performance:**
- Smallest possible bundle (aggressive code splitting)
- Images lazy-loaded and size-optimized
- Skeleton loading states (no full-screen spinners)
- Service worker for offline shell caching

### Tablet (768px - 1023px)

Used by some staff members, occasionally by Field Directors monitoring operations from a staging area.

**Layout:**
- 8-column grid
- Sidebar collapsed by default, expandable as overlay
- Detail panels can appear as right-side overlay (not inline split)
- Tables switch between card view and table view based on column count

**Behavior:**
- Touch + limited pointer interactions
- Dropdowns are bottom sheets when triggered by touch
- Split view available for messaging (conversation list + thread)
- Drag-and-drop works but is not the primary interaction model

### Desktop (1024px+)

The primary device for Org Admins, Communications Directors, Finance Directors, Data Managers, and Volunteer Coordinators.

**Layout:**
- 12-column grid
- Sidebar always visible (collapsible to icon-only)
- Split views for list+detail patterns
- Detail panels slide out from the right
- Modals are centered dialogs (not full-screen)
- Tables are full data tables with column sorting and selection

**Behavior:**
- Mouse + keyboard interactions
- Hover states on interactive elements
- Keyboard shortcuts available
- Drag-and-drop for builders, kanban, calendar
- Right-click context menus where appropriate
- Tooltips on hover (information available without tapping)

---

## Component Adaptation

How components transform across breakpoints:

### Navigation

| Component | Phone | Tablet | Desktop |
|-----------|-------|--------|---------|
| Primary nav | Bottom tab bar | Collapsed sidebar (overlay) | Sidebar (expanded/collapsed) |
| Secondary nav | "More" bottom sheet | "More" bottom sheet | Sidebar sections |
| Breadcrumbs | Hidden (back arrow instead) | Visible (abbreviated) | Visible (full path) |
| Search | Full-screen overlay | Full-screen overlay | Inline header bar |
| User menu | Full-screen profile | Bottom sheet | Dropdown |

### Data Display

| Component | Phone | Tablet | Desktop |
|-----------|-------|--------|---------|
| Data table | Card list | Card list or compact table | Full table with columns |
| List + detail | Stacked (full-screen each) | Optional split view | Split view (resizable) |
| Dashboard widgets | Single column, stacked | Two columns | Three or four columns |
| Charts | Simplified (fewer labels) | Standard | Full (legends, annotations) |
| Calendar | Agenda view (list) | Week view | Month/week/day views |
| Kanban/pipeline | Scrollable single column | Two visible columns | All columns visible |

### Forms

| Component | Phone | Tablet | Desktop |
|-----------|-------|--------|---------|
| Form layout | Single column, stacked | Single column | Two columns possible |
| Select inputs | Native mobile select | Bottom sheet | Dropdown |
| Date picker | Native mobile picker | Calendar popup | Calendar popup |
| File upload | Camera + file picker | Drag-and-drop + file picker | Drag-and-drop + file picker |
| Color picker | Full-screen | Popover | Popover |
| Multi-step forms | Full-screen per step | Full-screen per step | Inline with step indicator |

### Overlays

| Component | Phone | Tablet | Desktop |
|-----------|-------|--------|---------|
| Modals | Full-screen | Centered dialog (medium) | Centered dialog |
| Drawers | Full-screen or bottom sheet | Side drawer (full height) | Side drawer (full height) |
| Notifications | Full-screen list | Side drawer | Side drawer |
| Confirmation dialogs | Bottom sheet | Centered dialog | Centered dialog |
| Tooltips | Bottom sheet (on tap) | Popover (on tap or hover) | Popover (on hover) |

### Field Mode

Field mode is phone-only by design. If accessed from a tablet or desktop viewport:

- **Tablet:** Renders in phone-sized viewport (centered, with padding). Field mode is designed for one-handed mobile use — scaling it to tablet dimensions would make touch targets inappropriately large and waste screen space.
- **Desktop:** Redirects to the management view (e.g., `/field/canvassing/[campaignId]` instead of `/field-mode/canvass/[shiftId]`). Staff don't canvass from a desktop.

---

## Capacitor-Specific Considerations

GreenGrass uses Capacitor to wrap the SvelteKit web app as a native mobile app. This introduces specific considerations:

### Native API Access

| Feature | Web-Only | With Capacitor |
|---------|----------|----------------|
| Passkey auth | WebAuthn API | Native biometric prompt |
| Camera (QR check-in) | `getUserMedia` API | Native camera with QR scanner |
| Offline storage | IndexedDB (limited) | SQLite via SQLCipher (encrypted, larger) |
| Push notifications | Web Push API | Native push (APNs/FCM) |
| Map tiles caching | Service worker cache | File system cache (larger, persistent) |
| Background sync | Service worker (limited) | Native background tasks |
| Haptic feedback | Vibration API (limited) | Full haptic engine access |
| Deep links | URL handling | Universal links / App links |

### Safe Areas

iOS and Android have safe areas (notch, status bar, home indicator, navigation bar) that must not overlap with interactive content:

```css
/* Respect device safe areas */
.app-shell {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
```

The bottom tab bar sits above the home indicator. The header bar sits below the status bar/notch. Field mode's panic button must be outside the safe area but still tappable.

### Status Bar

- **Standard app:** Light status bar (dark text on light background)
- **Dark mode:** Dark status bar (light text on dark background)
- **Field mode:** Status bar hidden (full-screen immersive mode) to maximize content space
- **Color matches header:** Status bar background color matches the app header bar

### App Icon and Splash Screen

- **App icon:** Tenant-customizable. Default GreenGrass icon for platform. Tenant logo (if square-compatible) used for tenant-branded builds.
- **Splash screen:** Brief (< 2 seconds). Shows tenant logo on brand-colored background. Transitions to the app when initial data loads.

### Keyboard Handling

On mobile, the virtual keyboard overlapping form inputs is a common problem:

- **Scroll to active input:** When a form input gains focus, the viewport scrolls to keep it visible above the keyboard.
- **Bottom-fixed elements reposition:** The bottom tab bar and floating action buttons move above the keyboard when it's open.
- **Field mode:** Input fields are in the upper portion of the screen, so the keyboard doesn't overlap them. Response option buttons are large enough to remain tappable above the keyboard.

---

## Performance Budgets

Performance is a core constraint — the target user is on a low-end Android phone with a slow connection.

### Bundle Size Targets

| Resource | Target | Notes |
|----------|--------|-------|
| Initial JS bundle | < 150KB gzipped | SvelteKit's compiled output helps here |
| Initial CSS | < 30KB gzipped | Design tokens + base styles |
| First contentful paint | < 2s on 3G | Server-side rendering critical |
| Time to interactive | < 4s on 3G | Hydration must be fast |
| Per-route chunk | < 50KB gzipped | Aggressive code splitting |
| Font (Inter subset) | < 30KB | Latin subset for initial load |
| Font (full) | < 100KB | Lazy-loaded extended character sets |

### Image Strategy

- **Logo/branding:** SVG where possible, PNG fallback < 20KB
- **Avatar images:** 48x48px thumbnails, lazy-loaded
- **Map tiles:** 256x256px PNG, cached aggressively
- **No decorative images.** Every image serves a function.
- **Responsive images:** `srcset` with size variants for different viewports
- **WebP with PNG fallback** for raster images

### Code Splitting Strategy

SvelteKit's route-based code splitting handles most cases. Additional splits:

| Split | Trigger |
|-------|---------|
| Map components | Only loaded on screens with maps |
| Chart library | Only loaded on dashboard/analytics screens |
| Builder components | Only loaded on builder screens (email, form, script) |
| Field mode | Only loaded when entering field mode |
| Admin/settings | Only loaded for Org Admin role |

This means a Volunteer's app loads significantly less code than an Org Admin's — they never download the builder, settings, or analytics chunks.

---

## Progressive Enhancement

The SvelteKit app uses server-side rendering with progressive enhancement:

### Without JavaScript

The app is not fully functional without JavaScript (SvelteKit hydration is required for interactivity). However, SSR ensures:
- Content is visible before JS loads (readable dashboards, contact lists)
- Links work before hydration (navigation via full page loads)
- Form inputs are visible (though submission requires JS)
- Search engines can index public pages

### Without Service Worker

Without a service worker, the app works online-only. The service worker adds:
- Offline shell caching (navigation still works)
- Background sync for queued operations
- Push notification handling
- Map tile caching

The Capacitor native app always has service worker capabilities. Web-only users (accessing via browser) may not, but the core experience degrades gracefully.

### Low-End Device Accommodations

For devices with limited RAM and CPU:
- **Virtualized lists:** Long lists render only visible items (virtual scrolling)
- **Reduced animation:** `prefers-reduced-motion` respected; additionally, devices with <4GB RAM get reduced transitions
- **Image quality reduction:** Lower-resolution images served to slow connections
- **Deferred loading:** Non-critical UI (charts, secondary widgets) loads after initial render
- **Memory-conscious caching:** Cache limits are lower on low-memory devices

---

## Testing Matrix

### Required Testing Viewports

| Viewport | Device Representative | Priority |
|----------|----------------------|----------|
| 360x640 | Budget Android phone (Samsung Galaxy A series) | Critical |
| 375x812 | iPhone SE / iPhone 13 Mini | Critical |
| 390x844 | iPhone 14 / 15 | High |
| 412x915 | Google Pixel / mid-range Android | High |
| 768x1024 | iPad (portrait) | Medium |
| 1024x768 | iPad (landscape) / small laptop | Medium |
| 1280x800 | Standard laptop | High |
| 1440x900 | Large laptop | Medium |
| 1920x1080 | Desktop monitor | Medium |

### Priority Testing Scenarios

1. **Budget Android + slow 3G** — the critical path. If it works here, it works everywhere.
2. **iPhone + LTE** — the other major mobile scenario.
3. **Desktop + broadband** — the staff experience.
4. **Tablet + Wi-Fi** — occasional use case.
5. **RTL on all of the above** — Arabic layout testing.
6. **Dark mode on all of the above** — color contrast and readability.
7. **Field mode on budget Android** — the highest-risk UX in the system.

---

## Open Questions

1. **Foldable devices.** Samsung Galaxy Z Fold and similar foldable devices have two viewports (folded and unfolded). Should the app explicitly handle the fold crease and viewport change? Low priority but growing market.

2. **PWA vs. native-only distribution.** Should the app be installable as a Progressive Web App (via browser) in addition to the Capacitor-wrapped native app? PWA reduces friction (no app store needed) but has less access to native APIs.

3. **Offline map provider.** For pre-caching map tiles, which provider offers the best offline tile support for the target countries? OSM tiles are free but large. Vector tiles (Mapbox/MapLibre) are smaller but require more rendering power on low-end devices.

<!-- REVISIT: The performance budgets are targets, not guarantees. Real performance measurement against actual target devices (budget Android phones in target markets) is essential during development. Lab testing with throttled connections is a start but doesn't capture the full reality of network conditions in rural Brazil or India. -->
