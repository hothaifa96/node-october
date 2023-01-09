const _=require('lodash')
const bcrypt =require('bcrypt')
const express = require('express')
const {User,validate} = require('../Models/user');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/me',auth,async(req,res)=>{
    const user = await User.findById(req.user._id).select('-password')
    res.send(user)

})

router.post('/', async (req, res) => {
    console.log(req.body)
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

    res.header('x-auth-token',user.generateJWT()).header("access-control-expose-headers",'x-auth-token').send(_.pick(user,['name','email']));
})


module.exports = router