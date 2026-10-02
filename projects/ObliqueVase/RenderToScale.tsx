/* eslint-disable @next/next/no-img-element */
// 02 Render to Scale — ported from Figma node 274:2000. The vase staged in a living room.
import { ScaledCanvas, Section } from "./shared";
import { scale } from "./assets";

export function RenderToScale() {
  return (
    <Section num="02" title="RENDER TO SCALE">
      <ScaledCanvas w={1440} h={810} maxW={1920} style={{ backgroundColor: "#fff" }}>
        <div className="absolute bg-white h-[810px] left-0 overflow-clip top-0 w-[1440px]">
          <div className="absolute h-[958.711px] left-0 top-[-94.5px] w-[1440px]">
            <img loading="lazy" decoding="async" alt="Oblique Vase rendered to scale in a living room" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={scale.Render5Scale} />
          </div>
        </div>
      </ScaledCanvas>
    </Section>
  );
}
