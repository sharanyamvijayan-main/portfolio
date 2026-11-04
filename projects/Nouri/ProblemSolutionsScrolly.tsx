"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { scrollToY } from "@/lib/smoothScroll";
import { MacBook, FeatureTag, ProblemCard, SolutionCard, TitleBadge, ScreenWithCallouts, type Callout } from "./shared";

export interface ProblemSolutionItem {
  num: string; title: string;
  problem: string; solution: string;
  screenSrc: string; screenAlt: string;
  callouts: Callout[];
  badgeColor?: string;
}

// Scroll distance each screen gets, in vh. More than one screen-height, so a
// single trackpad flick doesn't blow straight past an item.
const SEGMENT_VH = 150;
const ACCENT = "#86F442";

export function ProblemSolutionsScrolly({ items }: { items: ProblemSolutionItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Compute the active index directly from scroll position rather than
    // IntersectionObserver threshold-crossing: with 4 stacked full-height segments,
    // a fast scroll (fling, page-down, etc.) can jump clean over a segment's
    // activation band between two observer callbacks, silently skipping it
    // (e.g. #3 never becoming active). Reading getBoundingClientRect() on
    // every scroll tick is exact regardless of scroll speed — there's no
    // event to miss, just "where are we right now."
    let ticking = false;
    const compute = () => {
      ticking = false;
      const el = wrapperRef.current;
      if (!el) return;
      const scrolledIntoWrapper = -el.getBoundingClientRect().top;
      const segment = (window.innerHeight * SEGMENT_VH) / 100;
      const idx = Math.min(items.length - 1, Math.max(0, Math.floor(scrolledIntoWrapper / segment)));
      setActiveIndex(idx);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  const active = items[activeIndex];

  // The arrows and step dots glide the page to the start of an item's segment
  // (just past it, so the floor() above lands on that item).
  const goTo = (i: number) => {
    const el = wrapperRef.current;
    if (!el) return;
    const idx = Math.min(items.length - 1, Math.max(0, i));
    const top = el.getBoundingClientRect().top + window.scrollY + (idx * window.innerHeight * SEGMENT_VH) / 100 + 2;
    scrollToY(top);
  };

  return (
    <>
      {/* Desktop / tablet-landscape — the whole block stays pinned in one place
           while scrolling through this section. The title + Problem/Solution
           update instantly (no animation of their own) since their content
           should just read as "the current state," while only the laptop below
           cross-fades between screens — that's the one thing visibly changing
           on scroll. */}
      {/* +60vh tail buffer: without it, the wrapper ends exactly when the last
           item's own 100vh segment does, so the sticky pin releases into
           "Thank You" the instant block 4 becomes active — no room to actually
           sit with it before being pushed into the next section. The extra
           buffer gives block 4 real dwell time and keeps the two sections from
           running together. */}
      <div ref={wrapperRef} className="hidden md:block relative" style={{ height: `${items.length * SEGMENT_VH + 60}vh` }}>
        <div className="sticky top-[65px] z-10" style={{ height: "calc(100vh - 65px)" }}>
          <div className="h-full max-w-[1168px] mx-auto flex flex-col overflow-hidden px-6 md:px-0" style={{ paddingTop: "24px", paddingBottom: "32px" }}>
            <div className="flex items-start justify-between gap-6">
              <TitleBadge num={active.num} title={active.title} compact />
              <StepControls count={items.length} active={activeIndex} onGo={goTo} />
            </div>
            <div className="flex flex-row gap-3 mb-4">
              <ProblemCard text={active.problem} compact />
              <SolutionCard text={active.solution} compact />
            </div>
            <div className="relative flex-1 min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.num}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={reduceMotion ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduceMotion ? {} : { opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div style={{ aspectRatio: "1400 / 675", height: "100%", width: "auto", maxWidth: "100%" }}>
                    <ScreenWithCallouts screenSrc={active.screenSrc} screenAlt={active.screenAlt} callouts={active.callouts} />
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* First-visit cue that this panel steps through as you scroll. */}
              <div
                className={`pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${activeIndex === 0 ? "opacity-100" : "opacity-0"}`}
                aria-hidden
              >
                <span className="scroll-cue inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", color: "rgba(243,243,243,0.8)", letterSpacing: "0.06em" }}>
                  Scroll or use the arrows to see all {items.length} screens <span aria-hidden>&darr;</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet-portrait — existing simple stacked fallback, no scroll-sync */}
      <div className="md:hidden max-w-[1200px] mx-auto px-4">
        {items.map((item) => (
          <div key={item.num} className="py-10">
            <TitleBadge num={item.num} title={item.title} />
            <div className="flex flex-col gap-4 mb-10">
              <ProblemCard text={item.problem} />
              <SolutionCard text={item.solution} />
            </div>
            <MacBook src={item.screenSrc} alt={item.screenAlt} />
            <div className="grid grid-cols-1 gap-3 mt-6">
              {item.callouts.map((c) => <FeatureTag key={c.num} num={c.num} text={c.text} />)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// "02 / 04", one dot per screen, and previous / next arrows, so it's obvious
// the pinned panel is something you step through.
function StepControls({ count, active, onGo }: { count: number; active: number; onGo: (i: number) => void }) {
  const arrow = "flex items-center justify-center w-9 h-9 rounded-full transition-colors disabled:opacity-30 disabled:cursor-default enabled:hover:bg-white/15";
  const arrowStyle = { border: "1px solid rgba(255,255,255,0.22)", color: "#F3F3F3" };
  return (
    <div className="flex items-center gap-4 flex-shrink-0">
      <span className="text-xs tabular-nums" style={{ color: "rgba(243,243,243,0.6)", letterSpacing: "0.08em" }}>
        {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
      </span>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onGo(i)}
            aria-label={`Go to screen ${i + 1}`}
            aria-current={i === active ? "step" : undefined}
            className="h-2 rounded-full transition-all duration-300"
            style={{ width: i === active ? 22 : 8, background: i === active ? ACCENT : "rgba(255,255,255,0.28)" }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button type="button" className={arrow} style={arrowStyle} onClick={() => onGo(active - 1)} disabled={active === 0} aria-label="Previous screen">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M7 11V3M3.5 6.5 7 3l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" className={arrow} style={arrowStyle} onClick={() => onGo(active + 1)} disabled={active === count - 1} aria-label="Next screen">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M7 3v8M3.5 7.5 7 11l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  );
}
