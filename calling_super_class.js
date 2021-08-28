function Shape(color){
    this.color = color;
}


function Circle(radius,color){
   Shape.call(this,color); // calling to super
   this.radius = radius;

}



Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;



const c = new Circle(10,'blue');

console.log(c)