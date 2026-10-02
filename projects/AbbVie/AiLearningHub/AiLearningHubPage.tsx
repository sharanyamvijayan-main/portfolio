import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Newsreader, Roboto, Fira_Code, Space_Grotesk } from "next/font/google";
import { CaseStudyNav } from "./CaseStudyNav";
import Reveal from "@/components/Reveal";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira-code",
  display: "swap",
});

// Space Grotesk stands in for the giant display wordmark in the hero.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const NR = "var(--font-newsreader)";
const RB = "var(--font-roboto)";
const FC = "var(--font-fira-code)";
const DISPLAY = "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif";

// ─── Palette ────────────────────────────────────────────────────────────
const NAVY = "#0B2742";
const TEAL = "#0B6E9C";
const BLUE = "#2E6BB0";
const GREEN = "#12A16E";
const CORAL = "#E5484D";
const INK = "#26262A";
const BODY = "#7A7A75";
const BODY2 = "#6A6A64";
const META = "#636363";
const PAGE_BG = "#FFFFFF";
const DARKCARD = "#102A47";

const eyebrowStyle = { fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.16em" } as const;

function Eyebrow({ children, color = BLUE }: { children: string; color?: string }) {
  return (
    <p className="uppercase mb-3" style={{ ...eyebrowStyle, color }}>
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(28px, 3.3vw, 38px)", lineHeight: "1.22em", color: INK }}>
      {children}
    </h2>
  );
}

/** Numbered section header: big index, eyebrow label, "0X / 05" counter, hairline. */
function SectionHead({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-3">
        <span style={{ fontFamily: FC, fontSize: 19, letterSpacing: "0.02em", color: BLUE }}>{n}</span>
        <span className="uppercase" style={{ fontFamily: RB, fontWeight: 600, fontSize: 10, letterSpacing: "0.16em", color: "rgba(38,38,42,0.5)" }}>{label}</span>
        <span className="flex-1" />
        <span style={{ fontFamily: FC, fontSize: 10, letterSpacing: "0.05em", color: "rgba(38,38,42,0.3)" }}>{n} / 05</span>
      </div>
      <div className="h-px w-full" style={{ background: "rgba(38,38,42,0.12)" }} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════════

/** Absolute-positioned hero element, percentage-placed against the hero's
 * own 1440×680 basis so it scales proportionally at any viewport width. */
function HeroBox({
  leftPct, topPct, widthPct, style, children,
}: {
  leftPct: number; topPct: number; widthPct?: number;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      className="absolute"
      style={{
        left: `${leftPct}%`, top: `${topPct}%`,
        width: widthPct !== undefined ? `${widthPct}%` : undefined,
        containerType: widthPct !== undefined ? "inline-size" : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** The SharePoint site mark — the current home of the hub. */
function SiteMark() {
  return (
    <HeroBox leftPct={27.5} topPct={12} style={{ width: "10%" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/sharepoint.png"
        alt="SharePoint"
        className="block w-full h-auto select-none"
        style={{ filter: "drop-shadow(0px 14px 26px rgba(3,15,51,0.3))" }}
        draggable={false}
      />
    </HeroBox>
  );
}

function AsFoundCard() {
  const W = 394;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  const rows = [
    [70, 44, 58, 40, 66],
    [52, 62, 38, 70, 46],
    [64, 42, 56, 48, 60],
    [46, 68, 40, 54, 44],
    [58, 46, 64, 38, 52],
  ];
  return (
    <HeroBox leftPct={6.5} topPct={24} widthPct={26.5}>
      <div className="flex flex-col rounded-2xl bg-white" style={{ padding: 20, gap: 12, boxShadow: "0px 20px 46px rgba(3,15,51,0.28)" }}>
        <div className="flex items-center gap-2">
          <span className="rounded-full flex-shrink-0" style={{ width: 7, height: 7, background: CORAL }} />
          <span className="uppercase" style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(10), letterSpacing: "0.13em", color: "#5A5A54" }}>AS FOUND</span>
          <span className="flex-1" />
          <span style={{ fontFamily: FC, fontSize: fs(9), color: "#A8A8A2" }}>~80 pages</span>
        </div>
        <div className="flex flex-col" style={{ gap: fs(6) }}>
          {rows.map((r, i) => (
            <div key={i} className="flex" style={{ gap: fs(6) }}>
              {r.map((w, j) => (
                <span key={j} className="rounded-[3px]" style={{ width: `${w}%`, height: fs(13), background: "#DCE3EC" }} />
              ))}
            </div>
          ))}
        </div>
        <p style={{ fontFamily: RB, fontSize: fs(11), lineHeight: "1.62em", color: "#8A8A84" }}>
          Flat, no hierarchy, bespoke one-off layouts — and every new tool launch added more of them the same way.
        </p>
      </div>
    </HeroBox>
  );
}

function ProposedCard() {
  const W = 464;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  const templates = ["Homepage", "Learning Path", "Tool / Capability", "Prompt Guide", "Events & Replay"];
  return (
    <HeroBox leftPct={39.5} topPct={18} widthPct={27.5}>
      <div className="flex flex-col rounded-2xl bg-white" style={{ padding: 20, gap: 11, boxShadow: "0px 24px 54px rgba(3,15,51,0.3)" }}>
        <div className="flex items-center gap-2">
          <span className="rounded-full flex-shrink-0" style={{ width: 7, height: 7, background: GREEN }} />
          <span className="uppercase" style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(10), letterSpacing: "0.13em", color: "#4A4A44" }}>PROPOSED</span>
          <span className="flex-1" />
          <span style={{ fontFamily: FC, fontSize: fs(9), color: "#A8A8A2" }}>5 templates</span>
        </div>
        <div className="flex flex-col" style={{ gap: fs(7) }}>
          {templates.map((t, i) => (
            <div key={t} className="flex items-center rounded-lg" style={{ gap: fs(10), padding: fs(9), border: "1px solid rgba(38,38,42,0.09)" }}>
              <span
                className="rounded-md flex items-center justify-center flex-shrink-0"
                style={{ width: fs(18), height: fs(18), background: "#E4F0F6", color: TEAL, fontFamily: FC, fontWeight: 500, fontSize: fs(9) }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(12), color: INK }}>{t}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: RB, fontSize: fs(10.5), lineHeight: "1.62em", color: "#8A8A84" }}>
          Every page on the site is exactly one of these. Adding a tool becomes a fixed recipe — no new patterns invented, ever.
        </p>
      </div>
    </HeroBox>
  );
}

function TargetCard() {
  const W = 269;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  return (
    <HeroBox leftPct={70.5} topPct={25} widthPct={19.5}>
      <div className="flex flex-col rounded-2xl" style={{ padding: 20, gap: 9, background: DARKCARD, border: "1px solid rgba(255,255,255,0.08)" }}>
        <span className="uppercase" style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(9), letterSpacing: "0.13em", color: "#7FB8D6" }}>Target measure of success</span>
        <span style={{ fontFamily: NR, fontWeight: 400, fontSize: fs(34), lineHeight: "1.05em", color: "#FFFFFF" }}>&#8804; 3 clicks</span>
        <span style={{ fontFamily: RB, fontSize: fs(11), lineHeight: "1.6em", color: "rgba(255,255,255,0.6)" }}>
          from landing to relevant AI learning, for any employee
        </span>
      </div>
    </HeroBox>
  );
}

function InputsCard() {
  const W = 269;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  const inputs = ["A finalized task-based IA", "13 user interviews, 7 non-US", "A team card-sort exercise"];
  return (
    <HeroBox leftPct={70.5} topPct={47} widthPct={19.5}>
      <div className="flex flex-col rounded-2xl bg-white" style={{ padding: 18, gap: 9, boxShadow: "0px 20px 46px rgba(3,15,51,0.26)" }}>
        <span className="uppercase" style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(9), letterSpacing: "0.13em", color: TEAL }}>Three independent inputs</span>
        <div className="flex flex-col" style={{ gap: fs(6) }}>
          {inputs.map((it) => (
            <div key={it} className="flex items-center" style={{ gap: fs(7) }}>
              <span className="rounded-full flex-shrink-0" style={{ width: fs(4), height: fs(4), background: TEAL }} />
              <span style={{ fontFamily: RB, fontSize: fs(11), color: "#4A4A46" }}>{it}</span>
            </div>
          ))}
        </div>
        <span style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(11), color: GREEN }}>All three pointed the same way.</span>
      </div>
    </HeroBox>
  );
}

