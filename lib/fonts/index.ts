import localFont from "next/font/local";

// Every web font on the site, self-hosted from ./files (the latin woff2 files
// Google Fonts serves for these families, variable where the family has a
// variable version, so one file covers every weight).
//
// Why not next/font/google: at build time it downloads from Google, and Google
// intermittently answers with `…/l/font?kit=…&…` file URLs instead of `.woff2`
// ones, which both Turbopack and webpack fail on ("next/font/google queries
// have exactly one entry"). That broke roughly one build in three, including a
// production deploy. Self-hosting takes Google out of the build entirely.
//
// One instance per family + CSS variable that the pages use. next/font/local
// must be called at module scope with literal options, so pages import these
// rather than calling it themselves.

// ── Newsreader ──
export const newsreader = localFont({ src: [{ path: "./files/newsreader.woff2", weight: "200 800", style: "normal" }, { path: "./files/newsreader-italic.woff2", weight: "200 800", style: "italic" }], variable: "--font-newsreader", display: "swap", adjustFontFallback: "Times New Roman" });
export const newsreaderHero = localFont({ src: [{ path: "./files/newsreader.woff2", weight: "200 800", style: "normal" }, { path: "./files/newsreader-italic.woff2", weight: "200 800", style: "italic" }], variable: "--font-newsreader-hero", display: "swap", adjustFontFallback: "Times New Roman" });
export const arNewsreader = localFont({ src: [{ path: "./files/newsreader.woff2", weight: "200 800", style: "normal" }, { path: "./files/newsreader-italic.woff2", weight: "200 800", style: "italic" }], variable: "--font-ar-newsreader", display: "swap", adjustFontFallback: "Times New Roman" });
export const ovNewsreader = localFont({ src: [{ path: "./files/newsreader.woff2", weight: "200 800", style: "normal" }, { path: "./files/newsreader-italic.woff2", weight: "200 800", style: "italic" }], variable: "--font-ov-newsreader", display: "swap", adjustFontFallback: "Times New Roman" });
export const prNewsreader = localFont({ src: [{ path: "./files/newsreader.woff2", weight: "200 800", style: "normal" }, { path: "./files/newsreader-italic.woff2", weight: "200 800", style: "italic" }], variable: "--font-pr-newsreader", display: "swap", adjustFontFallback: "Times New Roman" });

// ── Roboto ──
export const roboto = localFont({ src: [{ path: "./files/roboto.woff2", weight: "100 900", style: "normal" }], variable: "--font-roboto", display: "swap" });
export const arRoboto = localFont({ src: [{ path: "./files/roboto.woff2", weight: "100 900", style: "normal" }], variable: "--font-ar-roboto", display: "swap" });
export const ovRoboto = localFont({ src: [{ path: "./files/roboto.woff2", weight: "100 900", style: "normal" }], variable: "--font-ov-roboto", display: "swap" });
export const prRoboto = localFont({ src: [{ path: "./files/roboto.woff2", weight: "100 900", style: "normal" }], variable: "--font-pr-roboto", display: "swap" });

// ── Site-wide (layout) ──
export const syne = localFont({ src: [{ path: "./files/syne.woff2", weight: "400 800", style: "normal" }], variable: "--font-syne", display: "swap" });
export const inter = localFont({ src: [{ path: "./files/inter.woff2", weight: "100 900", style: "normal" }], variable: "--font-inter", display: "swap" });

// ── Case-study accents ──
export const firaCode = localFont({ src: [{ path: "./files/fira-code.woff2", weight: "300 700", style: "normal" }], variable: "--font-fira-code", display: "swap", adjustFontFallback: false });
export const spaceGrotesk = localFont({ src: [{ path: "./files/space-grotesk.woff2", weight: "300 700", style: "normal" }], variable: "--font-space-grotesk", display: "swap" });
// Arco's stand-in for Nexa.
export const outfit = localFont({ src: [{ path: "./files/outfit.woff2", weight: "100 900", style: "normal" }], variable: "--font-ar-nexa", display: "swap" });
export const krona = localFont({ src: [{ path: "./files/krona-one-400.woff2", weight: "400", style: "normal" }], variable: "--font-ov-krona", display: "swap" });
export const jura = localFont({ src: [{ path: "./files/jura.woff2", weight: "300 700", style: "normal" }], variable: "--font-ov-jura", display: "swap" });
export const pacifico = localFont({ src: [{ path: "./files/pacifico-400.woff2", weight: "400", style: "normal" }], variable: "--font-pr-pacifico", display: "swap" });
export const palanquin = localFont({
  src: [
    { path: "./files/palanquin-300.woff2", weight: "300", style: "normal" },
    { path: "./files/palanquin-400.woff2", weight: "400", style: "normal" },
    { path: "./files/palanquin-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-pr-palanquin",
  display: "swap",
});
export const palanquinDark = localFont({
  src: [
    { path: "./files/palanquin-dark-400.woff2", weight: "400", style: "normal" },
    { path: "./files/palanquin-dark-600.woff2", weight: "600", style: "normal" },
    { path: "./files/palanquin-dark-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-pr-palanquin-dark",
  display: "swap",
});
