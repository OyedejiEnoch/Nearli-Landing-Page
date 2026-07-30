import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Playfair_Display, Barlow_Condensed, Syne, Fraunces } from "next/font/google";
import "./globals.css";

// ── Ahiver Immersive Design Language (matches main app) ──
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// ── Legacy fonts (still referenced by unmigrated sections; remove after full sweep) ──
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ahiver — A place for your neighbourhood",
  description: "Discover the shops, kitchens and makers right around you — and reach them in a tap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bricolage.variable} ${playfair.variable} ${barlowCondensed.variable} ${syne.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
