import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ahiver collects, uses and protects your personal information. We comply with the Nigeria Data Protection Act (NDPA) 2023.",
  alternates: { canonical: "/legal/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
