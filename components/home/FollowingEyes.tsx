"use client";

import { useEffect, useRef } from "react";

// Footer easter egg (after karunnatarajan.com's nav smiley), kept friendly:
// an emoji-style face whose dot eyes drift a little toward the mouse and blink
// now and then. Point at it and it squints happily (^ ^), smiles wider and
// hops. On touch screens it just blinks; under reduced motion it holds still.
const EYES = [
  { cx: 22, cy: 26 },
  { cx: 38, cy: 26 },
];
const REACH = 1.8; // how far the eyes drift from centre (viewBox units)

export default function FollowingEyes({ size = 56 }: { size?: number }) {
  const svg = useRef<SVGSVGElement>(null);
  const eyes = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Blink on a relaxed 4–7s rhythm.
    let blinkTimer = 0;
    const blink = () => {
      eyes.current?.classList.add("is-blinking");
      window.setTimeout(() => eyes.current?.classList.remove("is-blinking"), 150);
      blinkTimer = window.setTimeout(blink, 4000 + Math.random() * 3000);
    };
    blinkTimer = window.setTimeout(blink, 2500);

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return () => window.clearTimeout(blinkTimer);
    }

    let raf = 0;
    let mx = 0;
    let my = 0;
    const look = () => {
      raf = 0;
      const el = svg.current;
      if (!el || !eyes.current) return;
      const r = el.getBoundingClientRect();
      const dx = mx - (r.left + r.width / 2);
      const dy = my - (r.top + r.height / 2);
      const dist = Math.hypot(dx, dy) || 1;
      // Both eyes move together, gently, and only so far.
      const k = (REACH * Math.min(1, dist / 240)) / dist;
      eyes.current.style.translate = `${(dx * k).toFixed(2)}px ${(dy * k).toFixed(2)}px`;
    };
    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(look);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.clearTimeout(blinkTimer);
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg ref={svg} width={size} height={size} viewBox="0 0 60 60" aria-hidden className="friendly-face shrink-0">
      <circle cx="30" cy="30" r="28" fill="#2708A0" />
      {/* Blush */}
      <ellipse cx="15" cy="36" rx="5" ry="3" fill="#DD0369" opacity="0.45" />
      <ellipse cx="45" cy="36" rx="5" ry="3" fill="#DD0369" opacity="0.45" />
      {/* Dot eyes (they drift together) */}
      <g ref={eyes} className="friendly-face__eyes">
        {EYES.map((e, i) => (
          <ellipse key={i} cx={e.cx} cy={e.cy} rx="3.2" ry="4.2" fill="#FCEBDA" className="friendly-face__eye" style={{ transformOrigin: `${e.cx}px ${e.cy}px` }} />
        ))}
      </g>
      {/* Happy squint (^ ^), shown on hover in place of the dots */}
      <g className="friendly-face__happy" fill="none" stroke="#FCEBDA" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 28l4-4.5 4 4.5" />
        <path d="M34 28l4-4.5 4 4.5" />
      </g>
      {/* Smile, wider on hover */}
      <path className="friendly-face__smile" d="M22 38c2.2 2.6 4.9 3.8 8 3.8s5.8-1.2 8-3.8" fill="none" stroke="#FCEBDA" strokeWidth="2.6" strokeLinecap="round" />
      <path className="friendly-face__grin" d="M20 37c2.6 4.4 6 6.4 10 6.4s7.4-2 10-6.4" fill="none" stroke="#FCEBDA" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}
