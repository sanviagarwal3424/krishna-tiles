import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import CTAStrip from "@/components/CTAStrip";
import { getWhatsAppLink } from "@/data/business";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Krishna Tiles Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="section section--alt" style={{ paddingTop: "4rem" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <div className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb__sep">›</span>
            <Link href="/blog">Blog</Link>
            <span className="breadcrumb__sep">›</span>
            <span>{post.title}</span>
          </div>
          <div
            style={{
              display: "inline-block",
              padding: "0.25rem 0.75rem",
              background: "var(--color-primary)",
              color: "white",
              borderRadius: "999px",
              fontSize: "var(--fs-xs)",
              marginBottom: "1rem",
            }}
          >
            {post.category}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              lineHeight: 1.3,
              marginBottom: "1rem",
            }}
          >
            {post.title}
          </h1>
          <div style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-sm)" }}>
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readTime}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          <div
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: "1.9",
              fontSize: "var(--fs-md)",
            }}
          >
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--fs-xl)",
                      color: "var(--color-text-primary)",
                      margin: "2rem 0 0.75rem",
                    }}
                  >
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--fs-lg)",
                      color: "var(--color-text-primary)",
                      margin: "1.5rem 0 0.5rem",
                    }}
                  >
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} style={{ marginBottom: "0.4rem", marginLeft: "1.25rem" }}>
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.trim() === "") return <br key={i} />;
              return <p key={i} style={{ marginBottom: "1rem" }}>{line}</p>;
            })}
          </div>

          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "var(--color-bg-section)",
              borderRadius: "var(--radius-md)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-heading)", marginBottom: "0.5rem" }}>
              Need help choosing tiles?
            </h3>
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "1.5rem", fontSize: "var(--fs-sm)" }}>
              Visit our showroom in Ranchi or WhatsApp us — free consultation, no obligations.
            </p>
            <a
              href={getWhatsAppLink("Hi, I read your blog and need help choosing tiles.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp btn--lg"
            >
              <span className="btn__icon">💬</span> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
