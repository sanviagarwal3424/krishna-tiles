"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";
import { tiles } from "@/data/tiles";

const BACKDROP_TILE = tiles[4];
const BACKDROP_SRC = BACKDROP_TILE.image.includes("images.unsplash.com")
  ? BACKDROP_TILE.image.replace(/([?&])w=\d+/i, "$1w=1920").replace(/([?&])q=\d+/i, "$1q=82")
  : BACKDROP_TILE.image;

export default function HeroSection() {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

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

  const waHref = getWhatsAppLink(
    "Hi Krishna Tiles, I'd like free expert guidance on choosing tiles."
  );

  return (
    <section ref={wrapperRef} className="hero-wall">
      <div className="hero-wall__stage">
        <div className="hero-wall__backdrop" aria-hidden="true">
          <Image
            src={BACKDROP_SRC}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
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
            src="/images/logo-transparent.png"
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
      </div>
    </section>
  );
}
