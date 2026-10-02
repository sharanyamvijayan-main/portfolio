/* eslint-disable @next/next/no-img-element */
// Section 05 — ICONS & COMPONENTS. Ported from Figma node 3:1568 (PinReal. v2).
// Two cards: the component library (icons, toggles, buttons) and UI ELEMENTS
// (pop-ups, keyboard, filter overlay). Coordinates are the design's own.
import type { ReactNode } from "react";
import { ScaledCanvas, Section, StageHeader, CardHeader } from "./shared";
import { icons as i } from "./assets";

// ── Component library ─────────────────────────────────────────────────────

/** Figma's dashed purple outline around a component set. */
function SetFrame({ x, y, w, h, children }: { x: number; y: number; w: number; h: number; children: ReactNode }) {
  return (
    <div className="absolute" style={{ left: x, top: y, width: w, height: h }}>
      <svg className="absolute inset-0 overflow-visible" width={w} height={h} aria-hidden>
        <rect x="0.5" y="0.5" width={w - 1} height={h - 1} rx="5" fill="none" stroke="#9747ff" strokeWidth="1" strokeDasharray="10 5" />
      </svg>
      {children}
    </div>
  );
}

function At({ x, y, children }: { x: number; y: number; children: ReactNode }) {
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {children}
    </div>
  );
}

function IconImg({ src, size }: { src: string; size: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
    </div>
  );
}

/**
 * Off-state toggle. Figma's SVG export of this variant only contains the knob, so the
 * knob asset is used as exported and the pill outline is drawn at the design's
 * geometry (4.73px ring, x 4.73–52.07, y 14.2–42.6 inside a 56.8px box).
 */
function ToggleOff({ size, knob }: { size: number; knob: string }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="absolute rounded-full"
        style={{ left: "8.33%", top: "25%", width: "83.34%", height: "50%", border: `${size * 0.0833}px solid #858585`, boxSizing: "border-box" }}
      />
      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={knob} />
    </div>
  );
}

function Pin({ on = false }: { on?: boolean }) {
  return (
    <div className="content-stretch flex items-center p-[17.43px] relative">
      <div className="relative shrink-0 size-[42.334px]">
        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={on ? i.PinIcon1 : i.PinIcon} />
      </div>
    </div>
  );
}

function Checkbox({ on = false, text }: { on?: boolean; text: string }) {
  return (
    <div
      className={`content-stretch flex gap-[4.842px] items-center min-w-[96.84777069091797px] px-[6.053px] relative rounded-[6.053px] w-[96.848px] h-[22px] ${on ? "bg-[rgba(230,0,35,0.41)]" : "bg-white"}`}
    >
      <div className="relative shrink-0 size-[14.527px]">
        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={on ? i.Checkbox3 : i.Checkbox2} />
      </div>
      <p className={`[word-break:break-word] pr-palanquin-dark leading-[normal] not-italic relative shrink-0 text-[12.106px] text-left whitespace-nowrap ${on ? "text-[#e60023]" : "text-[#858585]"}`}>
        {text}
      </p>
    </div>
  );
}

function ProfileIcon({ on = false }: { on?: boolean }) {
  return (
    <div className="overflow-clip relative size-[60.406px]">
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-4.3%]">
          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={on ? i.Vector3 : i.Vector2} />
        </div>
      </div>
      <div className="absolute flex inset-[12.91%_12.85%_12.85%_12.91%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full">
            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" height="44.846" src={i.ProfilePicture} width="44.846" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterButton({ on = false }: { on?: boolean }) {
  return (
    <div className="h-[30.018px] relative w-[78.381px]">
      <div className={`absolute inset-0 rounded-[16.677px] ${on ? "bg-[rgba(230,0,35,0.41)]" : "bg-[#ebedf0]"}`} />
      <p className={`[word-break:break-word] absolute pr-palanquin-dark inset-[11.11%_14.06%_8.94%_48.94%] leading-[normal] not-italic text-[13.341px] tracking-[-0.4002px] whitespace-nowrap ${on ? "text-[#e60023]" : "text-[#858585]"}`}>
        Filter
      </p>
      <div className="absolute inset-[22.22%_63.83%_25.31%_14.89%]">
        <div className="absolute inset-[-5.88%_-5.56%]">
          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={on ? i.Vector1 : i.Vector} />
        </div>
      </div>
    </div>
  );
}

