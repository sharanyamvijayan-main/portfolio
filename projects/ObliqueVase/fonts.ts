import { ovRoboto as roboto, ovNewsreader as newsreader, krona, jura } from "@/lib/fonts";

// Type system from the Oblique Vase Figma file, all used as drawn:
// Krona One for the wordmark / closing line, Jura for the tagline,
// Newsreader + Roboto for the case-study body (same as Arco).

export const ovFonts = [roboto, newsreader, krona, jura].map((f) => f.variable).join(" ");
