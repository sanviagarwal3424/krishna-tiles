"use client";

import { useState } from "react";
import Link from "next/link";
import { business } from "@/data/business";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const waHref = `https://wa.me/${business.whatsapp}`;

  return (
    <>
      <header className="header-redesigned" id="header">
        <div className="header-redesigned__inner">
          <Link href="/" aria-label="Krishna Tiles home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="Krishna Tiles" width={120} />
          </Link>

          <nav className="header-redesigned__nav" aria-label="Primary">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="header-redesigned__link">
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="header-redesigned__wa"
            aria-label="Chat on WhatsApp"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.79 11.79 0 0012.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.89 11.89 0 005.76 1.47h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.17-1.24-6.16-3.44-8.45zM12.07 21.8h-.01a9.87 9.87 0 01-5.04-1.38l-.36-.22-3.74.98 1-3.65-.24-.37a9.85 9.85 0 01-1.52-5.27c0-5.45 4.44-9.88 9.9-9.88 2.65 0 5.13 1.03 7 2.9a9.82 9.82 0 012.9 6.99c0 5.45-4.44 9.88-9.89 9.88z" />
            </svg>
            WhatsApp
          </a>

          <button
            className="header-redesigned__burger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="header-redesigned__mobile-menu" role="dialog" aria-modal="true">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="header-redesigned__link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="header-redesigned__wa"
            onClick={() => setMobileOpen(false)}
            style={{ display: "inline-flex", alignSelf: "flex-start" }}
          >
            WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
