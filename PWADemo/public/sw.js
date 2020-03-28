const staticCacheName = 'site-static'
const asset = [
    '/',
    '/css/bootstrap.css',
    '/css/bootstrap.js',
    '/css/jquery-3.4.0.slim.min.js',
    '/css/popper.min.js',
    '/css/style.css',
    '/css/tooltip.min.js',
    '/img/icons',
    '/js/app.js',
    '/icon-384x384.png',
    '/index.html'   
];

//installing service worker
self.addEventListener('install',event => {
    console.log('Service worker has been installed');
     event.waitUntil(
    caches.open(staticCacheName).then(cache => {
        console.log('Caching shell assets');
        cache.addAll(asset);
    })
    );
});

//activate service worker
self.addEventListener('activate',event => {
    console.log('Service worker has been activated');
});


//fetch event
//To add on home screen
self.addEventListener('fetch',event => {
    console.log('fetch event fired',event);
    //To fetch cached data
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request);
        })
    );
});