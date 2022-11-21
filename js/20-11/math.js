

// let x = 15 ;
// let y = 99 ;

// console.log(Math.floor(7.2));
// console.log(Math.ceil(7.00001));
// console.log(Math.round(7.49));
// console.log(Math.pow(16,0.5));
// console.log(Math.abs(-5));
// console.log(Math.sqrt(16));
// console.log(Math.max(2,4,1,6));
// console.log(Math.min(2,4,1,6));





let myMath = {
    PI:3.14,
    max:(a,b) => Math.max(a,b),
    min:(a,b) => Math.min(a,b),
    idOdd:(a) => a%2==1,
    lengthOfstring:(str) => str.length,
    // power(a,b){
    //     let temp=1;
    //     while(b>0){
    //         temp=temp*a;
    //         b--
    //     }
    //     return temp;
    // }
    // power: (a,b) => a**b
    power (a,b){
        let temp=1;
        for(i=1;i<=b;i++)
            temp*=a;
        return temp
    }
};

console.log(myMath.power(2,3))

