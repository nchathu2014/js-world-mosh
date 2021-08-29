const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    getRadius() {
        return _radius.get(this);
    }
}


const c = new Circle(1);
console.log(c);


// Instead of using a getRadius(), we can use getters and setters for that


const _name = new WeakMap();

class Person {
    constructor(name) {
        _name.set(this, name)
    }

    get name() {
        return _name.get(this);
    }

    set name(value) {
        if (typeof value !== 'string')
            throw new Error('Invalid name');

        _name.set(this, value);
    }
}


const p = new Person("Nuwan");
console.log(p);