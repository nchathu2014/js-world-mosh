class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    //Instance method (prototype)
    draw() {
        console.log('Draw');
    }

    //Static method are not belong to the Class, we can call static
    //methods with out creating an instance

    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}


const c = new Circle(1);
console.log(c);

const c1 = Circle.parse('{"radius":100}'); // Calling for static method,static methods are
//normallyu use for utilities related to the Class
//Not for Class related functionalities

console.log(c1);