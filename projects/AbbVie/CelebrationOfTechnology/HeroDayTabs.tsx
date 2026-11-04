"use client";

import { useEffect, useState } from "react";

const DAYS = ["Day 1", "Day 2", "Day 3", "Day 4"];

// The hero's day switcher, which steps through the four days on its own so the
// mockup reads as a live schedule. Starts on Day 2 (as in the design) and
// stays there under prefers-reduced-motion.
export function HeroDayTabs({ fontFamily, activeColor }: { fontFamily: string; activeColor: string }) {
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % DAYS.length), 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="flex items-center rounded-xl"
      style={{ padding: 5, gap: 4, background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.28)" }}
    >
      {DAYS.map((label, i) => (
        <span
          key={label}
          className="rounded-lg transition-colors duration-500"
          style={{
            padding: "10px 17px", fontFamily, fontWeight: 500, fontSize: 13,
            background: i === active ? "#FFFFFF" : "rgba(255,255,255,0)",
            color: i === active ? activeColor : "rgba(255,255,255,0.82)",
          }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
