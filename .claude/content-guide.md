# Content guide

How to change what is on www.nikitisza.com. Everything is a file in this repo. After any change:

1. `pnpm dev`, open the page, check it.
2. `pnpm build && pnpm preview`, then `pnpm check-urls` in another terminal: expect `194/194 URLs return 200`.
   The check covers the old URLs only, so the number stays the same when you add new pages.
3. Commit and push to `main`. GitHub Actions publishes it (see [deploy.md](deploy.md)).

## Add a blog post

1. Pick the slug: lowercase words joined by hyphens, e.g. `my-new-post`. The URL becomes `/writing/my-new-post`.
   Choose it carefully, because changing it later breaks links.
2. Find the lowest `order` in use:

   ```bash
   grep -h '^order:' src/content/writing/*.md | sort -t: -k2 -n | head -1
   ```

   New posts use that number minus one (`order: 0`, then `-1`, `-2`...). The list page and the RSS feed sort by
   `order`, lowest first, so the newest post goes on top.
3. Create `src/content/writing/my-new-post.md`:

   ```markdown
   ---
   title: "My new post"
   summary: "One sentence shown under the title and in the list."
   date: "2026-10-12"
   order: 0
   ---

   Text in Markdown. A second paragraph is separated by a blank line.

   ## A heading

   - a list item
   ```

   `title` is required. `summary` is optional. `date` is `YYYY-MM-DD` and is used by the RSS feed, so always set it.
   Keep the title in quotes, because titles often contain colons.
4. The page appears at `/writing/my-new-post`, in the `/writing` list and in `/writing/rss.xml`.

### Images in a post

1. Put the files in `public/images/writing/my-new-post/`. Use short lowercase names without spaces.
2. Add them with this HTML (not Markdown `![]()`, which stretches the image and has no caption):

   ```html
   <figure class="w-richtext-align-normal"><div><img loading="lazy" alt="Describe the image" src="/images/writing/my-new-post/photo.jpg"></div><figcaption>Optional caption</figcaption></figure>
   ```

   Leave a blank line before and after the `<figure>`. The path always starts with `/images/`, never `../`.
3. Keep images under about 1 MB (resize first). The repo already holds 100+ MB of images.

### YouTube video in a post

Copy an existing post that has a video (search `iframe` in `src/content/writing/`) and replace the video address.

## Add a newsletter issue

Same as a post, in `src/content/newsletter-archive/<slug>.md`, with `title`, `date` and `order` (lowest existing
minus one):

```markdown
---
title: "2026 October"
date: "2026-10-31"
order: 0
---

Hello, fellow creative! ...
```

Find the lowest order with `grep -h '^order:' src/content/newsletter-archive/*.md | sort -t: -k2 -n | head -1`.
Images go in `public/images/newsletter-archive/<slug>/`. There is no summary field.

## Edit the home, about, services, resources, sketchnotes or writing page

Each page is one file in `src/pages/`: `index.astro` (home), `about.astro`, `services.astro`, `resources.astro`,
`sketchnotes.astro`, `writing.astro` (the list). Edit the text in the HTML part of the file; lists of cards
(products, services, values, videos, logos) are arrays at the top of the file.

- The banner, menu, newsletter band and footer are shared: `src/layouts/NewLayout.astro`.
- Styles: `public/assets/css/new-design.css`. Colours and fonts are the variables at the top.
- Links used on several pages (YouTube, newsletter, Gumroad shop): `src/lib/links.ts`.
- The page title and search description: the `title` and `description` passed to `<NewLayout>`. About, Services,
  Resources, Sketchnotes and Writing still read theirs from `src/fragments/<page>.json`.

The old `src/fragments/<page>.html` files are kept for reference but are no longer shown.

Page images live in `public/images/pages/` and are used as `/images/pages/<file>`.

## Change a post

Edit the `.md` file. Do not change its file name (the URL). To change the title shown in lists, change `title`.

## Hide a post from the lists but keep its URL

Add `listed: false` to the front matter and remove `order` and `date`. The page still opens at its URL; it is not in
`/writing` or the RSS feed.

## Delete a post

Deleting breaks the URL for everyone who linked to it. Prefer `listed: false`. If it must go, tell the user which
URL stops working, and remove its line from `scripts/urls.txt` too (otherwise `pnpm check-urls` fails).

## Navigation and footer

- Menu links, banner text, footer links: `src/layouts/NewLayout.astro` (the `LINKS` list and the footer).
- The old `src/components/Navbar.astro` and `Footer.astro` only appear on the `/newsletter-archive` pages.

## Things that look odd but are intended

- Straight quotes and `...` stay as typed: smart punctuation is turned off in `astro.config.mjs`.
- `/projects` redirects to `/resources` (a meta refresh page; GitHub Pages cannot send a 301).
- File names are the URLs, and they have no `.html` and no trailing slash. `astro.config.mjs` sets that up.
