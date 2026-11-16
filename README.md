# Trần Quốc Khánh — Portfolio

A bilingual portfolio for a Full-Stack Software Engineer, built with Next.js, React, and TypeScript. It highlights professional experience, technical skills, education, and contact details in a responsive layout.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Check the code with ESLint. |
| `npm run build` | Build the static site and prepare the hosting package. |

The static site is exported to `out/`. The build script also prepares a `dist/` package for the configured hosting workflow.

## Update portfolio content

- Edit the Vietnamese and English copy in `app/constants/portfolio-content.ts`.
- Update page title and social sharing metadata in `app/layout.tsx`.
- Replace the portrait at `public/tran-quoc-khanh-portrait.png`.
- Replace the downloadable résumé at `public/Tran-Quoc-Khanh-CV.pdf`.
- Replace the social preview image at `public/og.png` when its design changes.

## Project structure

```text
app/                 Page, metadata, global styles, and bilingual content
components/           Portfolio sections and component styles
public/                Portrait, résumé, and static assets
scripts/               Hosting package preparation
```

## Tech stack

- Next.js 16 with static export
- React 19 and TypeScript
- CSS Modules and global CSS
- English and Vietnamese content with a language switch
