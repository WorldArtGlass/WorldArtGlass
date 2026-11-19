"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Sparkles } from "lucide-react";
import { ALL_SERVICES } from "@/data/servicesData";

export function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
    </svg>
  );
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Projects", href: "/projects" },
  { name: "Saint-Gobain", href: "/saint-gobain" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/why-us" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(href);
  };

  const commercialServices = ALL_SERVICES.filter((s) => s.category === "commercial");
  const doorsFacadesServices = ALL_SERVICES.filter((s) => s.category === "doors-facades");
  const decorativeServices = ALL_SERVICES.filter((s) => s.category === "residential-decorative");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1B2B]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-xl shadow-black/25 px-3 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-7xl mx-auto py-2.5 sm:py-3.5 flex items-center justify-between relative">
        
        {/* Left: Official Brand Logo */}
        <Link href="/" className="flex items-center group py-0.5 shrink-0">
          <div className="relative h-9 sm:h-11 w-40 sm:w-52 transition transform group-hover:scale-105">
            <Image 
              src="/images/world_art_glass_official_logo.png" 
              alt="World Art Glass Hyderabad - Architectural Glass Solutions" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                      active
                        ? "text-[#D4AF37] drop-shadow-sm font-bold"
                        : "text-slate-200 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-[#D4AF37]" : "text-slate-400"}`} />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full -left-48 w-[720px] bg-[#0B1B2B]/98 backdrop-blur-2xl border border-[#D4AF37]/30 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                      {/* Column 1: Commercial */}
                      <div>
                        <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider mb-2.5 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Commercial Partitions
                        </div>
                        <ul className="space-y-1.5">
                          {commercialServices.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/services/${service.slug}`}
                                className="block text-xs text-slate-300 hover:text-white hover:bg-white/10 px-2 py-1.5 rounded-lg transition"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: Doors & Facades */}
                      <div>
                        <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider mb-2.5 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Doors &amp; Facades
                        </div>
                        <ul className="space-y-1.5">
                          {doorsFacadesServices.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/services/${service.slug}`}
                                className="block text-xs text-slate-300 hover:text-white hover:bg-white/10 px-2 py-1.5 rounded-lg transition"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: Residential & Decorative */}
                      <div>
                        <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider mb-2.5 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Residential &amp; Decorative
                        </div>
                        <ul className="space-y-1.5">
                          {decorativeServices.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/services/${service.slug}`}
                                className="block text-xs text-slate-300 hover:text-white hover:bg-white/10 px-2 py-1.5 rounded-lg transition"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <Link
                            href="/services"
                            className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1"
                          >
                            View All 15 Services &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors py-2 ${
                  active
                    ? "text-[#D4AF37] drop-shadow-sm font-bold"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Phone & WhatsApp CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Outlined Phone Call Button */}
          <a
            href="tel:+919985597294"
            className="inline-flex items-center gap-1.5 sm:gap-2 border border-[#D4AF37]/50 hover:border-[#D4AF37] text-white font-semibold text-xs sm:text-sm px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full transition hover:bg-white/10 shadow-sm"
            title="Call Senior Fabricator"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="hidden xs:inline tracking-wide">+91 99855 97294</span>
          </a>

          {/* WhatsApp Action Button */}
          <a
            href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20would%20like%20to%20get%20a%20quotation%20for%20architectural%20glass%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md shadow-[#25D366]/25 transition transform hover:-translate-y-0.5"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-white/90 hover:text-white focus:outline-none rounded-lg"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1B2B]/98 backdrop-blur-2xl border-b border-[#D4AF37]/20 px-4 sm:px-6 py-4 flex flex-col gap-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.hasDropdown) {
              return (
                <div key={link.name} className="flex flex-col">
                  <div className="flex items-center justify-between py-2 px-3">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-semibold transition-colors ${
                        active ? "text-[#D4AF37] font-bold" : "text-white"
                      }`}
                    >
                      {link.name} (Overview)
                    </Link>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-1 text-slate-400 hover:text-[#D4AF37]"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180 text-[#D4AF37]" : ""}`} />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1 bg-white/5 rounded-xl border border-white/10 mb-2">
                      <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider px-2 pt-1">All 15 Specialized Services</p>
                      {ALL_SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-slate-300 hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/10"
                        >
                          • {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-xl transition-colors ${
                  active
                    ? "text-[#D4AF37] font-bold bg-white/10 border-l-4 border-[#D4AF37]"
                    : "text-white/90 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-white/15 mt-2 space-y-2">
            <a
              href="tel:+919985597294"
              className="w-full inline-flex items-center justify-center gap-2 border border-[#D4AF37]/50 text-white font-bold text-xs py-2.5 rounded-xl hover:bg-white/10 transition"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" /> Call +91 99855 97294
            </a>
            <a
              href="https://wa.me/919985597294"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-xs py-2.5 rounded-xl shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
