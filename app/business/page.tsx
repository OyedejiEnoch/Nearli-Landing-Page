import type { Metadata } from "next"
import ReactLenis from "lenis/react"
import { LenisGsapBridge } from "@/components/LenisGsapBridge"
import { SoundProvider, SoundToggle } from "@/components/v4/sound"
import Nav from "@/components/v4/Nav"
import Footer from "@/components/v4/Footer"
import BgMorph from "@/components/v4/BgMorph"
import BizHero from "@/components/v4/biz/BizHero"
import BizSteps from "@/components/v4/biz/BizSteps"
import BizAssistant from "@/components/v4/biz/BizAssistant"
import BizFlyers from "@/components/v4/biz/BizFlyers"
import BizOrders from "@/components/v4/biz/BizOrders"
import BizProof from "@/components/v4/biz/BizProof"
import BizFaqCta from "@/components/v4/biz/BizFaqCta"
import { SELL_URL } from "@/components/v4/ui"
import { getLiveShops, qrSvg } from "@/lib/v4/live"

export const metadata: Metadata = {
  title: "Ahiver for Business — Be the shop around the corner",
  description:
    "Put your shop on Ahiver for free. People nearby find you by distance, message you and send orders, and you run it all from WhatsApp: products from photos, flyers, invoices and payments.",
  alternates: { canonical: "/business" },
  openGraph: {
    title: "Ahiver for Business — Be the shop around the corner",
    description: "Free to open, live straight away. Get found by people near you and run your shop from WhatsApp.",
    url: "/business",
    type: "website",
  },
}

export const revalidate = 1800

export default async function BusinessPage() {
  const [live, qr] = await Promise.all([getLiveShops(), qrSvg(SELL_URL)])
  const counts = live ? { total: live.total, byCategory: live.byCategory } : null

  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true, anchors: { offset: -72 } }}>
      <LenisGsapBridge />
      <SoundProvider>
        <Nav variant="business" />
        <main id="v4" className="v4 bg-white">
          <BizHero total={live?.total ?? null} />
          <BizSteps />
          <BizAssistant />
          <BizFlyers />
          <BizOrders />
          <BizProof live={counts} />
          <BizFaqCta qr={qr} />
          <Footer />
        </main>
        <BgMorph target="#v4" />
        <SoundToggle />
      </SoundProvider>
    </ReactLenis>
  )
}
