"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { isDarkHeroPath } from "@/lib/darkHeroPaths";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/playground", label: "Playground" },
  { href: "/resume", label: "Resume" },
];

function parseRGB(s: string): [number, number, number, number] | null {
  const m = s.match(/rgba?\(([^)]+)\)/i);
  if (!m) return null;
  const [r, g, b, a = 1] = m[1].split(",").map((x) => parseFloat(x.trim()));
  if ([r, g, b].some((n) => Number.isNaN(n))) return null;
  return [r, g, b, a];
}

function relLuminance(r: number, g: number, b: number): number {
  const lin = [r, g, b].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

export default function Nav() {
  const pathname = usePathname();
  // First paint uses the route hint (avoids a flash); a measurement of the
  // pixel actually behind the bar then corrects it and keeps it correct on
  // scroll, so the nav stays legible whatever it's sitting on.
  const [dark, setDark] = useState(() => isDarkHeroPath(pathname));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 640px)").matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  useEffect(() => {
    setDark(isDarkHeroPath(pathname));

    let raf = 0;
    const sample = () => {
      raf = 0;
      // A point just under the fixed bar, near the logo — representative of
      // what the nav overlaps. elementFromPoint skips pointer-events:none
      // layers (the custom cursor), so it reads real page content.
      const x = Math.max(24, Math.round(window.innerWidth * 0.03));
      const y = 72;
      let el = document.elementFromPoint(x, y) as HTMLElement | null;
      let rgb: [number, number, number] | null = null;
      while (el && el !== document.documentElement) {
        const p = parseRGB(getComputedStyle(el).backgroundColor);
        if (p && p[3] > 0.4) {
          rgb = [p[0], p[1], p[2]];
          break;
        }
        el = el.parentElement;
      }
      if (!rgb) {
        const bodyBg = parseRGB(getComputedStyle(document.body).backgroundColor);
        rgb = bodyBg ? [bodyBg[0], bodyBg[1], bodyBg[2]] : [255, 255, 255];
      }
      setDark(relLuminance(rgb[0], rgb[1], rgb[2]) < 0.5);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(sample);
    };

    sample();
    // Re-measure as fonts/images/layout settle after first paint.
    const timers = [50, 250, 800].map((ms) => window.setTimeout(sample, ms));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      timers.forEach((t) => window.clearTimeout(t));
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  const isDark = dark;
  const textColor = isDark ? "text-sv-cream" : "text-sv-dark";
  const hoverColor = isDark ? "hover:text-white" : "hover:text-sv-indigo";
  const underline = isDark ? "after:bg-sv-cream" : "after:bg-sv-indigo";
  const ctaBg = isDark
    ? "bg-sv-dark text-white border border-white/25 hover:bg-sv-indigo hover:border-transparent"
    : "bg-sv-dark text-white hover:bg-sv-indigo";

  return (
    <>
      <div className="fixed top-4 md:top-6 left-4 right-4 md:left-8 md:right-8 z-50">
        <nav className="mx-auto max-w-[1200px] flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Sharanya Vijayan — back to home"
            onClick={() => setOpen(false)}
            className="flex items-center shrink-0 p-2 -m-2 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <Logo dark={isDark} />
          </Link>

          <ul className="hidden sm:flex items-center gap-6 md:gap-8">
            {links.map(({ href, label }) => {
              const active = href === "/#work" ? pathname === "/" : pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-body text-sm font-medium transition-colors duration-300 relative
                    ${textColor} ${hoverColor}
                    after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0
                    after:transition-all after:duration-200 hover:after:w-full ${underline}
                    ${active ? "after:w-full opacity-100" : "opacity-70"}
                  `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={`font-body text-xs md:text-sm font-semibold px-4 md:px-5 py-2 rounded-full transition-colors duration-300 whitespace-nowrap ${ctaBg}`}
            >
              Get in touch
            </Link>

            <button
              type="button"
              className={`sm:hidden relative flex h-11 w-11 items-center justify-center rounded-full ${textColor}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="flex flex-col items-center justify-center gap-[5px]" aria-hidden>
                <span
                  className={`block h-[1.5px] w-5 bg-current transition-transform duration-300 ${
                    open ? "translate-y-[3.25px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[3.25px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-nav"
        inert={!open ? true : undefined}
        aria-hidden={!open}
        className={`sm:hidden fixed inset-0 z-40 flex flex-col justify-center px-8 pt-28 pb-12 transition-[opacity,visibility] duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{
          background: isDark
            ? "#191919"
            : "#FFFFFF radial-gradient(rgba(25, 25, 25, 0.11) 1.5px, transparent 1.5px) 0 0 / 26px 26px",
        }}
      >
        <ul className="flex flex-col gap-1">
          {links.map(({ href, label }) => {
            const active = href === "/#work" ? pathname === "/" : pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`font-body text-[32px] leading-tight font-medium py-3 block transition-colors duration-200 ${
                    isDark ? "text-sv-cream hover:text-white" : "text-sv-dark hover:text-sv-indigo"
                  } ${active ? "opacity-100" : "opacity-70"}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
