"use client"

import { useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useLenis } from "lenis/react"
import { display } from "../ui"
import { useSound } from "../sound"
import { Bubble, TransferShot, WaPhone, type Msg } from "./chat"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const PHOTO = { src: "/v4/chat-top.webp", w: 480, h: 640, alt: "A product photo sent to the assistant", width: "46%" }
const FLYER = { src: "/v4/biz/flyer-group.webp", w: 720, h: 900, alt: "The flyer the assistant made", width: "56%" }

type Skill = { id: string; title: string; line: string; chat: Msg[] }
// Replies use the assistant's own wording; names and amounts are examples.
const SKILLS: Skill[] = [
  {
    id: "add", title: "Add products", line: "Send a photo. It becomes a product once you set the price.",
    chat: [
      { from: "me", image: PHOTO },
      { from: "ai", text: "**New product: Ankara peplum top**\nCategory: Fashion\n\nWhat price should I set? Reply with the amount, like 15000." },
      { from: "me", text: "14500" },
      { from: "ai", text: "**Added to your store**\nAnkara peplum top · ₦14,500\n\nIt's live now." },
    ],
  },
  {
    id: "waiting", title: "Who's waiting", line: "Ask who messaged you. It tells you who to answer first.",
    chat: [
      { from: "me", text: "who messaged me?" },
      { from: "ai", text: "**Waiting for your reply**\n• 2 chats with unread messages\n• 1 flagged by the assistant:\n– Customer asked about delivery to Ogbomoso", button: "Open messages" },
    ],
  },
  {
    id: "flyers", title: "Flyers", line: "A ready-to-post flyer for any product, sized for groups and Status.",
    chat: [
      { from: "me", text: "flyer for the ankara peplum top" },
      { from: "ai", text: "**Advert: Ankara peplum top**\nPress and hold the image below, tap **Forward**, then choose your groups or customers." },
      { from: "ai", image: FLYER },
      { from: "ai", text: "Want it sized for your WhatsApp Status too?", button: "Status size" },
    ],
  },
  {
    id: "daily", title: "Today's adverts", line: "Not sure what to post? It picks today's product and makes the collage.",
    chat: [
      { from: "me", text: "what should I post today?" },
      { from: "ai", text: "**Your adverts for today**\nAnkara peplum top leads today: it's new in your store. Below: its advert, a collage of 3 products, and a caption you can forward." },
      { from: "ai", image: { ...FLYER, width: "48%" } },
    ],
  },
  {
    id: "invoice", title: "Invoices", line: "Bill a customer in one line. It's saved to your records.",
    chat: [
      { from: "me", text: "Invoice Sarah for a lace gown ₦48,000" },
      { from: "ai", text: "**Saved: INV-0013**\nSarah · ₦48,000", button: "Send to Sarah" },
    ],
  },
  {
    id: "payment", title: "Payment screenshots", line: "Forward a transfer screenshot. It reads the amount and who paid.",
    chat: [
      { from: "me", node: <TransferShot /> },
      { from: "ai", text: "**Payment read: ₦45,000**\nFrom Bisi Adeyemi\nSaved as a draft (INV-0014)." },
    ],
  },
  {
    id: "report", title: "How am I doing?", line: "Ask in plain words. It adds up what's paid and what's still owed.",
    chat: [
      { from: "me", text: "How am I doing?" },
      { from: "ai", text: "You have 18 records.\n**Paid in:** ₦412,000\n**Outstanding:** ₦83,000 (2 unpaid)" },
    ],
  },
]

const ALSO = ["Your shop link, any time", "New-order alerts", "Plain English, any time of day"]

