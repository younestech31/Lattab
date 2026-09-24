'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, padding: 0 }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            padding: '24px',
            backgroundColor: '#ffffff',
          }}
        >
          <div>
            <h1 style={{ fontSize: '64px', fontWeight: 800, color: '#059669', margin: '0 0 16px' }}>
              500
            </h1>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1f2937', margin: '0 0 8px' }}>
              حدث خطأ غير متوقع في الخادم
            </h2>
            <p style={{ fontSize: '16px', color: '#4b5563', margin: '0 0 24px' }}>
              Une erreur inattendue s&apos;est produite.
            </p>
            <button
              onClick={() => reset()}
              style={{
                backgroundColor: '#059669',
                color: '#ffffff',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              إعادة المحاولة / Réessayer
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
