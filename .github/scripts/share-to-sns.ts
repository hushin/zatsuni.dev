import { addSnsSharedToFile } from "./lib/frontmatter.ts";
import {
  getChangedFiles,
  getPostsToShare,
  formatPostContent,
} from "./lib/posts.ts";
import { postToX } from "./lib/x.ts";
import { postToBluesky } from "./lib/bluesky.ts";

/**
 * Main function
 */
async function main(): Promise<void> {
  const specificFile = process.argv[2];
  const dryRun = process.argv.includes("--dry-run");

  console.log("Starting SNS share process...");

  const changedFiles = getChangedFiles(specificFile);
  console.log(`Found ${changedFiles.length} changed file(s):`, changedFiles);

  const postsToShare = getPostsToShare(changedFiles);
  console.log(`Posts to share: ${postsToShare.length}`);

  for (const post of postsToShare) {
    const content = formatPostContent(post);
    console.log(`\n--- Posting ---`);
    console.log(content);
    console.log(`---------------\n`);

    if (dryRun) {
      console.log("[DRY RUN] Would post to X and Bluesky, then update file");
      continue;
    }

    // Post to both platforms in parallel
    const [xSuccess, blueskySuccess] = await Promise.all([
      postToX(content),
      postToBluesky(content),
    ]);

    console.log(`X: ${xSuccess ? "success" : "failed"}`);
    console.log(`Bluesky: ${blueskySuccess ? "success" : "failed"}`);

    // Only mark as shared if both succeed
    if (xSuccess && blueskySuccess) {
      console.log(`Updating ${post.filePath} with sns_shared: true`);
      addSnsSharedToFile(post.filePath);
    } else {
      console.error(`Failed to post: ${post.frontmatter.title}`);
      if (!xSuccess) console.error("  - X posting failed");
      if (!blueskySuccess) console.error("  - Bluesky posting failed");
      process.exit(1);
    }
  }

  console.log("Done!");
}

main().catch(error => {
  console.error("Unhandled error:", error);
  process.exit(1);
});
