// Bluesky API endpoints
const BLUESKY_API_BASE = "https://bsky.social/xrpc";

interface BlueskySession {
  accessJwt: string;
  did: string;
}

interface Facet {
  index: {
    byteStart: number;
    byteEnd: number;
  };
  features: Array<
    | { $type: "app.bsky.richtext.facet#link"; uri: string }
    | { $type: "app.bsky.richtext.facet#tag"; tag: string }
  >;
}

/**
 * Detect facets (links and hashtags) in text
 */
function detectFacets(text: string): Facet[] {
  const facets: Facet[] = [];
  const encoder = new TextEncoder();

  // Detect URLs
  const urlRegex =
    /(?:^|\s|\()((?:https?:\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/gi;
  let urlMatch: RegExpExecArray | null;

  while ((urlMatch = urlRegex.exec(text)) !== null) {
    const matchedUrl = urlMatch[1];
    const matchStart =
      urlMatch.index + (urlMatch[0].length - matchedUrl.length);

    // Normalize URL (add https:// if missing)
    let uri = matchedUrl;
    if (!uri.match(/^https?:\/\//i)) {
      uri = `https://${uri}`;
    }

    // Calculate byte offsets
    const beforeMatch = text.slice(0, matchStart);
    const byteStart = encoder.encode(beforeMatch).length;
    const byteEnd = byteStart + encoder.encode(matchedUrl).length;

    facets.push({
      index: { byteStart, byteEnd },
      features: [
        {
          $type: "app.bsky.richtext.facet#link",
          uri,
        },
      ],
    });
  }

  // Detect hashtags
  const hashtagRegex = /(?:^|\s)(#[^\s\d!@#$%^&*(),.?":{}|<>]+)/g;
  let hashtagMatch: RegExpExecArray | null;

  while ((hashtagMatch = hashtagRegex.exec(text)) !== null) {
    const matchedTag = hashtagMatch[1];
    const matchStart =
      hashtagMatch.index + (hashtagMatch[0].length - matchedTag.length);

    // Remove the # prefix for the tag value
    const tag = matchedTag.slice(1);

    // Calculate byte offsets
    const beforeMatch = text.slice(0, matchStart);
    const byteStart = encoder.encode(beforeMatch).length;
    const byteEnd = byteStart + encoder.encode(matchedTag).length;

    facets.push({
      index: { byteStart, byteEnd },
      features: [
        {
          $type: "app.bsky.richtext.facet#tag",
          tag,
        },
      ],
    });
  }

  return facets;
}

/**
 * Create a Bluesky session using App Password
 */
async function createSession(
  identifier: string,
  password: string
): Promise<BlueskySession | null> {
  try {
    const response = await fetch(
      `${BLUESKY_API_BASE}/com.atproto.server.createSession`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `Bluesky auth error: ${response.status} ${response.statusText}`
      );
      console.error(`Response body: ${errorBody}`);
      return null;
    }

    const data = await response.json();
    return {
      accessJwt: data.accessJwt,
      did: data.did,
    };
  } catch (error) {
    console.error("Failed to create Bluesky session:", error);
    return null;
  }
}

/**
 * Post to Bluesky
 */
export async function postToBluesky(text: string): Promise<boolean> {
  const identifier = process.env.BLUESKY_IDENTIFIER;
  const appPassword = process.env.BLUESKY_APP_PASSWORD;

  if (!identifier || !appPassword) {
    console.error("Missing Bluesky credentials");
    return false;
  }

  // Create session
  const session = await createSession(identifier, appPassword);
  if (!session) {
    return false;
  }

  try {
    // Detect URLs and hashtags to create facets
    const facets = detectFacets(text);

    const response = await fetch(
      `${BLUESKY_API_BASE}/com.atproto.repo.createRecord`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.accessJwt}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          repo: session.did,
          collection: "app.bsky.feed.post",
          record: {
            $type: "app.bsky.feed.post",
            text,
            facets: facets.length > 0 ? facets : undefined,
            createdAt: new Date().toISOString(),
            langs: ["ja"],
          },
        }),
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `Bluesky post error: ${response.status} ${response.statusText}`
      );
      console.error(`Response body: ${errorBody}`);
      return false;
    }

    const result = await response.json();
    console.log("Successfully posted to Bluesky:", result);
    return true;
  } catch (error) {
    console.error("Failed to post to Bluesky:", error);
    return false;
  }
}
