/*
Object literals is way of creating an Object

The problem with the object literal is, the methods, if you create another
object, you have to duplicate the same method inside that newly created 
object also.

if you found a buggy method, you have to correct them all the places that you
use the object.

To overcome this issue, Factory function introduced
*/


const circle = {

    //Properties
    radis: 1,
    location: {
        x: 0,
        y: 0
    },
    color: 'red',

    // Methods
    draw: function () {
        console.log('Draw');
    },

    move: function () {
        console.log('Move');
    }
};

circle.draw();
circle.move();