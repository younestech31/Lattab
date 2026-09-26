import { ImageResponse } from 'next/og';

export const revalidate = 86400;

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'حاسبة السعر المرجعي العقاري 2026 - Calculateur des Prix de Référence Immobilier 2026';

export default async function Image() {
  try {
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
            padding: '70px',
            fontFamily: 'sans-serif',
            color: '#ffffff',
          }}
        >
          {/* Top category & year badge */}
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
                padding: '10px 22px',
                borderRadius: '10px',
                fontSize: '22px',
                fontWeight: 600,
              }}
            >
              Bareme Officiel — Ministere des Finances Algerie
            </div>
            <div
              style={{
                background: '#f59e0b',
                color: '#064e3b',
                padding: '10px 24px',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '24px',
              }}
            >
              2026
            </div>
          </div>

          {/* Main Title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                fontSize: '52px',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#ffffff',
                maxWidth: '980px',
              }}
            >
              Calculateur des Prix de Reference Immobilier
            </div>
            <div
              style={{
                fontSize: '26px',
                color: '#d1fae5',
                fontWeight: 500,
              }}
            >
              Estimation des valeurs immobilieres officielles a Oran
            </div>
          </div>

          {/* Institutional Footer */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              paddingTop: '30px',
              width: '100%',
            }}
          >
            <div
              style={{
                color: '#ffffff',
                fontSize: '22px',
                fontWeight: 600,
              }}
            >
              Office Notarial de Office Notarial - Oran — Notaire a Oran
            </div>
            <div
              style={{
                background: '#f59e0b',
                color: '#064e3b',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '18px',
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
    return new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '630px',
            background: '#059669',
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '48px',
            fontWeight: 800,
            fontFamily: 'sans-serif',
          }}
        >
          Calculateur des Prix de Reference Immobilier 2026
        </div>
      ),
      { ...size }
    );
  }
}
