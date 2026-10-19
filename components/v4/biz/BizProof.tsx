"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { display } from "../ui"
import { Story } from "../Stories"
import { SHOPS } from "../shops"
import type { Kind } from "../shops"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const LABEL: Record<Kind, string> = { fashion: "Fashion & tailoring", services: "Services", food: "Food & drinks", beauty: "Beauty & health" }
const PICKS = ["mide-atelier", "teegrills", "kate-optical-world", "tenteen-crochets", "de-light-s-touch-hair-care", "egbo-ati-ewa-pipi"]
const TILT = [-4, 3, -2, 4, -3, 2]

export default function BizProof({ live }: { live: { total: number; byCategory: Record<Kind, number> } | null }) {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-pr-head] > *", { y: 40, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: root.current, start: "top 70%" } })
        // Counts roll up to the live numbers.
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const to = Number(el.dataset.count)
          const o = { v: 0 }
          gsap.to(o, { v: to, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" }, onUpdate: () => { el.textContent = String(Math.round(o.v)) } })
        })
        gsap.from("[data-pr-flyer]", { y: 50, opacity: 0, duration: 0.9, ease: "expo.out", stagger: 0.07, scrollTrigger: { trigger: "[data-pr-wall]", start: "top 80%" } })
        gsap.utils.toArray<HTMLElement>("[data-pr-flyer]").forEach((el, i) => {
          gsap.to(el, { y: [-30, -70, -50][i % 3], ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } })
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  const picks = PICKS.map((slug) => SHOPS.find((s) => s.slug === slug)!).filter(Boolean)

  return (
    <section id="stories" ref={root} data-bg="#F5F5F7" aria-label="Shops like yours are already here" className="relative overflow-hidden bg-[#F5F5F7] py-28 text-[#0B0B0C] lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div data-pr-head className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className={`${display} text-[clamp(2.6rem,6.4vw,6rem)]`}>Shops like yours<br />are already here.</h2>
          <p className="max-w-[26rem] text-lg leading-relaxed text-[#62636B]">
            {live ? `${live.total} shops on Ahiver today, most of them around Ibadan.` : "Shops across Ibadan are already on Ahiver."} These are their own flyers.
          </p>
        </div>

        {live ? (
          <dl className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {(Object.keys(LABEL) as Kind[]).map((k) => (
              <div key={k} className="flex flex-col-reverse gap-2 rounded-[22px] bg-white p-6">
                <dt className="text-[15px] font-semibold text-[#62636B]">{LABEL[k]}</dt>
                <dd data-count={live.byCategory[k]} className="font-[family-name:var(--font-bricolage)] text-[clamp(3rem,5vw,4.4rem)] font-extrabold leading-[0.9] tracking-[-0.04em] tabular-nums">{live.byCategory[k]}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-16 grid gap-12 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16">
          <div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:overflow-visible">
            <div className="w-[64vw] shrink-0 snap-center sm:w-[250px]"><Story id="ahiver-bisi-v3" who="Olabisi" what="Creator, Ibadan" offset="" /></div>
            <div className="w-[64vw] shrink-0 snap-center sm:w-[250px] lg:mt-16"><Story id="ahiver-cc-v2" who="On Ahiver" what="Creator, Ibadan" offset="" /></div>
          </div>
          <div data-pr-wall className="grid grid-cols-3 gap-4 sm:gap-6 lg:pt-8">
            {picks.map((s, i) => (
              <a key={s.slug} data-pr-flyer href={`https://app.ahiver.com/store/${s.slug}`} className="block rounded-[14px] bg-white p-1.5 shadow-[0_20px_40px_-24px_rgba(11,11,12,0.5)] transition-transform duration-200 ease-out hover:-translate-y-1" style={{ rotate: `${TILT[i]}deg` }}>
                <Image src={`/v4/flyers/${s.slug}.webp`} alt={`${s.name}'s flyer`} width={s.w} height={s.h} sizes="(min-width: 1024px) 16vw, 30vw" className="aspect-[4/5] h-auto w-full rounded-[10px] object-cover object-top" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
