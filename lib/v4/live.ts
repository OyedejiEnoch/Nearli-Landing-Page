import QRCode from "qrcode"

// Live numbers for the landing page, read from the public store API at build
// and refreshed every 30 minutes. If the API is unreachable we return null and
// the page hides the numbers: nothing on ahiver.com is ever typed in by hand.
const LIST_URL = "https://storefrontapi-gateway-production.up.railway.app/store/api/public/list"

export type LiveShops = {
  total: number
  oyo: number
  byCategory: Record<"fashion" | "food" | "services" | "beauty", number>
}

const bucket = (c: string): keyof LiveShops["byCategory"] | null => {
  const k = c.toLowerCase()
  if (k.includes("fashion") || k.includes("tailor")) return "fashion"
  if (k.includes("food") || k.includes("restaurant")) return "food"
  if (k.includes("service")) return "services"
  if (k.includes("beauty") || k.includes("barb")) return "beauty"
  return null
}

export async function getLiveShops(): Promise<LiveShops | null> {
  try {
    const res = await fetch(LIST_URL, { next: { revalidate: 1800 } })
    if (!res.ok) return null
    const data = (await res.json()) as { stores?: { state?: string; category?: string }[] }
    const stores = data.stores ?? []
    if (!stores.length) return null
    const byCategory = { fashion: 0, food: 0, services: 0, beauty: 0 }
    for (const s of stores) {
      const b = bucket(s.category ?? "")
      if (b) byCategory[b]++
    }
    return { total: stores.length, oyo: stores.filter((s) => (s.state ?? "").toLowerCase() === "oyo").length, byCategory }
  } catch (e) {
    console.error("[live] store list failed:", e)
    return null
  }
}

export async function qrSvg(url: string, dark = "#0B0B0C", light = "#FFFFFF"): Promise<string> {
  return QRCode.toString(url, { type: "svg", margin: 0, errorCorrectionLevel: "M", color: { dark, light } })
}
