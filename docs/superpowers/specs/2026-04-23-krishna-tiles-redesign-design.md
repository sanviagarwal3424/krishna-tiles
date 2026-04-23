# Krishna Tiles — Redesign Design Spec

**Status:** Draft · awaiting user review
**Date:** 2026-04-23
**Scope:** Homepage (`/`) + Showroom page (`/contact`) + Products listing (`/products`)
**Primary goal:** Drive showroom walk-ins at Upper Bazar, Ranchi
**Secondary goal:** Rank locally for "tiles in Ranchi" / "sanitaryware in Ranchi"

---

## 1. Aesthetic Direction

**Confident Retail Showroom** — darker base, bold sans body, editorial serif display, one brand accent per section. Feels commercial and premium (Apple / Bang & Olufsen reference) rather than purely editorial.

### Design tokens

**Colors**
```css
--ink: #0B0B0C;           /* near-black, primary section background */
--surface: #151517;       /* dark cards, elevated surfaces */
--graphite: #2A2A2C;      /* borders, dividers */
--bone: #F4F2ED;          /* warm off-white — light sections + text on dark */
--text-dim-on-dark:  #9B9B9B;  /* secondary text when background is dark */
--text-dim-on-light: #6F6F6F;  /* secondary text when background is light */

/* Brand accents — used sparingly, one per section */
--accent-orange: #E8742B; /* primary accent, eyebrows, hover states */
--accent-plum:   #7B4680; /* bath / luxury */
--accent-moss:   #A8C93D; /* outdoor / eco */
--accent-signal: #0492C5; /* trust / expert */
```

**Typography**
- **Display:** Cormorant Garamond · weights 400, 500 · headings only · letter-spacing -0.02em
- **Body/UI:** Manrope · weights 300, 400, 600, 700, 800 · body + buttons + navigation
- **Eyebrow:** Manrope 700 · 11px · letter-spacing 0.3em · uppercase · color `--accent-orange`

**Type scale**
```
--fs-hero:      clamp(3rem, 8vw, 5.5rem);    /* hero title (when text-only) */
--fs-display:   clamp(2rem, 4vw, 3.5rem);    /* section titles */
--fs-h3:        clamp(1.25rem, 2vw, 1.75rem);
--fs-body:      16px;
--fs-small:     13px;
--fs-micro:     11px;
```

**Section pattern** — alternating dark ↔ light
- Dark section: `--ink` background, `--bone` text, `--accent-orange` eyebrows
- Light section: `--bone` background, `--ink` text, `--accent-orange` eyebrows

**CTA treatment — Bone & Ink (locked)**
- **Primary on dark:** `--bone` fill, `--ink` text · hover: `--accent-orange` fill
- **Secondary on dark:** transparent, `--bone` 1px border, `--bone` text
- **Primary on light:** `--ink` fill, `--bone` text · hover: `--accent-orange` fill
- **Secondary on light:** transparent, `--ink` 1px border, `--ink` text
- All buttons: 14px 28px padding, Manrope 700, 11px, letter-spacing 0.2em, uppercase, no border-radius

**Motion**
- Scroll reveal: `opacity 0→1, translateY 12px→0, 500ms cubic-bezier(0.2, 0.8, 0.2, 1)`
- Product card hover: `image scale 1→1.03, 300ms ease-out` · no tilt · no bounce
- Hero state transitions: driven by scroll progress (see §3)
- Respect `prefers-reduced-motion: reduce`

---

## 2. Page Architecture

### 2.1 Homepage (`/`)

Section order (alternating dark/light, `— D —` dark, `— L —` light):

1. **InteractiveHero** — D — full-viewport tile gallery (see §3)
2. **StatsBar** — D — thin horizontal strip (~80px tall, not a full section): 22+ yrs · 40+ brands · 20,000+ designs · 4.8★. Reads as a band attached to the hero, not as a second dark section — alternating pattern continues with #3
3. **Shop by Space** — L — 4 category cards (Living / Bath / Kitchen / Outdoor) with full-bleed photos, each links to `/products?category=<slug>`
4. **Featured Collection** — D — 6 tiles where `featured: true` in `tiles.ts`, rendered in showcase-tease cards (no prices). These are curated separately from the `/products` ordering
5. **Showroom Teaser** — L — single full-bleed horizontal showroom image, "Step inside — 4,200 sq ft" headline, CTA → `/contact`
6. **Real Installations** — D — 4-image gallery (existing image set, restyled)
7. **Brands We Carry** — L — logo strip (not text chips), scrollable on mobile
8. **Testimonials** — D — single-quote-at-a-time carousel with customer name + area
9. **Trust / Why Us** — L — 3 icon-led trust points (kept)
10. **CTAStrip** — D — horizontal strip: headline + phone + WhatsApp + directions + hours

