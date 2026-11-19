"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar, { WhatsAppIcon } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import EnquiryForm from "@/components/EnquiryForm";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Award,
  Zap,
  TrendingDown,
  Star,
  ChevronDown,
  FileText,
  BadgeCheck,
  Clock,
  Ruler,
  Layers,
  Building2,
  MapPin,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react";

export default function WhyUsAboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
    },
    {
      name: "Dr. Vikram Joshi",
      company: "Private Luxury Residence",
      location: "Jubilee Hills, Hyderabad",
      rating: 5,
      review:
        "They installed frameless 10mm shower cubicles and 12mm balcony glass railings with SS 316 spigots in our Jubilee Hills bungalow. Flawless workmanship, clean execution, and dependable after-sales support.",
      service: "Shower Cubicles & Balustrades"
    }
  ];

  const faqs = [
    {
      q: "When was World Art Glass founded and how many years of experience do you have?",
      a: "World Art Glass was established in Hyderabad in 2007. We bring over 19+ years of dedicated industry experience specializing exclusively in architectural glass fabrication, Saint-Gobain toughened safety glass supply, office glass partitions, and commercial facades."
    },
    {
      q: "Where is your factory and workshop located?",
      a: "Our central fabrication workshop and flagship showroom is strategically located at New Aghapura X Road, Habeeb Nagar, Goshamahal / Nampally, Hyderabad – 500001, Telangana. Equipped with automated CNC diamond edge polishing machines, computer-controlled water-jet cutting, and precision digital laser measuring tools."
    },
    {
      q: "How can I verify that the glass is genuine Saint-Gobain Toughened Glass?",
      a: "Every single glass sheet supplied and installed by World Art Glass Hyderabad features the permanent laser-engraved Saint-Gobain trademark and toughened glass quality certification code. As trusted Toughened Glass Dealers in Hyderabad, we also issue official GST Tax invoices specifying the Saint-Gobain batch details."
    },
    {
      q: "Do you provide free laser site measurement across Hyderabad?",
      a: "Yes! We offer 100% free site visits anywhere in Hyderabad, Telangana — including Banjara Hills, Jubilee Hills, Hitec City, Gachibowli, Madhapur, Financial District, Nanakramguda, Begumpet, and Secunderabad. Our technical supervisor brings digital laser measurement tools to ensure millimetric precision."
    },
    {
      q: "What hardware and fitting brands do you install?",
      a: "We exclusively use heavy-duty architectural grade stainless steel (SS 304 / 316), spider glass fittings, and slim profile aluminium frames from Dorma, Ozone, Geze, and certified hardware manufacturers with anti-rust warranties."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-[#0B1B2B] text-white overflow-hidden pt-28 sm:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_skyscrapers.jpg"
            alt="About World Art Glass Hyderabad"
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-[#0B1B2B]/85 to-[#0B1B2B]/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mb-4 uppercase tracking-wider">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-white">About Us &amp; Company Profile</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Established 2007 • 19+ Years of Architectural Mastery
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              World Art Glass Hyderabad – Company Profile &amp; Trust
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Founded in 2007, World Art Glass has grown into Hyderabad’s premier architectural glass fabrication and installation company, delivering over 1,500 commercial, corporate, and luxury residential projects across Telangana.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#company-story"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-slate-950 font-extrabold text-sm px-5 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                <span>Read Our Heritage</span>
              </a>
              <a
                href="https://wa.me/919985597294"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-5 py-3 rounded-xl shadow-lg transition"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat with Senior Fabricator</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Bar */}
      <section className="bg-white border-b border-slate-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 border-r border-slate-100 last:border-none">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1B2B]">19+</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Years Industry Experience</div>
            <div className="text-[11px] text-[#C5A059] font-medium">Established in 2007</div>
          </div>
          <div className="p-4 border-r border-slate-100 last:border-none">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1B2B]">1,500+</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Completed Installations</div>
            <div className="text-[11px] text-[#C5A059] font-medium">Offices, Malls &amp; Villas</div>
          </div>
          <div className="p-4 border-r border-slate-100 last:border-none">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1B2B]">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Genuine Saint-Gobain</div>
            <div className="text-[11px] text-[#C5A059] font-medium">Laser Verified Logos</div>
          </div>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1B2B]">4.9 ★</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Verified Client Rating</div>
            <div className="text-[11px] text-[#C5A059] font-medium">188+ Reviews</div>
          </div>
        </div>
      </section>

      {/* Company Heritage & Workshop Section */}
      <section id="company-story" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
              Our Foundation &amp; Mastery
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1B2B] tracking-tight">
              Crafting Architectural Glass Excellence Since 2007
            </h2>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                World Art Glass was established in Hyderabad in 2007 with a clear mission: to provide world-class architectural glass fabrication and installation directly to IT companies, corporate developers, architects, and luxury homeowners without intermediate distributor markups.
              </p>
              <p>
                Over the past 19+ years, we have built a reputation for uncompromised engineering integrity. From our fully equipped fabrication workshop at New Aghapura X Road, Goshamahal, our master technicians handle computer-controlled CNC edge polishing, automated water-jet glass cutting, and precision tempering conforming strictly to IS 2553 and EN 12150-1 international safety codes.
              </p>
              <p>
                Our landmark portfolio includes prestigious executions for commercial retail giants like Jio Stores, Peter England, and Being Human, as well as high-traffic elevations like the Hindware Experience Centre and major corporate IT office cabins throughout Hitec City and the Financial District.
              </p>
            </div>

            {/* GST and Contact Information Pill */}
            <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-xs text-slate-800 space-y-1">
              <p><strong className="text-slate-900">Official Company Name:</strong> World Art Glass</p>
              <p><strong className="text-slate-900">GST Registration:</strong> 36GPSPS7449Q1ZB (Full Tax Invoicing)</p>
              <p><strong className="text-slate-900">Registered Office &amp; Works:</strong> New Aghapura X Road, Habeeb Nagar, Goshamahal / Nampally, Hyderabad – 500001, Telangana.</p>
              <p><strong className="text-slate-900">Official Website:</strong> www.worldartglass.net • <strong className="text-slate-900">Email:</strong> world_glass@yahoo.com</p>
            </div>
          </div>

          {/* Workshop & Factory Imagery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl bg-slate-900">
              <Image
                src="/images/glass_fabrication_engineering.jpg"
                alt="World Art Glass Fabrication Workshop"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 bg-[#0B1B2B]/90 text-[#D4AF37] text-xs font-bold px-3 py-1.5 rounded-full border border-[#D4AF37]/30 backdrop-blur-md">
                In-House CNC Edge Polishing &amp; Processing
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 rounded-xl overflow-hidden shadow-sm bg-slate-900">
                <Image
                  src="/images/storefront_real.jpg"
                  alt="Flagship Showroom Goshamahal"
                  fill
                  className="object-cover object-center"
                />
                <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
                  Flagship Showroom
                </span>
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden shadow-sm bg-slate-900">
                <Image
                  src="/images/architectural_glass_craftsmanship.jpg"
                  alt="Glass Craftsmanship"
                  fill
                  className="object-cover object-center"
                />
                <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
                  Laser Measuring &amp; Fitting
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Pillars of Trust */}
      <section className="py-16 bg-[#0B1B2B] text-white px-4 sm:px-6 lg:px-8 border-y border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#D4AF37]">
              Why Choose World Art Glass
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              The 4 Pillars of Our 19-Year Reputation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-white">100% Genuine Saint-Gobain</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Permanent laser-etched trademark on every sheet with official batch authenticity codes and full GST tax invoices.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center">
                <Ruler className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-white">Free Laser Site Survey</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Digital laser measurements anywhere in Hyderabad ensure millimetric precision, eliminating on-site fitting gaps.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-white">Direct Factory Wholesale</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fabricate directly in our Hyderabad facility, eliminating middleman distributor commissions for unbeatable value.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-white">Master In-House Installers</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We never sub-contract your project. Our full-time veteran technicians ensure spotless, damage-free execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials & Reviews (Requirement #30) */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
              Client Reviews &amp; Testimonials
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] mt-1">
              Trusted by IT Companies, Architects &amp; Villa Owners
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Over 188+ verified reviews with an average 4.9-star rating across Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((test, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-[#D4AF37]/50 hover:shadow-md transition space-y-4 flex flex-col justify-between"
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

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-[#0B1B2B]">{test.name}</h4>
                    <p className="text-slate-500">{test.company} • {test.location}</p>
                  </div>
                  <span className="bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md text-[11px] font-semibold">
                    {test.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-16 bg-slate-50 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
              Clear Answers
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-4 sm:p-5 font-bold text-sm text-[#0B1B2B] flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C5A059] shrink-0 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <EnquiryForm
            title="Connect with Our Senior Glass Engineers"
            subtitle="Book a free digital laser survey or request a project quotation."
            sourcePage="About Us / Why Choose Us Page"
          />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
