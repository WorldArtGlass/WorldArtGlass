import type { Metadata } from "next";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Glass Services Hyderabad | Toughened Glass, Office Partitions & Shower Cubicles",
  description:
    "Explore architectural glass services in Hyderabad: 8mm/10mm/12mm Saint-Gobain Toughened Glass, IT Office & Black Slim Profile Glass Partitions, Telescopic & Frameless Partitions, 10mm Toughened Glass Shower Cubicles, Sliding & Swing Glass Doors, Staircase & Balcony Glass Railings, Spider Glass Facades, Structural Glazing, Lacquered/Fluted/Digital Printed Glass, Bathroom LED Mirrors & Glass Urinal Partitions.",
  keywords: SEO_KEYWORDS,
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
