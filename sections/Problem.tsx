"use client"
import Tagline from '@/components/Tagline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Users, MessageCircle, TrendingDown, DollarSign } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    number: "01",
    title: "Limited Visibility",
    description: "Your products only reach friends, family and your existing followers — never new customers."
  },
  {
    number: "02",
    title: "WhatsApp Overload",
    description: "Managing orders through DMs is chaotic and unprofessional."
  },
  {
    number: "03",
    title: "No Online Presence",
    description: "Building a website is expensive and requires technical skills most don't have."
  },
  {
    number: "04",
    title: "High Marketing Costs",
    description: "Ads are too expensive for small budgets and uncertain returns."
  }
];

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%'
      }
    });

    tl.from(".problem-heading .word-reveal", {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: "power4.out"
    });

    tl.from(".problem-desc", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");

    tl.from(cardsRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "expo.out"
    }, "-=0.2");

    tl.from(".testimonial-reveal", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonial-reveal",
        start: "top 85%"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id='problem' className="py-20 md:py-28 lg:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <Tagline text="The Problem" />
          <h2 className="problem-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">THE</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">REALITY</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block text-[#120E2E]">FOR</span>
            </div>
            <br />
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">SMALL</span>
            </div>
            <div className="overflow-hidden inline-block">
              <span className="word-reveal inline-block">BUSINESSES.</span>
            </div>
          </h2>
          <p className="problem-desc text-base md:text-lg text-[#6B6B8A] max-w-2xl mx-auto leading-relaxed">
            You have amazing products. But your customers are limited to your contacts 
            and people who already know you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px max-w-7xl mx-auto bg-[#C5BFDA] border border-[#C5BFDA]">
          {problems.map((problem, index) => (
            <div 
              key={index}
              ref={(el) => { cardsRef.current[index] = el }}
              className="bg-white p-8 lg:p-10 hover:bg-[#FDFAF6] transition-colors duration-500 group"
            >
              <span className="text-5xl font-bold text-[#e8e8e8] font-[family-name:var(--font-barlow)] block mb-6 group-hover:text-[#120E2E] transition-colors duration-500">
                {problem.number}
              </span>
              <div className="section-divider mb-5 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                {problem.title}
              </h3>
              <p className="text-sm text-[#6B6B8A] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="testimonial-reveal mt-20 max-w-4xl mx-auto border-t border-[#C5BFDA] pt-12">
          <p className="text-xl md:text-2xl text-[#1a1a1a] mb-8 leading-relaxed font-light italic">
            &ldquo;I was spending hours on Instagram and WhatsApp just to reach a few customers. 
            I needed something better, something that could help me grow.&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <Image src="/assets/amaka.jpg" alt="Amara K." width={48} height={48} className='w-12 h-12 object-cover rounded-full border-2 border-[#FDFAF6]' />
            <div>
              <div className="font-semibold text-[#1a1a1a] text-sm tracking-wide uppercase">Amara K.</div>
              <div className="text-xs text-[#6B6B8A] font-medium tracking-wider uppercase">Jewelry Maker, Lagos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}