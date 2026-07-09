# portfolio

Personal portfolio — Lucas Pujol. One page, minimal, dark/light.

Built with React + Vite. No external UI dependencies; plain CSS, inline SVG icons.

## Development

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
```

## Build & deploy

```bash
npm run build    # outputs to dist/
npm run deploy   # publishes dist/ to gh-pages
```

Deployed at https://lucaspujol.github.io/portfolio.

## Structure

- `src/data/` — content (`profile.js`, `projects.js`). Edit these to update the site.
- `src/components/` — small, single-purpose components.
- `src/styles/global.css` — design tokens and layout.

Some Epitech projects are private (org policy). Their cards show no repo link
until a public mirror exists — add the link in `src/data/projects.js`.
