//1 
// ------------
// function findType(param){
//     return typeof(param);
// }
// let tt=findType(undefined);
// console.log(tt);


//2
// -----------
// let shekels = 300;
// let dollars=ilsToUsd(shekels);
// console.log(shekels+' is  = '+dollars);

// function ilsToUsd(shekels){
//     const rate = 3.41;
//     let dollars = shekels / rate;
//     return dollars;
// }
 // extra
// forex('₪',4)

// function forex(s1 ,s2, amount ){
//     if(s==='₪'){
//         return (amount/3.41 + '$')
//     }
// }



// //5 
// // -----------------------------------
// function IsPrime(number){
//     for(i=2;i<number;i++){
//         if(number %i == 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log( IsPrime(9) );

//4 
// ------------

// function isOdd( number){
//     return number%2==0;
// }

// console.log(isOdd(6));



// let x=6,y=10,z=7;

// function sortMyNumbers(a,b,c){
//     if(a>=b && a>=c){
//         console.log(a)
//         if(b>c){
//         console.log(b)
//         console.log(c)
//         }else{
//             console.log(c)
//             console.log(b)
//         }

//     }
//     else if(b>=a && b>=c){
//         console.log(b)
//         if(a>c){
//         console.log(a)
//         console.log(c)
//         }else{
//             console.log(c)
//             console.log(a)
//         }

//     }
//     else if(c>=b && c>=a){
//         console.log(c)
//         if(b>a){
//         console.log(b)
//         console.log(a)
//         }else{
//             console.log(a)
//             console.log(b)
//         }

//     }

// }

// sortMyNumbers(19,19,1)

// sortNumbers(1,9,4)
// function sortNumbers(a,b,c){
//     let arr = [a,b,c];
//     arr.sort();
//     console.log(arr);
// }

//7 
//------------
// for(i=1 ; i<16 ; i++){
//     if(i%4==0){
//         console.log(i+' divided by 4');
//     }else{
//         console.log(i+' not divided by 4')
//     }
// }

//8
// -----------

// for(i=1;i<=100;i++){
//     if( i%3!=0 && i%5!=0 ){
//         console.log(i);
//     }
//     else{   
//         if(i%3==0 && i%5!=0){
//             console.log('Fizz')
//         }else{
//             if (i%5==0 && i%3!=0){
//                 console.log('Buzz');
//             }
//             else{
//                 console.log('FizzBuzz')
//             }
//         }
//     }
// }

// let sum=0;
// for(i=1;i<21;i+=2){
//     sum+=i;
// }
// console.log(sum);

//1 3 5 7 9 11 13 15 17 19 
//2 4 6 8 10 12 14 16 18 20


//11


// let x = -100;
// if(x>50)
//     x++;
// else if(x<=-100)
//         x--;



// let y= -5;

// if(y<0)
//     console.log('negative');
// else
//     console.log('positive');

// y<0 ? console.log('negative') : console.log('positive');

//(boolean ex) ? //true block : false block;
// if(boolean ex) {
//     //true block
// }
// else{
//     //flase blocl
// }


// let x = y>0 ? 'yes': 'no';

// let x=0;
// if(y>0)
//     x='yes';
// else 
//     x='no';


// function demo(number){
//     return number>10 ? 'kawabanga' : 'skedoosh';
// }

// let ans= demo(11);
// console.log(ans)

// console.log(dateNow());

// function dateNow(){
//     let today = new Date();
//     today.setMonth(11)
//     console.log(today);
//     return (today.getDate() +'/'+((today.getMonth()<9)?'0'+(today.getMonth()+1):(today.getMonth()+1)));
// }



// let num = 123;
// console.log(num)
// flip(num)

// function flip(number){
//     let numberString=num.toString();
//     console.log(numberString);
//     let newnumber = '';

//     for(i=0 ; i<numberString.length;i++)
//         newnumber+=numberString.charAt(numberString.length-i-1);

//     console.log(newnumber)
// }


//12
// ------------
// let number =123078;
// let newNumber =0;

// while(number >0){
//     newNumber *= 10;
//     let ahadot = number % 10;
//     newNumber += ahadot;
//     number = Math.floor( number/10 );
// }

// console.log(newNumber)


// 'shotafa sheli'

// makeLegit('  hi  my name is hodi  ')
// function makeLegit(text){
//     let newtext='';
//     text=text.trim();
//     newtext+=text.charAt(0).toUpperCase();
//     for(i=1;i<text.length;i++){
//         if(text.charAt(i-1)==' '){
//             newtext+=text.charAt(i).toUpperCase();
//         }
//         else
//             newtext+=text.charAt(i);
//     }
//     console.log(newtext);
//}



// let line = 'moshe kawabanga hodi lama ben';
// function findBiggest(line){
//     let arr = line.split(' ');
//     let maxText='';
//     for(i=0 ; i <arr.length;i++){
//         if(arr[i].length>maxText.length)
//         maxText=arr[i]
//     }
//     return maxText;
// }
// let biggest = findBiggest(line);
// console.log(biggest);

