const express = require('express')
const Joi = require('joi')
const {Movie,validate} = require('../Models/movies');

const router = express.Router()

//getAll
router.get('/', async (req, res) => {
  const movies = await Movie.find().sort('name').select('name genre -_id');
  res.send(movies);
  })
  //get
  router.get('/:id', async (req, res) => { 
    const movie = await Movie.findById(req.params.id);
  res.send(movie);
  })
  //post
  router.post('/',  async (req, res)=> {
    const results = validate(req.body)
    if(results.error){
        // bad REQUEST 400
        res.status(400).send(results.error.details[0].message)
        return
    }

    let movie = new Movie({
        name: req.body.name,
        genre: req.body.genre,
        year: req.body.year,
        avalibale : req.body.avalibale
    });
    movie = await animal.save()
    res.send(animal)
  })
  //delete
  router.delete('/:id', async (req, res)=> {
    const { id } = req.params;
    const movie= await Movie.findByIdAndRemove(id)
    return movie;
  });
  //put
  router.put('/', async function(req, res) {
    const {error} = validate(req.body);
    
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    const movie = await Movie.findByIdAndUpdate(req.params.id,
        {
            $set:{
                name: req.body.name,
                year: req.body.year,
                genre: req.body.genre,
                avalibale: req.body.avalibale,
            }
            , new: true
        })
        
    if(!movie){
        res.status(400).send('this animal does not exist');
        return;
    }
    res.send(movie)
  });
  



module.exports = router