import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import CTAStrip from "@/components/CTAStrip";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Customer Reviews — Krishna Tiles Ranchi",
  description:
    "See what our customers say about Krishna Tiles. 10,000+ happy customers across Ranchi trust us for premium tiles & sanitaryware.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="section section--alt" style={{ paddingTop: "4rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="hero__badge" style={{ display: "inline-block", marginBottom: "1rem" }}>
            ⭐ {business.rating} Google Rating · {business.reviews}+ Reviews
          </div>
          <h1 className="section__title">What Our Customers Say</h1>
          <p className="section__subtitle">
            {business.stats.happyCustomers.toLocaleString()}+ families across Ranchi trust us for
            their tile and sanitaryware needs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
          <h2 className="section__title">Leave a Review</h2>
          <p className="section__subtitle">
            Visited our showroom? We&apos;d love to hear from you!
          </p>
          <a
            href={business.socialLinks.google}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg"
          >
            ⭐ Review on Google
          </a>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
