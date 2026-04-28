# Improve /products — design spec

**Date:** 2026-04-28
**Project:** Krishna Tiles Ranchi (Next.js App Router)
**Driver:** Inventory will grow from ~40 to 300-400 SKUs across 8 brands. Today's `/products` page (two chip rows + 6-then-CTA-then-rest grid) doesn't scale, and there's no SEO surface for brand-led queries ("kajaria tiles ranchi", "jaquar bathroom fittings ranchi").
**Primary goal:** Win SEO for brand-led queries while keeping the showroom-walk-in conversion path strong.
**Secondary goal:** Make the hub usably browsable at 300-400 items.

## 1. Architecture

### Routes

| Route | Status | Purpose |
|---|---|---|
| `/products` | upgraded | Hub. All SKUs. Filter brand/category/style/finish. Sort. Render all + lazy images. |
| `/products/[brand]` × 8 | new | Static-generated SEO landing page per brand. |
| `/products/[id]` | unchanged structure; gains "More from {Brand}" link | Existing tile detail. |
| `/brands` | link target fix only | Each card now links to `/products/[brand]` (was the dead `/products?brand=X`). |

Brand slugs: `kajaria`, `somany`, `orient-bell`, `jaquar`, `cera`, `rak`, `johnson`, `nitco`. Must match `TileBrand` IDs in `tiles.ts` exactly — one-time normalisation if any drift.

### Data

**`src/data/tiles.ts` — extend `Tile` type:**
- `featured?: boolean` — boosts in default sort.
- `addedAt?: string` (ISO `YYYY-MM-DD`) — drives "Newest" sort.
- `finish?: 'matte' | 'glossy' | 'lappato' | 'textured'` — new facet.

(`brand` and `brandSourceUrl` fields already exist.)

**`src/data/brands.ts` — new file:**
```ts
export type BrandCopy = {
  id: TileBrand;
  name: string;            // already in TILE_BRAND_LABELS — reuse
  tagline: string;         // ≤ 110 chars, used in <meta description>
  intro: string;           // 60-90 words, hero adjacent
  categoryNotes: Partial<Record<TileCategory, string>>; // ≤ 25 words each
  faqs: { q: string; a: string }[]; // 4-5 entries, answer ≤ 50 words
};
export const BRAND_COPY: Record<TileBrand, BrandCopy> = { ... };
```

**No new dependencies, no API routes, no client state library, no DB.** Filter state lives in URL searchParams (already the pattern).

## 2. Hub page (/products)

### Hero
Existing eyebrow + H1 + count line stays.

Add `<BrandStrip>` below the count line: 8 small brand chips, each linking to `/products/[brand]`. Sends SEO equity to brand pages and gives a 1-tap entry point.

### Filters

**Mobile (≤ 900px):** chip rows. Order top→bottom: Brand (new), Category (existing), Style (existing).

**Desktop (> 900px):** sticky left rail (`position: sticky; top: 96px`) replaces chip rows. Sections: Brand (8 checkboxes), Category (5), Style (9), Finish (4). Each option shows live count next to label. "Clear all" link at top.

**Filter logic:**
- Multi-select within a facet is OR (`?brand=kajaria,somany` → tiles by either).
- Across facets is AND.
- All state in URL searchParams. Comma-separated values per param.
- Active-filter pills render above the grid so a user can drop one without scrolling back to the rail.
- Result count next to the pills.

### Sort
Dropdown top-right of grid. Three options: **Featured (default) / Newest / Brand A-Z**. Stored as `?sort=`.

- Featured: `featured === true` first, then curator order.
- Newest: by `addedAt` desc, items without `addedAt` last.
- Brand A-Z: by brand label, ties broken by curator order.

### Grid
Render all matching tiles in DOM. `<Image>` already lazy by default; first 6 get `priority`.

Keep the existing 6-then-mid-CTA-then-rest pattern (the mid-CTA strip is a strong walk-in driver).

Empty state stays as-is.

