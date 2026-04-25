import type { Metadata } from "next";
import Image from "next/image";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Installation Gallery — Real Ranchi Homes | Krishna Tiles",
  description:
    "Real tile installations in Ranchi homes — bathrooms, kitchens, living rooms, outdoor terraces. Find inspiration from work we've done for customers across Jharkhand.",
  alternates: { canonical: "/gallery" },
};

const galleryItems = [
  {
    id: 1,
    room: "Bathroom",
    title: "Luxury Spa Bathroom",
    desc: "Dark Emperador marble-look tiles + Hexagonal mosaic floor",
    image: "/images/categories/bathroom.jpg",
  },
  {
    id: 2,
    room: "Living Room",
    title: "Modern Living Room",
    desc: "Carrara white marble-look 600x600mm vitrified floor tiles",
    image: "/images/categories/floor.jpg",
  },
  {
    id: 3,
    room: "Kitchen",
    title: "Modular Kitchen Backsplash",
    desc: "Classic white subway tiles with grey grout",
    image: "/images/categories/kitchen.jpg",
  },
  {
    id: 4,
    room: "Outdoor",
    title: "Outdoor & Balcony",
    desc: "Sandstone anti-skid outdoor tiles — weather proof & durable",
    image: "/images/categories/outdoor.jpg",
  },
  {
    id: 5,
    room: "Bathroom",
    title: "Minimalist White Bathroom",
    desc: "Wall-to-wall white ceramic tiles with seamless grout lines",
    image: "/images/categories/wall.jpg",
  },
  {
    id: 6,
    room: "Living Room",
    title: "Statement Living Wall",
    desc: "3D stone texture wall tiles creating a dramatic feature wall",
    image: "/images/categories/floor.jpg",
  },
];

const rooms = ["All", "Bathroom", "Kitchen", "Living Room", "Outdoor"];

export default function GalleryPage() {
  return (
    <>
      <section className="section section--alt" style={{ paddingTop: "4rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="hero__badge" style={{ display: "inline-block", marginBottom: "1rem" }}>
            ✨ Real Installations
          </div>
          <h1 className="section__title">Gallery & Inspiration</h1>
          <p className="section__subtitle">
            Real homes, real tiles. Get inspired for your next renovation project.
          </p>
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
            {rooms.map((room) => (
              <span key={room} className="pill pill--active" style={{ cursor: "default" }}>
                {room}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="gallery-item__caption">
                  <div style={{ fontSize: "var(--fs-xs)", opacity: 0.8, marginBottom: "0.25rem" }}>
                    {item.room}
                  </div>
                  <div style={{ fontWeight: 600 }}>{item.title}</div>
                  <div style={{ fontSize: "var(--fs-xs)", opacity: 0.85, marginTop: "0.25rem" }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
