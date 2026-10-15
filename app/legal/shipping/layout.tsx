import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping and Fulfilment Policy",
  description: "How independent Ahiver sellers arrange delivery and pickup.",
  alternates: { canonical: "/legal/shipping" },
}

export default function ShippingLayout({ children }: { children: React.ReactNode }) {
  return children
}
