import { ImageResponse } from 'next/og';
import { frBlogPosts } from '@/lib/data/blog';

export const revalidate = 86400;

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Pre-render all French blog OG images as static assets at build time
export async function generateStaticParams() {
  return frBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const post = frBlogPosts.find((p) => p.slug === slug);

    const title = post?.title ?? 'Office Notarial - Oran - Notaire a Oran';
    const category = post?.category ?? 'Droit Algerien';

    return new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '630px',
            background: 'linear-gradient(135deg, #065f46 0%, #059669 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '60px',
            fontFamily: 'sans-serif',
            color: '#ffffff',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#d1fae5',
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '20px',
                fontWeight: 600,
              }}
            >
              {category}
            </div>
            <div
              style={{
                background: '#f59e0b',
                color: '#064e3b',
                padding: '8px 20px',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '20px',
              }}
            >
              2026
            </div>
          </div>

          <div
            style={{
              color: '#ffffff',
              fontSize: '48px',
              fontWeight: 800,
              lineHeight: 1.25,
              maxWidth: '980px',
            }}
          >
            {title}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              paddingTop: '24px',
              width: '100%',
            }}
          >
            <div style={{ color: '#ffffff', fontSize: '20px', fontWeight: 600 }}>
              Office Notarial - Oran
            </div>
            <div
              style={{
                background: '#f59e0b',
                color: '#064e3b',
                padding: '8px 18px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '16px',
              }}
            >
              lattab.vercel.app
            </div>
          </div>
        </div>
      ),
      { ...size }
    );
  } catch {
    // Fail-safe fallback: Never return a 500 error to search engine crawlers
    return new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '630px',
            background: 'linear-gradient(135deg, #065f46 0%, #059669 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '60px',
            fontFamily: 'sans-serif',
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '44px', fontWeight: 800, marginBottom: '16px' }}>
            Office Notarial - Oran — Notaire a Oran
          </div>
          <div style={{ fontSize: '24px', color: '#d1fae5' }}>
            Guide Juridique et Notarial Algerien 2026
          </div>
        </div>
      ),
      { ...size }
    );
  }
}
