// Service worker: network-first z fallbackiem na cache.
// Przy internecie zawsze świeża wersja, bez internetu — ostatnia zapisana.
// Dzięki temu poprawki widać od razu, a aplikacja działa w metrze.
const CACHE = 'polski-b1-v1';
const ZASOBY = [
  './', './index.html', './egzamin.js',
  './data/decl.js', './data/vocab.js', './data/personal.js',
  './data/gramatyka.js', './data/sluchanie.js', './data/pisanie.js',
  './manifest.webmanifest', './icon-192.png', './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ZASOBY).catch(()=>{})));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;   // fonts.googleapis itd. — bez pośrednictwa

  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.status === 200) {
          const kopia = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, kopia));
        }
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
