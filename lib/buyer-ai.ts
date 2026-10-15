// Dedicated Buyer AI number in international format (digits only).
// The environment variable remains available for future number changes.
const defaultBuyerNumber = "2348064235806";
const configuredNumber = process.env.NEXT_PUBLIC_BUYER_WHATSAPP_NUMBER?.trim() || defaultBuyerNumber;
const buyerNumber = /^\+?[1-9]\d{7,14}$/.test(configuredNumber)
  ? configuredNumber.replace(/^\+/, "")
  : defaultBuyerNumber;

export const buyerAiLink = {
  isWhatsApp: true,
  href: "https://wa.me/" + buyerNumber + "?text=" + encodeURIComponent("Hi Ahiver, help me find something nearby."),
  label: "Ask Ahiver on WhatsApp",
};
