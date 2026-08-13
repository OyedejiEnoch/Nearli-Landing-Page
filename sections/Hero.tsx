"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { ArrowRight, Clock3, Search, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"

const heroImages = [
  "/assets/newHero1.jpg",
  "/assets/newHero2.jpg",
  "/assets/newHero3.jpg",
  // "/assets/heroImg4.jpg",
]

const Hero = () => {
  const btnRef = useRef<HTMLDivElement>(null)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const id = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => window.clearInterval(id)
  }, [])

  const handleMagnetic = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!btnRef.current || window.matchMedia("(pointer: coarse)").matches) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(btnRef.current, { x: x * 0.18, y: y * 0.18, duration: 0.35, ease: "power3.out" })
  }

  const resetMagnetic = () => {
    if (!btnRef.current) return
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.45, ease: "power3.out" })
  }

  const goToApp = () => {
    window.location.href = "https://app.ahiver.com/"
  }

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#0D1020] text-white"
      style={{ minHeight: "100dvh" }}
    >
      {/* The image is the atmosphere and the product cues carry the meaning. */}
      <div className="absolute inset-0 -z-20">
        {heroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center transition-opacity duration-1000 ease-out"
            style={{ opacity: i === activeImage ? 1 : 0 }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.45) 46%, rgba(0, 0, 0, 0.9) 100%)",
        }}
      />

      <div
        className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pb-8 pt-[104px] sm:px-8 lg:px-12"
        style={{ minHeight: "100dvh" }}
      >
        {/* <div className="pointer-events-none absolute inset-x-5 top-[108px] flex justify-between sm:inset-x-8 lg:inset-x-12">
          <motion.div
            className="pointer-events-auto hidden items-center gap-3 rounded-2xl border border-white/20 bg-[#0D1020]/45 px-4 py-3 shadow-2xl backdrop-blur-md sm:flex"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF5A4D] text-white">
              <MapPin className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">Shops near you</span>
              <span className="block text-xs text-white/60">Sorted by distance</span>
            </span>
          </motion.div>

          <motion.div
            className="pointer-events-auto hidden items-center gap-3 rounded-2xl border border-white/20 bg-[#0D1020]/45 px-4 py-3 shadow-2xl backdrop-blur-md sm:flex"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3B82F6] text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">Ask Ahiver</span>
              <span className="block text-xs text-white/60">Find anything nearby</span>
            </span>
          </motion.div>
        </div> */}

        <div className="flex flex-1 flex-col items-center justify-center pb-10 text-center sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 text-[16px] font-bold uppercase tracking-[0.6em] text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A4D]" />
              Ahiver
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 max-w-3xl text-6xl font-bold leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontSize: "clamp(2.3rem, 4.8vw, 5rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
          >
            A place for your
            <span className="font-accent ml-2 sm:ml-3" style={{ color: "#FF5A4D" }}>
              neighbourhood market.
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-lg text-lg leading-relaxed text-white/75 sm:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.34 }}
          >
            Discover businesses, restaurants, makers and vendors around you, then reach them in a tap.
          </motion.p>

          <motion.div
            className="mt-9 flex w-full flex-col items-center gap-4 sm:w-auto"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.48 }}
          >
            <div ref={btnRef} onMouseMove={handleMagnetic} onMouseLeave={resetMagnetic} className="magnetic-btn w-full sm:w-auto">
              <Button
                onClick={goToApp}
                size="lg"
                style={{ touchAction: "manipulation" }}
                className="group h-14 w-full rounded-2xl bg-white px-8 text-sm font-semibold text-[#0D1020] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)] transition-colors hover:bg-[#F4F6FA] sm:w-[220px]"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <button
              onClick={scrollToHowItWorks}
              style={{ touchAction: "manipulation" }}
              className="group inline-flex min-h-11 items-center gap-2 px-3 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              See how it works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <motion.div
            className="hidden items-center gap-3 rounded-2xl border border-white/15 bg-[#0D1020]/45 px-4 py-3 backdrop-blur-md sm:flex"
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.78 }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#FF7A6F]">
              <Store className="h-4 w-4" />
            </span>
            <span>
              <span className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open now
              </span>
              <span className="block text-xs text-white/60">Mama Kemi&apos;s Kitchen · 0.8km</span>
            </span>
          </motion.div>

          <motion.div
            className="ml-auto flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.86 }}
          >
            <Search className="h-4 w-4" />
            <span>Local discovery, made simple</span>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2" aria-label="Hero image selector">
          {heroImages.map((src, i) => (
            <button
              key={src}
              onClick={() => setActiveImage(i)}
              aria-label={`Show market image ${i + 1}`}
              aria-current={i === activeImage}
              className="min-h-11 min-w-4 px-1 py-5"
              style={{ touchAction: "manipulation" }}
            >
              <span
                className="block h-1 rounded-full transition-all duration-300"
                style={{
                  width: i === activeImage ? 28 : 10,
                  background: i === activeImage ? "#ffffff" : "rgba(255,255,255,0.4)",
                }}
              />
            </button>
          ))}
        </div>

        {/* <div className="hidden pointer-events-none absolute bottom-5 left-5 md:flex items-center gap-2 text-xs text-white/55 sm:hidden">
          <Clock3 className="h-3.5 w-3.5" />
          <span>Open nearby</span>
        </div> */}
      </div>
    </section>
  )
}

export default Hero
