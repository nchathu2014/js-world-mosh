/*
In ES6 classes we can create private members of a class (properties and methods)
There are two approaches,

1 - Using Symbol
2- Using WeakMaps
*/

//Using WeakMap

//Private properties

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
        _move.set(this, () => console.log('Move'));
    }

    draw() {
        _move.get(this)();
        console.log(_radius.get(this));
    }
}

const c = new Circle(1);
console.log(c);



