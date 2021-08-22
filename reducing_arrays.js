const numbers = [1, 2, 3, 4, 5];

//Sol:1
let sum = 0;
for (num of numbers)
    sum += num

console.log(sum)

//Sol:2
/* const sum1 = numbers.reduce((accumulator, currentValue) => {
    return accumulator += currentValue;
}, 0) */

//shorter

const sum1 = numbers.reduce(
    (accumulator, currentValue) => accumulator += currentValue);

console.log(sum1)