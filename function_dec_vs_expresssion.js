// Function declaration
function walk() {
    console.log('walk');
}


/*
Function expression have tow variations
- Anonymous function expression
- Named function expression
*/

// Anonymous function expression
const run = function () {
    console.log('run');
}

// Named function expression
const runDemo = function runDemoFunction() {
    console.log('run demo');
}

run();
walk();
runDemo();

// You can assign function expression to a varibale and then use it

const test = runDemo;
test();


const test1 = walk;
test1();