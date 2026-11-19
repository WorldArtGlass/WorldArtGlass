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
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Building2,
  ChevronRight,
  ExternalLink
} from "lucide-react";

export default function ContactPage() {
  const serviceAreas = [
    "Hitec City", "Gachibowli", "Madhapur", "Financial District",
    "Jubilee Hills", "Banjara Hills", "Kondapur", "Nanakramguda",
    "Secunderabad", "Begumpet", "Kukatpally", "Manikonda",
    "Somajiguda", "Ameerpet", "Goshamahal", "Nampally"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="relative bg-[#0B1B2B] text-white overflow-hidden pt-28 sm:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_skyscrapers.jpg"
            alt="Contact World Art Glass Hyderabad"
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
              <span className="text-white">Contact &amp; Site Survey</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Factory Workshop &amp; Showroom
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Connect with World Art Glass Hyderabad
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Book your 100% free digital laser site survey anywhere across Hyderabad or visit our flagship concept showroom and CNC workshop at Goshamahal.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#enquiry-section"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] text-slate-950 font-extrabold text-sm px-5 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                <span>Book Free Site Measurement</span>
              </a>
              <a
                href="https://wa.me/919985597294"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-5 py-3 rounded-xl shadow-lg transition"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Senior Fabricator</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Enquiry Form Grid */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8" id="enquiry-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 cols): Contact Cards, Hours, GST */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <span className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                Get in Touch
              </span>
              <h2 className="text-2xl font-extrabold text-[#0B1B2B]">
                Official Business Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Workshop &amp; Showroom Address:</strong>
                    <p className="text-slate-600 leading-relaxed">
                      New Aghapura X Road, Habeeb Nagar, Goshamahal / Nampally, Hyderabad – 500001, Telangana, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Official Direct Phones:</strong>
                    <p className="text-slate-600">
                      <a href="tel:+919985597294" className="hover:text-[#C5A059] font-medium">+91 99855 97294</a> /{" "}
                      <a href="tel:+918639219930" className="hover:text-[#C5A059] font-medium">+91 86392 19930</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Official Email:</strong>
                    <p className="text-slate-600">
                      <a href="mailto:world_glass@yahoo.com" className="hover:text-[#C5A059] underline underline-offset-2">
                        world_glass@yahoo.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Business Working Hours:</strong>
                    <p className="text-slate-600">Monday to Saturday: 9:30 AM – 8:30 PM</p>
                    <p className="text-slate-500 text-xs">Sunday: Open by Prior Appointment</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">GST Compliance:</strong>
                    <p className="text-slate-700 font-mono text-xs">GSTIN: 36GPSPS7449Q1ZB</p>
                    <p className="text-slate-500 text-[11px]">Full tax invoicing &amp; corporate ITC input tax credit available.</p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20would%20like%20to%20book%20a%20free%20laser%20site%20measurement%20in%20Hyderabad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-3 rounded-xl shadow transition"
                >
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp Now: +91 99855 97294
                </a>
                <a
                  href="tel:+919985597294"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1B2B] hover:bg-[#17364b] text-white font-bold text-xs py-3 rounded-xl transition"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" /> Call Direct: +91 99855 97294
                </a>
              </div>
            </div>

            {/* Service Coverage Areas Pill */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-sm text-[#0B1B2B] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#C5A059]" /> Free Laser Site Measurement Across:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {serviceAreas.map((area, i) => (
                  <span
                    key={i}
                    className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md border border-slate-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Enquiry Form with Drawing/Photo Upload */}
          <div className="lg:col-span-7">
            <EnquiryForm
              defaultService="Office Glass Partitions"
              sourcePage="Official Contact Page"
              title="Book Free Site Measurement & Get Quotation"
              subtitle="Upload your architectural drawings, floor plan, or project photos (PDF/DWG up to 25MB)."
            />
          </div>

        </div>
      </section>

      {/* Verified Google Maps Embed Section */}
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

          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-slate-300 shadow-lg bg-slate-100">
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

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
