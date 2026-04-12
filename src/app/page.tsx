import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import TrustSection from "@/components/TrustSection";
import CTAStrip from "@/components/CTAStrip";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* ===== HERO ===== */}
      <HeroSection />

      {/* ===== STATS BAR ===== */}
      <div className="stats-bar">
        <div className="stats-bar__inner">
          <div className="stats-bar__item">
            <div className="stats-bar__number">{business.stats.yearsInBusiness}+</div>
            <div className="stats-bar__label">Years in Business</div>
          </div>
          <div className="stats-bar__item">
            <div className="stats-bar__number">{business.stats.brandsStocked}+</div>
            <div className="stats-bar__label">Premium Brands</div>
          </div>
          <div className="stats-bar__item">
            <div className="stats-bar__number">{business.stats.tileVariety.toLocaleString()}+</div>
            <div className="stats-bar__label">Tile Designs</div>
          </div>
          <div className="stats-bar__item">
            <div className="stats-bar__number">{business.rating}</div>
            <div className="stats-bar__label">Google Rating</div>
          </div>
        </div>
      </div>

      {/* ===== CATEGORIES ===== */}
      <section className="section" id="categories">
        <div className="container">
          <h2 className="section__title">Shop by Space</h2>
          <p className="section__subtitle">
            Curated collections for every room
          </p>
          <div className="categories-grid">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.slug}`}
                className="category-card"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="category-card__image"
                  style={{ objectFit: "cover" }}
                />
                <div className="category-card__overlay">
                  <h3 className="category-card__name">{cat.name}</h3>
                  <span className="category-card__count">
                    {cat.productCount}+ designs
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="section section--alt" id="featured">
        <div className="container">
          <h2 className="section__title">Featured Collection</h2>
          <p className="section__subtitle">
            Hand-picked from our latest arrivals
          </p>
          <div className="products-grid">
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/products" className="btn btn--outline btn--lg">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="section" id="gallery">
        <div className="container">
          <h2 className="section__title">Real Installations</h2>
          <p className="section__subtitle">
            How our tiles transform homes across Ranchi
          </p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image
                src="/images/categories/floor.jpg"
                alt="Modern living room with premium floor tiles"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="gallery-item__caption">
                Living Room — Marble Look Floor Tiles
              </div>
            </div>
            <div className="gallery-item">
              <Image
                src="/images/categories/bathroom.jpg"
                alt="Modern bathroom with designer tiles"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="gallery-item__caption">
                Bathroom — Stone &amp; Hexagonal Tiles
              </div>
            </div>
            <div className="gallery-item">
              <Image
                src="/images/categories/wall.jpg"
                alt="Decorative wall tiles"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="gallery-item__caption">
                Accent Wall — Moroccan Pattern
              </div>
            </div>
            <div className="gallery-item">
              <Image
                src="/images/categories/kitchen.jpg"
                alt="Modern kitchen with subway tile backsplash"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="gallery-item__caption">
                Kitchen — Subway Tile Backsplash
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRANDS ===== */}
      <section className="section section--alt" id="brands">
        <div className="container">
          <h2 className="section__title">Brands We Stock</h2>
          <p className="section__subtitle">
            Authorised dealer for India&apos;s most trusted tile &amp; sanitaryware brands
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            {business.brands.map((brand) => (
              <Link
                key={brand}
                href="/brands"
                style={{
                  padding: "0.6rem 1.5rem",
                  border: "1px solid var(--color-border)",
                  background: "transparent",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--fs-xs)",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-light)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
              >
                {brand}
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/brands" className="btn btn--outline">
              View All Brands
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="testimonials">
        <div className="container">
          <h2 className="section__title">What Customers Say</h2>
          <p className="section__subtitle">
            {business.rating} · {business.reviews} reviews on Google
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/testimonials" className="btn btn--outline">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TRUST ===== */}
      <TrustSection />

      {/* ===== CTA ===== */}
      <CTAStrip />
    </>
  );
}
