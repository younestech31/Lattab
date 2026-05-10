
import { SITE_URL } from '../constants';

const INDEXNOW_KEY = '23640b5098f44acf92740b8ccee9f405';
const HOST = new URL(SITE_URL).hostname;

export async function pingIndexNow(urls: string[]) {
  const payload = {
    host: HOST,
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
      console.error(`IndexNow ping failed for ${HOST}:`, errorText);
      return { success: false, status: response.status, error: errorText };
    }

    return { success: true, status: response.status };
  } catch (err) {
    console.error(`IndexNow ping error for ${HOST}:`, err);
    return { success: false, error: err instanceof Error ? err.message : String(err) };
  }
}
