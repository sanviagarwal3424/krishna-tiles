import Link from "next/link";
import Image from "next/image";
import type { Tile } from "@/data/tiles";
import { getWhatsAppLink } from "@/data/business";

type ProductCardProps = {
  tile: Tile;
  priority?: boolean;
};

export default function ProductCard({ tile, priority }: ProductCardProps) {
  const waHref = getWhatsAppLink(
    `Hi Krishna Tiles, please share a quote for "${tile.name}" (${tile.size}).`
  );

  return (
    <article className="tile-card">
      <Link
        href={`/products/${tile.id}`}
        className="tile-card__link"
        aria-label={`${tile.name} — view details`}
      >
        <div className="tile-card__media">
          <Image
            src={tile.image}
            alt={`${tile.name} — ${tile.material}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="tile-card__image"
            priority={priority}
            loading={priority ? undefined : "lazy"}
          />
          <div className="tile-card__overlay">
            <span className="rd-btn rd-btn--primary-on-dark tile-card__cta">
              View Details
            </span>
          </div>
        </div>
        <div className="tile-card__meta">
          <h3 className="tile-card__name">{tile.name}</h3>
          <p className="tile-card__spec">
            {tile.size} · {tile.material}
          </p>
        </div>
      </Link>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="tile-card__wa"
        aria-label={`WhatsApp a quick quote for ${tile.name}`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.79 11.79 0 0012.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.89 11.89 0 005.76 1.47h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.17-1.24-6.16-3.44-8.45zM12.07 21.8h-.01a9.87 9.87 0 01-5.04-1.38l-.36-.22-3.74.98 1-3.65-.24-.37a9.85 9.85 0 01-1.52-5.27c0-5.45 4.44-9.88 9.9-9.88 2.65 0 5.13 1.03 7 2.9a9.82 9.82 0 012.9 6.99c0 5.45-4.44 9.88-9.89 9.88z" />
        </svg>
        Quick Quote
      </a>
    </article>
  );
}
