// PinReal. case study — rebuilt from the Figma design "07 — PinReal. (v2 — staged)"
// (file BwyLHhwhoIoccLLNc3DNYR, node 3:1027). One component per section of the design.
import { prFonts } from "./fonts";
import { Cover } from "./Cover";
import { TitleBlock } from "./TitleBlock";
import { Intro } from "./Intro";
import { Personas } from "./Personas";
import { UserFlow } from "./UserFlow";
import { BrandTone } from "./BrandTone";
import { DesignSystem } from "./DesignSystem";
import { IconsComponents } from "./IconsComponents";
import { UiScreens } from "./UiScreens";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { SectionRail } from "@/components/case-study/SectionRail";
import ScrollMotion from "@/components/case-study/ScrollMotion";

// Side table of contents; each id is an anchor wrapper below.
const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "personas", label: "Personas" },
  { id: "user-flow", label: "User Flow" },
  { id: "brand-tone", label: "Brand & Tone" },
  { id: "design-system", label: "Design System" },
  { id: "icons-components", label: "Components" },
  { id: "ui-screens", label: "UI Screens" },
];
const ANCHOR = "scroll-mt-24";

export default function PinReal() {
  return (
    <main className={`${prFonts} min-h-screen bg-white`}>
      <Cover />

      <SectionRail sections={SECTIONS} accent="#e60023" contentId="pinreal-content" fontClass="pr-roboto" />

      <ScrollMotion accent="#e60023" />

      <div id="pinreal-content" className="px-[clamp(16px,2.8vw,32px)] pt-[74px] pb-[120px]">
        <div className="mx-auto w-full max-w-[1168px]">
          <div id="overview" className={ANCHOR}>
            <TitleBlock />
            <div className="mt-[74px]">
              <Intro />
            </div>
          </div>

          <div className="mt-[60px] flex flex-col gap-[60px]">
            <div id="personas" className={ANCHOR}><Personas /></div>
            <div id="user-flow" className={ANCHOR}><UserFlow /></div>
            <div id="brand-tone" className={ANCHOR}><BrandTone /></div>
            <div id="design-system" className={ANCHOR}><DesignSystem /></div>
            <div id="icons-components" className={ANCHOR}><IconsComponents /></div>
            <div id="ui-screens" className={ANCHOR}><UiScreens /></div>
          </div>
        </div>
      </div>

      <MoreProjects currentSlug="pinreal" index={7} />
    </main>
  );
}
