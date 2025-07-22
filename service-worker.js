// This is a basic service worker.
const CACHE_NAME = 'gym-bros-cache-v1';
const urlsToCache = [
  '/',
  '/index.html'
  // You can add more files to cache here, like CSS or key images
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
