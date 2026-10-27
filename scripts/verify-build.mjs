#!/usr/bin/env node
/**
 * Post-build checks for dist/ (run with `npm test` after `npm run build`,
 * using the same SITE_URL / BASE_PATH as the build).
 *  - every internal link, image and srcset entry exists
 *  - every page has title, description, canonical, hreflang, Open Graph, one <h1>, lang/dir
 *  - no noindex on public pages
 *  - JSON-LD is valid JSON with the expected types and facts
 *  - every WhatsApp link targets wa.me/201001240186 with the right-language message
 *  - external links opened in a new tab use rel="noopener"
 *  - sitemap.xml URLs all exist; robots.txt references the sitemap
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const SITE = (process.env.SITE_URL || 'http://localhost:4321').replace(/\/$/, '');
let BASE = process.env.BASE_PATH || '/';
if (!BASE.endsWith('/')) BASE += '/';

const WA_NUMBER = '201001240186';
const WA_MSG = {
  en: "Hello, I'm interested in renting Mountain View 2 Chalet in Ain Sokhna. Could you please share the available dates, rental price, and booking details?",
  ar: 'مرحبًا، أنا مهتم بحجز شاليه ماونتن فيو 2 في العين السخنة. هل يمكن معرفة المواعيد المتاحة والأسعار وتفاصيل الحجز؟',
};

const errors = [];
const fail = (file, msg) => errors.push(`${file}: ${msg}`);
let checkedRefs = 0, waLinks = 0;

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const files = walk(root);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const rel = (f) => f.slice(root.length + 1).replace(/\\/g, '/');

/** Map a URL path (with base) to a file in dist. */
function resolveLocal(pathname) {
  let p = decodeURIComponent(pathname.split('#')[0].split('?')[0]);
  if (!p.startsWith(BASE)) return null;
  p = p.slice(BASE.length);
  const candidates = [p, join(p, 'index.html')];
  return candidates.find((c) => existsSync(join(root, c)) && statSync(join(root, c)).isFile()) ?? false;
}
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i'));
  return m ? m[1].replace(/&amp;/g, '&') : null;
};

for (const file of htmlFiles) {
  const name = rel(file);
  const html = readFileSync(file, 'utf8');
  const is404 = name === '404.html';
  const pageUrl = new URL(BASE + name.replace(/index\.html$/, ''), SITE);

  // --- Head checks
  const htmlTag = html.match(/<html[^>]*>/i)?.[0] ?? '';
  const lang = attr(htmlTag, 'lang');
  const dir = attr(htmlTag, 'dir');
  if (!lang) fail(name, 'missing <html lang>');
  if ((lang === 'ar' && dir !== 'rtl') || (lang === 'en' && dir !== 'ltr')) fail(name, `wrong dir="${dir}" for lang="${lang}"`);
  if (!/<title>[^<]{10,}<\/title>/.test(html)) fail(name, 'missing/short <title>');
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc || desc.length < 50) fail(name, 'missing/short meta description');
  if (!html.includes('property="og:image"')) fail(name, 'missing og:image');
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) fail(name, 'must have exactly one <h1>');
  if (!is404) {
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (canonical !== pageUrl.href) fail(name, `canonical ${canonical} != ${pageUrl.href}`);
    for (const hl of ['en', 'ar', 'x-default']) if (!html.includes(`hreflang="${hl}" href="`)) fail(name, `missing hreflang ${hl}`);
    if (/noindex/i.test(html.match(/<meta name="robots"[^>]*>/)?.[0] ?? '')) fail(name, 'public page is noindex');
  } else if (!/noindex/.test(html)) fail(name, '404 should be noindex');

  // --- JSON-LD
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      const nodes = data['@graph'] ?? [data];
      const vr = nodes.find((n) => n['@type'] === 'VacationRental');
      if (vr) {
        const acc = vr.containsPlace;
        if (acc.numberOfBedrooms !== 2 || acc.numberOfBathroomsTotal !== 1 || acc.bed.numberOfBeds !== 5 || acc.occupancy.maxValue !== 6)
          fail(name, 'VacationRental facts mismatch');
        if (!Array.isArray(vr.image) || vr.image.length < 8) fail(name, 'VacationRental needs at least 8 images');
        if (vr.aggregateRating || vr.review || vr.priceRange) fail(name, 'unverified rating/price in schema');
      }
      const faq = nodes.find((n) => n['@type'] === 'FAQPage');
      if (faq) for (const q of faq.mainEntity) if (!html.includes(q.name.replace(/'/g, '&#39;')) && !html.includes(q.name)) fail(name, `FAQ schema question not visible: ${q.name}`);
    } catch (e) { fail(name, `invalid JSON-LD: ${e.message}`); }
  }

  // --- Links & assets
  const tags = html.match(/<(a|link|img|source|script|iframe)\b[^>]*>/gi) || [];
  for (const tag of tags) {
    const refs = [];
    for (const a of ['href', 'src']) { const v = attr(tag, a); if (v) refs.push(v); }
    const srcset = attr(tag, 'srcset');
    if (srcset) srcset.split(',').forEach((s) => refs.push(s.trim().split(/\s+/)[0]));
    for (const ref of refs) {
      if (/^(mailto:|tel:|data:|#|javascript:)/.test(ref)) continue;
      let u;
      try { u = new URL(ref, pageUrl); } catch { fail(name, `bad URL ${ref}`); continue; }
      if (u.origin === new URL(SITE).origin) {
        checkedRefs++;
        if (!resolveLocal(u.pathname)) fail(name, `broken internal reference ${ref}`);
      } else if (/^<a\b/i.test(tag)) {
        if (attr(tag, 'target') === '_blank' && !/noopener/.test(attr(tag, 'rel') || '')) fail(name, `target=_blank without noopener: ${ref}`);
        if (u.hostname === 'wa.me') {
          waLinks++;
          if (u.pathname !== `/${WA_NUMBER}`) fail(name, `WhatsApp link to wrong number: ${ref}`);
          const text = u.searchParams.get('text');
          if (text !== null) {
            const tagLang = attr(tag, 'lang') || lang;
            const expected = WA_MSG[tagLang === 'ar' ? 'ar' : 'en'];
            if (text !== expected) fail(name, `WhatsApp message mismatch (${tagLang}): ${text.slice(0, 40)}…`);
          }
        }
      }
    }
  }
  if (!html.includes(`wa.me/${WA_NUMBER}`)) fail(name, 'no WhatsApp CTA');
}

// --- Sitemap & robots
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length < 5) errors.push(`sitemap.xml: expected >=5 URLs, found ${locs.length}`);
for (const loc of locs) if (!resolveLocal(new URL(loc).pathname)) errors.push(`sitemap.xml: URL does not exist: ${loc}`);
const imgLocs = [...sitemap.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((m) => m[1].replace(/&amp;/g, '&'));
for (const loc of imgLocs) if (!resolveLocal(new URL(loc).pathname)) errors.push(`sitemap.xml: image does not exist: ${loc}`);
const robots = readFileSync(join(root, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${SITE}${BASE}sitemap.xml`)) errors.push('robots.txt: sitemap line missing or wrong');
if (/Disallow:\s*\/\s*$/m.test(robots)) errors.push('robots.txt: site is blocked');

console.log(`Checked ${htmlFiles.length} HTML pages, ${checkedRefs} internal references, ${waLinks} WhatsApp links, ${locs.length} sitemap URLs, ${imgLocs.length} sitemap images.`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n - ` + errors.join('\n - '));
  process.exit(1);
}
console.log('All checks passed.');
