import type { CSSProperties } from "react";

// Hover text where each letter rolls up and is replaced by a copy of itself,
// one after another (after karunnatarajan.com's rolling buttons). Drop it
// inside any link or button: hovering or keyboard-focusing that link rolls it.
// Screen readers get the plain text once; the animated letters are hidden.
// CSS: .rolling* in globals.css (static under reduced motion).
export default function RollingText({ text }: { text: string }) {
  const chars = Array.from(text);
  return (
    <span className="rolling">
      <span className="sr-only">{text}</span>
      <span className="rolling__text" aria-hidden>
        {chars.map((ch, i) => {
          const c = ch === " " ? "\u00A0" : ch;
          return (
            <span key={i} className="rolling__letter" data-ch={c} style={{ "--i": i, "--n": chars.length } as CSSProperties}>
              {c}
            </span>
          );
        })}
      </span>
    </span>
  );
}
