//Greeting
console.log('Hello World For You..!');


//Variable declaration
let firstName = 'Nuwan';
let lastName = "Chathuranga";
console.log(firstName, lastName);

//Primitive Variables
/*
- String
- Number
- Boolean
- undefined
- null
- Symbol (ES6)
*/

let sampleName = "Sample"; // typeof string
let age = 39; // number
let isSelected = true; //boolean
let initialColor = undefined; // undefined
let finalColor = null; // object


// Reference Type variables

/*
- Object
- Function
- Array


4- Ways of creating objects
- Object Literals.
- New operator or constructor.
- Object.create method.
- Class.

*/

//Object Literal approch to create an object
let person = {
    name: 'Nuwan',
    age: 39,
    display: function () {
        return this.name + this.age
    }
};

//Dot notation
person.name = 'Chathu';

// Bracket notation is good to use if the selection property is setting in run time
let selection = 'name';
person[selection] = 'Someone else'

console.log(person)
console.log(person.display())


// Class. method of create an object
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


console.log(new Person('Dasuni', 36));

// New operator or constructor approach
function PersonNew(name, age) {
    this.name = name;
    this.age = age;
}

console.log(new PersonNew('Mevan', 4));


//============== Arrays==================

let scores = [1, 2, 3];

scores[3] = 100;
scores[4] = 'Nuwan';

console.log(scores);