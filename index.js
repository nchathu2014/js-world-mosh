// const variables allows to modify it, BUT YOU CANNOT ASSIGN VALUES TO IT

const numbers = [1, 2, 3];
numbers.push(100);
numbers.pop();
//console.log(numbers);

//01. Adding elements to, begining, end, middle

//to the end
numbers.push(10, 20, 30);
//console.log(numbers);

// to the begining
numbers.unshift(100);

// to middle
numbers.splice(3, 0, 'a', 'b');

console.log(numbers);


// Finding Elements

const letters = ['A', 'B', 'A', 'C', 'D'];
const element = 'A'

const index = letters.indexOf(element);
const lastIndex = letters.lastIndexOf(element);

console.log(index, lastIndex);

//Checking an element is in the array
(index !== -1) ? console.log('FOUND') : console.log('NOT FOUND')

//A second way
console.log(letters.includes(element));

//Finding reference types in an array

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
];


/* const course = courses.find(function (course) {
    return course.name === 'b ';
}); */



const course = courses.find(course => course.name === 'b');

console.log(course);




















