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

// F37 Lineca is a licensed foundry font used in the source Figma file and
// isn't available to load here. Space Grotesk is a much closer stand-in
// than a plain system sans — a similar bold geometric grotesk — wherever
// the design calls for Lineca.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const NR = "var(--font-newsreader)";
const RB = "var(--font-roboto)";
const FC = "var(--font-fira-code)";
const LINECA = "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif";

// ─── Palette, sampled straight from the Figma file ─────────────────────────
const BLUE = "#0066F5";
const BLUE_DARK = "#0052D6";
const CYAN = "#00B4F5";
const LAVENDER = "#7455AD";
const GREEN = "#12A16E";
const INK = "#26262A";
const BODY = "#7A7A75";
const META = "#636363";
const PAGE_BG = "#FFFFFF";

const eyebrowStyle = { fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.16em" } as const;

function Eyebrow({ children, color = BLUE }: { children: string; color?: string }) {
  return (
    <p className="uppercase mb-3" style={{ ...eyebrowStyle, color }}>
      {children}
    </p>
  );
}

/** Numbered section header — big serif index, caps label, "0X / 05" counter, hairline. */
function SectionHead({ n, label, color = BLUE }: { n: string; label: string; color?: string }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-baseline gap-4">
        <span style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(30px, 3.6vw, 42px)", lineHeight: 1, color }}>{n}</span>
        <span className="uppercase" style={{ fontFamily: RB, fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", color: INK }}>{label}</span>
        <span className="flex-1" />
        <span style={{ fontFamily: RB, fontWeight: 400, fontSize: 11, letterSpacing: "0.1em", color: "rgba(38,38,42,0.32)" }}>{n} / 05</span>
      </div>
      <div className="h-px w-full" style={{ background: "rgba(38,38,42,0.13)" }} />
    </div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(30px, 3.6vw, 46px)", lineHeight: "1.16em", color: INK }}>
      {children}
    </h2>
  );
}

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

// ═══════════════════════════════════════════════════════════════════════
// HERO — "Unity" product mockups
// ═══════════════════════════════════════════════════════════════════════

function GiantWordmark() {
  const W = 1071.77;
  return (
    <HeroBox leftPct={5.833} topPct={17.981} widthPct={74.429}>
      <p
        style={{
          fontFamily: LINECA, fontWeight: 615, fontSize: `${(142 / W) * 100}cqw`,
          lineHeight: "0.88em", letterSpacing: "-0.0352em", color: "rgba(255,255,255,0.15)",
          whiteSpace: "nowrap",
        }}
      >
        UNITY DESIGN SYSTEM
      </p>
    </HeroBox>
  );
}

function UnityTab({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-[7px]">
      {label && (
        <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 13.5, color: active ? BLUE_DARK : "#6B6B66" }}>{label}</span>
      )}
      <span
        className="rounded-full"
        style={{ width: active ? 24.05 : 0.05, height: active ? 3 : 2.5, background: active ? BLUE_DARK : "rgba(0,102,245,0)" }}
      />
    </div>
  );
}

function UnityStickyNav() {
  return (
    <HeroBox leftPct={32.001} topPct={16.324}>
      <div
        className="flex items-center rounded-[15px] bg-white"
        style={{ padding: "9px 10px 9px 28px", gap: 28, boxShadow: "0px 20px 44px 0px rgba(3,15,51,0.24)" }}
      >
        <UnityTab label="About" />
        <UnityTab label="Agenda" active />
        <UnityTab label="Speakers" />
        <UnityTab label="" />
        <span className="rounded-full" style={{ background: BLUE_DARK, padding: "12px 20px", color: "#FFFFFF", fontFamily: RB, fontWeight: 500, fontSize: 13 }}>
          Register
        </span>
      </div>
    </HeroBox>
  );
}

function UnityDayTabs() {
  const days = [
    { label: "Day 1", active: false },
    { label: "Day 2", active: true },
    { label: "Day 3", active: false },
    { label: "Day 4", active: false },
  ];
  return (
    <HeroBox leftPct={12.146} topPct={66.471}>
      <div
        className="flex items-center rounded-xl"
        style={{ padding: 5, gap: 4, background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.28)" }}
      >
        {days.map((d) => (
          <span
            key={d.label}
            className="rounded-lg"
            style={{
              padding: "10px 17px", fontFamily: RB, fontWeight: 500, fontSize: 13,
              background: d.active ? "#FFFFFF" : "transparent",
              color: d.active ? BLUE_DARK : "rgba(255,255,255,0.82)",
            }}
          >
            {d.label}
          </span>
        ))}
      </div>
    </HeroBox>
  );
}

function UnityHappeningNowCard() {
  const W = 462.46;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  return (
    <HeroBox leftPct={51.389} topPct={27.426} widthPct={32.115}>
      <div
        className="flex flex-col items-stretch rounded-2xl bg-white"
        style={{ padding: "20px 24px", gap: 14, boxShadow: "0px 22px 48px 0px rgba(3,15,51,0.26)" }}
      >
        <div className="flex items-center gap-2">
          <span className="rounded-full flex-shrink-0" style={{ width: 8.3, height: 8.3, background: GREEN }} />
          <span style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(10), letterSpacing: "0.14em", color: GREEN, whiteSpace: "nowrap" }}>HAPPENING NOW</span>
          <span className="flex-1" />
          <span style={{ fontFamily: FC, fontSize: fs(10.5), color: "#A8A8A2", whiteSpace: "nowrap" }}>10:30 AM – 11:15 AM</span>
        </div>
        <p style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(19), lineHeight: "1.36em", color: INK }}>Designing for trust in enterprise AI</p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="rounded-md" style={{ padding: "6px 11px", background: "#EEF3FF", color: BLUE_DARK, fontFamily: RB, fontWeight: 500, fontSize: fs(11) }}>UX Summit</span>
          <span className="rounded-md" style={{ padding: "6px 11px", background: "#F3EEFC", color: LAVENDER, fontFamily: RB, fontWeight: 500, fontSize: fs(11) }}>Internal Keynotes</span>
          <span className="rounded-md" style={{ padding: "6px 11px", background: "#F2F2F0", color: "#6B6B66", fontFamily: RB, fontWeight: 500, fontSize: fs(11) }}>45 min</span>
        </div>
        <div className="h-px w-full" style={{ background: "rgba(38,38,42,0.09)" }} />
        <div className="flex items-center gap-2">
          <span style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(12.5), color: BLUE, whiteSpace: "nowrap" }}>+ &nbsp;Add to my schedule</span>
          <span className="flex-1" />
          <span style={{ fontFamily: FC, fontSize: fs(10), color: "#B0B0AA", whiteSpace: "nowrap" }}>Speaker Details --&gt;</span>
        </div>
      </div>
    </HeroBox>
  );
}

