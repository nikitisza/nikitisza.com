# nikitisza.com

Static Astro site for Niki Tisza (www.nikitisza.com), published to GitHub Pages from the `gh-pages` branch.
Content is Markdown and HTML files in the repo. Read [README.md](README.md) for the folder map.

## Session start

Before the first task, ask the user once: "Update your tools first (`brew upgrade && mise upgrade`)?" Run it only
if they say yes, then report `node -v` and `pnpm -v`. If `brew` or `mise` is missing, offer the setup steps in the
README Quick start instead.

## Rules

- **URLs never change.** The previous hosting service's URLs have no trailing slash and no `.html`. Do not rename,
  move or delete a file under `src/content/` or `src/fragments/` unless the user asks, and then say which URL
  changes. Run `pnpm check-urls` after a build to prove the old URLs still work.
- **Edit content directly in this repo.** There is no export or sync step any more.
- The design is Niki's. Do not restyle the site or change class names; the CSS in `public/assets/css/niki-design.css`
  depends on them. Never name the previous hosting service in docs, code or config.
  Niki's own writing in `src/content/` may mention it; leave it as she wrote it.
- One small change at a time; show the user what changed and how to see it.

## Commands

- `pnpm install` once after cloning.
- `pnpm dev` to preview while editing (http://localhost:4321).
- `pnpm build` then `pnpm preview` to test what will be published, then `pnpm check-urls` (expect all 200).

## Recipes

Details and examples are in [.claude/content-guide.md](.claude/content-guide.md). In short:

- **New blog post:** create `src/content/writing/<slug>.md` with `title`, `summary`, `date` and an `order` one lower
  than the lowest existing one. Images go in `public/images/writing/<slug>/`.
- **New newsletter issue:** same, in `src/content/newsletter-archive/`, with `title`, `date`, `order`.
- **Edit a page** (home, about, services, resources, sketchnotes): edit `src/fragments/<page>.html`.
- **Unpublish from lists but keep the URL:** `listed: false` in the front matter.

## Deploy

Push to `main`. GitHub Actions builds, checks the old URLs, and publishes to `gh-pages`. Never push to `gh-pages`
yourself. Commit and push only when the user asks. Steps and troubleshooting: [.claude/deploy.md](.claude/deploy.md).

## Known gaps

- There is no custom 404 page yet (GitHub Pages shows its own).
- The site is not on its own domain until `public/CNAME` is added and DNS is switched (see `.claude/deploy.md`).
  Until then the `github.io` address shows broken images and styles, because the site uses root-relative paths.
