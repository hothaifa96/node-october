const express = require('express')
const movie = require('./routes/movies')
const app = express();
const log = require("./middlewares/logger")
const authenticate = require("./middlewares/authentication")
const morgan=  require('morgan')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const animal = require('./routes/animals');

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/movies').then(()=>console.log('connected'))
console.log(` this is the node env ${process.env.NODE_ENV}`) //und
console.log(app.get('env'))

app.use(express.json()); // conver json to javascript and javascript to json
app.use(log)
app.use(authenticate)
app.use(cors())
app.use(express.static('public'))
if (app.get('env') === 'development')
  app.use(morgan('tiny'))

app.use('/api/movies',movie);
app.use('/api/animals',animal);
app.use('/api/users',movie);
app.use('/api/auth',movie);


// PORT 
const port = process.env.PORT || 3030; 

app.listen(port, () => console.log(`active on ${port}`))