function SaveButton({ on = false }: { on?: boolean }) {
  return (
    <div className="h-[54.413px] relative w-[145.102px]">
      <div className={`absolute inset-0 rounded-[16.004px] ${on ? "bg-[rgba(230,0,35,0.41)]" : "bg-[#e9e9e9]"}`} />
      <p className="[word-break:break-word] absolute pr-pacifico inset-[3.04%_14.32%_3.23%_15.09%] leading-[normal] not-italic text-[29.2px] text-center text-white tracking-[-1.0669px]">
        SAVE
      </p>
    </div>
  );
}

function PostButton() {
  return (
    <div className="h-[72.625px] relative w-[193.666px]">
      <div className="absolute bg-[rgba(230,0,35,0.41)] inset-0 rounded-[21.36px]" />
      <p className="[word-break:break-word] absolute pr-pacifico inset-[3.04%_17.46%_3.32%_11.95%] leading-[normal] not-italic text-[38.973px] text-white tracking-[-1.424px]">
        POST
      </p>
      <div className="absolute flex inset-[23.53%_2.98%_9.92%_72.06%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-50cqw,50cqh)] rotate-45 w-[hypot(50cqw,50cqh)]">
          <div className="relative size-full">
            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.Send} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ComponentLibraryArtwork() {
  return (
    <div className="relative" style={{ width: 1277.5, height: 740.037 }}>
      <SetFrame x={62.9625} y={153.3} w={151.475} h={255.614}>
        <At x={47.336} y={47.336}><ToggleOff size={56.803} knob={i.Property1SwichtLeft} /></At>
        <At x={47.336} y={137.274}><IconImg src={i.Property1SwichtRight} size={56.803} /></At>
      </SetFrame>
      <SetFrame x={255.5} y={153.3} w={146.9125} h={258.9655}>
        <At x={34.859} y={34.86}><Pin /></At>
        <At x={34.859} y={146.913}><Pin on /></At>
      </SetFrame>

      {(
        [
          { x: 443.475, y: 412.718, w: 144.9916, h: 115.805, label: "Nature" },
          { x: 599.642, y: 412.45, w: 145.2717, h: 116.217, label: "OOTD" },
          { x: 756.054, y: 412.718, w: 144.9916, h: 116.746, label: "Food" },
          { x: 912.344, y: 412.718, w: 144.9916, h: 116.746, label: "Song Choice" },
          { x: 1067.692, y: 412.718, w: 145.933, h: 114.863, label: "Vibes" },
        ] as const
      ).map((c) => (
        <SetFrame key={c.label} x={c.x} y={c.y} w={c.w} h={c.h}>
          <At x={24.212} y={24.212}><Checkbox text={c.label} /></At>
          <At x={24.212} y={50.845}><Checkbox on text={c.label} /></At>
        </SetFrame>
      ))}

      {(
        [
          { x: 443.475, y: 153.3, w: 138.405, h: 237.813, a: i.Property1Default3, b: i.Property1Variant6 },
          { x: 603.362, y: 153.3, w: 138.405, h: 237.813, a: i.Property1Default2, b: i.Property1Variant5 },
          { x: 761.2998, y: 153.3, w: 138.405, h: 237.813, a: i.Property1Default1, b: i.Property1Variant4 },
          { x: 919.237, y: 153.3, w: 138.4, h: 237.803, a: i.Property1Default, b: i.Property1Variant3 },
        ] as const
      ).map((c) => (
        <SetFrame key={c.x} x={c.x} y={c.y} w={c.w} h={c.h}>
          <At x={38.997} y={38.998}><IconImg src={c.a} size={60.411} /></At>
          <At x={38.997} y={138.405}><IconImg src={c.b} size={60.411} /></At>
        </SetFrame>
      ))}
      <SetFrame x={1075.225} y={153.3} w={138.4} h={237.803}>
        <At x={38.997} y={38.998}><ProfileIcon /></At>
        <At x={38.997} y={138.4}><ProfileIcon on /></At>
      </SetFrame>

      <SetFrame x={62.9625} y={447.125} w={151.475} h={264.602}>
        <At x={38.348} y={38.348}><IconImg src={i.Property1PaperPlane} size={74.779} /></At>
        <At x={38.348} y={151.475}><IconImg src={i.Property1Variant2} size={74.779} /></At>
      </SetFrame>
      <SetFrame x={259.15} y={452.6} w={144.175} h={259.15}>
        <At x={36.5} y={36.5}><IconImg src={i.Property1NotificationBell} size={71.175} /></At>
        <At x={36.5} y={151.475}><IconImg src={i.Property1NotificationBellWithNotifc} size={71.175} /></At>
      </SetFrame>
      <SetFrame x={443.475} y={556.625} w={145.0875} h={160.0965}>
        <At x={33.353} y={33.353}><FilterButton /></At>
        <At x={33.353} y={96.725}><FilterButton on /></At>
      </SetFrame>
      <SetFrame x={614.1125} y={560.275} w={69.35} h={156.296}>
        <At x={20.702} y={20.702}><IconImg src={i.Property1MessageIcon} size={27.947} /></At>
        <At x={20.702} y={62.104}><IconImg src={i.Property1CommentIcon1} size={27.947} /></At>
        <At x={20.702} y={107.648}><IconImg src={i.Property1ReactIcon} size={27.947} /></At>
      </SetFrame>
      <SetFrame x={710.8375} y={558.45} w={181.5875} h={157.8625}>
        <At x={18.25} y={18.25}><SaveButton /></At>
        <At x={18.25} y={85.438}><SaveButton on /></At>
      </SetFrame>

      {/* Loose components on the right */}
      <div className="absolute size-[51.391px] left-[calc(90%+13.78px)] top-[calc(70%+40.42px)]">
        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.DropUpButton} />
      </div>
      <div className="absolute size-[51.391px] left-[calc(90%+13.78px)] top-[calc(80%+20.83px)]">
        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.EditAddPlusCircle} />
      </div>
      <div className="absolute left-[calc(70%+32.85px)] top-[calc(70%+40.42px)]">
        <PostButton />
      </div>
      <div className="absolute size-[46.828px] left-[calc(90%+18.25px)] top-[calc(90%+5.57px)]">
        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.CropButton} />
      </div>
      <div className="absolute bg-[#d9d9d9] h-[73.422px] left-[calc(70%+32.85px)] rounded-[28.239px] top-[calc(80%+57.32px)] w-[200.499px]" />
      <p className="[word-break:break-word] absolute pr-palanquin-dark leading-[normal] left-[calc(70%+61.49px)] not-italic text-[45.183px] text-white top-[calc(80%+51.67px)] tracking-[2.8239px] whitespace-nowrap">
        Edit
      </p>
      <div className="absolute left-[calc(80%+37.82px)] size-[45.183px] top-[calc(80%+71.44px)]">
        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.EditIcon} />
      </div>
    </div>
  );
}

