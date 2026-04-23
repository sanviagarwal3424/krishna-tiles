'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Tile, tiles } from '@/data/tiles';
import { getWhatsAppLink } from '@/data/business';

type Props = {
  tile: Tile | null;
  onClose: () => void;
};

export default function TileDetailPanel({ tile, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstCtaRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!tile) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const onDocClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDocClick);
    firstCtaRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDocClick);
    };
  }, [tile, onClose]);

  if (!tile) return null;

  const index = tiles.findIndex(t => t.id === tile.id) + 1;
  const indexLabel = String(index).padStart(2, '0');

  return (
    <div
      ref={panelRef}
      className="ih-panel"
      role="dialog"
      aria-modal="true"
      aria-label={`${tile.name} details`}
    >
      <button
        type="button"
        className="ih-panel__close"
        aria-label="Close"
        onClick={onClose}
      >
        <span aria-hidden="true">×</span>
      </button>

      <div className="ih-panel__label">Tile {indexLabel} · {tile.category}</div>
      <h3 className="rd-h3 ih-panel__name">{tile.name}</h3>
      <p className="rd-small ih-panel__meta">{tile.size} · {tile.material}</p>
      <p className="rd-body ih-panel__desc">{tile.description}</p>

      <div className="ih-panel__ctas">
        <Link
          ref={firstCtaRef}
          href="/contact"
          className="rd-btn rd-btn--primary-on-dark ih-panel__cta"
        >
          See in Showroom
        </Link>
        <a
          href={getWhatsAppLink(`Hi, I'm interested in ${tile.name}`)}
          className="rd-btn rd-btn--secondary-on-dark ih-panel__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}
