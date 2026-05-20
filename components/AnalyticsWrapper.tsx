'use client';

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from 'react';

export function AnalyticsWrapper() {
  const [hasConsent, setHasConsent] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('cookie-consent') === 'true') {
      setHasConsent(true);
    }
  }, []);
  
  if (!hasConsent) return null;
  return <Analytics />;
}
