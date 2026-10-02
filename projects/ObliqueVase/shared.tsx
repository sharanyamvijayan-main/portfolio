import type { CSSProperties, ReactNode } from "react";

export const BLUE = "#41508b";

/**
 * Renders a fixed-size Figma composition and scales it to the width of its
 * container, so absolutely-positioned artwork stays pixel-faithful at any
 * viewport. The scale factor comes from container query units
 * (tan(atan2(100cqw, W)) === 100cqw / W as a plain number), so it needs no JS
 * and has no layout shift. `maxW` lets full-bleed compositions keep growing
 * past their design width on large screens.
 */
export function ScaledCanvas({
  w,
  h,
  maxW,
  children,
  className = "",
  style,
}: {
  w: number;
  h: number;
  maxW?: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`relative mx-auto w-full overflow-hidden ${className}`}
      style={{ containerType: "inline-size", aspectRatio: `${w} / ${h}`, maxWidth: maxW ?? w, ...style }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: w,
          height: h,
          transformOrigin: "0 0",
          transform: `scale(tan(atan2(100cqw, ${w}px)))`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Centres content in the design's 1168px column, with a small side gutter on narrow screens. */
export function Contained({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className="px-[clamp(16px,2.8vw,32px)]">
      <div className={`mx-auto w-full max-w-[1168px] ${className}`}>{children}</div>
    </div>
  );
}

/** "01  RENDERS ........ 01 / 03" + rule, shared by the numbered sections. */
export function StageHeader({ num, title, total = "03" }: { num: string; title: string; total?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex items-baseline justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap">
        <div className="content-stretch flex gap-[22px] items-baseline overflow-clip relative shrink-0">
          <p className="ov-newsreader font-normal relative shrink-0 text-[#41508b] text-[46px]">{num}</p>
          <p className="ov-roboto font-medium relative shrink-0 text-[#26262a] text-[15px] tracking-[2.4px]">{title}</p>
        </div>
        <p className="ov-roboto font-medium relative shrink-0 text-[#7a7a75] text-[11px] tracking-[1.4px]">
          {num} / {total}
        </p>
      </div>
      <div className="bg-[rgba(38,38,42,0.16)] h-[2px] relative shrink-0 w-full" />
    </div>
  );
}

/** A numbered section: stage header (in the 1168 column), then its content 40px below. */
export function Section({ num, title, children }: { num: string; title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-[40px] w-full">
      <Contained>
        <StageHeader num={num} title={title} />
      </Contained>
      {children}
    </div>
  );
}
