"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { display } from "../ui"
import { Bubble, WaPhone } from "./chat"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const STEPS = [
  { t: "A shopper nearby sends an order request", d: "No account needed on their side, so nobody drops off at a sign-up wall." },
  { t: "You get it on WhatsApp straight away", d: "From the Ahiver Business number, with a button to open the order." },
  { t: "Accept it, or send a quote", d: "The shopper sees your answer and you finish the details together on WhatsApp." },
  { t: "They tell you when they've paid", d: "You confirm it, and the order is done." },
]

function RequestCard() {
  return (
    <div className="w-[min(84vw,330px)] rounded-[24px] bg-white p-5 text-[#0B0B0C] shadow-[0_40px_70px_-36px_rgba(11,11,12,0.6)]">
      <p className="flex justify-between text-[13px] font-semibold text-[#62636B]"><span>Order request</span><span className="tabular-nums">#1004</span></p>
      <p className="mt-3 text-[22px] font-extrabold tracking-[-0.02em]">Lace gown</p>
      <p className="text-[14px] text-[#62636B]">Size 12 · Pick up · from Ngozi, 1.1 km away</p>
      <p className="mt-4 flex justify-between border-t border-[#E7E7EA] pt-3 text-[15px]"><span className="text-[#62636B]">Total</span><strong className="tabular-nums">₦48,000</strong></p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <span className="flex h-11 items-center justify-center rounded-full bg-[#0B0B0C] text-[14px] font-bold text-white">Accept</span>
        <span className="flex h-11 items-center justify-center rounded-full border-[1.5px] border-[#E7E7EA] text-[14px] font-semibold">Send a quote</span>
      </div>
    </div>
  )
}

export default function BizOrders() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-or-head] > *", { y: 40, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: root.current, start: "top 70%" } })
        gsap.from("[data-or-step]", { y: 24, opacity: 0, duration: 0.8, ease: "expo.out", stagger: 0.1, scrollTrigger: { trigger: "[data-or-steps]", start: "top 80%" } })
        const msgs = gsap.utils.toArray<HTMLElement>("[data-or-alert] [data-msg]")
        gsap.set(msgs, { opacity: 0, y: 12 })
        const tl = gsap.timeline({ scrollTrigger: { trigger: "[data-or-art]", start: "top 65%" } })
        tl.from("[data-or-card]", { x: -80, rotate: -8, opacity: 0, duration: 1, ease: "expo.out" })
          .from("[data-or-alert]", { y: 60, opacity: 0, duration: 1, ease: "expo.out" }, "<0.15")
          .to(msgs[0], { opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.4)" }, "+=0.2")
          .to(msgs[1], { opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.4)" }, "+=1.1")
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section ref={root} data-bg="#3B55FF" aria-label="Orders come to you" className="relative overflow-hidden bg-[#3B55FF] py-28 text-white lg:py-40">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
        <div data-or-head className="flex flex-col gap-10">
          <h2 className={`${display} text-[clamp(2.6rem,6.4vw,6rem)]`}>Orders come<br />to you.</h2>
          <ol data-or-steps className="flex flex-col">
            {STEPS.map((s, i) => (
              <li key={s.t} data-or-step className="flex gap-4 border-t border-white/30 py-5">
                <span className="w-7 font-[family-name:var(--font-bricolage)] text-[22px] font-extrabold">{i + 1}</span>
                <span className="flex flex-col gap-1"><strong className="text-[18px]">{s.t}</strong><span className="text-[15px] leading-relaxed text-white/80">{s.d}</span></span>
              </li>
            ))}
          </ol>
        </div>
        <div data-or-art className="relative flex flex-col items-center gap-8 lg:block lg:h-[680px]">
          <div data-or-card className="lg:absolute lg:left-0 lg:top-[170px] lg:-rotate-3"><RequestCard /></div>
          <div data-or-alert className="lg:absolute lg:right-6 lg:top-0">
            <WaPhone className="w-[300px]">
              <div className="flex flex-col gap-2 px-3 pt-4">
                <Bubble m={{ from: "ai", text: "**New order #1004** from Ngozi: Lace gown, size 12, pick up. ₦48,000.", button: "Open order" }} />
                <Bubble m={{ from: "ai", text: "**Ngozi says they've paid** ₦48,000 for order #1004.", button: "Review payment" }} />
              </div>
            </WaPhone>
          </div>
          <p className="text-center text-[13px] text-white/70 lg:absolute lg:bottom-0 lg:right-6 lg:w-[300px]">Example alerts. You also get a phone notification.</p>
        </div>
      </div>
    </section>
  )
}
