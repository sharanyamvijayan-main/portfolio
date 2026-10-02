/* eslint-disable @next/next/no-img-element */
// 01 Moodboard — ported from Figma node 272:1834.
import { Contained, ScaledCanvas, Section } from "./shared";
import { moodboard } from "./assets";

export function Moodboard() {
  return (
    <Section num="01" title="MOODBOARD">
      <Contained>
        <ScaledCanvas w={1168} h={647}>
          <div className="absolute h-[721.235px] left-[-58.1px] overflow-clip top-[-36.73px] w-[1282.196px]">
            <div className="absolute left-[432.74px] size-[349.933px] top-[36.73px]">
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={moodboard.Moodboard1} />
            </div>
            <div className="absolute h-[646.106px] left-[795.36px] top-[37.4px] w-[430.738px]">
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={moodboard.Moodboard2} />
            </div>
            <div className="absolute h-[645.627px] left-[58.1px] top-[36.73px] w-[363.289px]">
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={moodboard.Moodboard3} />
            </div>
            <div className="absolute h-[283.819px] left-[625.07px] top-[398.68px] w-[159.607px]">
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={moodboard.Moodboard4} />
            </div>
            <div className="absolute h-[283.819px] left-[431.41px] top-[398.68px] w-[188.99px]">
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={moodboard.Moodboard5} />
            </div>
          </div>
        </ScaledCanvas>
      </Contained>
    </Section>
  );
}
