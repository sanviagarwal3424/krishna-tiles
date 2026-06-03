import { business } from "@/data/business";
import { ShieldCheck, SquaresFour, Swatches } from "@phosphor-icons/react/dist/ssr";

const items = [
  {
    title: `${business.stats.yearsInBusiness}+ Years in Ranchi`,
    body: "Trusted since 2004 for premium tiles, sanitaryware and bathroom fittings.",
    icon: <ShieldCheck size={40} weight="light" />,
  },
  {
    title: `${business.stats.brandsStocked}+ Premium Brands`,
    body: "Kajaria, Somany, Jaquar, Cera, RAK and more — curated in one showroom.",
    icon: <Swatches size={40} weight="light" />,
  },
  {
    title: `${business.stats.tileVariety.toLocaleString()}+ Tile Designs`,
    body: "Floor, wall, bathroom, kitchen and outdoor — find your fit with expert guidance.",
    icon: <SquaresFour size={40} weight="light" />,
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
