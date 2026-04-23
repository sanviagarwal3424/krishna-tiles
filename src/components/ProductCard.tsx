import Link from "next/link";
import Image from "next/image";
import type { Tile } from "@/data/tiles";

type ProductCardProps = {
  tile: Tile;
  priority?: boolean;
};

export default function ProductCard({ tile, priority }: ProductCardProps) {
  return (
    <Link
      href={`/contact?tile=${encodeURIComponent(tile.id)}`}
      className="tile-card"
      aria-label={`${tile.name} — see in showroom`}
    >
      <article>
        <div className="tile-card__media">
          <Image
            src={tile.image}
            alt={`${tile.name} — ${tile.material}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="tile-card__image"
            priority={priority}
          />
          <div className="tile-card__overlay">
            <span className="rd-btn rd-btn--primary-on-dark tile-card__cta">
              See in Showroom
            </span>
          </div>
        </div>
        <div className="tile-card__meta">
          <h3 className="tile-card__name">{tile.name}</h3>
          <p className="tile-card__spec">
            {tile.size} · {tile.material}
          </p>
        </div>
      </article>
    </Link>
  );
}
