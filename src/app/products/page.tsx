import type { Metadata } from "next";
import Link from "next/link";
import FilterBar from "@/components/products/FilterBar";
import ProductCard from "@/components/ProductCard";
import CTAStrip from "@/components/CTAStrip";
import { tiles, type TileCategory } from "@/data/tiles";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";

export const metadata: Metadata = {
  title: "The Collection — Krishna Tiles | Ranchi",
  description:
    "Browse our curated tile collection across Living, Bath, Kitchen, Outdoor and Sanitaryware. Visit our Upper Bazar showroom to see every tile in person.",
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

type PageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProductsPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const activeSlug =
    category && (VALID_CATEGORIES as string[]).includes(category)
      ? category
      : "all";

  const filtered =
    activeSlug === "all"
      ? tiles
      : tiles.filter((t) => t.category === (activeSlug as TileCategory));

  const beforeCTA = filtered.slice(0, 6);
  const afterCTA = filtered.slice(6);

  return (
    <>
      <section className="rd-section rd-section--dark products-hero">
        <div className="rd-container">
          <p className="rd-eyebrow">The Collection</p>
          <h1
            className="rd-display"
            style={{ color: "var(--bone)", marginTop: 12 }}
          >
            Every tile we carry
          </h1>
          <p className="rd-body products-hero__line">
            {filtered.length} {filtered.length === 1 ? "tile" : "tiles"} &middot;
            visit the Upper Bazar showroom to see each in person.
          </p>
        </div>
      </section>

      <FilterBar categories={CATEGORIES} activeSlug={activeSlug} />

      <section className="rd-section rd-section--light products-grid-section">
        <div className="rd-container">
          {filtered.length === 0 ? (
            <div className="products-empty">
              <p className="rd-eyebrow">No tiles match</p>
              <h2 className="rd-h3" style={{ marginTop: 12 }}>
                Try another category
              </h2>
              <Link
                href="/products"
                className="rd-btn rd-btn--primary-on-light"
                style={{ marginTop: 24 }}
              >
                See all tiles
              </Link>
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
                      <h3
                        className="rd-h3"
                        style={{ color: "var(--bone)", marginTop: 8 }}
                      >
                        Can&apos;t decide? Walk in — we&apos;ll help you pick.
                      </h3>
                    </div>
                    <div className="products-midcta__ctas">
                      <a
                        href={getWhatsAppLink(
                          "Hi, I would like help picking tiles."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rd-btn rd-btn--primary-on-dark"
                      >
                        WhatsApp Us
                      </a>
                      <a
                        href={getCallLink()}
                        className="rd-btn rd-btn--secondary-on-dark"
                      >
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
