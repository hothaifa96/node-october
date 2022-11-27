// let orange={
//     name:'orange',
//     cal:15,
//     smell:'A+',
//     price: function (){
//         console.log('14$');
//     }
// };

// console.log(orange['price']());

// console.log( Object.entries(orange) );




// declare a point  object 
// attribures: 
//     x:
//     y:
// functions: 
//     getlength(){
//         return √ (x)^2 + (y)^2 
//     }



let point = {
    x:4,
    y:3,
    getLength:function(){
        return Math.sqrt(
            this.x**2+this.y**2
        )
    }
}

console.log(point.getLength());