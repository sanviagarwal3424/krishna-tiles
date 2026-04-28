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

// TileFinish = physical surface texture; TileStyle's 'matte'/'glossy' = aesthetic look. Set `finish` for texture, `styles` for look.
export type TileFinish = 'matte' | 'glossy' | 'lappato' | 'textured';

export type TileBrand =
  | 'kajaria'
  | 'somany'
  | 'orientbell'
  | 'jaquar'
  | 'cera'
  | 'rak'
  | 'johnson'
  | 'nitco';

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
  brand?: TileBrand;
  brandSourceUrl?: string;
  finish?: TileFinish;
  addedAt?: string; // ISO YYYY-MM-DD
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

export const TILE_BRAND_LABELS: Record<TileBrand, string> = {
  kajaria: 'Kajaria',
  somany: 'Somany',
  orientbell: 'Orient Bell',
  jaquar: 'Jaquar',
  cera: 'Cera',
  rak: 'RAK Ceramics',
  johnson: 'Johnson Tiles',
  nitco: 'Nitco',
};

export const TILE_BRAND_PORTALS: Record<TileBrand, string> = {
  kajaria: 'https://www.kajariaceramics.com/',
  somany: 'https://www.somanyceramics.com/',
  orientbell: 'https://www.orientbell.com/',
  jaquar: 'https://www.jaquar.com/',
  cera: 'https://www.cera-india.com/',
  rak: 'https://www.rakceramics.com/india/',
  johnson: 'https://www.hrjohnsonindia.com/',
  nitco: 'https://www.nitco.in/',
};

