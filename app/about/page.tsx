import { Newsreader } from "next/font/google";
import Reveal from "@/components/Reveal";
import AboutPhoneScroll from "@/components/AboutPhoneScroll";

// Same serif used for the homepage hero and the AbbVie case-study headlines.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-newsreader-hero",
  display: "swap",
});

const skills = [
  "Product & UX Design",
  "Visual & Interaction Design",
  "User Research & Strategy",
  "Prototyping & Product Thinking",
];
const skillColors = ["#2708A0", "#DD0369", "#09814A", "#2708A0"];

const label = "font-body text-xs text-sv-dark/40 tracking-widest uppercase block";

// ── Content, shared by the phone and desktop layouts ──────────────────────
function Heading({ size, className = "" }: { size: string; className?: string }) {
  return (
    <h1
      className={`whitespace-nowrap ${className}`}
      style={{
        fontFamily: "var(--font-newsreader-hero)",
        fontWeight: 400,
        fontSize: size,
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
    >
      About <span style={{ fontStyle: "italic", color: "#DD0369" }}>Me.</span>
    </h1>
  );
}

function WhoIAm() {
  return (
    <>
      <span className={`${label} mb-4`}>Who I am</span>
      <p className="font-body text-sv-dark/75 text-lg leading-relaxed">
        I&apos;m a student at the University of Illinois studying Industrial Design and
        Informatics. I&apos;m an aspiring UX and product designer passionate about crafting
        inclusive and impactful experiences that bring together design and technology.
      </p>
    </>
  );
}

function WhatIDo() {
  return (
    <>
      <span className={`${label} mb-5`}>What I do</span>
      <ul className="space-y-3">
        {skills.map((s, i) => (
          <li key={s} className="flex items-center gap-3 font-body text-sv-dark/70">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: skillColors[i] }} />
            {s}
          </li>
        ))}
      </ul>
    </>
  );
}

function Currently() {
  return (
    <>
      <span className={`${label} mb-4`}>Currently</span>
      <p className="font-body text-sv-dark/70 leading-relaxed">
        Fourth year student at the University of Illinois Urbana-Champaign, studying
        Industrial Design with a minor in Informatics. Currently seeking full-time Product
        Design and UX opportunities for 2027.
      </p>
    </>
  );
}

function Quote() {
  return (
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
        &ldquo;I believe good design is often the design you don&rsquo;t notice — it simply
        feels clear, intuitive, and right. That&rsquo;s the principle I lead with in every
        experience I create.&rdquo;
      </p>
    </div>
  );
}

function Links() {
  const outline =
    "inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sv-dark/20 text-sv-dark font-body text-sm hover:border-sv-dark/50 transition-colors";
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href="mailto:vijayan3@illinois.edu"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-sv-indigo text-sv-cream font-body text-sm hover:opacity-90 transition-opacity"
      >
        Get in touch →
      </a>
      <a href="https://www.linkedin.com/in/sharanyavijayan/" target="_blank" rel="noopener noreferrer" className={outline}>
        LinkedIn
      </a>
      <a href="https://www.behance.net/sharanyavijayan" target="_blank" rel="noopener noreferrer" className={outline}>
        Behance
      </a>
    </div>
  );
}

// Frosted card the phone sections sit on, over the faded photo.
const card = "rounded-2xl bg-white/80 backdrop-blur-md border border-sv-dark/[0.06] p-6";

export default function About() {
  return (
    <main
      className={`min-h-screen md:pt-32 md:px-10 md:pb-24 ${newsreader.variable}`}
      style={{
        background:
          "#FFFFFF radial-gradient(rgba(25, 25, 25, 0.11) 1.5px, transparent 1.5px) 0 0 / 26px 26px",
      }}
    >
      {/* ── Phone: full-screen photo that fades as the sections scroll over it ── */}
      <div className="md:hidden">
        <AboutPhoneScroll
          heading={<Heading size="clamp(56px, 17vw, 80px)" className="text-sv-dark" />}
        >
          <Reveal className={card}><WhoIAm /></Reveal>
          <Reveal className={card}><WhatIDo /></Reveal>
          <Reveal className={card}><Currently /></Reveal>
          <Reveal><Quote /></Reveal>
          <Reveal className="pt-2"><Links /></Reveal>
        </AboutPhoneScroll>
      </div>

      {/* ── Tablet & desktop: photo pinned beside the text ── */}
      <div className="hidden md:block max-w-[1100px] mx-auto">
        <Reveal>
          <Heading size="clamp(60px, 12vw, 152px)" className="text-sv-dark mb-16" />
        </Reveal>

        <div className="grid grid-cols-2 gap-20 items-start">
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

          <div className="space-y-12">
            <Reveal delay={120}><WhoIAm /></Reveal>
            <div><WhatIDo /></div>
            <div><Currently /></div>
            <Quote />
            <Links />
          </div>
        </div>
      </div>
    </main>
  );
}
