require('dotenv').config()

var io = require('socket.io')(process.env.PORT);

io.on('connection', function(socket){
  console.log('a user connected');
});