import * as crypto from "node:crypto";

// X API endpoint
const X_API_URL = "https://api.x.com/2/tweets";

/**
 * Percent encode a string according to RFC 3986
 */
function percentEncode(str: string): string {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    c => `%${c.charCodeAt(0).toString(16).toUpperCase()}`
  );
}

/**
 * Generate a random nonce for OAuth
 */
function generateNonce(): string {
  return crypto.randomBytes(16).toString("hex");
}

/**
 * Generate current timestamp in seconds
 */
function generateTimestamp(): string {
  return Math.floor(Date.now() / 1000).toString();
}

/**
 * Create OAuth signature base string
 */
function createSignatureBaseString(
  method: string,
  url: string,
  params: Record<string, string>
): string {
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${percentEncode(key)}=${percentEncode(params[key])}`)
    .join("&");

  return `${method}&${percentEncode(url)}&${percentEncode(sortedParams)}`;
}

/**
 * Create HMAC-SHA1 signature
 */
function createSignature(
  baseString: string,
  consumerSecret: string,
  tokenSecret: string
): string {
  const signingKey = `${percentEncode(consumerSecret)}&${percentEncode(tokenSecret)}`;
  const hmac = crypto.createHmac("sha1", signingKey);
  hmac.update(baseString);
  return hmac.digest("base64");
}

/**
 * Create OAuth 1.0a Authorization header
 */
function createOAuthHeader(
  method: string,
  url: string,
  consumerKey: string,
  consumerSecret: string,
  accessToken: string,
  accessTokenSecret: string
): string {
  const oauthParams: Record<string, string> = {
    oauth_consumer_key: consumerKey,
    oauth_nonce: generateNonce(),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: generateTimestamp(),
    oauth_token: accessToken,
    oauth_version: "1.0",
  };

  const baseString = createSignatureBaseString(method, url, oauthParams);
  const signature = createSignature(
    baseString,
    consumerSecret,
    accessTokenSecret
  );
  oauthParams["oauth_signature"] = signature;

  const headerParams = Object.keys(oauthParams)
    .sort()
    .map(key => `${percentEncode(key)}="${percentEncode(oauthParams[key])}"`)
    .join(", ");

  return `OAuth ${headerParams}`;
}

/**
 * Post to X (Twitter)
 */
export async function postToX(text: string): Promise<boolean> {
  const apiKey = process.env.X_API_KEY;
  const apiSecret = process.env.X_API_SECRET;
  const accessToken = process.env.X_ACCESS_TOKEN;
  const accessSecret = process.env.X_ACCESS_SECRET;

  if (!apiKey || !apiSecret || !accessToken || !accessSecret) {
    console.error("Missing X API credentials");
    return false;
  }

  const authHeader = createOAuthHeader(
    "POST",
    X_API_URL,
    apiKey,
    apiSecret,
    accessToken,
    accessSecret
  );

  try {
    const response = await fetch(X_API_URL, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`X API error: ${response.status} ${response.statusText}`);
      console.error(`Response body: ${errorBody}`);
      return false;
    }

    const result = await response.json();
    console.log("Successfully posted to X:", result);
    return true;
  } catch (error) {
    console.error("Failed to post to X:", error);
    return false;
  }
}
