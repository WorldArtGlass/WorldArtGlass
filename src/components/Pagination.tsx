"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  page: number; // 1-based
  totalPages: number;
  onChange: (page: number) => void;
};

/** Returns page numbers with "…" gaps, e.g. [1, "…", 4, 5, 6, "…", 12]. */
function getPageItems(page: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const items: (number | "…")[] = [1];
  const start = Math.max(2, page - 1);
  const end = Math.min(total - 1, page + 1);
  if (start > 2) items.push("…");
  for (let p = start; p <= end; p++) items.push(p);
  if (end < total - 1) items.push("…");
  items.push(total);
  return items;
}

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const btn =
    "min-w-10 h-10 px-3 rounded-full text-sm font-bold flex items-center justify-center transition border";

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-1.5 sm:gap-2">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className={`${btn} bg-white border-slate-200 text-[#0B1B2B] hover:border-[#D4AF37] disabled:opacity-40 disabled:hover:border-slate-200 disabled:cursor-not-allowed cursor-pointer`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {getPageItems(page, totalPages).map((item, i) =>
        item === "…" ? (
          <span key={`gap-${i}`} className="w-6 text-center text-slate-400 select-none">
            …
          </span>
        ) : (
          <button
            key={item}
            onClick={() => onChange(item)}
            aria-label={`Page ${item}`}
            aria-current={item === page ? "page" : undefined}
            className={`${btn} cursor-pointer ${
              item === page
                ? "bg-[#0B1B2B] border-[#0B1B2B] text-[#D4AF37] shadow-sm"
                : "bg-white border-slate-200 text-slate-600 hover:border-[#D4AF37]"
            }`}
          >
            {item}
          </button>
        )
      )}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
        className={`${btn} bg-white border-slate-200 text-[#0B1B2B] hover:border-[#D4AF37] disabled:opacity-40 disabled:hover:border-slate-200 disabled:cursor-not-allowed cursor-pointer`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
