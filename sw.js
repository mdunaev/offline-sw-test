console.log('hallo from service worker!')

this.addEventListener('install', function(event){
    console.log('installed!')
})

this.addEventListener('fetch', function(event){
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response("Request failed!");
    })
  );
})