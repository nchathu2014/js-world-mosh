
/**
 * Variables and Function expressions are not hoisted
 */


test();
x(); y();

function test() {
    console.log('test');
}

const number = 100;
console.log(number);

const x = function () {
    console.log('x');
};

const y = function Y() {
    console.log('y');
};



// If we consider classes, it also have two types of definitions
/**
 * 1-Class Declaration (commonly use)
 * 2-Class Expression
 * NOTE: Both are not Hoisted
 */

class Circle { } // Class Declaration

const Circle = class { //Class Expression

};



