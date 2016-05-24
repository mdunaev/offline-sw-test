console.log('hallo 10!')

var time = new Date();
var data = [];

this.addEventListener('install', function(event){
  console.log('INSTALL');
  setInterval(1000*60, function(){
    console.log(new Date())
  });
}.bind(this))

this.addEventListener('activate', function(event){
  console.log('ACTIVATE');
});

this.addEventListener('message', function(event){
  console.log('MESSAGE');
});

this.addEventListener('sync', function(event){
  console.log('SYNC');
});

this.addEventListener('push', function(event){
  console.log('PUSH');
});


this.addEventListener('fetch', function(event){
  console.log('FETCH')

  var headers = new Headers();
  headers.append('pragma', 'no-cache');
  headers.append('cache-control', 'no-cache');

  var init = {
    method: 'GET',
    headers: headers,
  };

  event.respondWith(
    fetch(event.request.url, init).catch(function() {
      return new Response("<html><body><h1>OFFLINE 2 " + time + "</h1><br/> status "+ data.status +"</body></html>", {
          headers: { 'Content-Type': 'text/html' }
        });
    })
  );
})

this.addEventListener('periodicsync', function(event){
  console.log('SYNC');
});