import { ImageResponse } from 'next/og';
import { blogPosts } from '@/lib/data/blog';

export const runtime = 'edge';
export const alt = 'مكتب الأستاذة حطاب - توثيق وأعمال قانونية';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return new Response('Post not found', { status: 404 });
  }

  // Fetch Cairo bold font for better Arabic rendering
  const fontData = await fetch(
    new URL('https://fonts.gstatic.com/s/cairo/v28/SLL9YH6S7wZ7K9Z1N1vL.ttf', 'https://fonts.gstatic.com')
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#064e3b', // emerald-900
          padding: '80px',
          fontFamily: 'Cairo',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: 64,
              color: 'white',
              fontWeight: 'bold',
              lineHeight: 1.2,
              marginBottom: 40,
              display: 'flex',
              flexDirection: 'column',
              direction: 'rtl',
            }}
          >
            {post.title}
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              direction: 'rtl',
            }}
          >
            <div
              style={{
                backgroundColor: '#10b981', // emerald-500
                color: 'white',
                padding: '12px 24px',
                borderRadius: '50px',
                fontSize: 24,
                fontWeight: 'bold',
                marginLeft: 20,
              }}
            >
              {post.category}
            </div>
            <div
              style={{
                color: '#d1fae5', // emerald-100
                fontSize: 32,
                fontWeight: 'bold',
              }}
            >
              مكتب الأستاذة حطاب ليلى
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cairo',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
