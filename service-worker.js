importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/6.2.2/workbox-sw.js')

workbox.routing.registerRoute(
    ({request}) =>request.destination == 'image',
    new workbox.startegies.CacheFirst()
)