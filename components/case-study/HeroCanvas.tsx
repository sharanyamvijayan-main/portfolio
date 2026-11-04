import type { CSSProperties, ReactNode } from "react";
import { HeroLoop } from "./HeroLoop";

/**
 * Full-bleed AbbVie hero banner built against a fixed w×h Figma frame.
 *
 * From md up the children lay out at the real width, exactly as before. Below
 * md the mockup cards (which mix percentage placement with fixed px type and
 * padding) would squash and pile up, so instead the whole frame is laid out at
 * its design size and scaled down as one piece, like an image. Phones also get
 * a band of the hero background on top so the floating nav pill doesn't cover
 * the artwork.
 *
 * The banner animates (the .hb rules in globals.css) and HeroLoop replays it
 * when you scroll back to it, looping its details while it stays on screen.
 */
export function HeroCanvas({
  w,
  h,
  background,
  children,
}: {
  w: number;
  h: number;
  background: string;
  children: ReactNode;
}) {
  return (
    <div data-parallax className="relative w-full overflow-hidden pt-[72px] md:pt-0" style={{ background }}>
      <div className="relative w-full" style={{ aspectRatio: `${w} / ${h}`, containerType: "inline-size" }}>
        <HeroLoop
          className="hb absolute left-0 top-0 origin-top-left w-(--w) h-(--h) [transform:scale(tan(atan2(100cqw,var(--w))))] md:w-full md:h-full md:[transform:none]"
          style={{ "--w": `${w}px`, "--h": `${h}px` } as CSSProperties}
        >
          {children}
        </HeroLoop>
      </div>
    </div>
  );
}
