import { arRoboto as roboto, arNewsreader as newsreader, outfit } from "@/lib/fonts";

// Type system from the Arco Figma file. Roboto + Newsreader are used as drawn.
// The hero wordmark is set in Nexa (a licensed face); Outfit is the closest
// open geometric sans, handled by the .ar-nexa class in globals.css.

export const arFonts = [roboto, newsreader, outfit].map((f) => f.variable).join(" ");
