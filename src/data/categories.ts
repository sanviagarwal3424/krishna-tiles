export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "floor",
    name: "Floor Tiles",
    slug: "floor",
    description: "Premium vitrified & ceramic floor tiles for every room",
    icon: "🏠",
    image: "/images/categories/floor.jpg",
    productCount: 120,
  },
  {
    id: "wall",
    name: "Wall Tiles",
    slug: "wall",
    description: "Decorative & designer wall tiles for stunning interiors",
    icon: "🧱",
    image: "/images/categories/wall.jpg",
    productCount: 95,
  },
  {
    id: "bathroom",
    name: "Bathroom Tiles",
    slug: "bathroom",
    description: "Anti-skid & waterproof tiles for modern bathrooms",
    icon: "🚿",
    image: "/images/categories/bathroom.jpg",
    productCount: 80,
  },
  {
    id: "kitchen",
    name: "Kitchen Tiles",
    slug: "kitchen",
    description: "Heat-resistant & easy-clean kitchen backsplash tiles",
    icon: "🍳",
    image: "/images/categories/kitchen.jpg",
    productCount: 65,
  },
  {
    id: "outdoor",
    name: "Outdoor Tiles",
    slug: "outdoor",
    description: "Durable & weather-resistant outdoor & parking tiles",
    icon: "🌿",
    image: "/images/categories/outdoor.jpg",
    productCount: 45,
  },
  {
    id: "sanitaryware",
    name: "Sanitaryware",
    slug: "sanitaryware",
    description: "Premium basins, bathtubs & bathroom furniture",
    icon: "🛁",
    image: "/images/categories/sanitaryware.jpg",
    productCount: 60,
  },
];
