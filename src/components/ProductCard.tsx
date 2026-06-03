import Link from "next/link";
import Image from "next/image";
import type { Tile } from "@/data/tiles";
import { getWhatsAppLink } from "@/data/business";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

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
        <WhatsappLogo size={14} weight="fill" />
        Quick Quote
      </a>
    </article>
  );
}
