import LegalLayout, { LegalSection } from "@/components/LegalLayout"

const sections: LegalSection[] = [
  {
    heading: "What Are Cookies",
    body: (
      <>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help the
          site remember information about your visit — like your login state, preferences, and how you
          use the site.
        </p>
        <p>We also use similar technologies including:</p>
        <ul>
          <li>
            <strong>Local storage and session storage</strong> — small data stored by the app on your
            device
          </li>
          <li>
            <strong>Web beacons and pixels</strong> — tiny images used to track page views and email
            opens
          </li>
          <li>
            <strong>Mobile app identifiers</strong> — used to identify your device for app analytics
          </li>
        </ul>
        <p>For simplicity, we refer to all of these as &ldquo;cookies&rdquo; in this policy.</p>
      </>
    ),
  },
  {
    heading: "Types of Cookies We Use",
    body: (
      <>
        <p className="font-semibold text-[#1a1a1a]">2.1 Strictly necessary cookies</p>
        <p>These are essential for Nearli to work. Without them, key features won&apos;t function.</p>
        <p>Examples:</p>
        <ul>
          <li>Authentication cookies that keep you logged in</li>
          <li>Session cookies that remember your current activity</li>
          <li>Security cookies that protect against fraud</li>
          <li>Cookies that remember items in your store dashboard</li>
        </ul>
        <p>You cannot disable these — if you do, the platform won&apos;t work properly.</p>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">2.2 Functional cookies</p>
        <p>These remember your preferences and improve your experience.</p>
        <p>Examples:</p>
        <ul>
          <li>Remembering your selected city or location</li>
          <li>Remembering whether you&apos;ve seen the cinematic map intro this session</li>
          <li>Remembering your notification preferences</li>
          <li>Remembering interface choices (dark mode, language)</li>
        </ul>
        <p>You can disable these but parts of the app may feel less personalized.</p>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">2.3 Analytics cookies</p>
        <p>These help us understand how people use Nearli so we can improve it.</p>
        <p>Examples:</p>
        <ul>
          <li>Counting visitors and tracking which pages are most visited</li>
          <li>Understanding how users move through the app</li>
          <li>Identifying bugs and performance issues</li>
          <li>Measuring feature adoption</li>
        </ul>
        <p>We use these in aggregate — they don&apos;t identify you personally to us.</p>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">2.4 Marketing and advertising cookies</p>
        <p>
          At present, Nearli does not use marketing or advertising cookies. If this changes in the
          future, we will update this policy and ask for your consent where required.
        </p>
      </>
    ),
  },
  {
    heading: "Third-Party Cookies",
    body: (
      <>
        <p>Some cookies are set by services we use to operate Nearli:</p>
        <ul>
          <li>
            <strong>Hosting and infrastructure</strong> (Railway, Vercel) — for security and
            performance
          </li>
          <li>
            <strong>Image delivery</strong> (ImageKit) — to serve images efficiently
          </li>
          <li>
            <strong>Analytics tools</strong> — to understand product usage
          </li>
          <li>
            <strong>Payment processors</strong> (Paystack, Flutterwave) — when processing
            subscription payments
          </li>
        </ul>
        <p>
          These third parties have their own privacy and cookie policies, which govern how they handle
          data.
        </p>
      </>
    ),
  },
  {
    heading: "Cookies in the Mobile App",
    body: (
      <>
        <p>
          Our mobile app uses local storage equivalents — small files stored on your device that
          perform similar functions to web cookies. These help keep you logged in, remember your
          preferences, and store your push notification subscription.
        </p>
        <p>
          You can clear app data through your device settings, but this will log you out and reset
          your preferences.
        </p>
      </>
    ),
  },
  {
    heading: "How Long Cookies Last",
    body: (
      <ul>
        <li>
          <strong>Session cookies</strong> — deleted when you close your browser or app
        </li>
        <li>
          <strong>Persistent cookies</strong> — stay on your device for a set period (usually up to 1
          year) or until you delete them
        </li>
        <li>
          <strong>Authentication cookies</strong> — last as long as your session is active, with
          refresh tokens lasting up to 7 days
        </li>
      </ul>
    ),
  },
  {
    heading: "How to Control Cookies",
    body: (
      <>
        <p>You can control cookies in several ways:</p>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">6.1 Browser settings</p>
        <p>Most browsers let you:</p>
        <ul>
          <li>View what cookies are stored</li>
          <li>Block cookies from specific sites or all sites</li>
          <li>Delete cookies after each session</li>
          <li>Get notified when a site tries to set a cookie</li>
        </ul>
        <p>Here are links to cookie settings for popular browsers:</p>
        <ul>
          <li>Chrome: chrome://settings/cookies</li>
          <li>Firefox: about:preferences#privacy</li>
          <li>Safari: Settings → Safari → Privacy</li>
          <li>Edge: edge://settings/privacy</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">6.2 Mobile device settings</p>
        <p>You can reset advertising identifiers and limit ad tracking in your device settings:</p>
        <ul>
          <li>iOS: Settings → Privacy → Tracking</li>
          <li>Android: Settings → Privacy → Ads</li>
        </ul>

        <p className="!mt-6 font-semibold text-[#1a1a1a]">6.3 In-app controls</p>
        <p>Within Nearli, you can:</p>
        <ul>
          <li>Manage your notification preferences in Settings</li>
          <li>Clear your local data through Account → Privacy</li>
          <li>Log out to clear session cookies</li>
        </ul>
        <p>Note: blocking strictly necessary cookies will prevent Nearli from working properly.</p>
      </>
    ),
  },
  {
    heading: "Changes to This Policy",
    body: (
      <p>
        We may update this Cookie Policy from time to time as our practices evolve. When we do,
        we&apos;ll change the &ldquo;Last updated&rdquo; date and notify you through the app for
        significant changes.
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <>
        <p>If you have questions about how we use cookies, contact us at:</p>
        <p>
          <strong>Nearli Technologies</strong>
          <br />
          Email: <a href="mailto:privacy@nearli.com">privacy@nearli.com</a>
          <br />
          Address: [Your registered business address]
        </p>
      </>
    ),
  },
]

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="[DATE]"
      currentHref="/legal/cookie-policy"
      intro={
        <>
          This Cookie Policy explains how Nearli uses cookies and similar technologies on our website
          and app. It works alongside our Privacy Policy. By using Nearli, you agree to our use of
          cookies as described here. You can control cookies through your browser settings at any
          time.
        </>
      }
      sections={sections}
    />
  )
}
