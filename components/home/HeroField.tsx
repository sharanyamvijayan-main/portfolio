"use client";

import { useEffect, useRef, type CSSProperties } from "react";

// The hero's soft indigo / pink / green colour fields. They keep their slow
// CSS drift (.hero-blob-*) and, on top of it, glide toward the cursor, each by
// a different amount (the pink one the opposite way) so the field shifts
// with depth as you move. Mouse/trackpad only; still under reduced motion.
const BLOBS = [
  { cls: "hero-blob-1 top-[8%] right-[-4%] w-[560px] h-[560px]", color: "rgba(39,8,160,0.16)", depth: 1 },
  { cls: "hero-blob-2 bottom-[4%] left-[-6%] w-[440px] h-[440px]", color: "rgba(221,3,105,0.15)", depth: -0.8 },
  { cls: "hero-blob-3 top-1/2 left-[38%] w-[380px] h-[380px]", color: "rgba(9,129,74,0.12)", depth: 1.6 },
];

export default function HeroField() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let raf = 0;
    let px = 0;
    let py = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0) return; // scrolled past the hero
      el.style.setProperty("--mx", ((px - r.left) / r.width - 0.5).toFixed(3));
      el.style.setProperty("--my", ((py - r.top) / r.height - 0.5).toFixed(3));
    };
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={root} aria-hidden className="hero-field absolute inset-0 pointer-events-none">
      {BLOBS.map((b) => (
        <div
          key={b.cls}
          className={`hero-blob ${b.cls} absolute rounded-full blur-2xl`}
          style={{ background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`, "--depth": b.depth } as CSSProperties}
        />
      ))}
    </div>
  );
}
