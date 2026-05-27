import { tiles } from '@/data/tiles';
import { brands } from '@/data/brands';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tile Showroom | Krishna Tiles',
  description: 'Curated collection of premium tiles from India\'s leading brands. Explore our architectural showroom.',
};

export default function TilesPage() {
  // Group featured tiles by brand
  const featuredByBrand = brands.map(brand => {
    const brandTiles = tiles
      .filter(t => t.brand === brand.id && t.featured)
      .slice(0, 6); // Show up to 6 tiles per brand
    return { brand, tiles: brandTiles };
  });

  return (
    <main className="showroom">
      {/* Hero Section */}
      <section className="showroom__hero">
        <div className="showroom__hero-content">
          <h1 className="showroom__title">Tile Showroom</h1>
          <p className="showroom__subtitle">Curated collections from India's finest brands</p>
          <p className="showroom__description">
            Step into our architectural showroom and explore premium tiles for living, bath, kitchen, and beyond.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <div className="showroom__content">
        {featuredByBrand.map(({ brand, tiles: brandTiles }) => (
          <section key={brand.id} className="showroom__brand-gallery">
            {/* Brand Header */}
            <div className="showroom__brand-intro">
              <div className="showroom__brand-info">
                <h2 className="showroom__brand-name">{brand.name}</h2>
                <p className="showroom__brand-tagline">{brand.tagline}</p>
              </div>
              <Link href={`/products/${brand.id}`} className="showroom__brand-cta">
                <span>Explore Collection</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10H15M10 5L15 10L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Tiles Masonry Grid */}
            {brandTiles.length > 0 ? (
              <div className="showroom__tiles-grid">
                {brandTiles.map((tile, idx) => (
                  <div key={tile.id} className={`showroom__tile-item showroom__tile-item--size-${idx % 3}`}>
                    <ProductCard tile={tile} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="showroom__empty">No featured tiles available</div>
            )}
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="showroom__cta-section">
        <div className="showroom__cta-content">
          <h3>Visit Our Showroom</h3>
          <p>Experience the full collection in person at our Upper Bazar location</p>
          <div className="showroom__cta-buttons">
            <a href="tel:+919999999999" className="showroom__cta-btn showroom__cta-btn--primary">
              📞 Call Us
            </a>
            <a href="https://wa.me/919999999999" className="showroom__cta-btn showroom__cta-btn--secondary">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
