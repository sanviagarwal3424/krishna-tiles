import type { Metadata } from "next";
import Link from "next/link";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";
import { categories } from "@/data/categories";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Tiles in Ranchi — Best Tile Shop | Krishna Tiles",
  description:
    "Looking for tiles in Ranchi? Krishna Tiles at Upper Bazar is Ranchi's #1 tile showroom. Floor tiles, wall tiles, bathroom tiles & sanitaryware. Visit us or call now.",
  keywords:
    "tiles in Ranchi, tile shop Ranchi, floor tiles Ranchi, bathroom tiles Ranchi, best tiles showroom Ranchi, buy tiles Ranchi",
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description: business.tagline,
  url: "https://krishnatiles.com",
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.359,
    longitude: 85.334,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviews,
  },
  priceRange: "₹₹",
  servesCuisine: null,
};

export default function TilesInRanchiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* Hero */}
      <section className="section section--alt" style={{ paddingTop: "4rem" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <div className="hero__badge" style={{ display: "inline-block", marginBottom: "1rem" }}>
            📍 Upper Bazar, Ranchi
          </div>
          <h1 className="section__title">
            Best Tile Shop in Ranchi
          </h1>
          <p className="section__subtitle">
            Looking for <strong>tiles in Ranchi</strong>? Krishna Tiles is your one-stop destination
            for floor tiles, wall tiles, bathroom tiles, kitchen tiles, and sanitaryware — all from
            India&apos;s top brands.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
            <a href={getCallLink()} className="btn btn--primary btn--lg">
              <span className="btn__icon">📞</span> Call Now — {business.phoneDisplay}
            </a>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
              <span className="btn__icon">💬</span> WhatsApp Us
            </a>
            <a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg">
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Why Krishna Tiles */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="section__title">Why Krishna Tiles is Ranchi&apos;s Most Trusted Tile Shop</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
            {[
              { icon: "🏆", h: `${business.stats.yearsInBusiness}+ Years in Business`, p: "Serving Ranchi families since 2004 with honest pricing and genuine products." },
              { icon: "🎨", h: `${business.stats.tileVariety.toLocaleString()}+ Designs`, p: "India's largest tile variety under one roof — floor, wall, outdoor, and sanitaryware." },
              { icon: "🏅", h: `${business.stats.brandsStocked}+ Top Brands`, p: "Authorised dealer for Kajaria, Somany, Jaquar, RAK Ceramics, and more." },
              { icon: "⭐", h: `${business.rating} Google Rating`, p: `Trusted by ${business.stats.happyCustomers.toLocaleString()}+ customers across Ranchi.` },
            ].map((item) => (
              <div key={item.h} style={{ padding: "1.5rem", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", background: "white" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-md)", marginBottom: "0.5rem" }}>{item.h}</h3>
                <p style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)", lineHeight: "1.7" }}>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">Tile Categories Available in Ranchi</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 1.25rem",
                  background: "white",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--fs-sm)",
                  transition: "border-color 0.2s",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Store Info */}
      <section className="section">
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 className="section__title">Visit Our Showroom in Ranchi</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>📍 Address</div>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-sm)", lineHeight: 1.7 }}>{business.address.full}</p>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>🕐 Store Hours</div>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-sm)", lineHeight: 1.7 }}>
                {business.timings.note}: {business.timings.weekdays}<br />
                Sunday: {business.timings.sunday}
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>📞 Contact</div>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-sm)", lineHeight: 1.7 }}>
                {business.phoneDisplay}<br />
                {business.email}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
