"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowDownLeft, ArrowRight, ArrowUpRight, ChevronDown, MapPin, MessageCircle, Store } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";
import { buyerAiLink } from "@/lib/buyer-ai";
import styles from "./BuyerAi.module.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Tell us what you’re looking for.",
    description: "Birthday cake, aso-oke, a phone repair. Just type what you need in your own words. Buyer AI helps you find businesses on Ahiver.",
    caption: "An everyday question. A local starting point.",
  },
  {
    title: "Make it about your neighbourhood.",
    description: "Share a WhatsApp location pin, or type your area and city. Ahiver uses your location to look for relevant businesses around you.",
    caption: "A little location goes a long way.",
  },
  {
    title: "Find a store. Take the next step.",
    description: "Explore the suggested stores, open a storefront, and contact the seller. Confirm the price and availability before you buy.",
    caption: "From the conversation to the storefront.",
  },
];

const steps = [
  {
    number: "01",
    title: "Open the chat.",
    description: "Start a WhatsApp conversation with Ahiver. No new app or buyer account needed.",
    sample: "Hi Ahiver",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Say what. Say where.",
    description: "Tell us what you need, then share a location pin or type your neighbourhood and city.",
    sample: "I need a birthday cake in Ikeja",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Meet your next find.",
    description: "See suggested businesses, open a store, and get the details directly from the seller.",
    sample: "Find it. Check it. Make it yours.",
    icon: Store,
  },
];

const journey = [
  { number: "01", title: "Ask naturally", detail: "Say what you need" },
  { number: "02", title: "Make it local", detail: "Share an area or pin" },
  { number: "03", title: "Meet a business", detail: "Open the right store" },
];

