import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://ahiver.com";
const SITE_NAME = "Ahiver";
const DEFAULT_TITLE = "Ahiver — Discover businesses near you";
const DEFAULT_DESCRIPTION =
  "Discover local businesses near you across Nigeria — shops, kitchens, artisans and makers on a live map. Message sellers directly. Free to start.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · Ahiver",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Ahiver",
    "discover businesses near you",
    "local businesses Nigeria",
    "Nigerian marketplace",
    "local marketplace Nigeria",
    "buy from local shops Nigeria",
    "sell online Nigeria",
    "location-based marketplace",
    "small business Nigeria",
    "local discovery",
  ],
  authors: [{ name: "Ahiver" }],
  creator: "Ahiver",
  publisher: "Ahiver",
  category: "Marketplace",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_NG",
    // Uses app/opengraph-image.tsx automatically. Add fallback here if needed.
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    creator: "@ahiver",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // ── Search-console verification ──
  // Add your Search Console token here once you've verified the domain.
  // verification: { google: "YOUR_GSC_TOKEN" },
};

export const viewport: Viewport = {
  themeColor: "#0D1020",
  width: "device-width",
  initialScale: 1,
};

// ── Organization JSON-LD (helps Google build the knowledge panel) ──
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/officalLogo.png`,
  description: DEFAULT_DESCRIPTION,
  founder: { "@type": "Person", name: "Ahiver" },
  areaServed: { "@type": "Country", name: "Nigeria" },
  sameAs: [
    // Add real social URLs once live:
    // "https://twitter.com/ahiver",
    // "https://instagram.com/ahiver",
    // "https://linkedin.com/company/ahiver",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en-NG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${bricolage.variable} ${playfair.variable} ${barlowCondensed.variable} ${syne.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
