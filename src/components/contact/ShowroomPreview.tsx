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
