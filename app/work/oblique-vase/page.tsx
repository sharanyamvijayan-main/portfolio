import Link from "next/link";
import { Newsreader, Roboto } from "next/font/google";
import Reveal from "@/components/Reveal";

// Match the AbbVie case-study type system — Newsreader for the headline,
// Roboto for the eyebrow / body / link.
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

export default function ObliqueVase() {
  return (
    <main
      className={`min-h-screen ${newsreader.variable} ${roboto.variable}`}
      style={{ backgroundColor: "#031508" }}
    >
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <Reveal>
          <p
            className="uppercase mb-6"
            style={{ fontFamily: "var(--font-roboto)", fontWeight: 500, fontSize: 11, letterSpacing: "0.16em", color: "rgba(255,255,255,0.35)" }}
          >
            Case Study
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h1
            className="text-white mb-7"
            style={{ fontFamily: "var(--font-newsreader)", fontWeight: 400, fontSize: "clamp(48px, 10vw, 128px)", lineHeight: "1.05em", letterSpacing: "-0.02em" }}
          >
            Oblique
            <br />
            Vase
          </h1>
        </Reveal>
        <Reveal delay={170} className="flex flex-col items-center">
          <div className="h-[3px] w-12 rounded-full bg-sv-green mb-7" />
          <p
            className="max-w-sm mb-10"
            style={{ fontFamily: "var(--font-roboto)", fontSize: 15, lineHeight: "1.6em", color: "rgba(255,255,255,0.45)" }}
          >
            Case study coming soon — check back later.
          </p>
        </Reveal>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors duration-200 hover:bg-white/5"
          style={{ fontFamily: "var(--font-roboto)", fontSize: 14, color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.2)" }}
        >
          ← Back to work
        </Link>
      </section>
    </main>
  );
}
