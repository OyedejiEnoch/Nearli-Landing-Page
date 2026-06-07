"use client"

import { Button } from '@/components/ui/button'
import { ArrowUpRight, Mail } from 'lucide-react'
import React, { useCallback, useEffect, useState } from 'react'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/#faq' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = useCallback(() => setMobileOpen(false), [])

  const scrollToCta = () => {
    closeMenu()
    const cta = document.getElementById('cta')
    if (cta) {
      cta.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#cta'
    }
  }

  const handleLinkClick = (href: string) => {
    closeMenu()
    const hashIndex = href.indexOf('#')
    const path = hashIndex >= 0 ? href.slice(0, hashIndex) : href
    const hash = hashIndex >= 0 ? href.slice(hashIndex + 1) : ''
    const onSamePage = path === '' || path === '/' ? window.location.pathname === '/' : false

    if (hash && onSamePage) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 280)
    }
    // Otherwise let the native <a> navigate to the route (e.g. /about).
  }

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body scroll lock + escape key while drawer is open
  useEffect(() => {
    if (!mobileOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [mobileOpen, closeMenu])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-[#C5BFDA] shadow-sm'
            : 'bg-[#FDFAF6]/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <nav className="w-full px-4 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group" aria-label="Nearli home">
              <div className="w-7 h-7 bg-[#120E2E] rounded-md flex items-center justify-center shrink-0 group-hover:bg-[#1e1a38] transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="2.5" fill="white" />
                  <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.2" opacity="0.5" />
                </svg>
              </div>
              <span
                className="text-xl font-bold tracking-tight text-[#120E2E] font-[family-name:var(--font-barlow)]"
                style={{ letterSpacing: '-0.02em' }}
              >
                NEARLI
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#6B6B8A] hover:text-[#120E2E] transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={scrollToCta}
                size="sm"
                className="px-6 py-5 bg-[#120E2E] hover:bg-[#0a0820] text-white text-xs font-semibold tracking-wide uppercase rounded-lg transition-colors"
              >
                Join Waitlist
              </Button>
            </div>

            {/* Mobile hamburger — animated to X */}
            <button
              className="md:hidden relative z-[130] w-11 h-11 -mr-2 flex items-center justify-center rounded-lg active:bg-black/5 transition-colors"
              style={{ touchAction: 'manipulation' }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
            >
              <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
              <span className="relative w-6 h-4 block" aria-hidden="true">
                <span
                  className="absolute left-0 top-0 w-6 h-[2px] rounded-full transition-all duration-300 ease-out"
                  style={{
                    background: mobileOpen ? '#fff' : '#120E2E',
                    transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                  }}
                />
                <span
                  className="absolute left-0 top-[7px] w-6 h-[2px] bg-[#120E2E] rounded-full transition-all duration-200 ease-out"
                  style={{ opacity: mobileOpen ? 0 : 1 }}
                />
                <span
                  className="absolute left-0 top-[14px] w-6 h-[2px] rounded-full transition-all duration-300 ease-out"
                  style={{
                    background: mobileOpen ? '#fff' : '#120E2E',
                    transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                  }}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Drawer ── */}
      {/* Scrim */}
      <div
        onClick={closeMenu}
        aria-hidden={!mobileOpen}
        className={`md:hidden fixed inset-0 z-[110] bg-[#120E2E]/50 backdrop-blur-[2px] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Panel */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`md:hidden fixed top-0 right-0 z-[120] flex h-[100dvh] w-[88%] max-w-sm flex-col bg-[#120E2E] shadow-2xl transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span
            className="text-lg font-bold tracking-tight text-white font-[family-name:var(--font-barlow)]"
            style={{ letterSpacing: '-0.02em' }}
          >
            NEARLI
          </span>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="w-11 h-11 -mr-2 flex items-center justify-center rounded-lg text-white/70 hover:text-white active:bg-white/10 transition-colors"
            style={{ touchAction: 'manipulation' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Links — editorial numbered list */}
        <nav className="flex-1 overflow-y-auto px-6 pt-6">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className="transition-all duration-300 ease-out"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
                  transitionDelay: mobileOpen ? `${120 + i * 60}ms` : '0ms',
                }}
              >
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="group flex items-center justify-between py-5 border-b border-white/10 active:opacity-60 transition-opacity"
                  style={{ touchAction: 'manipulation' }}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-bold text-[#C5BFDA] tracking-widest tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="text-2xl font-semibold text-white tracking-tight font-[family-name:var(--font-barlow)] uppercase">
                      {link.label}
                    </span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#C5BFDA] group-active:translate-x-0.5 group-active:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer — CTA + contact */}
        <div className="px-6 pt-6 pb-8 border-t border-white/10">
          <Button
            onClick={scrollToCta}
            className="w-full bg-white hover:bg-[#EDE8FF] text-[#120E2E] text-sm font-bold tracking-widest uppercase rounded-xl py-7 transition-colors shadow-lg"
            style={{ touchAction: 'manipulation' }}
          >
            Join the Waitlist
          </Button>

          <a
            href="mailto:oyedejienoch@gmail.com"
            className="mt-5 flex items-center justify-center gap-2 text-sm text-[#C5BFDA] hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            oyedejienoch@gmail.com
          </a>

          <p className="mt-4 text-center text-[10px] text-white/40 font-bold tracking-[0.2em] uppercase">
            Launching in Lagos · 2026
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar
