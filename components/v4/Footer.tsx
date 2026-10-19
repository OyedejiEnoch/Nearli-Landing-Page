import Link from "next/link"
import AhiverLogo from "./AhiverLogo"
import { APP_URL, SELL_URL } from "./ui"

const COLS = [
  { title: "Ahiver", links: [{ href: APP_URL, label: "Open Ahiver" }, { href: SELL_URL, label: "Sell on Ahiver" }, { href: "/about", label: "About" }, { href: "/seller-guide", label: "Seller guide" }] },
  { title: "Legal", links: [{ href: "/legal/privacy-policy", label: "Privacy" }, { href: "/legal/terms", label: "Terms" }, { href: "/legal/cookie-policy", label: "Cookies" }, { href: "/legal/refunds", label: "Refunds" }] },
  { title: "Talk to us", links: [{ href: "mailto:hello@ahiver.com", label: "hello@ahiver.com" }] },
]

export default function Footer() {
  return (
    <footer data-bg="#0B0B0C" className="relative overflow-hidden bg-[#0B0B0C] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 pt-20 sm:px-8 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-14 lg:pt-28">
        <p className="max-w-[22rem] text-lg leading-relaxed text-white/70">Find the shops, kitchens and makers around the corner. Made in Ibadan.</p>
        {COLS.map((c) => (
          <nav key={c.title} aria-label={c.title} className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white/50">{c.title}</p>
            {c.links.map((l) =>
              l.href.startsWith("/") ? (
                <Link key={l.href} href={l.href} className="w-fit text-[16px] font-medium text-white/90 transition-colors hover:text-white">{l.label}</Link>
              ) : (
                <a key={l.href} href={l.href} className="w-fit text-[16px] font-medium text-white/90 transition-colors hover:text-white">{l.label}</a>
              ),
            )}
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-20 max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <AhiverLogo className="h-auto w-full text-white" title="Ahiver" />
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-3 px-5 py-8 text-sm text-white/50 sm:px-8 lg:px-14">
        <span>© {new Date().getFullYear()} Ahiver</span>
        <span>ahiver.com</span>
      </div>
    </footer>
  )
}
