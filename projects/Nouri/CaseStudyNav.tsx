"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "process", label: "Process" },
  { id: "define", label: "Define" },
  { id: "research", label: "Research" },
  { id: "persona", label: "Persona" },
  { id: "ia", label: "Architecture" },
  { id: "design-system", label: "Design System" },
  { id: "ideation", label: "Ideation" },
  { id: "ui-design", label: "UI Design" },
  { id: "problem-solutions", label: "Solutions" },
];

// How far to sit to the left of the content's actual text edge.
const GAP = 24;

export function CaseStudyNav({ accent }: { accent: string }) {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [navRight, setNavRight] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    function measure() {
      if (cancelled) return;
      const el = document.getElementById("process");
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
    const content = document.getElementById("nouri-content");
    if (!content) return;
    const following = content.nextElementSibling as HTMLElement | null;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const c = content.getBoundingClientRect();
      const inContent = c.top < vh * 0.6 && c.bottom > vh * 0.1;
      const encroaching = following
        ? following.getBoundingClientRect().top < vh * 0.72
        : false;
      setVisible(inContent && !encroaching);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
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
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>&larr;</span>
        <span className="text-xs uppercase" style={{ letterSpacing: "0.12em", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>
          Back
        </span>
      </Link>
      <span className="w-6 h-px mb-2" style={{ background: "rgba(255,255,255,0.2)" }} />
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-3">
            <span
              className="rounded-full transition-all duration-300 flex-shrink-0"
              style={{ width: isActive ? 22 : 8, height: 2, background: isActive ? accent : "rgba(255,255,255,0.3)" }}
            />
            <span
              className="text-xs whitespace-nowrap transition-colors duration-200"
              style={{ color: isActive ? accent : "rgba(255,255,255,0.45)" }}
            >
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
