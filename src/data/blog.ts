export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-tiles-for-bathroom",
    title: "How to Choose the Right Tiles for Your Bathroom",
    excerpt: "Choosing bathroom tiles can be overwhelming. Here's a simple guide to help you pick the right size, finish, and material for a stunning and practical bathroom.",
    category: "Buying Guide",
    date: "2026-03-15",
    readTime: "5 min read",
    content: `## How to Choose the Right Tiles for Your Bathroom

Selecting the right tiles for your bathroom is one of the most important decisions in any renovation. The wrong choice can make a bathroom feel cramped, dark, or high-maintenance.

### 1. Size Matters

- **Small bathrooms**: Use larger tiles (600x600mm or more) to create an illusion of space. Fewer grout lines = bigger look.
- **Large bathrooms**: You can experiment with smaller mosaic or hexagonal patterns.

### 2. Choose the Right Finish

- **Glossy**: Reflects light, looks luxurious. Best for walls.
- **Matte**: Hides water spots. Good for floors.
- **Anti-skid**: Essential for bathroom floors to prevent slipping.

### 3. Material Selection

- **Ceramic**: Affordable, lightweight, good for walls.
- **Porcelain/Vitrified**: Denser, more durable. Ideal for floors.

### 4. Color Psychology

- Light colors (white, beige, cream) make bathrooms feel larger.
- Dark tiles (charcoal, navy) create a spa-like premium feel.

### Pro Tip

Always buy 10% extra tiles to account for cuts and future replacements. Tile batches can vary in shade between production runs.

Visit our showroom at Upper Bazar, Ranchi — our experts will help you choose for free.`,
  },
  {
    slug: "best-tiles-for-living-room-2026",
    title: "Best Floor Tiles for Living Rooms in 2026",
    excerpt: "Marble-look tiles, large-format slabs, or wood planks? We break down the top flooring trends for Indian living rooms in 2026.",
    category: "Trends",
    date: "2026-03-05",
    readTime: "4 min read",
    content: `## Best Floor Tiles for Living Rooms in 2026

The living room is the first thing guests see. Your flooring sets the tone for your entire home's design.

### Trending in 2026

**1. Large Format Marble-Look Tiles**
Sizes like 800x1600mm or 1200x1200mm are dominating premium homes. Brands like Kajaria and Somany offer stunning marble looks at a fraction of natural marble's cost.

**2. Wood Plank Tiles**
The warmth of wood with the durability of porcelain. The 200x1200mm plank format creates a natural, inviting feel perfect for modern homes.

**3. Concrete/Cement Look**
Industrial-chic is in. Grey cement-look tiles give a sophisticated, minimalist aesthetic.

**4. Bookmatched Slabs**
Mirror-matched tiles create seamless, artwork-like floors. Best for larger spaces.

### What to Avoid

- Very light colors in high-traffic living rooms (shows dust easily)
- Highly polished floors near stairs or entrances (slipping hazard)

Browse our living room tile collection at Krishna Tiles, Upper Bazar, Ranchi.`,
  },
  {
    slug: "tile-maintenance-tips",
    title: "How to Keep Your Tiles Looking New for Years",
    excerpt: "Tiles are low-maintenance — but not no-maintenance. Follow these simple care tips to keep your floors and walls pristine for decades.",
    category: "Maintenance",
    date: "2026-02-20",
    readTime: "3 min read",
    content: `## How to Keep Your Tiles Looking New for Years

Good quality tiles can last 20-30 years. With the right care, they'll look new throughout.

### Daily Care

- Sweep or vacuum regularly to remove grit that scratches surfaces
- Mop with warm water and a mild floor cleaner
- Wipe spills immediately — especially on light-colored grout

### Grout Maintenance

Grout is the weakest point. To protect it:
- Seal grout lines every 1-2 years
- Use a grout pen to refresh color
- Clean with a baking soda paste for stubborn stains

### What NOT to Do

- Never use bleach on colored tiles
- Avoid acidic cleaners (vinegar, lemon) on marble-look tiles
- Don't use steel wool or abrasive pads

### Bathroom Tile Care

Run the exhaust fan or open windows after showers. Humidity is the #1 cause of grout mold. A weekly spritz of diluted vinegar solution on grout lines prevents buildup.

For tile-specific care advice, visit Krishna Tiles showroom in Ranchi.`,
  },
  {
    slug: "kitchen-backsplash-ideas",
    title: "10 Kitchen Backsplash Tile Ideas for Indian Homes",
    excerpt: "Your kitchen backsplash is a small canvas with big impact. Here are 10 tile ideas that work beautifully in Indian kitchens.",
    category: "Inspiration",
    date: "2026-02-10",
    readTime: "6 min read",
    content: `## 10 Kitchen Backsplash Tile Ideas for Indian Homes

The backsplash protects your walls from cooking splatter and defines your kitchen's personality. Here are our top picks:

1. **Classic White Subway Tiles** — Timeless, versatile, easy to clean
2. **Moroccan Patterned Tiles** — Adds personality and color
3. **Terracotta Rustic Tiles** — Warm, earthy, works with wooden cabinets
4. **Glossy Cream Metro Tiles** — Brightens darker kitchens
5. **Hexagonal Mosaic** — Modern and geometric
6. **Stone-Look Tiles** — Natural premium look
7. **Dark Grey Glossy** — Sleek, modern, hides stains well
8. **Hand-Painted Azulejo Style** — Artisanal, unique
9. **Large Format Single Color** — Minimal and clean
10. **Mixed Material Mosaic** — Mix of glass, ceramic, and stone

### Key Considerations for Indian Kitchens

- **Heat resistance**: Tiles near the stove must handle high heat
- **Grease resistance**: Glossy finish wipes clean easily
- **Size**: Smaller tiles (100x200, 100x300mm) work best for backsplashes

All these tile styles are available at Krishna Tiles, Upper Bazar, Ranchi.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
