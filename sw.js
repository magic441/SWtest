
// CODELAB: Update cache names any time any of the cached files change.
const FILES_TO_CACHE = [
  '/',
];

// CODELAB: Precache static resources here.
evt.waitUntil(
  caches.open(CACHE_NAME).then((cache) => {
    console.log('[ServiceWorker] Pre-caching offline page');
    return cache.addAll(FILES_TO_CACHE);
  })
);