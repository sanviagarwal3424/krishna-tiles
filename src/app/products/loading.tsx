export default function ProductsLoading() {
  return (
    <>
      <section className="rd-section rd-section--dark products-hero">
        <div className="rd-container">
          <p className="rd-eyebrow">The Collection</p>
          <div className="skeleton skeleton--title" aria-hidden="true" />
          <div className="skeleton skeleton--line" aria-hidden="true" />
        </div>
      </section>

      <div className="filter-bar" aria-hidden="true">
        <div className="filter-bar__inner">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="skeleton skeleton--chip" />
          ))}
        </div>
      </div>

      <section
        className="rd-section rd-section--light products-grid-section"
        aria-busy="true"
        aria-label="Loading tiles"
      >
        <div className="rd-container">
          <div className="products-grid-rd">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="tile-card" aria-hidden="true">
                <div className="tile-card__media skeleton skeleton--media" />
                <div className="tile-card__meta">
                  <div className="skeleton skeleton--title-sm" />
                  <div className="skeleton skeleton--line-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
