
import { SITE_URL } from '../config';

const INDEXNOW_KEY = 'fa0c5260a1b1458b87b8ff3e7df53cf2';

export async function pingIndexNow(urls: string[]) {
  const host = new URL(SITE_URL).hostname;
  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`IndexNow ping failed for ${host}:`, errorText);
      return { success: false, status: response.status, error: errorText };
    }

    return { success: true, status: response.status };
  } catch (err) {
    console.error(`IndexNow ping error for ${host}:`, err);
    return { success: false, error: err instanceof Error ? err.message : String(err) };
  }
}
