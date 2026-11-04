"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useSpring, type TargetAndTransition } from "framer-motion";
import { cardSpring, pressSpring } from "@/lib/motion";
import type { projects } from "@/lib/projects";

type Project = (typeof projects)[number];

type CardArt = {
  src: string; bg: string; scrim: string; ink: string;
  tag: "dark" | "light" | "onred"; darkInk?: boolean; pos?: string; size?: string;
  // Hover move for the artwork layer, one per project.
  move: TargetAndTransition;
};

const CARD_ART: Record<string, CardArt> = {
  abbvie: { src: "/abbvie-card.png", bg: "#12306B", scrim: "rgba(11,26,66,1)", ink: "#FFFFFF", tag: "dark", move: { y: -8 } },
  remember: { src: "/remember-card.png", bg: "#EDE4DA", scrim: "rgba(235,225,214,1)", ink: "#324321", tag: "light", darkInk: true, move: { scale: 1.05 } },
  nouri: { src: "/nouri-card.png", bg: "#A9BEE4", scrim: "rgba(163,185,226,1)", ink: "#1B2748", tag: "light", darkInk: true, pos: "30% 100%", size: "165%", move: { x: -10 } },
  pinreal: { src: "/pinreal-card.png", bg: "#F4001F", scrim: "rgba(214,0,26,1)", ink: "#FFFFFF", tag: "onred", pos: "center bottom", move: { y: -12 } },
  arco: { src: "/arco-card.webp", bg: "#D2C4B7", scrim: "rgba(210,196,183,1)", ink: "#201212", tag: "light", darkInk: true, move: { rotate: 2, scale: 1.04 } },
  // The vase leans off-centre; on hover its card leans with it.
  "oblique-vase": { src: "/oblique-vase-card.webp", bg: "#9AA6C8", scrim: "rgba(38,48,92,1)", ink: "#FFFFFF", tag: "dark", move: { rotate: -3, scale: 1.06 } },
};

const MotionLink = motion.create(Link);

// A homepage work card. It flies in from its own side of the two-column grid
// (left column from the left, right from the right) and lands on a spring;
// on hover it presses in slightly while its artwork makes that project's
// signature move (after karunnatarajan.com's springy cards). With a mouse it
// also tilts in 3D toward the cursor, a soft light glare following it.
const TILT = 6; // max degrees
export default function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const art = CARD_ART[p.slug] ?? null;
  const ink = art ? art.ink : "#FCEBDA";
  const textShadow = art ? (art.darkInk ? "0 1px 12px rgba(255,255,255,0.65)" : "0 1px 14px rgba(0,0,0,0.45)") : undefined;
  const fromX = index % 2 === 0 ? -40 : 40;

  const glare = useRef<HTMLSpanElement>(null);
  const rotateX = useSpring(0, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 18 });
  const tilt = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rotateY.set((px - 0.5) * 2 * TILT);
    rotateX.set(-(py - 0.5) * 2 * TILT);
    glare.current?.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
    glare.current?.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
  };
  const untilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: fromX, y: 40 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={cardSpring}
      style={{ perspective: 1200 }}
    >
      <MotionLink
        href={`/work/${p.slug}`}
        className="group relative overflow-hidden rounded-2xl flex flex-col justify-end p-8 md:p-10"
        style={{ backgroundColor: art ? art.bg : p.bg, aspectRatio: "4/3", rotateX, rotateY, transformStyle: "preserve-3d" }}
        onPointerMove={tilt}
        onPointerLeave={untilt}
        initial="rest"
        animate="rest"
        whileHover={reduce ? undefined : "hover"}
        whileTap={reduce ? undefined : { scale: 0.97 }}
        variants={{ rest: { scale: 1 }, hover: { scale: 0.98 } }}
        transition={pressSpring}
      >
        {art && (
          // Artwork on its own layer, a little larger than the card, so the
          // hover move never shows an edge.
          <motion.span
            aria-hidden
            className="absolute -inset-4 pointer-events-none"
            style={{
              backgroundImage: `url(${art.src})`,
              backgroundSize: art.size ?? "cover",
              backgroundPosition: art.pos ?? "center",
              backgroundRepeat: "no-repeat",
            }}
            variants={{ rest: { x: 0, y: 0, scale: 1, rotate: 0 }, hover: art.move }}
            transition={pressSpring}
          />
        )}
        {/* Bottom scrim so the text stays legible over the artwork */}
        {art && (
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[85%] pointer-events-none"
            style={{ background: `linear-gradient(to top, ${art.scrim} 0%, ${art.scrim} 30%, transparent 100%)` }}
          />
        )}
        {/* Light glare that follows the cursor */}
        <span
          ref={glare}
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-soft-light"
          style={{ background: "radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.55), transparent 55%)" }}
        />
        {/* Index number */}
        <span
          className="absolute top-7 right-8 opacity-40"
          style={{ fontFamily: "var(--font-fira-code)", fontSize: 11, letterSpacing: "0.08em", color: ink }}
        >
          0{index + 1}
        </span>

        {/* Tags */}
        <div className="relative flex flex-wrap gap-2 mb-5">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-body font-semibold"
              style={
                art?.tag === "light"
                  ? { backgroundColor: "rgba(255,255,255,0.7)", color: ink, border: `1px solid ${ink}55` }
                  : art?.tag === "onred"
                  ? { backgroundColor: "rgba(255,255,255,0.22)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.55)" }
                  : art
                  ? { backgroundColor: "rgba(255,255,255,0.16)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.4)" }
                  : { backgroundColor: p.tagBg, color: p.tagColor, border: `1px solid ${p.tagColor}30` }
              }
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className="relative mb-1.5"
          style={{
            fontFamily: "var(--font-newsreader-hero)",
            fontWeight: 400,
            color: ink,
            fontSize: "clamp(28px, 4vw, 52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            textShadow,
          }}
        >
          {p.title}
        </h3>
        <p className="relative font-body text-sm leading-relaxed" style={{ color: ink, opacity: art ? 0.85 : 0.55, textShadow }}>
          {p.tagline}
        </p>

        {/* Hover arrow */}
        <span
          className="absolute bottom-9 right-9 font-body text-sm opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300"
          style={{ color: ink }}
        >
          View →
        </span>
      </MotionLink>
    </motion.div>
  );
}
