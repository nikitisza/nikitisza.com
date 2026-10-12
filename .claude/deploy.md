# Deploy to GitHub Pages

The built site lives on the `gh-pages` branch. `main` holds the source. Pages serves `gh-pages`.

```
edit files -> push to main -> GitHub Actions: build + check old URLs -> gh-pages branch -> GitHub Pages
```

The workflow is [../.github/workflows/deploy.yml](../.github/workflows/deploy.yml). It:

1. installs dependencies (`pnpm install --frozen-lockfile`),
2. builds (`pnpm build`),
3. starts the built site and runs `pnpm check-urls`; if any old URL does not answer 200, the deploy stops,
4. replaces the contents of the `gh-pages` branch with `dist/` (one commit, the old one is dropped).

## One-time setup

1. Push this repo to https://github.com/nikitisza/nikitisza.com (the `main` branch). The workflow runs by itself.
2. Wait for the run to finish (repo > Actions). It creates the `gh-pages` branch.
3. Repo > Settings > Pages > Build and deployment: Source "Deploy from a branch", Branch `gh-pages`, folder `/ (root)`.
4. If the Actions run fails with a permission error: Settings > Actions > General > Workflow permissions > "Read and
   write permissions".

## Going live on www.nikitisza.com

The site uses root-relative paths (`/assets/...`, `/images/...`), so it only works at the root of a domain. The
`https://nikitisza.github.io/nikitisza.com/` address shows a page without styles or images. That is expected; use
`pnpm preview` to look at the built site until the domain is switched.

1. Create `public/CNAME` containing one line: `www.nikitisza.com`. Commit and push (it ends up in `gh-pages`;
   without it the next deploy removes the custom domain setting).
2. DNS (where the domain is managed; today it points to the old host):
   - `www`: CNAME to `nikitisza.github.io`
   - `nikitisza.com` (apex): the A records listed in GitHub's guide "Managing a custom domain for your GitHub Pages
     site" (check the current addresses there), so the bare domain redirects to `www`.
3. Settings > Pages > Custom domain: `www.nikitisza.com`, then tick "Enforce HTTPS" once it is available.
4. Check with `pnpm check-urls https://www.nikitisza.com`: expect all URLs 200.
5. Only after that, end the old hosting plan.

Lower the DNS TTL a day before the switch so you can go back quickly. To go back, point the DNS records to the old host
again.

## Test before pushing

```bash
pnpm build
pnpm preview
pnpm check-urls
```

## When a deploy fails

- Red run in the Actions tab: open it. "Check old URLs" failing means a content change broke an old URL (a renamed
  or deleted file). Restore the file name, or fix the page. Do not remove the check to get past it.
- Build fails on a content file: the error names the file. Usually bad front matter (a missing quote or `---`).
- Site did not change after a green run: Pages takes a minute or two; hard refresh. Confirm Settings > Pages shows
  Source `gh-pages`.

## Roll back

Fix forward with a new commit on `main` (revert the bad commit: `git revert <commit>` then push). The `gh-pages`
branch keeps no history, so do not try to restore it.
