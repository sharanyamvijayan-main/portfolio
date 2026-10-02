/* eslint-disable @next/next/no-img-element */
// Section 03 — BRAND & TONE MAPPING. Ported from Figma node 3:1182 (PinReal. v2).
// The design shows one piece of artwork twice at two scales (BRAND VOICE and
// TONE MAPPING); it is built once here in the first copy's 1230.164 × 930.531
// canvas and each card scales and offsets it exactly as the design does.
import { ScaledCanvas, Section, StageHeader, CardHeader } from "./shared";
import { brand } from "./assets";

const ART_W = 1230.164;
const ART_H = 930.531;

type Chip = { label: string; left: number; top: number; w: number; bg: string; color: string };

const RED = "#e60023";
const HALF_RED = "rgba(230,0,35,0.5)";
const CHIPS: Chip[] = [
  // spontaneous · informative
  { label: "daily prompt theme tags", left: 671.32, top: 687.13, w: 219.672, bg: "#f1cdd2", color: RED },
  { label: "captions + theme tags", left: 835.63, top: 739.85, w: 197.705, bg: "#f1cdd2", color: RED },
  { label: "comments, reactions, sharing, pinning", left: 660.77, top: 809.27, w: 322.479, bg: "#f1cdd2", color: RED },
  // structured · expressive
  { label: "mood board naming", left: 396.29, top: 481.52, w: 184.525, bg: "#d9d9d9", color: "#000" },
  { label: "organizing mood boards", left: 298.75, top: 559.72, w: 215.279, bg: "#d9d9d9", color: "#000" },
  { label: "organizing mood boards", left: 146.74, top: 506.12, w: 215.279, bg: "#d9d9d9", color: "#000" },
  // structured · informative
  { label: "system status visibility", left: 167.83, top: 732.83, w: 202.977, bg: "#858585", color: "#fff" },
  { label: "error messages", left: 406.83, top: 690.65, w: 147.62, bg: "#858585", color: "#fff" },
  { label: "cancel/edit actions", left: 232.85, top: 809.27, w: 174.859, bg: "#858585", color: "#fff" },
  { label: "filter search", left: 445.49, top: 753.91, w: 117.744, bg: "#858585", color: "#fff" },
  // spontaneous · expressive
  { label: "daily prompts", left: 934.05, top: 461.31, w: 131.803, bg: HALF_RED, color: "#fff" },
  { label: "real-time post countdown", left: 660.77, top: 441.1, w: 233.731, bg: HALF_RED, color: "#fff" },
  { label: "posting window notification", left: 789.94, top: 521.94, w: 246.033, bg: HALF_RED, color: "#fff" },
  { label: "number of retakes allowed", left: 648.47, top: 570.27, w: 237.246, bg: HALF_RED, color: "#fff" },
];

const AXIS_LABELS = [
  { label: "expressive", left: 563.24, top: 387.7 },
  { label: "informative", left: 556.21, top: 907.88 },
  { label: "structured", left: 151.13, top: 644.28 },
  { label: "spontaneous", left: 975.34, top: 645.92 },
];

const PILL_SHADOW = "shadow-[0px_3.696px_3.696px_0px_rgba(0,0,0,0.25)]";

