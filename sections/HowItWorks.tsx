"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Business',
    description: 'Register your business — name, description, business email. Verify with a quick 6-digit code.',
    done: true,
  },
  {
    title: 'Storefront',
    description: 'Set up your storefront — category, description and how you want your brand to feel.',
    done: true,
  },
  {
    title: 'Location',
    description: 'Add your address and hours so buyers nearby can find you and see when you\'re open.',
    done: true,
  },
  {
    title: 'Branding',
    description: 'Upload your logo, a banner, and pick an accent colour. This is your shopfront.',
    current: true,
  },
  {
    title: 'Review',
    description: 'One last look, then publish. Your store goes live to everyone nearby.',
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLLIElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 65%' },
    });

    tl.from('.how-eyebrow', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' });
    tl.from('.how-heading', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.2');
    tl.from('.how-desc', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' }, '-=0.25');

    tl.from(rowsRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
    }, '-=0.15');

    tl.from('.how-cta', { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.1');
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="overflow-hidden bg-white py-24 md:py-28 lg:py-30"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* ── Signature recipe header ── */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <div
            className="how-eyebrow mb-5 text-xs font-semibold uppercase tracking-[0.4em]"
            style={{ color: '#FF5A4D' }}
          >
            02 — How it works
          </div>
          <h2 className="how-heading text-4xl leading-[1.02] tracking-tight text-[#0D1020] sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-bricolage)]">
            Make it{' '}
            <span
              className="italic font-normal font-[family-name:var(--font-playfair)]"
              style={{ color: '#FF5A4D' }}
            >
              yours.
            </span>
          </h2>
          <p className="how-desc mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#5C6490] md:text-lg">
            Five steps. A few minutes. A shopfront your neighbourhood can actually find.
          </p>
        </div>

        {/* ── Onboarding progress list (app-style) ── */}
        <ol className="mx-auto max-w-3xl">
          {steps.map((step, index) => (
            <li
              key={index}
              ref={(el) => { rowsRef.current[index] = el; }}
              className="group relative flex gap-5 pb-10 last:pb-0"
            >
              {/* connector line */}
              {index < steps.length - 1 && (
                <span
                  className="absolute left-6 top-12 h-full w-px bg-[#CDD4E8]"
                  aria-hidden="true"
                />
              )}

              {/* step node */}
              <span
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  step.done
                    ? 'bg-[#12A67C] text-white'
                    : step.current
                    ? 'bg-white text-[#0D1020] ring-2 ring-[#0D1020]'
                    : 'bg-[#E2E6F0] text-[#8F97BB]'
                }`}
                style={{ fontFamily: 'var(--font-bricolage)' }}
              >
                {step.done ? <Check className="h-5 w-5" strokeWidth={3} /> : String(index + 1).padStart(2, '0')}
              </span>

              <div className="flex-1 pt-1.5">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3
                    className={`text-xl font-black tracking-tight md:text-2xl font-[family-name:var(--font-bricolage)] ${
                      step.done || step.current ? 'text-[#0D1020]' : 'text-[#5C6490]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  {step.current && (
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
                      style={{ background: '#FF5A4D' }}
                    >
                      You are here
                    </span>
                  )}
                </div>
                <p className="mt-2 max-w-lg text-base leading-relaxed text-[#5C6490]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* ── CTA ── */}
        <div className="how-cta mt-12 flex flex-col items-center">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0D1020] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#23283f]"
            style={{ touchAction: 'manipulation' }}
          >
            Get started free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <span className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#5C6490]">
            Free · 5 min · No credit card
          </span>
        </div>
      </div>
    </section>
  );
}
