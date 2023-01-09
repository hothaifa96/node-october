
const mongoose = require('mongoose')
const Joi = require('joi')

const Movie = new mongoose.model('Movie', new mongoose.Schema({
    name:{
        type: String,
        required : true,
        minlength: 3 ,
        maxlength: 50
    },
    genre:{
        type: String,
        required : true,
        minlength: 3 ,
        maxlength: 10
    },
    avaliable:{
        type: Boolean,
        required : true,
    },
    year:{
        type: Number,
        required : true,
        validate:{
            validator:function(v){
                return v > 1900 && v < 2200
            },
            message:'age must be between 0 and 220'
        }
    }
}) ) ;


function vaidateMovie(Movie){
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        genre: Joi.string().min(3).max(10).required(),
        avaliable: Joi.boolean().required(),
        year: Joi.number().integer().min(1900).max(220).required()
    };

    return Joi.validate(Movie,schema)
}

exports.Movie= Movie;
exports.validate = vaidateMovie

 



