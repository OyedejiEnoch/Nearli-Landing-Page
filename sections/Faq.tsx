"use client"
import Tagline from '@/components/Tagline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Is Ahiver free to use?",
    answer: "Yes. Creating a store and listing products on Ahiver is completely free. We believe every small business deserves a fair shot at visibility without upfront costs or ad budgets."
  },
  {
    question: "Is Ahiver live yet?",
    answer: "Yes — Ahiver is live and available across Nigeria. Just create your account and start selling; setup takes about 5 minutes."
  },
  {
    question: "What cities is Ahiver available in?",
    answer: "Ahiver is built for the whole of Nigeria — from Lagos and Abuja to Kano, Port Harcourt, Ibadan and everywhere in between. Wherever you are, buyers nearby can find you. International markets are on the roadmap."
  },
  {
    question: "Do I need technical skills to set up a store?",
    answer: "Not at all. If you can use WhatsApp, you can use Ahiver. Setup takes under 5 minutes — add your business name, upload product photos, set your price, and you're live."
  },
  {
    question: "How is Ahiver different from selling on Instagram or WhatsApp?",
    answer: "Instagram and WhatsApp only show your products to people who already follow you. Ahiver's discovery feed actively surfaces your store to new customers nearby who are actively looking to buy — no ads required, no follower count needed."
  },
  {
    question: "Can buyers also use Ahiver?",
    answer: "Absolutely. Ahiver works for both sides. Buyers get a local discovery feed showing businesses, products, and live inventory near them. Sellers get found. Buyers find what they need. Everyone wins."
  }
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    if (!contentRef.current) return;
    if (!open) {
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
    setOpen((v) => !v);
  };

  return (
    <div className="border-b border-[#E2E6F0] group">
      <button
        onClick={toggle}
        className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-8 md:py-10 items-start text-left hover:bg-white transition-colors duration-300 px-4 -mx-4"
        aria-expanded={open}
      >
        <div className="md:col-span-1 shrink-0 pt-0.5">
          <span className="text-3xl font-bold text-[#E2E6F0] font-[family-name:var(--font-bricolage)] leading-none group-hover:text-[#0D1020] transition-colors duration-500">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="md:col-span-9">
          <h3 className="text-lg md:text-xl font-semibold text-[#0D1020] tracking-tight group-hover:text-[#0D1020] transition-colors duration-300">
            {question}
          </h3>
        </div>
        <div className="hidden md:flex md:col-span-2 justify-end pt-1">
          {open
            ? <Minus className="w-4 h-4 text-[#0D1020] shrink-0" />
            : <Plus className="w-4 h-4 text-[#5C6490] shrink-0 group-hover:text-[#0D1020] transition-colors duration-300" />
          }
        </div>
      </button>

      <div
        ref={contentRef}
        style={{ height: 0, overflow: 'hidden', opacity: 0 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 pb-8 px-4 -mx-4">
          <div className="md:col-span-1" />
          <div className="md:col-span-9">
            <p className="text-base text-[#5C6490] leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      },
    });

    tl.from('.faq-heading .word-reveal', {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    });

    tl.from('.faq-desc', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.4');

    tl.from('.faq-list', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.4');
  }, { scope: containerRef });

  // ── FAQPage JSON-LD for Google rich results ──
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section ref={containerRef} id="faq" className="py-24 md:py-36 lg:py-44 bg-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
          <Tagline text="FAQ" />
          <h2 className="faq-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0D1020] mb-6 tracking-tight">
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">GOT</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block text-[#0D1020]">QUESTIONS?</span>
            </div>
          </h2>
          <p className="faq-desc text-base md:text-lg text-[#5C6490] max-w-lg mx-auto leading-relaxed">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="faq-list max-w-4xl mx-auto border-t border-[#E2E6F0]">
          {faqs.map((faq, index) => (
            <FaqItem key={index} {...faq} index={index} />
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#5C6490]">
            Still have questions?{' '}
            <a
              href="mailto:oyedejienoch@gmail.com"
              className="text-[#0D1020] font-semibold hover:underline transition-colors"
            >
              Email us directly
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
