import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'حاسبة السعر المرجعي العقاري — موثق وهران 2026';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #047857 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '60px',
          textAlign: 'center',
          direction: 'rtl',
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.2, marginBottom: 24 }}>
          حاسبة السعر المرجعي العقاري
        </div>
        <div style={{ fontSize: 32, opacity: 0.85, marginBottom: 40 }}>
          وهران · الجزائر · 2026
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 16,
            padding: '16px 40px',
            fontSize: 24,
          }}
        >
          الأستاذ لعطب محمد — موثق معتمد
        </div>
      </div>
    ),
    { ...size }
  );
}
