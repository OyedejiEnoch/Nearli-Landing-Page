import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete your account",
  description: "How to delete your Ahiver account and what happens to your data.",
  alternates: { canonical: "/legal/delete-account" },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
