const CACHE_NAME = 'gym-bros-tracker-v1';
const URLS_TO_CACHE = [
  '/',
  'index.html',
  // Add other files you want to cache here, like CSS, other JS files, or images.
  // For now, we'll keep it simple.
];

// Install the service worker and cache the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
