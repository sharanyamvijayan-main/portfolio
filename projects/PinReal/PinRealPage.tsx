import Image from "next/image";
import { Pacifico, Palanquin, Palanquin_Dark } from "next/font/google";
import { BackButton } from "@/components/case-study/BackButton";
import { SectionHeader } from "@/components/case-study/SectionHeader";
import { MetaBar } from "@/components/case-study/MetaBar";
import { PersonaCard } from "@/components/case-study/PersonaCard";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import Reveal from "@/components/Reveal";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400", variable: "--font-pacifico" });
const palanquin = Palanquin({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-palanquin" });
const palanquinDark = Palanquin_Dark({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-palanquin-dark" });

const RED = "#E60023";
const SALMON = "#F695A4";
const BLUSH = "#F1CDD2";

// ─── Brand wordmark, reproduced live in the product's own type system ───────
function PinRealWordmark({ size = "clamp(40px, 6vw, 84px)", pinColor = "#F3F3F3", realColor = RED }: { size?: string; pinColor?: string; realColor?: string }) {
  return (
    <span style={{ fontSize: size, letterSpacing: "-0.01em" }}>
      <span style={{ fontFamily: "var(--font-pacifico)", color: pinColor }}>Pin</span>
      <span style={{ fontFamily: "var(--font-palanquin-dark)", fontWeight: 700, color: realColor }}>Real.</span>
    </span>
  );
}

// ─── Product screenshot, phone-shaped card ───────────────────────────────────
function Screen({ src, alt, w = 210, iw = 604, ih = 1220 }: { src: string; alt: string; w?: number; iw?: number; ih?: number }) {
  return (
    <div className="flex-shrink-0 rounded-[26px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.45)]" style={{ width: w }}>
      <Image src={src} alt={alt} width={iw} height={ih} className="w-full h-auto" sizes="220px" />
    </div>
  );
}

interface FlowStepData {
  num: string;
  title: string;
  description: string;
  screens: { src: string; alt: string; w?: number; iw?: number; ih?: number }[];
}

const flowSteps: FlowStepData[] = [
  {
    num: "01",
    title: "Posting a PinReal.",
    description: "Users can choose to post a PinReal. to unlock their friends' PinReals. — or scroll through their feed instead.",
    screens: [
      { src: "/images/pinreal/assets/screen-camera-1.png", alt: "Camera view with a daily prompt" },
      { src: "/images/pinreal/assets/screen-camera-take-1.png", alt: "Captured photo, first take" },
    ],
  },
  {
    num: "02",
    title: "Retaking a PinReal.",
    description: "Users have up to two retakes and ten minutes in total to post “on time.” After the first attempt, the remaining time and retakes are displayed.",
    screens: [
      { src: "/images/pinreal/assets/screen-camera-2.png", alt: "Camera view showing retake count" },
      { src: "/images/pinreal/assets/screen-camera-take-2.png", alt: "Captured photo, second take" },
    ],
  },
  {
    num: "03",
    title: "Editing a PinReal.",
    description: "Users can resize their photo, write a caption, and select theme tags relevant to their PinReal.",
    screens: [
      { src: "/images/pinreal/assets/screen-edit-1.png", alt: "Resizing and editing a PinReal" },
      { src: "/images/pinreal/assets/screen-caption-typing.png", alt: "Typing a caption" },
      { src: "/images/pinreal/assets/screen-theme-tag-adding.png", alt: "Adding a theme tag" },
      { src: "/images/pinreal/assets/screen-theme-tag-added.png", alt: "Theme tag added" },
    ],
  },
  {
    num: "04",
    title: "Posting the PinReal.",
    description: "Users see the final display of their PinReal. and can successfully post it to their feed.",
    screens: [
      { src: "/images/pinreal/assets/screen-post-successful.png", alt: "Post successful confirmation" },
    ],
  },
  {
    num: "05",
    title: "Pinning a PinReal.",
    description: "Users can pin a post to an existing board or create a new one — organizing their “pinned” posts into categories, the way Pinterest boards work.",
    screens: [
      { src: "/images/pinreal/assets/screen-unlocked-pinreals.png", alt: "Unlocked friends' PinReals feed" },
      { src: "/images/pinreal/assets/screen-new-board.png", alt: "Creating a new board" },
      { src: "/images/pinreal/assets/screen-new-board-typing.png", alt: "Naming a new board" },
      { src: "/images/pinreal/assets/screen-pinned-pinreals.png", alt: "Pinned PinReals in a board" },
      { src: "/images/pinreal/assets/screen-pinned-confirmation.png", alt: "Pinned confirmation toast" },
    ],
  },
  {
    num: "06",
    title: "Filtering PinReals.",
    description: "Theme tags on each post let users filter PinReals. by interest — from fashion to food to travel.",
    screens: [
      { src: "/images/pinreal/assets/screen-filter-by.png", alt: "Filter by theme tag" },
      { src: "/images/pinreal/assets/screen-filters-applied.png", alt: "Filters applied to feed" },
    ],
  },
  {
    num: "07",
    title: "Final Feeds.",
    description: "The homepage feed and the unlocked friends-and-following feed, where every prompt response and pinned moment comes together.",
    screens: [
      { src: "/images/pinreal/assets/feed-homepage.png", alt: "Homepage masonry feed", w: 240, iw: 1234, ih: 2478 },
      { src: "/images/pinreal/assets/feed-pinreals-slider.png", alt: "Friends' PinReals slider feed", w: 190, iw: 499, ih: 2290 },
    ],
  },
];

const palette = [
  { hex: "#F1CDD2", name: "Blush Pink" },
  { hex: "#F695A4", name: "Salmon Pink" },
  { hex: "#E60023", name: "PinReal Red", primary: true },
  { hex: "#FFFFFF", name: "White" },
  { hex: "#858585", name: "Gray" },
  { hex: "#000000", name: "Black" },
  { hex: "#D9D9D9", name: "Light Gray" },
];

const toneTags = [
  "daily prompt theme tags", "mood board naming", "organizing mood boards",
  "captions + theme tags", "comments, reactions, sharing, pinning",
  "system status visibility", "error messages", "cancel / edit actions",
  "filter search", "daily prompts", "real-time post countdown",
  "posting window notification", "number of retakes allowed",
];

export default function PinReal() {
  return (
    <main
      className={`min-h-screen ${pacifico.variable} ${palanquin.variable} ${palanquinDark.variable}`}
      style={{ backgroundColor: "#191919" }}
    >
      <BackButton />

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative px-4 md:px-10 pt-32 pb-16 md:pb-20 max-w-[1400px] mx-auto">
        <Reveal>
          <span className="font-body text-xs tracking-[0.25em] uppercase mb-6 inline-block" style={{ color: "rgba(255,255,255,0.4)" }}>
            Case Study
          </span>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="leading-[0.95] mb-8">
            <PinRealWordmark size="clamp(56px, 10vw, 140px)" />
          </h1>
        </Reveal>
        <Reveal delay={170}>
          <p className="font-body text-lg md:text-xl max-w-xl leading-relaxed mb-12" style={{ color: SALMON }}>
            Where authenticity meets creativity.
          </p>
        </Reveal>

        <div className="mb-14">
          <MetaBar
            items={[
              { label: "Project Type", value: "UI Concept & Visual Exploration" },
              { label: "Creator", value: "Sharanya Vijayan" },
              { label: "Date", value: "November 2024" },
              { label: "Tools", value: "Figma" },
            ]}
          />
        </div>

        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/images/pinreal/assets/hero-full.png"
            alt="PinReal hero — logo, tagline, and phone mockups"
            width={1400}
            height={685}
            className="w-full h-auto"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          01 — OVERVIEW
      ══════════════════════════════════════════════ */}
      <section className="px-4 md:px-10 py-20 md:py-28 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
          <SectionHeader index={1} eyebrow="Overview" title="What is PinReal.?" accent={RED} />
          <div className="flex flex-col gap-6">
            <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: "#F3F3F3" }}>
              <strong style={{ fontWeight: 700 }}>PinReal. is a concept app uniting the spontaneity of BeReal. with the creative exploration of Pinterest.</strong>{" "}
              <span style={{ color: "rgba(255,255,255,0.7)" }}>
                Users share unfiltered moments in response to surprise prompts during a randomized daily posting window, then pin inspiring content to personalized mood boards.
              </span>
            </p>
            <div className="rounded-2xl p-6" style={{ background: "rgba(230,0,35,0.08)", border: `1px solid ${RED}40` }}>
              <p className="font-body text-sm italic leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                PinReal. is a concept app developed as part of a design exercise, blending inspirations from BeReal. and Pinterest. All UI, branding, and assets are original and created solely for educational use. They do not represent or affiliate with the respective companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          02 — BRAND VOICE & TONE
      ══════════════════════════════════════════════ */}
      <section className="px-4 md:px-10 py-20 md:py-28" style={{ background: "#161616" }}>
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader index={2} eyebrow="Brand & Concept" title="Brand Voice & Tone" accent={SALMON} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12 mb-16">
            {[
              { word: "Playful", icon: "😊" },
              { word: "Authentic", icon: "📷" },
              { word: "Creative", icon: "✨" },
            ].map((t) => (
              <div key={t.word} className="rounded-2xl p-8 flex flex-col items-center text-center gap-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: "36px" }}>{t.icon}</span>
                <span className="font-display font-bold text-2xl" style={{ color: "#F3F3F3" }}>{t.word}</span>
              </div>
            ))}
          </div>

          <div className="rounded-3xl p-8 md:p-10" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="font-body text-sm tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Tone Mapping</p>
            <p className="font-body text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(255,255,255,0.75)" }}>
              Every product moment was mapped across two spectrums — <span style={{ color: SALMON }}>expressive</span> to <span style={{ color: SALMON }}>informative</span>, and <span style={{ color: SALMON }}>spontaneous</span> to <span style={{ color: SALMON }}>structured</span> — to keep playful moments (prompts, captions) and functional ones (errors, system status) feeling distinct but consistent.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {toneTags.map((tag) => (
                <span key={tag} className="font-body text-sm px-4 py-2 rounded-full" style={{ background: "rgba(246,149,164,0.12)", color: BLUSH, border: `1px solid ${SALMON}50` }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          03 — USER PERSONAS
      ══════════════════════════════════════════════ */}
      <section className="px-4 md:px-10 py-20 md:py-28 max-w-[1400px] mx-auto">
        <SectionHeader index={3} eyebrow="Research" title="User Personas" accent={RED} />
        <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl mt-8 mb-12" style={{ color: "rgba(255,255,255,0.7)" }}>
          Three personas grounded the feature set in real motivations — from a high schooler chasing trends, to a design student building her portfolio, to a professional documenting her creative process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PersonaCard
            name="Priya, 16"
            subtitle="High School Student"
            image="/images/pinreal/assets/persona-priya.png"
            accent={RED}
            groups={[
              { label: "Behaviors", items: [
                "Up to date on all socials to keep in contact with friends and peers in school",
                "On the marketing team for student council",
                "Enjoys engaging with fashion and lifestyle content",
              ] },
              { label: "Motivations", items: [
                "Likes staying connected with peers and up to date on fashion and makeup trends",
                "Posts content for student council, bringing attention to academic programs and school events",
              ] },
              { label: "Usage Habits", items: [
                "Can spontaneously share moments of her day at school",
                "Good publicity for the student council board",
              ] },
            ]}
          />
          <PersonaCard
            name="Maya, 22"
            subtitle="Undergraduate Graphic Design Student"
            image="/images/pinreal/assets/persona-maya.png"
            accent={SALMON}
            groups={[
              { label: "Behaviors", items: [
                "Avid Pinterest user who curates numerous mood boards",
                "Enjoys sharing “behind the scenes” of her design process on socials",
                "Enjoys interacting with peers in the creative field",
              ] },
              { label: "Motivations", items: [
                "Always looking for inspiration for her graphic design portfolio",
              ] },
              { label: "Usage Habits", items: [
                "Can share workspace, recent sketches, and follow other users' content",
                "Feels a stronger sense of community within the design world",
              ] },
            ]}
          />
          <PersonaCard
            name="Xavier, 28"
            subtitle="Event Coordinator"
            image="/images/pinreal/assets/persona-xavier.png"
            accent={RED}
            groups={[
              { label: "Behaviors", items: [
                "Loves curating personalized mood boards for clients to understand their vision",
                "Actively posts on socials to advertise his services — event setups, client meetings, etc.",
              ] },
              { label: "Motivations", items: [
                "Wants to share raw, authentic snapshots of his day to show that not everything needs to be edited",
                "Likes sharing his creative process and expertise to motivate others in similar spaces",
              ] },
              { label: "Usage Habits", items: [
                "Can share multiple moments in his day, almost like a “creative journal”",
                "Consistently seeks inspiration from other creators and follows their content",
              ] },
            ]}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          04 — USER FLOW
      ══════════════════════════════════════════════ */}
      <section className="px-4 md:px-10 py-20 md:py-28" style={{ background: "#161616" }}>
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader index={4} eyebrow="Process" title="User Flow" accent={SALMON} />
          <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl mt-8 mb-12" style={{ color: "rgba(255,255,255,0.7)" }}>
            Mapping the end-to-end path from opening the app to posting, exploring, and engaging with friends&rsquo; PinReals. — including the branching logic behind retakes, notifications, and unlocking the feed.
          </p>
          <div className="rounded-2xl overflow-hidden bg-white p-2 md:p-4">
            <Image
              src="/images/pinreal/assets/user-flow-diagram.png"
              alt="PinReal user flow diagram"
              width={1400}
              height={1496}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          05 — DESIGN SYSTEM
      ══════════════════════════════════════════════ */}
      <section className="px-4 md:px-10 py-20 md:py-28 max-w-[1400px] mx-auto">
        <SectionHeader index={5} eyebrow="UI Foundations" title="Design System" accent={RED} />

        {/* Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 mb-14">
          <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="font-body text-xs tracking-widest uppercase mb-4" style={{ color: RED }}>Accent Font</p>
            <p style={{ fontFamily: "var(--font-pacifico)", fontSize: "clamp(36px, 4vw, 52px)", color: "#F3F3F3" }} className="mb-4">Pacifico</p>
            <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
              Accent font inspired by Pinterest, bringing a creative and playful feel to the app.
            </p>
            <p style={{ fontFamily: "var(--font-pacifico)", fontSize: "20px", color: "rgba(255,255,255,0.5)" }}>
              Aa Bb Cc Dd Ee Ff Gg
            </p>
          </div>
          <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="font-body text-xs tracking-widest uppercase mb-4" style={{ color: SALMON }}>Main Font</p>
            <p style={{ fontFamily: "var(--font-palanquin)", fontWeight: 700, fontSize: "clamp(36px, 4vw, 52px)", color: "#F3F3F3" }} className="mb-4">Palanquin</p>
            <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
              Main font inspired by BeReal., bringing a modern, clean touch to the app. Echoes simplicity and legibility.
            </p>
            <p style={{ fontFamily: "var(--font-palanquin)", fontSize: "20px", color: "rgba(255,255,255,0.5)" }}>
              Aa Bb Cc Dd Ee Ff Gg
            </p>
          </div>
        </div>

        {/* Color palette */}
        <div className="mb-14">
          <p className="font-body text-xs tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>Color Palette</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {palette.map((c) => (
              <div key={c.hex} className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ background: c.hex, height: 88, border: c.hex === "#FFFFFF" ? "1px solid rgba(0,0,0,0.08)" : "none" }} />
                <div className="p-3" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <p className="font-body text-xs font-semibold" style={{ color: "#F3F3F3" }}>{c.hex}</p>
                  <p className="font-body text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>{c.name}{c.primary ? " · Primary" : ""}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo */}
        <div>
          <p className="font-body text-xs tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>Logo & App Icon</p>
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex gap-4">
              {["logo-mark-red.svg", "logo-mark-pink.svg", "logo-mark-gray.svg"].map((f) => (
                <div key={f} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <Image src={`/images/pinreal/figma/${f}`} alt="PinReal pin mark" width={337} height={338} style={{ width: 56, height: 56 }} />
                </div>
              ))}
            </div>
            <div>
              <PinRealWordmark size="clamp(40px, 4vw, 64px)" />
              <p className="font-body text-sm mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                A hand-drawn pin mark over the &ldquo;i&rdquo; ties the wordmark back to Pinterest&rsquo;s pinning metaphor, while the two-weight lockup — Pacifico + Palanquin Dark — mirrors the BeReal. × Pinterest concept.
              </p>
            </div>
          </div>
        </div>

        {/* Component library */}
        <div className="mt-10 rounded-2xl overflow-hidden bg-white p-2 md:p-4">
          <Image
            src="/images/pinreal/assets/icons-components.png"
            alt="PinReal icon and component library"
            width={1400}
            height={811}
            className="w-full h-auto"
            sizes="100vw"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          06 — PRODUCT WALKTHROUGH
      ══════════════════════════════════════════════ */}
      <section className="px-4 md:px-10 py-20 md:py-28" style={{ background: "#161616" }}>
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader index={6} eyebrow="Solution" title="Product Walkthrough" accent={SALMON} />
          <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl mt-8 mb-16" style={{ color: "rgba(255,255,255,0.7)" }}>
            From the daily prompt to a fully organized board of pinned moments — the full flow, screen by screen.
          </p>

          <div className="flex flex-col gap-16">
            {flowSteps.map((step, i) => {
              const accent = i % 2 === 0 ? RED : SALMON;
              return (
                <div key={step.num}>
                  <div className="flex items-start gap-4 mb-6 max-w-2xl">
                    <span
                      className="flex-shrink-0 rounded-full flex items-center justify-center font-display font-bold"
                      style={{ width: 40, height: 40, background: `${accent}25`, border: `1.5px solid ${accent}`, color: accent, fontSize: 13 }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <p className="font-display font-bold text-xl md:text-2xl mb-1.5" style={{ color: "#F3F3F3" }}>{step.title}</p>
                      <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{step.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 overflow-x-auto pb-3">
                    {step.screens.map((s) => (
                      <Screen key={s.src} src={s.src} alt={s.alt} w={s.w} iw={s.iw} ih={s.ih} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CLOSING
      ══════════════════════════════════════════════ */}
      <section className="px-4 md:px-10 py-20 md:py-28 max-w-[1400px] mx-auto text-center">
        <p className="font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
          PinReal. was an exercise in blending two distinct product languages into one cohesive interface — balancing BeReal.&rsquo;s spontaneity with Pinterest&rsquo;s intentional curation.
        </p>
      </section>

      <MoreProjects currentSlug="pinreal" index={7} />
    </main>
  );
}
