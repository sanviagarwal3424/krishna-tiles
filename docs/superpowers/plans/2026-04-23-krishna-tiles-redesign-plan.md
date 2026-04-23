# Krishna Tiles Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: `superpowers:subagent-driven-development`. Steps use `- [ ]` checkboxes.

**Spec:** `docs/superpowers/specs/2026-04-23-krishna-tiles-redesign-design.md`
**Goal:** Redesign Homepage + `/contact` + `/products` to drive Upper Bazar showroom walk-ins (Confident Retail Showroom aesthetic).
**Approach:** Foundation serial → component batches dispatched in parallel (non-overlapping files) → page integration serial → verification.
**Tech:** Next.js 16.2.2 App Router, `globals.css` (BEM), `next/image`, Manrope + Cormorant Garamond.

---

## Phase 0 — Foundation (serial, no parallel dispatch)

### Task 0.1: Design tokens & base styles in `globals.css`

**Files:** Modify: `src/app/globals.css`

- [ ] Replace `@import` with `Cormorant Garamond (400,500)` + `Manrope (300,400,600,700,800)`
- [ ] Replace `:root` block with these additions (keep legacy vars so old pages don't break):

```css
  /* === Redesign tokens === */
  --ink: #0B0B0C;
  --surface: #151517;
  --graphite: #2A2A2C;
  --bone: #F4F2ED;
  --text-dim-on-dark: #9B9B9B;
  --text-dim-on-light: #6F6F6F;
  --accent-orange: #E8742B;
  --accent-plum: #7B4680;
  --accent-moss: #A8C93D;
  --accent-signal: #0492C5;
  --fs-hero: clamp(3rem, 8vw, 5.5rem);
  --fs-display: clamp(2rem, 4vw, 3.5rem);
  --fs-h3: clamp(1.25rem, 2vw, 1.75rem);
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-ui: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
```

- [ ] Append to end of `globals.css`:

```css
/* ===== Redesign — Shared Primitives ===== */
.rd-eyebrow { font-family: var(--font-ui); font-weight: 700; font-size: 11px;
  letter-spacing: 0.3em; text-transform: uppercase; color: var(--accent-orange); }
.rd-display { font-family: var(--font-display); font-weight: 400;
  font-size: var(--fs-display); line-height: 1.1; letter-spacing: -0.02em; }
.rd-h3 { font-family: var(--font-display); font-weight: 400;
  font-size: var(--fs-h3); line-height: 1.15; letter-spacing: -0.015em; }
.rd-body { font-family: var(--font-ui); font-weight: 300; font-size: 16px; line-height: 1.6; }

.rd-section { padding: clamp(64px, 10vw, 120px) 24px; }
.rd-section--dark { background: var(--ink); color: var(--bone); }
.rd-section--light { background: var(--bone); color: var(--ink); }
.rd-container { max-width: 1280px; margin: 0 auto; }

/* CTA — Bone & Ink */
.rd-btn { display: inline-block; padding: 14px 28px; font-family: var(--font-ui);
  font-weight: 700; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
  cursor: pointer; border: none; transition: all 220ms ease; text-decoration: none; }
.rd-btn--primary-on-dark  { background: var(--bone); color: var(--ink); }
.rd-btn--primary-on-dark:hover  { background: var(--accent-orange); color: var(--ink); }
.rd-btn--secondary-on-dark { background: transparent; color: var(--bone); border: 1px solid var(--bone); }
.rd-btn--secondary-on-dark:hover { background: var(--bone); color: var(--ink); }
.rd-btn--primary-on-light { background: var(--ink); color: var(--bone); }
.rd-btn--primary-on-light:hover { background: var(--accent-orange); color: var(--ink); }
.rd-btn--secondary-on-light { background: transparent; color: var(--ink); border: 1px solid var(--ink); }
.rd-btn--secondary-on-light:hover { background: var(--ink); color: var(--bone); }

@media (prefers-reduced-motion: reduce) {
  .rd-btn, .rd-btn * { transition: none !important; }
}
```

- [ ] Commit: `feat(redesign): add design tokens + shared primitives`

### Task 0.2: Tile data layer — `src/data/tiles.ts`

**Files:** Create: `src/data/tiles.ts`

- [ ] Create the file with 24 entries (6 `featured:true`). Types exactly as spec §4.5. Use Unsplash placeholder URLs. Spread across categories: 6 living, 5 bath, 5 kitchen, 4 outdoor, 4 sanitaryware.
- [ ] Required helpers: `featuredTiles()`, `tilesByCategory()`, `getTileById()`
- [ ] Commit: `feat(redesign): add tiles data layer`

---

## Phase 1 — Parallel Component Batch A (dispatch 4 subagents in parallel)

All tasks in this phase touch ONLY their own files. Safe to parallelize.

### Task 1A: InteractiveHero family

**Files:** Create `src/components/hero/InteractiveHero.tsx`, `src/components/hero/TileWall.tsx`, `src/components/hero/TileDetailPanel.tsx`. Append hero CSS to `globals.css` inside a `/* === InteractiveHero === */` block.

Spec sections: §3 (Interactive Hero). Mobile = stacked, no sticky. Desktop = 200vh wrapper + sticky stage, scrollProgress state machine (0–30 Landed, 30–70 Transitioning, 70–100 Interactive). Uses `tiles.ts` (first 24 entries, grid 6×4 desktop / 3×4 mobile). Uses `/images/logo.png` with plain `<img>`. Respects `prefers-reduced-motion`.

### Task 1B: ShowroomTeaser

**Files:** Create `src/components/ShowroomTeaser.tsx`. Append `/* === ShowroomTeaser === */` CSS block to `globals.css`.

Full-bleed horizontal photo (Unsplash placeholder), overlay with eyebrow "The Showroom", `rd-display` headline "Step inside — 4,200 sq ft", subtitle "Upper Bazar, Ranchi · Mon–Sat · 10 AM – 8 PM", primary CTA "Visit Showroom" → `/contact`, secondary "Call {business.phoneDisplay}".

### Task 1C: FilterBar + ShowroomPreview

**Files:** Create `src/components/products/FilterBar.tsx` (uses `'use client'`, `useSearchParams`, `useRouter`). Create `src/components/contact/ShowroomPreview.tsx` (4-image grid, Unsplash placeholders). Append two CSS blocks to `globals.css`.

FilterBar chips: All · Living · Bath · Kitchen · Outdoor · Sanitaryware. Active chip = ink fill on bone. URL-synced `?category=<slug>`.

### Task 1D: CTAStrip rewrite + ProductCard rewrite

**Files:** Rewrite `src/components/CTAStrip.tsx` (props: `variant?: 'home'|'contact'|'products'`, default `'home'`). Rewrite `src/components/ProductCard.tsx` (props: takes a `Tile`, shows image + name + size, hover "See in Showroom" → `/contact`). Append CSS blocks.

CTAStrip variants:
- `home`: "Visit our Upper Bazar showroom" + phone + WhatsApp + Directions buttons
- `contact`: "Call now — we're open" + phone + WhatsApp
- `products`: "See every tile in our showroom" + phone + Directions

---

## Phase 2 — Parallel Restyle Batch B (dispatch 3 subagents in parallel)

### Task 2A: Header + Footer restyle

**Files:** Modify `src/components/Header.tsx` (dark sticky, Manrope, logo + small WhatsApp icon), `src/components/Footer.tsx` (dark, 3-column Shop/Visit/Contact). Rewrite their CSS inline or in `globals.css` (whatever convention they currently use).

### Task 2B: FloatingButtons + TestimonialCard + TrustSection restyles

**Files:** Modify `src/components/FloatingButtons.tsx`, `src/components/TestimonialCard.tsx`, `src/components/TrustSection.tsx`. CSS-only updates to match new palette (bone/ink/orange accent). Serif quote on TestimonialCard. Keep existing component logic.

### Task 2C: EnquiryForm + HeroSection wrapper

**Files:** Modify `src/components/EnquiryForm.tsx` (Bone & Ink inputs, add Room Interest dropdown with 7 options per spec §2.2.5). Rewrite `src/components/HeroSection.tsx` as a 3-line wrapper: imports InteractiveHero and renders it. Keep existing export signature so `page.tsx` doesn't break.

---

## Phase 3 — Page Integration (serial)

### Task 3A: Homepage `/`

**Files:** Modify `src/app/page.tsx` — restructure section order per spec §2.1 (InteractiveHero → StatsBar → Shop by Space → Featured Collection → ShowroomTeaser → Real Installations → Brands → Testimonials → Trust → CTAStrip). Featured Collection uses `featuredTiles()`. Shop by Space cards link to `/products?category=<slug>`.

### Task 3B: `/contact`

**Files:** Modify `src/app/contact/page.tsx` — structure per spec §2.2 (PageHero → VisitInfo → DirectionsMap → ShowroomPreview → EnquiryForm → CTAStrip variant=contact). Ensure `export const metadata`.

### Task 3C: `/products`

**Files:** Modify `src/app/products/page.tsx` — structure per spec §2.3 (PageHero → FilterBar → TileGrid with MidPageCTA after 6th card → CTAStrip variant=products). Read `searchParams.category` on server, filter tiles, render grid. Ensure `export const metadata`.

---

## Phase 4 — Verification (serial)

- [ ] `bun run build` — must compile with zero errors
- [ ] Dev server: `bun run dev`, browse `/`, `/contact`, `/products` via Playwright
- [ ] Playwright screenshots: desktop 1440×900 + mobile 390×844 on each page
- [ ] Keyboard run: Tab through hero, panel opens with Enter, ESC closes
- [ ] Confirm `prefers-reduced-motion` honored (state machine falls back to 50% jump)
- [ ] Final commit + push decision deferred to user

---

## Rules for every subagent

- Follow the CSS naming convention already used in the codebase (BEM-style, `rd-` prefix for redesign primitives).
- Never break existing out-of-scope pages (`/about`, `/blog`, `/faq`, `/gallery`, `/brands`, `/testimonials`, `/tiles-in-ranchi`). Keep their imports stable.
- Respect `prefers-reduced-motion` anywhere you add transitions.
- Respect CLAUDE.md: no emojis in code, no unnecessary comments, functional components only, `next/image` for photos (except the hero logo — plain `<img>` per spec).
- Commit your work before finishing. Use imperative commit messages like `feat(hero): add InteractiveHero component`.
