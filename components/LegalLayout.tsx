"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/sections/Navbar"
import { Footer } from "@/sections/Footer"

export type LegalSection = {
  heading: string
  body: React.ReactNode
}

const otherPages = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Refund Policy", href: "/legal/refunds" },
]

export default function LegalLayout({
  title,
  lastUpdated,
  intro,
  sections,
  currentHref,
}: {
  title: string
  lastUpdated: string
  intro?: React.ReactNode
  sections: LegalSection[]
  currentHref: string
}) {
  return (
    <div className="bg-[#FDFAF6]">
      <Navbar />

      {/* Header */}
      <section className="border-b border-[#C5BFDA] pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6B6B8A] transition-colors hover:text-[#120E2E]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>
          <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-4xl leading-[1.02] tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-sm font-medium uppercase tracking-widest text-[#6B6B8A]">
            Last updated · {lastUpdated}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
          {/* Sidebar nav (other legal pages) */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6B8A]">
                Legal
              </div>
              <ul className="mt-4 space-y-1 border-l border-[#C5BFDA]">
                {otherPages.map((p) => {
                  const active = p.href === currentHref
                  return (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className={`-ml-px block border-l-2 py-2 pl-4 text-sm transition-colors ${
                          active
                            ? "border-[#120E2E] font-semibold text-[#120E2E]"
                            : "border-transparent text-[#6B6B8A] hover:border-[#C5BFDA] hover:text-[#120E2E]"
                        }`}
                      >
                        {p.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <article className="lg:col-span-9">
            {intro && (
              <p className="mb-12 text-lg leading-relaxed text-[#555]">{intro}</p>
            )}

            <div className="space-y-12">
              {sections.map((s, i) => (
                <div key={i} className="scroll-mt-28">
                  <h2 className="mb-4 flex items-baseline gap-3 text-xl font-bold tracking-tight text-[#1a1a1a] md:text-2xl">
                    <span className="font-[family-name:var(--font-fraunces)] text-base font-semibold text-[#C5BFDA]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.heading}
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#555] [&_a]:font-medium [&_a]:text-[#120E2E] [&_a]:underline [&_li]:ml-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                    {s.body}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact footer */}
            <div className="mt-16 rounded-2xl border border-[#C5BFDA] bg-white p-6 md:p-8">
              <h3 className="font-[family-name:var(--font-fraunces)] text-xl text-[#1a1a1a]">
                Questions about this policy?
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[#555]">
                Reach us any time at{" "}
                <a
                  href="mailto:oyedejienoch@gmail.com"
                  className="font-medium text-[#120E2E] underline"
                >
                  oyedejienoch@gmail.com
                </a>{" "}
                and we&apos;ll get back to you.
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}
