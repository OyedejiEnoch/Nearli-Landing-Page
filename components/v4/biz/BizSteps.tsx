"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Chip, display } from "../ui"

gsap.registerPlugin(ScrollTrigger, useGSAP)

function CodeCard() {
  return (
    <div className="w-full max-w-[300px] rounded-[22px] bg-white p-5 text-[#0B0B0C] shadow-[0_30px_60px_-30px_rgba(11,11,12,0.35)]">
      <p className="text-[17px] font-bold">Check your email</p>
      <p className="mt-1 text-[13px] text-[#62636B]">We sent a 6-digit code to ada@gmail.com</p>
      <div className="mt-4 grid grid-cols-6 gap-1.5">
        {"482613".split("").map((d, i) => (
          <span key={i} data-digit className="flex h-12 items-center justify-center rounded-[12px] border-[1.5px] border-[#3B55FF] font-[family-name:var(--font-bricolage)] text-[22px] font-bold">{d}</span>
        ))}
      </div>
    </div>
  )
}

function ProductCard() {
  return (
    <div className="w-full max-w-[300px] overflow-hidden rounded-[22px] bg-white text-[#0B0B0C] shadow-[0_30px_60px_-30px_rgba(11,11,12,0.35)]">
      <Image src="/v4/chat-top.webp" alt="A product photo" width={480} height={640} sizes="300px" className="h-[200px] w-full object-cover object-top" />
      <div className="flex flex-col gap-2.5 p-4">
        <p className="text-[16px] font-bold">Ankara peplum top</p>
        <span className="flex h-11 items-center justify-between rounded-[12px] border-[1.5px] border-[#3B55FF] px-3.5 text-[15px]">
          <span className="text-[#62636B]">Price</span>
          <strong data-price className="tabular-nums">₦14,500</strong>
        </span>
        <span className="text-[12.5px] text-[#62636B]">You set every price. Nothing is guessed for you.</span>
      </div>
    </div>
  )
}

function ShopPhone() {
  return (
    <div className="relative">
      <div className="relative w-[200px] overflow-hidden rounded-[32px] border-[8px] border-[#16161A] bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:w-[220px]" style={{ aspectRatio: "390 / 844" }}>
        <Image src="/v4/screens/store.webp" alt="A shop page on Ahiver" fill sizes="220px" className="object-cover object-top" />
      </div>
      <span data-chip className="absolute -left-12 top-[28%]"><Chip>300 m from you</Chip></span>
    </div>
  )
}

const STEPS = [
  { n: "01", title: "Sign up with your email", body: "Type a code, name your shop, pick your area. No paperwork.", art: <CodeCard /> },
  { n: "02", title: "Send photos of what you sell", body: "Each photo becomes a product. Add the price and it's live.", art: <ProductCard /> },
  { n: "03", title: "Share your link, get found", body: "Your shop shows up for people near you, sorted by distance.", art: <ShopPhone /> },
]

export default function BizSteps() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-steps-head] > *", { y: 40, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: root.current, start: "top 70%" } })
        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((card, i) => {
          gsap.fromTo(card, { clipPath: "inset(100% 0% 0% 0% round 28px)" }, { clipPath: "inset(0% 0% 0% 0% round 28px)", duration: 1.1, ease: "expo.out", delay: i * 0.1, scrollTrigger: { trigger: card, start: "top 82%" } })
        })
        // The code fills in digit by digit.
        gsap.from("[data-digit]", {
          opacity: 0, y: 8, duration: 0.25, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: "[data-digit]", start: "top 80%" }, delay: 0.6,
        })
        gsap.from("[data-chip]", { scale: 0.9, opacity: 0, y: 10, duration: 0.6, ease: "back.out(1.8)", scrollTrigger: { trigger: "[data-chip]", start: "top 80%" }, delay: 0.9 })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="how" ref={root} data-bg="#FFFFFF" aria-label="Live in an afternoon" className="relative bg-white py-28 text-[#0B0B0C] lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div data-steps-head className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className={`${display} text-[clamp(2.6rem,6.4vw,6rem)]`}>Live in an<br />afternoon.</h2>
          <p className="max-w-[26rem] text-lg leading-relaxed text-[#62636B]">Three steps, all from your phone. Your shop is public the moment you finish the first one.</p>
        </div>
        <ol className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-3 lg:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.n} data-step className={`flex flex-col overflow-hidden rounded-[28px] ${i === 1 ? "bg-[#EEF0FF]" : "bg-[#F5F5F7]"}`}>
              <div className="flex flex-col gap-3 p-7 lg:p-8">
                <span className="text-sm font-bold tabular-nums text-[#62636B]">{s.n}</span>
                <h3 className="font-[family-name:var(--font-bricolage)] text-[30px] font-extrabold leading-none tracking-[-0.03em]">{s.title}</h3>
                <p className="max-w-[24rem] text-base leading-relaxed text-[#62636B]">{s.body}</p>
              </div>
              <div className="mt-auto flex min-h-[400px] items-center justify-center px-7 pb-8">{s.art}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
