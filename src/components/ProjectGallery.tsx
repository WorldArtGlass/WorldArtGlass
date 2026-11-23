"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import {
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Images,
  MapPin,
  Play,
  SlidersHorizontal,
  X,
} from "lucide-react";
import {
  galleryCategories,
  galleryProjects,
  type GalleryProject,
} from "@/data/galleryData";

const PROJECTS_PER_PAGE = 9;

export default function ProjectGallery() {
  const [activeFilter, setActiveFilterState] = useState("all");
  const [page, setPage] = useState(1);
  const [openProject, setOpenProject] = useState<GalleryProject | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeFilter === "all"
      ? galleryProjects
      : galleryProjects.filter((p) => p.category === activeFilter);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PROJECTS_PER_PAGE));
  const visible = filtered.slice((page - 1) * PROJECTS_PER_PAGE, page * PROJECTS_PER_PAGE);

  const setActiveFilter = (key: string) => {
    setActiveFilterState(key);
    setPage(1);
  };
  const changePage = (next: number) => {
    setPage(next);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const total = openProject?.media.length ?? 0;

  const openAlbum = (project: GalleryProject) => {
    setOpenProject(project);
    setMediaIndex(0);
  };
  const closeAlbum = useCallback(() => setOpenProject(null), []);
  const showPrev = useCallback(
    () => setMediaIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const showNext = useCallback(
    () => setMediaIndex((i) => (i + 1) % total),
    [total]
  );

  // Keyboard controls + body scroll lock while an album is open
  useEffect(() => {
    if (!openProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAlbum();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openProject, closeAlbum, showPrev, showNext]);

  // Keep the active thumbnail visible in the strip
  useEffect(() => {
    const el = stripRef.current?.children[mediaIndex] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [mediaIndex, openProject]);

  const current = openProject?.media[mediaIndex];
  const photoTotal = galleryProjects.reduce((sum, p) => sum + p.photoCount, 0);

  return (
    <>
      <section id="projects" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                Real Site Photographs
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] tracking-tight">
                Project Albums ({filtered.length})
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                {galleryProjects.length} projects &bull; {photoTotal}+ photos. Tap a project to open its full album.
              </p>
            </div>

            {/* Mobile: dropdown */}
            <div className="relative w-full sm:hidden">
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                aria-label="Filter projects by category"
                className="w-full appearance-none bg-white border border-slate-200 rounded-xl shadow-sm text-sm font-bold text-[#0B1B2B] pl-11 pr-11 py-3 focus:outline-none focus:border-[#D4AF37] cursor-pointer"
              >
                <option value="all">All Projects ({galleryProjects.length})</option>
                {galleryCategories.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.label} ({galleryProjects.filter((p) => p.category === c.key).length})
                  </option>
                ))}
              </select>
              <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C5A059]" />
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C5A059]" />
            </div>

            {/* Tablet / Desktop: pill tabs */}
            <div className="hidden sm:flex flex-wrap items-center gap-2 w-full bg-white border border-slate-200 p-2 rounded-3xl shadow-sm">
              {[{ key: "all", label: `All Projects (${galleryProjects.length})` }, ...galleryCategories].map(
                (tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveFilter(tab.key)}
                    className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition whitespace-nowrap shrink-0 cursor-pointer ${
                      activeFilter === tab.key
                        ? "bg-[#0B1B2B] text-[#D4AF37] shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visible.map((project) => {
              const categoryLabel =
                galleryCategories.find((c) => c.key === project.category)?.label ?? "";
              const videoCount = project.media.filter((m) => m.type === "video").length;
              return (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => openAlbum(project)}
                  className="group text-left bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full bg-slate-200 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.cover}
                      alt={`${project.title} — World Art Glass ${project.location}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    <span className="absolute top-3 left-3 bg-[#0B1B2B]/90 text-white border border-[#D4AF37]/30 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                      {categoryLabel}
                    </span>

                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                      {videoCount > 0 && (
                        <span className="bg-[#25D366] text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow">
                          <Play className="w-2.5 h-2.5 fill-current" /> Video
                        </span>
                      )}
                      <span className="bg-white/95 text-[#0B1B2B] text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                        <Images className="w-3 h-3 text-[#C5A059]" /> {project.photoCount} Photos
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#C5A059] transition line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#0B1B2B] group-hover:underline">
                      View Full Album &rarr;
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <Pagination page={page} totalPages={totalPages} onChange={changePage} />
          {totalPages > 1 && (
            <p className="mt-3 text-center text-xs text-slate-500">
              Showing {(page - 1) * PROJECTS_PER_PAGE + 1}&ndash;
              {Math.min(page * PROJECTS_PER_PAGE, filtered.length)} of {filtered.length} projects
            </p>
          )}
        </div>
      </section>

      {/* Album Viewer */}
      {openProject && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={openProject.title}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-2 sm:p-4"
          onClick={closeAlbum}
        >
          <button
            onClick={closeAlbum}
            className="absolute top-3 right-3 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition cursor-pointer"
            aria-label="Close album"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div
            className="shrink-0 px-2 pt-1 pb-3 pr-14 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
              {galleryCategories.find((c) => c.key === openProject.category)?.label} &bull;{" "}
              {mediaIndex + 1} of {total}
            </span>
            <h3 className="text-sm sm:text-lg font-bold leading-snug">{openProject.title}</h3>
            <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{openProject.location}</span>
            </div>
          </div>

          {/* Main media */}
          <div
            className="relative flex-1 min-h-0 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {total > 1 && (
              <>
                <button
                  onClick={showPrev}
                  className="absolute left-0 sm:left-2 z-10 w-11 h-11 rounded-full bg-black/50 hover:bg-white/25 text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={showNext}
                  className="absolute right-0 sm:right-2 z-10 w-11 h-11 rounded-full bg-black/50 hover:bg-white/25 text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {current.type === "video" ? (
              <video
                key={current.src}
                src={current.src}
                controls
                playsInline
                className="max-w-full max-h-full rounded-xl bg-black"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={current.src}
                src={current.src}
                alt={`${openProject.title} — photo ${mediaIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            )}
          </div>

          {/* Thumbnails + CTA */}
          <div className="shrink-0 pt-3" onClick={(e) => e.stopPropagation()}>
            <div
              ref={stripRef}
              className="flex gap-2 overflow-x-auto pb-2 px-1 snap-x"
            >
              {openProject.media.map((m, i) => (
                <button
                  key={m.src}
                  onClick={() => setMediaIndex(i)}
                  aria-label={`Show item ${i + 1}`}
                  className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition cursor-pointer ${
                    i === mediaIndex
                      ? "border-[#D4AF37]"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  {m.type === "video" ? (
                    <span className="w-full h-full bg-slate-800 flex items-center justify-center text-[#D4AF37]">
                      <Play className="w-6 h-6 fill-current" />
                    </span>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.thumb}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 px-1 pt-2">
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
                <Camera className="w-3.5 h-3.5" /> Use &larr; &rarr; keys to browse, Esc to close
              </span>
              <a
                href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20saw%20your%20project%20%22${encodeURIComponent(openProject.title)}%22%20in%20the%20gallery%20and%20want%20a%20similar%20installation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg transition"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Request Similar Project Quote</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
