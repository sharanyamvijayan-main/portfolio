import Link from "next/link";
import { Newsreader, Roboto } from "next/font/google";
import { projects } from "@/lib/projects";

// Match the AbbVie case-study type system — Newsreader for headings,
// Roboto for labels and body — so the strip reads the same on every
// case study rather than switching to the homepage's Syne/Inter.
const display = Newsreader({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });
const body = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], display: "swap" });

// Finished card artwork — same images the homepage work grid uses.
// `size` / `position` override the default cover-centre framing per card
// (Nouri's screenshot has a lot of empty sky above the laptop).
const CARD_ART: Record<string, { src: string; size?: string; position?: string }> = {
  abbvie: { src: "/abbvie-card.png" },
  remember: { src: "/remember-card.png" },
  nouri: { src: "/nouri-card.png", size: "165%", position: "30% 100%" },
  pinreal: { src: "/pinreal-card.png" },
};

// Still-in-progress entries — kept off the "more work" strip.
const HIDDEN = new Set(["arco", "oblique-vase"]);

// Closing "more work" strip, shared across all case studies — reads from
// the same project list as the homepage grid so entries never drift.
//
// `reserveNavGutter`: set true when the page also renders a CaseStudyNav —
// that nav measures its position once against an earlier section, so this
// section needs the same xl:pl-56 left padding those sections use, or the
// nav (which doesn't re-measure per section) ends up drifting into this
// section's content once the page's own 6.5% padding kicks in instead.
//
// `index` is still accepted (callers pass it) but no longer rendered.
export function MoreProjects({
  currentSlug, reserveNavGutter = false,
}: {
  currentSlug: string; index?: number; reserveNavGutter?: boolean;
}) {
  const others = projects.filter(
    (p) => p.slug !== currentSlug && !HIDDEN.has(p.slug)
  );

  return (
    <section
      className={`relative px-4 md:px-10 py-20 md:py-28 overflow-hidden ${reserveNavGutter ? "xl:pl-56" : ""}`}
      style={{ background: "#191919" }}
    >
      <div className="max-w-[1800px] mx-auto" style={{ paddingLeft: reserveNavGutter ? undefined : "6.5%", paddingRight: "6.5%" }}>
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <div>
            <h2 className="leading-none" style={{ fontFamily: display.style.fontFamily, fontWeight: 400, fontSize: "clamp(36px, 5vw, 72px)", color: "#F3F3F3", letterSpacing: "-0.02em" }}>
              View Other Projects
            </h2>
          </div>
          <Link href="/#work" className="text-sm whitespace-nowrap transition-colors" style={{ fontFamily: body.style.fontFamily, color: "rgba(255,255,255,0.6)" }}>
            See all work →
          </Link>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4" style={{ scrollSnapType: "x mandatory" }}>
          {others.map((p) => {
            const art = CARD_ART[p.slug];
            return (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group relative flex-shrink-0 overflow-hidden rounded-2xl flex flex-col justify-end p-8 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: p.bg,
                  backgroundImage: art ? `url(${art.src})` : undefined,
                  backgroundSize: art?.size ?? "cover",
                  backgroundPosition: art?.position ?? "center",
                  width: "min(360px, 80vw)",
                  aspectRatio: "4 / 3",
                  scrollSnapAlign: "start",
                }}
              >
                {art && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-[88%] pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.7) 34%, transparent 100%)" }}
                  />
                )}
                <div className="relative flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={
                        art
                          ? { fontFamily: body.style.fontFamily, backgroundColor: "rgba(255,255,255,0.16)", color: "#FCEBDA", border: "1px solid rgba(255,255,255,0.4)" }
                          : { fontFamily: body.style.fontFamily, backgroundColor: p.tagBg, color: p.tagColor, border: `1px solid ${p.tagColor}30` }
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="relative mb-1.5 leading-tight" style={{ fontFamily: display.style.fontFamily, fontWeight: 400, color: "#FCEBDA", fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.01em" }}>
                  {p.title}
                </h3>
                <p className="relative text-sm leading-relaxed" style={{ fontFamily: body.style.fontFamily, color: "#FCEBDA", opacity: 0.7 }}>{p.tagline}</p>
                <span
                  className="absolute bottom-7 right-7 text-sm opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300"
                  style={{ fontFamily: body.style.fontFamily, color: "#FCEBDA" }}
                >
                  View →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
