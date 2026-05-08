import { NextResponse } from 'next/server';
import { blogPosts } from '@/lib/data/blog';

const INDEX_NOW_KEY = 'f4928357ea2343e6a43b659f704eb27c';
const HOST = 'lattab.vercel.app';
const API_URL = 'https://api.indexnow.org/indexnow';

export async function GET() {
  const base = `https://${HOST}`;
  
  // Collect all URLs to index
  const urlList = [
    `${base}/`,
    `${base}/calculateur-prix-referentiel`,
    `${base}/blog`,
    `${base}/terms-privacy`,
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
        // Also ping Google
        await fetch(
          `https://www.google.com/ping?sitemap=${encodeURIComponent(`https://${HOST}/sitemap.xml`)}`,
          { method: 'GET' }
        ).catch(() => {});
        
        return NextResponse.json({ 
        success: true, 
        message: 'تم إرسال روابط الموقع لمحرك البحث بنجاح (IndexNow)', 
        urlsSubmitted: urlList.length 
      });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ 
        success: false, 
        error: `فشل الإرسال: ${response.status} ${response.statusText}`, 
        details: errorText 
      }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'حدث خطأ أثناء الاتصال بـ IndexNow' }, { status: 500 });
  }
}