### 2.2 Showroom page (`/contact`)

1. **PageHero** — D — "Upper Bazar, Ranchi · Mon–Sat · 10 AM – 8 PM"
2. **VisitInfo** — D — 3-column: Address · Hours (by day) · Contact (tap-to-call, WhatsApp, email)
3. **DirectionsMap** — L — Google Maps iframe embed + "Get Directions" button (opens Google Maps app)
4. **ShowroomPreview** — D — 4-image grid of showroom interior (placeholder Unsplash until real photos)
5. **EnquiryForm** — L — Name · Phone · Room Interest (dropdown: Living Room / Bathroom / Kitchen / Outdoor / Sanitaryware / Multiple Rooms / Other) · Message · Submit
6. **CTAStrip** — D — "Call now — we're open" + phone + WhatsApp

### 2.3 Products (`/products`)

1. **PageHero** — D — "The Collection" with thin banner
2. **FilterBar** — D — sticky horizontal chip filter (All / Living / Bath / Kitchen / Outdoor / Sanitaryware), URL-synced via `?category=<slug>`
3. **TileGrid** — L — 3-col desktop, 2-col tablet, 1-col mobile · ProductCard in showcase-tease mode. Single grid component, but the page layout inserts a **MidPageCTA** row after the 6th card: a dark full-width band containing "Can't decide? Walk in — we'll help you pick." + WhatsApp + Call CTAs. The grid resumes (still light) below it
4. **CTAStrip** — D — "See every tile in our showroom"

---

## 3. Interactive Hero (core interaction)

### Desktop structure
The hero is a `200vh` tall outer wrapper containing a `position: sticky; top: 0; height: 100vh` inner stage. As the user scrolls the 200vh wrapper, the inner stage stays pinned and its internal state advances based on `scrollProgress = scrollY / (wrapperHeight - 100vh)` (clamped 0–1). When the wrapper ends, the stage unpins and the page flows into the next section.

Three states driven by that scroll progress:

| Scroll progress | State | Tile filter | Crest | Spotlight |
|---|---|---|---|---|
| 0% → 30% | Landed | `saturate(0.6) brightness(0.55)` | opacity 1 | full |
| 30% → 70% | Transitioning | animating to `saturate(0.85) brightness(0.8)` | fading (opacity 1 → 0.15, translateY 0 → -30px, scale 1 → 0.9) | fading to 0 |
| 70% → 100% | Interactive | `saturate(1) brightness(1)` | opacity 0, pointer-events none | removed |

After 100%, the 200vh wrapper ends, the stage unpins, and the page flow resumes with the next section.

### Mobile structure
Mobile skips the sticky state machine entirely. The hero is a single `100vh` non-sticky section: tile grid at full saturation from the start, crest overlaid at top third with `pointer-events: none` on its background (so tile taps still register), tiles clickable immediately. Tap opens the TileDetailPanel bottom sheet. No scroll-driven state transitions.

### Crest content
- Eyebrow: "Since 2004 · Upper Bazar, Ranchi"
- Logo: `<img src="/images/logo.png" alt="Krishna Tiles" />` — 220px wide (mobile: 160px). Uses plain `<img>` (not `next/image`) with eslint-disable comment — logo PNG is small and predictable, next/image adds no benefit
- Rule: 40px horizontal line, `--accent-orange`
- Line: "Mon–Sat · 10 AM – 8 PM" (sourced from `business.timings`)
- Primary CTA: "Visit Showroom" → `/contact`
- Secondary CTA: "Call {business.phoneDisplay}" → `tel:{business.phone}` (sourced from `src/data/business.ts`)
- Scroll hint (bottom): "↓ Scroll to explore tiles" — fades out after user scrolls

