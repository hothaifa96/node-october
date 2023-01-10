const express = require('express');
const User = require('../models/user');
const router = express.Router();
const _ = require('lodash');
const bcrypt = require('bcrypt');

router.post('/',async (req,res)=>{
    const reqUser =req.body;
    let user = await User.findOne({email:reqUser.email})
    if(user) return res.status(400).send('User aleready exsist')
    
    user= new User(_.pick(reqUser,['name','email','password']))
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password,salt )

    try{
        user = await user.save()
    }catch(err){
        return res.status(500).send('something went wrong')
    }
    res
        .header('x-auth-token',user.generateJWT())
        .header('access-control-expose-headers','x-auth-token')
        .status(201)
        .send(user)
})

module.exports = router