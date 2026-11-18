import type { Metadata } from "next";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Contact Glass Contractors Hyderabad | Free Site Measurement & Quote",
  description:
    "Contact World Art Glass Hyderabad for Toughened Glass Installation, Office Glass Partitions, Shower Cubicles, Glass Railings & Structural Glazing across Banjara Hills, Jubilee Hills, Hitech City, Gachibowli, Madhapur, Financial District, Nanakramguda, Secunderabad & Begumpet.",
  keywords: SEO_KEYWORDS,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