### Interactive state
- Each tile becomes clickable
- Hover: tile name appears at bottom of tile (gradient overlay)
- Click: opens **TileDetailPanel**

### TileDetailPanel
- **Desktop:** floating card top-right, 280px wide, fixed position, backdrop remains visible
- **Mobile:** bottom sheet, slides up 70% viewport height
- Content: tile number + category · tile name (serif) · meta line (size · material · room) · description · two CTAs stacked
  - Primary: "See in Showroom" → `/contact`
  - Secondary: "WhatsApp Us" → `https://wa.me/<phone>?text=I'm interested in <tile name>`
- Close: click X, press ESC, or click outside the card

### Accessibility
- The hero is decorative interaction — all tile content is also available on `/products` (non-JS fallback)
- `role="region"` with `aria-label="Tile gallery"` on the interactive phase
- Keyboard: Tab cycles through tiles once interactive; Enter opens detail panel; ESC closes
- Focus ring: 2px `--accent-orange` offset -2px
- Respects `prefers-reduced-motion` — skips animation, jumps state at 50% scroll

---

## 4. Component Inventory

### 4.1 New (6)
- `src/components/hero/InteractiveHero.tsx` — orchestrates scroll state, renders TileWall + Crest + TileDetailPanel
- `src/components/hero/TileWall.tsx` — 6×4 grid, click handler, saturation/brightness driven by scroll progress prop
- `src/components/hero/TileDetailPanel.tsx` — floating card / bottom sheet with tile details + CTAs
- `src/components/ShowroomTeaser.tsx` — full-bleed horizontal photo + headline + CTA
- `src/components/products/FilterBar.tsx` — sticky chip filter, URL-synced via `useSearchParams`
- `src/components/contact/ShowroomPreview.tsx` — 4-image grid of showroom interior

### 4.2 Rewrites (3)
- `src/components/HeroSection.tsx` — becomes thin wrapper around `<InteractiveHero />`
- `src/components/ProductCard.tsx` — showcase-tease: image + name + size, no prices, hover "See in Showroom" CTA
- `src/components/CTAStrip.tsx` — horizontal strip with Bone & Ink buttons

### 4.3 Modify (2)
- `src/app/contact/page.tsx` — restructure to spec, add map embed
- `src/app/products/page.tsx` — add FilterBar, mid-page CTA insertion, URL-synced filtering via `searchParams`

### 4.4 Restyles (7, CSS only)
- `src/components/Header.tsx` — dark sticky, Manrope nav, logo + WhatsApp icon
- `src/components/Footer.tsx` — dark, 3-column (Shop · Visit · Contact)
- `src/components/FloatingButtons.tsx` — color tweak to new palette
- `src/components/TestimonialCard.tsx` — serif quote mark, clean layout
- `src/components/TrustSection.tsx` — light-section version
- `src/components/EnquiryForm.tsx` — Bone & Ink inputs + submit
- `src/app/globals.css` — replace old tokens, add new design-system variables

### 4.5 Data (1 new)
- `src/data/tiles.ts` — exactly 24 tile entries (fills the 6×4 hero grid). Of these, 6 carry `featured: true` and feed the homepage Featured Collection. The full 24 also populate `/products`.

```ts
export type TileCategory = 'living' | 'bath' | 'kitchen' | 'outdoor' | 'sanitaryware';

export type Tile = {
  id: string;             // slug, e.g. "statuario-premium"
  name: string;           // display name, e.g. "Statuario Premium"
  size: string;           // e.g. "800 × 1600 mm"
  material: string;       // e.g. "Glazed Porcelain"
  category: TileCategory;
  image: string;          // Unsplash URL or /images/products/<file>
  tint?: 'orange' | 'plum' | 'moss' | 'signal' | 'black';  // hero-grid tint class
  description: string;    // 1-2 sentence blurb
  featured?: boolean;     // true for 6 of the 24
};

export const tiles: Tile[] = [ /* 24 entries */ ];
export const featuredTiles = (): Tile[] => tiles.filter(t => t.featured);
export const tilesByCategory = (c: TileCategory): Tile[] => tiles.filter(t => t.category === c);
export const getTileById = (id: string): Tile | undefined => tiles.find(t => t.id === id);
```

