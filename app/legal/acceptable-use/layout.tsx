import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Rules for safe and lawful use of Ahiver by sellers and buyers.",
  alternates: { canonical: "/legal/acceptable-use" },
}

export default function AcceptableUseLayout({ children }: { children: React.ReactNode }) {
  return children
}
