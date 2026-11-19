"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar, { WhatsAppIcon } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import EnquiryForm from "@/components/EnquiryForm";
import { ALL_SERVICES } from "@/data/servicesData";
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Ruler,
  DoorOpen,
  ShowerHead,
  Gem,
  Palette,
  Eye,
  ExternalLink,
  ArrowRight,
  Phone,
  Filter
} from "lucide-react";

export default function ServicesCatalogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All 15 Services" },
    { id: "commercial", label: "Commercial Partitions" },
    { id: "doors-facades", label: "Doors & Facades" },
    { id: "residential-decorative", label: "Residential & Decorative" }
  ];

  const filteredServices =
    activeCategory === "all"
      ? ALL_SERVICES
      : ALL_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-[#0B1B2B] text-white overflow-hidden pt-28 sm:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_glazing_profiles.jpg"
            alt="World Art Glass Services Catalog"
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-[#0B1B2B]/85 to-[#0B1B2B]/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mb-4 uppercase tracking-wider">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <span className="text-white">Our Products &amp; Services</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              15 Specialized Architectural Services
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Architectural Glass Solutions in Hyderabad
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              From acoustic IT office partitions and black slim profile grids to grand spider glass facades and bespoke Saint-Gobain lacquered glass. Engineered with 100% genuine Saint-Gobain glass and Dorma/Ozone hardware.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#services-grid"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-slate-950 font-extrabold text-sm px-5 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                <span>Browse All 15 Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20want%20to%20discuss%20an%20architectural%20glass%20project%20in%20Hyderabad."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-5 py-3 rounded-xl shadow-lg transition"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Consultant</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Services Grid */}
      <section id="services-grid" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                Specialized Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B]">
                Explore Our 15 Core Glass Solutions
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#0B1B2B] text-[#D4AF37] shadow-md border border-[#D4AF37]/50"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of 15 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.slug}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col"
              >
                {/* Image & Badge */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

                  <span className="absolute top-3 left-3 bg-[#0B1B2B]/90 text-[#D4AF37] border border-[#D4AF37]/40 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow">
                    {service.badge}
                  </span>

                  <span className="absolute bottom-3 left-3 bg-white/90 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-md uppercase tracking-wider">
                    {service.categoryLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1B2B] mb-2 group-hover:text-[#C5A059] transition">
                      <Link href={`/services/${service.slug}`}>{service.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {service.tagline}
                    </p>

                    {/* Quick Specs Bullet List */}
                    <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                      {service.specifications.slice(0, 3).map((spec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>
                            <strong className="font-semibold text-slate-800">{spec.label}: </strong>
                            {spec.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1B2B] group-hover:text-[#C5A059] transition"
                    >
                      <span>Specifications &amp; Photos</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                    </Link>

                    <a
                      href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20would%20like%20a%20quotation%20for%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow transition"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Architectural Glass Comparison Matrix */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
              Technical Selection Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] mt-1">
              Selecting the Right Glass Thickness &amp; Type
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our engineering team helps architects and contractors select optimal glass specifications based on structural span, height, and acoustic targets.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <thead className="bg-[#0B1B2B] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-4 font-bold">Glass Format</th>
                  <th className="py-4 px-4 font-bold">Recommended Thickness</th>
                  <th className="py-4 px-4 font-bold">Acoustic Reduction</th>
                  <th className="py-4 px-4 font-bold">Primary Architectural Application</th>
                  <th className="py-4 px-4 font-bold">Compliance Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-bold text-[#0B1B2B]">Standard Toughened Glass</td>
                  <td className="py-3.5 px-4 text-slate-700">8mm / 10mm</td>
                  <td className="py-3.5 px-4 text-slate-700">30dB - 34dB</td>
                  <td className="py-3.5 px-4 text-slate-700">Standard office partitions, shower enclosures, cabinet doors</td>
                  <td className="py-3.5 px-4 text-slate-700 font-semibold text-emerald-700">IS 2553 (Part 1)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition bg-slate-50/50">
                  <td className="py-3.5 px-4 font-bold text-[#0B1B2B]">Heavy Toughened Glass</td>
                  <td className="py-3.5 px-4 text-slate-700">12mm Saint-Gobain</td>
                  <td className="py-3.5 px-4 text-slate-700">34dB - 38dB</td>
                  <td className="py-3.5 px-4 text-slate-700">Full-height IT cabins (10-12ft), frameless main doors, glass railings</td>
                  <td className="py-3.5 px-4 text-slate-700 font-semibold text-emerald-700">EN 12150-1</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-bold text-[#0B1B2B]">Acoustic Laminated Glass</td>
                  <td className="py-3.5 px-4 text-slate-700">11.52mm / 13.52mm PVB</td>
                  <td className="py-3.5 px-4 text-slate-700">38dB - 42dB</td>
                  <td className="py-3.5 px-4 text-slate-700">Confidential boardrooms, audio suites, high-rise villa balcony railings</td>
                  <td className="py-3.5 px-4 text-slate-700 font-semibold text-emerald-700">IS 2553 (Part 2)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition bg-slate-50/50">
                  <td className="py-3.5 px-4 font-bold text-[#0B1B2B]">Double Glazed Units (DGU)</td>
                  <td className="py-3.5 px-4 text-slate-700">24mm (6mm + 12A + 6mm)</td>
                  <td className="py-3.5 px-4 text-slate-700">40dB - 45dB</td>
                  <td className="py-3.5 px-4 text-slate-700">Commercial structural glazing, exterior facades, energy-saving curtain walls</td>
                  <td className="py-3.5 px-4 text-slate-700 font-semibold text-emerald-700">IGCC Certified</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-bold text-[#0B1B2B]">Point-Fixed Spider Glass</td>
                  <td className="py-3.5 px-4 text-slate-700">12mm / 15mm / 19mm</td>
                  <td className="py-3.5 px-4 text-slate-700">Structural Grade</td>
                  <td className="py-3.5 px-4 text-slate-700">Grand commercial atriums, automobile showroom elevations, airport entries</td>
                  <td className="py-3.5 px-4 text-slate-700 font-semibold text-emerald-700">NBC Wind Load Verified</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quote Request & File Upload Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <EnquiryForm
            title="Request a Free Quotation & Site Measurement"
            subtitle="Upload your architectural drawings (PDF/DWG) or book a free digital laser survey anywhere in Hyderabad."
            sourcePage="Services Catalog Master Page"
          />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
