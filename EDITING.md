# Editing The Portfolio

You do not need to understand the React components to update the portfolio. Start here:

For image and document filenames, use the detailed [ASSET_GUIDE.md](ASSET_GUIDE.md).

## 1. Edit your text

Open [`src/i18n/translations.ts`](src/i18n/translations.ts).

The file has two matching sections:

- `fr`: the default French version
- `en`: the English version

Update the same field in both sections when you want the language switcher to stay complete. The main areas are `hero`, `about`, `education`, `experience`, `projects`, and `skills`.

To add or remove an education entry, experience entry, project, or skill, edit the corresponding `items` array in both languages.

## 2. Edit links, files, and logos

Open [`src/data/portfolioContent.ts`](src/data/portfolioContent.ts).

This is where you change:

- email, phone, GitHub, LinkedIn, and CV links
- documents attached to experience entries
- certification details and certificate files
- project GitHub links, project resources, and project thumbnail images
- education and company logo filenames
- technology logo URLs

Files referenced by a path such as `rapport-djezzy.pdf` belong in `public/`. Logo files belong in the matching folder under `public/icons/`:

- `public/icons/education/`: school logos
- `public/icons/experience/`: company and project logos
- `public/icons/certifications/`: certification icons
- `public/icons/projects/`: project thumbnail images

For a project image, change its `visual` path in `projectMetaByName` and keep its stable ID connected in `projectMetaById`. For an organization image, change the matching entry in `educationLogoBySchoolKeyword` or `experienceLogoByCompany`.

## 3. Change your profile photo

Replace [`src/assests/profile.JPG`](src/assests/profile.JPG) with another image using the same filename. The current spelling of `assests` is part of the existing project path, so keep it as-is.

## 4. Change colors and the overall look

Open [`src/index.css`](src/index.css). The editable theme values are the CSS variables near the top, including `--background`, `--primary`, `--accent`, and `--border`.

Most layout styling lives in the section components under [`src/components/`](src/components/). Avoid editing those files for ordinary text or link changes.

The smaller shared settings in [`src/data/siteContent.ts`](src/data/siteContent.ts) control which words are highlighted in the About section, the footer description, and footer link labels. Navigation and mobile-menu wording lives in the `nav` object in `src/i18n/translations.ts`.

## 5. Preview your changes

Run:

```bash
npm run dev
```

Then open the local URL shown in the terminal. Before publishing, run `npm run build` to catch broken file paths or TypeScript errors.

## Quick reference

| I want to change... | Edit... |
| --- | --- |
| Name, biography, education, experience, projects, skills | `src/i18n/translations.ts` |
| Navigation, language switcher, mobile menu wording | `src/i18n/translations.ts` |
| Email, phone, social links, CV path | `src/data/portfolioContent.ts` |
| PDFs and project downloads | `src/data/portfolioContent.ts` and `public/` |
| Project images and logos | `src/data/portfolioContent.ts` and `public/icons/` |
| Profile picture | `src/assests/profile.JPG` |
| Colors, fonts, background | `src/index.css` |