const CACHE_NAME = 'zconnect-video-cache-v2';

// Base video identifiers (filename part) for matching
const VIDEO_FILES = [
  'actionfigur_1_yfeadi.mp4',
  'actionfigur_2_hgcnjp.mp4',
  'actionfigur_3_e3aiyt.mp4',
  'actionfigur_4_oxsn7v.mp4',
  'art_1_fh0hya.mp4',
  'art_2_fxgefp.mp4',
  'cloths_1_aa77pw.mp4',
  'cloths_2_pqh9fc.mp4',
  'cloths_3_qwtwx5.mp4',
  'cloths_4_bfxpjd.mp4',
  'vintagewatch_1_n7fq1z.mp4',
  'vintagewatch_2_owpzoh.mp4',
];

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing v2...');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Cache-first strategy for Cloudinary video requests
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Only intercept Cloudinary video requests
  if (!url.includes('cloudinary.com/dyolzaxiy/video')) return;

  // Check if this is one of our known video files
  const isOurVideo = VIDEO_FILES.some((file) => url.includes(file));
  if (!isOurVideo) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log('Service Worker: Cache hit:', url.split('/').pop());
        return cachedResponse;
      }

      console.log('Service Worker: Fetching:', url.split('/').pop());
      return fetch(event.request).then((networkResponse) => {
        // Only cache successful complete responses
        if (networkResponse.ok) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch((err) => {
        console.log('Service Worker: Fetch failed:', err);
        // Return empty response if offline and not cached
        return new Response('', { status: 503, statusText: 'Service Unavailable' });
      });
    })
  );
});
