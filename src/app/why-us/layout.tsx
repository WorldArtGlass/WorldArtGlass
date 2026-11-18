import type { Metadata } from "next";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "About World Art Glass Hyderabad | Best Glass Company & Contractors",
  description:
    "Why choose World Art Glass — Hyderabad's trusted Saint-Gobain Toughened Glass Dealer, Fabricator, Supplier, Manufacturer & Commercial Glass Installation Contractor with 15+ years experience.",
  keywords: SEO_KEYWORDS,
};

export default function WhyUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
