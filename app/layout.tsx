import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";
import Splash from "@/components/Splash";
import { SPLASH_KEY } from "@/lib/splash";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sharanya Vijayan — UX & Product Designer",
  description:
    "UX & Product Designer who turns complexity into stories worth experiencing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: the head script below adds a class to <html>
    // before React hydrates.
    <html lang="en" className={`${syne.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Show the splash on the first page load of a session and on every
            browser refresh — but not when moving between pages, which are
            client-side navigations that never re-run this script. Runs before
            first paint so there's no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var k=${JSON.stringify(SPLASH_KEY)},n=performance.getEntriesByType("navigation")[0];if(!sessionStorage.getItem(k)||(n&&n.type==="reload")){sessionStorage.setItem(k,"1");document.documentElement.classList.add("splash-active")}}catch(e){}`,
          }}
        />
      </head>
      <body>
        <Splash />
        <CustomCursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
