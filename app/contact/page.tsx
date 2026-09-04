import type { CSSProperties } from "react";
import { Newsreader } from "next/font/google";
import Reveal from "@/components/Reveal";

// Same serif used across the case studies, About, Resume, and Playground pages.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-newsreader-hero",
  display: "swap",
});

const contacts = [
  {
    label: "Email",
    value: "vijayan3@illinois.edu",
    href: "mailto:vijayan3@illinois.edu",
    hoverBg: "#191919",
    hoverText: "#FCEBDA",
  },
  {
    label: "LinkedIn",
    value: "sharanyavijayan",
    href: "https://www.linkedin.com/in/sharanyavijayan/",
    hoverBg: "#2708A0",
    hoverText: "#FCEBDA",
  },
  {
    label: "Behance",
    value: "sharanyavijayan",
    href: "https://www.behance.net/sharanyavijayan",
    hoverBg: "#DD0369",
    hoverText: "#FCEBDA",
  },
];

export default function Contact() {
  return (
    <main
      className={`min-h-screen pt-32 px-6 md:px-10 pb-24 ${newsreader.variable}`}
      style={{
        background:
          "#FFFFFF radial-gradient(rgba(25, 25, 25, 0.11) 1.5px, transparent 1.5px) 0 0 / 26px 26px",
      }}
    >
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <h1
            className="text-sv-dark md:whitespace-nowrap"
            style={{
              fontFamily: "var(--font-newsreader-hero)",
              fontWeight: 400,
              fontSize: "clamp(54px, 9vw, 124px)",
              lineHeight: 0.98,
              letterSpacing: "-0.015em",
            }}
          >
            Let&rsquo;s Talk<span style={{ color: "#DD0369" }}>!</span>
          </h1>
        </Reveal>

        <Reveal delay={130}>
          <p className="font-body text-sv-dark/60 text-base md:text-lg leading-relaxed max-w-[620px] mt-6 mb-14">
            I&rsquo;m currently open to full-time UX and product design opportunities. If you&rsquo;re
            building something thoughtful, solving an interesting problem, or just want to connect,
            I&rsquo;d love to hear from you.
          </p>
        </Reveal>

        <div className="space-y-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between p-7 rounded-2xl border border-sv-dark/10 transition-all duration-300 [@media(hover:hover)]:hover:bg-[var(--hover-bg)] [@media(hover:hover)]:hover:border-[var(--hover-bg)] active:bg-[var(--hover-bg)] active:border-[var(--hover-bg)]"
              style={
                {
                  "--hover-bg": c.hoverBg,
                  "--hover-text": c.hoverText,
                } as CSSProperties
              }
            >
              <div>
                <p
                  className="font-body text-xs text-sv-dark/40 uppercase tracking-widest mb-1.5 transition-colors duration-300 [@media(hover:hover)]:group-hover:text-[var(--hover-text)] group-active:text-[var(--hover-text)]"
                >
                  {c.label}
                </p>
                <p
                  className="font-body font-medium text-sv-dark text-lg md:text-xl transition-colors duration-300 [@media(hover:hover)]:group-hover:text-[var(--hover-text)] group-active:text-[var(--hover-text)]"
                >
                  {c.value}
                </p>
              </div>
              <span
                className="font-body text-2xl text-sv-dark transition-all duration-300 translate-x-0 [@media(hover:hover)]:group-hover:translate-x-1 [@media(hover:hover)]:group-hover:text-[var(--hover-text)] group-active:text-[var(--hover-text)]"
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
