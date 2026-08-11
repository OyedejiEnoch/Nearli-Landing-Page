"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  MapPin,
  Palette,
  Store,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Create your business',
    description: 'Tell us who you are and verify your business in a few minutes.',
    icon: Store,
    done: true,
  },
  {
    number: '02',
    title: 'Build your storefront',
    description: 'Add the details buyers need to understand what you offer.',
    icon: Store,
    done: true,
  },
  {
    number: '03',
    title: 'Set your location',
    description: 'Show nearby customers where to find you and when you are open.',
    icon: MapPin,
    done: true,
  },
  {
    number: '04',
    title: 'Make it yours',
    description: 'Add your logo, banner, and visual details so your shop feels like you.',
    icon: Palette,
    current: true,
  },
  {
    number: '05',
    title: 'Publish and get found',
    description: 'Review your storefront, then start reaching people nearby.',
    icon: CheckCircle2,
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>('[data-how-reveal]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      gsap.set(items, { opacity: 1, y: 0, x: 0 });
      return;
    }

    gsap.from(items, {
      opacity: 0,
      y: 18,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 78%',
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="overflow-hidden border-y border-[#E2E6F0] bg-white py-24 md:py-32"
    >
      <div className="container mx-auto px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center" data-how-reveal>
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#3B82F6]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A4D]" aria-hidden="true" />
            02 - How it works
          </div>
          <h2 className="font-[family-name:var(--font-bricolage)] text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0D1020] sm:text-5xl md:text-6xl">
            Set up once.{' '}
            <span className="font-[family-name:var(--font-playfair)] font-normal italic text-[#FF5A4D]">
              Get found nearby.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#5C6490] md:text-lg">
            Turn what makes your business special into a storefront your neighbourhood can discover, trust, and return to.
          </p>
        </div>

        <div
          ref={revealRef}
          className="mx-auto mt-16 grid max-w-6xl gap-12 lg:mt-24 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-20"
        >
          <div data-how-reveal>
            <div className="mb-8 max-w-md">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
                Your storefront, step by step
              </p>
              <h3 className="font-[family-name:var(--font-bricolage)] text-3xl font-black leading-tight tracking-[-0.025em] text-[#0D1020] md:text-4xl">
                Everything you need to look established from day one.
              </h3>
            </div>

            <ol className="border-t border-[#DCE1EC]">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <li
                    key={step.number}
                    className={`group border-b border-[#DCE1EC] py-5 ${step.current ? 'border-l-2 border-l-[#3B82F6] pl-4' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-8 shrink-0 pt-0.5 font-mono text-[11px] font-bold tracking-[0.16em] text-[#929AB7]">
                        {step.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h4 className={`font-[family-name:var(--font-bricolage)] text-base font-bold ${step.current ? 'text-[#0D1020]' : 'text-[#303852]'}`}>
                            {step.title}
                          </h4>
                          {step.current && (
                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3B82F6]">
                              In progress
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 max-w-md text-sm leading-6 text-[#737C9C]">
                          {step.description}
                        </p>
                      </div>
                      <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${step.done ? 'bg-[#12A67C] text-white' : step.current ? 'bg-[#E0EBFF] text-[#3B82F6]' : 'bg-[#E8EBF3] text-[#9AA2BC]'}`}>
                        {step.done ? <Check className="h-4 w-4" strokeWidth={3} /> : <Icon className="h-4 w-4" strokeWidth={1.8} />}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="https://app.ahiver.com/"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0D1020] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#252B43]"
                style={{ touchAction: 'manipulation' }}
              >
                Get started free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#737C9C]">
                <Clock3 className="h-4 w-4 text-[#3B82F6]" />
                About 5 minutes
              </span>
            </div>
          </div>

          <div className="relative" data-how-reveal>
            <div className="mb-3 flex items-center justify-between px-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#929AB7]">
              <span>Ahiver setup</span>
              <span className="text-[#3B82F6]">4 of 5 complete</span>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#DCE1EC] bg-white p-5 shadow-[0_24px_60px_rgba(13,16,32,0.10)] sm:p-8">
              <div className="flex items-center justify-between border-b border-[#E8EBF3] pb-5">
                <div>
                  <p className="font-[family-name:var(--font-bricolage)] text-lg font-bold text-[#0D1020]">Build your storefront</p>
                  <p className="mt-1 text-sm text-[#737C9C]">A few details make all the difference.</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E0EBFF] text-[#3B82F6]">
                  <Store className="h-5 w-5" strokeWidth={1.8} />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#E8EBF3]">
                  <div className="h-full w-4/5 rounded-full bg-[#3B82F6]" />
                </div>
                <span className="text-xs font-bold text-[#303852]">80%</span>
              </div>

              <div className="mt-7 space-y-3">
                {steps.map((step) => (
                  <div
                    key={`preview-${step.number}`}
                    className={`flex items-center gap-3 border px-4 py-3 ${step.current ? 'border-[#BFD4FF] bg-[#EFF4FF]' : 'border-[#E8EBF3] bg-[#FCFCFE]'}`}
                  >
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full ${step.done ? 'bg-[#12A67C] text-white' : step.current ? 'bg-[#3B82F6] text-white' : 'bg-[#E8EBF3] text-[#929AB7]'}`}>
                      {step.done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : <span className="text-[10px] font-bold">{step.number}</span>}
                    </span>
                    <span className={`flex-1 text-sm font-semibold ${step.current ? 'text-[#0D1020]' : 'text-[#5C6490]'}`}>{step.title}</span>
                    {step.current && <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#3B82F6]">Now</span>}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-[#E8EBF3] pt-5">
                <span className="text-xs text-[#737C9C]">Your store will be visible to nearby buyers.</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12A67C]">
                  <span className="h-2 w-2 rounded-full bg-[#12A67C]" />
                  Ready soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
