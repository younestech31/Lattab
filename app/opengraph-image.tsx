import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const revalidate = 31536000;
export const alt = 'مكتب الأستاذ لعطب محمد - توثيق وأعمال قانونية';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Fetch Cairo bold font
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
              fontSize: 84,
              color: 'white',
              fontWeight: 'bold',
              lineHeight: 1.2,
              marginBottom: 20,
              display: 'flex',
              direction: 'rtl',
            }}
          >
            مكتب الأستاذ لعطب محمد
          </div>
          
          <div
            style={{
              fontSize: 48,
              color: '#d1fae5', // emerald-100
              display: 'flex',
              direction: 'rtl',
            }}
          >
            موثق معتمد - توثيق وأعمال قانونية شاملة
          </div>

          <div
            style={{
              marginTop: 60,
              backgroundColor: '#10b981', // emerald-500
              color: 'white',
              padding: '16px 32px',
              borderRadius: '50px',
              fontSize: 28,
              fontWeight: 'bold',
              display: 'flex',
              direction: 'rtl',
            }}
          >
            وهران، الجزائر
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
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
