import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 text-sm py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <Link href="/" className="inline-block relative h-12 w-48 mb-3">
            <Image 
              src="/images/world_art_glass_official_logo.png" 
              alt="World Art Glass Logo" 
              fill 
              className="object-contain object-left"
            />
          </Link>
          <p className="text-slate-300 leading-relaxed mb-3">
            Hyderabad’s premier supplier and installer of Toughened Saint-Gobain Glass solutions. Dedicated to structural strength, modern styling, and dependable project execution.
          </p>
          <div className="text-[#7dd91a] text-sm font-semibold">GSTIN: 36GPSPS7449Q1ZB</div>
        </div>

        <div>
          <div className="text-white font-bold text-base mb-3.5">Products &amp; Services</div>
          <ul className="space-y-2">
            <li><Link href="/services#office-partitions" className="hover:text-white transition">Office Glass Partitions</Link></li>
            <li><Link href="/services#slim-partitions" className="hover:text-white transition">Black Slim 45mm Partitions</Link></li>
            <li><Link href="/services#sliding-doors" className="hover:text-white transition">Frameless Sliding Doors</Link></li>
            <li><Link href="/services#shower-cubicles" className="hover:text-white transition">Shower Cubicles &amp; Enclosures</Link></li>
            <li><Link href="/services#glass-railings" className="hover:text-white transition">Glass Railings &amp; Balustrades</Link></li>
            <li><Link href="/services#acp-glazing" className="hover:text-white transition">ACP &amp; Structural Glazing</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-bold text-base mb-3.5">Quick Navigation</div>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition">Home Overview</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Our Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
            <li><Link href="/why-us" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link href="/services#calculator" className="hover:text-white transition">Glass Cost Estimator</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-bold text-base mb-3.5">Contact &amp; Works</div>
          <p className="mb-2.5">New Aghapura X Road, Goshamahal, Hyderabad – 500001, Telangana.</p>
          <p className="mb-2.5">Phone: +91 99855 97294 / +91 86392 19930</p>
          <a
            href="https://wa.me/919985597294"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#7dd91a] hover:text-[#95e63e] font-semibold mt-1"
          >
            <WhatsAppIcon className="w-4 h-4" /> Chat with Senior Fabricator
          </a>
        </div>
      </div>

      {/* Service Areas & Glass Specialties */}
      <div className="max-w-7xl mx-auto pt-6 pb-6 border-t border-slate-800/80 space-y-3.5 text-sm leading-relaxed text-slate-300">
        <div>
          <span className="text-white font-bold">Areas We Serve: </span>
          Banjara Hills • Jubilee Hills • Hitech City • Gachibowli • Madhapur • Financial District • Nanakramguda • Secunderabad • Begumpet • Goshamahal • Hyderabad, Telangana
        </div>
        <div>
          <span className="text-white font-bold">Core Specialties: </span>
          8mm / 10mm / 12mm Saint-Gobain Toughened Glass • Office &amp; IT Office Glass Partition • Black Slim Profile, Aluminium, Frameless &amp; Telescopic Glass Partition • Glass Cabin &amp; Urinal Partition • 10mm Toughened Frameless &amp; Sliding Shower Cubicle • Bathroom Glass Partition &amp; Luxury Shower Enclosure • Glass Sliding, Swing, Main &amp; Slim Profile Doors • Staircase &amp; Balcony Glass Railing • Structural Glazing, Spider Glass Fitting &amp; Spider Glass Facade • Lacquered, Decorative, Fluted &amp; Digital Printed Glass • Bathroom LED Mirror • Commercial &amp; Residential Glass Fabrication, Supply &amp; Installation Contractors in Hyderabad.
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800/80 flex flex-wrap justify-between items-center gap-3 text-sm text-slate-400">
        <div>
          © 2026 World Art Glass Hyderabad. All Rights Reserved.
        </div>
        <div>
          Strong • Stylish • Trusted • Premium Saint-Gobain Toughened Glass Solutions
        </div>
      </div>
    </footer>
  );
}

