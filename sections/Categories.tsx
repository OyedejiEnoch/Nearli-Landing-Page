"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

// NOTE: Swap these Unsplash placeholders for your own Nigerian product photos
// (drop them in /public and reference like "/categories/fresh-produce.jpg").
const categories = [
  { name: 'Fresh Produce', image: '/categories/produce.jpg' },
  { name: 'Aso-oke', image: '/categories/asoke.jpg' },
  { name: 'Groceries', image: '/categories/groceries.jpg' },
  { name: 'Gadgets', image: '/categories/gadgets.jpg' },
  { name: 'Jewelry', image: '/categories/jewelery.jpg' },
  { name: 'Fashion', image: '/categories/fashion.jpg' },
  { name: 'Food', image: '/categories/food.jpg' },
  { name: 'Beauty', image: '/categories/beauty.jpg' },
];

function CategoryCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="w-[200px] shrink-0 sm:w-[250px]">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#EFF2FA]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
        />
      </div>
      <div className="mt-4 text-center text-base font-semibold text-[#0D1020]">{name}</div>
    </div>
  );
}

export function Categories() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
    });

    tl.from('.cat-heading', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' });
    tl.from('.cat-desc', { opacity: 0, y: 12, duration: 0.4, ease: 'power3.out' }, '-=0.25');
    tl.from('.cat-marquee', { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.2');
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="categories"
      className="overflow-hidden bg-white py-24 md:py-28 lg:py-30"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <div
            className="mb-5 text-xs font-semibold uppercase tracking-[0.4em]"
            style={{ color: '#FF5A4D' }}
          >
            05 — Explore
          </div>
          <h2 className="cat-heading text-4xl leading-[1.02] tracking-tight text-[#0D1020] sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-bricolage)]">
            Every category, just{' '}
            <span
              className="italic font-normal font-[family-name:var(--font-playfair)]"
              style={{ color: '#FF5A4D' }}
            >
              nearby.
            </span>
          </h2>
          <p className="cat-desc mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5C6490] md:text-lg">
            From fabrics to food to gadgets — whatever you&apos;re looking for, there&apos;s a
            business near you that sells it.
          </p>
        </div>
      </div>

      {/* Marquee — full bleed */}
      <div className="cat-marquee nearli-marquee-group relative">
        <div className="flex w-max">
          {/* track (duplicated for a seamless loop) */}
          <div className="nearli-marquee flex w-max gap-4 pr-4 sm:gap-6 sm:pr-6">
            {categories.map((cat) => (
              <CategoryCard key={`a-${cat.name}`} {...cat} />
            ))}
          </div>
          <div className="nearli-marquee flex w-max gap-4 pr-4 sm:gap-6 sm:pr-6" aria-hidden="true">
            {categories.map((cat) => (
              <CategoryCard key={`b-${cat.name}`} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
