import type { Metadata } from "next";
import Link from "next/link";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";
import CTAStrip from "@/components/CTAStrip";
import TrustSection from "@/components/TrustSection";

export const metadata: Metadata = {
  title: "About Krishna Tiles — Ranchi's Premium Tile Authority Since 2004",
  description:
    "20+ years serving Ranchi and Jharkhand. Authorised for 50+ premium brands, 5,000+ designs on display, trusted by homeowners, architects and builders.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ background: "var(--color-bg-section)", paddingTop: "4rem" }}>
        <div className="container" style={{ maxWidth: "760px", textAlign: "center" }}>
          <div className="hero__badge" style={{ display: "inline-block", marginBottom: "1rem" }}>
            🏆 Trusted since {new Date().getFullYear() - business.stats.yearsInBusiness}
          </div>
          <h1 className="section__title">About Krishna Tiles</h1>
          <p className="section__subtitle">
            Ranchi&apos;s most trusted tile showroom — serving homeowners, builders, and
            architects for over {business.stats.yearsInBusiness} years.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="section__title" style={{ textAlign: "left", fontSize: "var(--fs-2xl)" }}>Our Story</h2>
          <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.9", marginBottom: "1.5rem" }}>
            Krishna Tiles was founded with a simple belief: every home deserves beautiful,
            durable tiles at honest prices. Starting as a small shop in Upper Bazar, Ranchi,
            we have grown into one of the city&apos;s most comprehensive tile showrooms.
          </p>
          <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.9", marginBottom: "1.5rem" }}>
            Over {business.stats.yearsInBusiness} years, we&apos;ve helped more than{" "}
            {business.stats.happyCustomers.toLocaleString()} families transform their homes.
            We stock {business.stats.tileVariety.toLocaleString()}+ designs from{" "}
            {business.stats.brandsStocked}+ India&apos;s top brands including Kajaria, Somany,
            RAK Ceramics, Jaquar, and more.
          </p>
          <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.9" }}>
            We are more than a tile shop — we are your design partner. Our experienced team
            offers free consultations to help you choose the right tiles for your budget,
            style, and application.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--alt">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {[
              { number: `${business.stats.yearsInBusiness}+`, label: "Years in Business" },
              { number: `${business.stats.happyCustomers.toLocaleString()}+`, label: "Happy Customers" },
              { number: `${business.stats.brandsStocked}+`, label: "Brands Stocked" },
              { number: `${business.stats.tileVariety.toLocaleString()}+`, label: "Tile Designs" },
            ].map((stat) => (
              <div key={stat.label} className="hero__stat" style={{ background: "white", borderRadius: "var(--radius-md)", padding: "2rem 1rem", boxShadow: "var(--shadow-sm)" }}>
                <div className="hero__stat-number" style={{ fontSize: "var(--fs-3xl)", color: "var(--color-primary)" }}>{stat.number}</div>
                <div className="hero__stat-label" style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="section__title">Why Choose Us?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
            {[
              { icon: "🏆", title: "Authorised Dealers", desc: "Official dealer for Kajaria, Somany, Jaquar, RAK Ceramics & more." },
              { icon: "💡", title: "Free Consultation", desc: "Expert guidance to choose the right tiles for your space and budget." },
              { icon: "🚚", title: "Same-day Delivery", desc: "Fast delivery within Ranchi. No long waits after you order." },
              { icon: "⭐", title: `${business.rating} Google Rating`, desc: `Rated by ${business.reviews}+ verified customers on Google.` },
            ].map((item) => (
              <div key={item.title} style={{ padding: "1.5rem", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-md)", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)", lineHeight: "1.7" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="section section--alt">
        <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
          <h2 className="section__title">Visit Our Showroom</h2>
          <p className="section__subtitle">{business.address.full}</p>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "2rem" }}>
            Mon–Sat: {business.timings.weekdays} · Sunday: {business.timings.sunday}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={getCallLink()} className="btn btn--primary btn--lg">
              <span className="btn__icon">📞</span> Call Now
            </a>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
              <span className="btn__icon">💬</span> WhatsApp
            </a>
            <a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg">
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>

      <TrustSection />
      <CTAStrip />
    </>
  );
}
