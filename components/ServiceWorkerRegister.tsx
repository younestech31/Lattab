'use client';
import { useEffect } from 'react';

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(reg) {
          console.log('SW registered successfully:', reg.scope);
        }).catch(function(err) {
          console.error('SW registration failed:', err);
        });
      });
    }
  }, []);
  return null;
}