// ── UI elements ───────────────────────────────────────────────────────────

const POPUP_RADIUS = "rounded-tl-[22.972px] rounded-tr-[22.972px]";

function BoardRow({ inset, thumb, name, addTop, nameTop, nameLeft = 51.51 }: { inset: string; thumb: string; name: string; addTop: number; nameTop: number; nameLeft?: number }) {
  return (
    <div className={`absolute ${inset}`}>
      <div className="absolute h-[38.594px] left-0 rounded-[10px] top-0 w-[37.675px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={thumb} />
      </div>
      <div className="absolute h-[17.459px] left-[295.53px] w-[18.378px]" style={{ top: addTop }}>
        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.AddIcon1} />
      </div>
      <p className="[word-break:break-word] absolute pr-palanquin-dark leading-[normal] not-italic text-[14.7px] text-black whitespace-nowrap" style={{ left: nameLeft, top: nameTop }}>
        {name}
      </p>
    </div>
  );
}

/** Pinned pop-up with the board list. */
function PinnedPopUp1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9.189px] h-[294.047px] items-start left-[63.88px] top-[112.24px] w-[393.288px]">
      <div className={`absolute bg-[#ebedf0] inset-0 ${POPUP_RADIUS}`} />
      <p className="[word-break:break-word] absolute pr-palanquin-dark inset-[22.81%_78.24%_65.96%_7.01%] leading-[normal] not-italic text-[18.38px] text-black whitespace-nowrap">Boards</p>
      <button className="absolute cursor-pointer inset-[25.62%_4.74%_66.55%_70.56%]">
        <p className="[word-break:break-word] absolute pr-palanquin-dark leading-[normal] left-[19.42px] not-italic text-[#2a7fff] text-[12.86px] top-0 whitespace-nowrap">Create Board</p>
        <div className="absolute left-0 size-[17.459px] top-[2.53px]">
          <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.EditAddPlusCircle1} />
        </div>
      </button>
      <BoardRow inset="inset-[36.56%_6.54%_50.31%_7.01%]" thumb={i.Rectangle20} name="Nature" addTop={8.44} nameTop={5.07} />
      <BoardRow inset="inset-[52.19%_6.54%_34.69%_7.01%]" thumb={i.Rectangle21} name="My Style" addTop={13.51} nameTop={7.6} />
      <BoardRow inset="inset-[68.75%_6.54%_18.13%_7.01%]" thumb={i.Rectangle22} name="Cars" addTop={12.67} nameTop={5.07} nameLeft={50.66} />
      <BoardRow inset="inset-[84.69%_6.54%_2.19%_7.01%]" thumb={i.Rectangle23} name="Home Decor" addTop={13.51} nameTop={4.22} />
      {/* Heading */}
      <div className={`absolute bg-[#d9d9d9] h-[64.323px] left-0 top-0 w-[393.288px] ${POPUP_RADIUS}`} />
      <div className="absolute h-0 left-[168.03px] top-[8.44px] w-[26.648px]">
        <div className="absolute inset-[-1.84px_-6.9%]">
          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={i.Line7} />
        </div>
      </div>
      <div className="absolute h-[38.594px] left-[25.33px] rounded-[10px] top-[16.89px] w-[37.675px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={i.Rectangle24} />
      </div>
      <p className="[word-break:break-word] absolute pr-palanquin-dark leading-[normal] left-[75.15px] not-italic text-[18.38px] text-black top-[19.42px] whitespace-nowrap">Pinned</p>
      <div className="absolute h-[9.189px] left-[28.71px] top-[21.11px] w-[5.695px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={i.SelfieImage3} />
      </div>
      <div className="absolute left-[323.39px] size-[22.054px] top-[24.49px]">
        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.Pin4} />
      </div>
    </div>
  );
}

function Toggle({ left, top, size, src }: { left: number; top: number; size: number; src: string }) {
  return (
    <div className="absolute" style={{ left, top }}>
      <ToggleOff size={size} knob={src} />
    </div>
  );
}

/** "New Board" pop-up, empty state. */
function PinnedPopUp2() {
  return (
    <div className="absolute h-[294.047px] left-[63.88px] top-[427.9px] w-[393.288px]">
      <div className={`absolute bg-[#ebedf0] inset-0 ${POPUP_RADIUS}`} />
      <p className="[word-break:break-word] absolute pr-palanquin-dark inset-[22.81%_80.28%_65.96%_7.01%] leading-[normal] not-italic text-[18.378px] text-black whitespace-nowrap">Name</p>
      <button className="[word-break:break-word] absolute block cursor-pointer pr-palanquin leading-[0] left-[27.57px] not-italic text-[#858585] text-[12.865px] text-left top-[102px] whitespace-nowrap">
        <p className="leading-[normal]">Add board name...</p>
      </button>
      <div className="absolute h-0 left-[27.57px] top-[124.68px] w-[345.505px]">
        <div className="absolute inset-[-0.92px_-0.27%]">
          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={i.Line5} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute pr-palanquin-dark inset-[49.37%_65.28%_42.8%_7.01%] leading-[normal] not-italic text-[12.865px] text-black whitespace-nowrap">Make collaborative</p>
      <Toggle left={346.42} top={145.18} size={22.054} src={i.Slider2} />
      <p className="[word-break:break-word] absolute pr-palanquin-dark inset-[57.19%_75.45%_34.99%_7.01%] leading-[normal] not-italic text-[12.865px] text-black whitespace-nowrap">Make Public</p>
      <Toggle left={346.42} top={167.24} size={22.054} src={i.Slider2} />
      <div className="absolute bg-[#d9d9d9] h-[37.335px] left-[22.05px] rounded-[9.189px] top-[207.67px] w-[345.505px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute pr-pacifico h-[35.062px] leading-[normal] left-[190.86px] not-italic text-[22.054px] text-center text-white top-[208.59px] tracking-[-1.0744px] w-[243.886px]">SAVE</p>
      <div className={`absolute bg-[#d9d9d9] inset-[0_0_78.12%_0] ${POPUP_RADIUS}`} />
      <div className="absolute inset-[3.12%_46.73%_96.88%_46.5%]">
        <div className="absolute inset-[-1.84px_-6.9%]">
          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={i.Line6} />
        </div>
      </div>
      <div className="absolute inset-[9.06%_4.91%_83.44%_89.49%]">
        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.Pin3} />
      </div>
      <p className="[word-break:break-word] absolute pr-palanquin-dark leading-[normal] left-[141.51px] not-italic text-[22.054px] text-black top-[17.46px] whitespace-nowrap">New Board</p>
      <div className="absolute inset-[12.19%_88.32%_84.69%_7.48%]">
        <div className="absolute inset-[-10%_-5.56%]">
          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={i.BackArrow1} />
        </div>
      </div>
    </div>
  );
}