### 4.6 Kept (1)
- `src/components/BlogCard.tsx` — blog out of scope

---

## 5. Conversion Flow

Every page routes users toward one of three conversion actions, in priority order:

1. **Walk-in visit** (primary) → `/contact`
2. **Phone call** (secondary) → `tel:<phone>`
3. **WhatsApp** (tertiary) → `https://wa.me/<phone>?text=<context>`

### Per-page conversion points

| Page | Entry CTA | Mid-page CTA | Exit CTA | Always-on |
|---|---|---|---|---|
| `/` | Hero crest: "Visit Showroom" + "Call" | Showroom Teaser section + Tile Detail Panel CTAs | Final CTAStrip | FloatingButtons (WhatsApp + Call) |
| `/contact` | Hero: phone + map | Map "Get Directions" | Form + CTAStrip | FloatingButtons |
| `/products` | FilterBar has no CTA (tool only) | MidPageCTA at 6 tiles + per-card "See in Showroom" | Final CTAStrip | FloatingButtons |

### WhatsApp deep links
Context-aware messages prefilled:
- From hero tile: `"Hi, I'm interested in <tile name>"`
- From product card: `"Hi, I want to know more about <tile name>"`
- Generic floating button: `"Hi, I'd like to visit your showroom"`

---

## 6. Implementation Approach

### 6.1 Tech stack (unchanged)
- Next.js 16.2.2 App Router
- React Server Components by default; `"use client"` only where interaction requires it (InteractiveHero, FilterBar, TileDetailPanel, EnquiryForm)
- Styling: `globals.css` with BEM-style naming following existing convention
- `next/image` for all raster assets
- SEO: each page defines `export const metadata: Metadata = { title, description }` (App Router convention); `h1` is enforced per page; semantic landmarks (`<main>`, `<section>`, `<nav>`) preserved
- Deployment halted until redesign complete (user directive)

### 6.2 Build sequence (suggested)
1. Design tokens & typography in `globals.css`
2. `src/data/tiles.ts` — data layer first, everything downstream depends on it
3. InteractiveHero (core differentiator) with subcomponents
4. Homepage sections top-to-bottom: ShowroomTeaser, restyle Categories/Gallery/Brands/Testimonials
5. ProductCard rewrite + CTAStrip rewrite (shared primitives)
6. `/products` page with FilterBar
7. `/contact` page with map embed + ShowroomPreview
8. Header + Footer restyle
9. FloatingButtons color tweak
10. Responsive + reduced-motion + keyboard pass
11. Playwright visual verification (desktop 1440×900 + mobile 390×844) on all three pages

### 6.3 Out of scope
- Blog pages (`/blog`, `/blog/[slug]`)
- About, FAQ, Gallery (standalone), Testimonials (standalone), Brands (standalone), tiles-in-ranchi SEO page
- Authentication, cart, checkout
- Supabase backend writes (enquiry form stays as-is, posts to existing handler)
- Real showroom photography (placeholder Unsplash for now)

### 6.4 Risks & mitigations
- **No real showroom photos** — use tasteful Unsplash placeholders with a "photography in progress" note in the spec comments, plan photo swap as a post-launch task
- **InteractiveHero complexity** — build state machine small first (just 2 states), validate, then add third state
- **Mobile scroll interaction feels bad** — mobile skips sticky state machine entirely, uses simpler static crest + tap-to-open pattern (see §3)

---

## 7. Testing & Verification

- **Visual:** Playwright screenshots at 1440×900 (desktop) and 390×844 (mobile) for each page; compare against mockups in `.superpowers/brainstorm/`
- **Interaction:** hero scroll state, tile click → panel open → CTA fires, filter chip → URL updates → grid filters
- **Accessibility:** keyboard-only run through all three pages; `prefers-reduced-motion` check
- **Performance:** Lighthouse ≥ 90 on mobile for each page; LCP < 2.5s
- **SEO:** each page has title, meta description, h1, semantic HTML preserved

---

## 8. Open Questions

1. **Real phone number for WhatsApp deep-link testing** — already in `src/data/business.ts`, confirmed
2. **Real showroom photos** — user to provide post-launch; placeholders used for now
3. **Google Maps embed** — need exact embed URL for Upper Bazar location; user can supply, otherwise use place search fallback
