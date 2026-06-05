"use client"

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Nearli', href: '#unique' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const scrollToCta = () => {
    setMobileOpen(false)
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuRef.current || !mobileOpen) return
    gsap.fromTo(
      mobileMenuRef.current,
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
    )
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#e5e5e5] shadow-sm'
          : 'bg-[#F8F7F4]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav className="w-full px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 bg-[#0F2854] rounded-md flex items-center justify-center shrink-0 group-hover:bg-[#1a3a6e] transition-colors duration-200">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="2.5" fill="white" />
                <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.2" opacity="0.5" />
              </svg>
            </div>
            <span
              className="text-xl font-bold tracking-tight text-[#0F2854] font-[family-name:var(--font-barlow)]"
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
                className="text-sm text-[#555] hover:text-[#0F2854] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={scrollToCta}
              size="sm"
              className="px-6 py-5 bg-[#0F2854] hover:bg-[#0a1c3a] text-white text-xs font-semibold tracking-wide uppercase rounded-lg transition-colors"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-1 text-[#555] hover:text-[#0F2854] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white border-t border-[#e5e5e5] px-4 pb-6 pt-2 shadow-lg"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-2 text-sm font-medium text-[#555] hover:text-[#0F2854] border-b border-[#f0f0f0] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button
                onClick={scrollToCta}
                className="w-full bg-[#0F2854] hover:bg-[#0a1c3a] text-white text-xs font-semibold tracking-wide uppercase rounded-lg py-5 transition-colors"
              >
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