const KEY_SHADOW = "shadow-[0px_0.976px_0px_0px_rgba(0,0,0,0.35)]";

function Key({ ch }: { ch: string }) {
  return (
    <div className="flex-[1_0_0] h-[40.994px] min-w-px relative rounded-[4.49px]">
      <div className={`absolute bg-white inset-0 rounded-[4.6px] ${KEY_SHADOW}`} />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col pr-sf font-normal justify-center leading-[0] left-1/2 not-italic text-[23.82px] text-black text-center top-[calc(50%-2.93px)] whitespace-nowrap">
        <p className="leading-[26.675px]">{ch}</p>
      </div>
    </div>
  );
}

function ModKey({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div className={`absolute h-[40.994px] rounded-[4.49px] ${className}`}>
      <div className={`absolute bg-[#8f8f8f] inset-0 mix-blend-color-burn rounded-[4.6px] ${KEY_SHADOW}`} />
      {children}
    </div>
  );
}

// SF Symbols ("shift", "delete.left") aren't exportable from Figma, so these
// are drawn to match the system glyphs.
function ShiftGlyph() {
  return (
    <svg className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.49px)] top-1/2" width="19.521" height="19.521" viewBox="0 0 20 20" fill="none" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
      <path d="M10 2.5 2.5 10.5h4.4v6.5h6.2v-6.5h4.4L10 2.5Z" />
    </svg>
  );
}
function DeleteGlyph() {
  return (
    <svg className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2" width="19.521" height="19.521" viewBox="0 0 20 20" fill="none" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden>
      <path d="M7.4 4.5h9.1a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H7.4L1.8 10l5.6-5.5Z" />
      <path d="m9.6 7.6 5 4.8m0-4.8-5 4.8" />
    </svg>
  );
}

function Suggestion({ children }: { children: ReactNode }) {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[4.6px]">
      <div className="[word-break:break-word] absolute flex flex-col pr-sf font-normal inset-0 justify-center leading-[0] overflow-hidden text-[16.2px] text-black text-center text-ellipsis tracking-[-0.4197px] whitespace-nowrap">
        <p className="leading-[20.959px] overflow-hidden text-ellipsis">{children}</p>
      </div>
    </div>
  );
}

