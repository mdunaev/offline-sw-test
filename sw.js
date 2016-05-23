console.log('hallo 2!')

var time = new Date();


this.addEventListener('install', function(event){
    setInterval(function(){
      fetch('https://api.lenta.ru/lists/latest').then(function(data){
        console.log(data);
      }).catch(function(err){
        console.log('err');
        console.log(err);
      });
    }, 1000);

})

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
      return new Response("<html><body><h1>OFFLINE 2</h1></body></html>", {
          headers: { 'Content-Type': 'text/html' }
        });
    })
  );
})