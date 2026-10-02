/* eslint-disable @next/next/no-img-element */
// Hero — ported from Figma node 274:1955 (Oblique Vase v2).
import Link from "next/link";
import { ScaledCanvas } from "./shared";
import { hero } from "./assets";

export function Cover() {
  return (
    // backgroundColor is also what the site nav samples to pick dark text.
    <section style={{ backgroundColor: "#cdcdcd" }}>
      <ScaledCanvas w={1440} h={680} maxW={1920} style={{ backgroundColor: "#cdcdcd" }}>
        <div className="absolute bg-white h-[810px] left-0 overflow-clip top-[-65.25px] w-[1440px]">
          <div className="absolute h-[902.25px] left-[-208.5px] top-[-81px] w-[1608.289px]">
            <img alt="Oblique Vase render" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={hero.Render4} />
          </div>
          <div
            className="absolute h-[810px] left-[917.25px] top-0 w-[522.75px]"
            style={{ backgroundImage: "linear-gradient(to left, #b8c6ee 0%, rgba(184,198,238,0.02) 95%)" }}
          />
          <h1 className="-translate-x-full [word-break:break-word] absolute ov-krona leading-[normal] left-[1394.01px] not-italic text-[#41508b] text-[127.435px] text-right top-[172.5px] tracking-[-10.1948px] whitespace-nowrap">
            OBLIQUE
            <br />
            VASE
          </h1>
          <p className="[word-break:break-word] absolute ov-jura font-medium leading-[normal] left-[818.25px] text-[#41508b] text-[44.474px] top-[498px] whitespace-nowrap">
            a quiet tilt towards beauty.
          </p>
        </div>
        {/* Sits 56px lower than in the design so it clears the site's fixed nav; hidden on phones, where the nav already links home. */}
        <Link
          href="/#work"
          className="max-md:hidden [word-break:break-word] absolute bg-[rgba(65,80,139,0.1)] content-stretch flex ov-roboto font-medium gap-[9px] items-center leading-[normal] left-[136px] overflow-clip pl-[15px] pr-[18px] py-[9px] rounded-[16px] text-[#41508b] top-[100px] whitespace-nowrap transition-colors hover:bg-[rgba(65,80,139,0.18)]"
        >
          <span className="relative shrink-0 text-[11px]">←</span>
          <span className="relative shrink-0 text-[10px] tracking-[1.6px]">ALL WORK</span>
        </Link>
      </ScaledCanvas>
    </section>
  );
}
