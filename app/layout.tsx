import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";

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
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <CustomCursor />
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
