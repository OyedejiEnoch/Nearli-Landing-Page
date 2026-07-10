"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Store, MapPin } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ACCENT = '#FF5A4D';

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
    });

    tl.from('.mission-eyebrow', { opacity: 0, x: -20, duration: 0.6, ease: 'power2.out' });
    tl.from('.mission-heading', { opacity: 0, y: 30, duration: 0.9, ease: 'power3.out' }, '-=0.3');
    tl.from('.mission-body', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out' }, '-=0.5');
    tl.from('.mission-cta', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out' }, '-=0.5');
    tl.from('.mission-visual', { opacity: 0, scale: 0.96, y: 30, duration: 1, ease: 'expo.out' }, '-=0.7');
    tl.from('.mission-float', {
      opacity: 0,
      y: 20,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.4)',
    }, '-=0.4');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="mission" className="overflow-hidden bg-[#FDFAF6] py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div>
            <div className="mission-eyebrow mb-7 flex items-center gap-3">
              <span className="h-px w-8" style={{ background: ACCENT }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B6B8A]">
                Our Mission
              </span>
            </div>

            <h2 className="mission-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Discovery the Lagos way —{' '}
              <span style={{ color: ACCENT }}>minus</span> the endless searching.
            </h2>

            <p className="mission-body mt-8 max-w-md text-base leading-relaxed text-[#6B6B8A] md:text-lg">
              Lagos is full of incredible businesses — most of them invisible online. Nearli puts
              them on the map: a single feed where the shops, makers and vendors around you finally
              get found, and you discover what&apos;s nearby in seconds.
            </p>

            <div className="mission-cta mt-10">
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2 rounded-full bg-[#120E2E] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#0a0820]"
              >
                Explore how it works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <p className="mission-body mt-8 text-sm text-[#9a96aa]">
              Built in Lagos — for every city, every street, every business.
            </p>
          </div>

          {/* Right — image + floating cards */}
          <div className="mission-visual relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(18,14,46,0.35)]">
              <img
                src="/assets/mission.jpg"
                alt="Shopping local on Nearli"
                className="h-[440px] w-full object-cover md:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120E2E]/30 to-transparent" />

              {/* "Nearby" pill */}
              <div className="mission-float absolute left-1/2 top-8 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                <span className="h-2 w-2 rounded-full" style={{ background: ACCENT }} />
                <span className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">
                  Near you
                </span>
              </div>
            </div>

            {/* Top-left floating card */}
            <div className="mission-float absolute -left-3 top-16 flex items-center gap-3 rounded-2xl border border-[#ece9f4] bg-white p-3.5 shadow-[0_20px_50px_rgba(18,14,46,0.15)] md:-left-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3EEFC]">
                <Store className="h-5 w-5 text-[#120E2E]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#1a1a1a]">1,240 stores</div>
                <div className="text-[11px] text-[#6B6B8A]">live near you</div>
              </div>
            </div>

            {/* Bottom-right floating card */}
            <div className="mission-float absolute -right-3 bottom-16 rounded-2xl border border-[#ece9f4] bg-white p-4 shadow-[0_20px_50px_rgba(18,14,46,0.15)] md:-right-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" style={{ color: ACCENT }} />
                <span className="text-sm font-bold text-[#1a1a1a]">Amaka&apos;s Fabrics</span>
              </div>
              <div className="mt-0.5 text-[11px] text-[#6B6B8A]">0.3km away</div>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open now
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