function BrandToneArtwork() {
  return (
    <div className="relative" style={{ width: ART_W, height: ART_H }}>
      {/* Playful */}
      <div className="absolute flex h-[155.08px] items-center justify-center left-[434.95px] top-[72.93px] w-[358.491px]">
        <div className="flex-none rotate-[10.09deg]">
          <div className={`bg-[#f1cdd2] h-[95.777px] relative rounded-[28.725px] w-[347.082px] ${PILL_SHADOW}`} />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[125.996px] items-center justify-center left-[556.06px] top-[157.47px] w-[194.986px]">
        <div className="flex-none rotate-[10.09deg]">
          <div className="[word-break:break-word] flex flex-col pr-palanquin font-bold h-[95.777px] justify-center leading-[0] not-italic relative text-[58.084px] text-[rgba(230,0,35,0.5)] w-[181.01px]">
            <p className="leading-[60.504px]">Playful</p>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[469.79px] size-[62.158px] top-[99.23px]">
        <div className="flex-none rotate-[10.09deg]">
          <div className="relative size-[53.6px]">
            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={brand.Img} />
          </div>
        </div>
      </div>

      {/* Authentic */}
      <div className={`absolute bg-[#d9d9d9] h-[95.777px] left-[86.99px] rounded-[28.725px] top-[179.25px] w-[414.261px] ${PILL_SHADOW}`} />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col pr-palanquin font-bold h-[95.777px] justify-center leading-[0] left-[210.01px] not-italic text-[#858585] text-[58.084px] top-[227.14px] w-[263.939px]">
        <p className="leading-[60.504px]">Authentic</p>
      </div>
      <div className="absolute left-[118.19px] size-[53.6px] top-[199.69px]">
        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={brand.Camera} />
      </div>
      <div className="absolute h-[27.239px] left-[169.15px] top-[192.66px] w-[27.74px]">
        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={brand["1"]} />
      </div>

      {/* Creative */}
      <div className={`absolute bg-[#f695a4] h-[95.777px] left-[778.52px] rounded-[28.725px] top-[192.43px] w-[365.131px] ${PILL_SHADOW}`} />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col pr-palanquin font-bold h-[95.777px] justify-center leading-[0] left-[901.54px] not-italic text-[#e60023] text-[58.084px] top-[240.32px] w-[216.497px]">
        <p className="leading-[60.504px]">Creative</p>
      </div>
      <div className="absolute h-[57.153px] left-[809.27px] top-[212.64px] w-[59.751px]">
        <div className="absolute inset-[-2.31%_-2.21%]">
          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={brand.Vector} />
        </div>
      </div>

      {/* Axes */}
      <div className="absolute flex h-[481.521px] items-center justify-center left-[614.2px] top-[406.83px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[481.521px]">
            <div className="absolute inset-[-0.88px_0_0_0]">
              <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={brand.Line6} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[269.76px] top-[647.59px] w-[690.649px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[690.649px]">
            <div className="absolute inset-[-0.88px_0_0_0]">
              <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={brand.Line7} />
            </div>
          </div>
        </div>
      </div>
      {AXIS_LABELS.map((a) => (
        <div
          key={a.label}
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col pr-palanquin font-normal justify-center leading-[0] not-italic text-[23.454px] text-black whitespace-nowrap"
          style={{ left: a.left, top: a.top }}
        >
          <p className="leading-[24.431px]">{a.label}</p>
        </div>
      ))}

      {/* Tone-mapping chips */}
      {CHIPS.map((c, i) => (
        <div key={`${c.label}-${i}`}>
          <div className="absolute h-[35.148px] rounded-[87.869px]" style={{ background: c.bg, left: c.left, top: c.top, width: c.w }} />
          <div
            className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col pr-palanquin font-normal justify-center leading-[0] not-italic text-[18.823px] whitespace-nowrap"
            style={{ left: c.left + 10.54, top: c.top + 17.03, color: c.color }}
          >
            <p className="leading-[19.607px]">{c.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function BrandTone() {
  return (
    <Section>
      <StageHeader num="03" title="BRAND & TONE MAPPING" />
      <div className="bg-[#fdf0f2] content-stretch flex flex-col gap-[clamp(28px,4.1vw,48px)] items-start overflow-clip px-[clamp(16px,4.1vw,48px)] py-[clamp(24px,3.8vw,44px)] relative rounded-[18px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <CardHeader>BRAND VOICE</CardHeader>
          <div className="w-full">
            <ScaledCanvas w={1072} h={233.043}>
              <div className="absolute" style={{ left: -79.08, top: -65.9, width: ART_W, height: ART_H }}>
                <BrandToneArtwork />
              </div>
            </ScaledCanvas>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <CardHeader>TONE MAPPING</CardHeader>
          <div className="w-full">
            <ScaledCanvas w={1072} h={617.565}>
              <div className="absolute" style={{ left: -142.93, top: -390.69, width: 1334.044, height: 1009.109 }}>
                <div style={{ width: ART_W, height: ART_H, transformOrigin: "0 0", transform: `scale(${1334.044 / ART_W})` }}>
                  <BrandToneArtwork />
                </div>
              </div>
            </ScaledCanvas>
          </div>
        </div>
      </div>
    </Section>
  );
}