function BuyerLink({ className = "" }: { className?: string }) {
  return (
    <a className={className} href={buyerAiLink.href} target="_blank" rel="noopener noreferrer">
      <MessageCircle size={19} aria-hidden="true" />
      {buyerAiLink.label}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

const screenshots = {
  light: {
    location: {
      src: "/buyer-ai/location-light.jpeg",
      alt: "Ahiver on WhatsApp asks for a location, receives a shared map pin, and asks what the buyer is looking for.",
      width: 540,
      height: 1160,
    },
    results: {
      src: "/buyer-ai/results-light.jpeg",
      alt: "A buyer asks for skin care vendors. Ahiver suggests Kemi Glow Skincare 3.2 km away and provides an Open store button.",
      width: 540,
      height: 1166,
    },
  },
  dark: {
    location: {
      src: "/buyer-ai/location-dark.jpeg",
      alt: "Ahiver's dark WhatsApp chat shows the welcome message, Send Location action, and the buyer's shared location.",
      width: 540,
      height: 1153,
    },
    results: {
      src: "/buyer-ai/results-dark.jpeg",
      alt: "A buyer asks for food vendors nearby. Ahiver suggests Fresh Farms Ibadan 9.5 km away, with View matches and a storefront link.",
      width: 540,
      height: 1148,
    },
  },
};

function ChatPreview({ active, animate }: { active: number; animate: boolean }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const screenshot = screenshots[theme][active === 1 ? "location" : "results"];

  return (
    <figure className={styles.preview}>
      <div className={styles.previewTop}>
        <span><i aria-hidden="true" /> REAL CHATS. LOCAL FINDS.</span>
        <b aria-label={`Step ${active + 1} of ${features.length}`}>0{active + 1} / 03</b>
        <ArrowDownLeft size={26} strokeWidth={1.4} aria-hidden="true" />
      </div>
      <div className={styles.previewThemes} role="radiogroup" aria-label="WhatsApp screenshot appearance">
        <button type="button" role="radio" aria-checked={theme === "light"} onClick={() => setTheme("light")}>
          Light chat
        </button>
        <button type="button" role="radio" aria-checked={theme === "dark"} onClick={() => setTheme("dark")}>
          Dark chat
        </button>
      </div>
      <div
        id="buyer-ai-preview"
        role="region"
        aria-label={features[active].title}
        aria-live="polite"
        aria-atomic="true"
        className={styles.phone}
        data-theme={theme}
      >
        <div key={`${active}-${theme}`} className={animate ? styles.screenshotAnimated : styles.screenshotStage}>
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={screenshot.width}
            height={screenshot.height}
            sizes="(max-width: 820px) 80vw, 360px"
            unoptimized
            className={styles.chatScreenshot}
          />
        </div>
      </div>
      <figcaption>
        {features[active].caption}
        <span className={styles.screenshotNote}>Actual Ahiver conversation. Results vary by search and area.</span>
        <a className={styles.fullScreenshot} href={screenshot.src} target="_blank" rel="noopener noreferrer">
          View full conversation <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}

export function BuyerAi() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [animatePreview, setAnimatePreview] = useState(false);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-buyer-reveal]", {
        y: 18,
        opacity: 0,
        duration: 0.65,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
      });
      gsap.from("[data-buyer-showcase]", {
        scale: 0.97,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-buyer-showcase]", start: "top 85%", once: true },
      });
      gsap.from("[data-buyer-step]", {
        y: 20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#how-it-works", start: "top 78%", once: true },
      });
    });
    return () => media.revert();
  }, { scope: root });

  return (
    <div ref={root} className={styles.root}>
      <section id="buyer-ai" className={styles.intro} aria-labelledby="buyer-ai-heading">
        <div id="for-buyers" className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <h2 id="buyer-ai-heading" data-buyer-reveal>Your next great find.<br /><em>One message away.</em></h2>
            </div>
            <div className={styles.introCopy} data-buyer-reveal>
              <p>The neighbourhood knows a place.<br />Now your WhatsApp does, too.</p>
              <p>Tell Ahiver what you need. Find local businesses to explore, right from a conversation you already know.</p>
              <a href="#how-it-works" className={styles.textLink}>See how it works <ArrowDown size={17} aria-hidden="true" /></a>
            </div>
          </div>

          <div className={styles.showcase} data-buyer-showcase>
            <div className={styles.featureSide}>
              <div className={styles.featureIntro}>
                <h3>Less searching.<br />More <em>finding.</em></h3>
                <p>A little chat. A local find.</p>
              </div>
              <div className={styles.features}>
                {features.map((feature, index) => {
                  return (
                    <div key={feature.title} className={styles.feature} data-active={active === index}>
                      <h4>
                        <button
                          type="button"
                          aria-expanded={active === index}
                          aria-current={active === index ? "step" : undefined}
                          aria-controls={"buyer-feature-" + index}
                          onClick={(event) => {
                            setAnimatePreview(event.detail !== 0);
                            setActive(index);
                          }}
                        >
                          <span className={styles.featureIndex} aria-hidden="true">0{index + 1}</span>
                          <span>{feature.title}</span>
                          <ChevronDown size={18} aria-hidden="true" />
                        </button>
                      </h4>
                      <div id={"buyer-feature-" + index} hidden={active !== index} className={styles.featureDescription}>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.featureCta}>
                <BuyerLink className={styles.primaryLink} />
                <span>{buyerAiLink.isWhatsApp ? "No new app. No buyer account." : "Discover local businesses on Ahiver."}</span>
              </div>
            </div>
            <ChatPreview active={active} animate={animatePreview} />
          </div>
          <ol className={styles.journeyRail} aria-label="How Buyer AI finds nearby businesses" data-buyer-reveal>
            {journey.map((item, index) => (
              <li key={item.number}>
                <span className={styles.journeyNumber}>{item.number}</span>
                <span className={styles.journeyText}><strong>{item.title}</strong><small>{item.detail}</small></span>
                {index < journey.length - 1 ? <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="how-it-works" className={styles.start} aria-labelledby="buyer-start-heading">
        <div className={styles.container}>
          <div className={styles.startHeading}>
            <div data-buyer-step>
              <h2 id="buyer-start-heading">You already know<br /><em>how to do this.</em></h2>
            </div>
            <p data-buyer-step>If you can send a message,<br />you can ask Ahiver.</p>
          </div>
          <ol className={styles.steps}>
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.number} data-buyer-step>
                  <div className={styles.stepTop}><span>{step.number}</span><Icon size={23} strokeWidth={1.4} aria-hidden="true" /></div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className={styles.sample}>{step.sample}<ArrowUpRight size={16} aria-hidden="true" /></div>
                </li>
              );
            })}
          </ol>
          <div className={styles.startFooter}>
            <BuyerLink className={styles.lightLink} />
            <p>Looking for something?<br /><span>Start with a message. See what’s nearby.</span></p>
          </div>
        </div>
      </section>
    </div>
  );
}
