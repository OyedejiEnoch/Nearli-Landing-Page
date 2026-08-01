import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Ahiver uses cookies and similar technologies on our website and app, and how you can manage them.",
  alternates: { canonical: "/legal/cookie-policy" },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
