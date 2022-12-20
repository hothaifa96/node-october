const _radius = Symbol()
const _area = Symbol()

class Circle{
    constructor(radius){
        //DATA
        this[_radius]=radius
        this[_area]=0
    }
    //Functionallity
    //instance method 
    draw(){
        console.log('drawing')
    }
    //static method
    static parse(str){
        const r = JSON.parse(str).radius;
        console.log(r)
        return new Circle(r);
    }
}

// let c3= Circle.parse('{"radius": 2}');
let Circle1= new Circle(5);
console.log(Object.getOwnPropertySymbols(Circle1)) // array of symbols
const key = Object.getOwnPropertySymbols(Circle1)[1] // the second symbol 
console.log(Circle1[key]);




