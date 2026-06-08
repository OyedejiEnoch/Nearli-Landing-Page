"use client"
import Tagline from '@/components/Tagline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, MapPin, Compass, MessageCircle } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const buyerSteps = [
  {
    icon: Compass,
    title: 'See what’s nearby',
    description:
      'Open Nearli and instantly see a live feed of businesses around you — fashion, food, electronics and more, sorted by how close they are.',
  },
  {
    icon: MapPin,
    title: 'Open the map',
    description:
      'Tap the map preview to see every business around you as a pin. Spot what’s within walking distance and explore your neighbourhood.',
  },
  {
    icon: MessageCircle,
    title: 'Chat directly',
    description:
      'Found something you like? Message the seller right inside the app. No middlemen, no commission — just you and the business.',
  },
];

// Recreated "Nearby Businesses" map preview (matches the in-app screen)
function MapPreview() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#C5BFDA] bg-white shadow-[0_40px_80px_-30px_rgba(18,14,46,0.3)]">
      {/* Header bar */}
      <div className="relative flex items-center justify-center border-b border-[#ece9f4] bg-white px-5 py-4">
        <ArrowLeft className="absolute left-5 h-5 w-5 text-[#1a1a1a]" />
        <div className="text-center">
          <div className="text-base font-bold tracking-tight text-[#1a1a1a]">Nearby Businesses</div>
          <div className="text-xs text-[#6B6B8A]">Ibadan South West, Oyo</div>
        </div>
      </div>

      {/* Map body */}
      <div className="relative h-[420px] w-full overflow-hidden bg-[#F4F2F8]">
        {/* Faint roads */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 420"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path d="M-20 250 Q120 210 200 300 T440 330" stroke="#FFFFFF" strokeWidth="10" />
          <path d="M60 -20 Q140 120 120 260 T200 460" stroke="#E7E3F0" strokeWidth="6" />
          <path d="M300 -20 Q280 140 360 240" stroke="#E7E3F0" strokeWidth="6" />
          <path d="M-20 120 Q140 90 240 120 T440 100" stroke="#ECE9F4" strokeWidth="4" />
          <path d="M220 60 Q260 200 230 420" stroke="#ECE9F4" strokeWidth="4" />
          <path d="M-20 360 Q160 330 260 380 T440 380" stroke="#ECE9F4" strokeWidth="4" />
        </svg>

        {/* faint area block (like a campus) */}
        <div className="absolute left-0 top-0 h-24 w-40 bg-[#ECE9F4]/70" />
        <span className="absolute left-3 top-4 max-w-[90px] text-[10px] leading-tight text-[#9a96aa]">
          Government College Ibadan
        </span>
        <span className="absolute left-[30%] top-[64%] text-[10px] text-[#9a96aa]">Adeoyo State Hospital</span>
        <span className="absolute left-[44%] top-[31%] -rotate-12 text-[10px] text-[#9a96aa]">Olubadan Ave</span>
        <span className="absolute right-6 top-[20%] rotate-6 text-[10px] text-[#9a96aa]">Ring Rd</span>

        {/* "3 businesses nearby" pill */}
        <div className="absolute left-1/2 top-5 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
          <MapPin className="h-3.5 w-3.5 fill-[#EC4899] text-[#EC4899]" />
          <span className="text-xs font-semibold text-[#1a1a1a]">3 businesses nearby</span>
        </div>

        {/* Business pins */}
        <div className="absolute left-[50%] top-[34%] h-4 w-4 rounded-full bg-[#EC4899] shadow-lg ring-4 ring-[#EC4899]/20" />
        <div className="absolute left-[82%] top-[38%] h-4 w-4 rounded-full bg-[#6366F1] shadow-lg ring-4 ring-[#6366F1]/20" />
        <div className="absolute left-[24%] top-[58%] h-4 w-4 rounded-full bg-[#6366F1] shadow-lg ring-4 ring-[#6366F1]/20" />

        {/* User location: dashed radius + pulse + dot */}
        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-44 w-44 items-center justify-center">
            {/* radius ring */}
            <div className="absolute h-full w-full rounded-full border-2 border-dashed border-[#9E5EF0]/60 bg-[#9E5EF0]/10" />
            {/* pulse */}
            <span className="absolute h-10 w-10 animate-ping rounded-full bg-[#9E5EF0]/40" />
            {/* dot */}
            <span className="relative h-5 w-5 rounded-full border-2 border-white bg-[#6D5BD0] shadow-lg" />
          </div>
        </div>

        {/* mapbox-style attribution */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[10px] font-medium text-[#9a96aa]">
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#1a1a1a] text-[8px] text-white">
            ●
          </span>
          nearli maps
        </div>
      </div>
    </div>
  );
}

export function BuyerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 65%' },
    });

    tl.from('.buyer-heading .word-reveal', {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power4.out',
    });

    tl.from('.buyer-desc', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out' }, '-=0.4');

    tl.from('.buyer-map', { opacity: 0, y: 40, scale: 0.97, duration: 1, ease: 'expo.out' }, '-=0.3');

    tl.from(
      stepsRef.current,
      { opacity: 0, x: 30, duration: 0.9, stagger: 0.15, ease: 'expo.out' },
      '-=0.7'
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="for-buyers"
      className="overflow-hidden bg-[#FDFAF6] py-20 md:py-28 lg:py-36"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-24">
          <Tagline text="For Buyers" />
          <h2 className="buyer-heading mb-6 text-4xl font-bold tracking-tight text-[#1a1a1a] md:text-5xl lg:text-6xl xl:text-7xl">
            <div className="mr-4 inline-block overflow-hidden">
              <span className="word-reveal inline-block">DISCOVER</span>
            </div>
            <div className="mr-4 inline-block overflow-hidden">
              <span className="word-reveal inline-block">BUSINESSES</span>
            </div>
            <br />
            <div className="mr-4 inline-block overflow-hidden">
              <span className="word-reveal inline-block text-[#120E2E]">NEAR</span>
            </div>
            <div className="inline-block overflow-hidden">
              <span className="word-reveal inline-block">YOU.</span>
            </div>
          </h2>
          <p className="buyer-desc mx-auto max-w-xl text-base leading-relaxed text-[#6B6B8A] md:text-lg">
            Nearli isn&apos;t just for sellers. As a buyer, you get a live map of the shops, food
            spots and creators right around you — and you can chat with them directly.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Map preview */}
          <div className="buyer-map">
            <MapPreview />
          </div>

          {/* Buyer steps */}
          <div className="border-t border-[#C5BFDA]">
            {buyerSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => { stepsRef.current[index] = el; }}
                className="group grid grid-cols-[auto_1fr] gap-5 border-b border-[#C5BFDA] py-7 md:py-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#120E2E] transition-transform duration-500 group-hover:scale-110">
                  <step.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#1a1a1a] md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#6B6B8A]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
