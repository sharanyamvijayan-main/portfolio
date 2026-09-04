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

// Space Grotesk stands in for the hero's giant display moments — matches
// the treatment used on the other AbbVie sub-pages.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const NR = "var(--font-newsreader)";
const RB = "var(--font-roboto)";
const FC = "var(--font-fira-code)";

// ─── Palette, sampled straight from the Figma file ─────────────────────────
const NAVY = "#071D49";
const LAVENDER = "#7455AD";
const BLUE = "#0066F5";
const CYAN = "#00B4F5";
const GREEN = "#12A16E";
const INK = "#26262A";
const BODY = "#7A7A75";
const BODY2 = "#6A6A64";
const META = "#636363";
const PAGE_BG = "#FFFFFF";

const eyebrowStyle = { fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.16em" } as const;

function Eyebrow({ children, color = LAVENDER }: { children: string; color?: string }) {
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

/** Numbered section header: big index, eyebrow label, "0X / 06" counter, hairline. */
function SectionHead({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-3">
        <span style={{ fontFamily: FC, fontSize: 19, letterSpacing: "0.02em", color: LAVENDER }}>{n}</span>
        <span className="uppercase" style={{ fontFamily: RB, fontWeight: 600, fontSize: 10, letterSpacing: "0.16em", color: "rgba(38,38,42,0.5)" }}>{label}</span>
        <span className="flex-1" />
        <span style={{ fontFamily: FC, fontSize: 10, letterSpacing: "0.05em", color: "rgba(38,38,42,0.3)" }}>{n} / 06</span>
      </div>
      <div className="h-px w-full" style={{ background: "rgba(38,38,42,0.12)" }} />
    </div>
  );
}

// ─── Screen mockups ─────────────────────────────────────────────────────
// Stand-ins for the screenshot fills in the Figma file — the real product
// screens can't ship here, so each is rebuilt as a lightweight, recognisable
// render of the same layout, matching the wireframe style used elsewhere
// in the portfolio.

const LINE = "1px solid rgba(38,38,42,0.12)";
const FAINT = "rgba(38,38,42,0.10)";

function Bar({ w = "100%", h = 5, c = FAINT, r = 3 }: { w?: string | number; h?: number; c?: string; r?: number }) {
  return <span className="block flex-shrink-0" style={{ width: w, height: h, background: c, borderRadius: r }} />;
}

function Pill({ children, c, bg }: { children: string; c: string; bg: string }) {
  return (
    <span className="rounded-full inline-flex items-center flex-shrink-0" style={{ padding: "3px 7px", background: bg }}>
      <span className="uppercase whitespace-nowrap" style={{ fontFamily: RB, fontWeight: 500, fontSize: 6.5, letterSpacing: "0.05em", color: c }}>{children}</span>
    </span>
  );
}

// Every evidence screen renders at the same fixed height and clips its
// overflow, so the pair reads like matching screenshot crops.
const SHOT_H = 428;

function Shot({ children, caption }: { children: ReactNode; caption: string }) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="rounded-[10px] overflow-hidden" style={{ height: SHOT_H, boxShadow: "0px 10px 26px rgba(0,0,23,0.08)" }}>
        {children}
      </div>
      <EvidenceCaption>{caption}</EvidenceCaption>
    </div>
  );
}

