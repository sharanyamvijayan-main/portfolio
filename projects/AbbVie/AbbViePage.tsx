import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Newsreader, Roboto, Fira_Code } from "next/font/google";
import { CaseStudyNav } from "./CaseStudyNav";
import Reveal from "@/components/Reveal";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira-code",
  display: "swap",
});

const NR = "var(--font-newsreader)";
const RB = "var(--font-roboto)";
const FC = "var(--font-fira-code)";

// ─── Palette, sampled straight from the Figma file ─────────────────────────
const BLUE = "#0066F5";       // Discover · Celebration of Technology
const PURPLE = "#860F8C";     // Define
const GREEN = "#579869";      // Develop
const ORANGE = "#F58B18";     // Deliver
const VIOLET = "#6E4BF5";     // "where AI let me move"
const LAVENDER = "#7455AD";   // ARC
const TEAL = "#0B6E9C";       // AI Learning Hub
const INK = "#26262A";
const BODY = "#4A4A46";
const META = "#636363";
const PAGE_BG = "#FFFFFF";

const eyebrowStyle = {
  fontFamily: RB,
  fontWeight: 500,
  fontSize: 10,
  letterSpacing: "0.16em",
} as const;

function Eyebrow({ children, color = BLUE }: { children: string; color?: string }) {
  return (
    <p className="uppercase mb-3" style={{ ...eyebrowStyle, color }}>
      {children}
    </p>
  );
}

// ─── Hero chrome mockups ────────────────────────────────────────────────
// Hand-built from the exact Figma node data rather than exported images —
// each box uses a container-query width so its own text/dot sizing (in cqw)
// scales in lockstep with the box itself at any viewport width. Absolute
// children inside each box are positioned as percentages of that same box.

function ChromeBox({
  leftPct, topPct, widthPct, style, children,
}: {
  leftPct: number; topPct: number; widthPct: number;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      className="absolute"
      style={{ left: `${leftPct}%`, top: `${topPct}%`, width: `${widthPct}%`, containerType: "inline-size" }}
    >
      <div className="relative w-full" style={style}>
        {children}
      </div>
    </div>
  );
}

function ClaudeCodeTerminal() {
  const W = 459.88, H = 231.19;
  const pct = (v: number, basis: number) => `${(v / basis) * 100}%`;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  return (
    <ChromeBox
      leftPct={48.0556} topPct={12.8866} widthPct={31.9361}
      style={{
        aspectRatio: `${W} / ${H}`,
        background: "#0B1327",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0px 24px 52px 0px rgba(0,0,23,0.34)",
        borderRadius: 14,
        overflow: "hidden",
      }}
    >
      <div className="absolute" style={{ left: pct(6.68, W), top: 0, width: pct(453.2, W), height: pct(57.32, H), background: "rgba(255,255,255,0.05)" }} />
      <span className="absolute rounded-full" style={{ left: pct(25.26, W), top: pct(16.18, H), width: pct(9.34, W), height: pct(9.34, H), background: "#FF5F57" }} />
      <span className="absolute rounded-full" style={{ left: pct(40.25, W), top: pct(16.76, H), width: pct(9.34, W), height: pct(9.34, H), background: "#FEBC2E" }} />
      <span className="absolute rounded-full" style={{ left: pct(55.24, W), top: pct(17.33, H), width: pct(9.34, W), height: pct(9.34, H), background: "#28C840" }} />
      <span className="absolute whitespace-nowrap" style={{ left: pct(79.09, W), top: pct(16.75, H), fontFamily: FC, fontWeight: 500, fontSize: fs(11), color: "#8FA3C8" }}>claude code</span>
      <span className="absolute whitespace-nowrap" style={{ left: pct(314.91, W), top: pct(26.81, H), fontFamily: FC, fontWeight: 400, fontSize: fs(10), color: "#4E6693" }}>unity · design-system</span>

      <span className="absolute" style={{ left: pct(23.44, W), top: pct(56.65, H), fontFamily: FC, fontWeight: 500, fontSize: fs(12), color: "#5EEAD4" }}>&rsaquo;</span>
      <span className="absolute whitespace-nowrap" style={{ left: pct(39.43, W), top: pct(57.26, H), fontFamily: FC, fontWeight: 400, fontSize: fs(12), color: "#E6EDFA" }}>audit the hub IA — 80 pages</span>

      <span className="absolute whitespace-nowrap" style={{ left: pct(38.43, W), top: pct(83.25, H), fontFamily: FC, fontWeight: 400, fontSize: fs(12), color: "#8FA3C8" }}>reading 80 pages…  triaging</span>
      <span className="absolute whitespace-nowrap" style={{ left: pct(37.43, W), top: pct(109.23, H), fontFamily: FC, fontWeight: 400, fontSize: fs(12), color: "#8FA3C8" }}>keep 31 · revise 24 · archive 25</span>

      <span className="absolute" style={{ left: pct(20.44, W), top: pct(134.59, H), fontFamily: FC, fontWeight: 500, fontSize: fs(12), color: "#5EEAD4" }}>&rsaquo;</span>
      <span className="absolute whitespace-nowrap" style={{ left: pct(36.43, W), top: pct(135.21, H), fontFamily: FC, fontWeight: 400, fontSize: fs(12), color: "#E6EDFA" }}>compare 3 process shapes</span>

      <span className="absolute" style={{ left: pct(35.43, W), top: pct(162.19, H), width: pct(7.57, W), height: pct(15.26, H), background: "rgba(94,234,212,0.9)" }} />
      <span className="absolute" style={{ left: pct(19.45, W), top: pct(160.57, H), fontFamily: FC, fontWeight: 500, fontSize: fs(12), color: "#5EEAD4" }}>&rsaquo;</span>
    </ChromeBox>
  );
}

