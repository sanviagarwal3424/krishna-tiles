export type TileCategory = 'living' | 'bath' | 'kitchen' | 'outdoor' | 'sanitaryware';

export type Tile = {
  id: string;
  name: string;
  size: string;
  material: string;
  category: TileCategory;
  image: string;
  tint?: 'orange' | 'plum' | 'moss' | 'signal' | 'black';
  description: string;
  featured?: boolean;
};

export const tiles: Tile[] = [
  // ---- Living (6) ----
  {
    id: 'statuario-premium',
    name: 'Statuario Premium',
    size: '800 × 1600 mm',
    material: 'Glazed Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    tint: 'black',
    description: 'Timeless Italian marble look in a full-body porcelain — ideal for living room floors and feature walls.',
    featured: true,
  },
  {
    id: 'terracotta-warmth',
    name: 'Terracotta Warmth',
    size: '600 × 600 mm',
    material: 'Matte Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop',
    tint: 'orange',
    description: 'Sun-baked terracotta tones with a soft matte finish — a warm base for neutral furnishings.',
  },
  {
    id: 'linen-bone',
    name: 'Linen Bone',
    size: '600 × 1200 mm',
    material: 'Glazed Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=1200&auto=format&fit=crop',
    description: 'Woven textile-inspired surface in a gentle off-white — a quiet, modern canvas.',
    featured: true,
  },
  {
    id: 'oak-plank',
    name: 'Oak Plank',
    size: '200 × 1200 mm',
    material: 'Wood-Look Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
    description: 'Realistic oak grain in a durable porcelain plank — the warmth of wood, the resilience of tile.',
  },
  {
    id: 'basalt-stone',
    name: 'Basalt Stone',
    size: '600 × 1200 mm',
    material: 'Matte Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop',
    tint: 'black',
    description: 'Deep volcanic grey with fine mineral specks — dramatic, contemporary flooring.',
  },
  {
    id: 'concrete-studio',
    name: 'Concrete Studio',
    size: '800 × 800 mm',
    material: 'Matte Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1622782914767-404fb9ab3c8e?q=80&w=1200&auto=format&fit=crop',
    description: 'Polished industrial concrete look — minimal, architectural, endlessly versatile.',
  },

  // ---- Bath (5) ----
  {
    id: 'aegean-blue',
    name: 'Aegean Blue',
    size: '300 × 600 mm',
    material: 'Glossy Ceramic Wall',
    category: 'bath',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop',
    tint: 'signal',
    description: 'Deep Mediterranean blue with a mirror-gloss finish — a statement bathroom feature wall.',
    featured: true,
  },
  {
    id: 'plum-velvet',
    name: 'Plum Velvet',
    size: '300 × 600 mm',
    material: 'Matte Ceramic Wall',
    category: 'bath',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    tint: 'plum',
    description: 'Rich aubergine purple in a velvety matte — bold, spa-like, indulgent.',
  },
  {
    id: 'carrara-white',
    name: 'Carrara White',
    size: '600 × 1200 mm',
    material: 'Glazed Porcelain',
    category: 'bath',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop',
    description: 'Classic Carrara marble veining — crisp, bright, the bathroom default done beautifully.',
  },
  {
    id: 'pebble-mosaic',
    name: 'Pebble Mosaic',
    size: '300 × 300 mm sheet',
    material: 'Ceramic Mosaic',
    category: 'bath',
    image: 'https://images.unsplash.com/photo-1599327286062-40b0a7f2b305?q=80&w=1200&auto=format&fit=crop',
    description: 'River-pebble mosaic sheets for spa-style shower floors — grippy underfoot, visually serene.',
  },
  {
    id: 'slate-charcoal',
    name: 'Slate Charcoal',
    size: '300 × 600 mm',
    material: 'Matte Porcelain Wall',
    category: 'bath',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop',
    tint: 'black',
    description: 'Textured charcoal slate with subtle cleft detail — grounding, masculine, modern.',
  },

  // ---- Kitchen (5) ----
  {
    id: 'calacatta-gold',
    name: 'Calacatta Gold',
    size: '800 × 1600 mm',
    material: 'Glazed Porcelain',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop',
    description: 'White Italian marble with gold veining — a showpiece backsplash or countertop alternative.',
    featured: true,
  },
  {
    id: 'subway-bone',
    name: 'Subway Bone',
    size: '75 × 150 mm',
    material: 'Glossy Ceramic',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    description: 'Hand-glazed subway tile in warm bone — the classic kitchen backsplash, refined.',
  },
  {
    id: 'copper-splash',
    name: 'Copper Splash',
    size: '200 × 200 mm',
    material: 'Metallic Glaze Ceramic',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    tint: 'orange',
    description: 'Burnished copper metallic finish — a warm, luminous accent behind open shelving.',
  },
  {
    id: 'moss-zellige',
    name: 'Moss Zellige',
    size: '100 × 100 mm',
    material: 'Handmade Zellige',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-4f5a9cfdb3cc?q=80&w=1200&auto=format&fit=crop',
    tint: 'moss',
    description: 'Moroccan handmade zellige in deep moss green — every tile unique, every wall alive.',
  },
  {
    id: 'herringbone-walnut',
    name: 'Herringbone Walnut',
    size: '100 × 600 mm',
    material: 'Wood-Look Porcelain',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
    description: 'Walnut-tone planks laid in herringbone — a rich underfoot statement for open kitchens.',
  },

  // ---- Outdoor (4) ----
  {
    id: 'bluestone-outdoor',
    name: 'Bluestone Outdoor',
    size: '600 × 600 mm',
    material: '20mm Anti-Slip Porcelain',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop',
    tint: 'signal',
    description: 'Natural bluestone look with R11 anti-slip rating — patios, terraces, poolside.',
  },
  {
    id: 'garden-slate',
    name: 'Garden Slate',
    size: '300 × 600 mm',
    material: '20mm Textured Porcelain',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1585152220395-1a26894f3cf0?q=80&w=1200&auto=format&fit=crop',
    tint: 'moss',
    description: 'Cleft-surface slate grey — a natural, grippy paver for garden paths.',
    featured: true,
  },
  {
    id: 'terrace-travertine',
    name: 'Terrace Travertine',
    size: '600 × 900 mm',
    material: '20mm Porcelain',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    description: 'Warm travertine beige with natural pitting — Mediterranean terrace vibes.',
  },
  {
    id: 'driveway-granite',
    name: 'Driveway Granite',
    size: '400 × 400 mm',
    material: '30mm Heavy-Duty Porcelain',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200&auto=format&fit=crop',
    tint: 'black',
    description: 'Flamed granite look in a 30mm paver — engineered for driveways and car-bearing loads.',
  },

  // ---- Sanitaryware (4) ----
  {
    id: 'wall-hung-suite',
    name: 'Wall-Hung Suite',
    size: 'Standard fit',
    material: 'Vitreous China',
    category: 'sanitaryware',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop',
    description: 'Wall-hung WC + concealed cistern — the clean, contemporary bathroom standard.',
  },
  {
    id: 'counter-basin',
    name: 'Sculpted Counter Basin',
    size: '450 × 320 mm',
    material: 'Fine Fireclay',
    category: 'sanitaryware',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop',
    description: 'Elegant above-counter basin with sculpted rim — a jewel on a stone vanity.',
  },
  {
    id: 'rain-shower',
    name: 'Rain Shower Head',
    size: '250 mm square',
    material: 'Brushed Chrome',
    category: 'sanitaryware',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop',
    tint: 'signal',
    description: 'Oversized overhead rain shower — the daily luxury, delivered.',
  },
  {
    id: 'matte-black-mixer',
    name: 'Matte Black Mixer',
    size: 'Standard',
    material: 'PVD Matte Black Brass',
    category: 'sanitaryware',
    image: 'https://images.unsplash.com/photo-1585152220395-1a26894f3cf0?q=80&w=1200&auto=format&fit=crop',
    tint: 'black',
    description: 'Precision single-lever mixer in PVD matte black — a statement against any basin.',
  },
];

export const featuredTiles = (): Tile[] => tiles.filter(t => t.featured);
export const tilesByCategory = (c: TileCategory): Tile[] => tiles.filter(t => t.category === c);
export const getTileById = (id: string): Tile | undefined => tiles.find(t => t.id === id);
