const express = require('express')
const Joi = require('joi')
const animal = require('./routes/animals')
const app = express();

app.use(express.json()); // conver json to javascript and javascript to json
app.use('/api/animals',animal);

const movies=[
    {id:1,
    name: 'node-js',
    genre:'horror', 
    length: 120 
  }
]



//getAll
app.get('/api/movies', (req, res) => {
  res.send(movies)
})
//get
app.get('/api/movies/:id', (req, res) => {
    
  res.send(movies.find(m => m.id == req.params.id))
})
//post
app.post('/api/movies',  (req, res)=> {
    const {error} =validator(req.body)
    if(error){
        res.status(404).send(error.details[0].message)
        return;
    }
    movies.push({...req.body, id:movies.length+1})
    res.send(movies[movies.length-1])
})
//delete
app.delete('/api/movies/:id', (req, res)=> {
  const { id } = req.params;
  movies.filter( m => m.id != id)
  res.send(`Delete record with id ${id}`);
});
//put
app.put('/api/movies', function(req, res) {
  const { id } = req.body;
  const {error} =validator(req.body)
    if(error){
        res.status(404).send(error.details[0].message)
        return;
    }
    movies.splice(movies.indexOf(a=>a.id==id),1,{...req.body, id:movies.length+1})
    res.send('updated');
});

//delete all
app.delete('/api/movies', function(req, res) {
  movies=[];
  res.send(`Done`);
});

let validator = (obj)=> {
    const schema = {
        name: Joi.string().required().min(3).max(10),
        id: Joi ,
        genre: Joi.string().required().min(3).max(10),
        length: Joi.number().required().integer().min(3).max(1000)
    }
    
    return Joi.validate(obj,schema) ;
    
}

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