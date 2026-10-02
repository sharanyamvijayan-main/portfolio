/* eslint-disable @next/next/no-img-element */
// 02 Form generation — ported from Figma node 272:1849. Three sketches, each rotated -90°.
import { Contained, ScaledCanvas, Section } from "./shared";
import { sketches } from "./assets";

export function FormGeneration() {
  return (
    <Section num="02" title="FORM GENERATION">
      <Contained>
        <ScaledCanvas w={1168} h={512}>
          <div className="absolute flex h-[512.349px] items-center justify-center left-0 top-0 w-[854px]">
            <div className="-rotate-90 flex-none">
              <div className="h-[854px] relative w-[512.349px]">
                <img loading="lazy" decoding="async" alt="Early form sketches of the Arco chair" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={sketches.Sketch7176} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[217.054px] items-center justify-center left-[870px] top-0 w-[298px]">
            <div className="-rotate-90 flex-none">
              <div className="h-[298px] relative w-[217.054px]">
                <img loading="lazy" decoding="async" alt="Arco chair sketch" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={sketches.Sketch7177} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[279.079px] items-center justify-center left-[870px] top-[233.05px] w-[298px]">
            <div className="-rotate-90 flex-none">
              <div className="h-[298px] relative w-[279.079px]">
                <img loading="lazy" decoding="async" alt="Arco chair sketch" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={sketches.Sketch7178} />
              </div>
            </div>
          </div>
        </ScaledCanvas>
      </Contained>
    </Section>
  );
}
