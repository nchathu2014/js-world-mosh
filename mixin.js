const canWalk = {
    walk: function () {
        console.log('Walk');
    }
};

const canEat = {
    eat: function () {
        console.log('Eat');
    }
};

const canSwim = {
    swim: function () {
        console.log('Swim');
    }
};

function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

//Object literal approach
const person = Object.assign({}, canWalk, canEat);
console.log('person', person);


// Constructor approach

function Person() { }

mixin(Person.prototype, canEat, canWalk);
const p = new Person();
console.log(p);


// If now, two kinds of objects added to the system, it is not complexing the system like Inheritance

function Fish() { }

mixin(Fish.prototype, canEat, canSwim);
const fish = new Fish();
console.log(fish);


