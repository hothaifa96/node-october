const express = require('express')
const Joi = require('joi')

const app = express();

app.use(express.json()); // conver json to javascript and javascript to json


const animals=[
    {id:1,name:'chewawa the dog',color:'black'},
    {id:2,name:'shoun the sheep',color:'salmon'},
    {id:3,name:'jokono the puma',color:'white'},
    {id:4,name:'adi the cupra',color:'peachpuff'}
]


app.get('/', (req,res) =>{
    res.send('hodi :-the only impossible journey is the one you never begin')
});

//GET ALL ANIMALS 
app.get('/api/animals',(req,res)=>{
    res.send(animals);
});

// GET BY ID 
app.get('/api/animals/:id',(req, res)=>{
    //res.send(`localhost:${port}/api/animals/${req.params.id}?${'email'}=${req.query['email']}`)

    const animal= animals.find(a => a.id===parseInt(req.params.id))
    if(!animal)
        res.status(404).send('this id is not valid ')
    res.send(animal)

});

//ADD NEW ANIMAL 
app.post('/api/animals',(req,res)=>{
    const schema = {
        name: Joi.string().min(4).required(),
        color: Joi.required()
    };

    const results = Joi.validate(req.body,schema)
    

    if(results.error){
        // bad REQUEST 400
        res.status(400).send(results.error.details[0].message)
        return
    }
    const animal = {
        id:animals.length+1,
        name:req.body.name,
        color: req.body.color
    };
    animals.push(animal)
    res.send(animal)
});

app.put('/api/animals/:id',(req,res)=>{
    // search the animal 
    const animal= animals.find(a => a.id=== parseInt(req.params.id))
    if(!animal){
        res.status(404).send('this animal does not exist')
        return;
    }
    const schema={
        name: Joi.string().min(4).required(),
        color: Joi.required()
    }
    const results =  Joi.validate(req.body,schema);
    if(results.error){
        res.status(400).send(results.error.details[0].message)
    }

    const new_animal= {
        id: req.params.id,
        name: req.body.name,
        color: req.body.color
    }

    const index = animals.findIndex(e=> e.id === parseInt(req.params.id))
    animals.splice(index,1,new_animal)
    res.send(new_animal);


});


//DELETE 
app.delete('/api/animals/:id',(req,res)=>{
    const animal= animals.find(a => a.id=== parseInt(req.params.id))
    if(!animal){
        res.status(404).send('this animal does not exist')
        return;
    }

    const index = animals.findIndex(e=> e.id === parseInt(req.params.id))
    animals.splice(index,1)
    res.send('DONE');
})


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