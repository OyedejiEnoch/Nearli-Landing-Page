"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export function PhoneMockup() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const floatingCard1Ref = useRef<HTMLDivElement>(null);
  const floatingCard2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Phone entrance animation
    if (phoneRef.current) {
      gsap.from(phoneRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      });
    }

    // Continuous floating animation for product cards
    if (card1Ref.current) {
      gsap.to(card1Ref.current, {
        y: -10,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }

    if (card2Ref.current) {
      gsap.to(card2Ref.current, {
        y: -8,
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.3,
      });
    }

    // Floating cards animation
    if (floatingCard1Ref.current) {
      gsap.from(floatingCard1Ref.current, {
        opacity: 0,
        x: -30,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8,
      });

      gsap.to(floatingCard1Ref.current, {
        y: -15,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }

    if (floatingCard2Ref.current) {
      gsap.from(floatingCard2Ref.current, {
        opacity: 0,
        x: 30,
        y: -20,
        duration: 1,
        ease: 'power3.out',
        delay: 1,
      });

      gsap.to(floatingCard2Ref.current, {
        y: 15,
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className="relative lg:pl-8">
      {/* Phone Mockup Frame */}
      <div ref={phoneRef} className="relative mx-auto w-full max-w-sm lg:max-w-md">
        <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-purple-900/20">
          <div className="bg-white rounded-[2.5rem] overflow-hidden">
            {/* Status Bar */}
            <div className="bg-linear-to-r from-purple-600 via-purple-500 to-blue-600 px-6 py-4 flex items-center justify-between text-white text-xs font-medium">
              <span>9:41</span>
              <span>Discovery Feed</span>
              <span>●●●</span>
            </div>

            {/* Feed Content */}
            <div className="h-150 overflow-hidden bg-linear-to-b from-gray-50 to-white">
              {/* Product Card 1 */}
              <div ref={card1Ref} className="bg-white mb-4 shadow-sm border border-gray-100">
                <div className="p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-blue-500 rounded-full ring-2 ring-purple-100"></div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-gray-900">
                      Handmade Crafts
                    </div>
                    <div className="text-xs text-purple-600 font-medium flex items-center gap-1">
                      <span>•</span>
                      <span>2.3 km away</span>
                    </div>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1759663178849-d759c46f754c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHByb2R1Y3RzJTIwZGlzcGxheXxlbnwxfHx8fDE3Njc3MzA3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Product"
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-900 font-medium mb-3">
                    Beautiful handwoven baskets 🧺
                  </p>
                  <div className="flex items-center justify-between">

                    <div className="flex gap-5 text-gray-400 text-sm">
                      <span className="flex items-center gap-1">♡ 142</span>
                      <span className="flex items-center gap-1">💬 23</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div ref={card2Ref} className="bg-white shadow-sm border border-gray-100">
                <div className="p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-indigo-500 rounded-full ring-2 ring-blue-100"></div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-gray-900">
                      Local Artisan Store
                    </div>
                    <div className="text-xs text-purple-600 font-medium flex items-center gap-1">
                      <span>•</span>
                      <span>5.7 km away</span>
                    </div>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1722971316044-ce6b2477868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMHZlbmRvciUyMHN0b3JlfGVufDF8fHx8MTc2NzczMDczNHww&ixlib=rb-4.1.0&q=80&w=1080"
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
          className="absolute -left-6 top-24 bg-white rounded-2xl shadow-2xl shadow-purple-500/10 p-5 max-w-40 border border-purple-100"
        >
          <div className="text-xs text-[#0F2854] font-semibold mb-1.5 uppercase tracking-wide">
            New Followers
          </div>
          <div className="font-bold text-sm text-[#0F2854] bg-clip-text ">
            +23 today
          </div>
        </div>

        <div
          ref={floatingCard2Ref}
          className="absolute -right-6 bottom-36 bg-white rounded-2xl shadow-2xl shadow-blue-500/10 p-5 max-w-40 border border-blue-100"
        >
          <div className="text-xs text-[#0F2854] font-semibold mb-1.5 uppercase tracking-wide">
            Sales This Week
          </div>
          <div className="font-bold text-[#0F2854] text-sm flex items-center">
            +
            <Image src={"/assets/nairaImg.png"} alt='image' width={10} height={10} />
            42,800
          </div>
        </div>
      </div>
    </div>
  );
}
