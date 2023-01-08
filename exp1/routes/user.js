const _=require('lodash')
const bcrypt =require('bcrypt')
const express = require('express')
const {User,validate} = require('../Models/user')
const router = express.Router();


router.post('/', async (req, res) => {
  const {error} = validate(req.body)
  if(error) return res.status(400).send(error.details[0].message)
  
  let user = await User.findOne({email:req.body.email})
  if(user) return res.status(400).send('User already exsist ')

   
     user= new User( _.pick(req.body,['name','email','password']))
     const salt = await bcrypt.genSalt(10)
     user.password = await bcrypt.hash(user.password,salt)

    try{

        user = await user.save()    
    }
    catch(err){
        res.status(500).send('somethong went wrong')
    }    

    res.send(_.pick(user,['name','email']));
})


module.exports = router