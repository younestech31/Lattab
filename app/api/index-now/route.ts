import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/constants';

const INDEX_NOW_KEY = process.env.INDEXNOW_KEY || '';
const HOST = new URL(SITE_URL).host;
const API_URL = 'https://api.indexnow.org/indexnow';

export async function GET() {
  const base = SITE_URL;
  
  const urlList = [
    `${base}/`,
    `${base}/blog`,
    `${base}/calculateur-prix-referentiel`
  ];

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: HOST,
        key: INDEX_NOW_KEY,
        keyLocation: `${base}/${INDEX_NOW_KEY}.txt`,
        urlList: urlList,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ success: false, error: `${response.status} ${response.statusText}: ${errorText}` }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
