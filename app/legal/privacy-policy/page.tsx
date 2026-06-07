import LegalLayout, { LegalSection } from "@/components/LegalLayout"

const sections: LegalSection[] = [
  {
    heading: "Information We Collect",
    body: (
      <>
        <p>We collect different types of information depending on how you use Nearli.</p>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">1.1 Information you provide directly</p>
        <p>When you sign up and use Nearli, we collect:</p>
        <ul>
          <li>Your full name</li>
          <li>Email address</li>
          <li>Phone number (if you choose to provide it)</li>
          <li>
            Password (stored securely as an encrypted hash — we never store your raw password)
          </li>
          <li>Your state and city</li>
          <li>Profile photo and bio (if you upload them)</li>
        </ul>
        <p>If you become a seller, we additionally collect:</p>
        <ul>
          <li>Business name and description</li>
          <li>Business email</li>
          <li>Business type (sole, partnership, etc.)</li>
          <li>Store category, location, and contact information</li>
          <li>Product photos, descriptions, prices, and inventory</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">1.2 Information collected automatically</p>
        <p>When you use Nearli, we automatically collect:</p>
        <ul>
          <li>Your approximate location (with your permission) — used to show you businesses near you</li>
          <li>Device information (device model, operating system, browser type, screen size)</li>
          <li>Usage data (pages you visit, features you use, time spent on the app, search queries)</li>
          <li>Log data (IP address, access times, referring URLs)</li>
          <li>Cookies and similar technologies (see our Cookie Policy)</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">1.3 Information from other sources</p>
        <p>
          If you sign up using a third-party service (for example, Google), we receive basic profile
          information from that service — usually your name, email, and profile photo.
        </p>
      </>
    ),
  },
  {
    heading: "How We Use Your Information",
    body: (
      <>
        <p>We use your information to:</p>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">Provide the Service:</p>
        <ul>
          <li>Show you businesses near your location</li>
          <li>Power the discovery feed, search, and recommendations</li>
          <li>Enable messaging between buyers and sellers</li>
          <li>Process and verify your seller account</li>
          <li>Display your store and products to nearby buyers</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">Improve the Service:</p>
        <ul>
          <li>Understand how people use Nearli so we can make it better</li>
          <li>Fix bugs and improve performance</li>
          <li>Develop new features</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">Communicate with you:</p>
        <ul>
          <li>Send transactional emails (account verification, password resets, important account updates)</li>
          <li>Send notifications you&apos;ve opted into (new messages, store activity, board replies)</li>
          <li>Respond to your support requests</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">Keep Nearli safe:</p>
        <ul>
          <li>Detect and prevent fraud, spam, and abuse</li>
          <li>Enforce our Terms of Service</li>
          <li>Protect users, sellers, and the platform</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">Comply with legal obligations:</p>
        <ul>
          <li>Respond to lawful requests from authorities</li>
          <li>Comply with applicable Nigerian and international laws</li>
        </ul>

        <p>We do not sell your personal data to third parties for advertising purposes.</p>
      </>
    ),
  },
  {
    heading: "How We Share Your Information",
    body: (
      <>
        <p>We share information only in the following situations:</p>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">3.1 With other Nearli users</p>
        <ul>
          <li>
            Your profile information (name, photo, bio) is visible to other users when you interact
            on the platform
          </li>
          <li>
            If you&apos;re a seller, your store name, products, location area, and reviews are public
            to buyers
          </li>
          <li>Messages you send to other users are visible to them</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">3.2 With service providers</p>
        <p>We use trusted third-party providers to operate Nearli, including:</p>
        <ul>
          <li>Hosting providers (Railway, Vercel, MongoDB Atlas)</li>
          <li>Image storage (ImageKit)</li>
          <li>Email delivery providers</li>
          <li>Payment processors (Paystack, Flutterwave) — when subscription payments are processed</li>
          <li>Push notification services (web push providers)</li>
          <li>Analytics tools (used to understand product usage)</li>
        </ul>
        <p>
          These providers have access to your information only to perform tasks for us and are
          obligated to protect it.
        </p>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">3.3 Legal disclosures</p>
        <p>
          We may disclose your information if required by Nigerian law, court order, or government
          authority — or if we believe disclosure is necessary to protect our rights, your safety, or
          the safety of others.
        </p>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">3.4 Business transfers</p>
        <p>
          If Nearli is involved in a merger, acquisition, or sale of assets, your information may be
          transferred as part of that transaction. We will notify you before your information becomes
          subject to a different privacy policy.
        </p>
      </>
    ),
  },
  {
    heading: "Location Data",
    body: (
      <>
        <p>
          Nearli is a location-based service. We need your location to show you businesses near you.
          Here&apos;s how we handle it:
        </p>
        <ul>
          <li>
            We request your location permission through your device. You can decline and still use
            Nearli — we&apos;ll default to showing businesses in Lagos or another city of your choice.
          </li>
          <li>We store your approximate location (latitude and longitude), not your exact home address.</li>
          <li>
            Your specific location is never shown to other users. Sellers only see general distance
            ranges (for example, &ldquo;0.5km away&rdquo;) — not your precise coordinates.
          </li>
          <li>You can disable location access at any time through your device settings.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Data Retention",
    body: (
      <>
        <p>
          We keep your information for as long as your account is active. If you delete your account:
        </p>
        <ul>
          <li>We delete your profile information within 30 days</li>
          <li>
            We may retain certain data (transaction records, account history, security logs) for up
            to 7 years where required by Nigerian law or for legitimate business purposes (tax
            records, dispute resolution)
          </li>
          <li>Messages you sent to other users may remain in their inbox unless they also delete them</li>
          <li>
            Anonymized, aggregated data (with no personal identifiers) may be retained indefinitely
            for analytics
          </li>
        </ul>
        <p>
          To delete your account, go to Settings → Account → Delete Account in the app, or email{" "}
          <a href="mailto:privacy@nearli.com">privacy@nearli.com</a>.
        </p>
      </>
    ),
  },
  {
    heading: "Your Rights Under Nigerian Law",
    body: (
      <>
        <p>Under the Nigeria Data Protection Act 2023, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> — request a copy of the personal information we hold about you</li>
          <li><strong>Correct</strong> — ask us to fix inaccurate or incomplete data</li>
          <li>
            <strong>Delete</strong> — request deletion of your information (subject to legal retention
            requirements)
          </li>
          <li><strong>Object</strong> — object to certain uses of your data</li>
          <li>
            <strong>Withdraw consent</strong> — withdraw consent for processing where consent is the
            legal basis
          </li>
          <li><strong>Data portability</strong> — request your data in a machine-readable format</li>
          <li>
            <strong>Lodge a complaint</strong> — file a complaint with the Nigeria Data Protection
            Commission (NDPC) if you believe your rights have been violated
          </li>
        </ul>
        <p>
          To exercise any of these rights, email{" "}
          <a href="mailto:privacy@nearli.com">privacy@nearli.com</a>. We&apos;ll respond within 30
          days.
        </p>
      </>
    ),
  },
  {
    heading: "Data Security",
    body: (
      <>
        <p>
          We take security seriously and use industry-standard measures to protect your data,
          including:
        </p>
        <ul>
          <li>HTTPS encryption for all data transmitted to and from our servers</li>
          <li>Encrypted password storage (bcrypt)</li>
          <li>Secure JWT-based authentication with refresh tokens</li>
          <li>Access controls limiting who on our team can see user data</li>
          <li>Regular security reviews</li>
        </ul>
        <p>
          No system is 100% secure. If we discover a data breach affecting your personal information,
          we will notify you and the Nigeria Data Protection Commission as required by law.
        </p>
      </>
    ),
  },
  {
    heading: "Children's Privacy",
    body: (
      <p>
        Nearli is not intended for users under 18 years old. We do not knowingly collect personal
        information from children. If you believe a child has provided us with information, please
        email <a href="mailto:privacy@nearli.com">privacy@nearli.com</a> and we will delete it
        promptly.
      </p>
    ),
  },
  {
    heading: "International Data Transfers",
    body: (
      <p>
        Some of our service providers (hosting, email, analytics) are located outside Nigeria. When
        we transfer your data outside Nigeria, we ensure appropriate safeguards are in place —
        including using providers that comply with recognized international data protection standards.
      </p>
    ),
  },
  {
    heading: "Third-Party Links",
    body: (
      <p>
        Nearli may contain links to other websites or services (for example, when a seller links to
        their Instagram or WhatsApp). We are not responsible for the privacy practices of those third
        parties. Please review their privacy policies before sharing information with them.
      </p>
    ),
  },
  {
    heading: "Changes to This Policy",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time. When we do, we&apos;ll change the
          &ldquo;Last updated&rdquo; date at the top and, for significant changes, notify you through
          the app or by email.
        </p>
        <p>Your continued use of Nearli after changes take effect means you accept the updated policy.</p>
      </>
    ),
  },
  {
    heading: "Contact Us",
    body: (
      <>
        <p>
          If you have any questions about this Privacy Policy or how we handle your data, contact us
          at:
        </p>
        <p>
          <strong>Nearli Technologies</strong>
          <br />
          Email: <a href="mailto:privacy@nearli.com">privacy@nearli.com</a>
          <br />
          Support: <a href="mailto:hello@nearli.com">hello@nearli.com</a>
          <br />
          Address: [Your registered business address]
        </p>
        <p>
          You can also contact the Nigeria Data Protection Commission at{" "}
          <a href="mailto:info@ndpc.gov.ng">info@ndpc.gov.ng</a> if you have unresolved concerns.
        </p>
      </>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="[DATE]"
      currentHref="/legal/privacy-policy"
      intro={
        <>
          This Privacy Policy explains how Nearli (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;) collects, uses, shares, and protects your information when you use our
          platform — whether through our website, mobile app, or any related service (collectively,
          the &ldquo;Service&rdquo;). Nearli is operated by Nearli Technologies, a company registered
          in Nigeria. We comply with the Nigeria Data Protection Act 2023 (NDPA) and other applicable
          data protection laws. By using Nearli, you agree to the practices described here. If you do
          not agree, please do not use the Service.
        </>
      }
      sections={sections}
    />
  )
}
