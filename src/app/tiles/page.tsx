import { tiles, featuredTiles } from '@/data/tiles';
import { brands } from '@/data/brands';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { Metadata } from 'next';
import { getWhatsAppLink } from '@/data/business';
import JsonLd from '@/components/JsonLd';

const SITE_URL = "https://krishnatiles.in";

export const metadata: Metadata = {
  title: 'Tile Showroom in Ranchi — Kajaria, Somany, Johnson & More | Krishna Tiles',
  description: 'Visit Krishna Tiles showroom in Ranchi for 5,000+ tile designs from Kajaria, Somany, Johnson, RAK Ceramics & more. Best prices on floor, wall & bathroom tiles. Upper Bazar, Ranchi.',
  alternates: { canonical: '/tiles' },
  openGraph: {
    title: 'Tile Showroom in Ranchi — Krishna Tiles',
    description: '5,000+ tile designs from India\'s top brands at best prices. Visit our Upper Bazar showroom.',
    type: 'website',
  },
};

const WhatsAppButton = ({ text }: { text: string }) => (
  <a
    href={getWhatsAppLink(text)}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.348l-.355.21-3.677-.964.984 3.605-.235.374a9.861 9.861 0 -1-13.227l.39-.204a9.87 9.87 0 0 4.55-1.141m5.432 5.369c.25.069.51-.191.6-.461.231-.708.072-1.55-.572-2.159-.648-.61-1.54-.797-2.261-.565-.278.081-.423.356-.344.632.079.276.384.412.66.331.393-.115.822.035 1.174.31.352.275.572.693.532 1.122-.035.426.256.855.575.923Z" />
    </svg>
    {text}
  </a>
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Tile Showroom" },
  ],
};

export default function TilesPage() {
  const allFeatured = featuredTiles();

  const featuredByBrand = brands.map(brand => {
    const brandTiles = tiles
      .filter(t => t.brand === brand.id && t.featured)
      .slice(0, 6); // Show up to 6 tiles per brand
    return { brand, tiles: brandTiles };
  }).filter(({ tiles: brandTiles }) => brandTiles.length > 0);

  return (
    <main className="showroom">
      <JsonLd data={breadcrumbSchema} />
      {/* Hero Section */}
      <section className="showroom__hero">
        <div className="showroom__hero-content">
          <h1 className="showroom__title">Tile Showroom</h1>
          <p className="showroom__subtitle">Curated collections from India's finest brands</p>
          <p className="showroom__description">
            Step into our architectural showroom and explore premium tiles for living, bath, kitchen, and beyond.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <WhatsAppButton text="Get Tile Recommendations" />
            <a href="/sanitaryware" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Explore Sanitaryware →
            </a>
          </div>
        </div>
      </section>

      {/* Featured Tiles Section */}
      {allFeatured.length > 0 && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Most Famous Tiles</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Hand-picked bestsellers from India's leading tile brands. Find your perfect match.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {allFeatured.slice(0, 6).map(tile => (
                <div key={tile.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={tile.image}
                      alt={tile.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{tile.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{tile.description}</p>
                    <div className="text-xs text-gray-500 mb-4">
                      <p><strong>Size:</strong> {tile.size}</p>
                      <p><strong>Material:</strong> {tile.material}</p>
                    </div>
                    <WhatsAppButton text={`I'm interested in ${tile.name}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-4">Visit our showroom to see all tiles in person or connect for more options.</p>
              <WhatsAppButton text="See All Tiles" />
            </div>
          </div>
        </section>
      )}

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
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Showroom</h3>
          <p className="text-lg text-orange-100 mb-8">
            Experience the full collection in person at our Upper Bazar location. Our experts will help you find the perfect tiles for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916308289999" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition font-bold">
              📞 Call Us
            </a>
            <WhatsAppButton text="Get Expert Advice" />
          </div>
          <p className="text-orange-100 text-sm mt-8">
            📍 Krishna Tiles, Upper Bazar, Ranchi | Open 10 AM – 7 PM daily
          </p>
        </div>
      </section>
    </main>
  );
}
