# The Custom Music Company

Marketing site for The Custom Music Company — *composed by musicians, delivered without the wait.*

A static site, no build step. Vercel serves the files as-is.

## Pages

| Path        | File             | What it is                          |
|-------------|------------------|-------------------------------------|
| `/`         | `index.html`     | Landing page                        |
| `/identity` | `identity.html`  | Brand identity guide (minimal helix)|

`cleanUrls` is on (see `vercel.json`), so `identity.html` is served at `/identity`.

## Local preview

It's plain HTML — open `index.html` in a browser, or run a static server:

```bash
npx serve .
```

## Deploy to Vercel

1. In Vercel, **Add New → Project** and import this GitHub repo.
2. Framework Preset: **Other** (no build command, no output dir — it's static).
3. Deploy.

Pushes to the default branch trigger automatic production deploys.

## Brand

- **Indigo** `#1B1F3B` · **Paper** `#FBFAF7` · **Brass** `#B89B5E` (hairline accent only)
- Type: Spectral (display) · Inter (body) — loaded from Google Fonts

See `/identity` for the full system.
