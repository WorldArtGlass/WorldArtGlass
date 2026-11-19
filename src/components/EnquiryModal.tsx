"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  sourceTitle?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultService = "Office Glass Partitions",
  sourceTitle = "Quick Enquiry Modal"
}: EnquiryModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <EnquiryForm
          defaultService={defaultService}
          sourcePage={sourceTitle}
          title="Request Free Quotation & Site Visit"
          subtitle="Direct consultation with Senior Glass Fabricators • 100% Genuine Saint-Gobain Glass"
        />
      </div>
    </div>
  );
}
