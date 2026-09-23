# Kush Morjaria — Portfolio

Personal portfolio site: projects, experience, and contact.

**Live:** https://kush-morjaria.github.io/kush-portfolio-nexus/

React · TypeScript · Vite · Tailwind CSS · shadcn/ui · GitHub Pages

## Updating content

All text on the site lives in [`src/data/profile.ts`](src/data/profile.ts): profile, projects, experience, education, and skills. Edit that file; the pages render from it.

- **Add a project:** add an entry to `projects`. To give it an illustration, add a component for its `slug` in [`src/components/ProjectVisual.tsx`](src/components/ProjectVisual.tsx).
- **Link a live demo:** set the project's `liveUrl`. A "Try it live" button appears on its page.
- **Resume:** put the PDF in `public/` and set `profile.resumeUrl` to its filename. The Resume button appears in the header.
- **Photo:** replace `src/assets/headshot.jpg`. The link-preview image is `public/og-image.jpg`.

## Develop

```sh
npm install
npm run dev      # http://localhost:8080/kush-portfolio-nexus/
```

## Deploy

```sh
npm run deploy   # builds, then pushes dist/ to the gh-pages branch
```

The first time only: in the GitHub repo, go to **Settings → Pages** and set the source to the `gh-pages` branch.

The build also copies `index.html` to `404.html`. GitHub Pages has no fallback for single-page apps, so without that file, refreshing or sharing a link like `/projects/ark` would show GitHub's 404 page.
