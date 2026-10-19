import ReactLenis from "lenis/react"
import { LenisGsapBridge } from "@/components/LenisGsapBridge"
import { SoundProvider, SoundToggle } from "@/components/v4/sound"
import Nav from "@/components/v4/Nav"
import Hero from "@/components/v4/Hero"
import Modes from "@/components/v4/Modes"
import Flyers from "@/components/v4/Flyers"
import Journey from "@/components/v4/Journey"
import BusinessAI from "@/components/v4/BusinessAI"
import Stories from "@/components/v4/Stories"
import Faq from "@/components/v4/Faq"
import Finale from "@/components/v4/Finale"
import Footer from "@/components/v4/Footer"
import BgMorph from "@/components/v4/BgMorph"
import { APP_URL } from "@/components/v4/ui"
import { getLiveShops, qrSvg } from "@/lib/v4/live"

// Landing v4: "Find it around the corner". The previous landing's sections
// stay in /sections for reference; nothing on this page imports them.
export const revalidate = 1800

export default async function Home() {
  const [live, qr] = await Promise.all([getLiveShops(), qrSvg(APP_URL)])

  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true, anchors: { offset: -72 } }}>
      <LenisGsapBridge />
      <SoundProvider>
        <Nav />
        <main id="v4" className="v4 bg-white">
          <Hero oyo={live?.oyo ?? null} qr={qr} />
          <Modes />
          <Flyers counts={live ? { total: live.total, byCategory: live.byCategory } : null} />
          <Journey />
          <BusinessAI />
          <Stories />
          <Faq />
          <Finale qr={qr} />
          <Footer />
        </main>
        <BgMorph target="#v4" />
        <SoundToggle />
      </SoundProvider>
    </ReactLenis>
  )
}
