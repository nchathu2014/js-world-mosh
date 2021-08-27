/*
var => create function-scope variables
let/const => block-scoped 
*/


function start() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}


function start_again() {
    for (var i = 0; i < 5; i++) {
        console.log('Y', i);
        if (true) {
            let color = 'red';
        }

        console.log(color); // cannot access, color is block-scope
    }
    console.log('X', i); // can access, i is function-scope
}

const test = function () {
    console.log('test');
}

function test_again() {
    console.log('test_again');
}

//start_again()
//start();



// var is attached it variables to the window object which is a bad practice
/*

VARIABLES
=========
var color='red';

Think if you are using ann external third-party library and in that, if
uses a variable with the same name color='blue',

Then,

color='red' will be over-written by color='blue'

To avoid this, use let and const, because they are not attached to window object


FUNCTIONS
=========

fucntion declarations are added to window object, they are global by creation

but function expressions are not added to window object

*/