var express = require('express');
var router = express.Router();
var http = require('http').Server(router);
var io = require('socket.io')(http);


router.get('/chatroom', function(req, res)  {
    console.log('chatPage');
    res.render('chat.hbs');
});



io.sockets.on('connection', function(socket) {
    
socket.on('send message', function(data){
       console.log('message sent');
io.sockets.emit('new message', {msg: data});
     });
  });

/*
http.listen(8601, function(){
  console.log('listening on *:8601');
});
*/


