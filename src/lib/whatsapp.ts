import { contact } from '../config/site';
import { strings, type Lang } from '../i18n/content';

/** https://wa.me/201001240186?text=<url-encoded message in the visitor's language> */
export const whatsappUrl = (lang: Lang): string =>
  `https://wa.me/${contact.whatsappWaMe}?text=${encodeURIComponent(strings[lang].wa.message)}`;
