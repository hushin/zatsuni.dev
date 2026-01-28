import * as fs from "node:fs";

export interface BlogFrontmatter {
  title: string;
  pubDatetime: string;
  draft?: boolean;
  tags?: string[];
  sns_shared?: boolean;
  description?: string;
}

export interface ParsedFrontmatter {
  frontmatter: BlogFrontmatter;
  body: string;
}

/**
 * Parse YAML frontmatter from markdown content
 */
export function parseFrontmatter(content: string): ParsedFrontmatter | null {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;

  const [, frontmatterStr, body] = match;
  const frontmatter: Record<string, unknown> = {};

  let currentKey = "";
  let inArray = false;
  const arrayValues: string[] = [];

  for (const line of frontmatterStr.split("\n")) {
    if (inArray) {
      if (line.startsWith("  - ")) {
        arrayValues.push(line.slice(4).trim());
        continue;
      } else {
        frontmatter[currentKey] = arrayValues.slice();
        arrayValues.length = 0;
        inArray = false;
      }
    }

    const keyMatch = line.match(/^(\w+):\s*(.*)$/);
    if (keyMatch) {
      const [, key, value] = keyMatch;
      currentKey = key;

      if (value === "") {
        // Could be start of array
        inArray = true;
      } else if (value === "true") {
        frontmatter[key] = true;
      } else if (value === "false") {
        frontmatter[key] = false;
      } else if (value.startsWith('"') && value.endsWith('"')) {
        frontmatter[key] = value.slice(1, -1);
      } else if (value.startsWith("[") && value.endsWith("]")) {
        // Inline array
        frontmatter[key] = value
          .slice(1, -1)
          .split(",")
          .map(s => s.trim());
      } else {
        frontmatter[key] = value;
      }
    }
  }

  if (inArray) {
    frontmatter[currentKey] = arrayValues;
  }

  return { frontmatter: frontmatter as BlogFrontmatter, body };
}

/**
 * Add sns_shared: true to the frontmatter of a file
 */
export function addSnsSharedToFile(filePath: string): void {
  const content = fs.readFileSync(filePath, "utf-8");
  const parsed = parseFrontmatter(content);
  if (!parsed) return;

  // Check if sns_shared already exists
  if (content.includes("sns_shared:")) {
    // Update existing value
    const updated = content.replace(
      /sns_shared:\s*(true|false)/,
      "sns_shared: true"
    );
    fs.writeFileSync(filePath, updated);
  } else {
    // Add sns_shared after draft line, or after tags, or before ---
    let updated: string;
    if (content.includes("draft:")) {
      updated = content.replace(
        /(draft:\s*(true|false))/,
        "$1\nsns_shared: true"
      );
    } else if (content.includes("tags:")) {
      // Find the end of tags array and add after it
      const lines = content.split("\n");
      const newLines: string[] = [];
      let inTags = false;
      let added = false;

      for (const line of lines) {
        newLines.push(line);
        if (line.startsWith("tags:")) {
          inTags = true;
        } else if (inTags && !line.startsWith("  -") && !added) {
          // End of tags array
          newLines.splice(newLines.length - 1, 0, "sns_shared: true");
          inTags = false;
          added = true;
        }
      }

      if (!added) {
        // Tags was the last item before ---
        const endIndex = newLines.lastIndexOf("---");
        if (endIndex > 0) {
          newLines.splice(endIndex, 0, "sns_shared: true");
        }
      }

      updated = newLines.join("\n");
    } else {
      // Add before the closing ---
      updated = content.replace(/\n---\n/, "\nsns_shared: true\n---\n");
    }
    fs.writeFileSync(filePath, updated);
  }
}
