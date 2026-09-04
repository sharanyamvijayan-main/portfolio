import Image from "next/image";

export interface PersonaGroup {
  label: string;
  items: string[];
}

// Reusable research-persona card: photo, name/subtitle, and labeled bullet
// groups (behaviors, motivations, usage habits, etc. — caller decides).
export function PersonaCard({
  name,
  subtitle,
  image,
  accent,
  groups,
}: {
  name: string;
  subtitle: string;
  image: string;
  accent: string;
  groups: PersonaGroup[];
}) {
  return (
    <div
      className="rounded-3xl overflow-hidden flex flex-col h-full"
      style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${accent}40` }}
    >
      <div className="flex items-center gap-4 p-6" style={{ background: `${accent}1F` }}>
        <div className="relative rounded-full overflow-hidden flex-shrink-0" style={{ width: 64, height: 64, border: `2px solid ${accent}` }}>
          <Image src={image} alt={name} fill style={{ objectFit: "cover" }} sizes="64px" />
        </div>
        <div>
          <p className="font-display font-bold text-lg text-white leading-tight">{name}</p>
          <p className="font-body text-sm" style={{ color: accent }}>{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-6 flex-1">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="font-body text-xs tracking-widest uppercase mb-2" style={{ color: accent }}>
              {g.label}
            </p>
            <ul className="flex flex-col gap-1.5">
              {g.items.map((item, i) => (
                <li key={i} className="font-body text-sm leading-relaxed flex gap-2" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <span style={{ color: accent }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
