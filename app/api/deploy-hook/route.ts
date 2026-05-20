import { NextResponse } from 'next/server';
import { pingIndexNow } from '@/lib/utils/indexnow';
import { validateBearerAuth } from '@/lib/utils/auth';
import { getBlogPosts, getFrBlogPosts } from '@/lib/data/blog';
import { SITE_URL } from '@/lib/config';

export const runtime = 'nodejs';

export async function POST(request: Request): Promise<Response> {
  const secret = process.env.DEPLOY_HOOK_SECRET;
  if (!secret || !validateBearerAuth(request, secret)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const base = SITE_URL;
  const staticPages = [
    `${base}/`,
    `${base}/fr`,
    `${base}/blog`,
    `${base}/fr/blog`,
    `${base}/calculateur-prix-referentiel`,
  ];

  const arPosts = getBlogPosts();
  const frPosts = getFrBlogPosts();

  const blogUrls = [
    ...arPosts.map(post => `${base}/blog/${post.slug}`),
    ...frPosts.map(post => `${base}/fr/blog/${post.slug}`),
  ];

  const allUrls = [...staticPages, ...blogUrls];

  await pingIndexNow(allUrls);

  const result = {
    submitted: allUrls.length,
    urls: allUrls,
  };

  console.log('[deploy-hook:indexnow]', result);

  return NextResponse.json(result);
}
