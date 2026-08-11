"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const problems = [
  {
    number: "01",
    title: "Limited visibility",
    description: "Your products only reach friends, family and existing followers.",
  },
  {
    number: "02",
    title: "WhatsApp overload",
    description: "Orders, questions and follow-ups disappear inside crowded DMs.",
  },
  {
    number: "03",
    title: "No online presence",
    description: "A proper storefront still feels too expensive or technical to build.",
  },
  {
    number: "04",
    title: "High marketing costs",
    description: "Paid reach is difficult to sustain when every naira has to work.",
  },
]

// The narrative that lights up word-by-word as it scrolls through the viewport.
const narrative =
  "You can have an excellent product and still be invisible outside your contacts. Ahiver gives local businesses a place to be discovered by the people already looking nearby."

// Words that resolve to the warm coral accent instead of white as they brighten.
const accentWords = new Set(["invisible", "looking", "nearby."])

export function Problem() {
  const containerRef = useRef<HTMLElement>(null)
  const revealRef = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Entrance — the surrounding furniture eases up once.
        const tl = gsap.timeline({
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        })

        tl.from(".problem-eyebrow", { opacity: 0, y: 12, duration: 0.4, ease: "power3.out" })
          .from(".problem-heading", { opacity: 0, y: 18, duration: 0.55, ease: "power3.out" }, "-=0.2")
          .from(".problem-frictions", { opacity: 0, y: 16, duration: 0.5, ease: "power3.out" }, "-=0.2")
          .from(".problem-issue", { opacity: 0, x: -16, duration: 0.4, stagger: 0.07, ease: "power3.out" }, "-=0.25")
          .from(".problem-image", { opacity: 0, y: 24, duration: 0.65, ease: "power3.out" }, "-=0.5")
          .from(".problem-quote", { opacity: 0, y: 16, duration: 0.45, ease: "power3.out" }, "-=0.35")

        // The one authored moment — the argument brightens as you read down it.
        const words = gsap.utils.toArray<HTMLElement>(".reveal-word", revealRef.current)
        gsap.set(words, { color: "rgba(255,255,255,0.16)" })
        gsap.to(words, {
          color: (_i, el) => ((el as HTMLElement).dataset.accent ? "#FF7A6F" : "rgba(255,255,255,0.96)"),
          ease: "none",
          stagger: 0.4,
          scrollTrigger: {
            trigger: revealRef.current,
            start: "top 78%",
            end: "top 34%",
            scrub: true,
          },
        })
      })

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".reveal-word", {
          color: (_i, el) => ((el as HTMLElement).dataset.accent ? "#FF7A6F" : "rgba(255,255,255,0.96)"),
        })
      })

      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} id="problem" className="overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
        <div className="problem-eyebrow flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
          <span className="h-px w-10 bg-[#FF5A4D]" />
          <span style={{ color: "#FF5A4D" }}>01</span>
          <span>The problem</span>
        </div>

        <h2 className="problem-heading mt-8 max-w-3xl text-5xl font-bold leading-[0.96] tracking-tight sm:text-6xl lg:text-[4rem]">
          <span className="text-white/45">Every business deserves to be</span>{" "}
          <span className="font-accent" style={{ color: "#FF5A4D" }}>
            found.
          </span>
        </h2>

        <p
          ref={revealRef}
          className="mt-14 max-w-4xl font-[family-name:var(--font-bricolage)] text-2xl font-medium leading-[1.34] tracking-tight sm:text-3xl lg:mt-20 lg:text-[2.6rem] lg:leading-[1.3]"
        >
          {narrative.split(" ").map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="reveal-word"
              data-accent={accentWords.has(word) ? "true" : undefined}
              style={{ display: "inline-block", marginRight: "0.28em" }}
            >
              {word}
            </span>
          ))}
        </p>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <div className="problem-frictions text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
              Where it breaks today
            </div>
            <ol className="mt-6 divide-y divide-white/15 border-y border-white/15">
              {problems.map((problem) => (
                <li
                  key={problem.number}
                  className="problem-issue group flex items-start gap-5 py-5"
                >
                  <span className="pt-0.5 text-xs font-semibold tracking-[0.2em] text-[#FF5A4D]">
                    {problem.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                      {problem.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/50">
                      {problem.description}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/30 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF5A4D]" />
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:pt-2">
            <div className="problem-image relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-[#171A2D]">
              <Image
                src="/assets/newHero3.jpg"
                alt="A local maker wearing a colourful dress in Ibadan"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-x-0 bottom-0 bg-[#0D1020]/90 px-5 py-5 sm:px-7 sm:py-6">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF5A4D]">
                  The work is already there
                </div>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="text-lg font-semibold tracking-tight sm:text-xl">
                    The right customers just need a way to find it.
                  </p>
                  <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-white/45">
                    Ibadan
                  </span>
                </div>
              </div>
            </div>

            <blockquote className="problem-quote mt-8 border-l-2 border-[#FF5A4D] pl-5 text-lg leading-relaxed text-white/85 sm:text-xl">
              &ldquo;I needed something that could help me grow beyond the people who already knew me.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
