"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { AhiverMark } from "../AhiverLogo"
import { ArrowIcon, SELL_URL, display } from "../ui"
import { useSound } from "../sound"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const RINGS = [120, 230, 340, 450, 560]
// Example shoppers, placed by how far they are from the shop.
const ASKS = [
  { who: "Tolu", dist: "300 m", text: "Do you have the peplum top in size 12?", cls: "right-[6%] top-[22%]" },
  { who: "Ngozi", dist: "1.1 km", text: "Order request: lace gown, pick up today", cls: "left-[48%] bottom-[14%]" },
  { who: "Bayo", dist: "2.4 km", text: "Are you open on Sunday?", cls: "right-[4%] bottom-[22%]" },
]

export default function BizHero({ total }: { total: number | null }) {
  const root = useRef<HTMLElement>(null)
  const { play } = useSound()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } })
        tl.from("[data-line] > span", { yPercent: 110, duration: 1.1, stagger: 0.08 })
          .from("[data-ring]", { scale: 0.5, opacity: 0, transformOrigin: "50% 50%", duration: 1.4, stagger: 0.07 }, 0.1)
          .from("[data-pin]", { scale: 0.85, opacity: 0, duration: 0.8, ease: "back.out(1.8)" }, 0.5)
          .from("[data-fade]", { y: 18, opacity: 0, duration: 0.9, stagger: 0.07 }, 0.45)
        // Shoppers' messages arrive one at a time, as if from their distance.
        gsap.utils.toArray<HTMLElement>("[data-ask]").forEach((el, i) => {
          tl.from(el, { y: 16, scale: 0.94, opacity: 0, duration: 0.6, ease: "back.out(1.6)" }, 1.1 + i * 0.45)
        })
        gsap.fromTo("[data-pulse]", { scale: 0.4, opacity: 0.6 }, { scale: 1.8, opacity: 0, duration: 2.6, ease: "power2.out", repeat: -1, transformOrigin: "50% 50%", delay: 1.6 })

        const st = { trigger: root.current, start: "top top", end: "bottom top", scrub: true }
        gsap.to("[data-rings]", { scale: 1.2, ease: "none", scrollTrigger: st })
        gsap.to("[data-ask]", { y: -60, ease: "none", stagger: 0.1, scrollTrigger: st })
        gsap.to("[data-copy]", { y: -80, opacity: 0.2, ease: "none", scrollTrigger: st })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  const line = (c: React.ReactNode) => (
    <span data-line className="block overflow-hidden pb-[0.04em]"><span className="block">{c}</span></span>
  )

  return (
    <section ref={root} data-bg="#100A30" aria-label="Be the shop around the corner" className="relative min-h-[100svh] overflow-hidden bg-[#100A30] text-white">
      {/* Rings around the shop's pin: 300 m, 1 km, 3 km. */}
      <div data-rings aria-hidden="true" className="absolute right-[-560px] top-[86%] h-[1200px] w-[1200px] -translate-y-1/2 sm:right-[-380px] sm:top-[60%] lg:right-[-200px] lg:top-[56%]">
        <svg className="h-full w-full" viewBox="0 0 1200 1200">
          <circle data-pulse cx="600" cy="600" r="120" fill="none" stroke="#3B55FF" strokeWidth="6" />
          {RINGS.map((r) => <circle key={r} data-ring cx="600" cy="600" r={r} fill="none" stroke="#3B55FF" strokeWidth="44" />)}
        </svg>
        <span data-pin className="absolute left-1/2 top-1/2 flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28%] bg-white p-4 shadow-[0_30px_60px_-20px_rgba(11,11,12,0.6)]">
          <AhiverMark size={68} className="h-full w-full" />
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[3] mx-auto hidden max-w-[1440px] lg:block">
        {ASKS.map((a) => (
          <div key={a.who} data-ask className={`absolute flex flex-col gap-1.5 ${a.cls}`}>
            <span className="w-fit rounded-full bg-[#3B55FF] px-3 py-1.5 text-[13px] font-bold">{a.who} · {a.dist}</span>
            <span className="max-w-[240px] rounded-[16px] rounded-tl-md bg-white px-3.5 py-2.5 text-[15px] leading-snug text-[#0B0B0C] shadow-[0_16px_34px_-14px_rgba(11,11,12,0.5)]">{a.text}</span>
          </div>
        ))}
      </div>

      <div data-copy className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-6 px-5 pt-28 sm:px-8 lg:px-14 lg:pt-40">
        <h1 className={`${display} text-[clamp(3rem,7.6vw,6.6rem)]`}>
          {line("Be the shop")}
          {line("around the")}
          {line("corner.")}
        </h1>
        <p data-fade className="max-w-[32rem] text-lg font-medium leading-[1.45] sm:text-xl">
          Put your shop on Ahiver for free. People nearby find you by distance, message you and send orders, and you run it all from WhatsApp.
        </p>
        <div data-fade className="flex flex-wrap items-center gap-3">
          <a href={SELL_URL} onPointerDown={() => play("tick", { haptic: true })} className="inline-flex h-14 items-center gap-2.5 rounded-full bg-white px-6 text-[17px] font-bold text-[#0B0B0C] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97]">
            Open your shop free <ArrowIcon />
          </a>
          <a href="#how" className="inline-flex h-14 items-center rounded-full border-[1.5px] border-white/40 px-6 text-[16px] font-semibold transition-colors hover:border-white">See how it works</a>
        </div>
        <p data-fade className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[15px] font-semibold text-white/90">
          {total ? <span>{total} shops already on Ahiver</span> : null}
          <span>Free to open</span>
          <span>Live straight away</span>
        </p>
      </div>

      <div data-ask className="absolute bottom-[6%] left-5 z-[3] flex flex-col gap-1.5 lg:hidden">
        <span className="w-fit rounded-full bg-[#3B55FF] px-3 py-1.5 text-[13px] font-bold">Tolu · 300 m</span>
        <span className="max-w-[220px] rounded-[16px] rounded-tl-md bg-white px-3.5 py-2.5 text-[14px] leading-snug text-[#0B0B0C] shadow-[0_16px_34px_-14px_rgba(11,11,12,0.5)]">Do you have it in size 12?</span>
      </div>
    </section>
  )
}
