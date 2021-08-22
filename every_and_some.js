
let numbers = [-5, -2, -3, -4, 1];


const allPositive = numbers.every(value => value >= 0);
const atLeastOnePositive = numbers.some(value => value >= 0);

console.log(numbers, allPositive, atLeastOnePositive);