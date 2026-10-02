// Arco case study — rebuilt from the Figma design "08 — Arco (v2 — staged)"
// (file rmjja9mH5BWUPyEuf4pHR1, node 272:1796). One component per section of the design.
import { arFonts } from "./fonts";
import { Cover } from "./Cover";
import { TitleBlock } from "./TitleBlock";
import { Objective } from "./Objective";
import { Moodboard } from "./Moodboard";
import { FormGeneration } from "./FormGeneration";
import { Fabrication } from "./Fabrication";
import { Renders } from "./Renders";
import { PhysicalPrototype } from "./PhysicalPrototype";
import { Specifications } from "./Specifications";
import { Materials } from "./Materials";
import { Closing } from "./Closing";
import { Contained } from "./shared";
import { MoreProjects } from "@/components/case-study/MoreProjects";

export default function Arco() {
  return (
    <main className={`${arFonts} min-h-screen bg-white`}>
      <Cover />

      <div className="mt-[74px]">
        <Contained>
          <TitleBlock />
        </Contained>
      </div>

      <div className="mt-[74px] flex flex-col gap-[60px]">
        <Objective />
        <Moodboard />
        <FormGeneration />
        <Fabrication />
        <Renders />
        <PhysicalPrototype />
        <Specifications />
        <Materials />
        <Closing />
      </div>

      <MoreProjects currentSlug="arco" index={8} />
    </main>
  );
}
