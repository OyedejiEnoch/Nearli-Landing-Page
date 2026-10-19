"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { display } from "./ui"

gsap.registerPlugin(ScrollTrigger, useGSAP)

// The order-request card, drawn the way the app shows it.
function OrderCard() {
  return (
    <div className="w-[86%] rounded-[22px] bg-white p-5 text-[#0B0B0C] shadow-[0_30px_60px_-30px_rgba(11,11,12,0.5)]">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold text-[#62636B]">Order request</p>
        <p className="text-[13px] font-semibold tabular-nums text-[#62636B]">#1004</p>
      </div>
      <p className="mt-3 text-xl font-extrabold tracking-[-0.02em]">Lace gown</p>
      <p className="text-[15px] text-[#62636B]">Size 12 · Pick up</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span data-status className="inline-flex h-7 items-center gap-1.5 rounded-full bg-[#E6F4EE] px-2.5 text-[12px] font-bold text-[#0E7A5A]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>
          Accepted
        </span>
        <span className="inline-flex h-7 items-center rounded-full bg-[#F5F5F7] px-2.5 text-[12px] font-bold text-[#62636B]">Unpaid</span>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-[#E7E7EA] pt-4">
        <span className="text-[13px] text-[#62636B]">Total</span>
        <span className="text-lg font-extrabold tabular-nums">₦48,000</span>
      </div>
      <span className="mt-4 flex h-11 items-center justify-center gap-2 rounded-full bg-[#0B0B0C] text-[14px] font-bold text-white">Continue on WhatsApp</span>
    </div>
  )
}

const STEPS = [
  { n: "01", title: "Message", body: "Open the shop, see what they sell and how far they are. Ask a question before you go." },
  { n: "02", title: "Order", body: "Send an order request, no account needed. The shop accepts it and you finish on WhatsApp." },
  { n: "03", title: "Pick up", body: "Walk round the corner and collect it today. Or arrange delivery with the shop." },
]

export default function Journey() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-journey-head]", { y: 40, opacity: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: root.current, start: "top 70%" } })
        // Each card wipes open from the bottom, and what's inside settles up into it.
        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((card, i) => {
          const tl = gsap.timeline({ scrollTrigger: { trigger: card, start: "top 82%" } })
          tl.fromTo(card, { clipPath: "inset(100% 0% 0% 0% round 28px)" }, { clipPath: "inset(0% 0% 0% 0% round 28px)", duration: 1.1, ease: "expo.out", delay: i * 0.08 })
            .from(card.querySelector("[data-step-art]"), { yPercent: 18, scale: 1.06, duration: 1.3, ease: "expo.out" }, "<0.05")
            .from(card.querySelectorAll("[data-step-text] > *"), { y: 20, opacity: 0, duration: 0.8, ease: "expo.out", stagger: 0.06 }, "<0.2")
        })
        gsap.from("[data-status]", { scale: 0.9, opacity: 0, duration: 0.5, ease: "back.out(2)", scrollTrigger: { trigger: "[data-status]", start: "top 80%" }, delay: 0.9 })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section ref={root} data-bg="#FFFFFF" aria-label="Message, order, pick up" className="relative bg-white py-28 text-[#0B0B0C] lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <h2 data-journey-head className={`${display} text-[clamp(2.6rem,6.4vw,6rem)]`}>
          Message.<br />Order.<br /><span className="text-[#3B55FF]">Pick up.</span>
        </h2>

        <ol className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-3 lg:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.n} data-step className={`relative flex flex-col overflow-hidden rounded-[28px] ${i === 1 ? "bg-[#3B55FF] text-white" : "bg-[#F5F5F7]"}`}>
              <div data-step-text className="flex flex-col gap-3 p-7 lg:p-8">
                <span className={`text-sm font-bold tabular-nums ${i === 1 ? "text-white/70" : "text-[#62636B]"}`}>{s.n}</span>
                <h3 className="font-[family-name:var(--font-bricolage)] text-[34px] font-extrabold leading-none tracking-[-0.03em]">{s.title}</h3>
                <p className={`max-w-[24rem] text-base leading-relaxed ${i === 1 ? "text-white/85" : "text-[#62636B]"}`}>{s.body}</p>
              </div>
              <div data-step-art className="relative mt-auto flex h-[340px] items-end justify-center overflow-hidden sm:h-[380px]">
                {i === 0 ? (
                  <div className="relative w-[62%] translate-y-[18%] overflow-hidden rounded-[32px] border-[8px] border-[#16161A] bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]" style={{ aspectRatio: "390 / 844" }}>
                    <Image src="/v4/screens/store.webp" alt="A shop page on Ahiver" fill sizes="260px" className="object-cover object-top" />
                  </div>
                ) : i === 1 ? (
                  <div className="flex h-full w-full items-center justify-center pb-8"><OrderCard /></div>
                ) : (
                  <div className="relative w-[62%] translate-y-[18%] overflow-hidden rounded-[32px] border-[8px] border-[#16161A] bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]" style={{ aspectRatio: "390 / 844" }}>
                    <Image src="/v4/screens/map.webp" alt="Ahiver's map showing shops nearby" fill sizes="260px" className="object-cover object-top" />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
