import type { Metadata } from "next";
import "./globals.css";
import { SEO_KEYWORDS, SERVICE_AREAS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.worldartglass.net"),
  title: {
    default: "World Art Glass Hyderabad | Premium Architectural Glass Solutions",
    template: "%s | World Art Glass Hyderabad",
  },
  description:
    "World Art Glass Hyderabad — Premier Architectural Glass Solutions, Suppliers & Installation Contractors in Hyderabad since 2007. 100% Genuine Saint-Gobain 8mm, 10mm & 12mm Toughened Glass, Office Glass Partitions, Black Slim Profile 45mm Partitions, Telescopic Sliding Partitions, Frameless Glass Doors, Structural Glazing, Spider Glass Fittings, Lacquered Glass, Fluted Glass & LED Mirrors across Hitec City, Gachibowli, Banjara Hills, Jubilee Hills, Madhapur, Financial District & Secunderabad.",
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
    title: "WORLD ART GLASS – PREMIUM ARCHITECTURAL GLASS SOLUTIONS IN HYDERABAD",
    description:
      "Established 2007 • 19+ Years Mastery. Leading Glass Company & Contractors in Hyderabad for Saint-Gobain 8mm/10mm/12mm Toughened Glass, Office Glass Partitions, Black Slim Profile & Telescopic Partitions, Shower Cubicles, Glass Railings, Structural Glazing & LED Mirrors.",
    url: "https://www.worldartglass.net/",
    siteName: "World Art Glass Hyderabad",
    images: [
      {
        url: "/images/world_art_glass_official_logo.png",
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
    title: "World Art Glass Hyderabad | Premium Architectural Glass Solutions",
    description:
      "Premier Architectural Glass Company in Hyderabad. Saint-Gobain Toughened Glass, Office Partitions, Black Slim Profiles, Spider Facades & Shower Cubicles.",
    images: ["/images/world_art_glass_official_logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "World Art Glass Hyderabad",
  description:
    "Premier Architectural Glass Company, Dealer, Fabricator & Installation Contractors in Hyderabad since 2007. Specializing in 8mm, 10mm & 12mm Saint-Gobain Toughened Glass, Office Glass Partitions, Black Slim Profile 45mm Partitions, Telescopic Glass Partitions, Frameless Glass Doors, Structural Glazing, Spider Glass Fittings, Lacquered Glass, Fluted Glass, Shower Cubicles, Glass Railings, and Bathroom Smart LED Mirrors.",
  url: "https://www.worldartglass.net/",
  telephone: "+91-9985597294",
  priceRange: "₹₹",
  openingHours: "Mo-Sa 09:30-20:30",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.3888366,
    longitude: 78.4639913,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "New Aghapura X Road, Habeeb Nagar, Goshamahal / Nampally",
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
      "Toughened Glass",
      "Office Glass Partitions",
      "Black Slim Profile Aluminium Glass Partitions",
      "Telescopic Glass Partitions",
      "Frameless Glass Doors",
      "Structural Glazing",
      "Spider Glass Fittings",
      "Saint-Gobain Lacquered Glass",
      "Decorative & Fluted Glass",
      "Digital Printing on Glass",
      "Shower Cubicles",
      "Glass Railings & Balustrades",
      "Aluminium Glass Partitions",
      "Glass Facades",
      "LED Mirrors & Designer Mirrors",
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
      <head>
        {/* Google Analytics 4 Script Hook (Requirement #40) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              // gtag('config', 'G-WORLDARTGLASS');
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-[#D4AF37] selection:text-slate-950 font-sans"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
