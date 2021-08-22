const first = [1, 2, 3];
const second = [4, 5, 6];

//Solution:1
const combined = first.concat(second);
console.log(combined);

//Solution:2

const combined_1 = [...first, ...second];
console.log('COMBINED_1: ', combined_1);

//Slicing
console.log(combined.slice(0, 3));
console.log(combined.slice(3));

console.log(combined.slice(2, 4));