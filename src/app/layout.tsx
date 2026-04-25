import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { business } from "@/data/business";

const SITE_URL = "https://krishnatiles.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeGoodsStore"],
  "@id": `${SITE_URL}/#business`,
  name: business.name,
  description: business.tagline,
  url: SITE_URL,
  image: `${SITE_URL}/images/logo.png`,
  logo: `${SITE_URL}/images/logo.png`,
  telephone: business.phone,
  email: business.email,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, UPI, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.3591,
    longitude: 85.3340,
  },
  hasMap: business.mapUrl,
  areaServed: [
    { "@type": "City", name: "Ranchi" },
    { "@type": "State", name: "Jharkhand" },
  ],
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
  makesOffer: business.brands.map((brand) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Brand", name: brand },
  })),
  sameAs: [business.socialLinks.google],
};

const rootSchema = {
  "@context": "https://schema.org",
  "@graph": [
    localBusinessSchema,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: business.name,
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en-IN",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Krishna Tiles — Premium Tiles & Sanitaryware in Ranchi",
    template: "%s · Krishna Tiles Ranchi",
  },
  description:
    "Ranchi's trusted destination for floor tiles, wall tiles, bathroom tiles, kitchen tiles & sanitaryware. 5,000+ designs from Kajaria, Somany, Jaquar & more. Visit our showroom at Upper Bazar, Ranchi.",
  keywords: [
    "tiles Ranchi",
    "tile shop Ranchi",
    "floor tiles Ranchi",
    "wall tiles Ranchi",
    "bathroom tiles Ranchi",
    "kitchen tiles Ranchi",
    "Krishna Tiles",
    "Kajaria dealer Ranchi",
    "Somany tiles Ranchi",
    "Jaquar sanitaryware Ranchi",
    "sanitaryware Ranchi",
    "bathroom fittings Ranchi",
    "Upper Bazar tile showroom",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: "Krishna Tiles" }],
  creator: "Krishna Tiles",
  publisher: "Krishna Tiles",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "Krishna Tiles — Premium Tiles & Sanitaryware in Ranchi",
    description:
      "Explore 5,000+ tile designs. Floor, wall, bathroom, kitchen tiles & sanitaryware from top brands at our Upper Bazar, Ranchi showroom.",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Krishna Tiles",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Krishna Tiles — Upper Bazar, Ranchi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Tiles — Premium Tiles & Sanitaryware in Ranchi",
    description:
      "Ranchi's trusted tile showroom. 5,000+ designs from Kajaria, Somany, Jaquar & more.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Home & Garden",
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={rootSchema} />
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
