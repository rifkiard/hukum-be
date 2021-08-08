const express = require('express')
const socketIO = require('socket.io')

const app = express()
const port = 3000
const server = app.listen(port)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const io = socketIO(server, {
    cors: {
        origin: "*"
    }
})

io.on('connection', (socket) => {
    console.log(`user connected ${socket.id}`)
})