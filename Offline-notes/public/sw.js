const CACHE_NAME = "offline-v1";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  //"/manifest.webmanifest",
  //"/vite.svg",
  "/assets/index-BZKipnks.js",   // ← change to actual filename from dist/assets
  "/assets/index-Dtn62Xmo.css",  // ← change to actual filename if it exists
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => {
      return cached || fetch(e.request);
    })
  );
});