function Keyboard() {
  const row1 = "qwertyuiop".split("");
  const row2 = "asdfghjkl".split("");
  const row3 = "zxcvbnm".split("");
  const sf = "[word-break:break-word] absolute flex flex-col pr-sf font-normal h-[40.994px] justify-center leading-[0] left-0 right-0 text-[15.24px] text-black text-center top-1/2 -translate-y-1/2";
  return (
    <div className="absolute content-stretch flex flex-col inset-[44.24%_0.22%_0.04%_0.01%] items-center justify-end pt-[2.928px]">
      <div className="-translate-y-1/2 absolute h-[327.955px] left-0 right-0 top-1/2">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(85,85,85,0.9)] inset-0 mix-blend-luminosity" />
          <div className="absolute bg-[rgba(86,88,92,0.87)] inset-0" />
          <div className="absolute backdrop-blur-[73.204px] bg-[#939393] inset-0 mix-blend-color-dodge" />
        </div>
      </div>
      <div className="content-stretch flex items-start overflow-clip py-[1.952px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] gap-[1.952px] h-[38.066px] items-center min-w-px px-[0.976px] relative">
          <div className="bg-[#ebedf0] flex-[1_0_0] h-full min-w-px relative rounded-[4.6px]">
            <div className="[word-break:break-word] absolute flex flex-col pr-sf font-normal inset-0 justify-center leading-[0] overflow-hidden text-[16.2px] text-black text-center text-ellipsis tracking-[-0.4197px] whitespace-nowrap">
              <p className="leading-[20.959px] overflow-hidden text-ellipsis">“The”</p>
            </div>
          </div>
          <div className="content-stretch flex h-[24.401px] items-center justify-center px-[1.952px] relative shrink-0">
            <div className="bg-black h-full opacity-0 relative shrink-0 w-[0.976px]" />
          </div>
          <Suggestion>the</Suggestion>
          <div className="content-stretch flex h-[24.401px] items-center justify-center px-[1.952px] relative shrink-0">
            <div className="bg-black h-full opacity-10 relative shrink-0 w-[0.976px]" />
          </div>
          <Suggestion>to</Suggestion>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <div className="h-[4.88px] opacity-60 relative w-full" />
        </div>
      </div>
      <div className="h-[199.116px] relative shrink-0 w-full">
        <div className="absolute bottom-0 h-[40.994px] left-[25.7%] right-[25.7%]">
          <div className="absolute h-[40.994px] left-0 right-0 rounded-[4.49px] top-0">
            <div className={`absolute bg-white inset-0 rounded-[4.6px] ${KEY_SHADOW}`} />
            <div className={sf}><p className="leading-[20.006px]">space</p></div>
          </div>
        </div>
        <ModKey className="bottom-0 left-[75.83%] right-[0.76%]"><div className={sf}><p className="leading-[20.006px]">return</p></div></ModKey>
        <ModKey className="bottom-0 left-[0.76%] right-[75.83%]"><div className={sf}><p className="leading-[20.006px]">ABC</p></div></ModKey>
        <div className="absolute bottom-[52.71px] content-stretch flex gap-[5.856px] items-start left-[15.78%] right-[15.78%]">
          {row3.map((c) => <Key key={c} ch={c} />)}
        </div>
        <ModKey className="bottom-[52.71px] left-[88.04%] right-[0.76%]"><DeleteGlyph /></ModKey>
        <ModKey className="bottom-[52.71px] left-[0.76%] right-[88.04%]"><ShiftGlyph /></ModKey>
        <div className="absolute bottom-[105.41px] content-stretch flex gap-[5.856px] items-start left-[5.85%] right-[5.85%]">
          {row2.map((c) => <Key key={c} ch={c} />)}
        </div>
        <div className="absolute bottom-[158.12px] content-stretch flex gap-[5.856px] items-start left-[0.76%] right-[0.76%]">
          {row1.map((c) => <Key key={c} ch={c} />)}
        </div>
      </div>
      <div className="content-stretch flex h-[53.683px] items-start justify-between pl-[19.521px] pr-[23.425px] pt-[26.354px] relative shrink-0 w-full">
        <div className="relative shrink-0 size-[26.275px]">
          <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.Emoji} />
        </div>
        <div className="h-[27.537px] relative shrink-0 w-[18.414px]">
          <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.Mic} />
        </div>
      </div>
      <div className="h-[25.377px] relative shrink-0 w-[392.375px]">
        <div className="-translate-x-1/2 absolute bottom-[7.81px] flex h-[4.88px] items-center justify-center left-1/2 w-[140.552px]">
          <div className="bg-black h-[4.88px] relative rounded-[100px] w-[140.552px]" />
        </div>
      </div>
    </div>
  );
}

