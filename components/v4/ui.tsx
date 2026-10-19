import Image from "next/image"

// Small shared pieces for landing v4 (brand v3: ink, white, Ahiver Blue).
export const C = {
  blue: "#3B55FF",
  ink: "#0B0B0C",
  page: "#F5F5F7",
  line: "#E7E7EA",
  muted: "#62636B",
  text: "#1C1C1F",
  tint: "#EEF0FF",
  green: "#0E7A5A",
}

export const APP_URL = "https://app.ahiver.com"
export const SELL_URL = "https://seller.ahiver.com/register"

export function PinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

export function ArrowIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

// A distance chip: the product's own language ("300 m · Jay's Fashion").
export function Chip({ children, dark = false, className = "" }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full px-4 text-[15px] font-semibold shadow-[0_12px_30px_-12px_rgba(11,11,12,0.5)] ${
        dark ? "bg-[#0B0B0C] text-white" : "bg-white text-[#0B0B0C]"
      } ${className}`}
    >
      <PinIcon />
      {children}
    </span>
  )
}

// A phone frame around a real app screenshot (390×844).
export function Phone({ src, alt, width = 300, className = "", priority = false }: { src: string; alt: string; width?: number; className?: string; priority?: boolean }) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[44px] border-[10px] border-[#16161A] bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] ${className}`}
      style={{ width, aspectRatio: "390 / 844" }}
    >
      <Image src={src} alt={alt} fill sizes={`${width}px`} priority={priority} className="object-cover object-top" />
    </div>
  )
}

// Display type: Bricolage Grotesque 800 in caps (sizes come from the caller).
export const display = "font-[family-name:var(--font-bricolage)] font-extrabold uppercase leading-[0.88] tracking-[-0.035em]"

export function QR({ svg, size, label }: { svg: string; size: number; label: string }) {
  return <span role="img" aria-label={label} className="block [&>svg]:h-full [&>svg]:w-full" style={{ width: size, height: size }} dangerouslySetInnerHTML={{ __html: svg }} />
}
