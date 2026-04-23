import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";

export default function ShowroomTeaser() {
  return (
    <section className="rd-section rd-section--light showroom-teaser">
      <figure className="showroom-teaser__media">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop"
          alt="Krishna Tiles showroom, Upper Bazar, Ranchi"
          fill
          sizes="100vw"
          priority={false}
          style={{ objectFit: "cover" }}
        />
        <div className="showroom-teaser__overlay">
          <p className="rd-eyebrow">The Showroom</p>
          <h2 className="rd-display" style={{ color: "var(--bone)" }}>
            Step inside — 4,200 sq ft
          </h2>
          <p className="rd-body">
            Upper Bazar, Ranchi · Mon–Sat · 10 AM – 8 PM
          </p>
          <div className="showroom-teaser__ctas">
            <Link href="/contact" className="rd-btn rd-btn--primary-on-dark">
              Visit Showroom
            </Link>
            <a
              href={`tel:${business.phone}`}
              className="rd-btn rd-btn--secondary-on-dark"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </figure>
    </section>
  );
}
