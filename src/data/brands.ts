export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  categories: string[];
  priceRange: string;
}

export const brands: Brand[] = [
  {
    id: "kajaria",
    name: "Kajaria",
    tagline: "India's No.1 Tile Brand",
    description: "India's largest tile manufacturer with 40+ years of excellence. Known for cutting-edge designs, premium vitrified tiles, and unmatched quality consistency.",
    categories: ["Floor Tiles", "Wall Tiles", "Outdoor"],
    priceRange: "₹45 – ₹200/sq.ft",
  },
  {
    id: "somany",
    name: "Somany",
    tagline: "Living by Design",
    description: "One of India's leading ceramic companies. Somany is known for its wide range of digital tiles, polished vitrified tiles, and eco-friendly products.",
    categories: ["Floor Tiles", "Wall Tiles", "Bathroom"],
    priceRange: "₹40 – ₹160/sq.ft",
  },
  {
    id: "orientbell",
    name: "Orient Bell",
    tagline: "Tiles for Every Dream",
    description: "A trusted name in the Indian tile industry, Orient Bell offers a comprehensive range from affordable ceramics to premium GVT tiles, with strong design innovation.",
    categories: ["Floor Tiles", "Wall Tiles", "Outdoor"],
    priceRange: "₹35 – ₹120/sq.ft",
  },
  {
    id: "jaquar",
    name: "Jaquar",
    tagline: "Pure Living",
    description: "India's premium sanitaryware and bath fittings brand. Jaquar products are synonymous with luxury, durability, and sophisticated design for modern bathrooms.",
    categories: ["Sanitaryware", "Bath Fittings", "Shower Systems"],
    priceRange: "₹3,000 – ₹80,000",
  },
  {
    id: "cera",
    name: "Cera",
    tagline: "Beautiful Spaces. Better Life.",
    description: "A diversified brand offering sanitaryware, faucets, tiles, and wellness products. Known for value-for-money products without compromising on quality.",
    categories: ["Sanitaryware", "Bathroom Tiles", "Faucets"],
    priceRange: "₹30 – ₹100/sq.ft",
  },
  {
    id: "rak",
    name: "RAK Ceramics",
    tagline: "More Than You Expect",
    description: "A global ceramics giant based in UAE, RAK Ceramics offers ultra-premium large-format tiles used in luxury hotels and residences worldwide.",
    categories: ["Floor Tiles", "Wall Tiles", "Large Format"],
    priceRange: "₹80 – ₹250/sq.ft",
  },
  {
    id: "johnson",
    name: "Johnson Tiles",
    tagline: "Tiles with a Difference",
    description: "A flagship brand of H&R Johnson, one of India's oldest and most trusted ceramic tile companies, known for consistent quality and wide distribution.",
    categories: ["Floor Tiles", "Wall Tiles", "Kitchen"],
    priceRange: "₹30 – ₹90/sq.ft",
  },
  {
    id: "nitco",
    name: "Nitco",
    tagline: "Experience the Difference",
    description: "Known for natural stone, marble, and premium tile collections. Nitco brings Italian design sensibilities to Indian homes at accessible price points.",
    categories: ["Floor Tiles", "Marble Tiles", "Natural Stone"],
    priceRange: "₹50 – ₹180/sq.ft",
  },
];
