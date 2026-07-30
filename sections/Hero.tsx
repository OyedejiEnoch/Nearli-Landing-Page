"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Store, Clock } from "lucide-react"
import gsap from "gsap"

const ACCENT = "#FF5A4D"

const stats = [
  { value: "Free", mark: "", label: "To join" },
  { value: "8", mark: "+", label: "Categories" },
  { value: "5 min", mark: "", label: "To set up" },
]

// Swap these Unsplash placeholders for real Nigerian lifestyle / fabric / market photos in /public
const heroImages = [
  "/assets/heroImg1.jpg",
  "/assets/heroImg2.jpg",
  "/assets/heroImg3.jpg",
  "/assets/heroImg4.jpg",
]

const Hero = () => {
  const btnRef = useRef<HTMLDivElement>(null)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const handleMagnetic = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(btnRef.current, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power3.out' })
  }

  const resetMagnetic = () => {
    if (!btnRef.current) return
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" })
  }

  const scrollToCta = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full overflow-hidden bg-white pt-[72px]">

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-20 lg:pt-20">
        {/* ── Left: copy ── */}
        <div>
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E2E6F0] bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0D1020] shadow-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Now accepting early access
            </span>
          </motion.div>

          {/* Two-tone headline */}
          <motion.h1
            className="mt-7 text-6xl font-bold leading-[0.92] tracking-tight sm:text-7xl lg:text-7xl xl:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            <span className="block text-[#0D1020]">Your city.</span>
            <span className="block" style={{ color: ACCENT }}>
              Your market.
            </span>
          </motion.h1>

          {/* Location line */}
          <motion.div
            className="mt-6 flex items-center gap-2 text-sm font-medium text-[#5C6490]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <MapPin className="h-4 w-4" style={{ color: ACCENT }} />
            Launching Now · 2026
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-[#5C6490] md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          >
            Ahiver is a local discovery feed for the businesses around you. Find shops, artisans and
            vendors nearby — and get found, without paying for ads.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            className="mt-10 flex items-stretch gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-stretch gap-6 sm:gap-8">
                <div>
                  <div className="text-3xl font-bold tracking-tight text-[#0D1020] sm:text-4xl">
                    {s.value}
                    {s.mark && <span style={{ color: ACCENT }}>{s.mark}</span>}
                  </div>
                  <div className="mt-1 text-xs font-medium text-[#5C6490]">{s.label}</div>
                </div>
                {i < stats.length - 1 && <div className="w-px bg-[#E2E6F0]" />}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          >
            <div
              ref={btnRef}
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
              className="magnetic-btn"
            >
              <Button
                onClick={scrollToCta}
                size="lg"
                style={{ touchAction: "manipulation" }}
                className="group w-full rounded-full bg-[#0D1020] px-8 py-6 text-xs font-semibold uppercase tracking-wide text-white shadow-xl transition-colors hover:bg-[#070912] sm:w-auto"
              >
                Join the waitlist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
            <button
              onClick={scrollToHowItWorks}
              style={{ touchAction: "manipulation" }}
              className="group inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#0D1020] transition-colors hover:text-[#0D1020]"
            >
              See how it works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* ── Right: image + floating cards ── */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative h-[440px] overflow-hidden rounded-[2rem] shadow-[0_50px_100px_-30px_rgba(18,14,46,0.4)] sm:h-[520px] lg:h-[600px]">
            {/* Crossfading carousel — auto-advances every 5s */}
            {heroImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Discover local businesses near you on Ahiver"
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
                style={{ opacity: i === activeImage ? 1 : 0 }}
              />
            ))}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0D1020]/25 to-transparent" /> */}

            {/* Slide indicators */}
            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {heroImages.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show image ${i + 1}`}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === activeImage ? 24 : 8,
                    background: i === activeImage ? "#ffffff" : "rgba(255,255,255,0.5)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating: Open now */}
          <motion.div
            className="absolute left-5 top-6 flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-[0_20px_50px_rgba(18,14,46,0.18)] md:left-8"
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.8 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
              <Clock className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-[#0D1020]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open now
              </div>
              <div className="text-[11px] text-[#5C6490]">Closes 7:00 PM</div>
            </div>
          </motion.div>

          {/* Floating: nearby store */}
          <motion.div
            className="absolute -right-2 bottom-8 rounded-2xl bg-white p-4 shadow-[0_20px_50px_rgba(18,14,46,0.18)] md:right-6"
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <Store className="h-3.5 w-3.5" style={{ color: ACCENT }} />
              <span className="text-sm font-bold text-[#0D1020]">Mama Kemi&apos;s Kitchen</span>
            </div>
            <div className="mt-0.5 text-[11px] text-[#5C6490]">0.8km away · Jollof, ready now</div>
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open now
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero