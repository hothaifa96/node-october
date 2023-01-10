const express = require('express');
const mongoose = require('mongoose');
const Comment = require('../models/comment')
const auth = require('../middleware/auth');
const router = express.Router();


router.get('/',async (req,res)=>{
    const comments = await Comment.find().select('-_id')
    res.send(comments)
})

router.post('/',auth,async (req,res)=>{
   let comment = new Comment({
    name:req.body.name,
    body: req.body.body
   })
   
   try{
    comment = await comment.save()
    }
   catch(err){
     return res.status(400).send(err.message)
    }

    res.status(201).send(comment)
})

module.exports = router