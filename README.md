# Braden's Journal

A personal blog built with Nuxt 2 and Tailwind CSS, deployed as a static site on GitHub Pages.

**Live site:** https://bradenteo.github.io/blog-project/

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Nuxt 2](https://nuxtjs.org) | Vue.js framework — handles routing, SSG, and component auto-imports |
| [Vue 2](https://v2.vuejs.org) | UI framework |
| [Tailwind CSS v3](https://tailwindcss.com) | Utility-first styling, including dark mode |
| [Firebase Realtime Database](https://firebase.google.com) | Stores feedback form submissions |
| [GitHub Pages](https://pages.github.com) | Hosts the static site from the `gh-pages` branch |

## Prerequisites

- Node.js v24+
- npm v11+

## Getting Started

```bash
# Install dependencies
npm install

# Start local dev server at http://localhost:3000
npm run dev
```

## Available Scripts

```bash
npm run dev       # Local dev server with hot reload
npm run generate  # Build static site into dist/
npm run deploy    # Push dist/ to the gh-pages branch (deploys to GitHub Pages)
npm run lint      # Run ESLint across all .js and .vue files
```

## Deploying

Deployment is a two-step process run locally:

```bash
npm run generate && npm run deploy
```

`generate` builds the static site into `dist/`. `deploy` uses `push-dir` to push the `dist/` folder to the `gh-pages` branch on GitHub, which GitHub Pages then serves automatically.

> **Note:** CI runs on every push to `main` (lint + generate) as a validation check, but does not deploy. Deployment must be triggered manually with the command above.

## Environment Variables

The Firebase URL for the feedback form is read from an environment variable:

```bash
FIREBASE_URL=https://your-project.firebaseio.com/feedback.json
```

If not set, it falls back to the default URL defined in `nuxt.config.js` under `publicRuntimeConfig`.

## Project Structure

```
pages/
  index.vue              # Home page
  buildprocess.vue       # Build process page
  posts.vue              # Posts listing page
  posts/
    cancer.vue           # My Cancer Journey post
    lifehacks.vue        # Life Hacks post

components/
  ClickableTab.vue        # Expandable/collapsible content tab
  PostsButton.vue         # Card link used on the Posts page
  PostsNavBar.vue         # Sidebar nav shown on post pages
  BaseDialog.vue          # Modal dialog wrapper
  FeedbackForm.vue        # Feedback form inside the modal
  ScrollToTop.vue         # Floating scroll-to-top button

layouts/
  default.vue             # Main layout (header, nav, footer, dark mode toggle)

assets/
  css/main.css            # Global styles (scrollbar fix, link hover, dark mode)
```