function FigmaMcpStatus() {
  const W = 326.16, H = 119.39;
  const pct = (v: number, basis: number) => `${(v / basis) * 100}%`;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  return (
    <ChromeBox
      leftPct={67.2222} topPct={41.9244} widthPct={22.65}
      style={{
        aspectRatio: `${W} / ${H}`,
        background: "#FFFFFF",
        boxShadow: "0px 18px 40px 0px rgba(0,0,23,0.26)",
        borderRadius: 14,
        overflow: "hidden",
      }}
    >
      <span className="absolute rounded-full" style={{ left: pct(23.03, W), top: pct(37.21, H), width: pct(8.33, W), height: pct(8.33, H), background: "#12A16E" }} />
      <span className="absolute rounded-full" style={{ left: pct(17.82, W), top: pct(32, H), width: pct(18.74, W), height: pct(18.74, H), border: "1.5px solid rgba(18,161,110,0.3)" }} />
      <span className="absolute uppercase whitespace-nowrap" style={{ left: pct(44.92, W), top: pct(29.81, H), fontFamily: RB, fontWeight: 500, fontSize: fs(12), letterSpacing: "0.1083em", color: "#12A16E" }}>MCP CONNECTED</span>
      <span className="absolute whitespace-nowrap" style={{ left: pct(23.99, W), top: pct(55.54, H), fontFamily: RB, fontWeight: 500, fontSize: fs(17), color: "#1C1C1A" }}>Figma &nbsp;⇄&nbsp; code</span>
      <span className="absolute whitespace-nowrap" style={{ left: pct(25.16, W), top: pct(80.2, H), fontFamily: FC, fontWeight: 400, fontSize: fs(10), color: "#8A8A85" }}>design ↔ implementation, one loop</span>
    </ChromeBox>
  );
}

function FigmaMakeChip() {
  const W = 227.3, H = 61.5;
  const pct = (v: number, basis: number) => `${(v / basis) * 100}%`;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  return (
    <ChromeBox
      leftPct={50.9722} topPct={58.2474} widthPct={15.7847}
      style={{
        aspectRatio: `${W} / ${H}`,
        background: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.26)",
        borderRadius: 28,
        overflow: "hidden",
      }}
    >
      <span className="absolute" style={{ left: pct(20.46, W), top: pct(18.48, H), fontFamily: RB, fontWeight: 500, fontSize: fs(16), color: "#00B4F5" }}>✦</span>
      <span className="absolute whitespace-nowrap" style={{ left: pct(44.65, W), top: pct(14.07, H), fontFamily: RB, fontWeight: 500, fontSize: fs(14), color: "#FFFFFF" }}>Figma Make</span>
      <span className="absolute whitespace-nowrap" style={{ left: pct(44.26, W), top: pct(33.07, H), fontFamily: FC, fontWeight: 400, fontSize: fs(10), color: "rgba(255,255,255,0.6)" }}>first pass, 4 min</span>
    </ChromeBox>
  );
}

