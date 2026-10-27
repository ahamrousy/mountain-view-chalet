/**
 * XML sitemap with hreflang alternates and image entries.
 * Generated from the real routes, so it always matches the built site.
 */
import type { APIRoute } from 'astro';
import { photos } from '../config/photos';
import { languages } from '../i18n/content';
import { absUrl, pagePath, type PageKey } from '../lib/urls';
import { shareImage } from '../lib/images';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async () => {
  const pages: PageKey[] = ['home', 'gallery'];
  const allImages = await Promise.all(photos.map(async (p) => ({ ...p, url: (await shareImage(p)).url })));
  const lastmod = new Date().toISOString().slice(0, 10);

  const alternates = (page: PageKey) =>
    languages.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${absUrl(pagePath(l, page))}"/>`).join('\n') +
    `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${absUrl('')}"/>`;

  const entries: string[] = [];
  entries.push(`  <url>\n    <loc>${absUrl('')}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates('home')}\n  </url>`);
  for (const page of pages) {
    for (const lang of languages) {
      const imgs = (page === 'gallery' ? allImages : allImages.filter((p) => p.home))
        .map((p) => `    <image:image><image:loc>${esc(p.url)}</image:loc></image:image>`)
        .join('\n');
      entries.push(
        `  <url>\n    <loc>${absUrl(pagePath(lang, page))}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates(page)}\n${imgs}\n  </url>`,
      );
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
