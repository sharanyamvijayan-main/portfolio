"use client";

import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useSpring } from "framer-motion";
import { whenSplashDone } from "@/lib/splash";
import TypedRoles from "./TypedRoles";

// Homepage hero intro (after karunnatarajan.com's two-stage badge):
// 1. a dark "Hello" chip fades in, then the pill springs open to introduce me;
// 2. the headline rises in word by word from behind a clip;
// 3. "stories worth experiencing" (its colours flowing, .text-flow) resolves
//    out of a soft blur last. It stays one inline span so its gradient runs
//    continuously across the line break, which a per-word split would break.
//    Pointing at it fans out a few project thumbnails that follow the cursor
//    (a peek at the work below), and clicking it glides down to that work;
// 4. a typed line then cycles through my roles.
// Everything waits for the SV splash to start fading. Reduced motion: shown.

const LEAD = "I’m a product designer who turns complexity into".split(" ");
const WORD_STAGGER = 0.045;
const HEADLINE_AT = 0.55; // s after start, once the pill has begun opening
const PEEK = ["/abbvie-card.png", "/pinreal-card.png", "/arco-card.webp"];

export default function HeroIntro() {
  const reduce = useReducedMotion();
  const [go, setGo] = useState(false);
  useEffect(() => whenSplashDone(() => requestAnimationFrame(() => setGo(true))), []);
  const play = go || !!reduce;

  // Thumbnail peek that trails the cursor over "stories worth experiencing".
  const [peek, setPeek] = useState(false);
  const peekX = useSpring(0, { stiffness: 300, damping: 28 });
  const peekY = useSpring(0, { stiffness: 300, damping: 28 });

  // The pill opens from the chip's width to its natural width, measured here
  // (it differs on phones, where the tagline part is hidden).
  const rest = useRef<HTMLSpanElement>(null);
  const [restW, setRestW] = useState<number | null>(null);
  useLayoutEffect(() => {
    const el = rest.current;
    if (!el) return;
    const measure = () => setRestW(el.scrollWidth);
    measure();
    document.fonts?.ready.then(measure).catch(() => {});
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <>
      <motion.div
        className="inline-flex items-center p-1 rounded-full bg-white/60 border border-sv-dark/10 backdrop-blur-sm"
        initial={reduce ? false : { opacity: 0, y: -12 }}
        animate={play ? { opacity: 1, y: 0 } : undefined}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        <span className="flex items-center gap-1.5 rounded-full bg-sv-dark px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-sv-green animate-pulse" />
          <span className="font-body text-xs tracking-widest uppercase text-sv-cream">Hello</span>
        </span>
        <motion.span
          className="block overflow-hidden"
          initial={reduce ? false : { width: 0 }}
          animate={play && restW !== null ? { width: restW } : undefined}
          transition={{ type: "spring", stiffness: 120, damping: 17, delay: reduce ? 0 : 0.3 }}
        >
          <span ref={rest} className="block whitespace-nowrap pl-3 pr-3 font-body text-xs tracking-widest uppercase text-sv-dark/60">
            I&apos;m Sharanya Vijayan<span className="hidden md:inline"> &middot; Designing with curiosity + empathy</span>
          </span>
        </motion.span>
      </motion.div>

      <h1
        className="mt-7 text-sv-dark leading-[1.15] tracking-tight"
        style={{ fontFamily: "var(--font-newsreader-hero)", fontWeight: 400, fontSize: "clamp(32px, 4.6vw, 68px)" }}
      >
        {LEAD.map((w, i) => (
          <Fragment key={i}>
            <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: "110%" }}
                animate={play ? { y: 0 } : undefined}
                transition={{ type: "spring", stiffness: 220, damping: 26, delay: reduce ? 0 : HEADLINE_AT + i * WORD_STAGGER }}
              >
                {w}
              </motion.span>
            </span>{" "}
          </Fragment>
        ))}
        <motion.a
          href="#work"
          className="text-flow"
          onPointerEnter={(e) => {
            if (e.pointerType !== "mouse" || reduce) return;
            peekX.jump(e.clientX);
            peekY.jump(e.clientY);
            setPeek(true);
          }}
          onPointerMove={(e) => {
            peekX.set(e.clientX);
            peekY.set(e.clientY);
          }}
          onPointerLeave={() => setPeek(false)}
          initial={reduce ? false : { opacity: 0, filter: "blur(10px)" }}
          animate={play ? { opacity: 1, filter: "blur(0px)" } : undefined}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : HEADLINE_AT + LEAD.length * WORD_STAGGER + 0.1 }}
        >
          stories worth experiencing
        </motion.a>
        .
      </h1>

      <TypedRoles startDelay={1900} />

      {/* The peek: three cards fanning out above the cursor. */}
      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-40" style={{ x: peekX, y: peekY }}>
        <AnimatePresence>
          {peek &&
            PEEK.map((src, i) => (
              <motion.span
                key={src}
                className="absolute block rounded-xl bg-cover bg-center shadow-[0_18px_40px_rgba(25,25,25,0.28)] border-2 border-white"
                style={{ width: 150, height: 112, left: -75, top: -160, backgroundImage: `url(${src})` }}
                initial={{ opacity: 0, scale: 0.5, rotate: 0, x: 0, y: 30 }}
                animate={{ opacity: 1, scale: 1, rotate: (i - 1) * 12, x: (i - 1) * 78, y: Math.abs(i - 1) * 14 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 0, x: 0, y: 30, transition: { duration: 0.18 } }}
                transition={{ type: "spring", stiffness: 320, damping: 22, delay: i * 0.04 }}
              />
            ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