### Out of hub scope
No infinite scroll. No pagination. No client-side search box.

## 3. Brand landing pages (/products/[brand])

Static-generated, 8 pages, via `generateStaticParams` returning brand IDs.

### Sections (top to bottom)

1. **Breadcrumb** — Home › Products › {Brand}
2. **Hero (dark)** — Eyebrow "Brand" · H1 "{Brand} tiles in Ranchi" · 1-line tagline · "{n} designs in stock" · primary CTA "WhatsApp about {Brand}" + secondary "Visit showroom"
3. **Intro paragraph** — `intro` from `BRAND_COPY`. 60-90 words. Mentions Ranchi at least once across hero+intro.
4. **By category** — for each category the brand offers (typically 2-4 of: Living / Bath / Kitchen / Outdoor / Sanitaryware):
   - H2 "{Brand} {category} tiles" (or "{Brand} sanitaryware" for sanitaryware)
   - 1-line `categoryNote`
   - 4-8 ProductCards
   - "See all {Brand} {category} →" link → `/products?brand={id}&category={cat}`
5. **FAQ** — 4-5 Q&A from `faqs`. Wrapped in `FAQPage` JSON-LD.
6. **Cross-brand strip** — "Also explore" with 3 sibling brand chips (rotating set; deterministic per brand to avoid SSR/CSR mismatch).
7. **CTAStrip** — existing component.

### Routing
- Slug not in `TileBrand` set → `notFound()`.
- `generateMetadata`: title `"{Brand} tiles & sanitaryware in Ranchi | Krishna Tiles"`, description from `tagline`, canonical `/products/{brand}`.

### No filters on brand pages
Already pre-filtered by brand. Combine intent is handled by the per-category "See all" links landing on the hub with both facets pre-applied.

## 4. Internal linking + bug fixes

### New + corrected links

| From | To | Anchor |
|---|---|---|
| `/products` hero strip | `/products/[brand]` × 8 | brand name |
| `/products` rail (when single brand checked) | `/products/[brand]` | "View {Brand} page →" |
| `/brands` cards *(was broken)* | `/products/[brand]` | "Explore {Brand} →" |
| `/products/[brand]` category section | `/products?brand={id}&category={cat}` | "See all {Brand} {category} →" |
| `/products/[brand]` cross-brand strip | sibling `/products/[brand]` | brand name |
| `/products/[id]` | adds "More from {Brand} →" → `/products/[brand]` | "More from {Brand} →" |
| Footer Shop column *(currently broken slugs)* | rewrite — see below | category names + brand names |

### Footer rewrite

Today: links use `?category=floor|wall|bathroom|kitchen|outdoor` — these don't match the actual `TileCategory` set (`living|bath|kitchen|outdoor|sanitaryware`), so most footer links land on empty pages.

Replace with two sub-columns inside the Shop column:

- **Shop by space** — Living / Bath / Kitchen / Outdoor / Sanitaryware (5 links, real slugs).
- **Shop by brand** — 8 links → `/products/[brand]`.

### Sitemap
`src/app/sitemap.ts` exists. Add the 8 `/products/[brand]` URLs. Existing `/products/[id]` entries kept.

### Out of scope (flagged for separate pass)
Orphan link gaps: `/faq`, `/testimonials`, `/tiles-in-ranchi`, `/blog`.

## 5. SEO scaffolding

### Per-page metadata

| Page | Title | Description |
|---|---|---|
| `/products` | "The Collection — Tiles, Sanitaryware & Surfaces \| Krishna Tiles Ranchi" *(unchanged)* | unchanged |
| `/products/[brand]` | "{Brand} tiles & sanitaryware in Ranchi \| Krishna Tiles" | from `BRAND_COPY.tagline` |

Each page self-canonical.

### Structured data (JSON-LD)

