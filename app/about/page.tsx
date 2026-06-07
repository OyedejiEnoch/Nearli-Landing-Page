"use client"

import { useRef } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Navbar from "@/sections/Navbar"
import { Footer } from "@/sections/Footer"

gsap.registerPlugin(ScrollTrigger)

const principles = [
  {
    n: "01",
    title: "Discovery over ads",
    body: "Get found by the people nearby, organically. No ad budget, no bidding wars — just a feed that surfaces what's around.",
  },
  {
    n: "02",
    title: "Live and local",
    body: "Stores show as open, nearby and ready to serve. Distance and availability sit front and centre, not buried in filters.",
  },
  {
    n: "03",
    title: "Social meets commerce",
    body: "Follow stores, like products, message the seller — then buy, all in one place. Engagement and selling, finally together.",
  },
]

const features = [
  { n: "01", title: "Discovery feed", body: "A location-based feed that puts nearby businesses in front of buyers who are actively looking." },
  { n: "02", title: "For sellers", body: "A professional storefront in minutes. No code, no designer, no monthly ad spend to stay visible." },
  { n: "03", title: "For buyers", body: "Find what's around you in seconds — open, nearby and ready to serve, right now." },
  { n: "04", title: "Fair visibility", body: "Every store gets a chance to be seen. Reach is earned by being real and being near, not by budget." },
  { n: "05", title: "Local payments", body: "Paystack, Flutterwave, bank transfer, card. Sell in naira or beyond, settle straight to your account." },
  { n: "06", title: "Built mobile-first", body: "Made for the phone in your hand. Fast on slow connections, light on data, simple to run on the go." },
]

