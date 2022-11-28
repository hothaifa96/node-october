// let orange={
//     name:'orange',
//     cal:15,
//     smell:'A+',
//     price: function (){
//         console.log('14$');
//     }
// };

// console.log(orange['price']());

// console.log( Object.entries(orange) );




// declare a point  object 
// attribures: 
//     x:
//     y:
// functions: 
//     getlength(){
//         return √ (x)^2 + (y)^2 
//     }



// let point = {
//     x:4,
//     y:3,
//     getLength:function(){
//         return Math.sqrt(
//             this.x**2+this.y**2
//         )
//     }
// };

// // // Factory function
// function createPoint(x,y){
//     return {
//         x,
//         y,
//     getLength:function(){
//         return Math.sqrt(
//             this.x**2+this.y**2
//             )
//         }
//     };
// }

//  let p1= createPoint(3,4);
// let p2= createPoint(2,7);
// p1.getLength();

// constructor 

// function Point(x=0,y=0){
//     //DATA
//     this.x=x;
//     this.y=y;
//     this.getLength= function(){
//                 return Math.sqrt(
//                     this.x**2+this.y**2
//                     )
//                 };
// }
// let p3= new Point(6,6);
// let p4= new Point(1,3);

// let p5 = new Point(3,5);

// p5.z=7;
// p5.x=1;
// p5.draw=()=> console.log('drawing');

// let p6 =new Point();

// let str = new String('hodi'); // '', "",``
// let bool = new Boolean();//true,false
// let numb = new Number();

//clone object
// let originPoint= new Point(1,19);
// let copyPoint= {};
// for(let key in originPoint)
//     copyPoint[key]=originPoint[key]
// originPoint['x']=14;

// let copy2 = Object.assign({},originPoint);
// let copy3={...originPoint}

// let q= ' they call  me \'tomer\' '

// console.log(q);



let game= 'san andres'
let name1 ='jiff'
let drink= 'milk'

let page = `welcome to the ${ game } `;



