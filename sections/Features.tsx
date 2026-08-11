"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  ArrowUpRight,
  BarChart3,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: '01',
    label: 'Discovery',
    icon: MapPin,
    accent: '#FF5A4D',
    title: 'Discover any type of business near you.',
    description: 'Find restaurants, fashion stores, beauty spots, makers, artisans, and everyday services around your location.',
  },
  {
    number: '02',
    label: 'Search',
    icon: Search,
    accent: '#6D63FF',
    title: 'Search for a product and see who sells it nearby.',
    description: 'Type what you need and Ahiver shows the local businesses selling it, so you can compare options close to you.',
  },
  {
    number: '03',
    label: 'Conversation',
    icon: MessageCircle,
    accent: '#12A67C',
    title: 'Chat before you go.',
    description: 'Ask about price, size, delivery, pickup, or availability directly from the business before you make a decision.',
  },
  {
    number: '04',
    label: 'Trust',
    icon: ShieldCheck,
    accent: '#FFB547',
    title: 'Choose with better context.',
    description: 'Clear storefronts, real ratings, product details, and location cues help buyers shop from businesses they can trust.',
  },
  {
    number: '05',
    label: 'Visibility',
    icon: BarChart3,
    accent: '#8AA7FF',
    title: 'Show up when nearby buyers are ready.',
    description: 'Sellers get a simple storefront and feed presence that helps nearby customers discover what they offer.',
  },
  {
    number: '06',
    label: 'Everyday use',
    icon: Smartphone,
    accent: '#D3C8FF',
    title: 'Built for everyday neighbourhood commerce.',
    description: 'Fast, focused, and light on data, so buyers can browse quickly and sellers can keep business moving.',
  },
];

export function Features() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const motion = gsap.matchMedia();

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: containerRef.current, start: 'top 78%', once: true },
      });

      timeline
        .from('.features-eyebrow', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' })
        .from('.features-heading', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.2')
        .from('.features-desc', { opacity: 0, y: 14, duration: 0.45, ease: 'power3.out' }, '-=0.3')
        .from('.feature-item', { opacity: 0, y: 24, duration: 0.5, stagger: 0.07, ease: 'power3.out' }, '-=0.15')
        .from('.features-footer', { opacity: 0, y: 18, duration: 0.5, ease: 'power3.out' }, '-=0.2');
    });

    return () => motion.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="features"
      className="overflow-hidden bg-[#000000] text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="features-eyebrow flex items-start gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
            <span className="mt-1.5 h-px w-10 shrink-0 bg-[#FF5A4D]" />
            <span>
              <span className="text-[#FF5A4D]">03</span>
              <span className="mx-2">-</span>
              The platform
            </span>
          </div>

          <div>
            <h2 className="features-heading max-w-4xl font-[family-name:var(--font-bricolage)] text-4xl font-black leading-[0.96] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[4.7rem]">
              Everything buyers need to find,
              <span className="ml-2 font-[family-name:var(--font-playfair)] font-normal italic text-[#FF5A4D]">
                and sellers need to be found.
              </span>
            </h2>
            <p className="features-desc mt-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              Ahiver connects both sides of the local market: people can discover and search for what they need nearby, while businesses get a clearer way to show up.
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-white/15 lg:mt-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="feature-item group relative flex min-h-[300px] flex-col border-b border-white/15 p-6 transition-colors duration-300 hover:bg-white/[0.035] sm:p-8 lg:min-h-[330px] lg:p-9"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${feature.accent}1A`, color: feature.accent }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                        {feature.label}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.18em] text-white/35">{feature.number}</span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="max-w-sm font-[family-name:var(--font-bricolage)] text-xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
                      {feature.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    className="absolute bottom-8 right-8 h-5 w-5 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    style={{ color: feature.accent }}
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </div>

        <div className="features-footer mt-16 grid gap-8 border-t border-white/15 pt-7 sm:grid-cols-3 sm:gap-6">
          <div className="flex items-center gap-3 text-sm text-white/70">
            <Users className="h-4 w-4 text-[#6D63FF]" strokeWidth={1.8} />
            <span>For finding and being found</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <MapPin className="h-4 w-4 text-[#FF5A4D]" strokeWidth={1.8} />
            <span>Designed around your neighbourhood</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/70 sm:justify-self-end">
            <span className="h-2 w-2 rounded-full bg-[#12A67C]" />
            <span>Ready when the search starts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
