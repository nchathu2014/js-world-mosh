/* // Circle
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function () {
    console.log('draw');
}

Circle.prototype.duplicate = function () {
    console.log('duplicate');
}


//Square

function Square(width, height) {
    this.width = width;
    this.height = height;
}

Square.prototype.duplicate = function () {
    console.log('duplicate');
}

const c = new Circle(10);
const s = new Square(10, 12);

console.log(c);
console.log(s); */

// In both Circle and Square have duplicate(), and we can eliminate it
// using the inheritance


//Shape
function Shape() { }
Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


Circle.prototype = Object.create(Shape.prototype);
Square.prototype = Object.create(Shape.prototype);

// Best practice is to reset the constructor, bcoz
// Circle.prototype.constructor => Shape()

//Circle.prototype.constructor = Circle;
//Square.prototype.constructor = Square;

// Circle
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function () {
    console.log('draw');
}

//Square

function Square(width, height) {
    this.width = width;
    this.height = height;
}



const c = new Circle(10);
const s = new Square(10, 12);

const sh = new Shape();

console.log(c);
console.log(s);
console.log(sh);