function Toast() {
  const W = 405.23, H = 81.04;
  const pct = (v: number, basis: number) => `${(v / basis) * 100}%`;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  return (
    <ChromeBox
      leftPct={64.375} topPct={70.9622} widthPct={28.1410}
      style={{
        aspectRatio: `${W} / ${H}`,
        background: "rgba(4,16,46,0.62)",
        border: "1px solid rgba(255,255,255,0.16)",
        boxShadow: "0px 14px 32px 0px rgba(0,0,23,0.24)",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <span className="absolute rounded-full flex items-center justify-center" style={{ left: pct(18.45, W), top: pct(26.31, H), width: pct(22.38, W), height: pct(22.38, H), background: "rgba(18,161,110,0.9)" }}>
        <span style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(11), color: "#FFFFFF" }}>✓</span>
      </span>
      <span className="absolute uppercase whitespace-nowrap" style={{ left: pct(50.73, W), top: pct(20.87, H), fontFamily: RB, fontWeight: 500, fontSize: fs(10), letterSpacing: "0.14em", color: "#5EEAD4" }}>DESIGN SYSTEM</span>
      <span className="absolute" style={{ left: pct(50.38, W), top: pct(38.87, H), width: pct(340, W), fontFamily: RB, fontWeight: 400, fontSize: fs(12), color: "rgba(255,255,255,0.82)" }}>Reported a build-breaking bug in the shared template</span>
    </ChromeBox>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────
// Every hero visual below is percentage-positioned against the Figma hero's
// own 1440×582 basis, so it scales proportionally at any viewport width —
// same technique as the intro collage in Nouri's case study.
function Hero() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "1440 / 582",
        background: "linear-gradient(120deg, rgba(7,29,73,1) 0%, rgba(19,42,107,1) 74%)",
      }}
    >
      {/* Glows */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "61.875%", top: "-75.086%", width: "57.292%", height: "141.753%",
          background: "radial-gradient(circle at 50% 50%, rgba(0, 102, 245, 1) 0%, rgba(116, 85, 173, 0) 100%)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "-25.417%", top: "-66.495%", width: "66.458%", height: "164.433%",
          background: "radial-gradient(circle at 50% 50%, rgba(0, 102, 245, 0.5) 0%, rgba(0, 102, 245, 0) 100%)",
        }}
      />

      {/* Logo */}
      <div className="absolute" style={{ left: "9.375%", top: "46.392%", width: "23.681%" }}>
        <Image src="/images/abbvie/abbvie-logo.svg" alt="AbbVie" width={341} height={61} className="w-full h-auto" priority />
      </div>

      {/* Chrome mockups — hand-built from exact Figma coordinates */}
      <ClaudeCodeTerminal />
      <FigmaMcpStatus />
      <FigmaMakeChip />
      <Toast />
    </div>
  );
}

