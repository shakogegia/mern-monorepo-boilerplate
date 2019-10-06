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

// eslint-disable-next-line no-unused-vars
io.on("connection", socket => {
  console.log("a user connected")
})

server.listen(process.env.PORT, () => {
  console.log("listening on *:", process.env.PORT)
})
