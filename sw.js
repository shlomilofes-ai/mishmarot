// Service worker מינימלי - מאפשר התקנה כאפליקציה.
// לא שומר עותקים במטמון, כך שתמיד נטענת הגרסה העדכנית.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
