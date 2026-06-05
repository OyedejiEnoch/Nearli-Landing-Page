"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Store, Palette, ShoppingBag, Briefcase } from 'lucide-react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const users = [
  {
    number: "01",
    title: "Solo Entrepreneurs",
    description: "Running your business alone? Get a professional storefront without hiring developers or designers.",
    examples: ["Home bakers", "Beauty product sellers", "Clothing resellers"]
  },
  {
    number: "02",
    title: "Creators & Makers",
    description: "Turn your craft into income. Showcase handmade products to customers who value unique, authentic items.",
    examples: ["Jewelry makers", "Artists", "Handcraft artisans"]
  },
  {
    number: "03",
    title: "Small Retail Businesses",
    description: "Expand beyond your physical location. Reach customers who can't visit your shop in person.",
    examples: ["Boutiques", "Local shops", "Pop-up vendors"]
  },
  {
    number: "04",
    title: "Informal Vendors",
    description: "Transitioning online? Start with a simple store and upgrade as you grow. No complicated setup.",
    examples: ["Market traders", "Street vendors", "Side hustlers"]
  }
];

export function TargetUsers() {
    const containerRef = useRef<HTMLDivElement>(null);
    const targetUsersRef = useRef<(HTMLDivElement | null)[]>([])
  
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: containerRef.current,
          start:'top 65%',
        }
      });
  
      tl.from(".target-heading .word-reveal", {
        yPercent: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out"
      });

      tl.from(".target-desc", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

      tl.from(targetUsersRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
      }, "-=0.2");

      // Success Story Parallax
      gsap.from(".success-img", {
        yPercent: 15,
        scale: 1.1,
        scrollTrigger: {
            trigger: ".success-container",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
      });
    }, { scope: containerRef });

  return (
    <section ref={containerRef} id='targetUsers' className="py-20 md:py-28 lg:py-36 bg-[#F8F7F4] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0F2854] mb-6">
            Who It&apos;s For
          </div>
          <h2 className="target-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">BUILT</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">FOR</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block text-[#0F2854]">EVERY</span>
            </div>
            <br />
            <div className="overflow-hidden inline-block">
              <span className="word-reveal inline-block">ENTREPRENEUR.</span>
            </div>
          </h2>
          <p className="target-desc text-base md:text-lg text-[#555] max-w-lg mx-auto leading-relaxed">
            Whether you&apos;re just starting or ready to scale, we&apos;re here to help you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px max-w-7xl mx-auto bg-[#e5e5e5] border border-[#e5e5e5]">
          {users.map((user, index) => (
            <div 
              key={index}
              ref={(el) => { targetUsersRef.current[index] = el }}
              className="bg-white p-8 lg:p-10 group hover:bg-[#F2F1EE] transition-colors duration-500"
            >
              <span className="text-5xl font-bold text-[#e8e8e8] font-[family-name:var(--font-barlow)] block mb-6 group-hover:text-[#0F2854] transition-colors duration-500">
                {user.number}
              </span>
              <div className="section-divider mb-5 group-hover:w-full transition-all duration-700"></div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                {user.title}
              </h3>
              <p className="text-sm text-[#555] mb-6 leading-relaxed">
                {user.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {user.examples.map((example, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 border border-[#e5e5e5] text-[#777] text-[10px] rounded-full font-bold uppercase tracking-wider group-hover:bg-[#0F2854] group-hover:text-white group-hover:border-[#0F2854] transition-all duration-500"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Story */}
        <div className="success-container mt-24 max-w-6xl mx-auto">
          <div className="bg-[#0F2854] p-10 md:p-14 lg:p-16 text-white overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="text-[10px] font-bold text-[#8ba8d4] mb-8 uppercase tracking-[0.3em]">Success Story</div>
                <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight font-[family-name:var(--font-barlow)] tracking-tight uppercase">
                  &ldquo;I believe I can grow from 20 sales a month to 200+&rdquo;
                </h3>
                <p className="text-base md:text-xl text-[#b0c4e0] leading-relaxed mb-10 font-light">
                  &ldquo;At my business, I am only selling to people who already know me. Having a solution such as this, I believe customers from across the city can find me every day through the discovery feed.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-[#8ba8d4]"></div>
                  <div>
                    <div className="font-bold text-base tracking-widest uppercase">Joke M.</div>
                    <div className="text-xs text-[#8ba8d4] font-medium tracking-widest uppercase">Cake vendor, Lagos</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative overflow-hidden h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Entrepreneur"
                  className="success-img absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}