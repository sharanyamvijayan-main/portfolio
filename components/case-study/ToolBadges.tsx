import type { CSSProperties } from "react";
import { toolByName } from "@/components/tools";

type ToolRef = string | { name: string; label: string };

// The "Tools" row in every case-study header: each tool as its app logo in a
// brand-coloured circle (the same look as the homepage orbit), with its name
// in a tooltip on hover/focus and for screen readers. `label` overrides the
// shown name, e.g. "Figma · Figma MCP". `tone="dark"` puts the logos on light
// discs so dark marks (Miro, GitHub) stay visible on dark pages.
// CSS: .tool-badge* in globals.css.
export default function ToolBadges({
  tools,
  tone = "light",
  size = 36,
}: {
  tools: ToolRef[];
  tone?: "light" | "dark";
  size?: number;
}) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${tone === "dark" ? "tool-badges--dark" : ""}`} aria-label="Tools">
      {tools.map((ref) => {
        const name = typeof ref === "string" ? ref : ref.name;
        const label = typeof ref === "string" ? ref : ref.label;
        const t = toolByName(name);
        return (
          <li key={name} className="tool-badge relative" tabIndex={0}>
            <span
              className="flex items-center justify-center rounded-full border-[1.5px] transition-transform duration-200"
              style={
                {
                  width: size,
                  height: size,
                  borderColor: `${t.color}99`,
                  background: tone === "dark" ? "rgba(255,255,255,0.94)" : `${t.color}14`,
                } as CSSProperties
              }
            >
              <span className="inline-flex" style={{ scale: (size * 0.5) / 26 }}>
                {t.icon}
              </span>
            </span>
            <span className="sr-only">{label}</span>
            <span aria-hidden className="tool-badge__tip">
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
