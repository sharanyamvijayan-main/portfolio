import { prRoboto as roboto, prNewsreader as newsreader, pacifico, palanquin, palanquinDark } from "@/lib/fonts";

// Type system from the PinReal. Figma file. Inter (the site-wide body font) is
// already loaded in app/layout.tsx; F37 Lineca and SF Pro are system/licensed
// faces, handled by the .pr-lineca / .pr-sf fallbacks in globals.css.

export const prFonts = [roboto, newsreader, pacifico, palanquin, palanquinDark].map((f) => f.variable).join(" ");
