var io = require('socket.io-client');
var socket = io('http://localhost:8888',{transports:['websocket']}); // TIP: io() with no args does auto-discovery
socket.on('connect', function() { // TIP: you can avoid listening on `connect` and listen on events directly too!
  setInterval(()=>socket.emit('ferret', 'tobi', function(data) {
    console.log(data); // data will be 'woot'
  }), 1000)
});
socket.on('error', function(err) {
  console.error(err);
})