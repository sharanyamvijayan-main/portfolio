import type { CSSProperties, ReactNode } from "react";

/**
 * Renders a fixed-size Figma composition and scales it to the width of its
 * container, so absolutely-positioned artwork stays pixel-faithful at any
 * viewport. The scale factor comes from container query units
 * (tan(atan2(100cqw, W)) === 100cqw / W as a plain number), so it needs no JS
 * and has no layout shift.
 */
export function ScaledCanvas({
  w,
  h,
  children,
  clip = true,
  className = "",
  style,
}: {
  w: number;
  h: number;
  children: ReactNode;
  clip?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ containerType: "inline-size", aspectRatio: `${w} / ${h}`, maxWidth: w, overflow: clip ? "hidden" : "visible", ...style }}
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

/** "01  USER PERSONAS ........ 01 / 06" + rule, shared by the numbered sections. */
export function StageHeader({ num, title, total = "06" }: { num: string; title: string; total?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex items-baseline justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap">
        <div className="content-stretch flex gap-[22px] items-baseline overflow-clip relative shrink-0">
          <p className="pr-newsreader font-normal relative shrink-0 text-[#e60023] text-[46px]">{num}</p>
          <p className="pr-roboto font-medium relative shrink-0 text-[#26262a] text-[15px] tracking-[2.4px]">{title}</p>
        </div>
        <p className="pr-roboto font-medium relative shrink-0 text-[#7a7a75] text-[11px] tracking-[1.4px]">
          {num} / {total}
        </p>
      </div>
      <div className="bg-[rgba(38,38,42,0.16)] h-[2px] relative shrink-0 w-full" />
    </div>
  );
}

/** A numbered section: stage header, then its cards, 40px apart. */
export function Section({ children }: { children: ReactNode }) {
  return <div className="content-stretch flex flex-col gap-[40px] items-start relative w-full">{children}</div>;
}

/** Small red eyebrow that heads each card ("TYPOGRAPHY", "BRAND VOICE", ...). */
export function CardHeader({ children }: { children: ReactNode }) {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full">
      <p className="[word-break:break-word] pr-roboto font-medium leading-[normal] relative shrink-0 text-[#e60023] text-[10px] tracking-[1.6px] whitespace-nowrap">
        {children}
      </p>
    </div>
  );
}
