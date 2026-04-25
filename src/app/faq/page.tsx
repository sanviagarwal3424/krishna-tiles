import type { Metadata } from "next";
import CTAStrip from "@/components/CTAStrip";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FAQ — Krishna Tiles Ranchi | Common Questions Answered",
  description:
    "Tile sizes, brands, delivery in Ranchi, installation, EMI, returns — clear answers from Krishna Tiles showroom at Upper Bazar, Ranchi.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "Where is Krishna Tiles located in Ranchi?",
    a: "We are located at Lalji Hirji Rd, Upper Bazar, Ranchi, Jharkhand 834001. We are open Monday to Saturday, 10:00 AM to 8:00 PM.",
  },
  {
    q: "What brands do you stock?",
    a: "We are authorised dealers for Kajaria, Somany, Orient Bell, Jaquar, Cera, RAK Ceramics, Johnson Tiles, and Nitco — all genuine, warranty-backed products.",
  },
  {
    q: "Do you offer home delivery in Ranchi?",
    a: "Yes, we offer same-day delivery within Ranchi. Delivery timelines for bulk orders may vary. Contact us on WhatsApp or call for delivery details.",
  },
  {
    q: "Can I get a free consultation before buying?",
    a: "Absolutely. Our experienced team offers free consultation in-store. You can also send us your room measurements on WhatsApp and we will suggest the right tiles and quantities.",
  },
  {
    q: "How do I calculate how many tiles I need?",
    a: "Measure your room's length × width in square feet. Add 10% extra for wastage during cutting and future replacements. Our team can help with this calculation for free.",
  },
  {
    q: "What's the difference between ceramic and vitrified tiles?",
    a: "Ceramic tiles are made from clay and are more affordable, suitable for walls and low-traffic floors. Vitrified tiles are denser, less porous, more durable, and best for high-traffic floors. For most Indian homes, we recommend vitrified tiles for floors.",
  },
  {
    q: "Do you install tiles or only supply?",
    a: "We primarily supply tiles, but we can connect you with trusted tile installation contractors in Ranchi. Ask us when you visit.",
  },
  {
    q: "What is your return or exchange policy?",
    a: "We accept returns or exchanges for damaged or defective tiles. Tiles must be in original packaging, unused, and returned within 15 days with a bill. Custom-cut tiles are non-returnable.",
  },
  {
    q: "Do you have EMI options?",
    a: "Yes, we offer EMI options on select purchases. Please visit the showroom or WhatsApp us for details on available EMI plans.",
  },
  {
    q: "Can I see tiles before buying?",
    a: "Yes! Our physical showroom has 5,000+ tile samples on display. We strongly encourage visiting in person to see the actual colors, textures, and finishes before deciding.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="section section--alt" style={{ paddingTop: "4rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="section__title">Frequently Asked Questions</h1>
          <p className="section__subtitle">
            Everything you need to know about tiles, our showroom, and our services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq, i) => (
              <details
                key={i}
                style={{
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  background: "white",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "1.25rem 1.5rem",
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--fs-md)",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {faq.q}
                  <span style={{ flexShrink: 0, color: "var(--color-primary)" }}>＋</span>
                </summary>
                <div
                  style={{
                    padding: "0 1.5rem 1.25rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.8",
                    fontSize: "var(--fs-sm)",
                  }}
                >
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
