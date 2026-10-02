/* eslint-disable @next/next/no-img-element */
// Section 01 — USER PERSONAS. Ported from Figma node 3:1092 (PinReal. v2).
// All coordinates are the design's own, in the artwork's 1293.671 × 735.544 canvas.
import { ScaledCanvas, Section, StageHeader, CardHeader } from "./shared";
import { personas as img } from "./assets";

type Group = {
  label: string;
  bg: string;
  box: { left: number; top: number; w: number; h: number };
  labelAt: { left: number; top: number; h: number };
  ul: { left: number; top: number; w: number; fs: number; lh: number; ms: number };
  items: string[];
};

type Persona = {
  x0: number; // left edge of the red card
  name: string;
  role: string;
  src: string;
  groups: Group[];
};

const WHITE = "#ffffff";
const BLUSH = "#f1cdd2";
const SALMON = "#f695a4";

// Maya's groups sit in a nested frame at (474.96, 369.62) in the design; the
// offsets below are already resolved to canvas coordinates.
const PERSONAS: Persona[] = [
  {
    x0: 63.76,
    name: "Priya, 16",
    role: "high school student",
    src: img.Picture,
    groups: [
      {
        label: "Behaviors", bg: WHITE,
        box: { left: 82.24, top: 369.62, w: 328.962, h: 108.06 },
        labelAt: { left: 97.02, top: 378.3, h: 15.437 },
        ul: { left: 107.19, top: 398.56, w: 285.532, fs: 12.013, lh: 15.709, ms: 18.0195 },
        items: [
          "up to date on all socials to keep in contact with friends and other peers in school",
          "in the marketing team for student counsel board",
          "enjoys engaging with fashion and lifestyle content ",
        ],
      },
      {
        label: "Motivations", bg: BLUSH,
        box: { left: 82.24, top: 490.22, w: 328.962, h: 107.095 },
        labelAt: { left: 97.02, top: 498.9, h: 15.437 },
        ul: { left: 97.02, top: 519.17, w: 295.696, fs: 12.013, lh: 15.709, ms: 18.0195 },
        items: [
          "likes staying connected with peers and up to date on fashion and makeup trends",
          "posts content for student counsel, bringing attention to academic programs, school events, etc.",
        ],
      },
      {
        label: "Usage Habits", bg: SALMON,
        box: { left: 82.24, top: 609.86, w: 328.962, h: 87.798 },
        labelAt: { left: 97.02, top: 618.54, h: 15.437 },
        ul: { left: 107.19, top: 638.81, w: 285.532, fs: 12.013, lh: 15.709, ms: 18.0195 },
        items: ["can spontaneously share moments of her day in school", "good publicity for student counsel board"],
      },
    ],
  },
  {
    x0: 456.48,
    name: "Maya, 22",
    role: "undergraduate graphic design student",
    src: img.Picture1,
    groups: [
      {
        label: "Behaviors", bg: WHITE,
        box: { left: 474.96, top: 369.62, w: 328.962, h: 119.287 },
        labelAt: { left: 489.74, top: 379.2, h: 17.041 },
        ul: { left: 499.91, top: 401.57, w: 285.532, fs: 12.013, lh: 15.709, ms: 18.0195 },
        items: [
          "avid Pinterest user, curates numerous mood boards",
          "enjoys sharing “behind the scenes” of her design process on socials",
          "enjoys interacting with peers in creative field",
        ],
      },
      {
        label: "Motivations", bg: BLUSH,
        box: { left: 474.96, top: 499.99, w: 328.962, h: 73 },
        labelAt: { left: 489.74, top: 509.65, h: 17.041 },
        ul: { left: 489.74, top: 532.01, w: 295.696, fs: 12.013, lh: 15.709, ms: 18.0195 },
        items: ["always looking for inspiration for graphic design portfolio"],
      },
      {
        label: "Usage Habits", bg: SALMON,
        box: { left: 474.96, top: 584.08, w: 328.962, h: 113.574 },
        labelAt: { left: 489.74, top: 593.64, h: 16.983 },
        ul: { left: 499.91, top: 615.92, w: 285.532, fs: 12.937, lh: 16.633, ms: 19.4055 },
        items: [
          "can share workspace, recent sketches, and follow other users content",
          "feel a stronger sense of community within the design world",
        ],
      },
    ],
  },
  {
    x0: 849.2,
    name: "Xavier, 28",
    role: "Event Coordinator",
    src: img.Picture2,
    groups: [
      {
        label: "Behaviors", bg: WHITE,
        box: { left: 867.68, top: 369.62, w: 328.962, h: 103.494 },
        labelAt: { left: 882.47, top: 377.93, h: 17 },
        ul: { left: 892.63, top: 397.34, w: 285.532, fs: 12.013, lh: 15.709, ms: 18.0195 },
        items: [
          "loves curating personalized mood boards for clients to understand their vision",
          "actively posts on socials to advertise his services (event setups, client meetings, etc.)",
        ],
      },
      {
        label: "Motivations", bg: BLUSH,
        box: { left: 867.68, top: 485.12, w: 328.962, h: 102.57 },
        labelAt: { left: 882.47, top: 493.44, h: 17 },
        ul: { left: 882.47, top: 512.85, w: 295.696, fs: 12.013, lh: 15.709, ms: 18.0195 },
        items: [
          "wants to share raw and authentic snapshots of his day to show that not everything needs to be edited",
          "likes sharing his creative process and expertise to motivate others in the same/similar spaces",
        ],
      },
      {
        label: "Usage Habits", bg: SALMON,
        box: { left: 867.68, top: 599.71, w: 328.962, h: 97.949 },
        labelAt: { left: 882.47, top: 608.02, h: 17 },
        ul: { left: 892.63, top: 627.43, w: 285.532, fs: 12.013, lh: 15.709, ms: 18.0195 },
        items: [
          "can share multiple moments in his day and look back on this almost “creative journal”",
          "consistently seek inspiration from other creators and follow their content ",
        ],
      },
    ],
  },
];

