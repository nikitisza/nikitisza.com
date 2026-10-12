import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

// Same URLs as the old site's sitemap: every page and every collection item, listed or not.
const STATIC_PATHS = ['', '/about', '/resources', '/sketchnotes', '/writing', '/newsletter-archive', '/services'];
const COLLECTIONS = ['writing', 'newsletter-archive'] as const;

export const GET = async (context: APIContext) => {
  const site = context.site!.origin;
  const itemPaths = (
    await Promise.all(COLLECTIONS.map(async (name) => (await getCollection(name)).map((entry) => `/${name}/${entry.id}`)))
  ).flat();

  const urls = [...STATIC_PATHS, ...itemPaths].map((path) => `  <url><loc>${site}${path}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
