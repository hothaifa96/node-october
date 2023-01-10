const mongoose = require('mongoose');



const Comment = new mongoose.model('comments', new mongoose.Schema({
    name: {type : String , required : true },
    body: {type:String , default:'i am here'}
}))


module.exports = Comment