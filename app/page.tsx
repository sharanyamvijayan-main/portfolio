import { newsreaderHero, firaCode } from "@/lib/fonts";
import { projects } from "@/lib/projects";
import { ToolsOrbit } from "@/components/ToolsOrbit";
import HeroIntro from "@/components/home/HeroIntro";
import HeroField from "@/components/home/HeroField";
import Magnetic from "@/components/Magnetic";
import ProjectCard from "@/components/home/ProjectCard";
import FollowingEyes from "@/components/home/FollowingEyes";
import RollingText from "@/components/RollingText";

// Match the AbbVie case-study type system: Newsreader for headlines,
// Fira Code for the small numeric labels.

const heroSocials = [
  {
    name: "LinkedIn",
    label: "in",
    href: "https://www.linkedin.com/in/sharanyavijayan/",
  },
  {
    name: "Behance",
    label: "Bē",
    href: "https://www.behance.net/sharanyavijayan",
  },
];

export default function Home() {
  return (
    <main
      className={`min-h-screen ${newsreaderHero.variable} ${firaCode.variable}`}
      style={{
        background:
          "#FFFFFF radial-gradient(rgba(25, 25, 25, 0.11) 1.5px, transparent 1.5px) 0 0 / 26px 26px",
      }}
    >
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 md:px-10 pb-16 pt-36 overflow-hidden">
        {/* Soft colour fields: slow drift, and they follow the cursor */}
        <HeroField />

        <div className="relative max-w-[980px] mx-auto w-full flex flex-col items-center text-center">
          {/* Pill + headline intro */}
          <HeroIntro />

          {/* Socials */}
          <div
            className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-2">
              {heroSocials.map((s) => (
                <Magnetic key={s.name} strength={0.4}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-sv-dark text-sv-cream font-body text-sm font-semibold hover:bg-sv-indigo transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="mt-16 flex flex-col items-center gap-3 animate-fade-in"
          style={{ animationDelay: "0.75s" }}
        >
          <span className="font-body text-xs text-sv-dark/40 tracking-widest uppercase">
            Scroll to explore
          </span>
          <svg
            className="scroll-cue text-sv-dark/45"
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 2v16M3 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ── Tools ────────────────────────────────────────── */}
      <ToolsOrbit />

      {/* ── Work grid ────────────────────────────────────── */}
      <section
        id="work"
        className="px-6 md:px-10 py-20 max-w-[1400px] mx-auto overflow-x-clip"
      >
        <div className="flex items-center gap-6 mb-12">
          <h2
            className="text-sv-dark whitespace-nowrap"
            style={{ fontFamily: "var(--font-newsreader-hero)", fontWeight: 400, fontSize: "clamp(24px, 2.4vw, 32px)", letterSpacing: "-0.01em" }}
          >
            Selected Work
          </h2>
          <div className="flex-1 h-px bg-sv-dark/15" />
          <span
            className="tracking-widest uppercase whitespace-nowrap text-sv-dark/40"
            style={{ fontFamily: "var(--font-fira-code)", fontSize: 11 }}
          >
            2024 – 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <div className="px-6 md:px-10 pb-10 max-w-[1400px] mx-auto flex items-center gap-4">
        <FollowingEyes />
        <p
          className="text-sv-dark"
          style={{ fontFamily: "var(--font-newsreader-hero)", fontWeight: 400, fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-0.01em" }}
        >
          Thanks for stopping by.
        </p>
      </div>

      <footer className="px-6 md:px-10 pt-10 pb-24 md:pb-28 border-t border-sv-dark/10 max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="font-body text-sm text-sv-dark/40">
          © 2025 Sharanya Vijayan
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:vijayan3@illinois.edu"
            className="font-body text-sm text-sv-dark/60 hover:text-sv-indigo transition-colors duration-200"
          >
            <RollingText text="Email" />
          </a>
          <a
            href="https://www.linkedin.com/in/sharanyavijayan/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-sv-dark/60 hover:text-sv-indigo transition-colors duration-200"
          >
            <RollingText text="LinkedIn" />
          </a>
          <a
            href="https://www.behance.net/sharanyavijayan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-sv-dark/60 hover:text-sv-indigo transition-colors duration-200"
          >
            <RollingText text="Behance" />
          </a>
        </div>
      </footer>
    </main>
  );
}
