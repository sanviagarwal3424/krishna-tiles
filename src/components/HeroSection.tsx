"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";
import { tiles } from "@/data/tiles";
import { WhatsappLogo, Phone, MapPin, Star } from "@phosphor-icons/react";

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

        <div className="hero-wall__crest hero-wall__crest--split">
          {/* Left: Content */}
          <div className="hero-wall__content">
            <div className="rd-eyebrow" style={{ marginBottom: 16 }}>
              Since 2004 &middot; {business.stats.brandsStocked}+ Brands &middot;{" "}
              <Star size={12} weight="fill" style={{ verticalAlign: "-1px" }} />{" "}
              {business.rating} Google
            </div>

            <Image
              src="/images/logo-transparent.png"
              alt="Krishna Tiles"
              className="hero-wall__logo"
              width={480}
              height={160}
              priority
            />

            <hr className="rd-rule" style={{ margin: "20px 0 16px" }} />

            <h1 className="hero-wall__headline hero-wall__headline--left">
              Ranchi&apos;s premium destination for tiles, sanitaryware &amp; luxury surfaces.
            </h1>

            <p className="hero-wall__subhead hero-wall__subhead--left">
              {business.stats.tileVariety.toLocaleString()}+ curated designs across{" "}
              {business.stats.brandsStocked}+ brands. See every tile in person at our showroom.
            </p>

            <div className="hero-wall__cta-row hero-wall__cta-row--left">
              <Link href="/contact" className="rd-btn rd-btn--primary-on-light">
                Visit Our Showroom
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-wall__cta hero-wall__cta--wa"
                aria-label="WhatsApp consultation"
              >
                <WhatsappLogo size={16} weight="fill" />
                WhatsApp Us
              </a>
              <a href={getCallLink()} className="hero-wall__cta hero-wall__cta--secondary">
                <Phone size={14} weight="bold" />
                Call {business.phoneDisplay}
              </a>
            </div>

            <div className="hero-wall__showroom-line">
              <MapPin size={12} weight="bold" style={{ verticalAlign: "-1px", marginRight: 4 }} />
              Upper Bazar, Ranchi &middot; Open today 10 AM &#8211; 8 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
