let x = 5;
  // ---------------- for 
// for(i=0 ; i<5 ; i++){
//     console.log(i);
// }

// -------------------while 
// while(x>0){
//     console.log(x);
//     x--; 
// }

//------------------- dowhile


// do{
//     // loop body 
// }while(condition);


// let date = new Date();
// let sec=date.getSeconds();

// do{
//     console.log('Seconds '+sec);
//     sec++;
// }while(sec<30);


// ------------ for in 

// let obj = {
//     name:'yossi',
//     age:43,
//     address:'aqua park',
//     isActive:true,
//     eat: ()=>'eating'
// };


// for(let key in obj){
//     console.log(key+' + '+ obj[key]);
//     console.log(typeof(key));
//     obj[key]=1;
// }
 

            //[0,1,2,3,4,5]
// let numbers=[10,20,30,40,50,60];
// let numbers={
//      0:1
//     ,1:2
//     ,2:3
//     ,3:4
//     ,4:5
//     ,5:6
// };


// for(i=0;i<numbers.length;i++){
//     number[i]
// }

// for(let cell in  numbers){
//     console.log(numbers[cell])
// }



// -------------------- for of 

// let obj ={
//     name : 'yossi',
//     age: 15
// };



// for(let val of obj){
//     console.log(val);
// }


// let arr=['adi','akram','neta']

// for(let val of arr){
//     console.log(val)
// }
// let obj = {
//     name:'yossi',
//     age:[2,'sushi'],
//     married() {4}
// };


// for(let val of Object.entries(obj)){
//     console.log(val[1])
// }

// [ [ . ] . [ . ] . [ . ] . [ . ] . [ . ]  ] 


// break

// let x1 = 2;

// while(true){
//     x1++;
//     if(x1==10)
//         break;
//     console.log(x1)
// }
// console.log('outside :'+x1)


///////continue

for(i=0; i<10; i++){
    if(i==3)
        continue
        
    console.log(i)
}
