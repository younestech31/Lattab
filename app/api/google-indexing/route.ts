import { NextRequest, NextResponse } from 'next/server';
import { pingIndexNow as notifyIndexNow } from '@/lib/utils/indexnow';
import { validateBearerAuth } from '@/lib/utils/auth';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Google Indexing API is restricted to JobPosting and BroadcastEvent content.
 * This site has no such content type. General pages and blog posts must use
 * IndexNow instead; this route therefore refuses Google URL notifications.
 * PUT remains the authenticated IndexNow deployment hook.
 */
const PutBodySchema = z.object({
  urls: z.array(z.string().url()).max(100).optional(),
});

function checkAuth(req: NextRequest): NextResponse | null {
  if (process.env.NODE_ENV !== 'development' && !process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 503 });
  }
  if (!validateBearerAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}

function googleIndexingDisabled() {
  return NextResponse.json(
    { error: 'Google Indexing API is not used for ordinary pages or blog posts. Use /api/index-now.' },
    { status: 410 },
  );
}

export async function GET(req: NextRequest) {
  const authError = checkAuth(req);
  if (authError) return authError;
  return googleIndexingDisabled();
}

export async function POST(req: NextRequest) {
  const authError = checkAuth(req);
  if (authError) return authError;
  return googleIndexingDisabled();
}

export async function PUT(req: NextRequest) {
  const authError = checkAuth(req);
  if (authError) return authError;

  const body = await req.json().catch(() => ({}));
  const parsed = PutBodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid body parameter', details: parsed.error.flatten() }, { status: 400 });
  }

  // Do not rely on an implicit global blog-post list: submit only explicitly supplied URLs.
  const blogUrls = parsed.data.urls ?? [];
  if (blogUrls.length === 0) {
    return NextResponse.json({ message: 'No blog post URLs supplied' }, { status: 200 });
  }

  await notifyIndexNow(blogUrls);

  return NextResponse.json(
    { message: 'IndexNow submitted', count: blogUrls.length },
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
}
