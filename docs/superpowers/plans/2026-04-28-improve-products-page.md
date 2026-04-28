# Improve /products Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 8 static brand SEO landing pages under `/products/[brand]`, upgrade the `/products` hub for 300-400 SKUs (brand row + desktop sidebar + sort + finish facet), and fix two existing routing bugs (footer slugs, `/brands` card href).

**Architecture:** Pure SSG / RSC Next.js App Router. No new dependencies. All filter state in URL searchParams. Brand SEO copy in `src/data/brands.ts` (extends existing `Brand` type). Reuses `ProductCard`, `JsonLd`, `CTAStrip`. New components: `<BrandStrip>` (hub hero), `<FilterRail>` (desktop sidebar), `<ActiveFilterPills>`, `<SortDropdown>`.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind (none used — project uses CSS variables in `globals.css`), no test framework (verification via `npx tsc --noEmit`, `npm run lint`, dev-server browser checks with sandboxed Playwright MCP).

**Verification convention (no test framework in repo):**
- After every code task: `npx tsc --noEmit` must pass; `npm run lint` must pass.
- After QA-relevant tasks: `npm run dev`, navigate with sandboxed Playwright (memory rule: pass `isolated: true`), verify the route renders + filters route correctly + no console errors.
- Commit after each task.

**Conventions used in this codebase:**
- `searchParams` is a `Promise` — must `await` (see `src/app/products/page.tsx:71-72`).
- Class names use existing `rd-*` redesign tokens (e.g. `rd-section`, `rd-container`, `rd-display`, `rd-eyebrow`, `rd-body`, `rd-h3`, `rd-btn--primary-on-light`). Do not invent new utility classes — extend `globals.css` with focused selectors.
- Brand IDs are `kajaria | somany | orientbell | jaquar | cera | rak | johnson | nitco` (no hyphen on `orientbell`). Use these exact strings as route slugs — no normalisation needed.

---

## Task 1: Extend `Tile` type with `addedAt` + `finish`

**Files:**
- Modify: `src/data/tiles.ts:27-41` (`Tile` type), `src/data/tiles.ts:43-54` (add `TileFinish` type + labels), every tile entry to set defaults

- [ ] **Step 1: Add `TileFinish` type + labels above `Tile`**

In `src/data/tiles.ts`, after the `TileSurface` line (line 15), add:

```ts
export type TileFinish = 'matte' | 'glossy' | 'lappato' | 'textured';

export const TILE_FINISH_LABELS: Record<TileFinish, string> = {
  matte: 'Matte',
  glossy: 'Glossy',
  lappato: 'Lappato',
  textured: 'Textured',
};
```

- [ ] **Step 2: Add `addedAt` and `finish` to `Tile` type**

Edit the `Tile` type (currently lines 27-41) so it ends with:

```ts
export type Tile = {
  id: string;
  name: string;
  size: string;
  material: string;
  category: TileCategory;
  image: string;
  tint?: 'orange' | 'purple' | 'green' | 'black' | 'gray' | 'blue';
  description: string;
  featured?: boolean;
  surface?: TileSurface;
  styles?: TileStyle[];
  brand?: TileBrand;
  brandSourceUrl?: string;
  finish?: TileFinish;
  addedAt?: string; // ISO YYYY-MM-DD
};
```

(Both new fields optional — no need to backfill existing 40 entries.)

- [ ] **Step 3: Type check**

Run: `cd /Users/sanviagarwal/cc && npx tsc --noEmit`
Expected: passes (new fields are optional; nothing else needs updating).

- [ ] **Step 4: Commit**

```bash
cd /Users/sanviagarwal/cc
git add src/data/tiles.ts
git commit -m "feat(tiles): add finish + addedAt fields to Tile type"
```

---

## Task 2: Extend `Brand` type + populate SEO copy

**Files:**
- Modify: `src/data/brands.ts` (extend interface + entries)

- [ ] **Step 1: Replace the `Brand` interface**

Open `src/data/brands.ts`. Replace the existing `Brand` interface (lines 1-8) with:

```ts
import type { TileBrand, TileCategory } from "./tiles";

export type BrandFaq = { q: string; a: string };

export interface Brand {
  id: TileBrand;
  name: string;
  tagline: string;       // ≤ 110 chars — used for <meta description>
  description: string;   // legacy short blurb (kept; still used on /brands cards)
  categories: string[];  // legacy display tags (kept)
  priceRange: string;    // legacy
  intro: string;         // 60-90 words for the brand landing hero adjacent
  categoryNotes: Partial<Record<TileCategory, string>>; // ≤ 25 words each
  faqs: BrandFaq[];      // 4-5 entries, answer ≤ 50 words
}
```

- [ ] **Step 2: Add `intro` + `categoryNotes` + `faqs` to all 8 brand entries**

Replace the entire `brands` array (lines 10-75) with the version below. The existing fields are preserved; the three new fields are added per brand.

