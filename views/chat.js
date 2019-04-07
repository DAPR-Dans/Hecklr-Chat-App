
var express = require('express');
var router = express.Router();
var  http = require('http').createServer(router);
var io = require('socket.io')(http);

<!--GET chat page-->
router.get('/chatroom', function(req, res, next)  {
    console.log('chatPage');
    res.render('chat');
});

<!--define socket on event and emit behaviour-->

io.sockets.on('connection', function(socket) {
    
socket.on('send message', function(data){
       console.log('message sent');
io.sockets.emit('new message', {msg: data});
     });
  });