function GiantWordmark() {
  return (
    <HeroBox leftPct={0} topPct={72} widthPct={100}>
      <p
        className="text-center whitespace-nowrap"
        style={{
          fontFamily: DISPLAY, fontWeight: 700, fontSize: "7.9cqw",
          lineHeight: 1, letterSpacing: "-0.014em", color: "rgba(255,255,255,0.08)",
        }}
      >
        INFORMATION ARCHITECTURE
      </p>
    </HeroBox>
  );
}

function Hero() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "1440 / 680", background: "linear-gradient(105deg, #0A2640 0%, #1A4C82 56%, #2F73B4 100%)" }}
    >
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ left: "58%", top: "-30%", width: "56%", height: "120%", background: "radial-gradient(circle at 50% 50%, rgba(90,160,220,0.4) 0%, rgba(90,160,220,0) 60%)" }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ left: "-14%", top: "38%", width: "46%", height: "90%", background: "radial-gradient(circle at 50% 50%, rgba(11,110,156,0.35) 0%, rgba(11,110,156,0) 100%)" }}
      />
      <GiantWordmark />
      <AsFoundCard />
      <SiteMark />
      <ProposedCard />
      <TargetCard />
      <InputsCard />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// TITLE + META
// ═══════════════════════════════════════════════════════════════════════

