import * as fs from "node:fs";
import * as path from "node:path";
import { execSync } from "node:child_process";
import { parseFrontmatter, type BlogFrontmatter } from "./frontmatter.ts";

// Configuration
const SITE_URL = "https://zatsuni.dev";
const MAX_TAGS = 3;

export interface ParsedPost {
  filePath: string;
  frontmatter: BlogFrontmatter;
  slug: string;
}

/**
 * Get slug from file path
 */
export function getSlugFromPath(filePath: string): string {
  // src/data/blog/2026/01/article-slug.md -> 2026/01/article-slug
  const relativePath = filePath
    .replace(/\\/g, "/")
    .replace(/^.*src\/data\/blog\//, "")
    .replace(/\.(md|mdx)$/, "");
  return relativePath;
}

/**
 * Generate post URL from slug
 */
export function generatePostUrl(slug: string): string {
  return `${SITE_URL}/posts/${slug}/`;
}

/**
 * Get changed files from git
 */
export function getChangedFiles(specificFile?: string): string[] {
  if (specificFile) {
    // Manual execution with specific file
    if (fs.existsSync(specificFile)) {
      return [specificFile];
    }
    console.error(`File not found: ${specificFile}`);
    return [];
  }

  // Get files changed in the push (may include multiple commits)
  const beforeSha = process.env.GITHUB_BEFORE_SHA;
  const afterSha = process.env.GITHUB_AFTER_SHA;

  try {
    let diffCommand: string;

    if (beforeSha && afterSha && !beforeSha.startsWith("0000000")) {
      // GitHub Actions push event: compare all commits in the push
      diffCommand = `git diff --name-only --diff-filter=AM ${beforeSha} ${afterSha} -- "src/data/blog/**/*.md" "src/data/blog/**/*.mdx"`;
      console.log(
        `Comparing commits: ${beforeSha.slice(0, 7)}..${afterSha.slice(0, 7)}`
      );
    } else {
      // Fallback: compare with previous commit (local testing or initial push)
      diffCommand =
        'git diff --name-only --diff-filter=AM HEAD~1 HEAD -- "src/data/blog/**/*.md" "src/data/blog/**/*.mdx"';
      console.log("Using HEAD~1..HEAD comparison");
    }

    const output = execSync(diffCommand, { encoding: "utf-8" }).trim();

    if (!output) return [];
    return output.split("\n").filter(Boolean);
  } catch (error) {
    console.error("Failed to get git diff:", error);
    return [];
  }
}

/**
 * Get posts to share from changed files
 */
export function getPostsToShare(changedFiles: string[]): ParsedPost[] {
  const postsToShare: ParsedPost[] = [];

  for (const filePath of changedFiles) {
    const absolutePath = path.resolve(filePath);
    if (!fs.existsSync(absolutePath)) {
      console.log(`File not found: ${absolutePath}`);
      continue;
    }

    const content = fs.readFileSync(absolutePath, "utf-8");
    const parsed = parseFrontmatter(content);

    if (!parsed) {
      console.log(`Failed to parse frontmatter: ${filePath}`);
      continue;
    }

    const { frontmatter } = parsed;

    // Skip if draft
    if (frontmatter.draft) {
      console.log(`Skipping draft: ${filePath}`);
      continue;
    }

    // Skip if already shared
    if (frontmatter.sns_shared) {
      console.log(`Already shared: ${filePath}`);
      continue;
    }

    const slug = getSlugFromPath(filePath);
    postsToShare.push({
      filePath: absolutePath,
      frontmatter,
      slug,
    });
  }

  return postsToShare;
}

/**
 * Format post content for SNS
 */
export function formatPostContent(post: ParsedPost): string {
  const url = generatePostUrl(post.slug);
  const tags = (post.frontmatter.tags || [])
    .slice(0, MAX_TAGS)
    .map(tag => {
      // Replace hyphens with underscores for hashtag compatibility
      const normalizedTag = tag.replace(/-/g, "_");
      return `#${normalizedTag}`;
    })
    .join(" ");

  const parts = [`ブログ書いた / ${post.frontmatter.title}`, url];

  if (tags) {
    parts.push(tags);
  }

  return parts.join("\n");
}
