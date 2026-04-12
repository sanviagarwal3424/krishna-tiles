import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { getWhatsAppLink } from "@/data/business";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMsg = `Hi, I'm interested in the "${product.name}" (${product.size}, ${product.finish}). Can you share more details and pricing?`;

  return (
    <div className="product-card" id={`product-card-${product.id}`}>
      <Link href={`/products/${product.id}`} className="product-card__image-wrap">
        <div className="product-card__badges">
          {product.isNew && <span className="badge badge--new">New</span>}
          {product.isFeatured && <span className="badge badge--featured">Featured</span>}
        </div>
        <Image
          src={product.images[0] || "/images/placeholder.jpg"}
          alt={product.name}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="product-card__image"
          style={{ objectFit: "cover" }}
        />
      </Link>
      <div className="product-card__body">
        <span className="product-card__brand">{product.brand}</span>
        <Link href={`/products/${product.id}`}>
          <h3 className="product-card__name">{product.name}</h3>
        </Link>
        <div className="product-card__specs">
          <span className="product-card__spec">{product.size}</span>
          <span className="product-card__spec">{product.finish}</span>
          <span className="product-card__spec">{product.material}</span>
        </div>
        <div className="product-card__price">{product.priceRange}</div>
        <div className="product-card__actions">
          <a
            href={getWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            💬 Enquire
          </a>
          <Link href={`/products/${product.id}`} className="btn btn--outline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
