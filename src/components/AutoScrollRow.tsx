"use client";

import React, { useEffect, useRef } from "react";

type AutoScrollRowProps = {
  items: React.ReactNode[];
  /** Auto-scroll speed in pixels per second. */
  speed?: number;
  /** How long to wait after the user lets go before auto-scroll resumes (ms). */
  resumeDelay?: number;
  className?: string;
};

/**
 * Horizontal row that scrolls by itself, pauses while the user touches/swipes
 * it, and resumes shortly after. Content is rendered 3 times so the loop is
 * seamless in both directions (swiping backwards never hits a dead end).
 */
export default function AutoScrollRow({
  items,
  speed = 35,
  resumeDelay = 2000,
  className = "",
}: AutoScrollRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const oneSet = () => el.scrollWidth / 3;
    // Start on the middle copy so there is content on both sides.
    el.scrollLeft = oneSet();
    let pos = el.scrollLeft;

    const wrap = () => {
      const w = oneSet();
      if (w === 0) return;
      if (el.scrollLeft >= w * 2) el.scrollLeft -= w;
      else if (el.scrollLeft < w) el.scrollLeft += w;
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused.current && !reduceMotion) {
        pos += speed * dt;
        el.scrollLeft = pos;
        wrap();
        pos = el.scrollLeft;
      } else {
        pos = el.scrollLeft;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Keep the loop seamless while the user is swiping / momentum-scrolling.
    el.addEventListener("scroll", wrap, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", wrap);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [speed]);

  const pause = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    paused.current = true;
  };
  const resumeSoon = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      paused.current = false;
    }, resumeDelay);
  };

  return (
    <div
      ref={ref}
      onTouchStart={pause}
      onTouchEnd={resumeSoon}
      onTouchCancel={resumeSoon}
      onMouseEnter={pause}
      onMouseLeave={resumeSoon}
      className={`flex overflow-x-auto no-scrollbar overscroll-x-contain ${className}`}
    >
      {[0, 1, 2].map((copy) => (
        <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy !== 1}>
          {items.map((item, i) => (
            <div key={i} className="shrink-0 pr-10">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
