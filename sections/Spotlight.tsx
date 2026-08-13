"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ArrowUpRight, Check, Copy, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BLUE = '#60A5FA';

// ── A light app-screen frame floating on the dark section. ──
function Frame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="spot-media relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[#3B82F6]/12 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_40px_90px_-40px_rgba(0,0,0,0.85)]">
        <div className="flex items-center gap-2 border-b border-gray-200 bg-[#f2f3f7] px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#e0e2e8]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#e0e2e8]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#e0e2e8]" />
          </div>
          <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-[10px] text-gray-400">{url}</div>
        </div>
        <div className="bg-[#f9f9fb] p-5">{children}</div>
      </div>
    </div>
  );
}

function GreetingPanel() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-white p-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0D1020] text-xs font-bold text-white">
            MK
          </div>
          <div className="min-w-0">
            <div className="font-mono text-[9px] uppercase tracking-wider text-gray-400">
              Mama Kemi&apos;s Kitchen · Food &amp; drinks
            </div>
            <div className="font-[family-name:var(--font-bricolage)] text-lg font-black leading-tight tracking-tight text-[#0D1020]">
              Good morning, Kemi. <span className="font-semibold text-[#3B82F6]">you&apos;re live.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-[#0D1020] p-4 text-white">
        <div className="font-mono text-[8px] uppercase tracking-wider text-white/40">Your store link</div>
        <div className="mt-2 flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1.5">
          <span className="flex-1 truncate text-[11px] text-white/70">app.ahiver.com/store/mama-kemis</span>
          <Copy className="h-3 w-3 shrink-0 text-[#60A5FA]" />
        </div>
        <div className="mt-2 flex items-center justify-center gap-1.5 rounded-md bg-[#3B82F6] py-2 text-[11px] font-semibold text-white">
          View my store <ExternalLink className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}

function KpiPanel() {
  const kpis = [
    { label: 'Products', value: '24' },
    { label: 'Posts', value: '8' },
    { label: 'Followers', value: '137' },
    { label: 'Views', value: '1.2k' },
  ];
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
      {kpis.map((k) => (
        <div key={k.label} className="bg-white p-4">
          <div className="font-mono text-[9px] uppercase tracking-wider text-gray-400">{k.label}</div>
          <div className="mt-1.5 font-[family-name:var(--font-bricolage)] text-2xl font-black leading-none tracking-tight text-[#0D1020]">
            {k.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function ChecklistPanel() {
  const items: [string, boolean][] = [
    ['Store created', true],
    ['First product', true],
    ['Banner uploaded', true],
    ['Description added', true],
    ['Contact number', true],
    ['First post', false],
  ];
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-mono text-[8px] uppercase tracking-wider text-gray-400">Setup</div>
          <div className="mt-0.5 text-xs font-semibold text-gray-900">5 of 6 done · 83%</div>
        </div>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-[83%] rounded-full bg-[#3B82F6]" />
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-4">
        {items.map(([label, done]) => (
          <li key={label} className="flex items-center gap-2 text-[11px]">
            {done ? (
              <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#0D1020]">
                <Check className="h-2.5 w-2.5 text-white" strokeWidth={4} />
              </span>
            ) : (
              <span className="h-3.5 w-3.5 shrink-0 rounded-full border-2 border-gray-200" />
            )}
            <span className={done ? 'text-gray-400 line-through' : 'text-gray-800'}>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const rows = [
  {
    eyebrow: 'Storefront',
    lead: 'A store that’s live the moment you',
    accent: 'sign up.',
    body: 'Your name, your logo, a public link — ready to share from day one. No builder, no theme shopping, no developer.',
    cta: { label: 'See a live store', href: 'https://app.ahiver.com/' },
    url: 'app.ahiver.com/dashboard',
    Panel: GreetingPanel,
    reverse: false,
  },
  {
    eyebrow: 'Live metrics',
    lead: 'Real numbers.',
    accent: 'Honest zeros.',
    body: 'Products, posts, followers, views — the real figures, with no fake trend arrows. What you see is exactly what’s happening.',
    cta: null,
    url: 'app.ahiver.com/dashboard',
    Panel: KpiPanel,
    reverse: true,
  },
  {
    eyebrow: 'Get found',
    lead: 'A short checklist that gets you',
    accent: 'discovered.',
    body: 'Six real steps — every check is a completed field, not gamified fluff. Finish them and nearby buyers can find you.',
    cta: null,
    url: 'app.ahiver.com/dashboard',
    Panel: ChecklistPanel,
    reverse: false,
  },
];

export function Spotlight() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.spot-head > *', {
          opacity: 0,
          y: 16,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        });

        gsap.utils.toArray<HTMLElement>('.spot-row').forEach((row) => {
          const text = row.querySelector('.spot-text');
          const media = row.querySelector('.spot-media');
          gsap
            .timeline({ scrollTrigger: { trigger: row, start: 'top 78%' } })
            .from(media, { opacity: 0, y: 40, duration: 0.75, ease: 'power3.out' })
            .from(text, { opacity: 0, y: 22, duration: 0.6, ease: 'power3.out' }, '-=0.55');
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="inside"
      className="overflow-hidden bg-[#0A0B12] py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="spot-head mb-20 max-w-2xl lg:mb-28">
          <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#60A5FA]">
            <span className="h-px w-8 bg-[#60A5FA]" />
            Inside the app
          </div>
          <h2 className="font-[family-name:var(--font-bricolage)] text-4xl font-black leading-[1.0] tracking-tight text-white sm:text-5xl lg:text-6xl">
            The tools you{' '}
            <span className="font-[family-name:var(--font-playfair)] font-normal italic text-[#60A5FA]">
              actually get.
            </span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
            Not a mockup — this is the seller dashboard live in production today. Every screen below is
            the real thing.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-36">
          {rows.map((row) => {
            const { Panel } = row;
            return (
              <div
                key={row.eyebrow}
                className="spot-row grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                <div className={`spot-text ${row.reverse ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-[#60A5FA]">
                    <span className="h-px w-6 bg-[#60A5FA]" />
                    {row.eyebrow}
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-bricolage)] text-3xl font-black leading-[1.04] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
                    {row.lead}{' '}
                    <span className="font-[family-name:var(--font-playfair)] font-normal italic text-[#60A5FA]">
                      {row.accent}
                    </span>
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">{row.body}</p>
                  {row.cta && (
                    <a
                      href={row.cta.href}
                      className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A0B12] transition-colors hover:bg-[#E0EBFF]"
                    >
                      {row.cta.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>

                <div className={row.reverse ? 'lg:order-1' : ''}>
                  <Frame url={row.url}>
                    <Panel />
                  </Frame>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