function PersonaCard({ p }: { p: Persona }) {
  return (
    <>
      <div className="absolute bg-[#e60023] h-[504.532px] rounded-[18.481px] shadow-[0px_3.696px_3.696px_0px_rgba(0,0,0,0.25)] top-[208.84px] w-[365.924px]" style={{ left: p.x0 }} />

      {p.groups.map((g) => (
        <div key={g.label}>
          <div
            className="absolute rounded-[10.925px]"
            style={{ background: g.bg, left: g.box.left, top: g.box.top, width: g.box.w, height: g.box.h }}
          />
          <p
            className="[word-break:break-word] absolute pr-palanquin font-bold not-italic text-[#e60023] text-[18.481px] w-[122.899px]"
            style={{ left: g.labelAt.left, top: g.labelAt.top, height: g.labelAt.h, lineHeight: "14.425px" }}
          >
            {g.label}
          </p>
          <ul
            className="[word-break:break-word] absolute block pr-palanquin font-light list-disc not-italic text-black"
            style={{ left: g.ul.left, top: g.ul.top, width: g.ul.w, fontSize: g.ul.fs, lineHeight: 0 }}
          >
            {g.items.map((t) => (
              <li key={t} style={{ marginInlineStart: g.ul.ms }}>
                <span style={{ lineHeight: `${g.ul.lh}px` }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="absolute bg-white h-[59.139px] rounded-[92.405px] shadow-[0px_3.696px_3.696px_0px_rgba(0,0,0,0.25)] top-[298.47px] w-[269.823px]" style={{ left: p.x0 + 51.75 }} />
      <p className="[word-break:break-word] absolute pr-palanquin font-bold leading-[38.533px] not-italic text-[#e60023] text-[30.826px] top-[298.47px] whitespace-nowrap" style={{ left: p.x0 + 124.75 }}>
        {p.name}
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute pr-palanquin font-light leading-[14.671px] not-italic text-[10.107px] text-black text-center top-[334.57px] w-[167.253px]"
        style={{ left: p.x0 + 182.5 }}
      >
        {p.role}
      </p>

      <div className="absolute size-[174.646px] top-[130.29px]" style={{ left: p.x0 + 102.57 }}>
        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={img.Shadow} />
      </div>
      <div className="absolute size-[146.924px] top-[144.15px]" style={{ left: p.x0 + 116.43 }}>
        <img loading="lazy" decoding="async" alt={`Portrait for the persona ${p.name}`} className="absolute block inset-0 max-w-none size-full" height="146.924" src={p.src} width="146.924" />
      </div>
    </>
  );
}

export function Personas() {
  return (
    <Section>
      <StageHeader num="01" title="USER PERSONAS" />
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <CardHeader>USER PERSONAS</CardHeader>
        <div className="w-full">
          <ScaledCanvas w={1168} h={598.812}>
            <div className="absolute h-[735.544px] left-[-55.44px] top-[-121.98px] w-[1293.671px]">
              {PERSONAS.map((p) => (
                <PersonaCard key={p.name} p={p} />
              ))}
            </div>
          </ScaledCanvas>
        </div>
      </div>
    </Section>
  );
}
