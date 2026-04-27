import Image from 'next/image';

const tiles = [
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    alt: 'Tile displays lining showroom walls',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
    alt: 'Bathroom vignettes in showroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Floor tile samples on stone plinths',
  },
  {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    alt: 'Sanitaryware wall at Krishna Tiles',
  },
];

export default function ShowroomPreview() {
  return (
    <section className="rd-section rd-section--dark showroom-preview">
      <div className="rd-container">
        <div className="showroom-preview__header">
          <p className="rd-eyebrow">Inside the Showroom</p>
          <h2 className="rd-display">4,200 sq ft of every tile on display</h2>
        </div>
        <a
          href="https://maps.app.goo.gl/axXbhQdx2rAQ2Xh68"
          target="_blank"
          rel="noopener noreferrer"
          className="showroom-preview__walkover"
          aria-label="Launch 360° walkover of the Krishna Tiles showroom in Google Maps"
        >
          <Image
            src="https://lh3.googleusercontent.com/gpms-cs-s/ABJJf50MXUMAb9RgbPxDT8zWE90PbtMgzRSj-sAcbwBOTOV9ZzKZSnC5XSmLYvjaCmP1OL5KiFypUglmR0BNljk6D94usEp6A1SaHlJiU7yo0eGCDCYDPS1gpSMjcG_8Vup0gvX0jJQMMQ=w1600-h900-k-no"
            alt="Inside the Krishna Tiles showroom — 360° preview"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={false}
          />
          <div className="showroom-preview__walkover-overlay">
            <span className="showroom-preview__walkover-badge">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 3l14 9-14 9V3z" fill="currentColor" />
              </svg>
              Launch 360° Walkover
            </span>
            <span className="showroom-preview__walkover-sub">Step inside before you visit</span>
          </div>
        </a>
        <div className="showroom-preview__grid">
          {tiles.map((t) => (
            <div key={t.src} className="showroom-preview__tile">
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(max-width: 768px) 50vw, 600px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
