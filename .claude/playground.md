# Playground

A second copy of the site for trying things out (a new design, a new page) without touching www.nikitisza.com.

- Repository: https://github.com/nikitisza/nikitisza-playground (public, like the real one: no sensitive data).
- Address: https://playground.nikitisza.com. Search engines are told not to index it (`robots.txt`).
- It uses the same deploy workflow as the real site. A step in `.github/workflows/deploy.yml` that runs only in the
  playground repo sets its address and the `robots.txt`.

## How it is wired locally

This folder has two remotes:

- `origin`: the real site. Pushing `main` here publishes to nikitisza.com.
- `playground`: the playground. Pushing to its `main` publishes to playground.nikitisza.com.

The local branch `playground` tracks `playground/main`.

## Try something out

```bash
git switch playground
git merge main            # start from the current real site
# ...make changes, check them with pnpm dev...
git push playground playground:main
```

About a minute later it is on https://playground.nikitisza.com.

## Keep it

When Niki is happy with an experiment, bring it to the real site:

```bash
git switch main
git merge playground      # or cherry-pick only the commits to keep
pnpm build                # then pnpm preview and pnpm check-urls, as usual
git push origin main
```

## Throw it away

```bash
git switch playground
git reset --hard main
git push --force playground playground:main
```

This resets the playground to match the real site. Ask Niki before doing this, because it discards the experiments.
