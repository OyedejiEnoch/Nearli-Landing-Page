import LegalLayout, { LegalSection } from "@/components/LegalLayout"

const sections: LegalSection[] = [
  {
    heading: "Nearli is a marketplace",
    body: (
      <p>
        Nearli connects buyers with independent local businesses. Each seller is responsible for
        their own products, pricing, and refund decisions. This policy explains how refunds and
        returns generally work on Nearli and what to do if something goes wrong.
      </p>
    ),
  },
  {
    heading: "Seller refund policies",
    body: (
      <p>
        Sellers may set their own refund and return terms, which are shown on their store or at
        checkout. By placing an order, you agree to the seller&apos;s stated policy. Where a seller
        has no specific policy, the general guidance below applies.
      </p>
    ),
  },
  {
    heading: "When you can request a refund",
    body: (
      <ul>
        <li>The item was not delivered within the stated timeframe.</li>
        <li>The item is significantly different from its description.</li>
        <li>The item arrived damaged, faulty, or incomplete.</li>
        <li>You were charged incorrectly.</li>
      </ul>
    ),
  },
  {
    heading: "How to request a refund",
    body: (
      <p>
        First, contact the seller directly through Nearli messaging with your order details and
        reason. Most issues are resolved quickly this way. If you cannot reach a resolution, contact
        us and we&apos;ll help mediate where possible.
      </p>
    ),
  },
  {
    heading: "Processing and timing",
    body: (
      <p>
        Approved refunds are returned to your original payment method through our payment partners
        (e.g. Paystack, Flutterwave). Processing times depend on your bank or provider and typically
        take a few business days.
      </p>
    ),
  },
  {
    heading: "Non-refundable items",
    body: (
      <p>
        Some items may be non-refundable — for example perishable goods, personalised or
        made-to-order items, and services already delivered. Sellers will indicate this where it
        applies.
      </p>
    ),
  },
  {
    heading: "Need help?",
    body: (
      <p>
        If you believe a seller has not honoured their policy, or you suspect fraud, reach out to us
        at the email below and we&apos;ll look into it.
      </p>
    ),
  },
]

export default function RefundsPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      lastUpdated="June 2026"
      currentHref="/legal/refunds"
      intro="This policy explains how refunds and returns work for purchases made through businesses on Nearli."
      sections={sections}
    />
  )
}