/** Light browser-style chrome with the ARC top bar. */
function Chrome({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[10px] overflow-hidden bg-white w-full h-full flex flex-col" style={{ border: LINE }}>
      <div className="flex items-center gap-2 px-3 py-2 flex-shrink-0" style={{ borderBottom: LINE }}>
        <span className="rounded-full flex-shrink-0" style={{ width: 13, height: 13, background: NAVY }} />
        <span style={{ fontFamily: RB, fontWeight: 600, fontSize: 10.5, color: INK }}>{title}</span>
        <span className="flex-1" />
        <span className="rounded-full flex items-center gap-1 px-1.5 py-1" style={{ border: LINE }}>
          <span className="rounded-full flex-shrink-0" style={{ width: 6, height: 6, border: "1.2px solid rgba(38,38,42,0.35)" }} />
          <span className="hidden sm:inline whitespace-nowrap" style={{ fontFamily: RB, fontSize: 6, color: "rgba(38,38,42,0.4)" }}>Search for what you need</span>
        </span>
        <span className="rounded px-1.5 py-1 whitespace-nowrap" style={{ border: LINE, fontFamily: RB, fontSize: 6, color: "rgba(38,38,42,0.5)" }}>System &#9662;</span>
        <span className="rounded-full flex-shrink-0" style={{ width: 13, height: 13, background: "rgba(38,38,42,0.12)" }} />
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}

function SideRail({ active = "Home" }: { active?: string }) {
  const items = [
    { label: "Home", note: "" },
    { label: "My Tickets", note: "29" },
    { label: "Review Requests", note: "" },
  ];
  return (
    <div className="flex flex-col gap-1 py-3 px-2 flex-shrink-0" style={{ width: 96, borderRight: LINE }}>
      <span className="uppercase mb-1 px-1.5" style={{ fontFamily: FC, fontSize: 6, letterSpacing: "0.1em", color: "rgba(38,38,42,0.4)" }}>Request Center</span>
      {items.map((it) => (
        <span
          key={it.label}
          className="rounded px-1.5 py-1 whitespace-nowrap flex items-center gap-1"
          style={{
            fontFamily: RB, fontWeight: 500, fontSize: 7.5,
            background: it.label === active ? BLUE : "transparent",
            color: it.label === active ? "#FFFFFF" : "rgba(38,38,42,0.5)",
          }}
        >
          <span className="rounded-sm flex-shrink-0" style={{ width: 6, height: 6, background: it.label === active ? "rgba(255,255,255,0.7)" : "rgba(38,38,42,0.22)" }} />
          {it.label}
          {it.note && <span style={{ opacity: 0.7 }}>({it.note})</span>}
        </span>
      ))}
    </div>
  );
}

function StatTiles({ items }: { items: { n: string; label: string; c: string }[] }) {
  return (
    <div className="flex gap-2">
      {items.map((s) => (
        <div key={s.label} className="flex-1 rounded-md px-2 py-2 flex flex-col gap-1" style={{ border: LINE, borderTop: `2px solid ${s.c}` }}>
          <span style={{ fontFamily: NR, fontWeight: 400, fontSize: 16, color: s.c, lineHeight: 1 }}>{s.n}</span>
          <span style={{ fontFamily: RB, fontSize: 6.5, color: "rgba(38,38,42,0.5)" }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function Banner({ title, sub, cta }: { title: string; sub: string; cta: string }) {
  return (
    <div className="rounded-md flex items-center gap-2 px-3 py-2.5" style={{ background: BLUE }}>
      <div className="flex-1 flex flex-col gap-1">
        <span style={{ fontFamily: RB, fontWeight: 600, fontSize: 8.5, color: "#FFFFFF" }}>{title}</span>
        <span style={{ fontFamily: RB, fontSize: 6.5, color: "rgba(255,255,255,0.7)" }}>{sub}</span>
      </div>
      <span className="rounded px-2 py-1 flex-shrink-0" style={{ background: "#FFFFFF" }}>
        <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 7, color: BLUE }}>{cta}</span>
      </span>
    </div>
  );
}

function EvidenceCaption({ children }: { children: string }) {
  return <p style={{ fontFamily: RB, fontWeight: 500, fontSize: 11, color: INK }}>{children}</p>;
}

/** BEFORE — the current-state virtual-assistant screen, in a dark capture frame. */
function BeforeScreen() {
  const tiles = [
    ["Find Answers", "Browse and search for articles to solve your problem or get the help you need."],
    ["Request Something", "Browse the catalog for services and other things you may need."],
    ["Report Issue", "Contact support to receive help with an issue."],
    ["Request Access", "Browse the catalog for software and access-related requests."],
  ];
  return (
    <Shot caption="Before — the current-state screen">
      <div className="h-full flex flex-col" style={{ background: "#0E0E10", padding: "20px 0" }}>
        <div className="relative bg-white flex-1 min-h-0 flex flex-col px-8 pt-12 pb-6">
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <p className="flex items-center gap-1.5" style={{ fontFamily: RB, fontWeight: 700, fontSize: 14, color: INK }}>
              Hi <span className="inline-block rounded-sm" style={{ width: 40, height: 11, background: INK }} />, how can we help you?
            </p>
            <div className="w-full max-w-[320px] rounded-full flex items-center gap-2 px-3.5 py-2" style={{ border: "1px solid rgba(38,38,42,0.18)" }}>
              <span style={{ fontFamily: RB, fontSize: 9, color: "rgba(38,38,42,0.4)" }}>Search</span>
              <span className="flex-1" />
              <span className="rounded-full flex-shrink-0" style={{ width: 13, height: 13, border: `1.5px solid ${BLUE}` }} />
            </div>
            <span className="rounded-full" style={{ width: 22, height: 3, background: "rgba(38,38,42,0.2)" }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 w-full">
            {tiles.map(([t, d]) => (
              <div key={t} className="flex flex-col gap-1">
                <span className="rounded-sm flex-shrink-0" style={{ width: 10, height: 10, border: "1.5px solid #FF971E" }} />
                <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 8, color: INK }}>{t}</span>
                <span style={{ fontFamily: RB, fontSize: 5.5, lineHeight: "1.5em", color: "rgba(38,38,42,0.45)" }}>{d}</span>
              </div>
            ))}
          </div>
          <span className="absolute rounded-full flex items-center justify-center" style={{ right: 14, bottom: 14, width: 20, height: 20, background: "#1B1B1F" }}>
            <span className="rounded-sm" style={{ width: 9, height: 8, border: "1.4px solid rgba(255,255,255,0.85)", borderRadius: 2 }} />
          </span>
        </div>
      </div>
    </Shot>
  );
}

/** AFTER — the ARC employee homepage. */
function AfterScreen() {
  const bundleItems: [string, string, string, string][] = [
    ["Laptop", "Open", "#0F7A55", "macOS · Standard"],
    ["Monitor", "Open", "#0F7A55", "27\""],
    ["Docking station", "Open", "#0F7A55", ""],
    ["Software license", "Awaiting Approval", "#E0821E", "Adobe"],
    ["Headset", "Open", "#0F7A55", "Wired"],
  ];
  const rows = [
    { t: "Laptop +4 more", id: "REQ00490573", updated: "Aug 3, 2026", open: true },
    { t: "Laptop +4 more", id: "REQ00490679", updated: "Jul 29, 2026", open: false },
    { t: "Laptop +6 more", id: "REQ01248672", updated: "Jul 29, 2026", open: false },
  ];
  return (
    <Shot caption="After — the ARC homepage">
      <Chrome title="ARC">
        <div className="flex h-full">
          <SideRail active="Home" />
          <div className="flex-1 min-w-0 flex flex-col gap-3 p-3">
            <Banner
              title="Need to log an issue or make a request?"
              sub="Create a new ticket and we'll route it to the right team for you."
              cta="+ Create New Ticket"
            />
            <StatTiles items={[
              { n: "18", label: "Open", c: BLUE },
              { n: "3", label: "In Progress", c: LAVENDER },
              { n: "8", label: "Awaiting Approval", c: "#E0821E" },
              { n: "6", label: "Resolved", c: GREEN },
            ]} />
            <div className="flex items-center justify-between mt-1">
              <span style={{ fontFamily: NR, fontSize: 12, color: INK }}>Recent Tickets</span>
              <span style={{ fontFamily: FC, fontSize: 6, color: "rgba(38,38,42,0.4)" }}>29 open &middot; 0 resolved</span>
            </div>
            <div className="rounded-md overflow-hidden" style={{ border: LINE }}>
              <div className="flex items-center gap-2 px-2.5 py-1.5" style={{ background: "#F7F7F5" }}>
                <span className="uppercase" style={{ fontFamily: RB, fontWeight: 500, fontSize: 5.5, letterSpacing: "0.08em", color: "rgba(38,38,42,0.4)" }}>Ticket</span>
                <span className="flex-1" />
                <span className="uppercase" style={{ fontFamily: RB, fontWeight: 500, fontSize: 5.5, letterSpacing: "0.08em", color: "rgba(38,38,42,0.4)" }}>Category</span>
                <span className="uppercase w-[52px]" style={{ fontFamily: RB, fontWeight: 500, fontSize: 5.5, letterSpacing: "0.08em", color: "rgba(38,38,42,0.4)" }}>Updated</span>
              </div>
              {rows.map((r, i) => (
                <div key={i} style={{ borderTop: LINE, background: r.open ? "#F5F8FF" : "#FFFFFF", boxShadow: r.open ? `inset 0 0 0 1px ${BLUE}55` : "none" }}>
                  <div className="flex items-center gap-2 px-2.5 py-2">
                    <span style={{ fontSize: 6, color: "rgba(38,38,42,0.35)" }}>{r.open ? "▾" : "▸"}</span>
                    <div className="flex flex-col">
                      <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 8, color: INK }}>{r.t}</span>
                      <span style={{ fontFamily: FC, fontSize: 5.5, color: "rgba(38,38,42,0.4)" }}>{r.id}</span>
                    </div>
                    <Pill c={LAVENDER} bg="#EDE6F7">Awaiting Approval</Pill>
                    <span className="flex-1" />
                    <span style={{ fontFamily: RB, fontSize: 6.5, color: "rgba(38,38,42,0.5)" }}>Hardware</span>
                    <span className="w-[52px]" style={{ fontFamily: RB, fontSize: 6.5, color: "rgba(38,38,42,0.5)" }}>{r.updated}</span>
                  </div>
                  {r.open && (
                    <div className="mx-2.5 mb-2.5 rounded p-2 flex flex-col gap-1.5" style={{ border: LINE, background: "#FFFFFF" }}>
                      <span style={{ fontFamily: RB, fontSize: 6, color: "rgba(38,38,42,0.5)" }}>
                        Priority <b style={{ color: INK }}>Medium</b> &nbsp;·&nbsp; Team <b style={{ color: INK }}>End User Compute</b> &nbsp;·&nbsp; Updated Aug 5, 2026
                      </span>
                      <span className="uppercase" style={{ fontFamily: RB, fontWeight: 500, fontSize: 5, letterSpacing: "0.08em", color: "rgba(38,38,42,0.4)" }}>Items in this ticket</span>
                      {bundleItems.map(([name, st, sc, meta]) => (
                        <div key={name} className="flex items-center gap-1.5">
                          <span className="rounded-sm flex-shrink-0" style={{ width: 7, height: 7, background: "rgba(38,38,42,0.18)" }} />
                          <span style={{ fontFamily: RB, fontSize: 7, color: "#4A4A46" }}>{name}</span>
                          <Pill c={sc} bg={sc === "#E0821E" ? "#FBEFD9" : "#E4F5EE"}>{st}</Pill>
                          {meta && <span style={{ fontFamily: RB, fontSize: 6, color: "rgba(38,38,42,0.4)" }}>— {meta}</span>}
                        </div>
                      ))}
                      <div className="flex gap-1.5 mt-1">
                        <span className="rounded px-2 py-1" style={{ background: BLUE, fontFamily: RB, fontWeight: 500, fontSize: 6.5, color: "#FFFFFF" }}>View Full Bundle</span>
                        <span className="rounded px-2 py-1" style={{ border: LINE, fontFamily: RB, fontWeight: 500, fontSize: 6.5, color: INK }}>Add comment</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Chrome>
    </Shot>
  );
}

/** The bundled-ticket detail view. */
function BundledDetailScreen() {
  const stages = ["Open", "Awaiting Approval", "In Progress", "Resolved"];
  return (
    <Shot caption="The bundled-ticket detail view">
      <Chrome title="ARC">
        <div className="flex h-full">
          <SideRail active="My Tickets" />
          <div className="flex-1 min-w-0 flex flex-col gap-2.5 p-3">
            <div className="rounded-md flex items-start gap-2 px-2.5 py-2" style={{ background: "#FBEFD9" }}>
              <span className="rounded-full flex-shrink-0" style={{ width: 10, height: 10, background: "#E0821E" }} />
              <div className="flex flex-col gap-1">
                <span style={{ fontFamily: RB, fontWeight: 600, fontSize: 7.5, color: "#8A5410" }}>Waiting on approval</span>
                <Bar w={180} h={3} c="rgba(138,84,16,0.3)" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ fontFamily: NR, fontSize: 13, color: INK }}>Engineering laptop</span>
              <Pill c={LAVENDER} bg="#EDE6F7">+1 more</Pill>
              <span className="flex-1" />
              <span className="rounded px-2 py-1" style={{ background: BLUE, fontFamily: RB, fontWeight: 500, fontSize: 6.5, color: "#FFFFFF" }}>Add comment</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              {stages.map((s, i) => (
                <div key={s} className="flex items-center flex-1 last:flex-none">
                  <span className="rounded-full flex-shrink-0" style={{ width: 8, height: 8, background: i <= 1 ? (i === 1 ? "#E0821E" : BLUE) : "rgba(38,38,42,0.18)" }} />
                  <span className="ml-1 whitespace-nowrap" style={{ fontFamily: RB, fontWeight: 500, fontSize: 6, color: i <= 1 ? INK : "rgba(38,38,42,0.4)" }}>{s}</span>
                  {i < stages.length - 1 && <span className="flex-1 mx-1" style={{ height: 1, background: "rgba(38,38,42,0.15)" }} />}
                </div>
              ))}
            </div>
            <div className="flex gap-2.5 mt-1">
              <div className="flex-1 min-w-0 flex flex-col gap-1.5 rounded p-2" style={{ border: LINE }}>
                <span style={{ fontFamily: RB, fontWeight: 600, fontSize: 7, color: INK }}>About this request</span>
                <Bar h={3} /><Bar w="92%" h={3} /><Bar w="80%" h={3} />
                <div className="h-1" />
                <span style={{ fontFamily: RB, fontWeight: 600, fontSize: 7, color: INK }}>Items in this request</span>
                {["Laptop", "Monitor (27\")"].map((it) => (
                  <div key={it} className="flex items-center gap-1.5 rounded px-1.5 py-1.5" style={{ background: "#F7F7F5" }}>
                    <span className="rounded-sm flex-shrink-0" style={{ width: 8, height: 8, background: "rgba(38,38,42,0.2)" }} />
                    <span style={{ fontFamily: RB, fontSize: 7, color: "#4A4A46" }}>{it}</span>
                    <span className="flex-1" />
                    <Pill c="#E0821E" bg="#FBEFD9">Awaiting Approval</Pill>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0" style={{ width: 96 }}>
                {["Request details", "Requester", "Attachments"].map((h) => (
                  <div key={h} className="flex flex-col gap-1 rounded p-1.5" style={{ border: LINE }}>
                    <span style={{ fontFamily: RB, fontWeight: 600, fontSize: 6.5, color: INK }}>{h}</span>
                    <Bar h={3} /><Bar w="75%" h={3} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Chrome>
    </Shot>
  );
}

const wizardScreenData = [
  {
    tab: 0, title: "Confirm your information",
    render: () => (
      <div className="rounded-lg p-2.5 flex flex-col gap-2" style={{ background: "#F3EFFA" }}>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full flex-shrink-0" style={{ width: 14, height: 14, background: LAVENDER }} />
          <div className="flex flex-col gap-1"><Bar w={44} h={3} c="rgba(38,38,42,0.25)" /><Bar w={30} h={2.5} /></div>
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex justify-between gap-2">
            <Bar w="38%" h={3} /><Bar w="46%" h={3} c="rgba(38,38,42,0.18)" />
          </div>
        ))}
      </div>
    ),
  },
  {
    tab: 1, title: "What do you need? Select all that apply.",
    render: () => (
      <div className="grid grid-cols-2 gap-1.5">
        {[["Laptop", true], ["Monitor", false], ["Docking station", false], ["Headset", true], ["Mobile phone", false], ["System access", false]].map(([t, on], i) => (
          <div key={i} className="flex items-center gap-1.5 rounded p-1.5" style={{ border: on ? `1px solid ${BLUE}` : LINE, background: on ? "#F5F8FF" : "#FFFFFF" }}>
            <span className="rounded-sm flex-shrink-0" style={{ width: 8, height: 8, background: on ? BLUE : "transparent", border: on ? "none" : "1.5px solid rgba(38,38,42,0.25)" }} />
            <span style={{ fontFamily: RB, fontSize: 6.5, color: "#4A4A46" }}>{t as string}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    tab: 2, title: "A few specifics",
    render: () => (
      <div className="flex flex-col gap-2.5">
        {["Laptop", "Headset"].map((g) => (
          <div key={g} className="flex flex-col gap-1.5">
            <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 7, color: INK }}>{g}</span>
            <div className="flex gap-1.5">
              <div className="flex-1 rounded px-1.5 py-1.5 flex items-center justify-between" style={{ border: LINE }}>
                <Bar w="55%" h={3} /><span style={{ fontSize: 6, color: "rgba(38,38,42,0.4)" }}>▾</span>
              </div>
              <div className="flex-1 rounded px-1.5 py-1.5 flex items-center justify-between" style={{ border: LINE }}>
                <Bar w="55%" h={3} /><span style={{ fontSize: 6, color: "rgba(38,38,42,0.4)" }}>▾</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    tab: 3, title: "Review your ticket",
    render: () => (
      <div className="flex flex-col gap-1.5">
        <div className="rounded p-1.5 flex items-center gap-1.5" style={{ background: "#F3EFFA" }}>
          <span className="rounded-full flex-shrink-0" style={{ width: 12, height: 12, background: LAVENDER }} />
          <Bar w="60%" h={3} c="rgba(38,38,42,0.25)" />
        </div>
        {["Laptop", "Headset"].map((it) => (
          <div key={it} className="flex items-center gap-1.5 rounded px-1.5 py-1.5" style={{ border: LINE }}>
            <span className="rounded-sm flex-shrink-0" style={{ width: 8, height: 8, background: "rgba(38,38,42,0.18)" }} />
            <span style={{ fontFamily: RB, fontSize: 7, color: "#4A4A46" }}>{it}</span>
            <span className="flex-1" />
            <Pill c="#6B6B66" bg="#F2F2F0">Hardware</Pill>
          </div>
        ))}
      </div>
    ),
  },
];

function WizardScreen({ index, caption, note }: { index: number; caption: string; note: string }) {
  const d = wizardScreenData[index];
  const tabs = ["Your info", "What you need", "Details", "Review"];
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-[10px] overflow-hidden bg-white" style={{ border: LINE, boxShadow: "0px 8px 20px rgba(0,0,23,0.07)" }}>
        <div className="flex items-center justify-between px-2.5 py-2" style={{ borderBottom: LINE }}>
          <span style={{ fontFamily: RB, fontWeight: 600, fontSize: 8.5, color: INK }}>New ticket</span>
          <span style={{ fontFamily: RB, fontSize: 9, color: "rgba(38,38,42,0.35)" }}>&times;</span>
        </div>
        <div className="flex gap-1 px-2.5 pt-2">
          {tabs.map((t, i) => (
            <div key={t} className="flex-1 flex flex-col gap-1">
              <span className="whitespace-nowrap" style={{ fontFamily: RB, fontWeight: 500, fontSize: 5.5, letterSpacing: "0.03em", color: i <= d.tab ? BLUE : "rgba(38,38,42,0.35)" }}>{i + 1} {t}</span>
              <span style={{ height: 2, borderRadius: 2, background: i <= d.tab ? BLUE : "rgba(38,38,42,0.12)" }} />
            </div>
          ))}
        </div>
        <div className="px-2.5 pt-2.5 pb-3 flex flex-col gap-2" style={{ minHeight: 150 }}>
          <span style={{ fontFamily: RB, fontWeight: 600, fontSize: 8.5, color: INK }}>{d.title}</span>
          {d.render()}
        </div>
        <div className="flex items-center justify-end gap-1.5 px-2.5 py-2" style={{ borderTop: LINE }}>
          {d.tab > 0 && <span className="rounded px-2 py-1" style={{ border: LINE, fontFamily: RB, fontWeight: 500, fontSize: 6.5, color: INK }}>&larr; Back</span>}
          <span className="rounded px-2 py-1" style={{ background: BLUE, fontFamily: RB, fontWeight: 500, fontSize: 6.5, color: "#FFFFFF" }}>{d.tab === 3 ? "Submit ticket" : "Continue →"}</span>
        </div>
      </div>
      <EvidenceCaption>{caption}</EvidenceCaption>
      <p style={{ fontFamily: FC, fontSize: 9.5, color: "#4B4B43" }}>{note}</p>
    </div>
  );
}

/** The admin approval queue. */
function AdminApprovalScreen() {
  return (
    <Shot caption="The admin approval view">
      <Chrome title="Approvals">
        <div className="flex h-full">
          <SideRail active="Review Requests" />
          <div className="flex-1 min-w-0 flex flex-col gap-3 p-3">
            <Banner title="You have 4 requests awaiting your approval" sub="Review and take action on your team's requests below." cta="Review all" />
            <StatTiles items={[
              { n: "4", label: "Pending approval", c: "#E0821E" },
              { n: "12", label: "Approved (30 days)", c: GREEN },
              { n: "2", label: "Rejected (30 days)", c: "#BF3087" },
            ]} />
            <div className="flex items-center gap-2 mt-1">
              <span style={{ fontFamily: NR, fontSize: 11, color: INK }}>Pending Approvals</span>
              <span className="rounded px-1.5 py-0.5" style={{ background: "#EDF2FF", fontFamily: RB, fontWeight: 500, fontSize: 6.5, color: BLUE }}>Pending (4)</span>
              <span style={{ fontFamily: RB, fontSize: 6.5, color: "rgba(38,38,42,0.4)" }}>Decided (14)</span>
            </div>
            <div className="rounded-md overflow-hidden" style={{ border: LINE }}>
              <div className="flex items-center gap-2 px-2.5 py-1.5" style={{ background: "#F7F7F5" }}>
                <span style={{ fontFamily: FC, fontSize: 6, color: "rgba(38,38,42,0.45)" }}>REQ0090765</span>
                <Bar w={54} h={3} />
                <span className="flex-1" />
                <Bar w={26} h={3} />
              </div>
              {[["Laptop", "$1,850"], ["Headset", "$300"]].map(([it, price]) => (
                <div key={it} className="flex items-center gap-2 px-2.5 py-2" style={{ borderTop: LINE }}>
                  <span className="rounded-sm flex-shrink-0" style={{ width: 8, height: 8, background: "rgba(38,38,42,0.18)" }} />
                  <span style={{ fontFamily: RB, fontSize: 7.5, color: "#4A4A46" }}>{it}</span>
                  <span className="flex-1" />
                  <span style={{ fontFamily: RB, fontSize: 7, color: "rgba(38,38,42,0.5)" }}>{price}</span>
                  <span className="rounded px-1.5 py-1" style={{ background: "#E4F5EE", fontFamily: RB, fontWeight: 500, fontSize: 6, color: "#0F7A55" }}>&#10003; Approve</span>
                  <span className="rounded px-1.5 py-1" style={{ background: "#F9E7EF", fontFamily: RB, fontWeight: 500, fontSize: 6, color: "#BF3087" }}>&times; Reject</span>
                </div>
              ))}
              <div className="flex items-center justify-end gap-2 px-2.5 py-2" style={{ borderTop: LINE }}>
                <span style={{ fontFamily: RB, fontWeight: 600, fontSize: 8, color: INK }}>Estimated total $2,150</span>
                <span className="rounded px-2 py-1" style={{ background: BLUE, fontFamily: RB, fontWeight: 500, fontSize: 6.5, color: "#FFFFFF" }}>Save</span>
              </div>
            </div>
          </div>
        </div>
      </Chrome>
    </Shot>
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
// HERO
// ═══════════════════════════════════════════════════════════════════════

function AsFoundCard() {
  const W = 380;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  const bar = (w: number | string, c = "rgba(38,38,42,0.16)") => (
    <span className="block rounded-sm" style={{ width: w, height: fs(7), minHeight: 3, background: c }} />
  );
  return (
    <HeroBox leftPct={9.444} topPct={29.118} widthPct={26.389}>
      <div
        className="flex flex-col rounded-xl"
        style={{ padding: 22, gap: 9, background: "rgba(255,255,255,0.94)", border: "1px solid rgba(38,38,42,0.5)" }}
      >
        <span className="uppercase" style={{ fontFamily: FC, fontSize: fs(9), letterSpacing: "0.13em", color: "#B0AFA9" }}>TICKETS</span>
        {bar(180, "rgba(38,38,42,0.5)")}
        {bar("100%")}
        {bar("100%")}
        {bar("100%")}
        {bar(300)}
        <span className="block" style={{ height: 4 }} />
        {bar("100%")}
        {bar("100%")}
        {bar(240)}
        {bar(120, "rgba(58,123,213,0.5)")}
        {bar(150, "rgba(58,123,213,0.5)")}
      </div>
    </HeroBox>
  );
}

function ReworkedCard() {
  const W = 464;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  const tiles = [
    { label: "REQUEST", c: GREEN },
    { label: "BROWSE", c: BLUE },
    { label: "ASK", c: LAVENDER },
  ];
  return (
    <HeroBox leftPct={38.194} topPct={52.206} widthPct={32.222}>
      <div className="flex flex-col rounded-xl bg-white" style={{ padding: 24, gap: 14, boxShadow: "0px 18px 44px 0px rgba(0,20,13,0.24)" }}>
        <span className="uppercase" style={{ fontFamily: FC, fontSize: fs(9), letterSpacing: "0.13em", color: GREEN }}>LIST</span>
        <p style={{ fontFamily: NR, fontWeight: 400, fontSize: fs(26), lineHeight: "1.26em", color: INK }}>A clear portal for service requests</p>
        <div className="h-px w-full" style={{ background: "rgba(38,38,42,0.12)" }} />
        <div className="flex gap-3">
          {tiles.map((t) => (
            <div key={t.label} className="flex-1 flex flex-col gap-2 rounded-lg" style={{ padding: 12, background: `${t.c}12`, border: `1px solid ${t.c}48` }}>
              <span className="rounded-full flex-shrink-0" style={{ width: 16, height: 16, background: `${t.c}D9` }} />
              <span className="uppercase" style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(8.5), letterSpacing: "0.09em", color: t.c }}>{t.label}</span>
              <span className="block rounded-sm" style={{ height: 5, background: `${t.c}24` }} />
            </div>
          ))}
        </div>
      </div>
    </HeroBox>
  );
}

function NoteCard() {
  const W = 349;
  const fs = (px: number) => `${(px / W) * 100}cqw`;
  return (
    <HeroBox leftPct={66.319} topPct={22.49} widthPct={24.236}>
      <div className="flex flex-col rounded-2xl" style={{ padding: 28, gap: 14, border: "1.4px solid rgba(255,255,255,0.3)" }}>
        <span style={{ fontFamily: RB, fontWeight: 500, fontSize: fs(13.6), letterSpacing: "0.137em", color: "#8FF0C6" }}>ARC</span>
        <p style={{ fontFamily: RB, fontWeight: 400, fontSize: fs(17), lineHeight: "1.68em", color: "rgba(255,255,255,0.82)" }}>
          Internal Ticketing platform for better visibility on hardware/software requests.
        </p>
      </div>
    </HeroBox>
  );
}

function Hero() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "1440 / 680", background: "linear-gradient(120deg, rgba(7,29,73,1) 0%, rgba(116,85,173,1) 76%)" }}
    >
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ left: "-15.278%", top: "-38.235%", width: "62.5%", height: "132.353%", background: "radial-gradient(circle at 50% 50%, rgba(116,85,173,0.85) 0%, rgba(116,85,173,0) 100%)" }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ left: "68.056%", top: "50%", width: "50%", height: "105.882%", background: "radial-gradient(circle at 50% 50%, rgba(0,180,245,0.3) 0%, rgba(0,180,245,0) 100%)" }}
      />
      <AsFoundCard />
      <ReworkedCard />
      <NoteCard />
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
        <p style={{ fontFamily: RB, fontWeight: 500, fontSize: 11, letterSpacing: "0.1455em", color: LAVENDER }}>
          CASE STUDY 03 &middot; TWO-DAY INTERNAL HACKATHON
        </p>
      </Reveal>
      <Reveal delay={90}>
        <h1 style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(32px, 4.1vw, 56px)", lineHeight: "1.16em", letterSpacing: "-0.012em", color: INK }}>
          <span style={{ color: LAVENDER }}>Reimagining</span> Enterprise Service Requests
        </h1>
      </Reveal>
      <Reveal delay={170}>
        <p className="max-w-[860px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.8em", color: BODY }}>
          AbbVie Request Center (ARC) is an internal IT service platform for requesting technology, software, access, and
          workstation support. Today, filing a request means describing it to a virtual assistant, after which it moves
          into a separate service-management platform and is tracked away from where it began.{" "}
          <span style={{ color: LAVENDER }}>
            During a two-day internal hackathon, a team of three set out to make that experience feel connected and
            predictable — I led the UX design and built a working prototype in the internal React design system.
          </span>
        </p>
      </Reveal>
      <div className="h-px w-full mt-1" style={{ background: "rgba(38,38,42,0.14)" }} />
      <div className="flex flex-wrap gap-x-8 gap-y-6 mt-1">
        <div style={{ flex: "1 1 190px" }}>
          <p className="mb-2.5" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: LAVENDER }}>ROLE</p>
          <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.58em", color: META }}>UX Design &amp;<br />Front-end prototyping</p>
        </div>
        <div style={{ flex: "1 1 190px" }}>
          <p className="mb-2.5" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: LAVENDER }}>TEAM</p>
          <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.58em", color: META }}>2 other teammates</p>
        </div>
        <div style={{ flex: "1 1 190px" }}>
          <p className="mb-2.5" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: LAVENDER }}>TIMELINE</p>
          <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.58em", color: META }}>Two days</p>
        </div>
        <div style={{ flex: "1 1 190px" }}>
          <p className="mb-2.5" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: LAVENDER }}>BUILT WITH</p>
          <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.58em", color: META }}>Figma, then the internal<br />React design system</p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// THE QUESTION (dark callout, before the numbered sections)