```ts
export const brands: Brand[] = [
  {
    id: "kajaria",
    name: "Kajaria",
    tagline: "India's No.1 tile brand — the everyday workhorse for Ranchi homes.",
    description:
      "India's largest tile manufacturer with 40+ years of excellence. Known for cutting-edge designs, premium vitrified tiles, and unmatched quality consistency.",
    categories: ["Floor Tiles", "Wall Tiles", "Outdoor"],
    priceRange: "₹45 – ₹200/sq.ft",
    intro:
      "Krishna Tiles has been an authorised Kajaria dealer in Ranchi for over a decade. We carry their full GVT, polished, and double-charge ranges — from everyday floor tiles to the Eternity premium series. Walk into our Upper Bazar showroom and see large-format pieces laid out in real lighting before you commit. Genuine, warranty-backed, and stocked locally so jobs don't wait on Delhi shipments.",
    categoryNotes: {
      living: "Marble-look GVT and large-format vitrified — Kajaria's strongest category.",
      bath: "Anti-skid, PEI-4 rated wall and floor tiles built for Indian bathrooms.",
      kitchen: "Stain-resistant glazed tiles in compact 300×600 and 600×600 sizes.",
      outdoor: "Heavy-duty rustic and stone-look porcelain rated for Ranchi monsoons.",
    },
    faqs: [
      { q: "What's the price range for Kajaria tiles in Ranchi?", a: "Standard GVT starts around ₹45/sq.ft. Premium Eternity and large-format pieces go up to ₹200/sq.ft. We'll quote on WhatsApp once you share the size and area." },
      { q: "Do Kajaria tiles come with warranty?", a: "Yes. All Kajaria tiles sold through Krishna Tiles carry the manufacturer warranty against defects. We're an authorised dealer — bills, batch matching, and warranty claims are handled directly." },
      { q: "Can I see Kajaria tiles installed before buying?", a: "Yes — our Upper Bazar showroom has full panels of the most popular Kajaria series laid out so you can judge colour, finish, and grout pattern under real lighting." },
      { q: "What sizes does Kajaria offer?", a: "From 300×300 (kitchen) up to 800×1600 large-format slabs. The most popular living-room size in Ranchi is 600×1200 GVT." },
    ],
  },
  {
    id: "somany",
    name: "Somany",
    tagline: "Living-by-design tiles with one of the widest digital print catalogues in India.",
    description:
      "One of India's leading ceramic companies. Somany is known for its wide range of digital tiles, polished vitrified tiles, and eco-friendly products.",
    categories: ["Floor Tiles", "Wall Tiles", "Bathroom"],
    priceRange: "₹40 – ₹160/sq.ft",
    intro:
      "Somany is the design-forward choice when you want pattern variety beyond the standard marble-look. Krishna Tiles stocks their Slimtech thin-bodies, Duragres double-charge floors, and a rotating set of digital prints. If you're remodelling and want a specific motif — geometric, terrazzo, terracotta — Somany is usually where we start the search.",
    categoryNotes: {
      living: "Digital-print GVT with a deeper catalogue of patterns than most Indian brands.",
      bath: "Glazed wall tiles in 300×450 and 300×600 — strong design variety.",
      kitchen: "Subway, hex, and patterned ceramics for backsplashes.",
    },
    faqs: [
      { q: "How does Somany compare to Kajaria?", a: "Both are top-tier Indian brands. Somany leans more design-forward (more patterns, finishes); Kajaria is broader on workhorse plain colours. Pricing is comparable — within ₹10/sq.ft on most overlapping SKUs." },
      { q: "Is Somany Slimtech worth the premium?", a: "If you're tiling over an existing surface or care about lighter loads, yes — it's 30-40% thinner with the same wear rating. Otherwise the standard double-charge gives better value per sq.ft." },
      { q: "What's the warranty on Somany tiles?", a: "Manufacturer warranty against defects, honoured at our showroom. We retain batch numbers so future top-up orders match shade." },
      { q: "Can Somany tiles be used outdoors?", a: "Their R11-rated rustic series, yes. The standard glazed range is for interior use only — we'll point out which is which when you visit." },
    ],
  },
  {
    id: "orientbell",
    name: "Orient Bell",
    tagline: "Trusted Indian range from affordable ceramics to premium GVT — strong design depth.",
    description:
      "A trusted name in the Indian tile industry, Orient Bell offers a comprehensive range from affordable ceramics to premium GVT tiles, with strong design innovation.",
    categories: ["Floor Tiles", "Wall Tiles", "Outdoor"],
    priceRange: "₹35 – ₹120/sq.ft",
    intro:
      "Orient Bell is our strongest mid-range pick. Their Inspire and Forever ranges give you premium GVT looks at sub-Kajaria pricing — useful when you're tiling a large area or working to a budget without dropping to base ceramics. Krishna Tiles carries the full design catalogue at the showroom.",
    categoryNotes: {
      living: "Wood-look and stone-look GVT in 600×1200 — best mid-range value.",
      bath: "Patterned wall tiles with anti-skid floor pairings already coordinated.",
      outdoor: "Rustic and gritty surfaces rated for high-traffic balconies and yards.",
    },
    faqs: [
      { q: "Why pick Orient Bell over Kajaria or Somany?", a: "Price-to-design ratio. You get GVT-quality finishes 15-25% cheaper than the top tier. Worth comparing samples side-by-side at the showroom before deciding." },
      { q: "Does Orient Bell make sanitaryware?", a: "Tiles only. For sanitaryware we'd recommend pairing Orient Bell tiles with Cera or Jaquar fittings." },
      { q: "Are Orient Bell wood-look tiles convincing?", a: "The Inspire Wood range is — in 200×1200 plank format with light grout it reads as engineered wood from a metre away. We have it laid at the showroom." },
      { q: "Lead time on Orient Bell stock?", a: "Most popular SKUs are stocked locally. Less common designs typically arrive within 7-10 days from the depot." },
    ],
  },
  {
    id: "jaquar",
    name: "Jaquar",
    tagline: "India's premium sanitaryware brand — luxury bath fittings, wellness, and complete shower systems.",
    description:
      "India's premium sanitaryware and bath fittings brand. Jaquar products are synonymous with luxury, durability, and sophisticated design for modern bathrooms.",
    categories: ["Sanitaryware", "Bath Fittings", "Shower Systems"],
    priceRange: "₹3,000 – ₹80,000",
    intro:
      "Jaquar is the brand to specify when the bathroom is the centrepiece of the build. Krishna Tiles carries their Continental, Solo, and Artize ranges — single-lever mixers, thermostatic showers, complete WC suites, and the wellness rain-shower systems. Authorised dealer for Ranchi: warranty and AMC handled locally.",
    categoryNotes: {
      sanitaryware: "Complete suites — WC, basin, urinal — with matched faucet sets.",
      bath: "Premium tap, mixer, and shower systems including thermostatic.",
    },
    faqs: [
      { q: "What's a realistic Jaquar bathroom budget?", a: "A complete Jaquar bathroom (WC, basin, faucet set, shower mixer) starts around ₹35,000 for entry tier and ₹1.2-2L for the Artize line. Walk in for a printed quote." },
      { q: "Does Jaquar offer thermostatic showers?", a: "Yes — the Solo Thermostat and Continental Thermostat lines. Worth it if your water-heater pressure varies; we keep working samples at the showroom." },
      { q: "Where can I see Jaquar fittings in Ranchi?", a: "Our Upper Bazar showroom has functional Jaquar bathroom mock-ups — running water, working faucets — so you can feel the action before buying." },
      { q: "What's the warranty on Jaquar products?", a: "10 years on faucets and 25 years on ceramics, manufacturer-backed. We handle warranty claims locally — bring the bill." },
    ],
  },
  {
    id: "cera",
    name: "Cera",
    tagline: "Beautiful spaces, better value — sanitaryware, faucets, and tiles in one catalogue.",
    description:
      "A diversified brand offering sanitaryware, faucets, tiles, and wellness products. Known for value-for-money products without compromising on quality.",
    categories: ["Sanitaryware", "Bathroom Tiles", "Faucets"],
    priceRange: "₹30 – ₹100/sq.ft",
    intro:
      "Cera covers the whole bathroom in one purchase order — sanitaryware, faucets, and bathroom tiles. Krishna Tiles uses Cera for builder projects in Ranchi where you need a coordinated suite at a reasonable budget. Quality is solid; the design language is calmer than Jaquar but more affordable.",
    categoryNotes: {
      sanitaryware: "Senator and Aspire suites — full WC, basin, faucet sets.",
      bath: "Affordable single-lever mixers and shower roses.",
    },
    faqs: [
      { q: "How does Cera compare to Jaquar?", a: "Cera is roughly 30-40% cheaper across most matching SKUs. Quality is dependable; the design vocabulary is more conservative. Pick Cera for value, Jaquar for statement bathrooms." },
      { q: "Does Cera offer wellness products?", a: "Yes — bathtubs, steam cubicles, and wellness panels. Lead time is longer (2-3 weeks); confirm sizes with us before booking." },
      { q: "Are Cera tiles worth considering?", a: "For bathroom walls and floors specifically, yes — they coordinate with Cera sanitaryware out of the box. For living rooms we'd push Kajaria or Somany." },
      { q: "What warranty does Cera give?", a: "10 years on ceramics, 7 years on faucets. We process warranty claims at the showroom." },
    ],
  },
  {
    id: "rak",
    name: "RAK Ceramics",
    tagline: "Global premium ceramics — large-format tiles used in luxury hotels and residences.",
    description:
      "A global ceramics giant based in UAE, RAK Ceramics offers ultra-premium large-format tiles used in luxury hotels and residences worldwide.",
    categories: ["Floor Tiles", "Wall Tiles", "Large Format"],
    priceRange: "₹80 – ₹250/sq.ft",
    intro:
      "RAK Ceramics is the international name in our brand list. UAE-headquartered, used in five-star hotels and high-end residences worldwide. Krishna Tiles brings in their Maximus large-format slabs and the Lounge stone-look series — best for villas, hospitality interiors, or any project where the tile becomes the architecture.",
    categoryNotes: {
      living: "Maximus 1200×2400 large-format slabs — book-matched marble looks.",
      outdoor: "R11 anti-slip stone-look porcelain for pool surrounds and patios.",
    },
    faqs: [
      { q: "Why is RAK Ceramics more expensive?", a: "International manufacturing, larger formats (up to 1200×2400), and the design library used by global hospitality projects. The premium lands on finish quality and shade consistency batch-to-batch." },
      { q: "Are RAK large slabs hard to install?", a: "Yes — they need an experienced installer with vacuum lifters. We can recommend Ranchi installers familiar with the format." },
      { q: "Stock or order-in for RAK?", a: "Top-running SKUs stocked. Specific large-format slabs are typically ordered with 10-14 day lead time. Worth ordering an early sample." },
      { q: "Where would I use RAK in a typical home?", a: "Living-room floors, feature walls behind the TV, vanity tops, and pool decks. For everyday bath/kitchen tiles the Indian brands give better value." },
    ],
  },
  {
    id: "johnson",
    name: "Johnson Tiles",
    tagline: "One of India's oldest tile brands — broad catalogue, dependable everyday quality.",
    description:
      "A flagship brand of H&R Johnson, one of India's oldest and most trusted ceramic tile companies, known for consistent quality and wide distribution.",
    categories: ["Floor Tiles", "Wall Tiles", "Kitchen"],
    priceRange: "₹30 – ₹90/sq.ft",
    intro:
      "Johnson Tiles is the workhorse end of our catalogue — H&R Johnson has been making tiles in India since 1958. Krishna Tiles carries their Endura wear-rated range and the Marbonite double-charge series. Reliable for builder projects, rental refurbishments, and budget-led residential work where you want known-good quality without the premium-brand markup.",
    categoryNotes: {
      living: "Marbonite double-charge in popular 600×600 and 600×1200 sizes.",
      kitchen: "Endura wear-rated tiles for high-traffic kitchen floors.",
      outdoor: "Heavy-traffic rustic floors for parking and exterior corridors.",
    },
    faqs: [
      { q: "Why pick Johnson over the cheaper unbranded options?", a: "Batch-matching, warranty, and shade consistency. With Johnson you can re-order the same SKU in 6 months and the new lot will match. Unbranded ceramics rarely give that." },
      { q: "What's Endura?", a: "Johnson's industrial wear-rated range — PEI-4 to PEI-5 — built for high-traffic areas like commercial kitchens, schools, and retail floors. Slightly textured anti-slip surface." },
      { q: "Does Johnson make wall tiles?", a: "Yes — full glazed wall range in 300×450 and 300×600. Strong design variety; reliable adhesion." },
      { q: "Lead time on Johnson stock?", a: "Common sizes carried locally. Specific designs from the H&R Johnson catalogue typically arrive in 5-7 days." },
    ],
  },
  {
    id: "nitco",
    name: "Nitco",
    tagline: "Italian-inspired marble and natural-stone collections at accessible Indian prices.",
    description:
      "Known for natural stone, marble, and premium tile collections. Nitco brings Italian design sensibilities to Indian homes at accessible price points.",
    categories: ["Floor Tiles", "Marble Tiles", "Natural Stone"],
    priceRange: "₹50 – ₹180/sq.ft",
    intro:
      "Nitco is our pick when you want the look of imported Italian marble without the imported price tag. Their Italica Statuario and Naturoc series are the headline ranges at Krishna Tiles — book-matched marble veining, polished finishes, and natural-stone replicas that read convincingly underfoot.",
    categoryNotes: {
      living: "Italica polished marble-look in large 800×1600 — premium living-room floors.",
      outdoor: "Naturoc stone-look textured porcelain for terraces and yards.",
    },
    faqs: [
      { q: "Are Nitco tiles real marble?", a: "No — they're glazed porcelain with high-resolution marble prints and book-matched layouts. They give the visual of natural marble with porcelain's durability and easier maintenance." },
      { q: "How does Nitco compare to RAK on large-format?", a: "RAK goes larger and more international; Nitco is closer to the Indian price point with strong marble-look execution. Compare both at the showroom — they suit different rooms." },
      { q: "What sizes does Nitco offer?", a: "From 600×600 up to 800×1600 large-format. The 800×1600 polished is the top-selling living-room size in Ranchi this year." },
      { q: "Is Nitco worth the price over Orient Bell?", a: "If you specifically want the Italian marble aesthetic — yes. For neutral mid-range floors Orient Bell gives more design variety per rupee." },
    ],
  },
];
```

