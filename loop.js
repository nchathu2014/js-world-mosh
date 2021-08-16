/*
There are various types of looping expressions,

- for
- for in
- for of
- while
- do-while
*/
//Diplay Odd numbers in 1-10
//For
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        //  console.log('Odd numbers: ', i)
    }
}

//While

let i = 1;
while (i <= 10) {
    if (i % 2 !== 0) {
        console.log('Odd numbers: ', i)
    }
    i++;
}

//Do-While
let j = 1;
do {
    if (j % 2 !== 0) {
        console.log('Odd numbers: ', j)
    }
    j++;
} while (j <= 10)


// for-in
//This loop is using for iterate through an object

let person = {
    name: "Nuwan",
    age: 39
};

for (let key in person) {
    console.log(person[key]);
}

const arr = ['red', 'green', 'blue'];

for (let index in arr)
    console.log(arr[index]);

// But iterate through an array, FOR-OF is the best choice

for (let color of arr)
    console.log(color);


//FOR-OF loop for reading Array Object
let persons = [
    { name: 'A', age: 1 },
    { name: 'B', age: 2 },
    { name: 'C', age: 3 },
];

for (let person of persons) {
    console.log(person.name, person.age)
}

