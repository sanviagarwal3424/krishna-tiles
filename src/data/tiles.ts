export type TileCategory = 'living' | 'bath' | 'kitchen' | 'outdoor' | 'sanitaryware';

export type TileStyle =
  | 'marble-look'
  | 'wood-look'
  | 'stone'
  | 'matte'
  | 'glossy'
  | 'mosaic'
  | 'handmade'
  | 'metallic'
  | 'concrete'
  | 'large-format';

export type TileSurface = 'floor' | 'wall' | 'both';

export type Tile = {
  id: string;
  name: string;
  size: string;
  material: string;
  category: TileCategory;
  image: string;
  tint?: 'orange' | 'purple' | 'green' | 'black' | 'gray' | 'blue';
  description: string;
  featured?: boolean;
  surface?: TileSurface;
  styles?: TileStyle[];
};

export const TILE_STYLE_LABELS: Record<TileStyle, string> = {
  'marble-look': 'Marble Look',
  'wood-look': 'Wood Look',
  stone: 'Stone',
  matte: 'Matte',
  glossy: 'Glossy',
  mosaic: 'Mosaic',
  handmade: 'Handmade',
  metallic: 'Metallic',
  concrete: 'Concrete',
  'large-format': 'Large Format',
};

export const tiles: Tile[] = [
  // ---- Living (6) ----
  {
    id: 'statuario-premium',
    name: 'Statuario Premium',
    size: '800 × 1600 mm',
    material: 'Glazed Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1587749158407-58ef2b89ccf8?w=1200&q=80',
    description: 'Timeless Italian marble look in a full-body porcelain — ideal for living room floors and feature walls.',
    featured: true,
    surface: 'both',
    styles: ['marble-look', 'glossy', 'large-format'],
  },
  {
    id: 'terracotta-warmth',
    name: 'Terracotta Warmth',
    size: '600 × 600 mm',
    material: 'Matte Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1550053808-52a75a05955d?w=1200&q=80',
    tint: 'orange',
    description: 'Sun-baked terracotta tones with a soft matte finish — a warm base for neutral furnishings.',
    surface: 'floor',
    styles: ['matte', 'stone'],
  },
  {
    id: 'linen-bone',
    name: 'Linen Bone',
    size: '600 × 1200 mm',
    material: 'Glazed Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=1200&q=80',
    description: 'Woven textile-inspired surface in a gentle off-white — a quiet, modern canvas.',
    featured: true,
    surface: 'both',
    styles: ['matte', 'large-format'],
  },
  {
    id: 'oak-plank',
    name: 'Oak Plank',
    size: '200 × 1200 mm',
    material: 'Wood-Look Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1566305977571-5666677c6e98?w=1200&q=80',
    tint: 'black',
    description: 'Realistic oak grain in a durable porcelain plank — the warmth of wood, the resilience of tile.',
    surface: 'floor',
    styles: ['wood-look', 'matte'],
  },
  {
    id: 'basalt-stone',
    name: 'Basalt Stone',
    size: '600 × 1200 mm',
    material: 'Matte Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1558346648-9757f2fa4474?w=1200&q=80',
    description: 'Deep volcanic grey with fine mineral specks — dramatic, contemporary flooring.',
    surface: 'floor',
    styles: ['stone', 'matte'],
  },
  {
    id: 'concrete-studio',
    name: 'Concrete Studio',
    size: '800 × 800 mm',
    material: 'Matte Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1697497624156-bcccebccffc4?w=1200&q=80',
    description: 'Polished industrial concrete look — minimal, architectural, endlessly versatile.',
    surface: 'both',
    styles: ['concrete', 'matte'],
  },

  // ---- Bath (5) ----
  {
    id: 'aegean-blue',
    name: 'Aegean Blue',
    size: '300 × 600 mm',
    material: 'Glossy Ceramic Wall',
    category: 'bath',
    image: 'https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?w=1200&q=80',
    tint: 'blue',
    description: 'Deep Mediterranean blue with a mirror-gloss finish — a statement bathroom feature wall.',
    featured: true,
    surface: 'wall',
    styles: ['glossy'],
  },
  {
    id: 'plum-velvet',
    name: 'Plum Velvet',
    size: '300 × 600 mm',
    material: 'Matte Ceramic Wall',
    category: 'bath',
    image: 'https://images.unsplash.com/photo-1608501821300-4f99e58bba77?w=1200&q=80',
    description: 'Rich aubergine purple in a velvety matte — bold, spa-like, indulgent.',
    surface: 'wall',
    styles: ['matte'],
  },
  {
    id: 'carrara-white',
    name: 'Carrara White',
    size: '600 × 1200 mm',
    material: 'Glazed Porcelain',
    category: 'bath',
    image: 'https://images.unsplash.com/photo-1551554781-c46200ea959d?w=1200&q=80',
    tint: 'purple',
    description: 'Classic Carrara marble veining — crisp, bright, the bathroom default done beautifully.',
    surface: 'both',
    styles: ['marble-look', 'large-format'],
  },
  {
    id: 'pebble-mosaic',
    name: 'Pebble Mosaic',
    size: '300 × 300 mm sheet',
    material: 'Ceramic Mosaic',
    category: 'bath',
    image: 'https://images.unsplash.com/photo-1603369425250-b276f2006ec0?w=1200&q=80',
    description: 'River-pebble mosaic sheets for spa-style shower floors — grippy underfoot, visually serene.',
    surface: 'floor',
    styles: ['mosaic', 'stone'],
  },
  {
    id: 'slate-charcoal',
    name: 'Slate Charcoal',
    size: '300 × 600 mm',
    material: 'Matte Porcelain Wall',
    category: 'bath',
    image: 'https://images.unsplash.com/photo-1616362258782-7511b61686ea?w=1200&q=80',
    tint: 'green',
    description: 'Textured charcoal slate with subtle cleft detail — grounding, masculine, modern.',
    surface: 'wall',
    styles: ['stone', 'matte'],
  },

  // ---- Kitchen (5) ----
  {
    id: 'calacatta-gold',
    name: 'Calacatta Gold',
    size: '800 × 1600 mm',
    material: 'Glazed Porcelain',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1606767041004-6b918abe92be?w=1200&q=80',
    description: 'White Italian marble with gold veining — a showpiece backsplash or countertop alternative.',
    featured: true,
    surface: 'both',
    styles: ['marble-look', 'glossy', 'large-format'],
  },
  {
    id: 'subway-bone',
    name: 'Subway Bone',
    size: '75 × 150 mm',
    material: 'Glossy Ceramic',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1694382224140-cb7443c6a3ec?w=1200&q=80',
    tint: 'gray',
    description: 'Hand-glazed subway tile in warm bone — the classic kitchen backsplash, refined.',
    surface: 'wall',
    styles: ['glossy', 'handmade'],
  },
  {
    id: 'copper-splash',
    name: 'Copper Splash',
    size: '200 × 200 mm',
    material: 'Metallic Glaze Ceramic',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=1200&q=80',
    description: 'Burnished copper metallic finish — a warm, luminous accent behind open shelving.',
    surface: 'wall',
    styles: ['metallic', 'glossy'],
  },
  {
    id: 'moss-zellige',
    name: 'Moss Zellige',
    size: '100 × 100 mm',
    material: 'Handmade Zellige',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1623197532650-bacb8a68914e?w=1200&q=80',
    description: 'Moroccan handmade zellige in deep moss green — every tile unique, every wall alive.',
    surface: 'wall',
    styles: ['handmade', 'glossy'],
  },
  {
    id: 'herringbone-walnut',
    name: 'Herringbone Walnut',
    size: '100 × 600 mm',
    material: 'Wood-Look Porcelain',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1640280882429-204f63d777e7?w=1200&q=80',
    tint: 'orange',
    description: 'Walnut-tone planks laid in herringbone — a rich underfoot statement for open kitchens.',
    surface: 'floor',
    styles: ['wood-look', 'matte'],
  },

  // ---- Outdoor (4) ----
  {
    id: 'bluestone-outdoor',
    name: 'Bluestone Outdoor',
    size: '600 × 600 mm',
    material: '20mm Anti-Slip Porcelain',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1762087483751-a283e113c52c?w=1200&q=80',
    description: 'Natural bluestone look with R11 anti-slip rating — patios, terraces, poolside.',
    surface: 'floor',
    styles: ['stone', 'matte'],
  },
  {
    id: 'garden-slate',
    name: 'Garden Slate',
    size: '300 × 600 mm',
    material: '20mm Textured Porcelain',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1678742755904-6c3fc8ba6602?w=1200&q=80',
    tint: 'purple',
    description: 'Cleft-surface slate grey — a natural, grippy paver for garden paths.',
    featured: true,
    surface: 'floor',
    styles: ['stone', 'matte'],
  },
  {
    id: 'terrace-travertine',
    name: 'Terrace Travertine',
    size: '600 × 900 mm',
    material: '20mm Porcelain',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1718073869252-3b78770dc972?w=1200&q=80',
    description: 'Warm travertine beige with natural pitting — Mediterranean terrace vibes.',
    surface: 'floor',
    styles: ['stone', 'matte'],
  },
  {
    id: 'driveway-granite',
    name: 'Driveway Granite',
    size: '400 × 400 mm',
    material: '30mm Heavy-Duty Porcelain',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1747696766706-5485b39bf358?w=1200&q=80',
    tint: 'black',
    description: 'Flamed granite look in a 30mm paver — engineered for driveways and car-bearing loads.',
    surface: 'floor',
    styles: ['stone', 'matte'],
  },

  // ---- Sanitaryware (4) ----
  {
    id: 'wall-hung-suite',
    name: 'Wall-Hung Suite',
    size: 'Standard fit',
    material: 'Vitreous China',
    category: 'sanitaryware',
    image: 'https://images.unsplash.com/photo-1523350165414-082d792c4bcc?w=1200&q=80',
    description: 'Wall-hung WC + concealed cistern — the clean, contemporary bathroom standard.',
    styles: ['matte'],
  },
  {
    id: 'counter-basin',
    name: 'Sculpted Counter Basin',
    size: '450 × 320 mm',
    material: 'Fine Fireclay',
    category: 'sanitaryware',
    image: 'https://images.unsplash.com/photo-1759150467207-1d4870e074fc?w=1200&q=80',
    tint: 'green',
    description: 'Elegant above-counter basin with sculpted rim — a jewel on a stone vanity.',
    styles: ['glossy'],
  },
  {
    id: 'rain-shower',
    name: 'Rain Shower Head',
    size: '250 mm square',
    material: 'Brushed Chrome',
    category: 'sanitaryware',
    image: 'https://images.unsplash.com/photo-1599209250635-26c180f28419?w=1200&q=80',
    tint: 'blue',
    description: 'Oversized overhead rain shower — the daily luxury, delivered.',
    styles: ['metallic'],
  },
  {
    id: 'matte-black-mixer',
    name: 'Matte Black Mixer',
    size: 'Standard',
    material: 'PVD Matte Black Brass',
    category: 'sanitaryware',
    image: 'https://images.unsplash.com/photo-1548967199-79324abbe7dc?w=1200&q=80',
    description: 'Precision single-lever mixer in PVD matte black — a statement against any basin.',
    styles: ['matte', 'metallic'],
  },
];

export const CATEGORY_LABELS: Record<TileCategory, string> = {
  living: 'Living',
  bath: 'Bath',
  kitchen: 'Kitchen',
  outdoor: 'Outdoor',
  sanitaryware: 'Sanitaryware',
};

export const featuredTiles = (): Tile[] => tiles.filter(t => t.featured);
export const tilesByCategory = (c: TileCategory): Tile[] => tiles.filter(t => t.category === c);
export const getTileById = (id: string): Tile | undefined => tiles.find(t => t.id === id);