function TitleMeta() {
  return (
    <div className="max-w-[1168px] w-full mx-auto px-6 md:px-0 pt-16 md:pt-20 flex flex-col gap-7">
      <Reveal>
        <p style={{ fontFamily: RB, fontWeight: 500, fontSize: 11, letterSpacing: "0.1455em", color: BLUE }}>
          CASE STUDY 04 &middot; ENTERPRISE INFORMATION ARCHITECTURE
        </p>
      </Reveal>
      <Reveal delay={90}>
        <h1 style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(34px, 4.3vw, 62px)", lineHeight: "1.12em", letterSpacing: "-0.0129em", color: INK }}>
          Improving the <span style={{ color: BLUE }}>information architecture</span> of an internal AI learning hub
        </h1>
      </Reveal>
      <Reveal delay={170}>
        <p className="max-w-[860px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.8em", color: BODY }}>
          AbbVie&rsquo;s internal AI learning hub brings together resources, tools, and guidance to help employees learn
          about and apply AI in their work. As the content expanded, the existing structure became harder to navigate and
          users did not always know where to begin or which resources were relevant to them.{" "}
          <span style={{ color: BLUE }}>
            My role was to evaluate the existing information architecture and recommend a clearer way to organize the
            experience using user research, content analysis, and stakeholder input.
          </span>
        </p>
      </Reveal>
      <div className="h-px w-full mt-2" style={{ background: "rgba(38,38,42,0.14)" }} />
      <div className="flex flex-wrap gap-x-8 gap-y-6 mt-2">
        <div style={{ flex: "1 1 220px" }}>
          <p className="mb-2.5" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: BLUE }}>ROLE</p>
          <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.58em", color: META }}>UX Researcher</p>
        </div>
        <div style={{ flex: "1 1 220px" }}>
          <p className="mb-2.5" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: BLUE }}>TOOLS</p>
          <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.58em", color: META }}>Claude Code<br />Mural<br />Dovetail</p>
        </div>
        <div style={{ flex: "1 1 220px" }}>
          <p className="mb-2.5" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: BLUE }}>OUTCOME</p>
          <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.58em", color: META }}>Recommended a task-based<br />navigation model</p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// THE PROBLEM
// ═══════════════════════════════════════════════════════════════════════

