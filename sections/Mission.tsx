"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Store, MapPin } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
    });

    tl.from('.mission-eyebrow', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' });
    tl.from('.mission-heading', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.2');
    tl.from('.mission-body', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' }, '-=0.25');
    tl.from('.mission-cta', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' }, '-=0.25');
    tl.from('.mission-visual', { opacity: 0, scale: 0.97, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4');
    tl.from('.mission-float', {
      opacity: 0,
      y: 12,
      scale: 0.94,
      duration: 0.4,
      stagger: 0.1,
      ease: 'power3.out',
    }, '-=0.3');
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="mission"
      className="overflow-hidden bg-white py-24 md:py-28 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div>
            <div
              className="mission-eyebrow mb-5 text-xs font-semibold uppercase tracking-[0.4em]"
              style={{ color: '#FF5A4D' }}
            >
              06 — Our mission
            </div>
            <h2 className="mission-heading text-4xl leading-[1.02] tracking-tight text-[#0D1020] sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-bricolage)]">
              Stores around the{' '}
              <span
                className="italic font-normal font-[family-name:var(--font-playfair)]"
                style={{ color: '#FF5A4D' }}
              >
                corner.
              </span>
            </h2>
            <p className="mission-body mt-8 max-w-md text-base leading-relaxed text-[#5C6490] md:text-lg">
              Nigeria is full of incredible businesses — most of them invisible online. Ahiver puts
              them on the map: a single feed where the shops, makers and vendors around you finally
              get found.
            </p>
            <div className="mission-cta mt-10">
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0D1020] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#23283f]"
              >
                Explore how it works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <p className="mission-body mt-8 text-sm text-[#8F97BB]">
              Built in Nigeria — for every city, every street, every business.
            </p>
          </div>

          {/* Right — image + floating cards */}
          <div className="mission-visual relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E2E6F0] shadow-[0_40px_80px_-30px_rgba(13,16,32,0.25)]">
              <img
                src="/assets/mission.jpg"
                alt="Shopping local on Ahiver"
                className="h-[440px] w-full object-cover md:h-[520px]"
              />

              {/* Nearby pill (glass) */}
              <div className="mission-float absolute left-1/2 top-8 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full" style={{ background: '#FF5A4D' }} />
                <span className="text-xs font-bold uppercase tracking-widest">Near you</span>
              </div>
            </div>

            {/* Floating card 1 */}
            <div className="mission-float absolute -left-3 top-16 flex items-center gap-3 rounded-2xl border border-[#E2E6F0] bg-white p-3.5 shadow-[0_20px_50px_rgba(13,16,32,0.12)] md:-left-6">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: '#E0EBFF' }}
              >
                <Store className="h-5 w-5" style={{ color: '#1E40AF' }} />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0D1020]">Local stores</div>
                <div className="text-[11px] text-[#5C6490]">on your street</div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="mission-float absolute -right-3 bottom-16 rounded-2xl border border-[#E2E6F0] bg-white p-4 shadow-[0_20px_50px_rgba(13,16,32,0.12)] md:-right-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" style={{ color: '#FF5A4D' }} />
                <span className="text-sm font-bold text-[#0D1020]">Amaka&apos;s Fabrics</span>
              </div>
              <div className="mt-0.5 text-[11px] text-[#5C6490]">0.3km away</div>
              <span
                className="mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                style={{ background: '#DCF5EE', color: '#0F8A66' }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#12A67C' }} />
                Open now
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
