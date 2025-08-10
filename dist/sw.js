// Service Worker for Pestmark
const CACHE_NAME = 'pestmark-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Cache installation failed:', error);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        // Only cache GET requests and avoid caching Vite dev server files
        if (event.request.method === 'GET' && 
            !event.request.url.includes('@vite') && 
            !event.request.url.includes('@react-refresh') &&
            !event.request.url.includes('localhost:5174/src/')) {
          
          return fetch(event.request)
            .then((response) => {
              // Check if we received a valid response
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              // Clone the response
              const responseToCache = response.clone();

              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                })
                .catch((error) => {
                  console.log('Cache put failed:', error);
                });

              return response;
            })
            .catch((error) => {
              console.log('Fetch failed:', error);
              // Return a fallback response for navigation requests
              if (event.request.destination === 'document') {
                return caches.match('/index.html');
              }
              return new Response('Network error', { status: 503 });
            });
        }
        
        // For non-cacheable requests, just fetch normally
        return fetch(event.request).catch((error) => {
          console.log('Fetch failed for non-cacheable request:', error);
          return new Response('Network error', { status: 503 });
        });
      })
      .catch((error) => {
        console.log('Cache match failed:', error);
        return fetch(event.request).catch((fetchError) => {
          console.log('Final fetch attempt failed:', fetchError);
          return new Response('Service unavailable', { status: 503 });
        });
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).catch((error) => {
      console.log('Cache cleanup failed:', error);
    })
  );
});
