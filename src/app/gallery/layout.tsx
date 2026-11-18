import type { Metadata } from "next";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Glass Work Gallery Hyderabad | Office Partitions, Shower Cubicles & Railings",
  description:
    "Browse real architectural glass installations by World Art Glass Hyderabad — Office Glass Partitions, Black Slim Profile Glass Partitions, Frameless Shower Cubicles, Glass Railings, Spider Glass Facades, Structural Glazing, LED Mirrors & Luxury Interiors across Hyderabad, Telangana.",
  keywords: SEO_KEYWORDS,
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
