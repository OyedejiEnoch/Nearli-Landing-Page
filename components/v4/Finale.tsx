"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { AhiverMark } from "./AhiverLogo"
import { APP_URL, ArrowIcon, QR, display } from "./ui"
import { useSound } from "./sound"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const ROW = "Around the corner · Around the corner · Around the corner · "

// Things to pick up and throw around: a couple of real flyers and the pin.
const STICKERS = [
  { kind: "flyer", src: "/v4/flyers/kicks-wey-no-go-far.webp", w: 640, h: 640, cls: "left-[4%] top-0 w-[120px] lg:w-[200px]", r: -8 },
  { kind: "pin", cls: "right-[6%] top-[2%] w-[80px] lg:w-[130px]", r: 10 },
  { kind: "flyer", src: "/v4/flyers/ayoz-confectionery-bliss.webp", w: 640, h: 640, cls: "right-[10%] bottom-0 w-[140px] lg:w-[200px] max-sm:hidden", r: 6 },
] as const

export default function Finale({ qr }: { qr: string }) {
  const root = useRef<HTMLElement>(null)
  const board = useRef<HTMLDivElement>(null)
  const { play } = useSound()
  const [ripple, setRipple] = useState<{ x: number; y: number; k: number } | null>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Two rows of words slide past each other as you scroll.
        gsap.fromTo("[data-row='a']", { xPercent: 0 }, { xPercent: -33.333, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } })
        gsap.fromTo("[data-row='b']", { xPercent: -33.333 }, { xPercent: 0, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } })
        gsap.from("[data-sticker]", { scale: 0.8, opacity: 0, y: 40, duration: 0.9, ease: "back.out(1.6)", stagger: 0.12, scrollTrigger: { trigger: board.current, start: "top 70%" } })
        gsap.from("[data-band] > *", { y: 40, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: "[data-band]", start: "top 80%" } })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  const found = (e: React.PointerEvent) => {
    const r = board.current?.getBoundingClientRect()
    if (!r) return
    setRipple({ x: e.clientX - r.left, y: e.clientY - r.top, k: Date.now() })
    play("found", { haptic: true })
  }

  return (
    <section ref={root} data-bg="#3B55FF" aria-label="Open Ahiver" className="relative overflow-hidden bg-[#3B55FF] pt-24 text-white lg:pt-32">
      <div ref={board} className="relative py-20 lg:py-28">
        <div aria-hidden="true" className="flex flex-col gap-2 select-none">
          {(["a", "b"] as const).map((k) => (
            <p key={k} data-row={k} className={`${display} whitespace-nowrap text-[clamp(4rem,13vw,12rem)] ${k === "b" ? "text-[#0B0B0C]" : ""}`}>
              {ROW}{ROW}{ROW}
            </p>
          ))}
        </div>
        <p className="sr-only">Around the corner.</p>

        {STICKERS.map((s, i) => (
          <motion.div
            key={i}
            data-sticker
            drag
            dragConstraints={board}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 22 }}
            initial={{ rotate: s.r }}
            whileHover={{ scale: 1.04 }}
            whileDrag={{ scale: 1.08, rotate: 0, cursor: "grabbing" }}
            onDragStart={() => play("pop")}
            className={`absolute z-10 cursor-grab touch-none ${s.cls}`}
          >
            {s.kind === "flyer" ? (
              <div className="rounded-[16px] bg-white p-1.5 shadow-[0_30px_60px_-24px_rgba(11,11,12,0.55)]">
                <Image src={s.src} alt="" width={s.w} height={s.h} sizes="210px" draggable={false} className="pointer-events-none h-auto w-full rounded-[11px]" />
              </div>
            ) : (
              <div className="flex aspect-square items-center justify-center rounded-[28%] bg-white p-[18%] shadow-[0_30px_60px_-24px_rgba(11,11,12,0.55)]">
                <AhiverMark size={90} className="pointer-events-none h-full w-full" />
              </div>
            )}
          </motion.div>
        ))}

        <button
          type="button"
          onPointerDown={found}
          className="absolute left-1/2 bottom-2 z-20 lg:bottom-6 -translate-x-1/2 rounded-full bg-[#0B0B0C] px-5 py-3 text-[15px] font-bold text-white shadow-[0_20px_40px_-16px_rgba(11,11,12,0.7)] transition-transform duration-150 ease-out active:scale-[0.94]"
        >
          Tap me
        </button>
        {ripple ? (
          <motion.span
            key={ripple.k}
            aria-hidden="true"
            className="pointer-events-none absolute z-0 h-24 w-24 rounded-full border-[6px] border-white"
            style={{ left: ripple.x - 48, top: ripple.y - 48 }}
            initial={{ scale: 0.4, opacity: 0.9 }}
            animate={{ scale: 9, opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
          />
        ) : null}
      </div>

      <div data-band className="mx-auto mt-16 flex max-w-[1440px] flex-col items-start gap-8 px-5 pb-24 sm:px-8 lg:mt-24 lg:flex-row lg:items-end lg:justify-between lg:px-14 lg:pb-32">
        <div className="flex flex-col gap-6">
          <h2 className={`${display} max-w-[12ch] text-[clamp(2.6rem,6vw,5.6rem)]`}>What you need is closer than you think.</h2>
          <a href={APP_URL} onPointerDown={() => play("tick", { haptic: true })} className="inline-flex h-14 w-fit items-center gap-2.5 rounded-full bg-white px-6 text-[17px] font-bold text-[#0B0B0C] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97]">
            Open Ahiver <ArrowIcon />
          </a>
        </div>
        <div className="hidden items-center gap-4 rounded-[24px] bg-[#0B0B0C]/25 p-3 pr-6 sm:flex">
          <span className="rounded-[14px] bg-white p-2"><QR svg={qr} size={96} label="QR code that opens app.ahiver.com" /></span>
          <span className="text-[15px] font-semibold leading-snug">Scan with your phone<br /><span className="text-white/70">app.ahiver.com</span></span>
        </div>
      </div>
    </section>
  )
}
