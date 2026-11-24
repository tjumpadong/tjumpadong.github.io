# tjumpadong.github.io

Personal portfolio of Teerawit Jumpadong, a software engineer in Bangkok.
One page: bio, selected work, experience, skills and contact.

Live: https://tjumpadong.github.io/

## Stack

- Vue 3 + TypeScript, built with Vite
- Design system: [taste-skill](https://github.com/Leonxlnx/taste-skill) (system.css, layout, motion, icons)
- Static output, deployed to GitHub Pages

## Run

```bash
npm install
npm run dev      # http://127.0.0.1:5173
npm run build    # typecheck + static build to dist/
npm run preview
```

## Edit content

All copy and CV data live in `src/data/profile.ts`; the nav order is in `src/data/sections.ts`.

## Structure

- `src/components/` — nav, hero, summary, selected work, experience, skills, footer
- `src/style.css` — scrollspy underline, phone disclosure, print styles
- `public/assets/` — design-kit CSS/JS, tool icons, résumé PDF
- `public/404.html`, `robots.txt`, `sitemap.xml`

## Deploy

`.github/workflows/deploy.yml` builds and publishes `dist/` with GitHub Pages Actions.
Set **Settings → Pages → Source** to **GitHub Actions** before the first push.
