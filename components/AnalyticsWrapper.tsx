'use client';

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from 'react';

export function AnalyticsWrapper() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check existing consent on mount
    if (localStorage.getItem('cookie-consent') === 'true') {
      setHasConsent(true);
    }
    // Listen for new consent granted during this session
    const handleConsent = () => setHasConsent(true);
    window.addEventListener('cookie-consent-granted', handleConsent);
    return () => window.removeEventListener('cookie-consent-granted', handleConsent);
  }, []);

  if (!hasConsent) return null;
  return <Analytics />;
}