function UnityContextCTA() {
  return (
    <HeroBox leftPct={43.777} topPct={76.176}>
      <div
        className="flex flex-col rounded-2xl"
        style={{ padding: "16px 18px", gap: 10, background: "rgba(4,23,63,0.5)", border: "1px solid rgba(255,255,255,0.22)" }}
      >
        <span style={{ fontFamily: FC, fontSize: 10, color: "#8FC4FF" }}>Registered?</span>
        <div className="flex items-center gap-[10px]">
          <span className="rounded-lg" style={{ padding: "11px 18px", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.5)", fontFamily: RB, fontWeight: 500, fontSize: 13 }}>Register</span>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>&rarr;</span>
          <span className="rounded-lg" style={{ padding: "11px 18px", background: "#FFFFFF", color: BLUE_DARK, fontFamily: RB, fontWeight: 500, fontSize: 13 }}>Submit A Proposal</span>
        </div>
      </div>
    </HeroBox>
  );
}

function UnityDieCutSticker() {
  const W = 156.19;
  const pct = (v: number) => `${(v / W) * 100}%`;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  return (
    <HeroBox leftPct={75.764} topPct={68.676} widthPct={10.847}>
      <div
        className="relative rounded-full flex items-center justify-center"
        style={{
          aspectRatio: "1/1", background: "#071D49", border: "5.43px solid #FFFFFF",
          boxShadow: "0px 12.4px 27.9px 0px rgba(3,15,51,0.3)",
        }}
      >
        <span
          className="absolute rounded-full"
          style={{ left: pct(13.02), top: pct(13.02), width: pct(130.16), height: pct(130.16), border: "1.16px dashed rgba(0,180,245,0.5)" }}
        />
        <div className="text-center px-[8%]">
          <p style={{ fontFamily: LINECA, fontWeight: 1000, fontSize: fs(16.28), lineHeight: "1.04em", color: "#FFFFFF" }}>
            TOKENS<br />NOT HEX<br />CODES
          </p>
          <p className="mt-1" style={{ fontFamily: FC, fontSize: fs(6.2), color: "rgba(255,255,255,0.55)" }}>8.3 pt floor</p>
        </div>
        <span
          className="absolute uppercase"
          style={{ top: pct(43.83), fontFamily: RB, fontWeight: 500, fontSize: fs(4.17), letterSpacing: "0.13em", color: CYAN, textAlign: "center" }}
        >
          Unity Design System
        </span>
      </div>
    </HeroBox>
  );
}

function UnityStatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-[3px]">
      <span style={{ fontFamily: LINECA, fontWeight: 1000, fontSize: 26, color: "#FFFFFF" }}>{value}</span>
      <span style={{ fontFamily: RB, fontWeight: 400, fontSize: 11, color: "rgba(255,255,255,0.68)" }}>{label}</span>
    </div>
  );
}

function UnityStatsBand() {
  return (
    <HeroBox leftPct={12.053} topPct={78.529}>
      <div
        className="flex items-center rounded-xl"
        style={{ padding: "16px 24px", gap: 30, background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.24)" }}
      >
        <UnityStatItem value="4" label="days" />
        <span style={{ width: 1.83, height: 34, background: "rgba(255,255,255,0.2)" }} />
        <UnityStatItem value="40+" label="speakers" />
        <span style={{ width: 1.83, height: 34, background: "rgba(255,255,255,0.2)" }} />
        <UnityStatItem value="3" label="conferences" />
      </div>
    </HeroBox>
  );
}

function Hero() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "1440 / 680", background: "linear-gradient(115deg, rgba(0,82,214,1) 0%, rgba(10,127,245,1) 78%)" }}
    >
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ left: "61.111%", top: "-23.529%", width: "59.722%", height: "102.941%", background: "radial-gradient(circle at 50% 50%, rgba(0,180,245,0.62) 0%, rgba(0,180,245,0) 50%)" }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ left: "-13.889%", top: "44.118%", width: "48.611%", height: "82.353%", background: "radial-gradient(circle at 50% 50%, rgba(116,85,173,0.42) 0%, rgba(116,85,173,0) 100%)" }}
      />
      <GiantWordmark />
      <UnityStickyNav />
      <UnityDayTabs />
      <UnityHappeningNowCard />
      <UnityContextCTA />
      <UnityDieCutSticker />
      <UnityStatsBand />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// TITLE + META
// ═══════════════════════════════════════════════════════════════════════