// ═══════════════════════════════════════════════════════════════════════

function QuestionCallout() {
  return (
    <section className="w-full max-w-[1168px] mx-auto px-6 md:px-0 min-w-0">
      <div className="relative rounded-[18px] overflow-hidden flex" style={{ background: INK }}>
        <span className="flex-shrink-0" style={{ width: 7, background: LAVENDER }} />
        <span
          aria-hidden="true"
          className="absolute inset-y-0 right-6 md:right-12 hidden md:flex items-center select-none pointer-events-none"
          style={{ fontFamily: NR, fontStyle: "italic", fontWeight: 400, fontSize: 190, lineHeight: 1, color: "#CABEE0", opacity: 0.42 }}
        >
          ?
        </span>
        <div className="relative flex flex-col gap-5 px-8 py-10 md:pr-[200px]">
          <p style={{ fontFamily: RB, fontSize: 14.5, lineHeight: "1.68em", color: "#CABEE0" }}>
            We had two days, a team of three: 2 UX designers and a UX researcher.
          </p>
          <p style={{ fontFamily: NR, fontWeight: 400, fontSize: "clamp(22px, 2.6vw, 31px)", lineHeight: "1.4em", color: "#FFFFFF" }}>
            So the question was not &ldquo;how do we fix ticketing&rdquo; — it was &ldquo;what is the one structural
            change that makes this feel different, and can we build enough of it to be believed?&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// THE PROBLEM
// ═══════════════════════════════════════════════════════════════════════

const liveComments = [
  {
    bg: "#E4EFFF", labelColor: BLUE,
    label: "FROM SOMEONE WHO APPROVES REQUESTS",
    quote: "“It’s hard to navigate and approve other people’s tickets.”",
    body: "So we designed for the person signing off, not just the person asking: an approver review queue, and a separate admin homepage alongside the general-employee one.",
  },
  {
    bg: "#F3EFFA", labelColor: LAVENDER,
    label: "FROM SOMEONE WHO FILED ONE",
    quote: "“My ticket sat unattended for weeks.”",
    body: "So status became something visible in two places at once — a lifecycle timeline for the whole request, and its own status on every item inside it.",
  },
];

function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M4 7h16M4 12h11M4 17h14" />
    </svg>
  );
}
function DocQIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5" />
      <path d="M10.4 12.2a1.7 1.7 0 1 1 2.3 1.6c-.5.2-.9.6-.9 1.2" />
      <path d="M11.8 17.4h.01" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.4 2" />
    </svg>
  );
}
function PersonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20c1-3.6 4-5.6 7-5.6s6 2 7 5.6" />
    </svg>
  );
}

