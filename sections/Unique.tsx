"use client"
import Tagline from '@/components/Tagline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Zap, Eye, Globe, Shield } from 'lucide-react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const differences = [
  {
    icon: Eye,
    title: "Discovery Over Ads",
    traditional: "Pay for every click, compete with big brands",
    our_way: "Get discovered organically through our social feed algorithm"
  },
  {
    icon: Globe,
    title: "Global + Local Reach",
    traditional: "Limited to your social media followers",
    our_way: "Reach nearby customers and worldwide shoppers automatically"
  },
  {
    icon: Zap,
    title: "Social + Commerce",
    traditional: "Choose between social media OR e-commerce",
    our_way: "Get both in one platform — engage and sell seamlessly"
  },
  {
    icon: Shield,
    title: "Fair Visibility",
    traditional: "Big sellers dominate, small stores are invisible",
    our_way: "Every store gets a chance to be seen and grow"
  }
];

export function Unique() {
    const containerRef = useRef<HTMLDivElement>(null);
    const uniqueRef = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: containerRef.current,
          start:'top 65%',
        }
      });

      tl.from(".unique-heading .word-reveal", {
        yPercent: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out"
      });

      tl.from(".unique-desc", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

      tl.from(uniqueRef.current, {
        yPercent: 20,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
      }, "-=0.2");

      // Grid cards scale interaction
      gsap.from(".comparison-box", {
          scale: 0.95,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
              trigger: ".comparison-grid",
              start: "top 85%"
          }
      });
    }, { scope: containerRef });

  return (
    <section ref={containerRef} id='unique' className="py-20 md:py-28 lg:py-36 bg-[#111111] text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <Tagline text='Why Nearli' />
          <h2 className="unique-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 font-bold tracking-tight text-white">
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">BUILT</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">FOR</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">SMALL</span>
            </div>
            <br />
            <div className="overflow-hidden inline-block">
              <span className="word-reveal inline-block">BUSINESSES.</span>
            </div>
          </h2>
          <p className="unique-desc text-base md:text-lg text-[#999] max-w-lg mx-auto leading-relaxed">
            We&apos;re not another marketplace that favors big sellers. We level the playing field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px max-w-6xl mx-auto bg-[#2a2a2a] mb-20">
          {differences.map((diff, index) => (
            <div 
              key={index}
              ref={(el) => { uniqueRef.current[index] = el }}
              className="bg-[#1a1a1a] p-8 lg:p-10 group hover:bg-[#222] transition-colors duration-500"
            >
              <h3 className="text-xl font-semibold mb-6 text-white group-hover:text-blue-400 transition-colors duration-500">{diff.title}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#444] text-sm shrink-0 mt-0.5 group-hover:text-red-900 transition-colors duration-500">✕</span>
                  <p className="text-[#777] text-sm leading-relaxed">{diff.traditional}</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-white text-sm shrink-0 mt-0.5 group-hover:text-emerald-500 transition-colors duration-500">✓</span>
                  <p className="text-white text-sm font-medium leading-relaxed">{diff.our_way}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Cards */}
        <div className="comparison-grid grid md:grid-cols-3 gap-px max-w-5xl mx-auto bg-[#2a2a2a]">
          <div className="comparison-box text-center p-10 bg-[#1a1a1a] hover:bg-[#111] transition-colors duration-500">
            <div className="text-[10px] text-[#555] mb-4 font-bold tracking-[0.2em] uppercase">Traditional</div>
            <div className="text-lg font-semibold text-[#444]">Big sellers win</div>
          </div>
          <div className="comparison-box text-center p-12 bg-[#0F2854] shadow-2xl z-10 scale-105 rounded-sm">
            <div className="text-[10px] text-[#8ba8d4] mb-4 font-bold tracking-[0.2em] uppercase">Nearli</div>
            <div className="text-2xl font-bold text-white leading-tight uppercase font-[family-name:var(--font-barlow)]">Everyone gets a chance</div>
          </div>
          <div className="comparison-box text-center p-10 bg-[#1a1a1a] hover:bg-[#111] transition-colors duration-500">
            <div className="text-[10px] text-[#555] mb-4 font-bold tracking-[0.2em] uppercase">Social Media</div>
            <div className="text-lg font-semibold text-[#444]">Only active friends see</div>
          </div>
        </div>
      </div>
    </section>
  );
}