import type { Testimonial } from "@/data/testimonials";

interface Props {
  testimonial: Testimonial;
  variant?: "dark" | "light";
}

export default function TestimonialCard({ testimonial, variant = "dark" }: Props) {
  return (
    <div className={`testimonial-redesigned testimonial-redesigned--${variant}`}>
      <div className="testimonial-redesigned__mark" aria-hidden="true">&ldquo;</div>
      <p className="testimonial-redesigned__quote">{testimonial.review}</p>
      <div className="testimonial-redesigned__name">{testimonial.name}</div>
      <div className="testimonial-redesigned__area">
        {testimonial.location} &middot; {testimonial.project}
      </div>
    </div>
  );
}
