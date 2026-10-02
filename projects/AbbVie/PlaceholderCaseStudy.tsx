import Link from "next/link";
import { Newsreader, Roboto } from "next/font/google";

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
const PAGE_BG = "#FFFFFF";

// Shared "not written yet" placeholder for AbbVie's three sub-case-studies.
// Each route below just supplies its own title/label/accent — swap this out
// for the real case study whenever content is ready.
export function PlaceholderCaseStudy({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: string;
}) {
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center ${newsreader.variable} ${roboto.variable}`}
      style={{ backgroundColor: PAGE_BG }}
    >
      <p
        className="uppercase mb-5"
        style={{ fontFamily: "var(--font-roboto)", fontWeight: 500, fontSize: 11, letterSpacing: "0.16em", color: accent }}
      >
        {eyebrow}
      </p>
      <h1
        className="mb-6 max-w-3xl"
        style={{ fontFamily: "var(--font-newsreader)", fontWeight: 400, fontSize: "clamp(38px, 6vw, 76px)", lineHeight: "1.1em", color: INK }}
      >
        {title}
      </h1>
      <div className="h-[3px] w-12 rounded-full mb-7" style={{ background: accent }} />
      <p className="max-w-sm mb-10" style={{ fontFamily: "var(--font-roboto)", fontSize: 15, lineHeight: "1.6em", color: BODY }}>
        Case study coming soon — check back once it&apos;s written up.
      </p>
      <Link
        href="/work/abbvie"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors duration-200 hover:bg-[rgba(38,38,42,0.05)]"
        style={{ fontFamily: "var(--font-roboto)", fontSize: 14, color: INK, border: "1px solid rgba(38,38,42,0.16)" }}
      >
        &larr; Back to AbbVie overview
      </Link>
    </main>
  );
}
