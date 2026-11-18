import type { Metadata } from "next";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Glass Projects Hyderabad | Commercial, IT Office & Villa Installations",
  description:
    "View completed commercial & residential glass work by World Art Glass Hyderabad across Banjara Hills, Jubilee Hills, Hitech City, Gachibowli, Madhapur, Financial District, Nanakramguda, Secunderabad & Begumpet.",
  keywords: SEO_KEYWORDS,
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
