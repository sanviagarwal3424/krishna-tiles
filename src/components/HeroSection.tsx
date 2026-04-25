"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";
import { tiles, type Tile } from "@/data/tiles";

const HERO_WALL_COUNT_DESKTOP = 18;
const HERO_WALL_COUNT_MOBILE = 12;

function heroTileUrl(src: string) {
  if (!src.includes("images.unsplash.com")) return src;
  return src.replace(/([?&])w=\d+/i, "$1w=480").replace(/([?&])q=\d+/i, "$1q=65");
}

export default function HeroSection() {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [selected, setSelected] = useState<Tile | null>(null);

  const wallTiles = useMemo(
    () => tiles.slice(0, HERO_WALL_COUNT_DESKTOP),
    []
  );

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const mqMobile = window.matchMedia("(max-width: 768px)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mqMobile.matches || mqReduced.matches) {
      el.style.setProperty("--scroll-progress", "0");
      return;
    }

    const update = () => {
      rafRef.current = null;
      const rect = el.getBoundingClientRect();
      const wrapperTop = rect.top + window.scrollY;
      const denom = el.offsetHeight - window.innerHeight;
      const raw = denom > 0 ? (window.scrollY - wrapperTop) / denom : 0;
      el.style.setProperty(
        "--scroll-progress",
        String(Math.max(0, Math.min(1, raw)))
      );
    };

    const onScroll = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const handleSelect = useCallback((tile: Tile) => setSelected(tile), []);
  const handleClose = useCallback(() => setSelected(null), []);

  const waHref = getWhatsAppLink(
    "Hi Krishna Tiles, I'd like free expert guidance on choosing tiles."
  );

  return (
    <section ref={wrapperRef} className="hero-wall">
      <div className="hero-wall__stage">
        <div className="hero-wall__grid" role="list">
          {wallTiles.map((tile, i) => (
            <button
              key={tile.id}
              type="button"
              role="listitem"
              className={`hero-wall__tile${tile.tint ? ` hero-wall__tile--${tile.tint}` : ""}${
                i >= HERO_WALL_COUNT_MOBILE ? " hero-wall__tile--hide-mobile" : ""
              }`}
              style={{ backgroundImage: `url('${heroTileUrl(tile.image)}')` }}
              onClick={() => handleSelect(tile)}
              aria-label={`${tile.name}, ${tile.size} — tap for quote`}
            />
          ))}
        </div>
        <div className="hero-wall__spotlight" aria-hidden="true" />

        <div className="hero-wall__crest">
          <ul className="hero-wall__trust" aria-label="Trust indicators">
            <li>Since 2004</li>
            <li aria-hidden="true">·</li>
            <li>{business.stats.brandsStocked}+ Brands</li>
            <li aria-hidden="true">·</li>
            <li>{business.stats.tileVariety.toLocaleString()}+ Designs</li>
            <li aria-hidden="true">·</li>
            <li>
              <span aria-hidden="true">★</span> {business.rating} Google
            </li>
          </ul>

          <Image
            src="/images/logo.png"
            alt="Krishna Tiles"
            className="hero-wall__logo"
            width={480}
            height={160}
            priority
          />

          <div className="hero-wall__rule" />

          <h1 className="hero-wall__headline">
            Ranchi&apos;s premium destination for tiles,
            <br />
            sanitaryware &amp; luxury surfaces.
          </h1>

          <p className="hero-wall__subhead">
            5,000+ curated designs across 50+ brands. See every tile in person at our showroom.
          </p>

          <div className="hero-wall__cta-row">
            <Link href="/contact" className="hero-wall__cta hero-wall__cta--primary">
              Visit Our Showroom
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-wall__cta hero-wall__cta--wa"
              aria-label="WhatsApp consultation"
            >
              WhatsApp Us
            </a>
            <a href={getCallLink()} className="hero-wall__cta hero-wall__cta--secondary">
              Call {business.phoneDisplay}
            </a>
          </div>

          <div className="hero-wall__showroom-line">
            Upper Bazar, Ranchi · Open today 10 AM – 8 PM · Free expert guidance
          </div>
        </div>

        {selected ? (
          <TileQuotePanel tile={selected} onClose={handleClose} />
        ) : null}
      </div>
    </section>
  );
}

function TileQuotePanel({ tile, onClose }: { tile: Tile; onClose: () => void }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) onClose();
    };
    const t = window.setTimeout(() => {
      window.addEventListener("mousedown", onDown);
    }, 0);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("mousedown", onDown);
    };
  }, [onClose]);

  const quoteText = `Hi Krishna Tiles, I'm interested in ${tile.name} (${tile.size}). Please share a quote.`;
  const waHref = getWhatsAppLink(quoteText);

  return (
    <div
      ref={ref}
      className="hero-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hero-panel-name"
    >
      <button
        type="button"
        className="hero-panel__close"
        aria-label="Close"
        onClick={onClose}
      >
        ×
      </button>
      <div className="hero-panel__label">Selected Tile</div>
      <h3 id="hero-panel-name" className="hero-panel__name">{tile.name}</h3>
      <p className="hero-panel__meta">
        {tile.size} · {tile.material}
      </p>
      <p className="hero-panel__desc">{tile.description}</p>
      <div className="hero-panel__ctas">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-wall__cta hero-wall__cta--primary hero-panel__cta"
        >
          WhatsApp Quote
        </a>
        <a
          href={getCallLink()}
          className="hero-wall__cta hero-wall__cta--secondary hero-panel__cta"
        >
          Call for a Quote
        </a>
      </div>
    </div>
  );
}
