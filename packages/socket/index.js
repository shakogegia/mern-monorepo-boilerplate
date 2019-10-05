require('dotenv').config()

const io = require('socket.io')(process.env.PORT)

io.on('connection', socket => {
  console.log('a user connected')
})
