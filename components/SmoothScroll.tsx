"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { getLenis, setLenis } from "@/lib/smoothScroll";

// Site-wide inertia scrolling (Lenis, lerp 0.1), the "buttery" wheel scroll
// karunnatarajan.com uses. Desktop mouse/trackpad only: phones keep their
// native scrolling, and it's off under prefers-reduced-motion.
//
// Lenis moves the real window scroll position, so everything that listens for
// scroll events (case-study parallax, side rails, the Nouri pinned panel)
// keeps working. `anchors` makes in-page #links glide too; Lenis honours each
// section's own scroll-margin (scroll-mt-24), so they still clear the nav.
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: true, autoRaf: true });
    setLenis(lenis);
    return () => {
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  // On a page change, drop any glide still in flight (it would drag the new
  // page back toward the old target instead of letting Next.js put it at the
  // top), and re-measure for the new page's height.
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;
    lenis.stop();
    lenis.start();
    lenis.resize();
  }, [pathname]);

  return null;
}
