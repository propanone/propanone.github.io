# Walid Kessoum Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Editing The Portfolio

New to the codebase? Start with [EDITING.md](EDITING.md). It explains exactly where to change text, links, documents, images, and colors without needing to understand the React components.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repository deploys automatically with GitHub Actions.

1. Open repository Settings -> Pages.
2. Set Source to GitHub Actions.
3. Push to main.
4. The workflow at .github/workflows/deploy-pages.yml builds and deploys dist/.

## Content And Assets

The UI contains explicit placeholder paths for logos and visuals:

- Education logos: public/icons/education/
- Experience/company logos: public/icons/experience/
- Certification logos: public/icons/certifications/
- Project visuals: public/icons/projects/

Create those folders under `public/icons/` and update the corresponding paths in `src/data/portfolioContent.ts`.

## Documents and Project Links

Project cards include slots for:

- GitHub repository
- Project report PDF
- Technical documentation
- Stage report / internship report
- Master thesis PDF
- PFE thesis PDF
- Certification links

Update the URLs in `src/data/portfolioContent.ts`. The section components should generally not need editing for content changes.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
