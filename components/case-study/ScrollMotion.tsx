"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll motion shared by every case study. Mount once inside the page's
 * <main>; it works off the page's existing structure, so sections need no
 * per-element wiring:
 *
 * - Every case-study section (`section[id].scroll-mt-24`, or the anchor
 *   wrappers `div[id].scroll-mt-24`) has its blocks revealed as they scroll
 *   in: a fade-up for text, a soft settle for imagery, left/right slides for
 *   two-up rows, and a one-by-one stagger for card grids. `[data-motion-group]`
 *   opts any other container in.
 * - `[data-parallax]` heroes drift slower than the page as you scroll away.
 * - A thin reading-progress line runs along the top in the page's accent.
 *
 * Each block animates once. Anything already on screen at load is left
 * alone (no flash), and prefers-reduced-motion turns all of it off.
 */
type Kind = "up" | "left" | "right" | "zoom" | "fade";

const PAIR = /(^|\s)(md|lg):(grid-cols-2|flex-row)(\s|$)/;
const GRID = /(^|\s)((sm|md|lg|xl):)?grid-cols-[3-9](\s|$)|(^|\s)flex-wrap(\s|$)/;

export default function ScrollMotion({ accent }: { accent: string }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const main = bar?.closest("main");
    if (!bar || !main) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    const heroes = reduce ? [] : Array.from(main.querySelectorAll<HTMLElement>("[data-parallax]"));

    // ── Progress line + hero parallax, both driven by scroll position ──
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
        for (const hero of heroes) {
          const h = hero.offsetHeight;
          const y = Math.min(window.scrollY, h);
          if (window.scrollY > h + 200) continue;
          for (const child of Array.from(hero.children) as HTMLElement[]) {
            child.style.transform = y > 0 ? `translate3d(0, ${y * 0.22}px, 0)` : "";
            child.style.opacity = y > 0 ? String(1 - (y / h) * 0.35) : "";
          }
        }
      });
    };
    for (const hero of heroes) hero.style.overflow = "hidden";
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Slides from the side must never widen the page; clip (unlike hidden)
    // doesn't create a scroll container, so sticky children keep working.
    const prevOverflowX = main.style.overflowX;
    main.style.overflowX = "clip";

    const cleanupScroll = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      main.style.overflowX = prevOverflowX;
    };
    if (reduce) return cleanupScroll;

    // ── Reveals ──
    // `trigger` is what has to scroll into view: the element itself, or for a
    // [data-motion-group] the group (its cards may sit off to the side in a
    // swipeable row and never enter the viewport on their own).
    const items: { el: HTMLElement; kind: Kind; trigger: Element }[] = [];
    const add = (el: Element, kind: Kind, trigger: Element = el) => {
      if (!(el instanceof HTMLElement)) return;
      if (el.offsetHeight === 0 || el.closest(".sv-reveal")) return;
      if (el.querySelector(".sticky, .sv-reveal")) return;
      // Don't fight an element's own transform; fade it instead.
      if (kind !== "fade" && getComputedStyle(el).transform !== "none") kind = "fade";
      if (narrow && (kind === "left" || kind === "right")) kind = "up";
      items.push({ el, kind, trigger });
    };

    const groups = main.querySelectorAll(
      "section[id].scroll-mt-24, div[id].scroll-mt-24, [data-motion-group]"
    );
    for (let group of Array.from(groups)) {
      if (group.hasAttribute("data-motion-group")) {
        for (const child of Array.from(group.children)) add(child, "up", group);
        continue;
      }
      // Anchor wrappers hold one component; step down to its blocks.
      while (group.children.length === 1) group = group.children[0];
      for (const block of Array.from(group.children)) {
        const cls = block.getAttribute("class") ?? "";
        const kids = Array.from(block.children);
        const text = (block.textContent ?? "").trim().length;
        if (PAIR.test(cls) && kids.length === 2) {
          add(kids[0], "left");
          add(kids[1], "right");
        } else if (GRID.test(cls) && kids.length >= 3) {
          for (const k of kids) add(k, "up");
        } else if (/^(IMG|PICTURE|FIGURE|VIDEO)$/.test(block.tagName) || (block.querySelector("img, video, canvas") && text < 80)) {
          add(block, "zoom");
        } else {
          add(block, "up");
        }
      }
    }

    // Only hide what's still below the fold; the rest is already being read.
    const pending = items.filter(({ trigger }) => trigger.getBoundingClientRect().top > window.innerHeight * 0.92);
    const byTrigger = new Map<Element, HTMLElement[]>();
    for (const { el, kind, trigger } of pending) {
      el.classList.add("m-anim", `m-${kind}`, "m-hide");
      byTrigger.set(trigger, [...(byTrigger.get(trigger) ?? []), el]);
    }

    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        // Blocks that arrive together come in one after another.
        let n = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          for (const el of byTrigger.get(entry.target) ?? []) {
            const delay = Math.min(n++, 4) * 90;
            el.style.transitionDelay = `${delay}ms`;
            el.classList.remove("m-hide");
            // Hand the element back untouched once it has landed.
            timers.push(
              window.setTimeout(() => {
                el.classList.remove("m-anim", "m-up", "m-left", "m-right", "m-zoom", "m-fade");
                el.style.transitionDelay = "";
              }, 1000 + delay)
            );
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );
    for (const trigger of byTrigger.keys()) io.observe(trigger);

    return () => {
      cleanupScroll();
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      for (const { el } of pending) {
        el.classList.remove("m-anim", "m-up", "m-left", "m-right", "m-zoom", "m-fade", "m-hide");
        el.style.transitionDelay = "";
      }
    };
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden
      className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left pointer-events-none"
      style={{ background: accent, transform: "scaleX(0)" }}
    />
  );
}
