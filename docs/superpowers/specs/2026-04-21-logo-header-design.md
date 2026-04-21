# Logo + Header Refinement — Design Spec

**Date:** 2026-04-21
**Sub-project:** 2 of 5 (cleanup ✓ → **logo + header** → visual refinement → motion → code quality)
**Goal:** Fix the cramped, illegible logo in the header and elevate the header to an industry-grade premium feel without changing site content.

## Problem

The current `public/logo.svg` is 138KB of raster-traced path data with a 1280×793 viewBox containing KRISHNA wordmark + 4 category labels (TILES | SANITARYWARE | TAPS | KITCHENS). In `Header.tsx` it's capped at 55px height → ~89px wide, which makes the category row unreadable and adds visual noise at header size.

Both `public/logo.svg` and `public/Logo Krishna Tiles (1).svg` are byte-identical (md5 verified).

## Strategy

Separate the identity into two optimized variants:

1. **`public/logo-mark.svg`** (NEW) — compact header logomark, redrawn from geometric primitives. Only the chevron-K mark + KRISHNA wordmark. ~200×60 viewBox. <2KB. Used in Header and Footer.
2. **`public/logo-full.svg`** (NEW) — the same geometry but including the TILES | SANITARYWARE | TAPS | KITCHENS subtitle row. ~400×160 viewBox. <4KB. Used in Hero where vertical room exists.
3. **Delete** the two legacy 138KB files once the new ones are wired.

## Header redesign

### Structure (desktop)
```
┌────────────────────────────────────────────────────────────────┐
│  [logo-mark]        Home Products Brands ...        📞 Phone  │
└────────────────────────────────────────────────────────────────┘
```
Single-tier, 80px tall (was 72). More breathing room.

### Visual refinements
- Background: `rgba(255,255,255,0.85)` + `backdrop-filter: blur(24px)` saturate(180%) — more glassy.
- Border-bottom removed at rest. Appears as a fading shadow only after scroll (y > 8px).
- Logo wrapper: 200×56 box, logomark scales to fit. Hover: 2% scale, 200ms ease.
- Nav links: keep existing uppercase + tracking, but increase gap to 2.25rem (was 2.75rem — slightly tighter on mid-size screens), add current-page underline state via `usePathname()`.
- Phone CTA: keep, but icon darkens on hover instead of blend-shift.

### Scroll behavior (shrink)
- At `scrollY > 8`: header height 80→64, logo wrapper 200×56 → 160×44, bg opacity 0.85→0.96.
- Transition: 250ms cubic-bezier(0.4, 0, 0.2, 1).
- Implemented with a state hook + CSS class, not inline style toggling.

### Entrance animation
- First mount: opacity 0 → 1 + translateY(-8px) → 0 over 400ms.
- Uses framer-motion (already a dep).

### Mobile
- Header height stays 64px.
- Hamburger → X morph (animate two diagonal lines, hide the middle).
- Mobile nav overlay: keep existing, but stagger link entrance by 40ms each (framer-motion).

## CSS changes (globals.css)

Modify the `===== Header =====` block (lines 434–573):
- `--header-height` var bumps to 80px, with a compact modifier class `.header--compact` (64px).
- Add `.header__logo-wrap` for the bounded logo container.
- Add `.header__link--active` for current-page state.
- Add `.header--scrolled` class for shadow + compact state.

No other CSS sections are modified.

## Component changes

### `src/components/Header.tsx`
- Keep `"use client"`.
- Add `useEffect` listening to `window.scroll` → set scrolled state (throttled via `requestAnimationFrame`).
- Add `usePathname()` from `next/navigation` → compute `isActive(href)`.
- Import `motion` from `framer-motion`; wrap `<header>` in `motion.header` with initial/animate for entrance.
- Wrap logo `<img>` in a `motion.div` for hover scale.
- Replace `next/image` with a plain `<img>` for the SVG (Next image optimizer doesn't benefit SVGs) — or keep `next/image` but size it properly (no `maxHeight` inline hack).
- Hamburger button uses two spans (not three) with rotate animation on open.

### `src/components/HeroSection.tsx`
- Swap the hero's logo reference from `logo.svg` → `logo-full.svg`.
- No structural changes.

### `src/components/Footer.tsx`
- Uses a text `<h3>` brand mark currently (per the CSS `.footer__brand` class). Swap to `logo-mark.svg` inline at size 180×44.

## Files touched

| Path | Change |
|------|--------|
| `public/logo-mark.svg` | CREATE — compact header logomark |
| `public/logo-full.svg` | CREATE — full identity with subtitle row |
| `public/logo.svg` | DELETE (after wiring new files) |
| `public/Logo Krishna Tiles (1).svg` | DELETE (after wiring new files) |
| `src/components/Header.tsx` | REWRITE header structure + motion |
| `src/components/HeroSection.tsx` | Swap logo reference to `logo-full.svg` |
| `src/components/Footer.tsx` | Swap brand text to `logo-mark.svg` |
| `src/app/globals.css` | Modify lines ~434–573 (header block) + add scroll/active modifiers |

## Out of scope

- Hero section redesign beyond the logo swap (sub-project 3).
- Product card / section / typography overhauls (sub-project 3).
- Broad page-level motion (sub-project 4).
- Code review + refactor pass (sub-project 5).

## Verification

1. `npm run build` passes.
2. `npm run dev` boots.
3. Playwright visits `/` at 1440w desktop and 390w mobile. Screenshots saved to `docs/superpowers/artifacts/`.
4. Visual check on each:
   - Logo legible at header size.
   - Nav tracked correctly, current-page state visible on `/products`.
   - Scroll 200px → header compacts visibly.
   - Mobile: hamburger opens, staggered links animate in.
5. No console errors.

## Risks

- **Medium:** redrawing the logomark from primitives may not perfectly match the original raster look. Mitigation: user reviews a rendered screenshot before we delete legacy files.
- **Low:** framer-motion adds ~80KB gzipped, but it's already a dep and needed for sub-project 4. No action.
- **Low:** `usePathname()` requires the header to be a client component — it already is (`"use client"`).

## Success criteria

- Header feels like a premium showroom site at desktop and mobile.
- Logo visible and readable at header scale.
- Scroll compaction and entrance animation feel subtle, not flashy.
- Build passes, no visual regressions on other pages, legacy 138KB SVGs gone.
