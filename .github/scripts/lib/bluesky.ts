// Bluesky API endpoints
const BLUESKY_API_BASE = "https://bsky.social/xrpc";

interface BlueskySession {
  accessJwt: string;
  did: string;
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
