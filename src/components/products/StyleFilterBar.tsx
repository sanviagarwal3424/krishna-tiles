"use client";

import { useRouter, useSearchParams } from "next/navigation";

type StyleOption = { slug: string; label: string };

type Props = {
  styles: StyleOption[];
  activeSlug: string;
  activeCategory: string;
};

export default function StyleFilterBar({ styles, activeSlug, activeCategory }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (activeCategory && activeCategory !== "all") {
      params.set("category", activeCategory);
    } else {
      params.delete("category");
    }

    if (slug === "all") {
      params.delete("style");
    } else {
      params.set("style", slug);
    }

    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : "/products", { scroll: false });
  };

  return (
    <div
      className="filter-bar filter-bar--secondary"
      role="navigation"
      aria-label="Filter by style"
    >
      <div className="filter-bar__inner">
        <span className="filter-bar__label">Style</span>
        {styles.map((s) => {
          const isActive = s.slug === activeSlug;
          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => handleClick(s.slug)}
              aria-pressed={isActive}
              className={`filter-bar__chip filter-bar__chip--sm${isActive ? " filter-bar__chip--active" : ""}`}
            >
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
