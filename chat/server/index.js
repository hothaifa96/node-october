const express = require('express')
const app = express()
const http = require('http')
const {Server} = require('socket.io')
const cors = require('cors')

app.use(cors())

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        methods:["GET",'POST']
    }
})

io.on('connection',(socket)=>{
    console.log('client connected on '+ socket.id)

    socket.on('sendMessage',(data)=>{
        console.log(data.message)
        socket.join(data.room)
        socket.to(data.room).emit('receiveMessage',{message:data.message})
    })

})


server.listen(3030,()=>console.log('server RUNS'))

