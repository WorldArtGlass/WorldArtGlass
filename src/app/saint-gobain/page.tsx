import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar, { WhatsAppIcon } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import EnquiryForm from "@/components/EnquiryForm";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Award,
  Layers,
  Building2,
  FileText,
  Phone,
  Ruler,
  HelpCircle,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Genuine Saint-Gobain Glass Dealer & Fabricator in Hyderabad | World Art Glass",
  description:
    "Authorized supplier and fabricator of 100% genuine Saint-Gobain Toughened Glass, Planilaque Lacquered Glass, ExtraClear Diamant, and Solar Control Glass in Hyderabad.",
  keywords: [
    "Saint-Gobain Glass Dealer in Hyderabad",
    "Toughened Glass Supplier in Hyderabad",
    "Lacquered Glass Supplier in Hyderabad",
    "Glass Company in Hyderabad",
    "Office Glass Partition Contractor"
  ],
};

const SAINT_GOBAIN_PRODUCTS = [
  {
    name: "Saint-Gobain Clear Float & Toughened Glass",
    thicknesses: "5mm, 6mm, 8mm, 10mm, 12mm, 15mm, 19mm",
    category: "Structural Safety Glass",
    image: "/images/cat_toughened_glass.jpg",
    features: [
      "IS 2553 & EN 12150-1 thermal tempering compliance",
      "Permanent laser-engraved Saint-Gobain trademark logo",
      "High impact resistance (4-5x stronger than standard glass)",
      "Used in commercial office cabins, doors, and facades"
    ],
    desc: "The benchmark architectural safety glass in India. Engineered for high structural load bearing, wind deflection resistance, and clean cubic granule fragmentation upon extreme breakage."
  },
  {
    name: "Saint-Gobain ExtraClear Diamant (Low-Iron)",
    thicknesses: "8mm, 10mm, 12mm, 15mm",
    category: "Ultra-Clear Luxury Glass",
    image: "/images/storefront_real_hd.jpg",
    features: [
      "Over 91% visible light transmission (VLT)",
      "Eliminates unsightly greenish edge tint of standard glass",
      "True optical color neutrality for apparel & jewelry retail",
      "Favored by premier interior architects for luxury villas"
    ],
    desc: "Manufactured with low iron oxide content, Saint-Gobain Diamant delivers absolute optical purity and crystal transparency, making it the premier choice for luxury retail display windows and frameless balustrades."
  },
  {
    name: "Saint-Gobain Planilaque Evolution (Lacquered)",
    thicknesses: "4mm, 5mm, 6mm, 8mm",
    category: "Decorative Color Glass",
    image: "/images/cat_stained_designer_glass.jpg",
    features: [
      "26+ contemporary high-gloss baked color shades",
      "Lead-free, VOC-compliant industrial baked lacquer",
      "100% moisture-resistant and steam-proof",
      "Non-porous, grout-free, wipes clean of oil and grease"
    ],
    desc: "The definitive solution for modern modular kitchen splashbacks, designer wardrobe shutters, corporate dry-erase marker boards, and elevator lobby wall paneling."
  },
  {
    name: "Saint-Gobain Antelio & Cool-Lite (Solar Control)",
    thicknesses: "6mm, 8mm, DGU (Double Glazed Units)",
    category: "Energy-Saving Facade Glass",
    image: "/images/cat_acp_structural_glazing.jpg",
    features: [
      "Advanced pyrolytic and magnetron solar control coatings",
      "Rejects up to 72% of solar infrared heat ingress",
      "Lowers commercial air conditioning power bills by up to 30%",
      "Available in Neutral, Silver, Blue, and Green reflective tones"
    ],
    desc: "High-performance solar control coated glass specifically engineered for the hot Hyderabad climate, keeping commercial corporate towers and retail complexes naturally luminous and energy efficient."
  },
  {
    name: "Saint-Gobain Mirox 4Green (Eco-Mirrors)",
    thicknesses: "5mm",
    category: "High-Definition Mirrors",
    image: "/images/cat_led_mirrors.jpg",
    features: [
      "100% Copper-free and lead-free ecological backing",
      "3x more resistant to bathroom edge corrosion and black spots",
      "Unmatched high-definition optical reflection",
      "Perfect base for custom capacitive touch smart LED vanity mirrors"
    ],
    desc: "A revolutionary copper-free ecological mirror that resists humidity, steam, and everyday cleaning chemicals without developing the black perimeter oxidation common in ordinary mirrors."
  }
];

