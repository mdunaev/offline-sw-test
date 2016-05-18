console.log('hallo from service worker!')

this.addEventListener('install', function(event){
    console.log('installed!')
})

this.addEventListener('fetch', function(event){
  event.respondWith(
    fetch(event.request.url+'#'+Math.random()).catch(function() {
      return new Response("<html><body><h1>OFFLINE</h1></body></html>");
    })
  );
})