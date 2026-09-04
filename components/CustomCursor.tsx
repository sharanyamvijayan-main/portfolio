"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { isDarkHeroPath } from "@/lib/darkHeroPaths";

const INTERACTIVE =
  "a, button, [role='button'], [data-hover], label, input, select, textarea";

export default function CustomCursor() {
  const pathname = usePathname() || "";
  const isDark = isDarkHeroPath(pathname);
  const isAbbVie = pathname.startsWith("/work/abbvie");
  const isRemember = pathname.startsWith("/work/remember");
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    // Everything is derived from mousemove — position AND hover state — so
    // there's no reliance on mouseover/mouseout bubbling and no stuck states.
    const onMove = (e: MouseEvent) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      const t = e.target;
      const hello = t instanceof Element && !!t.closest("[data-cursor='hello']");
      const interactive = t instanceof Element && !!t.closest(INTERACTIVE);
      dot.classList.toggle("is-hello", hello);
      dot.classList.toggle("is-hovering", interactive && !hello);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      id="cursor-dot"
      aria-hidden
      className={[
        isDark ? "is-dark" : "",
        isAbbVie ? "is-abbvie" : "",
        isRemember ? "is-remember" : "",
      ]
        .join(" ")
        .trim()}
    >
      <span className="cursor-dot__label">hello!</span>
    </div>
  );
}
