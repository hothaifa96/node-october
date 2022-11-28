// let mixedObj= { 
//     oded:'name',
//     23: 'age',
//     jimny:'car',
// };
// function swap(obj){
//     let newObj={};
//     console.log(obj);
//     for(let key in obj ){
//         newObj[ obj[key] ] =key
//     }
//     return newObj
// }


// // console.log(swap(mixedObj));
// let mixedObj= { 
//     oded:'name',
//     23: 'age',
//     jimny:'car',
//     };
// // function swap(obj){
// //     let x = Object.entries(obj).map(([value,key]) => ([key,value]))
// //     return Object.fromEntries(x)

// // }

// // console.log(swap(mixedObj));

//  // .   -- - --- - -  8


//  let t1=null;
//  let t2=[5,11,2,3];
//  let t3={g:66}
// console.log(checkPlainObject(t1))
// console.log(checkPlainObject(t2))
// console.log(checkPlainObject(t3))
// function checkPlainObject(obj){
//     if(obj === null)
//         return false;
//     let keys= Object.keys(obj);
//     let values= Object.values(obj);
//     if(keys.length==0 &&
//          values.length==0 || 
//          Array.isArray(obj))
//             return false;
//     return true;
// }


// true  1
// false 0 
// truthy 7=> truthy 'oded' => truthy
// falsy   -2 => falsy  ''=> falsy 





// class ex

function Cat(name,age,red,green,blue,live ){
    this.name = name;
    this.age=age;
    this.color= new Color(red,green,blue);
    this.live=live;
}
function Color(red,green,blue){
    this.red=red;
    this.green=green;
    this.blue=blue;
}
function Sheep(id , bodyCount ,red,green,blue ){
    this.id = id;
    this.age=bodyCount;
    this.color=new Color(red,green,blue);
}

let c1 = new Cat('hatool',123,80,122,40,[]);
let c2 = new Cat('giboor',13,15,112,200,[true]);
let c3 = new Cat('tsahi',1,1,1,190,[true,true]);
let s1= new Sheep(1,55,3,15,100);
let s2= new Sheep(2,151,366,15,90);
let s3= new Sheep(3,544,362,115,10);

let pets=[c1,c2,c3,s1,s2,s3];

let blueAnimals=pets.filter(animal=> animal.color.blue > 100);
console.log(blueAnimals);
