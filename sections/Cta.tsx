"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Cta() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });

    tl.from(".cta-heading .word-reveal", {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: "power4.out"
    });

    tl.from(".cta-desc", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");

    tl.from(".cta-form", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "expo.out"
    }, "-=0.2");

    tl.from(".trust-item", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".trust-indicators",
            start: "top 90%"
        }
    });

    // Magnetic Button Logic
    const handleMagnetic = (e: React.MouseEvent) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btnRef.current, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
    };

    const resetMagnetic = () => {
        if (!btnRef.current) return;
        gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    };

    if (btnRef.current) {
        btnRef.current.addEventListener("mousemove", handleMagnetic as any);
        btnRef.current.addEventListener("mouseleave", resetMagnetic);
    }

  }, { scope: containerRef });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      setSubmitted(true);
      
      try {
        // TODO: Replace with your actual Google Form action URL
        const formUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
        
        const formData = new FormData();
        // TODO: Replace 'entry.XXXXXX' with the actual entry ID from your form
        formData.append("entry.XXXXXX", email);

        await fetch(formUrl, {
          method: "POST",
          mode: "no-cors",
          body: formData
        });
        
        console.log('Email submitted to Google Forms (no-cors mode):', email);
      } catch (error) {
        console.error("Error submitting to Google Forms:", error);
      }
    }
  };

  return (
    <section id="cta" ref={containerRef} className="py-20 md:py-28 lg:py-36 bg-[#FDFAF6] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="cta-heading text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-bold mb-8 leading-[0.95] tracking-tight text-[#1a1a1a]">
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">READY</span>
            </div>
            <div className="overflow-hidden inline-block mr-4">
              <span className="word-reveal inline-block">TO</span>
            </div>
            <div className="overflow-hidden inline-block">
              <span className="word-reveal inline-block text-[#120E2E]">GROW?</span>
            </div>
          </h2>
          <p className="cta-desc text-base md:text-lg text-[#6B6B8A] mb-14 max-w-xl mx-auto leading-relaxed">
            Join thousands of entrepreneurs who are already reaching new customers every day.
          </p>

          {!submitted ? (
            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="cta-form flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex-1 relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#bbb]" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-14 pr-6 py-8 text-base bg-white text-[#1a1a1a] border border-[#C5BFDA] rounded-lg focus:ring-1 focus:ring-[#120E2E] focus:border-[#120E2E] shadow-sm"
                  />
                </div>
                <div ref={btnRef} className="magnetic-btn shrink-0">
                    <Button
                    type="submit"
                    size="lg"
                    disabled={!agreed}
                    className="bg-[#120E2E] hover:bg-[#0a0820] text-white px-10 py-8 whitespace-nowrap transition-all text-sm font-bold tracking-widest uppercase rounded-lg shadow-xl shadow-navy/20 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                    Get Early Access
                    <ArrowRight className="ml-3 w-4 h-4" />
                    </Button>
                </div>
              </form>

              {/* Agreement checkbox */}
              <label className="mb-8 flex cursor-pointer items-start justify-center gap-3 text-left">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#120E2E]"
                />
                <span className="max-w-sm text-sm leading-relaxed text-[#6B6B8A]">
                  I agree to the{' '}
                  <Link href="/legal/terms" className="font-medium text-[#120E2E] underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/legal/privacy-policy" className="font-medium text-[#120E2E] underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <div className="flex items-center justify-center gap-6">
                <p className="text-[10px] text-[#6B6B8A] font-bold tracking-[0.2em] uppercase">
                    JOIN THE WAITLIST · NO CREDIT CARD · LAUNCH 2026
                </p>
              </div>
            </div>
          ) : (
            <div className="max-w-lg mx-auto border border-[#C5BFDA] bg-white p-10 md:p-14 shadow-2xl">
              <div className="text-5xl mb-8">🚀</div>
              <h3 className="text-3xl font-bold mb-4 text-[#1a1a1a] font-[family-name:var(--font-barlow)] tracking-tight uppercase">You&apos;re on the list</h3>
              <p className="text-base text-[#6B6B8A] leading-relaxed">
                We&apos;ll notify you as soon as we launch. Get ready to grow your business into something incredible!
              </p>
            </div>
          )}

          {/* Trust Indicators */}
          <div className="trust-indicators mt-24 pt-16 border-t border-[#C5BFDA]">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="trust-item group">
                <div className="text-2xl font-bold mb-3 text-[#1a1a1a] font-[family-name:var(--font-barlow)] tracking-tight group-hover:text-[#120E2E] transition-colors duration-500 uppercase">Free to start</div>
                <div className="text-xs text-[#6B6B8A] font-bold tracking-widest uppercase leading-loose">No upfront costs or hidden fees</div>
              </div>
              <div className="trust-item md:border-x md:border-[#C5BFDA] group">
                <div className="text-2xl font-bold mb-3 text-[#1a1a1a] font-[family-name:var(--font-barlow)] tracking-tight group-hover:text-[#120E2E] transition-colors duration-500 uppercase">5-min setup</div>
                <div className="text-xs text-[#6B6B8A] font-bold tracking-widest uppercase leading-loose">From signup to first product</div>
              </div>
              <div className="trust-item group">
                <div className="text-2xl font-bold mb-3 text-[#1a1a1a] font-[family-name:var(--font-barlow)] tracking-tight group-hover:text-[#120E2E] transition-colors duration-500 uppercase">24/7 support</div>
                <div className="text-xs text-[#6B6B8A] font-bold tracking-widest uppercase leading-loose">We&apos;re here to help you succeed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}