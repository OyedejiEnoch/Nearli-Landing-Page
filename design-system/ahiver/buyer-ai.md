# Buyer AI landing-page addition

The homepage now renders BuyerAi in place of the earlier four-card BuyerSection.
The original BuyerSection source remains available.

## Product scope

Copy is based on the buyer WhatsApp implementation and BUYER-WHATSAPP-V1.md in
the storefront repository: natural-language text, location pins / typed areas,
store suggestions, and storefront links. No payment, voice, photo-search,
guaranteed stock, guaranteed price, or user-count claims are included.

## WhatsApp CTA configuration

The default dedicated Buyer AI number is 2348064235806. Set
NEXT_PUBLIC_BUYER_WHATSAPP_NUMBER to override the buyer phone number,
including country code (digits only; a leading plus is also accepted), then
restart the development server or rebuild the deployment.

The value is public. Do not put a token, Meta phone-number ID, or seller/support
number here. If absent or invalid, the CTA is labelled "Explore on Ahiver" and
opens the dedicated Buyer AI conversation on WhatsApp
of the public buyer number.

## Visual treatment

Adapted from Xara's feature-to-chat demonstration and short onboarding flow,
and Fluxt's emphasis on familiar WhatsApp interactions.
Sources: https://usexara.ai/ and https://www.usefluxt.com/

Use the current landing-page Bricolage / Playfair typography and ink/coral
identity rather than the older generated orange design-system palette.
The scoped CSS module adds warm paper and a muted chat-demo background.

Features are controlled by native accordion buttons with expanded states.
Keyboard selections are immediate; pointer changes use a brief transition.
GSAP entrance animations honour reduced motion and clean up on unmount.
Mobile uses a single column. The existing hero and seller sections are retained.

The phone uses four user-supplied WhatsApp screenshots in public/buyer-ai:
location and search/store results in light and dark appearance. Source JPEGs
are copied unchanged. The feature controls select the relevant conversation,
and a light/dark toggle selects the appearance. Each screenshot has descriptive
alt text and a link to open the full-size conversation. Image dimensions and a
shared aspect ratio reserve space while switching, with no fabricated messages.
The location examples include the map pin visible in the supplied screenshots.
