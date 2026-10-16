// Oblique Vase case study — rebuilt from the Figma design "09 — Oblique Vase (v2 — staged)"
// (file rmjja9mH5BWUPyEuf4pHR1, node 274:1954). One component per section of the design.
import { ovFonts } from "./fonts";
import { Cover } from "./Cover";
import { TitleBlock } from "./TitleBlock";
import { Renders } from "./Renders";
import { RenderToScale } from "./RenderToScale";
import { SpecsMaterials } from "./SpecsMaterials";
import { Closing } from "./Closing";
import { BLUE, Contained } from "./shared";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { SectionRail } from "@/components/case-study/SectionRail";
import ScrollMotion from "@/components/case-study/ScrollMotion";

// Side table of contents; each id is an anchor wrapper below.
const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "renders", label: "Renders" },
  { id: "render-to-scale", label: "Render to Scale" },
  { id: "specs-materials", label: "Specs & Materials" },
];
const ANCHOR = "scroll-mt-24";

export default function ObliqueVase() {
  return (
    <main className={`${ovFonts} min-h-screen bg-white`}>
      <Cover />

      <SectionRail sections={SECTIONS} accent={BLUE} contentId="oblique-vase-content" fontClass="ov-roboto" />

      <ScrollMotion accent={BLUE} />

      {/* Closing sits outside #oblique-vase-content so the rail fades before the blue closing slab. */}
      <div id="oblique-vase-content" className="mt-[74px] mb-[60px] flex flex-col gap-[74px]">
        <Contained>
          <div id="overview" className={ANCHOR}>
            <TitleBlock />
          </div>
        </Contained>
        <div className="flex flex-col gap-[60px]">
          <div id="renders" className={ANCHOR}><Renders /></div>
          <div id="render-to-scale" className={ANCHOR}><RenderToScale /></div>
          <div id="specs-materials" className={ANCHOR}><SpecsMaterials /></div>
        </div>
      </div>
      <Closing />

      <MoreProjects currentSlug="oblique-vase" index={9} />
    </main>
  );
}
