"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "how-i-worked", label: "How I Worked" },
  { id: "projects", label: "Projects" },
];

// How far to sit to the left of the content's actual text edge.
const GAP = 24;

export function CaseStudyNav({ accent }: { accent: string }) {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [navRight, setNavRight] = useState<number | null>(null);
  // Only shown once the case study content area (below the hero banner) is
  // actually on screen — never while the hero itself is in view.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    function measure() {
      if (cancelled) return;
      const el = document.getElementById("how-i-worked");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      const contentEdge = rect.left + parseFloat(style.paddingLeft || "0");
      setNavRight(Math.max(0, window.innerWidth - contentEdge + GAP));
    }

    measure();
    window.addEventListener("resize", measure);

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    const retries = [100, 400, 1000, 2000].map((ms) => window.setTimeout(measure, ms));

    const ro = new ResizeObserver(measure);
    ro.observe(document.body);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", measure);
      retries.forEach((id) => window.clearTimeout(id));
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = document.getElementById("case-study-content");
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (navRight === null) return null;

  return (
    <nav
      className={`hidden xl:flex fixed top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-4 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ right: navRight }}
      aria-label="Case study sections"
    >
      <Link href="/#work" className="flex items-center gap-2 mb-1 transition-opacity hover:opacity-70">
        <span style={{ fontSize: 12, color: "rgba(38,38,42,0.65)" }}>&larr;</span>
        <span className="font-body text-xs uppercase" style={{ letterSpacing: "0.12em", fontWeight: 600, color: "rgba(38,38,42,0.65)" }}>
          All Work
        </span>
      </Link>
      <span className="w-6 h-px mb-2" style={{ background: "rgba(38,38,42,0.15)" }} />
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-3">
            <span
              className="rounded-full transition-all duration-300 flex-shrink-0"
              style={{
                width: isActive ? 22 : 8,
                height: 2,
                background: isActive ? accent : "rgba(38,38,42,0.3)",
              }}
            />
            <span
              className="font-body text-xs whitespace-nowrap transition-colors duration-200"
              style={{ color: isActive ? accent : "rgba(38,38,42,0.45)" }}
            >
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
