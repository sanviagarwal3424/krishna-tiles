import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Tile Blog — Tips, Trends & Inspiration | Krishna Tiles Ranchi",
  description:
    "Expert tile buying guides, maintenance tips, and design inspiration for Indian homes. From Krishna Tiles, Ranchi's trusted tile showroom.",
};

export default function BlogPage() {
  return (
    <>
      <section className="section section--alt" style={{ paddingTop: "4rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="section__title">Tile Tips & Inspiration</h1>
          <p className="section__subtitle">
            Expert guides, design ideas, and maintenance tips from our team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
