"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MacBook, FeatureTag, ProblemCard, SolutionCard, TitleBadge, ScreenWithCallouts, type Callout } from "./shared";

export interface ProblemSolutionItem {
  num: string; title: string;
  problem: string; solution: string;
  screenSrc: string; screenAlt: string;
  callouts: Callout[];
  badgeColor?: string;
}

export function ProblemSolutionsScrolly({ items }: { items: ProblemSolutionItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Compute the active index directly from scroll position rather than
    // IntersectionObserver threshold-crossing: with 4 stacked 100vh segments,
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
      const segment = window.innerHeight;
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
      <div ref={wrapperRef} className="hidden md:block relative" style={{ height: `${items.length * 100 + 60}vh` }}>
        <div className="sticky top-[65px] z-10" style={{ height: "calc(100vh - 65px)" }}>
          <div className="h-full max-w-[1168px] mx-auto flex flex-col overflow-hidden px-6 md:px-0" style={{ paddingTop: "24px", paddingBottom: "32px" }}>
            <TitleBadge num={active.num} title={active.title} compact />
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
