/*
Hoisting is uplift the declarative functions to the top.
Then you can call to the functions before the declaration.

Hoisting is ONLY effect to Declarative functions, NOT to fucntions expressions
*/


test();// Can call before the function definition because of the HOISTING
function test() {
    console.log('Test');
}

test_demo(); // cannot call before the function definition
const test_demo = function () {
    console.log('Test Demo');
}

