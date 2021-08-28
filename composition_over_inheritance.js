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

//Object literal approach
const person = Object.assign({}, canWalk, canEat);
console.log(person);


// Constructor approach

function Person() { }

Object.assign(Person.prototype, canEat, canWalk);
const p = new Person();
console.log(p);


// If now, two kinds of objects added to the system, it is not complexing the system like Inheritance

function Fish() { }

Object.assign(Fish.prototype, canEat, canSwim);
const fish = new Fish();
console.log(fish);