export default function BizAssistant() {
  const root = useRef<HTMLElement>(null)
  const st = useRef<ScrollTrigger | null>(null)
  const last = useRef(0)
  const [active, setActive] = useState(0)
  const { play } = useSound()
  const lenis = useLenis()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px)", () => {
        st.current = ScrollTrigger.create({
          trigger: root.current, start: "top top", end: `+=${SKILLS.length * 70}%`, pin: true,
          onUpdate: (self) => {
            const i = Math.min(SKILLS.length - 1, Math.floor(self.progress * SKILLS.length))
            if (i !== last.current) {
              last.current = i
              setActive(i)
              play("tick", { haptic: true })
            }
          },
        })
        return () => { st.current = null }
      })
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-ai-head] > *", { y: 40, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: root.current, start: "top 70%" } })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  // Each new chat plays in: bubbles land in order, replies with a ding.
  useGSAP(
    () => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return
      const msgs = gsap.utils.toArray<HTMLElement>(`[data-chat="${active}"] [data-msg]`)
      const tl = gsap.timeline()
      msgs.forEach((el, i) => {
        const ai = el.dataset.from === "ai"
        tl.from(el, { opacity: 0, y: 12, scale: 0.97, duration: 0.4, ease: "back.out(1.4)", transformOrigin: ai ? "0% 100%" : "100% 100%", onStart: () => { if (i > 0 && ai) play("ding") } }, i === 0 ? 0.1 : ai ? "+=0.45" : "+=0.3")
      })
      return () => tl.kill()
    },
    { scope: root, dependencies: [active] },
  )

  const go = (i: number) => {
    const s = st.current
    if (!s) return setActive(i)
    const y = s.start + ((i + 0.5) / SKILLS.length) * (s.end - s.start)
    if (lenis) lenis.scrollTo(y, { duration: 0.9 })
    else window.scrollTo({ top: y, behavior: "smooth" })
  }

  return (
    <section ref={root} data-bg="#0B0B0C" aria-label="Your assistant lives on WhatsApp" className="relative overflow-hidden bg-[#0B0B0C] py-24 text-white lg:h-[100svh] lg:min-h-[720px] lg:py-0">
      <div className="mx-auto grid h-full max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto_0.9fr] lg:items-center lg:gap-16 lg:px-14 lg:pt-[72px]">
        <div data-ai-head className="flex flex-col gap-6">
          <h2 className={`${display} text-[clamp(2.6rem,5.2vw,5.6rem)]`}>Your assistant lives on <span className="text-[#3B55FF]">WhatsApp.</span></h2>
          <p className="max-w-[26rem] text-lg leading-relaxed text-white/70">No new app to learn. Message the Ahiver Business number the way you&apos;d message a person, and your shop updates.</p>
          <ul className="hidden flex-wrap gap-2 lg:flex">
            {ALSO.map((a) => <li key={a} className="rounded-full border border-white/15 px-3.5 py-2 text-[14px] font-medium text-white/80">{a}</li>)}
          </ul>
        </div>

        {/* Phones: swipeable tabs above the chat. */}
        <div role="tablist" aria-label="What the assistant does" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] lg:hidden">
          {SKILLS.map((s, i) => (
            <button key={s.id} role="tab" type="button" aria-selected={i === active} onClick={() => { setActive(i); play("tick", { haptic: true }) }} className={`h-10 shrink-0 rounded-full px-4 text-[14px] font-semibold transition-colors duration-200 ${i === active ? "bg-white text-[#0B0B0C]" : "bg-white/10 text-white"}`}>{s.title}</button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <WaPhone className="w-[min(86vw,340px)] lg:h-[min(72svh,690px)] lg:w-auto">
            {SKILLS.map((s, i) => (
              <div key={s.id} data-chat={i} aria-hidden={i !== active} className={`absolute inset-0 flex flex-col gap-2 px-3 pt-4 transition-opacity duration-300 ${i === active ? "opacity-100" : "pointer-events-none opacity-0"}`}>
                {s.chat.map((m, j) => <Bubble key={j} m={m} />)}
              </div>
            ))}
          </WaPhone>
          <p className="text-[12px] text-white/45">Example conversation</p>
        </div>

        <ol className="hidden flex-col gap-1 lg:flex">
          {SKILLS.map((s, i) => (
            <li key={s.id}>
              <button type="button" onClick={() => go(i)} aria-current={i === active} className={`flex w-full flex-col items-start gap-1 py-1.5 text-left transition-opacity duration-300 ${i === active ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>
                <span className={`font-[family-name:var(--font-bricolage)] font-bold tracking-[-0.02em] transition-[font-size] duration-300 ${i === active ? "text-[34px]" : "text-[24px]"}`}>{s.title}</span>
                <span className={`max-w-[22rem] text-[15px] leading-relaxed text-white/75 transition-[opacity,max-height] duration-300 ${i === active ? "max-h-20 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}>{s.line}</span>
              </button>
            </li>
          ))}
          <li className="mt-4 flex items-center gap-2 text-sm font-semibold text-white/55" aria-hidden="true">
            {SKILLS.map((s, i) => <span key={s.id} className={`h-1 w-7 rounded-full transition-colors duration-300 ${i <= active ? "bg-white" : "bg-white/20"}`} />)}
            <span className="ml-2 tabular-nums">0{active + 1} / 0{SKILLS.length}</span>
          </li>
        </ol>
        <p className="-mt-4 text-center text-[15px] leading-snug text-white/75 lg:hidden" aria-live="polite">{SKILLS[active].line}</p>
      </div>
    </section>
  )
}
