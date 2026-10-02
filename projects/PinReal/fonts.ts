import { Newsreader, Pacifico, Palanquin, Palanquin_Dark, Roboto } from "next/font/google";

// Type system from the PinReal. Figma file. Inter (the site-wide body font) is
// already loaded in app/layout.tsx; F37 Lineca and SF Pro are system/licensed
// faces, handled by the .pr-lineca / .pr-sf fallbacks in globals.css.
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-pr-roboto", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], variable: "--font-pr-newsreader", display: "swap" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400", variable: "--font-pr-pacifico", display: "swap" });
const palanquin = Palanquin({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-pr-palanquin", display: "swap" });
const palanquinDark = Palanquin_Dark({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-pr-palanquin-dark", display: "swap" });

export const prFonts = [roboto, newsreader, pacifico, palanquin, palanquinDark].map((f) => f.variable).join(" ");
