const express = require('express')

const router = express.Router()

const animals=[
    {id:1,name:'chewawa the dog',color:'black'},
    {id:2,name:'shoun the sheep',color:'salmon'},
    {id:3,name:'jokono the puma',color:'white'},
    {id:4,name:'adi the cupra',color:'peachpuff'}
]



//GET ALL ANIMALS 
router.get('/',(req,res)=>{
    res.send(animals);
});

// GET BY ID 
router.get('/:id',(req, res)=>{
    //res.send(`localhost:${port}//${req.params.id}?${'email'}=${req.query['email']}`)

    const animal= animals.find(a => a.id===parseInt(req.params.id))
    if(!animal)
        res.status(404).send('this id is not valid ')
    res.send(animal)

});

//ADD NEW ANIMAL 
router.post('/',(req,res)=>{
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

router.put('/:id',(req,res)=>{
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
router.delete('/:id',(req,res)=>{
    const animal= animals.find(a => a.id=== parseInt(req.params.id))
    if(!animal){
        res.status(404).send('this animal does not exist')
        return;
    }

    const index = animals.findIndex(e=> e.id === parseInt(req.params.id))
    animals.splice(index,1)
    res.send('DONE');
})


module.exports = router ;