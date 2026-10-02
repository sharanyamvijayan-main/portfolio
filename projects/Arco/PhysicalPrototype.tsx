/* eslint-disable @next/next/no-img-element */
// 05 Physical prototype — ported from Figma node 272:1888. Full-bleed render with two photos of the built chair.
import { ScaledCanvas, Section } from "./shared";
import { prototype } from "./assets";

export function PhysicalPrototype() {
  return (
    <Section num="05" title="PHYSICAL PROTOTYPE">
      <ScaledCanvas w={1440} h={630} maxW={1920} style={{ backgroundColor: "#c8c8c8" }}>
        <div className="absolute bg-[#c8c8c8] h-[810px] left-0 overflow-clip top-[-90px] w-[1440px]">
          <div className="absolute h-[900px] left-0 top-[-90px] w-[1440px]">
            <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={prototype.Render2} />
          </div>
          <div className="absolute h-[383.507px] left-[612.75px] top-[213px] w-[356.324px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img loading="lazy" decoding="async" alt="Physical Arco prototype, front" className="absolute h-[134.45%] left-[-63.09%] max-w-none top-[-30.94%] w-[192.94%]" src={prototype.Picture1Final} />
            </div>
          </div>
          <div className="absolute h-[380.015px] left-[998.62px] top-[216.58px] w-[355.982px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img loading="lazy" decoding="async" alt="Physical Arco prototype, angle" className="absolute h-[176.09%] left-[-21.73%] max-w-none top-[-42.69%] w-[140.98%]" src={prototype.Picture2Final} />
            </div>
          </div>
        </div>
      </ScaledCanvas>
    </Section>
  );
}
