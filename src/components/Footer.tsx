import Link from "next/link";
import Image from "next/image";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Image
              src="/images/logo.png"
              alt={business.name}
              width={180}
              height={108}
              className="footer__brand-img"
            />
            <p className="footer__desc">
              {business.subTagline}. Visit our showroom to explore {business.stats.tileVariety.toLocaleString()}+ tile
              designs from India&apos;s top brands.
            </p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <a href={getCallLink()} className="btn btn--outline-light btn--sm">
                Call Us
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--sm"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__heading">Quick Links</h4>
            <nav className="footer__links">
              <Link href="/" className="footer__link">Home</Link>
              <Link href="/products" className="footer__link">All Products</Link>
              <Link href="/products?category=floor" className="footer__link">Floor Tiles</Link>
              <Link href="/products?category=wall" className="footer__link">Wall Tiles</Link>
              <Link href="/products?category=bathroom" className="footer__link">Bathroom Tiles</Link>
              <Link href="/contact" className="footer__link">Contact Us</Link>
            </nav>
          </div>

          <div>
            <h4 className="footer__heading">Categories</h4>
            <nav className="footer__links">
              <Link href="/products?category=kitchen" className="footer__link">Kitchen Tiles</Link>
              <Link href="/products?category=outdoor" className="footer__link">Outdoor Tiles</Link>
              <Link href="/products?category=sanitaryware" className="footer__link">Sanitaryware</Link>
              <Link href="/brands" className="footer__link">All Brands</Link>
              <Link href="/gallery" className="footer__link">Gallery</Link>
            </nav>
          </div>

          <div>
            <h4 className="footer__heading">Visit Our Store</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">&#x2316;</span>
              <span>{business.address.full}</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">&#x260E;</span>
              <a href={getCallLink()}>{business.phoneDisplay}</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">&#x25F7;</span>
              <span>
                {business.timings.note}: {business.timings.weekdays}
                <br />
                Sunday: {business.timings.sunday}
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span>Ranchi&apos;s Premium Tile Destination</span>
        </div>
      </div>
    </footer>
  );
}
