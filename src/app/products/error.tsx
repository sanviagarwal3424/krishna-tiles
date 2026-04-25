"use client";

import Link from "next/link";
import { useEffect } from "react";
import { getWhatsAppLink } from "@/data/business";

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("[/products] render error:", error);
    }
  }, [error]);

  return (
    <section className="rd-section rd-section--light">
      <div className="rd-container" style={{ textAlign: "center", padding: "80px 0" }}>
        <p className="rd-eyebrow">Something went wrong</p>
        <h1 className="rd-h2" style={{ marginTop: 12 }}>
          We couldn&apos;t load the collection
        </h1>
        <p className="rd-body" style={{ marginTop: 12, maxWidth: 520, marginInline: "auto" }}>
          Please try again, or reach us on WhatsApp and we&apos;ll send options directly.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
          <button onClick={() => reset()} className="rd-btn rd-btn--primary-on-light">
            Try again
          </button>
          <a
            href={getWhatsAppLink("Hi Krishna Tiles, I had trouble loading the website. Can you help?")}
            target="_blank"
            rel="noopener noreferrer"
            className="rd-btn rd-btn--secondary-on-light"
          >
            WhatsApp us
          </a>
          <Link href="/" className="rd-btn rd-btn--secondary-on-light">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
