import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ahiver — The local marketplace for Nigeria",
  description:
    "Ahiver is a location-based marketplace that helps every small business in Nigeria get discovered by the customers nearby. Built for shops, artisans, kitchens and makers, in every city.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Ahiver — The local marketplace for Nigeria",
    description:
      "A location-based marketplace helping every small business in Nigeria get found by customers nearby.",
    url: "/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
