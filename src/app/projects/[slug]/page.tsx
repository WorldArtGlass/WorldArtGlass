import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar, { WhatsAppIcon } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import EnquiryForm from "@/components/EnquiryForm";
import { ALL_PROJECTS, getProjectBySlug } from "@/data/projectsData";
import {
  Sparkles,
  MapPin,
  Calendar,
  Layers,
  CheckCircle2,
  Building2,
  Phone,
  ArrowRight,
  ChevronRight,
  Quote,
  ShieldCheck,
  Award
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | World Art Glass Hyderabad",
    };
  }

  return {
    title: `${project.metaTitle}`,
    description: project.metaDescription,
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: `https://www.worldartglass.net/projects/${project.slug}`,
      siteName: "World Art Glass Hyderabad",
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = ALL_PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.tagline,
    description: project.metaDescription,
    image: `https://www.worldartglass.net${project.heroImage}`,
    creator: {
      "@type": "HomeAndConstructionBusiness",
      name: "World Art Glass Hyderabad",
      url: "https://www.worldartglass.net",
    },
    locationCreated: {
      "@type": "Place",
      name: project.location,
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
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-[#0B1B2B]/80 to-[#0B1B2B]/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/projects" className="hover:text-white transition">Projects</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-white">{project.client}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.categoryLabel}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              {project.tagline}
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#D4AF37]" />
                <span><strong className="text-white">Client:</strong> {project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span><strong className="text-white">Location:</strong> {project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span><strong className="text-white">Completed:</strong> {project.completionYear}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Study Layout */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (8 cols): Project Story, Challenge, Solution, Specs, Gallery */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Scope of Work */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                Turnkey Project Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B]">
                Project Scope &amp; Architectural Objectives
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {project.scopeOfWork}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
                <div>
                  <span className="text-slate-500 font-medium">Glazing Coverage Area:</span>
                  <p className="font-bold text-[#0B1B2B] text-sm mt-0.5">{project.area}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Handover Timeline:</span>
                  <p className="font-bold text-[#0B1B2B] text-sm mt-0.5">{project.timeline}</p>
                </div>
              </div>
            </div>

            {/* Architectural Challenge & Engineering Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> The Architectural Challenge
                </div>
                <h3 className="font-bold text-lg text-[#0B1B2B]">Site Complexities</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="bg-[#0B1B2B] text-white p-6 rounded-2xl border border-[#D4AF37]/30 shadow-xl space-y-3">
                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> World Art Glass Execution
                </div>
                <h3 className="font-bold text-lg text-white">Engineering Solution</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Products & Specifications Used */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                Materials &amp; Hardware
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B2B] mt-1 mb-4">
                Products &amp; Architectural Hardware Installed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.productsUsed.map((prod, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{prod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Results */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                Measurable Impact
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B2B] mt-1 mb-4">
                Execution Deliverables &amp; Results
              </h3>
              <div className="space-y-3">
                {project.results.map((res, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-0.5">{res}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial (if available) */}
            {project.clientFeedback && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-[#D4AF37] p-6 sm:p-8 rounded-r-2xl shadow-sm space-y-3">
                <Quote className="w-8 h-8 text-[#D4AF37]/60" />
                <p className="text-slate-800 italic text-sm sm:text-base leading-relaxed">
                  &ldquo;{project.clientFeedback.quote}&rdquo;
                </p>
                <div className="pt-2">
                  <p className="font-bold text-xs sm:text-sm text-[#0B1B2B]">{project.clientFeedback.author}</p>
                  <p className="text-[11px] text-slate-600">{project.clientFeedback.designation}</p>
                </div>
              </div>
            )}

            {/* Video Demonstration (if available) */}
            {project.featuredVideo && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                  Live Site Video
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B2B] mt-1 mb-4">
                  Video Walkthrough of Completed Project
                </h3>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                  <video
                    src={project.featuredVideo}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Photo Gallery */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0B1B2B]">Project Photography Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.galleryImages.map((img, i) => (
                  <div key={i} className="relative h-56 rounded-xl overflow-hidden bg-slate-900 shadow-sm group">
                    <Image
                      src={img}
                      alt={`${project.title} - View ${i + 1}`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-lg font-bold text-[#0B1B2B] mb-4">
                Explore More Real Project Case Studies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/projects/${rel.slug}`}
                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:border-[#D4AF37] transition flex flex-col"
                  >
                    <div className="relative h-32 w-full bg-slate-900">
                      <Image
                        src={rel.heroImage}
                        alt={rel.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <h4 className="font-bold text-xs text-[#0B1B2B] group-hover:text-[#C5A059] transition line-clamp-1">
                        {rel.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-1">{rel.client}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Sticky Request Form & Quick Action */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <EnquiryForm
              defaultService="Office Glass Partitions"
              sourcePage={`${project.title} Case Study`}
              title={`Inquire Similar Execution`}
              subtitle={`Request customized pricing and site measurement for a project like ${project.client}.`}
            />

            {/* Fast Action Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-center">
              <Award className="w-8 h-8 text-[#D4AF37] mx-auto" />
              <h4 className="font-bold text-sm text-[#0B1B2B]">19+ Years of Trusted Commercial Delivery</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We handle commercial projects of all scales with full GST tax invoicing and dedicated site project managers.
              </p>
              <a
                href="https://wa.me/919985597294"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-3 rounded-xl shadow transition"
              >
                <WhatsAppIcon className="w-4 h-4" /> Message Senior Fabricator
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
