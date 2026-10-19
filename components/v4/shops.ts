// Real Ahiver shops and their own flyers (exported from the live API).
export type Kind = "fashion" | "food" | "services" | "beauty"
export type Shop = { slug: string; name: string; kind: Kind; city: string; w: number; h: number }
export const SHOPS: Shop[] = [
 {
  "slug": "jay-s-fashion",
  "name": "Jay’s Fashion",
  "kind": "fashion",
  "city": "Ibadan",
  "w": 640,
  "h": 640
 },
 {
  "slug": "classic-unisex-salon",
  "name": "Classic Unisex Salon",
  "kind": "beauty",
  "city": "Ibadan North",
  "w": 480,
  "h": 640
 },
 {
  "slug": "fidmore",
  "name": "Fidmore",
  "kind": "food",
  "city": "Akinyele",
  "w": 640,
  "h": 427
 },
 {
  "slug": "awesomecakesnmore",
  "name": "AwesomecakesNmore",
  "kind": "food",
  "city": "Akinyele",
  "w": 489,
  "h": 640
 },
 {
  "slug": "kicks-wey-no-go-far",
  "name": "Kicks wey no go far",
  "kind": "fashion",
  "city": "Ibadan North West",
  "w": 640,
  "h": 427
 },
 {
  "slug": "dolive-treats",
  "name": "Dolive Treats",
  "kind": "food",
  "city": "Ogbomoso",
  "w": 360,
  "h": 640
 },
 {
  "slug": "kate-optical-world",
  "name": "Kate Optical World",
  "kind": "beauty",
  "city": "Ibadan South West",
  "w": 452,
  "h": 640
 },
 {
  "slug": "mide-atelier",
  "name": "Mide_Atelier",
  "kind": "fashion",
  "city": "Ibadan South West",
  "w": 640,
  "h": 640
 },
 {
  "slug": "teegrills",
  "name": "Teegrills",
  "kind": "food",
  "city": "Ibadan South West",
  "w": 413,
  "h": 640
 },
 {
  "slug": "tenteen-crochets",
  "name": "Tenteen Crochets",
  "kind": "fashion",
  "city": "Ibadan South West",
  "w": 640,
  "h": 366
 },
 {
  "slug": "de-light-s-touch-hair-care",
  "name": "De-light's touch hair care",
  "kind": "beauty",
  "city": "Ibadan South West",
  "w": 480,
  "h": 640
 },
 {
  "slug": "ayoz-confectionery-bliss",
  "name": "Ayoz Confectionery Bliss",
  "kind": "food",
  "city": "Ibadan South West",
  "w": 640,
  "h": 640
 },
 {
  "slug": "moa-hopex-hub",
  "name": "Moa hopex hub",
  "kind": "fashion",
  "city": "Ido",
  "w": 295,
  "h": 640
 },
 {
  "slug": "egbo-ati-ewa-pipi",
  "name": "Egbo ati Ewa Pipi",
  "kind": "food",
  "city": "Ido",
  "w": 452,
  "h": 640
 },
 {
  "slug": "superkay-plumbing-works-buildi",
  "name": "SUPERKAY PLUMBING WORKS& BUILDING CONTRACTOR",
  "kind": "services",
  "city": "Oluyole",
  "w": 640,
  "h": 220
 },
 {
  "slug": "the-clothing-maker",
  "name": "The Clothing Maker",
  "kind": "fashion",
  "city": "Oluyole",
  "w": 404,
  "h": 640
 }
]
