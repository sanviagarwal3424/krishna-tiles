'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Tile } from '@/data/tiles';
import { business } from '@/data/business';
import TileWall from './TileWall';
import TileDetailPanel from './TileDetailPanel';

export default function InteractiveHero() {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [selected, setSelected] = useState<Tile | null>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const mql = window.matchMedia('(max-width: 768px)');
    if (mql.matches) {
      el.style.setProperty('--scroll-progress', '1');
      return;
    }

    const update = () => {
      rafRef.current = null;
      const rect = el.getBoundingClientRect();
      const wrapperTop = rect.top + window.scrollY;
      const denom = el.offsetHeight - window.innerHeight;
      const raw = denom > 0 ? (window.scrollY - wrapperTop) / denom : 0;
      const clamped = Math.max(0, Math.min(1, raw));
      el.style.setProperty('--scroll-progress', String(clamped));
    };

    const onScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleSelect = useCallback((tile: Tile) => {
    setSelected(tile);
  }, []);

  const handleClose = useCallback(() => {
    setSelected(null);
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="ih"
      role="region"
      aria-label="Tile gallery"
    >
      <div className="ih__stage">
        <TileWall onSelect={handleSelect} selectedId={selected?.id ?? null} />

        <div className="ih__crest" aria-hidden={false}>
          <div className="ih__crest-inner">
            <span className="rd-eyebrow">Since 2004 · Upper Bazar, Ranchi</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="Krishna Tiles"
              className="ih__logo"
              width={220}
              height={220}
            />
            <hr className="rd-rule" />
            <p className="ih__hours">Mon–Sat · 10 AM – 8 PM</p>
            <div className="ih__ctas">
              <Link
                href="/contact"
                className="rd-btn rd-btn--primary-on-dark"
              >
                Visit Showroom
              </Link>
              <a
                href={`tel:${business.phone}`}
                className="rd-btn rd-btn--secondary-on-dark"
              >
                Call {business.phoneDisplay}
              </a>
            </div>
            <p className="ih__scroll-hint" aria-hidden="true">
              ↓ Scroll to explore tiles
            </p>
          </div>
        </div>

        <TileDetailPanel tile={selected} onClose={handleClose} />
      </div>
    </section>
  );
}
