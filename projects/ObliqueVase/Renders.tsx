/* eslint-disable @next/next/no-img-element */
// 01 Renders — ported from Figma node 274:1984. Two full-bleed render panels, 16px apart.
import { ScaledCanvas, Section } from "./shared";
import { renders } from "./assets";

export function Renders() {
  return (
    <Section num="01" title="RENDERS">
      <div className="flex flex-col gap-[16px] w-full">
        <ScaledCanvas w={1440} h={675} maxW={1920} style={{ backgroundColor: "#fff" }}>
          <div className="absolute bg-white h-[810px] left-0 overflow-clip top-[-67.5px] w-[1440px]">
            <div className="absolute h-[1267.299px] left-[-402px] top-[-308.25px] w-[2259px]">
              <img loading="lazy" decoding="async" alt="Oblique Vase render, close view" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={renders.Render1} />
            </div>
          </div>
        </ScaledCanvas>

        <ScaledCanvas w={1440} h={810} maxW={1920} style={{ backgroundColor: "#fff" }}>
          <div className="absolute bg-white h-[810px] left-0 overflow-clip top-0 w-[1440px]">
            <div className="absolute h-[861.313px] left-[-34.5px] top-0 w-[1535.221px]">
              <img loading="lazy" decoding="async" alt="Oblique Vase render, base detail" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={renders.Render2} />
            </div>
            <div className="absolute h-[872.425px] left-[947.25px] top-[-62.25px] w-[493.003px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img loading="lazy" decoding="async" alt="Oblique Vase render, rim detail" className="absolute h-[242.86%] left-[-308.27%] max-w-none top-[-29.53%] w-[766.07%]" src={renders.Render3} />
              </div>
            </div>
          </div>
        </ScaledCanvas>
      </div>
    </Section>
  );
}
