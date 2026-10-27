import type { Lang } from '../i18n/content';

const BASE = import.meta.env.BASE_URL; // e.g. "/" or "/repo-name/"

/** Base-path-aware internal URL. `path` without leading slash, e.g. "en/gallery/". */
export const url = (path = ''): string => {
  const b = BASE.endsWith('/') ? BASE : `${BASE}/`;
  return b + path.replace(/^\/+/, '');
};

/** Absolute URL (for canonical, hreflang, sitemap, Open Graph). */
export const absUrl = (path = ''): string => new URL(url(path), import.meta.env.SITE).href;

export type PageKey = 'home' | 'gallery';

export const pagePath = (lang: Lang, page: PageKey): string =>
  page === 'home' ? `${lang}/` : `${lang}/gallery/`;
