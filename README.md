# Jokadera

An interactive family tree for the Jokadera family, built with React, TypeScript, and Vite.

**Live site:** https://nickhargreaves.github.io/jokadera/

Each person is a card with a photo, name, and birth order. Cards with children can be tapped to
expand or collapse that branch. On phones and narrow screens the tree switches to a vertical,
indented outline instead of the wide side-scrolling chart used on desktop.

## Editing the tree

Family members live as plain data in [`src/data/family.ts`](src/data/family.ts) — add a person,
change a name or title, or move someone to a different branch by editing that file directly.
Photos live in [`public/img`](public/img); reference a photo from `family.ts` by its filename,
e.g. `image: 'img/nick.jpeg'`. People without a photo use `img/default.png`.

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
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
