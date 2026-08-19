# Jokadera

An interactive family tree, built with React, TypeScript, and Vite.

Family members live as data in [`src/data/family.ts`](src/data/family.ts) — edit that file
to add people, change photos, or restructure the tree. Photos live in [`public/img`](public/img).

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Outputs a static site to `dist/`.

## Deploy

Pushes to `main` build and deploy automatically to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Enable Pages for this repo under
**Settings → Pages → Source → GitHub Actions** to activate it.
