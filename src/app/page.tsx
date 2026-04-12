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
            <div className="stats-bar__label">Years</div>
          </div>
          <div className="stats-bar__item">
            <div className="stats-bar__number">{business.stats.brandsStocked}+</div>
            <div className="stats-bar__label">Brands</div>
          </div>
          <div className="stats-bar__item">
            <div className="stats-bar__number">{business.stats.tileVariety.toLocaleString()}+</div>
            <div className="stats-bar__label">Designs</div>
          </div>
          <div className="stats-bar__item">
            <div className="stats-bar__number">{business.rating}</div>
            <div className="stats-bar__label">Google Rating</div>
          </div>
        </div>
      </div>

      {/* ===== BRAND STORY ===== */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="eyebrow" style={{ textAlign: "center" }}>Our Story</p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "var(--color-text-heading)",
              marginBottom: "1.5rem",
            }}
          >
            Two decades of crafting beautiful spaces across Ranchi
          </h2>
          <p
            style={{
              fontSize: "var(--fs-base)",
              color: "var(--color-text-light)",
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            From handpicked premium tiles to curated sanitaryware collections,
            we bring the world&apos;s finest surfaces to your doorstep. Every space
            we touch becomes a statement of timeless design.
          </p>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="section section--alt" id="categories">
        <div className="container">
          <p className="eyebrow" style={{ textAlign: "center" }}>Collections</p>
          <h2 className="section__title">Shop by Space</h2>
          <p className="section__subtitle">
            Curated collections for every room in your home
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
      <section className="section" id="featured">
        <div className="container">
          <p className="eyebrow" style={{ textAlign: "center" }}>Featured</p>
          <h2 className="section__title">Latest Arrivals</h2>
          <p className="section__subtitle">
            Hand-picked from our newest collections
          </p>
          <div className="products-grid">
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/products" className="btn btn--outline btn--lg">
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="section section--alt" id="gallery">
        <div className="container">
          <p className="eyebrow" style={{ textAlign: "center" }}>Inspiration</p>
          <h2 className="section__title">Real Installations</h2>
          <p className="section__subtitle">
            How our surfaces transform homes across Ranchi
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
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/gallery" className="btn btn--outline btn--lg">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BRANDS ===== */}
      <section className="section" id="brands">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ textAlign: "center" }}>Partners</p>
          <h2 className="section__title">Brands We Stock</h2>
          <p className="section__subtitle">
            Authorised dealer for India&apos;s most trusted tile &amp; sanitaryware brands
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            {business.brands.map((brand) => (
              <Link
                key={brand}
                href="/brands"
                style={{
                  padding: "0.65rem 1.75rem",
                  border: "1px solid var(--color-border)",
                  background: "transparent",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--fs-xs)",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-text-light)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                {brand}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/brands" className="btn btn--outline">
              View All Brands
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section--alt" id="testimonials">
        <div className="container">
          <p className="eyebrow" style={{ textAlign: "center" }}>Reviews</p>
          <h2 className="section__title">What Customers Say</h2>
          <p className="section__subtitle">
            Rated {business.rating} stars across {business.reviews} Google reviews
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2px",
            }}
          >
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
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
