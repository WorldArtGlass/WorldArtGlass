"use client";

import React, { useState, useRef } from "react";
import { UploadCloud, CheckCircle2, Phone, FileText, X, AlertCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/Navbar";

interface EnquiryFormProps {
  defaultService?: string;
  sourcePage?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const SERVICE_OPTIONS = [
  "Toughened Glass",
  "Office Glass Partitions",
  "Black Slim Profile Aluminium Glass Partitions",
  "Telescopic Glass Partitions",
  "Frameless Glass Doors",
  "Structural Glazing",
  "Spider Glass Fittings",
  "Saint-Gobain Lacquered Glass",
  "Decorative & Fluted Glass",
  "Digital Printing on Glass",
  "Shower Cubicles",
  "Glass Railings & Balustrades",
  "Aluminium Glass Partitions",
  "Glass Facades",
  "LED Mirrors & Designer Mirrors",
  "Multiple / Turnkey Commercial Fitout"
];

const HYDERABAD_AREAS = [
  "Hitec City",
  "Gachibowli",
  "Madhapur",
  "Financial District",
  "Jubilee Hills",
  "Banjara Hills",
  "Kondapur",
  "Nanakramguda",
  "Secunderabad",
  "Begumpet",
  "Kukatpally",
  "Manikonda",
  "Goshamahal / Nampally",
  "Other Hyderabad / Telangana Area"
];

export default function EnquiryForm({
  defaultService = "Office Glass Partitions",
  sourcePage = "General Enquiry",
  className = "",
  title = "Get a Free Project Quotation & Site Measurement",
  subtitle = "Direct factory pricing with 100% genuine Saint-Gobain glass and laser survey across Hyderabad."
}: EnquiryFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService);
  const [location, setLocation] = useState("Hitec City");
  const [approxArea, setApproxArea] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const file = e.target.files?.[0];
    if (!file) return;

    // 25MB limit
    if (file.size > 25 * 1024 * 1024) {
      setFileError("File size exceeds 25MB limit. Please upload a smaller file or send via WhatsApp.");
      return;
    }

    const validExtensions = [".pdf", ".dwg", ".dxf", ".jpg", ".jpeg", ".png", ".webp"];
    const fileNameLower = file.name.toLowerCase();
    const isValid = validExtensions.some((ext) => fileNameLower.endsWith(ext));

    if (!isValid) {
      setFileError("Supported formats: PDF, DWG, DXF, JPG, PNG, WEBP.");
      return;
    }

    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    setIsSubmitting(true);

    const waText =
      `*NEW ARCHITECTURAL ENQUIRY - WORLD ART GLASS*%0A` +
      `---------------------------------------%0A` +
      `• *Client Name:* ${encodeURIComponent(fullName)}%0A` +
      `• *Phone:* ${encodeURIComponent(phone)}%0A` +
      (email ? `• *Email:* ${encodeURIComponent(email)}%0A` : "") +
      `• *Service Required:* ${encodeURIComponent(service)}%0A` +
      `• *Location:* ${encodeURIComponent(location)}%0A` +
      (approxArea ? `• *Estimated Area:* ${encodeURIComponent(approxArea)} Sq.Ft%0A` : "") +
      (selectedFile ? `• *Attached Drawing/File:* ${encodeURIComponent(selectedFile.name)} (${(selectedFile.size / 1024).toFixed(1)} KB)%0A` : "") +
      (notes ? `• *Project Notes:* ${encodeURIComponent(notes)}%0A` : "") +
      `• *Source Page:* ${encodeURIComponent(sourcePage)}%0A` +
      `---------------------------------------%0A` +
      `*Action Requested:* Please share estimate / book free laser site measurement.` +
      (selectedFile ? `%0A_(I am also sharing the project drawing file now)_` : "");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/919985597294?text=${waText}`, "_blank");
    }, 400);
  };

  if (submitted) {
    return (
      <div className={`bg-gradient-to-br from-[#0B1B2B] to-[#17364b] text-white p-8 rounded-2xl border border-[#D4AF37]/40 shadow-2xl text-center ${className}`}>
        <div className="w-16 h-16 bg-[#D4AF37]/20 border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4AF37]">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Quotation Request Received!</h3>
        <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-white">{fullName}</span>. Your enquiry for <span className="text-[#D4AF37] font-semibold">{service}</span> in <span className="text-white font-semibold">{location}</span> has been routed to our Senior Technical Estimator.
        </p>

        {selectedFile && (
          <div className="bg-white/10 border border-white/20 rounded-xl p-3 max-w-md mx-auto mb-6 text-xs text-left flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <div className="truncate flex-1">
              <span className="font-semibold text-white">Attachment ready: </span>
              <span className="text-slate-200">{selectedFile.name}</span>
            </div>
            <span className="text-[11px] text-[#D4AF37] bg-[#D4AF37]/20 px-2 py-0.5 rounded">Attach in chat</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/919985597294"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-4 h-4" /> Message on WhatsApp (+91 99855 97294)
          </a>
          <a
            href="tel:+919985597294"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm px-6 py-3 rounded-xl transition"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" /> Call Direct (+91 99855 97294)
          </a>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFullName("");
            setPhone("");
            setSelectedFile(null);
          }}
          className="mt-6 text-xs text-slate-400 hover:text-white underline underline-offset-4"
        >
          Submit another quotation request
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-[#0B1B2B] via-[#0F2744] to-[#17364b] text-white p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/35 shadow-2xl relative overflow-hidden ${className}`}>
      {/* Decorative Gold Accent Corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent pointer-events-none rounded-bl-full"></div>

      <div className="relative z-10 mb-6">
        <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30 mb-2.5">
          <span>Est. 2007 • 19+ Years Mastery</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Your Name / Company <span className="text-[#D4AF37]">*</span>
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Rajesh Kumar / TechCorp"
              className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Contact Phone (WhatsApp) <span className="text-[#D4AF37]">*</span>
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 98765 43210"
              className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 outline-none transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">Email Address (Optional)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. projects@company.com"
              className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Project Location <span className="text-[#D4AF37]">*</span>
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-slate-900 border border-white/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none transition"
            >
              {HYDERABAD_AREAS.map((area) => (
                <option key={area} value={area} className="bg-slate-900 text-white">
                  {area}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Required Glass Service <span className="text-[#D4AF37]">*</span>
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-slate-900 border border-white/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none transition"
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-slate-900 text-white">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">Approx. Glass Area / Dimensions</label>
            <input
              type="text"
              value={approxArea}
              onChange={(e) => setApproxArea(e.target.value)}
              placeholder="e.g. 450 Sq.Ft or 12ft x 9ft"
              className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 outline-none transition"
            />
          </div>
        </div>

        {/* Project Drawings / Photo Upload (Customer Requirement #33) */}
        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1">
            Upload Project Drawings / Floor Plan / Photos (PDF, DWG, DXF, JPG - Max 25MB)
          </label>
          <div className="relative border-2 border-dashed border-white/25 hover:border-[#D4AF37] rounded-xl p-3.5 text-center transition bg-white/5 hover:bg-white/10">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.webp"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {selectedFile ? (
              <div className="flex items-center justify-between gap-3 text-left">
                <div className="flex items-center gap-2.5 truncate">
                  <FileText className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div className="truncate">
                    <p className="text-xs font-semibold text-white truncate">{selectedFile.name}</p>
                    <p className="text-[10px] text-slate-300">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  className="p-1 rounded-full bg-white/10 hover:bg-red-500/30 text-slate-300 hover:text-white transition"
                  title="Remove file"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 text-slate-300 text-xs">
                <UploadCloud className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  <strong className="text-white font-medium">Click to upload</strong> architectural drawings, BOQ, or site photos
                </span>
              </div>
            )}
          </div>
          {fileError && (
            <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {fileError}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1">Specific Requirements or Site Notes</label>
          <textarea
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Need acoustic soundproofing, matte black profiles, and handover within 10 days."
            className="w-full bg-white/10 border border-white/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-400 outline-none transition resize-none"
          ></textarea>
        </div>

        {/* Action Buttons Row (Requirement #31 & #34) */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C5A059] hover:from-[#E5C158] hover:to-[#D4AF37] text-slate-950 font-extrabold text-sm py-3.5 px-6 rounded-xl shadow-xl shadow-[#D4AF37]/20 transition transform hover:-translate-y-0.5 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Preparing Enquiry...</span>
            ) : (
              <>
                <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                <span>Get Instant Quotation on WhatsApp</span>
              </>
            )}
          </button>

          <a
            href="tel:+919985597294"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call Now: +91 99855 97294</span>
          </a>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/10">
          <span>Official GST: 36GPSPS7449Q1ZB</span>
          <span>Free Laser Survey Across Hyderabad</span>
        </div>
      </form>
    </div>
  );
}
