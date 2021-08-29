/*
In ES6 classes we can create private members of a class (properties and methods)
There are two approaches,

1 - Using Symbol
2- Using WeakMaps
*/

//Using Symbol

//Private properties
let _radius = Symbol();
let _color = Symbol();

let _draw = Symbol();

class Circle {
    constructor(radius, color) {
        this[_radius] = radius
        this[_color] = color;
    }

    [_draw]() {
        console.log('draw');
    }
}

const c = new Circle(1, 'red');
const keys = Object.getOwnPropertySymbols(c);

keys[0] = 100;
keys[1] = 'blue';
console.log(c);

