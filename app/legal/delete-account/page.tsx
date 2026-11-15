import LegalLayout, { LegalSection } from "@/components/LegalLayout"

// Linked from the Google Play listing as the account deletion page. Keep it in
// line with what the auth service actually deletes (storefront
// docs/mobile/delete-account.md).
const sections: LegalSection[] = [
  {
    heading: "Delete your account in the app",
    body: (
      <>
        <ol>
          <li>Open the Ahiver app and sign in.</li>
          <li>Tap You, then the gear at the top to open Settings.</li>
          <li>Tap Delete account.</li>
          <li>We email a 6-digit code to your account&apos;s address. Enter it to confirm.</li>
        </ol>
        <p>
          Your account is deleted straight away. If you own a shop on Ahiver, close the shop first in
          the seller dashboard; the app will tell you if this applies.
        </p>
      </>
    ),
  },
  {
    heading: "Without the app",
    body: (
      <p>
        Email <a href="mailto:privacy@ahiver.com?subject=Delete%20my%20Ahiver%20account">privacy@ahiver.com</a>{" "}
        from the email address on your account, with the subject &ldquo;Delete my Ahiver
        account&rdquo;. We may ask you to confirm it is you, and we delete the account within 30 days.
      </p>
    ),
  },
  {
    heading: "What we delete",
    body: (
      <ul>
        <li>Your account, sign-in details and every signed-in session</li>
        <li>Your profile, the businesses you follow and the things you saved</li>
        <li>Your messages with businesses, and what you told the street with the replies</li>
        <li>Your reviews, reports and community posts</li>
        <li>Your phones&apos; notification registrations and the area kept for alerts</li>
        <li>Your profile photo and community photos (removed from storage shortly after)</li>
      </ul>
    ),
  },
  {
    heading: "What we keep, and why",
    body: (
      <>
        <p>
          Orders you placed stay with the business, because it needs them for its own records: the
          order number, the business, what was ordered, totals, and the order&apos;s status and dates.
          Your name on them becomes &ldquo;Deleted customer&rdquo;, and your phone number, address and
          notes are removed.
        </p>
        <p>
          Some records may be kept for up to 7 years where Nigerian law requires it (for example tax
          records or dispute resolution). See our <a href="/legal/privacy-policy">Privacy Policy</a>{" "}
          for details.
        </p>
      </>
    ),
  },
]

export default function DeleteAccountPage() {
  return (
    <LegalLayout
      title="Delete your account"
      lastUpdated="15 November 2026"
      currentHref="/legal/delete-account"
      intro={<>You can delete your Ahiver account at any time, in the app or by email. Here is how, and what happens to your data.</>}
      sections={sections}
    />
  )
}
