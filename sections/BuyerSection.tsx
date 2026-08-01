"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, MapPin, Compass, MessageCircle } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const buyerSteps = [
  {
    icon: Compass,
    title: 'See what\'s nearby',
    description:
      'Open Ahiver and instantly see a live feed of businesses around you — fashion, food, electronics and more, sorted by how close they are.',
  },
  {
    icon: MapPin,
    title: 'Open the map',
    description:
      'Tap the map preview to see every business around you as a pin. Spot what\'s within walking distance and explore your neighbourhood.',
  },
  {
    icon: MessageCircle,
    title: 'Chat directly',
    description:
      'Found something you like? Message the seller right inside the app. No middlemen, no commission — just you and the business.',
  },
];

function MapPreview() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#E2E6F0] bg-white shadow-[0_40px_80px_-30px_rgba(13,16,32,0.25)]">
      {/* Header bar */}
      <div className="relative flex items-center justify-center border-b border-[#E2E6F0] bg-white px-5 py-4">
        <ArrowLeft className="absolute left-5 h-5 w-5 text-[#0D1020]" />
        <div className="text-center">
          <div className="text-base font-bold tracking-tight text-[#0D1020]">Nearby businesses</div>
          <div className="text-xs text-[#5C6490]">Ibadan South West, Oyo</div>
        </div>
      </div>

      {/* Map body */}
      <div className="relative h-[420px] w-full overflow-hidden bg-[#EFF2FA]">
        {/* Faint roads */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 420"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path d="M-20 250 Q120 210 200 300 T440 330" stroke="#FFFFFF" strokeWidth="10" />
          <path d="M60 -20 Q140 120 120 260 T200 460" stroke="#E2E6F0" strokeWidth="6" />
          <path d="M300 -20 Q280 140 360 240" stroke="#E2E6F0" strokeWidth="6" />
          <path d="M-20 120 Q140 90 240 120 T440 100" stroke="#E6EAF5" strokeWidth="4" />
          <path d="M220 60 Q260 200 230 420" stroke="#E6EAF5" strokeWidth="4" />
          <path d="M-20 360 Q160 330 260 380 T440 380" stroke="#E6EAF5" strokeWidth="4" />
        </svg>

        <div className="absolute left-0 top-0 h-24 w-40 bg-[#E6EAF5]/70" />
        <span className="absolute left-3 top-4 max-w-[90px] text-[10px] leading-tight text-[#8F97BB]">
          Government College Ibadan
        </span>
        <span className="absolute left-[30%] top-[64%] text-[10px] text-[#8F97BB]">Adeoyo State Hospital</span>
        <span className="absolute left-[44%] top-[31%] -rotate-12 text-[10px] text-[#8F97BB]">Olubadan Ave</span>
        <span className="absolute right-6 top-[20%] rotate-6 text-[10px] text-[#8F97BB]">Ring Rd</span>

        {/* Distance pill (matches app spec: white glass pill) */}
        <div className="absolute left-1/2 top-5 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
          <MapPin className="h-3.5 w-3.5 fill-[#FF5A4D] text-[#FF5A4D]" />
          <span className="text-xs font-semibold text-[#0D1020]">3 businesses nearby</span>
        </div>

        {/* Business pins — coral + sapphire */}
        <div
          className="absolute left-[50%] top-[34%] h-4 w-4 rounded-full shadow-lg ring-4"
          style={{ background: '#FF5A4D', boxShadow: '0 0 0 4px rgba(255,90,77,0.2)' }}
        />
        <div
          className="absolute left-[82%] top-[38%] h-4 w-4 rounded-full shadow-lg ring-4"
          style={{ background: '#1E40AF', boxShadow: '0 0 0 4px rgba(30,64,175,0.2)' }}
        />
        <div
          className="absolute left-[24%] top-[58%] h-4 w-4 rounded-full shadow-lg ring-4"
          style={{ background: '#1E40AF', boxShadow: '0 0 0 4px rgba(30,64,175,0.2)' }}
        />

        {/* User location */}
        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-44 w-44 items-center justify-center">
            <div
              className="absolute h-full w-full rounded-full border-2 border-dashed"
              style={{ borderColor: 'rgba(30,64,175,0.5)', background: 'rgba(30,64,175,0.08)' }}
            />
            <span
              className="absolute h-10 w-10 animate-ping rounded-full"
              style={{ background: 'rgba(30,64,175,0.35)' }}
            />
            <span
              className="relative h-5 w-5 rounded-full border-2 border-white shadow-lg"
              style={{ background: '#1E40AF' }}
            />
          </div>
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[10px] font-medium text-[#8F97BB]">
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#0D1020] text-[8px] text-white">
            ●
          </span>
          ahiver maps
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
      scrollTrigger: { trigger: containerRef.current, start: 'top 85%' },
    });

    tl.from('.buyer-eyebrow', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' });
    tl.from('.buyer-heading', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.2');
    tl.from('.buyer-desc', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' }, '-=0.25');
    tl.from('.buyer-map', { opacity: 0, y: 30, scale: 0.97, duration: 0.7, ease: 'power3.out' }, '-=0.2');
    tl.from(stepsRef.current, { opacity: 0, x: 20, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.4');
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="for-buyers"
      className="overflow-hidden bg-white py-24 md:py-28 lg:py-28"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* ── Signature recipe header ── */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <div
            className="buyer-eyebrow mb-5 text-xs font-semibold uppercase tracking-[0.4em]"
            style={{ color: '#FF5A4D' }}
          >
            04 — For buyers
          </div>
          <h2 className="buyer-heading text-4xl leading-[1.02] tracking-tight text-[#0D1020] sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-bricolage)]">
            Everything{' '}
            <span
              className="italic font-normal font-[family-name:var(--font-playfair)]"
              style={{ color: '#FF5A4D' }}
            >
              nearby.
            </span>
          </h2>
          <p className="buyer-desc mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5C6490] md:text-lg">
            Ahiver isn&apos;t just for sellers. Buyers get a live map of the shops, food spots and
            makers right around them — and can chat with them directly.
          </p>
        </div>

        {/* ── Split: map + steps ── */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="buyer-map">
            <MapPreview />
          </div>

          <div className="border-t border-[#E2E6F0]">
            {buyerSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => { stepsRef.current[index] = el; }}
                className="group grid grid-cols-[auto_1fr] gap-5 border-b border-[#E2E6F0] py-7 md:py-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D1020] transition-transform duration-500 group-hover:scale-110">
                  <step.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#0D1020] md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#5C6490]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
