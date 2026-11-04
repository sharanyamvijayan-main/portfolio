"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { splashCovering, whenSplashDone } from "@/lib/splash";

// Counts a stat up from 0 to `to` once it's well into view, and again each
// time it comes back after leaving the screen. The final value is laid out
// invisibly underneath so the width never shifts while the digits tick.
//
// - It waits until the number is in the upper ~70% of the viewport (not the
//   moment it peeks in at the bottom), plus `delay` so it has finished fading
//   in, so the climb happens where you're actually looking.
// - Inside an AbbVie hero (.hb), it also re-counts whenever the hero replays
//   its animation loop (the "hb-replay" event from HeroLoop).
export default function CountUp({
  to,
  suffix = "",
  duration = 1400,
  delay = 250,
  style,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: jump straight to the final value.
    const ms = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : duration;
    let raf = 0;
    let timer = 0;
    let armed = true;
    let cancelSplashWait = () => {};

    const count = () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
      setValue(0);
      timer = window.setTimeout(() => {
        const start = performance.now();
        const tick = (now: number) => {
          const t = ms ? Math.min(1, (now - start) / ms) : 1;
          // Ease out so it races up and settles on the final number.
          setValue(Math.round(to * (1 - Math.pow(1 - t, 2))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }, ms ? delay : 0);
    };
    // The intro splash covers the page on a fresh load; hold until it fades.
    const start = () => {
      cancelSplashWait();
      cancelSplashWait = whenSplashDone(count);
    };

    const enter = new IntersectionObserver(
      (entries) => {
        if (!armed || !entries.some((e) => e.isIntersecting)) return;
        armed = false;
        start();
      },
      { rootMargin: "0px 0px -30% 0px", threshold: 1 }
    );
    // Fully off screen again: reset, so the next visit counts up again.
    const exit = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting) || armed) return;
      armed = true;
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
      setValue(0);
    });
    enter.observe(el);
    exit.observe(el);

    const hero = el.closest(".hb");
    const replay = () => { if (!splashCovering()) count(); };
    hero?.addEventListener("hb-replay", replay);

    return () => {
      enter.disconnect();
      exit.disconnect();
      hero?.removeEventListener("hb-replay", replay);
      window.clearTimeout(timer);
      cancelSplashWait();
      cancelAnimationFrame(raf);
    };
  }, [to, duration, delay]);

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
