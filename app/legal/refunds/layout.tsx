import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "How refunds and returns work for purchases made through businesses on Ahiver.",
  alternates: { canonical: "/legal/refunds" },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
