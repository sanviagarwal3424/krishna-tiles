import { business } from "@/data/business";

export default function TrustSection() {
  const stats = [
    { number: `${business.stats.yearsInBusiness}+`, label: "Years Experience" },
    { number: `${business.stats.brandsStocked}+`, label: "Premium Brands" },
    { number: `${business.stats.tileVariety}+`, label: "Tile Designs" },
    { number: `${business.stats.happyCustomers.toLocaleString()}+`, label: "Happy Customers" },
  ];

  return (
    <section className="trust" id="trust-section">
      <div className="container">
        <div className="trust__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="trust__stat">
              <div className="trust__stat-number">{stat.number}</div>
              <div className="trust__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="trust__brands">
          <div className="trust__brands-title">Brands We Stock</div>
          <div className="trust__brands-list">
            {business.brands.map((brand) => (
              <span key={brand} className="trust__brand">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
