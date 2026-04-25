'use client';

import { useRouter, useSearchParams } from 'next/navigation';

type Category = { slug: string; label: string };

type FilterBarProps = {
  categories: Category[];
  activeSlug?: string;
};

export default function FilterBar({ categories, activeSlug }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = activeSlug ?? searchParams.get('category') ?? 'all';

  const handleClick = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === 'all') {
      params.delete('category');
    } else {
      params.set('category', slug);
    }
    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : '/products', { scroll: false });
  };

  return (
    <div className="filter-bar" role="navigation" aria-label="Product category filter">
      <div className="filter-bar__inner">
        {categories.map((c) => {
          const isActive = c.slug === current;
          return (
            <button
              key={c.slug}
              type="button"
              onClick={() => handleClick(c.slug)}
              aria-pressed={isActive}
              className={`filter-bar__chip${isActive ? ' filter-bar__chip--active' : ''}`}
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
