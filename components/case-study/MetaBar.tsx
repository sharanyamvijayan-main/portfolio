import type { ReactNode } from "react";

export interface MetaItem {
  label: string;
  value: ReactNode;
}

// Row of project metadata (role, timeline, tools, etc.) shown under a case
// study's hero title. Shared across projects for a consistent header format.
// `value` usually a string, but accepts a ReactNode for cases like an
// icon-badge row (e.g. tools used) that still needs to sit in this row.
export function MetaBar({ items }: { items: MetaItem[] }) {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-5">
      {items.map((item) => (
        <div key={item.label}>
          <p
            className="font-body text-xs tracking-widest uppercase mb-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {item.label}
          </p>
          <div className="font-body text-sm md:text-base font-medium text-white">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