- [ ] **Step 3: Type check + lint**

Run: `cd /Users/sanviagarwal/cc && npx tsc --noEmit && npm run lint`
Expected: both pass.

- [ ] **Step 4: Commit**

```bash
cd /Users/sanviagarwal/cc
git add src/data/brands.ts
git commit -m "feat(brands): add intro/categoryNotes/faqs SEO copy fields"
```

---

## Task 3: Footer slug fix

**Files:**
- Modify: `src/components/Footer.tsx:9-18` (Shop column)

- [ ] **Step 1: Replace the Shop column links**

Edit `src/components/Footer.tsx`. Replace the Shop column (currently lines 8-18) with:

```tsx
<div className="footer-redesigned__col">
  <h3>Shop by space</h3>
  <Link href="/products">All Products</Link>
  <Link href="/products?category=living">Living Room Tiles</Link>
  <Link href="/products?category=bath">Bathroom Tiles</Link>
  <Link href="/products?category=kitchen">Kitchen Tiles</Link>
  <Link href="/products?category=outdoor">Outdoor Tiles</Link>
  <Link href="/products?category=sanitaryware">Sanitaryware</Link>
  <Link href="/brands">All Brands</Link>
</div>
```

(Brand sub-list is added later in Task 5 once brand routes exist.)

- [ ] **Step 2: Type check + lint**

Run: `cd /Users/sanviagarwal/cc && npx tsc --noEmit && npm run lint`
Expected: both pass.

- [ ] **Step 3: Manual verify**

Run `npm run dev`. Open http://localhost:3000 — scroll to footer. Click each Shop link. Verify each lands on a populated `/products` filter (not an empty state). Specifically:
- "Living Room Tiles" → grid shows the 6 living tiles
- "Bathroom Tiles" → grid shows the bath tiles (was previously empty)
- "Kitchen Tiles" → grid shows kitchen tiles (was previously empty)

Stop dev server.

- [ ] **Step 4: Commit**

```bash
cd /Users/sanviagarwal/cc
git add src/components/Footer.tsx
git commit -m "fix(footer): use real category slugs (was floor/wall/bathroom)"
```

---

## Task 4: Brand landing page — `/products/[brand]`

**Files:**
- Create: `src/app/products/[brand]/page.tsx`
- Modify: `src/app/globals.css` (add brand-page selectors at the bottom)

- [ ] **Step 1: Create the page file**

Create `src/app/products/[brand]/page.tsx` with the following content:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import CTAStrip from "@/components/CTAStrip";
import JsonLd from "@/components/JsonLd";
import { tiles, TILE_BRAND_LABELS, type TileBrand, type TileCategory } from "@/data/tiles";
import { brands } from "@/data/brands";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";

const SITE_URL = "https://krishnatiles.com";

const BRAND_IDS: TileBrand[] = [
  "kajaria", "somany", "orientbell", "jaquar", "cera", "rak", "johnson", "nitco",
];

const CATEGORY_LABEL: Record<TileCategory, string> = {
  living: "Living room",
  bath: "Bathroom",
  kitchen: "Kitchen",
  outdoor: "Outdoor",
  sanitaryware: "Sanitaryware",
};

function isBrand(slug: string): slug is TileBrand {
  return (BRAND_IDS as string[]).includes(slug);
}

export function generateStaticParams() {
  return BRAND_IDS.map((brand) => ({ brand }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ brand: string }> }
): Promise<Metadata> {
  const { brand: slug } = await params;
  if (!isBrand(slug)) return {};
  const brand = brands.find((b) => b.id === slug)!;
  const title = `${brand.name} tiles & sanitaryware in Ranchi | Krishna Tiles`;
  return {
    title,
    description: brand.tagline,
    alternates: { canonical: `/products/${slug}` },
    openGraph: { title, description: brand.tagline, url: `${SITE_URL}/products/${slug}` },
  };
}

