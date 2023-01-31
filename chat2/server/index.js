 const express = require('express');
 const http = require('http');
 const {Server} = require('socket.io');
 const cors = require('cors');
const mongoose = require('mongoose');
const {User} = require('./models/user');
const {Message} = require('./models/message');

const app =express();
const server =http.createServer(app)

app.use(cors())

mongoose.connect('mongodb://localhost:27017/smartchat')
.then(()=> console.log('connected'))
.catch(()=>console.log('error'))
mongoose.set('strictQuery', true);





let users={}

const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000'},
        methods: ['GET','POST']
    })

io.on('connection', socket =>{
    console.log(socket.id)
    socket.on('join server',async username =>{
    users[username]=socket.id

    let user =new User({socketId:socket.id,name:username})
     user = await user.save();

    io.emit('new user',await User.find()) 
    })

    socket.on('join room', async room =>{
        let user = await User.find({name:room}).select('socketId')[0]
        socket.join(user.socketId)
        socket.emit('joined',{message:'hello'})
    })
    socket.on('send message',async message=>{
        console.table(message)
        let userid = await User.find({name:message.sender})[0]._id
        let message = new Message({to:message.to,from:userid,content:message.content})
        message = await message.save()

        toSocketId= await Message.findById(message._id).populate('to')

        socket.to(toSocketId).emit('new message',await Message.find({to:message.to}))
    })

})


server.listen(4000,()=> console.log('ready on port 4000'))