/** "New Board" pop-up with the keyboard up. */
function PinnedPopUp3() {
  return (
    <div className="absolute h-[588.563px] left-[548.41px] top-[133.23px] w-[393.292px]">
      <div className="absolute inset-[0_0.23%_50.16%_0]">
        <div className={`absolute bg-[#ebedf0] inset-0 ${POPUP_RADIUS}`} />
        <p className="[word-break:break-word] absolute pr-palanquin-dark inset-[49.38%_65.21%_42.78%_7.01%] leading-[normal] not-italic text-[12.835px] text-black whitespace-nowrap">Make collaborative</p>
        <Toggle left={345.62} top={144.85} size={22.002} src={i.Slider1} />
        <p className="[word-break:break-word] absolute pr-palanquin-dark inset-[57.19%_75.41%_34.97%_7.01%] leading-[normal] not-italic text-[12.835px] text-black whitespace-nowrap">Make Public</p>
        <Toggle left={345.62} top={166.85} size={22.002} src={i.Slider1} />
        <div className="absolute bg-[rgba(230,0,35,0.41)] h-[37.249px] left-[22px] rounded-[9.168px] top-[207.19px] w-[344.703px]" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute pr-pacifico h-[34.981px] leading-[normal] left-[190.42px] not-italic text-[22.002px] text-center text-white top-[208.11px] tracking-[-1.0719px] w-[243.32px]">SAVE</p>
        <div className="absolute h-0 left-[27.5px] top-[124.39px] w-[344.704px]">
          <div className="absolute inset-[-0.92px_-0.27%]">
            <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={i.Line3} />
          </div>
        </div>
        <p className="[word-break:break-word] absolute pr-palanquin-dark inset-[22.81%_80.25%_65.94%_7.01%] leading-[normal] not-italic text-[18.335px] text-black whitespace-nowrap">Name</p>
        <div className={`absolute bg-[#d9d9d9] inset-[0_0_78.13%_0] ${POPUP_RADIUS}`} />
        <div className="absolute inset-[3.13%_46.73%_96.87%_46.5%]">
          <div className="absolute inset-[-1.83px_-6.9%]">
            <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={i.Line4} />
          </div>
        </div>
        <div className="absolute inset-[9.06%_4.91%_83.44%_89.49%]">
          <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.Pin2} />
        </div>
        <p className="[word-break:break-word] absolute pr-palanquin-dark leading-[normal] left-[141.18px] not-italic text-[22.002px] text-black top-[17.42px] whitespace-nowrap">New Board</p>
        <div className="absolute h-[22.919px] left-[27.5px] overflow-clip top-[101.76px] w-[8.251px]">
          <p className="-translate-x-1/2 [word-break:break-word] absolute pr-palanquin-dark leading-[normal] left-[17.42px] not-italic text-[12.83px] text-black text-center top-0 whitespace-nowrap">Shoes</p>
          <div className="absolute bg-[#4449e0] h-[10.084px] right-0 rounded-[10px] top-[6.42px] w-[0.917px]" />
        </div>
        <div className="absolute inset-[12.19%_88.32%_84.69%_7.48%]">
          <div className="absolute inset-[-10%_-5.56%]">
            <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={i.BackArrow} />
          </div>
        </div>
      </div>
      <Keyboard />
    </div>
  );
}

