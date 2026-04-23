import Link from "next/link";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";

export default function Footer() {
  return (
    <footer className="footer-redesigned" id="footer">
      <div className="footer-redesigned__grid">
        <div className="footer-redesigned__col">
          <h3>Shop</h3>
          <Link href="/products">All Products</Link>
          <Link href="/products?category=floor">Floor Tiles</Link>
          <Link href="/products?category=wall">Wall Tiles</Link>
          <Link href="/products?category=bathroom">Bathroom Tiles</Link>
          <Link href="/products?category=kitchen">Kitchen Tiles</Link>
          <Link href="/products?category=outdoor">Outdoor Tiles</Link>
          <Link href="/products?category=sanitaryware">Sanitaryware</Link>
          <Link href="/brands">Brands</Link>
        </div>

        <div className="footer-redesigned__col">
          <h3>Visit</h3>
          <p>{business.address.full}</p>
          <p>
            {business.timings.note}: {business.timings.weekdays}
          </p>
          <p>Sunday: {business.timings.sunday}</p>
          <a href={business.socialLinks.google} target="_blank" rel="noopener noreferrer">
            Get Directions
          </a>
        </div>

        <div className="footer-redesigned__col">
          <h3>Contact</h3>
          <a href={getCallLink()}>{business.phoneDisplay}</a>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${business.email}`}>{business.email}</a>
          <a href={business.socialLinks.google} target="_blank" rel="noopener noreferrer">
            Google Reviews
          </a>
        </div>
      </div>

      <div className="footer-redesigned__bottom">
        &copy; {new Date().getFullYear()} {business.name} &middot; Upper Bazar, Ranchi
      </div>
    </footer>
  );
}
