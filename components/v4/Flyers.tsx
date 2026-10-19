"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { APP_URL, display } from "./ui"
import { useSound } from "./sound"
import { SHOPS, type Kind } from "./shops"

gsap.registerPlugin(ScrollTrigger, useGSAP)

type Tab = "all" | Kind
const TABS: { id: Tab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fashion", label: "Fashion" },
  { id: "food", label: "Food" },
  { id: "beauty", label: "Beauty" },
  { id: "services", label: "Services" },
]

// A fixed tilt per flyer, so the wall looks pinned up by hand but never
// reshuffles between renders.
const tilt = (i: number) => [-3, 2.2, -1.4, 3, -2.4, 1.2, -0.8, 2.6][i % 8]

export default function Flyers({ counts }: { counts: { total: number; byCategory: Record<Kind, number> } | null }) {
  const root = useRef<HTMLElement>(null)
  const [tab, setTab] = useState<Tab>("all")
  const { play } = useSound()
  const shown = tab === "all" ? SHOPS : SHOPS.filter((s) => s.kind === tab)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-flyers-head] > *", { y: 40, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: root.current, start: "top 70%" } })
        // Columns drift at different speeds: the wall has depth as you pass.
        gsap.utils.toArray<HTMLElement>("[data-col]").forEach((col, i) => {
          gsap.fromTo(col, { y: [60, 160, 100, 200][i % 4] }, { y: [-60, -160, -100, -200][i % 4], ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } })
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  const split = (n: number) => {
    const out: (typeof SHOPS)[] = Array.from({ length: n }, () => [])
    shown.forEach((s, i) => out[i % n].push(s))
    return out
  }

  const wall = (col: typeof SHOPS, ci: number) => (
    <div key={ci} data-col className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
      <AnimatePresence mode="popLayout" initial={false}>
        {col.map((s, i) => (
          <motion.a
            key={s.slug}
            layout
            href={`${APP_URL}/store/${s.slug}`}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: tilt(ci * 4 + i) }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group relative block overflow-hidden rounded-[18px] bg-white p-2 shadow-[0_24px_50px_-28px_rgba(11,11,12,0.45)]"
          >
            <Image src={`/v4/flyers/${s.slug}.webp`} alt={`${s.name}'s flyer`} width={s.w} height={s.h} sizes="(min-width: 1024px) 22vw, 46vw" className="h-auto w-full rounded-[12px]" />
            <span className="flex items-center justify-between gap-2 px-1.5 pb-1 pt-2.5">
              <span className="min-w-0">
                <span className="block truncate text-[15px] font-bold">{s.name}</span>
                <span className="block truncate text-[13px] text-[#62636B]">{s.city}</span>
              </span>
              <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5F5F7] transition-colors duration-200 group-hover:bg-[#3B55FF] group-hover:text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </span>
            </span>
          </motion.a>
        ))}
      </AnimatePresence>
    </div>
  )

  const count = (id: Tab) => (counts ? (id === "all" ? counts.total : counts.byCategory[id]) : null)

  return (
    <section ref={root} data-bg="#F5F5F7" aria-label="Every kind of shop on your street" className="relative overflow-hidden bg-[#F5F5F7] py-28 text-[#0B0B0C] lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div data-flyers-head className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className={`${display} max-w-[12ch] text-[clamp(2.6rem,6.4vw,6rem)]`}>Every kind of shop on your street.</h2>
          <div className="flex max-w-[30rem] flex-col gap-6">
            <p className="text-lg leading-relaxed text-[#62636B]">These are real Ahiver shops and the flyers they made. Tailors, kitchens, salons, plumbers: if it&apos;s on your street, it belongs here.</p>
            <div role="tablist" aria-label="Kind of shop" className="-mx-1 flex flex-wrap gap-2">
              {TABS.map((t) => {
                const n = count(t.id)
                const on = tab === t.id
                return (
                  <button
                    key={t.id}
                    role="tab"
                    type="button"
                    aria-selected={on}
                    onClick={() => {
                      setTab(t.id)
                      play("tick", { haptic: true })
                    }}
                    className={`inline-flex h-11 items-center gap-2 rounded-full px-4 text-[15px] font-semibold transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.97] ${on ? "bg-[#0B0B0C] text-white" : "bg-white text-[#0B0B0C] hover:bg-[#EEF0FF]"}`}
                  >
                    {t.label}
                    {n !== null ? <span className={`tabular-nums text-[13px] ${on ? "text-white/60" : "text-[#62636B]"}`}>{n}</span> : null}
                  </button>
                )
              })}
            </div>
            {counts ? <p className="text-[13px] text-[#62636B]">Live counts of shops on Ahiver today.</p> : null}
          </div>
        </div>

        {/* Two columns on phones, four on desktop: same flyers, laid out to fit. */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">{split(2).map((col, ci) => wall(col, ci))}</div>
        <div className="mt-24 hidden grid-cols-4 gap-8 lg:grid">{split(4).map((col, ci) => wall(col, ci))}</div>
      </div>
    </section>
  )
}
