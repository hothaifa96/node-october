const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/movies')
    .then(()=> console.log('database connected  successfully'))
    .catch( err => console.error('couldnt connect to the database',err))

// const moviesSchema = new mongoose.Schema({
//     name: String,
//     length: Number,
//     genre: [String],
//     date : { type : Date , default: Date.now },
//     active: Boolean
//     // mongo data type
//     // String 
//     // number
//     // Date
//     // Buffer --=> images videos audio
//     // boolean
//     // objectID
//     // array
// });
 
const Movies = mongoose.model('Movies', new mongoose.Schema({
    name: {
        type: String ,
        required: true,
        minlength : 2,
        maxlength : 255,
        //match: /pattern/
    },
    length: Number,
    genre: {
        type: String,
        required: true,
        enum : ['action','drama','comedy','fantasy','horror']
    },
    date : { type : Date , default: Date.now },
    active: Boolean,
    comments:{
        type: Array,
        validate: {
            validator: function(v){
                return  v.length >= 2
            },
            message:'a comments should be filled with at least 1 value'
        }
    }
}))

async function createMovie(){
    const movie = new Movies({
        name: 'it',
        length : 4.2,
        genre : 'horror',
        comments: undefined
    });
    try{
        const result =await movie.save() // insert the value to db
        console.log(result)
    }
    catch(err){
        console.log(err.message)
    }

}


async function getMovies(){
    // eq  equals
    // ne  not equals
    // gt  greater than
    // gte greater than or equals to
    // lt  less than
    // lte less than or equals to 
    // in  inside of
    // nin not in 

    // logical operators
    //or //and


    const pageNumber = 2;
    const pageSize= 2;
    const movies = await Movies
            //.find( { active: true } )
            // .find( {length : { $gte:1 , $lte: 2}})
            //.find({name:{$nin:['forest gang','deadpool']}})
            //.find()
            //.or([{name: 'daedpool'} , {length:{$gte:1.5}}])
            //.find({name:/^dead/ })//start with
            //.find({name: /pool$/}) //ends with
            //.find({name: /.*En.*/i}) // contains 
            .find()
            .skip((pageNumber-1)*pageSize)
            .limit(pageSize)// limit
            .sort({name: -1}) //sort
            .select({name:1,genre:1})// the shown attributes
            //.count(); 

    console.log(movies)
}

async function updateMovie(id){
     
    // query first 
     // find by id 
     // modify properies 
    // save()
        // const movie = await Movies.findById(id)
        // console.log(movie)
        // movie.active = false;
        // movie.name = 'deadpool 2';
        // console.log(movie);
        // const result = await movie.save();
        // console.log(result)
    // update the elemnt inside mongo 


    const result = await Movies.findByIdAndUpdate(id,{
        $set:{ 
            name: 'deadpool 3',
            active: true
        }
    });
    console.log(result)
}


async function deleteMovie(){
    const result = await Movies.deleteOne({name: /^g/i});
    console.log(result)
}

createMovie();
