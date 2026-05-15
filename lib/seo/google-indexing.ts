import crypto from 'node:crypto';

/**
 * WARNING: Google's Indexing API only officially supports JobPosting and BroadcastEvent pages.
 * This endpoint may not produce the intended indexing results for general blog pages.
 * It is recommended to use the IndexNow endpoint (/api/index-now) for general page submission.
 */

export type NotificationType = 'URL_UPDATED' | 'URL_DELETED';

export interface UrlNotification {
  url: string;
  type: NotificationType;
}

export interface NotificationResult {
  url: string;
  type: NotificationType;
  success: boolean;
  /** HTTP status returned by the Indexing API */
  status?: number;
  error?: string;
}

export interface BatchResult {
  submitted: number;
  succeeded: number;
  failed: number;
  results: NotificationResult[];
}

function base64url(input: Buffer | string): string {
  const buf = typeof input === 'string' ? Buffer.from(input) : input;
  return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * Build and sign a JWT for the Google OAuth2 token endpoint.
 * Uses Node's built-in `crypto` — no extra dependencies needed.
 */
function buildJwt(serviceAccountEmail: string, privateKey: string): string {
  const now = Math.floor(Date.now() / 1000);

  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = base64url(
    JSON.stringify({
      iss: serviceAccountEmail,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    })
  );

  const signingInput = `${header}.${payload}`;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signingInput);
  sign.end();
  const signature = base64url(sign.sign(privateKey));

  return `${signingInput}.${signature}`;
}

/**
 * Exchange a signed JWT for a short-lived Google access token.
 */
async function getAccessToken(serviceAccountEmail: string, privateKey: string): Promise<string> {
  const jwt = buildJwt(serviceAccountEmail, privateKey);

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Failed to obtain Google access token (${res.status}): ${body}`);
  }

  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

/**
 * Notify Google about a single URL.
 */
async function notifyUrl(
  notification: UrlNotification,
  accessToken: string
): Promise<NotificationResult> {
  try {
    const res = await fetch(
      'https://indexing.googleapis.com/v3/urlNotifications:publish',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(notification),
      }
    );

    if (!res.ok) {
      const body = await res.text();
      return {
        ...notification,
        success: false,
        status: res.status,
        error: body,
      };
    }

    return { ...notification, success: true, status: res.status };
  } catch (err) {
    return {
      ...notification,
      success: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
}

/**
 * Notify Google about one or more URLs (updated or deleted).
 */
export async function notifyGoogleIndexing(
  notifications: UrlNotification[]
): Promise<BatchResult> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY ?? '').replace(/\\n/g, '\n');

  if (!email || !privateKey) {
    throw new Error(
      'Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY environment variables.'
    );
  }

  if (notifications.length === 0) {
    return { submitted: 0, succeeded: 0, failed: 0, results: [] };
  }

  const accessToken = await getAccessToken(email, privateKey);

  // Google's batch API allows up to 100 requests per batch.
  const chunkSize = 100;
  const results: NotificationResult[] = [];

  for (let i = 0; i < notifications.length; i += chunkSize) {
    const chunk = notifications.slice(i, i + chunkSize);
    const boundary = `batch_${crypto.randomUUID()}`;
    let body = '';

    for (let j = 0; j < chunk.length; j++) {
      const n = chunk[j];
      const payload = JSON.stringify(n);
      const reqId = `item-${i + j}`;

      body += `--${boundary}\r\n`;
      body += `Content-Type: application/http\r\n`;
      body += `Content-Transfer-Encoding: binary\r\n`;
      body += `Content-ID: <${reqId}>\r\n\r\n`;
      body += `POST /v3/urlNotifications:publish HTTP/1.1\r\n`;
      body += `Content-Type: application/json\r\n`;
      body += `Accept: application/json\r\n`;
      body += `Content-Length: ${Buffer.byteLength(payload)}\r\n\r\n`;
      body += `${payload}\r\n`;
    }
    body += `--${boundary}--\r\n`;

    try {
      const res = await fetch('https://indexing.googleapis.com/batch', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': `multipart/mixed; boundary="${boundary}"`,
        },
        body,
      });

      const responseText = await res.text();

      for (let j = 0; j < chunk.length; j++) {
        const reqId = `item-${i + j}`;
        const searchId = `response-${reqId}`;
        const partStartIndex = responseText.indexOf(`Content-ID: <${searchId}>`);
        
        let success = false;
        let status: number | undefined;

        if (partStartIndex !== -1) {
          const nextBoundaryMatch = responseText.indexOf(`--batch_`, partStartIndex);
          const partEndIndex = nextBoundaryMatch !== -1 ? nextBoundaryMatch : responseText.length;
          const partText = responseText.slice(partStartIndex, partEndIndex);

          // Find the HTTP status line (e.g., "HTTP/1.1 200 OK")
          const statusMatch = partText.match(/HTTP\/\d(?:\.\d)?\s+(\d{3})/);
          if (statusMatch) {
            status = parseInt(statusMatch[1], 10);
            success = status >= 200 && status < 300;
          }
        }

        results.push({
          ...chunk[j],
          success,
          status,
          error: success ? undefined : 'Failed in batch request',
        });
      }
    } catch (err) {
      // If the entire batch fetch fails, mark all in chunk as failed
      for (let j = 0; j < chunk.length; j++) {
        results.push({
          ...chunk[j],
          success: false,
          error: err instanceof Error ? err.message : 'Batch request error',
        });
      }
    }
  }

  const succeeded = results.filter((r) => r.success).length;

  return {
    submitted: notifications.length,
    succeeded,
    failed: notifications.length - succeeded,
    results,
  };
}
