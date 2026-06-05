"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { LayoutGroup, motion } from "motion/react"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import { Button } from "@/components/ui/button"
import gsap from "gsap"

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
    title: "Clothing Store",
  },
  {
    url: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop",
    title: "Pottery Artisan",
  },
  {
    url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2000&auto=format&fit=crop",
    title: "Retail Shop",
  },
  {
    url: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2000&auto=format&fit=crop",
    title: "Coffee Shop",
  },
  {
    url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop",
    title: "Local Market",
  },
]

const Hero = () => {
  const firstBtnRef = useRef<HTMLDivElement>(null);
  const secondBtnRef = useRef<HTMLDivElement>(null);

  // Magnetic Button Logic
  const handleMagnetic = (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement | null>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(ref.current, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.4,
          ease: "power2.out"
      });
  };

  const resetMagnetic = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (!ref.current) return;
      gsap.to(ref.current, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)"
      });
  };

  const scrollToCta = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full min-h-[90vh] pt-[72px] bg-[#F8F7F4] overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative">
      {/* Subtle dot grid texture */}
      <div className="hero-grid-bg absolute inset-0 opacity-40" aria-hidden="true" />
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.img
            src={exampleImages[0].url}
            alt={exampleImages[0].title}
            className="w-24 h-16 sm:w-32 sm:h-24 md:w-40 md:h-28 lg:w-48 lg:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.img
            src={exampleImages[1].url}
            alt={exampleImages[1].title}
            className="w-32 h-24 sm:w-40 sm:h-32 md:w-48 md:h-40 lg:w-56 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[85%] left-[6%] md:top-[60%] md:left-[12%]"
        >
          <motion.img
            src={exampleImages[2].url}
            alt={exampleImages[2].title}
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[5%] left-[80%] md:top-[8%] md:left-[75%]"
        >
          <motion.img
            src={exampleImages[3].url}
            alt={exampleImages[3].title}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[70%] left-[75%] md:top-[55%] md:left-[80%]"
        >
          <motion.img
            src={exampleImages[4].url}
            alt={exampleImages[4].title}
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[15deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[90%] sm:w-[80%] md:w-[600px] lg:w-[800px] z-50 pointer-events-auto">
        <motion.div
          className="mb-6 md:mb-8"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] text-[#0F2854] text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            Now accepting early access signups
          </span>
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-6 font-bold text-[#1a1a1a] tracking-wide space-y-2 md:space-y-4 uppercase font-[family-name:var(--font-syne)]"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        >
          <span>Discover</span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre flex-wrap justify-center">
              <TextRotate
                texts={[
                  "Businesses",
                  "Artisans",
                  "Creators",
                  "Vendors",
                  "Sellers"
                ]}
                mainClassName="overflow-hidden pr-3 text-[#0F2854] py-0 pb-2 md:pb-2 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
          <span>Near You</span>
        </motion.h1>
        
        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#555] text-center mt-6 md:mt-8 max-w-xl leading-relaxed"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
        >
          Nearli helps you find, explore, and connect with local businesses near you — instead of searching endlessly or relying on paid ads.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 items-center mt-10 md:mt-12 text-xs">
          <div 
              ref={firstBtnRef}
              onMouseMove={(e) => handleMagnetic(e, firstBtnRef)}
              onMouseLeave={() => resetMagnetic(firstBtnRef)}
              className="magnetic-btn w-full sm:w-auto"
          >
              <Button
                  onClick={scrollToCta}
                  size="lg"
                  className="bg-[#0F2854] hover:bg-[#0a1c3a] text-white text-sm px-8 py-6 font-semibold tracking-wide uppercase rounded-lg transition-colors w-full sm:w-auto shadow-2xl"
              >
                  Join the Waitlist
              </Button>
          </div>
          <div 
              ref={secondBtnRef}
              onMouseMove={(e) => handleMagnetic(e, secondBtnRef)}
              onMouseLeave={() => resetMagnetic(secondBtnRef)}
              className="magnetic-btn w-full sm:w-auto"
          >
              <Button
                  onClick={scrollToHowItWorks}
                  size="lg"
                  variant="outline"
                  className="border border-[#d5d5d5] hover:border-[#0F2854] hover:text-[#0F2854] text-sm px-8 py-6 bg-white font-semibold tracking-wide uppercase rounded-lg transition-colors text-[#555] w-full sm:w-auto shadow-2xl"
              >
                  See How It Works
              </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
