"use client";

import { useEffect } from "react";
import { Newsreader } from "next/font/google";
import { LOGO_S_PATH, LOGO_V_PATH } from "@/components/Logo";
import { SPLASH_KEY } from "@/lib/splash";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-newsreader-splash",
  display: "swap",
});

// Circles, top of the stack first. `y` is how far each one fans out below the top.
const CIRCLES = [
  { color: "#2708A0", y: 0 },
  { color: "#FFD9B8", y: 18 },
  { color: "#09814A", y: 36 },
  { color: "#B9AEF5", y: 54 },
  { color: "#DD0369", y: 72 },
];

// One word per line; `offsets` keeps the letter-by-letter stagger running across both.
const WORDS = ["Sharanya", "Vijayan"];
const offsets = WORDS.map((_, w) => WORDS.slice(0, w).reduce((n, word) => n + word.length, 0));

// The whole thing is a CSS timeline (see "Splash" in globals.css), so it paints
// as soon as the HTML does. JS only decides when the page underneath may start
// its own entrance animations, and remembers that the splash has played.
// layout.tsx sets html.splash-active before first paint if this session hasn't
// seen it yet.
export default function Splash() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("splash-active")) return;

    let finished = false;
    const timers: number[] = [];
    const leave = () => root.classList.add("splash-leaving");
    const finish = () => {
      if (finished) return;
      finished = true;
      try {
        sessionStorage.setItem(SPLASH_KEY, "1");
      } catch {}
      root.classList.remove("splash-active", "splash-leaving", "splash-skip");
    };

    timers.push(window.setTimeout(leave, 1900), window.setTimeout(finish, 2400));

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
    document.addEventListener("click", skip, true);

    return () => {
      timers.forEach(window.clearTimeout);
      document.removeEventListener("click", skip, true);
    };
  }, []);

  return (
    <div id="sv-splash" className={newsreader.variable} aria-hidden="true">
      {/* 1 — a stack of colour discs fans out */}
      <div className="sv-splash__discs">
        {CIRCLES.map((c, i) => (
          <span
            key={c.color}
            className="sv-splash__disc"
            style={{ background: c.color, ["--y" as string]: `${c.y}px`, ["--i" as string]: CIRCLES.length - 1 - i, zIndex: CIRCLES.length - i }}
          />
        ))}
      </div>

      {/* 2 — the top disc floods the screen; the "S" lands */}
      <div className="sv-splash__layer sv-splash__iris">
        <svg className="sv-splash__glyph sv-splash__glyph--s" viewBox="0 0 467.3 534" fill="#FCEBDA">
          <path d={LOGO_S_PATH} />
        </svg>
      </div>

      {/* 3 — pink wipes up; the "V" slides in, tilted */}
      <div className="sv-splash__layer sv-splash__wipe sv-splash__pink">
        <svg className="sv-splash__glyph sv-splash__glyph--v" viewBox="362 0 601.2 534" fill="#FCEBDA">
          <path d={LOGO_V_PATH} />
        </svg>
      </div>

      {/* 4 — cream wipes up and flickers through the palette; the oversized name
          types out across two lines and the big pink dot drops */}
      <div className="sv-splash__layer sv-splash__wipe sv-splash__cream">
        <div className="sv-splash__lockup">
          {WORDS.map((word, w) => (
            <p key={word} className="sv-splash__line">
              {[...word].map((ch, i) => (
                <span key={i} className="sv-splash__char-mask">
                  <span className="sv-splash__char" style={{ ["--c" as string]: offsets[w] + i }}>
                    {ch}
                  </span>
                </span>
              ))}
              {w === WORDS.length - 1 && <span className="sv-splash__dot" />}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
