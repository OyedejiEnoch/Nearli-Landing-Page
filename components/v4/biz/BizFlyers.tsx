"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { display } from "../ui"
import { Bubble, WaPhone } from "./chat"

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Arrow() {
  return (
    <svg aria-hidden="true" width="90" height="24" viewBox="0 0 90 24" className="hidden shrink-0 lg:block">
      <path data-arrow d="M2 12h80m-10-9 10 9-10 9" fill="none" stroke="#0B0B0C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 7" />
    </svg>
  )
}

function Tag({ title, sub }: { title: string; sub: string }) {
  return (
    <p className="flex flex-col items-center gap-0.5 text-center">
      <strong className="text-[16px] text-[#0B0B0C]">{title}</strong>
      <span className="text-[14px] text-[#62636B]">{sub}</span>
    </p>
  )
}

// The signature moment: the flyer leaves the chat, then becomes a Status.
export default function BizFlyers() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-fl-head] > *", { y: 40, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: root.current, start: "top 70%" } })
        const tl = gsap.timeline({ scrollTrigger: { trigger: "[data-fl-row]", start: "top 70%" } })
        tl.from("[data-fl='chat']", { y: 60, opacity: 0, duration: 1, ease: "expo.out" })
          .from("[data-fl='group']", { x: -160, scale: 0.45, rotate: 0, opacity: 0, duration: 1.1, ease: "expo.out" }, "+=0.15")
          .from("[data-fl='status']", { x: -160, scale: 0.6, opacity: 0, duration: 1.1, ease: "expo.out" }, "+=0.2")
          .fromTo("[data-status-bar]", { scaleX: 0 }, { scaleX: 1, duration: 3, ease: "none", transformOrigin: "0% 50%" }, "<0.6")
          .from("[data-arrow]", { opacity: 0, duration: 0.4, stagger: 0.6 }, 0.6)
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section ref={root} data-bg="#F5F5F7" aria-label="Every product becomes a flyer" className="relative overflow-hidden bg-[#F5F5F7] py-28 text-[#0B0B0C] lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div data-fl-head className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className={`${display} text-[clamp(2.6rem,6.4vw,6rem)]`}>Every product<br />becomes a flyer.</h2>
          <p className="max-w-[28rem] text-lg leading-relaxed text-[#62636B]">Ask for a flyer and the assistant makes one from your photo, name and price, sized for your groups and for Status. Forward it in two taps.</p>
        </div>

        <div data-fl-row className="mt-16 flex flex-col items-center gap-12 lg:mt-24 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          <div data-fl="chat" className="flex flex-col items-center gap-4 max-lg:hidden">
            <WaPhone className="w-[300px]">
              <div className="flex flex-col gap-2 px-3 pt-4">
                <Bubble attr={false} m={{ from: "me", text: "flyer for the ankara peplum top" }} />
                <Bubble attr={false} m={{ from: "ai", text: "**Advert: Ankara peplum top**\nPress and hold the image below, tap **Forward**, then choose your groups or customers." }} />
                <Bubble attr={false} m={{ from: "ai", image: { src: "/v4/biz/flyer-group.webp", w: 720, h: 900, alt: "", width: "50%" } }} />
                <Bubble attr={false} m={{ from: "ai", text: "Want it sized for your WhatsApp Status too?", button: "Status size" }} />
              </div>
            </WaPhone>
            <Tag title="1 · Ask" sub="“flyer for …”" />
          </div>
          <Arrow />
          <div className="flex flex-col items-center gap-5">
            <div data-fl="group" className="w-[min(78vw,330px)] -rotate-3 overflow-hidden rounded-[22px] shadow-[0_40px_80px_-36px_rgba(11,11,12,0.55)]">
              <Image src="/v4/biz/flyer-group.webp" alt="A group-size flyer the assistant made for an Ankara peplum top, ₦14,500" width={720} height={900} sizes="330px" className="h-auto w-full" />
            </div>
            <Tag title="2 · Group size" sub="For chats and groups" />
          </div>
          <Arrow />
          <div className="flex flex-col items-center gap-5">
            <div data-fl="status" className="relative w-[min(66vw,280px)] overflow-hidden rounded-[40px] border-[10px] border-[#16161A] bg-black shadow-[0_50px_90px_-34px_rgba(11,11,12,0.55)]" style={{ aspectRatio: "9 / 16" }}>
              <Image src="/v4/biz/flyer-status.webp" alt="The Status-size flyer as it shows on WhatsApp Status" fill sizes="280px" className="object-cover" />
              <span className="absolute inset-x-3 top-3 h-[3px] overflow-hidden rounded-full bg-white/40"><span data-status-bar className="block h-full w-full rounded-full bg-white" /></span>
              <span className="absolute left-3.5 top-6 flex items-center gap-2 text-[12px] font-semibold text-white"><span className="h-6 w-6 rounded-full bg-white/80" />My status · just now</span>
            </div>
            <Tag title="3 · Status size" sub="Text stays clear of the Reply bar" />
          </div>
        </div>
        <p className="mt-12 text-center text-[13px] text-[#62636B]">Real flyers made by the assistant, shown with an example product.</p>
      </div>
    </section>
  )
}
