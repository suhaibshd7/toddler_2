const CACHE_NAME = 'arabic-learning-game-runtime-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter(name => name.startsWith('arabic-learning-game-runtime-') && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  const scope = new URL(self.registration.scope);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(scope.pathname)) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request, {ignoreSearch:true, ignoreMethod:true});
    if (cached) {
      if (request.method === 'HEAD') {
        return new Response(null, {status:200, headers:cached.headers});
      }
      const range = request.headers.get('Range');
      const type = cached.headers.get('Content-Type') || '';
      if (range && type.startsWith('audio/')) {
        const match = /^bytes=(\d*)-(\d*)$/i.exec(range.trim());
        if (match) {
          const data = await cached.arrayBuffer();
          const total = data.byteLength;
          let start = match[1] ? Number(match[1]) : 0;
          let end = match[2] ? Number(match[2]) : total - 1;
          if (!match[1] && match[2]) start = Math.max(0, total - Number(match[2]));
          end = Math.min(end, total - 1);
          if (start <= end && start < total) {
            const headers = new Headers(cached.headers);
            headers.set('Accept-Ranges','bytes');
            headers.set('Content-Length', String(end - start + 1));
            headers.set('Content-Range', 'bytes ' + start + '-' + end + '/' + total);
            return new Response(data.slice(start, end + 1), {status:206, headers});
          }
          return new Response(null, {status:416, headers:{'Content-Range':'bytes */' + total}});
        }
      }
      return cached;
    }
    return fetch(request);
  })());
});
