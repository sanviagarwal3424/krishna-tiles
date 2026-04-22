"use client";

import Link from "next/link";
import { business, getCallLink } from "@/data/business";

const DESKTOP_TILES: { url: string; tint?: string }[] = [
  { url: "https://images.unsplash.com/photo-1587749158407-58ef2b89ccf8?w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1550053808-52a75a05955d?w=600&q=80", tint: "orange" },
  { url: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1566305977571-5666677c6e98?w=600&q=80", tint: "black" },
  { url: "https://images.unsplash.com/photo-1558346648-9757f2fa4474?w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1697497624156-bcccebccffc4?w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?w=600&q=80", tint: "blue" },
  { url: "https://images.unsplash.com/photo-1608501821300-4f99e58bba77?w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1551554781-c46200ea959d?w=600&q=80", tint: "purple" },
  { url: "https://images.unsplash.com/photo-1603369425250-b276f2006ec0?w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1616362258782-7511b61686ea?w=600&q=80", tint: "green" },
  { url: "https://images.unsplash.com/photo-1606767041004-6b918abe92be?w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1694382224140-cb7443c6a3ec?w=600&q=80", tint: "gray" },
  { url: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1623197532650-bacb8a68914e?w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1640280882429-204f63d777e7?w=600&q=80", tint: "orange" },
  { url: "https://images.unsplash.com/photo-1762087483751-a283e113c52c?w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1678742755904-6c3fc8ba6602?w=600&q=80", tint: "purple" },
  { url: "https://images.unsplash.com/photo-1718073869252-3b78770dc972?w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1747696766706-5485b39bf358?w=600&q=80", tint: "black" },
  { url: "https://images.unsplash.com/photo-1523350165414-082d792c4bcc?w=600&q=80" },
  { url: "https://images.unsplash.com/photo-1759150467207-1d4870e074fc?w=600&q=80", tint: "green" },
  { url: "https://images.unsplash.com/photo-1599209250635-26c180f28419?w=600&q=80", tint: "blue" },
  { url: "https://images.unsplash.com/photo-1548967199-79324abbe7dc?w=600&q=80" },
];

export default function HeroSection() {
  return (
    <section className="hero-wall">
      <div className="hero-wall__grid" aria-hidden="true">
        {DESKTOP_TILES.map((t, i) => (
          <div
            key={i}
            className={`hero-wall__tile${t.tint ? ` hero-wall__tile--${t.tint}` : ""}`}
            style={{ backgroundImage: `url('${t.url}')` }}
          />
        ))}
      </div>
      <div className="hero-wall__spotlight" aria-hidden="true" />
      <div className="hero-wall__crest">
        <div className="hero-wall__eyebrow">Since 2004 · Ranchi</div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="Krishna Tiles | Sanitaryware | Taps | Kitchens"
          className="hero-wall__logo"
        />
        <div className="hero-wall__rule" />
        <div className="hero-wall__cta-row">
          <Link href="/contact" className="hero-wall__cta hero-wall__cta--primary">
            Visit Our Showroom
          </Link>
          <a href={getCallLink()} className="hero-wall__cta hero-wall__cta--secondary">
            Call {business.phoneDisplay}
          </a>
        </div>
        <div className="hero-wall__showroom-line">
          Upper Bazar, Ranchi · Open today 10 AM – 8 PM
        </div>
      </div>
    </section>
  );
}
