const { generateKey } = require('crypto')
const express = require('express')
const Joi = require('joi')
const app = express()
const port = process.env.PORT || 3000; 

app.use(express.json())

const movies=[
    {id:1,
    name: 'node-js',
    genre:'horror', 
    length: 120 
}
]
//getAll
app.get('/movies', (req, res) => {
  res.send(movies)
})
//get
app.get('/movies/:id', (req, res) => {
    
  res.send(movies.find(m => m.id == req.params.id))
})
//post
app.post('/movies',  (req, res)=> {
    const {error} =validator(req.body)
    if(error){
        res.status(404).send(error.details[0].message)
        return;
    }
    movies.push({...req.body, id:movies.length+1})
    res.send(movies[movies.length-1])
})
//delete
app.delete('/movies/:id', (req, res)=> {
  const { id } = req.params;
  movies.filter( m => m.id != id)
  res.send(`Delete record with id ${id}`);
});
//put
app.put('/movies', function(req, res) {
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
app.delete('/movies', function(req, res) {
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))