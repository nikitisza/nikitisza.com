// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

// The old site's URLs have no trailing slash and no .html (e.g. /about, /writing/<slug>), and inbound links
// must keep working. `file` builds about.html, which GitHub Pages serves at /about.
export default defineConfig({
  site: 'https://www.nikitisza.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  // The old site redirected /projects. GitHub Pages cannot send a 301, so Astro builds a meta-refresh page.
  redirects: { '/projects': '/resources' },
  // The old site showed the text as typed (straight quotes, "..."); smart punctuation would change it.
  markdown: { processor: satteri({ features: { smartPunctuation: false } }) },
});
