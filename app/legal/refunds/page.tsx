import LegalLayout, { LegalSection } from "@/components/LegalLayout"

const sections: LegalSection[] = [
  {
    heading: "Who handles the sale",
    body: (
      <p>
        Ahiver connects buyers with independent local businesses. Each seller is responsible for
        their own products, pricing, fulfilment, and buyer refunds. Buyers currently pay sellers
        directly; Ahiver does not collect or hold the purchase price.
      </p>
    ),
  },
  {
    heading: "Seller refund policies",
    body: (
      <p>
        Ask the seller about their return terms before paying. Seller-specific terms should be
        clearly disclosed to you and cannot take away rights you have under applicable Nigerian
        consumer law.
      </p>
    ),
  },
  {
    heading: "Cancellations, returns, and refunds",
    body: (
      <ul>
        <li>Contact the seller promptly if you need to cancel or change an order.</li>
        <li>Contact the seller if an item is undelivered, damaged, unsafe, faulty, incomplete, or materially different from its description.</li>
        <li>If you paid the seller and the order cannot be fulfilled, ask the seller to arrange the refund owed to you.</li>
        <li>A seller&apos;s stated exclusions, including for perishable or made-to-order goods, do not override rights provided by law.</li>
      </ul>
    ),
  },
  {
    heading: "How to raise a concern",
    body: (
      <p>
        First, contact the seller using the contact details on their store or order. Share the order
        details, the issue, and any relevant photos, messages, or proof of payment. Keep the item
        and packaging where reasonably possible while the seller reviews your request. If you
        cannot resolve it directly, email hello@ahiver.com with the same evidence. We can review
        the seller&apos;s account or listing and help route the complaint.
      </p>
    ),
  },
  {
    heading: "Who pays the refund",
    body: (
      <p>
        The seller who received your payment is responsible for paying any refund due. Cancelling
        an order or changing its status on Ahiver does not automatically return money. Because
        Ahiver did not receive the buyer-to-seller payment, we cannot reverse that transfer or
        promise a particular refund-processing time.
      </p>
    ),
  },
  {
    heading: "Further help",
    body: (
      <p>
        If a seller does not respond or you suspect fraud, email hello@ahiver.com. You may also
        contact your payment provider or the relevant consumer authority. Nothing in this policy
        limits your statutory rights or the seller&apos;s legal obligations.
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
      lastUpdated="14 October 2026"
      currentHref="/legal/refunds"
      intro="How cancellations, returns, and refunds work when you buy from an independent business found through Ahiver."
      sections={sections}
    />
  )
}
