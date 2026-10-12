import { getCollection } from 'astro:content';

type Listed = 'writing' | 'newsletter-archive';

// The live listing order: only listed items, by their position on the live site.
export const listedInOrder = async (collection: Listed) =>
  (await getCollection(collection))
    .filter((entry) => entry.data.listed)
    .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));

// The writing pages and feed titles add the byline.
export const writingTitle = (title: string) => `${title} by Niki Tisza`;
