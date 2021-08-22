const numbers = [1, 2, 3, 4, 5, 6, 7];

//last
const last = numbers.pop();

//first
const first = numbers.shift();

//middle
const middle = numbers.splice(2, 1)

console.log(middle, numbers);