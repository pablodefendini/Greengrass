# ADR-011: Design System & UX Foundations

**Status:** Accepted
**Date:** 2026-03-03
**Sources:** `design/ux/01-information-architecture/navigation-model.md`, `design/ux/03-design-system/foundations.md`, `design/ux/03-design-system/theming-strategy.md`, `design/ux/03-design-system/responsive-strategy.md`

## Context

GreenGrass must run on low-end Android phones over 3G connections in the global south, while also providing a full desktop experience for campaign staff managing complex operations. The design system must support per-tenant branding (political campaigns need their colors and logos), RTL text direction, accessibility requirements, and a field mode interface optimized for one-handed walking use. Every design decision impacts performance, and performance is a survival requirement — a 10-second load on 3G means the volunteer at the door gives up.

## Decision

### Desktop: hybrid top bar + sidebar navigation

Desktop uses a top bar for context (tenant identity, global search, sync status, notifications, profile) and a collapsible sidebar for role-adaptive feature navigation. The sidebar shows different items based on the user's role template — restricted features are absent, not greyed out. Sidebar sections are independently collapsible with persistent state per user.

Mobile uses a bottom tab bar (4-5 role-adaptive tabs) with full-screen content and back/menu navigation in the top bar. Field mode is a full-screen takeover with no sidebar or tabs — just previous/next navigation, position indicator, and end shift + panic button.

**Alternatives considered:** Top bar only (no sidebar) was rejected because campaign platforms have too many feature areas for horizontal navigation alone. Bottom tab + hamburger menu was rejected for desktop because it hides navigation behind an extra click. Same navigation on all devices was rejected because phone, tablet, and desktop have fundamentally different interaction patterns.

### System font stack, no custom fonts

The platform uses `system-ui` with fallbacks to platform-specific fonts: Roboto (Android), San Francisco (iOS), Noto Sans (Unicode coverage). No custom web fonts are loaded. This provides zero font loading delay, best possible script coverage across Latin, Thai, Devanagari, and Arabic, and consistent rendering on each platform.

**Alternatives considered:** Custom web fonts (Inter, etc.) were considered and initially used, then rejected because they add load time on slow connections, require fallback handling, and don't provide as reliable coverage for Thai, Devanagari, and Arabic scripts as system fonts.

### Per-tenant color + logo customization only

Tenants can customize their primary color, logo, and favicon. Font, layout, component styles, and spacing are fixed. This prevents spacing/alignment breaks from tenant customization and reduces the testing matrix to color variants only.

### Automatic derivative color generation from primary color

The tenant's primary color automatically generates hover (10% darker), active (20% darker), subtle background (95% lighter), and on-primary text (white or black, whichever provides 4.5:1 contrast). If the brand color is too close to status colors (red/amber/green), the system warns during configuration. The color generation uses perceptual color algorithms (OKLCH preferred over HSL).

### 8px base spacing unit with geometric scale

All spacing uses a geometric scale anchored at 8px: 0, 1px, 2px, 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px. Mobile margins are 16px; desktop margins are 32-64px. Consistent spacing creates visual rhythm and eliminates ad-hoc pixel values.

### Mobile-first CSS with aggressive code splitting

Base styles target the smallest viewport; enhancements are added via media queries. Breakpoints: 640px (large phones), 768px (tablets), 1024px (small laptops), 1280px (laptops), 1536px (large monitors). Code splitting is both route-based and feature-based — maps, charts, form builders, admin tools, and field mode are loaded only when needed.

### Performance budgets targeting 3G

| Metric | Budget |
|--------|--------|
| Initial JS | <150KB gzipped |
| CSS | <30KB |
| First Contentful Paint | <2s on 3G |
| Time to Interactive | <4s on 3G |
| Per-route chunk | <50KB |
| Web fonts | 0KB (system fonts) |

Images use WebP with PNG fallback, `srcset` for responsive sizing, lazy loading for avatars, and pre-cached tiles for maps. SVG for logos.

The design system uses CSS custom properties (design tokens) for all visual values — never raw values. This enables per-tenant theming at runtime without code changes. The token architecture has three layers: primitive palette (raw colors, unused directly), semantic tokens (describe purpose: `--color-surface-primary`, `--color-text-secondary`), and theme overrides (per-tenant customization). Dark mode remaps surface/text/border tokens. Accessibility themes (high contrast, large text, reduced motion) are applied as data attributes.

## Consequences

**Benefits:**
- System fonts provide zero loading delay and the best script coverage — critical for multilingual, low-bandwidth contexts
- Per-tenant color-only customization keeps the testing matrix manageable while still allowing campaign branding
- Automatic derivative color generation ensures accessibility without requiring design expertise from campaign staff
- Performance budgets targeting 3G ensure the platform works on the actual networks and devices volunteers use
- Design token architecture enables runtime theming, dark mode, and accessibility themes through a single mechanism

**Costs:**
- System font stack means the platform's typography varies slightly across operating systems
- Color-only customization may frustrate campaigns with strong brand identities that extend beyond color
- Aggressive code splitting requires careful dependency management to avoid waterfall loading
- 150KB JS budget is extremely tight and will require ongoing vigilance as features are added

**Constraints:**
- Every component must work across all breakpoints, in both LTR and RTL, with both light and dark themes
- Field mode touch targets (56px minimum) require separate layout treatment from standard mode (44px)
- `prefers-reduced-motion` must be respected — all motion is functional only, no decorative animations
- Testing must prioritize budget Android devices (360x640) as the critical target

**Related ADRs:** [ADR-010](010-internationalization-localization.md) (RTL support via logical properties, multilingual font coverage), [ADR-006](006-field-operations-gotv.md) (field mode interface, touch targets), [ADR-001](001-platform-architecture.md) (mobile-first design)
