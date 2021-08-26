/*
If it use inside a function of an object, it will refere to the object
if it inside a function 'this' will refere to the 'global'
window object in javascript and global object in node


NOTE:
But if we dealing with a constructor function, then

const car = new Car('honda');

here 'new' key word creates an empty object, {} first and assing properties to
that empty object

function Car(name){
 this.name = name;
}

in this case, 'this' key word referes to {} object


******IMPORTANT: 'this' will be change where it is wrapped in. inside a object function, or normal function
So be notice, look the 04 th example
*/

//01: 'this' inside a function in object
const person = {
    fname: 'Nuwan',
    lname: 'Chathu',
    walk() {
        console.log(this)
    }
};

person.walk();

// attched e method

person.run = function () {
    console.log(this);
}

person.run();


//02: 'this' inside a function

function test() {
    console.log(this);
}

//test(); // this -> window object


const test_again = function () {
    console.log(this);
}

test_again() //test(); // this -> NOT in window object



//03: Constructor function example

function Car(name) {
    this.name = name;
    this.walk = function () { }

    console.log(this);
}

const c = new Car('honda');


//04 ====================================

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (e) {
            console.log(this.title, e)
        }, this);
        /* here 'this' is immediately wrapped inside a anonymous function, so 'this' will not reprsenating
         the object 'person', instead it representing the window object
         
         we can pass the second argument to the anonymous function 'this'
         */

    },
    showTagsAgain() {
        this.tags.forEach(e => console.log(this.title, e))
    },
    __pvtShow() {
        this.tags.forEach(e => console.log('PVT', this.title, e))
    },

    publicShow() {
        this.__pvtShow();
    }
};

video.showTags();
video.showTagsAgain();
video.publicShow();