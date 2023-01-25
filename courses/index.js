let mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect('mongodb://127.0.0.1:27017/course')
  .then( () => console.log('Connected to MongoDB'))
  .catch( err => console.log('coudnt connect to MogoDB') )
  mongoose.set('strictQuery', false);


const Course = mongoose.model('Course',new mongoose.Schema({
   name: {type:String} ,
   website: String,
   level : Number,
   auther: {
    type :mongoose.Schema.Types.ObjectId,
    unique:true,
    ref:'Auther'
   }
}))

const Auther = mongoose.model('Auther',new mongoose.Schema({
    name: String ,
    bio: String,
    age : Number
 }))



async function addAuther(name , bio , age){
    let auther = new Auther({name,bio,age})
    auther = await auther.save()
    console.log(auther)
}


async function addCourse(name , website , level,auther){
    let authers= await Auther.findById(auther)
    if(authers)
    {
        let course = new Course({name,website,level,auther})
        course = await course.save()
        console.log(course)
    }
    else
    console.log('invalid id')
}

async function listCourses(){
    let courses = await Course
    .find()
    .populate('auther','name -_id')
    .select('name auther')
    console.log(courses)
}



//addAuther('farkash hamadani','css margin and front end ' , 92);
//addCourse('bootstrap','farkash.com',10,'63ce47799ef2da1caf38a114')
listCourses()



       