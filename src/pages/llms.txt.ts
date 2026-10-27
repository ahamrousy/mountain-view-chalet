/**
 * Optional llms.txt — a plain-text summary for AI tools. It is a supplement only;
 * all of this information is also in the crawlable HTML pages.
 */
import type { APIRoute } from 'astro';
import { contact, links, property } from '../config/site';
import { strings } from '../i18n/content';
import { absUrl } from '../lib/urls';

export const GET: APIRoute = () => {
  const en = strings.en;
  const body = `# ${property.nameEn}

> ${property.entityEn}

${en.summary.text.replace(/[⁦-⁩]/g, '')}

## Facts
- Location: ${property.locationEn} (Red Sea coast)
- Maximum occupancy: ${property.maxAdults} adults + ${property.maxChildren} children
- Bedrooms: ${property.bedrooms}
- Beds: ${property.beds}
- Bathrooms: ${property.bathrooms}
- In the chalet: ${en.amenities.inside.map((a) => a.label + (a.detail ? ` (${a.detail})` : '')).join('; ')}
- In the resort (shared, not private): ${en.amenities.resort.map((a) => a.label).join('; ')}
- Prices, availability and check-in times: not published; ask the host on WhatsApp.

## Contact and booking
- WhatsApp: ${contact.whatsappDisplay} — https://wa.me/${contact.whatsappWaMe}
- Instagram: ${links.instagramCanonical} (${links.instagramHandle})
- Facebook: ${links.facebookCanonical}
- Airbnb listing: ${links.airbnbCanonical}
- Google Maps: ${links.googleMaps}

## Pages
- [English homepage](${absUrl('en/')}): overview, amenities, location, FAQ
- [English photo gallery](${absUrl('en/gallery/')})
- [الصفحة الرئيسية بالعربية](${absUrl('ar/')})
- [معرض الصور بالعربية](${absUrl('ar/gallery/')})

This is an independently operated holiday rental website, not the official Mountain View website.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
