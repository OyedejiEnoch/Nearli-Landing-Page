"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import AhiverLogo from "./AhiverLogo"
import { APP_URL, SELL_URL } from "./ui"

const LINKS = [
  { href: "#find", label: "For shoppers" },
  { href: "#business", label: "For businesses" },
  { href: "#stories", label: "Stories" },
  { href: "#faq", label: "FAQ" },
]

// Transparent over the hero; a frosted ink bar once you scroll.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener("scroll", on, { passive: true })
    return () => window.removeEventListener("scroll", on)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out ${
          scrolled ? "bg-[#0B0B0C]/72 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav aria-label="Main" className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <Link href="/" aria-label="Ahiver home" className="text-white">
            <AhiverLogo height={30} />
          </Link>
          <ul className="hidden items-center gap-9 text-[15px] font-semibold text-white lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-sm opacity-90 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-3 lg:flex">
            <a href={SELL_URL} className="inline-flex h-11 items-center rounded-full border-[1.5px] border-white/40 px-5 text-[15px] font-semibold text-white transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Sell on Ahiver
            </a>
            <a href={APP_URL} className="inline-flex h-11 items-center rounded-full bg-white px-5 text-[15px] font-bold text-[#0B0B0C] transition-transform duration-150 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Open Ahiver
            </a>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/18 text-white backdrop-blur-md lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#0B0B0C] px-5 pt-28 transition-[opacity,visibility] duration-300 ease-out lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-2">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 font-[family-name:var(--font-bricolage)] text-4xl font-extrabold uppercase tracking-[-0.03em] text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-3">
          <a href={APP_URL} className="flex h-14 items-center justify-center rounded-2xl bg-white text-base font-bold text-[#0B0B0C]">Open Ahiver</a>
          <a href={SELL_URL} className="flex h-14 items-center justify-center rounded-2xl border border-white/30 text-base font-semibold text-white">Sell on Ahiver</a>
        </div>
      </div>
    </>
  )
}
