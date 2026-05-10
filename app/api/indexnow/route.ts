
import { NextResponse } from 'next/server';
import { pingIndexNow } from '@/lib/utils/indexnow';
import { SITE_URL } from '@/lib/constants';
import { blogPosts } from '@/lib/data/blog';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const singleUrl = searchParams.get('url');

  const urls = singleUrl ? [singleUrl] : [
    `${SITE_URL}/`,
    `${SITE_URL}/blog`,
    `${SITE_URL}/calculateur-prix-referentiel`,
    ...blogPosts.slice(0, 10).map(post => `${SITE_URL}/blog/${post.slug}`)
  ];

  const result = await pingIndexNow(urls);

  return NextResponse.json({
    message: singleUrl ? 'IndexNow ping for URL triggered' : 'Bulk IndexNow ping triggered',
    timestamp: new Date().toISOString(),
    urlsSent: urls.length,
    urls,
    result
  }, {
    headers: {
      'Cache-Control': 'no-store, max-age=0'
    }
  });
}
