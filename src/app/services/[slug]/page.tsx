import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar, { WhatsAppIcon } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import EnquiryForm from "@/components/EnquiryForm";
import { ALL_SERVICES, getServiceBySlug } from "@/data/servicesData";
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Phone,
  Ruler,
  HelpCircle,
  Layers,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Award
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | World Art Glass Hyderabad",
    };
  }

  return {
    title: `${service.metaTitle}`,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.worldartglass.net/services/${service.slug}`,
      siteName: "World Art Glass Hyderabad",
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = ALL_SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${service.title} in Hyderabad`,
    description: service.metaDescription,
    image: `https://www.worldartglass.net${service.heroImage}`,
    brand: {
      "@type": "Brand",
      name: "Saint-Gobain / World Art Glass",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      price: "150",
      lowPrice: "120",
      highPrice: "950",
      offerCount: "100",
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

      {/* Hero Section */}
      <section className="relative bg-[#0B1B2B] text-white overflow-hidden pt-28 sm:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-[#0B1B2B]/80 to-[#0B1B2B]/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-white">{service.shortTitle}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              {service.title} in Hyderabad
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {service.tagline}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}%20for%20my%20project%20in%20Hyderabad.%20Please%20share%20quotation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-5 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>

              <a
                href="#enquiry-section"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] hover:from-[#E5C158] hover:to-[#D4AF37] text-slate-950 font-extrabold text-sm px-5 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                <span>Get Free Quotation</span>
              </a>

              <a
                href="tel:+919985597294"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm px-4 py-3 rounded-xl transition"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span className="hidden sm:inline">Call Now: +91 99855 97294</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (8 cols): Overview, Specs, Applications, Benefits, Video, FAQs */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" /> Comprehensive Architectural Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] tracking-tight">
                Architectural Engineering &amp; Precision Execution
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                {service.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider mb-2">
                <Ruler className="w-4 h-4" /> Engineering Standards
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B2B] mb-6">
                Technical Specifications &amp; Parameters
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <tbody>
                    {service.specifications.map((spec, index) => (
                      <tr
                        key={index}
                        className={`border-b border-slate-200 ${
                          index % 2 === 0 ? "bg-slate-50/60" : "bg-white"
                        }`}
                      >
                        <td className="py-3 px-4 font-semibold text-slate-800 w-1/3 text-xs sm:text-sm">
                          {spec.label}
                        </td>
                        <td className="py-3 px-4 text-slate-600 text-xs sm:text-sm">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications Grid */}
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                  Architectural Applications
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B2B] mt-1">
                  Ideal Environments for {service.title}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.applications.map((app, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:border-[#D4AF37]/50 hover:shadow-md transition"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0B1B2B] text-sm mb-1">{app.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{app.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Benefits */}
            <div className="bg-gradient-to-br from-[#0B1B2B] to-[#17364b] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#D4AF37]/30">
              <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                Why Architects &amp; Builders Choose Us
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Key Engineering &amp; Aesthetic Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>{benefit.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-6">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Video Demonstration (if available) */}
            {service.featuredVideo && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" /> Real Site Walkthrough
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B2B] mb-4">
                  Watch Our Hyderabad Precision Site Execution
                </h3>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                  <video
                    src={service.featuredVideo}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Hardware & Glass Types Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-[#0B1B2B] text-sm mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#C5A059]" /> Certified Hardware Brands
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.hardwareOptions.map((hw, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 text-slate-800 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-200"
                    >
                      {hw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-[#0B1B2B] text-sm mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C5A059]" /> Available Glass Variants
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.glassTypes.map((gt, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 text-slate-800 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-200"
                    >
                      {gt}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical FAQs Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                  Frequently Asked Questions
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B2B] mt-1">
                  Questions About {service.title} in Hyderabad
                </h3>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h4 className="font-bold text-sm text-[#0B1B2B] mb-2 flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{faq.q}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Services Links */}
            <div>
              <h3 className="text-lg font-bold text-[#0B1B2B] mb-4">
                Explore Other Specialized Architectural Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-[#0B1B2B] group-hover:text-[#C5A059] transition">
                        {rel.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{rel.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C5A059] group-hover:translate-x-1 transition shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Sticky Quote Form with File Upload */}
          <div className="lg:col-span-4 sticky top-24 space-y-6" id="enquiry-section">
            <EnquiryForm
              defaultService={service.title}
              sourcePage={`${service.title} Detail Page`}
              title={`Get a Quote for ${service.shortTitle}`}
              subtitle="Direct factory estimate with official GST invoice and free laser measurement across Hyderabad."
            />

            {/* Fast Contact Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-center">
              <h4 className="font-bold text-sm text-[#0B1B2B]">Need Immediate Site Assistance?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Speak directly with our Chief Glass Technical Consultant for structural calculations and architect specifications.
              </p>
              <a
                href="tel:+919985597294"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1B2B] hover:bg-[#17364b] text-white font-bold text-xs py-3 rounded-xl transition"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" /> +91 99855 97294
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
