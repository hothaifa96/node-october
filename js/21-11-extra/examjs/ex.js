//1 
// json  javascript object notation 
// its an protocol to pass info in the web 
//  { "key": "value"}  -> [{ "name": "SHEML SHELKH" ,"age":17}]
// 

//2
// let arr =[1,-5,2,-5,6,-1,-6,-9];

// function clearArray(arr){
//     let len = arr.length
//     for(i=0; i<len;i++){
//         if(arr[i]<0){
//            arr.splice(i,1) ;
//            i--;
//         }
//     }
//     return arr;
// }
// console.log(clearArray(arr));

//3
// let number = (x)=> Math.floor(x)==x?'int':'double';


//4 

// function time(){
//     let date=new Date();

    
//     let print = 
//     date.getHours()>12 ?
//      (date.getHours()-12)+':'+date.getMinutes() +'pm' 
//     :
//     (date.getHours())+':'+date.getMinutes() +'am';
    
//     console.log(print)
// }

// time();


// let sign = (x) => x>=0 ? 'positive':'negative';


//14  

// let rec={a:16,b:85};

// function calcArae(obj){
//     return obj.a * obj.b;
// }

// console.log(calcArae(rec));


let x=100;
let sum=1;

while(x>0){
    sum*=x;
    x--;
}

console.log(sum);


