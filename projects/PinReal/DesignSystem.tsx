/* eslint-disable @next/next/no-img-element */
// Section 04 — DESIGN SYSTEM. Ported from Figma node 3:1325 (PinReal. v2).
// The design crops one 1277.5 × 1222.75 piece of artwork three times
// (TYPOGRAPHY, LOGO & APP ICON, COLOR PALETTE); it is built once here and each
// card applies the same offset (and, for the palette, the same slight scale).
import { ScaledCanvas, Section, StageHeader, CardHeader } from "./shared";
import { ds } from "./assets";

const ART_W = 1277.5;
const ART_H = 1222.75;

const TRIM = "[text-box-edge:cap_alphabetic] [text-box-trim:trim-both]";

function PinSquare({ bg, icon, size, last = false }: { bg: string; icon: string; size: number; last?: boolean }) {
  return (
    <div className={`${last ? "" : "mr-[-63.559px]"} relative shrink-0`} style={{ width: size, height: size }}>
      <div className="absolute left-[57.51px] rounded-[38.306px] size-[191.529px] top-[57.51px]" style={{ background: bg }} />
      <div className="absolute flex items-center justify-center left-0 size-[307.512px] top-[0.87px]">
        <div className="flex-none rotate-[-17.33deg]">
          <div className="drop-shadow-[0px_3.65px_1.825px_rgba(0,0,0,0.25)] flex items-center p-[55.439px] relative size-[245.529px]">
            <div className="relative shrink-0 size-[134.651px]">
              <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lockup({ className, pinSize, pinLeft, pinBox, pinPad, pinImg, realLeft, fontSize, pinColor, realClass, realTracking, src }: {
  className: string; pinSize: number; pinLeft: number; pinBox: number; pinPad: number; pinImg: number; realLeft: number; fontSize: number;
  pinColor: string; realClass: string; realTracking: number; src: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <p className="[word-break:break-word] absolute pr-pacifico leading-[normal] left-0 not-italic top-0 whitespace-nowrap" style={{ fontSize: pinSize, color: pinColor }}>
        Pin
      </p>
      <div className="absolute flex items-center justify-center" style={{ left: pinLeft, width: pinBox, height: pinBox, top: pinSize * 0.0363 }}>
        <div className="flex-none rotate-[-17.33deg]">
          <div className="flex items-center relative" style={{ padding: pinPad }}>
            <div className="relative shrink-0" style={{ width: pinImg, height: pinImg }}>
              <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
            </div>
          </div>
        </div>
      </div>
      <p
        className={`[word-break:break-word] absolute pr-palanquin leading-[0] not-italic top-0 whitespace-nowrap ${realClass}`}
        style={{ left: realLeft, fontSize, letterSpacing: realTracking }}
      >
        <span className="leading-[normal]">R</span>
        <span className="leading-[normal]" style={{ letterSpacing: "-0.48px" }}>e</span>
        <span className="leading-[normal]">al.</span>
      </p>
    </div>
  );
}

function Swatch({ box, label, bg, labelBox, color, size, extra = "" }: {
  box: string; label: string; bg: string; labelBox: string; color: string; size: number; extra?: string;
}) {
  return (
    <>
      <div className={`absolute ${box} ${extra}`} style={{ background: bg }} />
      <p className={`[word-break:break-word] ${TRIM} absolute pr-inter font-normal leading-[normal] not-italic ${labelBox}`} style={{ fontSize: size, color }}>
        {label}
      </p>
    </>
  );
}

function DesignSystemArtwork() {
  return (
    <div className="relative" style={{ width: ART_W, height: ART_H }}>
      {/* Pacifico */}
      <div className="absolute h-[423.4px] left-[59.31px] top-[calc(10%-11.86px)] w-[570.313px]">
        <div className="absolute bg-[#e60023] h-[423.4px] left-0 rounded-[27.375px] top-0 w-[570.313px]" />
        <p className="[word-break:break-word] absolute pr-pacifico leading-[122.275px] left-[52.01px] not-italic text-[89.668px] text-white top-[65.7px] whitespace-nowrap">Pacifico</p>
        <div className="absolute bg-white h-[22.813px] left-[52.01px] rounded-[13.598px] top-[40.15px] w-[93.988px]" />
        <p className={`[word-break:break-word] ${TRIM} absolute pr-palanquin leading-[101.896px] left-[64.79px] not-italic text-[#e60023] text-[15.208px] top-[46.54px] tracking-[-0.9125px] whitespace-nowrap`}>Accent Font</p>
        <p className={`[word-break:break-word] ${TRIM} absolute pr-palanquin font-light leading-[27.375px] left-[52.01px] not-italic text-[21.9px] text-white top-[329.41px] w-[388.725px] whitespace-pre-wrap`}>
          {"Accent font inspired by Pinterest to bring creative and playful feel to app.  "}
        </p>
        <p className={`[word-break:break-word] ${TRIM} absolute pr-pacifico leading-[18.78px] left-[52.01px] not-italic text-[#f1cdd2] text-[11.268px] top-[202.57px] w-[240.9px]`}>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
        </p>
      </div>

      {/* Palanquin */}
      <div className="absolute h-[423.4px] left-[calc(50%+9.13px)] top-[calc(10%-11.86px)] w-[570.313px]">
        <div className="absolute bg-black h-[423.4px] left-0 rounded-[27.375px] top-0 w-[570.313px]" />
        <p className="[word-break:break-word] absolute pr-palanquin leading-[122.275px] left-[52.01px] not-italic text-[89.668px] text-white top-[54.75px] tracking-[-2.7375px] whitespace-nowrap">Palanquin</p>
        <div className="absolute bg-white h-[22.813px] left-[52.01px] rounded-[13.598px] top-[40.15px] w-[83.95px]" />
        <p className={`[word-break:break-word] ${TRIM} absolute pr-palanquin leading-[101.896px] left-[64.79px] not-italic text-[15.208px] text-black top-[46.54px] tracking-[-0.9125px] whitespace-nowrap`}>Main Font</p>
        <p className={`[word-break:break-word] ${TRIM} absolute pr-palanquin font-light leading-[27.375px] left-[52.01px] not-italic text-[21.9px] text-white top-[302.04px] w-[388.725px]`}>
          {"Main font inspired by BeReal., bringing modern and clean touch to app. Echoes simplicity and legibility. "}
        </p>
        <p className={`[word-break:break-word] ${TRIM} absolute pr-palanquin leading-[18.78px] left-[62.05px] not-italic text-[14.6px] text-white top-[197.1px] w-[269.188px]`}>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
        </p>
      </div>

      {/* App icons */}
      <div className="absolute content-stretch flex items-center justify-center left-[calc(40%-9.07px)] top-[calc(50%+29.2px)] w-[766.445px]">
        <PinSquare bg="#e60023" icon={ds.PinIcon} size={306.553} />
        <PinSquare bg="#f1cdd2" icon={ds.PinIcon1} size={306.553} />
        <PinSquare bg="#d9d9d9" icon={ds.PinIcon2} size={307.513} last />
      </div>

      {/* Colour palette */}
      <Swatch box="h-[91.25px] left-[59.31px] rounded-tl-[27.375px] top-[calc(80%+37.41px)] w-[387.811px]" bg="#f1cdd2" extra=""
        label="#F1CDD2" labelBox="h-[14.6px] left-[73px] top-[calc(80%+100.37px)] w-[108.588px]" color="#fff" size={22.813} />
      <Swatch box="h-[91.25px] left-[calc(30%+63.87px)] top-[calc(80%+37.41px)] w-[388.728px]" bg="#f695a4"
        label="#F695A4" labelBox="h-[11.863px] left-[calc(30%+81.29px)] top-[calc(80%+101.29px)] w-[103.6px]" color="#fff" size={22.813} />
      <Swatch box="h-[91.25px] left-[calc(60%+69.35px)] rounded-tr-[27.375px] top-[calc(80%+37.41px)] w-[387.811px]" bg="#e60023"
        label="#E60023" labelBox="h-[13.688px] left-[calc(60%+87.69px)] top-[calc(80%+101.29px)] w-[115.518px]" color="#fff" size={22.813} />
      <Swatch box="h-[94.9px] left-[59.31px] rounded-bl-[27.375px] shadow-[0px_3.65px_3.65px_0px_rgba(0,0,0,0.25)] top-[calc(90%+6.39px)] w-[288.35px]" bg="#fff"
        label="#FFFFFF" labelBox="h-[13.688px] left-[73px] top-[calc(90%+73.91px)] w-[90.338px]" color="#000" size={18.25} />
      <Swatch box="h-[94.9px] left-[calc(20%+92.16px)] shadow-[0px_3.65px_3.65px_0px_rgba(0,0,0,0.25)] top-[calc(90%+6.39px)] w-[292.913px]" bg="#d9d9d9"
        label="#D9D9D9" labelBox="h-[10.95px] left-[calc(20%+104.94px)] top-[calc(90%+73.91px)] w-[87.097px]" color="#000" size={18.25} />
      <Swatch box="h-[94.9px] left-[calc(50%+1.83px)] shadow-[0px_3.65px_3.65px_0px_rgba(0,0,0,0.25)] top-[calc(90%+6.39px)] w-[290.175px]" bg="#858585"
        label="#858585" labelBox="h-[11.863px] left-[calc(50%+19.9px)] top-[calc(90%+73.91px)] w-[79.925px]" color="#000" size={18.25} />
      <Swatch box="h-[94.9px] left-[calc(70%+36.95px)] rounded-br-[27.375px] shadow-[0px_3.65px_3.65px_0px_rgba(0,0,0,0.25)] top-[calc(90%+6.39px)] w-[292.463px]" bg="#000"
        label="#000000" labelBox="h-[11.863px] left-[calc(70%+55.66px)] top-[calc(90%+73.91px)] w-[80.679px]" color="#fff" size={18.25} />

      {/* Logo table */}
      <Lockup
        className="h-[118.625px] left-[69.35px] top-[calc(50%+36.5px)] w-[218.715px]"
        pinSize={65.93} pinColor="#000" pinLeft={37.07} pinBox={65.283} pinPad={11.769} pinImg={28.586}
        realLeft={92.68} fontSize={65.93} realClass="text-[rgba(230,0,35,0.41)]" realTracking={-3.2965} src={ds.PinIcon3}
      />
      <Lockup
        className="h-[58.017px] left-[calc(10%-2.74px)] top-[calc(60%+88.51px)] w-[106.969px]"
        pinSize={32.245} pinColor="#000" pinLeft={18.13} pinBox={31.929} pinPad={5.756} pinImg={13.981}
        realLeft={45.33} fontSize={32.245} realClass="text-[#858585]" realTracking={-1.6122} src={ds.PinIcon4}
      />
      <Lockup
        className="h-[58.017px] left-[calc(10%-2.74px)] top-[calc(60%+24.64px)] w-[106.969px]"
        pinSize={32.245} pinColor="#e60023" pinLeft={18.13} pinBox={31.929} pinPad={5.756} pinImg={13.981}
        realLeft={45.33} fontSize={32.245} realClass="text-[#e60023]" realTracking={-1.6122} src={ds.PinIcon5}
      />
      <div className="absolute h-[219px] left-[62.96px] top-[calc(50%+52.92px)] w-[421.575px]">
        <div className="absolute inset-[-0.21%_0_0_0]">
          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={ds.TableLines} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute pr-palanquin font-light leading-[normal] left-[calc(20%+99.46px)] not-italic text-[#e60023] text-[15.378px] top-[calc(50%+87.6px)] tracking-[-0.3076px] whitespace-nowrap">Primary Logo</p>
      <p className="[word-break:break-word] absolute pr-palanquin font-light leading-[normal] left-[calc(20%+94.9px)] not-italic text-[#e60023] text-[15.378px] top-[calc(60%+39.24px)] tracking-[-0.3076px] whitespace-nowrap">Highlight Logo</p>
      <p className="[word-break:break-word] absolute pr-palanquin font-light leading-[normal] left-[calc(20%+82.13px)] not-italic text-[#e60023] text-[15.378px] top-[calc(60%+103.11px)] tracking-[-0.3076px] whitespace-nowrap">Monochrome Logo</p>

      {/* Icon titles */}
      <p className={`[word-break:break-word] ${TRIM} absolute pr-palanquin font-bold leading-[normal] left-[calc(40%+88.14px)] not-italic text-[#e60023] text-[41.295px] top-[calc(50%+46.02px)] tracking-[-0.8259px] whitespace-nowrap`}>Main</p>
      <p className={`[word-break:break-word] ${TRIM} absolute pr-palanquin font-bold leading-[normal] left-[calc(60%+70.98px)] not-italic text-[#f695a4] text-[41.295px] top-[calc(50%+46.02px)] tracking-[-0.8259px] whitespace-nowrap`}>Light</p>
      <p className={`[word-break:break-word] ${TRIM} absolute pr-palanquin font-bold leading-[normal] left-[calc(80%+62.24px)] not-italic text-black text-[41.295px] top-[calc(50%+46.02px)] tracking-[-0.8259px] whitespace-nowrap`}>Dark</p>
    </div>
  );
}

/** One card: a 1168-wide window onto the artwork, placed at (left, top) and scaled. */
function Crop({ h, left, top, scale = 1 }: { h: number; left: number; top: number; scale?: number }) {
  return (
    <ScaledCanvas w={1168} h={h}>
      <div className="absolute" style={{ left, top, width: ART_W * scale, height: ART_H * scale }}>
        <div style={{ width: ART_W, height: ART_H, transformOrigin: "0 0", transform: scale === 1 ? undefined : `scale(${scale})` }}>
          <DesignSystemArtwork />
        </div>
      </div>
    </ScaledCanvas>
  );
}

export function DesignSystem() {
  return (
    <Section>
      <StageHeader num="04" title="DESIGN SYSTEM" />
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <CardHeader>TYPOGRAPHY</CardHeader>
          <Crop h={435} left={-54.75} top={-104.94} />
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <CardHeader>LOGO & APP ICON</CardHeader>
          <Crop h={312} left={-54.75} top={-636.92} />
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <CardHeader>COLOR PALETTE</CardHeader>
          <Crop h={195} left={-54.54} top={-1007.12} scale={1272.529 / ART_W} />
        </div>
      </div>
    </Section>
  );
}
