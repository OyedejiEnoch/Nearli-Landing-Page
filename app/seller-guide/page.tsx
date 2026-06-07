"use client"

import { useRef } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowRight,
  Check,
  MapPin,
  Store,
  MessageCircle,
  Lightbulb,
  Info,
  AlertCircle,
  CheckCircle2,
} from "lucide-react"
import Navbar from "@/sections/Navbar"
import { Footer } from "@/sections/Footer"

gsap.registerPlugin(ScrollTrigger)

type Callout = { type: "tip" | "note" | "important"; text: string }

const whatIsNearli = [
  {
    icon: Store,
    title: "Get discovered",
    body: "Customers within walking distance can find your store.",
  },
  {
    icon: MapPin,
    title: "Sell what you have",
    body: "List products with photos and prices. Buyers see your real inventory.",
  },
  {
    icon: MessageCircle,
    title: "Chat directly",
    body: "Buyers message you in the app. No middlemen. No commission.",
  },
]

const steps: {
  title: string
  desc: string
  todo: string[]
  callout: Callout
}[] = [
  {
    title: "Create your account",
    desc: "Open Nearli and tap 'Create Account'. Enter your name, email, and a password. Choose your state, then enable location so the app knows what businesses are near you.",
    todo: ["Fill in name, email, password", "Select your state", "Enable location access"],
    callout: {
      type: "tip",
      text: "Use your real email — you'll receive a 6-digit verification code on it when you set up your store.",
    },
  },
  {
    title: "Upload a profile photo",
    desc: "After your account is created you'll set up your profile. Upload a clear photo and choose a username so the community can recognise you.",
    todo: ["Upload a clear profile photo", "Pick a unique username"],
    callout: {
      type: "tip",
      text: "A clear face photo gets 3x more profile clicks than a logo or no photo at all. Use natural daylight.",
    },
  },
  {
    title: "Add a bio and location — or skip",
    desc: "Write a short bio about what you sell, add a website link if you have one, and enter your city. Tap 'Complete Profile' when done — or tap 'Skip for now' to go straight in.",
    todo: ["Short bio (optional)", "Website + city", "Or tap 'Skip for now'"],
    callout: {
      type: "note",
      text: "You can always come back and edit your bio later from your profile settings.",
    },
  },
  {
    title: "Explore the home page",
    desc: "You're inside the app. The Home tab shows curated stores near your location — fashion, food, electronics and more. Browse to see how customers will discover you once your store is live.",
    todo: ["Browse curated stores", "See stores near your location"],
    callout: {
      type: "note",
      text: "Take a few minutes to scroll the feed. This is exactly what buyers will see when they look for businesses near you.",
    },
  },
  {
    title: "Open your profile and tap 'Become a Seller'",
    desc: "Tap the Profile icon at the bottom right. On your profile page you'll see a button — 'Become a Seller'. Tap it. This starts setting up your business on Nearli.",
    todo: ["Tap the profile icon — bottom right", "Tap the 'Become a Seller' button"],
    callout: {
      type: "important",
      text: "This is the most important button in the app. Everything to do with your business starts here.",
    },
  },
  {
    title: "Register your business",
    desc: "Fill in your business details: business name, a short description, your business email, and type of business (sole, partnership, etc). A 6-digit code will be sent to your business email — enter it to confirm. Step 1 of 3.",
    todo: ["Business name + description", "Business email + type", "Enter the 6-digit OTP"],
    callout: {
      type: "tip",
      text: "Check your inbox and spam folder for the 6-digit code. It expires in 10 minutes — if it does, just request a new one.",
    },
  },
  {
    title: "Create your storefront",
    desc: "Set up the page customers will actually see. Add your store name, choose a category, write a short description, then add your contact and location info. This is how your brand shows up to people nearby.",
    todo: ["Store name + category", "Store description", "Contact details and location"],
    callout: {
      type: "tip",
      text: "A store with a clear logo and a 1-line description gets far more clicks. Make your description easy to scan in 3 seconds.",
    },
  },
  {
    title: "Welcome to your seller dashboard",
    desc: "Once your store is live, you'll land in your seller dashboard. The Home tab shows Today's Pulse — how many people have seen your store, how it's growing, and quick shortcuts to add products, post, and chat.",
    todo: ["See Today's Pulse", "Track your store views", "Tap the + to create"],
    callout: {
      type: "note",
      text: "Check your dashboard every morning. It tells you exactly how your business is growing — like a quick daily report.",
    },
  },
  {
    title: "Add your products",
    desc: "Tap the Products tab to see your listings. Use the big '+ Add Product' button at the top to add a new item — upload clear photos, set a name, price, category, and stock quantity, then publish. List as many as you want.",
    todo: ["Tap '+ Add Product'", "Upload photos, name, price", "Add category and stock count"],
    callout: {
      type: "tip",
      text: "Use bright, clear photos. Customers buy what they can see clearly. Natural daylight near a window beats indoor lighting.",
    },
  },
  {
    title: "Make your first post",
    desc: "Posts are how customers discover you in their feed. Tap 'NEW POST' on the Feed tab, upload a photo or video, write a caption, tag a product from your inventory, and publish. Likes and comments show right on this page.",
    todo: ["Tap 'NEW POST'", "Add photo/video + caption", "Tag a product from your inventory"],
    callout: {
      type: "important",
      text: "Once published, customers near your store see your post in their feed immediately. Post regularly — daily is ideal — for maximum visibility.",
    },
  },
]

