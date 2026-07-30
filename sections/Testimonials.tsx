"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "I was spending hours on Instagram and WhatsApp just to reach a few customers. I needed something better — something that could help me grow beyond my contacts.",
    name: 'Amara K.',
    role: 'Jewelry Maker',
    location: 'Ibadan, Nigeria',
    initials: 'AK',
  },
  {
    quote:
      "Right now I'm only selling to people who already know me. With a solution like this, customers from across the city can find me every single day through the feed.",
    name: 'Joke M.',
    role: 'Cake Vendor',
    location: 'Abuja, Nigeria',
    initials: 'JM',
  },
  {
    quote:
      'Managing orders through DMs is a nightmare. I want a real storefront — professional, simple, and one that actually brings people in without me paying for ads.',
    name: 'Tunde A.',
    role: 'Clothing Reseller',
    location: 'Kano, Nigeria',
    initials: 'TA',
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 65%' },
    });

    tl.from('.tst-eyebrow', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' });
    tl.from('.tst-heading', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.2');
    tl.from('.tst-desc', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' }, '-=0.25');
    tl.from(cardsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
    }, '-=0.15');
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="overflow-hidden bg-[#ffffff] py-24 md:py-28 lg:py-36"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* ── Signature recipe header ── */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <div
            className="tst-eyebrow mb-5 text-xs font-semibold uppercase tracking-[0.4em]"
            style={{ color: '#FF5A4D' }}
          >
            07 — Early voices
          </div>
          <h2 className="tst-heading text-4xl leading-[1.02] tracking-tight text-[#0D1020] sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-bricolage)]">
            Real sellers,{' '}
            <span
              className="italic font-normal font-[family-name:var(--font-playfair)]"
              style={{ color: '#FF5A4D' }}
            >
              real stories.
            </span>
          </h2>
          <p className="tst-desc mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#5C6490] md:text-lg">
            We talked to entrepreneurs across Nigeria. Here&apos;s what they told us.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          {testimonials.map((t, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group flex flex-col rounded-2xl border border-[#E2E6F0] bg-white p-7 transition-colors duration-500 hover:bg-[#F6F8FD] lg:p-8"
            >
              <div
                className="mb-5 text-5xl leading-none text-[#CDD4E8] transition-colors duration-500 group-hover:text-[#FF5A4D] font-[family-name:var(--font-playfair)] italic font-normal"
              >
                &ldquo;
              </div>

              <div className="mb-5 h-px w-10 bg-[#E2E6F0] transition-all duration-700 group-hover:w-full group-hover:bg-[#0D1020]" />

              <p className="flex-1 text-base leading-relaxed text-[#1E2340] font-[family-name:var(--font-playfair)] italic font-normal">
                {t.quote}
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-[#E2E6F0] pt-6">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ background: '#0D1020' }}
                >
                  <span className="text-xs font-bold tracking-wider">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-[#0D1020]">
                    {t.name}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#5C6490]">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
