import type Lenis from "lenis";

// The site-wide Lenis instance, set by components/SmoothScroll.tsx while
// smooth scrolling is on (desktop mouse/trackpad, motion allowed).
let lenis: Lenis | null = null;
export function setLenis(instance: Lenis | null) {
  lenis = instance;
}
export function getLenis(): Lenis | null {
  return lenis;
}

// Programmatic scrolls go through Lenis when it's running, so they glide with
// the same easing and don't fight it; otherwise plain window scrolling.
export function scrollToY(y: number, opts: { instant?: boolean } = {}) {
  if (lenis) {
    lenis.scrollTo(y, { immediate: opts.instant });
    return;
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: y, behavior: opts.instant || reduce ? "auto" : "smooth" });
}
