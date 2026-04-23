import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { testimonials } from "@/data/testimonials";
import { featuredTiles } from "@/data/tiles";
import HeroSection from "@/components/HeroSection";
import ShowroomTeaser from "@/components/ShowroomTeaser";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import TrustSection from "@/components/TrustSection";
import CTAStrip from "@/components/CTAStrip";

const spaceCards = [
  { slug: "living",  name: "Living Rooms", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop" },
  { slug: "bath",    name: "Bathrooms",    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop" },
  { slug: "kitchen", name: "Kitchens",     image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop" },
  { slug: "outdoor", name: "Outdoors",     image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop" },
];

const installationImages = [
  { src: "/images/categories/floor.jpg",    alt: "Living room with premium floor tiles",  caption: "Living Room — Marble Look" },
  { src: "/images/categories/bathroom.jpg", alt: "Designer bathroom tiles installed",     caption: "Bathroom — Stone & Hex" },
  { src: "/images/categories/wall.jpg",     alt: "Decorative wall tiles",                  caption: "Accent Wall — Moroccan" },
  { src: "/images/categories/kitchen.jpg",  alt: "Kitchen with subway tile backsplash",    caption: "Kitchen — Subway" },
];

export default function HomePage() {
  const featured = featuredTiles();

  return (
    <>
      <HeroSection />

      <section className="home-statsbar" aria-label="Krishna Tiles stats">
        <div className="home-statsbar__inner">
          <div className="home-statsbar__item">
            <div className="home-statsbar__num">{business.stats.yearsInBusiness}+</div>
            <div className="home-statsbar__label">Years</div>
          </div>
          <div className="home-statsbar__item">
            <div className="home-statsbar__num">{business.stats.brandsStocked}+</div>
            <div className="home-statsbar__label">Brands</div>
          </div>
          <div className="home-statsbar__item">
            <div className="home-statsbar__num">{business.stats.tileVariety.toLocaleString()}+</div>
            <div className="home-statsbar__label">Designs</div>
          </div>
          <div className="home-statsbar__item">
            <div className="home-statsbar__num">{business.rating}★</div>
            <div className="home-statsbar__label">Google</div>
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--light home-spaces">
        <header className="home-spaces__header">
          <p className="rd-eyebrow">Collections</p>
          <h2 className="rd-display">Shop by Space</h2>
        </header>
        <div className="home-spaces__grid">
          {spaceCards.map((c) => (
            <Link key={c.slug} href={`/products?category=${c.slug}`} className="home-spaces__card">
              <Image src={c.image} alt={c.name} fill sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="home-spaces__overlay">
                <span className="home-spaces__name">{c.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rd-section rd-section--dark home-featured">
        <header className="home-featured__header">
          <p className="rd-eyebrow">This Season</p>
          <h2 className="rd-display">Featured Collection</h2>
        </header>
        <div className="home-featured__grid">
          {featured.map((tile) => (
            <ProductCard key={tile.id} tile={tile} />
          ))}
        </div>
      </section>

      <ShowroomTeaser />

      <section className="rd-section rd-section--dark home-installs">
        <header className="home-installs__header">
          <p className="rd-eyebrow">Real Homes</p>
          <h2 className="rd-display">Installations across Ranchi</h2>
        </header>
        <div className="home-installs__grid">
          {installationImages.map((img) => (
            <figure key={img.src} className="home-installs__item">
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
              <figcaption className="home-installs__caption">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="rd-section rd-section--light home-brands">
        <header className="home-brands__header">
          <p className="rd-eyebrow">Partners</p>
          <h2 className="rd-display">Brands we carry</h2>
        </header>
        <div className="home-brands__strip">
          {business.brands.map((b) => (
            <span key={b} className="home-brands__chip">{b}</span>
          ))}
        </div>
      </section>

      <section className="rd-section rd-section--dark home-testimonials">
        <header className="home-testimonials__header">
          <p className="rd-eyebrow">Reviews</p>
          <h2 className="rd-display">What customers say</h2>
        </header>
        <div className="home-testimonials__grid">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} variant="dark" />
          ))}
        </div>
      </section>

      <TrustSection />

      <CTAStrip variant="home" />
    </>
  );
}
