// Shared section-intro pattern for case studies: a small numbered eyebrow,
// a large display heading, and an accent divider pill. Reused across
// projects so every case study reads as one consistent system.
export function SectionHeader({
  index,
  eyebrow,
  title,
  accent = "#FFFFFF",
  align = "left",
}: {
  index: number;
  eyebrow: string;
  title: string;
  accent?: string;
  align?: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <p
        className="font-body text-sm md:text-base mb-3"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        {`(0${index}) ${eyebrow}`}
      </p>
      <h2
        className="font-display font-black leading-[0.95] mb-4"
        style={{
          fontSize: "clamp(32px, 5vw, 72px)",
          color: "#F3F3F3",
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h2>
      <div
        className={`h-1.5 w-12 rounded-full ${align === "right" ? "ml-auto" : ""}`}
        style={{ background: accent }}
      />
    </div>
  );
}
