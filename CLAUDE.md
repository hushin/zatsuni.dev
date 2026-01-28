# CLAUDE.md

This file provides guidance to Claude Code when working with this codebase.

## What is This Project?

A personal blog platform focused on writing and sharing technical content. Built to be simple, fast, and maintainable with modern static site generation.

**Why these choices?**
- Astro v5: Static-first with excellent performance and DX
- Content Loader API: Type-safe content with flexible file organization
- TailwindCSS v4 + DaisyUI v5: Rapid UI development with consistent design system
- Cloudflare Pages: Zero-config deployment with edge performance

**Package Manager**: pnpm (check `package.json` for available scripts)

## Project Structure

```
src/
├── data/blog/           # Blog posts organized by date
│   └── yyyy/mm/         # Year/Month hierarchy for content organization
│       └── *.md         # Individual blog posts
├── pages/               # File-based routing
│   ├── index.astro      # Homepage (self-intro + latest 3 posts)
│   ├── posts/           # Blog post pages
│   ├── tags/            # Tag listing and filtered views
│   └── about.astro      # About page
├── components/          # Reusable Astro components
├── layouts/             # Page layouts
└── content.config.ts    # Content schema definition
```

**Why this structure?**
- Date-based content organization (`yyyy/mm/`) keeps posts manageable as the blog grows
- File-based routing in `pages/` mirrors the intended URL structure
- Content Loader API (`content.config.ts`) provides type-safe frontmatter validation

## Content Schema

Blog posts use the following frontmatter (defined in `src/content.config.ts`):

```yaml
pubDatetime: 2024-09-13T23:00:00.000+09:00  # Required: Publication date
modDatetime:                                  # Optional: Last modified date
title: "Post Title"                          # Required
featured: false                              # Optional: Highlight on homepage
draft: false                                 # Optional: Hide from production
tags: [tech, astro]                          # Optional: Categorization
description: "Brief summary"                 # Optional: For SEO/previews
sns_shared: false                            # Optional: Tracks if post was shared to SNS
```

**Content loader pattern**: `glob({ base: './src/data/blog', pattern: '**/[^_]*.{md,mdx}' })`
- Excludes files starting with `_` (useful for drafts/templates)
- Supports both `.md` and `.mdx` formats

## Styling Approach

- **Framework**: TailwindCSS v4 with DaisyUI v5 component library
- **TailwindCSS v4 requirement**: Include `@reference "tailwindcss";` in `<style>` blocks when using `@apply`
- **Component patterns**: See `docs/style-guide.md` for DaisyUI v5 usage examples
- **Complete reference**: `docs/daisy-ui-v5.md` contains full DaisyUI class reference

**Why this approach?**
- DaisyUI provides semantic components (btn, card, navbar) for consistency
- TailwindCSS utilities handle layout and spacing with minimal custom CSS
- v4 architecture requires explicit references for better IDE support

## Key Design Decisions

1. **Static Generation**: All pages pre-rendered at build time for optimal performance
2. **Type Safety**: TypeScript + Content Loader API ensures content validation
3. **SEO Focus**: Sitemap and RSS feed generation built-in
4. **Accessibility**: WCAG compliance through semantic HTML and DaisyUI components

## Development Workflow

- Use `pnpm new-post <slug>` to scaffold new blog posts with correct frontmatter
- Run `pnpm format` before committing to ensure consistent code style
- Check `package.json` for all available commands

## Important Notes

- Content files starting with `_` are ignored by the content loader
- The `description` field in blog frontmatter is optional but recommended for SEO
- Blog posts are automatically sorted by `pubDatetime` in descending order
