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

const user = {
    id: 1234,
    name: 'Nuwan'
};

//console.log(circle)

//01

let clone_circle = {};
for (let key in circle)
    clone_circle[key] = circle[key];

//console.log(clone_circle);

//02

const clone_circle_1 = Object.assign({}, circle, user);
//console.log(clone_circle_1);

//03
const clone_circle_2 = { ...circle, ...user };
console.log(clone_circle_2);