import { ImageResponse } from 'next/og';
import { blogPosts } from '@/lib/data/blog';

export const runtime = 'nodejs';
export const revalidate = 86400;

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Pre-render all blog OG images as static assets at build time
export async function generateStaticParams() {
  try {
    return (blogPosts ?? []).map((post) => ({
      slug: post.slug,
    }));
  } catch {
    return [];
  }
}

function buildFallbackImage() {
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
          Guide Notarial et Juridique Algerien 2026
        </div>
      </div>
    ),
    { ...size }
  );
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;

    // Format slug into clean Latin title to avoid Satori OpenType GSUB Arabic font crash
    const formattedTitle = (slug || 'guide-notarial')
      .split('-')
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .slice(0, 120);

    const category = 'Droit Notarial & Immobilier Algerien';

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
            {formattedTitle}
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
    return buildFallbackImage();
  }
}
