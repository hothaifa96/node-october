// let fruits=[1,null,undefined,'hello',true];
// console.log(fruits);// all the array
// console.log(fruits.length);// length the array
// console.log(fruits.indexOf('hello'));// the index of the value
// let x='BBB';
// fruits.push(5,x);//add a value to the end of the array
// console.log(fruits);// all the array

// console.log(fruits.pop());
// console.log(fruits[4]);

// fruits.shift();
// fruits.unshift('hello');
// console.log(fruits)

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// console.log(matrix[1][2])

// let arr1 = [1,2,3];
// let arr2 = ['a','b','c'];


// arr1= arr1.concat(arr2);

// console.log(arr1)

// let arr3=arr1.slice(2,5);
// // let arr3=arr1.slice(start index);
// //let arr3= arr3.slice(start index ,end index)

// arr1.splice(1,1,4,5,5,5,5,5)
// // arr.splice(start index , end index) included  delelete the elemnts 
// console.log(arr1)


// write a function that recives an array of names
//and sort the names a-z 

let names=['menachim','farkash','nftali','shahar','tertsa','fadi'];

names=sortFarkash(names);

function sortFarkash(names2){
    return names2.sort();
}

// write a function thats get an grades array as param
// the function return the average of the grades 
 
let grades = [100,70,50,10,11];
function calcAvg(g){
    let sum=0; 
    for(i=0;i<grades.length;i++){
        sum += grades[i];
    }
    return sum/grades.length;
}

console.log(  Math.round(calcAvg(grades))  );
//write a function that recives 6 length array and a number 
//the function must return a new array from index  zero to the input 

let arr5=[1,2,3,4,5,6];

console.log(cut(arr5,4));

function cut(arr,number){
    let newarr=arr.slice(0,number);
    return newarr;
}