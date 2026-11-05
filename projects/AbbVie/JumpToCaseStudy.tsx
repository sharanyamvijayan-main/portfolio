"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";

// `short` labels the floating dock's buttons; `tiny` replaces it on phones.
export type JumpChip = { href: string; label: string; short: string; tiny?: string; bg: string };

const list: Variants = { hidden: {}, shown: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.92 },
  shown: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 320, damping: 20 } },
};

// "Jump to a case study", made hard to miss:
// - the three buttons pop in one after another when the bar scrolls into view,
//   then a soft light sweeps across them every few seconds while each arrow
//   nudges right (.jump-chip in globals.css);
// - once you've scrolled past the bar, a compact copy floats at the bottom of
//   the screen so the case studies stay one click away. It tucks away again
//   once the projects section itself takes over the screen.
export default function JumpToCaseStudy({ chips, fontFamily, ink }: { chips: JumpChip[]; fontFamily: string; ink: string }) {
  const reduce = useReducedMotion();
  const bar = useRef<HTMLDivElement>(null);
  const [dock, setDock] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const b = bar.current?.getBoundingClientRect();
      const projects = document.getElementById("projects")?.getBoundingClientRect();
      const past = !!b && b.bottom < 0;
      // Tuck away once the projects section reaches the top third of the
      // screen, where its own cards are the way into each case study.
      const atProjects = !!projects && projects.top < window.innerHeight * 0.33;
      setDock(past && !atProjects);
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(update); };
    queue();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    return () => {
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const text = { fontFamily, fontWeight: 500, fontSize: 13, color: "rgba(255,255,255,0.95)" } as const;

  return (
    <>
      <div
        ref={bar}
        className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-6 rounded-2xl px-5 py-4"
        style={{ background: "#FFFFFF", border: "1px solid #E4E4DE", boxShadow: "0px 3px 12px 0px rgba(38,38,42,0.09)" }}
      >
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <div className="flex flex-col gap-[3px]">
            <span className="block rounded-full" style={{ width: 15, height: 1.5, background: "rgba(38,38,42,0.8)" }} />
            <span className="block rounded-full" style={{ width: 15, height: 1.5, background: "rgba(38,38,42,0.8)" }} />
            <span className="block rounded-full" style={{ width: 10, height: 1.5, background: "rgba(38,38,42,0.8)" }} />
          </div>
          <span style={{ fontFamily, fontWeight: 500, fontSize: 13, color: ink }}>Jump to a case study</span>
        </div>
        <motion.div
          className="flex flex-wrap items-center gap-3 flex-1 min-w-0"
          variants={list}
          initial={reduce ? false : "hidden"}
          whileInView="shown"
          viewport={{ once: true, amount: 0.6 }}
        >
          {chips.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              variants={item}
              whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="jump-chip relative overflow-hidden flex-1 min-w-fit flex items-center justify-between gap-5 rounded-full px-4 py-3"
              style={{ background: c.bg, "--i": i } as CSSProperties}
            >
              <span className="flex items-center gap-2">
                <span className="rounded-full flex-shrink-0" style={{ width: 6, height: 6, background: "rgba(255,255,255,0.9)" }} />
                <span className="whitespace-nowrap" style={text}>{c.label}</span>
              </span>
              <span className="jump-arrow" style={text}>&rarr;</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Floating copy while you read the rest of the overview. On phones it
          leaves room for the back-to-top button at bottom right. */}
      <AnimatePresence>
        {dock && (
          <motion.nav
            aria-label="Jump to a case study"
            className="fixed z-40 bottom-5 left-4 right-20 md:bottom-8 md:left-1/2 md:right-auto md:-translate-x-1/2 flex items-center justify-center gap-1.5 sm:gap-2 rounded-full p-1.5 sm:pl-4 bg-white/90 backdrop-blur-md border border-[#E4E4DE] shadow-[0_12px_32px_rgba(38,38,42,0.18)] overflow-x-auto"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
          >
            <span className="hidden sm:inline whitespace-nowrap flex-shrink-0" style={{ fontFamily, fontWeight: 500, fontSize: 12, color: "rgba(38,38,42,0.6)" }}>
              Jump to
            </span>
            {chips.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="whitespace-nowrap flex-shrink-0 rounded-full px-3 sm:px-3.5 py-2 transition-transform duration-200 hover:-translate-y-0.5"
                style={{ ...text, fontSize: 12, background: c.bg }}
                aria-label={c.label}
              >
                {c.tiny ? (
                  <>
                    <span className="sm:hidden">{c.tiny}</span>
                    <span className="hidden sm:inline">{c.short}</span>
                  </>
                ) : (
                  c.short
                )}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
