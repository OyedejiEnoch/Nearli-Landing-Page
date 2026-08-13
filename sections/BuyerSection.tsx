"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check, MapPin, MessageCircle, Navigation, Search } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const CORAL = '#FF5A4D';

// ── Stage cards — light app-UI mocks shown on the dark section (like real screens). ──
function SearchCard() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2.5 rounded-xl border border-[#E2E6F0] bg-[#F6F8FD] px-3 py-3">
        <Search className="h-4 w-4 shrink-0 text-[#5C6490]" />
        <span className="text-sm font-medium text-[#0D1020]">aso-oke near me</span>
        <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-[#FF5A4D]" aria-hidden="true" />
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-[#8F97BB]">
        <MapPin className="h-3.5 w-3.5 text-[#FF5A4D]" />
        Ibadan South West, Oyo
      </div>
    </div>
  );
}

function NearbyCard() {
  const rows = [
    { name: 'Adaeze Aso-Oke', dist: '1.2km', initials: 'AA' },
    { name: 'Ola Fabrics', dist: '2.0km', initials: 'OF' },
    { name: 'Weave & Co', dist: '3.4km', initials: 'WC' },
  ];
  return (
    <div className="flex h-full flex-col gap-2">
      {rows.map((r, i) => (
        <div
          key={r.name}
          className="flex items-center gap-2.5 rounded-xl border border-[#E2E6F0] bg-white px-2.5 py-2"
        >
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ${
              i === 0 ? 'bg-[#0D1020] text-white' : 'bg-[#EFF2FA] text-[#5C6490]'
            }`}
          >
            {r.initials}
          </span>
          <span className="min-w-0 flex-1 truncate text-[13px] font-semibold text-[#0D1020]">
            {r.name}
          </span>
          <span className="flex items-center gap-1 text-[11px] font-medium text-[#5C6490]">
            <MapPin className="h-3 w-3 text-[#FF5A4D]" />
            {r.dist}
          </span>
        </div>
      ))}
    </div>
  );
}

function ChatCard() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      <div className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-[#0D1020] px-3.5 py-2.5 text-[13px] leading-snug text-white">
        Do you have 4 yards in green?
      </div>
      <div className="max-w-[90%] self-start rounded-2xl rounded-bl-md border border-[#E2E6F0] bg-white px-3.5 py-2.5 text-[13px] leading-snug text-[#0D1020]">
        Yes — ₦18,000. I&apos;m open till 7pm 🙂
      </div>
    </div>
  );
}

function VisitCard() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[13px] font-bold text-[#0D1020]">Adaeze Aso-Oke</span>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#DCF5EE] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0F8A66]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#12A67C]" />
          Open
        </span>
      </div>
      <div className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-[#8F97BB]">
        <MapPin className="h-3.5 w-3.5 text-[#FF5A4D]" />
        1.2km · Ring Road
      </div>
      <div className="mt-auto flex items-center justify-between rounded-xl bg-[#0D1020] px-3.5 py-2.5 text-white">
        <span className="inline-flex items-center gap-2 text-[13px] font-semibold">
          <Navigation className="h-4 w-4 text-[#FF7A6F]" />
          Get directions
        </span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}

const stages = [
  { num: '01', tag: 'Search', icon: Search, blurb: 'Type what you need — a product, a shop, a category.', Card: SearchCard },
  { num: '02', tag: 'Nearby', icon: MapPin, blurb: 'See who sells it around you, sorted by distance.', Card: NearbyCard },
  { num: '03', tag: 'Chat', icon: MessageCircle, blurb: 'Ask about price, size and pickup before you go.', Card: ChatCard },
  { num: '04', tag: 'Visit', icon: Check, blurb: 'Head over, or get it delivered. No middlemen.', Card: VisitCard },
];

export function BuyerSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Header
        gsap.from('.buyer-head > *', {
          opacity: 0,
          y: 14,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 85%' },
        });

        // Pipeline — nodes rise, dots pop, connectors draw left-to-right.
        const tl = gsap.timeline({
          scrollTrigger: { trigger: '.buyer-pipeline', start: 'top 80%' },
        });
        tl.from('.pipeline-node', { opacity: 0, y: 22, duration: 0.5, stagger: 0.13, ease: 'power3.out' })
          .from('.pipeline-dot', { scale: 0, duration: 0.4, stagger: 0.13, ease: 'back.out(2)' }, '<0.05')
          .from('.pipeline-seg', { scaleX: 0, duration: 0.55, stagger: 0.13, ease: 'power3.inOut' }, '<0.1');
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="for-buyers"
      className="overflow-hidden bg-[#0A0B12] py-24 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="buyer-head mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FF7A6F]">
            <span className="h-px w-8 bg-[#FF5A4D]" />
            04 — For buyers
          </div>
          <h2 className="font-[family-name:var(--font-bricolage)] text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
            From &ldquo;where do I get this?&rdquo; to{' '}
            <span className="font-[family-name:var(--font-playfair)] font-normal italic text-[#FF5A4D]">
              found it.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Ahiver isn&apos;t just for sellers. For buyers it&apos;s four taps — search what you need,
            see who&apos;s nearby, chat, and go.
          </p>
        </div>

        {/* ── The pipeline ── */}
        <div className="buyer-pipeline grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-y-0">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            const { Card } = stage;
            const isLast = i === stages.length - 1;
            return (
              <div key={stage.num} className="pipeline-node flex flex-col">
                {/* Stage label */}
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  <span className="text-[#FF7A6F]">{stage.num}</span>
                  <span className="h-3 w-px bg-white/25" />
                  {stage.tag}
                </div>

                {/* Dot row + connector segment to the next node */}
                <div className="relative mt-4 mb-6 flex h-[18px] items-center">
                  <span className="relative flex h-[18px] w-[18px] items-center justify-center">
                    {i === 0 && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF5A4D]/40" />
                    )}
                    <span className="pipeline-dot relative h-[18px] w-[18px] rounded-full bg-[#FF5A4D] shadow-[0_0_14px_rgba(255,90,77,0.55)] ring-4 ring-[#0A0B12]" />
                  </span>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="pipeline-seg absolute left-[26px] right-[-1.5rem] top-1/2 hidden h-px origin-left -translate-y-1/2 bg-gradient-to-r from-[#FF5A4D] to-[#FF5A4D]/15 md:block"
                    />
                  )}
                </div>

                {/* Card */}
                <div className="min-h-[152px] flex-1 rounded-2xl border border-white/10 bg-white p-4 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.7)]">
                  <div className="mb-3 flex items-center text-[#8F97BB]">
                    <Icon className="h-4 w-4" strokeWidth={1.8} style={{ color: CORAL }} />
                  </div>
                  <Card />
                </div>

                {/* Blurb */}
                <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-white/55">
                  {stage.blurb}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
