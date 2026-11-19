"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar, { WhatsAppIcon } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import EnquiryForm from "@/components/EnquiryForm";
import { ALL_PROJECTS } from "@/data/projectsData";
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  Building2,
  Calendar,
  ShieldCheck,
  ArrowRight,
  Filter,
  Award
} from "lucide-react";

export default function ProjectsPortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "retail", label: "Retail Chains (Jio, Peter England, Being Human)" },
    { id: "corporate", label: "Corporate & IT Cabins" },
    { id: "commercial", label: "Commercial Facades & Showrooms" },
    { id: "residential", label: "Luxury Residential & Villas" }
  ];

  const filteredProjects =
    activeCategory === "all"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-[#0B1B2B] text-white overflow-hidden pt-28 sm:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_skyscrapers.jpg"
            alt="World Art Glass Project Portfolio"
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
              <span className="text-white">Project Portfolio</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              1,500+ Verified Installations in Hyderabad
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Real Architectural Projects Across Hyderabad
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Explore verified case studies executed with 100% genuine Saint-Gobain glass for leading retail chains like Jio Stores, Peter England, Being Human, commercial landmarks like Hindware Experience Centre, and premier IT companies in Hitec City.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#case-studies-grid"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-slate-950 font-extrabold text-sm px-5 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm px-5 py-3 rounded-xl transition"
              >
                <span>Watch Real Site Videos (10)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Project Cards */}
      <section id="case-studies-grid" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                Featured Executions ({filteredProjects.length})
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B]">
                Completed on Schedule with Official GST Billing
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col"
              >
                {/* Hero Image */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20"></div>

                  <span className="absolute top-3 left-3 bg-[#0B1B2B]/90 text-[#D4AF37] border border-[#D4AF37]/40 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow">
                    {project.categoryLabel}
                  </span>

                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md bg-black/40 px-2 py-0.5 rounded">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{project.location}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider mb-1">
                      Client: {project.client}
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1B2B] mb-2 group-hover:text-[#C5A059] transition">
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Scope & Products Preview */}
                    <div className="space-y-1.5 mb-6 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <p><strong className="text-slate-900">Coverage:</strong> {project.area}</p>
                      <p className="line-clamp-1"><strong className="text-slate-900">Key Glass:</strong> {project.productsUsed[0]}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1B2B] group-hover:text-[#C5A059] transition"
                    >
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                    </Link>

                    <a
                      href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20saw%20your%20project%20for%20${encodeURIComponent(project.client)}%20and%20would%20like%20a%20similar%20quotation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow transition"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <EnquiryForm
            title="Inquire for Your Commercial or Residential Project"
            subtitle="Upload your project drawings (PDF/DWG) or book a free site survey anywhere across Hyderabad."
            sourcePage="Projects Portfolio Page"
          />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
