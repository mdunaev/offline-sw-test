console.log('hallo from service worker!')

this.addEventListener('install', function(event){
  event.waitUntil( fucntion(){
      console.log('installed!')
    })
  )
})

this.addEventListener('fetch', function(event){
  console.log(event)
});