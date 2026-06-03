"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { business } from "@/data/business";
import { WhatsappLogo, List, X } from "@phosphor-icons/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/tiles", label: "Showroom" },
  { href: "/sanitaryware", label: "Sanitaryware" },
  { href: "/brands", label: "Brands" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const waHref = `https://wa.me/${business.whatsapp}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`header-redesigned ${scrolled ? "header-redesigned--scrolled" : ""}`}
        id="header"
      >
        <div className="header-redesigned__inner">
          <nav className="header-redesigned__nav header-redesigned__nav--left" aria-label="Primary left">
            {navLinks.slice(0, 4).map((link) => (
              <Link key={link.href} href={link.href} className="header-redesigned__link">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/" aria-label="Krishna Tiles home" className="header-redesigned__logo">
            <Image
              src="/images/logo-transparent.png"
              alt="Krishna Tiles"
              width={120}
              height={40}
              priority
              sizes="120px"
            />
          </Link>

          <nav className="header-redesigned__nav header-redesigned__nav--right" aria-label="Primary right">
            {navLinks.slice(4).map((link) => (
              <Link key={link.href} href={link.href} className="header-redesigned__link">
                {link.label}
              </Link>
            ))}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="header-redesigned__wa"
              aria-label="Chat on WhatsApp"
            >
              <WhatsappLogo size={16} weight="fill" />
              WhatsApp
            </a>
          </nav>

          <button
            className="header-redesigned__burger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="header-redesigned__mobile-menu" role="dialog" aria-modal="true">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="header-redesigned__link header-redesigned__mobile-link"
              onClick={() => setMobileOpen(false)}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rd-btn rd-btn--primary-on-dark"
            onClick={() => setMobileOpen(false)}
            style={{ alignSelf: "flex-start", marginTop: "16px", animationDelay: `${navLinks.length * 60}ms` }}
          >
            <WhatsappLogo size={16} weight="fill" style={{ marginRight: 8 }} />
            WhatsApp Us
          </a>
        </div>
      )}
    </>
  );
}