- `/products` — keep existing `BreadcrumbList` + `ItemList` (capped at first 20).
- `/products/[brand]` — emit four schemas:
  - `BreadcrumbList` (Home › Products › {Brand})
  - `ItemList` (first 20 tiles, with `/products/[id]` URLs)
  - `FAQPage` (the 4-5 brand FAQs)
  - `CollectionPage` wrapping the rest (`mainEntity` → ItemList)

### Heading discipline
- One `H1` per brand page: "{Brand} tiles in Ranchi" — geo modifier baked in.
- Each category sub-section starts with `H2`.
- FAQ items use `H3`.

### Copy guardrails (in `BRAND_COPY`)
- `tagline` ≤ 110 chars.
- `intro` 60-90 words.
- `categoryNote` ≤ 25 words.
- FAQ answers ≤ 50 words each, plain language.
- **No outbound links to brand portals** (project rule — `brandSourceUrl` stays in data layer only).

### Robots / indexing
All `/products/[brand]` indexable. Filter combos (`?brand=…&category=…`) left default crawlable; no canonical override yet. If crawl-budget issues surface later, add `<link rel="canonical" href="/products" />` on filtered states.

### Out of SEO scope (later passes)
- Brand × category combo routes (`/products/kajaria/bathroom`).
- Geo landing pages (`/kajaria-tiles-in-ranchi`).
- `Product` schema per ProductCard.

## 6. Build sequence

Each step independently shippable.

1. **Data + types** — extend `tiles.ts` (`featured`, `addedAt`, `finish`); create `brands.ts` with `BRAND_COPY`. Normalise brand IDs to be route-safe slugs.
2. **Footer category-slug fix** — rewrite Footer Shop column to use real slugs (no brand sub-list yet — that lands in step 4 once brand routes exist).
3. **Brand routes** — `app/products/[brand]/page.tsx`, `generateStaticParams`, `generateMetadata`, all four JSON-LD blocks, sections 1-7 from §3. Reuse `ProductCard`, `CTAStrip`, `JsonLd`.
4. **Wire brand links** — add brand sub-list to footer; point `/brands` cards at `/products/[brand]`; add `<BrandStrip>` to hub hero; add "More from {Brand} →" to `/products/[id]`.
5. **Sitemap** — add 8 brand URLs.
6. **Hub upgrade phase A (mobile chips)** — Brand chip row, sort dropdown, finish facet support in URL parsing/filtering. Multi-value comma parsing.
7. **Hub upgrade phase B (desktop sidebar)** — new `<FilterRail>` component shown at >900px; existing chip rows hidden at >900px. Live counts, "Clear all", active-filter pills bar above grid.
8. **QA pass** — every route renders, filters AND/OR correctly, sitemap valid, no console errors, mobile + desktop screenshots, scroll perf check at 400 items.

## 7. Scope guardrails

**In scope:** everything in §1-6.

**Out of scope (explicitly):**
- Brand × category combo routes.
- Geo landing pages.
- `Product` schema per tile.
- Search box, infinite scroll, client-side state library.
- Catalogue scraping / image acquisition for the 300-400 SKUs — separate Kajaria-proof workflow already paused; resumes after this ships.
- Orphan-link work for `/faq`, `/testimonials`, `/tiles-in-ranchi`, `/blog`.

## 8. Risks

- **Brand ID drift.** `TileBrand` IDs in `tiles.ts` must match route slugs exactly (e.g. `orient-bell` not `orientbell`). One-time normalisation before step 3 — verify with a typed `generateStaticParams`.
- **Scroll perf at 400 items.** Sticky sidebar + 400 lazy-loaded images on a long page. Verify FCP/LCP and scroll FPS at full inventory before declaring step 6 done. If degraded, fall back to "Render 36 then Show more" — but the additional 364 must still SSR for crawlability.
- **Filter URL combinatorics.** Multi-select OR within facet, AND across facets, plus sort — keep URL parsing in one tested helper to avoid edge-case bugs.
- **`searchParams` is `Promise` in this Next.js version** (per existing pattern at `src/app/products/page.tsx`). Brand pages must await it the same way.
