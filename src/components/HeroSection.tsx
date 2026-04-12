"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        minHeight: "90vh",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          opacity: 0,
          animation: "hero-logo-in 1s ease-out forwards",
        }}
      >
        <Image
          src="/images/logo.svg"
          alt="Krishna Tiles | Sanitaryware | Taps | Kitchens"
          width={520}
          height={330}
          priority
          style={{ width: "clamp(260px, 38vw, 520px)", height: "auto" }}
        />
      </div>

      <p
        style={{
          marginTop: "2rem",
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-sm)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-text-light)",
          opacity: showText ? 1 : 0,
          transition: "opacity 1s ease 1.3s",
        }}
      >
        Crafted Surfaces. Timeless Spaces.
      </p>

      <style jsx>{`
        @keyframes hero-logo-in {
          from {
            opacity: 0;
            transform: translateY(-16px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
