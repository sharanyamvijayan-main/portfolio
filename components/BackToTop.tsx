"use client";

import { useEffect, useRef, useState } from "react";
import { scrollToY } from "@/lib/smoothScroll";
import { splashCovering } from "@/lib/splash";

const R = 21; // ring radius in the 48×48 viewBox
const C = 2 * Math.PI * R;

// Round "back to top" button, bottom-right on every page. It shows once you're
// about a screen down, and its ring fills with how far down the page you are
// (after karunnatarajan.com). Click glides home.
export default function BackToTop() {
  const ring = useRef<SVGCircleElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let raf = 0;
    const sync = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      ring.current?.style.setProperty("stroke-dashoffset", String(C * (1 - p)));
      setShown(window.scrollY > window.innerHeight * 0.9 && !splashCovering());
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(sync); };
    sync();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    const ro = new ResizeObserver(queue);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={shown ? 0 : -1}
      onClick={() => scrollToY(0)}
      className={`back-to-top fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-[0_8px_24px_rgba(25,25,25,0.14)] flex items-center justify-center text-sv-dark ${shown ? "is-shown" : ""}`}
    >
      <svg width="48" height="48" viewBox="0 0 48 48" className="absolute inset-0" aria-hidden>
        <circle cx="24" cy="24" r={R} fill="none" stroke="rgba(25,25,25,0.12)" strokeWidth="2" />
        <circle
          ref={ring}
          cx="24"
          cy="24"
          r={R}
          fill="none"
          stroke="#2708A0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C}
          transform="rotate(-90 24 24)"
        />
      </svg>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="relative">
        <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
