/* eslint-disable @next/next/no-img-element */
// Intro — "a fun twist": ported from Figma node 3:1079 (PinReal. v2).
import { ScaledCanvas } from "./shared";
import { intro } from "./assets";

const SHADOW_TILT = "drop-shadow-[13.429px_8.057px_67.145px_rgba(9,20,50,0.15)]";

function TiltedPhone({ className, shadow = SHADOW_TILT, screen, alt }: { className: string; shadow?: string; screen: string; alt: string }) {
  return (
    <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex h-[412.24px] items-center justify-center w-[321.951px] ${className}`}>
      <div className="flex-none rotate-25">
        <div className={`${shadow} h-[369.568px] relative w-[182.901px]`}>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[354.389px] left-[calc(50%-0.04px)] overflow-clip rounded-[12.142px] top-[calc(50%-0.19px)] w-[163.665px]">
            <img loading="lazy" decoding="async" alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12.142px] size-full" src={screen} />
          </div>
          <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={intro.Iphone141} />
        </div>
      </div>
    </div>
  );
}

export function Intro() {
  return (
    <ScaledCanvas w={1168} h={643}>
      <div className="relative size-full">
        <div className="absolute h-[683.707px] left-[-59.73px] top-[-24.81px] w-[1286.546px]">
          <div className="absolute bg-[#e60023] h-[429.142px] left-[655.22px] overflow-clip rounded-[26.49px] top-[239.38px] w-[572.189px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute drop-shadow-[-271.79px_54.358px_135.895px_rgba(9,20,50,0.1)] h-[988.519px] left-[calc(50%+85.47px)] top-[calc(50%+406.64px)] w-[489.222px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[947.917px] left-[calc(50%-0.11px)] overflow-clip rounded-[11.444px] top-[calc(50%-0.51px)] w-[437.77px]">
                <img loading="lazy" decoding="async" alt="PinReal. homepage feed" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.444px] size-full" src={intro.ScreenToUpdate} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={intro.Iphone141} />
            </div>
          </div>
          <div className="absolute bg-[#e60023] h-[239.295px] left-[655.22px] rounded-tl-[26.49px] rounded-tr-[26.49px] top-[24.81px] w-[572.189px]" />
          <p className="[word-break:break-word] absolute pr-newsreader font-normal italic leading-[1.2] left-[699.37px] text-[35.32px] text-shadow-[0px_3.532px_3.532px_rgba(0,0,0,0.25)] text-white top-[74.26px] tracking-[-0.2px] w-[500px]">
            A fun twist to “being real” by sharing creativity and exploring others’ authentic expressions in fashion, travel, lifestyle, and beyond.
          </p>
          <div className="absolute h-[643.713px] left-[59.73px] overflow-clip top-[24.81px] w-[572.189px]">
            <div className="absolute bg-[#d9d9d9] h-[643.713px] left-0 rounded-[26.49px] top-0 w-[572.189px]" />
            <div className="absolute h-[644.596px] left-[-168.65px] overflow-clip top-0 w-[859.461px]">
              <TiltedPhone className="left-[calc(50%+189.06px)] top-[calc(50%+73.38px)]" screen={intro.ScreenToUpdate1} alt="PinReal. unlocked friends feed with a daily prompt" />
              <TiltedPhone className="left-[calc(50%-72.66px)] top-[calc(50%+160.56px)]" screen={intro.ScreenToUpdate2} alt="PinReal. camera with a daily prompt" />
              <TiltedPhone className="left-[calc(50%+90.79px)] top-[calc(50%-189.96px)]" screen={intro.ScreenToUpdate3} alt="PinReal. homepage feed" />
              <TiltedPhone
                className="left-[calc(50%-174.12px)] top-[calc(50%-95.97px)]"
                shadow="drop-shadow-[53.716px_26.858px_67.145px_rgba(9,20,50,0.15)]"
                screen={intro.ScreenToUpdate4}
                alt="PinReal. splash screen"
              />
            </div>
          </div>
        </div>
      </div>
    </ScaledCanvas>
  );
}
