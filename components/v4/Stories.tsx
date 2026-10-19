"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { display } from "./ui"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const STORIES = [
  { id: "ahiver-bisi-v3", who: "Olabisi", what: "Creator, Ibadan" },
  { id: "ahiver-founder-v5", who: "Enoch", what: "Founder, Ahiver" },
  { id: "ahiver-cc-v2", who: "On Ahiver", what: "Creator, Ibadan" },
]

function Story({ id, who, what, offset }: { id: string; who: string; what: string; offset: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  // Play only while on screen (muted, as browsers require); tap for sound.
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !reduce) v.play().catch(() => {})
      else v.pause()
    }, { threshold: 0.4 })
    io.observe(v)
    return () => io.disconnect()
  }, [])

  return (
    <figure data-story className={`relative ${offset}`}>
      <div className="relative overflow-hidden rounded-[28px] bg-[#0B0B0C]" style={{ aspectRatio: "9 / 16" }}>
        <video
          ref={ref}
          src={`/v4/stories/${id}.mp4`}
          poster={`/v4/stories/story-${id}.jpg`}
          muted={muted}
          loop
          playsInline
          preload="none"
          className="h-full w-full object-cover"
        />
        <button
          type="button"
          onClick={() => {
            const v = ref.current
            if (!v) return
            setMuted((m) => !m)
            if (v.paused) v.play().catch(() => {})
          }}
          aria-label={muted ? `Play ${who}'s story with sound` : `Mute ${who}'s story`}
          className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-[#0B0B0C] backdrop-blur-md transition-transform duration-150 ease-out active:scale-[0.94]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5 6 9H3v6h3l5 4z" />
            {muted ? <path d="m16 9 5 6m0-6-5 6" /> : <><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M18.5 5.5a9 9 0 0 1 0 13" /></>}
          </svg>
        </button>
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-3">
        <span className="text-lg font-bold">{who}</span>
        <span className="text-[15px] text-[#62636B]">{what}</span>
      </figcaption>
    </figure>
  )
}

export default function Stories() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-stories-head] > *", { y: 40, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: root.current, start: "top 70%" } })
        gsap.from("[data-story]", { y: 80, opacity: 0, duration: 1.1, ease: "expo.out", stagger: 0.1, scrollTrigger: { trigger: "[data-stories-row]", start: "top 80%" } })
      })
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px)", () => {
        // The outer two drift against the middle one.
        gsap.utils.toArray<HTMLElement>("[data-story]").forEach((el, i) => {
          gsap.to(el, { yPercent: i === 1 ? -6 : 8, ease: "none", scrollTrigger: { trigger: "[data-stories-row]", start: "top bottom", end: "bottom top", scrub: true } })
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="stories" ref={root} data-bg="#F5F5F7" aria-label="Real shops, real streets" className="relative overflow-hidden bg-[#F5F5F7] py-28 text-[#0B0B0C] lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div data-stories-head className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className={`${display} max-w-[10ch] text-[clamp(2.6rem,6.4vw,6rem)]`}>Real shops. Real streets.</h2>
          <p className="max-w-[26rem] text-lg leading-relaxed text-[#62636B]">The people selling on Ahiver, and the person building it, in their own words.</p>
        </div>
        <div data-stories-row className="-mx-5 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible">
          {STORIES.map((s, i) => (
            <div key={s.id} className="w-[74vw] shrink-0 snap-center sm:w-[46vw] lg:w-auto">
              <Story {...s} offset={i === 1 ? "lg:mt-24" : ""} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
