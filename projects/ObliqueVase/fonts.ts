import { Jura, Krona_One, Newsreader, Roboto } from "next/font/google";

// Type system from the Oblique Vase Figma file, all used as drawn:
// Krona One for the wordmark / closing line, Jura for the tagline,
// Newsreader + Roboto for the case-study body (same as Arco).
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-ov-roboto", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], weight: ["400"], variable: "--font-ov-newsreader", display: "swap" });
const krona = Krona_One({ subsets: ["latin"], weight: ["400"], variable: "--font-ov-krona", display: "swap" });
const jura = Jura({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-ov-jura", display: "swap" });

export const ovFonts = [roboto, newsreader, krona, jura].map((f) => f.variable).join(" ");
