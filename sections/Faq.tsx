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
    question: "Is Nearli free to use?",
    answer: "Yes. Creating a store and listing products on Nearli is completely free. We believe every small business deserves a fair shot at visibility without upfront costs or ad budgets."
  },
  {
    question: "When does Nearli launch?",
    answer: "We're targeting a 2026 launch starting in Lagos. Join the waitlist to be among the first sellers on the platform and get early access before we open to the public."
  },
  {
    question: "What cities will be available at launch?",
    answer: "We're launching in Lagos first. Based on waitlist demand, we'll expand to Abuja, Port Harcourt, and other major Nigerian cities shortly after. International markets are on the roadmap."
  },
  {
    question: "Do I need technical skills to set up a store?",
    answer: "Not at all. If you can use WhatsApp, you can use Nearli. Setup takes under 5 minutes — add your business name, upload product photos, set your price, and you're live."
  },
  {
    question: "How is Nearli different from selling on Instagram or WhatsApp?",
    answer: "Instagram and WhatsApp only show your products to people who already follow you. Nearli's discovery feed actively surfaces your store to new customers nearby who are actively looking to buy — no ads required, no follower count needed."
  },
  {
    question: "Can buyers also use Nearli?",
    answer: "Absolutely. Nearli works for both sides. Buyers get a local discovery feed showing businesses, products, and live inventory near them. Sellers get found. Buyers find what they need. Everyone wins."
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
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
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
    <div className="border-b border-[#C5BFDA] group">
      <button
        onClick={toggle}
        className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-8 md:py-10 items-start text-left hover:bg-[#FDFAF6] transition-colors duration-300 px-4 -mx-4"
        aria-expanded={open}
      >
        <div className="md:col-span-1 shrink-0 pt-0.5">
          <span className="text-3xl font-bold text-[#C5BFDA] font-[family-name:var(--font-barlow)] leading-none group-hover:text-[#120E2E] transition-colors duration-500">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="md:col-span-9">
          <h3 className="text-lg md:text-xl font-semibold text-[#1a1a1a] tracking-tight group-hover:text-[#120E2E] transition-colors duration-300">
            {question}
          </h3>
        </div>
        <div className="hidden md:flex md:col-span-2 justify-end pt-1">
          {open
            ? <Minus className="w-4 h-4 text-[#120E2E] shrink-0" />
            : <Plus className="w-4 h-4 text-[#6B6B8A] shrink-0 group-hover:text-[#120E2E] transition-colors duration-300" />
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
            <p className="text-base text-[#6B6B8A] leading-relaxed">{answer}</p>
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
        start: 'top 65%',
      },
    });

    tl.from('.faq-heading .word-reveal', {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power4.out',
    });

    tl.from('.faq-desc', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.4');

    tl.from('.faq-list', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'expo.out',
    }, '-=0.4');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="faq" className="py-20 md:py-28 lg:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <Tagline text="FAQ" />
          <h2 className="faq-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">GOT</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block text-[#120E2E]">QUESTIONS?</span>
            </div>
          </h2>
          <p className="faq-desc text-base md:text-lg text-[#6B6B8A] max-w-lg mx-auto leading-relaxed">
            Everything you need to know before joining the waitlist.
          </p>
        </div>

        <div className="faq-list max-w-4xl mx-auto border-t border-[#C5BFDA]">
          {faqs.map((faq, index) => (
            <FaqItem key={index} {...faq} index={index} />
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#6B6B8A]">
            Still have questions?{' '}
            <a
              href="mailto:oyedejienoch@gmail.com"
              className="text-[#120E2E] font-semibold hover:underline transition-colors"
            >
              Email us directly
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
