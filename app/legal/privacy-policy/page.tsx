import LegalLayout, { LegalSection } from "@/components/LegalLayout"

const sections: LegalSection[] = [
  {
    heading: "Information We Collect",
    body: (
      <>
        <p>We collect different types of information depending on how you use Ahiver.</p>

        <p className="!mt-6 font-semibold text-[#0D1020]">1.1 Information you provide directly</p>
        <p>When you sign up and use Ahiver, we collect:</p>
        <ul>
          <li>Your full name</li>
          <li>Email address (the Ahiver app signs you in with a one-time code sent to it)</li>
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
        <p>When you use the Ahiver app as a buyer, we also keep:</p>
        <ul>
          <li>
            Orders you place: what you asked for, and the name and phone number you give so the
            business can confirm the order with you
          </li>
          <li>
            What you tell the street (requests to nearby businesses for something you need) and the
            replies businesses send
          </li>
          <li>Your messages with businesses</li>
          <li>Businesses you follow and things you save</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#0D1020]">1.2 Information collected automatically</p>
        <p>When you use Ahiver, we automatically collect:</p>
        <ul>
          <li>Your location (with your permission), rounded to about 110 metres — used to show you businesses near you</li>
          <li>Device information (device model, operating system, browser type, screen size)</li>
          <li>Usage data (pages you visit, features you use, time spent on the app, search queries)</li>
          <li>Log data (IP address, access times, referring URLs)</li>
          <li>Cookies and similar technologies (see our Cookie Policy)</li>
          <li>
            If you allow notifications in the Ahiver app: a notification token for your phone, an ID
            for this install of the app, and the notification types you turned off
          </li>
        </ul>

        <p className="!mt-6 font-semibold text-[#0D1020]">Voice in the Ahiver app</p>
        <p>
          When you ask for something by voice, your phone&apos;s speech recognition turns your speech
          into text (on some phones this uses Google&apos;s or Apple&apos;s speech service), and only
          that text is sent to Ahiver. Ahiver never receives, records or keeps audio. The microphone is
          used only while you are asking. Ask Ahiver matches the text of your question against real
          businesses and products near the area you chose, on our own servers.
        </p>

        <p className="!mt-6 font-semibold text-[#0D1020]">1.3 Information from other sources</p>
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

        <p className="!mt-6 font-semibold text-[#0D1020]">Provide the Service:</p>
        <ul>
          <li>Show you businesses near your location</li>
          <li>Power the discovery feed, search, and recommendations</li>
          <li>Enable messaging between buyers and sellers</li>
          <li>Process and verify your seller account</li>
          <li>Display your store and products to nearby buyers</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#0D1020]">Improve the Service:</p>
        <ul>
          <li>Understand how people use Ahiver so we can make it better</li>
          <li>Fix bugs and improve performance</li>
          <li>Develop new features</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#0D1020]">Communicate with you:</p>
        <ul>
          <li>Send transactional emails (account verification, password resets, important account updates)</li>
          <li>
            Send notifications you&apos;ve allowed: new messages, replies to what you told the street,
            order updates, new businesses near the area you last used (at most twice a week), and news
            from the Ahiver team (at most three times a week, never at night). You can turn each type
            off in the app under You → Settings → Notifications, or turn all of them off in your
            phone&apos;s settings.
          </li>
          <li>Respond to your support requests</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#0D1020]">Keep Ahiver safe:</p>
        <ul>
          <li>Detect and prevent fraud, spam, and abuse</li>
          <li>Enforce our Terms of Service</li>
          <li>Protect users, sellers, and the platform</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#0D1020]">Comply with legal obligations:</p>
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

        <p className="!mt-6 font-semibold text-[#0D1020]">3.1 With other Ahiver users</p>
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
          <li>
            When you tell the street what you need, nearby businesses see the request but not who you
            are. Your name and phone number go to a business only when you order from it, and only to
            that business, so it can confirm the order with you.
          </li>
        </ul>

        <p className="!mt-6 font-semibold text-[#0D1020]">3.2 With service providers</p>
        <p>We use trusted third-party providers to operate Ahiver, including:</p>
        <ul>
          <li>Hosting providers (Railway, Vercel, MongoDB Atlas)</li>
          <li>Image storage (ImageKit)</li>
          <li>Email delivery providers</li>
          <li>Payment processors (Paystack, Flutterwave) — when subscription payments are processed</li>
          <li>Push notification services (web push providers, Apple and Google for the app)</li>
          <li>Maps (Mapbox) — shows the map in the app and collects usage and diagnostic data about the map; you can opt out with the (i) button on the map</li>
          <li>Google (Gemini) — writes replies for businesses that switch on an automatic assistant, and helps Ask understand what you need (see &ldquo;Automatic assistants&rdquo; below)</li>
          <li>
            Push notification services: web push providers, Expo, Google Firebase Cloud Messaging (on
            Android) and Apple Push Notification service (on iPhone)
          </li>
          <li>Maps (Mapbox), to show businesses on a map</li>
          <li>Analytics tools (used to understand product usage)</li>
        </ul>
        <p className="!mt-6 font-semibold text-[#0D1020]">Automatic assistants</p>
        <p>
          Some businesses use an automatic assistant to answer messages when they are busy. Before it
          answers you, the app asks whether you allow it. If you allow it, your messages in chats with
          businesses that use one, and the few messages before them, are sent to Google (Gemini) to write
          a reply. Replies written this way are labelled. If you say no, or never answer, nothing you
          write is sent and the business answers you itself. You can change your answer in Privacy
          choices at any time. Businesses that message Ahiver on WhatsApp can also use an assistant,
          which sends their messages to Google (Gemini) in the same way.
        </p>
        <p>
          These providers have access to your information only to perform tasks for us and are
          obligated to protect it.
        </p>

        <p className="!mt-6 font-semibold text-[#0D1020]">3.3 Legal disclosures</p>
        <p>
          We may disclose your information if required by Nigerian law, court order, or government
          authority — or if we believe disclosure is necessary to protect our rights, your safety, or
          the safety of others.
        </p>

        <p className="!mt-6 font-semibold text-[#0D1020]">3.4 Business transfers</p>
        <p>
          If Ahiver is involved in a merger, acquisition, or sale of assets, your information may be
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
          Ahiver is a location-based service. We need your location to show you businesses near you.
          Here&apos;s how we handle it:
        </p>
        <ul>
          <li>
            We request your location permission through your device. You can decline and still use
            Ahiver — we&apos;ll default to showing businesses in a city of your choice.
          </li>
          <li>
            We use your location rounded to about 110 metres, never your exact home address. When you
            send a request to nearby businesses (Tell), that rounded location is kept with the request.
          </li>
          <li>
            Your specific location is never shown to other users. Sellers only see general distance
            ranges (for example, &ldquo;0.5km away&rdquo;) — not your precise coordinates.
          </li>
          <li>
            If you allow notifications in the Ahiver app, we keep the area you last used with your
            phone&apos;s registration, rounded to about 1 km, only to tell you about new businesses that
            open near it. Signing out removes it.
          </li>
          <li>You can disable location access at any time through your device settings.</li>
        </ul>
        <p className="!mt-6 font-semibold text-[#0D1020]">Reports and blocks</p>
        <p>
          You can report a business, a message or an area-board post, and block a business. A report
          is seen only by the Ahiver team; the business or person reported is not told who sent it. A
          blocked business can&apos;t message you and isn&apos;t told. Your blocks are deleted when you
          delete your account.
        </p>
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
          To delete your account, open the Ahiver app and go to You → Settings → Delete account, or
          email <a href="mailto:privacy@ahiver.com">privacy@ahiver.com</a>. Step-by-step instructions,
          and what is kept, are on our <a href="/legal/delete-account">Delete your account</a> page.
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
          <a href="mailto:privacy@ahiver.com">privacy@ahiver.com</a>. We&apos;ll respond within 30
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
        Ahiver is not intended for users under 18 years old. We do not knowingly collect personal
        information from children. If you believe a child has provided us with information, please
        email <a href="mailto:privacy@ahiver.com">privacy@ahiver.com</a> and we will delete it
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
        Ahiver may contain links to other websites or services (for example, when a seller links to
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
        <p>Your continued use of Ahiver after changes take effect means you accept the updated policy.</p>
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
          <strong>Ahiver Services</strong>
          <br />
          Email: <a href="mailto:privacy@ahiver.com">privacy@ahiver.com</a>
          <br />
          Support: <a href="mailto:hello@ahiver.com">hello@ahiver.com</a>
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
      lastUpdated="26 November 2026"
      currentHref="/legal/privacy-policy"
      intro={
        <>
          This Privacy Policy explains how Ahiver (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;) collects, uses, shares, and protects your information when you use our
          platform — whether through our website, mobile app, or any related service (collectively,
          the &ldquo;Service&rdquo;). Ahiver is operated by Ahiver Services, a company registered
          in Nigeria. We comply with the Nigeria Data Protection Act 2023 (NDPA) and other applicable
          data protection laws. By using Ahiver, you agree to the practices described here. If you do
          not agree, please do not use the Service.
        </>
      }
      sections={sections}
    />
  )
}
