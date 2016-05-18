console.log('hallo from service worker!')

this.addEventListener('install', function(event){
    console.log('installed!')
})

this.addEventListener('fetch', function(event){
  console.log('fetch')
  console.log(event)
  return new Response('<h1>Offline mode!</h1>', {
      headers: { 'Content-Type': 'text/html' }
    });
})