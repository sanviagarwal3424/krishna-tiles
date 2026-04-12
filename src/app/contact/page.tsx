import type { Metadata } from "next";
import { business, getCallLink, getWhatsAppLink } from "@/data/business";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us — Krishna Tiles | Ranchi, Jharkhand",
  description: `Visit Krishna Tiles at ${business.address.full}. Call ${business.phoneDisplay} or WhatsApp us for tile enquiries, pricing, and expert consultation.`,
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container">
        <h1 className="section__title" style={{ textAlign: "left", marginBottom: "0.5rem" }}>
          Contact Us
        </h1>
        <p className="section__subtitle" style={{ textAlign: "left", marginBottom: "2rem" }}>
          Visit our showroom or reach out — we&apos;re here to help you find the perfect tiles
        </p>

        {/* Map */}
        <div className="contact-page__map">
          <iframe
            src={business.mapEmbedUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Krishna Tiles Location Map"
          />
        </div>

        <div className="contact-page__layout">
          {/* Contact Info */}
          <div>
            <div className="contact-card">
              <div className="contact-card__icon">📍</div>
              <h3 className="contact-card__title">Store Address</h3>
              <p className="contact-card__text">
                {business.address.line1}
                <br />
                {business.address.city}, {business.address.state} {business.address.pincode}
              </p>
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--sm"
                style={{ marginTop: "1rem" }}
              >
                📍 Get Directions
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">📞</div>
              <h3 className="contact-card__title">Call Us</h3>
              <p className="contact-card__text">
                Call us for pricing, availability, and expert tile consultation.
              </p>
              <a
                href={getCallLink()}
                className="btn btn--primary btn--sm"
                style={{ marginTop: "1rem" }}
              >
                📞 {business.phoneDisplay}
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">💬</div>
              <h3 className="contact-card__title">WhatsApp</h3>
              <p className="contact-card__text">
                Send photos of your room or share requirements — we&apos;ll suggest the best tiles.
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--sm"
                style={{ marginTop: "1rem" }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">🕐</div>
              <h3 className="contact-card__title">Store Hours</h3>
              <p className="contact-card__text">
                <strong>{business.timings.note}:</strong> {business.timings.weekdays}
                <br />
                <strong>Sunday:</strong> {business.timings.sunday}
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">🚚</div>
              <h3 className="contact-card__title">Services</h3>
              <p className="contact-card__text">
                {business.services.join(" • ")}
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="contact-page__form">
            <h2 className="contact-page__form-title">Send an Enquiry</h2>
            <p style={{ color: "var(--color-text-light)", marginBottom: "1.5rem", fontSize: "var(--fs-sm)" }}>
              Fill this form and your message will be sent to us via WhatsApp.
              We&apos;ll respond within minutes during business hours.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
