"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { splashCovering } from "@/lib/splash";

// How often the banner's details (typing, drawing, popping, counting) replay
// while it stays on screen. Long enough for every sequence to finish and sit
// for a few seconds.
const LOOP_MS = 10000;

/**
 * The animated frame of an AbbVie hero (the `.hb` element). The CSS in
 * globals.css plays the banner once on load; this keeps it alive:
 *
 * - Scrolling away and back replays the whole banner, cards and all.
 * - While it stays on screen, the details loop every LOOP_MS, the cards stay.
 *
 * Restarting is done by briefly switching the animations off (.hb-reset /
 * .hb-reset-details) and back on, and an "hb-replay" event tells any CountUp
 * inside to count again. Reduced motion: nothing replays.
 */
export function HeroLoop({ className, style, children }: { className: string; style?: CSSProperties; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const restart = (cls: "hb-reset" | "hb-reset-details") => {
      el.classList.add(cls);
      void el.offsetWidth; // flush, so the animations really restart
      el.classList.remove(cls);
      el.dispatchEvent(new Event("hb-replay"));
    };

    let visible = false;
    let away = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && away) restart("hb-reset");
        if (!entry.isIntersecting && visible) away = true;
        if (entry.isIntersecting) away = false;
        visible = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    const id = window.setInterval(() => {
      if (visible && !document.hidden && !splashCovering()) restart("hb-reset-details");
    }, LOOP_MS);

    return () => {
      io.disconnect();
      window.clearInterval(id);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
