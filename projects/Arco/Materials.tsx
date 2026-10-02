/* eslint-disable @next/next/no-img-element */
// 07 Materials — ported from Figma node 272:1912. Spec sheet beside a render; stacks below xl.
import { Contained, ScaledCanvas, Section } from "./shared";
import { materials, objective } from "./assets";

const label = "[word-break:break-word] ar-roboto font-medium leading-[normal] relative shrink-0 text-[#8a4b30] text-[10px] tracking-[1.6px]";

function Swatch({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0">
      <div className="overflow-clip relative rounded-[8px] shrink-0 size-[176px]">{children}</div>
      <p className="[word-break:break-word] ar-newsreader font-normal leading-[normal] relative shrink-0 text-[#26262a] text-[17px] whitespace-nowrap">{name}</p>
    </div>
  );
}

export function Materials() {
  return (
    <Section num="07" title="MATERIALS">
      <Contained className="flex flex-col xl:flex-row gap-[48px] items-start">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full xl:w-[552px]">
          <div className="content-stretch flex flex-col items-start overflow-clip pb-[28px] relative shrink-0">
            <p className="[word-break:break-word] ar-newsreader font-normal leading-[normal] relative shrink-0 text-[#26262a] text-[34px] tracking-[-0.4px]">Material Information</p>
          </div>

          <div className="border-[rgba(38,38,42,0.18)] border-solid border-t content-stretch flex gap-[24px] items-start overflow-clip py-[22px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start overflow-clip pt-[3px] relative shrink-0 w-[160px] max-w-[30%]">
              <p className={`${label} whitespace-nowrap`}>MATERIAL</p>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] ar-newsreader font-normal leading-[1.35] min-w-px relative text-[#26262a] text-[20px]">
              solid beech wood back rest and frame, oak wood seat
            </p>
          </div>

          <div className="border-[rgba(38,38,42,0.18)] border-solid border-t content-stretch flex gap-[24px] items-start overflow-clip py-[22px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start overflow-clip pt-[3px] relative shrink-0 w-[160px] max-w-[30%]">
              <p className={`${label} whitespace-nowrap`}>WOOD</p>
            </div>
            <div className="content-stretch flex flex-wrap flex-1 min-w-0 gap-[16px] items-start overflow-clip relative">
              <Swatch name="Beech Wood">
                <div className="absolute left-0 size-[176px] top-0">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img loading="lazy" decoding="async" alt="Beech wood sample" className="absolute h-full left-[-16.81%] max-w-none top-0 w-[133.33%]" src={materials.BeechSwatch} />
                  </div>
                </div>
              </Swatch>
              <Swatch name="Oak Wood">
                <div className="absolute left-0 size-[176px] top-0">
                  <img loading="lazy" decoding="async" alt="Oak wood sample" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={materials.OakSwatch} />
                </div>
              </Swatch>
            </div>
          </div>

          <div className="border-[rgba(38,38,42,0.18)] border-b border-solid border-t content-stretch flex gap-[24px] items-start overflow-clip py-[22px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start overflow-clip pt-[3px] relative shrink-0 w-[160px] max-w-[30%]">
              <p className={`${label} w-full`}>SUSTAINABILITY &amp; PRODUCTION</p>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] ar-roboto font-normal leading-[1.6] min-w-px relative text-[#26262a] text-[15px]">
              chair is crafted for oak and solid beech wood, designed for durability, modular repair, and recyclability, minimizing environmental impact throughout its life cycle
            </p>
          </div>
        </div>

        <ScaledCanvas w={568} h={551} className="rounded-[12px] xl:shrink-0" style={{ backgroundColor: "#d2c4b7" }}>
          <div className="absolute h-[550.823px] left-[-4.18px] top-0 w-[576.368px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img loading="lazy" decoding="async" alt="Arco chair render" className="absolute h-[126.45%] left-[-41.83%] max-w-none top-[-9.57%] w-[193.35%]" src={objective.ChairRender56} />
            </div>
          </div>
        </ScaledCanvas>
      </Contained>
    </Section>
  );
}
