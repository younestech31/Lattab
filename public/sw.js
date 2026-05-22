const CACHE_NAME = 'notaire-lattab-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/fr',
  '/calculateur-prix-referentiel',
  '/fr/calculateur-prix-referentiel',
  '/manifest.json',
  '/favicon.ico',
  '/logo-small.webp',
  '/logo.webp',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Focus only on GET requests for caching
  if (event.request.method !== 'GET') {
    return;
  }

  // 1. Interactive Reference Price Calculator API Request Caching
  if (url.pathname.startsWith('/api/calculator-data')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const cacheCopy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, cacheCopy);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline, check Cache Storage for the exact match
          return caches.match(event.request);
        })
    );
    return;
  }

  // 2. Static Assets, Layout, Pages: Stale-While-Revalidate Strategy
  // This ensures lightning fast page loads and offline functional static resources
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const cacheCopy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, cacheCopy);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Silent catch to handle offline states without uncaught worker errors
        });

      return cachedResponse || fetchPromise;
    })
  );
});
