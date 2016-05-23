console.log('hallo 8!')

var time = new Date();
var data = [];

this.addEventListener('install', function(event){
  console.log('sync');
}.bind(this))

this.addEventListener('fetch', function(event){

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