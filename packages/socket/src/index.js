import http from "http"
import express from "express"
import SocketIO from "socket.io"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = SocketIO(server)

app.get("/", function(req, res) {
  res.send(`Socket server is listening on *:${process.env.PORT}`)
})

io.on("connection", function(socket) {
  console.log("a user connected")
})

server.listen(process.env.PORT, function() {
  console.log("listening on *:", process.env.PORT)
})
