console.log('hallo 7!')

var time = new Date();
var data = [];

this.addEventListener('install', function(event){
    setInterval(function(){
      fetch('data.json').then(function(dta){
        console.log(dta);
        data = dta;
        time = new Date();
      }.bind(this)).catch(function(err){
        console.log('err');
        console.log(err);
      });
    }, 1000);

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