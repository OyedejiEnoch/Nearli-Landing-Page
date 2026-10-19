"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { AhiverMark } from "./AhiverLogo"
import { ArrowIcon, SELL_URL, display } from "./ui"
import { useSound } from "./sound"

gsap.registerPlugin(ScrollTrigger, useGSAP)

type Msg = { from: "me" | "ai"; text?: string; photo?: string }
// Lines from the seller assistant's real flows (the same ones in our explainer film).
const CHAT: Msg[] = [
  { from: "me", photo: "/v4/chat-top.webp" },
  { from: "ai", text: "New product: Ankara peplum top\nCategory: Fashion\n\nWhat price should I set? Reply with the amount." },
  { from: "me", text: "14500" },
  { from: "ai", text: "Added to your store\nAnkara peplum top · ₦14,500\n\nIt's live now." },
  { from: "me", text: "who messaged me?" },
  { from: "ai", text: "Waiting for your reply\n• 2 chats with unread messages\n• 1 asked about delivery to Ogbomoso" },
]

const CAN = ["Add products from a photo", "Tell you who's waiting for a reply", "Send your shop link", "Answer in plain English, any time"]

function Bubble({ m }: { m: Msg }) {
  const me = m.from === "me"
  return (
    <div data-msg data-from={m.from} className={`flex ${me ? "justify-end" : "justify-start"}`}>
      {m.photo ? (
        <div className="w-[40%] overflow-hidden rounded-[18px] rounded-br-md bg-[#DCF8C6] p-1">
          <Image src={m.photo} alt="A product photo sent to the assistant" width={480} height={640} sizes="200px" className="h-auto w-full rounded-[14px]" />
        </div>
      ) : (
        <p className={`max-w-[82%] whitespace-pre-line rounded-[18px] px-3.5 py-2.5 text-[14px] leading-[1.45] shadow-[0_1px_0_rgba(0,0,0,0.08)] ${me ? "rounded-br-md bg-[#DCF8C6] text-[#0B0B0C]" : "rounded-bl-md bg-white text-[#0B0B0C]"}`}>
          {m.text!.split("\n").map((line, i) =>
            i === 0 && !me ? <strong key={i} className="font-bold">{line}{"\n"}</strong> : <span key={i}>{line}{"\n"}</span>,
          )}
        </p>
      )}
    </div>
  )
}

export default function BusinessAI() {
  const root = useRef<HTMLElement>(null)
  const { play } = useSound()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-biz-copy] > *", { y: 40, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: root.current, start: "top 65%" } })
        gsap.from("[data-biz-phone]", { y: 100, rotate: 3, opacity: 0, duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: root.current, start: "top 65%" } })

        // The conversation plays out once, at reading pace: each reply lands with a ding.
        const msgs = gsap.utils.toArray<HTMLElement>("[data-msg]")
        // Hidden messages take no room, so the chat grows the way a real one does.
        gsap.set(msgs, { display: "none", opacity: 0, y: 14, scale: 0.97 })
        const tl = gsap.timeline({ paused: true })
        msgs.forEach((el, i) => {
          const ai = el.dataset.from === "ai"
          if (ai) tl.set("[data-typing]", { display: "flex" }, "+=0.25").to("[data-typing]", { opacity: 1, duration: 0.15 }).to("[data-typing]", { opacity: 0, duration: 0.1 }, "+=0.7").set("[data-typing]", { display: "none" })
          tl.set(el, { display: "flex" }, i === 0 ? 0.2 : ai ? ">" : "+=0.6")
          tl.to(el, {
            opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(1.4)", transformOrigin: ai ? "0% 100%" : "100% 100%",
            onStart: () => play(ai ? "ding" : "pop"),
          }, "<")
        })
        ScrollTrigger.create({ trigger: "[data-biz-phone]", start: "top 60%", once: true, onEnter: () => tl.play() })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="business" ref={root} data-bg="#0B0B0C" aria-label="Your shop's assistant lives on WhatsApp" className="relative overflow-hidden bg-[#0B0B0C] py-28 text-white lg:py-40">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:px-14">
        <div data-biz-copy className="flex flex-col gap-7">
          <h2 className={`${display} text-[clamp(2.6rem,6vw,5.6rem)]`}>Your shop&apos;s assistant lives on <span className="text-[#3B55FF]">WhatsApp.</span></h2>
          <p className="max-w-[32rem] text-lg leading-relaxed text-white/70">Run your Ahiver shop from the chat you already use all day. Send a photo, it becomes a product. Ask who&apos;s waiting, it tells you.</p>
          <ul className="flex max-w-[36rem] flex-wrap gap-2.5">
            {CAN.map((c) => (
              <li key={c} className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-[15px] font-medium text-white/90">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B55FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>
                {c}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href={SELL_URL} onPointerDown={() => play("tick", { haptic: true })} className="inline-flex h-14 items-center gap-2.5 rounded-full bg-white px-6 text-[17px] font-bold text-[#0B0B0C] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97]">
              Open your shop free <ArrowIcon />
            </a>
            <span className="text-[15px] text-white/60">Your shop goes live straight away.</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div data-biz-phone className="relative w-full max-w-[380px] overflow-hidden rounded-[44px] border-[10px] border-[#1E1E22] bg-[#ECE5DD] shadow-[0_60px_120px_-50px_rgba(59,85,255,0.55)]" style={{ aspectRatio: "390 / 800" }}>
            <div className="flex items-center gap-3 bg-[#F7F7F7] px-4 pb-3 pt-9">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"><AhiverMark size={22} /></span>
              <span className="leading-tight">
                <span className="block text-[15px] font-bold text-[#0B0B0C]">Ahiver Business</span>
                <span className="block text-[12px] text-[#62636B]">Your shop assistant</span>
              </span>
            </div>
            <div className="flex flex-col gap-2 px-3 pt-4">
              {CHAT.map((m, i) => <Bubble key={i} m={m} />)}
              <div data-typing aria-hidden="true" className="hidden w-14 items-center justify-center gap-1 rounded-[18px] rounded-bl-md bg-white py-3 opacity-0">
                {[0, 1, 2].map((d) => <span key={d} className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#62636B]" style={{ animationDelay: `${d * 150}ms` }} />)}
              </div>
            </div>
            <p className="absolute inset-x-0 bottom-3 text-center text-[11px] font-medium text-[#62636B]">Example conversation</p>
          </div>
        </div>
      </div>
    </section>
  )
}
