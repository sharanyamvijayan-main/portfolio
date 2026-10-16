"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

// Counts a stat up from 0 to `to` the first time it scrolls into view. The
// final value is laid out invisibly underneath so the width never shifts while
// the digits tick.
export default function CountUp({
  to,
  suffix = "",
  duration = 1200,
  style,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: jump straight to the final value on the first frame.
    const ms = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : duration;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = ms ? Math.min(1, (now - start) / ms) : 1;
          // Ease out so it races up and settles on the final number.
          setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} style={{ ...style, display: "inline-grid", fontVariantNumeric: "tabular-nums" }}>
      <span aria-hidden style={{ gridArea: "1 / 1", visibility: "hidden" }}>
        {to}
        {suffix}
      </span>
      <span aria-hidden style={{ gridArea: "1 / 1" }}>
        {value}
        {suffix}
      </span>
      <span className="sr-only">
        {to}
        {suffix}
      </span>
    </span>
  );
}
