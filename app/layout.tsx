import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// ── Ahiver Immersive Design Language (matches main app) ──
const inter = localFont({
  src: "./fonts/inter.ttf",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const bricolage = localFont({
  src: "./fonts/bricolagegrotesque.ttf",
  variable: "--font-bricolage",
  display: "swap",
  weight: "200 800",
});

const playfair = localFont({
  src: [
    { path: "./fonts/playfairdisplay.ttf", weight: "400 900", style: "normal" },
    { path: "./fonts/playfairdisplay-Italic.ttf", weight: "400 900", style: "italic" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces.ttf", weight: "100 900", style: "normal" },
    { path: "./fonts/fraunces-Italic.ttf", weight: "100 900", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
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
        className={`${inter.variable} ${bricolage.variable} ${playfair.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
