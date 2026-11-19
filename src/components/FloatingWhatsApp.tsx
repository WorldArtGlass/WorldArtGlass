"use client";

import React, { useState } from "react";
import { WhatsAppIcon } from "./Navbar";
import { X, MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 print:hidden">
      {/* Mini Tooltip that can be dismissed */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0B1B2B]/95 text-white text-xs px-3.5 py-2 rounded-xl shadow-xl border border-[#D4AF37]/40 backdrop-blur-md animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
          <div>
            <span className="font-semibold text-[#D4AF37]">Senior Fabricator Online: </span>
            <span className="text-slate-200">Chat for Quick Glass Estimate</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-1 text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/919985597294?text=Hi%20World%20Art%20Glass%2C%20I%20am%20visiting%20your%20website%20and%20need%20a%20quotation%20for%20architectural%20glass%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with World Art Glass on WhatsApp"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none"></span>

        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md relative z-10" />

        {/* Unread badge indicator */}
        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-600 text-white font-bold text-[9px] rounded-full flex items-center justify-center border-2 border-white shadow">
          1
        </span>
      </a>
    </div>
  );
}
