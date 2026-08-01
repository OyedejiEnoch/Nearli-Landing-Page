"use client";
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const APP_URL = 'https://app.ahiver.com/';

export function Cta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 85%' },
    });

    tl.from('.cta-eyebrow', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' });
    tl.from('.cta-heading', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.2');
    tl.from('.cta-desc', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' }, '-=0.25');
    tl.from('.cta-actions', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.25');

    // Trust strip animates independently when scrolled into view (own trigger,
    // NOT nested inside the timeline — nesting scrollTrigger inside tl.from
    // sets opacity:0 immediately and often never plays).
    gsap.from('.trust-item', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.trust-indicators', start: 'top 90%' },
    });

    // Magnetic primary button
    const el = btnRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power3.out' });
    };
    const handleLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, { scope: containerRef });

  return (
    <section
      id="cta"
      ref={containerRef}
      className="overflow-hidden bg-white py-24 md:py-28 lg:py-32"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="cta-eyebrow mb-5 text-xs font-semibold uppercase tracking-[0.4em]"
            style={{ color: '#FF5A4D' }}
          >
            Ahiver is live
          </div>

          <h2 className="cta-heading text-4xl leading-[1.02] tracking-tight text-[#0D1020] sm:text-5xl lg:text-6xl xl:text-7xl font-black font-[family-name:var(--font-bricolage)]">
            Ready to be{' '}
            <span
              className="italic font-normal font-[family-name:var(--font-playfair)]"
              style={{ color: '#FF5A4D' }}
            >
              discovered?
            </span>
          </h2>

          <p className="cta-desc mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5C6490] md:text-lg">
            Set up your store in minutes and start reaching customers near you — free to start, no ads
            required.
          </p>

          {/* Actions */}
          <div className="cta-actions mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div ref={btnRef} className="magnetic-btn w-full sm:w-auto">
              <a
                href={APP_URL}
                style={{ touchAction: 'manipulation' }}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0D1020] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-colors hover:bg-[#070912] sm:w-auto"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <a
              href="/seller-guide"
              style={{ touchAction: 'manipulation' }}
              className="group inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#0D1020] transition-colors hover:text-[#0D1020]"
            >
              Read the seller guide
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust strip */}
          <div className="trust-indicators mt-24 border-t border-[#E2E6F0] pt-16">
            <div className="grid gap-12 text-center md:grid-cols-3">
              {[
                { big: 'Free to start', small: 'No upfront costs or hidden fees' },
                { big: '5-min setup', small: 'From signup to first product' },
                { big: 'Nationwide', small: 'Available across Nigeria' },
              ].map((item, i) => (
                <div
                  key={item.big}
                  className={`trust-item ${i === 1 ? 'md:border-x md:border-[#E2E6F0]' : ''}`}
                >
                  <div className="mb-3 text-2xl font-black uppercase tracking-tight text-[#0D1020] font-[family-name:var(--font-bricolage)]">
                    {item.big}
                  </div>
                  <div className="text-xs font-bold uppercase leading-loose tracking-widest text-[#5C6490]">
                    {item.small}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
