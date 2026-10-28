# Mountain View 2 Chalet — website

Multilingual (English, Arabic, Russian, German, French, Ukrainian) website for **Mountain View 2 Chalet**, a vacation rental in Mountain View 2, Ain Sokhna, Zafraana, Egypt.
Its job is to turn visitors into direct WhatsApp inquiries (`https://wa.me/201001240186`).

Built with [Astro](https://astro.build) as a fully static site — no server, no database, no paid services. Hosts free on GitHub Pages.

---

## 1. What's in the site

| URL | Page |
| --- | --- |
| `/` | Welcome page (`x-default`) — links to all six languages, no automatic redirect for crawlers |
| `/en/` | English homepage: hero, facts, chalet details, amenities, photo highlights, location, FAQ, contact |
| `/en/gallery/` | All 27 photos, grouped by area, with lightbox |
| `/ar/` | Arabic homepage (full right-to-left layout) |
| `/ar/gallery/` | Arabic photo gallery |
| `/ru/`, `/de/`, `/fr/`, `/uk/` | Russian, German, French and Ukrainian homepages (same sections and FAQ) |
| `/ru/gallery/`, `/de/gallery/`, `/fr/gallery/`, `/uk/gallery/` | Photo galleries in those languages |
| `/404.html` | Custom bilingual "page not found" |
| `/sitemap.xml` | Sitemap with `hreflang` alternates and image entries |
| `/robots.txt` | Allows all crawlers, points to the sitemap |
| `/llms.txt` | Optional plain-text summary for AI tools, with facts and FAQ in all six languages (supplement only) |

Every language has its own URL, title, description, FAQ structured data and `hreflang` links to the other five. Russian, German, French and Ukrainian WhatsApp messages are pre-filled in that language **followed by the English version**, so the host can always read the request.

Every page has a WhatsApp booking button (header, mobile menu, hero, details, gallery, amenities, location, FAQ, contact, footer, and a sticky bar on phones). Messages are pre-filled in the visitor's language.

## 2. Project structure

```
website/
├── .github/workflows/deploy.yml   GitHub Pages build + deploy (runs on every push to main)
├── astro.config.mjs               Site URL / base path (set automatically in CI)
├── public/                        Favicons, .nojekyll
├── scripts/verify-build.mjs       Automated checks (npm test)
└── src/
    ├── config/
    │   ├── site.ts                ★ Property facts, WhatsApp number, social links, analytics IDs
    │   └── photos.ts              ★ Photo manifest: order, category, English + Arabic alt text
    ├── i18n/content.ts            ★ English + Arabic text, amenities and FAQ (plus the language list)
    ├── i18n/ru.ts, de.ts, fr.ts, uk.ts  ★ Russian, German, French, Ukrainian text
    ├── assets/photos/             Web copies of the chalet photos (originals untouched)
    ├── components/                Header, LanguageSwitcher, Hero, FactsBar, Details, Amenities,
    │                              Gallery (+ lightbox), Location, Faq, Contact, SocialLinks,
    │                              WhatsAppButton, StickyBookingBar, Footer, Analytics, Icon
    ├── layouts/BaseLayout.astro   <head>: titles, canonical, hreflang, Open Graph, JSON-LD
    ├── lib/                       URL helpers, WhatsApp link builder, schema.org builders, images
    ├── pages/                     Routes (see table above)
    └── styles/global.css          Design system (colours, type, layout, RTL)
```

★ = the files you will normally edit.

## 3. Run it on your computer

Requires **Node.js 22.23 or newer** (Node 24 recommended).

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:4321/ . Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the site into `dist/` (images are resized/converted here) |
| `npm run preview` | Serves the built `dist/` locally |
| `npm test` | Checks the build: broken links/images, titles, descriptions, canonical, hreflang, JSON-LD, WhatsApp links, sitemap, robots.txt |
| `npm run check` | TypeScript / Astro type check |

## 4. Publish on GitHub Pages (step by step)

No GitHub account access was available while building this, so **the site has not been published yet**. To publish it from your account:

1. **Create a repository** on github.com → *New repository*, e.g. `mountain-view-chalet`. Public repositories get free GitHub Pages. Do **not** add a README/licence there (this folder already has one).
2. **Push this folder** (the `website` folder is the repository root). It already contains a git repository with a first commit on `main`, so:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/mountain-view-chalet.git
   ```
   ```bash
   git push -u origin main
   ```
   (If you prefer, GitHub Desktop → *Add existing repository* → choose this folder → *Publish*.)
3. **Turn on Pages:** repository → *Settings* → *Pages* → *Build and deployment* → *Source*: **GitHub Actions**.
4. **Wait for the deploy:** *Actions* tab → "Build and deploy to GitHub Pages" (about 2 minutes). If it ran before step 3 and failed, click *Re-run all jobs*.
5. Your site is live at `https://YOUR-USERNAME.github.io/mountain-view-chalet/`.

The workflow detects the address automatically, so links, images, canonical URLs and the sitemap are correct both on the `/mountain-view-chalet/` sub-path and on a custom domain. Every later `git push` to `main` re-deploys.

## 5. Custom domain (optional, recommended for SEO)

1. Buy a domain (e.g. `mountainviewchalet-sokhna.com`).
2. GitHub → *Settings* → *Pages* → *Custom domain* → enter `www.your-domain.com` → *Save*.
3. At your domain registrar add DNS records:
   - `CNAME` record: `www` → `YOUR-USERNAME.github.io`
   - for the bare domain, four `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. When the DNS check passes, tick **Enforce HTTPS**.
5. Re-run the workflow (*Actions* → *Run workflow*) so canonical URLs and the sitemap use the new domain.

Why it helps: on a `github.io/repo/` address, search engines ignore the site's own `robots.txt` (they only read it at the domain root) and the domain is shared with other projects. A custom domain gives the chalet its own identity.

## 6. Google Search Console, Bing, sitemap

1. Go to https://search.google.com/search-console → *Add property* → *URL prefix* → your site URL.
2. Choose *HTML tag* verification, copy only the `content="…"` value.
3. In GitHub: *Settings* → *Secrets and variables* → *Actions* → *Variables* → *New repository variable*: `PUBLIC_GOOGLE_SITE_VERIFICATION` = that value. Re-run the workflow, then click *Verify* in Search Console.
4. In Search Console → *Sitemaps* → submit `sitemap.xml`.
5. Bing: https://www.bing.com/webmasters → you can import from Google Search Console, or use the meta tag method with the variable `PUBLIC_BING_SITE_VERIFICATION`.
6. After deploy, test a page in Google's Rich Results Test (https://search.google.com/test/rich-results) and https://validator.schema.org.

## 7. Analytics & privacy (optional — off by default)

The site loads **no tracking scripts** unless you configure one. Each WhatsApp button has a `data-wa="placement"` label, so if analytics is on you can see which button people use (event name `whatsapp_click`).

| Option | Variable | Privacy |
| --- | --- | --- |
| Plausible (recommended) | `PUBLIC_PLAUSIBLE_DOMAIN` = your domain | No cookies, no personal data; paid service (or self-hosted). Add a custom goal `whatsapp_click` in Plausible. |
| Google Analytics 4 | `PUBLIC_GA4_ID` = `G-XXXXXXXXXX` | Free, but sets cookies and sends data to Google. If you get visitors from the EU/UK you may need a cookie-consent banner. Mark `whatsapp_click` as a key event in GA4. |

Set these as repository **Variables** (not secrets — they are public in the page anyway), then re-run the workflow.

Other privacy notes: the Google Map loads only when a visitor clicks "Show interactive map"; the chosen language is remembered in the visitor's browser (`localStorage`, no cookies); fonts are self-hosted (no Google Fonts requests).

## 8. Everyday maintenance

**Change a fact, the phone number or a link** → `src/config/site.ts`. The WhatsApp link format is `https://wa.me/<country code + number without leading 0 or +>`.

**Change wording, amenities or FAQ** → `src/i18n/content.ts` (English, Arabic) and `src/i18n/ru.ts`, `de.ts`, `fr.ts`, `uk.ts`. Change a fact in **every** language file, in the same order. The type checker (`npm run check`) fails if a language is missing a field.

**Add or replace a photo**
1. Put the `.jpg` in `src/assets/photos/` (use a short descriptive name, e.g. `new-sofa.jpg`). Your original files elsewhere are never modified.
2. Add an entry in `src/config/photos.ts` with its `category`, an accurate description (`alt`) in all six languages, and `home: true` if it should appear on the homepage.
3. To change the main hero photo, change `heroPhoto` in the same file.
4. `npm run build` creates the WebP versions automatically.

**Before publishing changes** run `npm run build` then `npm test`.

## 9. Crawler policy (SEO / AI search)

`robots.txt` allows all crawlers, including search engines and AI crawlers (e.g. GPTBot, ClaudeBot, PerplexityBot, Google-Extended). This is deliberate: the goal is for the chalet to be found and described accurately. Allowing a crawler does not guarantee any AI product will show or recommend the chalet. To block a specific AI crawler, edit `src/pages/robots.txt.ts`, e.g.:

```
User-agent: GPTBot
Disallow: /
```

## 10. Content rules followed (please keep them)

- No invented prices, availability, reviews, ratings, distances, travel times or booking policies — these questions are directed to WhatsApp.
- Pools, beach, children's play area and parking are labelled as **shared resort facilities**, not private.
- No Wi-Fi, sea-view or private-pool claims (not confirmed).
- The site states it is independent and not the official Mountain View website, and uses its own simple sun-and-waves mark instead of the Mountain View logo.
- Coordinates in the structured data come from the host's own Google Maps pin (`maps.app.goo.gl/4kfKav15SabCHTqP8`). Set `geo: null` in `site.ts` to remove them.

## 11. Information still worth adding (when you have it)

- Check-in / check-out times and house rules (currently "ask on WhatsApp").
- Exact children's play-area details, and whether a baby cot/high chair is available.
- Whether Wi-Fi is available (not mentioned anywhere until confirmed).
- A custom domain.
- Guest reviews — only real ones, with permission (e.g. quoted from Airbnb with a link), never invented.
