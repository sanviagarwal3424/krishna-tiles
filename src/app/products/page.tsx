import type { Metadata } from "next";
import Link from "next/link";
import FilterBar from "@/components/products/FilterBar";
import StyleFilterBar from "@/components/products/StyleFilterBar";
import ProductCard from "@/components/ProductCard";
import CTAStrip from "@/components/CTAStrip";
import JsonLd from "@/components/JsonLd";
import {
  tiles,
  TILE_STYLE_LABELS,
  type TileCategory,
  type TileStyle,
} from "@/data/tiles";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";

const SITE_URL = "https://krishnatiles.com";

export const metadata: Metadata = {
  title: "The Collection — Tiles, Sanitaryware & Surfaces | Krishna Tiles Ranchi",
  description:
    "Curated tiles, sanitaryware and luxury surfaces from Kajaria, Somany, Jaquar and more. Filter by space, style and surface — then visit our Upper Bazar, Ranchi showroom.",
  alternates: { canonical: "/products" },
};

const CATEGORIES: Array<{ slug: string; label: string }> = [
  { slug: "all", label: "All" },
  { slug: "living", label: "Living" },
  { slug: "bath", label: "Bath" },
  { slug: "kitchen", label: "Kitchen" },
  { slug: "outdoor", label: "Outdoor" },
  { slug: "sanitaryware", label: "Sanitaryware" },
];

const VALID_CATEGORIES: TileCategory[] = [
  "living",
  "bath",
  "kitchen",
  "outdoor",
  "sanitaryware",
];

const STYLE_FILTERS: Array<{ slug: TileStyle | "all"; label: string }> = [
  { slug: "all", label: "All Styles" },
  { slug: "marble-look", label: TILE_STYLE_LABELS["marble-look"] },
  { slug: "wood-look", label: TILE_STYLE_LABELS["wood-look"] },
  { slug: "stone", label: TILE_STYLE_LABELS.stone },
  { slug: "matte", label: TILE_STYLE_LABELS.matte },
  { slug: "glossy", label: TILE_STYLE_LABELS.glossy },
  { slug: "large-format", label: TILE_STYLE_LABELS["large-format"] },
  { slug: "mosaic", label: TILE_STYLE_LABELS.mosaic },
  { slug: "handmade", label: TILE_STYLE_LABELS.handmade },
];

const VALID_STYLES = new Set<TileStyle>([
  "marble-look",
  "wood-look",
  "stone",
  "matte",
  "glossy",
  "mosaic",
  "handmade",
  "metallic",
  "concrete",
  "large-format",
]);

type PageProps = {
  searchParams: Promise<{ category?: string; style?: string }>;
};

export default async function ProductsPage({ searchParams }: PageProps) {
  const { category, style } = await searchParams;

  const activeCategory =
    category && (VALID_CATEGORIES as string[]).includes(category)
      ? (category as TileCategory)
      : "all";

  const activeStyle =
    style && VALID_STYLES.has(style as TileStyle) ? (style as TileStyle) : "all";

  const filtered = tiles.filter((t) => {
    const matchCategory = activeCategory === "all" || t.category === activeCategory;
    const matchStyle =
      activeStyle === "all" || (t.styles?.includes(activeStyle as TileStyle) ?? false);
    return matchCategory && matchStyle;
  });

  const beforeCTA = filtered.slice(0, 6);
  const afterCTA = filtered.slice(6);

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
    itemListElement: filtered.slice(0, 20).map((t, i) => ({
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
            {filtered.length} {filtered.length === 1 ? "tile" : "tiles"} &middot;
            visit the Upper Bazar showroom to see each in person.
          </p>
        </div>
      </section>

      <FilterBar categories={CATEGORIES} activeSlug={activeCategory} />
      <StyleFilterBar
        styles={STYLE_FILTERS}
        activeSlug={activeStyle}
        activeCategory={activeCategory}
      />

      <section className="rd-section rd-section--light products-grid-section">
        <div className="rd-container">
          {filtered.length === 0 ? (
            <div className="products-empty">
              <p className="rd-eyebrow">No tiles match</p>
              <h2 className="rd-h3" style={{ marginTop: 12 }}>
                Try another combination
              </h2>
              <p className="rd-body" style={{ marginTop: 12, maxWidth: 480, marginInline: "auto" }}>
                We stock 5,000+ designs at the showroom — clear a filter or message us on WhatsApp
                and we&apos;ll hand-pick options for you.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
                <Link href="/products" className="rd-btn rd-btn--primary-on-light">
                  See all tiles
                </Link>
                <a
                  href={getWhatsAppLink("Hi Krishna Tiles, I can't find what I'm looking for online. Can you help?")}
                  target="_blank"
                  rel="noopener noreferrer"
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
                        target="_blank"
                        rel="noopener noreferrer"
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
