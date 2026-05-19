import { NextRequest, NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/config';
import { blogPosts } from '@/lib/data/blog';
import { validateBearerAuth } from '@/lib/utils/auth';

const INDEX_NOW_KEY = process.env.INDEXNOW_KEY || '';
const HOST = new URL(SITE_URL).host;
const API_URL = 'https://api.indexnow.org/indexnow';

export async function GET(req: NextRequest) {
  if (!validateBearerAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const base = SITE_URL;
  const urlList = [
    `${base}/`,
    `${base}/blog`,
    `${base}/calculateur-prix-referentiel`,
    ...blogPosts.map(post => `${base}/blog/${post.slug}`)
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
      return NextResponse.json(
        { pinged: urlList.length, urls: urlList },
        { headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
