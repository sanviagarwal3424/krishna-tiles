export interface Product {
  id: string;
  name: string;
  category: string;
  size: string;
  finish: string;
  priceRange: string;
  brand: string;
  material: string;
  description: string;
  features: string[];
  images: string[];
  inStock: boolean;
  isFeatured: boolean;
  isNew: boolean;
}

// Unsplash images — high-quality tile & interior photos
const U = "https://images.unsplash.com/photo-";

export const products: Product[] = [
  // ── KAJARIA ──────────────────────────────────────────
  {
    id: "kajaria-eternity-white",
    name: "Eternity White Marble",
    category: "floor",
    size: "800x800 mm",
    finish: "Glossy",
    priceRange: "On Request",
    brand: "Kajaria",
    material: "GVT Vitrified",
    description: "Kajaria's flagship Eternity White GVT tile with realistic marble veining. Double-charge technology ensures deep, consistent patterns that won't wear off.",
    features: ["Double Charge", "Stain Resistant", "High Gloss", "BIS Certified"],
    images: [
      `${U}1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop`,
      `${U}1615529328331-f8917597711f?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: true,
    isNew: false,
  },
  {
    id: "kajaria-onyx-gold",
    name: "Onyx Gold Premium",
    category: "floor",
    size: "1200x1200 mm",
    finish: "Polished",
    priceRange: "On Request",
    brand: "Kajaria",
    material: "GVT Vitrified",
    description: "Ultra-premium large format Onyx Gold GVT tile with translucent amber veining. Statement flooring for discerning interiors.",
    features: ["Large Format", "Translucent Effect", "Nano Polished", "Exclusive Design"],
    images: [
      `${U}1614850715649-1d0106293bd1?w=800&q=80&auto=format&fit=crop`,
      `${U}1600607687644-c7171b46f557?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: true,
    isNew: true,
  },
  {
    id: "kajaria-stone-3d-wall",
    name: "Vogue 3D Stone Wall",
    category: "wall",
    size: "300x600 mm",
    finish: "Textured",
    priceRange: "On Request",
    brand: "Kajaria",
    material: "Ceramic",
    description: "Kajaria Vogue series 3D textured wall tile mimicking natural stone. Creates dramatic depth on feature walls and facades.",
    features: ["3D Relief Texture", "UV Stable", "Impact Resistant", "Frost Proof"],
    images: [
      `${U}1558618047-3401e8f56dab?w=800&q=80&auto=format&fit=crop`,
      `${U}1556909114-f6e7ad7d3136?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: true,
    isNew: false,
  },

  // ── SOMANY ───────────────────────────────────────────
  {
    id: "somany-statuario-slab",
    name: "Statuario Slab",
    category: "floor",
    size: "800x1600 mm",
    finish: "Polished",
    priceRange: "On Request",
    brand: "Somany",
    material: "PGVT Vitrified",
    description: "Somany's Statuario slab with bold grey veining on pure white. Book-matchable for seamless luxury walls and floors.",
    features: ["Slab Format", "Book Match Ready", "High Gloss", "Rectified Edge"],
    images: [
      `${U}1600585154526-990dced4db0d?w=800&q=80&auto=format&fit=crop`,
      `${U}1586023492125-27b2c045efd7?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: true,
    isNew: true,
  },
  {
    id: "somany-durastep-wood",
    name: "Durastep Wood Plank",
    category: "floor",
    size: "200x1200 mm",
    finish: "Matte",
    priceRange: "On Request",
    brand: "Somany",
    material: "Porcelain",
    description: "Somany Durastep anti-skid wood plank tile. Authentic grain texture, waterproof and termite-proof — all the warmth of wood without the maintenance.",
    features: ["Anti-Skid", "Waterproof", "Termite Proof", "Scratch Resistant"],
    images: [
      `${U}1562663474-6cbb3eaa4d14?w=800&q=80&auto=format&fit=crop`,
      `${U}1597218868981-b7b42f59c7c8?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: true,
    isNew: false,
  },
  {
    id: "somany-hexagon-bathroom",
    name: "Duragres Hexagon Mosaic",
    category: "bathroom",
    size: "300x300 mm",
    finish: "Matte",
    priceRange: "On Request",
    brand: "Somany",
    material: "Porcelain",
    description: "Somany Duragres hexagonal mosaic in pristine white. Adds contemporary geometric pattern to bathroom floors and shower areas.",
    features: ["Anti-Bacterial Glaze", "Low Water Absorption", "Easy to Clean", "Slip Resistant"],
    images: [
      `${U}1584622650111-993a426fbf0a?w=800&q=80&auto=format&fit=crop`,
      `${U}1552321554-5fefe8c9ef14?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: true,
    isNew: false,
  },

  // ── ORIENT BELL ──────────────────────────────────────
  {
    id: "orient-bell-moroccan",
    name: "Moroccan Blue Pattern",
    category: "wall",
    size: "300x300 mm",
    finish: "Matte",
    priceRange: "On Request",
    brand: "Orient Bell",
    material: "Ceramic",
    description: "Orient Bell designer Moroccan-inspired wall tile with intricate geometric pattern. Ideal for kitchen backsplashes and accent walls.",
    features: ["Handcrafted Look", "Fade Resistant", "Easy Installation", "Vibrant Colors"],
    images: [
      `${U}1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop`,
      `${U}1574739782594-db4ead022697?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: true,
    isNew: false,
  },
  {
    id: "orient-bell-sandstone",
    name: "Trim Sandstone Natural",
    category: "outdoor",
    size: "400x400 mm",
    finish: "Anti-Skid",
    priceRange: "On Request",
    brand: "Orient Bell",
    material: "Vitrified",
    description: "Orient Bell Trim series sandstone outdoor tile. Heavy-duty anti-skid surface built to withstand harsh weather and heavy foot traffic.",
    features: ["Heavy Anti-Skid", "Frost Proof", "UV Resistant", "Weather Resistant"],
    images: [
      `${U}1553434320-e7a95fd40a46?w=800&q=80&auto=format&fit=crop`,
      `${U}1590490360182-c33d57733427?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: false,
    isNew: false,
  },

  // ── RAK CERAMICS ─────────────────────────────────────
  {
    id: "rak-calacatta-gold",
    name: "Calacatta Gold",
    category: "wall",
    size: "600x1200 mm",
    finish: "Glossy",
    priceRange: "On Request",
    brand: "RAK Ceramics",
    material: "Porcelain",
    description: "RAK Calacatta Gold wall tile with warm golden veining on white. Large format creates seamless, gallery-worthy walls.",
    features: ["Large Format", "Gold Veining", "Book Match Design", "Rectified"],
    images: [
      `${U}1615873968403-89e068629265?w=800&q=80&auto=format&fit=crop`,
      `${U}1600607687644-c7171b46f557?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: false,
    isNew: true,
  },
  {
    id: "rak-dark-emperador",
    name: "Dark Emperador",
    category: "bathroom",
    size: "600x600 mm",
    finish: "Polished",
    priceRange: "On Request",
    brand: "RAK Ceramics",
    material: "Vitrified",
    description: "RAK Dark Emperador with rich brown tones and golden veining. Creates a luxurious, spa-like atmosphere in bathrooms.",
    features: ["High Gloss", "Stain Resistant", "Low Porosity", "Premium Quality"],
    images: [
      `${U}1507089947368-19c1da9775ae?w=800&q=80&auto=format&fit=crop`,
      `${U}1565193566173-7a0ee3dbe261?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: false,
    isNew: false,
  },

  // ── JOHNSON TILES ─────────────────────────────────────
  {
    id: "johnson-subway-white",
    name: "Classic Subway White",
    category: "wall",
    size: "100x300 mm",
    finish: "Glossy",
    priceRange: "On Request",
    brand: "Johnson Tiles",
    material: "Ceramic",
    description: "Johnson's timeless white subway tile. Versatile, easy to clean, and complements every interior style from modern to classic.",
    features: ["Timeless Design", "Easy to Clean", "Versatile", "ISI Certified"],
    images: [
      `${U}1556909114-f6e7ad7d3136?w=800&q=80&auto=format&fit=crop`,
      `${U}1556909172-54557c7e4fb7?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: false,
    isNew: false,
  },
  {
    id: "johnson-metro-cream",
    name: "Metro Cream Kitchen",
    category: "kitchen",
    size: "100x200 mm",
    finish: "Glossy",
    priceRange: "On Request",
    brand: "Johnson Tiles",
    material: "Ceramic",
    description: "Johnson Metro Cream backsplash tile. Heat and grease resistant — purpose-built for kitchens that get used every day.",
    features: ["Heat Resistant", "Grease Resistant", "Easy to Clean", "Classic Look"],
    images: [
      `${U}1556909114-f6e7ad7d3136?w=800&q=80&auto=format&fit=crop`,
      `${U}1556909172-54557c7e4fb7?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: false,
    isNew: false,
  },

  // ── NITCO ────────────────────────────────────────────
  {
    id: "nitco-carrara-marble",
    name: "Carrara Bianco",
    category: "floor",
    size: "600x600 mm",
    finish: "Glossy",
    priceRange: "On Request",
    brand: "Nitco",
    material: "Vitrified",
    description: "Nitco Carrara Bianco vitrified tile with delicate grey veining on white. Brings Italian marble elegance to everyday spaces.",
    features: ["Stain Resistant", "Frost Resistant", "Low Water Absorption", "Rectified"],
    images: [
      `${U}1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop`,
      `${U}1615529328331-f8917597711f?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: true,
    isNew: false,
  },
  {
    id: "nitco-terracotta-rustic",
    name: "Rustica Terracotta",
    category: "kitchen",
    size: "300x300 mm",
    finish: "Matte",
    priceRange: "On Request",
    brand: "Nitco",
    material: "Ceramic",
    description: "Nitco Rustica terracotta-look tile with earthy warmth and modern durability. Natural aesthetics for kitchens and covered outdoor spaces.",
    features: ["Natural Look", "Heat Resistant", "Anti-Skid", "Eco-Friendly"],
    images: [
      `${U}1590490360182-c33d57733427?w=800&q=80&auto=format&fit=crop`,
      `${U}1574739782594-db4ead022697?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: true,
    isNew: false,
  },

  // ── CERA ─────────────────────────────────────────────
  {
    id: "cera-grey-cement",
    name: "Concrete Grey Anti-Skid",
    category: "bathroom",
    size: "300x300 mm",
    finish: "Anti-Skid",
    priceRange: "On Request",
    brand: "Cera",
    material: "Ceramic",
    description: "Cera concrete-look anti-skid bathroom tile. Industrial aesthetic with excellent grip — safe, stylish, and built to last.",
    features: ["Anti-Skid", "Water Resistant", "Chemical Resistant", "Easy Maintenance"],
    images: [
      `${U}1565193566173-7a0ee3dbe261?w=800&q=80&auto=format&fit=crop`,
      `${U}1552321554-5fefe8c9ef14?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: false,
    isNew: false,
  },
  {
    id: "cera-cobblestone-parking",
    name: "Cobblestone Parking",
    category: "outdoor",
    size: "300x300 mm",
    finish: "Anti-Skid",
    priceRange: "On Request",
    brand: "Cera",
    material: "Vitrified",
    description: "Cera heavy-duty cobblestone parking tile rated for vehicle traffic. Chemical resistant and virtually maintenance free.",
    features: ["Vehicle Traffic Rated", "Heavy Duty", "Chemical Resistant", "Low Maintenance"],
    images: [
      `${U}1553434320-e7a95fd40a46?w=800&q=80&auto=format&fit=crop`,
      `${U}1558618047-3401e8f56dab?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: false,
    isNew: false,
  },

  // ── JAQUAR & SANITARYWARE ────────────────────────────
  {
    id: "jaquar-oval-basin",
    name: "Lyric Table-Top Basin",
    category: "sanitaryware",
    size: "550x400 mm",
    finish: "Glossy White",
    priceRange: "On Request",
    brand: "Jaquar",
    material: "Vitreous China",
    description: "Jaquar Lyric oval table-top wash basin with ultra-smooth EasyClean glaze. Pairs beautifully with contemporary vanity units.",
    features: ["EasyClean Glaze", "Overflow Protection", "Table Top Mount", "5-Year Warranty"],
    images: [
      `${U}1552321554-5fefe8c9ef14?w=800&q=80&auto=format&fit=crop`,
      `${U}1507652313519-d4e9174996dd?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: true,
    isNew: false,
  },
  {
    id: "jaquar-freestanding-bathtub",
    name: "Arena Freestanding Bathtub",
    category: "sanitaryware",
    size: "1700x800 mm",
    finish: "Glossy White",
    priceRange: "On Request",
    brand: "Jaquar",
    material: "Acrylic",
    description: "Jaquar Arena freestanding bathtub with ergonomic contours and anti-slip base. Transform your bathroom into a private retreat.",
    features: ["Ergonomic Design", "Anti-Slip Base", "Freestanding", "5-Year Warranty"],
    images: [
      `${U}1507652313519-d4e9174996dd?w=800&q=80&auto=format&fit=crop`,
      `${U}1552321554-5fefe8c9ef14?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: false,
    isNew: false,
  },
  {
    id: "jaquar-rain-shower",
    name: "Maze Overhead Rain Shower",
    category: "sanitaryware",
    size: "300x300 mm",
    finish: "Chrome",
    priceRange: "On Request",
    brand: "Jaquar",
    material: "Brass",
    description: "Advanced maze pattern overhead shower for a full-body deluge experience with anti-limescale silicone nozzles.",
    features: ["Anti-Limescale Rubit Nozzles", "High Pressure", "Premium Chrome Finish", "10-Year Warranty"],
    images: [
      `${U}1620626011761-996317b8d101?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: true,
    isNew: true,
  },
  {
    id: "jaquar-gold-tap",
    name: "Florentine Gold Basin Mixer",
    category: "sanitaryware",
    size: "Standard",
    finish: "Gold",
    priceRange: "On Request",
    brand: "Jaquar",
    material: "Brass",
    description: "Elegant Florentine series single lever basin mixer in a luxurious Gold finish.",
    features: ["Ceramic Cartridge", "Water Saving Aerator", "PVD Gold Finish"],
    images: [
      `${U}1584622781564-1d987fecf208?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: false,
    isNew: false,
  },
  {
    id: "cera-wall-commode",
    name: "Campbell Wall Hung Commode",
    category: "sanitaryware",
    size: "540x360 mm",
    finish: "Glossy White",
    priceRange: "On Request",
    brand: "Cera",
    material: "Ceramic",
    description: "Sleek wall-hung commode with rimless technology for maximum hygiene and easy cleaning.",
    features: ["Rimless Bowl", "Soft Close Seat Cover", "Water Saving Dual Flush"],
    images: [
      `${U}1584622650111-993a426fbf0a?w=800&q=80&auto=format&fit=crop`,
    ],
    inStock: true,
    isFeatured: true,
    isNew: true,
  },
];

export const sizes = ["100x200 mm", "100x300 mm", "200x1200 mm", "300x300 mm", "300x600 mm", "400x400 mm", "550x400 mm", "600x600 mm", "600x1200 mm", "800x800 mm", "800x1600 mm", "1200x1200 mm", "1700x800 mm", "540x360 mm", "Standard"];

export const finishes = ["Glossy", "Matte", "Polished", "Textured", "Anti-Skid", "Glossy White", "Chrome", "Gold"];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}
