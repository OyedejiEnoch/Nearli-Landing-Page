"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    number: "01",
    title: "Limited visibility",
    description: "Your products only reach friends, family and your existing followers — never new customers.",
  },
  {
    number: "02",
    title: "WhatsApp overload",
    description: "Managing orders through DMs is chaotic and unprofessional.",
  },
  {
    number: "03",
    title: "No online presence",
    description: "Building a website is expensive and needs technical skills most don't have.",
  },
  {
    number: "04",
    title: "High marketing costs",
    description: "Ads are too expensive for small budgets and uncertain returns.",
  },
];

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
    });

    tl.from('.problem-eyebrow', { opacity: 0, y: 12, duration: 0.4, ease: 'power2.out' });
    tl.from('.problem-heading', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.2');
    tl.from('.problem-desc', { opacity: 0, y: 12, duration: 0.4, ease: 'power2.out' }, '-=0.25');
    tl.from(cardsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power3.out',
    }, '-=0.2');
    tl.from('.problem-quote', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' }, '-=0.1');
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="problem"
      className="overflow-hidden bg-[#ffffff] py-24 md:py-36 lg:py-44"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* ── Signature recipe header ── */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <div
            className="problem-eyebrow mb-5 text-xs font-semibold uppercase tracking-[0.4em]"
            style={{ color: '#FF5A4D' }}
          >
            The problem
          </div>
          <h2 className="problem-heading text-4xl leading-[1.02] tracking-tight text-[#0D1020] sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-bricolage)]">
            The reality for{' '}
            <span
              className="italic font-normal font-[family-name:var(--font-playfair)]"
              style={{ color: '#FF5A4D' }}
            >
              small businesses.
            </span>
          </h2>
          <p className="problem-desc mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5C6490] md:text-lg">
            You have amazing products. But your customers are limited to your contacts
            and people who already know you.
          </p>
        </div>

        {/* ── Cards (light-glass) ── */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {problems.map((problem, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group rounded-2xl border border-[#E2E6F0] bg-white p-6 transition-colors duration-500 hover:bg-[#EFF2FA] lg:p-7"
            >
              <span
                className="block mb-5 text-4xl font-black leading-none text-[#CDD4E8] transition-colors duration-500 group-hover:text-[#0D1020] font-[family-name:var(--font-bricolage)]"
              >
                {problem.number}
              </span>
              <div className="mb-5 h-px w-10 bg-[#E2E6F0] transition-all duration-700 group-hover:w-full group-hover:bg-[#0D1020]" />
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#0D1020]">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#5C6490]">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* ── Testimonial quote ── */}
        <div className="problem-quote mx-auto mt-20 max-w-4xl border-t border-[#E2E6F0] pt-12">
          <p
            className="mb-8 text-2xl leading-relaxed text-[#0D1020] md:text-3xl font-[family-name:var(--font-playfair)] italic font-normal"
          >
            &ldquo;I was spending hours on Instagram and WhatsApp just to reach a few customers.
            I needed something better — something that could help me grow.&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/assets/amaka.jpg"
              alt="Amara K."
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border-2 border-white object-cover"
            />
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-[#0D1020]">
                Amara K.
              </div>
              <div className="text-xs font-medium uppercase tracking-widest text-[#5C6490]">
                Jewelry Maker · Ibadan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
