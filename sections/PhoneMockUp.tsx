"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export function PhoneMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const floatingCard1Ref = useRef<HTMLDivElement>(null);
  const floatingCard2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(phoneRef.current, {
        opacity: 0,
        y: 80,
        rotateY: 10,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.3,
      });

      // Floating animations
      gsap.to(card1Ref.current, {
        y: -10,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to(card2Ref.current, {
        y: -8,
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.3,
      });

      // Floating card entrance
      gsap.from([floatingCard1Ref.current, floatingCard2Ref.current], {
        opacity: 0,
        x: (i) => i === 0 ? -30 : 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1
      });

      // Scroll Parallax
      gsap.to(phoneRef.current, {
        y: -60,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(floatingCard1Ref.current, {
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsap.to(floatingCard2Ref.current, {
        y: -140,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative lg:pl-8 perspective-1000">
      {/* Phone Mockup Frame */}
      <div ref={phoneRef} className="relative mx-auto w-full max-w-sm lg:max-w-md will-change-transform">
        <div className="bg-[#1a1a1a] rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(15,40,84,0.15)]">
          <div className="bg-white rounded-[2.5rem] overflow-hidden">
            {/* Status Bar */}
            <div className="bg-[#0F2854] px-6 py-4 flex items-center justify-between text-white text-[10px] font-medium tracking-widest uppercase">
              <span>9:41</span>
              <span className="font-semibold">Discovery Feed</span>
              <span>●●●</span>
            </div>

            {/* Feed Content */}
            <div className="h-150 overflow-hidden bg-[#fafafa]">
              {/* Product Card 1 */}
              <div ref={card1Ref} className="bg-white mb-3 border-b border-[#f0f0f0] will-change-transform">
                <div className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0F2854] rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-semibold text-xs text-[#1a1a1a] uppercase tracking-wide">
                      Handmade Crafts
                    </div>
                    <div className="text-[10px] text-[#888] font-medium flex items-center gap-1">
                      <span>•</span>
                      <span>2.3 km away</span>
                    </div>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1759663178849-d759c46f754c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Product"
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-[#1a1a1a] font-medium mb-3">
                    Beautiful handwoven baskets 🧺
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-[#999] text-[10px] font-semibold">
                      <span>♡ 142 LIKES</span>
                      <span>💬 23 COMMENTS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div ref={card2Ref} className="bg-white border-b border-[#f0f0f0] will-change-transform">
                <div className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2a4a7f] rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-semibold text-xs text-[#1a1a1a] uppercase tracking-wide">
                      Local Artisan Store
                    </div>
                    <div className="text-[10px] text-[#888] font-medium flex items-center gap-1">
                      <span>•</span>
                      <span>5.7 km away</span>
                    </div>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1722971316044-ce6b2477868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Product"
                  className="w-full h-52 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div
          ref={floatingCard1Ref}
          className="absolute -left-6 top-24 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-4 border border-[#e5e5e5] rounded-sm will-change-transform"
        >
          <div className="text-[9px] text-[#888] font-bold mb-1 uppercase tracking-widest">
            New Followers
          </div>
          <div className="font-bold text-sm text-[#0F2854]">
            +23 today
          </div>
        </div>

        <div
          ref={floatingCard2Ref}
          className="absolute -right-6 bottom-36 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-4 border border-[#e5e5e5] rounded-sm will-change-transform"
        >
          <div className="text-[9px] text-[#888] font-bold mb-1 uppercase tracking-widest">
            Sales This Week
          </div>
          <div className="font-bold text-[#0F2854] text-sm flex items-center gap-1">
            + <Image src="/assets/nairaImg.png" alt="naira" width={8} height={8} className="opacity-70" /> 42,800
          </div>
        </div>
      </div>
    </div>
  );
}