function FilterOverlay() {
  const options: { label: string; top: string }[] = [
    { label: "Nature", top: "10.36%" },
    { label: "OOTD", top: "16.17%" },
    { label: "Food", top: "21.98%" },
    { label: "Song Choice", top: "27.8%" },
    { label: "Vibes", top: "33.61%" },
  ];
  return (
    <div className="absolute drop-shadow-[0px_4.307px_2.153px_rgba(0,0,0,0.59)] h-[637.37px] left-[1032.95px] top-[84.86px] w-[180.522px]">
      <div className="absolute bg-white inset-0 rounded-bl-[19.794px] rounded-tl-[19.794px]" />
      {options.map((o) => (
        <button
          key={o.label}
          className="absolute bg-[#d9d9d9] content-stretch cursor-pointer flex gap-[6.057px] items-center left-[21.38px] min-w-[121.1344223022461px] px-[7.571px] rounded-[3.43px] w-[136.975px]"
          style={{ top: o.top, height: "5.23%" }}
        >
          <div className="relative shrink-0 size-[18.17px]">
            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={i.Checkbox1} />
          </div>
          <p className="[word-break:break-word] pr-palanquin-dark leading-[normal] not-italic relative shrink-0 text-[#858585] text-[15.14px] text-left whitespace-nowrap">{o.label}</p>
        </button>
      ))}
      <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold inset-[1.37%_33.87%_91.73%_11.84%] leading-[normal] not-italic text-[24.128px] text-black text-center whitespace-nowrap">Filter by:</p>
      <div className="absolute bg-[rgba(230,0,35,0.41)] h-[24.545px] left-[50.67px] rounded-[15.835px] top-[260.49px] w-[79.176px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute pr-pacifico h-[24.545px] leading-[normal] left-[89.87px] not-italic text-[12.668px] text-center text-white top-[260.49px] tracking-[-0.9258px] w-[56.215px]">APPLY</p>
    </div>
  );
}

function PostSuccessfulBar() {
  return (
    <div className="absolute h-[36.5px] left-[548.41px] top-[84.86px] w-[385.63px]">
      <div className="absolute bg-[#8eff88] inset-0 rounded-[13.043px] shadow-[0px_6.348px_6.348px_0px_rgba(0,0,0,0.25)]" />
      <div className="absolute inset-[8.7%_86.83%_8.7%_5.35%]">
        <div className="absolute inset-[0_-6.71%_-16.9%_-8.55%]">
          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={i.CheckIcon} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute pr-palanquin-dark inset-[0_29.08%_6.67%_17.28%] leading-[normal] not-italic text-[19.04px] text-black whitespace-nowrap">PinReal Post Successful!</p>
      <div className="absolute bg-[#ebedf0] inset-[17.39%_2.56%_13.04%_80.25%] rounded-[13.04px]" />
      <p className="[word-break:break-word] absolute pr-palanquin-dark inset-[20%_7.5%_16.99%_85.5%] leading-[normal] not-italic text-[12.7px] text-black tracking-[-0.381px] whitespace-nowrap">View</p>
    </div>
  );
}

function UiElementsArtwork() {
  return (
    <div className="relative" style={{ width: 1277.5, height: 764.675 }}>
      <PinnedPopUp1 />
      <PinnedPopUp2 />
      <PinnedPopUp3 />
      <FilterOverlay />
      <PostSuccessfulBar />
    </div>
  );
}

export function IconsComponents() {
  return (
    <Section>
      <StageHeader num="05" title="ICONS & COMPONENTS" />
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <CardHeader>ICONS & COMPONENTS</CardHeader>
          <div className="w-full">
            <ScaledCanvas w={1168} h={584}>
              <div className="absolute" style={{ left: -54.75, top: -146, width: 1277.5, height: 740.037 }}>
                <ComponentLibraryArtwork />
              </div>
            </ScaledCanvas>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <CardHeader>UI ELEMENTS</CardHeader>
          <div className="w-full">
            <ScaledCanvas w={1168} h={652}>
              <div className="absolute" style={{ left: -54.75, top: -77.56, width: 1277.5, height: 764.675 }}>
                <UiElementsArtwork />
              </div>
            </ScaledCanvas>
          </div>
        </div>
      </div>
    </Section>
  );
}
