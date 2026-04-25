import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  tiles,
  getTileById,
  CATEGORY_LABELS,
  TILE_STYLE_LABELS,
  type Tile,
} from "@/data/tiles";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";
import EnquiryForm from "@/components/EnquiryForm";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";

interface PageProps {
  params: Promise<{ id: string }>;
}

const SITE_URL = "https://krishnatiles.com";

export async function generateStaticParams() {
  return tiles.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const tile = getTileById(id);
  if (!tile) return { title: "Tile Not Found" };
  const category = CATEGORY_LABELS[tile.category];
  return {
    title: `${tile.name} — ${category} Tile | Krishna Tiles Ranchi`,
    description: `${tile.description} Available to view at our Upper Bazar, Ranchi showroom. Size ${tile.size}, ${tile.material}.`,
    alternates: { canonical: `/products/${tile.id}` },
    openGraph: {
      title: `${tile.name} — Krishna Tiles Ranchi`,
      description: tile.description,
      images: [{ url: tile.image, width: 1200, height: 1200, alt: tile.name }],
      type: "website",
    },
  };
}

function getRelated(tile: Tile): Tile[] {
  return tiles
    .filter((t) => t.id !== tile.id && t.category === tile.category)
    .slice(0, 3);
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tile = getTileById(id);

  if (!tile) notFound();

  const related = getRelated(tile);
  const categoryLabel = CATEGORY_LABELS[tile.category];
  const waMessage = `Hi Krishna Tiles, I'm interested in "${tile.name}" (${tile.size}, ${tile.material}). Please share availability and the best price.`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: tile.name,
    description: tile.description,
    image: tile.image,
    category: categoryLabel,
    material: tile.material,
    brand: { "@type": "Brand", name: "Krishna Tiles" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/products/${tile.id}`,
      seller: { "@type": "Organization", name: "Krishna Tiles" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryLabel,
        item: `${SITE_URL}/products?category=${tile.category}`,
      },
      { "@type": "ListItem", position: 4, name: tile.name },
    ],
  };

  const specs = [
    { label: "Size", value: tile.size },
    { label: "Material", value: tile.material },
    { label: "Category", value: categoryLabel },
    tile.surface && {
      label: "Surface",
      value:
        tile.surface === "both"
          ? "Wall & Floor"
          : tile.surface === "wall"
            ? "Wall"
            : "Floor",
    },
  ].filter(Boolean) as Array<{ label: string; value: string }>;

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="rd-section rd-section--light product-detail">
        <div className="rd-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb__sep">›</span>
            <Link href="/products">Products</Link>
            <span className="breadcrumb__sep">›</span>
            <Link href={`/products?category=${tile.category}`}>{categoryLabel}</Link>
            <span className="breadcrumb__sep">›</span>
            <span>{tile.name}</span>
          </nav>

          <div className="product-detail__layout">
            <div className="product-detail__gallery">
              <div className="product-detail__main-image">
                <Image
                  src={tile.image}
                  alt={`${tile.name} — ${tile.material}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="product-detail__info">
              <p className="rd-eyebrow">{categoryLabel} Collection</p>
              <h1 className="product-detail__title">{tile.name}</h1>
              <p className="product-detail__description">{tile.description}</p>

              <dl className="product-detail__specs">
                {specs.map((s) => (
                  <div key={s.label} className="product-detail__spec-row">
                    <dt className="product-detail__spec-label">{s.label}</dt>
                    <dd className="product-detail__spec-value">{s.value}</dd>
                  </div>
                ))}
              </dl>

              {tile.styles && tile.styles.length > 0 && (
                <div className="product-detail__tags">
                  {tile.styles.map((s) => (
                    <span key={s} className="product-detail__tag">
                      {TILE_STYLE_LABELS[s]}
                    </span>
                  ))}
                </div>
              )}

              <div className="product-detail__ctas">
                <a
                  href={getWhatsAppLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rd-btn rd-btn--primary-on-light"
                >
                  WhatsApp a Quote
                </a>
                <a href={getCallLink()} className="rd-btn rd-btn--secondary-on-light">
                  Call {business.phoneDisplay}
                </a>
                <Link href="/contact" className="rd-btn rd-btn--secondary-on-light">
                  Visit Showroom
                </Link>
              </div>

              <div className="product-detail__enquiry">
                <h2 className="rd-h3" style={{ marginBottom: 16 }}>
                  Send an Enquiry
                </h2>
                <EnquiryForm productName={tile.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="rd-section rd-section--dark">
          <div className="rd-container">
            <header style={{ marginBottom: 32 }}>
              <p className="rd-eyebrow">More in {categoryLabel}</p>
              <h2 className="rd-display" style={{ color: "var(--bone)", marginTop: 8 }}>
                You may also like
              </h2>
            </header>
            <div className="products-grid-rd">
              {related.map((t) => (
                <ProductCard key={t.id} tile={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
