/**
 * JSON-LD builders. Only verified values from src/config/site.ts are used.
 * Deliberately omitted (unknown): price, currency, rating, reviews, availability,
 * check-in/out times, legal business identity.
 */
import { contact, links, property } from '../config/site';
import { strings, languages, type Lang, type FaqItem } from '../i18n/content';
import { absUrl } from './urls';

export const ENTITY_ID = () => absUrl('#chalet');
export const SITE_ID = () => absUrl('#website');

export function vacationRental(lang: Lang, imageUrls: string[]) {
  const s = strings[lang];
  const amenities = [...s.amenities.inside, ...s.amenities.resort];
  return {
    '@type': 'VacationRental',
    '@id': ENTITY_ID(),
    identifier: 'mountain-view-2-chalet',
    name: s.propertyName,
    alternateName: [...new Set(languages.map((l) => strings[l].propertyName))].filter((n) => n !== s.propertyName),
    description: s.entity,
    url: absUrl(`${lang}/`),
    image: imageUrls,
    telephone: contact.whatsappE164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address.streetAddress,
      addressLocality: property.address.addressLocality,
      addressRegion: property.address.addressRegion,
      addressCountry: property.address.addressCountry,
    },
    ...(property.geo
      ? {
          geo: { '@type': 'GeoCoordinates', latitude: property.geo.latitude, longitude: property.geo.longitude },
          latitude: property.geo.latitude,
          longitude: property.geo.longitude,
        }
      : {}),
    hasMap: links.googleMaps,
    sameAs: [links.instagramCanonical, links.facebookCanonical, links.airbnbCanonical],
    containsPlace: {
      '@type': 'Accommodation',
      additionalType: 'EntirePlace',
      numberOfBedrooms: property.bedrooms,
      numberOfBathroomsTotal: property.bathrooms,
      bed: { '@type': 'BedDetails', numberOfBeds: property.beds },
      occupancy: {
        '@type': 'QuantitativeValue',
        maxValue: property.maxAdults + property.maxChildren,
        description: `${property.maxAdults} adults + ${property.maxChildren} children`,
      },
      amenityFeature: amenities.map((a) => ({
        '@type': 'LocationFeatureSpecification',
        name: a.schemaName,
        value: true,
      })),
    },
    knowsLanguage: ['ar', 'en'],
  };
}

export function website(_lang?: Lang) {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID(),
    url: absUrl(''),
    name: property.nameEn,
    alternateName: [...new Set(languages.map((l) => strings[l].propertyName))].filter((n) => n !== property.nameEn),
    inLanguage: languages,
    about: { '@id': ENTITY_ID() },
  };
}

export function webPage(opts: { lang: Lang; path: string; title: string; description: string; type?: string; imageUrl: string }) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': absUrl(opts.path) + '#webpage',
    url: absUrl(opts.path),
    name: opts.title,
    description: opts.description,
    inLanguage: opts.lang,
    isPartOf: { '@id': SITE_ID() },
    about: { '@id': ENTITY_ID() },
    primaryImageOfPage: opts.imageUrl,
  };
}

export function faqPage(lang: Lang, path: string, items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    '@id': absUrl(path) + '#faq',
    inLanguage: lang,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/[⁦-⁩]/g, '') },
    })),
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

export const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes });
