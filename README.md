# Shivaprasad Mavila | AI Engineer Portfolio

## Overview

A single-page portfolio for an AI Engineer working in machine learning, computer vision and security-focused ML. The hero leads with the results from Shivaprasad's résumé (accuracy, false-positive, latency and training-time figures), followed by three project case studies, experience, skills, education and contact details.

All content comes from the résumé and LinkedIn profile. No figures were added beyond those documents.

## Tech stack

- Next.js 14 (App Router) and React 18
- Tailwind CSS 3
- TypeScript
- Google Fonts (Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono), loaded in the browser. If offline, the site falls back to system fonts.

No API keys or environment variables are needed.

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To check a production build:

```bash
npm run build
npm start
```

## Customize the content

Everything on the page is driven by `src/data/portfolio.ts`:

| What to change | Where |
| --- | --- |
| Name, title, one-line positioning, contact links | `profile` |
| Résumé download button | Place a PDF at `public/resume.pdf`, then set `profile.resumeUrl` to `"/resume.pdf"` |
| About paragraphs | `about` |
| Figures in the hero panel | `metrics` (`bar` is a 0 to 100 percentage; omit it for non-percentage values) |
| Project case studies | `projects` |
| Jobs | `experience` |
| Skill groups | `skills` |
| Degrees and certificates | `education`, `certificates` |

To change colors, edit the CSS variables at the top of `src/app/globals.css` (`:root` for light, `.dark` for dark). To reorder sections, edit `src/app/page.tsx`.

## Project structure

```
shivaprasad-mavila-portfolio/
├── package.json
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── README.md
├── public/
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   └── icon.svg
    ├── components/
    │   ├── Header.tsx
    │   ├── ThemeToggle.tsx
    │   ├── Hero.tsx
    │   ├── Section.tsx
    │   ├── Projects.tsx
    │   ├── Experience.tsx
    │   ├── About.tsx
    │   ├── Skills.tsx
    │   ├── Education.tsx
    │   ├── Contact.tsx
    │   └── Footer.tsx
    └── data/
        └── portfolio.ts
```

## Deploy

Push the repository to GitHub and import it into Vercel. No settings are needed.
