// Check that a build serves every URL of the old site with 200 and no redirect (inbound links must work).
// Usage: pnpm check-urls [base]   (default http://localhost:4321)
import { readFile } from 'node:fs/promises';

const LIVE = 'https://www.nikitisza.com';
const base = process.argv[2] ?? 'http://localhost:4321';

// urls.txt (next to this script) is the old site's sitemap; the feed and the sitemap itself are not in it.
const EXTRA_PATHS = ['/writing/rss.xml', '/sitemap.xml'];

const paths = [
  ...(await readFile(new URL('urls.txt', import.meta.url), 'utf8')).split('\n').filter(Boolean).map((url) => url.slice(LIVE.length) || '/'),
  ...EXTRA_PATHS,
];

const results = await Promise.all(
  paths.map(async (path) => ({ path, status: (await fetch(`${base}${path}`, { redirect: 'manual' })).status })),
);
const failures = results.filter(({ status }) => status !== 200);

for (const { path, status } of failures) console.log(`${status} ${path}`);
console.log(`${results.length - failures.length}/${results.length} URLs return 200 on ${base}`);
if (failures.length) process.exitCode = 1;
