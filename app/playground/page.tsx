import Link from "next/link";
import { Newsreader, Roboto } from "next/font/google";
import Reveal from "@/components/Reveal";

// Same type system as the AbbVie case studies and the Arco / Oblique Vase
// coming-soon pages — Newsreader headline, Roboto eyebrow / body / link.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-newsreader",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

const INK = "#26262A";
const BODY = "#4A4A46";

export default function Playground() {
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center ${newsreader.variable} ${roboto.variable}`}
      style={{
        background:
          "#FFFFFF radial-gradient(rgba(25, 25, 25, 0.11) 1.5px, transparent 1.5px) 0 0 / 26px 26px",
      }}
    >
      <Reveal>
        <p
          className="uppercase mb-6"
          style={{ fontFamily: "var(--font-roboto)", fontWeight: 500, fontSize: 11, letterSpacing: "0.16em", color: "#DD0369" }}
        >
          Playground
        </p>
      </Reveal>
      <Reveal delay={90}>
        <h1
          className="mb-7"
          style={{ fontFamily: "var(--font-newsreader)", fontWeight: 400, fontSize: "clamp(48px, 9vw, 120px)", lineHeight: "1.05em", letterSpacing: "-0.02em", color: INK }}
        >
          Playground<span style={{ color: "#DD0369" }}>.</span>
        </h1>
      </Reveal>
      <Reveal delay={170} className="flex flex-col items-center">
        <div className="h-[3px] w-12 rounded-full mb-7" style={{ background: "#DD0369" }} />
        <p
          className="max-w-sm mb-10"
          style={{ fontFamily: "var(--font-roboto)", fontSize: 15, lineHeight: "1.6em", color: BODY }}
        >
          Coming soon — experiments and side quests on the way.
        </p>
      </Reveal>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors duration-200 hover:bg-[rgba(38,38,42,0.05)]"
        style={{ fontFamily: "var(--font-roboto)", fontSize: 14, color: INK, border: "1px solid rgba(38,38,42,0.16)" }}
      >
        ← Back to work
      </Link>
    </main>
  );
}
