function Circle(r) {
    this.r = r;
    this.draw = function () {
        console.log('draw');
    }
}

/**
 * Both c1 and c2 have the same draw method, so this is 
 * wasting memory in larger application.
 * 
 * We have to reduce this code repetition
 */

const c1 = new Circle(10);
const c2 = new Circle(10);
console.log(c1, c2);

/*
The solution to he above problem is, we can pass the
reusable property to the protype

Then it will save the memory, coz prototype will create only one copy

*/

function Person(name) {
    this.name = name;

    this.speak = function () {
        console.log('SPEAK');
    }
}

Person.prototype.greet = function () {
    console.log('Hellow', this.name);
    this.speak();
}

const p = new Person('Nuwan');
p.greet();

// We can override the methods in the base prototype object


console.log(p.toString());// this will not give an useful output, but we can override toString() as follows

Person.prototype.toString = function () {
    return `Hello ${this.name}, welcome to the world!!!`;
}


console.log(p.toString());// This will gives an meaningful output