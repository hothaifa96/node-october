const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/',async (req,res)=>{
    let user = await User.findOne({email:req.body.email})
    if(!user)
        return res.status(400).send('username or password are invalid')
    const validPassword = await bcrypt.compare(req.body.password,user.password)

    validPassword? res.send(user.generateJWT()) : res.status(400).send('invalid username or password')
})

module.exports = router