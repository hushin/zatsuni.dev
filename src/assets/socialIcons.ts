const socialIcons = {
  Github: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
    ></path>
  </svg>`,
  Facebook: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
    ></path>
  </svg>`,
  Instagram: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="4"></rect>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
  </svg>`,
  LinkedIn: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <line x1="8" y1="11" x2="8" y2="16"></line>
    <line x1="8" y1="8" x2="8" y2="8.01"></line>
    <line x1="12" y1="16" x2="12" y2="11"></line>
    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
  </svg>`,
  Mail: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>`,
  X: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>`,
  Twitch: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
    </svg>`,
  YouTube: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>`,
  Pinterest: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="8" y1="20" x2="12" y2="11"></line>
      <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
      <circle cx="12" cy="12" r="9"></circle>
    </svg>`,
  TikTok: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
    </svg>`,
  CodePen: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path>
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
      <line x1="3" y1="9" x2="3" y2="15"></line>
      <line x1="21" y1="9" x2="21" y2="15"></line>
      <line x1="12" y1="3" x2="12" y2="9"></line>
      <line x1="12" y1="15" x2="12" y2="21"></line>
    </svg>`,
  Discord: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="9" cy="12" r="1"></circle>
      <circle cx="15" cy="12" r="1"></circle>
      <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
      <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
      <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
      <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
    </svg>`,
  GitLab: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z"></path>
    </svg>`,
  Steam: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 2.995l-.176 .005a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z"></path>
      <circle fill="currentColor" cx="16.5" cy="9.5" r="1"></circle>
    </svg>`,
  Mastodon: `<svg class="icon-tabler" viewBox="-10 -5 1034 1034" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    <path fill="currentColor"
  d="M499 112q-93 1 -166 11q-81 11 -128 33l-14 8q-16 10 -32 25q-22 21 -38 47q-21 33 -32 73q-14 47 -14 103v37q0 77 1 119q3 113 18 188q19 95 62 154q50 67 134 89q109 29 210 24q46 -3 88 -12q30 -7 55 -17l19 -8l-4 -75l-22 6q-28 6 -57 10q-41 6 -78 4q-53 -1 -80 -7
  q-43 -8 -67 -30q-29 -25 -35 -72q-2 -14 -2 -29l25 6q31 6 65 10q48 7 93 9q42 2 92 -2q32 -2 88 -9t107 -30q49 -23 81.5 -54.5t38.5 -63.5q9 -45 13 -109q4 -46 5 -97v-41q0 -56 -14 -103q-11 -40 -32 -73q-16 -26 -38 -47q-15 -15 -32 -25q-12 -8 -14 -8
  q-46 -22 -127 -33q-74 -10 -166 -11h-3zM367 267q73 0 109 56l24 39l24 -39q36 -56 109 -56q63 0 101 43t38 117v239h-95v-232q0 -74 -61 -74q-69 0 -69 88v127h-94v-127q0 -88 -69 -88q-61 0 -61 74v232h-95v-239q0 -74 38 -117t101 -43z" />
  </svg>`,
  Bluesky: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" /></svg>`,
  Zenn: `<svg viewBox="4 -4 15 30" xmlns="http://www.w3.org/2000/svg" class="icon-zenn"
      stroke-linecap="round"
      stroke-linejoin="round">
<path d="M5.11631 22.5426H1.5604L14.713 1H18.2267L5.11631 22.5426Z" />
<path d="M22.579 13.0498L16.6695 22.5426H13.1466L19.0828 13.0498H22.579Z" />
</svg>`,
  Hatebu: `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_26_2)">
<path d="M398.15 0H101.85C45.5998 0 0 45.5998 0 101.85V398.15C0 454.4 45.5998 500 101.85 500H398.15C454.4 500 500 454.4 500 398.15V101.85C500 45.5998 454.4 0 398.15 0Z" fill="#00A4DE"/>
<path d="M278.17 258.1C269.11 247.98 256.52 242.29 240.37 241.06C254.74 237.14 265.18 231.41 271.78 223.76C278.35 216.21 281.61 205.95 281.61 193.05C281.61 182.83 279.38 173.8 275.05 165.99C270.61 158.23 264.24 152.02 255.86 147.37C248.53 143.34 239.82 140.5 229.66 138.82C219.45 137.2 201.59 136.37 175.96 136.37H113.64V363.64H177.85C203.64 363.64 222.24 362.74 233.62 361.01C244.98 359.22 254.52 356.22 262.23 352.1C271.77 347.06 279.06 339.89 284.14 330.68C289.26 321.44 291.8 310.79 291.8 298.6C291.8 281.75 287.26 268.2 278.17 258.11V258.1ZM171.18 186.75H184.48C199.85 186.75 210.18 188.49 215.51 191.94C220.77 195.41 223.45 201.41 223.45 209.94C223.45 218.47 220.6 223.94 214.95 227.33C209.23 230.66 198.8 232.35 183.54 232.35H171.17V186.75H171.18ZM223.94 317.08C217.89 320.8 207.46 322.62 192.83 322.62H171.18V272.97H193.76C208.79 272.97 219.18 274.86 224.7 278.64C230.31 282.42 233.08 289.09 233.08 298.67C233.08 307.24 230.05 313.39 223.94 317.09V317.08Z" fill="white"/>
<path d="M357.58 306.06C341.67 306.06 328.79 318.94 328.79 334.84C328.79 350.74 341.68 363.63 357.58 363.63C373.48 363.63 386.36 350.74 386.36 334.84C386.36 318.94 373.46 306.06 357.58 306.06Z" fill="white"/>
<path d="M382.58 136.36H332.58V287.88H382.58V136.36Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_26_2">
<rect width="500" height="500" fill="white"/>
</clipPath>
</defs>
</svg>
`,
};

export default socialIcons;
