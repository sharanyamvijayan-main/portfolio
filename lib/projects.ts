// Single source of truth for "work" entries — used by the homepage grid and
// by each case study's closing "More Work" section, so the two never drift.
export interface Project {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  bg: string;
  tagBg: string;
  tagColor: string;
  year: string;
}

export const projects: Project[] = [
  {
    slug: "abbvie",
    title: "AbbVie",
    tagline: "UX design internship, Summer 2026 — case study in progress.",
    tags: ["UX Design", "Internship"],
    bg: "#191919",
    tagBg: "rgba(143,168,255,0.18)",
    tagColor: "#8FA8FF",
    year: "2026",
  },
  {
    slug: "remember",
    title: "Remember",
    tagline: "A private, invite-only space where AI turns everyone's memories of one person into a single portrait.",
    tags: ["UX Design", "AI Product Design", "Web App"],
    bg: "#191919",
    tagBg: "rgba(183,193,154,0.18)",
    tagColor: "#B7C19A",
    year: "2025",
  },
  {
    slug: "nouri",
    title: "Nouri.",
    tagline: "Simplifying meal prep and making healthy eating feel effortless.",
    tags: ["UX Design", "UI Design", "Mobile App"],
    bg: "#191919",
    tagBg: "rgba(9,129,74,0.2)",
    tagColor: "#09814A",
    year: "2025",
  },
  {
    slug: "pinreal",
    title: "PinReal.",
    tagline: "Where authenticity meets creativity — a BeReal. × Pinterest concept mashup.",
    tags: ["UX Design", "Product Design"],
    bg: "#191919",
    tagBg: "rgba(230,0,35,0.15)",
    tagColor: "#F695A4",
    year: "2024",
  },
  {
    slug: "arco",
    title: "Arco",
    tagline: "Coming soon.",
    tags: ["UX Design", "Branding"],
    bg: "#DD0369",
    tagBg: "rgba(252,235,218,0.15)",
    tagColor: "#FCEBDA",
    year: "2025",
  },
  {
    slug: "oblique-vase",
    title: "Oblique Vase",
    tagline: "Coming soon.",
    tags: ["Industrial Design"],
    bg: "#09814A",
    tagBg: "rgba(252,235,218,0.15)",
    tagColor: "#FCEBDA",
    year: "2025",
  },
];
