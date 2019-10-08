import http from "http"
import express from "express"
import SocketIO from "socket.io"
// import redis from "socket.io-redis"
import "dotenv/config"

const app = express()
const server = http.createServer(app)
const io = SocketIO(server)

// io.adapter(redis({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT }))

app.get("/", (_, res) => {
  res.send(`Socket server is listening on *:${process.env.PORT}`)
})

// eslint-disable-next-line no-unused-vars
io.on("connection", socket => {
  console.log("a user connected")
})

server.listen(process.env.PORT, () => {
  console.log("listening on *:", process.env.PORT)
})
