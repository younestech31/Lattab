import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const revalidate = 86400;

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'حاسبة السعر المرجعي العقاري 2026 - Calculateur des Prix de Référence Immobilier 2026';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        fontFamily: 'sans-serif',
        borderLeft: '24px solid #059669',
        borderTop: '8px solid #059669',
        borderBottom: '8px solid #059669',
        borderRight: '8px solid #059669',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {/* Background Decorative Graphic */}
      <div
        style={{
          position: 'absolute',
          right: '80px',
          top: '120px',
          display: 'flex',
          opacity: 0.1,
          color: '#059669',
          width: '160px',
          height: '160px',
        }}
      >
        <svg
          width="160"
          height="160"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3 3h18v18H3zM21 9H3M21 15H3M12 3v18" />
        </svg>
      </div>

      {/* Top bar with category and Badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              background: '#f1f5f9',
              color: '#334155',
              padding: '10px 20px',
              borderRadius: '12px',
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            وزارة المالية والضرائب • Barème Officiel
          </span>
        </div>
        <div
          style={{
            background: '#f59e0b',
            color: '#ffffff',
            padding: '10px 24px',
            borderRadius: '12px',
            fontWeight: 800,
            fontSize: '24px',
          }}
        >
          2026
        </div>
      </div>

      {/* Main Bilingual Title */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '16px', margin: '40px 0', zIndex: 10 }}>
        <div
          style={{
            color: '#0f172a',
            fontSize: '56px',
            fontWeight: 800,
            direction: 'rtl',
            textAlign: 'right',
            lineHeight: 1.3,
          }}
        >
          حاسبة السعر المرجعي العقاري
        </div>
        <div
          style={{
            color: '#475569',
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          Calculateur des Prix de Référence Immobilier
        </div>
      </div>

      {/* Institutional Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '2px solid #f1f5f9',
          paddingTop: '32px',
          width: '100%',
          zIndex: 10,
        }}
      >
        <div
          style={{
            color: '#0f172a',
            fontSize: '20px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          ⚖️ الديوان العمومي للتوثيق — وهران | Étude Publique Notariale — Oran
        </div>
        <div
          style={{
            color: '#059669',
            fontSize: '20px',
            fontWeight: 700,
          }}
        >
          lattab.vercel.app
        </div>
      </div>
    </div>,
    { ...size }
  );
}
