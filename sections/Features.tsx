"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Heart, MapPin, MessageSquare, BarChart3, Smartphone, UserPlus } from 'lucide-react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Heart,
    title: 'Social product posts',
    description: 'Every product you list becomes engaging social content — likes, comments, shares.',
  },
  {
    icon: UserPlus,
    title: 'Store follows',
    description: 'Build a real audience. Customers follow you and get notified when you post something new.',
  },
  {
    icon: MapPin,
    title: 'Location discovery',
    description: 'Get found by customers nearby — your feed appears to people around you first.',
  },
  {
    icon: BarChart3,
    title: 'Seller dashboard',
    description: 'Views, likes, followers, sales — see what resonates and what needs a rethink.',
  },
  {
    icon: MessageSquare,
    title: 'Direct messaging',
    description: 'Chat with customers in the app. Answer questions, negotiate, close sales.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first',
    description: 'Made for the phone in your hand. Fast on slow networks, light on data.',
  },
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 85%' },
    });

    tl.from('.features-eyebrow', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' });
    tl.from('.features-heading', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.2');
    tl.from('.features-desc', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' }, '-=0.25');
    tl.from(featuresRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power3.out',
    }, '-=0.15');

    // Highlight strip animates independently — own scrollTrigger, NOT nested
    // inside the timeline (nesting sets opacity:0 immediately and often never plays).
    gsap.from('.features-highlight', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.features-highlight', start: 'top 85%' },
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="features"
      className="overflow-hidden bg-[#ffffff] py-24 md:py-28 lg:py-28"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* ── Signature recipe header ── */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <div
            className="features-eyebrow mb-5 text-xs font-semibold uppercase tracking-[0.4em]"
            style={{ color: '#FF5A4D' }}
          >
            03 — Features
          </div>
          <h2 className="features-heading text-4xl leading-[1.02] tracking-tight text-[#0D1020] sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-bricolage)]">
            Everything you need to be{' '}
            <span
              className="italic font-normal font-[family-name:var(--font-playfair)]"
              style={{ color: '#FF5A4D' }}
            >
              found.
            </span>
          </h2>
          <p className="features-desc mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#5C6490] md:text-lg">
            Simple tools designed for small businesses — not enterprise complexity.
          </p>
        </div>

        {/* ── Feature grid (light glass) ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px max-w-7xl mx-auto bg-[#E2E6F0]">
          {features.map((feature, index) => (
            <div 
              key={index}
               ref={(el) => { featuresRef.current[index] = el }}
              className="bg-white p-8 lg:p-10 group hover:bg-white transition-colors duration-500"
            >
              <div className="w-12 h-12 bg-[#0D1020] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-elastic shadow-lg shadow-navy/20">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#0D1020] mb-3 group-hover:text-[#0D1020] transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-sm text-[#5C6490] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Highlight strip ── */}
        <div className="features-highlight mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 rounded-3xl border border-[#E2E6F0] bg-white p-10 md:p-14 lg:grid-cols-2 lg:gap-16 lg:p-16">
            <div>
              <div
                className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: '#FF5A4D' }}
              >
                Built for phones first
              </div>
              <h3 className="text-3xl leading-[1.02] tracking-tight text-[#0D1020] md:text-4xl font-black font-[family-name:var(--font-bricolage)]">
                Your phone is your{' '}
                <span
                  className="italic font-normal font-[family-name:var(--font-playfair)]"
                  style={{ color: '#FF5A4D' }}
                >
                  office.
                </span>
              </h3>
              <p className="mt-6 text-base leading-relaxed text-[#5C6490] md:text-lg">
                We built Ahiver mobile-first because that&apos;s how you and your customers actually
                work.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  'Fast even on slow connections',
                  'Works offline with smart caching',
                  'Optimised for low data usage',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#0D1020]">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: '#FF5A4D' }}
                    />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#E2E6F0]">
              <img
                src="https://images.unsplash.com/photo-1766806756904-bad81fe3b104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Mobile shopping"
                className="h-72 w-full object-cover md:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
