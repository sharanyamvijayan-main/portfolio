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

export default function PinReal() {
  return (
    <main className={`${prFonts} min-h-screen bg-white`}>
      <Cover />

      <div className="px-[clamp(16px,2.8vw,32px)] pt-[74px] pb-[120px]">
        <div className="mx-auto w-full max-w-[1168px]">
          <TitleBlock />

          <div className="mt-[74px] flex flex-col gap-[60px]">
            <Intro />
            <Personas />
            <UserFlow />
            <BrandTone />
            <DesignSystem />
            <IconsComponents />
            <UiScreens />
          </div>
        </div>
      </div>

      <MoreProjects currentSlug="pinreal" index={7} />
    </main>
  );
}
