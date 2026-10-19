"use client"

import { useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ArrowIcon, QR, SELL_URL, display } from "../ui"
import { Item, type QA } from "../Faq"
import { useSound } from "../sound"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const QS: QA[] = [
  { q: "Is it really free?", a: "Yes. Opening your shop and listing products is free today." },
  { q: "Do I need a website or an app?", a: "No. Your Ahiver shop is your page, with its own link. You run it from the seller dashboard or from WhatsApp." },
  { q: "Who will see my shop?", a: "People near you, sorted by distance. Your street address only shows if you choose to share it." },
  { q: "How do I get paid?", a: "Directly by your customer, the way you already do. Ahiver doesn't hold your money." },
  { q: "How do I start using the WhatsApp assistant?", a: "Link your WhatsApp number from your seller dashboard, then send the Ahiver Business number a message." },
  { q: "Can I sell services, not products?", a: "Yes. Tailors, salons, plumbers, caterers and repairers are all on Ahiver." },
  { q: "Where can I learn more?", a: "The seller guide walks through every screen, step by step." },
]

export default function BizFaqCta({ qr }: { qr: string }) {
  const root = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(0)
  const { play } = useSound()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-cta] > *", { y: 40, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: "[data-cta]", start: "top 80%" } })
        gsap.fromTo("[data-cta-ring]", { scale: 0.92 }, { scale: 1.04, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1, transformOrigin: "50% 50%", stagger: 0.3 })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="faq" ref={root} data-bg="#FFFFFF" aria-label="Seller questions" className="relative bg-white text-[#0B0B0C]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-28 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-14 lg:py-40">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <h2 className={`${display} text-[clamp(2.6rem,6vw,5.6rem)]`}>Seller<br />questions.</h2>
          <p className="text-[15px] text-[#62636B]">
            Something else? <a href="mailto:hello@ahiver.com" className="font-semibold text-[#0B0B0C] underline decoration-[#3B55FF] decoration-2 underline-offset-4">hello@ahiver.com</a>
          </p>
        </div>
        <ul className="border-t border-[#E7E7EA]">
          {QS.map((qa, i) => <Item key={qa.q} qa={qa} id={`biz-faq-${i}`} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}
        </ul>
      </div>

      <div className="px-3 pb-3 sm:px-6 sm:pb-6">
        <div data-cta className="relative overflow-hidden rounded-[32px] bg-[#3B55FF] px-6 py-16 text-white sm:px-10 lg:rounded-[40px] lg:px-14 lg:py-24">
          <svg aria-hidden="true" className="pointer-events-none absolute -bottom-[340px] -right-[260px] h-[900px] w-[900px]" viewBox="0 0 900 900">
            {[160, 270, 380].map((r) => <circle key={r} data-cta-ring cx="450" cy="450" r={r} fill="none" stroke="#0B0B0C" strokeWidth="44" />)}
          </svg>
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-7">
              <h2 className={`${display} text-[clamp(3rem,8vw,7.4rem)]`}>Open your<br />shop free.</h2>
              <div className="flex flex-wrap gap-3">
                <a href={SELL_URL} onPointerDown={() => play("tick", { haptic: true })} className="inline-flex h-14 items-center gap-2.5 rounded-full bg-white px-6 text-[17px] font-bold text-[#0B0B0C] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97]">
                  Open your shop free <ArrowIcon />
                </a>
                <a href="/seller-guide" className="inline-flex h-14 items-center rounded-full border-[1.5px] border-white/40 px-6 text-[16px] font-semibold transition-colors hover:border-white">Read the seller guide</a>
              </div>
            </div>
            <div className="hidden items-center gap-4 rounded-[24px] bg-[#0B0B0C]/30 p-3 pr-6 sm:flex">
              <span className="rounded-[14px] bg-white p-2"><QR svg={qr} size={96} label="QR code that opens seller.ahiver.com to sign up" /></span>
              <span className="text-[15px] font-semibold leading-snug">Scan to sign up<br /><span className="text-white/70">seller.ahiver.com</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
