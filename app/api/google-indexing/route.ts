import { NextRequest, NextResponse } from 'next/server';
import { notifyGoogleIndexing, UrlNotification } from '@/lib/seo/google-indexing';
import { SITE_URL } from '@/lib/constants';
import { blogPosts } from '@/lib/data/blog';

/**
 * GET  /api/google-indexing          → submit all known indexable URLs
 * POST /api/google-indexing          → submit a specific URL (body: { url, type? })
 */

// Define which URLs are considered eligible for the Indexing API.
// Note: Google's Indexing API is officially for JobPosting or BroadcastEvent pages.
const INDEXABLE_URLS: string[] = [
  SITE_URL,
  ...blogPosts.map(post => `${SITE_URL}/blog/${post.slug}`)
];

function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true; // Open if no secret set (e.g. dev)

  const auth = req.headers.get('authorization') ?? '';
  return auth === `Bearer ${secret}`;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (INDEXABLE_URLS.length === 0) {
    return NextResponse.json({ message: 'No URLs to index' }, { status: 200 });
  }

  const notifications: UrlNotification[] = INDEXABLE_URLS.map((url) => ({
    url,
    type: 'URL_UPDATED',
  }));

  try {
    const result = await notifyGoogleIndexing(notifications);
    return NextResponse.json(result, { status: result.failed > 0 ? 207 : 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { url?: string; type?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { url, type = 'URL_UPDATED' } = body;

  if (!url) {
    return NextResponse.json({ error: 'Missing "url" in request body' }, { status: 400 });
  }

  if (!url.startsWith(SITE_URL)) {
    return NextResponse.json({ error: `URL must belong to ${SITE_URL}` }, { status: 400 });
  }

  try {
    const result = await notifyGoogleIndexing([
      { url, type: type as 'URL_UPDATED' | 'URL_DELETED' },
    ]);
    return NextResponse.json(result, { status: result.failed > 0 ? 207 : 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
