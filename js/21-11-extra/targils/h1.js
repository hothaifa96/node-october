//1
// function is_array(param){
//     return Array.isArray(param)
// }
// console.log(is_array(5))


//2 
// function outNumbers(arr,n){
//     if(n==null){
//         return arr[0];
//     }
//     else if(n>0){
//         return arr.slice(0,n);
//     }
//     else return [];

// }
// console.log(outNumbers([7,9,0,-2],-3));

// function Q3( arr, n=1){
//     let a=[];
//     for (i=0 ; i<n ;i++){
//         a.unshift(arr[arr.length-1-i])
//     }
//     console.log(a)
// }
// Q3([7,9,0,-2],3)

// let myColor = ['red', 'green', 'white', 'black']
// let stringColor = myColor.toString();
// console.log(stringColor);



//q5
// '12-445644' 

// function q5( number ){
//     let numberSTR=number.toString();
//     let temp='';
//     for(i=0 ; i<numberSTR.length;i++){
//         if(is_even(numberSTR.charAt(i-1))
//         && is_even(numberSTR.charAt(i)))
//             temp+='-'
//         temp+=numberSTR.charAt(i)
//     }
    
//     return temp.split('');

// }
// function is_even(number){
//     return (parseInt(number))%2==0;
// }

// console.log(q5('02254476964'))





// let arr6=['a','v','c','a','a','s','a','s','a','a'];
// function freq(array){
// let temparray=[];
// let counter=[];
// let big=0;
// for(i=0;i<array.length;i++){
//     if(temparray.indexOf(array[i])==-1){
// temparray.push(array[i]);
// counter.push(1);
//     }
//     else{
//         counter[temparray.indexOf(array[i])]+=1;
//     }
// }
// for(i=0;i<counter.length;i++){
//     if(counter[big]<counter[i])
//     big=i;
// }
// console.log('the mosr frequent number is: '+ temparray[big]+' with '+ counter[big]+' times');
// }

// freq(arr6);


// let array2 = [1,0,2,3,4,6];
// let array1 = [3,5,6,7,8,13,14,17];
// let array3 = [];

// if (array1.length>array2.length){
//     for(i=0; i<array2.length; i++){
//         array3[i]=array1[i]+array2[i];
//     }
//         array3= array3.concat(array1);
//         array3.splice(array2.length,array2.length);
//         console.log(array3);

//     }else{
//         for(i=0; i<array1.length; i++){
//             array3[i]=array1[i]+array2[i];
//         }
//         array3= array3.concat(array2);
//         array3.splice(array1.length,array1.length);
//         console.log(array3);
//     }






