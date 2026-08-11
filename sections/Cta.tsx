"use client";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const APP_URL = 'https://app.ahiver.com/';

export function Cta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
        });
        tl.from('.cta-eyebrow', { opacity: 0, y: 14, duration: 0.5, ease: 'power3.out' })
          .from('.cta-heading', { opacity: 0, y: 22, duration: 0.7, ease: 'power3.out' }, '-=0.25')
          .from('.cta-desc', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.35')
          .from('.cta-actions', { opacity: 0, y: 16, duration: 0.55, ease: 'power3.out' }, '-=0.3')
          .from('.cta-trust', { opacity: 0, y: 12, duration: 0.5, ease: 'power3.out' }, '-=0.35');

        // Magnetic primary button (desktop pointers only).
        const el = btnRef.current;
        if (!el || window.matchMedia('(pointer: coarse)').matches) return;
        const handleMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: 'power3.out' });
        };
        const handleLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', handleLeave);
        return () => {
          el.removeEventListener('mousemove', handleMove);
          el.removeEventListener('mouseleave', handleLeave);
        };
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      id="cta"
      ref={containerRef}
      className="relative isolate overflow-hidden bg-black text-white"
    >
      {/* Full-bleed seller photo — swap /assets/amaka.jpg for the strongest seller shot. */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/bannerImg.jpg"
          alt="A Nigerian business owner running her shop"
          fill
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
      </div>
      {/* Scrims — bottom for the copy, left for legibility over any composition. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(180deg, rgba(5,6,11,0.35) 0%, rgba(5,6,11,0.45) 45%, rgba(5,6,11,0.94) 100%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(90deg, rgba(5,6,11,0.85) 0%, rgba(5,6,11,0.35) 42%, rgba(5,6,11,0) 70%)' }}
      />

      <div className="relative mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24">
        <div className="max-w-2xl">
          <div className="cta-eyebrow mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF7A6F]">
            <span className="h-px w-9 bg-[#FF5A4D]" />
            Are you a business owner?
          </div>

          <h2 className="cta-heading font-[family-name:var(--font-bricolage)] text-5xl font-black leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Sell now on Ahiver, and let customers{' '}
            <span className="text-[#FF5A4D]">discover you.</span>
          </h2>

          <p className="cta-desc mt-7 max-w-lg text-lg leading-relaxed text-white/75">
            Free to start — set up your storefront in minutes, right from your phone, and start
            reaching the buyers already searching nearby.
          </p>

          <div className="cta-actions mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div ref={btnRef} className="magnetic-btn w-full sm:w-auto">
              <a
                href={APP_URL}
                style={{ touchAction: 'manipulation' }}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF5A4D] px-9 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_20px_50px_-12px_rgba(255,90,77,0.6)] transition-colors hover:bg-[#F04638] sm:w-auto"
              >
                Start selling free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <a
              href="/seller-guide"
              style={{ touchAction: 'manipulation' }}
              className="group inline-flex items-center gap-2 px-2 text-sm font-semibold uppercase tracking-[0.1em] text-white/85 transition-colors hover:text-white"
            >
              Read the seller guide
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="cta-trust mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#12A67C]" />
              Free to start
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <span>5-minute setup</span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <span>No download needed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
