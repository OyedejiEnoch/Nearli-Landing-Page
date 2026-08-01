import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The Terms of Service that govern your use of Ahiver — the local marketplace for Nigeria.",
  alternates: { canonical: "/legal/terms" },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
