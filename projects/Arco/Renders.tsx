/* eslint-disable @next/next/no-img-element */
// 04 Renders — ported from Figma node 272:1874. Full-bleed four-up of chair renders.
import { ScaledCanvas, Section } from "./shared";
import { renders } from "./assets";

export function Renders() {
  return (
    <Section num="04" title="RENDERS">
      <ScaledCanvas w={1440} h={624} maxW={1920} style={{ backgroundColor: "#fff" }}>
        <div className="absolute h-[810px] left-0 overflow-clip top-[-90.75px] w-[1440px]">
          <div className="absolute h-[623.755px] left-0 top-[91px] w-[512.725px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img loading="lazy" decoding="async" alt="Arco chair render, three-quarter view" className="absolute h-[117.62%] left-[-62.5%] max-w-none top-[-2.6%] w-[228.94%]" src={renders.ChairRender49} />
            </div>
          </div>
          <div className="absolute h-[325.055px] left-[512.72px] top-[389.7px] w-[520.089px]">
            <img loading="lazy" decoding="async" alt="Arco chair render, front view" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={renders.ChairRender48} />
          </div>
          <div className="absolute h-[298.894px] left-[512.72px] top-[91px] w-[519.929px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img loading="lazy" decoding="async" alt="Arco chair render, studio shot" className="absolute h-[118.2%] left-[-8.72%] max-w-none top-[-18.2%] w-[108.72%]" src={renders.Render7} />
            </div>
          </div>
          <div className="absolute h-[623.755px] left-[1032.98px] top-[91px] w-[407.02px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img loading="lazy" decoding="async" alt="Arco chair render, side view" className="absolute h-full left-[-134.48%] max-w-none top-0 w-[245.2%]" src={renders.Render5} />
            </div>
          </div>
        </div>
      </ScaledCanvas>
    </Section>
  );
}
