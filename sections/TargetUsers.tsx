"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// NOTE: heroImg1–4 are the original (now unused) hero photos, reused here as
// real local imagery. Swap any card's `image` to better match the persona.
const users = [
  {
    number: '01',
    title: 'Solo entrepreneurs',
    examples: 'Home bakers · Beauty sellers · Clothing resellers',
    image: '/assets/heroImg1.jpg',
  },
  {
    number: '02',
    title: 'Creators & makers',
    examples: 'Jewelry makers · Artists · Handcraft artisans',
    image: '/assets/heroImg2.jpg',
  },
  {
    number: '03',
    title: 'Small retail',
    examples: 'Boutiques · Local shops · Pop-up vendors',
    image: '/assets/heroImg3.jpg',
  },
  {
    number: '04',
    title: 'Informal vendors',
    examples: 'Market traders · Street vendors · Side hustlers',
    image: '/assets/heroImg4.jpg',
  },
];

export function TargetUsers() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.tgt-head > *', {
          opacity: 0,
          y: 16,
          duration: 0.6,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 82%' },
        });

        gsap.from('.tgt-card', {
          opacity: 0,
          y: 34,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.tgt-gallery', start: 'top 82%' },
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="targetUsers"
      className="overflow-hidden bg-[#0A0B12] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header — centered */}
        <div className="tgt-head mx-auto mb-16 max-w-2xl text-center lg:mb-20">
          <div className="mb-6 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#FF5A4D]">
            <span className="h-px w-8 bg-[#FF5A4D]" />
            09 — Who it&apos;s for
          </div>
          <h2 className="font-[family-name:var(--font-bricolage)] text-4xl font-black leading-[1.0] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built for every kind of{' '}
            <span className="font-[family-name:var(--font-playfair)] font-normal italic text-[#FF5A4D]">
              seller.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
            Just starting or ready to scale — if you make it, grow it, or sell it, there&apos;s a place
            for you on Ahiver.
          </p>
        </div>

        {/* Gallery — tall editorial cards */}
        <div className="tgt-gallery grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <a
              key={user.number}
              href="https://app.ahiver.com/"
              className="tgt-card group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={user.image}
                alt={user.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.06]"
              />
              {/* Scrim */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060B] via-[#05060B]/35 to-transparent" />

              {/* Index */}
              <span className="absolute left-4 top-4 font-mono text-[11px] font-bold tracking-[0.2em] text-[#FF7A6F]">
                {user.number}
              </span>

              {/* Hover arrow */}
              <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#FF5A4D] group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>

              {/* Identity */}
              <div className="absolute inset-x-5 bottom-5">
                <h3 className="font-[family-name:var(--font-bricolage)] text-xl font-bold leading-tight tracking-tight text-white">
                  {user.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">{user.examples}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
