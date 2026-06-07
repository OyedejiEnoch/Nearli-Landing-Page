"use client"
import Tagline from '@/components/Tagline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Heart, MapPin, MessageSquare, BarChart3, Smartphone, UserPlus } from 'lucide-react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Heart,
    title: "Social Product Posts",
    description: "Every product you list becomes engaging social content that customers can like, comment on, and share."
  },
  {
    icon: UserPlus,
    title: "Store Follows & Engagement",
    description: "Build a loyal following. Customers can follow your store and get notified when you post new products."
  },
  {
    icon: MapPin,
    title: "Location-Based Discovery",
    description: "Get discovered by customers nearby. Our algorithm shows your products to people in your area first."
  },
  {
    icon: BarChart3,
    title: "Seller Dashboard",
    description: "Track views, likes, followers, and sales. Understand what products resonate with your audience."
  },
  {
    icon: MessageSquare,
    title: "Direct Messaging",
    description: "Chat with customers directly. Answer questions, negotiate, and close sales — all in one place."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description: "Built for the way you work. Manage your entire business from your phone, anywhere, anytime."
  }
];

export function Features() {
    const containerRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: containerRef.current,
          start:'top 65%',
        }
      });

      tl.from(".features-heading .word-reveal", {
        yPercent: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out"
      });

      tl.from(".features-desc", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

      tl.from(featuresRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
      }, "-=0.2");

      // Highlight section parallax
      gsap.from(".highlight-img", {
        scale: 1.15,
        opacity: 0.8,
        scrollTrigger: {
            trigger: ".highlight-container",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
      });
    }, { scope: containerRef });

  return (
    <section ref={containerRef} id="features" className="py-20 md:py-28 lg:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
            <Tagline text='Features' />
          <h2 className="features-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#1a1a1a] mb-6 font-bold tracking-tight">
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">EVERYTHING</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">YOU</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block text-[#120E2E]">NEED</span>
            </div>
            <br />
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">TO</span>
            </div>
            <div className="overflow-hidden inline-block">
              <span className="word-reveal inline-block">SUCCEED.</span>
            </div>
          </h2>
          <p className="features-desc text-base md:text-lg text-[#6B6B8A] max-w-lg mx-auto leading-relaxed">
            Powerful tools designed for small businesses, not enterprise complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px max-w-7xl mx-auto bg-[#C5BFDA]">
          {features.map((feature, index) => (
            <div 
              key={index}
               ref={(el) => { featuresRef.current[index] = el }}
              className="bg-white p-8 lg:p-10 group hover:bg-[#FDFAF6] transition-colors duration-500"
            >
              <div className="w-12 h-12 bg-[#120E2E] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-elastic shadow-lg shadow-navy/20">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3 group-hover:text-[#120E2E] transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-sm text-[#6B6B8A] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="highlight-container mt-24 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-[#FDFAF6] p-10 md:p-14 lg:p-16 border border-[#C5BFDA] overflow-hidden">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight font-[family-name:var(--font-barlow)] tracking-tight uppercase">
                Designed for mobile-first users
              </h3>
              <p className="text-base md:text-lg text-[#6B6B8A] mb-8 leading-relaxed">
                In emerging markets, your phone is your office. We built our platform mobile-first because that&apos;s how you and your customers actually work.
              </p>
              <ul className="space-y-4">
                {[
                    "Fast loading even on slow connections",
                    "Works offline with smart caching",
                    "Optimized for low data usage"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                        <span className="text-[#120E2E] font-bold text-sm mt-0.5 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        <span className="text-[#333] text-base group-hover:text-[#120E2E] transition-colors duration-300">{item}</span>
                    </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1766806756904-bad81fe3b104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Mobile shopping"
                className="highlight-img w-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}