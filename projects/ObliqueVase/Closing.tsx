// Closing slab — ported from Figma node 274:2075.
import { ScaledCanvas } from "./shared";

export function Closing() {
  return (
    <section style={{ backgroundColor: "#41508b" }}>
      <ScaledCanvas w={1440} h={285} maxW={1920} style={{ backgroundColor: "#41508b" }}>
        <div className="absolute bg-[#41508b] h-[810px] left-0 overflow-clip top-[-177px] w-[1440px]">
          <p className="[word-break:break-word] absolute ov-krona leading-[normal] left-[204.75px] not-italic text-[#b8c6ee] text-[57.095px] top-[259.5px] tracking-[-4.5676px] whitespace-nowrap">
            A quiet tilt towards beauty.
          </p>
          <div className="-translate-y-1/2 absolute bg-[#b8c6ee] h-[10.5px] left-[720px] top-[calc(50%-4.75px)] w-[725.25px]" />
        </div>
      </ScaledCanvas>
    </section>
  );
}