export default function SaintGobainPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Genuine Saint-Gobain Architectural Glass Hyderabad",
    description:
      "Direct supplier and fabricator of 100% genuine Saint-Gobain Toughened Glass, Planilaque Lacquered, Diamant Extra-Clear, and Solar Control Antelio in Hyderabad.",
    brand: {
      "@type": "Brand",
      name: "Saint-Gobain",
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "World Art Glass Hyderabad",
      telephone: "+91-9985597294",
      url: "https://www.worldartglass.net",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Header */}
      <section className="relative bg-[#0B1B2B] text-white overflow-hidden pt-28 sm:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_glazing_profiles.jpg"
            alt="Saint-Gobain Glass Hyderabad"
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-[#0B1B2B]/85 to-[#0B1B2B]/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-white">Saint-Gobain Glass Solutions</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Genuine Saint-Gobain Stock Guaranteed
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Saint-Gobain Glass Solutions in Hyderabad
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              World Art Glass Hyderabad is a leading direct fabricator and installer of genuine Saint-Gobain architectural glass products. Every glass panel comes with authentic permanent laser-etched logos, official batch traceability, and full GST billing.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#products-section"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-slate-950 font-extrabold text-sm px-5 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                <span>View Available Products</span>
              </a>
              <a
                href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20want%20to%20verify%20and%20purchase%20genuine%20Saint-Gobain%20toughened%20glass%20in%20Hyderabad."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-5 py-3 rounded-xl shadow-lg transition"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Authenticity Verification Guide (Requirement #24: Honest, compliant) */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0B1B2B] text-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/35 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-white/15 pb-4 md:pb-0 md:pr-6">
              <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                Authenticity Assurance
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                How to Verify Genuine Saint-Gobain Glass
              </h2>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                We maintain 100% transparency. As experienced fabricators in Hyderabad since 2007, we ensure every customer receives authentic glass verified through three layers.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h4 className="font-bold text-white text-sm">Permanent Laser Logo</h4>
                <p className="text-slate-300 leading-relaxed">
                  Every panel features an indelible Saint-Gobain laser hallmark engraved into the corner that cannot be scraped or washed off.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h4 className="font-bold text-white text-sm">Factory Batch Code</h4>
                <p className="text-slate-300 leading-relaxed">
                  Authentic tempering date, batch code, and glass thickness markings printed on the factory label of each shipment.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h4 className="font-bold text-white text-sm">Official GST Invoice</h4>
                <p className="text-slate-300 leading-relaxed">
                  We issue 100% compliant GST tax invoices (GSTIN: 36GPSPS7449Q1ZB) specifying the exact Saint-Gobain glass grade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saint-Gobain Product Showcase */}
      <section id="products-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
              Product Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] mt-1">
              Available Genuine Saint-Gobain Architectural Glass
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Cut, polished, and processed to millimetric precision at our Hyderabad CNC processing workshop.
            </p>
          </div>

          <div className="space-y-8">
            {SAINT_GOBAIN_PRODUCTS.map((prod, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                {/* Image */}
                <div className="lg:col-span-4 relative h-64 sm:h-72 lg:h-full min-h-[260px] bg-slate-900">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-3 bg-[#0B1B2B]/90 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                    {prod.category}
                  </span>
                </div>

                {/* Details */}
                <div className="lg:col-span-8 p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B2B]">
                      {prod.name}
                    </h3>
                    <span className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1 rounded-lg border border-slate-200">
                      Thickness: {prod.thicknesses}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prod.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {prod.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 font-medium">
                      Direct Wholesale &amp; Custom Turnkey Installation
                    </span>
                    <a
                      href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20am%20interested%20in%20pricing%20for%20${encodeURIComponent(prod.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2 rounded-xl shadow transition"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Get Instant Estimate</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quote Form with Drawing Upload */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <EnquiryForm
            title="Request Genuine Saint-Gobain Glass Quotation"
            subtitle="Upload your BOQ or schedule a free site survey in Hyderabad."
            sourcePage="Saint-Gobain Glass Dedicated Page"
          />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
