import { Newsreader } from "next/font/google";
import Reveal from "@/components/Reveal";

// Same serif used for the homepage hero, About page, and AbbVie case-study headlines.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-newsreader-hero",
  display: "swap",
});

export default function Resume() {
  return (
    <main
      className={`min-h-screen pt-32 px-6 md:px-10 pb-24 ${newsreader.variable}`}
      style={{
        background:
          "#FFFFFF radial-gradient(rgba(25, 25, 25, 0.11) 1.5px, transparent 1.5px) 0 0 / 26px 26px",
      }}
    >
      <div className="max-w-[900px] mx-auto">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <h1
            className="text-sv-dark whitespace-nowrap"
            style={{
              fontFamily: "var(--font-newsreader-hero)",
              fontWeight: 400,
              fontSize: "clamp(56px, 9vw, 128px)",
              lineHeight: 0.98,
              letterSpacing: "-0.015em",
            }}
          >
            Resume<span style={{ color: "#DD0369" }}>.</span>
          </h1>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sv-dark text-sv-cream font-body text-sm font-medium hover:bg-sv-indigo transition-colors duration-200 self-start sm:self-auto"
          >
            Download PDF ↓
          </a>
        </Reveal>

        {/* Phones can't show a PDF inline (the frame stays blank), so they get a
            card that opens it in the phone's own full-screen PDF viewer. */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden mt-4 flex items-center gap-4 rounded-2xl border border-sv-dark/10 bg-white p-5 active:bg-sv-dark/[0.03] transition-colors"
        >
          <span
            className="shrink-0 w-12 h-14 rounded-md border border-sv-dark/15 bg-sv-cream/60 flex items-end justify-center pb-1.5"
            aria-hidden="true"
          >
            <span className="font-body text-[9px] font-semibold tracking-wider text-sv-pink">PDF</span>
          </span>
          <span className="flex-1 min-w-0">
            <span className="block font-body text-sm font-semibold text-sv-dark">Sharanya Vijayan — Resume</span>
            <span className="block font-body text-xs text-sv-dark/50 mt-0.5">Opens in your phone&apos;s PDF viewer</span>
          </span>
          <span className="shrink-0 px-4 py-2 rounded-full bg-sv-indigo text-white font-body text-xs font-semibold">
            Open
          </span>
        </a>

        {/* PDF preview (tablet and up) */}
        <div className="hidden sm:block w-full aspect-[8.5/11] rounded-2xl overflow-hidden border border-sv-dark/10 bg-sv-dark/[0.02] mt-4">
          <iframe
            src="/resume.pdf#view=FitH"
            title="Sharanya Vijayan — Resume"
            className="w-full h-full"
            style={{ border: 0 }}
          />
        </div>
        <p className="hidden sm:block font-body text-xs text-sv-dark/35 mt-4">
          Trouble viewing?{" "}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-sv-dark/60 transition-colors"
          >
            Open the PDF in a new tab
          </a>
          .
        </p>
      </div>
    </main>
  );
}
