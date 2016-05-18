console.log('hallo from service worker!')

this.addEventListener('install', function(event){
    console.log('installed!')
})

this.addEventListener('fetch', function(event){
  console.log('fetch')
  console.log(event)
  var response = new Response('<h1>Offline mode!</h1>')
  event.respondWith(response)
})