export const TILE_FINISH_LABELS: Record<TileFinish, string> = {
  matte: 'Matte',
  glossy: 'Glossy',
  lappato: 'Lappato',
  textured: 'Textured',
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
    brand: 'kajaria',
    brandSourceUrl: 'https://www.kajariaeternity.com/',
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
    brand: 'nitco',
    brandSourceUrl: 'https://www.nitco.in/',
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
    brand: 'somany',
    brandSourceUrl: 'https://www.somanyceramics.com/',
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
    brand: 'orientbell',
    brandSourceUrl: 'https://www.orientbell.com/wood-strips-tiles',
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
    brand: 'rak',
    brandSourceUrl: 'https://www.rakceramics.com/india/',
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
    brand: 'kajaria',
    brandSourceUrl: 'https://www.kajariaceramics.com/glazed-vitrified-tiles',
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
    brand: 'somany',
    brandSourceUrl: 'https://www.somanyceramics.com/',
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
    brand: 'orientbell',
    brandSourceUrl: 'https://www.orientbell.com/bathroom-tiles',
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
    brand: 'kajaria',
    brandSourceUrl: 'https://www.kajariaeternity.com/',
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
    brand: 'johnson',
    brandSourceUrl: 'https://www.hrjohnsonindia.com/',
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
    brand: 'nitco',
    brandSourceUrl: 'https://www.nitco.in/',
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
    brand: 'rak',
    brandSourceUrl: 'https://www.rakceramics.com/india/',
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
    brand: 'johnson',
    brandSourceUrl: 'https://www.hrjohnsonindia.com/',
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
    brand: 'orientbell',
    brandSourceUrl: 'https://www.orientbell.com/kitchen-tiles',
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
    brand: 'nitco',
    brandSourceUrl: 'https://www.nitco.in/',
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
    brand: 'kajaria',
    brandSourceUrl: 'https://www.kajariaceramics.com/wood-tiles',
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
    brand: 'kajaria',
    brandSourceUrl: 'https://www.kajariaceramics.com/outdoor-tiles',
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
    brand: 'nitco',
    brandSourceUrl: 'https://www.nitco.in/',
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
    brand: 'rak',
    brandSourceUrl: 'https://www.rakceramics.com/india/',
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
    brand: 'kajaria',
    brandSourceUrl: 'https://www.kajariaceramics.com/outdoor-tiles',
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
    brand: 'cera',
    brandSourceUrl: 'https://www.cera-india.com/sanitaryware',
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
    brand: 'jaquar',
    brandSourceUrl: 'https://www.jaquar.com/sanitaryware',
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
    brand: 'jaquar',
    brandSourceUrl: 'https://www.jaquar.com/showers',
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
    brand: 'cera',
    brandSourceUrl: 'https://www.cera-india.com/faucets',
  },

  // ---- Curated brand selections (16 new) ----
  // Kajaria
  {
    id: 'kajaria-vitronite',
    name: 'Vitronite Onyx',
    size: '800 × 1600 mm',
    material: 'Polished Vitrified',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1604147495798-57beb5d6af73?w=1200&q=80',
    description: 'Kajaria Vitronite collection — mirror-polished onyx-look slab with luminous depth, ideal for high-traffic living rooms and lobbies.',
    surface: 'both',
    styles: ['marble-look', 'glossy', 'large-format'],
    brand: 'kajaria',
    brandSourceUrl: 'https://www.kajariaceramics.com/polished-vitrified-tiles',
  },
  {
    id: 'kajaria-eternity-grande',
    name: 'Eternity Grande Marble',
    size: '1200 × 2400 mm',
    material: 'GVT Mega Slab',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1616627451515-d1b8b46d8a4f?w=1200&q=80',
    description: 'Kajaria Eternity GVT in a book-matched marble — single-slab kitchen islands and floor-to-ceiling backsplashes.',
    surface: 'both',
    styles: ['marble-look', 'glossy', 'large-format'],
    brand: 'kajaria',
    brandSourceUrl: 'https://www.kajariaeternity.com/',
  },

  // Somany
  {
    id: 'somany-slimtech',
    name: 'Slimtech Cement',
    size: '600 × 1200 mm',
    material: '5mm Slim Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1615876562842-6e2da94c9cdf?w=1200&q=80',
    description: 'Somany Slimtech — a 5mm-thin large-format tile in a soft cement finish, perfect for renovations over existing surfaces.',
    surface: 'both',
    styles: ['concrete', 'matte', 'large-format'],
    brand: 'somany',
    brandSourceUrl: 'https://www.somanyceramics.com/',
  },
  {
    id: 'somany-duragres',
    name: 'Duragres Travertine',
    size: '600 × 600 mm',
    material: 'Glazed Vitrified',
    category: 'bath',
    image: 'https://images.unsplash.com/photo-1635684181095-5e6f86c46e9d?w=1200&q=80',
    description: 'Somany Duragres travertine-look in a soft cream — warm, residential, durable.',
    surface: 'both',
    styles: ['stone', 'matte'],
    brand: 'somany',
    brandSourceUrl: 'https://www.somanyceramics.com/',
  },

  // Orient Bell
  {
    id: 'orientbell-inspire-wood',
    name: 'Inspire Smoked Oak',
    size: '200 × 1200 mm',
    material: 'Wood-Look GVT',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80',
    description: 'Orient Bell Inspire collection — smoked oak plank with realistic grain texture, an affordable wood-look workhorse.',
    surface: 'floor',
    styles: ['wood-look', 'matte'],
    brand: 'orientbell',
    brandSourceUrl: 'https://www.orientbell.com/wood-strips-tiles',
  },
  {
    id: 'orientbell-forever-stone',
    name: 'Forever Limestone',
    size: '600 × 600 mm',
    material: 'Glazed Vitrified',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1602026142077-3a2a4c66c5a4?w=1200&q=80',
    description: 'Orient Bell Forever range in a soft limestone tone — a versatile balcony and terrace floor.',
    surface: 'floor',
    styles: ['stone', 'matte'],
    brand: 'orientbell',
    brandSourceUrl: 'https://www.orientbell.com/outdoor-tiles',
  },

  // Jaquar
  {
    id: 'jaquar-continental-suite',
    name: 'Continental Bath Suite',
    size: 'Standard fit',
    material: 'Vitreous China + PVD',
    category: 'sanitaryware',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=80',
    description: 'Jaquar Continental series — a coordinated WC, basin and mixer in chrome-and-white, built for ten-year reliability.',
    styles: ['glossy', 'metallic'],
    brand: 'jaquar',
    brandSourceUrl: 'https://www.jaquar.com/',
  },
  {
    id: 'jaquar-solo-thermostat',
    name: 'Solo Thermostatic Mixer',
    size: 'Concealed',
    material: 'Forged Brass + Chrome',
    category: 'sanitaryware',
    image: 'https://images.unsplash.com/photo-1620336655252-369a48ed6b34?w=1200&q=80',
    description: 'Jaquar Solo thermostatic shower mixer — set the temperature once, hold it through every drop.',
    styles: ['metallic'],
    brand: 'jaquar',
    brandSourceUrl: 'https://www.jaquar.com/showers',
  },

  // Cera
  {
    id: 'cera-senator',
    name: 'Senator Wall-Hung WC',
    size: '500 × 350 × 400 mm',
    material: 'Vitreous China',
    category: 'sanitaryware',
    image: 'https://images.unsplash.com/photo-1620626011782-5d8a26d8e9d3?w=1200&q=80',
    description: 'Cera Senator — a wall-hung WC with rim-free flush technology and a soft-close seat.',
    styles: ['matte'],
    brand: 'cera',
    brandSourceUrl: 'https://www.cera-india.com/sanitaryware',
  },
  {
    id: 'cera-aspire-vanity',
    name: 'Aspire Console Basin',
    size: '600 × 450 mm',
    material: 'Vitreous China',
    category: 'sanitaryware',
    image: 'https://images.unsplash.com/photo-1620626011835-3c7e96b6f2bf?w=1200&q=80',
    description: 'Cera Aspire console basin — a slim-rim countertop basin sitting on a metal frame, an instant guest-bath upgrade.',
    styles: ['glossy'],
    brand: 'cera',
    brandSourceUrl: 'https://www.cera-india.com/basins',
  },

  // RAK Ceramics
  {
    id: 'rak-maximus-mega',
    name: 'Maximus Mega Slab — Statuario',
    size: '1200 × 2700 mm',
    material: '6mm Mega Porcelain',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1613843433065-819a04dc232e?w=1200&q=80',
    description: 'RAK Maximus mega slab in book-matched Statuario — a single seamless surface for kitchen islands, walls and worktops.',
    featured: true,
    surface: 'both',
    styles: ['marble-look', 'glossy', 'large-format'],
    brand: 'rak',
    brandSourceUrl: 'https://www.rakceramics.com/india/',
  },
  {
    id: 'rak-lounge-stone',
    name: 'Lounge Stone Effect',
    size: '600 × 1200 mm',
    material: 'Glazed Porcelain',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=1200&q=80',
    description: 'RAK Lounge collection — a lightly textured stone effect in warm greige, elegant and unobtrusive.',
    surface: 'both',
    styles: ['stone', 'matte', 'large-format'],
    brand: 'rak',
    brandSourceUrl: 'https://www.rakceramics.com/india/',
  },

  // Johnson Tiles
  {
    id: 'johnson-endura',
    name: 'Endura Industrial Grey',
    size: '600 × 600 mm',
    material: 'Heavy-Duty Vitrified',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1604147706284-91f4ad8c66e1?w=1200&q=80',
    description: 'Johnson Endura — a heavy-duty industrial grey vitrified for kitchens, utility rooms and commercial floors.',
    surface: 'floor',
    styles: ['concrete', 'matte'],
    brand: 'johnson',
    brandSourceUrl: 'https://www.hrjohnsonindia.com/',
  },
  {
    id: 'johnson-marbonite-glory',
    name: 'Marbonite Glory White',
    size: '600 × 1200 mm',
    material: 'Double-Charge Vitrified',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1597106776019-b4ecc878c202?w=1200&q=80',
    description: 'Johnson Marbonite double-charge vitrified — a bright white floor with subtle veining, an Indian classic.',
    surface: 'floor',
    styles: ['marble-look', 'glossy'],
    brand: 'johnson',
    brandSourceUrl: 'https://www.hrjohnsonindia.com/',
  },

  // Nitco
  {
    id: 'nitco-italica-statuario',
    name: 'Italica Statuario',
    size: '800 × 1600 mm',
    material: 'GVT',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200&q=80',
    description: 'Nitco Italica — Italian-designed Statuario in a glazed vitrified format, a flagship marble look.',
    surface: 'both',
    styles: ['marble-look', 'glossy', 'large-format'],
    brand: 'nitco',
    brandSourceUrl: 'https://www.nitco.in/',
  },
  {
    id: 'nitco-naturoc-slate',
    name: 'Naturoc Cleft Slate',
    size: '300 × 600 mm',
    material: 'Natural-Finish Vitrified',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80',
    description: 'Nitco Naturoc — a hand-cleft slate-look paver, a robust outdoor surface with deep texture.',
    surface: 'floor',
    styles: ['stone', 'matte'],
    brand: 'nitco',
    brandSourceUrl: 'https://www.nitco.in/',
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
export const tilesByBrand = (b: TileBrand): Tile[] => tiles.filter(t => t.brand === b);
export const getTileById = (id: string): Tile | undefined => tiles.find(t => t.id === id);
