import { BuyerSection } from "@/sections/BuyerSection";
import { Cta } from "@/sections/Cta";
import { Faq } from "@/sections/Faq";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import Hero from "@/sections/Hero";
import { HowItWorks } from "@/sections/HowItWorks";
import Navbar from "@/sections/Navbar";
import { Problem } from "@/sections/Problem";
import { TargetUsers } from "@/sections/TargetUsers";
import { Testimonials } from "@/sections/Testimonials";
import { Trust } from "@/sections/Trust";
import { Unique } from "@/sections/Unique";
import ReactLenis from "lenis/react";
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function Home() {
  return (
    <ReactLenis root>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <BuyerSection />
      <Testimonials />
      <Unique />
      <TargetUsers />
      <Trust />
      <Cta />
      <Faq />
      <Footer />
    </ReactLenis>
  );
}
