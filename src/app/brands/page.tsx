import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Top Tile Brands — Krishna Tiles Ranchi | Kajaria, Somany, Jaquar & More",
  description:
    "We are authorised dealers for India's top tile and sanitaryware brands — Kajaria, Somany, Orient Bell, Jaquar, Cera, RAK Ceramics and more. Visit our showroom in Ranchi.",
};

export default function BrandsPage() {
  return (
    <>
      <section className="section section--alt" style={{ paddingTop: "4rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="hero__badge" style={{ display: "inline-block", marginBottom: "1rem" }}>
            🏅 Authorised Dealers
          </div>
          <h1 className="section__title">Brands We Stock</h1>
          <p className="section__subtitle">
            Official authorised dealer for India&apos;s top tile and sanitaryware brands.
            Only genuine products. No imitations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                style={{
                  padding: "2rem",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  background: "white",
                  boxShadow: "var(--shadow-sm)",
                  transition: "box-shadow 0.2s",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--color-primary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "var(--fs-lg)",
                    marginBottom: "1rem",
                  }}
                >
                  {brand.name.charAt(0)}
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--fs-xl)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {brand.name}
                </h2>
                <div
                  style={{
                    fontSize: "var(--fs-sm)",
                    color: "var(--color-primary)",
                    fontWeight: 500,
                    marginBottom: "0.75rem",
                  }}
                >
                  {brand.tagline}
                </div>
                <p
                  style={{
                    fontSize: "var(--fs-sm)",
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.7",
                    marginBottom: "1rem",
                  }}
                >
                  {brand.description}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                  {brand.categories.map((cat) => (
                    <span
                      key={cat}
                      style={{
                        padding: "0.2rem 0.6rem",
                        background: "var(--color-bg-section)",
                        borderRadius: "999px",
                        fontSize: "var(--fs-xs)",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)" }}>
                  Price range: <strong style={{ color: "var(--color-text-primary)" }}>{brand.priceRange}</strong>
                </div>
                <Link
                  href={`/products?brand=${brand.id}`}
                  className="btn btn--outline btn--sm"
                  style={{ marginTop: "1.25rem", display: "inline-block" }}
                >
                  View {brand.name} Products →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
