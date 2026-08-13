"use client"

import { Button } from '@/components/ui/button'
import { ArrowUpRight, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Seller Guide', href: '/seller-guide' },
  { label: 'FAQ', href: '/#faq' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = useCallback(() => setMobileOpen(false), [])

  const APP_URL = 'https://app.ahiver.com/'

  const goToApp = () => {
    closeMenu()
    window.location.href = APP_URL
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
            ? 'bg-white/90 backdrop-blur-md border-b border-[#E2E6F0] shadow-sm'
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        <nav className="w-full px-4 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" aria-label="Ahiver home">
              <Image
                src={"/assets/officalLogo.png"}
                alt="Logo"
                width={40}
                height={40}
                className={`transition-[filter] duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
              />
              <span
                className={`text-xl font-bold tracking-tight font-[family-name:var(--font-bricolage)] transition-colors duration-300 ${scrolled ? 'text-[#0D1020]' : 'text-white'}`}
                style={{ letterSpacing: '-0.02em' }}
              >
                AHIVER
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors font-medium ${scrolled ? 'text-[#5C6490] hover:text-[#0D1020]' : 'text-white/75 hover:text-white'}`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={goToApp}
                size="sm"
                className={`px-6 py-5 text-xs font-semibold tracking-wide uppercase rounded-lg transition-colors ${scrolled ? 'bg-[#3B82F6] hover:bg-[#2563EB] text-white' : 'bg-white hover:bg-[#F4F6FA] text-[#0D1020]'}`}
              >
                Get started
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
                    background: mobileOpen ? '#fff' : scrolled ? '#0D1020' : '#fff',
                    transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                  }}
                />
                <span
                  className={`absolute left-0 top-[7px] w-6 h-[2px] rounded-full transition-all duration-200 ease-out ${scrolled || mobileOpen ? 'bg-[#0D1020]' : 'bg-white'}`}
                  style={{ opacity: mobileOpen ? 0 : 1 }}
                />
                <span
                  className="absolute left-0 top-[14px] w-6 h-[2px] rounded-full transition-all duration-300 ease-out"
                  style={{
                    background: mobileOpen ? '#fff' : scrolled ? '#0D1020' : '#fff',
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
        className={`md:hidden fixed inset-0 z-[110] bg-[#0D1020]/50 backdrop-blur-[2px] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Panel */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`md:hidden fixed top-0 right-0 z-[120] flex h-[100dvh] w-[88%] max-w-sm flex-col bg-[#0D1020] shadow-2xl transition-transform duration-300 ease-out ${
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
            className="text-lg font-bold tracking-tight text-white font-[family-name:var(--font-bricolage)]"
            style={{ letterSpacing: '-0.02em' }}
          >
            AHIVER
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
                    <span className="text-xs font-bold text-[#E2E6F0] tracking-widest tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="text-2xl font-semibold text-white tracking-tight font-[family-name:var(--font-bricolage)] uppercase">
                      {link.label}
                    </span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#E2E6F0] group-active:translate-x-0.5 group-active:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer — CTA + contact */}
        <div className="px-6 pt-6 pb-8 border-t border-white/10">
          <Button
            onClick={goToApp}
            className="w-full bg-white hover:bg-[#E0EBFF] text-[#0D1020] text-sm font-bold tracking-widest uppercase rounded-xl py-7 transition-colors shadow-lg"
            style={{ touchAction: 'manipulation' }}
          >
            Get started
          </Button>

          <a
            href="mailto:oyedejienoch@gmail.com"
            className="mt-5 flex items-center justify-center gap-2 text-sm text-[#E2E6F0] hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            oyedejienoch@gmail.com
          </a>

          <p className="mt-4 text-center text-[10px] text-white/40 font-bold tracking-[0.2em] uppercase">
            Launching across Nigeria · 2026
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar
