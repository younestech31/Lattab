import { ImageResponse } from 'next/og';
import { blogPosts } from '@/lib/data/blog';

export const revalidate = 86400;

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  const title = post?.title ?? 'مكتب الأستاذ لعطب محمد - موثق وهران';
  const category = post?.category ?? 'قانون جزائري';
  
  return new ImageResponse(
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
      }}
    >
      <div style={{ color: '#d1fae5', fontSize: '20px', fontWeight: 600 }}>
        {category}
      </div>
      <div style={{ color: '#ffffff', fontSize: '52px', fontWeight: 800, lineHeight: 1.2, maxWidth: '900px' }}>
        {title}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <div style={{ color: '#ffffff', fontSize: '22px', marginRight: '40px' }}>
          مكتب الأستاذ لعطب محمد — موثق معتمد بوهران
        </div>
        <div style={{ 
          background: '#f59e0b', color: '#064e3b', 
          padding: '12px 24px', borderRadius: '8px', 
          fontWeight: 700, fontSize: '18px' 
        }}>
          ⚖️ lattab.vercel.app
        </div>
      </div>
    </div>,
    { ...size }
  );
}