function TitleMeta() {
  return (
    <div className="w-full max-w-[1168px] mx-auto px-6 md:px-0 pt-16 md:pt-20 flex flex-col gap-7">
      <Reveal>
        <p style={{ fontFamily: RB, fontWeight: 500, fontSize: 11, letterSpacing: "0.1455em", color: BLUE }}>
          CASE STUDY 01 &middot; CELEBRATION OF TECHNOLOGY
        </p>
      </Reveal>
      <Reveal delay={90}>
        <h1 style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(34px, 4.3vw, 62px)", lineHeight: "1.12em", letterSpacing: "-0.0129em", color: INK }}>
          One page, <span style={{ color: BLUE }}>three audiences</span>
        </h1>
      </Reveal>
      <Reveal delay={170}>
        <p className="max-w-[1100px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.8em", color: BODY }}>
          AbbVie&rsquo;s internal UX event site brought registration, proposal submissions, event information, and day-of
          resources into one experience. The challenge was designing a single platform that could support different
          audiences at different stages of the event, from first-time visitors deciding whether to attend to speakers
          submitting proposals and attendees returning for schedules and resources.{" "}
          <span style={{ color: BLUE }}>
            I rapidly prototyped and refined the experience alongside developers to make those overlapping workflows feel
            clear and cohesive.
          </span>
        </p>
      </Reveal>
      <div className="h-px w-full mt-1" style={{ background: "rgba(38,38,42,0.13)" }} />
      <div className="flex flex-wrap gap-x-8 gap-y-8 mt-1">
        <div style={{ flex: "1 1 200px" }}>
          <p className="mb-2.5" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: BLUE }}>TIMELINE</p>
          <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.58em", color: META }}>July - August 2026</p>
        </div>
        <div style={{ flex: "1 1 200px" }}>
          <p className="mb-2.5" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: BLUE }}>ROLE</p>
          <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.58em", color: META }}>UX Designer</p>
        </div>
        <div style={{ flex: "1 1 200px" }}>
          <p className="mb-2.5" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: BLUE }}>TOOLS</p>
          <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.58em", color: META }}>
            Figma Make for first passes<br />Figma for iteration<br />React on the internal<br />design system
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// THE PROBLEM
// ═══════════════════════════════════════════════════════════════════════

const audiences = [
  { accent: BLUE, title: "First-timers", quote: "“What even is this, and should I care?”", body: "Needs the narrative. Will not read an agenda they cannot contextualize." },
  { accent: CYAN, title: "Day-of attendees", quote: "“What’s happening right now, and where?”", body: "Needs live state, on a phone, standing in a hallway." },
  { accent: LAVENDER, title: "Returning visitors", quote: "“Just show me the agenda.”", body: "Needs to skip everything I would write for the other two." },
];

function ProblemSection() {
  return (
    <section id="problem" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <SectionHead n="01" label="The Problem" />
      <SectionHeading>
        Three audiences with various needs<br />that can conflict.
      </SectionHeading>
      <p className="max-w-[820px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.72em", color: BODY }}>
        AbbVie runs an annual internal technology week — four days, three conferences (a UX summit, an engineering
        festival and a data-science conference), several thousand employees. Registration, Proposal submissions,
        agendas, and speakers all live on this site.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {audiences.map((a) => (
          <div key={a.title} className="flex flex-col gap-[14px] rounded-2xl bg-white" style={{ padding: "26px 28px", border: "1px solid rgba(38,38,42,0.08)" }}>
            <span className="rounded-full" style={{ width: 28, height: 3, background: a.accent }} />
            <p style={{ fontFamily: RB, fontWeight: 500, fontSize: 17, color: INK }}>{a.title}</p>
            <p style={{ fontFamily: NR, fontStyle: "italic", fontWeight: 400, fontSize: 20, lineHeight: "1.38em", color: a.accent }}>{a.quote}</p>
            <p style={{ fontFamily: RB, fontSize: 13.5, lineHeight: "1.72em", color: BODY }}>{a.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// THE PROCESS
// ═══════════════════════════════════════════════════════════════════════

// Small lo-fi wireframe bar — the building block for every screen mockup
// below, matching the gray-bar wireframe style of the real screens.
function WBar({
  w = "100%", h = 6, c = "rgba(38,38,42,0.16)", r = 3,
}: { w?: string | number; h?: number; c?: string; r?: number }) {
  return <span className="block flex-shrink-0" style={{ width: w, height: h, background: c, borderRadius: r }} />;
}

const HERO_GRADIENT = "linear-gradient(115deg, rgba(0,82,214,1) 0%, rgba(10,127,245,1) 78%)";

function ScreenCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-[10px] flex-shrink-0" style={{ width: 216 }}>
      <p className="uppercase" style={{ fontFamily: RB, fontWeight: 500, fontSize: 9, letterSpacing: "0.1333em", color: BODY }}>{label}</p>
      <div className="rounded-lg overflow-hidden bg-white" style={{ border: "1px solid rgba(38,38,42,0.12)" }}>
        {children}
      </div>
    </div>
  );
}

function HomepageScreen() {
  return (
    <>
      <div className="relative p-3" style={{ height: 108, background: HERO_GRADIENT }}>
        <span className="absolute rounded-full" style={{ width: 34, height: 34, right: 10, top: 10, border: "2px solid rgba(255,255,255,0.4)" }} />
        <div className="flex flex-col gap-1.5">
          <WBar w={26} h={6} c="rgba(255,255,255,0.35)" />
          <WBar w="60%" h={7} c="rgba(255,255,255,0.85)" />
          <WBar w="40%" h={7} c="rgba(255,255,255,0.85)" />
        </div>
        <WBar w={34} h={12} r={6} c="rgba(255,255,255,0.2)" />
        <div className="mt-3"><WBar w={34} h={12} r={6} c="rgba(255,255,255,0.2)" /></div>
      </div>
      <div className="flex items-center gap-1.5 px-3" style={{ height: 22, background: "#E9F7F1" }}>
        <span className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, background: GREEN }} />
        <WBar w="55%" h={4} c="rgba(18,161,110,0.4)" />
      </div>
      <div className="p-3 flex flex-col gap-3">
        <div className="flex flex-col items-center gap-1.5">
          <WBar w="70%" h={8} />
          <WBar w="50%" h={5} c="rgba(38,38,42,0.1)" />
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 rounded-md p-1.5 flex flex-col gap-1" style={{ border: "1px solid rgba(38,38,42,0.08)" }}>
              <span className="rounded-full" style={{ width: 10, height: 10, background: "rgba(0,102,245,0.15)" }} />
              <WBar h={4} />
              <WBar w="70%" h={4} />
              <WBar w={20} h={10} r={5} c={BLUE} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <WBar w="40%" h={5} />
          <WBar w={30} h={5} c={BLUE} />
        </div>
        <div className="flex justify-between">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="rounded-full" style={{ width: 22, height: 22, background: "rgba(38,38,42,0.08)" }} />
              <WBar w={22} h={4} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <WBar w="35%" h={5} />
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <WBar w="75%" h={4} c="rgba(38,38,42,0.12)" />
              <span className="rounded-full flex-shrink-0" style={{ width: 3, height: 3, background: "rgba(38,38,42,0.2)" }} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-1.5 p-3" style={{ background: BLUE }}>
        <WBar w="65%" h={7} c="rgba(255,255,255,0.9)" />
        <WBar w="45%" h={4} c="rgba(255,255,255,0.5)" />
        <WBar w={50} h={12} r={6} c="#FFFFFF" />
      </div>
    </>
  );
}

