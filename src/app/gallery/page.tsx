"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar, { WhatsAppIcon } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Play
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
      <section className="relative bg-slate-950 text-white overflow-hidden pt-28 sm:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_luxury_terrace_v2.jpg"
            alt="World Art Glass Hyderabad Video Gallery"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-4 uppercase tracking-wider">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <span className="text-white">Gallery</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 text-sky-300 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Real Site Walkthroughs &amp; Installations
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Architectural Glass Video Gallery
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Site Execution Videos ({filtered.length})
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Tap any video to watch full screen with sound &amp; controls or request a similar installation.
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
                  className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition whitespace-nowrap shrink-0 ${
                    activeFilter === tab.key
                      ? "bg-sky-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2 columns on mobile, 3 columns on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative h-52 xs:h-60 sm:h-80 w-full bg-slate-950 overflow-hidden">
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Center Play Icon */}
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/30 transition duration-300 flex items-center justify-center">
                    <div className="bg-slate-950/75 group-hover:bg-[#7dd91a] text-white p-3 rounded-full shadow-lg border border-white/25 transition duration-300 backdrop-blur-sm">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full border border-white/15">
                    {item.categoryLabel}
                  </div>

                  {/* Video Pill Badge */}
                  <div className="absolute top-2.5 right-2.5 bg-[#7dd91a] text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
                    <Play className="w-3 h-3 fill-current" /> Video
                  </div>
                </div>

                <div className="p-3 sm:p-4 flex flex-col flex-grow">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-600 transition leading-snug line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mt-auto">
                    <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-wider font-bold text-sky-400 bg-sky-950 border border-sky-800 px-3 py-1 rounded-full mb-3 inline-block">
            Custom Fabrication
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Like a Design From Our Video Gallery?
          </h2>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            Share your dimensions on WhatsApp or schedule a free laser site measurement anywhere in Hyderabad, Telangana.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-sky-500/25 transition transform hover:-translate-y-0.5"
            >
              Book Free Site Visit
            </Link>
            <a
              href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20watched%20your%20Gallery%20videos%20and%20would%20like%20a%20quotation%20for%20my%20space."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7dd91a] hover:bg-[#71c917] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-[#7dd91a]/30 transition transform hover:-translate-y-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
            >
              <WhatsAppIcon className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Full-Screen Video Lightbox Modal */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous video"
            className="absolute left-3 sm:left-6 z-10 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next video"
            className="absolute right-3 sm:right-6 z-10 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[58vh] sm:h-[70vh] bg-slate-950 flex items-center justify-center">
              <video
                key={filtered[lightboxIndex].src}
                src={filtered[lightboxIndex].src}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 bg-slate-900 border-t border-white/10">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {filtered[lightboxIndex].title}
                </h3>
                <div className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {filtered[lightboxIndex].location}
                </div>
              </div>
              <a
                href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20liked%20*${encodeURIComponent(filtered[lightboxIndex].title)}*%20from%20your%20Gallery.%20Please%20share%20pricing%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7dd91a] hover:bg-[#71c917] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md transition"
              >
                <WhatsAppIcon className="w-4 h-4" /> Get Quote for This Look
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
