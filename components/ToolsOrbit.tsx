import type { CSSProperties } from "react";
import { TOOLS } from "./tools";
import DraggableTool from "./home/DraggableTool";

// Homepage "Tools I design with": the tools I design and build with (from the
// resume's skills and experience) orbiting the heading on two rings that turn
// in opposite directions. Each tool counter-rotates so its logo and name stay
// upright. Hovering pauses the orbit; any tool can be grabbed and flung, and
// it springs back into its ring. Reduced motion holds it still.
//
// Geometry is in container units (cqw) of the square stage, so the whole
// orbit scales down to fit a phone. See .orbit-* in globals.css.

// Inner ring gets the first six, outer ring the rest.
const INNER = TOOLS.slice(0, 6);
const OUTER = TOOLS.slice(6);

function Ring({ tools, radius, reverse }: { tools: typeof TOOLS; radius: number; reverse?: boolean }) {
  return (
    <ul className={`orbit-ring ${reverse ? "orbit-ring--reverse" : ""}`} style={{ "--r": `${radius}cqw` } as CSSProperties}>
      {tools.map((t, i) => (
        <li key={t.name} className="orbit-slot" style={{ "--a": `${(360 / tools.length) * i}deg` } as CSSProperties}>
          <div className="orbit-upright">
            <DraggableTool>
              <span
                className="flex items-center justify-center rounded-full border-[1.5px] w-[clamp(32px,8cqw,56px)] h-[clamp(32px,8cqw,56px)]"
                // Brand-coloured ring over a faint wash of the same colour.
                style={{ borderColor: `${t.color}99`, background: `${t.color}14`, boxShadow: `0 6px 18px ${t.color}22` }}
              >
                {t.icon}
              </span>
              <span className="font-body font-medium whitespace-nowrap text-sv-dark/70 text-[clamp(8px,1.8cqw,12px)] select-none">{t.name}</span>
            </DraggableTool>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function ToolsOrbit() {
  return (
    <section aria-label="Tools I design with" className="px-4 md:px-10 py-12 md:py-16 overflow-x-clip">
      <div className="orbit-stage relative mx-auto aspect-square w-full max-w-[720px]">
        {/* Faint ring tracks */}
        <span aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sv-dark/15" style={{ width: "52cqw", height: "52cqw" }} />
        <span aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sv-dark/10" style={{ width: "80cqw", height: "80cqw" }} />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[38cqw]">
          <h2
            className="text-sv-dark leading-[1.1]"
            style={{ fontFamily: "var(--font-newsreader-hero)", fontWeight: 400, fontSize: "clamp(15px, 5.2cqw, 40px)", letterSpacing: "-0.01em" }}
          >
            Tools I<br />
            design with
          </h2>
          <p className="mt-2 font-body text-sv-dark/45 tracking-widest uppercase text-[clamp(7px,1.5cqw,11px)]">
            {`${TOOLS.length} tools · design to build`}
          </p>
        </div>

        <Ring tools={INNER} radius={26} />
        <Ring tools={OUTER} radius={40} reverse />
      </div>
    </section>
  );
}
