// let numbers =[3,7,8] ;

// // END 
// numbers.push(9,10);

// // BEGINNING 
// numbers.unshift(1,2)

// //MIDDLE
// numbers.splice(2,0,4,5,6)
// console.log(numbers);

//find premitive types
// let numbers=[1,2,3,4,5,1]

// console.log(numbers.indexOf('hodi') != -1);
//console.log(numbers.includes(3));


// console.log(numbers.indexOf(1))
// console.log(numbers.indexOf(1,3))

// relative 

// define anew arraywith 3 objects
// each object should hava 3 attributesd   make model and color 
// print only the cupra cars from the  from the array 

// let cars = [
//     {make:'bmw',model:'x6',color:'balck'},
//     {make:'cupra',model:'a7',color:'red'},
//     {make:'cupra',model:'formentor',color:'white'}
// ];

// for (const car of cars) {
//     console.log(car.make=='cupra'?car:'');
// }

// find relative 

// let cars = [
//     {make:'bmw',model:'x6',color:'balck'},
//     {make:'cupra',model:'a7',color:'red'},
//     {make:'cupra',model:'formentor',color:'white'}
// ];

// const newPar = cars.findIndex(car=>car.make=='cupra',);

// console.log(newPar);



// let arr=[2,4,6,8,10];

// //END
// arr.pop();

// //BEGINNING
// arr.shift()

// console.log(arr);
// // MIDDLE
// arr.splice(2,1)

// console.log(arr);


// emptying array
// let arr4=[1,2,3,4,5];
//arr4=[];
//  while(arr4.length>0)
//     arr4.pop()
// arr4.length=0;
// arr4.splice(0,arr4.length);
// console.log(arr4);


//combaining arrays
// let a= [1,2,3];
// let b= [4,5,6];

// // let combain = a.concat(b);

// // console.log(combain);

// let comb=[...a,{a:'a'},...b,...a];
// console.log(comb);



// let arr7 = ['hamburger','3','hummus'];

// // for , for in , for of  , while , do while 


// arr7.forEach((element,index)=>{
//     if(element.includes('s'))
//         console.log(element+' in this index '+index);
// });


// let arr15=[1,2,3,4];

// let jo = arr15.join('');

// console.log(jo)


//sorting 
let courses=[
    { price:16000 , name:'Node' },
    { price: 23000 , name:'python' },
    { price: 15500 , name:'c#' },
    { price: 111500 , name:'c#' },
    { price: 500 , name:'c#' },
];
// courses.sort();
// courses.reverse()
courses.sort(function(a,b){
    // a>b ==> 1
    // a<b ==> -1
    // a===b ==> 0
    if(a.price < b.price)return -1;
    if(a.price > b.price)return 1;
    return 0;
});

courses.sort((a,b)=> a.price-b.price );
console.log(courses);

