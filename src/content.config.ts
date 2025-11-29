import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/data/blog",
  }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      pubDatetime: z.coerce.date(),
      modDatetime: z.coerce.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      description: z.string().optional(),
      ogImage: z.string().optional(),
    }),
});

export const collections = { blog };
