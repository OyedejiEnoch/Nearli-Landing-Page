"use client"
import Tagline from '@/components/Tagline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "I was spending hours on Instagram and WhatsApp just to reach a few customers. I needed something better — something that could help me grow beyond my contacts.",
    name: "Amara K.",
    role: "Jewelry Maker",
    location: "Lagos, Nigeria",
    initials: "AK",
  },
  {
    quote: "Right now I'm only selling to people who already know me. With a solution like this, customers from across the city can find me every single day through the feed.",
    name: "Joke M.",
    role: "Cake Vendor",
    location: "Lagos, Nigeria",
    initials: "JM",
  },
  {
    quote: "Managing orders through DMs is a nightmare. I want a real storefront — professional, simple, and one that actually brings people in without me paying for ads.",
    name: "Tunde A.",
    role: "Clothing Reseller",
    location: "Lagos, Nigeria",
    initials: "TA",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 65%',
      },
    });

    tl.from('.testimonials-heading .word-reveal', {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power4.out',
    });

    tl.from('.testimonials-desc', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.4');

    tl.from(cardsRef.current, {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.12,
      ease: 'expo.out',
    }, '-=0.2');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="testimonials" className="py-20 md:py-28 lg:py-36 bg-[#F8F7F4] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <Tagline text="Early Voices" />
          <h2 className="testimonials-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">REAL</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block text-[#0F2854]">SELLERS,</span>
            </div>
            <br />
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">REAL</span>
            </div>
            <div className="overflow-hidden inline-block">
              <span className="word-reveal inline-block">STORIES.</span>
            </div>
          </h2>
          <p className="testimonials-desc text-base md:text-lg text-[#555] max-w-lg mx-auto leading-relaxed">
            We talked to entrepreneurs across Lagos. Here&apos;s what they told us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px max-w-7xl mx-auto bg-[#e5e5e5] border border-[#e5e5e5]">
          {testimonials.map((t, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-white p-8 lg:p-10 group hover:bg-[#F8F7F4] transition-colors duration-500 flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-5xl font-bold text-[#e8e8e8] font-[family-name:var(--font-barlow)] leading-none mb-6 group-hover:text-[#0F2854] transition-colors duration-500 select-none">
                &ldquo;
              </div>

              <div className="section-divider mb-6 group-hover:w-full transition-all duration-700 ease-in-out" />

              <p className="text-base text-[#333] leading-relaxed flex-1 italic font-light">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#f0f0f0]">
                <div className="w-10 h-10 rounded-full bg-[#0F2854] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold tracking-wider">{t.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-[#1a1a1a] text-sm tracking-wide uppercase">{t.name}</div>
                  <div className="text-[10px] text-[#888] font-bold tracking-widest uppercase">{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
