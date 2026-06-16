# The Custom Music Company

Marketing site for The Custom Music Company — *composed by musicians, delivered without the wait.*

Built with **Next.js (App Router)** and the TCMC design system: the double-helix mark, the indigo / paper / brass palette, Spectral + Inter type, hairline surfaces, and slow scroll-reveal motion.

## Pages

| Route               | Screen                                            |
|---------------------|---------------------------------------------------|
| `/`                 | Studio home — hero, services, process, work, CTA  |
| `/work`             | Work list with a sticky player bar                |
| `/work/ola-electric`| Project case study with an interactive waveform   |
| `/about`            | The studio story, the helix idea, people          |
| `/brief`            | "Start a project" brief form                      |
| `/identity.html`    | Static brand identity guide (in `public/`)        |

## Stack

- Next.js 16 · React 19
- No CSS framework — design tokens live in `app/globals.css` as CSS custom properties; components style with those variables (faithful to the design-system handoff)
- Fonts: Spectral + Inter via Google Fonts

## Project structure

```
app/                 routes (layout, home, work, about, brief, project)
components/ds/        design-system primitives (Logo, Button, Card, Eyebrow, Tag, Input, Divider)
components/           SiteHeader, SiteFooter, motion (Reveal, scroll progress, parallax)
public/              favicon + static identity guide
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Vercel → **Add New → Project** → import this repo.
2. Framework Preset is auto-detected as **Next.js** — no config needed.
3. Deploy. Pushes to `main` trigger production deploys.

## Brand notes

- **Indigo** `#1B1F3B` · **Paper** `#FBFAF7` · **Cream** `#F4F0E6` · **Brass** `#B89B5E` (hairline / axis accent only — never a fill)
- The player audio is mocked (no real playback) — wire to real tracks when assets exist.
- Contact / brief form is front-end only — it currently shows a confirmation state on submit. Connect it to email or a form backend before launch.
