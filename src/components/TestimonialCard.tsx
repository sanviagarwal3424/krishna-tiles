import type { Testimonial } from "@/data/testimonials";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__stars">
        {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
      </div>
      <p className="testimonial-card__review">&ldquo;{testimonial.review}&rdquo;</p>
      <div className="testimonial-card__footer">
        <div className="testimonial-card__avatar">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="testimonial-card__name">{testimonial.name}</div>
          <div className="testimonial-card__meta">
            {testimonial.location} · {testimonial.project}
          </div>
        </div>
      </div>
    </div>
  );
}
