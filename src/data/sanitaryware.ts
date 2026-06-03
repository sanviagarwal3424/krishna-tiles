export type SanitarywareBrand = 'kohler' | 'roca' | 'parryware' | 'colston' | 'grohe' | 'jaquar';

export interface SanitarywareProduct {
  id: string;
  brand: SanitarywareBrand;
  name: string;
  category: 'basin' | 'toilet' | 'bathtub' | 'shower' | 'accessories' | 'faucet';
  image: string;
  description: string;
  featured?: boolean;
}

export interface Sanitaryware {
  id: SanitarywareBrand;
  name: string;
  tagline: string;
  image: string;
  description: string;
  website: string;
  priceRange: string;
}

export const sanitarywareBrands: Sanitaryware[] = [
  {
    id: 'kohler',
    name: 'Kohler',
    tagline: 'Premium bathroom fixtures trusted globally for luxury and durability.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
    description: 'Kohler is an American brand known for high-quality bathroom fixtures, faucets, and sanitaryware. Their products combine luxury with functionality, making them a premium choice for bathrooms.',
    website: 'https://www.kohler.com/',
    priceRange: '₹15,000 – ₹60,000+',
  },
  {
    id: 'roca',
    name: 'Roca',
    tagline: 'European design excellence in bathroom solutions for modern India.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
    description: 'Roca is a Spanish brand offering contemporary bathroom designs, ceramics, and accessories. Known for innovation and sustainability in bathroom products.',
    website: 'https://www.roca.in/',
    priceRange: '₹8,000 – ₹45,000+',
  },
  {
    id: 'parryware',
    name: 'Parryware',
    tagline: 'Indian heritage in bathroom design with global quality standards.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
    description: 'Parryware is one of India\'s leading sanitaryware manufacturers, offering a wide range of products from basic to premium collections at competitive prices.',
    website: 'https://www.parryware.com/',
    priceRange: '₹3,000 – ₹30,000',
  },
  {
    id: 'colston',
    name: 'Colston',
    tagline: 'Reliable, affordable sanitaryware for every Indian home.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
    description: 'Colston provides budget-friendly sanitaryware solutions without compromising on quality. Popular for mid-range residential and commercial projects.',
    website: 'https://www.colston.in/',
    priceRange: '₹2,500 – ₹20,000',
  },
  {
    id: 'grohe',
    name: 'Grohe',
    tagline: 'German engineering in every bathroom fixture for precision and style.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
    description: 'Grohe is a German premium bathroom brand known for innovative faucet technology, water efficiency, and sleek modern designs.',
    website: 'https://www.grohe.co.in/',
    priceRange: '₹12,000 – ₹55,000+',
  },
  {
    id: 'jaquar',
    name: 'Jaquar',
    tagline: 'Indian excellence in sanitaryware and fittings for every budget.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
    description: 'Jaquar is a leading Indian brand offering comprehensive bathroom solutions from ceramics to fittings in multiple price segments.',
    website: 'https://www.jaquarworld.com/',
    priceRange: '₹4,000 – ₹40,000',
  },
];

export const sanitarywareProducts: SanitarywareProduct[] = [
  // Kohler
  {
    id: 'kohler-bancroft',
    brand: 'kohler',
    name: 'Bancroft Pedestal Basin',
    category: 'basin',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80',
    description: 'Classic design with pedestal support, perfect for traditional and contemporary bathrooms.',
    featured: true,
  },
  {
    id: 'kohler-wellworth',
    brand: 'kohler',
    name: 'Wellworth Two-Piece Toilet',
    category: 'toilet',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80',
    description: 'Water-efficient, reliable, and elegantly designed two-piece toilet.',
    featured: true,
  },
  // Roca
  {
    id: 'roca-debba',
    brand: 'roca',
    name: 'Debba Ceramic Basin',
    category: 'basin',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80',
    description: 'Contemporary ceramic basin with clean lines and superior finish.',
    featured: true,
  },
  {
    id: 'roca-meridian',
    brand: 'roca',
    name: 'Meridian-N Toilet Seat',
    category: 'toilet',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80',
    description: 'Modern compact toilet with soft-close seat and dual flush.',
    featured: true,
  },
  // Parryware
  {
    id: 'parryware-primo',
    brand: 'parryware',
    name: 'Primo Range Basin',
    category: 'basin',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80',
    description: 'Premium range basin with vitreous china coating for durability.',
    featured: true,
  },
  {
    id: 'parryware-forte',
    brand: 'parryware',
    name: 'Forte Toilet Suite',
    category: 'toilet',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80',
    description: 'Water-saving toilet with India-standard dimensions and quality ceramics.',
    featured: true,
  },
  // Colston
  {
    id: 'colston-neo',
    brand: 'colston',
    name: 'Neo Range Basin',
    category: 'basin',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80',
    description: 'Affordable, durable basin suitable for all budget ranges.',
    featured: true,
  },
  {
    id: 'colston-crown',
    brand: 'colston',
    name: 'Crown Toilet Seat',
    category: 'toilet',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80',
    description: 'Budget-friendly, reliable toilet with good water efficiency.',
    featured: true,
  },
  // Grohe
  {
    id: 'grohe-euro',
    brand: 'grohe',
    name: 'Euro Ceramic Basin',
    category: 'basin',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80',
    description: 'German engineering meets elegant design in this premium basin.',
    featured: true,
  },
  {
    id: 'grohe-bau',
    brand: 'grohe',
    name: 'Bau Faucet',
    category: 'faucet',
    image: 'https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=500&q=80',
    description: 'Precise engineering and modern design in a single-lever faucet.',
    featured: true,
  },
  // Jaquar
  {
    id: 'jaquar-lyra',
    brand: 'jaquar',
    name: 'Lyra Basin',
    category: 'basin',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80',
    description: 'Contemporary design with superior ceramic quality at mid-range pricing.',
    featured: true,
  },
  {
    id: 'jaquar-vista',
    brand: 'jaquar',
    name: 'Vista Toilet Suite',
    category: 'toilet',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80',
    description: 'Stylish, water-efficient toilet designed for modern Indian homes.',
    featured: true,
  },
];
