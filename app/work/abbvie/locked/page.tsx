import Link from "next/link";
import { Newsreader, Roboto } from "next/font/google";
import { LockedGate } from "@/projects/AbbVie/LockedGate";
import { safeNext } from "@/lib/abbvieAccess";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["400"], variable: "--font-newsreader", display: "swap" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-roboto", display: "swap" });

export const metadata = { title: "Password required — Sharanya Vijayan", robots: { index: false } };

const TITLES: Record<string, string> = {
  "celebration-of-technology": "Celebration of Technology",
  arc: "ARC — AbbVie Request Center",
  "ai-learning-hub": "AI Learning Hub",
};

export default async function Locked({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next: rawNext } = await searchParams;
  const next = safeNext(rawNext);
  const slug = next.split("/")[3];
  const title = TITLES[slug] ?? "AbbVie case study";
  const subject = encodeURIComponent(`Access request: AbbVie case study (${title})`);
  const body = encodeURIComponent("Hi Sharanya,\n\nI'd like to view the AbbVie case studies. My name and company:\n\n");

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center py-16 ${newsreader.variable} ${roboto.variable}`}
      style={{ backgroundColor: "#FFFFFF", fontFamily: "var(--font-roboto)" }}
    >
      <LockedGate next={next} title={title} requestHref={`mailto:vijayan3@illinois.edu?subject=${subject}&body=${body}`} />
      <Link
        href="/work/abbvie"
        className="mt-10 hover:opacity-70 transition-opacity"
        style={{ fontFamily: "var(--font-roboto)", fontSize: 12, color: "#636363" }}
      >
        &larr; Back to AbbVie overview
      </Link>
    </main>
  );
}
