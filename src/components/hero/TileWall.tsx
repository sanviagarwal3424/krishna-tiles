'use client';

import Image from 'next/image';
import { Tile, tiles } from '@/data/tiles';

type Props = {
  onSelect: (tile: Tile) => void;
  selectedId?: string | null;
};

export default function TileWall({ onSelect, selectedId }: Props) {
  return (
    <div className="ih-wall" role="list">
      {tiles.map((tile, i) => {
        const mobileHidden = i >= 12 ? 'ih-wall__item--mobile-hidden' : '';
        const active = selectedId === tile.id ? 'ih-wall__item--active' : '';
        return (
          <button
            key={tile.id}
            type="button"
            role="listitem"
            tabIndex={0}
            className={`ih-wall__item ${mobileHidden} ${active}`.trim()}
            onClick={() => onSelect(tile)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(tile);
              }
            }}
            aria-label={`${tile.name}, ${tile.size}, ${tile.material}`}
          >
            <Image
              src={tile.image}
              alt={tile.name}
              fill
              sizes="(max-width: 768px) 33vw, 16vw"
              className="ih-wall__img"
            />
            <span className="ih-wall__overlay" aria-hidden="true">
              <span className="rd-h3 ih-wall__name">{tile.name}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
