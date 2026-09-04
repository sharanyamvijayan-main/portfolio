import Image from "next/image";

// ─── MacBook mockup (photographic silver shell, matching hero) ────────────────
export function MacBook({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: "1618 / 1028.79" }}>
      <Image
        src="/images/nouri/figma/macbook-shell.png"
        alt="MacBook Pro"
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, 80vw"
      />
      <div className="absolute overflow-hidden" style={{ left: "12.42%", top: "11.08%", width: "75.04%", height: "76.65%" }}>
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 80vw" />
      </div>
    </div>
  );
}

// ─── Feature callout pill ─────────────────────────────────────────────────────
export function FeatureTag({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex gap-3 items-start p-4 rounded-2xl" style={{ background: "rgba(66,133,244,0.32)" }}>
      <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: "#4285F4" }}>
        <span className="text-white font-bold" style={{ fontSize: "10px", letterSpacing: "-0.08em" }}>{num}</span>
      </div>
      <p className="text-sm leading-snug flex-1" style={{ color: "#F3F3F3" }}>{text}</p>
    </div>
  );
}

// ─── Problem / Solution card ──────────────────────────────────────────────────
// `compact` is used by the desktop scrollytelling sticky bar (projects/Nouri/
// ProblemSolutionsScrolly.tsx) to free up more vertical room for the laptop
// below it. The default (non-compact) sizing is unchanged for mobile.
export function ProblemCard({ text, compact }: { text: string; compact?: boolean }) {
  return (
    <div className="flex flex-col flex-1" style={{ borderTop: "2px solid #ED6A5F", paddingTop: compact ? "12px" : "16px", gap: compact ? "10px" : "14px" }}>
      <span className="uppercase" style={{ color: "#ED6A5F", fontWeight: 600, fontSize: compact ? "10px" : "11px", letterSpacing: "0.16em" }}>Problem</span>
      <p style={{ color: "rgba(243,243,243,0.75)", fontSize: compact ? "clamp(11px, 0.95vw, 14px)" : "15px", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

export function SolutionCard({ text, compact }: { text: string; compact?: boolean }) {
  return (
    <div className="flex flex-col flex-1" style={{ borderTop: "2px solid #5FD93F", paddingTop: compact ? "12px" : "16px", gap: compact ? "10px" : "14px" }}>
      <span className="uppercase" style={{ color: "#5FD93F", fontWeight: 600, fontSize: compact ? "10px" : "11px", letterSpacing: "0.16em" }}>Solution</span>
      <p style={{ color: "rgba(243,243,243,0.75)", fontSize: compact ? "clamp(11px, 0.95vw, 14px)" : "15px", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

// ─── Problem Solutions item header — "01  Calendar Plan" ─────────────────────
export function TitleBadge({ num, title, compact, color = "#ED6A5F" }: { num: string; title: string; compact?: boolean; color?: string }) {
  return (
    <div className={`flex items-baseline gap-3 ${compact ? "mb-3" : "mb-4"}`}>
      <span className="font-bold" style={{ color, fontSize: compact ? "14px" : "15px", letterSpacing: "0.04em" }}>{num}</span>
      <span className="font-bold" style={{ color: "#F3F3F3", fontSize: compact ? "clamp(16px, 1.7vw, 21px)" : "20px" }}>{title}</span>
    </div>
  );
}

// ─── Callout type + MacBook screen with pointing callouts ──────────────────────
export interface Callout { num: string; text: string; side: "left" | "right"; top: string; startY?: number; target?: [number, number]; }

// Desktop-only: MacBook mockup with floating side callouts, connector lines
// pointing at exact screen positions (shared 1400x675 coordinate space, matching
// the MacBook's own footprint so callout targets land precisely on-screen).
export function ScreenWithCallouts({ screenSrc, screenAlt, callouts }: { screenSrc: string; screenAlt: string; callouts: Callout[] }) {
  return (
    <div className="relative w-full h-full" style={{ containerType: "inline-size" }}>
      <div className="absolute" style={{ left: "12.14%", top: "0%", width: "75.78%", height: "100%" }}>
        <MacBook src={screenSrc} alt={screenAlt} />
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 675" preserveAspectRatio="none" fill="none">
        <defs>
          <marker id="ps-callout-arrow" markerWidth="4.5" markerHeight="4.5" refX="3.2" refY="2.25" orient="auto-start-reverse">
            <path d="M0,0 L4.5,2.25 L0,4.5 Z" fill="#4285F4" />
          </marker>
        </defs>
        {callouts.map((c, i) => {
          const [tx, ty] = c.target ?? [c.side === "left" ? 30 : 75, parseFloat(c.top)];
          const startX = c.side === "left" ? 266 : 1134; // inner edge of the 19%-wide callout box
          const startY = ((c.startY ?? parseFloat(c.top)) / 100) * 675;
          const targetX = (tx / 100) * 1400;
          const targetY = (ty / 100) * 675;
          return (
            <line
              key={i}
              x1={startX} y1={startY} x2={targetX} y2={targetY}
              stroke="#4285F4" strokeWidth="1.75"
              markerEnd="url(#ps-callout-arrow)"
            />
          );
        })}
      </svg>

      {callouts.map((c, i) => (
        <div key={i} className="absolute" style={{ [c.side]: 0, top: c.top, width: "19%" }}>
          <div className="flex items-start gap-2.5 rounded-xl p-3" style={{ background: "rgba(66,133,244,0.16)", border: "1px solid rgba(66,133,244,0.4)" }}>
            <span className="rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white" style={{ width: "20px", height: "20px", fontSize: "10px", letterSpacing: "-0.04em", background: "#3B6FD4" }}>{c.num}</span>
            <span className="leading-snug" style={{ fontSize: "clamp(9px, 1.15cqw, 13px)", color: "#EDF1F7" }}>{c.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