// ─── Title + meta ────────────────────────────────────────────────────────
function TitleMeta() {
  return (
    <div className="max-w-[1168px] mx-auto px-6 md:px-0 pt-16 md:pt-[73px]">
      <Reveal>
        <p className="mb-5" style={{ ...eyebrowStyle, color: BLUE }}>
          ABBVIE&nbsp;&nbsp;&middot;&nbsp;&nbsp;BUSINESS TECHNOLOGY SOLUTIONS&nbsp;&nbsp;&middot;&nbsp;&nbsp;SUMMER 2026
        </p>
      </Reveal>

      <Reveal delay={90}>
        <h1
          className="leading-[1.12] mb-6"
          style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(34px, 4.3vw, 62px)", letterSpacing: "-0.0129em", color: INK }}
        >
          I came in with one design process.
          <br />
          <span style={{ color: BLUE }}>I left with several.</span>
        </h1>
      </Reveal>

      <Reveal delay={170}>
        <p
          className="mb-9 max-w-2xl"
          style={{ fontFamily: NR, fontStyle: "italic", fontWeight: 400, fontSize: 22, lineHeight: "1.5em", color: BODY }}
        >
          11 weeks at AbbVie, four projects, and a summer spent learning where AI fits into how I design.
        </p>
      </Reveal>

      <div className="h-px w-full mb-9" style={{ background: "rgba(38,38,42,0.14)" }} />

      <div className="flex flex-wrap gap-x-16 gap-y-8">
        <div style={{ width: 258 }}>
          <p className="mb-2.5" style={{ ...eyebrowStyle, color: BLUE }}>TIMELINE</p>
          <p style={{ fontFamily: RB, fontWeight: 400, fontSize: 13, lineHeight: "1.58em", color: META }}>Summer 2026</p>
        </div>
        <div style={{ width: 258 }}>
          <p className="mb-2.5" style={{ ...eyebrowStyle, color: BLUE }}>ROLE</p>
          <p style={{ fontFamily: RB, fontWeight: 400, fontSize: 13, lineHeight: "1.58em", color: META }}>UX/UI Design Intern</p>
          <p style={{ fontFamily: RB, fontWeight: 400, fontSize: 13, lineHeight: "1.58em", color: META }}>Business Technology Solutions</p>
        </div>
        <div style={{ width: 258 }}>
          <p className="mb-2.5" style={{ ...eyebrowStyle, color: BLUE }}>TOOLS</p>
          <p style={{ fontFamily: RB, fontWeight: 400, fontSize: 13, lineHeight: "1.58em", color: META }}>Claude Code &middot; Figma MCP</p>
          <p style={{ fontFamily: RB, fontWeight: 400, fontSize: 13, lineHeight: "1.58em", color: META }}>Figma &middot; Figma Make</p>
          <p style={{ fontFamily: RB, fontWeight: 400, fontSize: 13, lineHeight: "1.58em", color: META }}>React + TypeScript</p>
        </div>
      </div>
    </div>
  );
}

// ─── Jump to a case study ───────────────────────────────────────────────
const jumpChips = [
  { href: "#proj-celebration", label: "Celebration of Technology", bg: BLUE },
  { href: "#proj-arc", label: "ARC", bg: LAVENDER },
  { href: "#proj-ai-hub", label: "AI Learning Hub", bg: TEAL },
];

function JumpBar() {
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-2xl px-5 py-4"
      style={{ background: "#FFFFFF", border: "1px solid #E4E4DE", boxShadow: "0px 3px 12px 0px rgba(38,38,42,0.09)" }}
    >
      <div className="flex items-center gap-2.5 flex-shrink-0">
        <div className="flex flex-col gap-[3px]">
          <span className="block rounded-full" style={{ width: 15, height: 1.5, background: "rgba(38,38,42,0.8)" }} />
          <span className="block rounded-full" style={{ width: 15, height: 1.5, background: "rgba(38,38,42,0.8)" }} />
          <span className="block rounded-full" style={{ width: 10, height: 1.5, background: "rgba(38,38,42,0.8)" }} />
        </div>
        <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 13, color: INK }}>Jump to a case study</span>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 flex-1">
        {jumpChips.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="flex-1 min-w-fit flex items-center justify-between gap-5 rounded-full px-4 py-3 transition-opacity hover:opacity-85"
            style={{ background: c.bg }}
          >
            <span className="flex items-center gap-2">
              <span className="rounded-full flex-shrink-0" style={{ width: 6, height: 6, background: "rgba(255,255,255,0.9)" }} />
              <span className="whitespace-nowrap" style={{ fontFamily: RB, fontWeight: 500, fontSize: 13, color: "rgba(255,255,255,0.95)" }}>{c.label}</span>
            </span>
            <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 13, color: "rgba(255,255,255,0.95)" }}>&rarr;</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── How I Worked ────────────────────────────────────────────────────────
