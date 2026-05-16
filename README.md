# erenkcer.dev Portfolio

A modern personal portfolio website built with React, Vite, and Tailwind CSS.

The website showcases my projects, technical background, CV, and web development work. It is designed as a clean public profile for my developer portfolio and is live at:

https://www.erenkcer.dev

## Features

- Responsive portfolio layout
- Project showcase section
- CV view/download support
- Modern animated interface
- Fast static deployment

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

The static production output is generated in `dist/`.

## CV PDF

The CV asset lives at:

```text
public/Muhammed_Eren_Kocer_CV.pdf
```

Replace that file with the final CV PDF while keeping the same filename so the View CV and Download CV buttons keep working.

## Cloudflare Pages

Use these settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 20 or newer

The project is frontend-only and can also be deployed on GitHub Pages or Vercel.
