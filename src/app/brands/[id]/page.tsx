import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { brands } from "@/data/brands";
import { tiles } from "@/data/tiles";
import { business, getWhatsAppLink, getCallLink } from "@/data/business";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import CTAStrip from "@/components/CTAStrip";

const SITE_URL = "https://krishnatiles.in";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return brands.map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const brand = brands.find((b) => b.id === id);
  if (!brand) return { title: "Brand Not Found" };

  const title = `${brand.name} Tiles in Ranchi — Authorised Dealer | Krishna Tiles`;
  const description = `Buy ${brand.name} tiles & sanitaryware at best prices in Ranchi. ${brand.tagline} Authorised dealer — Krishna Tiles, Upper Bazar.`;

  return {
    title,
    description,
    alternates: { canonical: `/brands/${id}` },
    keywords: [
      `${brand.name} tiles Ranchi`,
      `${brand.name} dealer Ranchi`,
      `${brand.name} price Ranchi`,
      `${brand.name} showroom Ranchi`,
      `buy ${brand.name} tiles`,
    ],
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function BrandDetailPage({ params }: PageProps) {
  const { id } = await params;
  const brand = brands.find((b) => b.id === id);
  if (!brand) notFound();

  const brandTiles = tiles.filter((t) => t.brand === brand.id).slice(0, 6);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Brands", item: `${SITE_URL}/brands` },
      { "@type": "ListItem", position: 3, name: brand.name },
    ],
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

  const waMsg = `Hi, I'm interested in ${brand.name} products. Can you share prices and availability?`;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="section section--alt" style={{ paddingTop: "4rem" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: "1.5rem", justifyContent: "center" }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb__sep">&rsaquo;</span>
            <Link href="/brands">Brands</Link>
            <span className="breadcrumb__sep">&rsaquo;</span>
            <span>{brand.name}</span>
          </nav>
          <div className="hero__badge" style={{ display: "inline-block", marginBottom: "1rem" }}>
            Authorised Dealer
          </div>
          <h1 className="section__title">{brand.name} Tiles in Ranchi</h1>
          <p className="section__subtitle" style={{ maxWidth: "600px", margin: "0 auto" }}>
            {brand.tagline}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
            <a href={getWhatsAppLink(waMsg)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
              Get {brand.name} Prices
            </a>
            <a href={getCallLink()} className="btn btn--primary btn--lg">
              Call {business.phoneDisplay}
            </a>
          </div>
          <p style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)", marginTop: "0.75rem" }}>
            Price range: <strong>{brand.priceRange}</strong>
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="section__title" style={{ textAlign: "left", fontSize: "var(--fs-2xl)" }}>
            Why Buy {brand.name} from Krishna Tiles?
          </h2>
          <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.9", marginBottom: "1.5rem" }}>
            {brand.intro}
          </p>
        </div>
      </section>

      {/* Category Notes */}
      {Object.keys(brand.categoryNotes).length > 0 && (
        <section className="section section--alt">
          <div className="container" style={{ maxWidth: "800px" }}>
            <h2 className="section__title">{brand.name} by Room</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
              {Object.entries(brand.categoryNotes).map(([cat, note]) => (
                <div key={cat} style={{ padding: "1.5rem", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", background: "white" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-md)", marginBottom: "0.5rem", textTransform: "capitalize" }}>
                    {cat === "bath" ? "Bathroom" : cat === "living" ? "Living Room" : cat}
                  </h3>
                  <p style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
                    {note}
                  </p>
                  <Link
                    href={`/products?category=${cat}`}
                    style={{ display: "inline-block", marginTop: "0.75rem", fontSize: "var(--fs-sm)", color: "var(--color-primary)", fontWeight: 500 }}
                  >
                    Browse {cat} tiles &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products from this brand */}
      {brandTiles.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section__title">{brand.name} Collection at Krishna Tiles</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
              {brandTiles.map((tile) => (
                <ProductCard key={tile.id} tile={tile} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href={`/products?brand=${brand.id}`} className="btn btn--outline btn--lg">
                View All {brand.name} Products &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section section--alt">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="section__title">{brand.name} — Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem" }}>
            {brand.faqs.map((faq, i) => (
              <details
                key={i}
                style={{ border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", background: "white", overflow: "hidden" }}
              >
                <summary
                  style={{
                    padding: "1.25rem 1.5rem",
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--fs-md)",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {faq.q}
                  <span style={{ flexShrink: 0, color: "var(--color-primary)" }}>+</span>
                </summary>
                <div style={{ padding: "0 1.5rem 1.25rem", color: "var(--color-text-secondary)", lineHeight: "1.8", fontSize: "var(--fs-sm)" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--color-primary)", color: "white", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-2xl)", marginBottom: "1rem", color: "white" }}>
            See {brand.name} at Our Showroom
          </h2>
          <p style={{ marginBottom: "2rem", opacity: 0.9 }}>
            Visit Krishna Tiles, Upper Bazar, Ranchi. Open Mon&ndash;Sat, 10 AM &ndash; 8 PM.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={getWhatsAppLink(waMsg)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
              WhatsApp Us
            </a>
            <a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg" style={{ borderColor: "white", color: "white" }}>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
