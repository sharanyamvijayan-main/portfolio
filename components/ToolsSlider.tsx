import { TOOLS } from "./tools";

// About page "Tools I use": two rows of tool chips sliding sideways in
// opposite directions, each tool in its brand-coloured circle (as on the
// homepage orbit). Each row is its list twice over and slides by exactly one
// copy, so the loop is seamless. Hover pauses it; the edges fade out; under
// reduced motion the chips just sit in a wrapping list. See .tools-slider* in
// globals.css.
const ROWS = [TOOLS.slice(0, 7), TOOLS.slice(7)];

function Chips({ tools, hidden }: { tools: typeof TOOLS; hidden?: boolean }) {
  return (
    <ul className="tools-slider__set flex shrink-0 items-center gap-3 pr-3" aria-hidden={hidden || undefined}>
      {tools.map((t) => (
        <li
          key={t.name}
          className="flex items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-4"
          style={{ borderColor: `${t.color}40`, background: `${t.color}0D` }}
        >
          <span
            className="flex items-center justify-center rounded-full border-[1.5px] w-10 h-10"
            style={{ borderColor: `${t.color}99`, background: `${t.color}14` }}
          >
            <span className="inline-flex scale-[0.8]">{t.icon}</span>
          </span>
          <span className="font-body text-sm whitespace-nowrap text-sv-dark/75">{t.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ToolsSlider() {
  return (
    <div className="tools-slider flex flex-col gap-3">
      {ROWS.map((row, i) => (
        <div key={i} className="tools-slider__row overflow-hidden">
          <div className={`tools-slider__track flex w-max ${i % 2 ? "tools-slider__track--reverse" : ""}`}>
            <Chips tools={row} />
            <Chips tools={row} hidden />
          </div>
        </div>
      ))}
    </div>
  );
}
