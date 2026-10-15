import LegalLayout, { LegalSection } from "@/components/LegalLayout"

const sections: LegalSection[] = [
  {
    heading: "Who fulfils orders",
    body: (
      <p>
        Ahiver is a discovery and storefront platform, not a fulfilment centre. Independent
        sellers accept orders, arrange packaging and delivery or pickup, and communicate with
        buyers. Ahiver does not warehouse, take custody of, or ship sellers&apos; products.
      </p>
    ),
  },
  {
    heading: "Agree the details before paying",
    body: (
      <p>
        The buyer and seller should confirm the item, availability, delivery or pickup method,
        address, delivery charge, and estimated timing before the buyer pays the seller. Charges
        and timing vary by seller, product, and location. The seller should promptly explain any
        stock or delivery change and offer an appropriate way to proceed, change, or cancel.
      </p>
    ),
  },
  {
    heading: "Order status and delivery problems",
    body: (
      <p>
        Where Ahiver shows an order status, it reflects updates submitted through the platform;
        it is not carrier tracking or a delivery guarantee. Report a missing, late, or damaged
        order to the seller using the store or order contact details. If the issue remains
        unresolved, email hello@ahiver.com with the order details and evidence so we can review
        the account or listing and help route the concern.
      </p>
    ),
  },
  {
    heading: "Payments and refunds",
    body: (
      <p>
        Buyers currently pay sellers directly. If delivery fails or an order is cancelled after
        payment, the seller who received the payment is responsible for any refund due. Ahiver
        cannot independently reverse that payment. See our Refund Policy for further guidance.
      </p>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <p>
        Nothing in this policy limits a buyer&apos;s statutory rights or a seller&apos;s duties under
        applicable Nigerian consumer law.
      </p>
    ),
  },
]

export default function ShippingPage() {
  return (
    <LegalLayout
      title="Shipping and Fulfilment Policy"
      lastUpdated="14 October 2026"
      currentHref="/legal/shipping"
      intro="How delivery and pickup work when you order from an independent business on Ahiver."
      sections={sections}
    />
  )
}
