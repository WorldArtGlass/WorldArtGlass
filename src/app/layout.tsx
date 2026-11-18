import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO_KEYWORDS, SERVICE_AREAS } from "@/lib/seo-keywords";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://world-art-glass.grexa.site"),
  title: {
    default: "World Art Glass Hyderabad | Best Toughened Saint-Gobain Glass Contractors",
    template: "%s | World Art Glass Hyderabad",
  },
  description:
    "World Art Glass Hyderabad — Best Glass Company & Installation Contractors for 8mm, 10mm & 12mm Saint-Gobain Toughened Glass, IT Office & Black Slim Profile Glass Partitions, Frameless Shower Cubicles, Glass Sliding & Swing Doors, Staircase & Balcony Glass Railings, Spider Glass Facades, Structural Glazing, Lacquered/Fluted Glass & LED Mirrors across Banjara Hills, Jubilee Hills, Hitech City, Gachibowli, Madhapur, Financial District, Nanakramguda, Secunderabad & Begumpet.",
  keywords: SEO_KEYWORDS,
  authors: [{ name: "World Art Glass Hyderabad" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/world_art_glass_emblem.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/world_art_glass_emblem.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "World Art Glass Hyderabad | Toughened Glass, Office Partitions & Shower Cubicles",
    description:
      "Strong • Stylish • Trusted. Leading Glass Company & Contractors in Hyderabad for Saint-Gobain 8mm/10mm/12mm Toughened Glass, Office Glass Partitions, Black Slim Profile & Telescopic Partitions, Shower Cubicles, Glass Railings, Structural Glazing & LED Mirrors.",
    url: "https://world-art-glass.grexa.site/",
    siteName: "World Art Glass Hyderabad",
    images: [
      {
        url: "/images/world_art_glass_official_logo.jpg",
        width: 1024,
        height: 341,
        alt: "World Art Glass Hyderabad Official Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Art Glass Hyderabad | Architectural & Toughened Glass Solutions",
    description:
      "Best Glass Contractors & Dealers in Hyderabad for Saint-Gobain Toughened Glass, Office Partitions, Shower Cubicles, Railings, Spider Facades & Structural Glazing.",
    images: ["/images/world_art_glass_official_logo.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "World Art Glass Hyderabad",
  description:
    "Premier Glass Company, Dealer, Fabricator & Installation Contractors in Hyderabad specializing in 8mm, 10mm & 12mm Saint-Gobain Toughened Glass, Office & IT Glass Partitions, Black Slim Profile & Telescopic Partitions, Shower Cubicles, Glass Doors, Glass Railings, Structural Glazing, Spider Glass Facades, Decorative/Fluted/Lacquered Glass, and Bathroom LED Mirrors.",
  url: "https://world-art-glass.grexa.site/",
  telephone: "+91-9985597294",
  address: {
    "@type": "PostalAddress",
    streetAddress: "New Aghapura X Road, Goshamahal",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500001",
    addressCountry: "IN",
  },
  areaServed: SERVICE_AREAS.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "188",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Architectural & Toughened Glass Solutions Hyderabad",
    itemListElement: [
      "Toughened Glass in Hyderabad (8mm, 10mm, 12mm Saint-Gobain)",
      "Office & IT Office Glass Partition Hyderabad",
      "Black Slim Profile, Aluminium, Frameless & Telescopic Glass Partitions",
      "Frameless & Sliding 10mm Toughened Glass Shower Cubicles & Enclosures",
      "Toughened Glass Sliding, Swing, Main, Office & Bathroom Doors",
      "Staircase & Balcony Glass Railing Hyderabad",
      "Structural Glazing, Spider Glass Fitting & Spider Glass Facade",
      "Lacquered Glass, Decorative Glass, Fluted Glass & Digital Printed Glass",
      "Bathroom LED Mirror & Glass Urinal Partition",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-sky-500 selection:text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
