import { business } from "@/data/business";

const items = [
  {
    title: `${business.stats.yearsInBusiness}+ Years in Ranchi`,
    body: "Trusted since 2004 for premium tiles, sanitaryware and bathroom fittings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2l9 4.5v6c0 5-3.5 9-9 11-5.5-2-9-6-9-11v-6L12 2z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: `${business.stats.brandsStocked}+ Premium Brands`,
    body: "Kajaria, Somany, Jaquar, Cera, RAK and more — curated in one showroom.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 7h18M3 12h18M3 17h18" />
        <circle cx="6" cy="7" r="1.2" fill="currentColor" />
        <circle cx="14" cy="12" r="1.2" fill="currentColor" />
        <circle cx="9" cy="17" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: `${business.stats.tileVariety.toLocaleString()}+ Tile Designs`,
    body: "Floor, wall, bathroom, kitchen and outdoor — find your fit with expert guidance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" />
        <rect x="13" y="3" width="8" height="8" />
        <rect x="3" y="13" width="8" height="8" />
        <rect x="13" y="13" width="8" height="8" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="rd-section rd-section--light trust-redesigned" id="trust-section">
      <div className="rd-container">
        <div className="trust-redesigned__grid">
          {items.map((item) => (
            <div key={item.title} className="trust-redesigned__item">
              <div className="trust-redesigned__icon">{item.icon}</div>
              <h3 className="trust-redesigned__title">{item.title}</h3>
              <p className="trust-redesigned__body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
