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
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Play,
  Film,
  Building2,
  Phone
} from "lucide-react";

type GalleryVideo = {
  id: string;
  title: string;
  category: "partitions" | "residential" | "facades" | "interiors";
  categoryLabel: string;
  location: string;
  src: string;
};

const galleryVideos: GalleryVideo[] = [
  {
    id: "v-curved-rose-gold",
    title: "Curved Rose-Gold Slim Profile Cabins",
    category: "partitions",
    categoryLabel: "Office Partitions",
    location: "Hitec City, Hyderabad",
    src: "/videos/luxury_office_curved_glass_showcase.mp4"
  },
  {
    id: "v-fluted-telescopic",
    title: "Fluted Glass Telescopic Sliding Partition",
    category: "interiors",
    categoryLabel: "Interiors & Mirrors",
    location: "Jubilee Hills, Hyderabad",
    src: "/videos/gallery_fluted_telescopic_partition.mp4"
  },
  {
    id: "v-client-review-nanakramguda",
    title: "Client Review — Double Slim Glass Doors",
    category: "partitions",
    categoryLabel: "Office Partitions",
    location: "Nanakramguda, Hyderabad",
    src: "/videos/gallery_client_review_nanakramguda.mp4"
  },
  {
    id: "v-shower-cubicle-site",
    title: "10mm Black-Profile Sliding Shower Cubicle",
    category: "residential",
    categoryLabel: "Shower & Villas",
    location: "Banjara Hills, Hyderabad",
    src: "/videos/gallery_shower_cubicle_site.mp4"
  },
  {
    id: "v-spider-glazing-site",
    title: "Spider Glass Facade — Hindware Showroom",
    category: "facades",
    categoryLabel: "Facades & Railings",
    location: "Hyderabad, Telangana",
    src: "/videos/gallery_spider_glazing_site.mp4"
  },
  {
    id: "v-commercial-facade",
    title: "Commercial Structural Spider Glazing",
    category: "facades",
    categoryLabel: "Facades & Railings",
    location: "Hyderabad, Telangana",
    src: "/videos/gallery_commercial_facade_elevation.mp4"
  },
  {
    id: "v-black-slim-double-doors",
    title: "Black Slim 45mm Double Glass Doors",
    category: "partitions",
    categoryLabel: "Office Partitions",
    location: "Madhapur, Hyderabad",
    src: "/videos/gallery_black_slim_double_doors_demo.mp4"
  },
  {
    id: "v-black-profile-cabins",
    title: "Black Slim Profile Office Cabin Suite",
    category: "partitions",
    categoryLabel: "Office Partitions",
    location: "Gachibowli, Hyderabad",
    src: "/videos/gallery_black_profile_office_cabins.mp4"
  },
  {
    id: "v-rosegold-telescopic-kitchen",
    title: "Rose-Gold 4-Panel Telescopic Fluted Partition",
    category: "interiors",
    categoryLabel: "Interiors & Mirrors",
    location: "Jubilee Hills, Hyderabad",
    src: "/videos/gallery_rosegold_telescopic_kitchen_partition.mp4"
  },
  {
    id: "v-frosted-black-shower",
    title: "Frosted Black-Frame Sliding Shower Enclosure",
    category: "residential",
    categoryLabel: "Shower & Villas",
    location: "Banjara Hills, Hyderabad",
    src: "/videos/gallery_frosted_black_sliding_shower.mp4"
  }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? galleryVideos
      : galleryVideos.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-[#0B1B2B] text-white overflow-hidden pt-28 sm:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_luxury_terrace_v2.jpg"
            alt="World Art Glass Hyderabad Video Gallery"
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-[#0B1B2B]/85 to-[#0B1B2B]/60 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mb-4 uppercase tracking-wider">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-white">Video Gallery</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              10 Verified Site Walkthrough Videos
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Architectural Glass Site Video Gallery
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Watch real Hyderabad site videos of our Saint-Gobain Toughened Glass partitions, fluted telescopic sliding doors, frameless &amp; black-profile shower cubicles, spider glass facades, and verified client handovers.
            </p>
          </div>
        </div>
      </section>

      {/* Video Gallery Grid Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header & Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                Verified Site Documentation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] tracking-tight">
                Site Execution Videos ({filtered.length})
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Tap any video card to launch full-screen interactive player with sound or request a similar design.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white border border-slate-200 p-1.5 rounded-2xl sm:rounded-full shadow-sm overflow-x-auto max-w-full">
              {[
                { key: "all", label: `All Videos (${galleryVideos.length})` },
                { key: "partitions", label: "Office Partitions" },
                { key: "residential", label: "Shower & Villas" },
                { key: "facades", label: "Facades & Railings" },
                { key: "interiors", label: "Interiors & Mirrors" }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveFilter(tab.key);
                    setLightboxIndex(null);
                  }}
                  className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition whitespace-nowrap shrink-0 cursor-pointer ${
                    activeFilter === tab.key
                      ? "bg-[#0B1B2B] text-[#D4AF37] shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Video Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Video Container */}
                <div className="relative aspect-[9/10] sm:aspect-square w-full bg-slate-950 overflow-hidden flex items-center justify-center">
                  <video
                    src={item.src}
                    playsInline
                    muted
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#0B1B2B]/90 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-[#0B1B2B]/90 text-white border border-[#D4AF37]/30 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                    {item.categoryLabel}
                  </span>

                  <span className="absolute top-3 right-3 bg-[#25D366] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                    <Play className="w-2.5 h-2.5 fill-current" /> Video
                  </span>
                </div>

                {/* Card Footer */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#C5A059] transition line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0B1B2B] group-hover:underline">
                      Watch Video &rarr;
                    </span>
                    <a
                      href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20saw%20your%20site%20video%20for%20%22${encodeURIComponent(item.title)}%22%20and%20want%20a%20similar%20installation.`}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-[#25D366] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow"
                    >
                      <WhatsAppIcon className="w-3 h-3" /> Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content Wrapper */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full aspect-[9/14] sm:aspect-video max-h-[75vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <video
                key={filtered[lightboxIndex].src}
                src={filtered[lightboxIndex].src}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Video Meta Info */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2 text-white">
              <div>
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  {filtered[lightboxIndex].categoryLabel} • {lightboxIndex + 1} of {filtered.length}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {filtered[lightboxIndex].title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{filtered[lightboxIndex].location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20am%20watching%20your%20site%20video%20for%20%22${encodeURIComponent(filtered[lightboxIndex].title)}%22%20and%20need%20a%20quotation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg transition"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Request Similar Execution Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <EnquiryForm
            title="Book a Free Laser Site Survey in Hyderabad"
            subtitle="Upload your architectural floor plans or design references (PDF/DWG up to 25MB)."
            sourcePage="Gallery Video Walkthrough Page"
          />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
