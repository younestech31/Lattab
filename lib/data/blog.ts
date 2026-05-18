import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  slug: string;
  icon: string;
  title: string;
  description: string;
  date: string;
  dateISO: string;
  dateModified: string;
  category: string;
  readTime: string;
  language: 'ar' | 'fr';
  tags?: string[];
}

function loadBlogPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

  return files.map(file => {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const { data } = matter(raw);
    
    // Helper to format date string
    const dateObj = new Date(data.dateISO || '2026-01-01');
    const formattedDate = dateObj.toLocaleDateString('ar-DZ', { year: 'numeric', month: 'long', day: 'numeric' });

    return {
      id: slug, // Using slug as id for compatibility
      slug,
      icon: data.icon || 'FileText',
      title: data.title ?? slug,
      description: data.description ?? '',
      date: formattedDate,
      dateISO: data.dateISO ?? '2026-01-01',
      dateModified: data.dateModified ?? data.dateISO ?? '2026-01-01',
      category: data.category ?? 'عام',
      readTime: data.readTime ? `${data.readTime} دقائق` : '5 دقائق',
      language: data.language ?? 'ar',
      tags: data.tags,
    } satisfies BlogPost;
  }).sort((a, b) => b.dateISO.localeCompare(a.dateISO));
}

export const blogPosts: BlogPost[] = loadBlogPosts();
