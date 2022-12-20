class Shape{
    constructor(color){
        this.color=color;
    }
    move(){
        console.log('moving ...')
    }
}
class Circle extends Shape{
    constructor(radius,color){
        super(color)
        this.radius=radius;
    }
    draw(){
        console.log('drawing ...')
    }
}
class Rectangle extends Shape{
    constructor(a,b,color){
        super(color)
        this.a=a
        this.b=b
    }
    move(){
        super.move()
        console.log('Rectangle move')
    }
}

let c = new Circle(4,'red');
console.log(c.color);
const rec= new Rectangle(4,8,'Black');
rec.move()