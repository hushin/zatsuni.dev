import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(b.data.pubDatetime.getTime() / 1000) -
        Math.floor(a.data.pubDatetime.getTime() / 1000)
    );
};

export default getSortedPosts;
