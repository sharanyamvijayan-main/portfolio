/* eslint-disable @next/next/no-img-element */
// 03 Fabrication — ported from Figma node 272:1861.
import { Contained, ScaledCanvas, Section } from "./shared";
import { fabrication } from "./assets";

export function Fabrication() {
  return (
    <Section num="03" title="FABRICATION">
      <Contained className="flex flex-col gap-[40px]">
        <p className="[word-break:break-word] ar-newsreader font-normal leading-[1.2] relative shrink-0 text-[#26262a] text-[clamp(24px,2.9vw,34px)] tracking-[-0.4px] w-full">
          exploring form through laser cutting &amp; creating 1:5 scale basswood model
        </p>
        <ScaledCanvas w={1168} h={505}>
          <div className="absolute h-[504.889px] left-0 top-0 w-[378.667px]">
            <img loading="lazy" decoding="async" alt="Laser cutting the chair profile" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={fabrication.Fab1013} />
          </div>
          <div className="absolute h-[504.889px] left-[394.67px] top-0 w-[378.667px]">
            <img loading="lazy" decoding="async" alt="Laser-cut basswood parts" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={fabrication.Fab6187} />
          </div>
          <div className="absolute h-[504.889px] left-[789.33px] top-0 w-[378.667px]">
            <img loading="lazy" decoding="async" alt="Assembled 1:5 scale basswood model" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={fabrication.Fab6270} />
          </div>
        </ScaledCanvas>
      </Contained>
    </Section>
  );
}
