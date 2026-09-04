import Image from "next/image";
import type { ReactNode } from "react";
import { Newsreader, Roboto } from "next/font/google";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import Reveal from "@/components/Reveal";
import { CaseStudyNav } from "./CaseStudyNav";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

const PF = "var(--font-newsreader)";
const RB = "var(--font-roboto)";

// ─── Warm palette, sampled from the screenshots ────────────────────────
const PAGE_BG = "#EDE7DD";
const INK = "#2E2A24";
const BODY = "#6E6558";
const META = "#948B7C";
const RUST = "#B0674A";
const PLUM = "#9C6675";
const MAUVE = "#A87E8A";
const OLIVE = "#8A9A6A";
const ROSE = "#EAD4CD";
const TAN = "#E3D6C1";
const SAGE = "#D3D9BF";
const OLIVE_T = "#CDD5B4";
const RULE = "rgba(46,42,36,0.16)";
const CARD_BORDER = "rgba(46,42,36,0.12)";

const TOTAL = "06";
const eyebrow = { fontFamily: RB, fontWeight: 700, fontSize: 10.5, letterSpacing: "0.18em" } as const;
const bodyP = { fontFamily: RB, fontSize: 15, lineHeight: "1.78em", color: BODY } as const;

// ─── Icons ────────────────────────────────────────────────────────────
function IconLayers({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2 2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function IconSend({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
  );
}
function IconGrid({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconWaveform({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="9" width="2" height="6" rx="1" />
      <rect x="6.5" y="5" width="2" height="14" rx="1" />
      <rect x="11" y="2" width="2" height="20" rx="1" />
      <rect x="15.5" y="5" width="2" height="14" rx="1" />
      <rect x="20" y="9" width="2" height="6" rx="1" />
    </svg>
  );
}
function IconSparkle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c0 5.523-4.477 10-10 10 5.523 0 10 4.477 10 10 0-5.523 4.477-10 10-10-5.523 0-10-4.477-10-10z" />
    </svg>
  );
}
function IconVenn({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconTimeline({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="12" r="2.4" fill="currentColor" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      <circle cx="18" cy="12" r="2.4" fill="currentColor" />
    </svg>
  );
}
function IconLink({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M9 15l6-6M8 13l-2 2a3.5 3.5 0 0 0 5 5l2-2M16 11l2-2a3.5 3.5 0 0 0-5-5l-2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconClock({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Shared bits ──────────────────────────────────────────────────────
function SectionHead({ n, label, color }: { n: string; label: string; color: string }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-baseline gap-4">
        <span style={{ fontFamily: PF, fontWeight: 400, fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: 1, color }}>{n}</span>
        <span className="uppercase" style={{ fontFamily: RB, fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", color: INK }}>{label}</span>
        <span className="flex-1" />
        <span style={{ fontFamily: RB, fontSize: 11, letterSpacing: "0.1em", color: `${color}A6` }}>{n} / {TOTAL}</span>
      </div>
      <div className="h-px w-full" style={{ background: RULE }} />
    </div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 style={{ fontFamily: PF, fontWeight: 400, fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.14em", letterSpacing: "-0.01em", color: INK }}>
      {children}
    </h2>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      {children}
    </section>
  );
}

function MiniLabel({ children, color }: { children: string; color: string }) {
  return <p className="uppercase mb-2.5" style={{ ...eyebrow, fontSize: 10, color }}>{children}</p>;
}

// ═══════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════

const summary = [
  { Icon: IconLayers, title: "Tech Stack", tint: ROSE, ink: "#8C5B4A", body: "React, Vite, Tailwind, and Framer Motion up front. Node, Express, Prisma, and Supabase Postgres behind it — Supabase also handles auth and storage. Deployed on Vercel." },
  { Icon: IconSend, title: "AI Pipeline", tint: "#EBD3D2", ink: "#93636E", body: "Three models read every contribution in parallel: Claude Sonnet for themes, GPT-4o Vision for photos, Whisper for voice." },
  { Icon: IconGrid, title: "Four Outputs", tint: TAN, ink: "#8C7551", body: "Story, Constellation, Voices, and Archive — one memorial, rendered four different ways for whoever's viewing it." },
];

const overviewShots = [
  { src: "/images/remember/assets/landing-page.png", caption: "Landing page", w: 2880, h: 1800 },
  { src: "/images/remember/assets/organizer-signup.png", caption: "Sign In", w: 2880, h: 1800 },
  { src: "/images/remember/assets/organizer-dashboard.png", caption: "View Profiles", w: 2880, h: 1800 },
];

const insights = [
  { Icon: IconWaveform, label: "Voice", tint: ROSE, ink: "#93636E", body: "Hearing them again, in their own words." },
  { Icon: IconSparkle, label: "Quirks", tint: TAN, ink: "#8C7551", body: "The habits, sayings, and nicknames only people close to them knew." },
  { Icon: IconVenn, label: "Relational discoveries", tint: SAGE, ink: "#6E7A54", body: "What one circle knew that another never did." },
  { Icon: IconTimeline, label: "Life chapters", tint: OLIVE_T, ink: "#6E7A54", body: "How their story moved through time." },
];

const roles = [
  { role: "Organizer", bar: RUST, tint: ROSE, body: "Creates the memorial, invites people, and clicks Generate. Also a contributor themselves — same five steps as everyone else." },
  { role: "Contributor", bar: PLUM, tint: "#EBD3D2", body: "Opens an invite link, no account needed. Tags a relationship, answers a short questionnaire, uploads photos and voice." },
  { role: "Viewer", bar: TAN, tint: TAN, body: "Reads the finished memorial, read-only. Designed as fully public — scoped to organizer-only for the MVP demo." },
];

const contributeSteps = [
  "Open the link",
  "Tag the relationship",
  "Answer the questionnaire",
  "Upload photos + voice",
  "Review & confirm",
];

const pipelineModels = [
  { model: "Claude Sonnet", title: "Reads every questionnaire response" },
  { model: "GPT-4o Vision", title: "Reads every photo" },
  { model: "Whisper", title: "Transcribes every recording" },
];

const outputShots = [
  { src: "/images/remember/assets/organizer-view-story.png", caption: "Story", w: 2880, h: 2000 },
  { src: "/images/remember/assets/organizer-view-constellation-themes.png", caption: "Constellation", w: 2880, h: 6902 },
  { src: "/images/remember/assets/organizer-view-voices.png", caption: "Voices", w: 2880, h: 2514 },
  { src: "/images/remember/assets/organizer-archive-refined.png", caption: "Collection Archive", w: 2880, h: 2724 },
];

const curateScreens = [
  { src: "/images/remember/assets/organizer-signup.png", caption: "Create their profile", w: 2880, h: 1800 },
  { src: "/images/remember/assets/organizer-share-link.png", caption: "Invite contributors", w: 2880, h: 1800 },
  { src: "/images/remember/assets/organizer-review-contributions.png", caption: "Review contributions", w: 2880, h: 1800 },
];

const myRole = [
  { Icon: IconSparkle, title: "AI in my own workflow", tint: OLIVE_T, ink: "#6E7A54", body: "Figma Make and Google Gemini for rapid concepting, refined by hand in Figma." },
  { Icon: IconLink, title: "Working with the model, not the mockup", tint: ROSE, ink: "#93636E", body: "Close collaboration with the engineers on what Claude, GPT-4o, and Whisper would actually return — so the UI wasn't designed for data that didn't exist." },
  { Icon: IconClock, title: "Shipping on a real clock", tint: TAN, ink: "#8C7551", body: "Wireframes, a developer pitch, a 14-section PRD, 36 user stories — ending in a live demo day." },
];

const iterationPanels = [
  { src: "/images/remember/assets/figma-make-constellation.png", label: "Constellation", w: 576, h: 702 },
  { src: "/images/remember/assets/figma-make-voices.png", label: "Voices", w: 576, h: 702 },
  { src: "/images/remember/assets/figma-make-archive.png", label: "Collection Archive", w: 576, h: 702 },
];

const palette = [
  { hex: "#F2ECE4", name: "Warm Canvas", light: true },
  { hex: "#6C7C5B", name: "Olive · Primary" },
  { hex: "#B7C19A", name: "Sage", light: true },
  { hex: "#D0BFAA", name: "Warm Tan", light: true },
  { hex: "#EDCDC2", name: "Dusty Rose", light: true },
  { hex: "#0A0A0A", name: "Ink" },
];

const componentTags = [
  "natural-language search", "node-map data visualization", "relationship-type legend",
  "italic AI-extracted pull-quotes", "full-pill buttons", "dashed drag-and-drop zones",
  "tabbed Archive / Contributions / Outputs", "single shared invite link pattern",
];

// ═══════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════

export default function Remember() {
  return (
    <main
      className={`min-h-screen ${newsreader.variable} ${roboto.variable}`}
      style={{ backgroundColor: PAGE_BG, fontFamily: RB }}
    >
      <CaseStudyNav accent={RUST} />

      {/* ── Top: eyebrow, then the bird + wordmark lockup as the title, then meta ── */}
      <div className="w-full max-w-[1168px] mx-auto px-6 md:px-0 pt-24 md:pt-28 flex flex-col gap-7">
        <Reveal>
          <p style={{ ...eyebrow, fontWeight: 500, fontSize: 11, letterSpacing: "0.1455em", color: RUST }} className="uppercase">
            Case Study 02 &middot; Remember — A Personal Project
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="flex items-center gap-4">
            <Image
              src="/images/remember/assets/logo-icon.png"
              alt=""
              width={136}
              height={144}
              style={{ height: "clamp(46px, 5.6vw, 70px)", width: "auto" }}
              priority
            />
            <span style={{ fontFamily: PF, fontWeight: 400, fontSize: "clamp(40px, 5vw, 62px)", lineHeight: "1.12em", letterSpacing: "-0.02em", color: INK }}>
              Remember
            </span>
          </h1>
        </Reveal>
        <Reveal delay={170}>
          <p className="max-w-[880px]" style={{ fontFamily: PF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(19px, 2.1vw, 25px)", lineHeight: "1.45em", color: BODY }}>
            A private, invite-only space where AI turns everyone&rsquo;s memories of one person into a single, living portrait.
          </p>
        </Reveal>

        <div className="h-px w-full mt-2" style={{ background: RULE }} />
        <div className="flex flex-wrap gap-x-8 gap-y-6">
          {[
            { label: "ROLE", value: "UX Designer" },
            { label: "PROGRAM", value: "PM Accelerator · 11-Week Cohort" },
            { label: "TEAM", value: "1 PM · 3 Designers · 4 Engineers" },
            { label: "TIMELINE", value: "April – June 2026" },
          ].map((m) => (
            <div key={m.label} style={{ flex: "1 1 180px" }}>
              <p className="uppercase mb-2.5" style={{ fontFamily: RB, fontWeight: 700, fontSize: 10, letterSpacing: "0.16em", color: META }}>{m.label}</p>
              <p style={{ fontFamily: RB, fontSize: 13.5, lineHeight: "1.5em", color: INK }}>{m.value}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="uppercase mb-3" style={{ fontFamily: RB, fontWeight: 700, fontSize: 10, letterSpacing: "0.16em", color: META }}>TOOLS</p>
          <div className="flex flex-wrap gap-2">
            {["Figma", "Figma Make", "Gemini"].map((t) => (
              <span key={t} className="rounded-full" style={{ padding: "6px 16px", background: "#FFFFFF", border: `1px solid ${CARD_BORDER}`, fontFamily: RB, fontSize: 12, color: INK }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div id="remember-content" className="flex flex-col gap-24 md:gap-28 py-20 md:py-28">
        {/* ══ 01 — OVERVIEW ══ */}
        <Section id="overview">
          <SectionHead n="01" label="Overview" color={RUST} />
          <SectionHeading>What is Remember?</SectionHeading>
          <p className="max-w-[920px]" style={{ fontFamily: RB, fontSize: 19, lineHeight: "1.6em", color: INK }}>
            Someone who&rsquo;s lost a person they love collects memories from everyone who knew them — AI synthesizes it
            all into a single portrait.
          </p>

          <div className="h-px w-full" style={{ background: RULE }} />
          <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-x-12 gap-y-8">
            <div className="flex flex-col gap-8">
              <div>
                <MiniLabel color={RUST}>Context</MiniLabel>
                <p style={bodyP}>Built during a PM Accelerator cohort.</p>
              </div>
            </div>
            <div>
              <MiniLabel color={RUST}>My Role</MiniLabel>
              <p style={bodyP}>
                I designed every screen and the logo, and worked closely with engineering on how our AI pipeline&rsquo;s
                output needed to be structured for the UI to render it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {summary.map((s) => (
              <div key={s.title} className="rounded-2xl p-6 md:p-7 flex flex-col gap-4" style={{ background: s.tint, border: `1px solid ${CARD_BORDER}` }}>
                <span className="inline-flex items-center justify-center rounded-lg" style={{ width: 34, height: 34, background: "rgba(255,255,255,0.55)", color: s.ink }}>
                  <s.Icon size={18} />
                </span>
                <p style={{ fontFamily: RB, fontWeight: 700, fontSize: 15, color: INK }}>{s.title}</p>
                <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.7em", color: BODY }}>{s.body}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {overviewShots.map((s) => (
              <div key={s.caption} className="flex flex-col gap-2">
                <div className="rounded-xl overflow-hidden bg-white" style={{ border: `1px solid ${CARD_BORDER}` }}>
                  <Image src={s.src} alt={s.caption} width={s.w} height={s.h} className="w-full h-auto" sizes="(min-width: 768px) 30vw, 100vw" />
                </div>
                <p style={{ fontFamily: RB, fontSize: 12, color: META }}>{s.caption}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ══ 02 — RESEARCH ══ */}
        <Section id="research">
          <SectionHead n="02" label="Research" color={PLUM} />
          <SectionHeading>What people actually want from a memorial</SectionHeading>
          <p className="max-w-[900px]" style={{ fontFamily: PF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(19px, 2.1vw, 25px)", lineHeight: "1.45em", color: BODY }}>
            &ldquo;Voice, quirks, relational discoveries, and life chapters — not a photo dump.&rdquo;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {insights.map((i) => (
              <div key={i.label} className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: i.tint, border: `1px solid ${CARD_BORDER}` }}>
                <span className="inline-flex items-center justify-center rounded-lg" style={{ width: 30, height: 30, background: "rgba(255,255,255,0.55)", color: i.ink }}>
                  <i.Icon size={16} />
                </span>
                <p style={{ fontFamily: RB, fontWeight: 700, fontSize: 13.5, color: INK }}>{i.label}</p>
                <p style={{ fontFamily: RB, fontSize: 12.5, lineHeight: "1.65em", color: BODY }}>{i.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ══ 03 — PRODUCT (Three Roles) ══ */}
        <Section id="roles">
          <SectionHead n="03" label="Product" color={MAUVE} />
          <SectionHeading>Three Roles</SectionHeading>
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
            {roles.map((r, idx) => (
              <div key={r.role} className="contents">
                <div className="flex flex-col gap-3.5 rounded-2xl p-6 md:p-7 flex-1" style={{ background: r.tint, border: `1px solid ${CARD_BORDER}` }}>
                  <span className="rounded-full" style={{ width: 30, height: 4, background: r.bar }} />
                  <p style={{ fontFamily: PF, fontWeight: 600, fontSize: 24, color: INK }}>{r.role}</p>
                  <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.72em", color: BODY }}>{r.body}</p>
                </div>
                {idx < roles.length - 1 && (
                  <div className="hidden md:flex items-center justify-center px-3" style={{ color: "rgba(46,42,36,0.3)" }}>&rarr;</div>
                )}
              </div>
            ))}
          </div>

          {/* Full web flow diagram */}
          <div className="flex flex-col gap-4 mt-4">
            <p className="uppercase" style={{ ...eyebrow, fontSize: 10, color: META }}>Full Web Flow</p>
            <div className="flex flex-wrap items-center gap-5" style={{ fontFamily: RB, fontSize: 11.5, color: BODY }}>
              {[
                { c: "#7BAE63", t: "Completed" },
                { c: "#E4C558", t: "WIP" },
                { c: "#D46A4A", t: "Not started/missing" },
              ].map((l) => (
                <span key={l.t} className="inline-flex items-center gap-2">
                  <span className="rounded-sm" style={{ width: 11, height: 11, background: l.c }} />
                  {l.t}
                </span>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden bg-white" style={{ border: `1px solid ${CARD_BORDER}` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/remember/assets/full-web-flow.png" alt="Full web flow — Organizer, Contributor, and Viewer paths" className="w-full h-auto block" />
            </div>
          </div>
        </Section>

        {/* ══ 04 — THE PROCESS ══ */}
        <Section id="flow">
          <SectionHead n="04" label="The Process" color={OLIVE} />
          <SectionHeading>From memory to memorial</SectionHeading>
          <p className="max-w-[900px]" style={bodyP}>
            Contribution, AI processing, and organizer curation aren&rsquo;t separate features — they&rsquo;re one
            continuous pipeline.
          </p>

          <div className="relative flex flex-col gap-14 md:gap-16">
            <div className="absolute left-[17px] top-4 bottom-4 w-px" style={{ background: RULE }} />

            {/* 01 — Contribute */}
            <div className="relative flex gap-5 md:gap-7">
              <span className="relative z-10 flex-shrink-0 rounded-full flex items-center justify-center" style={{ width: 36, height: 36, background: OLIVE, color: "#FFFFFF", fontFamily: RB, fontWeight: 700, fontSize: 12 }}>01</span>
              <div className="flex-1 min-w-0 pt-1">
                <p style={{ fontFamily: RB, fontWeight: 700, fontSize: 19, color: INK }} className="mb-2">Contribute</p>
                <p className="max-w-xl mb-6" style={bodyP}>Five short steps, no account needed — text or voice, autosaved as you go.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-5">
                  {contributeSteps.map((s, i) => (
                    <div key={s} className="flex flex-col gap-2.5 pt-3" style={{ borderTop: `1px solid ${RULE}` }}>
                      <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 11, letterSpacing: "0.06em", color: OLIVE }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ fontFamily: RB, fontSize: 12.5, lineHeight: "1.4em", color: INK }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 02 — AI Pipeline */}
            <div className="relative flex gap-5 md:gap-7">
              <span className="relative z-10 flex-shrink-0 rounded-full flex items-center justify-center" style={{ width: 36, height: 36, background: PLUM, color: "#FFFFFF", fontFamily: RB, fontWeight: 700, fontSize: 12 }}>02</span>
              <div className="flex-1 min-w-0 pt-1">
                <p style={{ fontFamily: RB, fontWeight: 700, fontSize: 19, color: INK }} className="mb-2">AI Pipeline</p>
                <p className="max-w-xl mb-6" style={bodyP}>Three models read every contribution in parallel the moment the organizer clicks Generate.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {pipelineModels.map((p) => (
                    <div key={p.model} className="rounded-xl p-5 flex flex-col gap-2.5 bg-white" style={{ border: `1px solid ${CARD_BORDER}` }}>
                      <p className="uppercase" style={{ fontFamily: RB, fontWeight: 700, fontSize: 10, letterSpacing: "0.14em", color: RUST }}>{p.model}</p>
                      <p style={{ fontFamily: RB, fontWeight: 500, fontSize: 14, lineHeight: "1.5em", color: INK }}>{p.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 03 — Four Outputs */}
            <div className="relative flex gap-5 md:gap-7">
              <span className="relative z-10 flex-shrink-0 rounded-full flex items-center justify-center" style={{ width: 36, height: 36, background: "#8C6B54", color: "#FFFFFF", fontFamily: RB, fontWeight: 700, fontSize: 12 }}>03</span>
              <div className="flex-1 min-w-0 pt-1">
                <p style={{ fontFamily: RB, fontWeight: 700, fontSize: 19, color: INK }} className="mb-2">Four Outputs (Lo-Fidelity)</p>
                <p className="max-w-xl mb-6" style={bodyP}>Story, Constellation, Voices, and Archive — one memorial, four ways to experience it.</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {outputShots.map((s) => (
                    <div key={s.caption} className="flex flex-col gap-2">
                      <div className="rounded-xl overflow-hidden bg-white" style={{ border: `1px solid ${CARD_BORDER}`, aspectRatio: "3/4" }}>
                        <Image src={s.src} alt={s.caption} width={s.w} height={s.h} className="w-full h-full object-cover object-top" sizes="(min-width: 768px) 22vw, 45vw" />
                      </div>
                      <p style={{ fontFamily: RB, fontSize: 12, color: META }}>{s.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 04 — Curate & Share */}
            <div className="relative flex gap-5 md:gap-7">
              <span className="relative z-10 flex-shrink-0 rounded-full flex items-center justify-center" style={{ width: 36, height: 36, background: RUST, color: "#FFFFFF", fontFamily: RB, fontWeight: 700, fontSize: 12 }}>04</span>
              <div className="flex-1 min-w-0 pt-1">
                <p style={{ fontFamily: RB, fontWeight: 700, fontSize: 19, color: INK }} className="mb-2">Curate &amp; Share (Lo-Fidelity)</p>
                <p className="max-w-xl mb-6" style={bodyP}>The organizer&rsquo;s side, running the whole time: invite, review, and share.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {curateScreens.map((s) => (
                    <div key={s.caption} className="flex flex-col gap-2">
                      <div className="rounded-xl overflow-hidden bg-white" style={{ border: `1px solid ${CARD_BORDER}`, aspectRatio: "4/3" }}>
                        <Image src={s.src} alt={s.caption} width={s.w} height={s.h} className="w-full h-full object-cover object-top" sizes="(min-width: 768px) 30vw, 100vw" />
                      </div>
                      <p style={{ fontFamily: RB, fontSize: 12, color: META }}>{s.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-7 md:p-8 flex flex-col gap-2.5 mt-4" style={{ background: `${ROSE}`, border: `1px solid ${CARD_BORDER}` }}>
            <p className="uppercase" style={{ ...eyebrow, fontSize: 10, color: "#93636E" }}>AI trust &amp; safety</p>
            <p className="max-w-2xl" style={{ fontFamily: RB, fontSize: 14, lineHeight: "1.7em", color: INK }}>
              Two patterns, not one: inappropriate submissions are screened before an organizer sees them, and anything
              flagged as a <em>hardship</em> is held back until the organizer explicitly approves it.
            </p>
          </div>
        </Section>

        {/* ══ 05 — MY ROLE ══ */}
        <Section id="my-role">
          <SectionHead n="05" label="My Role" color={PLUM} />
          <SectionHeading>Designing alongside AI</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {myRole.map((p) => (
              <div key={p.title} className="rounded-2xl p-6 md:p-7 flex flex-col gap-4" style={{ background: p.tint, border: `1px solid ${CARD_BORDER}` }}>
                <span className="inline-flex items-center justify-center rounded-lg" style={{ width: 34, height: 34, background: "rgba(255,255,255,0.55)", color: p.ink }}>
                  <p.Icon size={18} />
                </span>
                <p style={{ fontFamily: RB, fontWeight: 700, fontSize: 15, color: INK }}>{p.title}</p>
                <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.7em", color: BODY }}>{p.body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <p className="uppercase" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: "#6E7A54" }}>Rapid Iteration With Figma Make</p>
            <p style={{ fontFamily: RB, fontSize: 11.5, lineHeight: "1.52em", color: META }}>
              [These are the shipped output panels &mdash; swap in the Figma Make explorations when you have them.]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {iterationPanels.map((p) => (
              <div key={p.label} className="flex flex-col gap-2.5">
                <div className="rounded overflow-hidden bg-white" style={{ border: `1px solid ${CARD_BORDER}`, aspectRatio: "3 / 2" }}>
                  <Image src={p.src} alt={`${p.label} output panel`} width={p.w} height={p.h} className="w-full h-full object-cover" style={{ objectPosition: "50% 56%" }} sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <p style={{ fontFamily: RB, fontSize: 12, color: "rgba(46,42,36,0.6)" }}>{p.label}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ══ 06 — DESIGN SYSTEM ══ */}
        <Section id="design-system">
          <SectionHead n="06" label="UI Foundations" color={OLIVE} />
          <SectionHeading>Design System</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center rounded-2xl p-7 md:p-8" style={{ background: OLIVE_T, border: `1px solid ${CARD_BORDER}` }}>
            <div className="rounded-xl p-6 flex items-center justify-center bg-white" style={{ border: `1px solid ${CARD_BORDER}` }}>
              <Image src="/images/remember/assets/logo-icon.png" alt="Remember dove mark" width={136} height={144} style={{ width: 64, height: "auto" }} />
            </div>
            <div>
              <MiniLabel color="#6E7A54">Logo — designed independently</MiniLabel>
              <p style={{ fontFamily: RB, fontSize: 14.5, lineHeight: "1.7em", color: INK }}>
                A hand-drawn dove cradling a heart — a quiet symbol of peace and remembrance, paired with a serif wordmark
                to keep the brand personal rather than corporate.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl p-7 md:p-8" style={{ background: ROSE, border: `1px solid ${CARD_BORDER}` }}>
              <MiniLabel color="#93636E">Emotional Moments</MiniLabel>
              <p className="mb-3" style={{ fontFamily: PF, fontWeight: 400, fontSize: "clamp(28px, 3.2vw, 38px)", color: INK }}>Serif Display</p>
              <p style={{ fontFamily: RB, fontSize: 13.5, lineHeight: "1.7em", color: BODY }}>
                Names, dates, AI-extracted quotes, the questionnaire — anywhere the product needed to feel personal.
              </p>
            </div>
            <div className="rounded-2xl p-7 md:p-8" style={{ background: SAGE, border: `1px solid ${CARD_BORDER}` }}>
              <MiniLabel color="#6E7A54">Everyday UI</MiniLabel>
              <p className="mb-3" style={{ fontFamily: RB, fontWeight: 700, fontSize: "clamp(30px, 3.6vw, 44px)", color: INK }}>Sans UI</p>
              <p style={{ fontFamily: RB, fontSize: 13.5, lineHeight: "1.7em", color: BODY }}>
                Navigation, dashboards, forms — legible and quiet so it never competes with what someone submitted.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="uppercase" style={{ ...eyebrow, fontSize: 10, color: META }}>Colour Palette — sampled from the product</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {palette.map((c) => (
                <div key={c.hex} className="rounded-xl overflow-hidden flex flex-col justify-end" style={{ height: 128, background: c.hex, border: `1px solid ${CARD_BORDER}` }}>
                  <div className="p-3" style={{ background: "rgba(0,0,0,0.1)" }}>
                    <p style={{ fontFamily: RB, fontWeight: 600, fontSize: 11, color: c.light ? "#26221C" : "#F3F0EA" }}>{c.hex}</p>
                    <p style={{ fontFamily: RB, fontSize: 10.5, color: c.light ? "rgba(38,34,28,0.6)" : "rgba(243,240,234,0.7)" }}>{c.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: RB, fontSize: 12, lineHeight: "1.6em", color: META }}>
              Tan, rose, and sage double as the relationship legend on the Constellation map — family, friend, and colleague.
            </p>
          </div>

          <div className="rounded-2xl p-7 md:p-8" style={{ background: "#FFFFFF", border: `1px solid ${CARD_BORDER}` }}>
            <p className="uppercase mb-5" style={{ ...eyebrow, fontSize: 10, color: META }}>Recurring Patterns</p>
            <div className="flex flex-wrap gap-2.5">
              {componentTags.map((tag) => (
                <span key={tag} className="rounded-full" style={{ padding: "7px 15px", fontFamily: RB, fontSize: 12.5, color: "#6E7A54", background: `${SAGE}`, border: `1px solid ${CARD_BORDER}` }}>{tag}</span>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* ── Closing ── */}
      <section className="w-full max-w-[1168px] mx-auto px-6 md:px-0 pb-20 md:pb-28 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-baseline gap-4">
            <span style={{ fontFamily: PF, fontWeight: 400, fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: 1, color: RUST }}>&mdash;</span>
            <span className="uppercase" style={{ fontFamily: RB, fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", color: INK }}>Closing</span>
            <span className="flex-1" />
            <span className="uppercase" style={{ fontFamily: RB, fontSize: 11, letterSpacing: "0.1em", color: `${RUST}A6` }}>Closer</span>
          </div>
          <div className="h-px w-full" style={{ background: RULE }} />
        </div>
        <p className="max-w-[940px]" style={{ fontFamily: PF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 2.6vw, 32px)", lineHeight: "1.4em", color: INK }}>
          Eleven weeks from a discovery interview to a live demo day — designing the interface for three AI models that had
          never met each other before this product asked them to.
        </p>
        <a
          href="https://remember-two-pi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full transition-transform hover:-translate-y-0.5 self-start"
          style={{ padding: "12px 24px", background: OLIVE, color: "#FFFFFF", fontFamily: RB, fontWeight: 500, fontSize: 13.5, letterSpacing: "0.02em" }}
        >
          View Live Site &rarr;
        </a>
      </section>

      <MoreProjects currentSlug="remember" index={7} reserveNavGutter />
    </main>
  );
}
