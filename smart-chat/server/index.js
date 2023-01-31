const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');

const app = express()
const server =http.createServer(app)
app.use(cors())
const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        methods:["GET",'POST']
    }
})



const users={}  


io.on('connection',socket=>{
    console.log(`socket connected ${socket.id}`)
    socket.on('join server',(username)=>{
        users[username] = socket.id
        io.emit('new user',users)
    })
    socket.on('join room',(room)=>{
        socket.join(room)
        socket.emit('joined',{message:'welcome'})
    })
    socket.on('send message',({content,to,sender})=>{
        var message={content,sender,to}
        console.table(message)
        console.log(users)
        socket.to(users[to]).emit("new message",message)
    })

})

server.listen(4000,()=>console.log('ready on port 4000'))