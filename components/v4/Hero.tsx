"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { AhiverMark } from "./AhiverLogo"
import { APP_URL, ArrowIcon, Chip, QR, display } from "./ui"
import { useSound } from "./sound"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const RINGS = [160, 260, 360, 460, 560]

export default function Hero({ oyo, qr }: { oyo: number | null; qr: string }) {
  const root = useRef<HTMLElement>(null)
  const { play } = useSound()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // The one authored entrance: lines rise out of their masks, the hand
        // rises on a long ease, chips land one by one.
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } })
        tl.from("[data-line] > span", { yPercent: 110, duration: 1.1, stagger: 0.08 })
          .from("[data-hand]", { yPercent: 28, opacity: 0, duration: 1.4 }, 0.15)
          .from("[data-ring]", { scale: 0.6, opacity: 0, transformOrigin: "50% 50%", duration: 1.4, stagger: 0.06 }, 0.1)
          .from("[data-fade]", { y: 18, opacity: 0, duration: 0.9, stagger: 0.07 }, 0.45)
          .from("[data-chip]", {
            scale: 0.92, opacity: 0, y: 8, duration: 0.6, stagger: 0.18, ease: "back.out(1.6)",
            onStart: () => play("pop"),
          }, 0.9)

        // A ring keeps rippling out from the pin under the hand: "near you".
        gsap.fromTo("[data-pulse]", { scale: 0.3, opacity: 0.55 }, { scale: 1.6, opacity: 0, duration: 2.6, ease: "power2.out", repeat: -1, transformOrigin: "50% 50%", delay: 1.4 })

        // Scroll: the hand drifts up, the rings open, the words lift away.
        const st = { trigger: root.current, start: "top top", end: "bottom top", scrub: true }
        gsap.to("[data-hand]", { yPercent: -14, ease: "none", scrollTrigger: st })
        gsap.to("[data-rings]", { scale: 1.18, transformOrigin: "80% 100%", ease: "none", scrollTrigger: st })
        gsap.to("[data-copy]", { y: -90, opacity: 0.2, ease: "none", scrollTrigger: st })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  const line = (content: React.ReactNode) => (
    <span data-line className="block overflow-hidden pb-[0.04em]">
      <span className="block">{content}</span>
    </span>
  )

  return (
    <section ref={root} data-bg="#3B55FF" aria-label="Find it around the corner" className="relative min-h-[100svh] overflow-hidden bg-[#3B55FF] text-white">
      {/* Distance rings (Ahiver's answer to a pattern): 100 m, 500 m, 1 km… */}
      <svg data-rings aria-hidden="true" className="absolute right-[-260px] bottom-[-320px] h-[1200px] w-[1200px] lg:right-[-170px] lg:bottom-[-150px]" viewBox="0 0 1200 1200">
        <circle data-pulse cx="600" cy="600" r="160" fill="none" stroke="#0B0B0C" strokeWidth="6" />
        {RINGS.map((r) => (
          <circle key={r} data-ring cx="600" cy="600" r={r} fill="none" stroke="#0B0B0C" strokeWidth="50" />
        ))}
      </svg>

      <div data-copy className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-6 px-5 pt-28 sm:px-8 lg:px-14 lg:pt-36">
        <h1 className={`${display} max-w-[11ch] text-[clamp(3.2rem,8.6vw,7rem)]`}>
          {line("Find it")}
          {line("around the")}
          {line(
            <>
              c
              <span className="mx-[0.02em] inline-flex h-[0.7em] w-[0.74em] translate-y-[0.04em] items-center justify-center rounded-[0.2em] bg-white p-[0.07em] align-baseline">
                <AhiverMark size={80} className="h-full w-full" />
              </span>
              rner.
            </>,
          )}
        </h1>
        <p data-fade className="max-w-[30rem] text-lg font-medium leading-[1.45] text-white sm:text-xl">
          The shops, kitchens and makers near you, sorted by how close they are. Message them, order, and pick up today.
        </p>
        <div data-fade className="flex flex-wrap items-center gap-3">
          <a
            href={APP_URL}
            onPointerDown={() => play("tick", { haptic: true })}
            className="inline-flex h-14 items-center gap-2.5 rounded-full bg-white px-6 text-[17px] font-bold text-[#0B0B0C] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Show me what&apos;s near <ArrowIcon />
          </a>
          <span className="hidden h-14 items-center gap-3 rounded-full bg-[#0B0B0C]/30 py-2 pl-2 pr-4 lg:inline-flex">
            <span className="overflow-hidden rounded-[10px] bg-white p-1">
              <QR svg={qr} size={36} label="QR code that opens app.ahiver.com" />
            </span>
            <span className="text-sm font-semibold leading-tight">Scan to open<br />on your phone</span>
          </span>
        </div>
        <p data-fade className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[15px] font-semibold text-white/90">
          {oyo ? <span>{oyo} shops live in Oyo State</span> : null}
          <span>Free for shoppers</span>
          <span>Nothing to download</span>
        </p>
      </div>

      <div data-hand className="pointer-events-none absolute bottom-[-22%] right-[-40%] z-[2] w-[140%] sm:bottom-[-6%] sm:right-[-12%] sm:w-[110%] lg:bottom-[-14%] lg:right-[-6%] lg:w-[62%]">
        <Image src="/v4/hand.webp" alt="A hand holding a phone showing Ahiver: shops within 1 km, the nearest 300 m away" width={1322} height={1032} priority sizes="(min-width: 1024px) 62vw, 150vw" className="h-auto w-full" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[3] mx-auto max-w-[1440px]">
        <span data-chip className="absolute left-[46%] top-[50%] hidden lg:block"><Chip>300 m · Jay&apos;s Fashion</Chip></span>
        <span data-chip className="absolute right-[18%] top-[34%] hidden lg:block"><Chip dark>1.1 km · Helyn&apos;s Hub</Chip></span>
        <span data-chip className="absolute right-[16%] top-[64%] hidden lg:block"><Chip>2.4 km · Fidmore</Chip></span>
        <span data-chip className="absolute bottom-[26%] right-4 lg:hidden"><Chip>300 m · Jay&apos;s Fashion</Chip></span>
      </div>
    </section>
  )
}
