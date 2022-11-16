// let date = new Date();
// let sec= date/1000;

// let min = sec/60;
// let hours = min /60;
// let days =hours/24;
// let year= days/365;

// let date = new Date();

// console.log(date);//full date
// console.log(date.getDate());//day of the month
// console.log(date.getDay());//day of the week 0-6
// console.log(date.getFullYear());//year
// console.log(date.getHours());//hours
// console.log(date.getMinutes());//hours
// console.log(date.getSeconds());//seconds
// console.log(date.getMonth());//month 0-11
// console.log(date.getTime());//miliseconds from 1970
// console.log(date.getTimezoneOffset());//diff GMT to local
// console.log(date.getUTCHours());//hours utc

// let today= new Date();
// let odedBirthDay = 
// new Date('1999-08-04 00:00:00');
// console.log('hi my name oded and iam:'+(
//     today.getFullYear() - 
//     odedBirthDay.getFullYear()) );


// write function to calculate the days 
// left for hanuukah -> 19/12/2022 


function remainingDaysForHanoukah(d,m,y){
    let today = new Date();
    let hanukah = new Date(y,m-1,d);
    let sign=1;
    if (hanukah.getTime()-today.getTime()  < 0){
        sign=-1
    }
    let milseconds=(
        hanukah.getTime() - today.getTime() )*sign;
    console.log(Math.ceil(
        milseconds /(1000 *60 *60 *24)
        ));
}

remainingDaysForHanoukah(30,4,1999);





// write function to get the current 
// date in this format : DD/MM/YYYY

// function dateNewFormat(){
//     let d = new Date();
//     let formattedDate= d.getDate()+'/'
//     +(d.getMonth()+1)+'/'+d.getFullYear() ;
//     console.log(formattedDate);
// }
// function dateNewFormat2(){
//     let d = new Date();

//     let day= d.getDate();
//     let month= d.getMonth();
//     let year= d.getFullYear();

//     if (day < 10){
//         day='0'+day;
//     }
//     if (month < 10){
//         month='0'+month;
//     }

//     console.log(day+'/'+month+'/'+year);

// }



// dateNewFormat();
// dateNewFormat2();


