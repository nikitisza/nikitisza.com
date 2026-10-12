import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Fields of each content file (see .claude/content-guide.md). Items not listed anywhere on the live site have
// `listed: false` and no date/order; they still get a page, because their URLs are public.
const listing = {
  date: z.coerce.date().optional(),
  order: z.number().optional(),
  listed: z.boolean().default(true),
};

const writing = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/writing' }),
  schema: z.object({ title: z.string(), summary: z.string().optional(), ...listing }),
});

const newsletter = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/newsletter-archive' }),
  schema: z.object({ title: z.string(), ...listing }),
});

export const collections = { writing, 'newsletter-archive': newsletter };
