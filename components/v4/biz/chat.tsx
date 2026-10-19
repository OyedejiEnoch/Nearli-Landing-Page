import Image from "next/image"
import { AhiverMark } from "../AhiverLogo"

// A WhatsApp-style chat with the Ahiver Business assistant. Lines use the
// assistant's real reply wording; every chat on the page is labelled as an example.

export type Msg =
  | { from: "me" | "ai"; text: string; button?: string }
  | { from: "me" | "ai"; image: { src: string; w: number; h: number; alt: string; width?: string } }
  | { from: "me"; node: React.ReactNode }

// "**bold**" spans and line breaks, the way the assistant formats replies.
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i, all) => (
        <span key={i}>
          {line.split(/(\*\*[^*]+\*\*)/).map((part, j) => (part.startsWith("**") ? <strong key={j} className="font-bold">{part.slice(2, -2)}</strong> : <span key={j}>{part}</span>))}
          {i < all.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  )
}

export function Bubble({ m, attr = true }: { m: Msg; attr?: boolean }) {
  const me = m.from === "me"
  const data = attr ? { "data-msg": "", "data-from": m.from } : {}
  if ("node" in m) return <div {...data} className="flex justify-end">{m.node}</div>
  if ("image" in m)
    return (
      <div {...data} className={`flex ${me ? "justify-end" : "justify-start"}`}>
        <div className={`overflow-hidden rounded-[16px] p-1 ${me ? "rounded-br-md bg-[#D9FDD3]" : "rounded-bl-md bg-white"}`} style={{ width: m.image.width ?? "52%" }}>
          <Image src={m.image.src} alt={m.image.alt} width={m.image.w} height={m.image.h} sizes="200px" className="h-auto w-full rounded-[12px]" />
        </div>
      </div>
    )
  return (
    <div {...data} className={`flex flex-col gap-1 ${me ? "items-end" : "items-start"}`}>
      <p className={`max-w-[84%] rounded-[16px] px-3 py-2 text-[13.5px] leading-[1.42] text-[#111B21] shadow-[0_1px_0_rgba(0,0,0,0.08)] ${me ? "rounded-br-md bg-[#D9FDD3]" : "rounded-bl-md bg-white"}`}>
        <Rich text={m.text} />
      </p>
      {"button" in m && m.button ? (
        <span className="flex h-9 w-[84%] items-center justify-center rounded-[12px] bg-white text-[13.5px] font-semibold text-[#027EB5] shadow-[0_1px_0_rgba(0,0,0,0.08)]">{m.button}</span>
      ) : null}
    </div>
  )
}

export function WaPhone({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`relative flex flex-col overflow-hidden rounded-[42px] border-[10px] border-[#1E1E22] bg-[#EFEAE2] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.75)] ${className}`} style={{ aspectRatio: "390 / 800", ...style }}>
      <div className="flex shrink-0 items-center gap-2.5 border-b border-[#E2E2E2] bg-[#F0F2F5] px-3.5 pb-2.5 pt-8">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white"><AhiverMark size={20} /></span>
        <span className="leading-tight">
          <span className="block text-[14px] font-bold text-[#111B21]">Ahiver Business</span>
          <span className="block text-[11.5px] text-[#667781]">Your shop assistant</span>
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden">{children}</div>
    </div>
  )
}

// A bank-app transfer receipt: what a customer sends after paying.
export function TransferShot() {
  return (
    <div className="w-[62%] rounded-[16px] rounded-br-md bg-[#D9FDD3] p-1">
      <div className="rounded-[12px] bg-white p-3 text-[#0B0B0C]">
        <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#E6F4EE] text-[#0E7A5A]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>
        </span>
        <p className="mt-1.5 text-center text-[11px] font-semibold text-[#62636B]">Transfer successful</p>
        <p className="text-center text-[19px] font-extrabold tabular-nums">₦45,000.00</p>
        <dl className="mt-2 space-y-1 border-t border-dashed border-[#E7E7EA] pt-2 text-[10.5px]">
          {[["From", "Bisi Adeyemi"], ["To", "Ada's Atelier"], ["Date", "Today, 10:42"]].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-2"><dt className="text-[#62636B]">{k}</dt><dd className="font-semibold">{v}</dd></div>
          ))}
        </dl>
      </div>
    </div>
  )
}