export default async function BrandPage(
  { params }: { params: Promise<{ brand: string }> }
) {
  const { brand: slug } = await params;
  if (!isBrand(slug)) notFound();
  const brand = brands.find((b) => b.id === slug)!;
  const brandTiles = tiles.filter((t) => t.brand === slug);

  const categoriesPresent: TileCategory[] = (
    ["living", "bath", "kitchen", "outdoor", "sanitaryware"] as TileCategory[]
  ).filter((c) => brandTiles.some((t) => t.category === c));

  const siblings = BRAND_IDS.filter((b) => b !== slug);
  const crossBrandPicks = [siblings[0], siblings[1], siblings[2]].filter(Boolean);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: brand.name, item: `${SITE_URL}/products/${slug}` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: brandTiles.slice(0, 20).map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/products/${t.id}`,
      name: t.name,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: brand.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${brand.name} tiles in Ranchi`,
    url: `${SITE_URL}/products/${slug}`,
    description: brand.tagline,
    mainEntity: itemListSchema,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={collectionSchema} />

      <nav aria-label="Breadcrumb" className="brand-page__crumbs">
        <div className="rd-container">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/products">Products</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">{brand.name}</span>
        </div>
      </nav>

      <section className="rd-section rd-section--dark brand-page__hero">
        <div className="rd-container">
          <p className="rd-eyebrow">Brand</p>
          <h1 className="rd-display" style={{ color: "#ffffff", marginTop: 12 }}>
            {brand.name} tiles in Ranchi
          </h1>
          <p className="rd-body brand-page__tagline">{brand.tagline}</p>
          <p className="brand-page__count">
            {brandTiles.length} {brandTiles.length === 1 ? "design" : "designs"} in stock at the Upper Bazar showroom.
          </p>
          <div className="brand-page__hero-ctas">
            <a
              href={getWhatsAppLink(`Hi Krishna Tiles, I'd like to know more about ${brand.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rd-btn rd-btn--primary-on-dark"
            >
              WhatsApp about {brand.name}
            </a>
            <a href={getCallLink()} className="rd-btn rd-btn--secondary-on-dark">
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--light brand-page__intro">
        <div className="rd-container">
          <p className="rd-body">{brand.intro}</p>
        </div>
      </section>

      {categoriesPresent.map((cat) => {
        const inCat = brandTiles.filter((t) => t.category === cat).slice(0, 8);
        const note = brand.categoryNotes[cat];
        const heading = cat === "sanitaryware"
          ? `${brand.name} sanitaryware`
          : `${brand.name} ${CATEGORY_LABEL[cat].toLowerCase()} tiles`;
        return (
          <section key={cat} className="rd-section rd-section--light brand-page__category">
            <div className="rd-container">
              <h2 className="rd-h3">{heading}</h2>
              {note && <p className="rd-body brand-page__cat-note">{note}</p>}
              <div className="products-grid-rd">
                {inCat.map((t, i) => (
                  <ProductCard key={t.id} tile={t} priority={i < 3} />
                ))}
              </div>
              <div className="brand-page__cat-link">
                <Link href={`/products?brand=${slug}&category=${cat}`} className="rd-btn rd-btn--secondary-on-light">
                  See all {brand.name} {heading.replace(`${brand.name} `, "").toLowerCase()} →
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <section className="rd-section rd-section--light brand-page__faq">
        <div className="rd-container">
          <p className="rd-eyebrow">FAQs</p>
          <h2 className="rd-h3" style={{ marginTop: 12 }}>
            About {brand.name} at Krishna Tiles
          </h2>
          <div className="brand-page__faq-list">
            {brand.faqs.map((f) => (
              <details key={f.q} className="brand-page__faq-item">
                <summary><h3>{f.q}</h3></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--light brand-page__cross">
        <div className="rd-container">
          <p className="rd-eyebrow">Also explore</p>
          <div className="brand-page__cross-list">
            {crossBrandPicks.map((b) => (
              <Link key={b} href={`/products/${b}`} className="rd-btn rd-btn--secondary-on-light">
                {TILE_BRAND_LABELS[b]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
```

- [ ] **Step 2: Add brand-page CSS**

Append to `src/app/globals.css` (at the end of the file):

```css
/* ---- /products/[brand] landing pages ---- */
.brand-page__crumbs { padding: 16px 0; background: #faf9f6; font-size: 14px; color: #5a5a5a; }
.brand-page__crumbs .rd-container { display: flex; gap: 8px; align-items: center; }
.brand-page__crumbs a { color: inherit; text-decoration: none; }
.brand-page__crumbs a:hover { text-decoration: underline; }
.brand-page__crumbs span[aria-current] { color: #1a1a1a; font-weight: 500; }

.brand-page__hero { padding-top: 64px; padding-bottom: 64px; }
.brand-page__tagline { color: rgba(255,255,255,0.85); margin-top: 16px; max-width: 720px; }
.brand-page__count { color: rgba(255,255,255,0.7); margin-top: 12px; font-size: 14px; }
.brand-page__hero-ctas { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }

.brand-page__intro { padding-top: 48px; padding-bottom: 16px; }
.brand-page__intro .rd-body { max-width: 720px; }

.brand-page__category { padding-top: 32px; padding-bottom: 32px; }
.brand-page__cat-note { margin-top: 8px; color: #5a5a5a; max-width: 640px; }
.brand-page__cat-link { margin-top: 24px; }

.brand-page__faq { padding-top: 48px; padding-bottom: 48px; }
.brand-page__faq-list { margin-top: 24px; max-width: 720px; }
.brand-page__faq-item { border-bottom: 1px solid #e5e2dc; padding: 16px 0; }
.brand-page__faq-item summary { cursor: pointer; list-style: none; }
.brand-page__faq-item summary::-webkit-details-marker { display: none; }
.brand-page__faq-item summary h3 { display: inline; font-size: 17px; font-weight: 500; }
.brand-page__faq-item p { margin-top: 12px; color: #4a4a4a; line-height: 1.6; }

.brand-page__cross { padding-top: 32px; padding-bottom: 64px; }
.brand-page__cross-list { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 16px; }
```

- [ ] **Step 3: Type check + lint + build**

```bash
cd /Users/sanviagarwal/cc
npx tsc --noEmit && npm run lint && npm run build
```
Expected: all pass. The build step matters here — it executes `generateStaticParams` and surfaces any RSC-incompatible code.

- [ ] **Step 4: Manual verify each brand page**

`npm run dev`. Visit each:
- http://localhost:3000/products/kajaria
- http://localhost:3000/products/somany
- http://localhost:3000/products/orientbell
- http://localhost:3000/products/jaquar
- http://localhost:3000/products/cera
- http://localhost:3000/products/rak
- http://localhost:3000/products/johnson
- http://localhost:3000/products/nitco

For each: hero renders, intro paragraph present, at least one category section with tile cards, FAQ accordion expands, cross-brand chips appear at bottom. Bad slug like `/products/foo` returns 404. Stop dev server.

- [ ] **Step 5: Commit**

```bash
cd /Users/sanviagarwal/cc
git add src/app/products/[brand]/page.tsx src/app/globals.css
git commit -m "feat(products): add 8 brand landing pages with FAQ + Collection JSON-LD"
```

---

## Task 5: Wire brand links across the site

**Files:**
- Modify: `src/app/brands/page.tsx:117` (card href)
- Modify: `src/components/Footer.tsx` (add Shop by brand sub-list)
- Create: `src/components/BrandStrip.tsx`
- Modify: `src/app/products/page.tsx` (mount BrandStrip in hero)
- Modify: `src/app/globals.css` (add `.brand-strip*` selectors + footer two-column tweak)

- [ ] **Step 1: Fix `/brands` card href**

Edit `src/app/brands/page.tsx`. Find the `Link` near line 117:

```tsx
<Link
  href={`/products?brand=${brand.id}`}
```

Change to:

```tsx
<Link
  href={`/products/${brand.id}`}
```

Also change the visible label on the next line from `View {brand.name} Products →` to `Explore {brand.name} →`.

- [ ] **Step 2: Add Shop-by-brand sub-list to footer**

Edit `src/components/Footer.tsx`. Inside the same Shop column added in Task 3 (after the `<Link href="/brands">All Brands</Link>` line and before the closing `</div>`), add:

```tsx
<h3 style={{ marginTop: 24 }}>Shop by brand</h3>
<Link href="/products/kajaria">Kajaria</Link>
<Link href="/products/somany">Somany</Link>
<Link href="/products/orientbell">Orient Bell</Link>
<Link href="/products/jaquar">Jaquar</Link>
<Link href="/products/cera">Cera</Link>
<Link href="/products/rak">RAK Ceramics</Link>
<Link href="/products/johnson">Johnson Tiles</Link>
<Link href="/products/nitco">Nitco</Link>
```

- [ ] **Step 3: Create BrandStrip component**

Create `src/components/BrandStrip.tsx`:

```tsx
import Link from "next/link";
import { TILE_BRAND_LABELS, type TileBrand } from "@/data/tiles";

const BRAND_IDS: TileBrand[] = [
  "kajaria", "somany", "orientbell", "jaquar", "cera", "rak", "johnson", "nitco",
];

export default function BrandStrip() {
  return (
    <nav aria-label="Browse by brand" className="brand-strip">
      {BRAND_IDS.map((b) => (
        <Link key={b} href={`/products/${b}`} className="brand-strip__chip">
          {TILE_BRAND_LABELS[b]}
        </Link>
      ))}
    </nav>
  );
}
```

- [ ] **Step 4: Mount BrandStrip in /products hero**

Edit `src/app/products/page.tsx`. Add the import:

```tsx
import BrandStrip from "@/components/BrandStrip";
```

Inside the `<section className="rd-section rd-section--dark products-hero">` block (currently lines 117-128), add `<BrandStrip />` immediately after the closing `</p>` of the count line and before the `</div>` closing `rd-container`. So the section ends as:

```tsx
<p className="rd-body products-hero__line">
  {filtered.length} {filtered.length === 1 ? "tile" : "tiles"} &middot;
  visit the Upper Bazar showroom to see each in person.
</p>
<BrandStrip />
```

- [ ] **Step 5: Add CSS for BrandStrip**

Append to `src/app/globals.css`:

```css
/* ---- BrandStrip on /products hero ---- */
.brand-strip { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
.brand-strip__chip {
  padding: 6px 14px;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 999px;
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  font-size: 14px;
  transition: background 0.15s, border-color 0.15s;
}
.brand-strip__chip:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.6); }
```

- [ ] **Step 6: Type check + lint + build**

```bash
cd /Users/sanviagarwal/cc
npx tsc --noEmit && npm run lint && npm run build
```
Expected: all pass.

- [ ] **Step 7: Manual verify**

`npm run dev`. Check:
- http://localhost:3000/brands — each card's CTA reads "Explore {Brand} →" and clicks through to `/products/{brand}` (a real page now, not the broken filter URL).
- http://localhost:3000/products — hero shows 8 brand chips below the count line; clicking one opens the brand landing page.
- Footer — "Shop by brand" sub-heading with 8 brand links, each landing on the correct brand page.
Stop dev server.

- [ ] **Step 8: Commit**

```bash
cd /Users/sanviagarwal/cc
git add src/app/brands/page.tsx src/components/Footer.tsx src/components/BrandStrip.tsx src/app/products/page.tsx src/app/globals.css
git commit -m "feat(linking): wire /brands cards, footer sub-list, hub BrandStrip to brand pages"
```

---

## Task 6: Add "More from {Brand}" cross-link on `/products/[id]`

**Files:**
- Modify: `src/app/products/[id]/page.tsx` (locate the existing "More in {category}" block)

- [ ] **Step 1: Read current detail page**

Open `src/app/products/[id]/page.tsx`. Locate the existing "More in {category}" related-tiles section (search for `More in` or the related-tiles map).

- [ ] **Step 2: Add brand link below the category-related block**

After the "More in {category}" related grid closes, and before the trailing `<CTAStrip />` (or equivalent), add:

```tsx
{tile.brand && (
  <section className="rd-section rd-section--light">
    <div className="rd-container" style={{ textAlign: "center" }}>
      <Link
        href={`/products/${tile.brand}`}
        className="rd-btn rd-btn--secondary-on-light"
      >
        More from {TILE_BRAND_LABELS[tile.brand]} →
      </Link>
    </div>
  </section>
)}
```

If `Link` and `TILE_BRAND_LABELS` aren't already imported at the top of the file, add:

```tsx
import Link from "next/link";
import { TILE_BRAND_LABELS } from "@/data/tiles";
```

- [ ] **Step 3: Type check + lint**

```bash
cd /Users/sanviagarwal/cc
npx tsc --noEmit && npm run lint
```
Expected: both pass.

- [ ] **Step 4: Manual verify**

`npm run dev`. Open http://localhost:3000/products/statuario-premium — scroll past "More in living" — verify "More from Kajaria →" CTA renders and routes to `/products/kajaria`.

- [ ] **Step 5: Commit**

```bash
cd /Users/sanviagarwal/cc
git add src/app/products/[id]/page.tsx
git commit -m "feat(products): add 'More from {Brand}' link on tile detail"
```

---

## Task 7: Sitemap — add 8 brand URLs

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Add brand entries**

Edit `src/app/sitemap.ts`. After the `categorySlugs` declaration (line 19), add:

```ts
const brandSlugs = [
  "kajaria", "somany", "orientbell", "jaquar", "cera", "rak", "johnson", "nitco",
];
```

In the `sitemap()` function, after `categoryEntries` (around line 47), add:

```ts
const brandEntries: MetadataRoute.Sitemap = brandSlugs.map((slug) => ({
  url: `${SITE_URL}/products/${slug}`,
  lastModified: now,
  changeFrequency: "weekly",
  priority: 0.85,
}));
```

In the final return (line 63), include `brandEntries`:

```ts
return [...staticEntries, ...categoryEntries, ...brandEntries, ...tileEntries, ...blogEntries];
```

- [ ] **Step 2: Type check + lint + build**

```bash
cd /Users/sanviagarwal/cc
npx tsc --noEmit && npm run lint && npm run build
```
Expected: all pass.

- [ ] **Step 3: Manual verify**

`npm run dev`. Visit http://localhost:3000/sitemap.xml — confirm 8 `/products/{brand}` URLs are present.

- [ ] **Step 4: Commit**

```bash
cd /Users/sanviagarwal/cc
git add src/app/sitemap.ts
git commit -m "feat(sitemap): add 8 /products/[brand] URLs"
```

---

## Task 8: Hub upgrade — phase A (mobile chips + sort + finish + brand row + multi-value parsing)

**Files:**
- Modify: `src/app/products/page.tsx` (multi-value parsing, brand+finish facets, sort)
- Modify: `src/components/products/FilterBar.tsx` (multi-value chip behaviour)
- Create: `src/components/products/SortDropdown.tsx`
- Modify: `src/data/tiles.ts` (no change — `addedAt` and `finish` already added in Task 1)
- Modify: `src/app/globals.css` (sort dropdown CSS, brand chip row spacing)

- [ ] **Step 1: Add a URL helper for comma-separated multi-values**

Create `src/lib/searchParamList.ts`:

```ts
export function parseList(value: string | undefined): string[] {
  if (!value) return [];
  return value.split(",").map((s) => s.trim()).filter(Boolean);
}

export function toggleListValue(current: string[], value: string): string[] {
  return current.includes(value)
    ? current.filter((v) => v !== value)
    : [...current, value];
}

export function listToParam(values: string[]): string | undefined {
  return values.length === 0 ? undefined : values.join(",");
}
```

- [ ] **Step 2: Update `FilterBar` to support multi-select via comma URL values**

Replace `src/components/products/FilterBar.tsx` with:

```tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { parseList, toggleListValue, listToParam } from '@/lib/searchParamList';

type Category = { slug: string; label: string };

type FilterBarProps = {
  paramKey: string;          // 'category' | 'brand' | 'style' | 'finish'
  options: Category[];       // includes an 'all' option that clears the param
  ariaLabel: string;
};

export default function FilterBar({ paramKey, options, ariaLabel }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = parseList(searchParams.get(paramKey) ?? undefined);

  const handleClick = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === 'all') {
      params.delete(paramKey);
    } else {
      const next = toggleListValue(current, slug);
      const v = listToParam(next);
      if (v) params.set(paramKey, v);
      else params.delete(paramKey);
    }
    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : '/products', { scroll: false });
  };

  const allActive = current.length === 0;

  return (
    <div className="filter-bar" role="navigation" aria-label={ariaLabel}>
      <div className="filter-bar__inner">
        {options.map((c) => {
          const isActive = c.slug === 'all' ? allActive : current.includes(c.slug);
          return (
            <button
              key={c.slug}
              type="button"
              onClick={() => handleClick(c.slug)}
              aria-pressed={isActive}
              className={`filter-bar__chip${isActive ? ' filter-bar__chip--active' : ''}`}
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
```

(`StyleFilterBar` becomes redundant — the new `FilterBar` is generic. Delete it in Step 5.)

- [ ] **Step 3: Create the SortDropdown**

Create `src/components/products/SortDropdown.tsx`:

```tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'brand', label: 'Brand A–Z' },
];

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get('sort') ?? 'featured';

  const onChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'featured') params.delete('sort');
    else params.set('sort', value);
    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : '/products', { scroll: false });
  };

  return (
    <label className="sort-dropdown">
      <span className="sort-dropdown__label">Sort</span>
      <select
        value={current}
        onChange={(e) => onChange(e.target.value)}
        className="sort-dropdown__select"
      >
        {OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}
```

- [ ] **Step 4: Add sort + finish + brand handling in /products page**

Replace the entire body of `src/app/products/page.tsx` with:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import FilterBar from "@/components/products/FilterBar";
import SortDropdown from "@/components/products/SortDropdown";
import BrandStrip from "@/components/BrandStrip";
import ProductCard from "@/components/ProductCard";
import CTAStrip from "@/components/CTAStrip";
import JsonLd from "@/components/JsonLd";
import {
  tiles,
  TILE_STYLE_LABELS,
  TILE_BRAND_LABELS,
  TILE_FINISH_LABELS,
  type TileCategory,
  type TileStyle,
  type TileBrand,
  type TileFinish,
} from "@/data/tiles";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";
import { parseList } from "@/lib/searchParamList";

const SITE_URL = "https://krishnatiles.com";

export const metadata: Metadata = {
  title: "The Collection — Tiles, Sanitaryware & Surfaces | Krishna Tiles Ranchi",
  description:
    "Curated tiles, sanitaryware and luxury surfaces from Kajaria, Somany, Jaquar and more. Filter by space, style and surface — then visit our Upper Bazar, Ranchi showroom.",
  alternates: { canonical: "/products" },
};

const VALID_CATEGORIES: TileCategory[] = ["living", "bath", "kitchen", "outdoor", "sanitaryware"];
const VALID_BRANDS: TileBrand[] = ["kajaria", "somany", "orientbell", "jaquar", "cera", "rak", "johnson", "nitco"];
const VALID_STYLES: TileStyle[] = ["marble-look", "wood-look", "stone", "matte", "glossy", "mosaic", "handmade", "metallic", "concrete", "large-format"];
const VALID_FINISHES: TileFinish[] = ["matte", "glossy", "lappato", "textured"];

const CATEGORY_OPTIONS = [
  { slug: "all", label: "All Spaces" },
  { slug: "living", label: "Living" },
  { slug: "bath", label: "Bath" },
  { slug: "kitchen", label: "Kitchen" },
  { slug: "outdoor", label: "Outdoor" },
  { slug: "sanitaryware", label: "Sanitaryware" },
];

const BRAND_OPTIONS = [
  { slug: "all", label: "All Brands" },
  ...VALID_BRANDS.map((b) => ({ slug: b, label: TILE_BRAND_LABELS[b] })),
];

const STYLE_OPTIONS = [
  { slug: "all", label: "All Styles" },
  ...VALID_STYLES.map((s) => ({ slug: s, label: TILE_STYLE_LABELS[s] })),
];

const FINISH_OPTIONS = [
  { slug: "all", label: "All Finishes" },
  ...VALID_FINISHES.map((f) => ({ slug: f, label: TILE_FINISH_LABELS[f] })),
];

type PageProps = {
  searchParams: Promise<{
    category?: string;
    brand?: string;
    style?: string;
    finish?: string;
    sort?: string;
  }>;
};

function intersect<T extends string>(values: string[], allowed: T[]): T[] {
  const set = new Set(allowed as string[]);
  return values.filter((v) => set.has(v)) as T[];
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const categories = intersect(parseList(sp.category), VALID_CATEGORIES);
  const brandsSel = intersect(parseList(sp.brand), VALID_BRANDS);
  const styles = intersect(parseList(sp.style), VALID_STYLES);
  const finishes = intersect(parseList(sp.finish), VALID_FINISHES);
  const sort = (sp.sort ?? "featured") as "featured" | "newest" | "brand";

  const filtered = tiles.filter((t) => {
    if (categories.length && !categories.includes(t.category)) return false;
    if (brandsSel.length && (!t.brand || !brandsSel.includes(t.brand))) return false;
    if (styles.length && !(t.styles ?? []).some((s) => styles.includes(s))) return false;
    if (finishes.length && (!t.finish || !finishes.includes(t.finish))) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "newest") {
      const ad = a.addedAt ?? "0000-00-00";
      const bd = b.addedAt ?? "0000-00-00";
      return bd.localeCompare(ad);
    }
    if (sort === "brand") {
      const al = a.brand ? TILE_BRAND_LABELS[a.brand] : "zzz";
      const bl = b.brand ? TILE_BRAND_LABELS[b.brand] : "zzz";
      return al.localeCompare(bl);
    }
    // featured
    const af = a.featured ? 0 : 1;
    const bf = b.featured ? 0 : 1;
    return af - bf;
  });

  const beforeCTA = sorted.slice(0, 6);
  const afterCTA = sorted.slice(6);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sorted.slice(0, 20).map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/products/${t.id}`,
      name: t.name,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />

      <section className="rd-section rd-section--dark products-hero">
        <div className="rd-container">
          <p className="rd-eyebrow">The Collection</p>
          <h1 className="rd-display" style={{ color: "#ffffff", marginTop: 12 }}>
            Every tile we carry
          </h1>
          <p className="rd-body products-hero__line">
            {sorted.length} {sorted.length === 1 ? "tile" : "tiles"} &middot;
            visit the Upper Bazar showroom to see each in person.
          </p>
          <BrandStrip />
        </div>
      </section>

      <FilterBar paramKey="brand" options={BRAND_OPTIONS} ariaLabel="Filter by brand" />
      <FilterBar paramKey="category" options={CATEGORY_OPTIONS} ariaLabel="Filter by space" />
      <FilterBar paramKey="style" options={STYLE_OPTIONS} ariaLabel="Filter by style" />
      <FilterBar paramKey="finish" options={FINISH_OPTIONS} ariaLabel="Filter by finish" />

      <section className="rd-section rd-section--light products-grid-section">
        <div className="rd-container">
          <div className="products-toolbar">
            <p className="products-toolbar__count">
              {sorted.length} {sorted.length === 1 ? "result" : "results"}
            </p>
            <SortDropdown />
          </div>

          {sorted.length === 0 ? (
            <div className="products-empty">
              <p className="rd-eyebrow">No tiles match</p>
              <h2 className="rd-h3" style={{ marginTop: 12 }}>Try another combination</h2>
              <p className="rd-body" style={{ marginTop: 12, maxWidth: 480, marginInline: "auto" }}>
                We stock 5,000+ designs at the showroom — clear a filter or message us on WhatsApp
                and we&apos;ll hand-pick options for you.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
                <Link href="/products" className="rd-btn rd-btn--primary-on-light">See all tiles</Link>
                <a
                  href={getWhatsAppLink("Hi Krishna Tiles, I can't find what I'm looking for online. Can you help?")}
                  target="_blank" rel="noopener noreferrer"
                  className="rd-btn rd-btn--secondary-on-light"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="products-grid-rd">
                {beforeCTA.map((tile, i) => (
                  <ProductCard key={tile.id} tile={tile} priority={i < 3} />
                ))}
              </div>

              {afterCTA.length > 0 && (
                <aside className="products-midcta">
                  <div className="products-midcta__inner">
                    <div>
                      <p className="rd-eyebrow">Help deciding?</p>
                      <h3 className="rd-h3" style={{ color: "#ffffff", marginTop: 8 }}>
                        Can&apos;t decide? Walk in — we&apos;ll help you pick.
                      </h3>
                    </div>
                    <div className="products-midcta__ctas">
                      <a
                        href={getWhatsAppLink("Hi, I would like help picking tiles.")}
                        target="_blank" rel="noopener noreferrer"
                        className="rd-btn rd-btn--primary-on-dark"
                      >
                        WhatsApp Us
                      </a>
                      <a href={getCallLink()} className="rd-btn rd-btn--secondary-on-dark">
                        Call {business.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </aside>
              )}

              {afterCTA.length > 0 && (
                <div className="products-grid-rd products-grid-rd--after">
                  {afterCTA.map((tile) => (
                    <ProductCard key={tile.id} tile={tile} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <CTAStrip variant="products" />
    </>
  );
}
```

- [ ] **Step 5: Delete the now-redundant `StyleFilterBar`**

```bash
cd /Users/sanviagarwal/cc
rm src/components/products/StyleFilterBar.tsx
```

- [ ] **Step 6: Add toolbar + sort-dropdown CSS**

Append to `src/app/globals.css`:

```css
/* ---- /products toolbar (count + sort) ---- */
.products-toolbar {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 24px; gap: 16px; flex-wrap: wrap;
}
.products-toolbar__count { font-size: 14px; color: #5a5a5a; margin: 0; }
.sort-dropdown { display: inline-flex; align-items: center; gap: 8px; }
.sort-dropdown__label { font-size: 14px; color: #5a5a5a; }
.sort-dropdown__select {
  padding: 6px 10px; border: 1px solid #d4d0c8; border-radius: 6px;
  background: #fff; font-size: 14px; cursor: pointer;
}
```

- [ ] **Step 7: Type check + lint + build**

```bash
cd /Users/sanviagarwal/cc
npx tsc --noEmit && npm run lint && npm run build
```
Expected: all pass.

- [ ] **Step 8: Manual verify (sandboxed Playwright)**

`npm run dev`. With sandboxed Playwright (`isolated: true`):
- Visit `http://localhost:3000/products` — 4 chip rows visible (Brand, Category, Style, Finish), result count + sort dropdown above grid.
- Click Kajaria + Somany chips → URL becomes `?brand=kajaria,somany`, grid filters down to those brands.
- Click Bath chip → URL adds `&category=bath`, grid intersects.
- Change sort to "Newest" → URL gains `&sort=newest`, order changes (will only matter once `addedAt` is set on tiles — verify URL update at minimum).
- Click "All Brands" → brand param drops out of URL.
- Visit a footer link (e.g. "Bathroom Tiles") → page lands with Bath chip pre-selected.

Stop dev server.

- [ ] **Step 9: Commit**

```bash
cd /Users/sanviagarwal/cc
git add src/lib/searchParamList.ts src/components/products/FilterBar.tsx src/components/products/SortDropdown.tsx src/app/products/page.tsx src/app/globals.css
git rm src/components/products/StyleFilterBar.tsx
git commit -m "feat(products): brand+finish facets, sort dropdown, multi-select chips"
```

---

## Task 9: Hub upgrade — phase B (desktop sidebar `<FilterRail>` + active-filter pills)

**Files:**
- Create: `src/components/products/FilterRail.tsx`
- Create: `src/components/products/ActiveFilterPills.tsx`
- Modify: `src/app/products/page.tsx` (compute facet counts, mount `<FilterRail>` + `<ActiveFilterPills>`, hide chips at >900px via CSS)
- Modify: `src/app/globals.css` (rail layout + responsive hide rules)

- [ ] **Step 1: Create FilterRail (client component, multi-select checkboxes per facet)**

Create `src/components/products/FilterRail.tsx`:

```tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { parseList, toggleListValue, listToParam } from '@/lib/searchParamList';

type Option = { value: string; label: string; count: number };

type Section = {
  paramKey: 'brand' | 'category' | 'style' | 'finish';
  title: string;
  options: Option[];
};

export default function FilterRail({ sections }: { sections: Section[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggle = (paramKey: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = parseList(params.get(paramKey) ?? undefined);
    const next = toggleListValue(current, value);
    const v = listToParam(next);
    if (v) params.set(paramKey, v);
    else params.delete(paramKey);
    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : '/products', { scroll: false });
  };

  const clearAll = () => {
    const sort = searchParams.get('sort');
    const params = new URLSearchParams();
    if (sort) params.set('sort', sort);
    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : '/products', { scroll: false });
  };

  const anyActive = sections.some((s) => parseList(searchParams.get(s.paramKey) ?? undefined).length > 0);

  return (
    <aside className="filter-rail" aria-label="Filters">
      <div className="filter-rail__head">
        <h2 className="filter-rail__title">Filters</h2>
        {anyActive && (
          <button type="button" className="filter-rail__clear" onClick={clearAll}>Clear all</button>
        )}
      </div>
      {sections.map((section) => {
        const current = parseList(searchParams.get(section.paramKey) ?? undefined);
        return (
          <fieldset key={section.paramKey} className="filter-rail__section">
            <legend className="filter-rail__legend">{section.title}</legend>
            {section.options.map((o) => {
              const checked = current.includes(o.value);
              return (
                <label key={o.value} className={`filter-rail__option${checked ? ' filter-rail__option--checked' : ''}`}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(section.paramKey, o.value)}
                  />
                  <span className="filter-rail__option-label">{o.label}</span>
                  <span className="filter-rail__option-count">{o.count}</span>
                </label>
              );
            })}
          </fieldset>
        );
      })}
    </aside>
  );
}
```

- [ ] **Step 2: Create ActiveFilterPills**

Create `src/components/products/ActiveFilterPills.tsx`:

```tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { parseList, listToParam } from '@/lib/searchParamList';

type LabelMap = Record<string, string>;

type Props = {
  labels: { brand: LabelMap; category: LabelMap; style: LabelMap; finish: LabelMap };
};

const KEYS: Array<'brand' | 'category' | 'style' | 'finish'> = ['brand', 'category', 'style', 'finish'];

export default function ActiveFilterPills({ labels }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const remove = (paramKey: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = parseList(params.get(paramKey) ?? undefined);
    const next = current.filter((v) => v !== value);
    const v = listToParam(next);
    if (v) params.set(paramKey, v);
    else params.delete(paramKey);
    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : '/products', { scroll: false });
  };

  const pills = KEYS.flatMap((key) => {
    const values = parseList(searchParams.get(key) ?? undefined);
    return values.map((v) => ({ key, value: v, label: labels[key][v] ?? v }));
  });

  if (pills.length === 0) return null;

  return (
    <div className="active-pills" aria-label="Active filters">
      {pills.map((p) => (
        <button
          key={`${p.key}:${p.value}`}
          type="button"
          className="active-pills__pill"
          onClick={() => remove(p.key, p.value)}
          aria-label={`Remove ${p.label} filter`}
        >
          {p.label}
          <span aria-hidden="true">×</span>
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Mount rail + pills + counts in /products page**

Edit `src/app/products/page.tsx`. Add imports near the top (don't duplicate `TILE_FINISH_LABELS` — already imported in Task 8):

```tsx
import FilterRail from "@/components/products/FilterRail";
import ActiveFilterPills from "@/components/products/ActiveFilterPills";
```

Inside `ProductsPage`, before the `return`, build option lists with counts:

```tsx
function countWith<T extends string>(
  base: typeof tiles,
  facet: (t: typeof tiles[number]) => T | T[] | undefined,
  value: T
): number {
  return base.filter((t) => {
    const f = facet(t);
    if (!f) return false;
    return Array.isArray(f) ? f.includes(value) : f === value;
  }).length;
}

const railSections = [
  {
    paramKey: 'brand' as const,
    title: 'Brand',
    options: VALID_BRANDS.map((b) => ({
      value: b,
      label: TILE_BRAND_LABELS[b],
      count: countWith(tiles, (t) => t.brand, b),
    })),
  },
  {
    paramKey: 'category' as const,
    title: 'Space',
    options: VALID_CATEGORIES.map((c) => ({
      value: c,
      label: CATEGORY_OPTIONS.find((o) => o.slug === c)!.label,
      count: countWith(tiles, (t) => t.category, c),
    })),
  },
  {
    paramKey: 'style' as const,
    title: 'Style',
    options: VALID_STYLES.map((s) => ({
      value: s,
      label: TILE_STYLE_LABELS[s],
      count: countWith(tiles, (t) => t.styles, s),
    })),
  },
  {
    paramKey: 'finish' as const,
    title: 'Finish',
    options: VALID_FINISHES.map((f) => ({
      value: f,
      label: TILE_FINISH_LABELS[f],
      count: countWith(tiles, (t) => t.finish, f),
    })),
  },
];

const pillLabels = {
  brand: Object.fromEntries(VALID_BRANDS.map((b) => [b, TILE_BRAND_LABELS[b]])) as Record<string, string>,
  category: Object.fromEntries(VALID_CATEGORIES.map((c) => [c, CATEGORY_OPTIONS.find((o) => o.slug === c)!.label])) as Record<string, string>,
  style: Object.fromEntries(VALID_STYLES.map((s) => [s, TILE_STYLE_LABELS[s]])) as Record<string, string>,
  finish: Object.fromEntries(VALID_FINISHES.map((f) => [f, TILE_FINISH_LABELS[f]])) as Record<string, string>,
};
```

Then restructure the JSX so the chip rows + grid section become a two-column layout on desktop. Replace the four `<FilterBar ... />` lines + the `<section className="rd-section rd-section--light products-grid-section">` block with:

```tsx
{/* Mobile chip rows (hidden ≥900px via CSS) */}
<div className="products-chips-only-mobile">
  <FilterBar paramKey="brand" options={BRAND_OPTIONS} ariaLabel="Filter by brand" />
  <FilterBar paramKey="category" options={CATEGORY_OPTIONS} ariaLabel="Filter by space" />
  <FilterBar paramKey="style" options={STYLE_OPTIONS} ariaLabel="Filter by style" />
  <FilterBar paramKey="finish" options={FINISH_OPTIONS} ariaLabel="Filter by finish" />
</div>

<section className="rd-section rd-section--light products-grid-section">
  <div className="rd-container products-layout">
    <div className="products-layout__rail">
      <FilterRail sections={railSections} />
    </div>
    <div className="products-layout__main">
      <div className="products-toolbar">
        <p className="products-toolbar__count">
          {sorted.length} {sorted.length === 1 ? "result" : "results"}
        </p>
        <SortDropdown />
      </div>
      <ActiveFilterPills labels={pillLabels} />

      {sorted.length === 0 ? (
        <div className="products-empty">
          <p className="rd-eyebrow">No tiles match</p>
          <h2 className="rd-h3" style={{ marginTop: 12 }}>Try another combination</h2>
          <p className="rd-body" style={{ marginTop: 12, maxWidth: 480, marginInline: "auto" }}>
            We stock 5,000+ designs at the showroom — clear a filter or message us on WhatsApp
            and we&apos;ll hand-pick options for you.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
            <Link href="/products" className="rd-btn rd-btn--primary-on-light">See all tiles</Link>
            <a
              href={getWhatsAppLink("Hi Krishna Tiles, I can't find what I'm looking for online. Can you help?")}
              target="_blank" rel="noopener noreferrer"
              className="rd-btn rd-btn--secondary-on-light"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="products-grid-rd">
            {beforeCTA.map((tile, i) => (
              <ProductCard key={tile.id} tile={tile} priority={i < 3} />
            ))}
          </div>

          {afterCTA.length > 0 && (
            <aside className="products-midcta">
              <div className="products-midcta__inner">
                <div>
                  <p className="rd-eyebrow">Help deciding?</p>
                  <h3 className="rd-h3" style={{ color: "#ffffff", marginTop: 8 }}>
                    Can&apos;t decide? Walk in — we&apos;ll help you pick.
                  </h3>
                </div>
                <div className="products-midcta__ctas">
                  <a
                    href={getWhatsAppLink("Hi, I would like help picking tiles.")}
                    target="_blank" rel="noopener noreferrer"
                    className="rd-btn rd-btn--primary-on-dark"
                  >
                    WhatsApp Us
                  </a>
                  <a href={getCallLink()} className="rd-btn rd-btn--secondary-on-dark">
                    Call {business.phoneDisplay}
                  </a>
                </div>
              </div>
            </aside>
          )}

          {afterCTA.length > 0 && (
            <div className="products-grid-rd products-grid-rd--after">
              {afterCTA.map((tile) => (
                <ProductCard key={tile.id} tile={tile} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  </div>
</section>
```

- [ ] **Step 4: Add layout + rail + pills CSS**

Append to `src/app/globals.css`:

```css
/* ---- /products desktop two-column layout ---- */
.products-layout { display: block; }
.products-layout__rail { display: none; }
.products-layout__main { min-width: 0; }

@media (min-width: 900px) {
  .products-layout {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 32px;
    align-items: start;
  }
  .products-layout__rail { display: block; }
  .products-chips-only-mobile { display: none; }
}

/* ---- FilterRail ---- */
.filter-rail {
  position: sticky; top: 96px;
  background: #fff; border: 1px solid #e5e2dc; border-radius: 8px;
  padding: 16px; font-size: 14px;
  max-height: calc(100vh - 120px); overflow-y: auto;
}
.filter-rail__head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px; }
.filter-rail__title { font-size: 15px; font-weight: 600; margin: 0; }
.filter-rail__clear {
  background: none; border: none; padding: 0; cursor: pointer;
  color: #8a6d3b; font-size: 13px; text-decoration: underline;
}
.filter-rail__section { border: none; padding: 12px 0; margin: 0; border-top: 1px solid #f0ede6; }
.filter-rail__legend { font-size: 13px; font-weight: 600; color: #1a1a1a; margin-bottom: 8px; padding: 0; }
.filter-rail__option {
  display: flex; align-items: center; gap: 8px;
  padding: 4px 0; cursor: pointer; color: #4a4a4a;
}
.filter-rail__option input { margin: 0; }
.filter-rail__option-label { flex: 1; }
.filter-rail__option-count { color: #8a8a8a; font-size: 12px; }
.filter-rail__option--checked { color: #1a1a1a; font-weight: 500; }

/* ---- ActiveFilterPills ---- */
.active-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.active-pills__pill {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 10px; border: 1px solid #d4d0c8; border-radius: 999px;
  background: #faf9f6; font-size: 13px; cursor: pointer; color: #1a1a1a;
}
.active-pills__pill:hover { background: #f0ede6; }
.active-pills__pill span { color: #8a8a8a; font-size: 14px; }
```

- [ ] **Step 5: Type check + lint + build**

```bash
cd /Users/sanviagarwal/cc
npx tsc --noEmit && npm run lint && npm run build
```
Expected: all pass.

- [ ] **Step 6: Manual verify (sandboxed Playwright + DevTools resize)**

`npm run dev`. With sandboxed Playwright (`isolated: true`):
- At width 360px: chip rows visible, no rail.
- At width 1280px: rail visible on the left, chip rows hidden, sticky on scroll.
- Tick Kajaria + Somany checkboxes in rail → URL updates `?brand=kajaria,somany`, grid filters, two pills render above grid.
- Click a pill's "×" → that filter drops; URL and grid update.
- Click "Clear all" in rail head → all facets drop, sort param preserved.
- Counts shown next to each rail option match the actual tile count for that value.

Stop dev server.

- [ ] **Step 7: Commit**

```bash
cd /Users/sanviagarwal/cc
git add src/components/products/FilterRail.tsx src/components/products/ActiveFilterPills.tsx src/app/products/page.tsx src/app/globals.css
git commit -m "feat(products): desktop sidebar filter rail + active-filter pills"
```

---

## Task 10: Final QA pass

**Files:** none modified. Pure verification.

- [ ] **Step 1: Production build clean**

```bash
cd /Users/sanviagarwal/cc
rm -rf .next
npm run build
```
Expected: build succeeds; output lists `/products`, `/products/[brand]` (8 generated), `/products/[id]`, sitemap, robots.

- [ ] **Step 2: Lint + type pass**

```bash
cd /Users/sanviagarwal/cc
npx tsc --noEmit && npm run lint
```
Expected: zero errors, zero warnings introduced by this work.

- [ ] **Step 3: Route smoke test (sandboxed Playwright)**

Start `npm run dev`. With sandboxed Playwright, visit each and confirm 200 + no console errors:
- `/`
- `/products`
- `/products/kajaria`, `/somany`, `/orientbell`, `/jaquar`, `/cera`, `/rak`, `/johnson`, `/nitco`
- `/products/foo` → 404
- `/products/statuario-premium` (detail page with new "More from Kajaria" link)
- `/brands`
- `/sitemap.xml` — contains 8 brand URLs

- [ ] **Step 4: Filter combinatorics smoke test**

On `/products` (desktop width):
- Tick Kajaria + Somany → URL `?brand=kajaria,somany`, grid shows only those.
- Tick Bath in addition → URL `?brand=kajaria,somany&category=bath`, grid intersects.
- Tick Marble Look in style → URL gains `&style=marble-look`, grid intersects further.
- Switch sort to Newest → URL gains `&sort=newest`.
- Click pill × on Kajaria → URL drops kajaria from brand value; pill count drops by one.
- Click "Clear all" → all facet params drop, sort preserved.

- [ ] **Step 5: Mobile smoke test**

Resize to 375px. Verify:
- Chip rows render (Brand, Category, Style, Finish).
- Sidebar hidden.
- Tapping a chip toggles filter; second tap deselects (multi-select OR within facet).
- Footer "Shop by space" + "Shop by brand" sub-lists render and route correctly.

- [ ] **Step 6: Performance sanity**

In DevTools, on `/products` desktop, verify FCP < 2s and no layout shifts > 0.1. Note actual numbers in commit message.

- [ ] **Step 7: Commit (if any tweaks fall out of QA)**

If QA surfaced no defects, no commit needed. If small fixes were made:

```bash
cd /Users/sanviagarwal/cc
git add -p
git commit -m "fix(products): QA pass tweaks"
```

---

## Out of scope (do not implement in this plan)
- Brand × category combo routes (`/products/kajaria/bath`).
- Geo landing pages (`/kajaria-tiles-in-ranchi`).
- `Product` schema per ProductCard.
- Search box, infinite scroll, client state library.
- Catalogue scraping / image acquisition for the 300-400 SKUs.
- Orphan-link work for `/faq`, `/testimonials`, `/tiles-in-ranchi`, `/blog`.
