import type { TileBrand, TileCategory } from "./tiles";

export type BrandFaq = { q: string; a: string };

export interface Brand {
  id: TileBrand;
  name: string;
  tagline: string;       // ≤ 110 chars — used for <meta description>
  description: string;   // legacy short blurb (kept; still used on /brands cards)
  categories: string[];  // legacy display tags (kept)
  priceRange: string;    // legacy
  intro: string;         // 60-90 words for the brand landing hero adjacent
  categoryNotes: Partial<Record<TileCategory, string>>; // ≤ 25 words each
  faqs: BrandFaq[];      // 4-5 entries, answer ≤ 50 words
}

export const brands: Brand[] = [
  {
    id: "kajaria",
    name: "Kajaria",
    tagline: "India's No.1 tile brand — the everyday workhorse for Ranchi homes.",
    description:
      "India's largest tile manufacturer with 40+ years of excellence. Known for cutting-edge designs, premium vitrified tiles, and unmatched quality consistency.",
    categories: ["Floor Tiles", "Wall Tiles", "Outdoor"],
    priceRange: "₹45 – ₹200/sq.ft",
    intro:
      "Krishna Tiles has been an authorised Kajaria dealer in Ranchi for over a decade. We carry their full GVT, polished, and double-charge ranges — from everyday floor tiles to the Eternity premium series. Walk into our Upper Bazar showroom and see large-format pieces laid out in real lighting before you commit. Genuine, warranty-backed, and stocked locally so jobs don't wait on Delhi shipments.",
    categoryNotes: {
      living: "Marble-look GVT and large-format vitrified — Kajaria's strongest category.",
      bath: "Anti-skid, PEI-4 rated wall and floor tiles built for Indian bathrooms.",
      kitchen: "Stain-resistant glazed tiles in compact 300×600 and 600×600 sizes.",
      outdoor: "Heavy-duty rustic and stone-look porcelain rated for Ranchi monsoons.",
    },
    faqs: [
      { q: "What's the price range for Kajaria tiles in Ranchi?", a: "Standard GVT starts around ₹45/sq.ft. Premium Eternity and large-format pieces go up to ₹200/sq.ft. We'll quote on WhatsApp once you share the size and area." },
      { q: "Do Kajaria tiles come with warranty?", a: "Yes. All Kajaria tiles sold through Krishna Tiles carry the manufacturer warranty against defects. We're an authorised dealer — bills, batch matching, and warranty claims are handled directly." },
      { q: "Can I see Kajaria tiles installed before buying?", a: "Yes — our Upper Bazar showroom has full panels of the most popular Kajaria series laid out so you can judge colour, finish, and grout pattern under real lighting." },
      { q: "What sizes does Kajaria offer?", a: "From 300×300 (kitchen) up to 800×1600 large-format slabs. The most popular living-room size in Ranchi is 600×1200 GVT." },
    ],
  },
  {
    id: "somany",
    name: "Somany",
    tagline: "Living-by-design tiles with one of the widest digital print catalogues in India.",
    description:
      "One of India's leading ceramic companies. Somany is known for its wide range of digital tiles, polished vitrified tiles, and eco-friendly products.",
    categories: ["Floor Tiles", "Wall Tiles", "Bathroom"],
    priceRange: "₹40 – ₹160/sq.ft",
    intro:
      "Somany is the design-forward choice when you want pattern variety beyond the standard marble-look. Krishna Tiles in Ranchi stocks their Slimtech thin-bodies, Duragres double-charge floors, and a rotating set of digital prints across 600×600, 600×1200, and 800×1600 formats. If you're remodelling and want a specific motif — geometric, terrazzo, terracotta, or contemporary stone — Somany is usually where we start the search. Authorised dealer; batch numbers are kept on file so future top-up orders match shade.",
    categoryNotes: {
      living: "Digital-print GVT with a deeper catalogue of patterns than most Indian brands.",
      bath: "Glazed wall tiles in 300×450 and 300×600 — strong design variety.",
      kitchen: "Subway, hex, and patterned ceramics for backsplashes.",
    },
    faqs: [
      { q: "How does Somany compare to Kajaria?", a: "Both are top-tier Indian brands. Somany leans more design-forward (more patterns, finishes); Kajaria is broader on workhorse plain colours. Pricing is comparable — within ₹10/sq.ft on most overlapping SKUs." },
      { q: "Is Somany Slimtech worth the premium?", a: "If you're tiling over an existing surface or care about lighter loads, yes — it's 30-40% thinner with the same wear rating. Otherwise the standard double-charge gives better value per sq.ft." },
      { q: "What's the warranty on Somany tiles?", a: "Manufacturer warranty against defects, honoured at our showroom. We retain batch numbers so future top-up orders match shade." },
      { q: "Can Somany tiles be used outdoors?", a: "Their R11-rated rustic series, yes. The standard glazed range is for interior use only — we'll point out which is which when you visit." },
    ],
  },
  {
    id: "orientbell",
    name: "Orient Bell",
    tagline: "Trusted Indian range from affordable ceramics to premium GVT — strong design depth.",
    description:
      "A trusted name in the Indian tile industry, Orient Bell offers a comprehensive range from affordable ceramics to premium GVT tiles, with strong design innovation.",
    categories: ["Floor Tiles", "Wall Tiles", "Outdoor"],
    priceRange: "₹35 – ₹120/sq.ft",
    intro:
      "Orient Bell is our strongest mid-range pick at Krishna Tiles in Ranchi. Their Inspire and Forever ranges give you premium GVT looks at sub-Kajaria pricing — useful when you're tiling a large area or working to a tight budget without dropping to base ceramics. The Forever Aroma anti-bacterial line is a quiet bonus for kitchens and bathrooms. We carry the full design catalogue at the showroom; samples ship to your site within a day.",
    categoryNotes: {
      living: "Wood-look and stone-look GVT in 600×1200 — best mid-range value.",
      bath: "Patterned wall tiles with anti-skid floor pairings already coordinated.",
      outdoor: "Rustic and gritty surfaces rated for high-traffic balconies and yards.",
    },
    faqs: [
      { q: "Why pick Orient Bell over Kajaria or Somany?", a: "Price-to-design ratio. You get GVT-quality finishes 15-25% cheaper than the top tier. Worth comparing samples side-by-side at the showroom before deciding." },
      { q: "Does Orient Bell make sanitaryware?", a: "Tiles only. For sanitaryware we'd recommend pairing Orient Bell tiles with Cera or Jaquar fittings." },
      { q: "Are Orient Bell wood-look tiles convincing?", a: "The Inspire Wood range is — in 200×1200 plank format with light grout it reads as engineered wood from a metre away. We have it laid at the showroom." },
      { q: "Lead time on Orient Bell stock?", a: "Most popular SKUs are stocked locally. Less common designs typically arrive within 7-10 days from the depot." },
    ],
  },
  {
    id: "jaquar",
    name: "Jaquar",
    tagline: "India's premium sanitaryware brand — luxury bath fittings, wellness, and complete shower systems.",
    description:
      "India's premium sanitaryware and bath fittings brand. Jaquar products are synonymous with luxury, durability, and sophisticated design for modern bathrooms.",
    categories: ["Sanitaryware", "Bath Fittings", "Shower Systems"],
    priceRange: "₹3,000 – ₹80,000",
    intro:
      "Jaquar is the brand to specify when the bathroom is the centrepiece of the build. Krishna Tiles carries their Continental, Solo, and Artize ranges in our Ranchi showroom — single-lever mixers, thermostatic showers, complete WC suites, sensor-driven urinals, and the wellness rain-shower systems. We have functional mock-ups so you can feel the lever action and water pressure before you commit. Authorised dealer for Ranchi: warranty claims, AMC, and post-sale service are handled locally without sending you back to Delhi.",
    categoryNotes: {
      sanitaryware: "Complete suites — WC, basin, urinal — with matched faucet sets.",
      bath: "Premium tap, mixer, and shower systems including thermostatic.",
    },
    faqs: [
      { q: "What's a realistic Jaquar bathroom budget?", a: "A complete Jaquar bathroom (WC, basin, faucet set, shower mixer) starts around ₹35,000 for entry tier and ₹1.2-2L for the Artize line. Walk in for a printed quote." },
      { q: "Does Jaquar offer thermostatic showers?", a: "Yes — the Solo Thermostat and Continental Thermostat lines. Worth it if your water-heater pressure varies; we keep working samples at the showroom." },
      { q: "Where can I see Jaquar fittings in Ranchi?", a: "Our Upper Bazar showroom has functional Jaquar bathroom mock-ups — running water, working faucets — so you can feel the action before buying." },
      { q: "What's the warranty on Jaquar products?", a: "10 years on faucets and 25 years on ceramics, manufacturer-backed. We handle warranty claims locally — bring the bill." },
    ],
  },
  {
    id: "cera",
    name: "Cera",
    tagline: "Beautiful spaces, better value — sanitaryware, faucets, and tiles in one catalogue.",
    description:
      "A diversified brand offering sanitaryware, faucets, tiles, and wellness products. Known for value-for-money products without compromising on quality.",
    categories: ["Sanitaryware", "Bathroom Tiles", "Faucets"],
    priceRange: "₹30 – ₹100/sq.ft",
    intro:
      "Cera covers the whole bathroom in one purchase order — sanitaryware, faucets, bathroom tiles, and wellness products. Krishna Tiles uses Cera for builder projects and value-conscious renovations across Ranchi where you need a coordinated suite at a reasonable budget. Quality is solid; the design language is calmer than Jaquar but lands at roughly 30-40% lower pricing across matching SKUs. We keep the popular Senator and Aspire suites stocked so you don't wait on shipping for standard orders.",
    categoryNotes: {
      sanitaryware: "Senator and Aspire suites — full WC, basin, faucet sets.",
      bath: "Affordable single-lever mixers and shower roses.",
    },
    faqs: [
      { q: "How does Cera compare to Jaquar?", a: "Cera is roughly 30-40% cheaper across most matching SKUs. Quality is dependable; the design vocabulary is more conservative. Pick Cera for value, Jaquar for statement bathrooms." },
      { q: "Does Cera offer wellness products?", a: "Yes — bathtubs, steam cubicles, and wellness panels. Lead time is longer (2-3 weeks); confirm sizes with us before booking." },
      { q: "Are Cera tiles worth considering?", a: "For bathroom walls and floors specifically, yes — they coordinate with Cera sanitaryware out of the box. For living rooms we'd push Kajaria or Somany." },
      { q: "What warranty does Cera give?", a: "10 years on ceramics, 7 years on faucets. We process warranty claims at the showroom." },
    ],
  },
  {
    id: "rak",
    name: "RAK Ceramics",
    tagline: "Global premium ceramics — large-format tiles used in luxury hotels and residences.",
    description:
      "A global ceramics giant based in UAE, RAK Ceramics offers ultra-premium large-format tiles used in luxury hotels and residences worldwide.",
    categories: ["Floor Tiles", "Wall Tiles", "Large Format"],
    priceRange: "₹80 – ₹250/sq.ft",
    intro:
      "RAK Ceramics is the international name in our brand list. UAE-headquartered, used in five-star hotels and high-end residences worldwide. Krishna Tiles brings in their Maximus large-format slabs (up to 1200×2400) and the Lounge stone-look porcelain series for Ranchi clients — best for villas, hospitality interiors, or any project where the tile becomes the architecture. Stock includes the most-asked-for marble-look slabs; specific finishes are ordered in with a 10-14 day lead time. Sample panels available to take home.",
    categoryNotes: {
      living: "Maximus 1200×2400 large-format slabs — book-matched marble looks.",
      outdoor: "R11 anti-slip stone-look porcelain for pool surrounds and patios.",
    },
    faqs: [
      { q: "Why is RAK Ceramics more expensive?", a: "International manufacturing, larger formats (up to 1200×2400), and the design library used by global hospitality projects. The premium lands on finish quality and shade consistency batch-to-batch." },
      { q: "Are RAK large slabs hard to install?", a: "Yes — they need an experienced installer with vacuum lifters. We can recommend Ranchi installers familiar with the format." },
      { q: "Stock or order-in for RAK?", a: "Top-running SKUs stocked. Specific large-format slabs are typically ordered with 10-14 day lead time. Worth ordering an early sample." },
      { q: "Where would I use RAK in a typical home?", a: "Living-room floors, feature walls behind the TV, vanity tops, and pool decks. For everyday bath/kitchen tiles the Indian brands give better value." },
    ],
  },
  {
    id: "johnson",
    name: "Johnson Tiles",
    tagline: "One of India's oldest tile brands — broad catalogue, dependable everyday quality.",
    description:
      "A flagship brand of H&R Johnson, one of India's oldest and most trusted ceramic tile companies, known for consistent quality and wide distribution.",
    categories: ["Floor Tiles", "Wall Tiles", "Kitchen"],
    priceRange: "₹30 – ₹90/sq.ft",
    intro:
      "Johnson Tiles is the workhorse end of our catalogue — H&R Johnson has been making tiles in India since 1958, the country's longest-running ceramic operation. Krishna Tiles carries their Endura wear-rated range and the Marbonite double-charge series for Ranchi clients. Reliable for builder projects, rental refurbishments, and budget-led residential work where you want known-good quality without the premium-brand markup. Batch matching is dependable across re-orders, which is why builders return to Johnson for phased multi-block sites.",
    categoryNotes: {
      living: "Marbonite double-charge in popular 600×600 and 600×1200 sizes.",
      kitchen: "Endura wear-rated tiles for high-traffic kitchen floors.",
      outdoor: "Heavy-traffic rustic floors for parking and exterior corridors.",
    },
    faqs: [
      { q: "Why pick Johnson over the cheaper unbranded options?", a: "Batch-matching, warranty, and shade consistency. With Johnson you can re-order the same SKU in 6 months and the new lot will match. Unbranded ceramics rarely give that." },
      { q: "What's Endura?", a: "Johnson's industrial wear-rated range — PEI-4 to PEI-5 — built for high-traffic areas like commercial kitchens, schools, and retail floors. Slightly textured anti-slip surface." },
      { q: "Does Johnson make wall tiles?", a: "Yes — full glazed wall range in 300×450 and 300×600. Strong design variety; reliable adhesion." },
      { q: "Lead time on Johnson stock?", a: "Common sizes carried locally. Specific designs from the H&R Johnson catalogue typically arrive in 5-7 days." },
    ],
  },
  {
    id: "nitco",
    name: "Nitco",
    tagline: "Italian-inspired marble and natural-stone collections at accessible Indian prices.",
    description:
      "Known for natural stone, marble, and premium tile collections. Nitco brings Italian design sensibilities to Indian homes at accessible price points.",
    categories: ["Floor Tiles", "Marble Tiles", "Natural Stone"],
    priceRange: "₹50 – ₹180/sq.ft",
    intro:
      "Nitco is our pick when you want the look of imported Italian marble without the imported price tag. Their Italica Statuario and Naturoc series are the headline ranges at Krishna Tiles in Ranchi — book-matched marble veining, polished finishes, and natural-stone replicas that read convincingly underfoot. The 800×1600 polished format has been the top-selling living-room floor of the year for our customers. Sample slabs are at the showroom; we'll lay them dry on your room's flooring base before you decide.",
    categoryNotes: {
      living: "Italica polished marble-look in large 800×1600 — premium living-room floors.",
      outdoor: "Naturoc stone-look textured porcelain for terraces and yards.",
    },
    faqs: [
      { q: "Are Nitco tiles real marble?", a: "No — they're glazed porcelain with high-resolution marble prints and book-matched layouts. They give the visual of natural marble with porcelain's durability and easier maintenance." },
      { q: "How does Nitco compare to RAK on large-format?", a: "RAK goes larger and more international; Nitco is closer to the Indian price point with strong marble-look execution. Compare both at the showroom — they suit different rooms." },
      { q: "What sizes does Nitco offer?", a: "From 600×600 up to 800×1600 large-format. The 800×1600 polished is the top-selling living-room size in Ranchi this year." },
      { q: "Is Nitco worth the price over Orient Bell?", a: "If you specifically want the Italian marble aesthetic — yes. For neutral mid-range floors Orient Bell gives more design variety per rupee." },
    ],
  },
];
