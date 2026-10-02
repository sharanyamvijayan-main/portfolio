/* eslint-disable @next/next/no-img-element */
// Hero — ported from Figma node 272:1797 (Arco v2).
import Link from "next/link";
import { ScaledCanvas } from "./shared";
import { hero } from "./assets";

export function Cover() {
  return (
    // backgroundColor is also what the site nav samples to pick dark text.
    <section style={{ backgroundColor: "#d2c4b7" }}>
      <ScaledCanvas w={1440} h={680} maxW={1920} style={{ backgroundColor: "#d2c4b7" }}>
        <div className="absolute h-[900px] left-0 top-[-110px] w-[1440px]">
          <img alt="Arco chair render" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={hero.Render9} />
        </div>
        <h1 className="[word-break:break-word] absolute ar-nexa font-light leading-[normal] left-[130px] not-italic text-[130.2px] text-black top-[214px] whitespace-nowrap">Arco</h1>
        <p className="[word-break:break-word] absolute ar-nexa font-extralight leading-[41.25px] left-[136px] not-italic text-[30px] text-black top-[379.75px] w-[399.75px]">
          supports, welcomes, lasts
        </p>
        {/* Sits 56px lower than in the design so it clears the site's fixed nav; hidden on phones, where the nav already links home. */}
        <Link
          href="/#work"
          className="max-md:hidden [word-break:break-word] absolute bg-[rgba(32,18,18,0.08)] content-stretch flex ar-roboto font-medium gap-[9px] items-center leading-[normal] left-[136px] overflow-clip pl-[15px] pr-[18px] py-[9px] rounded-[16px] top-[100px] whitespace-nowrap transition-colors hover:bg-[rgba(32,18,18,0.16)]"
        >
          <span className="relative shrink-0 text-[#201212] text-[11px]">←</span>
          <span className="relative shrink-0 text-[10px] text-[rgba(32,18,18,0.92)] tracking-[1.6px]">ALL WORK</span>
        </Link>
      </ScaledCanvas>
    </section>
  );
}
