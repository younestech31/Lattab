import { NextRequest, NextResponse } from 'next/server';
import { notifyGoogleIndexing, UrlNotification } from '@/lib/seo/google-indexing';
import { SITE_URL } from '@/lib/constants';
import { blogPosts } from '@/lib/data/blog';
import { pingIndexNow as notifyIndexNow } from '@/lib/utils/indexnow';
import { validateBearerAuth } from '@/lib/utils/auth';
import { z } from 'zod';

/** 
 * MANUAL USE ONLY — Google Indexing API is for JobPosting/BroadcastEvent only.
 * Do not use as a cron. Use /api/index-now for general content submission.
 * 
 * GET  /api/google-indexing          → submit all known indexable URLs
 * POST /api/google-indexing          → submit a specific URL (body: { url, type? })
 * PUT  /api/google-indexing          → submit all blog posts via IndexNow (Deploy Webhook)
 */

type UrlNotificationSchema = z.infer<typeof UrlNotificationSchema>;
const UrlNotificationSchema = z.object({
  url: z.string().url(),
  type: z.enum(['URL_UPDATED', 'URL_DELETED']).optional().default('URL_UPDATED'),
});

const PutBodySchema = z.object({
  urls: z.array(z.string().url()).max(100).optional(),
});

// Define which URLs are considered eligible for the Indexing API.
// Note: Google's Indexing API is officially for JobPosting or BroadcastEvent pages.
const INDEXABLE_URLS: string[] = [
  SITE_URL,
  ...blogPosts.map(post => `${SITE_URL}/blog/${post.slug}`)
];

function checkAuth(req: NextRequest): NextResponse | null {
  if (process.env.NODE_ENV !== 'development' && !process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 503 });
  }
  if (!validateBearerAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}

export async function GET(req: NextRequest) {
  const authError = checkAuth(req);
  if (authError) return authError;

  if (INDEXABLE_URLS.length === 0) {
    return NextResponse.json({ message: 'No URLs to index' }, { status: 200 });
  }

  const notifications: UrlNotification[] = INDEXABLE_URLS.map((url) => ({
    url,
    type: 'URL_UPDATED',
  }));

  try {
    const result = await notifyGoogleIndexing(notifications);
    return NextResponse.json(result, { 
        status: result.failed > 0 ? 207 : 200,
        headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const authError = checkAuth(req);
  if (authError) return authError;

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = UrlNotificationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid body parameter', details: parsed.error.flatten() }, { status: 400 });
  }

  const { url, type } = parsed.data;

  if (!url.startsWith(SITE_URL)) {
    return NextResponse.json({ error: `URL must belong to ${SITE_URL}` }, { status: 400 });
  }

  try {
    const result = await notifyGoogleIndexing([
      { url, type },
    ]);
    return NextResponse.json(result, { 
        status: result.failed > 0 ? 207 : 200,
        headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const authError = checkAuth(req);
  if (authError) return authError;

  const body = await req.json().catch(() => ({}));
  const parsed = PutBodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid body parameter', details: parsed.error.flatten() }, { status: 400 });
  }

  const blogUrls = parsed.data.urls ?? blogPosts.map(post => `${SITE_URL}/blog/${post.slug}`);
  
  if (blogUrls.length === 0) {
    return NextResponse.json({ message: 'No blog posts to index' }, { status: 200 });
  }

  await notifyIndexNow(blogUrls);
  
  return NextResponse.json({ message: 'IndexNow submitted', count: blogUrls.length }, { 
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

