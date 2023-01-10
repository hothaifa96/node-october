const express = require('express');
const comments = require('./Routers/comments')
const users = require('./Routers/users')
const auth = require('./Routers/auth')
const mongoose = require( 'mongoose')
const cors = require('cors');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/comily')
    .then(()=> console.log(`mongo connected ...`))
    .catch(err => console.error(err.message))

const app = express();
app.use(express.json())
app.use(cors())
app.use('/api/comments',comments)
app.use('/api/users',users)
app.use('/api/auth',auth)



app.listen(4002 , ()=> console.log(`active on 4002`));