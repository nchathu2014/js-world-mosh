let numbers = [5, 2, 3, 4, 1];

//Sol:1

console.log(numbers.sort());

//Sol:2
console.log(numbers.reverse());



// Array object

const persons = [
    { id: 1, name: 'Nuwan' },
    { id: 2, name: 'Dasuni' },
    { id: 3, name: 'Mevan' },
];

/**
 * a > b => 1
 * a < b => -1
 * a = b
 */
const sortedPersons = persons.sort((a, b) => {
    const nameA = a.name.toLocaleLowerCase();
    const nameB = b.name.toLocaleLowerCase();

    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;

    return 0;
});

console.log(sortedPersons);