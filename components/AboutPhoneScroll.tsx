"use client";

import { useEffect, useRef } from "react";

// Phone-only About layout: the photo fills the top of the first screen, melting
// into the page under the heading, and stays pinned while the page scrolls. It
// fades and softens to a faint hint within half a screen, so the content cards
// that slide up over it stay the focus.
export default function AboutPhoneScroll({
  heading,
  children,
}: {
  heading: React.ReactNode;
  children: React.ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      // 0 at the top → 1 once you've scrolled ~70% of a screen
      const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.5)));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={root} className="relative" style={{ ["--p" as string]: 0 }}>
      {/* Pinned photo: fills the top of the screen and melts into the page */}
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-[#FFFBF6]" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-[54svh] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{
              // Framed on the face and bun (the photo is taken from above, so the
              // head is near the bottom of the frame), kept clear of the heading.
              objectPosition: "50% 96%",
              transform: "scale(1.04)",
              transformOrigin: "50% 78%",
              filter: "blur(calc(var(--p) * 8px))",
            }}
          />
        </div>
        {/* Bottom edge of the photo fades into the cream page */}
        <div
          className="absolute inset-x-0 top-[34svh] h-[20svh]"
          style={{ background: "linear-gradient(to bottom, rgba(255,251,246,0), #FFFBF6)" }}
        />
        {/* Wash that builds as you scroll, leaving only a hint of the photo */}
        <div className="absolute inset-0 bg-[#FFFBF6]" style={{ opacity: "calc(var(--p) * 0.95)" }} />
      </div>

      {/* Content that scrolls over the photo */}
      <div className="relative -mt-[100svh]">
        <div className="h-[60svh] flex flex-col justify-end px-6 pb-2">{heading}</div>
        <div className="px-4 pt-6 pb-24 space-y-4">{children}</div>
      </div>
    </div>
  );
}
