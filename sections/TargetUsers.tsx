"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const users = [
  {
    number: '01',
    title: 'Solo entrepreneurs',
    description: 'Running your business alone? Get a professional storefront without hiring developers or designers.',
    examples: ['Home bakers', 'Beauty product sellers', 'Clothing resellers'],
  },
  {
    number: '02',
    title: 'Creators & makers',
    description: 'Turn your craft into income. Showcase handmade products to customers who value authentic items.',
    examples: ['Jewelry makers', 'Artists', 'Handcraft artisans'],
  },
  {
    number: '03',
    title: 'Small retail',
    description: 'Expand beyond your physical location. Reach customers who can\'t visit your shop in person.',
    examples: ['Boutiques', 'Local shops', 'Pop-up vendors'],
  },
  {
    number: '04',
    title: 'Informal vendors',
    description: 'Transitioning online? Start with a simple store and upgrade as you grow. No complicated setup.',
    examples: ['Market traders', 'Street vendors', 'Side hustlers'],
  },
];

export function TargetUsers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 65%' },
    });

    tl.from('.tgt-eyebrow', { opacity: 0, y: 12, duration: 0.4, ease: 'power2.out' });
    tl.from('.tgt-heading', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.2');
    tl.from('.tgt-desc', { opacity: 0, y: 12, duration: 0.4, ease: 'power2.out' }, '-=0.25');
    tl.from(cardsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power3.out',
    }, '-=0.15');

    tl.from('.tgt-success', { opacity: 0, y: 30, duration: 0.6, ease: 'power2.out' }, '-=0.1');
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="targetUsers"
      className="overflow-hidden bg-[#ffffff] py-24 md:py-36 lg:py-44"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* ── Signature recipe header ── */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <div
            className="tgt-eyebrow mb-5 text-xs font-semibold uppercase tracking-[0.4em]"
            style={{ color: '#FF5A4D' }}
          >
            Who it&apos;s for
          </div>
          <h2 className="tgt-heading text-4xl leading-[1.02] tracking-tight text-[#0D1020] sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-bricolage)]">
            Built for every{' '}
            <span
              className="italic font-normal font-[family-name:var(--font-playfair)]"
              style={{ color: '#FF5A4D' }}
            >
              entrepreneur.
            </span>
          </h2>
          <p className="tgt-desc mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#5C6490] md:text-lg">
            Whether you&apos;re just starting or ready to scale, we&apos;re here to help you grow.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {users.map((user, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group rounded-2xl border border-[#E2E6F0] bg-white p-7 transition-colors duration-500 hover:bg-[#EFF2FA] lg:p-8"
            >
              <span
                className="block mb-5 text-4xl font-black leading-none text-[#CDD4E8] transition-colors duration-500 group-hover:text-[#0D1020] font-[family-name:var(--font-bricolage)]"
              >
                {user.number}
              </span>
              <div className="mb-5 h-px w-10 bg-[#E2E6F0] transition-all duration-700 group-hover:w-full group-hover:bg-[#0D1020]" />
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-[#0D1020]">
                {user.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#5C6490]">{user.description}</p>
              <div className="flex flex-wrap gap-2">
                {user.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full border border-[#E2E6F0] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5C6490] transition-colors duration-500 group-hover:border-[#0D1020] group-hover:bg-[#0D1020] group-hover:text-white"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Success story card ── */}
        <div className="tgt-success mx-auto mt-20 max-w-6xl">
          <div
            className="grid grid-cols-1 items-center gap-12 overflow-hidden rounded-3xl p-10 text-white md:p-14 lg:grid-cols-3 lg:gap-16 lg:p-16"
            style={{ background: '#0D1020' }}
          >
            <div className="lg:col-span-2">
              <div
                className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: '#FF7A6F' }}
              >
                Success story
              </div>
              <h3 className="text-3xl leading-[1.05] tracking-tight md:text-4xl lg:text-5xl font-black font-[family-name:var(--font-bricolage)]">
                &ldquo;I believe I can grow from 20 sales a month to{' '}
                <span
                  className="italic font-normal font-[family-name:var(--font-playfair)]"
                  style={{ color: '#FF7A6F' }}
                >
                  200+.
                </span>
                &rdquo;
              </h3>
              <p className="mt-8 text-base leading-relaxed text-white/80 md:text-lg">
                &ldquo;Right now I&apos;m only selling to people who already know me. With a solution
                like this, customers from across the city can find me every day through the discovery
                feed.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-10 bg-white/40" />
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest">Joke M.</div>
                  <div className="text-xs font-medium uppercase tracking-widest text-white/60">
                    Cake vendor · Abuja
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-[400px] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Entrepreneur"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
