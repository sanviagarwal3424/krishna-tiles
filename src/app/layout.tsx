import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { business } from "@/data/business";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description: business.tagline,
  url: "https://krishnatiles.com",
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.pincode,
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviews,
  },
};

export const metadata: Metadata = {
  title: "Krishna Tiles — Premium Tiles & Sanitaryware in Ranchi",
  description:
    "Ranchi's trusted destination for floor tiles, wall tiles, bathroom tiles, kitchen tiles & sanitaryware. 5,000+ designs from Kajaria, Somany, Jaquar & more. Visit our showroom at Upper Bazar, Ranchi.",
  keywords:
    "tiles Ranchi, floor tiles, wall tiles, bathroom tiles, kitchen tiles, Krishna Tiles, tile shop Ranchi, Kajaria dealer Ranchi, Somany tiles, sanitaryware Ranchi",
  openGraph: {
    title: "Krishna Tiles — Premium Tiles & Sanitaryware in Ranchi",
    description:
      "Explore 5,000+ tile designs. Floor, wall, bathroom, kitchen tiles & sanitaryware from top brands.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