function ProblemSection() {
  return (
    <section id="problem" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <SectionHead n="01" label="The Problem" />
      <SectionHeading>AI resources were difficult to find and navigate.</SectionHeading>

      <p className="max-w-[900px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.8em", color: BODY }}>
        A site audit showed that resources were distributed across multiple pages, navigation paths, and content
        categories. Similar information appeared in different locations, making it difficult for users to understand where
        to begin or which resource was most relevant.
      </p>

      <div className="rounded-2xl grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] items-center" style={{ background: "#EAF1FB" }}>
        <div className="flex flex-col gap-2.5" style={{ padding: "26px 30px" }}>
          <Eyebrow color={BLUE}>THE TWO DIFFICULT QUESTIONS</Eyebrow>
          <p className="text-pretty" style={{ fontFamily: RB, fontSize: 12.5, lineHeight: "1.7em", color: BODY2 }}>
            These two questions were hard to answer based on the structure of the Learning Hub.
          </p>
        </div>
        <p
          className="text-center md:text-left border-t md:border-t-0 md:border-l"
          style={{ padding: "24px 30px", borderColor: "rgba(46,107,176,0.18)", fontFamily: NR, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(19px, 2.1vw, 24px)", lineHeight: "1.36em", color: "#B0672F" }}
        >
          &ldquo;What can AI do for my job?&rdquo;
        </p>
        <p
          className="text-center md:text-left border-t md:border-t-0 md:border-l"
          style={{ padding: "24px 30px", borderColor: "rgba(46,107,176,0.18)", fontFamily: NR, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(19px, 2.1vw, 24px)", lineHeight: "1.36em", color: "#6A4CA6" }}
        >
          &ldquo;Which tool do I use for what?&rdquo;
        </p>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// WHAT THE WORK HAD TO DELIVER
// ═══════════════════════════════════════════════════════════════════════

const deliverables = [
  {
    n: "01", label: "NAVIGATION",
    title: "Multiple navigation paths created overlap.",
    body: "Users could reach similar resources through different sections, making the overall structure harder to understand.",
  },
  {
    n: "02", label: "CONTENT ORGANIZATION",
    title: "Content categories did not consistently match user goals.",
    body: "Resources were often grouped around internal categories rather than what employees were trying to accomplish.",
  },
  {
    n: "03", label: "FINDABILITY",
    title: "Users needed a clearer starting point.",
    body: "The experience needed to help employees quickly identify where to begin and which resources were relevant.",
  },
];

function DeliverablesSection() {
  return (
    <section id="deliverables" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-8 min-w-0">
      <SectionHead n="02" label="What The Work Had To Deliver" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deliverables.map((d) => (
          <div key={d.n} className="flex flex-col gap-3 rounded-2xl bg-white" style={{ padding: "24px 26px", border: "1px solid rgba(38,38,42,0.09)" }}>
            <div className="flex items-center gap-2.5">
              <span
                className="rounded-full flex items-center justify-center flex-shrink-0"
                style={{ width: 22, height: 22, background: "#E4F0F6", color: BLUE, fontFamily: FC, fontSize: 8.5, letterSpacing: "0.04em" }}
              >
                {d.n}
              </span>
              <span className="uppercase" style={{ fontFamily: RB, fontWeight: 600, fontSize: 9, letterSpacing: "0.12em", color: BLUE }}>{d.label}</span>
            </div>
            <p className="md:min-h-[2.7em]" style={{ fontFamily: NR, fontWeight: 400, fontSize: 18, lineHeight: "1.32em", color: INK }}>{d.title}</p>
            <p style={{ fontFamily: RB, fontSize: 12.5, lineHeight: "1.72em", color: BODY2 }}>{d.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// NAVIGATION APPROACHES
// ═══════════════════════════════════════════════════════════════════════

const personaRows = ["AI for Analytics", "AI for People Leaders", "AI for Scientists", "AI for Commercial", "AI for Everyone Else"];
const taskRows = ["Learn what AI can do", "Find the right tool", "Get better at prompting", "Attend or catch up"];

function ApproachesSection() {
  return (
    <section id="approaches" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-8 min-w-0">
      <SectionHead n="03" label="Navigation Approaches" />
      <SectionHeading>I compared persona-based and task-based navigation.</SectionHeading>
      <p className="max-w-[900px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.78em", color: BODY }}>
        The initial direction organized content around user personas. I explored a task-based alternative and evaluated
        both approaches against user research, existing content, and common employee goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Option A — persona-first */}
        <div className="flex flex-col gap-3.5 rounded-2xl" style={{ padding: "24px 26px", background: "#FBF4E6", border: "1px solid rgba(190,140,40,0.22)" }}>
          <span className="uppercase" style={{ fontFamily: RB, fontWeight: 600, fontSize: 9.5, letterSpacing: "0.1em", color: "#9A6A16" }}>Option A &middot; Persona-first — what was asked for</span>
          <div className="flex flex-col gap-2">
            {personaRows.map((r) => (
              <span key={r} className="rounded-lg" style={{ padding: "10px 14px", background: "#ECDBB1", fontFamily: RB, fontWeight: 500, fontSize: 12.5, color: "#6E5013" }}>{r}</span>
            ))}
          </div>
          <p style={{ fontFamily: RB, fontSize: 12, lineHeight: "1.72em", color: "#8A7A55" }}>
            Every new tool multiplies across every role section. Content duplicates, migration cost compounds, and the same
            page gets maintained five times.
          </p>
        </div>

        {/* Option B — task-first (recommended) */}
        <div className="flex flex-col gap-3.5 rounded-2xl" style={{ padding: "24px 26px", background: "#E9F6EF", border: "1px solid rgba(18,161,110,0.28)" }}>
          <span className="uppercase" style={{ fontFamily: RB, fontWeight: 600, fontSize: 9.5, letterSpacing: "0.1em", color: "#0C7A52" }}>Option B &middot; Task-first — my recommendation</span>
          <span className="rounded-lg" style={{ padding: "8px 12px", background: DARKCARD, fontFamily: FC, fontSize: 9.5, letterSpacing: "0.03em", color: "#9BD4C0" }}>
            PERSONA LAYER &middot; filters &middot; curated views &middot; guided assistant
          </span>
          <div className="flex flex-col gap-2">
            {taskRows.map((r) => (
              <span key={r} className="rounded-lg" style={{ padding: "10px 14px", background: "#C9E9D8", fontFamily: RB, fontWeight: 500, fontSize: 12.5, color: "#0B6343" }}>{r}</span>
            ))}
          </div>
          <p style={{ fontFamily: RB, fontSize: 12, lineHeight: "1.72em", color: "#4E7A66" }}>
            Adding a tool is a fixed recipe: one capability page, optional learning path / prompt guide / events page, tag
            the training.
          </p>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// RECOMMENDATION
// ═══════════════════════════════════════════════════════════════════════

function RecommendationSection() {
  return (
    <section id="recommendation" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-8 min-w-0">
      <SectionHead n="04" label="The Reframe" />
      <div className="rounded-[18px] flex flex-col lg:flex-row gap-10 lg:gap-14" style={{ background: DARKCARD, padding: "40px 44px" }}>
        <div className="lg:w-[42%] flex-shrink-0 flex flex-col gap-4">
          <p className="uppercase" style={{ ...eyebrowStyle, color: "#7FB8D6" }}>RECOMMENDATION</p>
          <p style={{ fontFamily: NR, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 2.5vw, 29px)", lineHeight: "1.4em", color: "#FFFFFF" }}>
            Use tasks as the primary navigation structure.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <p style={{ fontFamily: RB, fontSize: 14, lineHeight: "1.8em", color: "rgba(255,255,255,0.72)" }}>
            Research showed that users across personas often shared the same goals. Organizing the experience around those
            goals created clearer paths through the content while reducing unnecessary duplication.
          </p>
          <p style={{ fontFamily: RB, fontSize: 14, lineHeight: "1.8em", color: "rgba(255,255,255,0.72)" }}>
            Personas could still inform recommendations, examples, and contextual content without determining the
            site&rsquo;s primary structure.
          </p>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// THE EVIDENCE
// ═══════════════════════════════════════════════════════════════════════

const handedOver = [
  "Audit of the existing learning hub (~80 pages)",
  "Updated persona framework",
  "Future-state navigation structure",
  "Research synthesis and key findings",
  "Task-based content taxonomy",
  "Final recommendations and handoff",
];

function EvidenceSection() {
  return (
    <section id="evidence" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <SectionHead n="05" label="The Evidence" />
      <SectionHeading>Why task-based navigation worked better</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <p style={{ fontFamily: RB, fontWeight: 500, fontSize: 13.5, color: INK }}>13 user interviews taken from Dovetail</p>
          <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.76em", color: BODY2 }}>
            Personalization by function and skill level, through filters and a guided assistant — not five static role
            pages.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p style={{ fontFamily: RB, fontWeight: 500, fontSize: 13.5, color: INK }}>A team card-sort exercise</p>
          <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.76em", color: BODY2 }}>
            Personas were already being framed as curated &ldquo;AI for [role]&rdquo; pages, never as navigation.
          </p>
        </div>
      </div>

      <div className="rounded-2xl flex flex-col gap-4" style={{ padding: "26px 30px", background: "#EEF1F4" }}>
        <Eyebrow color={BLUE}>WHAT I HANDED OVER</Eyebrow>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
          {handedOver.map((h) => (
            <div key={h} className="flex items-start gap-2.5">
              <span className="flex-shrink-0" style={{ marginTop: 3, color: GREEN }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <span style={{ fontFamily: RB, fontSize: 12.5, lineHeight: "1.5em", color: BODY2 }}>{h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// WHAT I LEARNED
// ═══════════════════════════════════════════════════════════════════════

const learnings = [
  {
    n: "01", title: "Users described goals more consistently than roles.",
    body: "Participants often approached AI resources based on what they wanted to accomplish rather than which employee persona they belonged to.",
  },
  {
    n: "02", title: "The structure needed to support future content.",
    body: "Task-based categories provided a clearer framework for adding new tools, resources, and learning content over time.",
  },
  {
    n: "03", title: "The recommendation balanced user and business needs.",
    body: "Personas could support relevant recommendations and examples without defining the primary navigation.",
  },
];

function LearnedSection() {
  return (
    <section id="learned" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-8 min-w-0">
      <div className="flex flex-col gap-4">
        <p className="uppercase" style={{ ...eyebrowStyle, color: BLUE }}>WHAT I LEARNED</p>
        <div className="h-px w-full" style={{ background: "rgba(38,38,42,0.12)" }} />
      </div>
      <div className="rounded-[18px]" style={{ background: `linear-gradient(115deg, ${DARKCARD} 0%, #1C4B7E 100%)`, padding: "40px 44px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {learnings.map((l) => (
            <div key={l.n} className="flex flex-col gap-3 pt-5" style={{ borderTop: "1.5px solid rgba(255,255,255,0.18)" }}>
              <span style={{ fontFamily: FC, fontSize: 11, color: "#7FB8D6" }}>{l.n}</span>
              <p style={{ fontFamily: NR, fontWeight: 400, fontSize: 20, lineHeight: "1.32em", color: "#FFFFFF" }}>{l.title}</p>
              <p style={{ fontFamily: RB, fontSize: 12.5, lineHeight: "1.76em", color: "rgba(255,255,255,0.65)" }}>{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// OTHER CASE STUDIES
// ═══════════════════════════════════════════════════════════════════════

const otherStudies = [
  {
    slug: "celebration-of-technology", label: "INTERNAL EVENT MARKETING HOMEPAGE", color: BLUE,
    title: "Celebration of Technology",
    body: "One site for three audiences. I started toward persona pathways and ended up with a single narrative page and a sticky section nav. A design prototype, not a launched site.",
    gradient: `linear-gradient(90deg, ${BLUE} 0%, ${NAVY} 100%)`,
  },
  {
    slug: "arc", label: "TWO-DAY INTERNAL HACKATHON", color: "#7455AD",
    title: "ARC — AbbVie Request Center",
    body: "Real requests arrive in bundles, so the ticket became a container for multiple items, with status tracked per item and for the whole bundle.",
    gradient: `linear-gradient(90deg, #7455AD 0%, ${NAVY} 100%)`,
  },
];

function OtherCaseStudies() {
  return (
    <section style={{ background: PAGE_BG, borderTop: "1px solid rgba(38,38,42,0.13)" }}>
      <div className="px-6 md:px-[136px] py-16 md:py-[78px] flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p style={{ ...eyebrowStyle, color: BLUE }}>THE OTHER CASE STUDIES</p>
          <Link href="/#work" className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.16em", color: "rgba(38,38,42,0.55)" }}>
            &larr; BACK TO ALL WORK
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherStudies.map((s) => (
            <Link
              key={s.slug}
              href={`/work/abbvie/${s.slug}`}
              className="flex flex-col rounded-2xl bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{ border: "1px solid #E4E4DE" }}
            >
              <div style={{ height: 128, background: s.gradient }} />
              <div className="flex flex-col justify-between flex-1" style={{ padding: "22px 24px 24px" }}>
                <div className="flex flex-col gap-2.5">
                  <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: s.color }}>{s.label}</span>
                  <span style={{ fontFamily: NR, fontWeight: 400, fontSize: 26, lineHeight: "1.2em", color: INK }}>{s.title}</span>
                  <span style={{ fontFamily: RB, fontSize: 12.5, lineHeight: "1.68em", color: BODY }}>{s.body}</span>
                </div>
                <span className="mt-5 self-start w-fit rounded-full whitespace-nowrap" style={{ fontFamily: RB, fontWeight: 500, fontSize: 11, letterSpacing: "0.0545em", color: s.color, border: `1px solid ${s.color}`, padding: "8px 18px" }}>SEE CASE STUDY &nbsp;&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════

export default function AiLearningHub() {
  return (
    <main
      className={`min-h-screen ${newsreader.variable} ${roboto.variable} ${firaCode.variable} ${spaceGrotesk.variable}`}
      style={{ backgroundColor: PAGE_BG, fontFamily: RB }}
    >
      <CaseStudyNav accent={BLUE} />
      <Hero />
      <TitleMeta />
      <div id="alh-content" className="flex flex-col gap-24 md:gap-28 py-20 md:py-28">
        <ProblemSection />
        <DeliverablesSection />
        <ApproachesSection />
        <RecommendationSection />
        <EvidenceSection />
        <LearnedSection />
      </div>
      <OtherCaseStudies />
    </main>
  );
}
