# Walid Kessoum Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

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

## Content Placeholders

The UI contains explicit placeholder paths for logos and visuals:

- Education logos: public/icons/education/
- Experience/company logos: public/icons/experience/
- Certification logos: public/icons/certifications/
- Project visuals: public/icons/projects/

Create those folders under public/icons/ and add your files with the names shown directly in each card on the website.

## Documents and Project Links

Project cards include slots for:

- GitHub repository
- Project report PDF
- Technical documentation
- Stage report / internship report
- Master thesis PDF
- PFE thesis PDF
- Certification links

Update the placeholder URLs in src/components/ProjectsSection.tsx and src/components/ExperienceSection.tsx.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
