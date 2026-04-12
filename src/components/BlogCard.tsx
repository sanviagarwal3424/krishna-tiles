import Link from "next/link";
import type { BlogPost } from "@/data/blog";

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card__category">{post.category}</div>
      <h3 className="blog-card__title">{post.title}</h3>
      <p className="blog-card__excerpt">{post.excerpt}</p>
      <div className="blog-card__footer">
        <span className="blog-card__date">
          {new Date(post.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <span className="blog-card__read-time">{post.readTime}</span>
      </div>
    </Link>
  );
}
