# nikitisza.com

The source of [www.nikitisza.com](https://www.nikitisza.com): a static site built with [Astro](https://astro.build)
and published to GitHub Pages. Writing, newsletter issues and pages are plain Markdown and HTML files in this repo.
There is no CMS and no database.

## Quick start

You need Node 22.12 or newer and [pnpm](https://pnpm.io). If `node -v` prints v22.12 or newer and `pnpm -v` prints
a version, skip to the commands below. Otherwise, on a Mac, set them up once in Terminal:

1. **Homebrew**, only if `brew -v` fails. Install it from [brew.sh](https://brew.sh), then run the two
   "Next steps" lines it prints (they add `brew` to `~/.zprofile`). Open a new Terminal window.
2. **mise**, only if `mise -v` fails:

   ```bash
   brew install mise
   echo 'eval "$(mise activate zsh)"' >> ~/.zshrc
   ```

   Open a new Terminal window so the shell picks it up.
3. **Node and pnpm**, through mise. [mise.toml](mise.toml) installs the latest Node and pnpm, the same as the
   deploy build. In this folder:

   ```bash
   mise trust
   mise install
   ```

   Check with `node -v` and `pnpm -v`.

Then, in this folder:

```bash
pnpm install
pnpm dev
```

Open http://localhost:4321. The page reloads when you save a file.

| Command | What it does |
| --- | --- |
| `pnpm dev` | Dev server with live reload on port 4321 |
| `pnpm build` | Builds the static site into `dist/` |
| `pnpm preview` | Serves the built `dist/` (what GitHub Pages will serve) |
| `pnpm check-urls [base]` | Checks that every URL of the old site still returns 200 (run `pnpm preview` first) |

## Where things are

| Path | Content |
| --- | --- |
| `src/content/writing/` | Blog posts, one Markdown file each. The file name is the URL: `/writing/<file-name>` |
| `src/content/newsletter-archive/` | Newsletter issues, same rule: `/newsletter-archive/<file-name>` |
| `src/fragments/` | The hand-built pages (home, about, services, resources, sketchnotes): one `.html` and one `.json` each |
| `public/images/` | Images, served as `/images/...` |
| `public/assets/` | The site CSS, fonts and icons |
| `src/components/`, `src/layouts/`, `src/pages/`, `src/scripts/` | Navbar, footer, page layout, page routes, mobile menu |
| `scripts/urls.txt`, `scripts/check-urls.mjs` | Every URL of the old site, and the script that tests them (`pnpm check-urls`) |

How to add a post, edit a page or add an image: [.claude/content-guide.md](.claude/content-guide.md).

## Deploy

Every push to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml). It builds the site, checks
that all old URLs still answer 200, and publishes `dist/` to the `gh-pages` branch. GitHub Pages serves that branch.
Do not edit `gh-pages` by hand: it is replaced on every deploy.

Setup, custom domain and DNS: [.claude/deploy.md](.claude/deploy.md).

## URLs must not change

The site used to run on another hosting service, and other sites link to it. Every old URL has no trailing slash
and no `.html` (`/about`, `/writing/<slug>`). Do not rename or delete a content file without a redirect plan.

## Working with Claude Code

Open this folder in Claude Code. [CLAUDE.md](CLAUDE.md) tells it how the project works, so you can ask in plain
words, for example "add a blog post from this text" or "change the about page intro".
