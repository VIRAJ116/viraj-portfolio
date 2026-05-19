# Viraj Raiyani — Portfolio v3

Personal portfolio. Performance-first, editorial in tone, brutalist in surface.
Built without backdrop-filters, blend modes, or fixed 3D loops.

**Live:** _coming soon_
**Author:** [Viraj Raiyani](https://linkedin.com/in/viraj-raiyani) · MERN Stack Developer · Ahmedabad, India

---

## Stack

| Layer             | Tool                                  |
| ----------------- | ------------------------------------- |
| Framework         | Next.js 16 (App Router)               |
| UI                | React 19 + Tailwind CSS 4             |
| Motion            | Framer Motion 12                      |
| Scroll animation  | GSAP + ScrollTrigger                  |
| Smooth scroll     | Lenis                                 |
| Fonts             | Space Grotesk · Inter · JetBrains Mono |

No glassmorphism. No `backdrop-filter`. No `mix-blend-mode`. No background-attachment-fixed.
Render budget is mostly type, hairlines, and a single accent color.

## Design system

- **Background** `#0a0a0a`
- **Foreground** `#f5f5f0`
- **Muted** `#8a8a85`
- **Accent** `#c7ff00`
- **Line / Line-strong** `#1f1f1c` / `#2a2a26`

All tokens live in a single `@theme { … }` block in [`app/globals.css`](app/globals.css) — Tailwind 4 is CSS-first, so there's no `tailwind.config.js`.

## Running locally

```bash
# clone
git clone https://github.com/VIRAJ116/viraj-portfolio.git
cd portfolio

# install
npm install

# dev (defaults to :3001 in package.json, change if you like)
npm run dev

# production build
npm run build
npm run start
```

## Project structure

```
portfolio/
├── app/
│   ├── layout.jsx          # fonts, metadata
│   ├── page.jsx            # composes all sections
│   └── globals.css         # tokens, utilities, cursor styles
├── components/
│   ├── Cursor.jsx          # custom cursor (event delegation)
│   ├── Loader.jsx          # terminal boot screen
│   ├── Navbar.jsx          # status-bar nav with live clock
│   ├── PageTransition.jsx
│   ├── RevealText.jsx      # char/word stagger reveal
│   ├── SectionHeader.jsx
│   ├── SmoothScroll.jsx    # Lenis + GSAP sync
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx        # cursor-follow image preview
│       ├── Experience.jsx      # scroll-driven timeline
│       ├── Testimonials.jsx
│       ├── Contact.jsx         # terminal-style form
│       └── Footer.jsx
├── lib/
│   └── data.js             # ALL content lives here
└── public/
```

## Editing content

Everything that appears on the page is driven by [`lib/data.js`](lib/data.js):

| Export          | What it controls                         |
| --------------- | ---------------------------------------- |
| `profile`       | Name, roles, location, email, socials    |
| `skills`        | Skill categories + per-skill level (0-100) |
| `marqueeTech`   | Tech name strip (About section)          |
| `projects`      | Work index — image, tech, links          |
| `experience`    | Timeline rows                            |
| `testimonials`  | Quote carousel                           |
| `achievements`  | Stat tiles next to testimonials          |

Drop project screenshots into `public/projects/` and point each project's `image` field at them.

## Performance notes

The build was redesigned from a glassmorphism-heavy first draft after profiling on mid-spec hardware. Things that got removed because they tank GPU:

- `backdrop-filter: blur()` on large surfaces
- `mix-blend-mode: difference` on the cursor
- `background-attachment: fixed` on the body
- A continuously-rendering R3F hero (was burning frames after it left the viewport)

What's left is intentionally cheap: 1px borders, plain backgrounds, a single accent color, type-driven layout.

## Sections

| #   | Section       | Notable detail                                 |
| --- | ------------- | ---------------------------------------------- |
| 00  | Hero          | 15-20vw display name, char stagger, role cycler |
| 01  | About         | Bio + 2×2 stats grid + tech marquee            |
| 02  | Skills        | Dot-leader list with lime fill bars            |
| 03  | Projects      | Row index with cursor-attached image preview   |
| 04  | Experience    | Scroll-driven left rail in lime                |
| 05  | Testimonials  | Crossfade quotes + achievements tiles          |
| 06  | Contact       | Terminal-style form (`~ / hello.txt`)          |
| —   | Footer        | Oversized closing statement + marquee ticker   |

## Accessibility

- Honors `prefers-reduced-motion` (animations and Lenis effectively disable)
- Cursor effects auto-disable on touch devices (`@media (hover: none)`)
- Color contrast checked against WCAG AA on text
- Semantic landmarks: `<header>`, `<main>` (via `PageTransition`), `<section>`, `<footer>`

## Roadmap

- [ ] Real testimonials (currently honest-placeholder)
- [ ] Live URLs for PieRush and side projects
- [ ] CMS-driven case-study pages (likely Sanity or MDX)
- [ ] Open Graph image generation per project
- [ ] Wire contact form to Resend / Formspree

## License

MIT. Use, fork, learn from it. If you ship something inspired by it, a credit is appreciated but not required.
