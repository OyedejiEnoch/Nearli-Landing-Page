"use client"
import Tagline from '@/components/Tagline';
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
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#F0EBE2]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
        />
      </div>
      <div className="mt-4 text-center text-base font-semibold text-[#1a1a1a]">{name}</div>
    </div>
  );
}

export function Categories() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
    });

    tl.from('.cat-heading .word-reveal', {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power4.out',
    });

    tl.from('.cat-desc', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out' }, '-=0.4');
    tl.from('.cat-marquee', { opacity: 0, y: 30, duration: 1, ease: 'power2.out' }, '-=0.3');
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="categories"
      className="overflow-hidden bg-[#FDFAF6] py-20 md:py-28 lg:py-32"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <Tagline text="Explore" />
          <h2 className="cat-heading mb-6 text-4xl font-bold tracking-tight text-[#1a1a1a] md:text-5xl lg:text-6xl xl:text-7xl">
            <div className="mr-4 inline-block overflow-hidden">
              <span className="word-reveal inline-block">EVERY</span>
            </div>
            <div className="mr-4 inline-block overflow-hidden">
              <span className="word-reveal inline-block text-[#120E2E]">CATEGORY</span>
            </div>
            <br />
            <div className="mr-4 inline-block overflow-hidden">
              <span className="word-reveal inline-block">NEAR</span>
            </div>
            <div className="inline-block overflow-hidden">
              <span className="word-reveal inline-block">YOU.</span>
            </div>
          </h2>
          <p className="cat-desc mx-auto max-w-xl text-base leading-relaxed text-[#6B6B8A] md:text-lg">
            From fabrics to food to gadgets — whatever you&apos;re looking for, there&apos;s a
            business near you that sells it.
          </p>
        </div>
      </div>

      {/* Marquee — full bleed */}
      <div className="cat-marquee nearli-marquee-group relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FDFAF6] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FDFAF6] to-transparent md:w-32" />

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
