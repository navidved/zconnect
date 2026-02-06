const CACHE_NAME = 'zconnect-video-cache-v1';

const VIDEO_URLS = [
  'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404430/actionfigur_1_yfeadi.mp4',
  'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770405239/actionfigur_2_hgcnjp.mp4',
  'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404481/actionfigur_3_e3aiyt.mp4',
  'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404506/actionfigur_4_oxsn7v.mp4',
  'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404642/art_1_fh0hya.mp4',
  'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404499/art_2_fxgefp.mp4',
  'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404540/cloths_1_aa77pw.mp4',
  'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404555/cloths_2_pqh9fc.mp4',
  'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404591/cloths_3_qwtwx5.mp4',
  'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404770/cloths_4_bfxpjd.mp4',
  'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404860/vintagewatch_1_n7fq1z.mp4',
  'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404545/vintagewatch_2_owpzoh.mp4',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Caching videos...');
      return cache.addAll(VIDEO_URLS);
    })
  );
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

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('cloudinary.com/dyolzaxiy/video')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log('Service Worker: Serving from cache:', event.request.url);
          return response;
        }
        console.log('Service Worker: Fetching from network:', event.request.url);
        return fetch(event.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  }
});
