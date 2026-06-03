import { sanitarywareBrands, sanitarywareProducts } from '@/data/sanitaryware';
import Link from 'next/link';
import { Metadata } from 'next';
import { getWhatsAppLink } from '@/data/business';
import JsonLd from '@/components/JsonLd';

const SITE_URL = "https://krishnatiles.in";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Sanitaryware" },
  ],
};

export const metadata: Metadata = {
  title: 'Sanitaryware in Ranchi — Kohler, Jaquar, Roca & More | Krishna Tiles',
  description: 'Premium bathroom sanitaryware from Kohler, Roca, Parryware, Colston, Grohe & Jaquar at best prices. Visit Krishna Tiles showroom, Upper Bazar, Ranchi.',
  alternates: { canonical: '/sanitaryware' },
  openGraph: {
    title: 'Sanitaryware in Ranchi — Krishna Tiles',
    description: 'Premium bathroom fixtures from Kohler, Jaquar, Roca & more at best prices in Ranchi.',
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
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.348l-.355.21-3.677-.964.984 3.605-.235.374a9.861 9.861 0 -1.51-13.227l.39-.204a9.87 9.87 0 0 4.55-1.141m5.432 5.369c.25.069.51-.191.6-.461.231-.708.072-1.55-.572-2.159-.648-.61-1.54-.797-2.261-.565-.278.081-.423.356-.344.632.079.276.384.412.66.331.393-.115.822.035 1.174.31.352.275.572.693.532 1.122-.035.426.256.855.575.923Z" />
    </svg>
    {text}
  </a>
);

export default function SanitarywarePage() {
  const featuredProducts = sanitarywareProducts.filter(p => p.featured);

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium Sanitaryware & Bathroom Fixtures
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore India's leading brands for quality, durability, and design. From affordable to luxury, find the perfect fixtures for your bathroom.
            </p>
            <WhatsAppButton text="Enquire About Sanitaryware" />
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Featured Brands
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sanitarywareBrands.map(brand => (
              <div
                key={brand.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
              >
                {/* Brand Image */}
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Brand Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">
                    {brand.tagline}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-sm text-gray-500">
                      <strong>Price Range:</strong> {brand.priceRange}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 bg-gray-100 text-gray-900 rounded hover:bg-gray-200 transition text-sm font-medium text-center"
                    >
                      Visit Website
                    </a>
                    <WhatsAppButton text={`Tell me about ${brand.name}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
              >
                {/* Product Image */}
                <div className="relative h-56 bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">
                    {sanitarywareBrands.find(b => b.id === product.brand)?.name}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <WhatsAppButton text={`I'm interested in ${product.name}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How to Choose the Right Sanitaryware
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Budget-Conscious</h3>
              <p className="text-gray-700 mb-4">
                Parryware and Colston offer excellent quality at affordable prices. Perfect for standard homes and renovations without breaking the bank.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ ₹2,500 – ₹20,000 per piece</li>
                <li>✓ Warranty backed by manufacturers</li>
                <li>✓ Good for standard Indian bathrooms</li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⭐ Premium Choice</h3>
              <p className="text-gray-700 mb-4">
                Kohler, Grohe, and Roca for luxury bathrooms. German and European engineering meet design excellence.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ ₹12,000 – ₹60,000+ per piece</li>
                <li>✓ Advanced water-saving technology</li>
                <li>✓ Designer styles and finishes</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏠 Mid-Range</h3>
              <p className="text-gray-700 mb-4">
                Jaquar and Roca offer the sweet spot — quality, design, and reasonable pricing for modern homes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ ₹4,000 – ₹40,000 per piece</li>
                <li>✓ Contemporary designs</li>
                <li>✓ Water efficiency standard</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✨ Expert Tip</h3>
              <p className="text-gray-700 mb-4">
                Visit our showroom to see and touch different brands. We'll help you match sanitaryware with your tiles and budget.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Free consultation at Krishna Tiles</li>
                <li>✓ Large sample display</li>
                <li>✓ Installation guidance included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Choose Your Bathroom Fixtures?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team at Krishna Tiles is ready to help you find the perfect sanitaryware for your home. Visit our Upper Bazar showroom or connect on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916308289999"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-bold"
            >
              📞 Call Now
            </a>
            <WhatsAppButton text="Get Sanitaryware Consultation" />
          </div>
          <p className="text-blue-100 text-sm mt-6">
            📍 Krishna Tiles, Upper Bazar, Ranchi
          </p>
        </div>
      </section>
    </main>
  );
}