function FullAgendaScreen() {
  return (
    <>
      <div className="p-3 flex flex-col gap-1.5 justify-center" style={{ height: 70, background: HERO_GRADIENT }}>
        <WBar w="70%" h={7} c="rgba(255,255,255,0.9)" />
        <WBar w="50%" h={5} c="rgba(255,255,255,0.5)" />
      </div>
      <div className="flex gap-2 p-2.5">
        <div className="flex flex-col gap-1.5" style={{ width: 44 }}>
          <WBar h={16} r={4} c={BLUE} />
          <WBar h={5} c="rgba(38,38,42,0.14)" />
          <WBar h={5} c="rgba(38,38,42,0.14)" />
          <WBar h={5} c="rgba(38,38,42,0.14)" />
        </div>
        <div className="flex-1 flex flex-col gap-1.5 min-w-0">
          <div className="rounded p-1.5" style={{ background: "rgba(116,85,173,0.1)", border: "1px solid rgba(116,85,173,0.3)" }}>
            <WBar w="60%" h={4} c={LAVENDER} />
          </div>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-start justify-between gap-1 pb-1.5" style={{ borderBottom: "1px solid rgba(38,38,42,0.06)" }}>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <WBar w={28} h={3.5} c="rgba(38,38,42,0.28)" />
                <WBar w="90%" h={4.5} c={GREEN} />
                <WBar w="70%" h={3.5} c="rgba(38,38,42,0.14)" />
              </div>
              <span className="rounded flex-shrink-0" style={{ width: 16, height: 8, background: "rgba(0,102,245,0.15)" }} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-3 pb-2.5">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => <span key={i} className="rounded-full" style={{ width: 4, height: 4, background: i === 0 ? BLUE : "rgba(38,38,42,0.2)" }} />)}
        </div>
        <div className="flex gap-1">
          <WBar w={22} h={10} r={5} c="rgba(38,38,42,0.08)" />
          <WBar w={22} h={10} r={5} c="rgba(38,38,42,0.08)" />
        </div>
      </div>
    </>
  );
}

function SpeakersScreen() {
  return (
    <>
      <div className="p-3 flex flex-col justify-center" style={{ height: 58, background: HERO_GRADIENT }}>
        <WBar w="55%" h={7} c="rgba(255,255,255,0.9)" />
      </div>
      <div className="flex items-center gap-1.5 p-2.5">
        <WBar w={38} h={14} r={7} c="rgba(38,38,42,0.08)" />
        <WBar w={38} h={14} r={7} c="rgba(38,38,42,0.08)" />
        <span className="flex-1" />
        <WBar w={30} h={14} r={7} c={BLUE} />
      </div>
      <div className="flex flex-col gap-2.5 px-2.5 pb-2.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="rounded-full flex-shrink-0" style={{ width: 30, height: 30, background: "#0B1B3F" }} />
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <WBar w="70%" h={5} />
              <WBar w="90%" h={4} c="rgba(0,180,245,0.4)" />
            </div>
            <span className="rounded-full flex-shrink-0" style={{ width: 22, height: 22, border: `1.5px solid ${BLUE}` }} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 pb-3">
        {[0, 1, 2, 3].map((i) => <span key={i} className="rounded-full" style={{ width: 4, height: 4, background: i === 0 ? BLUE : "rgba(38,38,42,0.2)" }} />)}
      </div>
    </>
  );
}

