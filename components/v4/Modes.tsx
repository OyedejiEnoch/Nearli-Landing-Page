"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useLenis } from "lenis/react"
import { display } from "./ui"
import { useSound } from "./sound"

gsap.registerPlugin(ScrollTrigger, useGSAP)

type Mode = { id: string; label: string; line: string; screen: string | null }
const MODES: Mode[] = [
  { id: "search", label: "Search", line: "Type what you need. Shops and products near you come first.", screen: "/v4/screens/explore.webp" },
  { id: "map", label: "Map", line: "See every shop around you, and exactly how far each one is.", screen: "/v4/screens/map.webp" },
  { id: "ask", label: "Ask", line: "Say it in your own words. Ask finds who sells it nearby.", screen: null },
  { id: "community", label: "Community", line: "Ask your area. Shops answer with what they really sell.", screen: "/v4/screens/community.webp" },
]

function ModeIcon({ id }: { id: string }) {
  const p = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true }
  if (id === "search") return <svg {...p}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-3.8-3.8" /></svg>
  if (id === "map") return <svg {...p}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  if (id === "ask") return <svg {...p}><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></svg>
  return <svg {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20c-.5-2.4-1.9-4-3.8-4.9" /></svg>
}

// Ask, drawn rather than screenshotted: an example question answered with
// real Ahiver food shops.
function AskScreen() {
  return (
    <div className="flex h-full flex-col bg-white px-4 pt-12 text-[#0B0B0C]">
      <p className="text-[22px] font-extrabold tracking-[-0.02em]">Ask Ahiver</p>
      <div className="mt-4 self-end rounded-2xl rounded-br-md bg-[#3B55FF] px-3.5 py-2.5 text-[13px] font-medium text-white">small chops for a party this Saturday?</div>
      <p className="mt-4 text-[13px] text-[#62636B]">Two kitchens near you make them:</p>
      {[
        ["Ayoz Confectionery Bliss", "Ibadan South West"],
        ["AwesomecakesNmore", "Akinyele"],
      ].map(([n, a]) => (
        <div key={n} className="mt-2.5 rounded-2xl border border-[#E7E7EA] p-3">
          <p className="text-[14px] font-bold">{n}</p>
          <p className="text-[12px] text-[#62636B]">Food · {a}</p>
          <span className="mt-2 inline-flex h-8 items-center rounded-full bg-[#0B0B0C] px-3 text-[12px] font-semibold text-white">Message</span>
        </div>
      ))}
      <p className="mt-auto pb-5 text-center text-[11px] text-[#62636B]">Example question</p>
    </div>
  )
}

