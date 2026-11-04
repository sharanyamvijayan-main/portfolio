"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

// Wraps a button or link so it leans toward the cursor when the cursor comes
// near, and springs back when it leaves. Mouse/trackpad only.
export default function Magnetic({
  children,
  strength = 0.3,
  reach = 70,
  className = "",
}: {
  children: ReactNode;
  /** Fraction of the cursor's offset the element follows. */
  strength?: number;
  /** How far (px) beyond its edge the pull starts. */
  reach?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 220, damping: 16, mass: 0.6 });
  const y = useSpring(0, { stiffness: 220, damping: 16, mass: 0.6 });

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let raf = 0;
    let px = 0;
    let py = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      // Measure from the resting centre (undo the current pull).
      const cx = r.left + r.width / 2 - x.get();
      const cy = r.top + r.height / 2 - y.get();
      const dx = px - cx;
      const dy = py - cy;
      const inside = Math.abs(dx) < r.width / 2 + reach && Math.abs(dy) < r.height / 2 + reach;
      x.set(inside ? dx * strength : 0);
      y.set(inside ? dy * strength : 0);
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
  }, [reduce, reach, strength, x, y]);

  return (
    <motion.span ref={ref} style={{ x, y }} className={`inline-flex ${className}`}>
      {children}
    </motion.span>
  );
}
