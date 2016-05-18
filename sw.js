console.log('hallo from service worker!')

this.addEventListener('install', function(event){
    console.log('installed!')
})

this.addEventListener('fetch', function(event){
  console.log('fetch')
  console.log(event)
  event.respondWith(fetch(event.request).catch(function(err){
    console.log('offline')
    return new Response('Offline mode!');
  }))
})