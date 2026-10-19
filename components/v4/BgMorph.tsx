"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// One backdrop that eases from colour to colour as each section takes the
// middle of the screen (Pocket's trick). Off under reduced motion: then each
// section simply keeps its own colour.
export default function BgMorph({ target }: { target: string }) {
  useEffect(() => {
    const main = document.querySelector<HTMLElement>(target)
    if (!main || matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const sections = Array.from(main.querySelectorAll<HTMLElement>("[data-bg]"))
    if (!sections.length) return
    main.style.backgroundColor = sections[0].dataset.bg!
    main.classList.add("v4-morph")
    const to = (c: string) => gsap.to(main, { backgroundColor: c, duration: 0.6, ease: "power2.out", overwrite: true })
    const triggers = sections.map((s, i) =>
      ScrollTrigger.create({
        trigger: s,
        start: "top 70%",
        end: "bottom 70%",
        onEnter: () => to(s.dataset.bg!),
        onEnterBack: () => to(s.dataset.bg!),
        onLeaveBack: () => i > 0 && to(sections[i - 1].dataset.bg!),
      }),
    )
    return () => {
      triggers.forEach((t) => t.kill())
      main.classList.remove("v4-morph")
      main.style.backgroundColor = ""
    }
  }, [target])
  return null
}
