// Title block — ported from Figma node 272:1804 (Arco v2). Values are the
// design's own; only the headline size and the meta row adapt below 1168px.

function MetaCol({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[240px] max-w-full leading-[normal]">
      <p className="ar-roboto font-medium relative shrink-0 text-[#8a4b30] text-[10px] tracking-[1.5px] whitespace-nowrap">{label}</p>
      <p className="ar-roboto font-normal relative shrink-0 text-[#636363] text-[13px] w-full whitespace-pre-wrap">{children}</p>
    </div>
  );
}

export function TitleBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative w-full">
      <p className="[word-break:break-word] ar-roboto font-medium leading-[normal] relative shrink-0 text-[#8a4b30] text-[12px] tracking-[2px] whitespace-pre-wrap">
        CASE STUDY 08  ·  INDUSTRIAL DESIGN
      </p>

      <h2 className="[word-break:break-word] ar-newsreader font-normal leading-[0] min-w-full relative shrink-0 text-[#26262a] text-[clamp(32px,5.3vw,62px)] tracking-[-0.8px] w-[min-content]">
        <span className="leading-[1.12]">Continuous arc that </span>
        <span className="leading-[1.12] text-[#8a4b30]">supports, welcomes, and lasts</span>
      </h2>

      <div className="[word-break:break-word] ar-roboto font-normal leading-[0] relative shrink-0 text-[#7a7a75] text-[15px] w-full">
        <p className="mb-[12px] leading-[1.74]">
          <span className="font-medium text-[#26262a]">Arco</span>
          {` is a gesture of openness that expresses a quiet, sculptural identity through its continuous arc that supports, welcomes, and endures. Its flowing armrests soften the square seat, creating a balanced silhouette that feels open and welcoming.`}
        </p>
        <p className="leading-[1.74]">
          It reflects a future where thoughtful geometry, sustainable materials, and efficient manufacturing come together to create products that are both responsible and timeless.
        </p>
      </div>

      <div className="bg-[rgba(38,38,42,0.14)] h-px relative shrink-0 w-full" />

      <div className="content-stretch flex flex-wrap gap-x-[69px] gap-y-[24px] items-start overflow-clip relative shrink-0">
        <MetaCol label="PROJECT">Industrial Design</MetaCol>
        <MetaCol label="CREATOR">Sharanya Vijayan</MetaCol>
        <MetaCol label="MATERIALS">Beech Wood  ·  Oak Wood</MetaCol>
        <MetaCol label="DATE">November 2025</MetaCol>
      </div>
    </div>
  );
}
