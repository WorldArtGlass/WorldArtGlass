"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar, { WhatsAppIcon } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import EnquiryForm from "@/components/EnquiryForm";
import EnquiryModal from "@/components/EnquiryModal";
import { ALL_SERVICES } from "@/data/servicesData";
import { ALL_PROJECTS } from "@/data/projectsData";
import {
  Phone,
  MapPin,
  Star,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Ruler,
  Clock,
  Sparkles,
  ExternalLink,
  Layers,
  Award,
  ArrowRight,
  Play,
  Calculator,
  Briefcase,
  Home,
  Store,
  Compass,
  FileText
} from "lucide-react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState("Office Glass Partitions");
  const [activeServiceTab, setActiveServiceTab] = useState<string>("commercial");

  // Calculator State
  const [calcService, setCalcService] = useState("office-partition");
  const [calcWidth, setCalcWidth] = useState<number>(10);
  const [calcHeight, setCalcHeight] = useState<number>(8.5);
  const [calcGlassType, setCalcGlassType] = useState<string>("10mm-toughened");

  const openQuoteModal = (serviceName?: string) => {
    if (serviceName) setModalService(serviceName);
    setModalOpen(true);
  };

  // Calculator Logic
  const calculateEstimate = () => {
    const area = (calcWidth || 0) * (calcHeight || 0);
    let ratePerSqFt = 240;

    if (calcService === "office-partition") {
      ratePerSqFt = calcGlassType === "12mm-toughened" ? 280 : 230;
    } else if (calcService === "black-slim-partition") {
      ratePerSqFt = calcGlassType === "12mm-toughened" ? 380 : 330;
    } else if (calcService === "shower-cubicle") {
      ratePerSqFt = 360;
    } else if (calcService === "glass-railing") {
      ratePerSqFt = 480;
    } else if (calcService === "toughened-supply") {
      ratePerSqFt = calcGlassType === "12mm-toughened" ? 180 : 140;
    }

    const total = Math.round(area * ratePerSqFt);
    return { area: Math.round(area), total, rate: ratePerSqFt };
  };

  const estimate = calculateEstimate();

  const commercialServices = ALL_SERVICES.filter((s) => s.category === "commercial");
  const doorsFacades = ALL_SERVICES.filter((s) => s.category === "doors-facades");
  const decorative = ALL_SERVICES.filter((s) => s.category === "residential-decorative");

  const displayedServices =
    activeServiceTab === "commercial"
      ? commercialServices
      : activeServiceTab === "doors-facades"
      ? doorsFacades
      : decorative;

  const featuredProjects = ALL_PROJECTS.slice(0, 6);

  const testimonials = [
    {
      name: "Sandeep Reddy",
      company: "Tech Mahindra Partner Facility",
      location: "Hitec City, Hyderabad",
      rating: 5,
      review:
        "World Art Glass installed over 3,500 sq.ft of 12mm Saint-Gobain acoustic glass partitions for our IT corporate cabins in Hitec City. The acoustic isolation is outstanding, and their team completed the handover 2 days ahead of schedule with full GST documentation.",
      service: "Office Glass Partitions"
    },
    {
      name: "Kavitha Nambiar",
      company: "Studio Artha Architects",
      location: "Banjara Hills, Hyderabad",
      rating: 5,
      review:
        "As an interior architect, I am extremely particular about sightlines and finishes. World Art Glass's 45mm matte black slim profile partitions and fluted telescopic doors for our luxury villa project were executed with millimeter precision. Highly recommended!",
      service: "Black Slim Partitions & Fluted Glass"
    },
    {
      name: "Mohammed Imran",
      company: "Prime Commercial Properties",
      location: "Gachibowli, Hyderabad",
      rating: 5,
      review:
        "We hired World Art Glass for structural spider glazing and ACP cladding on our commercial showroom front. Their factory-direct pricing saved us nearly 20% compared to intermediary contractors, with 100% genuine Saint-Gobain glass.",
      service: "Spider Glass Facades & ACP"
    }
  ];

  const targetAudiences = [
    {
      icon: Briefcase,
      title: "IT Companies & Corporates",
      desc: "Acoustic meeting suites, 38dB soundproof cabins, and minimalist black slim partitions across Hitec City & Gachibowli."
    },
    {
      icon: Compass,
      title: "Architects & Interior Designers",
      desc: "Bespoke fluted glass, telescopic sliding systems, curved toughened glass, and precision CAD/DWG shop drawing support."
    },
    {
      icon: Building2,
      title: "Commercial Property Developers",
      desc: "Turnkey structural curtain walls, spider glass elevations, and ACP cladding delivered on tight institutional schedules."
    },
    {
      icon: Store,
      title: "Retail & Commercial Showrooms",
      desc: "High-transparency frameless 12mm storefronts, heavy-duty Dorma patch doors, and high-security locks (as built for Jio & Peter England)."
    },
    {
      icon: Home,
      title: "Luxury Villa & Penthouse Owners",
      desc: "Frameless 10mm shower cubicles, SS 316 glass balustrades, Smart LED mirrors, and lacquered glass modular kitchen splashbacks."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* 1. HERO BANNER REDESIGN (Requirement #6 & #7) */}
      <section className="relative bg-[#0B1B2B] text-white overflow-hidden pt-28 sm:pt-36 pb-20 md:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/30">
        {/* Architectural Visual Backdrop with Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero_glazing_profiles.jpg"
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
          >
            <source src="/videos/luxury_office_curved_glass_showcase.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-[#0B1B2B]/85 to-[#0B1B2B]/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {/* Heritage Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md shadow-lg">
              <Award className="w-3.5 h-3.5" />
              <span>19+ Years of Industry Experience • Founded in 2007</span>
            </div>

            {/* EXACT Headline Required by User (Requirement #7) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-5">
              WORLD ART GLASS – PREMIUM ARCHITECTURAL GLASS SOLUTIONS IN HYDERABAD.
            </h1>

            {/* Sub-headline & Value Proposition (Requirement #8) */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
              Hyderabad’s premier glass contractor and fabricator specializing in 100% genuine Saint-Gobain Toughened Glass, Office Glass Partitions, Black Slim Profile 45mm Cabins, Spider Glazing Facades, Frameless Shower Cubicles, and Luxury Balustrades.
            </p>

            {/* Prominent CTAs (Requirement #31) */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => openQuoteModal("Office Glass Partitions")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] hover:from-[#E5C158] hover:to-[#D4AF37] text-slate-950 font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-xl shadow-[#D4AF37]/25 transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get Free Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20am%20interested%20in%20architectural%20glass%20solutions%20in%20Hyderabad.%20Please%20share%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp Now</span>
              </a>

              <a
                href="tel:+919985597294"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl transition"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Now: +91 99855 97294</span>
              </a>
            </div>

            {/* Value Trust Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Free Laser Site Measurement</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>100% Genuine Saint-Gobain</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Direct Factory Wholesale Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>GST Tax Invoiced Billing</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CLIENT PORTFOLIO BANNER (Requirement #20: Jio Stores, Peter England, Being Human, Hindware) */}
      <section className="bg-white border-b border-slate-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider">
              Trusted for Flagship Architectural Executions Across Hyderabad &amp; Telangana
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 opacity-90">
            <Link
              href="/projects/jio-stores-retail-facade"
              className="flex items-center gap-2 hover:opacity-100 transition group"
            >
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shadow">
                Jio
              </div>
              <div className="text-left">
                <div className="font-extrabold text-[#0B1B2B] text-sm group-hover:text-blue-700">Reliance Jio Stores</div>
                <div className="text-[10px] text-slate-500">Retail Glass Storefronts</div>
              </div>
            </Link>

            <Link
              href="/projects/peter-england-retail-front"
              className="flex items-center gap-2 hover:opacity-100 transition group"
            >
              <div className="w-9 h-9 rounded-full bg-red-700 text-white font-bold flex items-center justify-center text-xs shadow">
                PE
              </div>
              <div className="text-left">
                <div className="font-extrabold text-[#0B1B2B] text-sm group-hover:text-red-700">Peter England</div>
                <div className="text-[10px] text-slate-500">Aditya Birla Fashion Showroom</div>
              </div>
            </Link>

            <Link
              href="/projects/being-human-clothing-store"
              className="flex items-center gap-2 hover:opacity-100 transition group"
            >
              <div className="w-9 h-9 rounded-full bg-black text-white font-bold flex items-center justify-center text-xs shadow">
                BH
              </div>
              <div className="text-left">
                <div className="font-extrabold text-[#0B1B2B] text-sm group-hover:text-slate-800">Being Human</div>
                <div className="text-[10px] text-slate-500">Mall Retail Elevators &amp; Doors</div>
              </div>
            </Link>

            <Link
              href="/projects/hindware-experience-centre"
              className="flex items-center gap-2 hover:opacity-100 transition group"
            >
              <div className="w-9 h-9 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-xs shadow">
                HW
              </div>
              <div className="text-left">
                <div className="font-extrabold text-[#0B1B2B] text-sm group-hover:text-amber-700">Hindware Experience</div>
                <div className="text-[10px] text-slate-500">Spider Glazing &amp; ACP Cladding</div>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-xs shadow">
                IT
              </div>
              <div className="text-left">
                <div className="font-extrabold text-[#0B1B2B] text-sm">Hitec City &amp; Gachibowli</div>
                <div className="text-[10px] text-slate-500">Corporate Executive Cabins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY INTRODUCTION & MASTERY (Requirement #8, #26, #27) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Award className="w-3.5 h-3.5" />
              19+ Years of Glass Engineering Mastery
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1B2B] tracking-tight leading-snug">
              Specialized Architectural Glass Fabricators in Hyderabad Since 2007
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Started in 2007, <strong>World Art Glass</strong> is an established international-standard glass fabrication and contracting company headquartered in Goshamahal, Hyderabad. Over 19+ years, we have mastered the art and engineering of structural glass, acoustic office partitions, black slim profiles, spider facades, and luxury residential installations.
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              We eliminate the multiple tiers of intermediary glass dealers and sub-contractors. By operating our own CNC glass edge-polishing facility and digital laser measurement crews, we provide direct wholesale factory pricing, uncompromising Saint-Gobain material authenticity, and rapid turnaround on demanding corporate fitout schedules.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-slate-800 font-semibold">
                  100% Genuine Saint-Gobain Glass with permanent laser logos
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-slate-800 font-semibold">
                  Free Laser Site Measurement anywhere in Hyderabad
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-slate-800 font-semibold">
                  Dorma &amp; Ozone Heavy-Duty Hardware with 500k-cycle tests
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-slate-800 font-semibold">
                  Full GST Billing (GSTIN: 36GPSPS7449Q1ZB) with ITC credit
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/why-us"
                className="inline-flex items-center gap-2 bg-[#0B1B2B] hover:bg-[#17364b] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>
              <Link
                href="/saint-gobain"
                className="text-xs sm:text-sm font-bold text-[#C5A059] hover:underline"
              >
                Explore Saint-Gobain Glass Range &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
              <Image
                src="/images/black_slim_partitions_hd.jpg"
                alt="World Art Glass Master Craftsmanship"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B1B2B]/95 p-4 rounded-xl border border-[#D4AF37]/40 text-white backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-white">In-House CNC Edge Polishing</h4>
                    <p className="text-[11px] text-slate-300">Millimeter-precision waterjet cutouts for Dorma/Ozone fittings</p>
                  </div>
                  <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/20 px-2.5 py-1 rounded">Goshamahal Works</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PRODUCTS & SERVICES GRID (Requirement #9 & 15 Service Pages) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                Specialized Architectural Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1B2B] mt-1">
                Explore Our Key Products &amp; Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
                Dedicated engineering for commercial corporate offices, retail stores, and luxury villas. Select a category below:
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveServiceTab("commercial")}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition cursor-pointer ${
                  activeServiceTab === "commercial"
                    ? "bg-[#0B1B2B] text-[#D4AF37] shadow-md border border-[#D4AF37]/50"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                Commercial Partitions
              </button>
              <button
                onClick={() => setActiveServiceTab("doors-facades")}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition cursor-pointer ${
                  activeServiceTab === "doors-facades"
                    ? "bg-[#0B1B2B] text-[#D4AF37] shadow-md border border-[#D4AF37]/50"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                Doors &amp; Facades
              </button>
              <button
                onClick={() => setActiveServiceTab("residential-decorative")}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition cursor-pointer ${
                  activeServiceTab === "residential-decorative"
                    ? "bg-[#0B1B2B] text-[#D4AF37] shadow-md border border-[#D4AF37]/50"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                Residential &amp; Decorative
              </button>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map((service) => (
              <div
                key={service.slug}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20"></div>

                  <span className="absolute top-3 left-3 bg-[#0B1B2B]/90 text-[#D4AF37] border border-[#D4AF37]/40 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow">
                    {service.badge}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1B2B] mb-2 group-hover:text-[#C5A059] transition">
                      <Link href={`/services/${service.slug}`}>{service.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {service.tagline}
                    </p>

                    <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                      {service.specifications.slice(0, 3).map((spec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-slate-800">{spec.label}:</strong> {spec.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1B2B] group-hover:text-[#C5A059] transition"
                    >
                      <span>Specifications &amp; Details</span>
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

          <div className="text-center pt-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#0B1B2B] hover:bg-[#17364b] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition shadow-lg"
            >
              <span>View All 15 Dedicated Service Pages</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. SAINT-GOBAIN SPOTLIGHT SECTION (Requirement #21 - #24) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1B2B] text-white border-y border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              Dedicated Saint-Gobain Brand Excellence
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              100% Genuine Saint-Gobain Architectural Glass in Hyderabad
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We exclusively fabricate and install genuine Saint-Gobain glass products. Conforming strictly to IS 2553 (Part 1 &amp; 2) and EN 12150-1 safety codes, our glass features the indelible permanent laser-engraved logo and quality batch tracking codes on every panel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-200">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                <h4 className="font-bold text-[#D4AF37] text-sm">Planilaque Evolution</h4>
                <p className="text-slate-300">26+ baked high-gloss lacquered shades for luxury kitchens and wardrobes.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                <h4 className="font-bold text-[#D4AF37] text-sm">ExtraClear Diamant</h4>
                <p className="text-slate-300">Over 91% light transmission with zero green edge distortion for luxury retail.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                <h4 className="font-bold text-[#D4AF37] text-sm">Antelio &amp; Cool-Lite</h4>
                <p className="text-slate-300">Solar control glass filtering 70%+ infrared heat to cut commercial HVAC bills.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                <h4 className="font-bold text-[#D4AF37] text-sm">Mirox 4Green Mirrors</h4>
                <p className="text-slate-300">Copper-free ecological mirrors that resist moisture and black edge decay.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/saint-gobain"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                <span>Read Saint-Gobain Specifications Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/15 backdrop-blur-md space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D4AF37]" /> Authenticity Verification
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Before accepting glass from any vendor in Hyderabad, inspect the corner for the permanent laser-engraved Saint-Gobain hallmark. World Art Glass guarantees authenticity with official tax invoices.
              </p>
              <div className="relative h-48 rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                <Image
                  src="/images/cat_toughened_glass.jpg"
                  alt="Saint-Gobain Glass Verification"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FEATURED COMPLETED PROJECTS (Requirement #17 & #18) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                Verified Case Studies
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1B2B] mt-1">
                Completed Architectural Projects in Hyderabad
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Executed on schedule with 100% genuine Saint-Gobain glass &amp; official GST billing.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B1B2B] hover:text-[#C5A059] transition"
            >
              <span>View All Project Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((proj) => (
              <div
                key={proj.slug}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={proj.heroImage}
                    alt={proj.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20"></div>

                  <span className="absolute top-3 left-3 bg-[#0B1B2B]/90 text-[#D4AF37] border border-[#D4AF37]/40 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow">
                    {proj.categoryLabel}
                  </span>

                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md bg-black/40 px-2 py-0.5 rounded">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{proj.location}</span>
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider mb-1">
                      Client: {proj.client}
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1B2B] mb-2 group-hover:text-[#C5A059] transition">
                      <Link href={`/projects/${proj.slug}`}>{proj.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {proj.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1B2B] group-hover:text-[#C5A059] transition"
                    >
                      <span>Case Study &amp; Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                    </Link>

                    <a
                      href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20saw%20your%20project%20for%20${encodeURIComponent(proj.client)}%20and%20would%20like%20a%20similar%20quotation.`}
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

      {/* 7. REAL SITE VIDEO WALKTHROUGHS (10 Site Videos) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#D4AF37]">
                Real On-Site Videos
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Watch Our In-House Precision in Action
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                Real Hyderabad job sites: from digital laser measurements and luxury curved office corridors to spider glazing facades and seamless handovers.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition"
            >
              <span>Watch All 10 Real Videos</span>
              <Play className="w-3.5 h-3.5 fill-current" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
              <div className="relative aspect-video bg-black">
                <video
                  src="/videos/luxury_office_curved_glass_showcase.mp4"
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-white">Curved Rose-Gold Slim Profile Cabins</h4>
                <p className="text-xs text-slate-400 mt-1">Hitec City, Hyderabad • 12mm Toughened Glass</p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
              <div className="relative aspect-video bg-black">
                <video
                  src="/videos/gallery_black_slim_double_doors_demo.mp4"
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-white">Black Slim 45mm Double Doors Demo</h4>
                <p className="text-xs text-slate-400 mt-1">Financial District, Gachibowli • Dorma Closer</p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
              <div className="relative aspect-video bg-black">
                <video
                  src="/videos/gallery_spider_glazing_site.mp4"
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-white">Hindware Showroom Spider Glazing</h4>
                <p className="text-xs text-slate-400 mt-1">Hyderabad • SS 316 Spider Fittings &amp; ACP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ARCHITECTURAL GLASS COST ESTIMATOR (Interactive Tool) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200" id="calculator">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059] flex items-center justify-center gap-1.5">
              <Calculator className="w-4 h-4" /> Instant Glass Cost Estimator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] mt-1">
              Estimate Your Glass Project in Hyderabad
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Get an instant indicative budget calculation based on your room dimensions. Contact our estimators for final laser measurements.
            </p>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Select Service</label>
                <select
                  value={calcService}
                  onChange={(e) => setCalcService(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 outline-none"
                >
                  <option value="office-partition">Office Glass Partitions</option>
                  <option value="black-slim-partition">Black Slim Profile 45mm</option>
                  <option value="shower-cubicle">10mm Shower Cubicle</option>
                  <option value="glass-railing">Glass Balustrades &amp; Railings</option>
                  <option value="toughened-supply">Toughened Glass Supply Only</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Width (Feet)</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={calcWidth}
                  onChange={(e) => setCalcWidth(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Height (Feet)</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  step="0.5"
                  value={calcHeight}
                  onChange={(e) => setCalcHeight(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 outline-none"
                />
              </div>
            </div>

            {/* Glass Type Picker */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Glass Specification</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "10mm-toughened", label: "10mm Toughened" },
                  { id: "12mm-toughened", label: "12mm Toughened (Recommended)" },
                  { id: "10mm-fluted", label: "10mm Fluted / Reeded" },
                  { id: "12mm-extraclear", label: "12mm ExtraClear Diamant" }
                ].map((gt) => (
                  <button
                    key={gt.id}
                    type="button"
                    onClick={() => setCalcGlassType(gt.id)}
                    className={`text-xs py-2 px-3 rounded-lg border font-medium transition cursor-pointer ${
                      calcGlassType === gt.id
                        ? "bg-[#0B1B2B] text-[#D4AF37] border-[#0B1B2B] font-bold"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {gt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculated Output Result */}
            <div className="bg-[#0B1B2B] text-white p-6 rounded-xl border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400">Estimated Total Glass Area</span>
                <div className="text-2xl font-bold text-white">{estimate.area} Sq.Ft</div>
                <div className="text-xs text-slate-300 mt-0.5">Indicative Rate: approx. ₹{estimate.rate} / Sq.Ft</div>
              </div>

              <div className="text-right sm:text-right">
                <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">Estimated Project Budget</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">
                  ₹{estimate.total.toLocaleString("en-IN")}*
                </div>
                <div className="text-[10px] text-slate-400">*Excluding hardware, transport &amp; GST</div>
              </div>

              <a
                href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20used%20your%20cost%20estimator%20for%20${encodeURIComponent(calcService)}%20(${estimate.area}%20Sq.Ft%2C%20${encodeURIComponent(calcGlassType)}).%20Please%20verify%20and%20provide%20official%20quotation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-5 py-3 rounded-xl shadow-lg transition"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Confirm Quote on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 9. TAILORED ARCHITECTURAL AUDIENCE SOLUTIONS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
              Target Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] mt-1">
              Who We Serve Across Hyderabad
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudiences.map((aud, i) => {
              const IconComp = aud.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B1B2B] text-[#D4AF37] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#0B1B2B]">{aud.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{aud.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS & REVIEWS (Requirement #30) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
              Verified Client Trust
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] mt-1">
              What Hyderabad Architects &amp; Executives Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Over 188+ verified reviews with 4.9 average stars on Google.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#D4AF37]/50 transition"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(test.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                    &ldquo;{test.review}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-xs">
                  <h4 className="font-bold text-[#0B1B2B]">{test.name}</h4>
                  <p className="text-slate-500">{test.company} • {test.location}</p>
                  <span className="text-[11px] font-semibold text-[#C5A059] mt-1 block">
                    {test.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. INTERACTIVE ENQUIRY FORM & FILE UPLOAD (Requirement #32 & #33) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100" id="enquiry">
        <div className="max-w-4xl mx-auto">
          <EnquiryForm
            title="Book Free Site Survey & Get Quotation"
            subtitle="Upload your project drawings, architectural PDF, or site photos (up to 25MB). Free laser survey across Hyderabad."
            sourcePage="Homepage Master Form"
          />
        </div>
      </section>

      {/* 12. GOOGLE MAPS EMBED SECTION */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                Visit Our Workshop &amp; Flagship Showroom
              </span>
              <h3 className="text-2xl font-extrabold text-[#0B1B2B]">
                World Art Glass Location in Goshamahal, Hyderabad
              </h3>
            </div>
            <a
              href="https://maps.google.com/?cid=8385085351898518265"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1B2B] hover:text-[#C5A059] transition"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-slate-300 shadow-lg bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4770659639537!2d78.46399127592476!3d17.38883658349704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977a08053781%3A0x745dde9284eb12f9!2sWorld%20Art%20Glass!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="World Art Glass Hyderabad Google Maps Location"
            />
          </div>
        </div>
      </section>

      {/* Global Quotation Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={modalService}
        sourceTitle="Homepage Quick Modal"
      />

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
