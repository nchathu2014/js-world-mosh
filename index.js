//Contructor function approach

/* function Circle(radius) {
    this.radius = radius
    this.move = function () {
        console.log('Move');
    }
}

Circle.prototype.draw = function () {
    console.log('Draw');
}


const c = new Circle(1);
console.log(c); */

//ES6 Class approach

class Circle {
    constructor(radius) {
        this.radius = radius;
        //Inside the instance
        this.move = function () {
            console.log('Move');
        }
    }

    //Inside the prototype
    draw() {
        console.log('Draw');
    }
}

const c = new Circle(1);
console.log(c);