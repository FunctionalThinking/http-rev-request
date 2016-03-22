var io = require('socket.io')(8888);
io.set('transports', ['websocket'])
io.on('connection', function (socket) {
  socket.on('ferret', function (name, fn) {
    fn('sdf');
  });
});
