const _radius= new WeakMap();


class Circle{
    constructor(radius){
        //DATA
        _radius.set(this,radius)
    }
    getRadius(){
        return _radius.get(this)
    }

    //Functionallity
    //instance method 
    draw(){
        console.log(this.getRadius()-4)
    }
}

const Circle2 = new Circle(6);
console.log(Circle2.getRadius())
const Circle3 = new Circle(2);
console.log(Circle3.getRadius())