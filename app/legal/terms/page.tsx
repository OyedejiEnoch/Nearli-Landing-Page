import LegalLayout, { LegalSection } from "@/components/LegalLayout"

const sections: LegalSection[] = [
  {
    heading: "Who Can Use Nearli",
    body: (
      <>
        <p>To use Nearli, you must be:</p>
        <ul>
          <li>At least 18 years old</li>
          <li>Able to enter into a binding contract under Nigerian law</li>
          <li>Not prohibited from using the Service under any applicable laws</li>
        </ul>
        <p>
          If you&apos;re using Nearli on behalf of a business, you confirm that you have authority to
          bind that business to these Terms.
        </p>
      </>
    ),
  },
  {
    heading: "Your Account",
    body: (
      <>
        <p>When you create an account on Nearli, you agree to:</p>
        <ul>
          <li>Provide accurate, current, and complete information</li>
          <li>Keep your account information up to date</li>
          <li>Keep your password secure and confidential</li>
          <li>Be responsible for all activity on your account</li>
          <li>Notify us immediately if you suspect unauthorized access</li>
        </ul>
        <p>You may not:</p>
        <ul>
          <li>Create an account using false information</li>
          <li>Create an account on behalf of someone else without their authorization</li>
          <li>Have more than one personal account</li>
          <li>Transfer or sell your account to anyone else</li>
        </ul>
        <p>We may suspend or terminate your account if you violate these Terms.</p>
      </>
    ),
  },
  {
    heading: "What Nearli Is",
    body: (
      <>
        <p>
          Nearli is a location-based marketplace and discovery platform that connects buyers with
          local businesses in Nigerian cities. We provide the platform and tools — but we are not a
          party to transactions between buyers and sellers.
        </p>
        <p>This means:</p>
        <ul>
          <li>We don&apos;t sell products ourselves</li>
          <li>We don&apos;t handle delivery or fulfilment</li>
          <li>
            We don&apos;t process payments between buyers and sellers for purchases (sellers handle
            payment with their customers directly, via bank transfer, cash, or other methods they
            choose)
          </li>
          <li>
            We don&apos;t guarantee product quality, accuracy of listings, or completion of
            transactions
          </li>
        </ul>
        <p>
          Sellers and buyers are responsible for their own transactions, including pricing, delivery,
          refunds, and dispute resolution.
        </p>
      </>
    ),
  },
  {
    heading: "Seller Terms",
    body: (
      <>
        <p>If you sign up as a seller on Nearli, you agree to:</p>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">4.1 List honestly</p>
        <ul>
          <li>Only list products and services that you have the lawful right to sell</li>
          <li>Provide accurate descriptions, photos, prices, and availability</li>
          <li>Update your listings promptly when products go out of stock or prices change</li>
          <li>Not list counterfeit, stolen, or illegal items</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">4.2 Honor your commitments</p>
        <ul>
          <li>Honor the prices you advertise</li>
          <li>Respond to buyer messages in good faith</li>
          <li>Complete transactions you agree to with buyers</li>
          <li>Handle complaints, refunds, and returns professionally</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">4.3 Prohibited products and services</p>
        <p>You may not list:</p>
        <ul>
          <li>Illegal goods or services under Nigerian law</li>
          <li>Counterfeit, replica, or unauthorized products</li>
          <li>Weapons, ammunition, or explosives</li>
          <li>Controlled substances or drugs requiring prescription</li>
          <li>Stolen goods</li>
          <li>Live animals (unless properly licensed)</li>
          <li>Human remains, body parts, or bodily fluids</li>
          <li>Adult content or services</li>
          <li>Multi-level marketing schemes or pyramid schemes</li>
          <li>Cryptocurrency, securities, or financial instruments</li>
          <li>Anything that violates third-party intellectual property rights</li>
        </ul>
        <p>We may remove listings that violate these rules and suspend repeat offenders.</p>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">4.4 Comply with the law</p>
        <ul>
          <li>Pay all applicable taxes on your sales</li>
          <li>Comply with Nigerian consumer protection laws</li>
          <li>Obtain any business licenses or permits required for your trade</li>
          <li>Comply with all applicable safety and quality standards</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">4.5 Subscription plans (when applicable)</p>
        <p>If you choose a paid subscription:</p>
        <ul>
          <li>You agree to pay the subscription fees stated in the app</li>
          <li>Subscriptions auto-renew unless cancelled before the next billing cycle</li>
          <li>Fees are non-refundable for partial months</li>
          <li>You can cancel anytime — your plan continues until the end of the current billing period</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Buyer Terms",
    body: (
      <>
        <p>If you use Nearli as a buyer, you agree to:</p>
        <ul>
          <li>Provide honest information when contacting sellers</li>
          <li>Engage with sellers in good faith</li>
          <li>Not make false complaints, fake reviews, or malicious reports</li>
          <li>Honor the agreements you make with sellers</li>
          <li>Use the Community Boards only for genuine, commerce-related discussions</li>
        </ul>
        <p>You understand that:</p>
        <ul>
          <li>
            Nearli is not responsible for the quality, safety, or legality of products listed by
            sellers
          </li>
          <li>
            Disputes between you and a seller are between you and that seller — we can help mediate
            but cannot guarantee outcomes
          </li>
          <li>You should inspect products and verify details before committing to a purchase</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Community Boards",
    body: (
      <>
        <p>
          Community Boards are public forums where buyers can ask questions and sellers can respond
          with relevant products from their inventory.
        </p>
        <p>When using the Boards, you agree to:</p>
        <ul>
          <li>Post genuine, commerce-related questions or replies</li>
          <li>Not spam, advertise unrelated products, or harass others</li>
          <li>Not post defamatory, offensive, discriminatory, or harmful content</li>
          <li>Respect other community members</li>
          <li>Accept that posts expire after 7 days (unresolved posts) to keep the boards fresh</li>
        </ul>
        <p>
          Sellers may only reply to posts (not create their own). Seller replies must reference a
          real product from the seller&apos;s inventory.
        </p>
        <p>We may remove posts and replies that violate these rules.</p>
      </>
    ),
  },
  {
    heading: "Content You Post",
    body: (
      <>
        <p>
          You retain ownership of the content you post on Nearli — your photos, descriptions,
          messages, posts, and reviews.
        </p>
        <p>
          By posting content, you grant Nearli a worldwide, non-exclusive, royalty-free license to
          use, display, reproduce, and distribute that content for the purpose of operating and
          promoting the Service.
        </p>
        <p>You confirm that:</p>
        <ul>
          <li>The content is yours, or you have permission to post it</li>
          <li>Your content doesn&apos;t infringe anyone&apos;s copyright, trademark, or other rights</li>
          <li>Your content doesn&apos;t violate any laws</li>
        </ul>
        <p>
          We may remove content that violates these Terms or that we believe is harmful, offensive,
          or inappropriate.
        </p>
      </>
    ),
  },
  {
    heading: "Prohibited Conduct",
    body: (
      <>
        <p>You may not:</p>
        <ul>
          <li>Use Nearli for any illegal purpose</li>
          <li>Attempt to gain unauthorized access to other accounts or our systems</li>
          <li>Use bots, scrapers, or automated tools to access Nearli without our written permission</li>
          <li>Reverse engineer, decompile, or copy our software</li>
          <li>Impersonate other people or businesses</li>
          <li>Send spam, phishing messages, or malware</li>
          <li>Interfere with other users&apos; use of the platform</li>
          <li>Use Nearli to harass, threaten, or harm others</li>
          <li>Circumvent any technical limits we put in place</li>
        </ul>
        <p>
          Violation of these rules may result in immediate account termination and, where applicable,
          legal action.
        </p>
      </>
    ),
  },
  {
    heading: "Intellectual Property",
    body: (
      <>
        <p>
          The Nearli platform — including the brand name, logo, designs, code, and all features — is
          owned by Nearli Technologies and protected by intellectual property laws.
        </p>
        <p>You may not:</p>
        <ul>
          <li>Copy, modify, or redistribute any part of the platform without our written permission</li>
          <li>
            Use the Nearli name, logo, or brand in any way that suggests affiliation or endorsement
            without permission
          </li>
          <li>Build a competing product based on our platform</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Disclaimers",
    body: (
      <>
        <p>
          Nearli is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make
          no warranties, express or implied, including:
        </p>
        <ul>
          <li>That the Service will be uninterrupted, error-free, or available at all times</li>
          <li>That information on the platform is accurate, complete, or current</li>
          <li>That products listed by sellers will meet your expectations</li>
          <li>That bugs or issues will be fixed within any specific timeframe</li>
        </ul>
        <p>To the maximum extent permitted by Nigerian law, we disclaim all warranties.</p>
      </>
    ),
  },
  {
    heading: "Limitation of Liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, Nearli Technologies and its team will not be liable
          for:
        </p>
        <ul>
          <li>Any indirect, incidental, consequential, or punitive damages</li>
          <li>Loss of profits, revenue, data, or business opportunities</li>
          <li>Disputes between buyers and sellers</li>
          <li>Acts or omissions of third-party service providers (including payment processors)</li>
          <li>
            Damages exceeding the amount you paid to Nearli in the 3 months before the event giving
            rise to liability — or ₦10,000, whichever is greater
          </li>
        </ul>
        <p>
          Nothing in these Terms excludes liability that cannot be excluded under Nigerian law (such
          as for fraud or willful misconduct).
        </p>
      </>
    ),
  },
  {
    heading: "Indemnification",
    body: (
      <>
        <p>
          You agree to defend and hold harmless Nearli Technologies from any claims, damages, or
          expenses (including legal fees) arising from:
        </p>
        <ul>
          <li>Your violation of these Terms</li>
          <li>Your violation of any law or third-party right</li>
          <li>Content you post on the platform</li>
          <li>Your transactions with other users</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Termination",
    body: (
      <>
        <p>You can stop using Nearli or delete your account at any time.</p>
        <p>We may suspend or terminate your account if:</p>
        <ul>
          <li>You violate these Terms</li>
          <li>You engage in fraudulent, harmful, or illegal activity</li>
          <li>Your account remains inactive for an extended period</li>
          <li>We&apos;re required to do so by law</li>
        </ul>
        <p>Upon termination:</p>
        <ul>
          <li>Your access to the Service ends immediately</li>
          <li>Your store and listings are removed from public view</li>
          <li>
            Certain provisions of these Terms survive termination, including ownership of content,
            disclaimers, and limitation of liability
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "Changes to These Terms",
    body: (
      <>
        <p>
          We may update these Terms from time to time. When we do, we&apos;ll change the &ldquo;Last
          updated&rdquo; date at the top and notify you of material changes through the app or by
          email.
        </p>
        <p>
          Your continued use of Nearli after changes take effect means you accept the updated Terms.
          If you don&apos;t agree, stop using the Service.
        </p>
      </>
    ),
  },
  {
    heading: "Governing Law and Dispute Resolution",
    body: (
      <>
        <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
        <p>
          If you have a dispute with us, we ask that you first contact us at{" "}
          <a href="mailto:hello@nearli.com">hello@nearli.com</a> so we can try to resolve it
          directly. Most disputes can be resolved this way.
        </p>
        <p>
          If we can&apos;t resolve the dispute, it shall be submitted to the courts of Nigeria, which
          have exclusive jurisdiction.
        </p>
      </>
    ),
  },
  {
    heading: "Contact",
    body: (
      <>
        <p>If you have any questions about these Terms, contact us at:</p>
        <p>
          <strong>Nearli Technologies</strong>
          <br />
          Email: <a href="mailto:hello@nearli.com">hello@nearli.com</a>
          <br />
          Support: <a href="mailto:support@nearli.com">support@nearli.com</a>
          <br />
          Address: [Your registered business address]
        </p>
      </>
    ),
  },
]

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="[DATE]"
      currentHref="/legal/terms"
      intro={
        <>
          Welcome to Nearli. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
          Nearli platform, including our website, mobile app, and related services (collectively, the
          &ldquo;Service&rdquo;). By creating an account or using Nearli, you agree to these Terms. If
          you don&apos;t agree, please don&apos;t use the Service. Nearli is operated by Nearli
          Technologies, a company registered in Nigeria.
        </>
      }
      sections={sections}
    />
  )
}