const phases = [
  { label: "DISCOVER", sub: "widen the problem", color: BLUE },
  { label: "DEFINE", sub: "commit to one problem", color: PURPLE },
  { label: "DEVELOP", sub: "widen the solutions", color: GREEN },
  { label: "DELIVER", sub: "commit to one solution", color: ORANGE },
];

const changeCards = [
  {
    n: "01", icon: "icon-prototype.svg", color: BLUE, bg: "rgba(0,102,245,0.05)", border: "rgba(0,102,245,0.24)", chipBg: "rgba(0,102,245,0.13)",
    title: "Prototype inside Discover",
    body: "A working POC in minutes meant I could build during discovery and use it to find better questions.",
  },
  {
    n: "02", icon: "icon-redefine.svg", color: PURPLE, bg: "rgba(134,15,140,0.05)", border: "rgba(134,15,140,0.24)", chipBg: "rgba(134,15,140,0.13)",
    title: "Redefine after building",
    body: "Going back to Define stopped being a setback. Building something is how I found out the framing was wrong.",
  },
  {
    n: "03", icon: "icon-shapes.svg", color: VIOLET, bg: "rgba(110,75,245,0.05)", border: "rgba(110,75,245,0.24)", chipBg: "rgba(110,75,245,0.13)",
    title: "Two or three shapes at once",
    body: "Instead of committing to one process up front, I ran the same problem through different sequences and compared.",
  },
];

