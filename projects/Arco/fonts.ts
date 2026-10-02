import { Newsreader, Outfit, Roboto } from "next/font/google";

// Type system from the Arco Figma file. Roboto + Newsreader are used as drawn.
// The hero wordmark is set in Nexa (a licensed face); Outfit is the closest
// open geometric sans, handled by the .ar-nexa class in globals.css.
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-ar-roboto", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], variable: "--font-ar-newsreader", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], weight: ["200", "300"], variable: "--font-ar-nexa", display: "swap" });

export const arFonts = [roboto, newsreader, outfit].map((f) => f.variable).join(" ");