function ProposalFormScreen() {
  return (
    <>
      <div className="p-3 flex flex-col gap-1.5 justify-center" style={{ height: 60, background: HERO_GRADIENT }}>
        <WBar w="65%" h={7} c="rgba(255,255,255,0.9)" />
        <WBar w="50%" h={4} c="rgba(255,255,255,0.5)" />
      </div>
      <div className="p-3 flex flex-col gap-3">
        <div className="rounded p-2" style={{ background: "rgba(116,85,173,0.08)", border: "1px solid rgba(116,85,173,0.25)" }}>
          <WBar w="80%" h={4} c={LAVENDER} />
        </div>
        <div className="flex flex-col gap-1">
          <WBar w="35%" h={4.5} />
          <div className="rounded" style={{ height: 20, border: "1px solid rgba(38,38,42,0.14)" }} />
        </div>
        <div className="flex flex-col gap-1">
          <WBar w="45%" h={4.5} />
          <WBar w="90%" h={4} c="rgba(38,38,42,0.14)" />
          <WBar w="80%" h={4} c="rgba(38,38,42,0.14)" />
          <WBar w="60%" h={4} c="rgba(38,38,42,0.14)" />
        </div>
        <div className="flex flex-col gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="rounded flex-shrink-0" style={{ width: 9, height: 9, border: "1.5px solid rgba(38,38,42,0.25)" }} />
              <WBar w={i % 2 === 0 ? "75%" : "55%"} h={4} c="rgba(38,38,42,0.14)" />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <WBar w="40%" h={4.5} />
          <div className="rounded" style={{ height: 14, border: "1px solid rgba(38,38,42,0.14)" }} />
        </div>
        <div className="flex items-center gap-2 mt-1">
          <WBar w={54} h={16} r={8} c={BLUE} />
          <WBar w={36} h={5} c="rgba(38,38,42,0.2)" />
        </div>
      </div>
    </>
  );
}

function SubmissionConfirmedScreen() {
  return (
    <div className="p-3 flex flex-col items-center gap-2">
      <span className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: 30, height: 30, background: "rgba(18,161,110,0.12)", border: `1.5px solid ${GREEN}` }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <WBar w="70%" h={6} />
      <WBar w="55%" h={4} c="rgba(38,38,42,0.14)" />
      <div className="flex gap-2 w-full mt-1">
        {[0, 1].map((i) => (
          <div key={i} className="flex-1 rounded p-1.5 flex flex-col gap-1" style={{ border: "1px solid rgba(0,102,245,0.25)" }}>
            <WBar w="80%" h={3.5} c="rgba(0,102,245,0.4)" />
            <WBar h={5} r={2.5} c={i === 0 ? BLUE : "rgba(0,102,245,0.18)"} />
          </div>
        ))}
      </div>
      <div className="flex gap-1.5 w-full mt-1">
        <WBar w="60%" h={14} r={7} c={BLUE} />
        <WBar w="35%" h={14} r={7} c="rgba(38,38,42,0.08)" />
      </div>
    </div>
  );
}

const screens = [
  { label: "HOMEPAGE", el: <HomepageScreen /> },
  { label: "FULL AGENDA", el: <FullAgendaScreen /> },
  { label: "SPEAKERS", el: <SpeakersScreen /> },
  { label: "PROPOSAL FORM", el: <ProposalFormScreen /> },
  { label: "SUBMISSION CONFIRMED", el: <SubmissionConfirmedScreen /> },
];

function ProcessSection() {
  return (
    <section id="process" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <SectionHead n="02" label="The Process" />
      <SectionHeading>Rapid Prototyping</SectionHeading>

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 rounded-2xl" style={{ padding: "26px 32px", background: "#F1F3FF" }}>
        <div className="flex flex-col gap-1">
          <span style={{ fontFamily: NR, fontWeight: 700, fontSize: 58, lineHeight: "1em", color: LAVENDER }}>7</span>
          <span style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.22em", color: META }}>Flows designed</span>
        </div>
        <span className="hidden md:block" style={{ width: 1.87, height: 67.33, background: "#CCD4E5" }} />
        <div className="flex flex-col gap-1">
          <span style={{ fontFamily: NR, fontWeight: 700, fontSize: 58, letterSpacing: "-0.05em", lineHeight: "1em", color: BLUE }}>150+</span>
          <span style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.22em", color: META }}>Screens designed &amp; iterated</span>
        </div>
      </div>

      <p className="max-w-[840px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.72em", color: BODY }}>
        I leaned on Claude Code and Figma Make to enlarge my output. Prompting turned out to be a skill of its own.
      </p>

      <div className="flex flex-col gap-5 min-w-0">
        <Eyebrow>MAIN SCREENS</Eyebrow>
        <div className="flex gap-[22px] overflow-x-auto pb-2 min-w-0">
          {screens.map((s) => <ScreenCard key={s.label} label={s.label}>{s.el}</ScreenCard>)}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// THE HANDOFF — working with developers
// ═══════════════════════════════════════════════════════════════════════

function SwapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 4 4 7l3 3" />
      <path d="M4 7h13a3 3 0 0 1 3 3" />
      <path d="m17 20 3-3-3-3" />
      <path d="M20 17H7a3 3 0 0 1-3-3" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden>
      <rect x="3" y="3" width="8" height="8" rx="1.6" />
      <rect x="13" y="3" width="8" height="8" rx="1.6" />
      <rect x="3" y="13" width="8" height="8" rx="1.6" />
      <rect x="13" y="13" width="8" height="8" rx="1.6" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3.5 17.5 6.5 20.5l6-6a4 4 0 0 0 5.2-5.2l-2.9 2.9-2.1-.6-.6-2.1 2.6-2.6Z" />
    </svg>
  );
}

