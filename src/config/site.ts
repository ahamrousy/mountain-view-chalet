/**
 * SINGLE SOURCE OF TRUTH for property facts, contact details and links.
 * Edit this file to update the website. Do not add facts that are not confirmed.
 */

export const property = {
  nameEn: 'Mountain View 2 Chalet',
  nameAr: 'شاليه ماونتن فيو 2',
  // Entity definition — keep identical everywhere (content, metadata, structured data).
  entityEn: 'Mountain View 2 Chalet, a vacation rental in Mountain View 2, Ain Sokhna, Zafraana, Egypt.',
  entityAr: 'شاليه ماونتن فيو 2، وحدة إقامة سياحية في ماونتن فيو 2، العين السخنة، الزعفرانة، مصر.',
  locationEn: 'Mountain View 2, Ain Sokhna, Zafraana, Egypt',
  locationAr: 'ماونتن فيو 2، العين السخنة، الزعفرانة، مصر',
  maxAdults: 4,
  maxChildren: 2,
  bedrooms: 2,
  beds: 5,
  bathrooms: 1,
  address: {
    streetAddress: 'Mountain View 2',
    addressLocality: 'Ain Sokhna',
    addressRegion: 'Zafraana',
    addressCountry: 'EG',
  },
  // Taken from the host's own Google Maps place pin (maps.app.goo.gl/4kfKav15SabCHTqP8).
  // Set to null to remove coordinates from the site.
  geo: { latitude: 29.2323542, longitude: 32.6225038 } as { latitude: number; longitude: number } | null,
};

export const contact = {
  // Local format shown to Egyptian visitors, international format for links.
  whatsappLocal: '01001240186',
  whatsappDisplay: '+20 100 124 0186',
  whatsappE164: '+201001240186',
  whatsappWaMe: '201001240186', // wa.me path: country code, no "+", no leading 0
};

export const links = {
  instagram:
    'https://www.instagram.com/mountain_view_sokhna_rental?utm_source=qr&dlrf=MXgwZTVwcGpsYm9iaQ%3D%3D',
  instagramCanonical: 'https://www.instagram.com/mountain_view_sokhna_rental',
  instagramHandle: '@mountain_view_sokhna_rental',
  facebook: 'https://web.facebook.com/profile.php?id=61557379402307',
  facebookCanonical: 'https://www.facebook.com/profile.php?id=61557379402307',
  googleMaps: 'https://maps.app.goo.gl/4kfKav15SabCHTqP8',
  airbnb:
    'https://www.airbnb.com/rooms/1784181422420337419?guests=1&adults=1&s=67&unique_share_id=12029cf8-8bb1-4c7a-82cd-f49b0a488939',
  airbnbCanonical: 'https://www.airbnb.com/rooms/1784181422420337419',
};

/**
 * Optional integrations. Leave empty to disable — nothing is loaded by default.
 * Values can also be supplied at build time via environment variables
 * (GitHub repository "Variables": PUBLIC_GA4_ID, PUBLIC_PLAUSIBLE_DOMAIN,
 *  PUBLIC_GOOGLE_SITE_VERIFICATION, PUBLIC_BING_SITE_VERIFICATION).
 */
const env = import.meta.env;
export const integrations = {
  ga4Id: (env.PUBLIC_GA4_ID as string | undefined) || '', // e.g. G-XXXXXXXXXX
  plausibleDomain: (env.PUBLIC_PLAUSIBLE_DOMAIN as string | undefined) || '', // e.g. example.com
  googleSiteVerification: (env.PUBLIC_GOOGLE_SITE_VERIFICATION as string | undefined) || '',
  bingSiteVerification: (env.PUBLIC_BING_SITE_VERIFICATION as string | undefined) || '',
};
