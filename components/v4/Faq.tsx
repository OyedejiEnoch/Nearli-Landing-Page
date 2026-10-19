"use client"

import { useState } from "react"
import { display } from "./ui"
import { useSound } from "./sound"

export type QA = { q: string; a: string }
const FAQ: Record<"shoppers" | "businesses", QA[]> = {
  shoppers: [
    { q: "Is Ahiver free?", a: "Yes. Finding shops, messaging them and sending order requests costs you nothing." },
    { q: "Do I need to download anything?", a: "No. Ahiver opens in your browser at app.ahiver.com, on any phone or laptop." },
    { q: "How does it know what's near me?", a: "Allow your location, or pick your area yourself. Shops are then sorted by how far they are from you." },
    { q: "How do I order?", a: "Open a shop, choose what you want and send an order request. You don't need an account. The shop accepts it and you finish the details with them on WhatsApp." },
    { q: "Will I see the shop's address?", a: "You'll always see the area. The street address shows when the shop has chosen to share it." },
    { q: "Where does Ahiver work?", a: "Most shops are around Ibadan and across Oyo State today, and more areas are opening as shops join." },
  ],
  businesses: [
    { q: "How do I put my shop on Ahiver?", a: "Sign up at seller.ahiver.com with your email. Your shop goes live straight away, and opening it is free." },
    { q: "What can I sell?", a: "Products and services: clothes, food, beauty, repairs, crafts. If people near you buy it, it belongs on Ahiver." },
    { q: "How do customers reach me?", a: "They find you by distance, category or search, then message you or send an order request. You get the details on WhatsApp." },
    { q: "What does the WhatsApp assistant do?", a: "It runs your shop from chat: send a photo to add a product, ask who's waiting for a reply, or get your shop link to share." },
    { q: "Do I need a website?", a: "No. Your Ahiver shop is your page, with its own link you can share anywhere." },
  ],
}

export function Item({ qa, id, open, onToggle }: { qa: QA; id: string; open: boolean; onToggle: () => void }) {
  return (
    <li className="border-b border-[#E7E7EA]">
      <h3>
        <button type="button" aria-expanded={open} aria-controls={id} onClick={onToggle} className="flex w-full items-center justify-between gap-6 py-6 text-left text-[clamp(1.15rem,1.8vw,1.45rem)] font-bold tracking-[-0.01em] text-[#0B0B0C]">
          {qa.q}
          <span aria-hidden="true" className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-[background-color,color,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${open ? "rotate-45 bg-[#3B55FF] text-white" : "bg-[#F5F5F7]"}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
          </span>
        </button>
      </h3>
      {/* grid-rows 0fr → 1fr: height animates without measuring. */}
      <div id={id} role="region" className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="max-w-[44rem] pb-7 text-[17px] leading-relaxed text-[#62636B]">{qa.a}</p>
        </div>
      </div>
    </li>
  )
}

export default function Faq() {
  const [who, setWho] = useState<"shoppers" | "businesses">("shoppers")
  const [open, setOpen] = useState(0)
  const { play } = useSound()

  return (
    <section id="faq" data-bg="#FFFFFF" aria-label="Good questions" className="relative bg-white py-28 text-[#0B0B0C] lg:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-14">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <h2 className={`${display} text-[clamp(2.6rem,6vw,5.6rem)]`}>Good questions.</h2>
          <div role="tablist" aria-label="Questions for" className="relative grid w-fit grid-cols-2 rounded-full bg-[#F5F5F7] p-1">
            <span aria-hidden="true" className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-[#0B0B0C] transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${who === "businesses" ? "translate-x-full" : ""}`} />
            {(["shoppers", "businesses"] as const).map((k) => (
              <button
                key={k}
                role="tab"
                type="button"
                aria-selected={who === k}
                onClick={() => {
                  setWho(k)
                  setOpen(0)
                  play("tick", { haptic: true })
                }}
                className={`relative z-10 h-11 rounded-full px-6 text-[15px] font-semibold capitalize transition-colors duration-300 ${who === k ? "text-white" : "text-[#0B0B0C]"}`}
              >
                {k === "shoppers" ? "Shoppers" : "Businesses"}
              </button>
            ))}
          </div>
          <p className="text-[15px] text-[#62636B]">
            Something else? <a href="mailto:hello@ahiver.com" className="font-semibold text-[#0B0B0C] underline decoration-[#3B55FF] decoration-2 underline-offset-4">hello@ahiver.com</a>
          </p>
        </div>
        <ul key={who} className="border-t border-[#E7E7EA]">
          {FAQ[who].map((qa, i) => (
            <Item key={qa.q} qa={qa} id={`faq-${who}-${i}`} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </ul>
      </div>
    </section>
  )
}
