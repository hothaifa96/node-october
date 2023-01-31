 const express = require('express');
 const http = require('http');
 const {Server} = require('socket.io');
 const cors = require('cors');


const app =express();
const server =http.createServer(app)

app.use(cors())

let users={}

const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000'},
        methods: ['GET','POST']
    })

io.on('connection',socket =>{
    console.log(socket.id)
    socket.on('join server',username =>{
    users[username]=socket.id
    console.log(users)
    io.emit('new user',users)
    })

    socket.on('join room',room =>{
        socket.join(room)
        socket.emit('joined',{message:'hello'})
    })
    socket.on('send message',message=>{
        console.table(message)
        socket.to(users[message.to]).emit('new message',message)
    })

})


server.listen(4000,()=> console.log('ready on port 4000'))