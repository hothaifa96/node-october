const express = require('express')
const Joi = require('joi')
const animal = require('./routes/animals')
const movie = require('./routes/movies')
const app = express();
const log = require("./middlewares/logger")
const authenticate = require("./middlewares/authentication")
const morgan=  require('morgan')

console.log(` this is the node env ${process.env.NODE_ENV}`) //und
console.log(app.get('env'))

app.use(express.json()); // conver json to javascript and javascript to json
app.use(log)
app.use(authenticate)
app.use(express.static('public'))
if (app.get('env') === 'development')
  app.use(morgan('tiny'))

app.use('/api/animals',animal);
app.use('/api/movies',movie);




//et('/api/checksum/:num1/:num2',(req,res)=>{
//onst number1= parseInt(req.params.num1);
//onst number2= parseInt(req.params.num2);
//onst actualAns= parseInt(req.query['answer']);
//
//f(number1+number2===actualAns)
//es.send('Positive')
//lse
//es.send('negative')
//


// PORT 
const port = process.env.PORT || 3000; 

app.listen(port, () => console.log(`active on ${port}`))