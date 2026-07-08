# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio for Viraj Raiyani. Next.js 16 (App Router) + React 19 + Tailwind CSS 4. Performance-first and "brutalist in surface" — deliberately **no** `backdrop-filter`, `mix-blend-mode`, `background-attachment: fixed`, or continuously-rendering 3D. The render budget is intentionally type, 1px hairlines, and a single accent color. Keep new work within that constraint; those effects were removed after profiling and should not be reintroduced.

## Commands

```bash
npm run dev     # dev server on 0.0.0.0:3001
npm run build   # production build
npm run start   # serve production build on 0.0.0.0:3001
npm run lint    # next lint (ESLint 9, eslint-config-next)
```

Port is **3001** (not the Next default 3000). There is no test suite.

## Architecture

- **All page content lives in [lib/data.js](lib/data.js)** — `profile`, `skills`, `marqueeTech`, `projects`, `experience`, `testimonials`, `achievements`. Sections read from these exports; edit content here, not in JSX. Project screenshots go in `public/projects/` with each project's `image` field pointing at them.
- **[app/page.jsx](app/page.jsx)** composes the whole site by stacking section components in order. This is the source of truth for which sections render — e.g. `Testimonials` is currently commented out and replaced by `GithubActivity`. A component existing in `components/sections/` does not mean it's on the page.
- **[app/layout.jsx](app/layout.jsx)** owns the three Google fonts (Inter / Space Grotesk / JetBrains Mono, exposed as CSS variables), all SEO metadata, and two JSON-LD blocks (`Person`, `WebSite`). Site URL comes from `NEXT_PUBLIC_SITE_URL` (defaults to `https://aimviraj.xyz`).
- **Design tokens live in a single `@theme { … }` block in [app/globals.css](app/globals.css)** — Tailwind 4 is CSS-first, so there is **no `tailwind.config.js`**. Tokens auto-generate utilities: `--color-accent` → `bg-accent`/`text-accent`, `--font-display` → `font-display`, etc. The current accent is purple `#b6a3ff` on a near-black `#0f1014` background (note: the README's color table is stale — trust globals.css). Reusable utility/component classes (`.container-x`, `.section`, `.hairline`) are defined in the same file's `@layer` blocks.

### Motion stack

Animation is layered and the pieces coordinate — understand this before touching scroll or motion:

- **[components/SmoothScroll.jsx](components/SmoothScroll.jsx)** wraps the page and drives Lenis smooth scroll, syncs it into GSAP's `ticker`, and registers `ScrollTrigger`. It also intercepts in-page `a[href^="#"]` clicks to glide via `lenis.scrollTo` with a `-64px` offset for the fixed navbar. GSAP `ScrollTrigger` animations in sections depend on this sync — Lenis and GSAP share one RAF loop here.
- **[components/Cursor.jsx](components/Cursor.jsx)** is a custom cursor using event delegation (so dynamically-added elements get hover behavior) and lerp-based ring follow. It auto-disables on touch via `matchMedia("(hover: none)")`.
- **[components/Loader.jsx](components/Loader.jsx)** is a terminal-style boot screen rendered above everything.
- Any component using hooks/DOM APIs must be a Client Component (`"use client"`). Sections with scroll or motion are client components.

### Accessibility / motion conventions

Honor `prefers-reduced-motion` and touch (`@media (hover: none)`) when adding motion — existing components already gate on these. Keep semantic landmarks intact (`<header>`, `<main>` via `PageTransition`, `<section>`, `<footer>`).

## Conventions

- `@/*` path alias maps to the repo root ([jsconfig.json](jsconfig.json)) — import as `@/components/...`, `@/lib/data`.
- `next.config.mjs` whitelists LAN dev origins under `allowedDevOrigins` (needed so the dev server hydrates when accessed via LAN IP — otherwise the loader hangs) and remote image hosts under `images.remotePatterns`. Add hosts there before using new remote images or accessing dev from a new origin.
