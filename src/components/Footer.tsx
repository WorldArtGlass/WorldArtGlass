import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, Award } from "lucide-react";
import { WhatsAppIcon } from "./Navbar";
import { ALL_SERVICES } from "@/data/servicesData";

export default function Footer() {
  const commercialServices = ALL_SERVICES.filter((s) => s.category === "commercial");
  const doorsFacades = ALL_SERVICES.filter((s) => s.category === "doors-facades");
  const decorative = ALL_SERVICES.filter((s) => s.category === "residential-decorative");

  return (
    <footer className="bg-[#0B1B2B] text-slate-300 text-sm border-t border-[#D4AF37]/30">
      {/* Top Value Banner */}
      <div className="bg-gradient-to-r from-[#0F2744] via-[#17364b] to-[#0F2744] py-8 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1.5">
              <Award className="w-4 h-4" /> Established 2007 • 19+ Years of Industry Experience
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Ready to Upgrade Your Commercial or Luxury Architectural Space?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
              Book a 100% free digital laser site survey anywhere in Hyderabad or request a competitive factory-direct estimate today.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20would%20like%20to%20book%20a%20free%20laser%20site%20measurement%20in%20Hyderabad."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4 h-4" /> Book Free Site Measurement
            </a>
            <a
              href="tel:+919985597294"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl transition"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" /> Call: +91 99855 97294
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Column 1: Brand & Contact Info */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="inline-block relative h-12 w-52 mb-1">
            <Image 
              src="/images/world_art_glass_official_logo.png" 
              alt="World Art Glass Official Logo" 
              fill 
              className="object-contain object-left"
            />
          </Link>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
            Hyderabad’s premier architectural glass company since 2007. Specialized fabricators and contractors for 100% genuine Saint-Gobain Toughened Glass, Office Glass Partitions, Black Slim Profile Partitions, Spider Glazing, Shower Enclosures, and LED Mirrors.
          </p>

          <div className="space-y-2 pt-2 text-xs">
            <div className="flex items-start gap-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                New Aghapura X Road, Habeeb Nagar, Goshamahal / Nampally, Hyderabad – 500001, Telangana, India.
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>+91 99855 97294 / +91 86392 19930</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href="mailto:world_glass@yahoo.com" className="hover:text-white underline underline-offset-2">
                world_glass@yahoo.com
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Mon – Sat: 9:30 AM – 8:30 PM (Sunday by Appointment)</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#D4AF37] font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>GSTIN: 36GPSPS7449Q1ZB (Tax Invoiced)</span>
            </div>
          </div>
        </div>

        {/* Column 2: Commercial Partitions */}
        <div>
          <div className="text-white font-bold text-sm uppercase tracking-wider mb-3.5 pb-1 border-b border-[#D4AF37]/30 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Partitions &amp; Supply
          </div>
          <ul className="space-y-2 text-xs">
            <li><Link href="/services/office-glass-partitions" className="hover:text-white hover:text-[#D4AF37] transition">Office Glass Partitions</Link></li>
            <li><Link href="/services/black-slim-profile-glass-partitions" className="hover:text-white hover:text-[#D4AF37] transition">Black Slim Profile 45mm</Link></li>
            <li><Link href="/services/telescopic-glass-partitions" className="hover:text-white hover:text-[#D4AF37] transition">Telescopic Glass Partitions</Link></li>
            <li><Link href="/services/aluminium-glass-partitions" className="hover:text-white hover:text-[#D4AF37] transition">Aluminium Glass Partitions</Link></li>
            <li><Link href="/services/toughened-glass" className="hover:text-white hover:text-[#D4AF37] transition">Toughened Glass (5mm-19mm)</Link></li>
            <li><Link href="/services/shower-cubicles" className="hover:text-white hover:text-[#D4AF37] transition">10mm Shower Cubicles</Link></li>
            <li><Link href="/saint-gobain" className="text-[#D4AF37] font-semibold hover:underline">Saint-Gobain Glass Range</Link></li>
          </ul>
        </div>

        {/* Column 3: Facades, Doors & Decorative */}
        <div>
          <div className="text-white font-bold text-sm uppercase tracking-wider mb-3.5 pb-1 border-b border-[#D4AF37]/30 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Doors &amp; Facades
          </div>
          <ul className="space-y-2 text-xs">
            <li><Link href="/services/frameless-glass-doors" className="hover:text-white transition">Frameless Glass Doors</Link></li>
            <li><Link href="/services/structural-glazing" className="hover:text-white transition">Structural Glazing &amp; ACP</Link></li>
            <li><Link href="/services/spider-glass-fittings" className="hover:text-white transition">Spider Glass Fittings</Link></li>
            <li><Link href="/services/glass-facades" className="hover:text-white transition">Commercial Glass Facades</Link></li>
            <li><Link href="/services/glass-railings-balustrades" className="hover:text-white transition">Glass Railings &amp; Balustrades</Link></li>
            <li><Link href="/services/saint-gobain-lacquered-glass" className="hover:text-white transition">Saint-Gobain Lacquered Glass</Link></li>
            <li><Link href="/services/decorative-fluted-glass" className="hover:text-white transition">Decorative &amp; Fluted Glass</Link></li>
            <li><Link href="/services/digital-printing-on-glass" className="hover:text-white transition">Digital Printing on Glass</Link></li>
            <li><Link href="/services/led-designer-mirrors" className="hover:text-white transition">Smart LED Vanity Mirrors</Link></li>
          </ul>
        </div>

        {/* Column 4: Quick Navigation & Case Studies */}
        <div>
          <div className="text-white font-bold text-sm uppercase tracking-wider mb-3.5 pb-1 border-b border-[#D4AF37]/30 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Portfolio &amp; Info
          </div>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-white transition">Home Page</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services Catalog (15)</Link></li>
            <li><Link href="/projects" className="hover:text-white transition">Projects Portfolio</Link></li>
            <li><Link href="/projects/jio-stores-retail-facade" className="hover:text-white transition">Jio Stores Retail Facade</Link></li>
            <li><Link href="/projects/peter-england-retail-front" className="hover:text-white transition">Peter England Showroom</Link></li>
            <li><Link href="/projects/being-human-clothing-store" className="hover:text-white transition">Being Human Showroom</Link></li>
            <li><Link href="/projects/hindware-experience-centre" className="hover:text-white transition">Hindware Experience Centre</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition">Site Video Gallery</Link></li>
            <li><Link href="/why-us" className="hover:text-white transition">Company Profile &amp; Trust</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* SEO Local Keyword Grid (Requirement #38 & #43) */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-slate-800 space-y-3 text-xs leading-relaxed text-slate-300">
        <div>
          <span className="text-[#D4AF37] font-bold">Target Keywords &amp; Glass Specialties: </span>
          <span className="text-slate-300">
            Glass Company in Hyderabad • Glass Partition in Hyderabad • Office Glass Partition Contractor • Toughened Glass Supplier in Hyderabad • Saint-Gobain Glass Dealer in Hyderabad • Structural Glazing Contractor in Hyderabad • Spider Glass Fitting in Hyderabad • Black Slim Profile Glass Partition • Lacquered Glass Supplier in Hyderabad • Luxury Office Glass Partition • 8mm, 10mm, 12mm Toughened Glass • Frameless Glass Doors • Telescopic Glass Partitions • Shower Cubicles • Glass Railings &amp; Balustrades • LED Mirrors &amp; Designer Mirrors • Digital Printing on Glass • Decorative &amp; Fluted Glass • Aluminium Glass Partitions • Glass Facades.
          </span>
        </div>
        <div>
          <span className="text-white font-bold">Service Locations in Hyderabad &amp; Telangana: </span>
          <span className="text-slate-300">
            Hitec City • Gachibowli • Madhapur • Financial District • Nanakramguda • Jubilee Hills • Banjara Hills • Kondapur • Kukatpally • Begumpet • Secunderabad • Somajiguda • Ameerpet • Manikonda • Goshamahal • Nampally • Hyderabad, Telangana.
          </span>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
        <div>
          © 2007 – 2026 <strong className="text-white">World Art Glass Hyderabad</strong>. All Rights Reserved.
        </div>
        <div className="flex items-center gap-4 text-[#D4AF37]">
          <span>Official Domain: www.worldartglass.net</span>
          <span>•</span>
          <span>19+ Years of Industry Trust</span>
        </div>
      </div>
    </footer>
  );
}
