let numbers = [1, 2, 3, 4, 5];
let another = numbers;
//Solution: 1
//numbers.length = 0;

//Solution: 2
//numbers.splice(0, numbers.length);

//Solution: 3
// This method can be use if the original array os not refering by other variable
// if it is, then that will not garbaged
//numbers = [];

//Soltion: 4
/* while (numbers.length > 0) {
    numbers.pop();
} */

console.log(numbers);