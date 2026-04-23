import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductById, getRelatedProducts } from "@/data/products";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";
import EnquiryForm from "@/components/EnquiryForm";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — ${product.brand} | Krishna Tiles Ranchi`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);
  const whatsappMsg = `Hi, I'm interested in the "${product.name}" (${product.size}, ${product.finish}, ${product.brand}). Can you share pricing and availability?`;

  const specs = [
    { label: "Size", value: product.size },
    { label: "Finish", value: product.finish },
    { label: "Material", value: product.material },
    { label: "Brand", value: product.brand },
    { label: "Category", value: product.category.charAt(0).toUpperCase() + product.category.slice(1) },
    { label: "Price Range", value: product.priceRange },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.priceRange,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: "Krishna Tiles" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <section className="product-detail">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb__sep">›</span>
            <Link href="/products">Products</Link>
            <span className="breadcrumb__sep">›</span>
            <Link href={`/products?category=${product.category}`}>
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <span className="breadcrumb__sep">›</span>
            <span>{product.name}</span>
          </div>

          <div className="product-detail__layout">
            {/* Gallery */}
            <div className="product-detail__gallery">
              <div className="product-detail__main-image">
                <Image
                  src={product.images[0] || "/images/placeholder.jpg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Info */}
            <div className="product-detail__info">
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem" }}>
                {product.isNew && <span className="badge badge--new">New Arrival</span>}
                {product.isFeatured && <span className="badge badge--featured">Featured</span>}
              </div>

              <div className="product-detail__brand">{product.brand}</div>
              <h1 className="product-detail__title">{product.name}</h1>
              <div className="product-detail__price">{product.priceRange}</div>
              <p className="product-detail__description">{product.description}</p>

              {/* Specs */}
              <div className="product-detail__specs">
                <div className="product-detail__specs-title">Specifications</div>
                {specs.map((s) => (
                  <div key={s.label} className="product-detail__spec-row">
                    <span className="product-detail__spec-label">{s.label}</span>
                    <span className="product-detail__spec-value">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="product-detail__specs-title">Features</div>
              <div className="product-detail__features">
                {product.features.map((f) => (
                  <span key={f} className="product-detail__feature">
                    ✓ {f}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="product-detail__ctas">
                <a href={getCallLink()} className="btn btn--primary btn--lg">
                  <span className="btn__icon">📞</span>
                  Call for Best Price — {business.phoneDisplay}
                </a>
                <a
                  href={getWhatsAppLink(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp btn--lg"
                >
                  <span className="btn__icon">💬</span>
                  Enquire on WhatsApp
                </a>
              </div>

              {/* Enquiry Form */}
              <div style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--color-bg-section)", borderRadius: "var(--radius-md)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", marginBottom: "1rem", fontSize: "var(--fs-lg)" }}>
                  Send an Enquiry
                </h3>
                <EnquiryForm productName={product.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <h2 className="section__title">You May Also Like</h2>
            <p className="section__subtitle">
              Similar tiles you might be interested in
            </p>
            <div className="products-grid-rd products-grid-rd--after">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="tile-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="tile-card__media">
                    <Image
                      src={p.images[0] || "/images/placeholder.jpg"}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="tile-card__meta">
                    <h3 className="tile-card__name">{p.name}</h3>
                    <p className="tile-card__spec">
                      {p.size} · {p.brand}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
