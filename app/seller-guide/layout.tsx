import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seller Guide — Set up your Ahiver store in 10 steps",
  description:
    "The official Ahiver Seller Guide. Set up your store, list your products and start getting discovered by customers near you across Nigeria — in 10 simple steps, in about 15 minutes.",
  alternates: { canonical: "/seller-guide" },
  openGraph: {
    title: "Seller Guide — Set up your Ahiver store in 10 steps",
    description:
      "Set up your Ahiver store and get discovered by customers near you — in 10 simple steps.",
    url: "/seller-guide",
    type: "article",
  },
};

export default function SellerGuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}