const handoffCards = [
  {
    accent: BLUE, bg: "#EDF4FE", border: "rgba(0,102,245,0.3)", shadow: "rgba(0,102,245,0.32)",
    icon: <SwapIcon />, title: "Regular reviews",
    body: "They flagged problems while the flows were still cheap to change.",
  },
  {
    accent: GREEN, bg: "#EEF8F5", border: "rgba(18,161,110,0.3)", shadow: "rgba(18,161,110,0.32)",
    icon: <GridIcon />, title: "Components, not pixels",
    body: "Designed with the Unity React components and tokens that already existed.",
  },
  {
    accent: LAVENDER, bg: "#F5F3F9", border: "rgba(116,85,173,0.3)", shadow: "rgba(116,85,173,0.32)",
    icon: <WrenchIcon />, title: "Feasibility shaped the design",
    body: "Dev feedback changed design decisions, not just documentation.",
  },
];

function HandoffSection() {
  return (
    <section id="handoff" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <SectionHead n="03" label="The Handoff" />
      <SectionHeading>Working closely with the developers.</SectionHeading>
      <p className="max-w-[845px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.72em", color: BODY }}>
        The site is built on AbbVie&rsquo;s internal React design system, so everything I designed had to be buildable with
        what was already there. I reviewed flows with the developers as I went &mdash; they told me what was straightforward,
        what was expensive, and what the library did not have. It was the part of the project that taught me the most about
        designing for code.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {handoffCards.map((c) => (
          <div key={c.title} className="flex flex-col gap-4 rounded-[14px]" style={{ padding: "24px 26px", background: c.bg, border: `1px solid ${c.border}` }}>
            <span className="flex items-center justify-center flex-shrink-0" style={{ width: 40, height: 40, borderRadius: 11, background: c.accent, boxShadow: `0px 3px 8px 0px ${c.shadow}` }}>
              {c.icon}
            </span>
            <p style={{ fontFamily: RB, fontWeight: 500, fontSize: 16, color: INK }}>{c.title}</p>
            <p style={{ fontFamily: RB, fontSize: 13.5, lineHeight: "1.68em", color: BODY }}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// THE IMPACT
// ═══════════════════════════════════════════════════════════════════════

function FairyDust() {
  return (
    <svg
      className="hidden md:block absolute pointer-events-none"
      style={{ right: 40, top: 44, width: 191, height: 153 }}
      viewBox="0 0 191 153" fill="none" aria-hidden
    >
      <g fill="rgba(255,255,255,0.16)">
        <path d="M96 26c4.5 24 9 28.5 33 33-24 4.5-28.5 9-33 33-4.5-24-9-28.5-33-33 24-4.5 28.5-9 33-33Z" />
        <path d="M151 4c2.2 12 4.3 14.1 16 16-11.7 1.9-13.8 4-16 16-2.2-12-4.3-14.1-16-16 11.7-1.9 13.8-4 16-16Z" />
        <path d="M158 92c1.6 8.6 3.2 10.2 11 11-7.8 0.8-9.4 2.4-11 11-1.6-8.6-3.2-10.2-11-11 7.8-0.8 9.4-2.4 11-11Z" />
      </g>
      <g fill="rgba(255,255,255,0.5)">
        <circle cx="66" cy="74" r="1.6" />
        <circle cx="118" cy="120" r="1.6" />
        <circle cx="178" cy="58" r="1.6" />
        <circle cx="140" cy="142" r="1.3" />
      </g>
    </svg>
  );
}

function ImpactSection() {
  return (
    <section id="impact" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <SectionHead n="04" label="The Impact" />
      <SectionHeading>The site&rsquo;s ease of use led to more sign-ups.</SectionHeading>
      <div className="relative flex overflow-hidden rounded-[18px]" style={{ background: INK }}>
        <span className="flex-shrink-0 self-stretch" style={{ width: 7, background: LAVENDER }} />
        <div className="relative flex flex-col gap-5 flex-1 min-w-0 p-7 md:py-[46px] md:pl-12 md:pr-[280px]">
          <p style={{ fontFamily: RB, fontSize: 14.5, lineHeight: "1.68em", color: "#CABEE0" }}>
            Clear next steps, far less to read, and nothing to hunt for.
          </p>
          <p className="max-w-[820px]" style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(23px, 2.6vw, 31px)", lineHeight: "1.4em", color: "#FFFFFF" }}>
            Sign-ups and proposal submissions both went up, and enough people came that a waitlist was added once sessions
            started filling.
          </p>
          <FairyDust />
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// STICKER PACK
// ═══════════════════════════════════════════════════════════════════════

function StickerSpecimenCobalt() {
  const W = 249.34;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  return (
    <div className="rounded-[32px] bg-white p-[12px]" style={{ width: 274 }}>
      <div className="rounded-[26px] flex flex-col justify-between" style={{ containerType: "inline-size", padding: "5.5%", aspectRatio: "1/1", background: BLUE }}>
        <span style={{ fontFamily: RB, fontWeight: 700, fontSize: fs(12.6), lineHeight: "1.1em", letterSpacing: "0.18em", color: "#42DBD3" }}>UNITY TYPEFACE</span>
        <div className="flex flex-col items-center gap-2">
          <span style={{ fontFamily: LINECA, fontWeight: 615, fontSize: fs(104), lineHeight: "0.9em", letterSpacing: "-0.03em", color: "#FFFFFF" }}>Aa</span>
          <span className="w-full" style={{ height: 3, background: "#42DBD3" }} />
        </div>
        <div className="flex flex-col gap-1">
          <span style={{ fontFamily: RB, fontWeight: 700, fontSize: fs(19.18), lineHeight: "1.1em", letterSpacing: "0.18em", color: "#FFFFFF" }}>F37 LINECA</span>
          <span style={{ fontFamily: RB, fontWeight: 400, fontSize: fs(12), color: "rgba(255,255,255,0.85)" }}>ABBVIE DESIGN SYSTEM</span>
        </div>
      </div>
    </div>
  );
}

function StickerSpecimenAbbVieA() {
  return (
    <div className="rounded-[28px] bg-white p-[13px]" style={{ width: 274 }}>
      <div
        className="relative rounded-[22px] overflow-hidden"
        style={{ containerType: "inline-size", aspectRatio: "1/1", background: "#F1F3FF" }}
      >
        {/* Oversized display 'A' — F37 Lineca in the source; Space Grotesk
            stands in. Bled off the left and bottom edges, then clipped. */}
        <span
          className="absolute select-none"
          style={{
            left: "-22%", bottom: "-42%",
            fontFamily: LINECA, fontWeight: 700, fontSize: "172cqw",
            lineHeight: 1, color: "#071D49",
          }}
        >
          a
        </span>
        <div className="absolute flex flex-col items-end gap-[4px] text-right" style={{ right: "7%", top: "9%" }}>
          <span className="whitespace-nowrap" style={{ fontFamily: LINECA, fontWeight: 700, fontSize: "11cqw", lineHeight: 1, letterSpacing: "0.02em", color: "#071D49" }}>UNITY</span>
          <span className="uppercase whitespace-nowrap" style={{ fontFamily: RB, fontWeight: 400, fontSize: "3.3cqw", letterSpacing: "0.07em", color: "#071D49" }}>AbbVie Design System</span>
        </div>
      </div>
    </div>
  );
}

function StickerCobaltPill() {
  return (
    <div className="rounded-[16px] bg-white p-[10px]" style={{ width: 274 }}>
      <div className="rounded-[12px] flex items-center gap-[22px] px-[10%] py-[10%]" style={{ background: "#071D49" }}>
        {/* Placeholder mark — the real AbbVie brand mark's vector path isn't
            available here; a simple abstract glyph stands in for it. */}
        <span className="rounded-full flex-shrink-0 flex items-center justify-center" style={{ width: 42, height: 42, background: "#FFFFFF" }}>
          <span style={{ fontFamily: LINECA, fontWeight: 900, fontSize: 22, lineHeight: 1, color: "#071D49" }}>a</span>
        </span>
        <span className="w-px self-stretch" style={{ background: "rgba(255,255,255,0.32)" }} />
        <div className="flex flex-col gap-1">
          <span style={{ fontFamily: LINECA, fontWeight: 702, fontSize: 22, lineHeight: "0.95em", letterSpacing: "-0.015em", color: "#FFFFFF" }}>UNITY</span>
          <span style={{ fontFamily: RB, fontWeight: 700, fontSize: 8, letterSpacing: "0.18em", color: "#479FF8" }}>DESIGN SYSTEM</span>
        </div>
      </div>
    </div>
  );
}

function StickerFontAnatomy() {
  // A short, wide pill in the source — fully rounded ends, fixed 274px design
  // width, so plain px positioning keeps the labels predictable. The cyan rules
  // sit on the cap line and baseline of the "UNITY" specimen below.
  const CY = "#42DBD3";
  const rule = { position: "absolute", height: 1, background: "rgba(66,219,211,0.85)" } as const;
  const lbl = { position: "absolute", fontFamily: FC, fontWeight: 500, fontSize: 5, color: CY, whiteSpace: "nowrap" } as const;
  return (
    <div className="rounded-full bg-white p-[6px]" style={{ width: 274 }}>
      <div className="relative rounded-full overflow-hidden" style={{ height: 100, background: BLUE }}>
        <span className="absolute uppercase" style={{ left: 30, top: 15, fontFamily: RB, fontWeight: 700, fontSize: 5.5, letterSpacing: "0.16em", color: CY }}>Font Anatomy</span>

        <span
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
          style={{ top: 30, fontFamily: LINECA, fontWeight: 700, fontSize: 42, letterSpacing: "0.12em", color: "#FFFFFF", lineHeight: 1 }}
        >
          UNITY
        </span>

        {/* cap-height rule + label */}
        <span style={{ ...rule, left: 40, right: 34, top: 33 }} />
        <span style={{ ...lbl, right: 10, top: 29 }}>cap height</span>
        {/* baseline rule + label */}
        <span style={{ ...rule, left: 40, right: 34, top: 63 }} />
        <span style={{ ...lbl, right: 16, top: 59 }}>baseline</span>

        {/* stem — left leader into the U */}
        <span style={{ ...lbl, left: 6, top: 48 }}>stem</span>
        <span style={{ ...rule, left: 24, width: 14, top: 50 }} />
        {/* arm — leader down onto the T */}
        <span style={{ ...lbl, left: 150, top: 12 }}>arm</span>
        <span style={{ ...rule, left: 158, top: 20, height: 12, width: 1 }} />
        {/* vertex — leader up from the Y */}
        <span style={{ ...lbl, left: 176, bottom: 6 }}>vertex</span>
        <span style={{ ...rule, left: 190, bottom: 14, height: 12, width: 1 }} />

        <span
          className="absolute left-1/2 -translate-x-1/2 uppercase whitespace-nowrap"
          style={{ bottom: 12, fontFamily: RB, fontWeight: 500, fontSize: 5.5, letterSpacing: "0.16em", color: "rgba(255,255,255,0.92)" }}
        >
          ABBVIE DESIGN SYSTEM
        </span>
      </div>
    </div>
  );
}

function StickerTokens() {
  const swatches = [BLUE, "#8A2ECC", "#338700", "#FF971E", "#BF3087"];
  const W = 253.28;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  return (
    <div className="rounded-[24px] bg-white p-[10px]" style={{ width: 274 }}>
      <div className="rounded-[24px] flex flex-col justify-between" style={{ containerType: "inline-size", padding: "10%", aspectRatio: "1/1", background: "#F1F3FF" }}>
        <span style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(11), letterSpacing: "0.18em", color: "#768AC2" }}>UNITY</span>
        <div className="flex gap-[6px]">
          {swatches.map((c) => (
            <span key={c} className="rounded-lg flex-shrink-0" style={{ width: "16.8%", aspectRatio: "1/1", background: c }} />
          ))}
        </div>
        <span style={{ fontFamily: LINECA, fontWeight: 1000, fontSize: fs(35), lineHeight: "0.92em", letterSpacing: "-0.025em", color: "#03122B" }}>
          Tokens,<br />not hex<br />codes.
        </span>
        <span style={{ fontFamily: FC, fontWeight: 500, fontSize: fs(11.5), color: "#768AC2" }}>Primary-default</span>
      </div>
    </div>
  );
}

function StickerPackSection() {
  return (
    <section id="sticker-pack" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <SectionHead n="05" label="Folded In · The Sticker Pack" color={GREEN} />
      <SectionHeading>Same event, a different medium</SectionHeading>
      <p className="max-w-[845px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.72em", color: BODY }}>
        An extension of the same technology-week event I was contributing to: a die-cut vinyl sticker pack about the
        internal design system and the company&rsquo;s digital accessibility branch. Built the first iterations with
        Claude Code, then moved the work into Figma iterate on even quicker, adding my own touches.
      </p>
      <div className="flex flex-wrap items-start gap-6">
        <StickerSpecimenCobalt />
        <StickerSpecimenAbbVieA />
        <div className="flex flex-col gap-4 self-stretch justify-center">
          <StickerCobaltPill />
          <StickerFontAnatomy />
        </div>
        <StickerTokens />
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// WHAT I LEARNED
// ═══════════════════════════════════════════════════════════════════════

const learnings = [
  {
    n: "01", title: "Prompting is a skill of its own.",
    body: "Learning to prompt well was its own skill, and the point of it was to use the tools as an assistant to my design rather than a substitute for it. What kept it useful was staying rooted in what the user needed — keeping them at the centre, and looking at the page from every lens.",
  },
  {
    n: "02", title: "How to best use AI",
    body: "I explored in Figma Make as well as hooking up my Figma MCP to Claude code, all utilizing the Unity React design system. On the stickers I ran it the other way — first iterations in Claude Code, then into Figma to iterate quicker and add my own touches.",
  },
  {
    n: "03", title: "Constraints are the same job in any medium.",
    body: "A governed React component library and a die-cut vinyl sticker are the same problem in different clothes: find out what the medium will and will not permit, then make something good inside it. The developers taught me the first one. Industrial design had already taught me the second. I did not get to invent visual language here, and it turned out not to be the interesting part.",
  },
];

function LearnedSection() {
  return (
    <section id="learned" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <div className="flex flex-col gap-4">
        <p className="uppercase" style={{ ...eyebrowStyle, color: BLUE }}>WHAT I LEARNED</p>
        <div className="h-px w-full" style={{ background: "rgba(38,38,42,0.13)" }} />
      </div>
      <SectionHeading>Three things I took from this project.</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {learnings.map((l) => (
          <div key={l.n} className="flex flex-col gap-3.5 pt-6" style={{ borderTop: "2px solid rgba(38,38,42,0.14)" }}>
            <span style={{ fontFamily: FC, fontSize: 11, color: BLUE }}>{l.n}</span>
            <p style={{ fontFamily: NR, fontWeight: 400, fontSize: 22, lineHeight: "1.32em", color: INK }}>{l.title}</p>
            <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.76em", color: BODY }}>{l.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// OTHER CASE STUDIES
// ═══════════════════════════════════════════════════════════════════════

const otherStudies = [
  {
    slug: "arc", label: "INTERNAL HACKATHON", color: LAVENDER,
    title: "ARC — AbbVie Request Center",
    body: "Real requests arrive in bundles, so the ticket became a container for multiple items, with status tracked per item and for the whole bundle.",
    gradient: `linear-gradient(90deg, ${LAVENDER} 0%, #071D49 100%)`,
  },
  {
    slug: "ai-learning-hub", label: "ENTERPRISE IA REDESIGN", color: CYAN,
    title: "AI Learning Hub",
    body: "Around 80 pages with no hierarchy and duplicated content. Leadership asked for persona-first navigation; I recommended organizing by task and delivering personas as curated views on top. Strategy and IA deliverables, handed off.",
    gradient: `linear-gradient(90deg, ${CYAN} 0%, #071D49 100%)`,
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

export default function CelebrationOfTechnology() {
  return (
    <main
      className={`min-h-screen ${newsreader.variable} ${roboto.variable} ${firaCode.variable} ${spaceGrotesk.variable}`}
      style={{ backgroundColor: PAGE_BG, fontFamily: RB }}
    >
      <CaseStudyNav accent={BLUE} />
      <Hero />
      <TitleMeta />
      <div id="cot-content" className="flex flex-col gap-24 md:gap-28 py-20 md:py-28">
        <ProblemSection />
        <ProcessSection />
        <HandoffSection />
        <ImpactSection />
        <StickerPackSection />
        <LearnedSection />
      </div>
      <OtherCaseStudies />
    </main>
  );
}