export default function Modes() {
  const root = useRef<HTMLElement>(null)
  const st = useRef<ScrollTrigger | null>(null)
  const [active, setActive] = useState(0)
  const last = useRef(0)
  const { play } = useSound()
  const lenis = useLenis()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        st.current = ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          onUpdate: (self) => {
            const i = Math.min(MODES.length - 1, Math.floor(self.progress * MODES.length))
            if (i !== last.current) {
              last.current = i
              setActive(i)
            }
          },
        })
        gsap.from("[data-modes-phone]", { y: 120, rotate: -4, opacity: 0, ease: "expo.out", duration: 1.2, scrollTrigger: { trigger: root.current, start: "top 75%" } })
        gsap.fromTo("[data-arc]", { strokeDashoffset: 900 }, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "+=300%", scrub: true } })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  // Sound and touch answer taps only; scrolling through the modes stays silent.
  const go = (i: number) => {
    play("tick", { haptic: true })
    const s = st.current
    if (!s) return setActive(i)
    const y = s.start + ((i + 0.5) / MODES.length) * (s.end - s.start)
    if (lenis) lenis.scrollTo(y, { duration: 0.9 })
    else window.scrollTo({ top: y, behavior: "smooth" })
  }

  return (
    <section id="find" ref={root} data-bg="#0B0B0C" aria-label="Find it your way" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#0B0B0C] text-white">
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path data-arc d="M 860 120 C 1180 100, 1400 260, 1380 560" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeDasharray="6 10" pathLength={900} />
      </svg>

      <div className="relative mx-auto grid h-full max-w-[1440px] grid-rows-[auto_1fr_auto] px-5 pb-8 pt-20 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-1 lg:items-center lg:gap-16 lg:px-14 lg:pt-[72px]">
        <div className="flex flex-col gap-4 lg:self-end lg:pb-24">
          <h2 className={`${display} text-[clamp(2.8rem,5.4vw,6rem)]`}>Find it<br />your way.</h2>
          <p className="hidden max-w-[22rem] text-lg leading-relaxed text-white/70 lg:block">Four ways in. All of them end at a real shop near you.</p>
        </div>

        {/* Phones: sized by width and allowed to run off the bottom with a fade,
            so the screen reads at a useful size. Desktop: sized by height. */}
        <div className="flex min-h-0 items-start justify-center overflow-hidden pt-5 [mask-image:linear-gradient(to_bottom,black_78%,transparent)] lg:items-center lg:overflow-visible lg:pt-0 lg:[mask-image:none]">
          <div data-modes-phone className="relative w-[min(74vw,330px)] shrink-0 overflow-hidden rounded-[40px] border-[9px] border-[#1E1E22] bg-white shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)] lg:h-[min(76svh,800px)] lg:w-auto lg:rounded-[46px] lg:border-[10px]" style={{ aspectRatio: "390 / 844" }}>
            {MODES.map((m, i) => (
              <div
                key={m.id}
                aria-hidden={i !== active}
                className="absolute inset-0 transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.04)", filter: i === active ? "blur(0)" : "blur(6px)" }}
              >
                {m.screen ? <Image src={m.screen} alt={`Ahiver ${m.label} screen`} fill sizes="320px" className="object-cover object-top" /> : <AskScreen />}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: the list on the right. Phone: tabs along the bottom. */}
        <div className="flex flex-col gap-6 lg:self-center">
          <ol className="hidden flex-col gap-7 lg:flex">
            {MODES.map((m, i) => (
              <li key={m.id}>
                <button type="button" onClick={() => go(i)} aria-current={i === active} className={`group flex flex-col items-start gap-2 text-left transition-opacity duration-300 ${i === active ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>
                  <span className={`flex items-center gap-3.5 font-[family-name:var(--font-bricolage)] font-bold tracking-[-0.02em] transition-[font-size] duration-300 ${i === active ? "text-[44px]" : "text-[32px]"}`}>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${i === active ? "bg-[#3B55FF]" : "bg-white/10"}`}><ModeIcon id={m.id} /></span>
                    {m.label}
                  </span>
                  <span className={`ml-[54px] max-w-[19rem] text-base leading-relaxed text-white/75 transition-[opacity,max-height] duration-300 ${i === active ? "max-h-24 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}>{m.line}</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="hidden items-center gap-2.5 text-sm font-semibold text-white/60 lg:flex" aria-hidden="true">
            {MODES.map((m, i) => <span key={m.id} className={`h-1 w-12 rounded-full transition-colors duration-300 ${i <= active ? "bg-white" : "bg-white/20"}`} />)}
            <span className="ml-2 tabular-nums">0{active + 1} / 04</span>
          </div>

          <p className="text-center text-[15px] leading-snug text-white/75 lg:hidden" aria-live="polite">{MODES[active].line}</p>
          <div className="grid grid-cols-4 lg:hidden">
            {MODES.map((m, i) => (
              <button key={m.id} type="button" onClick={() => go(i)} aria-current={i === active} className={`flex flex-col items-center gap-1.5 py-1 transition-opacity duration-300 ${i === active ? "opacity-100" : "opacity-45"}`}>
                <span className={`flex h-11 w-11 items-center justify-center rounded-[14px] transition-colors duration-300 ${i === active ? "bg-[#3B55FF]" : "bg-white/10"}`}><ModeIcon id={m.id} /></span>
                <span className="text-[13px] font-semibold">{m.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
