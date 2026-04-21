"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { business, getCallLink } from "@/data/business";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/brands", label: "Brands" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="header" id="header">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            <Image
              src="/logo.svg"
              alt="Krishna Tiles"
              width={150}
              height={93}
              style={{ objectFit: "contain", maxHeight: "55px", width: "auto" }}
              priority
            />
          </Link>

          <nav className="header__nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="header__link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header__cta">
            <a
              href={getCallLink()}
              className="header__cta-link"
              aria-label={`Call ${business.phoneDisplay}`}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" opacity="0.6">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              <span style={{ fontSize: "var(--fs-xs)", letterSpacing: "0.06em" }}>
                {business.phoneDisplay}
              </span>
            </a>
          </div>

          <button
            className="header__menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${mobileOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-nav__link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div className="mobile-nav__cta">
          <a href={getCallLink()} className="btn btn--primary btn--lg">
            Call Now — {business.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp btn--lg"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
