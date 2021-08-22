const numbers = [1, 2, 3, 4, 5];

//Solution:1
for (let number of numbers) {
    //console.log(number);
}


//Solution:2
numbers.forEach((number, index) => console.log(index, number))