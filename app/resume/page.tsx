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

        {/* PDF preview */}
        <div className="w-full aspect-[8.5/11] rounded-2xl overflow-hidden border border-sv-dark/10 bg-sv-dark/[0.02] mt-4">
          <iframe
            src="/resume.pdf#view=FitH"
            title="Sharanya Vijayan — Resume"
            className="w-full h-full"
            style={{ border: 0 }}
          />
        </div>
        <p className="font-body text-xs text-sv-dark/35 mt-4">
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
