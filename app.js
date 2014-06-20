var static = require('node-static');
var file = new static.Server('.');
server = require('http').createServer(function (request, response) {
    request.addListener('end', function () {
      file.serve(request, response);
    }).resume();
})
server.listen(60000);
var io = require('socket.io').listen(60001);
io.sockets.on('connection', function(socket){
  socket.on('message', function(){
    socket.emit("reply","hello");
  });
  socket.on('disconnect', function(){});
});

