// Intermediate function inheritance
function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

//Parent
function Shape(color){
    this.color = color;
}

//Child: Circle
function Circle(radius,color){
   Shape.call(this,color); // calling to super
   this.radius = radius;
}

//Child Square
function Square(size,color){
    Shape.call(this,color);
    this.size = size;
}


// This method is too noisy so, we comeup with a method called
//Intermediate function inheritance

extend(Shape,Circle);
extend(Shape,Square);

/* Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square; */

const c = new Circle(100,'blue');
const s = new Square(150,'orange');

console.log(c,s);