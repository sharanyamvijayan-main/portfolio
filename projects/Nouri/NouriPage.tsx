import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Newsreader, Roboto, Fira_Code } from "next/font/google";
import { CaseStudyNav } from "./CaseStudyNav";
import { ProblemSolutionsScrolly, type ProblemSolutionItem } from "./ProblemSolutionsScrolly";
import Reveal from "@/components/Reveal";

// Same editorial type system as the AbbVie case studies:
// Newsreader (serif headings) · Roboto (body / eyebrows) · Fira Code (numerals).
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

const NR = "var(--font-newsreader)"; // serif — headings
const RB = "var(--font-roboto)";     // body / eyebrows / labels
const FC = "var(--font-fira-code)";  // numerals — section index + counter
const IR = "var(--font-inter)";      // Inter — kept banner lockup + design-system specimen only

// ─── Palette (Nouri brand, dark theme) ──────────────────────────────────
const DARK = "#1B1B1B";
const TEXT = "#F3F3F3";
const DIM = "#D5D5D5";
const CORAL = "#ED6A5F";
const CORAL_SOFT = "#F9AFA9";
const LEAF = "#86F442";
const LEAF_SOFT = "#BCFC94";
const LEAF_DIM = "#D0E67D";
const SKY = "#4285F4";
const PERI = "#A5BBDF";
const PURPLE = "#9C7CF0";

const SECTION_TOTAL = "08";
const rule = "rgba(255,255,255,0.14)";

// ─── Shared bits ────────────────────────────────────────────────────────

function Eyebrow({ children, color = CORAL }: { children: string; color?: string }) {
  return (
    <p className="uppercase" style={{ fontFamily: RB, fontWeight: 600, fontSize: 10.5, letterSpacing: "0.18em", color }}>
      {children}
    </p>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(30px, 3.7vw, 46px)", lineHeight: "1.15em", color: TEXT }}>
      {children}
    </h2>
  );
}

/** Numbered section header — coral serif index, caps label, "0X / 08" counter, hairline. */
function SectionHead({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-baseline gap-4">
        <span style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(32px, 3.8vw, 46px)", lineHeight: 1, color: CORAL }}>{n}</span>
        <span className="uppercase" style={{ fontFamily: RB, fontWeight: 700, fontSize: 12, letterSpacing: "0.18em", color: TEXT }}>{label}</span>
        <span className="flex-1" />
        <span style={{ fontFamily: RB, fontWeight: 400, fontSize: 11, letterSpacing: "0.1em", color: "rgba(255,255,255,0.32)" }}>{n} / {SECTION_TOTAL}</span>
      </div>
      <div className="h-px w-full" style={{ background: rule }} />
    </div>
  );
}

/** Un-numbered marker (for "The Process") — eyebrow + hairline only. */
function MarkerHead({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-4">
      <Eyebrow>{label}</Eyebrow>
      <div className="h-px w-full" style={{ background: rule }} />
    </div>
  );
}

function Section({ id, children, gap = 40 }: { id: string; children: ReactNode; gap?: number }) {
  return (
    <section id={id} className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col min-w-0" style={{ gap }}>
      {children}
    </section>
  );
}

const bodyP: CSSProperties = { fontFamily: RB, fontSize: 15, lineHeight: "1.8em", color: DIM };

// ═══════════════════════════════════════════════════════════════════════
// HERO — the original Nouri banner, kept exactly
// ═══════════════════════════════════════════════════════════════════════

function IntroMacBook({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: "1618 / 1028.79" }}>
      <Image src="/images/nouri/figma/macbook-shell.png" alt="MacBook Pro" fill style={{ objectFit: "contain" }} priority sizes="100vw" />
      <div className="absolute overflow-hidden" style={{ left: "12.42%", top: "11.08%", width: "75.04%", height: "76.65%" }}>
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} sizes="100vw" />
      </div>
    </div>
  );
}

function NouriLogo() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "225 / 203.11", containerType: "inline-size" }}>
      <div className="absolute" style={{ left: "0%", top: "0%", width: "86.4%" }}>
        <Image src="/images/nouri/figma/logo-spoon.svg" alt="" width={195} height={51} className="w-full h-auto" />
      </div>
      <div className="absolute" style={{ left: "0%", top: "26.5%", width: "85.9%" }}>
        <Image src="/images/nouri/figma/logo-fork.svg" alt="" width={194} height={61} className="w-full h-auto" />
      </div>
      <div className="absolute" style={{ left: "89.5%", top: "0%", width: "10.5%", height: "95.1%" }}>
        <Image src="/images/nouri/figma/logo-knife.svg" alt="" fill style={{ objectFit: "contain" }} />
      </div>
      <p className="absolute font-bold text-white text-center" style={{ left: 0, top: "56.7%", width: "87.6%", fontFamily: IR, fontSize: "32.34cqw", letterSpacing: "-0.05em" }}>
        Nouri.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: PERI }}>
      <div className="hidden md:block pt-24">
        <div className="relative w-full max-w-[1800px] mx-auto overflow-hidden" style={{ aspectRatio: "1400 / 800" }}>
          <div className="absolute" style={{ left: "6.571%", top: "6.75%", width: "16.071%" }}>
            <NouriLogo />
          </div>
          <div className="absolute" style={{ left: "55.786%", top: "22.5%", width: "38.857%" }}>
            <p aria-hidden="true" className="absolute inset-x-0 font-bold leading-none text-center select-none" style={{ fontFamily: IR, fontSize: "clamp(28px, 4.533vw, 64px)", letterSpacing: "-0.05em", top: "0.756em" }}>
              <span style={{ color: "rgba(237,106,95,0.15)" }}>Plan.</span>{" "}
              <span style={{ color: "rgba(134,244,66,0.15)" }}>Prep.</span>{" "}
              <span style={{ color: "rgba(66,133,244,0.15)" }}>Nourish.</span>
            </p>
            <p className="relative font-bold leading-none text-center" style={{ fontFamily: IR, fontSize: "clamp(28px, 4.533vw, 64px)", letterSpacing: "-0.05em" }}>
              <span style={{ color: CORAL }}>Plan.</span>{" "}
              <span style={{ color: LEAF }}>Prep.</span>{" "}
              <span style={{ color: SKY }}>Nourish.</span>
            </p>
          </div>
          <div className="absolute" style={{ left: "-7.786%", top: "30.25%", width: "115.571%" }}>
            <IntroMacBook src="/images/nouri/assets/app-calendar.png" alt="Nouri app – meal calendar" />
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center px-6 pt-24 pb-12 gap-8">
        <div style={{ width: "150px" }}>
          <NouriLogo />
        </div>
        <div className="w-full max-w-[520px]">
          <IntroMacBook src="/images/nouri/assets/app-calendar.png" alt="Nouri app – meal calendar" />
        </div>
        <p className="font-bold leading-tight text-center" style={{ fontFamily: IR, fontSize: "clamp(28px, 9vw, 44px)", letterSpacing: "-0.05em" }}>
          <span style={{ color: CORAL }}>Plan.</span>{" "}
          <span style={{ color: LEAF }}>Prep.</span>{" "}
          <span style={{ color: SKY }}>Nourish.</span>
        </p>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// TITLE + META
