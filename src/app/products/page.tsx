"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, finishes } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedFinish, setSelectedFinish] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
      if (selectedFinish !== "all" && p.finish !== selectedFinish) return false;
      return true;
    });
  }, [selectedCategory, selectedFinish]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedFinish("all");
  };

  const hasActiveFilters =
    selectedCategory !== "all" || selectedFinish !== "all";

  return (
    <section className="products-page">
      <div className="container">
        <div className="products-page__header">
          <h1 className="products-page__title">Our Collection</h1>
          <p className="products-page__count">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Category pills */}
        <div className="products-page__categories">
          <button
            className={`pill ${selectedCategory === "all" ? "pill--active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`pill ${selectedCategory === cat.id ? "pill--active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Mobile filter toggle */}
        <button
          className="filter-toggle"
          onClick={() => setFiltersOpen(!filtersOpen)}
          id="filter-toggle"
        >
          🔍 {filtersOpen ? "Hide" : "Show"} Filters
          {hasActiveFilters && " (Active)"}
        </button>

        <div className="products-page__layout">
          {/* Filter sidebar */}
          <aside className={`filter-sidebar ${filtersOpen ? "filter-sidebar--open" : ""}`}>
            <div className="filter-sidebar__title">
              Filters
              {hasActiveFilters && (
                <button className="filter-sidebar__clear" onClick={clearFilters}>
                  Clear All
                </button>
              )}
            </div>

            <div className="filter-group">
              <div className="filter-group__label">Finish</div>
              <div className="filter-group__options">
                <button
                  className={`filter-chip ${selectedFinish === "all" ? "filter-chip--active" : ""}`}
                  onClick={() => setSelectedFinish("all")}
                >
                  All
                </button>
                {finishes.map((f) => (
                  <button
                    key={f}
                    className={`filter-chip ${selectedFinish === f ? "filter-chip--active" : ""}`}
                    onClick={() => setSelectedFinish(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products grid */}
          <div>
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-state__icon">🔍</div>
                <h3 className="empty-state__title">No products found</h3>
                <p className="empty-state__text">
                  Try adjusting your filters to find what you&apos;re looking for.
                </p>
                <button className="btn btn--primary" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <section className="products-page">
          <div className="container">
            <div className="products-page__header">
              <h1 className="products-page__title">Our Collection</h1>
              <p className="products-page__count">Loading products...</p>
            </div>
          </div>
        </section>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
