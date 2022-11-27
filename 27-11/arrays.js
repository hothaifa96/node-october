let arr=[1,4,9,3,2];

// every ----------------

// let is_pst=arr.every(val => val>0);
// let is_pst1=arr.every(function(val){
//      return val>0
// });

// filter--------------------
// let filtered = arr.filter(erech => erech%2==1 )


//mapping ----------------------

let fruits=['orange','apple','pineapple'];

// const items=fruits.map(fruit => '<li>'+ fruit+'</li>');


const newArr=arr.map(s=> 'hello');


// %3 == Fizz 
// %5 == Buzz 
// %5 and %3 FizzBuzz

let numbers=[];

for(i=1;i<=20; i++)
    numbers.push(i)

// let FizzBuzzArray=numbers.map( function(value){
//     if(value%3 == 0 && value%5==0)
//         return 'FizzBuzz'
//     else if( value%5==0)
//         return 'Buzz'
//     else if(value%3 == 0)
//         return 'Fizz'
//     else 
//         return value
// });

// let FizzBuzzArray2=numbers.filter(v=> v%3==0 ||v%5==0).map(value => value%3 == 0 && value%5==0 ? 'FizzBuzz' : value%5==0?'Buzz':value%3 == 0?'Fizz': value
// ).every(val=> typeof(val)=='string');



let array= [1,2,3,4,5];

const sum=array.reduce((accumulator,currentvalue )=> accumulator+currentvalue,0 )

// let s= 1;
// for(let val of array)
//     s*=val;

