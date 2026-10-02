"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "roles", label: "Product" },
  { id: "flow", label: "Process" },
  { id: "my-role", label: "My Role" },
  { id: "design-system", label: "System" },
];

// How far to sit to the left of the content's actual text edge.
const GAP = 24;

export function CaseStudyNav({ accent }: { accent: string }) {
  const [active, setActive] = useState(SECTIONS[0].id);
  // null until measured on the client, so the nav never renders at a wrong
  // spot for a frame — width reserved for it is `xl:pl-56` (224px) on every
  // section, so this should always resolve to a comfortably positive value.
  const [navRight, setNavRight] = useState<number | null>(null);
  // Hidden once the "View Other Projects" strip scrolls up far enough to sit
  // under the vertically-centred rail — same approach as the AbbVie studies.
  const [visible, setVisible] = useState(false);

  // Anchor to the *actual* rendered left edge of the content, read straight
  // off the DOM — sidesteps any cross-browser differences in how nested
  // calc()/max() expressions resolve, which is what was throwing this off.
  //
  // A single on-mount measurement isn't enough: web fonts finishing their
  // swap, images loading, and anything above #overview changing height can
  // all shift its position *after* the first paint, leaving a stale value.
  // Re-measuring on a few triggers (resize, font load, a couple of delayed
  // retries) keeps it self-correcting instead of silently drifting.
  useEffect(() => {
    let cancelled = false;
    function measure() {
      if (cancelled) return;
      const el = document.getElementById("overview");
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
    const content = document.getElementById("remember-content");
    if (!content) return;
    // The rail is fixed and vertically centred, so it has to be hidden once
    // whatever follows the case study (the closing block, then the dark
    // "View Other Projects" strip) rises into the lower half of the viewport.
    // The closing <section> sits between #remember-content and the strip, so
    // the lower bound is measured off it; the strip is main's last child.
    const closingEl = content.nextElementSibling as HTMLElement | null;
    const following = content.parentElement?.lastElementChild as HTMLElement | null;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const c = content.getBoundingClientRect();
      const bottom = closingEl ? closingEl.getBoundingClientRect().bottom : c.bottom;
      const inContent = c.top < vh * 0.6 && bottom > vh * 0.1;
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
      <Link href="/#work" className="flex items-center gap-2 mb-1 transition-opacity hover:opacity-80">
        <span style={{ fontSize: 12, color: "rgba(46,42,36,0.6)" }}>&larr;</span>
        <span className="font-body text-xs uppercase" style={{ letterSpacing: "0.12em", fontWeight: 600, color: "rgba(46,42,36,0.6)" }}>
          All Work
        </span>
      </Link>
      <span className="w-6 h-px mb-2" style={{ background: "rgba(46,42,36,0.2)" }} />
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-3">
            <span
              className="rounded-full transition-all duration-300 flex-shrink-0"
              style={{
                width: isActive ? 22 : 8,
                height: 2,
                background: isActive ? accent : "rgba(46,42,36,0.28)",
              }}
            />
            <span
              className="font-body text-xs whitespace-nowrap transition-colors duration-200"
              style={{ color: isActive ? accent : "rgba(46,42,36,0.45)" }}
            >
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
