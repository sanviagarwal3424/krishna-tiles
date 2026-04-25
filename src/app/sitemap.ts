import type { MetadataRoute } from "next";
import { tiles } from "@/data/tiles";

const SITE_URL = "https://krishnatiles.com";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tiles-in-ranchi", priority: 0.9, changeFrequency: "monthly" },
  { path: "/brands", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.5, changeFrequency: "yearly" },
];

const categorySlugs = ["living", "bath", "kitchen", "outdoor", "sanitaryware"];

const blogSlugs = [
  "how-to-choose-tiles-for-bathroom",
  "best-tiles-for-living-room-2026",
  "tile-maintenance-tips",
  "kitchen-backsplash-ideas",
  "how-to-choose-the-right-tile",
  "sanitaryware-trends-2026",
  "porcelain-vs-ceramic-tiles",
  "outdoor-tiles-buying-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${SITE_URL}/products?category=${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const tileEntries: MetadataRoute.Sitemap = tiles.map((tile) => ({
    url: `${SITE_URL}/products/${tile.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...categoryEntries, ...tileEntries, ...blogEntries];
}
