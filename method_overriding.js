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

// To override a method, yoiu have to declare the function after the
//Intermediate fucntion calling (IT IS MANDATORY)

extend(Shape,Circle);

Circle.prototype.duplicate = function(){
    Shape.prototype.duplicate.call(this);
    console.log('Duplicate Circle');
}

const c = new Circle(10,'blue');
console.log(c)