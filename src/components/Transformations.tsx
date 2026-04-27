"use client";

import { useEffect, useRef } from "react";

type Item = { src: string; caption: string };

const items: Item[] = [
  {
    src: "/videos/transformations/luxury-bathroom-transformation.mp4",
    caption: "Modular kitchen — full Calacatta marble backsplash & flooring",
  },
  {
    src: "/videos/transformations/luxury-bathroom-transformation-2.mp4",
    caption: "Spa-style bath — 3D wave wall tile with backlit niche & brass fittings",
  },
  {
    src: "/videos/transformations/luxury-tramformation-3.mp4",
    caption: "Statement kitchen island — backlit onyx front on large-format porcelain",
  },
  {
    src: "/videos/transformations/transformation-1-tile.mp4",
    caption: "Living-room makeover — high-gloss large-format floor tiles",
  },
];

export default function Transformations() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const videos = Array.from(root.querySelectorAll<HTMLVideoElement>("video"));

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const v = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        }
      },
      { threshold: 0.35 }
    );

    for (const v of videos) obs.observe(v);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="rd-section rd-section--dark home-transformations" aria-label="Real transformations">
      <header className="home-transformations__header">
        <p className="rd-eyebrow">Real Projects</p>
        <h2 className="rd-display">Transformations across Ranchi</h2>
      </header>
      <div ref={containerRef} className="home-transformations__grid">
        {items.map((it) => (
          <figure key={it.src} className="home-transformations__card">
            <div className="home-transformations__media">
              <video
                src={it.src}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={it.caption}
              />
            </div>
            <figcaption className="home-transformations__caption">{it.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