function HowIWorked() {
  return (
    <section id="how-i-worked" className="max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24">
      <Eyebrow>HOW I WORKED</Eyebrow>
      <h2 className="mb-5" style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(28px, 3.3vw, 38px)", lineHeight: "1.26em", color: INK, maxWidth: 820 }}>
        The Double Diamond and AI
      </h2>
      <p className="leading-[1.76em] mb-11 max-w-[760px]" style={{ fontFamily: RB, fontWeight: 400, fontSize: 15, color: BODY }}>
        AbbVie utilizes the double diamond process: <strong style={{ color: BLUE, fontWeight: 400 }}>Discover</strong>,{" "}
        <strong style={{ color: PURPLE, fontWeight: 400 }}>Define</strong>,{" "}
        <strong style={{ color: GREEN, fontWeight: 400 }}>Develop</strong>,{" "}
        <strong style={{ color: ORANGE, fontWeight: 400 }}>Deliver</strong>. Having a second framework next to my own
        was useful by itself. What actually changed how I worked was AI. When a POC takes minutes instead of days, I
        could prototype during discovery to find better questions, go back and redefine after building something, and
        try two or three process shapes on the same problem instead of committing to one up front.
        <br />
        <br />
        I still do all the steps. I just stopped having to do them in one direction.
      </p>

      {/* Diagram */}
      <div className="mb-8" style={{ padding: "34px 0" }}>
        <div className="flex items-center justify-between gap-6 mb-6 flex-wrap">
          <p style={{ ...eyebrowStyle, color: "rgba(38,38,42,0.55)" }}>ABBVIE&rsquo;S DOUBLE DIAMOND</p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span style={{ width: 20, height: 0, borderTop: "1.5px solid rgba(38,38,42,0.4)", display: "block" }} />
              <span style={{ fontFamily: RB, fontSize: 11, color: BODY }}>the framework</span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ width: 20, height: 0, borderTop: `1.5px dashed ${VIOLET}`, display: "block" }} />
              <span style={{ fontFamily: RB, fontSize: 11, color: BODY }}>where AI let me move</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-y-4 mb-8">
          {phases.map((p) => (
            <div key={p.label} className="pr-6" style={{ flex: "1 1 200px" }}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="rounded-full flex-shrink-0" style={{ width: 7, height: 7, background: p.color }} />
                <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 11, letterSpacing: "0.0818em", color: p.color }}>{p.label}</span>
              </div>
              <p style={{ fontFamily: RB, fontSize: 11, color: "rgba(74,74,70,0.85)" }}>{p.sub}</p>
            </div>
          ))}
        </div>

        <Image src="/images/abbvie/double-diamond-diagram.svg" alt="Double diamond diagram showing where AI let the process move between Discover, Define, Develop, and Deliver" width={1088} height={214} className="w-full h-auto" />
      </div>

      {/* 3 change cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {changeCards.map((c) => (
          <div key={c.n} className="rounded-xl p-6 flex flex-col" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-[9px] flex items-center justify-center flex-shrink-0" style={{ width: 34, height: 34, background: c.chipBg }}>
                <img src={`/images/abbvie/${c.icon}`} alt="" width={18} height={18} />
              </div>
              <span style={{ fontFamily: FC, fontSize: 11, letterSpacing: "0.0545em", color: c.color }}>{c.n}</span>
            </div>
            <p className="mb-2.5" style={{ fontFamily: NR, fontWeight: 400, fontSize: 22, lineHeight: "1.25em", color: INK }}>{c.title}</p>
            <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.65em", color: BODY }}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Four Projects ───────────────────────────────────────────────────────
const projects = [
  {
    id: "proj-celebration", slug: "celebration-of-technology", tile: "tile-celebration.png", color: BLUE,
    label: "INTERNAL EVENT MARKETING HOMEPAGE",
    title: "Celebration of Technology",
    body: "One site for three audiences. I started toward persona pathways and ended up with a single narrative page and a sticky section nav. A design prototype, not a launched site.",
  },
  {
    id: "proj-arc", slug: "arc", tile: "tile-arc.png", color: LAVENDER,
    label: "2-DAY INTERNAL HACKATHON",
    title: "ARC — AbbVie Request Center",
    body: "Built in a two-day hackathon. Real requests arrive in bundles, so the ticket became a container for multiple items, with status tracked per item and for the whole bundle.",
  },
  {
    id: "proj-ai-hub", slug: "ai-learning-hub", tile: "tile-ai-hub.png", color: TEAL,
    label: "ENTERPRISE IA REDESIGN",
    title: "AI Learning Hub",
    body: "Around 80 pages with no hierarchy and duplicated content. Leadership asked for persona-first navigation; I recommended organizing by task and delivering personas as curated views on top. Strategy and IA deliverables, handed off.",
  },
];

function FourProjects() {
  return (
    <section id="projects" className="max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24">
      <Eyebrow>FOUR PROJECTS</Eyebrow>
      <h2 className="mb-12" style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(28px, 3.3vw, 38px)", lineHeight: "1.26em", color: INK }}>
        The four case studies.
      </h2>

      <div className="flex flex-col gap-14">
        {projects.map((p) => (
          <div key={p.id} id={p.id} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start scroll-mt-24">
            <div className="w-full md:w-[468px] flex-shrink-0 rounded-[14px] overflow-hidden">
              <Image src={`/images/abbvie/${p.tile}`} alt={p.title} width={936} height={584} className="w-full h-auto" />
            </div>
            <div className="flex-1 pt-1">
              <p className="mb-1.5" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: p.color }}>{p.label}</p>
              <p className="mb-3" style={{ fontFamily: NR, fontWeight: 400, fontSize: 30, lineHeight: "1.24em", color: INK }}>{p.title}</p>
              <p className="mb-5" style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.76em", color: BODY }}>{p.body}</p>
              <Link
                href={`/work/abbvie/${p.slug}`}
                className="inline-flex items-center rounded-full whitespace-nowrap hover:opacity-70 transition-opacity duration-200"
                style={{ fontFamily: RB, fontWeight: 500, fontSize: 11, letterSpacing: "0.1364em", color: p.color, border: `1px solid ${p.color}`, padding: "9px 20px" }}
              >
                SEE CASE STUDY &nbsp;&rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────
export default function AbbVie() {
  return (
    <main
      className={`min-h-screen ${newsreader.variable} ${roboto.variable} ${firaCode.variable}`}
      style={{ backgroundColor: PAGE_BG, fontFamily: RB }}
    >
      <CaseStudyNav accent={BLUE} />

      <Hero />
      <TitleMeta />

      <div className="max-w-[1168px] mx-auto px-6 md:px-0 mt-16 md:mt-20 mb-20 md:mb-[75px]">
        <JumpBar />
      </div>

      <div id="case-study-content" className="flex flex-col gap-20 md:gap-[75px] pb-24 md:pb-32">
        <HowIWorked />
        <FourProjects />
      </div>
    </main>
  );
}
