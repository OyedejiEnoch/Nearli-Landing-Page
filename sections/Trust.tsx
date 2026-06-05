"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Heart, TrendingUp, Globe, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Heart,
    title: "Empowerment",
    description: "Every entrepreneur deserves the tools to succeed, regardless of budget or technical skill."
  },
  {
    icon: TrendingUp,
    title: "Economic Inclusion",
    description: "We're building infrastructure for the next wave of digital entrepreneurs in emerging markets."
  },
  {
    icon: Globe,
    title: "Community First",
    description: "Success isn't about algorithms alone — it's about connecting real people with real products."
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We're just getting started. AI-powered discovery and smart recommendations are coming soon."
  }
];

export function Trust() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trustRef = useRef<(HTMLDivElement | null)[]>([])
    
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: containerRef.current,
          start:'top 65%',
        }
      });
    
      tl.from(".trust-heading .word-reveal", {
        yPercent: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out"
      });

      tl.from(".trust-desc", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

      tl.from(trustRef.current, {
        opacity: 0,
        x: -20,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
      }, "-=0.2");

      // Stats Reveal
      gsap.from(".stat-box", {
          opacity: 0,
          y: 40,
          duration: 1.2,
          stagger: 0.2,
          ease: "expo.out",
          scrollTrigger: {
              trigger: ".stats-container",
              start: "top 85%"
          }
      });

      // Stats numbers counting effect
      const stats = containerRef.current?.querySelectorAll(".stat-number");
      stats?.forEach((stat) => {
          const target = parseFloat(stat.getAttribute("data-target") || "0");
          const suffix = stat.getAttribute("data-suffix") || "";
          const decimals = target % 1 === 0 ? 0 : 1;
          ScrollTrigger.create({
              trigger: stat,
              start: "top 90%",
              onEnter: () => {
                  gsap.to({ val: 0 }, {
                      val: target,
                      duration: 2.5,
                      ease: "power3.out",
                      onUpdate: function() {
                          stat.textContent = this.targets()[0].val.toFixed(decimals) + suffix;
                      }
                  });
              }
          });
      });
    }, { scope: containerRef });

  return (
    <section ref={containerRef} id='trust' className="py-20 md:py-28 lg:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="trust-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#1a1a1a] mb-6 font-bold tracking-tight">
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">MAKE</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">EVERY</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block text-[#0F2854]">SMALL</span>
            </div>
            <br />
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">BUSINESS</span>
            </div>
            <div className="overflow-hidden inline-block">
              <span className="word-reveal inline-block">VISIBLE.</span>
            </div>
          </h2>
          <p className="trust-desc text-base md:text-lg text-[#555] max-w-lg mx-auto leading-relaxed">
            We believe that talent and hard work are everywhere, but opportunity isn&apos;t. We&apos;re changing that.
          </p>
        </div>

        {/* Values — editorial row layout */}
        <div className="max-w-6xl mx-auto border-t border-[#e5e5e5] mb-24">
          {values.map((value, index) => (
            <div 
              key={index}
              ref={(el) => { trustRef.current[index] = el }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 md:py-10 border-b border-[#e5e5e5] items-start hover:bg-[#F8F7F4] transition-colors duration-500 group"
            >
              <div className="md:col-span-1">
                <value.icon className="w-5 h-5 text-[#0F2854] group-hover:scale-125 transition-transform duration-500" />
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold text-[#1a1a1a] tracking-tight">
                  {value.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-base text-[#555] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-container max-w-6xl mx-auto bg-[#111111] p-10 md:p-14 lg:p-16 text-white rounded-sm shadow-2xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-barlow)] tracking-tight uppercase">
              GROWING TOGETHER
            </h3>
            <p className="text-[#666] text-base tracking-widest font-bold uppercase">
              Real impact · Real businesses · Real growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="stat-box text-center">
              <div className="stat-number text-5xl md:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-barlow)]" data-target="92" data-suffix="%">
                0%
              </div>
              <div className="text-[#888] text-[10px] font-bold tracking-widest uppercase leading-loose">
               Possibility of sellers getting<br/>their first sale within 7 days
              </div>
            </div>
            <div className="stat-box text-center border-x border-[#2a2a2a]">
              <div className="stat-number text-5xl md:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-barlow)]" data-target="3.5" data-suffix="x">
                0x
              </div>
              <div className="text-[#888] text-[10px] font-bold tracking-widest uppercase leading-loose">
                Average increase in monthly<br/>sales after joining Nearli
              </div>
            </div>
            <div className="stat-box text-center">
              <div className="stat-number text-5xl md:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-barlow)]" data-target="24" data-suffix="/7">
                0/7
              </div>
              <div className="text-[#888] text-[10px] font-bold tracking-widest uppercase leading-loose">
                Your store works for you<br/>continuously, even offline
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-24 max-w-5xl mx-auto group">
          <div className="border border-[#e5e5e5] p-10 md:p-12 lg:p-14 hover:border-[#0F2854] transition-colors duration-700">
            <div className="mb-10 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-barlow)] tracking-tight uppercase">
                What&apos;s next
              </h3>
              <p className="text-base text-[#555] font-medium">
                We&apos;re constantly evolving to serve you better.
              </p>
            </div>
            <div className="border-t border-[#e5e5e5]">
              <ul className="divide-y divide-[#e5e5e5]">
                {[
                    "AI-powered product recommendations to match customers with your products",
                    "Smart pricing insights based on similar products and local demand",
                    "Automated inventory management and restocking reminders",
                    "Multi-language support to reach customers across borders"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5 py-6 group/item hover:bg-[#F8F7F4] transition-colors duration-300 px-4 -mx-4">
                        <span className="text-[#0F2854] font-bold text-sm mt-0.5 group-hover/item:translate-x-1 transition-transform duration-300">→</span>
                        <span className="text-[#333] text-base group-hover/item:text-[#0F2854] transition-colors duration-300">{item}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}