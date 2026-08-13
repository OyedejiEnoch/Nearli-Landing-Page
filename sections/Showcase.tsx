"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CORAL = "#FF5A4D"; // section accent + the vendor's distance marker

// Representative local stores — same illustrative convention as the hero's
// "Mama Kemi's Kitchen" floating card. Real category photography from
// /public/categories. Swap for live featured stores once the API exposes them.
const stores = [
  { name: "Mama Kemi's Kitchen", category: "Food", tag: "Jollof & small chops", distance: "0.8km", image: "/categories/food.jpg", open: true },
  { name: "Adaeze Aso-Oke", category: "Fashion", tag: "Handwoven aso-oke", distance: "1.2km", image: "/categories/asoke.jpg", open: true },
  { name: "TechHub Ikeja", category: "Gadgets", tag: "Phones & accessories", distance: "2.4km", image: "/categories/gadgets.jpg", open: false },
  { name: "Bloom Beauty Bar", category: "Beauty", tag: "Skincare & makeup", distance: "0.5km", image: "/categories/beauty.jpg", open: true },
  { name: "Golden Threads", category: "Jewelry", tag: "Custom gold pieces", distance: "3.1km", image: "/categories/jewelery.jpg", open: true },
  { name: "Fresh Farm Grocers", category: "Groceries", tag: "Daily fresh produce", distance: "1.7km", image: "/categories/produce.jpg", open: true },
  { name: "Stride Footwear", category: "Fashion", tag: "Leather shoes & sandals", distance: "2.0km", image: "/categories/shoe.jpg", open: false },
];

function StoreCard({ store }: { store: (typeof stores)[number] }) {
  return (
    <a
      href="https://app.ahiver.com/"
      draggable={false}
      className="group relative block w-[280px] shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0D1020] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_40px_80px_-32px_rgba(0,0,0,0.8)] active:scale-[0.99] sm:w-[340px]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={store.image}
          alt={store.name}
          loading="lazy"
          draggable={false}
          className="h-full w-full select-none object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.06]"
        />
        {/* Legibility scrim */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1020]/85 via-[#0D1020]/10 to-transparent" />

        {/* Top chips */}
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#0D1020] shadow-sm backdrop-blur"
          >
            <MapPin className="h-3 w-3" style={{ color: CORAL }} />
            {store.distance}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur ${
              store.open ? "bg-emerald-50/95 text-emerald-600" : "bg-white/90 text-[#5C6490]"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${store.open ? "bg-emerald-500" : "bg-[#8F97BB]"}`} />
            {store.open ? "Open now" : "Closed"}
          </span>
        </div>

        {/* Overlaid identity */}
        <div className="absolute inset-x-5 bottom-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
            {store.category}
          </p>
          <h3 className="mt-1 font-[family-name:var(--font-bricolage)] text-xl font-bold leading-tight text-white">
            {store.name}
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[13px] text-white/80">{store.tag}</span>
            <span
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white opacity-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:bg-[#FF5A4D] group-hover:opacity-100"
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      });
      tl.from(".show-eyebrow", { opacity: 0, y: 12, duration: 0.4, ease: "power3.out" });
      tl.from(".show-heading", { opacity: 0, y: 16, duration: 0.5, ease: "power3.out" }, "-=0.2");
      tl.from(".show-desc", { opacity: 0, y: 12, duration: 0.4, ease: "power3.out" }, "-=0.25");
      tl.from(".show-card", { opacity: 0, y: 28, duration: 0.5, stagger: 0.06, ease: "power3.out" }, "-=0.1");
    },
    { scope: containerRef }
  );

  const scrollByCards = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".show-card");
    const step = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Pointer drag — feels native on desktop where horizontal wheel isn't a given.
  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current = { down: true, startX: e.clientX, startLeft: track.scrollLeft, moved: false };
    track.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    track.scrollLeft = drag.current.startLeft - dx;
  };
  const endDrag = (e: React.PointerEvent) => {
    const track = trackRef.current;
    drag.current.down = false;
    if (track) {
      try { track.releasePointerCapture(e.pointerId); } catch { /* released already */ }
    }
  };
  // Swallow the click that follows a drag so a card doesn't navigate on release.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section ref={containerRef} id="showcase" className="overflow-hidden bg-black py-24 md:py-28">
      {/* Header — centered, in the site container */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div
              className="show-eyebrow mb-5 text-xs font-semibold uppercase tracking-[0.4em]"
              style={{ color: CORAL }}
            >
              06 — Near you
            </div>
            <h2 className="show-heading text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-bricolage)]">
              Real stores,{" "}
              <span className="italic font-normal font-[family-name:var(--font-playfair)]" style={{ color: CORAL }}>
                already open.
              </span>
            </h2>
            <p className="show-desc mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              These are the kinds of businesses your neighbours are finding on Ahiver every day —
              a walk away, ready now, no ads in sight.
            </p>
          </div>

          {/* Arrow controls */}
          <div className="flex flex-shrink-0 items-center gap-2">
            <button
              onClick={() => scrollByCards(-1)}
              aria-label="Previous stores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/10 active:scale-95"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollByCards(1)}
              aria-label="Next stores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/10 active:scale-95"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-bleed draggable scroller */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className="showcase-scroller mt-12 flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-4 active:cursor-grabbing sm:px-6 lg:px-8"
      >
        {stores.map((store) => (
          <div key={store.name} className="show-card">
            <StoreCard store={store} />
          </div>
        ))}
        {/* Tail spacer so the last card can snap-center without hugging the edge */}
        <div aria-hidden className="w-1 shrink-0 sm:w-6" />
      </div>
    </section>
  );
}
