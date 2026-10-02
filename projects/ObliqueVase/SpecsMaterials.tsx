/* eslint-disable @next/next/no-img-element */
// 03 Specifications & Materials — ported from Figma node 274:2011. Drawing beside the spec
// sheet; stacks below xl. The two swatches are the top / bottom halves of one Pantone palette image.
import { Contained, ScaledCanvas, StageHeader } from "./shared";
import { materials, specs } from "./assets";

const label = "[word-break:break-word] ov-roboto font-medium leading-[normal] relative shrink-0 text-[#41508b] text-[10px] tracking-[1.6px]";

function Swatch({ alt, bottom }: { alt: string; bottom?: boolean }) {
  return (
    <div className="border border-[rgba(38,38,42,0.12)] border-solid flex-1 min-w-0 overflow-clip relative rounded-[6px] aspect-[268/133]">
      <img
        loading="lazy"
        decoding="async"
        alt={alt}
        className="absolute h-[201.17%] left-0 max-w-none w-full"
        style={{ top: bottom ? "-100.58%" : 0 }}
        src={materials.PantonePalette}
      />
    </div>
  );
}

export function SpecsMaterials() {
  return (
    <Contained className="flex flex-col gap-[40px]">
      <StageHeader num="03" title="SPECIFICATIONS & MATERIALS" />
      <div className="flex flex-col xl:flex-row gap-[48px] items-start">
            <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full xl:w-[568px]">
              <p className={`${label} whitespace-nowrap`}>SPECIFICATIONS</p>
              <ScaledCanvas w={568} h={534} style={{ backgroundColor: "#fff" }}>
                <div className="absolute h-[533.799px] left-0 top-0 w-[567.796px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img loading="lazy" decoding="async" alt="Oblique Vase technical drawings: front, side and base views" className="absolute h-[124.43%] left-[-15.55%] max-w-none top-[-3.61%] w-[171.94%]" src={specs.Drawing1} />
                  </div>
                </div>
              </ScaledCanvas>
            </div>

            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full xl:w-[552px]">
              <div className="border-[rgba(38,38,42,0.18)] border-solid border-t content-stretch flex gap-[24px] items-start overflow-clip py-[22px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start overflow-clip pt-[3px] relative shrink-0 w-[160px] max-w-[30%]">
                  <p className={`${label} w-full`}>MATERIAL</p>
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] ov-newsreader font-normal leading-[1.35] min-w-px relative text-[#26262a] text-[20px]">
                  borosilicate glass
                </p>
              </div>

              <div className="border-[rgba(38,38,42,0.18)] border-solid border-t content-stretch flex flex-col gap-[18px] items-start overflow-clip py-[22px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start overflow-clip pt-[3px] relative shrink-0 w-[160px] max-w-[30%]">
                    <p className={`${label} w-full`}>COLORS</p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] ov-newsreader font-normal leading-[1.35] min-w-px relative text-[#26262a] text-[20px]">
                    Muuto Dark Blue-inspired, refined with Pantone accents
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <Swatch alt="Pantone 18-4244 TCX, Directoire Blue" />
                  <Swatch alt="Pantone 11-0601 TCX, Bright White" bottom />
                </div>
              </div>

              <div className="border-[rgba(38,38,42,0.18)] border-b border-solid border-t content-stretch flex gap-[24px] items-start overflow-clip py-[22px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start overflow-clip pt-[3px] relative shrink-0 w-[160px] max-w-[30%]">
                  <p className={`${label} w-full`}>PRODUCTION &amp; SCALABILITY</p>
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] ov-roboto font-normal leading-[1.6] min-w-px relative text-[#26262a] text-[15px]">
                  suited for both mouth-blown production (in line with Muuto’s existing glassware) and scalable blow-mold manufacturing
                </p>
              </div>
            </div>
      </div>
    </Contained>
  );
}
