//OOP approach
// Object literal approch
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    isVisible: true,
    color: 'red',
    draw: function () {
        console.log(`${this.color} color, ${this.radius} radius circle draw in the location
        of x: ${this.location.x} and y:${this.location.y}`);
    }
};

circle.draw();

// Facftory function method

function createCircle(radius, name = 'Default') {
    return {
        radius,
        name,
        draw() {
            console.log('Draw', this.name);
        }
    }
}

const c1 = createCircle(1, 'blue');
c1.draw();

const c2 = createCircle(1, 'red');
c2.draw();

// Constructor Function method

function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw', this.radius);
    }
}

const c3 = new CreateCircle(6);
c3.draw();

// Natue of a Object
// we can add or remove properties form a object dynamically

const person = {
    name: "Nuwan"
};

//Adding
person.age = 39;
person.addr = "123,Street";

//Removing
delete person.name;

console.log('Person: ', person);


/*
*****************

Every object have a inbuilt constructor
*/

console.log(person.constructor);
