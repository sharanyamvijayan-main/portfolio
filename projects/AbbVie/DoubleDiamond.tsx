import Image from "next/image";

// The double diamond diagram, with its two "AI let me loop back" arrows live:
// the dashes flow endlessly along each curve toward its arrowhead, and the
// heads nudge upward, so the loop back to Discover / Define reads as motion.
// The static parts (diamonds, dots, labels) are the base image; the arrows are
// drawn on top in the same 1088×214 coordinate space. CSS: .dd-* in globals.css
// (still under reduced motion).
const ARROWS = [
  { curve: "M660 118C630 170 424 180 424 136", head: "M424 126L419 135H429L424 126Z", delay: "0s" },
  { curve: "M762 100C740 198 150 210 150 134", head: "M150 124L145 133H155L150 124Z", delay: "-0.6s" },
];

export default function DoubleDiamond() {
  return (
    <div className="relative">
      <Image
        src="/images/abbvie/double-diamond-base.svg"
        alt="Double diamond diagram showing where AI let the process move between Discover, Define, Develop, and Deliver"
        width={1088}
        height={214}
        className="w-full h-auto"
      />
      <svg viewBox="0 0 1088 214" className="absolute inset-0 w-full h-full overflow-visible" fill="none" aria-hidden>
        {ARROWS.map((a) => (
          <g key={a.curve}>
            <path d={a.curve} className="dd-flow" stroke="#6E4BF5" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="4 4" />
            <path d={a.head} className="dd-head" fill="#6E4BF5" style={{ animationDelay: a.delay }} />
          </g>
        ))}
      </svg>
    </div>
  );
}
