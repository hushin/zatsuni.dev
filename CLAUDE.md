# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Astro v5 using the blog starter template. The project uses modern web technologies including TypeScript, MDX, and follows accessibility and SEO best practices.

### Target Tech Stack

- **Framework**: Astro v5 with Content Loader API
- **Styling**: TailwindCSS v4 + DaisyUI v5
- **Icons**: Boxicons, Tablers (manual copy)
- **Deployment**: Cloudflare Pages
- **Package Manager**: pnpm

## Development Commands

| Command          | Description                                |
| ---------------- | ------------------------------------------ |
| `pnpm dev`       | Start development server at localhost:4321 |
| `pnpm build`     | Build for production                       |
| `pnpm preview`   | Preview production build locally           |
| `pnpm new-post <slug>` | Create new blog post with specified slug |
| `pnpm format`    | Format code with Prettier                  |
| `pnpm astro ...` | Run Astro CLI commands                     |

## Architecture

### Current Structure

```
src/
├── assets/          # Static assets (images)
├── components/      # Astro components
├── data/
│   └── blog/
│       └── yyyy/
│           └── mm/   # Year/Month-based organization
│               └── post-slug.md
├── layouts/        # Page layouts
├── pages/          # File-based routing
└── styles/         # CSS files
```

### Content Configuration

The project uses Astro's Content Loader API with glob loader. Current configuration in `src/content.config.ts`:

- Loader: `glob({ base: './src/data/blog', pattern: '**/[^_]*.{md,mdx}' })`
- Schema includes: pubDatetime, modDatetime, title, featured, draft, tags, description, ogImage

### Content Schema Format

The current frontmatter format already matches the desired structure:

```yaml
---
pubDatetime: 2024-09-13T23:00:00.000+09:00
modDatetime:
title: 新しくサイトを構築した
featured: false
draft: false
tags:
  - tech
description: Astro + Cloudflare Pages でサイトを構築
---
```

## Site Structure Goals

- `/` - Homepage with self-introduction and latest 3 posts
- `/posts/` - Posts index
  - `/yyyy/mm/(slug)/` - Individual post pages
- `/tags/` - Tag listing
  - `/(tag-name)/` - Posts by tag
- `/about/` - About page

## Key Features

- SEO-friendly with sitemap and RSS feed
- Accessible and responsive design

## Configuration Files

- `astro.config.mjs` - Main Astro configuration
- `src/content.config.ts` - Content collections schema

## Notes

- Built on Astro blog template with customizations
- Content schema and TailwindCSS implementation completed
- Uses pnpm for package management

## Styling Guidelines

### TailwindCSS v4 + DaisyUI v5

- **Always include TailwindCSS reference**: Add `@reference "tailwindcss";` at the top of `<style>` blocks when using `@apply` directive
- This is required for TailwindCSS v4 to recognize utility classes like `left-16`, `z-50`, etc.
- **DaisyUI Components**: Use DaisyUI v5 semantic classes for consistent UI components (btn, card, navbar, badge, etc.)
- **Styling Strategy**: DaisyUI for components + TailwindCSS utilities for layout and spacing
- **Style Guide Reference**: See `docs/style-guide.md` for DaisyUI v5 component usage and patterns
- **DaisyUI Cheat Sheet**: Complete class reference available in `docs/daisy-ui-v5.md`
