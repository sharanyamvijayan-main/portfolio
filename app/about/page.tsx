import { Newsreader } from "next/font/google";
import Reveal from "@/components/Reveal";

// Same serif used for the homepage hero and the AbbVie case-study headlines.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-newsreader-hero",
  display: "swap",
});

export default function About() {
  const skills = [
    "Product & UX Design",
    "Visual & Interaction Design",
    "User Research & Strategy",
    "Prototyping & Product Thinking",
  ];

  return (
    <main
      className={`min-h-screen pt-32 px-6 md:px-10 pb-24 ${newsreader.variable}`}
      style={{
        background:
          "#FFFFFF radial-gradient(rgba(25, 25, 25, 0.11) 1.5px, transparent 1.5px) 0 0 / 26px 26px",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <Reveal>
          <h1
            className="text-sv-dark mb-16 md:whitespace-nowrap"
            style={{
              fontFamily: "var(--font-newsreader-hero)",
              fontWeight: 400,
              fontSize: "clamp(60px, 12vw, 152px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            About{" "}
            <span style={{ fontStyle: "italic", color: "#DD0369" }}>Me.</span>
          </h1>
        </Reveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Photo */}
          <div className="sticky top-32">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Sharanya Vijayan"
              data-cursor="hello"
              className="w-full aspect-[3/4] rounded-2xl object-cover"
              style={{ objectPosition: "50% 74%" }}
            />
          </div>

          {/* Text content */}
          <div className="space-y-12">
            <Reveal delay={120}>
              <span className="font-body text-xs text-sv-dark/40 tracking-widest uppercase block mb-4">
                Who I am
              </span>
              <p className="font-body text-sv-dark/75 text-lg leading-relaxed">
                I&apos;m a student at the University of Illinois studying
                Industrial Design and Informatics. I&apos;m an aspiring UX and
                product designer passionate about crafting inclusive and
                impactful experiences that bring together design and technology.
              </p>
            </Reveal>

            <div>
              <span className="font-body text-xs text-sv-dark/40 tracking-widest uppercase block mb-5">
                What I do
              </span>
              <ul className="space-y-3">
                {skills.map((s, i) => {
                  const colors = ["#2708A0", "#DD0369", "#09814A", "#2708A0"];
                  return (
                    <li key={s} className="flex items-center gap-3 font-body text-sv-dark/70">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: colors[i] }}
                      />
                      {s}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <span className="font-body text-xs text-sv-dark/40 tracking-widest uppercase block mb-4">
                Currently
              </span>
              <p className="font-body text-sv-dark/70 leading-relaxed">
                Fourth year student at the University of Illinois
                Urbana-Champaign, studying Industrial Design with a minor in
                Informatics. Currently seeking full-time Product Design and UX
                opportunities for 2027.
              </p>
            </div>

            {/* Quote block */}
            <div className="p-8 rounded-2xl bg-sv-dark">
              <p
                className="text-sv-cream leading-snug"
                style={{
                  fontFamily: "var(--font-newsreader-hero)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "clamp(20px, 2.5vw, 27px)",
                }}
              >
                &ldquo;I believe good design is often the design you don&rsquo;t
                notice — it simply feels clear, intuitive, and right. That&rsquo;s
                the principle I lead with in every experience I create.&rdquo;
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:vijayan3@illinois.edu"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-sv-indigo text-sv-cream font-body text-sm hover:opacity-90 transition-opacity"
              >
                Get in touch →
              </a>
              <a
                href="https://www.linkedin.com/in/sharanyavijayan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sv-dark/20 text-sv-dark font-body text-sm hover:border-sv-dark/50 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/sharanyavijayan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sv-dark/20 text-sv-dark font-body text-sm hover:border-sv-dark/50 transition-colors"
              >
                Behance
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
