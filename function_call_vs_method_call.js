//'use strict'

function Circle() {
    this.draw = function () {
        console.log(this);
    }
}

const c = new Circle();
console.log(c);

//Method call
c.draw(); // 'this' represent the Circle Object


const draw = c.draw;
// Function call
draw(); // // 'this' represent the Window Object, in coz function calls 'this' will represent the global object, in this case 'window'

// if you use the 'strict' mode, by using 'use strict', calling window object by function call will be
// undefined. (this is for protecting the window object by mistakenly update it)



//=========================== ES6 Classes and 'this'======================
/**
 * In ES6 classes, the class body is 'strick' by default
 */

class Person {
    walk() {
        console.log(this);
    }
}


const p = new Person();
p.walk();

const walk = p.walk;
walk(); // Returns 'undefined' coz class body will be executing in the 'strick' mode