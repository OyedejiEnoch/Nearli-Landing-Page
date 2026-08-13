"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: containerRef.current, start: 'top 78%' },
        });

        tl.from('.mission-rail', { opacity: 0, duration: 0.5, ease: 'power2.out' })
          .from(
            '.mission-headline',
            { clipPath: 'inset(0 0 100% 0)', y: 24, duration: 0.95, ease: 'power3.out' },
            '-=0.3'
          )
          .from('.mission-lead', { opacity: 0, y: 18, duration: 0.55, ease: 'power3.out' }, '-=0.5')
          .from('.mission-body', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.35')
          .from('.mission-cta', { opacity: 0, y: 14, duration: 0.45, ease: 'power3.out' }, '-=0.3')
          .from('.mission-foot', { opacity: 0, y: 12, duration: 0.45, ease: 'power3.out' }, '-=0.3');
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="mission"
      className="overflow-hidden bg-white py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Mobile eyebrow — the vertical rail only shows from lg up. */}
        <div className="mb-10 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#A1A1AA] lg:hidden">
          Our Mission · 07
        </div>

        <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
          {/* Vertical label rail */}
          <div className="mission-rail hidden lg:flex lg:items-start lg:gap-6 lg:pt-4">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[#A1A1AA]"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Our Mission&nbsp;&nbsp;·&nbsp;&nbsp;07
            </span>
            <span className="mt-1 block h-52 w-px bg-[#E7E5E4]" aria-hidden="true" />
          </div>

          {/* Statement + supporting column */}
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start lg:gap-20">
            <h2
              className="mission-headline max-w-4xl font-normal leading-[0.98] tracking-[-0.01em] text-[#0D1020]"
              style={{
                fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
                fontSize: 'clamp(2.75rem, 7vw, 6.75rem)',
                clipPath: 'inset(0 0 0 0)',
              }}
            >
              Stores around the corner.
            </h2>

            <div className="lg:pt-3">
              <p className="mission-lead max-w-md text-xl leading-[1.45] text-[#0D1020] md:text-[1.6rem] md:leading-[1.4]">
                Nigeria is full of incredible businesses — most of them invisible online.
              </p>
              <p className="mission-body mt-8 max-w-md text-base leading-relaxed text-[#52525B]">
                Ahiver puts them on the map: a single feed where the shops, makers and vendors around
                you finally get found.
              </p>

              <a
                href="#how-it-works"
                className="mission-cta group mt-9 inline-flex items-center gap-2 border-b border-[#0D1020] pb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#0D1020] transition-opacity hover:opacity-60"
              >
                Explore how it works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <p className="mission-foot mt-10 max-w-xs text-sm leading-relaxed text-[#A1A1AA]">
                Built in Nigeria — for every city, every street, every business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
