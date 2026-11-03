import { NextRequest, NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/config';
import { blogPosts, frBlogPosts } from '@/lib/data/blog';
import { validateBearerAuth } from '@/lib/utils/auth';

const INDEX_NOW_KEY = process.env.INDEXNOW_KEY || '';
const API_URL = 'https://api.indexnow.org/indexnow';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  if (!process.env.CRON_SECRET || !INDEXNOW_KEY) {
    return NextResponse.json({ error: 'IndexNow authentication is not configured' }, { status: 503 });
  }
  if (!validateBearerAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const base = SITE_URL;
  const urlList = [
    `${base}/`,
    `${base}/blog`,
    `${base}/calculateur-prix-referentiel`,
    ...blogPosts.map(post => `${base}/blog/${post.slug}`),
    `${base}/fr`,
    `${base}/fr/blog`,
    `${base}/fr/calculateur-prix-referentiel`,
    ...frBlogPosts.map(post => `${base}/fr/blog/${post.slug}`),
  ];

  try {
    const host = new URL(base).host;
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host,
        key: INDEX_NOW_KEY,
        keyLocation: `${base}/${INDEX_NOW_KEY}.txt`,
        urlList,
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
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