const frictions = [
  { n: "01", c: BLUE, bg: "#E0EDFE", title: "Which ticket do I fill out?", body: "Sometimes hard to decipher what will fulfill your needs.", Icon: ListIcon, connector: true },
  { n: "02", c: "#8A2ECC", bg: "#F1E6F9", title: "What is this ticket for?", body: "Every ticket type has to be learned, and there is nowhere inside the flow to learn it.", Icon: DocQIcon, connector: true },
  { n: "03", c: "#BF3087", bg: "#F7E6F1", title: "Where is it now?", body: "You file it through one surface and track it in another. Statuses are difficult to track.", Icon: ClockIcon, connector: true },
  { n: "04", c: "#338700", bg: "#E7F1E0", title: "Who do I talk to?", body: "Reaching the person managing the ticket is a separate task and flow from where you filed it.", Icon: PersonIcon, connector: false },
];

function ContextSection() {
  return (
    <section id="context" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <SectionHead n="01" label="Context" />
      <SectionHeading>You file the request in one place,<br />and track it somewhere else.</SectionHeading>

      <div className="rounded-2xl" style={{ padding: "26px 30px", background: "#F5F3F9", border: "1px solid rgba(116,85,173,0.16)" }}>
        <p style={{ fontFamily: RB, fontSize: 14.5, lineHeight: "1.8em", color: BODY }}>
          Filing an internal service ticket is a disconnected experience. You describe what you need through a virtual
          assistant, the request lands in a separate enterprise service-management platform, and from then on you track
          it apart from where you filed it.
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-2">
        <SectionHeading>Where it breaks down</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {frictions.map((f) => (
            <div key={f.n} className="flex flex-col" style={{ width: 262 }}>
              <div className="relative flex items-center gap-3 mb-4">
                <span className="rounded-2xl flex items-center justify-center flex-shrink-0" style={{ width: 46, height: 46, background: f.bg, color: f.c }}>
                  <f.Icon />
                </span>
                {f.connector && <span className="flex-1" style={{ borderTop: `2px dotted ${f.c}80` }} />}
              </div>
              <div className="flex flex-col gap-2.5 pt-2">
                <span style={{ fontFamily: FC, fontSize: 9.5, letterSpacing: "0.1em", color: f.c }}>{f.n}</span>
                <p style={{ fontFamily: NR, fontWeight: 400, fontSize: 19, lineHeight: "1.3em", color: INK }}>{f.title}</p>
                <p style={{ fontFamily: RB, fontSize: 12.5, lineHeight: "1.76em", color: BODY2 }}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <BeforeScreen />
        <AfterScreen />
      </div>
    </section>
  );
}

function ResearchSection() {
  return (
    <section id="research" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-8 min-w-0">
      <SectionHead n="02" label="Research" />
      <SectionHeading>What we heard</SectionHeading>
      <p className="max-w-[900px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.76em", color: BODY }}>
        There was not enough time for a full study, so we gathered live comments from several people on both sides of the
        process — the people who file requests, and the people who receive and approve them.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {liveComments.map((c) => (
          <div key={c.label} className="rounded-2xl flex flex-col gap-3.5" style={{ padding: "28px 30px", background: c.bg }}>
            <Eyebrow color={c.labelColor}>{c.label}</Eyebrow>
            <p style={{ fontFamily: NR, fontStyle: "italic", fontWeight: 400, fontSize: 22, lineHeight: "1.32em", color: INK }}>{c.quote}</p>
            <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.76em", color: BODY2 }}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// THE INSIGHT
// ═══════════════════════════════════════════════════════════════════════

const ticketItems = [
  { title: "Laptop — standard configuration", status: "DELIVERED", bg: "#E4F5EE", c: "#0F7A55" },
  { title: "Second monitor", status: "IN PROGRESS", bg: "#E4EDFB", c: "#0B57C2" },
  { title: "System access — three environments", status: "AWAITING APPROVER", bg: "#FBF0DC", c: "#9A6410" },
];

function BundledTicketDiagram() {
  return (
    <div className="flex-1 rounded-2xl bg-white overflow-hidden flex flex-col" style={{ border: "1px solid rgba(38,38,42,0.1)", boxShadow: "0px 10px 26px 0px rgba(0,0,23,0.08)" }}>
      <div className="flex items-center gap-3 px-6 py-5" style={{ background: "#F6F4FC" }}>
        <div className="flex-1 flex flex-col gap-1">
          <span style={{ fontFamily: FC, fontSize: 10.5, color: "#9A8FB8" }}>ARC-1042</span>
          <span style={{ fontFamily: RB, fontWeight: 500, fontSize: 15, color: INK }}>New hire setup — 3 items</span>
        </div>
        <span className="rounded-full px-3 py-1.5 flex-shrink-0" style={{ background: "#EAE3F7" }}>
          <span className="uppercase" style={{ fontFamily: RB, fontWeight: 500, fontSize: 9.5, letterSpacing: "0.06em", color: LAVENDER }}>AWAITING APPROVAL</span>
        </span>
      </div>
      {ticketItems.map((item) => (
        <div key={item.title} className="flex items-center gap-3 px-6 py-4" style={{ borderTop: "1px solid rgba(38,38,42,0.08)" }}>
          <span className="flex-1" style={{ fontFamily: RB, fontSize: 13.5, color: "#4A4A46" }}>{item.title}</span>
          <span className="rounded-full px-3 py-1.5 flex-shrink-0" style={{ background: item.bg }}>
            <span className="uppercase" style={{ fontFamily: RB, fontWeight: 500, fontSize: 9.5, letterSpacing: "0.06em", color: item.c }}>{item.status}</span>
          </span>
        </div>
      ))}
      <div className="px-6 py-5">
        <p style={{ fontFamily: RB, fontSize: 12, lineHeight: "1.68em", color: "#9A9A94" }}>
          Your monitor can arrive while your access is still with an approver. One status for the whole ticket would be a lie.
        </p>
      </div>
    </div>
  );
}

function InsightSection() {
  return (
    <section id="insight" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <SectionHead n="03" label="The Core Insight" />
      <SectionHeading>One ticket, many items,<br />each with its own status.</SectionHeading>
      <p className="max-w-[900px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.74em", color: BODY }}>
        The existing system treats every request as an isolated ticket. Real requests arrive in bundles — a new hire
        needs a laptop and a monitor and three system accesses, and should not type who they are four times. So we
        modelled the ticket as a container for multiple requested items: requester details captured once, status
        trackable for the whole bundle and per item. That is a data-model decision expressed as a UX decision, and it
        is the reason the flow feels different rather than just looking nicer.
      </p>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <BundledTicketDiagram />
        <div className="flex-1 min-w-0 w-full">
          <BundledDetailScreen />
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// THE FLOW
// ═══════════════════════════════════════════════════════════════════════

const wizardSteps = [
  { label: "1 — Your info", note: "Auto-filled" },
  { label: "2 — What you need", note: "Multi-select (bundle or singular)" },
  { label: "3 — Details", note: "Only the answers that differ among each ticket" },
  { label: "4 — Review", note: "One bundle and separate tickets" },
];

function FlowSection() {
  return (
    <section id="flow" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <SectionHead n="04" label="The Flow" />
      <SectionHeading>Four steps, and only the<br />questions your answers require.</SectionHeading>
      <p className="max-w-[900px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.74em", color: BODY }}>
        The conditional third step is the whole argument. The existing system asks everyone everything; here, step
        three is assembled from what you actually selected in step two. Showing all four steps in order makes that
        claim visible instead of asserted.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
        {wizardSteps.map((s, i) => (
          <WizardScreen key={s.label} index={i} caption={s.label} note={s.note} />
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// SCOPE
// ═══════════════════════════════════════════════════════════════════════

const scopeItems = [
  { n: "01", title: "Four-step create-ticket wizard", body: "Your info → multi-select → only your questions → review" },
  { n: "02", title: "Bundled-ticket detail view", body: "With a lifecycle timeline: Open → Awaiting approval → In progress → Resolved, plus Cancelled" },
  { n: "03", title: "Per-line-item drill-down", body: "Each item in a bundle carries its own state, independently" },
  { n: "04", title: "A “My tickets” view", body: "All / Current / Past tabs, search, and a combined filter-and-sort control" },
  { n: "05", title: "An approver review queue", body: "Designed for the person signing off, not only the person asking" },
  { n: "06", title: "Two homepages", body: "One for a general employee, one for an admin" },
];

function ScopeSection() {
  return (
    <section id="scope" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <SectionHead n="05" label="What We Built" />
      <SectionHeading>What we designed and built.</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {scopeItems.map((item) => (
          <div
            key={item.n}
            className="flex flex-col gap-2.5 rounded-[14px]"
            style={{ padding: "26px 28px", background: "#F6F4FB", border: "1px solid rgba(116,85,173,0.18)" }}
          >
            <span style={{ fontFamily: NR, fontWeight: 700, fontSize: 30, lineHeight: 1, letterSpacing: "0.01em", color: LAVENDER }}>{item.n}</span>
            <p style={{ fontFamily: RB, fontWeight: 500, fontSize: 15, lineHeight: "1.4em", color: INK }}>{item.title}</p>
            <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.7em", color: BODY }}>{item.body}</p>
          </div>
        ))}
      </div>
      <p className="max-w-[900px]" style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.76em", color: BODY }}>
        Every piece ships against the same idea: a request is a container of items, each with its own state. That single
        model is what lets a four-step wizard, a bundled detail view, a personal queue, and an approver&rsquo;s review
        screen all stay consistent without special cases.
      </p>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// ADMIN RIGHTS (APPROVER)
// ═══════════════════════════════════════════════════════════════════════

function ApproverSection() {
  return (
    <section id="approver" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <SectionHead n="06" label="The Approver" />
      <SectionHeading>Admin Rights</SectionHeading>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-[700px] flex-shrink-0">
          <AdminApprovalScreen />
        </div>
        <div className="flex flex-col gap-5">
          <p style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.74em", color: BODY }}>
            Approvers were a secondary user in the workflow, but their experience was essential to completing a request.
            We designed an approval view that grouped pending items by request, provided the context needed to make a
            decision, and allowed items to be approved individually so one delayed item would not block the rest of the
            request.
          </p>
          <p style={{ fontFamily: RB, fontSize: 15, lineHeight: "1.74em", color: BODY }}>
            During the hackathon, our researcher helped frame the problem and ran a quick five-minute usability test with
            employees. We used the feedback to make immediate adjustments to the flow and interface before the final
            prototype.
          </p>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// REFLECTION
// ═══════════════════════════════════════════════════════════════════════

const takeaways = [
  {
    n: "01", title: "Prioritize the core idea.",
    body: "With only two days, the most important decision was identifying which part of the experience was worth solving first. I learned to narrow the scope early and focus the team around the highest-impact workflows.",
  },
  {
    n: "02", title: "Plan before building.",
    body: "Working in plan mode and reviewing Claude Code's proposed changes before implementation helped me catch misunderstandings early and avoid unnecessary rework.",
  },
  {
    n: "03", title: "Use AI as a tool, not the decision-maker.",
    body: "AI accelerated the build, but I still had to evaluate its recommendations against the design intent, user needs, and technical constraints. The final decisions remained mine.",
  },
];

function LearnedSection() {
  return (
    <section id="learned" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <Eyebrow>REFLECTION</Eyebrow>
      <SectionHeading>My Takeaway</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {takeaways.map((t) => (
          <div key={t.n} className="flex flex-col gap-3.5 pt-6" style={{ borderTop: "2px solid rgba(38,38,42,0.14)" }}>
            <span style={{ fontFamily: FC, fontSize: 11, color: LAVENDER }}>{t.n}</span>
            <p style={{ fontFamily: NR, fontWeight: 400, fontSize: 22, lineHeight: "1.32em", color: INK }}>{t.title}</p>
            <p style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.76em", color: BODY }}>{t.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// WHAT'S NEXT
// ═══════════════════════════════════════════════════════════════════════

function ChainIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 8 9 5 9-5" />
    </svg>
  );
}

const whatsNext = [
  {
    accent: LAVENDER, bg: "#F5F3F9", border: "rgba(116,85,173,0.28)",
    icon: <ChainIcon />, title: "Presented up the chain",
    body: "After the hackathon, the concept was shared in several higher-level meetings beyond the original team, giving the work visibility across the organization.",
  },
  {
    accent: BLUE, bg: "#EDF4FE", border: "rgba(0,102,245,0.28)",
    icon: <StackIcon />, title: "Opportunity for continued development",
    body: "Parts of the bundled request and onboarding concept were identified as opportunities that could be explored further in future internal projects.",
  },
];

function WhatsNextSection() {
  return (
    <section id="whats-next" className="w-full max-w-[1168px] mx-auto px-6 md:px-0 scroll-mt-24 flex flex-col gap-10 min-w-0">
      <Eyebrow>WHAT&rsquo;S NEXT</Eyebrow>
      <SectionHeading>Where it goes from here.</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {whatsNext.map((c) => (
          <div key={c.title} className="flex flex-col gap-3.5 rounded-[14px]" style={{ padding: "28px 30px", background: c.bg, border: `1px solid ${c.border}` }}>
            <span className="flex items-center justify-center flex-shrink-0" style={{ width: 40, height: 40, borderRadius: 11, background: c.accent }}>
              {c.icon}
            </span>
            <p style={{ fontFamily: NR, fontWeight: 400, fontSize: 25, lineHeight: "1.32em", color: INK }}>{c.title}</p>
            <p style={{ fontFamily: RB, fontSize: 13.5, lineHeight: "1.7em", color: BODY }}>{c.body}</p>
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
    slug: "celebration-of-technology", label: "INTERNAL EVENT MARKETING HOMEPAGE", color: BLUE,
    title: "Celebration of Technology",
    body: "One site for three audiences. I started toward persona pathways and ended up with a single narrative page and a sticky section nav. A design prototype, not a launched site.",
    gradient: `linear-gradient(90deg, ${BLUE} 0%, ${NAVY} 100%)`,
  },
  {
    slug: "ai-learning-hub", label: "ENTERPRISE IA REDESIGN", color: CYAN,
    title: "AI Learning Hub",
    body: "Around 80 pages with no hierarchy and duplicated content. Leadership asked for persona-first navigation; I recommended organizing by task and delivering personas as curated views on top. Strategy and IA deliverables, handed off.",
    gradient: `linear-gradient(90deg, ${CYAN} 0%, ${NAVY} 100%)`,
  },
];

function OtherCaseStudies() {
  return (
    <section style={{ background: PAGE_BG, borderTop: "1px solid rgba(38,38,42,0.13)" }}>
      <div className="px-6 md:px-[136px] py-16 md:py-[78px] flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p style={{ ...eyebrowStyle, color: LAVENDER }}>THE OTHER CASE STUDIES</p>
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

export default function Arc() {
  return (
    <main
      className={`min-h-screen ${newsreader.variable} ${roboto.variable} ${firaCode.variable} ${spaceGrotesk.variable}`}
      style={{ backgroundColor: PAGE_BG, fontFamily: RB }}
    >
      <CaseStudyNav accent={LAVENDER} />
      <Hero />
      <TitleMeta />
      <div className="pt-14 md:pt-16">
        <QuestionCallout />
      </div>
      <div id="arc-content" className="flex flex-col gap-24 md:gap-28 py-20 md:py-28">
        <ContextSection />
        <ResearchSection />
        <InsightSection />
        <FlowSection />
        <ScopeSection />
        <ApproverSection />
        <LearnedSection />
        <WhatsNextSection />
      </div>
      <OtherCaseStudies />
    </main>
  );
}
