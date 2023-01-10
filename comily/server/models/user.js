const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema({
    name: {type : String , required : true },
    email: {type:String , required : true },
    password: {type:String ,required : true  }
})
schema.methods.generateJWT=function() {
    return jwt.sign({_id:this._id , name:this.name},'Xmen')
}
const User = new mongoose.model('User',schema)


module.exports = User