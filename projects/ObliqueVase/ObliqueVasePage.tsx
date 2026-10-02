// Oblique Vase case study — rebuilt from the Figma design "09 — Oblique Vase (v2 — staged)"
// (file rmjja9mH5BWUPyEuf4pHR1, node 274:1954). One component per section of the design.
import { ovFonts } from "./fonts";
import { Cover } from "./Cover";
import { TitleBlock } from "./TitleBlock";
import { Renders } from "./Renders";
import { RenderToScale } from "./RenderToScale";
import { SpecsMaterials } from "./SpecsMaterials";
import { Closing } from "./Closing";
import { Contained } from "./shared";
import { MoreProjects } from "@/components/case-study/MoreProjects";

export default function ObliqueVase() {
  return (
    <main className={`${ovFonts} min-h-screen bg-white`}>
      <Cover />

      <div className="mt-[74px]">
        <Contained>
          <TitleBlock />
        </Contained>
      </div>

      <div className="mt-[74px] flex flex-col gap-[60px]">
        <Renders />
        <RenderToScale />
        <SpecsMaterials />
        <Closing />
      </div>

      <MoreProjects currentSlug="oblique-vase" index={9} />
    </main>
  );
}
