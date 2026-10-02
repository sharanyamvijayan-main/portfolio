// Title block — ported from Figma node 274:1965 (Oblique Vase v2). Values are the
// design's own; only the headline size and the meta row adapt below 1168px.

function MetaCol({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[240px] max-w-full leading-[normal]">
      <p className="ov-roboto font-medium relative shrink-0 text-[#41508b] text-[10px] tracking-[1.5px] whitespace-nowrap">{label}</p>
      <p className="ov-roboto font-normal relative shrink-0 text-[#636363] text-[13px] w-full whitespace-pre-wrap">{children}</p>
    </div>
  );
}

export function TitleBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative w-full">
      <p className="[word-break:break-word] ov-roboto font-medium leading-[normal] relative shrink-0 text-[#41508b] text-[12px] tracking-[2px] whitespace-pre-wrap">
        CASE STUDY 09  ·  INDUSTRIAL DESIGN
      </p>

      <h2 className="[word-break:break-word] ov-newsreader font-normal leading-[0] min-w-full relative shrink-0 text-[#26262a] text-[clamp(32px,5.3vw,62px)] tracking-[-0.8px] w-[min-content]">
        <span className="leading-[1.12]">A quiet </span>
        <span className="leading-[1.12] text-[#41508b]">tilt towards beauty.</span>
      </h2>

      <p className="[word-break:break-word] ov-roboto font-normal leading-[1.74] relative shrink-0 text-[#7a7a75] text-[15px] w-full">
        Oblique vase invites touch through soft asymmetry and layered transparency. Its dual-layered glass form balances clarity and containment, with an inner vessel for floral arrangements and an outer silhouette that gently leans off-center, challenging symmetry without disrupting the calm. Whether used to hold flowers or simply admired as a decorative piece, it is crafted to evoke calm and curiosity, balancing Scandinavian restraint with a softened sensory presence.
      </p>

      <div className="bg-[rgba(38,38,42,0.14)] h-px relative shrink-0 w-full" />

      <div className="content-stretch flex flex-wrap gap-x-[69px] gap-y-[24px] items-start overflow-clip relative shrink-0">
        <MetaCol label="PROJECT">Industrial Design</MetaCol>
        <MetaCol label="CREATOR">Sharanya Vijayan</MetaCol>
        <MetaCol label="MATERIAL">Borosilicate glass</MetaCol>
        <MetaCol label="DATE">September 2025</MetaCol>
      </div>
    </div>
  );
}
