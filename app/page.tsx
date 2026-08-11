import { BuyerSection } from "@/sections/BuyerSection";
import { Categories } from "@/sections/Categories";
import { Cta } from "@/sections/Cta";
import { Faq } from "@/sections/Faq";
import { Features } from "@/sections/Features";
import { Mission } from "@/sections/Mission";
import { Footer } from "@/sections/Footer";
import Hero from "@/sections/Hero";
import { HowItWorks } from "@/sections/HowItWorks";
import Navbar from "@/sections/Navbar";
import { Problem } from "@/sections/Problem";
import { Showcase } from "@/sections/Showcase";
import { Spotlight } from "@/sections/Spotlight";
import { TargetUsers } from "@/sections/TargetUsers";
import { Testimonials } from "@/sections/Testimonials";
import ReactLenis from "lenis/react";
import { LenisGsapBridge } from "@/components/LenisGsapBridge";
import { Trust } from "@/sections/Trust";

export default function Home() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      }}
    >
      <LenisGsapBridge />
      <Navbar />
      <Hero />
      <Problem />
      <Mission />
      {/* <HowItWorks /> */}
      <Features />
      <BuyerSection />
      {/* <Spotlight /> */}
      <Categories />
      <Showcase />
      <Testimonials />
      {/* <Trust /> */}
      <TargetUsers />
      <Cta />
      <Faq />
      <Footer />
    </ReactLenis>
  );
}