export default function AboutPage() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        })
      })

      gsap.utils.toArray<HTMLElement>(".reveal-line").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 90%" },
        })
      })
    },
    { scope: root }
  )

  return (
    <div ref={root} className="bg-[#FDFAF6]">
      <Navbar />

      {/* ── §01 — Chapter One ── */}
      <section className="relative overflow-hidden pt-32 md:pt-40 lg:pt-44 pb-20 md:pb-28">
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          {/* Chapter labels */}
          <div className="mb-10 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B6B8A]">
              → Chapter One · About Nearli
            </span>
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B6B8A] sm:block">
              Your City · One Feed
            </span>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Headline */}
            <div className="lg:col-span-8">
              <h1 className="reveal-up font-[family-name:var(--font-fraunces)] text-5xl leading-[0.98] tracking-tight text-[#1a1a1a] sm:text-6xl lg:text-7xl xl:text-8xl">
                Your city&apos;s shops,{" "}
                <span className="italic text-[#120E2E]">finally</span> findable.
              </h1>

              <p className="reveal-up mt-10 max-w-xl text-lg leading-relaxed text-[#6B6B8A] md:text-xl">
                Nearli is a{" "}
                <span className="font-semibold text-[#1a1a1a]">local discovery platform</span> — a
                single feed where the shops, artisans and vendors around you become visible, and
                where buyers find what&apos;s nearby instead of scrolling endless ads. Built for the
                seller who&apos;d rather be making than marketing.
              </p>

              <div className="reveal-up mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
                <Link
                  href="/#cta"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#120E2E] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-2xl transition-colors hover:bg-[#0a0820]"
                >
                  Join the waitlist
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/#how-it-works"
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#1a1a1a] transition-colors hover:text-[#120E2E]"
                >
                  See how it works
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Display word */}
            <div className="lg:col-span-4 lg:pl-6 lg:text-right">
              <div className="reveal-up font-[family-name:var(--font-fraunces)] text-[7rem] font-black leading-none tracking-tight text-[#120E2E] sm:text-[9rem] lg:text-[8rem] xl:text-[10rem]">
                LOCAL
              </div>
              <div className="reveal-line ml-auto mt-6 h-px w-40 bg-[#C5BFDA] lg:ml-auto" />
              <p className="reveal-up mt-6 max-w-xs text-base leading-relaxed text-[#6B6B8A] lg:ml-auto">
                One feed for everything around you. Open to every business, free to start, built for
                the way your city actually shops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Manifesto ── */}
      <section className="border-y border-[#C5BFDA] bg-[#F0EBE2] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <span className="reveal-up block text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B6B8A]">
            Manifesto · §01
          </span>
          <p className="reveal-up mt-10 font-[family-name:var(--font-fraunces)] text-3xl leading-[1.15] tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl">
            The next great marketplace will be{" "}
            <span className="italic text-[#120E2E]">local</span> — one that lifts the shop down your
            street as much as the brand across the world.{" "}
            <span className="text-[#9a96aa]">
              Discovery for everyone. Distance as an advantage. Your name on the map.
            </span>
          </p>
          <div className="reveal-up mt-12 text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B6B8A]">
            — Nearli, 2026
          </div>
        </div>
      </section>

      {/* ── §02 — What local-first means (dark) ── */}
      <section className="bg-[#120E2E] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="reveal-up block text-[11px] font-bold uppercase tracking-[0.25em] text-[#C5BFDA]">
            → §02 · What local-first means
          </span>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <h2 className="reveal-up font-[family-name:var(--font-fraunces)] text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Not a marketplace that <span className="italic text-[#C5BFDA]">buries</span> small
              sellers. A feed built to <span className="italic text-[#C5BFDA]">surface</span> them.
            </h2>

            <div className="flex items-start">
              <p className="reveal-up text-base leading-relaxed text-[#b6b2c4] md:text-lg">
                Big platforms reward big ad budgets. Nearli rewards being real and being near. Our
                discovery feed shows buyers what&apos;s around them — open now, ready to serve — so a
                first-week store gets the same shot as one that&apos;s been around for years. No ads
                to buy your way in. Just your products, your city, and the people in it.
              </p>
            </div>
          </div>

          {/* Numbered principles */}
          <div className="mt-16 border-t border-white/10 md:mt-24">
            {principles.map((p) => (
              <div
                key={p.n}
                className="reveal-up grid grid-cols-1 gap-4 border-b border-white/10 py-8 md:grid-cols-12 md:gap-10 md:py-10"
              >
                <div className="md:col-span-1">
                  <span className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#C5BFDA]">
                    {p.n}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {p.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-base leading-relaxed text-[#b6b2c4]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §03 — What's inside (editorial grid) ── */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-16 max-w-2xl lg:mb-24">
            <span className="reveal-up block text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B6B8A]">
              → §03 · What&apos;s inside
            </span>
            <h2 className="reveal-up mt-8 font-[family-name:var(--font-fraunces)] text-4xl leading-[1.05] tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Everything a small business needs to be{" "}
              <span className="italic text-[#120E2E]">found</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-20">
            {features.map((f) => (
              <div key={f.n} className="reveal-up group">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6B8A]">
                  {f.n} · §03
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl tracking-tight text-[#1a1a1a]">
                  {f.title}
                </h3>
                <div className="reveal-line mt-4 h-px w-16 bg-[#120E2E] transition-all duration-500 group-hover:w-28" />
                <p className="mt-6 text-base leading-relaxed text-[#6B6B8A]">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Made in Lagos ── */}
      <section className="border-t border-[#C5BFDA] bg-[#F0EBE2] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <span className="reveal-up block text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B6B8A]">
                → The origin
              </span>
              <h2 className="reveal-up mt-6 font-[family-name:var(--font-fraunces)] text-4xl leading-[1.02] tracking-tight text-[#1a1a1a] sm:text-5xl">
                Made in <span className="italic text-[#120E2E]">Lagos</span>. Built for everywhere.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="reveal-up text-lg leading-relaxed text-[#6B6B8A]">
                We watched brilliant sellers — bakers, tailors, jewellers, traders — pour hours into
                WhatsApp statuses and Instagram posts just to reach the handful of people who already
                knew them. Meanwhile buyers a street away had no way to find them. The talent was
                everywhere; the discovery wasn&apos;t.
              </p>
              <p className="reveal-up mt-6 text-lg leading-relaxed text-[#6B6B8A]">
                Nearli is our answer. Start in Lagos, built for any city — a feed that makes every
                small business visible to the people right around it, and gives every entrepreneur a
                fair shot at being found.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#120E2E] py-24 text-center md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="reveal-up font-[family-name:var(--font-fraunces)] text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to be <span className="italic text-[#C5BFDA]">discovered</span>?
          </h2>
          <p className="reveal-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#b6b2c4]">
            Join the waitlist and be one of the first businesses on Nearli when we launch.
          </p>
          <div className="reveal-up mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#120E2E] shadow-lg transition-colors hover:bg-[#EDE8FF]"
            >
              Join the waitlist
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-wide text-[#C5BFDA] transition-colors hover:text-white"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
