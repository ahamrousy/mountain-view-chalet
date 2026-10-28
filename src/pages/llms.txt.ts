/**
 * Optional llms.txt — a plain-text summary for AI tools, with the facts and FAQ in every
 * language. It is a supplement only; all of this information is also in the crawlable HTML pages.
 */
import type { APIRoute } from 'astro';
import { contact, links, property } from '../config/site';
import { strings, languages, languageNames } from '../i18n/content';
import { absUrl, pagePath } from '../lib/urls';

const clean = (s: string) => s.replace(/[⁦-⁩]/g, '');

export const GET: APIRoute = () => {
  const en = strings.en;
  const perLanguage = languages
    .map((l) => {
      const s = strings[l];
      const faq = s.faq.items.map((f) => `### ${clean(f.q)}\n${clean(f.a)}`).join('\n\n');
      return `## ${languageNames[l]} (${l})

- [${s.meta.homeTitle}](${absUrl(pagePath(l, 'home'))})
- [${s.meta.galleryTitle}](${absUrl(pagePath(l, 'gallery'))})

${clean(s.summary.text)}

${faq}`;
    })
    .join('\n\n');

  const body = `# ${property.nameEn}

> ${property.entityEn}

${clean(en.summary.text)}

## Facts
- Location: ${property.locationEn} (Red Sea coast)
- Maximum occupancy: ${property.maxAdults} adults + ${property.maxChildren} children
- Bedrooms: ${property.bedrooms}
- Beds: ${property.beds}
- Bathrooms: ${property.bathrooms}
- In the chalet: ${en.amenities.inside.map((a) => a.label + (a.detail ? ` (${a.detail})` : '')).join('; ')}
- In the resort (shared, not private): ${en.amenities.resort.map((a) => a.label).join('; ')}
- Wi-Fi: not confirmed; ask the host. The balcony overlooks the pool and gardens. The pools are shared resort pools.
- Prices, availability and check-in times: not published; ask the host on WhatsApp.
- Website languages: ${languages.map((l) => `${languageNames[l]} (${absUrl(`${l}/`)})`).join(', ')}

## Contact and booking
- WhatsApp: ${contact.whatsappDisplay} — https://wa.me/${contact.whatsappWaMe}
- Instagram: ${links.instagramCanonical} (${links.instagramHandle})
- Facebook: ${links.facebookCanonical}
- Airbnb listing: ${links.airbnbCanonical}
- Google Maps: ${links.googleMaps}

This is an independently operated holiday rental website, not the official Mountain View website.

${perLanguage}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