const growthTips = [
  {
    n: "1",
    title: "Post every day",
    body: "The more you post, the more people in your city see your store. Even one product photo a day makes a real difference.",
  },
  {
    n: "2",
    title: "Tag your products",
    body: "Every post should tag a real product from your inventory. Customers see the price and tap straight to buy.",
  },
  {
    n: "3",
    title: "Reply fast",
    body: "Buyers who get replies within an hour are 4x more likely to buy. Treat every message like a real customer at your shop.",
  },
  {
    n: "4",
    title: "Share your store link",
    body: "Drop your Nearli store link on WhatsApp Status and Instagram bio. Bring your existing customers in — they'll follow you here.",
  },
]

const calloutStyles: Record<
  Callout["type"],
  { label: string; icon: typeof Lightbulb; wrap: string; iconColor: string; label_color: string }
> = {
  tip: {
    label: "Tip",
    icon: Lightbulb,
    wrap: "bg-[#F3EEFC] border-l-4 border-[#120E2E]",
    iconColor: "text-[#120E2E]",
    label_color: "text-[#120E2E]",
  },
  note: {
    label: "Note",
    icon: Info,
    wrap: "bg-[#F0EBE2] border-l-4 border-[#6B6B8A]",
    iconColor: "text-[#6B6B8A]",
    label_color: "text-[#6B6B8A]",
  },
  important: {
    label: "Important",
    icon: AlertCircle,
    wrap: "bg-[#FBEEDD] border-l-4 border-[#F97316]",
    iconColor: "text-[#F97316]",
    label_color: "text-[#c2620f]",
  },
}

