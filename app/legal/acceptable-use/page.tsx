import LegalLayout, { LegalSection } from "@/components/LegalLayout"

const sections: LegalSection[] = [
  {
    heading: "Who this policy applies to",
    body: (
      <p>
        This policy applies to buyers, sellers, and everyone using Ahiver. Ahiver helps people
        discover independent businesses and gives sellers storefront and business tools. A listing
        on Ahiver is not a guarantee that a seller or product has been formally verified.
      </p>
    ),
  },
  {
    heading: "Honest and lawful listings",
    body: (
      <p>
        Sellers must provide accurate business and contact details, describe products and services
        truthfully, show prices and availability accurately, and have the right and any required
        permission to sell what they list. Sellers must not impersonate others, fabricate reviews,
        mislead buyers, or use images or content without permission.
      </p>
    ),
  },
  {
    heading: "Prohibited goods and activities",
    body: (
      <ul>
        <li>Illegal, stolen, counterfeit, unsafe, or recalled goods and services.</li>
        <li>Weapons, explosives, controlled substances, and goods requiring an authorisation the seller does not hold.</li>
        <li>Sexually exploitative material, unlawful financial schemes, and products infringing another party&apos;s intellectual-property rights.</li>
        <li>Fraud, money laundering, harassment, spam, discrimination, deceptive marketing, or activity prohibited by applicable law.</li>
      </ul>
    ),
  },
  {
    heading: "Using the platform responsibly",
    body: (
      <p>
        Users must not place false orders, attempt to access other accounts, upload malicious
        content, or scrape or disrupt Ahiver without permission. Search matches and AI suggestions
        help discovery; they do not guarantee a seller&apos;s identity, quality, price, or stock.
        Buyers should confirm transaction details directly with sellers before paying them.
      </p>
    ),
  },
  {
    heading: "Seller information and enforcement",
    body: (
      <p>
        Ahiver currently collects seller business and contact details during registration. We do
        not represent that every seller has undergone formal identity, CAC, or licence verification.
        We may request supporting information, review complaints, remove listings, restrict
        features, or suspend accounts where appropriate. We may also report suspected unlawful
        activity to relevant authorities.
      </p>
    ),
  },
  {
    heading: "Report a concern",
    body: (
      <p>
        Email hello@ahiver.com with the store or listing link, relevant dates, and any supporting
        evidence. This policy does not limit anyone&apos;s rights under applicable law.
      </p>
    ),
  },
]

export default function AcceptableUsePage() {
  return (
    <LegalLayout
      title="Acceptable Use Policy"
      lastUpdated="14 October 2026"
      currentHref="/legal/acceptable-use"
      intro="Rules for safe, honest, and lawful use of Ahiver by sellers and buyers."
      sections={sections}
    />
  )
}
