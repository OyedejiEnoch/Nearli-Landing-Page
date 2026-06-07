"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Bell,
  ShoppingBag,
  ChevronUp,
  Sparkles,
  MapPin,
  BadgeCheck,
  Plus,
  Home,
  Compass,
  Search,
  MessageCircle,
  User,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Real app accent — Signal Purple lives inside the device only
const PURPLE = '#9E5EF0';
const NAVY = '#120E2E';

export function PhoneMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const floatingCard1Ref = useRef<HTMLDivElement>(null);
  const floatingCard2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      gsap.from(phoneRef.current, {
        opacity: 0,
        y: 80,
        rotateY: 8,
        duration: 1.4,
        ease: 'power4.out',
        delay: 0.3,
      });

      gsap.from([floatingCard1Ref.current, floatingCard2Ref.current], {
        opacity: 0,
        x: (i) => (i === 0 ? -30 : 30),
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 1,
      });

      if (prefersReduced) return;

      gsap.to(cardRef.current, {
        y: -8,
        duration: 2.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to(phoneRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(floatingCard1Ref.current, {
        y: -90,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to(floatingCard2Ref.current, {
        y: -130,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative lg:pl-8 [perspective:1000px]">
      <div ref={phoneRef} className="relative mx-auto w-full max-w-[340px] will-change-transform">
        {/* Phone frame */}
        <div className="rounded-[2.75rem] bg-[#0a0a14] p-2.5 shadow-[0_50px_100px_-20px_rgba(18,14,46,0.35)]">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#F4F2F8]">
            {/* Status / gradient top accent */}
            <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${PURPLE}, #C5BFDA)` }} />

            {/* App top bar */}
            <div className="flex items-center justify-between bg-white px-4 py-3.5">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-lg"
                  style={{ background: NAVY }}
                >
                  <MapPin className="h-3.5 w-3.5 text-white" fill="white" />
                </div>
                <span className="text-base font-bold tracking-tight text-[#1a1a1a]">Nearli</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ece9f4]">
                  <Bell className="h-4 w-4 text-[#6B6B8A]" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ece9f4]">
                  <ShoppingBag className="h-4 w-4 text-[#6B6B8A]" />
                </div>
                <div
                  className="h-9 w-9 rounded-full border-2 border-white shadow-sm"
                  style={{ background: 'radial-gradient(circle at 30% 30%, #F97316, #7A2B3D)' }}
                />
              </div>
            </div>

            {/* Scrollable feed body */}
            <div className="h-[440px] overflow-hidden px-3 pb-3 pt-3">
              {/* Location pill */}
              <div className="mb-4 flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div
                    className="h-9 w-9 rounded-xl"
                    style={{ background: 'conic-gradient(from 90deg, #9E5EF0, #C5BFDA, #F97316, #10B981, #9E5EF0)' }}
                  />
                  <div>
                    <div className="text-[13px] font-bold leading-tight text-[#1a1a1a]">
                      Ibadan South West, Oyo
                    </div>
                    <div className="text-[11px] text-[#6B6B8A]">3 businesses nearby</div>
                  </div>
                </div>
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={{ background: '#F3EEFC' }}
                >
                  <ChevronUp className="h-3.5 w-3.5" style={{ color: PURPLE }} />
                </div>
              </div>

              {/* Section heading */}
              <div className="mb-2 flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ background: '#F3EEFC' }}
                >
                  <Sparkles className="h-4 w-4" style={{ color: PURPLE }} />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-[#1a1a1a]">
                  Discover Curated Stores
                </h3>
              </div>
              <p className="mb-4 text-[12px] leading-relaxed text-[#6B6B8A]">
                Explore unique collections from independent creators and artisan studios across your area.
              </p>

              {/* Store card */}
              <div ref={cardRef} className="overflow-hidden rounded-2xl bg-white shadow-md will-change-transform">
                <div className="relative h-40">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900&auto=format&fit=crop"
                    alt="Fashion store interior"
                    className="h-full w-full object-cover"
                  />
                  {/* Category tag */}
                  <span className="absolute left-3 top-3 rounded-md bg-black/55 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                    Fashion
                  </span>
                  {/* Thumbnail */}
                  <div className="absolute -bottom-5 left-3 h-12 w-12 overflow-hidden rounded-xl border-2 border-white shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=200&auto=format&fit=crop"
                      alt="Store avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Distance pill */}
                  <div className="absolute -bottom-4 right-3 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 shadow-md">
                    <MapPin className="h-3 w-3" style={{ color: PURPLE }} />
                    <span className="text-[11px] font-bold text-[#1a1a1a]">1.7km</span>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-7">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[15px] font-bold text-[#1a1a1a]">Test store 5</span>
                    <BadgeCheck className="h-4 w-4" style={{ color: PURPLE }} />
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-[#6B6B8A]">
                    <MapPin className="h-3 w-3 shrink-0" />
                    <span className="truncate">Olubadan Avenue, Ibadan South West 20, Oyo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating + FAB */}
            <button
              className="absolute bottom-20 right-4 flex h-13 w-13 items-center justify-center rounded-full shadow-lg"
              style={{ width: 52, height: 52, background: PURPLE, boxShadow: `0 10px 30px ${PURPLE}66` }}
              aria-hidden="true"
              tabIndex={-1}
            >
              <Plus className="h-6 w-6 text-white" />
            </button>

            {/* Bottom tab bar */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around border-t border-[#ece9f4] bg-white/95 px-2 pb-3 pt-2.5 backdrop-blur-sm">
              <TabItem icon={Home} label="Home" active />
              <TabItem icon={Compass} label="Explore" />
              {/* Center search */}
              <div className="-mt-6 flex flex-col items-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full ring-4 ring-[#F3EEFC]"
                  style={{ background: NAVY }}
                >
                  <Search className="h-5 w-5 text-white" />
                </div>
              </div>
              <TabItem icon={MessageCircle} label="Messages" />
              <TabItem icon={User} label="Profile" />
            </div>
          </div>
        </div>

        {/* Floating stat cards */}
        <div
          ref={floatingCard1Ref}
          className="absolute -left-5 top-28 rounded-2xl border border-[#ece9f4] bg-white p-3.5 shadow-[0_20px_50px_rgba(18,14,46,0.12)] will-change-transform"
        >
          <div className="mb-1 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-600">Live</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#6B6B8A]">New followers</div>
          <div className="text-sm font-bold" style={{ color: NAVY }}>+23 today</div>
        </div>

        <div
          ref={floatingCard2Ref}
          className="absolute -right-5 bottom-32 rounded-2xl border border-[#ece9f4] bg-white p-3.5 shadow-[0_20px_50px_rgba(18,14,46,0.12)] will-change-transform"
        >
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#6B6B8A]">Sales this week</div>
          <div className="text-sm font-bold" style={{ color: NAVY }}>₦42,800</div>
          <div className="mt-0.5 flex items-center gap-1">
            <span className="text-[10px] font-bold text-emerald-600">↑ 18%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon className={`h-5 w-5 ${active ? 'text-[#120E2E]' : 'text-[#b6b2c4]'}`} />
      <span className={`text-[9px] font-semibold ${active ? 'text-[#120E2E]' : 'text-[#b6b2c4]'}`}>
        {label}
      </span>
    </div>
  );
}
