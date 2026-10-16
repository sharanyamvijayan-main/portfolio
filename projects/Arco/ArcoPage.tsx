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
import { Contained, RUST } from "./shared";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { SectionRail } from "@/components/case-study/SectionRail";
import ScrollMotion from "@/components/case-study/ScrollMotion";

// Side table of contents; each id is an anchor wrapper below.
const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "moodboard", label: "Moodboard" },
  { id: "form-generation", label: "Form Generation" },
  { id: "fabrication", label: "Fabrication" },
  { id: "renders", label: "Renders" },
  { id: "prototype", label: "Prototype" },
  { id: "specifications", label: "Specifications" },
  { id: "materials", label: "Materials" },
];
const ANCHOR = "scroll-mt-24";

export default function Arco() {
  return (
    <main className={`${arFonts} min-h-screen bg-white`}>
      <Cover />

      <SectionRail sections={SECTIONS} accent={RUST} contentId="arco-content" fontClass="ar-roboto" />

      <ScrollMotion accent={RUST} />

      {/* Closing sits outside #arco-content so the rail fades before the full-bleed hero shot. */}
      <div id="arco-content" className="mt-[74px] mb-[60px] flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[74px]">
          <Contained>
            <div id="overview" className={ANCHOR}>
              <TitleBlock />
            </div>
          </Contained>
          <Objective />
        </div>
        <div id="moodboard" className={ANCHOR}><Moodboard /></div>
        <div id="form-generation" className={ANCHOR}><FormGeneration /></div>
        <div id="fabrication" className={ANCHOR}><Fabrication /></div>
        <div id="renders" className={ANCHOR}><Renders /></div>
        <div id="prototype" className={ANCHOR}><PhysicalPrototype /></div>
        <div id="specifications" className={ANCHOR}><Specifications /></div>
        <div id="materials" className={ANCHOR}><Materials /></div>
      </div>
      <Closing />

      <MoreProjects currentSlug="arco" index={8} />
    </main>
  );
}
