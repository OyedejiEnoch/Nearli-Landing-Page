"use client"

import { useRef } from "react"
import { LayoutGroup, motion } from "motion/react"
import { TextRotate } from "@/components/ui/text-rotate"
import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/sections/PhoneMockUp"
import { ArrowRight, MapPin, Store, Users } from "lucide-react"
import gsap from "gsap"

const trustStats = [
  { icon: Store, label: "Local stores" },
  { icon: MapPin, label: "Discover nearby" },
  { icon: Users, label: "Buyers & sellers" },
]

const Hero = () => {
  const firstBtnRef = useRef<HTMLDivElement>(null)
  const secondBtnRef = useRef<HTMLDivElement>(null)

  const handleMagnetic = (
    e: React.MouseEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(ref.current, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" })
  }

  const resetMagnetic = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" })
  }

  const scrollToCta = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#FDFAF6] pt-[72px]">
      {/* Subtle dot grid texture */}
      <div className="hero-grid-bg absolute inset-0 opacity-40" aria-hidden="true" />

      {/* Soft brand glow behind the phone */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[10%] hidden h-[600px] w-[600px] rounded-full lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(237,232,255,0.9) 0%, rgba(197,191,218,0.35) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24 xl:py-28">
        {/* ── Left: copy + CTAs ── */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Eyebrow badge */}
          <motion.div
            className="mb-6"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C5BFDA] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#120E2E] shadow-sm">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-500" />
              Launching in Lagos · Join early access
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="flex w-full flex-col items-center text-5xl font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a] sm:text-6xl lg:items-start lg:text-7xl xl:text-8xl font-[family-name:var(--font-syne)]"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          >
            <span>Discover</span>
            <LayoutGroup>
              <motion.span layout className="flex flex-wrap justify-center lg:justify-start">
                <TextRotate
                  texts={["Businesses", "Artisans", "Vendors", "Creators", "Markets"]}
                  mainClassName="overflow-hidden pr-2 text-[#120E2E] py-0 pb-2 rounded-xl"
                  staggerDuration={0.03}
                  staggerFrom="last"
                  rotationInterval={2600}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </motion.span>
            </LayoutGroup>
            <span>Near You</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-[#6B6B8A] sm:text-lg md:mt-8"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          >
            Nearli is a local discovery feed for the businesses around you. Find shops,
            artisans and vendors nearby — and get found, without paying for ads.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:gap-4 lg:items-start"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.65 }}
          >
            <div
              ref={firstBtnRef}
              onMouseMove={(e) => handleMagnetic(e, firstBtnRef)}
              onMouseLeave={() => resetMagnetic(firstBtnRef)}
              className="magnetic-btn w-full sm:w-auto"
            >
              <Button
                onClick={scrollToCta}
                size="lg"
                style={{ touchAction: "manipulation" }}
                className="group w-full rounded-lg bg-[#120E2E] px-8 py-6 text-sm font-semibold uppercase tracking-wide text-white shadow-2xl transition-colors hover:bg-[#0a0820] sm:w-auto"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
            <div
              ref={secondBtnRef}
              onMouseMove={(e) => handleMagnetic(e, secondBtnRef)}
              onMouseLeave={() => resetMagnetic(secondBtnRef)}
              className="magnetic-btn w-full sm:w-auto"
            >
              <Button
                onClick={scrollToHowItWorks}
                size="lg"
                variant="outline"
                style={{ touchAction: "manipulation" }}
                className="w-full rounded-lg border border-[#C5BFDA] bg-white px-8 py-6 text-sm font-semibold uppercase tracking-wide text-[#6B6B8A] shadow-sm transition-colors hover:border-[#120E2E] hover:text-[#120E2E] sm:w-auto"
              >
                See How It Works
              </Button>
            </div>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
          >
            {trustStats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-[#120E2E]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#6B6B8A]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: live discovery feed ── */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
