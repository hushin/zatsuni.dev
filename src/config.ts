import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://zatsuni.dev/", // replace this with your deployed domain
  author: "hush_in",
  profile: "https://zatsuni.dev/",
  desc: "雑になんか作る。雑記も書く。",
  title: "zatsuni.dev",
  ogImage: "zatsuni-og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "ja", // html lang code. Set this empty and default will be "en"
  langTag: ["ja-JP"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "X",
    href: "https://x.com/hush_in",
    linkTitle: `X(Twitter)`,
    active: true,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/hushin.bsky.social",
    linkTitle: `Bluesky`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/hushin",
    linkTitle: `Github`,
    active: true,
  },
  {
    name: "Zenn",
    href: "https://zenn.dev/hush_in",
    linkTitle: `Zenn`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hush_in",
    linkTitle: `Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `LinkedIn`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@hush_in",
    linkTitle: `YouTube`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:ngtv.hsn@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Twitch`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/336255981111738371",
    linkTitle: `Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `GitLab`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Steam`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Mastodon`,
    active: false,
  },
];
