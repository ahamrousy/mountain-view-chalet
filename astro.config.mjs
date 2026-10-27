// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set automatically by the GitHub Pages workflow
// (.github/workflows/deploy.yml). Locally they fall back to the dev server.
//   Project site:   SITE_URL=https://<user>.github.io  BASE_PATH=/<repo>
//   Custom domain:  SITE_URL=https://www.example.com   BASE_PATH=/
const site = (process.env.SITE_URL || 'http://localhost:4321').replace(/\/$/, '');
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    assets: '_assets',
    // Inline the (small) stylesheet into each page so it does not block rendering.
    inlineStylesheets: 'always',
  },
  vite: {
    // Keep fonts as separate cacheable files instead of base64 inside the CSS.
    build: { assetsInlineLimit: 0 },
  },
  image: {
    // Responsive images are generated at build time with sharp.
    responsiveStyles: false,
  },
  devToolbar: { enabled: false },
});
