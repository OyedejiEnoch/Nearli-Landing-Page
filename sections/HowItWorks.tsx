"use client"
import Tagline from '@/components/Tagline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Create Your Store",
    description: "Set up your digital storefront in minutes. Add your business name, logo, and description. No technical skills needed.",
  },
  {
    number: "02",
    title: "Post Your Products",
    description: "Upload product photos, set prices, and write descriptions. Your products become discoverable social content automatically.",
  },
  {
    number: "03",
    title: "Get Discovered",
    description: "Customers find you through our location-based discovery feed. Build followers, get engagement, and grow your sales organically.",
  }
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 65%',
      }
    });

    tl.from(".how-heading .word-reveal", {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: "power4.out"
    });

    tl.from(".how-desc", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");

    rowsRef.current.forEach((row, i) => {
        if (!row) return;
        gsap.from(row, {
            opacity: 0,
            x: -20,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
                trigger: row,
                start: "top 85%"
            }
        });

        // Parallel line expansion animation
        gsap.from(row.querySelector(".border-b"), {
            scaleX: 0,
            transformOrigin: "left",
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: row,
                start: "top 90%"
            }
        });
    });

    // Magnetic Button logic for the final CTA
    const ctaBtn = containerRef.current?.querySelector(".magnetic-btn") as HTMLElement;
    if (ctaBtn) {
        ctaBtn.addEventListener("mousemove", (e: MouseEvent) => {
            const rect = ctaBtn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(ctaBtn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
        });
        ctaBtn.addEventListener("mouseleave", () => {
            gsap.to(ctaBtn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
        });
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="how-it-works" className="py-20 md:py-28 lg:py-36 bg-[#F8F7F4] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <Tagline text='How It Works' />
          <h2 className="how-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">FROM</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block text-[#0F2854]">SETUP</span>
            </div>
            <br />
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">TO</span>
            </div>
            <div className="overflow-hidden inline-block">
              <span className="word-reveal inline-block">SALES.</span>
            </div>
          </h2>
          <p className="how-desc text-base md:text-lg text-[#555] max-w-lg mx-auto leading-relaxed">
            Start selling today with the easiest platform built for entrepreneurs like you.
          </p>
        </div>

        {/* Steps — horizontal row layout inspired by thegarage.ng */}
        <div className="max-w-6xl mx-auto border-t border-[#e5e5e5]">
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={(el) => { rowsRef.current[index] = el }}
              className="step-row grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-[#e5e5e5] items-start hover:bg-white/50 transition-colors duration-500"
            >
              <div className="md:col-span-2">
                <span className="text-5xl md:text-6xl font-bold text-[#e0e0e0] font-[family-name:var(--font-barlow)] leading-none transition-colors duration-500 hover:text-[#0F2854]">
                  {step.number}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] tracking-tight">
                  {step.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-base text-[#555] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center">
            <div className="magnetic-btn inline-block">
                <button className="bg-[#0F2854] hover:bg-[#0a1c3a] text-white px-10 py-5 rounded-lg font-semibold transition-colors text-xs tracking-widest uppercase shadow-lg shadow-navy/10">
                Get Started Free
                </button>
            </div>
            <span className="text-[10px] text-[#888] font-bold tracking-[0.2em] uppercase mt-6">NO CREDIT CARD REQUIRED</span>
          </div>
        </div>
      </div>
    </section>
  );
}