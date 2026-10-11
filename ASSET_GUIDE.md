# Portfolio Asset Guide

This is the quick reference for adding or replacing images and documents.

## Where files go

| Asset | Folder | Example |
| --- | --- | --- |
| Profile photo | `src/assests/` | `profile.jpg` |
| University logos | `public/icons/education/` | `sup-galilee.png` |
| Company logos | `public/icons/experience/` | `djezzy.png` |
| Certification icons | `public/icons/certifications/` | `google-g.png` |
| Project thumbnails | `public/icons/projects/` | `docker-logo.png` |
| CV and PDFs | `public/` | `cv.pdf`, `pfe-thesis.pdf` |
| Packet Tracer and other downloads | `public/` | `switchers-network.pkt` |

Use simple lowercase filenames with hyphens. Avoid spaces, accents, and duplicate filenames.

## Replacing the profile photo

Replace `src/assests/profile.jpg` with your new photo using the same filename. Keep the image reasonably small; ideally use JPG or WebP under 500 KB.

## Adding a university logo

1. Put the image in `public/icons/education/`.
2. Open `src/data/portfolioContent.ts`.
3. Add a school keyword and filename to `educationLogoBySchoolKeyword`:

```ts
"Your University": "icons/education/your-university.png",
```

The keyword must appear inside the university name in `src/i18n/translations.ts`.

## Adding a company logo

1. Put the image in `public/icons/experience/`.
2. Add the exact company name used by the experience item to `experienceLogoByCompany`:

```ts
"Your Company": "icons/experience/your-company.png",
```

Add the entry for both French and English company names if they are different.

## Adding a certification icon

1. Put the image in `public/icons/certifications/`.
2. Set the `icon` field in the matching object inside `certificationItems`:

```ts
icon: "icons/certifications/your-certification.png",
```

The certificate file itself goes in `public/`, and its filename goes in `certUrl`.

## Adding a project image, link, or PDF

Every project has a stable ID. Keep the ID unchanged when translating or renaming a project.

1. Add the project image to `public/icons/projects/`.
2. Add or update its `visual`, `github`, and `resources` fields in `projectMetaByName`.
3. Connect that metadata to the stable ID in `projectMetaById`.
4. Add the same ID to the matching project item in both `fr` and `en` inside `src/i18n/translations.ts`.

Example ID:

```ts
id: "my-new-project",
```

Example project image and links:

```ts
"my-new-project": {
  visual: "icons/projects/my-new-project.png",
  github: "https://github.com/your-account/my-new-project",
  resources: [
    { label: "Project report", url: "my-new-project-report.pdf" },
  ],
},
```

Put `my-new-project-report.pdf` in `public/`.

## Editing the visible project text

Open `src/i18n/translations.ts` and update the matching project in both languages:

- `name`
- `description`
- `tags`
- `id` (only when creating a new project)

Do not use the visible name to connect links or images. Use the stable ID.

## External technology icons

Skill and About icons currently use URLs in `src/data/portfolioContent.ts`. You can replace those URLs with local files in `public/icons/` if you want the site to work without a CDN.

## After changing assets

Run:

```bash
npm run dev
npm run build
```

If an image does not appear, check the filename, capitalization, and that the path starts with `icons/` for files inside `public/icons/`.
