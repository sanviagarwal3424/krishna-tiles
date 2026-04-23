import type { Metadata } from "next";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";
import ShowroomPreview from "@/components/contact/ShowroomPreview";
import EnquiryForm from "@/components/EnquiryForm";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Visit Our Showroom — Krishna Tiles | Upper Bazar, Ranchi",
  description: `Visit Krishna Tiles at ${business.address.full}. Open Mon–Sat, 10 AM – 8 PM. Call ${business.phoneDisplay} or WhatsApp us for tile enquiries.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="rd-section rd-section--dark contact-hero">
        <div className="rd-container">
          <p className="rd-eyebrow">The Showroom</p>
          <h1 className="rd-display" style={{ color: "var(--bone)", marginTop: 12 }}>
            Upper Bazar, Ranchi
          </h1>
          <p className="rd-body contact-hero__line">
            Mon–Sat &middot; 10 AM – 8 PM
          </p>
        </div>
      </section>

      <section className="rd-section rd-section--dark contact-visit">
        <div className="rd-container contact-visit__grid">
          <div className="contact-visit__col">
            <p className="rd-eyebrow">Address</p>
            <p className="rd-body contact-visit__body">
              {business.address.line1}
              <br />
              {business.address.city}, {business.address.state} {business.address.pincode}
            </p>
            <a
              href={business.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rd-btn rd-btn--secondary-on-dark"
              style={{ marginTop: 16 }}
            >
              Get Directions
            </a>
          </div>

          <div className="contact-visit__col">
            <p className="rd-eyebrow">Hours</p>
            <p className="rd-body contact-visit__body">
              <strong style={{ color: "var(--bone)" }}>Monday – Saturday</strong>
              <br />
              10:00 AM – 8:00 PM
              <br />
              <br />
              <strong style={{ color: "var(--bone)" }}>Sunday</strong>
              <br />
              Closed
            </p>
          </div>

          <div className="contact-visit__col">
            <p className="rd-eyebrow">Contact</p>
            <p className="rd-body contact-visit__body">
              <a href={getCallLink()} className="contact-visit__link">
                {business.phoneDisplay}
              </a>
              <br />
              <a
                href={getWhatsAppLink("Hi, I would like to visit your showroom.")}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-visit__link"
              >
                WhatsApp
              </a>
              <br />
              <a href={`mailto:${business.email}`} className="contact-visit__link">
                {business.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--light contact-map" aria-label="Location map">
        <div className="rd-container">
          <header className="contact-map__header">
            <p className="rd-eyebrow">Find Us</p>
            <h2 className="rd-display">Lalji Hirji Rd, Upper Bazar</h2>
          </header>
          <div className="contact-map__frame">
            <iframe
              src={business.mapEmbedUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Krishna Tiles location — Upper Bazar, Ranchi"
            />
          </div>
          <div className="contact-map__cta">
            <a
              href={business.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rd-btn rd-btn--primary-on-light"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <ShowroomPreview />

      <section className="rd-section rd-section--light contact-form">
        <div className="rd-container contact-form__grid">
          <header className="contact-form__header">
            <p className="rd-eyebrow">Send an Enquiry</p>
            <h2 className="rd-display">Tell us about your space</h2>
            <p className="rd-body">
              Fill this out and we&apos;ll get back via WhatsApp within business hours.
            </p>
          </header>
          <div className="contact-form__form">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <CTAStrip variant="contact" />
    </>
  );
}
