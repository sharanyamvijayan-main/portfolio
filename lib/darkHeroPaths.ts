// Case study routes whose hero (and therefore the fixed nav/cursor sitting
// on top of it) opens on a dark background. Most nested sub-pages default
// to a light background (see Nav.tsx / CustomCursor.tsx), but some — like
// AbbVie's own sub-case-studies — have a real dark hero of their own, so
// this is kept as an explicit list rather than inferred from path depth.
const DARK_HERO_PATHS = new Set([
  "/work/nouri",
  "/work/pinreal",
  "/work/arco",
  "/work/oblique-vase",
  "/work/abbvie",
  "/work/abbvie/celebration-of-technology",
  "/work/abbvie/arc",
]);

export function isDarkHeroPath(pathname: string): boolean {
  return DARK_HERO_PATHS.has(pathname);
}
