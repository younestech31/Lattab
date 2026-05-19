/** @server-only — never import this from a Client Component */
import 'server-only';
import { blogPosts } from '@/lib/data/blog';

export { blogPosts };

export const LAST_CONTENT_UPDATED = blogPosts.reduce(
  (max, post) => (post.dateISO > max ? post.dateISO : max),
  '2026-01-01'
);
