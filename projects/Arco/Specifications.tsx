/* eslint-disable @next/next/no-img-element */
// 06 Specifications — ported from Figma node 272:1901. Orthographic drawings, cropped as in the design.
import { Contained, ScaledCanvas, Section } from "./shared";
import { specs } from "./assets";

export function Specifications() {
  return (
    <Section num="06" title="SPECIFICATIONS">
      <Contained>
        <ScaledCanvas w={1168} h={620} style={{ backgroundColor: "#fff" }}>
          <div className="absolute h-[778.667px] left-[-144.2px] overflow-clip top-[-79.31px] w-[1384.296px]">
            <div className="absolute h-[953.094px] left-[-172.32px] top-[-105.51px] w-[1556.612px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img loading="lazy" decoding="async" alt="Arco chair technical drawings: plan, front, side and perspective" className="absolute h-[115.94%] left-0 max-w-none top-0 w-full" src={specs.FinalChairDrawing} />
              </div>
            </div>
          </div>
        </ScaledCanvas>
      </Contained>
    </Section>
  );
}