// ═══════════════════════════════════════════════════════════════════════

function TitleMeta() {
  return (
    <div className="max-w-[1168px] w-full mx-auto px-6 md:px-0 pt-16 md:pt-24 flex flex-col gap-7">
      <Reveal><Eyebrow>UI / UX Design &middot; Self-directed project</Eyebrow></Reveal>
      <Reveal delay={90}>
        <h1 style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(34px, 4.3vw, 62px)", lineHeight: "1.12em", letterSpacing: "-0.0129em", color: TEXT }}>
          Nouri. simplifies the process of meal prepping and makes{" "}
          <span style={{ color: LEAF }}>healthy eating feel effortless</span>.
        </h1>
      </Reveal>
      <Reveal delay={170}>
        <p className="max-w-[820px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.8em", color: "rgba(243,243,243,0.7)" }}>
          Fuel your week with meals planned in advance, generated grocery lists, and nutritional recipe suggestions.
        </p>
      </Reveal>
      <div className="h-px w-full mt-2" style={{ background: rule }} />
      <div className="flex flex-wrap gap-x-8 gap-y-6 mt-1">
        {[
          { label: "PROJECT", value: "UI / UX Design" },
          { label: "TIMELINE", value: "2025" },
          { label: "ROLE", value: "End-to-end UX & UI" },
          { label: "CONTEXT", value: "Self-directed (UIUC)" },
        ].map((m) => (
          <div key={m.label} style={{ flex: "1 1 190px" }}>
            <p className="mb-2.5" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: "rgba(255,255,255,0.45)" }}>{m.label}</p>
            <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.58em", color: TEXT }}>{m.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// THE PROCESS
// ═══════════════════════════════════════════════════════════════════════

const stages = [
  { stage: "Discover", bg: LEAF_SOFT, left: 4.813, top: 6.93, width: 18.06 },
  { stage: "Empathize", bg: CORAL_SOFT, left: 19.09, top: 21.91, width: 14.19 },
  { stage: "Define", bg: PERI, left: 33.28, top: 36.06, width: 16.73 },
  { stage: "Ideate", bg: CORAL, left: 49.93, top: 50.28, width: 19.91 },
  { stage: "UI Design", bg: LEAF, left: 65.45, top: 64.85, width: 15.6 },
  { stage: "User Testing", bg: SKY, left: 76.75, top: 79.59, width: 18.52 },
];
const gridLines = [16.51, 33.28, 50.04, 66.8, 83.57];

function ProcessSection() {
  return (
    <Section id="process" gap={40}>
      <MarkerHead label="The Process" />

      <div className="hidden md:block relative w-full overflow-hidden rounded-3xl" style={{ aspectRatio: "1400 / 480", background: "#F3F3F3" }}>
        {gridLines.map((l) => (
          <div key={l} className="absolute top-0 bottom-0" style={{ left: `${l}%`, borderLeft: "1px solid #D5D5D5" }} />
        ))}
        <div className="absolute flex items-center gap-1.5" style={{ left: "89.96%", top: "6%", fontFamily: FC, fontSize: 15, color: DARK }}>
          <Image src="/images/nouri/figma/timeline-icon.svg" alt="" width={16} height={16} style={{ width: "1em", height: "1em" }} />
          Timeline
        </div>
        {stages.map((s) => (
          <div key={s.stage} className="absolute flex items-center gap-2.5 rounded-2xl" style={{ left: `${s.left}%`, top: `${s.top}%`, width: `${s.width}%`, height: "13.35%", background: s.bg, paddingLeft: "1.2em" }}>
            <span className="rounded-full flex-shrink-0" style={{ width: "3%", height: "80%", background: DARK }} />
            <span style={{ fontFamily: RB, fontWeight: 500, fontSize: "clamp(12px, 1.4vw, 19px)", color: DARK }}>{s.stage}</span>
          </div>
        ))}
      </div>

      <div className="md:hidden rounded-3xl p-4 flex flex-col gap-3" style={{ background: "#F3F3F3" }}>
        {stages.map((s) => (
          <div key={s.stage} className="flex items-center gap-3 rounded-2xl px-4 py-4" style={{ background: s.bg }}>
            <span className="rounded-full flex-shrink-0" style={{ width: "4px", height: "24px", background: DARK }} />
            <span style={{ fontFamily: RB, fontWeight: 500, fontSize: "15px", color: DARK }}>{s.stage}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 01 — DEFINE
// ═══════════════════════════════════════════════════════════════════════

const objectives = [
  { label: "CREATE", labelColor: LEAF, bodyColor: LEAF_DIM, bg: "rgba(134,244,66,0.12)", body: "a user-friendly solution that streamlines meal planning, creates grocery lists, and surfaces nutritional recipes — all to make healthy eating more accessible." },
  { label: "EMPOWER", labelColor: CORAL, bodyColor: CORAL_SOFT, bg: "rgba(237,106,95,0.12)", body: "users to develop healthy eating habits, increasing quality of life and creating an all-round balanced lifestyle." },
  { label: "EQUIP", labelColor: SKY, bodyColor: PERI, bg: "rgba(66,133,244,0.12)", body: "users to value their nutrition in an efficient and intuitive way." },
];

function DefineSection() {
  return (
    <Section id="define" gap={40}>
      <SectionHead n="01" label="Define" />
      <Heading>Problem Statement</Heading>
      <p className="max-w-[900px]" style={bodyP}>
        With Nouri. we are addressing the challenge of maintaining a healthy diet and consistent meal prepping, which has a
        significant impact on college students and young working adults aged 18&ndash;30.{" "}
        <span style={{ color: TEXT }}>
          The importance of solving this problem lies in minimizing the barriers around potential users&apos; dietary
          restrictions, time constraints, and lack of cooking and meal-planning knowledge.
        </span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {objectives.map((o) => (
          <div key={o.label} className="rounded-2xl p-6 md:p-7 flex flex-col gap-4" style={{ background: o.bg, border: `1px solid ${o.labelColor}` }}>
            <p className="uppercase" style={{ fontFamily: RB, fontWeight: 700, fontSize: "clamp(17px, 1.8vw, 24px)", color: o.labelColor, letterSpacing: "0.05em" }}>{o.label}&hellip;</p>
            <p style={{ fontFamily: RB, fontSize: 13.5, lineHeight: "1.72em", color: o.bodyColor }}>{o.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 02 — RESEARCH
// ═══════════════════════════════════════════════════════════════════════

const methodCards = [
  { title: "Quantitative Research", items: ["Surveys"] },
  { title: "Qualitative Research", items: ["User Interviews", "Competitor Analysis"] },
];

const findings = [
  { n: "01", c: CORAL, title: "Pain Points", body: "users have when trying to maintain a balanced diet and meal-prepping" },
  { n: "02", c: SKY, title: "Barriers", body: "in the way of consistent meal planning + prepping" },
  { n: "03", c: LEAF, title: "Demographics", body: "of users' in relation to their views on meal planning + prepping (student, parent, commuter, etc.)" },
  { n: "04", c: PURPLE, title: "Expectations", body: "when choosing and following recipes (dietary restrictions, small portions, etc.)" },
];

function ResearchSection() {
  return (
    <Section id="research" gap={40}>
      <SectionHead n="02" label="Research" />
      <Heading>UX Research</Heading>

      <div className="flex flex-col gap-3">
        <Eyebrow>Guiding Question</Eyebrow>
        <p className="max-w-[1000px]" style={{ fontFamily: NR, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(19px, 2.1vw, 26px)", lineHeight: "1.5em", color: "#EDEDED" }}>
          How might we design a user-friendly approach to provide a simple solution to easy meal planning and maintaining a
          healthy diet to support college students and young adults in their busy and unpredictable schedules?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {methodCards.map((m) => (
          <div key={m.title} className="rounded-2xl flex flex-col gap-4" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.09)", padding: "26px 28px" }}>
            <p style={{ fontFamily: RB, fontWeight: 700, fontSize: "clamp(17px, 1.9vw, 21px)", color: TEXT }}>{m.title}</p>
            <div className="flex flex-wrap gap-2">
              {m.items.map((it) => (
                <span key={it} className="rounded-full" style={{ border: "1px solid rgba(255,255,255,0.28)", padding: "5px 14px", fontFamily: RB, fontSize: 12.5, color: "rgba(243,243,243,0.85)" }}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        <Eyebrow>Findings</Eyebrow>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {findings.map((f) => (
            <div key={f.n} className="rounded-2xl flex flex-col gap-2.5 p-6" style={{ background: `${f.c}1F`, border: `1px solid ${f.c}55`, borderTop: `3px solid ${f.c}` }}>
              <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 12, letterSpacing: "0.08em", color: f.c }}>{f.n}</span>
              <p style={{ fontFamily: RB, fontWeight: 700, fontSize: 19, color: TEXT }}>{f.title}</p>
              <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.65em", color: "rgba(243,243,243,0.7)" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 03 — USER PERSONA
// ═══════════════════════════════════════════════════════════════════════

const personaTags = ["receptive", "intuitive", "efficient", "data-driven"];
const behaviors = [
  { left: "taste-oriented", right: "health-oriented", pct: 75 },
  { left: "flexible diet", right: "strict diet", pct: 80 },
  { left: "time-conscious", right: "process-oriented", pct: 40 },
  { left: "spontaneous", right: "structured", pct: 55 },
  { left: "adventurous & experimental", right: "familiar", pct: 80 },
  { left: "budget-conscious", right: "luxury-focused", pct: 25 },
];
const personaCols = [
  { label: "Goals", tint: "rgba(134,244,66,0.12)", border: LEAF, items: ["eating more nutritious meals", "having more home-cooked meals", "developing good eating habits for corporate life in Chicago"] },
  { label: "Challenges", tint: "rgba(134,244,66,0.12)", border: LEAF, items: ["time to make a grocery list", "having groceries last through the week", "little time to make all meals", "finding recipes that fit her dietary restrictions"] },
  { label: "Pain Points", tint: "rgba(134,244,66,0.12)", border: LEAF, items: ["runs out of dish ideas", "allergic to gluten and shellfish — limits recipes", "hard to buy the right amount before expiration", "overbuys when overwhelmed by options"] },
];

function PersonaSection() {
  return (
    <Section id="persona" gap={40}>
      <SectionHead n="03" label="User Persona" />
      <Heading>User Persona</Heading>

      <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-5">
        {/* Profile card */}
        <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: SKY, border: `1px solid ${SKY}` }}>
          <div className="relative w-full" style={{ aspectRatio: "3 / 3.3" }}>
            <Image src="/images/nouri/assets/user-audrey-26d3db.png" alt="Audrey Harrison" fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="420px" />
          </div>
          <div className="flex flex-col gap-2.5" style={{ padding: "18px 20px 22px" }}>
            <p className="text-white" style={{ fontFamily: NR, fontWeight: 400, fontSize: 24, letterSpacing: "-0.01em" }}>Audrey Harrison</p>
            <p className="text-white/85" style={{ fontFamily: RB, fontSize: 12, lineHeight: "1.5em" }}>21 &middot; third-year student &middot; Major: Finance &middot; UIUC</p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {personaTags.map((t) => (
                <span key={t} className="rounded-full text-white" style={{ background: "rgba(237,106,95,0.85)", border: `1px solid ${CORAL}`, fontFamily: RB, fontSize: 10.5, padding: "2px 9px" }}>{t}</span>
              ))}
            </div>
            <p className="text-white mt-2" style={{ fontFamily: NR, fontStyle: "italic", fontWeight: 400, fontSize: 13.5, lineHeight: "1.55em" }}>
              &ldquo;Grocery shopping is so stressful because why do I feel the need to buy so many different things? Do I
              need this, and do I also need that? Is it worth the cost?&rdquo;
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          <div className="rounded-2xl p-6" style={{ background: "rgba(66,133,244,0.12)", border: `1px solid ${SKY}` }}>
            <p className="mb-2" style={{ fontFamily: NR, fontWeight: 400, fontSize: 18, color: TEXT }}>Background</p>
            <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.72em", color: "rgba(243,243,243,0.78)" }}>
              Audrey is a junior at the U of I on a health journey toward eating cleaner and prioritizing a healthy
              lifestyle. She recently landed a summer internship in Chicago — a 9-to-5 for three months — so she wants to
              form good cooking and eating habits while still on campus.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {personaCols.map((c) => (
              <div key={c.label} className="rounded-2xl p-5" style={{ background: c.tint, border: `1px solid ${c.border}` }}>
                <p className="mb-2.5" style={{ fontFamily: NR, fontWeight: 400, fontSize: 16, color: TEXT }}>{c.label}</p>
                <ul className="list-disc pl-4 flex flex-col gap-1.5" style={{ fontFamily: RB, fontSize: 11.5, lineHeight: "1.55em", color: "rgba(243,243,243,0.75)" }}>
                  {c.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl p-5" style={{ background: "rgba(237,106,95,0.12)", border: `1px solid ${CORAL}` }}>
              <p className="mb-2" style={{ fontFamily: NR, fontWeight: 400, fontSize: 16, color: TEXT }}>Needs</p>
              <ul className="list-disc pl-4 flex flex-col gap-1" style={{ fontFamily: RB, fontSize: 11.5, lineHeight: "1.5em", color: "rgba(243,243,243,0.75)" }}>
                <li>lasting groceries</li>
                <li>healthy + creative recipes (accommodating allergies)</li>
                <li>a schedule to cook against</li>
              </ul>
            </div>
            <div className="rounded-2xl p-5" style={{ background: "rgba(237,106,95,0.12)", border: `1px solid ${CORAL}` }}>
              <p className="mb-2" style={{ fontFamily: NR, fontWeight: 400, fontSize: 16, color: TEXT }}>Desires</p>
              <ul className="list-disc pl-4 flex flex-col gap-1" style={{ fontFamily: RB, fontSize: 11.5, lineHeight: "1.5em", color: "rgba(243,243,243,0.75)" }}>
                <li>grocery list generator</li>
                <li>meal-prep + cooking planner with healthy recipe selection</li>
                <li>beginner- and time-conscious-friendly meal prep</li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl p-6" style={{ background: "rgba(66,133,244,0.16)", border: `1px solid ${SKY}` }}>
            <p className="uppercase mb-4" style={{ fontFamily: RB, fontWeight: 600, fontSize: 11, letterSpacing: "0.14em", color: TEXT }}>Behaviors</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              {behaviors.map((b) => (
                <div key={b.left}>
                  <div className="flex justify-between mb-1" style={{ fontFamily: RB, fontSize: 10, color: "rgba(243,243,243,0.7)" }}>
                    <span>{b.left}</span><span>{b.right}</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: "rgba(66,133,244,0.35)" }}>
                    <div className="h-full rounded-full" style={{ width: `${b.pct}%`, background: SKY }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 04 — INFORMATION ARCHITECTURE
// ═══════════════════════════════════════════════════════════════════════

function ImgCard({ src, w, h, alt }: { src: string; w: number; h: number; alt: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
      <Image src={src} alt={alt} width={w} height={h} className="w-full h-auto" style={{ width: "100%", height: "auto" }} />
    </div>
  );
}

function IaSection() {
  return (
    <Section id="ia" gap={40}>
      <SectionHead n="04" label="Information Architecture" />
      <Heading>Information Architecture</Heading>
      <ImgCard src="/images/nouri/assets/ia-diagram-1.png" w={3491} h={1145} alt="Information architecture — full site map" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <ImgCard src="/images/nouri/assets/ia-diagram-2.png" w={2431} h={1645} alt="IA — Calendar Plan flow" />
        <ImgCard src="/images/nouri/assets/ia-diagram-3.png" w={2769} h={1444} alt="IA — Recipes flow" />
        <ImgCard src="/images/nouri/assets/ia-diagram-4.png" w={3058} h={1307} alt="IA — Grocery Lists flow" />
      </div>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 05 — DESIGN SYSTEM
// ═══════════════════════════════════════════════════════════════════════

const paletteTokens = [
  { name: "background-default", hex: "#F3F3F3" },
  { name: "surface-sidebar", hex: "#5B5B5B" },
  { name: "text-primary", hex: "#1B1B1B" },
  { name: "Logo Color 1", hex: "#ED6A5F" },
  { name: "Logo Color 2", hex: "#4285F4" },
  { name: "Logo Color 3", hex: "#86F442" },
];

const DASH = "1px dashed #9747FF";

function IconsPanel() {
  const icons = [
    "/images/nouri/figma/icon-calendar.svg",
    "/images/nouri/figma/logo-submark.svg",
    "/images/nouri/figma/icon-bag.svg",
    "/images/nouri/figma/icon-user.svg",
    "/images/nouri/figma/icon-settings.svg",
    "/images/nouri/figma/icon-heart.svg",
  ];
  const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];
  const dietary = [
    { emoji: "🌱" },
    { emoji: "🥩" },
    { v: true },
    { src: "/images/nouri/figma/symbol-fish.png" },
    { src: "/images/nouri/figma/symbol-kosher.png" },
    { src: "/images/nouri/figma/symbol-glutenfree.png" },
  ];
  return (
    <div className="rounded-2xl flex flex-col gap-4" style={{ background: "#313233", padding: "22px 22px 24px" }}>
      <p className="font-bold text-white" style={{ fontFamily: IR, fontSize: "clamp(24px, 2.6vw, 34px)", letterSpacing: "-0.03em" }}>Icons</p>
      <div className="flex flex-wrap gap-1.5">
        {icons.map((src) => (
          <div key={src} className="flex flex-col items-center justify-center gap-1.5 rounded" style={{ border: DASH, width: 44, height: 46 }}>
            <Image src={src} alt="" width={20} height={20} style={{ width: 15, height: 15 }} />
            <Image src={src} alt="" width={20} height={20} style={{ width: 15, height: 15, opacity: 0.55 }} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {days.map((d) => (
          <div key={d} className="flex flex-col items-center justify-center gap-1 rounded" style={{ border: DASH, width: 38, height: 46 }}>
            <span className="rounded-full flex items-center justify-center" style={{ width: 17, height: 17, background: "#D9D9D9", color: "#1B1B1B", fontSize: 8 }}>{d}</span>
            <span className="rounded-full flex items-center justify-center" style={{ width: 17, height: 17, background: "rgba(0,0,0,0.55)", color: "#fff", fontSize: 8 }}>{d}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        {dietary.map((item, i) => (
          <span key={i} className="rounded-full overflow-hidden flex items-center justify-center flex-shrink-0" style={{ width: 32, height: 32, fontSize: 17 }}>
            {item.src ? (
              <Image src={item.src} alt="" width={32} height={32} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : item.v ? (
              <span className="rounded-full flex items-center justify-center font-bold" style={{ width: "100%", height: "100%", border: "2px solid #0C632B", color: "#0C632B", fontSize: 12 }}>V</span>
            ) : (
              <span>{item.emoji}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function ButtonsPanel() {
  const btns = ["MyMeals", "Favorites", "Vegetarian"];
  const tags = ["Breakfast", "Lunch", "Dinner"];
  return (
    <div className="rounded-2xl flex flex-col gap-4" style={{ background: "rgba(255,255,255,0.72)", padding: "22px 22px 24px" }}>
      <p className="font-bold" style={{ fontFamily: IR, fontSize: "clamp(24px, 2.6vw, 34px)", letterSpacing: "-0.03em", color: "#F3F3F3" }}>Buttons</p>
      <div className="grid grid-cols-3 gap-2">
        {btns.map((b) => (
          <div key={b} className="flex flex-col gap-1.5 rounded-lg p-1.5" style={{ border: DASH }}>
            <span className="rounded-md text-center truncate" style={{ background: "rgba(0,0,0,0.28)", color: "#1B1B1B", fontSize: 10.5, padding: "6px 4px" }}>{b}</span>
            <span className="rounded-md text-center truncate" style={{ background: "rgba(0,0,0,0.55)", color: "#fff", fontSize: 10.5, padding: "6px 4px" }}>{b}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {tags.map((t) => (
          <div key={t} className="flex flex-col gap-1.5 rounded-lg p-1.5" style={{ border: DASH }}>
            <span className="rounded-full text-center truncate" style={{ background: "#D9D9D9", color: "#1B1B1B", fontSize: 10.5, fontWeight: 700, padding: "6px 4px" }}>{t}</span>
            <span className="rounded-full text-center truncate" style={{ background: "#000", color: "#fff", fontSize: 10.5, fontWeight: 700, padding: "6px 4px" }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoVariant({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex-1 flex items-end justify-center w-full" style={{ minHeight: 130 }}>{children}</div>
      <span style={{ fontFamily: NR, fontWeight: 400, fontSize: 16, color: "rgba(243,243,243,0.45)" }}>{label}</span>
    </div>
  );
}

function DesignSystemSection() {
  return (
    <Section id="design-system" gap={40}>
      <SectionHead n="05" label="Design System" />
      <Heading>Design System</Heading>
      <p className="max-w-[960px]" style={bodyP}>
        Nouri. uses the Inter typeface for its exceptional readability and minimalism. Its various font weights and modern
        style align with Nouri&rsquo;s mission to make healthy eating easy and accessible. Its vibrant blue, green, and red
        colour palette is designed to inspire a sense of freshness and positivity, creating a welcoming and motivational
        user experience throughout the app.
      </p>

      {/* Colour palette */}
      <div className="flex flex-col gap-4">
        <Eyebrow>Colour Palette &mdash; Design Tokens</Eyebrow>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {paletteTokens.map((c) => (
            <div key={c.name} className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.09)" }}>
              <div style={{ background: c.hex, height: 104 }} />
              <div className="flex flex-col gap-1" style={{ padding: "12px 14px 14px" }}>
                <span style={{ fontFamily: RB, fontSize: 11.5, color: TEXT }}>{c.name}</span>
                <span style={{ fontFamily: RB, fontSize: 10.5, color: "rgba(243,243,243,0.4)" }}>{c.hex}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typeface + components */}
      <div className="flex flex-col gap-5">
        <Eyebrow>Typeface &amp; Components</Eyebrow>
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr_1fr] gap-5 items-start">
          {/* Type spec */}
          <div className="flex flex-col gap-3">
            <div className="flex items-end gap-2">
              <span className="leading-none" style={{ fontFamily: IR, fontWeight: 500, fontSize: "clamp(52px, 6.5vw, 80px)", color: TEXT, letterSpacing: "-0.03em" }}>Inter</span>
              <span className="italic" style={{ fontFamily: NR, fontSize: 13, color: "rgba(243,243,243,0.5)", marginBottom: 8 }}>Typeface</span>
            </div>
            <p style={{ fontFamily: IR, fontSize: 15, color: DIM }}>
              <span style={{ fontWeight: 300 }}>Light</span> / Regular / <span style={{ fontWeight: 500 }}>Medium</span> / <span style={{ fontWeight: 700 }}>Bold</span>
            </p>
            <div className="pl-5 mt-3 flex flex-col gap-1.5" style={{ borderLeft: "1px solid rgba(255,255,255,0.2)" }}>
              <span className="italic mb-1" style={{ fontFamily: NR, fontSize: 12, color: "rgba(243,243,243,0.5)" }}>Font Weight and Size</span>
              <p style={{ fontFamily: IR, fontWeight: 700, fontSize: 34, color: TEXT, lineHeight: 1.1 }}>Heading 1</p>
              <p style={{ fontFamily: IR, fontWeight: 700, fontSize: 26, color: TEXT, lineHeight: 1.1 }}>Heading 2</p>
              <p style={{ fontFamily: IR, fontSize: 18, color: TEXT, lineHeight: 1.2 }}>Normal Text</p>
              <p className="italic" style={{ fontFamily: IR, fontSize: 12, color: "rgba(243,243,243,0.55)" }}>Captions</p>
            </div>
          </div>

          <IconsPanel />
          <ButtonsPanel />
        </div>
      </div>

      {/* Logo system */}
      <div className="flex flex-col gap-6">
        <Eyebrow>Logo System</Eyebrow>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-end">
          <LogoVariant label="Primary Logo">
            <div className="w-[78%]"><NouriLogo /></div>
          </LogoVariant>
          <LogoVariant label="Primary Logo with Tagline">
            <div className="w-full flex flex-col items-center gap-2">
              <div className="w-[92%]"><NouriLogo /></div>
              <p className="font-bold text-center" style={{ fontFamily: IR, fontSize: "clamp(11px, 1.3vw, 15px)", letterSpacing: "-0.04em" }}>
                <span style={{ color: CORAL }}>Plan.</span> <span style={{ color: LEAF }}>Prep.</span> <span style={{ color: SKY }}>Nourish.</span>
              </p>
            </div>
          </LogoVariant>
          <LogoVariant label="Wordmark">
            <span className="font-bold text-white" style={{ fontFamily: IR, fontSize: "clamp(38px, 5vw, 58px)", letterSpacing: "-0.05em" }}>Nouri.</span>
          </LogoVariant>
          <LogoVariant label="Submark">
            <div style={{ width: 84 }}><Image src="/images/nouri/figma/logo-submark.svg" alt="" width={131} height={169} className="w-full h-auto" /></div>
          </LogoVariant>
        </div>
      </div>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 06 — IDEATION
// ═══════════════════════════════════════════════════════════════════════

/** The month-calendar monitor cropped out of the paper-prototype collage. */
function PaperCalendarCrop() {
  return (
    <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: "627 / 527" }}>
      <Image
        src="/images/nouri/figma/sketch-paper-collage.png"
        alt="Paper prototype — calendar month view"
        width={2540}
        height={1367}
        className="absolute max-w-none"
        style={{ width: "405%", left: "-2.9%", top: "-5.3%", height: "auto" }}
      />
    </div>
  );
}

type SketchStep = { n: string; c: string; label: string; src?: string; w?: number; h?: number; crop?: boolean };

const sketchProgression: SketchStep[] = [
  { n: "01", c: CORAL, label: "Rough Sketch", src: "/images/nouri/figma/sketch-frag-1.png", w: 694, h: 497 },
  { n: "02", c: SKY, label: "Paper Prototyping", crop: true },
  { n: "03", c: LEAF, label: "Lo-fi", src: "/images/nouri/figma/lofi-1.png", w: 3024, h: 1964 },
  { n: "04", c: PURPLE, label: "Mid-fi", src: "/images/nouri/figma/midfi-1.png", w: 3024, h: 1964 },
];

function IdeationSection() {
  return (
    <Section id="ideation" gap={40}>
      <SectionHead n="06" label="Ideation" />
      <Heading>Concept Sketches</Heading>
      <div className="flex flex-col gap-6">
        <Eyebrow>Fidelity Progression &mdash; the calendar screen, sketch to mid-fi</Eyebrow>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-start">
          {sketchProgression.map((s) => (
            <div key={s.n} className="flex flex-col gap-3">
              <div className="flex items-center gap-2 pt-3" style={{ borderTop: `3px solid ${s.c}` }}>
                <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 11, color: s.c }}>{s.n}</span>
                <span className="uppercase" style={{ fontFamily: RB, fontWeight: 600, fontSize: 9.5, letterSpacing: "0.12em", color: "rgba(243,243,243,0.7)" }}>{s.label}</span>
              </div>
              {s.crop ? (
                <PaperCalendarCrop />
              ) : (
                <div className="rounded-sm overflow-hidden">
                  <Image src={s.src as string} alt={`${s.label} — calendar screen`} width={s.w as number} height={s.h as number} className="w-full h-auto" style={{ width: "100%", height: "auto" }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 07 — UI DESIGN
// ═══════════════════════════════════════════════════════════════════════

function FlatShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-md overflow-hidden">
      <Image src={src} alt={alt} width={3024} height={1964} className="w-full h-auto" style={{ width: "100%", height: "auto" }} />
    </div>
  );
}

function UiDesignSection() {
  return (
    <Section id="ui-design" gap={40}>
      <SectionHead n="07" label="UI Design" />
      <Heading>Hi-Fidelity Prototypes</Heading>
      <div className="flex flex-col gap-6">
        <Eyebrow>Hi-fi Prototype</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FlatShot src="/images/nouri/assets/hifi-main.png" alt="Hi-fi — meal calendar, week view" />
          <FlatShot src="/images/nouri/assets/hifi-mealplan2.png" alt="Hi-fi — meal calendar with recipe browser" />
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 rounded-md overflow-hidden" style={{ width: "calc((100% - 60px) / 6)", minWidth: 110 }}>
              <Image src={`/images/nouri/assets/hifi-recipe-${i}.png`} alt={`Recipe screen ${i}`} width={i <= 2 ? 906 : 453} height={i <= 2 ? 1876 : 938} className="w-full h-auto" style={{ width: "100%", height: "auto" }} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FlatShot src="/images/nouri/assets/hifi-recipes.png" alt="Hi-fi — recipe library" />
          <FlatShot src="/images/nouri/assets/hifi-grocery.png" alt="Hi-fi — grocery list" />
        </div>
      </div>
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 08 — PROBLEM SOLUTIONS
// ═══════════════════════════════════════════════════════════════════════

const problemSolutions: ProblemSolutionItem[] = [
  {
    num: "01", title: "Calendar Plan", badgeColor: "#EC1E7C",
    problem: "Users struggle to visualize and plan meals in advance, leading to frustration and disorganization associated with healthy eating + cooking.",
    solution: "Centralized calendar allowing users to plan, track, and manage meals in an organized and consistent manner, simplifying meal planning and cooking.",
    screenSrc: "/images/nouri/assets/app-calendar.png",
    screenAlt: "Nouri – Calendar Plan",
    callouts: [
      { num: "01", side: "left", top: "15.76%", startY: 20.9, target: [34.63, 18.87], text: "Day/Week Toggle to switch between focused and broader view" },
      { num: "02", side: "right", top: "8.68%", startY: 14.29, target: [77.28, 18.87], text: "Easily add a meal to the plan" },
      { num: "03", side: "left", top: "61.42%", startY: 67.9, target: [52.83, 66.25], text: "Flexible meal times supporting snacks, etc." },
      { num: "04", side: "right", top: "42.60%", startY: 51.2, target: [67.46, 49.31], text: "Color coded meals to easily distinguish between different meals" },
    ],
  },
  {
    num: "02", title: "Adding Meal to Calendar Plan", badgeColor: "#5FD93F",
    problem: "Oftentimes, users lack access to key information like nutrition facts and meal prep time, making it more difficult to stay on track with health goals and manage cooking within their busy schedules.",
    solution: "Users are given key details to make informed choices, equipping them to build healthier habits and work towards their health goals with clarity and mindful planning.",
    screenSrc: "/images/nouri/assets/ps2-addmeal.png",
    screenAlt: "Nouri – Adding Meal",
    callouts: [
      { num: "01", side: "right", top: "22%", target: [77.42, 47.95], text: "Full meal overview: nutrition facts, prep time, serving size, and ingredients" },
      { num: "02", side: "right", top: "56%", target: [77.42, 67.74], text: "Color coding allows for further customization of calendar" },
      { num: "03", side: "right", top: "80%", target: [69.6, 78.04], text: "Meal scheduling flexibility" },
    ],
  },
  {
    num: "03", title: "Recipes", badgeColor: "#F0453D",
    problem: "Users run out of dish ideas and waste time searching for recipes that need to fit their preferences, adding more stress and leading to unhealthy takeout meals.",
    solution: "Recipe library with diverse selection to choose from and follow, allowing users to easily fulfill their nutritional goals and requirements.",
    screenSrc: "/images/nouri/assets/hifi-recipes.png",
    screenAlt: "Nouri – Recipes",
    callouts: [
      { num: "01", side: "left", top: "16%", text: "Search and sort recipes by dietary preferences" },
      { num: "02", side: "right", top: "9%", text: "Save meals to Favorites folder and access MyMeals for personal recipes" },
      { num: "03", side: "left", top: "66%", text: "Serving size and dietary tags" },
    ],
  },
  {
    num: "04", title: "Grocery List", badgeColor: "#37D3DB",
    problem: "Time-consuming and tedious work to create grocery-lists by hand. This influences users to not make one, making it easy to forget ingredients and overspend, leading to food waste and more frustration.",
    solution: "Automatically generated grocery lists based on meals inputted into calendar plan. Allows user to shop efficiently and stress-free.",
    screenSrc: "/images/nouri/assets/hifi-grocery.png",
    screenAlt: "Nouri – Grocery List",
    callouts: [
      { num: "01", side: "left", top: "72%", text: "Manually add items to each category as needed" },
      { num: "02", side: "right", top: "9%", text: "Create custom grocery lists for more flexibility and control" },
      { num: "03", side: "right", top: "44%", text: "View recent and past grocery lists" },
    ],
  },
];

function ProblemSolutionsSection() {
  return (
    <section id="problem-solutions" className="scroll-mt-24">
      <div className="w-full max-w-[1168px] mx-auto px-6 md:px-0 flex flex-col gap-6">
        <SectionHead n="08" label="Problem Solutions" />
        <Heading>App Screens Showcase</Heading>
      </div>
      <ProblemSolutionsScrolly items={problemSolutions} />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// BRAND OUTRO
// ═══════════════════════════════════════════════════════════════════════

function BrandOutro() {
  return (
    <section style={{ background: DARK, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="max-w-[1168px] mx-auto px-6 md:px-0 py-24 md:py-28 flex flex-col items-center text-center gap-6">
        <div style={{ width: 60 }}>
          <Image src="/images/nouri/figma/logo-submark.svg" alt="" width={131} height={169} className="w-full h-auto" />
        </div>
        <p className="font-bold" style={{ fontFamily: IR, fontSize: "clamp(22px, 3vw, 40px)", letterSpacing: "-0.05em" }}>
          <span style={{ color: CORAL }}>Plan.</span> <span style={{ color: LEAF }}>Prep.</span> <span style={{ color: SKY }}>Nourish.</span>
        </p>
        <p className="font-bold leading-none" style={{ fontFamily: IR, fontSize: "clamp(64px, 12vw, 168px)", color: TEXT, letterSpacing: "-0.06em" }}>
          Nouri.
        </p>
        <p className="max-w-[540px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.8em", color: "rgba(243,243,243,0.6)" }}>
          Nouri. simplifies the process of meal prepping and makes healthy eating feel effortless.
        </p>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// MORE WORK
// ═══════════════════════════════════════════════════════════════════════

const otherWork = [
  { slug: "pinreal", label: "UX DESIGN · PRODUCT DESIGN", title: "PinReal.", body: "Where authenticity meets creativity — a BeReal. × Pinterest concept mashup.", grad: "linear-gradient(90deg, #2708A0 0%, #0B0630 100%)", color: "#8FA8FF" },
  { slug: "arco", label: "UX DESIGN · BRANDING", title: "Arco", body: "Coming soon.", grad: "linear-gradient(90deg, #DD0369 0%, #3A0B22 100%)", color: "#F695A4" },
  { slug: "oblique-vase", label: "INDUSTRIAL DESIGN", title: "Oblique Vase", body: "Coming soon.", grad: "linear-gradient(90deg, #09814A 0%, #06321E 100%)", color: "#7BD6A7" },
];

function MoreWork() {
  return (
    <section style={{ background: DARK, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="px-6 md:px-[136px] py-16 md:py-[78px] flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Eyebrow>More Work</Eyebrow>
          <Link href="/#work" className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.16em", color: "rgba(255,255,255,0.55)" }}>
            &larr; BACK TO ALL WORK
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherWork.map((s) => (
            <Link
              key={s.slug}
              href={`/work/${s.slug}`}
              className="flex flex-col rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div style={{ height: 120, background: s.grad }} />
              <div className="flex flex-col justify-between flex-1" style={{ padding: "22px 24px 24px" }}>
                <div className="flex flex-col gap-2.5">
                  <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.14em", color: s.color }}>{s.label}</span>
                  <span style={{ fontFamily: NR, fontWeight: 400, fontSize: 26, lineHeight: "1.2em", color: TEXT }}>{s.title}</span>
                  <span style={{ fontFamily: RB, fontSize: 12.5, lineHeight: "1.65em", color: "rgba(243,243,243,0.6)" }}>{s.body}</span>
                </div>
                <span className="mt-4" style={{ fontFamily: RB, fontWeight: 500, fontSize: 11, letterSpacing: "0.05em", color: s.color }}>SEE PROJECT &nbsp;&rarr;</span>
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

export default function Nouri() {
  return (
    <main
      className={`min-h-screen ${newsreader.variable} ${roboto.variable} ${firaCode.variable}`}
      style={{ backgroundColor: DARK, fontFamily: RB }}
    >
      <CaseStudyNav accent={LEAF} />
      <Hero />
      <TitleMeta />
      <div id="nouri-content" className="flex flex-col gap-24 md:gap-28 py-20 md:py-28">
        <ProcessSection />
        <DefineSection />
        <ResearchSection />
        <PersonaSection />
        <IaSection />
        <DesignSystemSection />
        <IdeationSection />
        <UiDesignSection />
        <ProblemSolutionsSection />
      </div>
      <BrandOutro />
      <MoreWork />
    </main>
  );
}
