import { business, getWhatsAppLink } from "@/data/business";

type CTAStripProps = {
  variant?: "home" | "contact" | "products";
};

type Copy = { eyebrow: string; headline: string };

const COPY: Record<NonNullable<CTAStripProps["variant"]>, Copy> = {
  home: { eyebrow: "Visit Today", headline: "Visit our Upper Bazar showroom" },
  contact: { eyebrow: "We're Open", headline: "Call now — we're open" },
  products: { eyebrow: "In Person", headline: "See every tile in our showroom" },
};

export default function CTAStrip({ variant = "home" }: CTAStripProps) {
  const { eyebrow, headline } = COPY[variant];
  const whatsappMsg = "Hi, I would like to visit your showroom";

  return (
    <section className="rd-section rd-section--dark cta-strip">
      <div className="cta-strip__inner">
        <div className="cta-strip__text">
          <p className="rd-eyebrow">{eyebrow}</p>
          <h2 className="rd-display">{headline}</h2>
        </div>
        <div className="cta-strip__ctas">
          <a href={`tel:${business.phone}`} className="rd-btn rd-btn--primary-on-dark">
            Call {business.phoneDisplay}
          </a>
          {variant !== "products" && (
            <a
              href={getWhatsAppLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="rd-btn rd-btn--secondary-on-dark"
            >
              WhatsApp
            </a>
          )}
          {variant !== "contact" && (
            <a
              href={business.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rd-btn rd-btn--secondary-on-dark"
            >
              Get Directions
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
