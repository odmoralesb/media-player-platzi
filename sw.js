import 'regenerator-runtime/runtime'

const VERSION = "v1";


self.addEventListener('install', event => {
    event.waitUntil(precache());
})


self.addEventListener('fetch', event => {
    const request = event.request;

    //get
    if (request.method !== 'GET') {
        return;
    }


    //Buscar en cache
    event.respondWith(cachedResponse(request));



    //Actualizar el cache
    event.waitUntil(updateCache(request));


})


async function precache() {

    const cache = await caches.open(VERSION);

    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/plugins/AutoPause.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/BigBuckBunny.mp4',
        // '/assets/index.css',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js'
    ]);
}


async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}


async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}
