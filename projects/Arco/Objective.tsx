/* eslint-disable @next/next/no-img-element */
// Objective — ported from Figma node 272:1823. Four render crops under a dark scrim.
import { ScaledCanvas } from "./shared";
import { objective } from "./assets";

export function Objective() {
  return (
    <ScaledCanvas w={1440} h={600} maxW={1920} style={{ backgroundColor: "#3a3633" }}>
      <div className="absolute bg-[#d2c4b7] h-[810px] left-0 overflow-clip top-[-90px] w-[1440px]">
        <div className="absolute h-[463.125px] left-[699px] top-[-26.25px] w-[741px]">
          <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={objective.ChairRender56} />
        </div>
        <div className="absolute h-[437.202px] left-0 top-[372.8px] w-[699.523px]">
          <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={objective.Render11SideView} />
        </div>
        <div className="absolute h-[437.344px] left-[-0.75px] top-0 w-[699.75px]">
          <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={objective.Render12TopView} />
        </div>
        <div className="absolute h-[462.75px] left-[699px] top-[429.75px] w-[741px]">
          <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={objective.Render10DetailShot} />
        </div>
        <div className="absolute bg-[rgba(30,30,30,0.72)] h-[810px] left-0 top-0 w-[1440px]" />
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[22px] items-center left-[270px] overflow-clip top-[192px]">
        <p className="ar-roboto font-medium leading-[normal] relative shrink-0 text-[#d2c4b7] text-[12px] tracking-[2.4px] whitespace-nowrap">OBJECTIVE</p>
        <p className="ar-newsreader font-normal italic leading-[1.32] relative shrink-0 text-[34px] text-center text-white w-[900px]">
          balanced a geometric form with soft, flowing details to create a chair that feels both structured and welcoming. for comfort, Arco has a curved backrest, domed seat, and softened edges in all high-contact areas to better fit the body
        </p>
      </div>
    </ScaledCanvas>
  );
}
