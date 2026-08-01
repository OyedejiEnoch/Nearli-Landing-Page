"use client"

import { useEffect } from "react"
import { useLenis } from "lenis/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * Bridges Lenis smooth scroll ↔ GSAP ScrollTrigger.
 *
 * Without this, ScrollTrigger reads native scroll (which doesn't move under
 * Lenis) — so triggers fire at wrong positions or never, leaving sections
 * stuck at opacity:0. This wires Lenis into ScrollTrigger.update() and pumps
 * Lenis from GSAP's ticker to avoid RAF drift.
 *
 * Mount this INSIDE the <ReactLenis> provider (it uses useLenis()).
 */
export function LenisGsapBridge() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    // 1. Feed Lenis scroll updates into ScrollTrigger
    const onScroll = () => ScrollTrigger.update()
    lenis.on("scroll", onScroll)

    // 2. Drive Lenis from GSAP's ticker (one animation loop, no double-RAF)
    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // 3. Refresh triggers now that Lenis is wired up
    ScrollTrigger.refresh()

    // Also refresh on next tick to catch any late-mounting sections
    const rafId = requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      lenis.off("scroll", onScroll)
      gsap.ticker.remove(raf)
      cancelAnimationFrame(rafId)
    }
  }, [lenis])

  return null
}
