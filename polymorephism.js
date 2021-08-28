// Intermediate function inheritance
function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
   console.log('Duplicate');
}


function Circle(radius,color){
   Shape.call(this,color); // calling to super
   this.radius = radius;

}

function Square(size){
    this.size = size;
 }

// To override a method, yoiu have to declare the function after the
//Intermediate fucntion calling (IT IS MANDATORY)

extend(Shape,Circle);
extend(Shape,Square);

Circle.prototype.duplicate = function(){
    console.log('Duplicate Circle');
}

Square.prototype.duplicate = function(){
    console.log('Duplicate Square');
}



const obj = [
    new Circle(12,'red'),
    new Square(14)
];

for(let n of obj)
n.duplicate();