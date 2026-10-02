/* eslint-disable @next/next/no-img-element */
// Title block — ported from Figma node 3:1043 (PinReal. v2). Values are the
// design's own; only the headline size and the meta row adapt below 1168px.
import { title } from "./assets";
import { ScaledCanvas } from "./shared";

function MetaCol({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[240px] max-w-full">
      <p className="pr-roboto font-medium leading-[normal] relative shrink-0 text-[#e60023] text-[10px] tracking-[1.5px] w-full">{label}</p>
      {children}
    </div>
  );
}

const metaValue = "pr-roboto font-normal leading-[1.58] relative shrink-0 text-[#636363] text-[13px] w-full";

export function TitleBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative w-full">
      <p className="[word-break:break-word] pr-roboto font-medium leading-[normal] relative shrink-0 text-[#e60023] text-[12px] tracking-[2px] whitespace-pre-wrap">
        CASE STUDY 07  ·  UI/UX DESIGN  ·  APP MASHUP
      </p>

      <div className="content-stretch flex flex-wrap gap-x-[40px] gap-y-[20px] items-center overflow-clip relative shrink-0">
        {/* The logo is the original 165.938 × 90 composition, scaled up as one unit
            (so spacing, tilt and tracking stay exactly as designed). */}
        <div className="relative shrink-0" style={{ width: "clamp(240px, 42vw, 520px)" }}>
          <ScaledCanvas w={165.938} h={90} style={{ maxWidth: "none", overflow: "visible" }}>
            <div className="absolute h-[90px] left-0 top-0 w-[165.938px]">
              <p className="[word-break:break-word] absolute pr-pacifico leading-[normal] left-0 not-italic text-[50.02px] text-black top-0 whitespace-nowrap">Pin</p>
              <div className="absolute flex items-center justify-center left-[28.12px] size-[49.53px] top-[0.03px]">
                <div className="flex-none rotate-[-17.33deg]">
                  <div className="content-stretch flex items-center p-[8.929px] relative">
                    <div className="relative shrink-0 size-[21.688px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={title.PinIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] absolute pr-palanquin leading-[0] left-[70.31px] not-italic text-[50.02px] text-[rgba(230,0,35,0.41)] top-0 tracking-[-2.501px] whitespace-nowrap">
                <span className="leading-[normal]">R</span>
                <span className="leading-[normal] tracking-[-0.48px]">e</span>
                <span className="leading-[normal]">al.</span>
              </p>
            </div>
          </ScaledCanvas>
        </div>
        <p className="[word-break:break-word] pr-newsreader font-normal italic leading-[normal] relative shrink-0 text-[#e60023] text-[clamp(20px,2.4vw,28px)]">
          where authenticity meets creativity
        </p>
      </div>

      <h1 className="[word-break:break-word] pr-newsreader font-normal leading-[0] min-w-full relative shrink-0 text-[#26262a] text-[clamp(32px,5.3vw,62px)] tracking-[-0.8px] w-[min-content]">
        <span className="leading-[1.12]">PinReal. is a concept app uniting the </span>
        <span className="leading-[1.12] text-[#e60023]">spontaneity of BeReal.</span>
        <span className="leading-[1.12]"> with the </span>
        <span className="leading-[1.12] text-[#e60023]">creative exploration of Pinterest.</span>
      </h1>

      <p className="[word-break:break-word] pr-roboto font-normal leading-[1.74] min-w-full relative shrink-0 text-[#7a7a75] text-[15px] w-[min-content]">
        Users share unfiltered moments in response to surprise prompts during a randomized daily posting window. Pin inspiring content to personalized mood boards.
      </p>

      <div className="bg-[rgba(38,38,42,0.14)] h-px relative shrink-0 w-full" />

      <div className="content-stretch flex flex-wrap gap-x-[24px] gap-y-[24px] items-start justify-between overflow-clip relative shrink-0 w-full">
        <MetaCol label="PROJECT">
          <p className={metaValue}>UI Concept &amp; Visual Exploration</p>
        </MetaCol>
        <MetaCol label="CREATOR(S)">
          <p className={metaValue}>Sharanya Vijayan</p>
        </MetaCol>
        <MetaCol label="DATE">
          <p className={metaValue}>Nov - 2024</p>
        </MetaCol>
        <MetaCol label="TOOLS">
          <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0">
            <div className="h-[24px] relative shrink-0 w-[16.58px]">
              <img alt="Figma" className="absolute block inset-0 max-w-none size-full" src={title.FigmaLogo} />
            </div>
            <div className="relative shrink-0 size-[24px]">
              <img alt="Miro" className="absolute block inset-0 max-w-none size-full" src={title.MiroMiroIcon01} />
            </div>
          </div>
        </MetaCol>
      </div>

      <p className="[word-break:break-word] pr-roboto font-normal leading-[1.6] min-w-full relative shrink-0 text-[#7a7a75] text-[11px] w-[min-content]">
        PinReal is a concept app developed as part of a design exercise, blending inspirations from BeReal and Pinterest. All UI, branding, and assets are original and created solely for educational use. They and do not represent or affiliate with the respective companies.
      </p>
    </div>
  );
}
