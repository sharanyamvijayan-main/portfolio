import Link from "next/link";
import { Newsreader, Fira_Code } from "next/font/google";
import { projects } from "@/lib/projects";

// Match the AbbVie case-study type system: Newsreader for headlines,
// Fira Code for the small numeric labels.
const newsreaderHero = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-newsreader-hero",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira-code",
  display: "swap",
});

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
        {/* Soft, slow-drifting colour fields */}
        <div
          className="hero-blob hero-blob-1 absolute top-[8%] right-[-4%] w-[560px] h-[560px] rounded-full pointer-events-none blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(39,8,160,0.16) 0%, transparent 70%)",
          }}
        />
        <div
          className="hero-blob hero-blob-2 absolute bottom-[4%] left-[-6%] w-[440px] h-[440px] rounded-full pointer-events-none blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(221,3,105,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="hero-blob hero-blob-3 absolute top-1/2 left-[38%] w-[380px] h-[380px] rounded-full pointer-events-none blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(9,129,74,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[980px] mx-auto w-full flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-sv-dark/10 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sv-green animate-pulse" />
            <span className="font-body text-xs tracking-widest uppercase text-sv-dark/60">
              Sharanya Vijayan &middot; Designing with curiosity + empathy
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mt-7 text-sv-dark leading-[1.15] tracking-tight animate-slide-up"
            style={{
              fontFamily: "var(--font-newsreader-hero)",
              fontWeight: 400,
              fontSize: "clamp(32px, 4.6vw, 68px)",
              animationDelay: "0.2s",
            }}
          >
            I&apos;m a product designer who turns complexity into{" "}
            <span className="text-sv-indigo">stories worth experiencing</span>.
          </h1>

          {/* Socials */}
          <div
            className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-2">
              {heroSocials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-sv-dark text-sv-cream font-body text-xs font-semibold hover:bg-sv-indigo transition-colors duration-200"
                >
                  {s.label}
                </a>
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

      {/* ── Work grid ────────────────────────────────────── */}
      <section
        id="work"
        className="px-6 md:px-10 py-20 max-w-[1400px] mx-auto"
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
          {projects.map((p, i) => {
            const CARD_ART: Record<string, { src: string; bg: string; scrim: string; ink: string; tag: "dark" | "light" | "onred"; darkInk?: boolean; pos?: string; size?: string }> = {
              abbvie: { src: "/abbvie-card.png", bg: "#12306B", scrim: "rgba(11,26,66,1)", ink: "#FFFFFF", tag: "dark" },
              remember: { src: "/remember-card.png", bg: "#EDE4DA", scrim: "rgba(235,225,214,1)", ink: "#324321", tag: "light", darkInk: true },
              nouri: { src: "/nouri-card.png", bg: "#A9BEE4", scrim: "rgba(163,185,226,1)", ink: "#1B2748", tag: "light", darkInk: true, pos: "30% 100%", size: "165%" },
              pinreal: { src: "/pinreal-card.png", bg: "#F4001F", scrim: "rgba(214,0,26,1)", ink: "#FFFFFF", tag: "onred", pos: "center bottom" },
            };
            const artwork = CARD_ART[p.slug] ?? null;
            const ink = artwork ? artwork.ink : "#FCEBDA";
            const textShadow = artwork
              ? artwork.darkInk
                ? "0 1px 12px rgba(255,255,255,0.65)"
                : "0 1px 14px rgba(0,0,0,0.45)"
              : undefined;
            return (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group relative overflow-hidden rounded-2xl flex flex-col justify-end p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: artwork ? artwork.bg : p.bg,
                backgroundImage: artwork ? `url(${artwork.src})` : undefined,
                backgroundSize: artwork?.size ?? "cover",
                backgroundPosition: artwork?.pos ?? "center",
                aspectRatio: "4/3",
              }}
            >
              {/* Bottom scrim so the text stays legible over the artwork */}
              {artwork && (
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[85%] pointer-events-none"
                  style={{
                    background: `linear-gradient(to top, ${artwork.scrim} 0%, ${artwork.scrim} 30%, transparent 100%)`,
                  }}
                />
              )}
              {/* Index number */}
              <span
                className="absolute top-7 right-8 opacity-40"
                style={{ fontFamily: "var(--font-fira-code)", fontSize: 11, letterSpacing: "0.08em", color: ink }}
              >
                0{i + 1}
              </span>

              {/* Tags */}
              <div className="relative flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-body font-semibold"
                    style={
                      artwork?.tag === "light"
                        ? { backgroundColor: "rgba(255,255,255,0.7)", color: ink, border: `1px solid ${ink}55` }
                        : artwork?.tag === "onred"
                        ? { backgroundColor: "rgba(255,255,255,0.22)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.55)" }
                        : artwork
                        ? { backgroundColor: "rgba(255,255,255,0.16)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.4)" }
                        : { backgroundColor: p.tagBg, color: p.tagColor, border: `1px solid ${p.tagColor}30` }
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                className="relative mb-1.5"
                style={{
                  fontFamily: "var(--font-newsreader-hero)",
                  fontWeight: 400,
                  color: ink,
                  fontSize: "clamp(28px, 4vw, 52px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  textShadow,
                }}
              >
                {p.title}
              </h3>
              <p
                className="relative font-body text-sm leading-relaxed"
                style={{ color: ink, opacity: artwork ? 0.85 : 0.55, textShadow }}
              >
                {p.tagline}
              </p>

              {/* Hover arrow */}
              <span
                className="absolute bottom-9 right-9 font-body text-sm opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300"
                style={{ color: ink }}
              >
                View →
              </span>
            </Link>
            );
          })}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="px-6 md:px-10 py-10 border-t border-sv-dark/10 max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="font-body text-sm text-sv-dark/40">
          © 2025 Sharanya Vijayan
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:vijayan3@illinois.edu"
            className="font-body text-sm text-sv-dark/60 hover:text-sv-indigo transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/sharanyavijayan/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-sv-dark/60 hover:text-sv-indigo transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/sharanyavijayan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-sv-dark/60 hover:text-sv-indigo transition-colors duration-200"
          >
            Behance
          </a>
        </div>
      </footer>
    </main>
  );
}
