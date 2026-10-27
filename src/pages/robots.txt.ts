/**
 * robots.txt — deliberately open. All search engines and AI crawlers may read the
 * public pages (the goal is to be found and accurately described). See README →
 * "Crawler policy" for how to block specific AI crawlers if you change your mind.
 *
 * Note: on a GitHub Pages *project* site (user.github.io/repo/), search engines only
 * read robots.txt at the domain root, so this file takes effect once you use a custom
 * domain or a user site (user.github.io). The sitemap can still be submitted directly
 * in Google Search Console / Bing Webmaster Tools.
 */
import type { APIRoute } from 'astro';
import { absUrl } from '../lib/urls';

export const GET: APIRoute = () =>
  new Response(
    `# Mountain View 2 Chalet — public website. All crawlers welcome.
User-agent: *
Allow: /

Sitemap: ${absUrl('sitemap.xml')}
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
