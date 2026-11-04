import { NextRequest, NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/config';
import { blogPosts, frBlogPosts } from '@/lib/data/blog';
import { STATIC_LOCALE_MAP } from '@/lib/data/localeMap';
import { validateBearerAuth } from '@/lib/utils/auth';

const INDEX_NOW_KEY = process.env.INDEXNOW_KEY || '';
const API_URL = 'https://api.indexnow.org/indexnow';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  if (!process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 503 });
  }
  if (!validateBearerAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!INDEX_NOW_KEY) {
    return NextResponse.json({ error: 'INDEXNOW_KEY not configured' }, { status: 503 });
  }

  const base = SITE_URL;
  // IndexNow notifies participating search engines; it is not Google's Indexing API.
  // Build the list from the same canonical route registry used by the sitemap.
  const staticUrls = STATIC_LOCALE_MAP.flatMap((entry) => [
    new URL(entry.arPath, base).toString(),
    ...(entry.frPath ? [new URL(entry.frPath, base).toString()] : []),
  ]);
  const articleUrls = [
    ...blogPosts.map((post) => new URL(`/blog/${post.slug}`, base).toString()),
    ...frBlogPosts.map((post) => new URL(`/fr/blog/${post.slug}`, base).toString()),
  ];
  const urlList = Array.from(new Set([...staticUrls, ...articleUrls]));

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