function CalloutBox({ callout }: { callout: Callout }) {
  const s = calloutStyles[callout.type]
  const Icon = s.icon
  return (
    <div className={`mt-6 rounded-r-xl rounded-l-sm p-5 ${s.wrap}`}>
      <div className="mb-1.5 flex items-center gap-2">
        <Icon className={`h-4 w-4 ${s.iconColor}`} />
        <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${s.label_color}`}>
          {s.label}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-[#555]">{callout.text}</p>
    </div>
  )
}

export default function SellerGuidePage() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        })
      })
    },
    { scope: root }
  )

  return (
    <div ref={root} className="bg-[#FDFAF6]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#120E2E] pt-32 md:pt-40 lg:pt-44 pb-20 md:pb-28">
        {/* soft glows */}
        <div
          className="pointer-events-none absolute right-[-8%] top-[-10%] h-[420px] w-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(158,94,240,0.35), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C5BFDA]">
            The Official Seller Guide
          </span>
          <h1 className="reveal-up mt-6 max-w-3xl font-[family-name:var(--font-fraunces)] text-5xl leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Set up your store on Nearli.
          </h1>
          <div className="mt-5 h-1 w-20 rounded-full bg-[#9E5EF0]" />
          <p className="reveal-up mt-8 max-w-xl text-lg leading-relaxed text-[#b6b2c4]">
            Get discovered by customers near you — in 10 simple steps. This guide walks you through
            every screen, from signing up to your first product post.
          </p>

          {/* Stat trio */}
          <div className="reveal-up mt-12 grid max-w-2xl grid-cols-3 gap-4">
            {[
              { big: "10", small: "Simple steps" },
              { big: "15 min", small: "Total setup time" },
              { big: "Free", small: "To get started" },
            ].map((s) => (
              <div
                key={s.small}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
              >
                <div className="font-[family-name:var(--font-fraunces)] text-3xl font-bold text-white sm:text-4xl">
                  {s.big}
                </div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#C5BFDA]">
                  {s.small}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is Nearli ── */}
      <section className="border-b border-[#C5BFDA] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="reveal-up block text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B6B8A]">
            → What is Nearli
          </span>
          <h2 className="reveal-up mt-6 max-w-2xl font-[family-name:var(--font-fraunces)] text-4xl leading-[1.05] tracking-tight text-[#1a1a1a] sm:text-5xl">
            Your business, found by the customers near you.
          </h2>
          <p className="reveal-up mt-6 max-w-2xl text-lg leading-relaxed text-[#6B6B8A]">
            Nearli is a location-based marketplace built for Nigerian business owners. People near you
            scroll a live feed of local businesses, find what you sell, and message you directly. No
            ads. No algorithm burying you. Just visibility to people in your city.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#C5BFDA] bg-[#C5BFDA] md:grid-cols-3">
            {whatIsNearli.map(({ icon: Icon, title, body }) => (
              <div key={title} className="reveal-up bg-white p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#120E2E]">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#1a1a1a]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B8A]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The 10 steps (timeline) ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-16">
            <span className="reveal-up block text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B6B8A]">
              → The walkthrough
            </span>
            <h2 className="reveal-up mt-6 font-[family-name:var(--font-fraunces)] text-4xl leading-[1.05] tracking-tight text-[#1a1a1a] sm:text-5xl">
              From sign-up to your first post.
            </h2>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-6 top-3 bottom-3 w-px bg-[#C5BFDA] md:left-8"
              aria-hidden="true"
            />

            <ol className="space-y-12 md:space-y-16">
              {steps.map((step, i) => (
                <li key={i} className="reveal-up relative pl-20 md:pl-24">
                  {/* number node */}
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#120E2E] shadow-lg md:h-16 md:w-16">
                    <span className="font-[family-name:var(--font-fraunces)] text-lg font-bold text-white md:text-2xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6B8A]">
                    Step {i + 1} of 10
                  </div>
                  <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl leading-tight tracking-tight text-[#1a1a1a] md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#555]">{step.desc}</p>

                  {/* what you'll do */}
                  <div className="mt-6">
                    <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6B8A]">
                      What you&apos;ll do
                    </div>
                    <ul className="flex flex-wrap gap-2.5">
                      {step.todo.map((t) => (
                        <li
                          key={t}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#1a1a1a] shadow-sm ring-1 ring-[#C5BFDA]/60"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#9E5EF0]" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <CalloutBox callout={step.callout} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── You're live ── */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal-up overflow-hidden rounded-3xl bg-[#120E2E] p-8 md:p-12">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#9E5EF0]">
                <Check className="h-7 w-7 text-white" strokeWidth={3} />
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-fraunces)] text-3xl tracking-tight text-white md:text-4xl">
                  Your store is live.
                </h2>
                <p className="mt-2 text-base text-[#b6b2c4]">
                  Customers near you can now discover your business.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Profile set", "Store created", "Product listed", "First post live"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#C5BFDA] ring-1 ring-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Grow faster tips ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="reveal-up block text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B6B8A]">
            → Grow faster
          </span>
          <h2 className="reveal-up mt-6 max-w-2xl font-[family-name:var(--font-fraunces)] text-4xl leading-[1.05] tracking-tight text-[#1a1a1a] sm:text-5xl">
            4 tips to get your first customer this week.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {growthTips.map((tip) => (
              <div
                key={tip.n}
                className="reveal-up rounded-2xl border border-[#C5BFDA] bg-white p-7 md:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3EEFC] font-[family-name:var(--font-fraunces)] text-lg font-bold text-[#9E5EF0]">
                    {tip.n}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">{tip.title}</h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-[#6B6B8A]">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F0EBE2] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="reveal-up font-[family-name:var(--font-fraunces)] text-4xl leading-[1.05] tracking-tight text-[#1a1a1a] sm:text-5xl">
            Ready to set up your store?
          </h2>
          <p className="reveal-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B8A]">
            Join the waitlist and be one of the first businesses live on Nearli when we launch.
          </p>
          <div className="reveal-up mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#120E2E] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-2xl transition-colors hover:bg-[#0a0820]"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="mailto:hello@nearli.com"
              className="text-sm font-semibold uppercase tracking-wide text-[#120E2E] transition-colors hover:underline"
            >
              Need help? hello@nearli.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
