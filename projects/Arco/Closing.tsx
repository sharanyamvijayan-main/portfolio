/* eslint-disable @next/next/no-img-element */
// Closing hero shot — ported from Figma node 272:1947.
import { ScaledCanvas } from "./shared";
import { closing } from "./assets";

export function Closing() {
  return (
    <section style={{ backgroundColor: "#d2c4b7" }}>
      <ScaledCanvas w={1440} h={680} maxW={1920} style={{ backgroundColor: "#d2c4b7" }}>
        <div className="absolute bg-[#d2c4b7] h-[810px] left-0 overflow-clip top-[-75px] w-[1440px]">
          <div className="absolute h-[900.75px] left-[-1.5px] top-[-74.25px] w-[1441.2px]">
            <img loading="lazy" decoding="async" alt="Arco chair hero shot" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={closing.Render8HeroShot} />
          </div>
          <p className="[word-break:break-word] absolute ar-nexa font-extralight leading-[41.25px] left-[101.25px] not-italic text-[30px] text-black top-[489.75px] w-[399.75px]">
            supports, welcomes, lasts
          </p>
          <p className="[word-break:break-word] absolute ar-nexa font-light leading-[normal] left-[101.25px] not-italic text-[130.2px] text-black top-[324px] whitespace-nowrap">Arco</p>
        </div>
      </ScaledCanvas>
    </section>
  );
}
