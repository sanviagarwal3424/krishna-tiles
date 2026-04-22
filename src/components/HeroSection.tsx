"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem 2rem",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Logo */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.97)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="Krishna Tiles | Sanitaryware | Taps | Kitchens"
          style={{ width: "clamp(260px, 45vw, 600px)", height: "auto" }}
        />
      </div>

      {/* Tagline */}
      <p
        style={{
          marginTop: "2.5rem",
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-xs)",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
          fontWeight: 400,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
        }}
      >
        Crafted Surfaces. Timeless Spaces.
      </p>

      {/* Divider line */}
      <div
        style={{
          width: visible ? "60px" : "0px",
          height: "1px",
          background: "var(--color-border)",
          marginTop: "2rem",
          transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
        }}
      />

      {/* Subtitle */}
      <p
        style={{
          marginTop: "2rem",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
          fontWeight: 400,
          color: "var(--color-text-light)",
          letterSpacing: "-0.01em",
          lineHeight: 1.4,
          maxWidth: "480px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s",
        }}
      >
        Ranchi&apos;s premium destination for tiles, sanitaryware &amp; modern kitchens
      </p>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: visible ? 0.4 : 0,
          transition: "opacity 1s ease 1.5s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "var(--fs-xs)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
          }}
        >
          Scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
        >
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
