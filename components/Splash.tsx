"use client";

import { useEffect } from "react";
import { LOGO_S_PATH, LOGO_V_PATH } from "@/components/Logo";

// Each stroke of the monogram becomes a CSS mask, so the letter is a window onto
// moving colour rather than a flat fill.
const mask = (viewBox: string, d: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"><path d="${d}"/></svg>`,
  )}")`;
const S_MASK = mask("0 0 467.3 534", LOGO_S_PATH);
const V_MASK = mask("362 0 601.2 534", LOGO_V_PATH);

// When the splash starts fading / is fully gone, in ms. Keep in step with the
// "Splash" timeline in globals.css.
const LEAVE_AT = 2900;
const DONE_AT = 3750;

// The whole thing is a CSS timeline (see "Splash" in globals.css), so it paints
// as soon as the HTML does. JS only decides when the page underneath may start
// its own entrance animations, and takes the overlay down when it's done.
// layout.tsx sets html.splash-active before first paint on the first page load
// of a session and on every browser refresh.
export default function Splash() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("splash-active")) return;

    let finished = false;
    const timers: number[] = [];

    // Any click while the splash is up skips it. Capture phase + preventDefault so
    // the click doesn't also hit whatever is hidden underneath.
    const skip = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      document.removeEventListener("click", skip, true);
      root.classList.add("splash-skip", "splash-leaving");
      timers.forEach(window.clearTimeout);
      timers.push(window.setTimeout(finish, 450));
    };
    // Stop intercepting clicks as soon as the page is revealed, so the first
    // real click on the site isn't swallowed.
    const leave = () => {
      document.removeEventListener("click", skip, true);
      root.classList.add("splash-leaving");
    };
    const finish = () => {
      if (finished) return;
      finished = true;
      document.removeEventListener("click", skip, true);
      root.classList.remove("splash-active", "splash-leaving", "splash-skip");
    };

    timers.push(window.setTimeout(leave, LEAVE_AT), window.setTimeout(finish, DONE_AT));
    document.addEventListener("click", skip, true);

    return () => {
      timers.forEach(window.clearTimeout);
      document.removeEventListener("click", skip, true);
    };
  }, []);

  return (
    <div id="sv-splash" aria-hidden="true">
      {/* The homepage's drifting colour fields, gathering in from the corners */}
      <span className="sv-splash__field sv-splash__field--indigo" />
      <span className="sv-splash__field sv-splash__field--pink" />
      <span className="sv-splash__field sv-splash__field--green" />

      {/* Opens on a soft colour blink (indigo → pink → green), which fades out to
          reveal the fields above */}
      <span className="sv-splash__blink" />

      {/* The monogram: each letter a window onto sliding indigo / pink / green */}
      <div className="sv-splash__lockup">
        <div className="sv-splash__breathe">
          <div className="sv-splash__glyph sv-splash__glyph--s" style={{ maskImage: S_MASK, WebkitMaskImage: S_MASK }} />
          <div className="sv-splash__glyph sv-splash__glyph--v" style={{ maskImage: V_MASK, WebkitMaskImage: V_MASK }} />
        </div>
      </div>
    </div>
  );
}
